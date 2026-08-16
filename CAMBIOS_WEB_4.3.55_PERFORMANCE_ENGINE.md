# SGF Web 4.3.55 · Performance Engine

- Motor interno de rendimiento, sin extensión de Chrome.
- Service Worker cachea exclusivamente HTML/JS/CSS/imágenes estáticos del mismo origen. No intercepta POST ni APIs Supabase.
- Precarga de datos autorizados mediante `cargaRapida` existente: una sola petición agrupa Panel, Vehículos, Conductores, Rutas, Operaciones, Check-in, Documentos y Mantenciones según permisos.
- Caché de respuestas en memoria queda aislada por `empresa_id + usuario + VERSION_PERMISOS + acción + payload`.
- La sesión/permisos (`me`) conserva una ventana máxima de 5 segundos; no se congela por minutos.
- GPS, Conexiones, Alertas y Notificaciones no se precargan como catálogos y mantienen sus ciclos de tiempo real.
- No se habilita persistencia de datos de negocio en localStorage.
- Mantiene la corrección 4.3.54 de mapas (`getEmpresaConexion`) y el filtro fail-closed por EMPRESA_ID.
- Compatible con flotas-api 4.3.61; no requiere SQL nuevo.
