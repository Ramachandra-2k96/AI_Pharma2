(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47],{9205:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:u="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...a,width:o,height:o,stroke:n,strokeWidth:l?24*Number(s)/Number(o):s,className:i("lucide",u),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),l=(e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:l,...u}=n;return(0,r.createElement)(s,{ref:a,iconNode:t,className:i("lucide-".concat(o(e)),l),...u})});return n.displayName="".concat(e),n}},2489:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},4742:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},6741:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}n.d(t,{M:function(){return r}})},3966:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(2265),o=n(7437);function i(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let a=r.createContext(i),s=n.length;n=[...n,i];let l=t=>{let{scope:n,children:i,...l}=t,u=n?.[e]?.[s]||a,c=r.useMemo(()=>l,Object.values(l));return(0,o.jsx)(u.Provider,{value:c,children:i})};return l.displayName=t+"Provider",[l,function(n,o){let l=o?.[e]?.[s]||a,u=r.useContext(l);if(u)return u;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},1599:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(2265),o=n(8575),i=n(1188),a=e=>{var t,n;let a,l;let{present:u,children:c}=e,d=function(e){var t,n;let[o,a]=r.useState(),l=r.useRef({}),u=r.useRef(e),c=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=s(l.current);c.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let t=l.current,n=u.current;if(n!==e){let r=c.current,o=s(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),u.current=e}},[e,f]),(0,i.b)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=s(l.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!u.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(c.current=s(l.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),a(e)},[])}}(u),f="function"==typeof c?c({present:d.isPresent}):r.Children.only(c),m=(0,o.e)(d.ref,(a=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in a&&a.isReactWarning?f.ref:(a=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in a&&a.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof c||d.isPresent?r.cloneElement(f,{ref:m}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},1547:function(e,t,n){"use strict";n.d(t,{aU:function(){return ea},x8:function(){return es},dk:function(){return ei},zt:function(){return et},fC:function(){return er},Dx:function(){return eo},l_:function(){return en}});var r,o=n(2265),i=n(4887),a=n(6741),s=n(8575),l=n(7437),u=n(7053),c=n(3966),d=n(6840),f=n(6606),m="dismissableLayer.update",v=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),p=o.forwardRef((e,t)=>{var n,i;let{disableOutsidePointerEvents:u=!1,onEscapeKeyDown:c,onPointerDownOutside:p,onFocusOutside:w,onInteractOutside:E,onDismiss:g,...b}=e,x=o.useContext(v),[T,C]=o.useState(null),N=null!==(i=null==T?void 0:T.ownerDocument)&&void 0!==i?i:null===(n=globalThis)||void 0===n?void 0:n.document,[,P]=o.useState({}),R=(0,s.e)(t,e=>C(e)),L=Array.from(x.layers),[M]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),S=L.indexOf(M),k=T?L.indexOf(T):-1,D=x.layersWithOutsidePointerEventsDisabled.size>0,j=k>=S,O=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,f.W)(e),i=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){h("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!j||n||(null==p||p(e),null==E||E(e),e.defaultPrevented||null==g||g())},N),_=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,f.W)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&h("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==w||w(e),null==E||E(e),e.defaultPrevented||null==g||g())},N);return!function(e,t=globalThis?.document){let n=(0,f.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{k!==x.layers.size-1||(null==c||c(e),!e.defaultPrevented&&g&&(e.preventDefault(),g()))},N),o.useEffect(()=>{if(T)return u&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(T)),x.layers.add(T),y(),()=>{u&&1===x.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[T,N,u,x]),o.useEffect(()=>()=>{T&&(x.layers.delete(T),x.layersWithOutsidePointerEventsDisabled.delete(T),y())},[T,x]),o.useEffect(()=>{let e=()=>P({});return document.addEventListener(m,e),()=>document.removeEventListener(m,e)},[]),(0,l.jsx)(d.WV.div,{...b,ref:R,style:{pointerEvents:D?j?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.M)(e.onFocusCapture,_.onFocusCapture),onBlurCapture:(0,a.M)(e.onBlurCapture,_.onBlurCapture),onPointerDownCapture:(0,a.M)(e.onPointerDownCapture,O.onPointerDownCapture)})});p.displayName="DismissableLayer";var w=o.forwardRef((e,t)=>{let n=o.useContext(v),r=o.useRef(null),i=(0,s.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(d.WV.div,{...e,ref:i})});function y(){let e=new CustomEvent(m);document.dispatchEvent(e)}function h(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,d.jH)(i,a):i.dispatchEvent(a)}w.displayName="DismissableLayerBranch";var E=n(1188),g=o.forwardRef((e,t)=>{var n,r;let{container:a,...s}=e,[u,c]=o.useState(!1);(0,E.b)(()=>c(!0),[]);let f=a||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return f?i.createPortal((0,l.jsx)(d.WV.div,{...s,ref:t}),f):null});g.displayName="Portal";var b=n(1599),x=o.forwardRef((e,t)=>(0,l.jsx)(d.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));x.displayName="VisuallyHidden";var T="ToastProvider",[C,N,P]=function(e){let t=e+"CollectionProvider",[n,r]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=o.createContext(r),a=n.length;function s(t){let{scope:n,children:r,...s}=t,u=n?.[e][a]||i,c=o.useMemo(()=>s,Object.values(s));return(0,l.jsx)(u.Provider,{value:c,children:r})}return n=[...n,r],s.displayName=t+"Provider",[s,function(n,s){let l=s?.[e][a]||i,u=o.useContext(l);if(u)return u;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:n}=e,r=o.useRef(null),a=o.useRef(new Map).current;return(0,l.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})};c.displayName=t;let d=e+"CollectionSlot",f=o.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=a(d,n),i=(0,s.e)(t,o.collectionRef);return(0,l.jsx)(u.g7,{ref:i,children:r})});f.displayName=d;let m=e+"CollectionItemSlot",v="data-radix-collection-item",p=o.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,c=o.useRef(null),d=(0,s.e)(t,c),f=a(m,n);return o.useEffect(()=>(f.itemMap.set(c,{ref:c,...i}),()=>void f.itemMap.delete(c))),(0,l.jsx)(u.g7,{[v]:"",ref:d,children:r})});return p.displayName=m,[{Provider:c,Slot:f,ItemSlot:p},function(t){let n=a(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},r]}("Toast"),[R,L]=(0,c.b)("Toast",[P]),[M,S]=R(T),k=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:s}=e,[u,c]=o.useState(null),[d,f]=o.useState(0),m=o.useRef(!1),v=o.useRef(!1);return n.trim()||console.error("Invalid prop `label` supplied to `".concat(T,"`. Expected non-empty `string`.")),(0,l.jsx)(C.Provider,{scope:t,children:(0,l.jsx)(M,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:d,viewport:u,onViewportChange:c,onToastAdd:o.useCallback(()=>f(e=>e+1),[]),onToastRemove:o.useCallback(()=>f(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:v,children:s})})};k.displayName=T;var D="ToastViewport",j=["F8"],O="toast.viewportPause",_="toast.viewportResume",A=o.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=j,label:i="Notifications ({hotkey})",...a}=e,u=S(D,n),c=N(n),f=o.useRef(null),m=o.useRef(null),v=o.useRef(null),p=o.useRef(null),y=(0,s.e)(t,p,u.onViewportChange),h=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=u.toastCount>0;o.useEffect(()=>{let e=e=>{var t;0!==r.length&&r.every(t=>e[t]||e.code===t)&&(null===(t=p.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),o.useEffect(()=>{let e=f.current,t=p.current;if(E&&e&&t){let n=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(O);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},r=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(_);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||r()},i=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[E,u.isClosePausedRef]);let g=o.useCallback(e=>{let{tabbingDirection:t}=e,n=c().map(e=>{let n=e.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===t?r:r.reverse()});return("forwards"===t?n.reverse():n).flat()},[c]);return o.useEffect(()=>{let e=p.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var r,o,i;let n=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(r=m.current)||void 0===r||r.focus();return}let s=g({tabbingDirection:a?"backwards":"forwards"}),l=s.findIndex(e=>e===n);ee(s.slice(l+1))?t.preventDefault():a?null===(o=m.current)||void 0===o||o.focus():null===(i=v.current)||void 0===i||i.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,g]),(0,l.jsxs)(w,{ref:f,role:"region","aria-label":i.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:E?void 0:"none"},children:[E&&(0,l.jsx)(W,{ref:m,onFocusFromOutsideViewport:()=>{ee(g({tabbingDirection:"forwards"}))}}),(0,l.jsx)(C.Slot,{scope:n,children:(0,l.jsx)(d.WV.ol,{tabIndex:-1,...a,ref:y})}),E&&(0,l.jsx)(W,{ref:v,onFocusFromOutsideViewport:()=>{ee(g({tabbingDirection:"backwards"}))}})]})});A.displayName=D;var I="ToastFocusProxy",W=o.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=S(I,n);return(0,l.jsx)(x,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;(null===(t=i.viewport)||void 0===t?void 0:t.contains(n))||r()}})});W.displayName=I;var F="Toast",V=o.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:i,onOpenChange:s,...u}=e,[c=!0,d]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,i=o.useRef(r),a=(0,f.W)(t);return o.useEffect(()=>{i.current!==r&&(a(r),i.current=r)},[r,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,s=a?e:r,l=(0,f.W)(n);return[s,o.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[a,e,i,l])]}({prop:r,defaultProp:i,onChange:s});return(0,l.jsx)(b.z,{present:n||c,children:(0,l.jsx)($,{open:c,...u,ref:t,onClose:()=>d(!1),onPause:(0,f.W)(e.onPause),onResume:(0,f.W)(e.onResume),onSwipeStart:(0,a.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,a.M)(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(n,"px"))}),onSwipeCancel:(0,a.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,a.M)(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(n,"px")),d(!1)})})})});V.displayName=F;var[K,U]=R(F,{onClose(){}}),$=o.forwardRef((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:u,open:c,onClose:m,onEscapeKeyDown:v,onPause:w,onResume:y,onSwipeStart:h,onSwipeMove:E,onSwipeCancel:g,onSwipeEnd:b,...x}=e,T=S(F,n),[N,P]=o.useState(null),R=(0,s.e)(t,e=>P(e)),L=o.useRef(null),M=o.useRef(null),k=u||T.duration,D=o.useRef(0),j=o.useRef(k),A=o.useRef(0),{onToastAdd:I,onToastRemove:W}=T,V=(0,f.W)(()=>{var e;(null==N?void 0:N.contains(document.activeElement))&&(null===(e=T.viewport)||void 0===e||e.focus()),m()}),U=o.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(A.current),D.current=new Date().getTime(),A.current=window.setTimeout(V,e))},[V]);o.useEffect(()=>{let e=T.viewport;if(e){let t=()=>{U(j.current),null==y||y()},n=()=>{let e=new Date().getTime()-D.current;j.current=j.current-e,window.clearTimeout(A.current),null==w||w()};return e.addEventListener(O,n),e.addEventListener(_,t),()=>{e.removeEventListener(O,n),e.removeEventListener(_,t)}}},[T.viewport,k,w,y,U]),o.useEffect(()=>{c&&!T.isClosePausedRef.current&&U(k)},[c,k,T.isClosePausedRef,U]),o.useEffect(()=>(I(),()=>W()),[I,W]);let $=o.useMemo(()=>N?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(N):null,[N]);return T.viewport?(0,l.jsxs)(l.Fragment,{children:[$&&(0,l.jsx)(z,{__scopeToast:n,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0,children:$}),(0,l.jsx)(K,{scope:n,onClose:V,children:i.createPortal((0,l.jsx)(C.ItemSlot,{scope:n,children:(0,l.jsx)(p,{asChild:!0,onEscapeKeyDown:(0,a.M)(v,()=>{T.isFocusedToastEscapeKeyDownRef.current||V(),T.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,l.jsx)(d.WV.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":T.swipeDirection,...x,ref:R,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==v||v(e.nativeEvent),e.nativeEvent.defaultPrevented||(T.isFocusedToastEscapeKeyDownRef.current=!0,V()))}),onPointerDown:(0,a.M)(e.onPointerDown,e=>{0===e.button&&(L.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,a.M)(e.onPointerMove,e=>{if(!L.current)return;let t=e.clientX-L.current.x,n=e.clientY-L.current.y,r=!!M.current,o=["left","right"].includes(T.swipeDirection),i=["left","up"].includes(T.swipeDirection)?Math.min:Math.max,a=o?i(0,t):0,s=o?0:i(0,n),l="touch"===e.pointerType?10:2,u={x:a,y:s},c={originalEvent:e,delta:u};r?(M.current=u,G("toast.swipeMove",E,c,{discrete:!1})):Q(u,T.swipeDirection,l)?(M.current=u,G("toast.swipeStart",h,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(n)>l)&&(L.current=null)}),onPointerUp:(0,a.M)(e.onPointerUp,e=>{let t=M.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),M.current=null,L.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};Q(t,T.swipeDirection,T.swipeThreshold)?G("toast.swipeEnd",b,r,{discrete:!0}):G("toast.swipeCancel",g,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),T.viewport)})]}):null}),z=e=>{let{__scopeToast:t,children:n,...r}=e,i=S(F,t),[a,s]=o.useState(!1),[u,c]=o.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,f.W)(e);(0,E.b)(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>s(!0)),o.useEffect(()=>{let e=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,l.jsx)(g,{asChild:!0,children:(0,l.jsx)(x,{...r,children:a&&(0,l.jsxs)(l.Fragment,{children:[i.label," ",n]})})})},B=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,l.jsx)(d.WV.div,{...r,ref:t})});B.displayName="ToastTitle";var H=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,l.jsx)(d.WV.div,{...r,ref:t})});H.displayName="ToastDescription";var X="ToastAction",Z=o.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,l.jsx)(Y,{altText:n,asChild:!0,children:(0,l.jsx)(J,{...r,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(X,"`. Expected non-empty `string`.")),null)});Z.displayName=X;var q="ToastClose",J=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,o=U(q,n);return(0,l.jsx)(Y,{asChild:!0,children:(0,l.jsx)(d.WV.button,{type:"button",...r,ref:t,onClick:(0,a.M)(e.onClick,o.onClose)})})});J.displayName=q;var Y=o.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return(0,l.jsx)(d.WV.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function G(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,d.jH)(i,a):i.dispatchEvent(a)}var Q=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function ee(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var et=k,en=A,er=V,eo=B,ei=H,ea=Z,es=J},6606:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1188:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}},5922:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(2265),o=["light","dark"],i="(prefers-color-scheme: dark)",a="undefined"==typeof window,s=r.createContext(void 0),l=e=>r.useContext(s)?e.children:r.createElement(c,{...e}),u=["light","dark"],c=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:p=u,defaultTheme:w=a?"system":"light",attribute:y="data-theme",value:h,children:E,nonce:g}=e,[b,x]=r.useState(()=>f(c,w)),[T,C]=r.useState(()=>f(c)),N=h?Object.values(h):p,P=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=v());let r=h?h[t]:t,i=n?m():null,s=document.documentElement;if("class"===y?(s.classList.remove(...N),r&&s.classList.add(r)):r?s.setAttribute(y,r):s.removeAttribute(y),l){let e=o.includes(w)?w:null,n=o.includes(t)?t:e;s.style.colorScheme=n}null==i||i()},[]),R=r.useCallback(e=>{let t="function"==typeof e?e(e):e;x(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),L=r.useCallback(e=>{C(v(e)),"system"===b&&a&&!t&&P("system")},[b,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),r.useEffect(()=>{let e=e=>{e.key===c&&R(e.newValue||w)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[R]),r.useEffect(()=>{P(null!=t?t:b)},[t,b]);let M=r.useMemo(()=>({theme:b,setTheme:R,forcedTheme:t,resolvedTheme:"system"===b?T:b,themes:a?[...p,"system"]:p,systemTheme:a?T:void 0}),[b,R,t,T,a,p]);return r.createElement(s.Provider,{value:M},r.createElement(d,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:l,storageKey:c,themes:p,defaultTheme:w,attribute:y,value:h,children:E,attrs:N,nonce:g}),E)},d=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:s,enableColorScheme:l,defaultTheme:u,value:c,attrs:d,nonce:f}=e,m="system"===u,v="class"===a?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),p=l?(o.includes(u)?u:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",w=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=c?c[e]:e,i=t?e+"|| ''":"'".concat(r,"'"),s="";return l&&n&&!t&&o.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===a?t||r?s+="c.add(".concat(i,")"):s+="null":r&&(s+="d[s](n,".concat(i,")")),s},y=t?"!function(){".concat(v).concat(w(t),"}()"):s?"!function(){try{".concat(v,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(i,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(w("dark"),"}else{").concat(w("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(w(c?"x[e]":"e",!0),"}").concat(m?"":"else{"+w(u,!1,!1)+"}").concat(p,"}catch(e){}}()"):"!function(){try{".concat(v,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(w(c?"x[e]":"e",!0),"}else{").concat(w(u,!1,!1),";}").concat(p,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:y}})}),f=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);