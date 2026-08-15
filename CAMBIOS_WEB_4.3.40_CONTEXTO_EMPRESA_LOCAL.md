# SGF Web 4.3.40

Contexto empresarial persistente canónico:
- empresa_id
- empresa_rut
- empresa_nombre
- url_real
- estado

El Directorio Apps Script:
https://mykndxvshtfydsetcync.supabase.co/functions/v1/bdempresaflota-api

solo se usa en configuración/reconfiguración explícita.

El login usa directamente url_real y envía empresa_id/empresa_rut/empresa_nombre
desde almacenamiento local. flotas-api valida el estado en la misma solicitud;
no existe una segunda consulta de estado ni una consulta silenciosa al Directorio.
