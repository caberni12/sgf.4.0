(()=>{
  'use strict';
  const VERSION='4.3.53';
  const moduloArchivos=['panel-principal.html','rutas.html','operaciones.html','checkin-vehicular.html','vehiculos.html','conductores.html','notificaciones.html','alertas.html','documentos.html','combustible.html'];
  function link(rel,href,as){
    if(!href||document.head.querySelector(`link[rel="${rel}"][href="${href}"]`))return;
    const e=document.createElement('link');e.rel=rel;e.href=href;if(as)e.as=as;document.head.appendChild(e);
  }
  function preconectar(){
    try{
      link('dns-prefetch','https://mykndxvshtfydsetcync.supabase.co');
      link('preconnect','https://mykndxvshtfydsetcync.supabase.co');
      const raw=localStorage.getItem('sistema_gestion_flotas_empresa_conexion_v1')||localStorage.getItem('flotas_empresa_conexion_v1')||'';
      if(raw){const c=JSON.parse(raw),u=new URL(c.url_real||c.url||'');link('dns-prefetch',u.origin);link('preconnect',u.origin);}
    }catch(_){}
  }
  function precargarNavegacion(){
    link('prefetch','sgf-module.4353.js','script');
    link('prefetch','estilos.css','style');
    link('prefetch','responsive.css','style');
    moduloArchivos.forEach(href=>link('prefetch',href,'document'));
  }
  preconectar();
  if(/(?:^|\/)index\.html$/.test(location.pathname)||location.pathname.endsWith('/')) link('prefetch','main.html?v=4.3.53','document');
  if(/(?:^|\/)main\.html$/.test(location.pathname)){
    const run=()=>precargarNavegacion();
    if('requestIdleCallback' in window)requestIdleCallback(run,{timeout:1200});else setTimeout(run,250);
  }
  window.SGFRendimiento={version:VERSION,precargarNavegacion};
})();
