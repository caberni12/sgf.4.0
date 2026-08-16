# SGF Web 4.3.53 · Rendimiento

- Login rápido: evita repetir Directorio + salud justo antes de iniciar sesión; flotas-api conserva la validación autoritativa.
- Reintento seguro: si la URL real cambió o el endpoint quedó obsoleto, refresca Directorio y reintenta una sola vez.
- Caché corta (45 s) y single-flight para resolución de Directorio y salud durante la pantalla de acceso.
- La pantalla inicial usa `status` como prueba real del servicio, evitando un POST `salud` redundante.
- Preconnect al Directorio Supabase y al backend operacional conocido.
- Prefetch en segundo plano de módulos principales y recursos compartidos para acelerar navegación por iframe.
- Conserva filtros fail-closed Multiempresa de Web 4.3.52.
