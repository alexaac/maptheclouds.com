if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-ac951e01"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"c5aab2d895584605b8c2ddf7f8e16973"},{url:"app.9309a5178dd04d952631.js",revision:null},{url:"app.css",revision:"5e0e8eac27c95c9c3eba4a2292ae5001"},{url:"index.html",revision:"37151de2e00c6807341ce0a58eb650f6"},{url:"playground/30-day-chart-challenge/index.html",revision:"13c220e41a0341f633c2c0b023e81e55"},{url:"playground/index.html",revision:"542c6463d1aee70edba21980be26c14c"},{url:"prints.html",revision:"98e7c40c1d2711fda5361487e07370c0"},{url:"privacy.html",revision:"6b5c433900002e7f6bf992b5574590d0"},{url:"terms.html",revision:"e037f2706bb231368ed2278d1a429a8c"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET")}));
