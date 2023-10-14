(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{"./node_modules/next/dist/client/components/router-reducer/router-reducer-types.js":function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return d}});let o="refresh",l="navigate",u="restore",i="server-patch",s="prefetch",a="fast-refresh",d="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},"./node_modules/next/dist/client/get-domain-locale.js":function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n("./node_modules/next/dist/client/normalize-trailing-slash.js"),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},"./node_modules/next/dist/client/link.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n("./node_modules/@swc/helpers/esm/_interop_require_default.js"),o=r._(n("./node_modules/react/index.js")),l=n("./node_modules/next/dist/client/resolve-href.js"),u=n("./node_modules/next/dist/shared/lib/router/utils/is-local-url.js"),i=n("./node_modules/next/dist/shared/lib/router/utils/format-url.js"),s=n("./node_modules/next/dist/shared/lib/utils.js"),a=n("./node_modules/next/dist/client/add-locale.js"),d=n("./node_modules/next/dist/shared/lib/router-context.shared-runtime.js"),c=n("./node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"),f=n("./node_modules/next/dist/client/use-intersection.js"),p=n("./node_modules/next/dist/client/get-domain-locale.js"),_=n("./node_modules/next/dist/client/add-base-path.js"),m=n("./node_modules/next/dist/client/components/router-reducer/router-reducer-types.js"),h=new Set;function prefetch(e,t,n,r,o,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}let i=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let n,r;let{href:i,as:h,children:b,prefetch:y=null,passHref:v,replace:j,shallow:g,scroll:x,locale:O,onClick:C,onMouseEnter:E,onTouchStart:P,legacyBehavior:T=!1,...k}=e;n=b,T&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let M=o.default.useContext(d.RouterContext),R=o.default.useContext(c.AppRouterContext),A=null!=M?M:R,I=!M,L=!1!==y,S=null===y?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:N,as:U}=o.default.useMemo(()=>{if(!M){let e=formatStringOrUrl(i);return{href:e,as:h?formatStringOrUrl(h):e}}let[e,t]=(0,l.resolveHref)(M,i,!0);return{href:e,as:h?(0,l.resolveHref)(M,h):t||e}},[M,i,h]),w=o.default.useRef(N),K=o.default.useRef(U);T&&(r=o.default.Children.only(n));let D=T?r&&"object"==typeof r&&r.ref:t,[F,H,q]=(0,f.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(K.current!==U||w.current!==N)&&(q(),K.current=U,w.current=N),F(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[U,D,N,q,F]);o.default.useEffect(()=>{A&&H&&L&&prefetch(A,N,U,{locale:O},{kind:S},I)},[U,N,H,O,L,null==M?void 0:M.locale,A,I,S]);let z={ref:V,onClick(e){T||"function"!=typeof C||C(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,l,i,s,a,d,c){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:i,locale:a,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!c,scroll:e})};d?o.default.startTransition(navigate):navigate()}(e,A,N,U,j,g,x,O,I,L)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(L||!I)&&prefetch(A,N,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:S},I)},onTouchStart(e){T||"function"!=typeof P||P(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(L||!I)&&prefetch(A,N,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:S},I)}};if((0,s.isAbsoluteUrl)(U))z.href=U;else if(!T||v||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);z.href=t||(0,_.addBasePath)((0,a.addLocale)(U,e,null==M?void 0:M.defaultLocale))}return T?o.default.cloneElement(r,z):o.default.createElement("a",{...k,...z},n)}),y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},"./node_modules/next/dist/client/use-intersection.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n("./node_modules/react/index.js"),o=n("./node_modules/next/dist/client/request-idle-callback.js"),l="function"==typeof IntersectionObserver,u=new Map,i=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:s}=e,a=s||!l,[d,c]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(l){if(a||d)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!d){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,d,f.current]);let _=(0,r.useCallback)(()=>{c(!1)},[]);return[p,d,_]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},"./node_modules/next/link.js":function(e,t,n){e.exports=n("./node_modules/next/dist/client/link.js")}}]);