if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-ac951e01"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"3209e4c9c0e221a06dfe2e529fe51633"},{url:"app.233728d87c79600da655.js",revision:null},{url:"app.css",revision:"633e38c925003abde41cd79f9c9d07f7"},{url:"index.html",revision:"ad84ad13440613a44ac0d5414cd73e40"},{url:"playground/30-day-chart-challenge/index.html",revision:"5c8d0258674cfbbfe23d0a7ff0c2f7f9"},{url:"playground/index.html",revision:"4acb4d7687def56c028a87f5a65e8dfa"},{url:"privacy.html",revision:"0c9cc7edce94123b83dd4c4d6cd1a6e4"},{url:"terms.html",revision:"fdee9ff326b765e8729b361fa0ee4f15"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET")}));
