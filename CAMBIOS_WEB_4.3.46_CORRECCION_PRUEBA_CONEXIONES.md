# SGF Web 4.3.46

Corrección del bloqueo:
"No se pudo cargar el módulo / Una o más conexiones no superaron la prueba."

## Causa
flotas-api 4.3.51 calcula `todoCorrecto` exigiendo:
- Directorio OK
- Actualizaciones OK
- API de respaldo OK

Cuando API_RESPALDO_URL está vacía (válido porque es opcional),
`todoCorrecto` puede quedar en false.

## Corrección Web
Al sincronizar automáticamente la nueva URL de Actualizaciones:
1. Web solicita la prueba de conexiones a flotas-api.
2. Exige que Directorio esté OK.
3. Exige que Actualizaciones esté OK.
4. API de respaldo se conserva, pero no bloquea si está vacía.
5. Solo después guarda la nueva URL con VALIDAR_ANTES=NO, porque las dos
   conexiones obligatorias ya fueron verificadas.

Nueva URL de Actualizaciones:
[URL ANTERIOR REEMPLAZADA EN WEB 4.3.49]

Directorio conservado:
https://mykndxvshtfydsetcync.supabase.co/functions/v1/bdempresaflota-api
