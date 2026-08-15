# SGF Web 4.3.43

## Corrección de los 3 mapas GPS

Módulos revisados:
1. Ubicación en tiempo real
2. Conexiones en línea
3. Geocerca

### Causa raíz
El paquete Web 4.3.42 no contenía físicamente `mapa.js`.
El runtime intentaba cargarlo dinámicamente. Además, si quedaba un `<script>`
de un intento fallido, el cargador podía esperar un evento `load` que ya había
ocurrido, dejando el módulo detenido en “Preparando mapa…”.

### Corrección
- `mapa.js` vuelve a estar incluido en la raíz de producción.
- cargador nuevo con timeout de 8 segundos;
- retira intentos fallidos previos;
- fuerza cache-busting;
- los tres mapas muestran un error visible y opción Reintentar;
- Conexiones en línea ya no puede quedar simplemente en blanco.

## Tarjeta de empresa en las secciones
Cada módulo autenticado muestra:
- nombre de la empresa;
- RUT;
- “Conexión establecida”;
- check verde cuando el contexto local está ACTIVO.

Los datos se obtienen dinámicamente de `ConexionFlotas.getEmpresaConexion()`.
No están escritos de forma fija para una empresa particular.

## Directorio central
https://mykndxvshtfydsetcync.supabase.co/functions/v1/bdempresaflota-api

## Actualización Android
No se modificó su URL ni su flujo.
