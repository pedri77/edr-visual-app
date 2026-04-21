#!/usr/bin/env python3
"""Genera data.js consumiendo los JSON oficiales de tsale/EDR-Telemetry + metadata curada."""
import json, os, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw"
DATA = ROOT / "data"

STATUS_MAP = {
    "Yes": "yes",
    "No": "no",
    "Partially": "partial",
    "Pending Response": "pending",
    "Via EventLogs": "eventlog",
    "Via EnablingTelemetry": "enabling",
}

SCORE = {"yes": 1.0, "partial": 0.5, "enabling": 0.7, "eventlog": 0.6, "pending": 0.0, "no": 0.0, "na": None}

OS_FILES = {
    "windows": "EDR_telem_windows.json",
    "linux": "EDR_telem_linux.json",
    "macos": "EDR_telem_macOS.json",
}

PARTIAL_FILES = {
    "windows": "partially_value_explanations_windows.json",
    "linux": "partially_value_explanations_linux.json",
    "macos": "partially_value_explanations_macOS.json",
}


def load_os(os_name):
    rows = json.load(open(RAW / OS_FILES[os_name], encoding="utf-8"))
    # forward-fill category
    cat = None
    features = []
    vendors = []
    for row in rows:
        c = row.get("Telemetry Feature Category")
        if c:
            cat = c
        sub = row.get("Sub-Category")
        if not sub:
            continue
        entry = {"category": cat, "sub": sub, "values": {}}
        for k, v in row.items():
            if k in ("Telemetry Feature Category", "Sub-Category") or k.startswith("Unnamed"):
                continue
            if v is None:
                entry["values"][k] = "na"
            else:
                entry["values"][k] = STATUS_MAP.get(str(v).strip(), "na")
                if k not in vendors:
                    vendors.append(k)
        features.append(entry)
    return features, vendors


def load_mitre():
    try:
        return json.load(open(RAW / "mitre_att&ck_mappings.json", encoding="utf-8"))
    except Exception:
        return []


# MITRE ATT&CK Data Sources (stable IDs, nombre oficial + tactics principales cubiertas)
# Fuente: https://attack.mitre.org/datasources/
ATTACK_DATA_SOURCES = {
    "DS0002": {"name": "User Account", "description": "Eventos sobre cuentas de usuario: alta, modificacion, autenticacion", "tactics": ["Initial Access", "Persistence", "Privilege Escalation", "Credential Access"]},
    "DS0003": {"name": "Scheduled Job", "description": "Tareas programadas creadas, modificadas, ejecutadas", "tactics": ["Execution", "Persistence", "Privilege Escalation"]},
    "DS0005": {"name": "WMI", "description": "Consultas y suscripciones WMI (Windows)", "tactics": ["Execution", "Persistence", "Lateral Movement"]},
    "DS0009": {"name": "Process", "description": "Creacion, terminacion, acceso, modificacion y tampering de procesos", "tactics": ["Execution", "Defense Evasion", "Privilege Escalation", "Discovery"]},
    "DS0011": {"name": "Module", "description": "Carga de modulos / DLLs / librerias", "tactics": ["Execution", "Persistence", "Defense Evasion"]},
    "DS0012": {"name": "Script", "description": "Ejecucion de scripts (PowerShell, bash, etc.)", "tactics": ["Execution"]},
    "DS0013": {"name": "Sensor Health", "description": "Estado y telemetria del propio agente EDR", "tactics": ["Defense Evasion"]},
    "DS0016": {"name": "Drive", "description": "Montaje/desmontaje de unidades, virtual disks", "tactics": ["Initial Access", "Lateral Movement"]},
    "DS0017": {"name": "Command", "description": "Lineas de comando ejecutadas", "tactics": ["Execution"]},
    "DS0019": {"name": "Service", "description": "Creacion, modificacion, inicio, parada de servicios", "tactics": ["Execution", "Persistence", "Privilege Escalation"]},
    "DS0022": {"name": "File", "description": "Creacion, apertura, borrado, modificacion, renombrado de archivos", "tactics": ["Execution", "Defense Evasion", "Exfiltration", "Impact"]},
    "DS0023": {"name": "Named Pipe", "description": "Creacion y conexion a named pipes", "tactics": ["Lateral Movement", "Command and Control"]},
    "DS0024": {"name": "Windows Registry", "description": "Modificacion de claves/valores del registro de Windows", "tactics": ["Persistence", "Privilege Escalation", "Defense Evasion"]},
    "DS0026": {"name": "Active Directory", "description": "Eventos de AD: cambios, consultas, credentials", "tactics": ["Credential Access", "Discovery", "Lateral Movement"]},
    "DS0027": {"name": "Driver", "description": "Carga, descarga, modificacion de drivers del kernel", "tactics": ["Persistence", "Privilege Escalation", "Defense Evasion"]},
    "DS0028": {"name": "Logon Session", "description": "Inicios y cierres de sesion", "tactics": ["Initial Access", "Lateral Movement", "Persistence"]},
    "DS0029": {"name": "Network Traffic", "description": "Conexiones TCP/UDP, DNS, URL, descargas", "tactics": ["Command and Control", "Exfiltration", "Lateral Movement"]},
    "DS0007": {"name": "Image", "description": "Imagenes de contenedores/VM", "tactics": ["Execution", "Persistence"]},
}


def compute_attack_coverage(features, vendors, mitre_mappings):
    """Para cada vendor, calcula cobertura por Data Source ATT&CK.
    sub_to_ds mapea (category, sub) -> lista de data source IDs.
    Cobertura = media ponderada de status (Yes=1, Partial=0.5, etc.) de las features
    que tocan ese data source.
    """
    sub_to_ds = {}
    last_cat = ""
    for row in mitre_mappings:
        cat = row.get("Telemetry Feature Category") or last_cat
        last_cat = cat or last_cat
        sub = row.get("Sub-Category", "")
        mitre = row.get("MITRE ATT&CK Mappings", "") or ""
        ds_ids = set()
        for m in re.finditer(r"DS\d{4}", mitre):
            ds_ids.add(m.group(0))
        if sub and ds_ids:
            sub_to_ds[sub] = sorted(ds_ids)

    # Por vendor: sumar por data source
    coverage = {}
    for v in vendors:
        per_ds = {}
        for f in features:
            ds_list = sub_to_ds.get(f["sub"], [])
            if not ds_list:
                continue
            status = f["values"].get(v, "na")
            s = SCORE.get(status)
            if s is None:
                continue
            for ds in ds_list:
                per_ds.setdefault(ds, []).append(s)
        coverage[v] = {
            ds: {
                "score": round(sum(vals) / len(vals) * 100, 1),
                "features": len(vals),
            }
            for ds, vals in per_ds.items()
        }
    return coverage, sub_to_ds


def load_partials(os_name):
    try:
        return json.load(open(RAW / PARTIAL_FILES[os_name], encoding="utf-8"))
    except Exception:
        return {}


def compute_scores(features, vendors):
    """Score por vendor = media de los valores aplicables."""
    scores = {}
    for v in vendors:
        total = 0.0
        count = 0
        for f in features:
            val = f["values"].get(v, "na")
            s = SCORE.get(val)
            if s is None:
                continue
            total += s
            count += 1
        scores[v] = {"score": round(total / count * 100, 1) if count else 0, "counted": count}
    return scores


def merge_cves(canonical, meta, nvd_cache):
    """Combina CVEs curados en metadata + CVEs automaticos de NVD. Dedup por ID."""
    seen = {}
    for c in meta.get("notableCves", []):
        seen[c["id"]] = {
            "id": c["id"],
            "severity": c.get("severity", "Unknown"),
            "note": c.get("note", ""),
            "source": "curated",
        }
    for c in nvd_cache.get(canonical, []):
        if c["id"] in seen:
            # enrich curated with NVD data
            seen[c["id"]].update({
                "score": c.get("score"),
                "published": c.get("published"),
                "description": c.get("description"),
            })
            continue
        seen[c["id"]] = {
            "id": c["id"],
            "severity": c.get("severity", "Unknown"),
            "score": c.get("score"),
            "published": c.get("published"),
            "description": c.get("description", ""),
            "note": "",
            "source": "nvd",
        }
    sev_rank = {"Critical": 0, "High": 1, "Medium": 2, "Low": 3, "Unknown": 4}
    return sorted(seen.values(), key=lambda x: (sev_rank.get(x["severity"], 5), x["id"]), reverse=False)


def merge_incidents(canonical, meta, incidents_db):
    """Une incidentes curados de metadata + de incidents.json."""
    combined = []
    seen = set()
    for i in meta.get("incidents", []) + incidents_db.get(canonical, []):
        key = (i.get("date", ""), i.get("title", ""))
        if key in seen:
            continue
        seen.add(key)
        combined.append(i)
    combined.sort(key=lambda x: x.get("date", ""), reverse=True)
    return combined


def load_optional(name):
    p = DATA / name
    if p.exists():
        return json.load(open(p, encoding="utf-8"))
    return {}


def main():
    metadata = json.load(open(DATA / "vendor_metadata.json", encoding="utf-8"))
    vendor_meta = metadata["vendors"]
    nvd_cache = load_optional("nvd_cache.json")
    incidents = load_optional("incidents.json")

    mitre_mappings = load_mitre()
    by_os = {}
    all_vendors = set()
    for os_name in OS_FILES:
        feats, vendors = load_os(os_name)
        scores = compute_scores(feats, vendors)
        attack_cov, sub_to_ds = compute_attack_coverage(feats, vendors, mitre_mappings)
        by_os[os_name] = {
            "features": feats,
            "vendors": vendors,
            "scores": scores,
            "partials": load_partials(os_name),
            "attackCoverage": attack_cov,
            "subToDs": sub_to_ds,
        }
        all_vendors.update(vendors)

    # normalize vendor identity: Carbon Black Cloud -> Carbon Black
    alias = {}
    for v, meta in vendor_meta.items():
        if "aliasOf" in meta:
            alias[v] = meta["aliasOf"]

    vendors_full = []
    for v in sorted(all_vendors):
        canonical = alias.get(v, v)
        meta = vendor_meta.get(canonical, {})
        if meta.get("aliasOf"):
            meta = vendor_meta.get(meta["aliasOf"], {})
        vendors_full.append({
            "id": v,
            "canonical": canonical,
            "name": v,
            **{k: meta.get(k, "") for k in [
                "color", "website", "product", "productUrl", "docsUrl", "logo",
                "gartner", "forrester", "ens", "strengths", "cautions"
            ]},
            "notableCves": merge_cves(canonical, meta, nvd_cache),
            "incidents": merge_incidents(canonical, meta, incidents),
            "perOs": {
                os_name: {
                    "present": v in by_os[os_name]["vendors"],
                    "score": by_os[os_name]["scores"].get(v, {}).get("score", 0),
                } for os_name in OS_FILES
            }
        })

    from datetime import datetime, timezone
    payload = {
        "source": "https://github.com/tsale/EDR-Telemetry",
        "lastImport": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "vendors": vendors_full,
        "os": by_os,
        "mitre": mitre_mappings,
        "attackDataSources": ATTACK_DATA_SOURCES,
        "statusLegend": {
            "yes": {"label": "Implementado", "icon": "OK", "color": "#1f9d55"},
            "no": {"label": "No implementado", "icon": "X", "color": "#b33a3a"},
            "partial": {"label": "Parcial", "icon": "~", "color": "#e0a106"},
            "pending": {"label": "Pendiente respuesta", "icon": "?", "color": "#6b6b6b"},
            "eventlog": {"label": "Via EventLogs", "icon": "L", "color": "#3b6bb8"},
            "enabling": {"label": "Via habilitacion", "icon": "E", "color": "#7a56c2"},
            "na": {"label": "No aplica", "icon": "-", "color": "#c7c7c7"},
        },
    }

    out = ROOT / "data.js"
    with open(out, "w", encoding="utf-8") as f:
        f.write("// Auto-generado por scripts/build_data.py. NO editar a mano.\n")
        f.write("// Fuente: tsale/EDR-Telemetry + data/vendor_metadata.json\n")
        f.write("window.EDR_DATA = ")
        json.dump(payload, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"OK -> {out} ({out.stat().st_size} bytes, {len(vendors_full)} vendors)")


if __name__ == "__main__":
    main()
