if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d56b8aa9"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"0bf6639ba7cdfcc5bd11e86ff725ff5e"},{url:"assets/[...all].ac7409a8.js",revision:"1be145d76e3a884bc142e910eb5c5578"},{url:"assets/[name].c1b1b80f.js",revision:"d61a019dffd275a6583f2e9cd70664c1"},{url:"assets/404.fd526a34.js",revision:"c5ad2dae100ec9f01aef83422f1dd2c1"},{url:"assets/about.6d53c97e.js",revision:"b9c2d0c1cf8e5aa48fccab485dea144d"},{url:"assets/app.2eda8b07.css",revision:"f68a74befe2314e602ced0b0fb510f28"},{url:"assets/app.7f6017a3.js",revision:"1a9eaf07ef10768c511e722afc373feb"},{url:"assets/home.15b32cc3.js",revision:"9c8bbf4337873f24f29964984ff427dd"},{url:"assets/vendor.e4402c71.js",revision:"b961567174373980bd8a76a62d12001d"},{url:"assets/virtual_pwa-register.94b992da.js",revision:"786d43e2bdf91cd01572b49a9d9e0a80"},{url:"index.html",revision:"e6c68f2b48d595ed4a9a42d9d6b78649"},{url:"favicon.ico",revision:"ebbaed43fcf40f079c4b5cf2cebf1da6"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"browserconfig.xml",revision:"364d4ea97fa3d81ee36707f7f9372fcd"},{url:"safari-pinned-tab.svg",revision:"e53658b61e74e95a632353aa021ad448"},{url:"paimon_off@192.png",revision:"93fcf2831505c85a45f9f2a70b0902ec"},{url:"paimon_off@512.png",revision:"774ee326bc4f1b3dcee4d0107b2a5e9d"},{url:"maskable_icon_x1.png",revision:"def993a96143932288de20166c8b070d"},{url:"manifest.webmanifest",revision:"bcbd6476b7b3860959feb2506449344a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
