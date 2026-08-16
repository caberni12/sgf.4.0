# SGF Web 4.3.54 · Corrección Mapas y Sincronización

## Incidencias corregidas
- `conexionEmpresa is not defined` al abrir GPS, GEOCERCA o vistas que usan filtros de mapas.
- `No se pudo actualizar · La base de datos no respondió correctamente durante la sincronización` cuando la actualización del módulo terminaba en el ReferenceError anterior.

## Causa
`conexionEmpresa` es una variable privada del IIFE de `ConexionFlotas`. La defensa cliente de mapas 4.3.52 intentaba leerla desde el IIFE principal del SGF, donde no existe.

## Solución
- `empresaActualMapaId()` obtiene la empresa mediante `api.getEmpresaConexion()`, que es la interfaz pública y estable del conector.
- Si la empresa no está disponible, el filtro sigue siendo fail-closed: no se dibuja ninguna ubicación.
- No se elimina ninguna validación `empresa_id` del servidor ni del cliente.
- Se usa un bundle nuevo `sgf-module.4354.js` y cache-buster nuevo para evitar reutilizar 4.3.53.
- `flotas-api 4.3.61` no requiere cambios.
