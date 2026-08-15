# SGF Web 4.3.46

## Corrección
Se corrige:
`urlActualizacionesSincronizadaEnSesion is not defined`

Causa:
Las variables de la nueva URL de Actualizaciones se habían declarado en el IIFE
de ConexionFlotas, mientras que renderActualizacionesApp() pertenece al IIFE
del módulo principal.

Solución:
Las variables se declaran ahora en el mismo ámbito del módulo que las utiliza.

URL Actualizaciones:
https://script.google.com/macros/s/AKfycbwL3wLzbcVHG1euB4cSxOKzr1k3VR7Ybi3DJrwXriF6UmD7npq3hOOEpzyaRx-OBIRH9w/exec

Directorio BDEMPRESAFLOTA (sin cambios):
https://mykndxvshtfydsetcync.supabase.co/functions/v1/bdempresaflota-api

Sin cambios:
- Android
- flotas-api
- Base de datos
- Reportes 4.3.44
- mapas Web/GPS
- tarjeta de empresa
