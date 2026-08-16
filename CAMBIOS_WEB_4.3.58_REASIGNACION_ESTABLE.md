# SGF Web 4.3.58

## Reasignacion de rutas

Se corrigio el flujo completo de reasignacion, manteniendo el filtro rapido agregado en 4.3.57.

- La lista de conductores elegibles ahora proviene de `opcionesReasignacionRuta` del servidor.
- Se evita que Web y Android calculen disponibilidad de forma distinta.
- El submit envia aliases compatibles y una clave idempotente estable.
- El modal solo informa exito cuando la Base de Datos confirma la transaccion.
- Mantiene Multiempresa, permisos obligatorios y excepcion de Check-in de la reasignacion.
