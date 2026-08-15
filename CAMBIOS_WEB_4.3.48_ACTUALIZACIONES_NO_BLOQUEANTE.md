# SGF Web 4.3.48 · Actualizaciones compatible con Apps Script anterior

- Corrige: `No se pudo cargar el módulo · ACCION NO DISPONIBLE`.
- La apertura del módulo ya no depende de que el Apps Script implemente la acción `SALUD`.
- La URL oficial de actualizaciones sigue intentando sincronizarse en Supabase.
- `VALIDAR_ANTES=NO` permite que flotas-api 4.3.51 guarde la URL aunque una versión anterior del Apps Script no soporte la prueba SALUD.
- Si la sincronización auxiliar falla, se registra solo en consola y el módulo continúa cargando `listarActualizacionesAndroid`.
- No se modifica Android ni la base de datos.
