(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1934:function(e,t,n){Promise.resolve().then(n.t.bind(n,2972,23))},6958:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8521),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2972:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(7043),o=n(7437),l=r._(n(2265)),u=n(5246),f=n(3552),i=n(7497),a=n(3987),c=n(5449),s=n(5523),d=n(1956),p=n(6081),y=n(6958),b=n(1634),h=n(4673),v=new Set;function g(e,t,n,r,o,l){if("undefined"!=typeof window&&(l||(0,f.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}(async()=>l?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let j=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:v,children:j,prefetch:m=null,passHref:C,replace:k,shallow:M,scroll:P,locale:O,onClick:E,onMouseEnter:L,onTouchStart:x,legacyBehavior:w=!1,...R}=e;n=j,w&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let I=l.default.useContext(s.RouterContext),T=l.default.useContext(d.AppRouterContext),S=null!=I?I:T,U=!I,K=!1!==m,A=null===m?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:D,as:N}=l.default.useMemo(()=>{if(!I){let e=_(i);return{href:e,as:v?_(v):e}}let[e,t]=(0,u.resolveHref)(I,i,!0);return{href:e,as:v?(0,u.resolveHref)(I,v):t||e}},[I,i,v]),H=l.default.useRef(D),q=l.default.useRef(N);w&&(r=l.default.Children.only(n));let z=w?r&&"object"==typeof r&&r.ref:t,[B,F,G]=(0,p.useIntersection)({rootMargin:"200px"}),J=l.default.useCallback(e=>{(q.current!==N||H.current!==D)&&(G(),q.current=N,H.current=D),B(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[N,z,D,G,B]);l.default.useEffect(()=>{S&&F&&K&&g(S,D,N,{locale:O},{kind:A},U)},[N,D,F,O,K,null==I?void 0:I.locale,S,U,A]);let Q={ref:J,onClick(e){w||"function"!=typeof E||E(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,o,u,i,a,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:a,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?l.default.startTransition(d):d()}(e,S,D,N,k,M,P,O,U)},onMouseEnter(e){w||"function"!=typeof L||L(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(K||!U)&&g(S,D,N,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:A},U)},onTouchStart:function(e){w||"function"!=typeof x||x(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(K||!U)&&g(S,D,N,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:A},U)}};if((0,a.isAbsoluteUrl)(N))Q.href=N;else if(!w||C||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,y.getDomainLocale)(N,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);Q.href=t||(0,b.addBasePath)((0,c.addLocale)(N,e,null==I?void 0:I.defaultLocale))}return w?l.default.cloneElement(r,Q):(0,o.jsx)("a",{...R,...Q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6081:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(2265),o=n(3515),l="function"==typeof IntersectionObserver,u=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!l,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(a||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[600,971,117,744],function(){return e(e.s=1934)}),_N_E=e.O()}]);