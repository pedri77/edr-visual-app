#!/usr/bin/env python3
"""Consulta NVD para cada vendor y vuelca CVEs en data/nvd_cache.json.
Respeta rate limit sin API key: max 5 req / 30s => 7s entre peticiones.
"""
import urllib.request, urllib.parse, json, time, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "data" / "nvd_cache.json"

QUERIES = {
    "CrowdStrike": "CrowdStrike Falcon",
    "MDE": "Microsoft Defender for Endpoint",
    "SentinelOne": "SentinelOne",
    "Cortex XDR": "Cortex XDR",
    "Trend Micro": "Trend Micro Apex One",
    "Trellix": "Trellix Endpoint",
    "BitDefender": "Bitdefender GravityZone",
    "Carbon Black": "VMware Carbon Black",
    "Cybereason": "Cybereason",
    "ESET Inspect": "ESET Inspect",
    "Elastic": "Elastic Endpoint",
    "FortiEDR": "FortiEDR",
    "Harfanglab": "Harfanglab",
    "LimaCharlie": "LimaCharlie",
    "Qualys": "Qualys Cloud Agent",
    "Symantec SES Complete": "Symantec Endpoint Protection",
    "Sysmon": "Sysmon",
    "Cylance": "Cylance",
    "WatchGuard": "WatchGuard EPDR",
    "OpenEDR": "Comodo OpenEDR",
    "Uptycs": "Uptycs",
    "Auditd": "Linux auditd",
}

def nvd(keyword, limit=15):
    url = f"https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch={urllib.parse.quote(keyword)}&resultsPerPage={limit}"
    req = urllib.request.Request(url, headers={"User-Agent": "edr-visual-app/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())

def simplify(raw):
    out = []
    for v in raw.get("vulnerabilities", []):
        c = v["cve"]
        sev = "Unknown"
        score = None
        for key in ("cvssMetricV31", "cvssMetricV30", "cvssMetricV2"):
            arr = c.get("metrics", {}).get(key, [])
            if arr:
                sev = arr[0].get("cvssData", {}).get("baseSeverity") or arr[0].get("baseSeverity", "Unknown")
                score = arr[0]["cvssData"].get("baseScore")
                break
        out.append({
            "id": c["id"],
            "severity": (sev or "Unknown").title(),
            "score": score,
            "published": c.get("published", "")[:10],
            "description": c["descriptions"][0]["value"][:240],
        })
    return out

def main():
    cache = {}
    if OUT.exists():
        cache = json.load(open(OUT))
    total = len(QUERIES)
    for i, (vendor, query) in enumerate(QUERIES.items(), 1):
        if vendor in cache and len(cache[vendor]) > 0 and "--refresh" not in sys.argv:
            print(f"[{i}/{total}] SKIP {vendor} (cached {len(cache[vendor])})")
            continue
        print(f"[{i}/{total}] {vendor} <- '{query}' ...", end=" ", flush=True)
        try:
            raw = nvd(query)
            simple = simplify(raw)
            cache[vendor] = simple
            print(f"{len(simple)} CVEs")
        except Exception as e:
            print(f"ERR {e}")
            cache.setdefault(vendor, [])
        time.sleep(7)
    OUT.parent.mkdir(exist_ok=True)
    json.dump(cache, open(OUT, "w"), indent=2, ensure_ascii=False)
    print(f"OK -> {OUT}")

if __name__ == "__main__":
    main()
