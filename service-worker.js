if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-ac951e01"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"3ab19eb3cbbb45f7084070ca02b3494f"},{url:"app.233728d87c79600da655.js",revision:null},{url:"app.css",revision:"633e38c925003abde41cd79f9c9d07f7"},{url:"index.html",revision:"ce7a5e4ff53a22fb03cd0d37bcd7ad8d"},{url:"playground/30-day-chart-challenge/index.html",revision:"0793f0024ba1d27518944071450ae0ca"},{url:"playground/index.html",revision:"2d58df2ec597e4e674f72e8b6aaa0cfd"},{url:"privacy.html",revision:"0c9cc7edce94123b83dd4c4d6cd1a6e4"},{url:"terms.html",revision:"fdee9ff326b765e8729b361fa0ee4f15"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET")}));
