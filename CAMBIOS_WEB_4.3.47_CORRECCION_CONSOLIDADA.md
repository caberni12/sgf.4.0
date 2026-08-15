# SGF Web 4.3.47 · Corrección consolidada Actualizaciones + Conexiones

## Incidencias corregidas
- `urlActualizacionesSincronizadaEnSesion is not defined`.
- `No se pudo actualizar · La base de datos no respondió correctamente durante la sincronización` provocado por el fallo anterior.

## Causa
La corrección de Conexiones 4.3.46 dejó `URL_ACTUALIZACIONES_OFICIAL` y `urlActualizacionesSincronizadaEnSesion` declaradas dentro del IIFE de `ConexionFlotas`, mientras el módulo de Actualizaciones las utiliza dentro de un IIFE distinto. Al no compartir ámbito, el módulo lanzaba `ReferenceError`.

## Solución
- Ambas variables quedan declaradas dentro del mismo IIFE que `asegurarUrlActualizacionesOficial()` y `renderActualizacionesApp()`.
- Se conserva la corrección de prueba de conexiones: Directorio y Actualizaciones son obligatorios; API de respaldo sigue siendo opcional.
- Se usa `sgf-module.4347.js` y un nuevo cache-buster para impedir que el navegador reutilice el bundle 4.3.46 defectuoso.
- Android y `flotas-api` no se modifican.
