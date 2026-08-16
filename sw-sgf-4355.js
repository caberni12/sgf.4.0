const SGF_CACHE='sgf-static-4.3.55-v1';
const PRECACHE=[
  './','./index.html','./main.html','./logo.svg','./tema.js','./estilos.css','./responsive.css','./interfaz-moderna.css',
  './menu-principal.css','./sgf-final-4.3.44.css','./sgf-performance.4355.js','./sgf-module.4355.js','./sgf-shell.4344.js',
  './panel-principal.html','./rutas.html','./operaciones.html','./checkin-vehicular.html','./vehiculos.html','./conductores.html'
];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(SGF_CACHE).then(async cache=>{
    for(const url of PRECACHE){try{await cache.add(new Request(url,{cache:'reload'}));}catch(_){}}
  }).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sgf-static-')&&k!==SGF_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
function conTimeout(promise,ms){return Promise.race([promise,new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),ms))]);}
async function networkFirst(req){
  const cache=await caches.open(SGF_CACHE);
  try{const res=await conTimeout(fetch(req),2200);if(res&&res.ok)cache.put(req,res.clone()).catch(()=>{});return res;}
  catch(e){const cached=await cache.match(req,{ignoreSearch:true});if(cached)return cached;throw e;}
}
async function staleStatic(req){
  const cache=await caches.open(SGF_CACHE),cached=await cache.match(req,{ignoreSearch:true});
  const net=fetch(req).then(res=>{if(res&&res.ok)cache.put(req,res.clone()).catch(()=>{});return res;}).catch(()=>null);
  return cached||(await net)||Response.error();
}
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return; // Nunca cachear POST de flotas-api.
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return; // Nunca interceptar Supabase/Directorio/Maps.
  if(url.pathname.includes('/functions/v1/'))return;
  if(req.mode==='navigate'||req.destination==='document'){event.respondWith(networkFirst(req));return;}
  if(['script','style','image','font'].includes(req.destination)||/\.(?:js|css|svg|png|jpg|jpeg|webp|ico)$/i.test(url.pathname))event.respondWith(staleStatic(req));
});
