if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return t;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-ac951e01"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"28eeed614e5855d845e9d29cc163a3ec"},{url:"app.9309a5178dd04d952631.js",revision:null},{url:"app.css",revision:"da32933604b0fc0b15832d5acad5cb12"},{url:"index.html",revision:"7e97abeb44b14558ab073ab90732865a"},{url:"playground/30-day-chart-challenge/index.html",revision:"465bf2d7088dcce41917b4e84e65009c"},{url:"playground/index.html",revision:"fb1ba5c69f910678d9b5ae160df86dac"},{url:"prints.html",revision:"10b9fdc17b3c9fa3802eb2ab006c301e"},{url:"privacy.html",revision:"6b5c433900002e7f6bf992b5574590d0"},{url:"terms.html",revision:"e037f2706bb231368ed2278d1a429a8c"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET")}));
