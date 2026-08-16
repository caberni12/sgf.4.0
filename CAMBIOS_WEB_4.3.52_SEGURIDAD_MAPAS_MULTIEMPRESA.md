# SGF Web 4.3.52 · Seguridad de Mapas Multiempresa
- Conserva íntegramente Web 4.3.51, tarjeta de respaldo y **Ver trazabilidad**.
- Todo marcador GPS, conexión, rastro y geocerca exige `EMPRESA_ID` igual a la empresa local validada.
- Una fila sin empresa o con empresa diferente se descarta antes de dibujarse.
- `flotas-api` continúa siendo la autoridad; Web es una segunda barrera fail-closed.
