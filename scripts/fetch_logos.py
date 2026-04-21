#!/usr/bin/env python3
"""Descarga logos locales por vendor en assets/logos/.
Estrategia en cascada:
  1. apple-touch-icon.png / apple-touch-icon-180x180.png del host oficial
  2. favicon.ico del host oficial
  3. Google S2 favicons (siempre PNG 128x128)
Actualiza vendor_metadata.json para apuntar a la ruta local.
"""
import json, urllib.request, urllib.parse, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets" / "logos"
META = ROOT / "data" / "vendor_metadata.json"

ASSETS.mkdir(parents=True, exist_ok=True)

UA = {"User-Agent": "Mozilla/5.0 edr-visual-app/1.0"}

# vendor canonical -> (domain, override_slug)
VENDORS = {
    "CrowdStrike": "www.crowdstrike.com",
    "MDE": "www.microsoft.com",
    "SentinelOne": "www.sentinelone.com",
    "Cortex XDR": "www.paloaltonetworks.com",
    "Trend Micro": "www.trendmicro.com",
    "Trellix": "www.trellix.com",
    "BitDefender": "www.bitdefender.com",
    "Carbon Black": "www.broadcom.com",
    "Cybereason": "www.cybereason.com",
    "ESET Inspect": "www.eset.com",
    "Elastic": "www.elastic.co",
    "FortiEDR": "www.fortinet.com",
    "Harfanglab": "harfanglab.io",
    "LimaCharlie": "www.limacharlie.io",
    "Qualys": "www.qualys.com",
    "Symantec SES Complete": "www.broadcom.com",
    "Sysmon": "learn.microsoft.com",
    "Cylance": "www.blackberry.com",
    "WatchGuard": "www.watchguard.com",
    "OpenEDR": "www.openedr.com",
    "Padvish XDR": "padvish.com",
    "Uptycs": "www.uptycs.com",
    "Auditd": "github.com",
    "C-Prot": "c-prot.com",
    "Phorion": "phorion.com",
}

SLUG = {
    "MDE": "defender",
    "Cortex XDR": "paloalto",
    "Trend Micro": "trend-micro",
    "ESET Inspect": "eset",
    "Carbon Black": "carbonblack",
    "Symantec SES Complete": "symantec",
    "Padvish XDR": "padvish",
    "Auditd": "auditd",
}


def slug(name):
    return SLUG.get(name, name.lower().replace(" ", "-"))


def try_get(url, timeout=12):
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=timeout) as r:
            data = r.read()
            if len(data) < 200:
                return None
            return data
    except Exception:
        return None


def detect_ext(data):
    if data[:4] == b"\x89PNG":
        return "png"
    if data[:2] == b"\xff\xd8":
        return "jpg"
    if data[:4] == b"\x00\x00\x01\x00":
        return "ico"
    if data[:5] == b"<?xml" or b"<svg" in data[:200]:
        return "svg"
    return "png"  # default


def fetch_logo(name, domain):
    s = slug(name)
    # try apple-touch-icon first (usually 180x180 PNG, best quality)
    candidates = [
        f"https://{domain}/apple-touch-icon.png",
        f"https://{domain}/apple-touch-icon-180x180.png",
        f"https://{domain}/apple-touch-icon-precomposed.png",
        f"https://{domain}/favicon.ico",
        f"https://{domain}/favicon.png",
        f"https://www.google.com/s2/favicons?sz=128&domain={urllib.parse.quote(domain)}",
    ]
    for url in candidates:
        data = try_get(url)
        if data and len(data) > 200:
            ext = detect_ext(data)
            out = ASSETS / f"{s}.{ext}"
            out.write_bytes(data)
            return f"assets/logos/{s}.{ext}", url
    return None, None


def main():
    meta = json.load(open(META))
    changed = 0
    missing = []
    for name, domain in VENDORS.items():
        existing = meta["vendors"].get(name, {})
        if existing.get("aliasOf"):
            continue
        local, src = fetch_logo(name, domain)
        if local:
            existing["logo"] = local
            meta["vendors"][name] = existing
            changed += 1
            print(f"OK  {name:25s} -> {local}  ({src.split('/')[2]})")
        else:
            missing.append(name)
            print(f"MISS {name}")
    # Carbon Black Cloud alias inherits
    if "Carbon Black Cloud" in meta["vendors"] and "Carbon Black" in meta["vendors"]:
        meta["vendors"]["Carbon Black Cloud"]["logo"] = meta["vendors"]["Carbon Black"].get("logo", "")
    json.dump(meta, open(META, "w"), indent=2, ensure_ascii=False)
    print(f"\nUpdated {changed} logos. Missing: {missing}")


if __name__ == "__main__":
    main()
