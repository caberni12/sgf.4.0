# SGF Web 4.3.38

## Directorio oficial fijo
`https://script.google.com/macros/s/AKfycbzIEXDZ3fxc9wIuAGpm2mmdPYfD-f0GmKxE3v4-tTtzguVr9308mgcm7oQVysRAGIXcFw/exec`

## Flujo
1. Si no existe conexión empresarial local, Web solicita RUT.
2. Consulta una vez el Directorio oficial.
3. Recibe `empresa_id`, empresa y URL real de `flotas-api`.
4. Comprueba la URL real.
5. Guarda la conexión en almacenamiento persistente del origen del navegador.
6. Login y módulos posteriores usan directamente la URL real guardada.
7. Cerrar navegador, reiniciar Windows o apagar el computador no borra la conexión.
8. Apps Script vuelve a consultarse solo al reconfigurar/cambiar empresa o al migrar una instalación antigua sin `empresa_id`.

## Seguridad
La URL local solo identifica el endpoint. La autoridad continúa siendo `flotas-api`,
que valida sesión, empresa, roles y permisos en servidor.
