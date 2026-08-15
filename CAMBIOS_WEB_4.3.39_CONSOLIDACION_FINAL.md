# SGF Web 4.3.39

- Directorio Apps Script usado únicamente para bootstrap/reconfiguración: `https://mykndxvshtfydsetcync.supabase.co/functions/v1/bdempresaflota-api`.
- URL real de flotas-api persistida y reutilizada en el computador; login sin consultas repetidas al Directorio.
- Eliminadas sincronizaciones adicionales de conexión durante login.
- Mapas/conexiones refrescan a 1 s y marcadores interpolan visualmente su movimiento.
- Modal de Conexiones recupera Seguimiento, WhatsApp, Notificación, Alerta, ruta asignada, origen/destino, km planificados/recorridos/restantes y tiempo.
- Mensaje repetitivo de GPS impreciso del navegador deja de generar toasts; conserva la última ubicación confiable.
- Confirmación de permisos personalizados usa la verificación normalizada del servidor.
- CSS reforzado para tarjetas/modales/mapas sin desbordamiento.
- Compatible con flotas-api 4.3.49 y Base 4.3.36 REV10.
