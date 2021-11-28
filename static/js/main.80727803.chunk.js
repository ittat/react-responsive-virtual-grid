/*! For license information please see main.80727803.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-responsive-virtual-grid-example"]=this["webpackJsonpreact-responsive-virtual-grid-example"]||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(4),c=r.n(i),s=r(5),a=r(3),l=r.n(a);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function d(e,t){return e(t={exports:{}},t.exports),t.exports}var p="function"===typeof Symbol&&Symbol.for,h=p?Symbol.for("react.element"):60103,y=p?Symbol.for("react.portal"):60106,b=p?Symbol.for("react.fragment"):60107,m=p?Symbol.for("react.strict_mode"):60108,w=p?Symbol.for("react.profiler"):60114,v=p?Symbol.for("react.provider"):60109,j=p?Symbol.for("react.context"):60110,O=p?Symbol.for("react.async_mode"):60111,g=p?Symbol.for("react.concurrent_mode"):60111,x=p?Symbol.for("react.forward_ref"):60112,S=p?Symbol.for("react.suspense"):60113,R=p?Symbol.for("react.suspense_list"):60120,M=p?Symbol.for("react.memo"):60115,$=p?Symbol.for("react.lazy"):60116,k=p?Symbol.for("react.block"):60121,C=p?Symbol.for("react.fundamental"):60117,E=p?Symbol.for("react.responder"):60118,P=p?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case h:switch(e=e.type){case O:case g:case b:case w:case m:case S:return e;default:switch(e=e&&e.$$typeof){case j:case x:case $:case M:case v:return e;default:return t}}case y:return t}}}function I(e){return _(e)===g}var T={AsyncMode:O,ConcurrentMode:g,ContextConsumer:j,ContextProvider:v,Element:h,ForwardRef:x,Fragment:b,Lazy:$,Memo:M,Portal:y,Profiler:w,StrictMode:m,Suspense:S,isAsyncMode:function(e){return I(e)||_(e)===O},isConcurrentMode:I,isContextConsumer:function(e){return _(e)===j},isContextProvider:function(e){return _(e)===v},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===h},isForwardRef:function(e){return _(e)===x},isFragment:function(e){return _(e)===b},isLazy:function(e){return _(e)===$},isMemo:function(e){return _(e)===M},isPortal:function(e){return _(e)===y},isProfiler:function(e){return _(e)===w},isStrictMode:function(e){return _(e)===m},isSuspense:function(e){return _(e)===S},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===b||e===g||e===w||e===m||e===S||e===R||"object"===typeof e&&null!==e&&(e.$$typeof===$||e.$$typeof===M||e.$$typeof===v||e.$$typeof===j||e.$$typeof===x||e.$$typeof===C||e.$$typeof===E||e.$$typeof===P||e.$$typeof===k)},typeOf:_},q=(d((function(e,t){0})),d((function(e){e.exports=T})),Object.getOwnPropertySymbols),F=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;function W(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}})()&&Object.assign;var z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function V(e,t,r,n,o){}V.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function A(){}function H(){}H.resetWarningCache=A;var N=d((function(e){e.exports=function(){function e(e,t,r,n,o,i){if(i!==z){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:H,resetWarningCache:A};return r.PropTypes=r,r}()})),B=function(e){var t,r=e.cell,o=e.total,i=e.rowOffset,c=Object(n.useRef)(),a=function(){var e="object"===typeof window,t=Object(n.useMemo)((function(){return l()(32)}),[]);function r(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var o=Object(n.useState)(r),i=o[0],c=o[1];return Object(n.useEffect)((function(){if(!e)return!1;function n(){r()!==i&&t((function(){return c(r())}))}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),i}(),f=Object(s.a)({threshold:0}),d=f.ref,p=f.entry,h=(p=void 0===p?{}:p).boundingClientRect,y=void 0===h?{}:h,b=Object(n.useCallback)((function(e){c.current=e,d(e)}),[]),m=Object(n.useMemo)((function(){var e,t={},n={},s={};return s.width=null===(e=c.current)||void 0===e?void 0:e.clientWidth,t.total=Math.floor(s.width/r.width),n.total=Math.ceil(o/t.total),s.top=(null===y||void 0===y?void 0:y.top)||0,s.height=n.total*r.height,t.height=s.height,t.width=Math.floor(s.width/t.total),n.height=r.height,n.width=s.width,{display:{cell:r,columns:t,rows:n,layout:s,total:o,rowOffset:i,viewport:{columns:u({},t,{total:t.total}),rows:u({},n,{total:Math.ceil(a.height/n.height)+i})}},style:{position:"relative",height:s.height+"px"}}}),[r.height,r.width,a.height,a.width,i,o,null===(t=c.current)||void 0===t?void 0:t.clientWidth,null===y||void 0===y?void 0:y.top]);return{display:m.display,style:m.style,ref:b}},D=function(e){var t=e.cell,r=e.total,o=e.viewportRowOffset,i=void 0===o?4:o,c=e.onRender,s=Math.max(2,2*Math.round(i/2)),a=B({cell:t,total:r,rowOffset:s}),u=a.display,f=a.style,d=a.ref,p=function(e){var t=e.layout,r=e.cell,o=e.rowOffset,i="object"===typeof window,c=Object(n.useRef)(),s=Object(n.useMemo)((function(){return l()(200)}),[]);c.current=function(){var e=Math.max(0,window.scrollY-t.top),n=Math.floor(e/r.height);return Math.max(0,n-o/2)};var a=Object(n.useState)(c.current),u=a[0],f=a[1],d=Object(n.useState)(!1),p=d[0],h=d[1];return Object(n.useEffect)((function(){if(!i)return!1;var e=function(){f(c.current()),h(!0),s((function(){return h(!1)}))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),{firstRowIndex:u,scrolling:p}}(u),h=function(e){var t=e.firstRowIndex,r=e.scrolling,o=e.display,i=e.onRender,c=Object(n.useState)([]),s=c[0],a=c[1];return Object(n.useMemo)((function(){for(var e={},n=t*o.columns.total,c=Math.min(o.total,n+o.viewport.rows.total*o.viewport.columns.total);n<c;n++){var l=Math.min(o.rows.total,Math.floor(n/o.columns.total)),u=n%o.columns.total;e[l+"-"+u]={key:l+"-"+u,index:n,scrolling:r,readyInViewport:s.includes(l+"-"+u),style:{position:"absolute",height:o.rows.height,width:o.columns.width,transform:"translate3d("+u*o.columns.width+"px, "+l*o.rows.height+"px, 0px)"}}}return"function"===typeof i&&i(Object.values(e)),r||a(Object.keys(e)),Object.values(e)}),[t,o,i,r])}({firstRowIndex:p.firstRowIndex,scrolling:p.scrolling,display:u,onRender:c});return{container:{ref:d,style:f},children:h}},J=["render"],U=["key"],Y=function(e){var t=e.render,r=f(e,J),n=D(r),i=n.container,c=n.children;return o.a.createElement("div",i,c.map((function(e){var r=e.key,n=f(e,U);return o.a.createElement(t,u({key:r},n))})))};Y.propTypes={cell:N.shape({height:N.number.isRequired,width:N.number.isRequired}).isRequired,total:N.number.isRequired,onRender:N.func,viewportRowOffset:N.number,render:N.func.isRequired};var G=Object(n.memo)(Y),K=r(1);const Q=e=>{let{style:t,index:r,readyInViewport:n,scrolling:o}=e;return Object(K.jsx)("div",{style:{display:"flex",...t},children:Object(K.jsxs)("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"gainsboro",margin:"1em"},children:[Object(K.jsxs)("span",{style:{position:"absolute"},children:["Pcisum #",r,o?" - Scrolling":"",n?" - ReadyInViewport":""]}),Object(K.jsx)("img",{src:"https://picsum.photos/id/".concat(r,"/304/160"),alt:"Pcisum #".concat(r).concat(o?" - Scrolling":""),style:{objectFit:"cover"},width:"100%",height:"100%",loading:"lazy"})]})})};var X=e=>{let{...t}=e;return Object(K.jsxs)("section",{children:[Object(K.jsx)("header",{style:{height:"10em",background:"tan"},children:Object(K.jsx)("h1",{children:"Header"})}),Object(K.jsxs)("div",{style:{margin:"2em"},children:[Object(K.jsx)("h2",{children:"Anywhere, in any Container"}),Object(K.jsx)(G,{total:4e3,cell:{height:160,width:200},render:Q,viewportRowOffset:10})]}),Object(K.jsx)("footer",{style:{height:"10em",background:"thistle"},children:Object(K.jsx)("p",{children:"Footer"})})]})};c.a.render(Object(K.jsx)(X,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.80727803.chunk.js.map