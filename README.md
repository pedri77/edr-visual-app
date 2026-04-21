# EDR/XDR Decision Studio

> **Live**: https://pedri77.github.io/edr-visual-app/

Aplicacion estatica para evaluar visualmente 26 EDR/XDR del mercado en Windows, Linux y macOS.

Sigue el mismo patron que `sase-visual-app`: HTML + CSS + `data.js` + `app.js`, sin build ni dependencias. Publica en GitHub Pages desde la raiz.

## Fuentes

- **Telemetria**: proyecto abierto [tsale/EDR-Telemetry](https://github.com/tsale/EDR-Telemetry) (Windows, Linux, macOS).
- **Gartner MQ**: Endpoint Protection Platforms 2024.
- **Forrester Wave**: Extended Detection and Response Q2 2024.
- **CVEs**: seleccion curada publicada en NVD.
- **Incidentes**: noticias publicas (CrowdStrike 2024-07-19, etc.).

## Estructura

```
edr-visual-app/
  index.html            Layout y navegacion
  styles.css            Sistema visual responsive
  data.js               Auto-generado. NO editar a mano
  app.js                Motor de render, scoring, compare, PDF
  data/
    vendor_metadata.json  Metadata curada (Gartner, ENS, CVEs, incidentes)
  raw/
    EDR_telem_*.json      JSON originales de tsale/EDR-Telemetry
    mitre_att&ck_mappings.json
    partially_value_explanations_*.json
  scripts/
    build_data.py         Regenera data.js desde raw/ + vendor_metadata.json
```

## Regenerar data.js

Cuando se actualice tsale/EDR-Telemetry o cambies `vendor_metadata.json`:

```bash
# 1. Refrescar los JSON oficiales (opcional)
cd raw && \
for f in EDR_telem_windows.json EDR_telem_linux.json EDR_telem_macOS.json \
         mitre_att\&ck_mappings.json \
         partially_value_explanations_windows.json \
         partially_value_explanations_linux.json \
         partially_value_explanations_macOS.json; do
  gh api "repos/tsale/EDR-Telemetry/contents/$f" --jq '.content' | base64 -d > "$f"
done

# 2. Generar data.js
cd .. && python3 scripts/build_data.py
```

## Vistas

1. **Matriz**: heatmap categoria × subfeature × vendor con tabs Windows / Linux / macOS.
2. **Ranking**: score de cobertura por SO (Yes=1.0, Enabling=0.7, EventLog=0.6, Partial=0.5).
3. **Vendors**: fichas con Gartner, Forrester, ENS, CVEs, incidentes, enlaces.
4. **Comparar**: hasta 3 vendors cruzados feature a feature.
5. **Riesgos**: CVEs del propio agente e incidentes publicos.
6. **Scoring**: ponderacion por perfil (SOC 24x7, Mid-market, Soberania UE, Cloud-first, Balanceado). Sliders ajustables.
7. **Metodologia**: fuentes, formula, limitaciones.

## Despliegue en GitHub Pages

```bash
cd /Users/pedri77/Documents/Claude_proyectos/Claude/edr-visual-app
git init && git add . && git commit -m "first cut"
gh repo create edr-visual-app --public --source=. --remote=origin --push
# En GitHub -> Settings -> Pages -> Source: main, folder: /(root)
```

## Limitaciones y TODO

- La metadata de Gartner/Forrester es posicion resumida; el informe original es la referencia.
- El listado de CVEs y de incidentes es una semilla; hay que seguir poblandolo.
- Auditd y Sysmon se incluyen como referencia de telemetria nativa, no como EDR.
- Algunos vendors (Phorion, Padvish, C-Prot) tienen informacion publica limitada.
- Pendiente: feed NVD automatizado por vendor, ingesta de Forrester Wave actualizado, export a CSV/Excel.

## Licencia

Datos de telemetria bajo licencia del repo tsale/EDR-Telemetry. Codigo propio: MIT.
