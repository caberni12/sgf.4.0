# SGF Web 4.3.41 · Directorio Supabase primero

Directorio central obligatorio:
https://mykndxvshtfydsetcync.supabase.co/functions/v1/bdempresaflota-api

Flujo:
1. Lee empresa_id, empresa_rut y empresa_nombre locales.
2. Consulta `resolverConexion` en bdempresaflota-api.
3. Exige empresa ACTIVA.
4. Comprueba que empresa_id y RUT coincidan con el contexto local.
5. Toma la URL real vigente entregada por el Directorio.
6. Ejecuta `salud` contra esa URL real.
7. Solo entonces habilita login o reutiliza una sesión SGF.

La URL real almacenada no permite saltarse el Directorio central.
Si el Directorio no responde, falla cerrado y no conecta por una URL antigua.
