(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{"./node_modules/contentlayer/dist/client/index.js":function(){},"./node_modules/date-fns/esm/compareDesc/index.js":function(e,s,n){"use strict";n.d(s,{Z:function(){return compareDesc}});var t=n("./node_modules/date-fns/esm/toDate/index.js"),d=n("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function compareDesc(e,s){(0,d.Z)(2,arguments);var n=(0,t.Z)(e),a=(0,t.Z)(s),i=n.getTime()-a.getTime();return i>0?-1:i<0?1:i}},"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2Fpost%2Findex.tsx&page=%2Fpost!":function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return n("./pages/post/index.tsx")}])},"./pages/post/index.tsx":function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return Post}});var t=n("./node_modules/react/jsx-runtime.js"),d=n("./.contentlayer/generated/index.mjs"),a=n("./node_modules/date-fns/esm/compareDesc/index.js"),i=n("./node_modules/date-fns/esm/format/index.js"),o=n("./node_modules/next/link.js"),r=n.n(o),l=n("./node_modules/react/index.js"),c=n("./components/Layout.tsx");let u=0;function Post(){let e=d.fd.sort((e,s)=>(0,a.Z)(new Date(e.date),new Date(s.date)));return(0,t.jsx)(c.A,{children:(0,t.jsxs)("div",{className:"main",children:[(0,t.jsx)("h2",{children:"Posts"}),(0,t.jsx)("ul",{className:"reset",children:e.map((e,s)=>{let n;let d=new Date(e.date).getFullYear();return d!==u?(n=!0,u=d):n=!1,(0,t.jsxs)(l.Fragment,{children:[n?(0,t.jsx)("li",{children:(0,t.jsx)("h4",{children:d})},d):null,(0,t.jsx)("li",{children:(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{className:"space-gap",children:(0,i.Z)(new Date(Date.parse(e.date)),"MMM dd")}),(0,t.jsx)(r(),{href:e.url,"aria-label":e.title,children:e.title},e._id)]})},s)]},e._id+s)})},"reset")]})})}}},function(e){e.O(0,[664,34,494,92,774,888,179],function(){return e(e.s="./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=private-next-pages%2Fpost%2Findex.tsx&page=%2Fpost!")}),_N_E=e.O()}]);