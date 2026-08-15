# SGF Web 4.3.42 · Corrección de bloqueo “Validando sesión”

## Causa encontrada
Web 4.3.41 tenía correctamente modificados `configuracion`, `conexion` y `acceso`,
pero `main.html` y los módulos cargaban bundles internos `sgf-shell.4339.js` y
`sgf-module.4339.js` que todavía contenían embebida la conexión antigua.

Esos bundles esperaban el formato viejo:
- `empresaId`
- `rut`
- `nombre`
- `url`

La conexión nueva usa el formato canónico:
- `empresa_id`
- `empresa_rut`
- `empresa_nombre`
- `url_real`
- `estado`

Por ello el login podía completarse, pero el panel no encontraba una conexión
operacional válida y quedaba en “Validando sesión”.

## Corrección 4.3.42
- `sgf-shell.4342.js`: reconstruido con `configuracion.4342.js` + `conexion.4342.js`.
- `sgf-module.4342.js`: reconstruido con el mismo conector nuevo.
- Se retiró del runtime la antigua URL del Directorio.
- `main.html` usa nombres/versiones nuevas para evitar caché del bundle anterior.
- Antes de `miSesion`, el shell ejecuta obligatoriamente:
  1. `https://mykndxvshtfydsetcync.supabase.co/functions/v1/bdempresaflota-api`
  2. empresa ACTIVA
  3. empresa_id/RUT coincidentes
  4. URL real vigente
  5. salud de flotas-api real
  6. validación de sesión
- Si falla empresa/API en el primer acceso, ya no queda en un bucle infinito:
  vuelve a la pantalla de acceso con un mensaje visible.

La URL de Actualización de Aplicación Android no se modificó.
