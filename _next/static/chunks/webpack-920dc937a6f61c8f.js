!function(){"use strict";var e,r,t,n,_,u,i,c,o,a,f,p={},s={};function __webpack_require__(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={id:e,loaded:!1,exports:{}},n=!0;try{p[e](t,t.exports,__webpack_require__),n=!1}finally{n&&delete s[e]}return t.loaded=!0,t.exports}__webpack_require__.m=p,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=function(e){e&&!e.d&&(e.d=1,e.forEach(function(e){e.r--}),e.forEach(function(e){e.r--?e.r++:e()}))},__webpack_require__.a=function(_,u,i){i&&((c=[]).d=1);var c,o,a,f,p=new Set,s=_.exports,b=new Promise(function(e,r){f=r,a=e});b[r]=s,b[e]=function(e){c&&e(c),p.forEach(e),b.catch(function(){})},_.exports=b,u(function(_){o=_.map(function(_){if(null!==_&&"object"==typeof _){if(_[e])return _;if(_.then){var u=[];u.d=0,_.then(function(e){i[r]=e,n(u)},function(e){i[t]=e,n(u)});var i={};return i[e]=function(e){e(u)},i}}var c={};return c[e]=function(){},c[r]=_,c});var u,getResult=function(){return o.map(function(e){if(e[t])throw e[t];return e[r]})},i=new Promise(function(r){(u=function(){r(getResult)}).r=0;var fnQueue=function(e){e===c||p.has(e)||(p.add(e),e&&!e.d&&(u.r++,e.push(u)))};o.map(function(r){r[e](fnQueue)})});return u.r?i:getResult()},function(e){e?f(b[t]=e):a(s),n(c)}),c&&(c.d=0)},_=[],__webpack_require__.O=function(e,r,t,n){if(r){n=n||0;for(var u=_.length;u>0&&_[u-1][2]>n;u--)_[u]=_[u-1];_[u]=[r,t,n];return}for(var i=1/0,u=0;u<_.length;u++){for(var r=_[u][0],t=_[u][1],n=_[u][2],c=!0,o=0;o<r.length;o++)i>=n&&Object.keys(__webpack_require__.O).every(function(e){return __webpack_require__.O[e](r[o])})?r.splice(o--,1):(c=!1,n<i&&(i=n));if(c){_.splice(u--,1);var a=t()}}return a},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=function(e,r){for(var t in r)__webpack_require__.o(r,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(r,t){return __webpack_require__.f[t](e,r),r},[]))},__webpack_require__.u=function(e){return 494===e?"static/chunks/494-4bc5a3c77c691c11.js":"static/chunks/"+e+"."+({324:"d67a945ad3a82621",335:"d4e2384088f939a4"})[e]+".js"},__webpack_require__.miniCssF=function(e){return"static/css/"+({86:"3701d36d3094ffad",405:"fd79b90b75e110e2",515:"3701d36d3094ffad"})[e]+".css"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u={},i="_N_E:",__webpack_require__.l=function(e,r,t,n){if(u[e]){u[e].push(r);return}if(void 0!==t)for(var _,c,o=document.getElementsByTagName("script"),a=0;a<o.length;a++){var f=o[a];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==i+t){_=f;break}}_||(c=!0,(_=document.createElement("script")).charset="utf-8",_.timeout=120,__webpack_require__.nc&&_.setAttribute("nonce",__webpack_require__.nc),_.setAttribute("data-webpack",i+t),_.src=__webpack_require__.tu(e)),u[e]=[r];var onScriptComplete=function(r,t){_.onerror=_.onload=null,clearTimeout(p);var n=u[e];if(delete u[e],_.parentNode&&_.parentNode.removeChild(_),n&&n.forEach(function(e){return e(t)}),r)return r(t)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:_}),12e4);_.onerror=onScriptComplete.bind(null,_.onerror),_.onload=onScriptComplete.bind(null,_.onload),c&&document.head.appendChild(_)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.tt=function(){return void 0===c&&(c={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(c=trustedTypes.createPolicy("nextjs#bundler",c))),c},__webpack_require__.tu=function(e){return __webpack_require__.tt().createScriptURL(e)},__webpack_require__.v=function(e,r,t,n){var _=fetch(__webpack_require__.p+"static/wasm/"+t+".wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(_,n).then(function(r){return Object.assign(e,r.instance.exports)}):_.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,n)}).then(function(r){return Object.assign(e,r.instance.exports)})},__webpack_require__.p="/notes/_next/",o={272:0},__webpack_require__.f.j=function(e,r){var t=__webpack_require__.o(o,e)?o[e]:void 0;if(0!==t){if(t)r.push(t[2]);else if(272!=e){var n=new Promise(function(r,n){t=o[e]=[r,n]});r.push(t[2]=n);var _=__webpack_require__.p+__webpack_require__.u(e),u=Error();__webpack_require__.l(_,function(r){if(__webpack_require__.o(o,e)&&(0!==(t=o[e])&&(o[e]=void 0),t)){var n=r&&("load"===r.type?"missing":r.type),_=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+_+")",u.name="ChunkLoadError",u.type=n,u.request=_,t[1](u)}},"chunk-"+e,e)}else o[e]=0}},__webpack_require__.O.j=function(e){return 0===o[e]},a=function(e,r){var t,n,_=r[0],u=r[1],i=r[2],c=0;if(_.some(function(e){return 0!==o[e]})){for(t in u)__webpack_require__.o(u,t)&&(__webpack_require__.m[t]=u[t]);if(i)var a=i(__webpack_require__)}for(e&&e(r);c<_.length;c++)n=_[c],__webpack_require__.o(o,n)&&o[n]&&o[n][0](),o[n]=0;return __webpack_require__.O(a)},(f=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}();