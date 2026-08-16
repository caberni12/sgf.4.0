# SGF Web 4.3.57 · Filtro rápido en reasignación de ruta

## Cambio funcional
En el modal **Contingencia operacional → Reasignar la misma ruta** se agregó un campo **Filtro rápido de conductor** encima del selector.

El filtro trabaja localmente sobre los conductores disponibles ya autorizados por el servidor y permite buscar por:
- nombre;
- RUT;
- correo;
- ID interno.

La búsqueda es instantánea, no distingue mayúsculas/minúsculas ni tildes y muestra el contador de coincidencias.

Si no existen coincidencias:
- el selector queda deshabilitado;
- el botón **Confirmar reasignación** queda deshabilitado;
- se muestra `Sin coincidencias`.

## Seguridad y reglas conservadas
- No modifica quién puede ejecutar `RUTAS:REASIGNAR`.
- No incorpora conductores que el servidor no haya devuelto como disponibles.
- No cambia la lógica de Check-in excepcional de la reasignación.
- No cambia empresa, vehículo, destinos, trazabilidad ni auditoría de la ruta.
- No requiere SQL ni modificación de flotas-api.

## Versión
Web: **4.3.57**
