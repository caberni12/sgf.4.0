# SGF Web 4.3.51 · Tarjeta de respaldo y botón Ver trazabilidad

- La tarjeta superior de rutas activas se conserva sin eliminar ni sustituir su funcionamiento.
- La tabla inferior **Trazabilidad de rutas** agrega en la celda **Opciones** el botón **▤ Ver trazabilidad**.
- El botón abre una tarjeta de respaldo en modo solo lectura para cualquier ruta registrada, incluida una ruta Completada o Cancelada.
- La vista incluye: ruta, conductor, vehículo, origen, destino, reloj/tiempo registrado, estado y línea de tiempo.
- La línea de tiempo conserva Asignada → Aceptada → Iniciada → Completada y eventos de reasignación existentes.
- Se mantienen fecha arriba y hora debajo en cada hito.
- Visibilidad: Administrador, Gerencia y Operador con permiso RUTAS:LEER, igual que la tabla de trazabilidad existente.
- No modifica API, SQL ni Android.
