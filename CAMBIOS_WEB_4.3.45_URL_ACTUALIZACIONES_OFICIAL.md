# SGF Web 4.3.45 · URL oficial de Actualizaciones Android

URL NUEVA:
[URL ANTERIOR REEMPLAZADA EN WEB 4.3.49]

DIRECTORIO BDEMPRESAFLOTA (SIN CAMBIOS):
https://mykndxvshtfydsetcync.supabase.co/functions/v1/bdempresaflota-api

La Web 4.3.45:
- integra internamente la nueva URL de Actualizaciones;
- la muestra como solo lectura en Configuración;
- al abrir Actualización de Aplicación como Administrador, compara la URL
  almacenada en configuracion_conexiones;
- si todavía está la anterior, solicita a flotas-api probar y guardar la nueva;
- no modifica Android;
- no modifica flotas-api;
- conserva Reportes 4.3.44, mapas GPS y tarjeta de empresa.
