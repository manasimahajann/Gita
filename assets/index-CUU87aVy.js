(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function ml(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Hh={exports:{}},rr={},Wh={exports:{}},E={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qt=Symbol.for("react.element"),ul=Symbol.for("react.portal"),pl=Symbol.for("react.fragment"),cl=Symbol.for("react.strict_mode"),yl=Symbol.for("react.profiler"),vl=Symbol.for("react.provider"),bl=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),wl=Symbol.for("react.memo"),kl=Symbol.for("react.lazy"),Ds=Symbol.iterator;function _l(a){return a===null||typeof a!="object"?null:(a=Ds&&a[Ds]||a["@@iterator"],typeof a=="function"?a:null)}var Qh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qh=Object.assign,Xh={};function st(a,e,t){this.props=a,this.context=e,this.refs=Xh,this.updater=t||Qh}st.prototype.isReactComponent={};st.prototype.setState=function(a,e){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,e,"setState")};st.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function Zh(){}Zh.prototype=st.prototype;function Ki(a,e,t){this.props=a,this.context=e,this.refs=Xh,this.updater=t||Qh}var Fi=Ki.prototype=new Zh;Fi.constructor=Ki;qh(Fi,st.prototype);Fi.isPureReactComponent=!0;var Os=Array.isArray,Jh=Object.prototype.hasOwnProperty,Ui={current:null},ao={key:!0,ref:!0,__self:!0,__source:!0};function eo(a,e,t){var n,r={},i=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(i=""+e.key),e)Jh.call(e,n)&&!ao.hasOwnProperty(n)&&(r[n]=e[n]);var h=arguments.length-2;if(h===1)r.children=t;else if(1<h){for(var o=Array(h),l=0;l<h;l++)o[l]=arguments[l+2];r.children=o}if(a&&a.defaultProps)for(n in h=a.defaultProps,h)r[n]===void 0&&(r[n]=h[n]);return{$$typeof:Qt,type:a,key:i,ref:s,props:r,_owner:Ui.current}}function xl(a,e){return{$$typeof:Qt,type:a.type,key:e,ref:a.ref,props:a.props,_owner:a._owner}}function $i(a){return typeof a=="object"&&a!==null&&a.$$typeof===Qt}function jl(a){var e={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(t){return e[t]})}var Ms=/\/+/g;function xr(a,e){return typeof a=="object"&&a!==null&&a.key!=null?jl(""+a.key):e.toString(36)}function wn(a,e,t,n,r){var i=typeof a;(i==="undefined"||i==="boolean")&&(a=null);var s=!1;if(a===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(a.$$typeof){case Qt:case ul:s=!0}}if(s)return s=a,r=r(s),a=n===""?"."+xr(s,0):n,Os(r)?(t="",a!=null&&(t=a.replace(Ms,"$&/")+"/"),wn(r,e,t,"",function(l){return l})):r!=null&&($i(r)&&(r=xl(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Ms,"$&/")+"/")+a)),e.push(r)),1;if(s=0,n=n===""?".":n+":",Os(a))for(var h=0;h<a.length;h++){i=a[h];var o=n+xr(i,h);s+=wn(i,e,t,o,r)}else if(o=_l(a),typeof o=="function")for(a=o.call(a),h=0;!(i=a.next()).done;)i=i.value,o=n+xr(i,h++),s+=wn(i,e,t,o,r);else if(i==="object")throw e=String(a),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function tn(a,e,t){if(a==null)return a;var n=[],r=0;return wn(a,n,"","",function(i){return e.call(t,i,r++)}),n}function Sl(a){if(a._status===-1){var e=a._result;e=e(),e.then(function(t){(a._status===0||a._status===-1)&&(a._status=1,a._result=t)},function(t){(a._status===0||a._status===-1)&&(a._status=2,a._result=t)}),a._status===-1&&(a._status=0,a._result=e)}if(a._status===1)return a._result.default;throw a._result}var oa={current:null},kn={transition:null},Pl={ReactCurrentDispatcher:oa,ReactCurrentBatchConfig:kn,ReactCurrentOwner:Ui};function to(){throw Error("act(...) is not supported in production builds of React.")}E.Children={map:tn,forEach:function(a,e,t){tn(a,function(){e.apply(this,arguments)},t)},count:function(a){var e=0;return tn(a,function(){e++}),e},toArray:function(a){return tn(a,function(e){return e})||[]},only:function(a){if(!$i(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};E.Component=st;E.Fragment=pl;E.Profiler=yl;E.PureComponent=Ki;E.StrictMode=cl;E.Suspense=fl;E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pl;E.act=to;E.cloneElement=function(a,e,t){if(a==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var n=qh({},a.props),r=a.key,i=a.ref,s=a._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,s=Ui.current),e.key!==void 0&&(r=""+e.key),a.type&&a.type.defaultProps)var h=a.type.defaultProps;for(o in e)Jh.call(e,o)&&!ao.hasOwnProperty(o)&&(n[o]=e[o]===void 0&&h!==void 0?h[o]:e[o])}var o=arguments.length-2;if(o===1)n.children=t;else if(1<o){h=Array(o);for(var l=0;l<o;l++)h[l]=arguments[l+2];n.children=h}return{$$typeof:Qt,type:a.type,key:r,ref:i,props:n,_owner:s}};E.createContext=function(a){return a={$$typeof:bl,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},a.Provider={$$typeof:vl,_context:a},a.Consumer=a};E.createElement=eo;E.createFactory=function(a){var e=eo.bind(null,a);return e.type=a,e};E.createRef=function(){return{current:null}};E.forwardRef=function(a){return{$$typeof:gl,render:a}};E.isValidElement=$i;E.lazy=function(a){return{$$typeof:kl,_payload:{_status:-1,_result:a},_init:Sl}};E.memo=function(a,e){return{$$typeof:wl,type:a,compare:e===void 0?null:e}};E.startTransition=function(a){var e=kn.transition;kn.transition={};try{a()}finally{kn.transition=e}};E.unstable_act=to;E.useCallback=function(a,e){return oa.current.useCallback(a,e)};E.useContext=function(a){return oa.current.useContext(a)};E.useDebugValue=function(){};E.useDeferredValue=function(a){return oa.current.useDeferredValue(a)};E.useEffect=function(a,e){return oa.current.useEffect(a,e)};E.useId=function(){return oa.current.useId()};E.useImperativeHandle=function(a,e,t){return oa.current.useImperativeHandle(a,e,t)};E.useInsertionEffect=function(a,e){return oa.current.useInsertionEffect(a,e)};E.useLayoutEffect=function(a,e){return oa.current.useLayoutEffect(a,e)};E.useMemo=function(a,e){return oa.current.useMemo(a,e)};E.useReducer=function(a,e,t){return oa.current.useReducer(a,e,t)};E.useRef=function(a){return oa.current.useRef(a)};E.useState=function(a){return oa.current.useState(a)};E.useSyncExternalStore=function(a,e,t){return oa.current.useSyncExternalStore(a,e,t)};E.useTransition=function(){return oa.current.useTransition()};E.version="18.3.1";Wh.exports=E;var X=Wh.exports;const je=ml(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Il=X,Cl=Symbol.for("react.element"),Vl=Symbol.for("react.fragment"),El=Object.prototype.hasOwnProperty,Al=Il.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ll={key:!0,ref:!0,__self:!0,__source:!0};function no(a,e,t){var n,r={},i=null,s=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)El.call(e,n)&&!Ll.hasOwnProperty(n)&&(r[n]=e[n]);if(a&&a.defaultProps)for(n in e=a.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:Cl,type:a,key:i,ref:s,props:r,_owner:Al.current}}rr.Fragment=Vl;rr.jsx=no;rr.jsxs=no;Hh.exports=rr;var P=Hh.exports,ro={exports:{}},fa={},io={exports:{}},so={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(a){function e(x,C){var V=x.length;x.push(C);a:for(;0<V;){var $=V-1>>>1,Q=x[$];if(0<r(Q,C))x[$]=C,x[V]=Q,V=$;else break a}}function t(x){return x.length===0?null:x[0]}function n(x){if(x.length===0)return null;var C=x[0],V=x.pop();if(V!==C){x[0]=V;a:for(var $=0,Q=x.length,an=Q>>>1;$<an;){var be=2*($+1)-1,_r=x[be],ge=be+1,en=x[ge];if(0>r(_r,V))ge<Q&&0>r(en,_r)?(x[$]=en,x[ge]=V,$=ge):(x[$]=_r,x[be]=V,$=be);else if(ge<Q&&0>r(en,V))x[$]=en,x[ge]=V,$=ge;else break a}}return C}function r(x,C){var V=x.sortIndex-C.sortIndex;return V!==0?V:x.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;a.unstable_now=function(){return i.now()}}else{var s=Date,h=s.now();a.unstable_now=function(){return s.now()-h}}var o=[],l=[],y=1,c=null,p=3,v=!1,f=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(x){for(var C=t(l);C!==null;){if(C.callback===null)n(l);else if(C.startTime<=x)n(l),C.sortIndex=C.expirationTime,e(o,C);else break;C=t(l)}}function b(x){if(w=!1,u(x),!f)if(t(o)!==null)f=!0,wr(_);else{var C=t(l);C!==null&&kr(b,C.startTime-x)}}function _(x,C){f=!1,w&&(w=!1,m(I),I=-1),v=!0;var V=p;try{for(u(C),c=t(o);c!==null&&(!(c.expirationTime>C)||x&&!Ia());){var $=c.callback;if(typeof $=="function"){c.callback=null,p=c.priorityLevel;var Q=$(c.expirationTime<=C);C=a.unstable_now(),typeof Q=="function"?c.callback=Q:c===t(o)&&n(o),u(C)}else n(o);c=t(o)}if(c!==null)var an=!0;else{var be=t(l);be!==null&&kr(b,be.startTime-C),an=!1}return an}finally{c=null,p=V,v=!1}}var j=!1,S=null,I=-1,U=5,A=-1;function Ia(){return!(a.unstable_now()-A<U)}function dt(){if(S!==null){var x=a.unstable_now();A=x;var C=!0;try{C=S(!0,x)}finally{C?lt():(j=!1,S=null)}}else j=!1}var lt;if(typeof d=="function")lt=function(){d(dt)};else if(typeof MessageChannel<"u"){var Ts=new MessageChannel,ll=Ts.port2;Ts.port1.onmessage=dt,lt=function(){ll.postMessage(null)}}else lt=function(){L(dt,0)};function wr(x){S=x,j||(j=!0,lt())}function kr(x,C){I=L(function(){x(a.unstable_now())},C)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(x){x.callback=null},a.unstable_continueExecution=function(){f||v||(f=!0,wr(_))},a.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<x?Math.floor(1e3/x):5},a.unstable_getCurrentPriorityLevel=function(){return p},a.unstable_getFirstCallbackNode=function(){return t(o)},a.unstable_next=function(x){switch(p){case 1:case 2:case 3:var C=3;break;default:C=p}var V=p;p=C;try{return x()}finally{p=V}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(x,C){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var V=p;p=x;try{return C()}finally{p=V}},a.unstable_scheduleCallback=function(x,C,V){var $=a.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?$+V:$):V=$,x){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=V+Q,x={id:y++,callback:C,priorityLevel:x,startTime:V,expirationTime:Q,sortIndex:-1},V>$?(x.sortIndex=V,e(l,x),t(o)===null&&x===t(l)&&(w?(m(I),I=-1):w=!0,kr(b,V-$))):(x.sortIndex=Q,e(o,x),f||v||(f=!0,wr(_))),x},a.unstable_shouldYield=Ia,a.unstable_wrapCallback=function(x){var C=p;return function(){var V=p;p=C;try{return x.apply(this,arguments)}finally{p=V}}}})(so);io.exports=so;var Nl=io.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zl=X,ga=Nl;function g(a){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+a,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ho=new Set,Lt={};function Le(a,e){Je(a,e),Je(a+"Capture",e)}function Je(a,e){for(Lt[a]=e,a=0;a<e.length;a++)ho.add(e[a])}var Ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qr=Object.prototype.hasOwnProperty,Tl=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rs={},Bs={};function Dl(a){return Qr.call(Bs,a)?!0:Qr.call(Rs,a)?!1:Tl.test(a)?Bs[a]=!0:(Rs[a]=!0,!1)}function Ol(a,e,t,n){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function Ml(a,e,t,n){if(e===null||typeof e>"u"||Ol(a,e,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function da(a,e,t,n,r,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=a,this.type=e,this.sanitizeURL=i,this.removeEmptyString=s}var ea={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){ea[a]=new da(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var e=a[0];ea[e]=new da(e,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){ea[a]=new da(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){ea[a]=new da(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){ea[a]=new da(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){ea[a]=new da(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){ea[a]=new da(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){ea[a]=new da(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){ea[a]=new da(a,5,!1,a.toLowerCase(),null,!1,!1)});var Yi=/[\-:]([a-z])/g;function Gi(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var e=a.replace(Yi,Gi);ea[e]=new da(e,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var e=a.replace(Yi,Gi);ea[e]=new da(e,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var e=a.replace(Yi,Gi);ea[e]=new da(e,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){ea[a]=new da(a,1,!1,a.toLowerCase(),null,!1,!1)});ea.xlinkHref=new da("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){ea[a]=new da(a,1,!1,a.toLowerCase(),null,!0,!0)});function Hi(a,e,t,n){var r=ea.hasOwnProperty(e)?ea[e]:null;(r!==null?r.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ml(e,t,r,n)&&(t=null),n||r===null?Dl(e)&&(t===null?a.removeAttribute(e):a.setAttribute(e,""+t)):r.mustUseProperty?a[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,n=r.attributeNamespace,t===null?a.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,n?a.setAttributeNS(n,e,t):a.setAttribute(e,t))))}var Qa=zl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nn=Symbol.for("react.element"),Te=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),Wi=Symbol.for("react.strict_mode"),qr=Symbol.for("react.profiler"),oo=Symbol.for("react.provider"),lo=Symbol.for("react.context"),Qi=Symbol.for("react.forward_ref"),Xr=Symbol.for("react.suspense"),Zr=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Xa=Symbol.for("react.lazy"),mo=Symbol.for("react.offscreen"),Ks=Symbol.iterator;function mt(a){return a===null||typeof a!="object"?null:(a=Ks&&a[Ks]||a["@@iterator"],typeof a=="function"?a:null)}var K=Object.assign,jr;function ft(a){if(jr===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);jr=e&&e[1]||""}return`
`+jr+a}var Sr=!1;function Pr(a,e){if(!a||Sr)return"";Sr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var n=l}Reflect.construct(a,[],e)}else{try{e.call()}catch(l){n=l}a.call(e.prototype)}else{try{throw Error()}catch(l){n=l}a()}}catch(l){if(l&&n&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),i=n.stack.split(`
`),s=r.length-1,h=i.length-1;1<=s&&0<=h&&r[s]!==i[h];)h--;for(;1<=s&&0<=h;s--,h--)if(r[s]!==i[h]){if(s!==1||h!==1)do if(s--,h--,0>h||r[s]!==i[h]){var o=`
`+r[s].replace(" at new "," at ");return a.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",a.displayName)),o}while(1<=s&&0<=h);break}}}finally{Sr=!1,Error.prepareStackTrace=t}return(a=a?a.displayName||a.name:"")?ft(a):""}function Rl(a){switch(a.tag){case 5:return ft(a.type);case 16:return ft("Lazy");case 13:return ft("Suspense");case 19:return ft("SuspenseList");case 0:case 2:case 15:return a=Pr(a.type,!1),a;case 11:return a=Pr(a.type.render,!1),a;case 1:return a=Pr(a.type,!0),a;default:return""}}function Jr(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case De:return"Fragment";case Te:return"Portal";case qr:return"Profiler";case Wi:return"StrictMode";case Xr:return"Suspense";case Zr:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case lo:return(a.displayName||"Context")+".Consumer";case oo:return(a._context.displayName||"Context")+".Provider";case Qi:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case qi:return e=a.displayName||null,e!==null?e:Jr(a.type)||"Memo";case Xa:e=a._payload,a=a._init;try{return Jr(a(e))}catch{}}return null}function Bl(a){var e=a.type;switch(a.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=e.render,a=a.displayName||a.name||"",e.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jr(e);case 8:return e===Wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function me(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function uo(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kl(a){var e=uo(a)?"checked":"value",t=Object.getOwnPropertyDescriptor(a.constructor.prototype,e),n=""+a[e];if(!a.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(a,e,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function rn(a){a._valueTracker||(a._valueTracker=Kl(a))}function po(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var t=e.getValue(),n="";return a&&(n=uo(a)?a.checked?"true":"false":a.value),a=n,a!==t?(e.setValue(a),!0):!1}function Ln(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function ai(a,e){var t=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??a._wrapperState.initialChecked})}function Fs(a,e){var t=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;t=me(e.value!=null?e.value:t),a._wrapperState={initialChecked:n,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function co(a,e){e=e.checked,e!=null&&Hi(a,"checked",e,!1)}function ei(a,e){co(a,e);var t=me(e.value),n=e.type;if(t!=null)n==="number"?(t===0&&a.value===""||a.value!=t)&&(a.value=""+t):a.value!==""+t&&(a.value=""+t);else if(n==="submit"||n==="reset"){a.removeAttribute("value");return}e.hasOwnProperty("value")?ti(a,e.type,t):e.hasOwnProperty("defaultValue")&&ti(a,e.type,me(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(a.defaultChecked=!!e.defaultChecked)}function Us(a,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+a._wrapperState.initialValue,t||e===a.value||(a.value=e),a.defaultValue=e}t=a.name,t!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,t!==""&&(a.name=t)}function ti(a,e,t){(e!=="number"||Ln(a.ownerDocument)!==a)&&(t==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+t&&(a.defaultValue=""+t))}var wt=Array.isArray;function He(a,e,t,n){if(a=a.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<a.length;t++)r=e.hasOwnProperty("$"+a[t].value),a[t].selected!==r&&(a[t].selected=r),r&&n&&(a[t].defaultSelected=!0)}else{for(t=""+me(t),e=null,r=0;r<a.length;r++){if(a[r].value===t){a[r].selected=!0,n&&(a[r].defaultSelected=!0);return}e!==null||a[r].disabled||(e=a[r])}e!==null&&(e.selected=!0)}}function ni(a,e){if(e.dangerouslySetInnerHTML!=null)throw Error(g(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function $s(a,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(g(92));if(wt(t)){if(1<t.length)throw Error(g(93));t=t[0]}e=t}e==null&&(e=""),t=e}a._wrapperState={initialValue:me(t)}}function yo(a,e){var t=me(e.value),n=me(e.defaultValue);t!=null&&(t=""+t,t!==a.value&&(a.value=t),e.defaultValue==null&&a.defaultValue!==t&&(a.defaultValue=t)),n!=null&&(a.defaultValue=""+n)}function Ys(a){var e=a.textContent;e===a._wrapperState.initialValue&&e!==""&&e!==null&&(a.value=e)}function vo(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(a,e){return a==null||a==="http://www.w3.org/1999/xhtml"?vo(e):a==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var sn,bo=function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return a(e,t,n,r)})}:a}(function(a,e){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=e;else{for(sn=sn||document.createElement("div"),sn.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sn.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;e.firstChild;)a.appendChild(e.firstChild)}});function Nt(a,e){if(e){var t=a.firstChild;if(t&&t===a.lastChild&&t.nodeType===3){t.nodeValue=e;return}}a.textContent=e}var xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fl=["Webkit","ms","Moz","O"];Object.keys(xt).forEach(function(a){Fl.forEach(function(e){e=e+a.charAt(0).toUpperCase()+a.substring(1),xt[e]=xt[a]})});function go(a,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||xt.hasOwnProperty(a)&&xt[a]?(""+e).trim():e+"px"}function fo(a,e){a=a.style;for(var t in e)if(e.hasOwnProperty(t)){var n=t.indexOf("--")===0,r=go(t,e[t],n);t==="float"&&(t="cssFloat"),n?a.setProperty(t,r):a[t]=r}}var Ul=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ii(a,e){if(e){if(Ul[a]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(g(137,a));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(g(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(g(61))}if(e.style!=null&&typeof e.style!="object")throw Error(g(62))}}function si(a,e){if(a.indexOf("-")===-1)return typeof e.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function Xi(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var oi=null,We=null,Qe=null;function Gs(a){if(a=Zt(a)){if(typeof oi!="function")throw Error(g(280));var e=a.stateNode;e&&(e=dr(e),oi(a.stateNode,a.type,e))}}function wo(a){We?Qe?Qe.push(a):Qe=[a]:We=a}function ko(){if(We){var a=We,e=Qe;if(Qe=We=null,Gs(a),e)for(a=0;a<e.length;a++)Gs(e[a])}}function _o(a,e){return a(e)}function xo(){}var Ir=!1;function jo(a,e,t){if(Ir)return a(e,t);Ir=!0;try{return _o(a,e,t)}finally{Ir=!1,(We!==null||Qe!==null)&&(xo(),ko())}}function zt(a,e){var t=a.stateNode;if(t===null)return null;var n=dr(t);if(n===null)return null;t=n[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(a=a.type,n=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!n;break a;default:a=!1}if(a)return null;if(t&&typeof t!="function")throw Error(g(231,e,typeof t));return t}var di=!1;if(Ya)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){di=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{di=!1}function $l(a,e,t,n,r,i,s,h,o){var l=Array.prototype.slice.call(arguments,3);try{e.apply(t,l)}catch(y){this.onError(y)}}var jt=!1,Nn=null,zn=!1,li=null,Yl={onError:function(a){jt=!0,Nn=a}};function Gl(a,e,t,n,r,i,s,h,o){jt=!1,Nn=null,$l.apply(Yl,arguments)}function Hl(a,e,t,n,r,i,s,h,o){if(Gl.apply(this,arguments),jt){if(jt){var l=Nn;jt=!1,Nn=null}else throw Error(g(198));zn||(zn=!0,li=l)}}function Ne(a){var e=a,t=a;if(a.alternate)for(;e.return;)e=e.return;else{a=e;do e=a,e.flags&4098&&(t=e.return),a=e.return;while(a)}return e.tag===3?t:null}function So(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function Hs(a){if(Ne(a)!==a)throw Error(g(188))}function Wl(a){var e=a.alternate;if(!e){if(e=Ne(a),e===null)throw Error(g(188));return e!==a?null:a}for(var t=a,n=e;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(n=r.return,n!==null){t=n;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Hs(r),a;if(i===n)return Hs(r),e;i=i.sibling}throw Error(g(188))}if(t.return!==n.return)t=r,n=i;else{for(var s=!1,h=r.child;h;){if(h===t){s=!0,t=r,n=i;break}if(h===n){s=!0,n=r,t=i;break}h=h.sibling}if(!s){for(h=i.child;h;){if(h===t){s=!0,t=i,n=r;break}if(h===n){s=!0,n=i,t=r;break}h=h.sibling}if(!s)throw Error(g(189))}}if(t.alternate!==n)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?a:e}function Po(a){return a=Wl(a),a!==null?Io(a):null}function Io(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var e=Io(a);if(e!==null)return e;a=a.sibling}return null}var Co=ga.unstable_scheduleCallback,Ws=ga.unstable_cancelCallback,Ql=ga.unstable_shouldYield,ql=ga.unstable_requestPaint,Y=ga.unstable_now,Xl=ga.unstable_getCurrentPriorityLevel,Zi=ga.unstable_ImmediatePriority,Vo=ga.unstable_UserBlockingPriority,Tn=ga.unstable_NormalPriority,Zl=ga.unstable_LowPriority,Eo=ga.unstable_IdlePriority,ir=null,Ma=null;function Jl(a){if(Ma&&typeof Ma.onCommitFiberRoot=="function")try{Ma.onCommitFiberRoot(ir,a,void 0,(a.current.flags&128)===128)}catch{}}var La=Math.clz32?Math.clz32:tm,am=Math.log,em=Math.LN2;function tm(a){return a>>>=0,a===0?32:31-(am(a)/em|0)|0}var hn=64,on=4194304;function kt(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Dn(a,e){var t=a.pendingLanes;if(t===0)return 0;var n=0,r=a.suspendedLanes,i=a.pingedLanes,s=t&268435455;if(s!==0){var h=s&~r;h!==0?n=kt(h):(i&=s,i!==0&&(n=kt(i)))}else s=t&~r,s!==0?n=kt(s):i!==0&&(n=kt(i));if(n===0)return 0;if(e!==0&&e!==n&&!(e&r)&&(r=n&-n,i=e&-e,r>=i||r===16&&(i&4194240)!==0))return e;if(n&4&&(n|=t&16),e=a.entangledLanes,e!==0)for(a=a.entanglements,e&=n;0<e;)t=31-La(e),r=1<<t,n|=a[t],e&=~r;return n}function nm(a,e){switch(a){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rm(a,e){for(var t=a.suspendedLanes,n=a.pingedLanes,r=a.expirationTimes,i=a.pendingLanes;0<i;){var s=31-La(i),h=1<<s,o=r[s];o===-1?(!(h&t)||h&n)&&(r[s]=nm(h,e)):o<=e&&(a.expiredLanes|=h),i&=~h}}function mi(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function Ao(){var a=hn;return hn<<=1,!(hn&4194240)&&(hn=64),a}function Cr(a){for(var e=[],t=0;31>t;t++)e.push(a);return e}function qt(a,e,t){a.pendingLanes|=e,e!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,e=31-La(e),a[e]=t}function im(a,e){var t=a.pendingLanes&~e;a.pendingLanes=e,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=e,a.mutableReadLanes&=e,a.entangledLanes&=e,e=a.entanglements;var n=a.eventTimes;for(a=a.expirationTimes;0<t;){var r=31-La(t),i=1<<r;e[r]=0,n[r]=-1,a[r]=-1,t&=~i}}function Ji(a,e){var t=a.entangledLanes|=e;for(a=a.entanglements;t;){var n=31-La(t),r=1<<n;r&e|a[n]&e&&(a[n]|=e),t&=~r}}var z=0;function Lo(a){return a&=-a,1<a?4<a?a&268435455?16:536870912:4:1}var No,as,zo,To,Do,ui=!1,dn=[],ne=null,re=null,ie=null,Tt=new Map,Dt=new Map,Ja=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qs(a,e){switch(a){case"focusin":case"focusout":ne=null;break;case"dragenter":case"dragleave":re=null;break;case"mouseover":case"mouseout":ie=null;break;case"pointerover":case"pointerout":Tt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dt.delete(e.pointerId)}}function pt(a,e,t,n,r,i){return a===null||a.nativeEvent!==i?(a={blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[r]},e!==null&&(e=Zt(e),e!==null&&as(e)),a):(a.eventSystemFlags|=n,e=a.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),a)}function hm(a,e,t,n,r){switch(e){case"focusin":return ne=pt(ne,a,e,t,n,r),!0;case"dragenter":return re=pt(re,a,e,t,n,r),!0;case"mouseover":return ie=pt(ie,a,e,t,n,r),!0;case"pointerover":var i=r.pointerId;return Tt.set(i,pt(Tt.get(i)||null,a,e,t,n,r)),!0;case"gotpointercapture":return i=r.pointerId,Dt.set(i,pt(Dt.get(i)||null,a,e,t,n,r)),!0}return!1}function Oo(a){var e=ke(a.target);if(e!==null){var t=Ne(e);if(t!==null){if(e=t.tag,e===13){if(e=So(t),e!==null){a.blockedOn=e,Do(a.priority,function(){zo(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){a.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}a.blockedOn=null}function _n(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var t=pi(a.domEventName,a.eventSystemFlags,e[0],a.nativeEvent);if(t===null){t=a.nativeEvent;var n=new t.constructor(t.type,t);hi=n,t.target.dispatchEvent(n),hi=null}else return e=Zt(t),e!==null&&as(e),a.blockedOn=t,!1;e.shift()}return!0}function qs(a,e,t){_n(a)&&t.delete(e)}function om(){ui=!1,ne!==null&&_n(ne)&&(ne=null),re!==null&&_n(re)&&(re=null),ie!==null&&_n(ie)&&(ie=null),Tt.forEach(qs),Dt.forEach(qs)}function ct(a,e){a.blockedOn===e&&(a.blockedOn=null,ui||(ui=!0,ga.unstable_scheduleCallback(ga.unstable_NormalPriority,om)))}function Ot(a){function e(r){return ct(r,a)}if(0<dn.length){ct(dn[0],a);for(var t=1;t<dn.length;t++){var n=dn[t];n.blockedOn===a&&(n.blockedOn=null)}}for(ne!==null&&ct(ne,a),re!==null&&ct(re,a),ie!==null&&ct(ie,a),Tt.forEach(e),Dt.forEach(e),t=0;t<Ja.length;t++)n=Ja[t],n.blockedOn===a&&(n.blockedOn=null);for(;0<Ja.length&&(t=Ja[0],t.blockedOn===null);)Oo(t),t.blockedOn===null&&Ja.shift()}var qe=Qa.ReactCurrentBatchConfig,On=!0;function dm(a,e,t,n){var r=z,i=qe.transition;qe.transition=null;try{z=1,es(a,e,t,n)}finally{z=r,qe.transition=i}}function lm(a,e,t,n){var r=z,i=qe.transition;qe.transition=null;try{z=4,es(a,e,t,n)}finally{z=r,qe.transition=i}}function es(a,e,t,n){if(On){var r=pi(a,e,t,n);if(r===null)Mr(a,e,n,Mn,t),Qs(a,n);else if(hm(r,a,e,t,n))n.stopPropagation();else if(Qs(a,n),e&4&&-1<sm.indexOf(a)){for(;r!==null;){var i=Zt(r);if(i!==null&&No(i),i=pi(a,e,t,n),i===null&&Mr(a,e,n,Mn,t),i===r)break;r=i}r!==null&&n.stopPropagation()}else Mr(a,e,n,null,t)}}var Mn=null;function pi(a,e,t,n){if(Mn=null,a=Xi(n),a=ke(a),a!==null)if(e=Ne(a),e===null)a=null;else if(t=e.tag,t===13){if(a=So(e),a!==null)return a;a=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null);return Mn=a,null}function Mo(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xl()){case Zi:return 1;case Vo:return 4;case Tn:case Zl:return 16;case Eo:return 536870912;default:return 16}default:return 16}}var ee=null,ts=null,xn=null;function Ro(){if(xn)return xn;var a,e=ts,t=e.length,n,r="value"in ee?ee.value:ee.textContent,i=r.length;for(a=0;a<t&&e[a]===r[a];a++);var s=t-a;for(n=1;n<=s&&e[t-n]===r[i-n];n++);return xn=r.slice(a,1<n?1-n:void 0)}function jn(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function ln(){return!0}function Xs(){return!1}function wa(a){function e(t,n,r,i,s){this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var h in a)a.hasOwnProperty(h)&&(t=a[h],this[h]=t?t(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ln:Xs,this.isPropagationStopped=Xs,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ln)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ln)},persist:function(){},isPersistent:ln}),e}var ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=wa(ht),Xt=K({},ht,{view:0,detail:0}),mm=wa(Xt),Vr,Er,yt,sr=K({},Xt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==yt&&(yt&&a.type==="mousemove"?(Vr=a.screenX-yt.screenX,Er=a.screenY-yt.screenY):Er=Vr=0,yt=a),Vr)},movementY:function(a){return"movementY"in a?a.movementY:Er}}),Zs=wa(sr),um=K({},sr,{dataTransfer:0}),pm=wa(um),cm=K({},Xt,{relatedTarget:0}),Ar=wa(cm),ym=K({},ht,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=wa(ym),bm=K({},ht,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),gm=wa(bm),fm=K({},ht,{data:0}),Js=wa(fm),wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_m={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xm(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=_m[a])?!!e[a]:!1}function rs(){return xm}var jm=K({},Xt,{key:function(a){if(a.key){var e=wm[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=jn(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?km[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(a){return a.type==="keypress"?jn(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?jn(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),Sm=wa(jm),Pm=K({},sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=wa(Pm),Im=K({},Xt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),Cm=wa(Im),Vm=K({},ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=wa(Vm),Am=K({},sr,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Lm=wa(Am),Nm=[9,13,27,32],is=Ya&&"CompositionEvent"in window,St=null;Ya&&"documentMode"in document&&(St=document.documentMode);var zm=Ya&&"TextEvent"in window&&!St,Bo=Ya&&(!is||St&&8<St&&11>=St),eh=" ",th=!1;function Ko(a,e){switch(a){case"keyup":return Nm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fo(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Oe=!1;function Tm(a,e){switch(a){case"compositionend":return Fo(e);case"keypress":return e.which!==32?null:(th=!0,eh);case"textInput":return a=e.data,a===eh&&th?null:a;default:return null}}function Dm(a,e){if(Oe)return a==="compositionend"||!is&&Ko(a,e)?(a=Ro(),xn=ts=ee=null,Oe=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bo&&e.locale!=="ko"?null:e.data;default:return null}}var Om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!Om[a.type]:e==="textarea"}function Uo(a,e,t,n){wo(n),e=Rn(e,"onChange"),0<e.length&&(t=new ns("onChange","change",null,t,n),a.push({event:t,listeners:e}))}var Pt=null,Mt=null;function Mm(a){ad(a,0)}function hr(a){var e=Be(a);if(po(e))return a}function Rm(a,e){if(a==="change")return e}var $o=!1;if(Ya){var Lr;if(Ya){var Nr="oninput"in document;if(!Nr){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),Nr=typeof rh.oninput=="function"}Lr=Nr}else Lr=!1;$o=Lr&&(!document.documentMode||9<document.documentMode)}function ih(){Pt&&(Pt.detachEvent("onpropertychange",Yo),Mt=Pt=null)}function Yo(a){if(a.propertyName==="value"&&hr(Mt)){var e=[];Uo(e,Mt,a,Xi(a)),jo(Mm,e)}}function Bm(a,e,t){a==="focusin"?(ih(),Pt=e,Mt=t,Pt.attachEvent("onpropertychange",Yo)):a==="focusout"&&ih()}function Km(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return hr(Mt)}function Fm(a,e){if(a==="click")return hr(e)}function Um(a,e){if(a==="input"||a==="change")return hr(e)}function $m(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var za=typeof Object.is=="function"?Object.is:$m;function Rt(a,e){if(za(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var t=Object.keys(a),n=Object.keys(e);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var r=t[n];if(!Qr.call(e,r)||!za(a[r],e[r]))return!1}return!0}function sh(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function hh(a,e){var t=sh(a);a=0;for(var n;t;){if(t.nodeType===3){if(n=a+t.textContent.length,a<=e&&n>=e)return{node:t,offset:e-a};a=n}a:{for(;t;){if(t.nextSibling){t=t.nextSibling;break a}t=t.parentNode}t=void 0}t=sh(t)}}function Go(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?Go(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function Ho(){for(var a=window,e=Ln();e instanceof a.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)a=e.contentWindow;else break;e=Ln(a.document)}return e}function ss(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}function Ym(a){var e=Ho(),t=a.focusedElem,n=a.selectionRange;if(e!==t&&t&&t.ownerDocument&&Go(t.ownerDocument.documentElement,t)){if(n!==null&&ss(t)){if(e=n.start,a=n.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var r=t.textContent.length,i=Math.min(n.start,r);n=n.end===void 0?i:Math.min(n.end,r),!a.extend&&i>n&&(r=n,n=i,i=r),r=hh(t,i);var s=hh(t,n);r&&s&&(a.rangeCount!==1||a.anchorNode!==r.node||a.anchorOffset!==r.offset||a.focusNode!==s.node||a.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),a.removeAllRanges(),i>n?(a.addRange(e),a.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Gm=Ya&&"documentMode"in document&&11>=document.documentMode,Me=null,ci=null,It=null,yi=!1;function oh(a,e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yi||Me==null||Me!==Ln(n)||(n=Me,"selectionStart"in n&&ss(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),It&&Rt(It,n)||(It=n,n=Rn(ci,"onSelect"),0<n.length&&(e=new ns("onSelect","select",null,e,t),a.push({event:e,listeners:n}),e.target=Me)))}function mn(a,e){var t={};return t[a.toLowerCase()]=e.toLowerCase(),t["Webkit"+a]="webkit"+e,t["Moz"+a]="moz"+e,t}var Re={animationend:mn("Animation","AnimationEnd"),animationiteration:mn("Animation","AnimationIteration"),animationstart:mn("Animation","AnimationStart"),transitionend:mn("Transition","TransitionEnd")},zr={},Wo={};Ya&&(Wo=document.createElement("div").style,"AnimationEvent"in window||(delete Re.animationend.animation,delete Re.animationiteration.animation,delete Re.animationstart.animation),"TransitionEvent"in window||delete Re.transitionend.transition);function or(a){if(zr[a])return zr[a];if(!Re[a])return a;var e=Re[a],t;for(t in e)if(e.hasOwnProperty(t)&&t in Wo)return zr[a]=e[t];return a}var Qo=or("animationend"),qo=or("animationiteration"),Xo=or("animationstart"),Zo=or("transitionend"),Jo=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pe(a,e){Jo.set(a,e),Le(e,[a])}for(var Tr=0;Tr<dh.length;Tr++){var Dr=dh[Tr],Hm=Dr.toLowerCase(),Wm=Dr[0].toUpperCase()+Dr.slice(1);pe(Hm,"on"+Wm)}pe(Qo,"onAnimationEnd");pe(qo,"onAnimationIteration");pe(Xo,"onAnimationStart");pe("dblclick","onDoubleClick");pe("focusin","onFocus");pe("focusout","onBlur");pe(Zo,"onTransitionEnd");Je("onMouseEnter",["mouseout","mouseover"]);Je("onMouseLeave",["mouseout","mouseover"]);Je("onPointerEnter",["pointerout","pointerover"]);Je("onPointerLeave",["pointerout","pointerover"]);Le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Le("onBeforeInput",["compositionend","keypress","textInput","paste"]);Le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _t="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(_t));function lh(a,e,t){var n=a.type||"unknown-event";a.currentTarget=t,Hl(n,e,void 0,a),a.currentTarget=null}function ad(a,e){e=(e&4)!==0;for(var t=0;t<a.length;t++){var n=a[t],r=n.event;n=n.listeners;a:{var i=void 0;if(e)for(var s=n.length-1;0<=s;s--){var h=n[s],o=h.instance,l=h.currentTarget;if(h=h.listener,o!==i&&r.isPropagationStopped())break a;lh(r,h,l),i=o}else for(s=0;s<n.length;s++){if(h=n[s],o=h.instance,l=h.currentTarget,h=h.listener,o!==i&&r.isPropagationStopped())break a;lh(r,h,l),i=o}}}if(zn)throw a=li,zn=!1,li=null,a}function D(a,e){var t=e[wi];t===void 0&&(t=e[wi]=new Set);var n=a+"__bubble";t.has(n)||(ed(e,a,2,!1),t.add(n))}function Or(a,e,t){var n=0;e&&(n|=4),ed(t,a,n,e)}var un="_reactListening"+Math.random().toString(36).slice(2);function Bt(a){if(!a[un]){a[un]=!0,ho.forEach(function(t){t!=="selectionchange"&&(Qm.has(t)||Or(t,!1,a),Or(t,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[un]||(e[un]=!0,Or("selectionchange",!1,e))}}function ed(a,e,t,n){switch(Mo(e)){case 1:var r=dm;break;case 4:r=lm;break;default:r=es}t=r.bind(null,e,t,a),r=void 0,!di||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),n?r!==void 0?a.addEventListener(e,t,{capture:!0,passive:r}):a.addEventListener(e,t,!0):r!==void 0?a.addEventListener(e,t,{passive:r}):a.addEventListener(e,t,!1)}function Mr(a,e,t,n,r){var i=n;if(!(e&1)&&!(e&2)&&n!==null)a:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var h=n.stateNode.containerInfo;if(h===r||h.nodeType===8&&h.parentNode===r)break;if(s===4)for(s=n.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===r||o.nodeType===8&&o.parentNode===r))return;s=s.return}for(;h!==null;){if(s=ke(h),s===null)return;if(o=s.tag,o===5||o===6){n=i=s;continue a}h=h.parentNode}}n=n.return}jo(function(){var l=i,y=Xi(t),c=[];a:{var p=Jo.get(a);if(p!==void 0){var v=ns,f=a;switch(a){case"keypress":if(jn(t)===0)break a;case"keydown":case"keyup":v=Sm;break;case"focusin":f="focus",v=Ar;break;case"focusout":f="blur",v=Ar;break;case"beforeblur":case"afterblur":v=Ar;break;case"click":if(t.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Cm;break;case Qo:case qo:case Xo:v=vm;break;case Zo:v=Em;break;case"scroll":v=mm;break;case"wheel":v=Lm;break;case"copy":case"cut":case"paste":v=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ah}var w=(e&4)!==0,L=!w&&a==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var d=l,u;d!==null;){u=d;var b=u.stateNode;if(u.tag===5&&b!==null&&(u=b,m!==null&&(b=zt(d,m),b!=null&&w.push(Kt(d,b,u)))),L)break;d=d.return}0<w.length&&(p=new v(p,f,null,t,y),c.push({event:p,listeners:w}))}}if(!(e&7)){a:{if(p=a==="mouseover"||a==="pointerover",v=a==="mouseout"||a==="pointerout",p&&t!==hi&&(f=t.relatedTarget||t.fromElement)&&(ke(f)||f[Ga]))break a;if((v||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,v?(f=t.relatedTarget||t.toElement,v=l,f=f?ke(f):null,f!==null&&(L=Ne(f),f!==L||f.tag!==5&&f.tag!==6)&&(f=null)):(v=null,f=l),v!==f)){if(w=Zs,b="onMouseLeave",m="onMouseEnter",d="mouse",(a==="pointerout"||a==="pointerover")&&(w=ah,b="onPointerLeave",m="onPointerEnter",d="pointer"),L=v==null?p:Be(v),u=f==null?p:Be(f),p=new w(b,d+"leave",v,t,y),p.target=L,p.relatedTarget=u,b=null,ke(y)===l&&(w=new w(m,d+"enter",f,t,y),w.target=u,w.relatedTarget=L,b=w),L=b,v&&f)e:{for(w=v,m=f,d=0,u=w;u;u=ze(u))d++;for(u=0,b=m;b;b=ze(b))u++;for(;0<d-u;)w=ze(w),d--;for(;0<u-d;)m=ze(m),u--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break e;w=ze(w),m=ze(m)}w=null}else w=null;v!==null&&mh(c,p,v,w,!1),f!==null&&L!==null&&mh(c,L,f,w,!0)}}a:{if(p=l?Be(l):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var _=Rm;else if(nh(p))if($o)_=Um;else{_=Km;var j=Bm}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Fm);if(_&&(_=_(a,l))){Uo(c,_,t,y);break a}j&&j(a,p,l),a==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&ti(p,"number",p.value)}switch(j=l?Be(l):window,a){case"focusin":(nh(j)||j.contentEditable==="true")&&(Me=j,ci=l,It=null);break;case"focusout":It=ci=Me=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,oh(c,t,y);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":oh(c,t,y)}var S;if(is)a:{switch(a){case"compositionstart":var I="onCompositionStart";break a;case"compositionend":I="onCompositionEnd";break a;case"compositionupdate":I="onCompositionUpdate";break a}I=void 0}else Oe?Ko(a,t)&&(I="onCompositionEnd"):a==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(Bo&&t.locale!=="ko"&&(Oe||I!=="onCompositionStart"?I==="onCompositionEnd"&&Oe&&(S=Ro()):(ee=y,ts="value"in ee?ee.value:ee.textContent,Oe=!0)),j=Rn(l,I),0<j.length&&(I=new Js(I,a,null,t,y),c.push({event:I,listeners:j}),S?I.data=S:(S=Fo(t),S!==null&&(I.data=S)))),(S=zm?Tm(a,t):Dm(a,t))&&(l=Rn(l,"onBeforeInput"),0<l.length&&(y=new Js("onBeforeInput","beforeinput",null,t,y),c.push({event:y,listeners:l}),y.data=S))}ad(c,e)})}function Kt(a,e,t){return{instance:a,listener:e,currentTarget:t}}function Rn(a,e){for(var t=e+"Capture",n=[];a!==null;){var r=a,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=zt(a,t),i!=null&&n.unshift(Kt(a,i,r)),i=zt(a,e),i!=null&&n.push(Kt(a,i,r))),a=a.return}return n}function ze(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function mh(a,e,t,n,r){for(var i=e._reactName,s=[];t!==null&&t!==n;){var h=t,o=h.alternate,l=h.stateNode;if(o!==null&&o===n)break;h.tag===5&&l!==null&&(h=l,r?(o=zt(t,i),o!=null&&s.unshift(Kt(t,o,h))):r||(o=zt(t,i),o!=null&&s.push(Kt(t,o,h)))),t=t.return}s.length!==0&&a.push({event:e,listeners:s})}var qm=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function uh(a){return(typeof a=="string"?a:""+a).replace(qm,`
`).replace(Xm,"")}function pn(a,e,t){if(e=uh(e),uh(a)!==e&&t)throw Error(g(425))}function Bn(){}var vi=null,bi=null;function gi(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fi=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(a){return ph.resolve(null).then(a).catch(au)}:fi;function au(a){setTimeout(function(){throw a})}function Rr(a,e){var t=e,n=0;do{var r=t.nextSibling;if(a.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(n===0){a.removeChild(r),Ot(e);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=r}while(t);Ot(e)}function se(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return a}function ch(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return a;e--}else t==="/$"&&e++}a=a.previousSibling}return null}var ot=Math.random().toString(36).slice(2),Oa="__reactFiber$"+ot,Ft="__reactProps$"+ot,Ga="__reactContainer$"+ot,wi="__reactEvents$"+ot,eu="__reactListeners$"+ot,tu="__reactHandles$"+ot;function ke(a){var e=a[Oa];if(e)return e;for(var t=a.parentNode;t;){if(e=t[Ga]||t[Oa]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(a=ch(a);a!==null;){if(t=a[Oa])return t;a=ch(a)}return e}a=t,t=a.parentNode}return null}function Zt(a){return a=a[Oa]||a[Ga],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function Be(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(g(33))}function dr(a){return a[Ft]||null}var ki=[],Ke=-1;function ce(a){return{current:a}}function O(a){0>Ke||(a.current=ki[Ke],ki[Ke]=null,Ke--)}function T(a,e){Ke++,ki[Ke]=a.current,a.current=e}var ue={},ia=ce(ue),ua=ce(!1),Ie=ue;function at(a,e){var t=a.type.contextTypes;if(!t)return ue;var n=a.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=e[i];return n&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=r),r}function pa(a){return a=a.childContextTypes,a!=null}function Kn(){O(ua),O(ia)}function yh(a,e,t){if(ia.current!==ue)throw Error(g(168));T(ia,e),T(ua,t)}function td(a,e,t){var n=a.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var r in n)if(!(r in e))throw Error(g(108,Bl(a)||"Unknown",r));return K({},t,n)}function Fn(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||ue,Ie=ia.current,T(ia,a),T(ua,ua.current),!0}function vh(a,e,t){var n=a.stateNode;if(!n)throw Error(g(169));t?(a=td(a,e,Ie),n.__reactInternalMemoizedMergedChildContext=a,O(ua),O(ia),T(ia,a)):O(ua),T(ua,t)}var Ka=null,lr=!1,Br=!1;function nd(a){Ka===null?Ka=[a]:Ka.push(a)}function nu(a){lr=!0,nd(a)}function ye(){if(!Br&&Ka!==null){Br=!0;var a=0,e=z;try{var t=Ka;for(z=1;a<t.length;a++){var n=t[a];do n=n(!0);while(n!==null)}Ka=null,lr=!1}catch(r){throw Ka!==null&&(Ka=Ka.slice(a+1)),Co(Zi,ye),r}finally{z=e,Br=!1}}return null}var Fe=[],Ue=0,Un=null,$n=0,ka=[],_a=0,Ce=null,Fa=1,Ua="";function fe(a,e){Fe[Ue++]=$n,Fe[Ue++]=Un,Un=a,$n=e}function rd(a,e,t){ka[_a++]=Fa,ka[_a++]=Ua,ka[_a++]=Ce,Ce=a;var n=Fa;a=Ua;var r=32-La(n)-1;n&=~(1<<r),t+=1;var i=32-La(e)+r;if(30<i){var s=r-r%5;i=(n&(1<<s)-1).toString(32),n>>=s,r-=s,Fa=1<<32-La(e)+r|t<<r|n,Ua=i+a}else Fa=1<<i|t<<r|n,Ua=a}function hs(a){a.return!==null&&(fe(a,1),rd(a,1,0))}function os(a){for(;a===Un;)Un=Fe[--Ue],Fe[Ue]=null,$n=Fe[--Ue],Fe[Ue]=null;for(;a===Ce;)Ce=ka[--_a],ka[_a]=null,Ua=ka[--_a],ka[_a]=null,Fa=ka[--_a],ka[_a]=null}var ba=null,va=null,M=!1,Aa=null;function id(a,e){var t=xa(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=a,e=a.deletions,e===null?(a.deletions=[t],a.flags|=16):e.push(t)}function bh(a,e){switch(a.tag){case 5:var t=a.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(a.stateNode=e,ba=a,va=se(e.firstChild),!0):!1;case 6:return e=a.pendingProps===""||e.nodeType!==3?null:e,e!==null?(a.stateNode=e,ba=a,va=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ce!==null?{id:Fa,overflow:Ua}:null,a.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=xa(18,null,null,0),t.stateNode=e,t.return=a,a.child=t,ba=a,va=null,!0):!1;default:return!1}}function _i(a){return(a.mode&1)!==0&&(a.flags&128)===0}function xi(a){if(M){var e=va;if(e){var t=e;if(!bh(a,e)){if(_i(a))throw Error(g(418));e=se(t.nextSibling);var n=ba;e&&bh(a,e)?id(n,t):(a.flags=a.flags&-4097|2,M=!1,ba=a)}}else{if(_i(a))throw Error(g(418));a.flags=a.flags&-4097|2,M=!1,ba=a}}}function gh(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;ba=a}function cn(a){if(a!==ba)return!1;if(!M)return gh(a),M=!0,!1;var e;if((e=a.tag!==3)&&!(e=a.tag!==5)&&(e=a.type,e=e!=="head"&&e!=="body"&&!gi(a.type,a.memoizedProps)),e&&(e=va)){if(_i(a))throw sd(),Error(g(418));for(;e;)id(a,e),e=se(e.nextSibling)}if(gh(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(g(317));a:{for(a=a.nextSibling,e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="/$"){if(e===0){va=se(a.nextSibling);break a}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}a=a.nextSibling}va=null}}else va=ba?se(a.stateNode.nextSibling):null;return!0}function sd(){for(var a=va;a;)a=se(a.nextSibling)}function et(){va=ba=null,M=!1}function ds(a){Aa===null?Aa=[a]:Aa.push(a)}var ru=Qa.ReactCurrentBatchConfig;function vt(a,e,t){if(a=t.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var n=t.stateNode}if(!n)throw Error(g(147,a));var r=n,i=""+a;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var h=r.refs;s===null?delete h[i]:h[i]=s},e._stringRef=i,e)}if(typeof a!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,a))}return a}function yn(a,e){throw a=Object.prototype.toString.call(e),Error(g(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a))}function fh(a){var e=a._init;return e(a._payload)}function hd(a){function e(m,d){if(a){var u=m.deletions;u===null?(m.deletions=[d],m.flags|=16):u.push(d)}}function t(m,d){if(!a)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function n(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function r(m,d){return m=le(m,d),m.index=0,m.sibling=null,m}function i(m,d,u){return m.index=u,a?(u=m.alternate,u!==null?(u=u.index,u<d?(m.flags|=2,d):u):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return a&&m.alternate===null&&(m.flags|=2),m}function h(m,d,u,b){return d===null||d.tag!==6?(d=Hr(u,m.mode,b),d.return=m,d):(d=r(d,u),d.return=m,d)}function o(m,d,u,b){var _=u.type;return _===De?y(m,d,u.props.children,b,u.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xa&&fh(_)===d.type)?(b=r(d,u.props),b.ref=vt(m,d,u),b.return=m,b):(b=An(u.type,u.key,u.props,null,m.mode,b),b.ref=vt(m,d,u),b.return=m,b)}function l(m,d,u,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==u.containerInfo||d.stateNode.implementation!==u.implementation?(d=Wr(u,m.mode,b),d.return=m,d):(d=r(d,u.children||[]),d.return=m,d)}function y(m,d,u,b,_){return d===null||d.tag!==7?(d=Pe(u,m.mode,b,_),d.return=m,d):(d=r(d,u),d.return=m,d)}function c(m,d,u){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hr(""+d,m.mode,u),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case nn:return u=An(d.type,d.key,d.props,null,m.mode,u),u.ref=vt(m,null,d),u.return=m,u;case Te:return d=Wr(d,m.mode,u),d.return=m,d;case Xa:var b=d._init;return c(m,b(d._payload),u)}if(wt(d)||mt(d))return d=Pe(d,m.mode,u,null),d.return=m,d;yn(m,d)}return null}function p(m,d,u,b){var _=d!==null?d.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return _!==null?null:h(m,d,""+u,b);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nn:return u.key===_?o(m,d,u,b):null;case Te:return u.key===_?l(m,d,u,b):null;case Xa:return _=u._init,p(m,d,_(u._payload),b)}if(wt(u)||mt(u))return _!==null?null:y(m,d,u,b,null);yn(m,u)}return null}function v(m,d,u,b,_){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(u)||null,h(d,m,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case nn:return m=m.get(b.key===null?u:b.key)||null,o(d,m,b,_);case Te:return m=m.get(b.key===null?u:b.key)||null,l(d,m,b,_);case Xa:var j=b._init;return v(m,d,u,j(b._payload),_)}if(wt(b)||mt(b))return m=m.get(u)||null,y(d,m,b,_,null);yn(d,b)}return null}function f(m,d,u,b){for(var _=null,j=null,S=d,I=d=0,U=null;S!==null&&I<u.length;I++){S.index>I?(U=S,S=null):U=S.sibling;var A=p(m,S,u[I],b);if(A===null){S===null&&(S=U);break}a&&S&&A.alternate===null&&e(m,S),d=i(A,d,I),j===null?_=A:j.sibling=A,j=A,S=U}if(I===u.length)return t(m,S),M&&fe(m,I),_;if(S===null){for(;I<u.length;I++)S=c(m,u[I],b),S!==null&&(d=i(S,d,I),j===null?_=S:j.sibling=S,j=S);return M&&fe(m,I),_}for(S=n(m,S);I<u.length;I++)U=v(S,m,I,u[I],b),U!==null&&(a&&U.alternate!==null&&S.delete(U.key===null?I:U.key),d=i(U,d,I),j===null?_=U:j.sibling=U,j=U);return a&&S.forEach(function(Ia){return e(m,Ia)}),M&&fe(m,I),_}function w(m,d,u,b){var _=mt(u);if(typeof _!="function")throw Error(g(150));if(u=_.call(u),u==null)throw Error(g(151));for(var j=_=null,S=d,I=d=0,U=null,A=u.next();S!==null&&!A.done;I++,A=u.next()){S.index>I?(U=S,S=null):U=S.sibling;var Ia=p(m,S,A.value,b);if(Ia===null){S===null&&(S=U);break}a&&S&&Ia.alternate===null&&e(m,S),d=i(Ia,d,I),j===null?_=Ia:j.sibling=Ia,j=Ia,S=U}if(A.done)return t(m,S),M&&fe(m,I),_;if(S===null){for(;!A.done;I++,A=u.next())A=c(m,A.value,b),A!==null&&(d=i(A,d,I),j===null?_=A:j.sibling=A,j=A);return M&&fe(m,I),_}for(S=n(m,S);!A.done;I++,A=u.next())A=v(S,m,I,A.value,b),A!==null&&(a&&A.alternate!==null&&S.delete(A.key===null?I:A.key),d=i(A,d,I),j===null?_=A:j.sibling=A,j=A);return a&&S.forEach(function(dt){return e(m,dt)}),M&&fe(m,I),_}function L(m,d,u,b){if(typeof u=="object"&&u!==null&&u.type===De&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case nn:a:{for(var _=u.key,j=d;j!==null;){if(j.key===_){if(_=u.type,_===De){if(j.tag===7){t(m,j.sibling),d=r(j,u.props.children),d.return=m,m=d;break a}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Xa&&fh(_)===j.type){t(m,j.sibling),d=r(j,u.props),d.ref=vt(m,j,u),d.return=m,m=d;break a}t(m,j);break}else e(m,j);j=j.sibling}u.type===De?(d=Pe(u.props.children,m.mode,b,u.key),d.return=m,m=d):(b=An(u.type,u.key,u.props,null,m.mode,b),b.ref=vt(m,d,u),b.return=m,m=b)}return s(m);case Te:a:{for(j=u.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===u.containerInfo&&d.stateNode.implementation===u.implementation){t(m,d.sibling),d=r(d,u.children||[]),d.return=m,m=d;break a}else{t(m,d);break}else e(m,d);d=d.sibling}d=Wr(u,m.mode,b),d.return=m,m=d}return s(m);case Xa:return j=u._init,L(m,d,j(u._payload),b)}if(wt(u))return f(m,d,u,b);if(mt(u))return w(m,d,u,b);yn(m,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,d!==null&&d.tag===6?(t(m,d.sibling),d=r(d,u),d.return=m,m=d):(t(m,d),d=Hr(u,m.mode,b),d.return=m,m=d),s(m)):t(m,d)}return L}var tt=hd(!0),od=hd(!1),Yn=ce(null),Gn=null,$e=null,ls=null;function ms(){ls=$e=Gn=null}function us(a){var e=Yn.current;O(Yn),a._currentValue=e}function ji(a,e,t){for(;a!==null;){var n=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),a===t)break;a=a.return}}function Xe(a,e){Gn=a,ls=$e=null,a=a.dependencies,a!==null&&a.firstContext!==null&&(a.lanes&e&&(ma=!0),a.firstContext=null)}function Sa(a){var e=a._currentValue;if(ls!==a)if(a={context:a,memoizedValue:e,next:null},$e===null){if(Gn===null)throw Error(g(308));$e=a,Gn.dependencies={lanes:0,firstContext:a}}else $e=$e.next=a;return e}var _e=null;function ps(a){_e===null?_e=[a]:_e.push(a)}function dd(a,e,t,n){var r=e.interleaved;return r===null?(t.next=t,ps(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ha(a,n)}function Ha(a,e){a.lanes|=e;var t=a.alternate;for(t!==null&&(t.lanes|=e),t=a,a=a.return;a!==null;)a.childLanes|=e,t=a.alternate,t!==null&&(t.childLanes|=e),t=a,a=a.return;return t.tag===3?t.stateNode:null}var Za=!1;function cs(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function $a(a,e){return{eventTime:a,lane:e,tag:0,payload:null,callback:null,next:null}}function he(a,e,t){var n=a.updateQueue;if(n===null)return null;if(n=n.shared,N&2){var r=n.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e,Ha(a,t)}return r=n.interleaved,r===null?(e.next=e,ps(n)):(e.next=r.next,r.next=e),n.interleaved=e,Ha(a,t)}function Sn(a,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var n=e.lanes;n&=a.pendingLanes,t|=n,e.lanes=t,Ji(a,t)}}function wh(a,e){var t=a.updateQueue,n=a.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?r=i=e:i=i.next=e}else r=i=e;t={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:n.shared,effects:n.effects},a.updateQueue=t;return}a=t.lastBaseUpdate,a===null?t.firstBaseUpdate=e:a.next=e,t.lastBaseUpdate=e}function Hn(a,e,t,n){var r=a.updateQueue;Za=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,h=r.shared.pending;if(h!==null){r.shared.pending=null;var o=h,l=o.next;o.next=null,s===null?i=l:s.next=l,s=o;var y=a.alternate;y!==null&&(y=y.updateQueue,h=y.lastBaseUpdate,h!==s&&(h===null?y.firstBaseUpdate=l:h.next=l,y.lastBaseUpdate=o))}if(i!==null){var c=r.baseState;s=0,y=l=o=null,h=i;do{var p=h.lane,v=h.eventTime;if((n&p)===p){y!==null&&(y=y.next={eventTime:v,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});a:{var f=a,w=h;switch(p=e,v=t,w.tag){case 1:if(f=w.payload,typeof f=="function"){c=f.call(v,c,p);break a}c=f;break a;case 3:f.flags=f.flags&-65537|128;case 0:if(f=w.payload,p=typeof f=="function"?f.call(v,c,p):f,p==null)break a;c=K({},c,p);break a;case 2:Za=!0}}h.callback!==null&&h.lane!==0&&(a.flags|=64,p=r.effects,p===null?r.effects=[h]:p.push(h))}else v={eventTime:v,lane:p,tag:h.tag,payload:h.payload,callback:h.callback,next:null},y===null?(l=y=v,o=c):y=y.next=v,s|=p;if(h=h.next,h===null){if(h=r.shared.pending,h===null)break;p=h,h=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(y===null&&(o=c),r.baseState=o,r.firstBaseUpdate=l,r.lastBaseUpdate=y,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else i===null&&(r.shared.lanes=0);Ee|=s,a.lanes=s,a.memoizedState=c}}function kh(a,e,t){if(a=e.effects,e.effects=null,a!==null)for(e=0;e<a.length;e++){var n=a[e],r=n.callback;if(r!==null){if(n.callback=null,n=t,typeof r!="function")throw Error(g(191,r));r.call(n)}}}var Jt={},Ra=ce(Jt),Ut=ce(Jt),$t=ce(Jt);function xe(a){if(a===Jt)throw Error(g(174));return a}function ys(a,e){switch(T($t,e),T(Ut,a),T(Ra,Jt),a=e.nodeType,a){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ri(null,"");break;default:a=a===8?e.parentNode:e,e=a.namespaceURI||null,a=a.tagName,e=ri(e,a)}O(Ra),T(Ra,e)}function nt(){O(Ra),O(Ut),O($t)}function md(a){xe($t.current);var e=xe(Ra.current),t=ri(e,a.type);e!==t&&(T(Ut,a),T(Ra,t))}function vs(a){Ut.current===a&&(O(Ra),O(Ut))}var R=ce(0);function Wn(a){for(var e=a;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kr=[];function bs(){for(var a=0;a<Kr.length;a++)Kr[a]._workInProgressVersionPrimary=null;Kr.length=0}var Pn=Qa.ReactCurrentDispatcher,Fr=Qa.ReactCurrentBatchConfig,Ve=0,B=null,H=null,q=null,Qn=!1,Ct=!1,Yt=0,iu=0;function ta(){throw Error(g(321))}function gs(a,e){if(e===null)return!1;for(var t=0;t<e.length&&t<a.length;t++)if(!za(a[t],e[t]))return!1;return!0}function fs(a,e,t,n,r,i){if(Ve=i,B=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pn.current=a===null||a.memoizedState===null?du:lu,a=t(n,r),Ct){i=0;do{if(Ct=!1,Yt=0,25<=i)throw Error(g(301));i+=1,q=H=null,e.updateQueue=null,Pn.current=mu,a=t(n,r)}while(Ct)}if(Pn.current=qn,e=H!==null&&H.next!==null,Ve=0,q=H=B=null,Qn=!1,e)throw Error(g(300));return a}function ws(){var a=Yt!==0;return Yt=0,a}function Da(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?B.memoizedState=q=a:q=q.next=a,q}function Pa(){if(H===null){var a=B.alternate;a=a!==null?a.memoizedState:null}else a=H.next;var e=q===null?B.memoizedState:q.next;if(e!==null)q=e,H=a;else{if(a===null)throw Error(g(310));H=a,a={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},q===null?B.memoizedState=q=a:q=q.next=a}return q}function Gt(a,e){return typeof e=="function"?e(a):e}function Ur(a){var e=Pa(),t=e.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=a;var n=H,r=n.baseQueue,i=t.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}n.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,n=n.baseState;var h=s=null,o=null,l=i;do{var y=l.lane;if((Ve&y)===y)o!==null&&(o=o.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),n=l.hasEagerState?l.eagerState:a(n,l.action);else{var c={lane:y,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};o===null?(h=o=c,s=n):o=o.next=c,B.lanes|=y,Ee|=y}l=l.next}while(l!==null&&l!==i);o===null?s=n:o.next=h,za(n,e.memoizedState)||(ma=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=o,t.lastRenderedState=n}if(a=t.interleaved,a!==null){r=a;do i=r.lane,B.lanes|=i,Ee|=i,r=r.next;while(r!==a)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function $r(a){var e=Pa(),t=e.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=a;var n=t.dispatch,r=t.pending,i=e.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do i=a(i,s.action),s=s.next;while(s!==r);za(i,e.memoizedState)||(ma=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,n]}function ud(){}function pd(a,e){var t=B,n=Pa(),r=e(),i=!za(n.memoizedState,r);if(i&&(n.memoizedState=r,ma=!0),n=n.queue,ks(vd.bind(null,t,n,a),[a]),n.getSnapshot!==e||i||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,Ht(9,yd.bind(null,t,n,r,e),void 0,null),Z===null)throw Error(g(349));Ve&30||cd(t,e,r)}return r}function cd(a,e,t){a.flags|=16384,a={getSnapshot:e,value:t},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.stores=[a]):(t=e.stores,t===null?e.stores=[a]:t.push(a))}function yd(a,e,t,n){e.value=t,e.getSnapshot=n,bd(e)&&gd(a)}function vd(a,e,t){return t(function(){bd(e)&&gd(a)})}function bd(a){var e=a.getSnapshot;a=a.value;try{var t=e();return!za(a,t)}catch{return!0}}function gd(a){var e=Ha(a,1);e!==null&&Na(e,a,1,-1)}function _h(a){var e=Da();return typeof a=="function"&&(a=a()),e.memoizedState=e.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:a},e.queue=a,a=a.dispatch=ou.bind(null,B,a),[e.memoizedState,a]}function Ht(a,e,t,n){return a={tag:a,create:e,destroy:t,deps:n,next:null},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.lastEffect=a.next=a):(t=e.lastEffect,t===null?e.lastEffect=a.next=a:(n=t.next,t.next=a,a.next=n,e.lastEffect=a)),a}function fd(){return Pa().memoizedState}function In(a,e,t,n){var r=Da();B.flags|=a,r.memoizedState=Ht(1|e,t,void 0,n===void 0?null:n)}function mr(a,e,t,n){var r=Pa();n=n===void 0?null:n;var i=void 0;if(H!==null){var s=H.memoizedState;if(i=s.destroy,n!==null&&gs(n,s.deps)){r.memoizedState=Ht(e,t,i,n);return}}B.flags|=a,r.memoizedState=Ht(1|e,t,i,n)}function xh(a,e){return In(8390656,8,a,e)}function ks(a,e){return mr(2048,8,a,e)}function wd(a,e){return mr(4,2,a,e)}function kd(a,e){return mr(4,4,a,e)}function _d(a,e){if(typeof e=="function")return a=a(),e(a),function(){e(null)};if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function xd(a,e,t){return t=t!=null?t.concat([a]):null,mr(4,4,_d.bind(null,e,a),t)}function _s(){}function jd(a,e){var t=Pa();e=e===void 0?null:e;var n=t.memoizedState;return n!==null&&e!==null&&gs(e,n[1])?n[0]:(t.memoizedState=[a,e],a)}function Sd(a,e){var t=Pa();e=e===void 0?null:e;var n=t.memoizedState;return n!==null&&e!==null&&gs(e,n[1])?n[0]:(a=a(),t.memoizedState=[a,e],a)}function Pd(a,e,t){return Ve&21?(za(t,e)||(t=Ao(),B.lanes|=t,Ee|=t,a.baseState=!0),e):(a.baseState&&(a.baseState=!1,ma=!0),a.memoizedState=t)}function su(a,e){var t=z;z=t!==0&&4>t?t:4,a(!0);var n=Fr.transition;Fr.transition={};try{a(!1),e()}finally{z=t,Fr.transition=n}}function Id(){return Pa().memoizedState}function hu(a,e,t){var n=de(a);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},Cd(a))Vd(e,t);else if(t=dd(a,e,t,n),t!==null){var r=ha();Na(t,a,n,r),Ed(t,e,n)}}function ou(a,e,t){var n=de(a),r={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cd(a))Vd(e,r);else{var i=a.alternate;if(a.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var s=e.lastRenderedState,h=i(s,t);if(r.hasEagerState=!0,r.eagerState=h,za(h,s)){var o=e.interleaved;o===null?(r.next=r,ps(e)):(r.next=o.next,o.next=r),e.interleaved=r;return}}catch{}finally{}t=dd(a,e,r,n),t!==null&&(r=ha(),Na(t,a,n,r),Ed(t,e,n))}}function Cd(a){var e=a.alternate;return a===B||e!==null&&e===B}function Vd(a,e){Ct=Qn=!0;var t=a.pending;t===null?e.next=e:(e.next=t.next,t.next=e),a.pending=e}function Ed(a,e,t){if(t&4194240){var n=e.lanes;n&=a.pendingLanes,t|=n,e.lanes=t,Ji(a,t)}}var qn={readContext:Sa,useCallback:ta,useContext:ta,useEffect:ta,useImperativeHandle:ta,useInsertionEffect:ta,useLayoutEffect:ta,useMemo:ta,useReducer:ta,useRef:ta,useState:ta,useDebugValue:ta,useDeferredValue:ta,useTransition:ta,useMutableSource:ta,useSyncExternalStore:ta,useId:ta,unstable_isNewReconciler:!1},du={readContext:Sa,useCallback:function(a,e){return Da().memoizedState=[a,e===void 0?null:e],a},useContext:Sa,useEffect:xh,useImperativeHandle:function(a,e,t){return t=t!=null?t.concat([a]):null,In(4194308,4,_d.bind(null,e,a),t)},useLayoutEffect:function(a,e){return In(4194308,4,a,e)},useInsertionEffect:function(a,e){return In(4,2,a,e)},useMemo:function(a,e){var t=Da();return e=e===void 0?null:e,a=a(),t.memoizedState=[a,e],a},useReducer:function(a,e,t){var n=Da();return e=t!==void 0?t(e):e,n.memoizedState=n.baseState=e,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:e},n.queue=a,a=a.dispatch=hu.bind(null,B,a),[n.memoizedState,a]},useRef:function(a){var e=Da();return a={current:a},e.memoizedState=a},useState:_h,useDebugValue:_s,useDeferredValue:function(a){return Da().memoizedState=a},useTransition:function(){var a=_h(!1),e=a[0];return a=su.bind(null,a[1]),Da().memoizedState=a,[e,a]},useMutableSource:function(){},useSyncExternalStore:function(a,e,t){var n=B,r=Da();if(M){if(t===void 0)throw Error(g(407));t=t()}else{if(t=e(),Z===null)throw Error(g(349));Ve&30||cd(n,e,t)}r.memoizedState=t;var i={value:t,getSnapshot:e};return r.queue=i,xh(vd.bind(null,n,i,a),[a]),n.flags|=2048,Ht(9,yd.bind(null,n,i,t,e),void 0,null),t},useId:function(){var a=Da(),e=Z.identifierPrefix;if(M){var t=Ua,n=Fa;t=(n&~(1<<32-La(n)-1)).toString(32)+t,e=":"+e+"R"+t,t=Yt++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=iu++,e=":"+e+"r"+t.toString(32)+":";return a.memoizedState=e},unstable_isNewReconciler:!1},lu={readContext:Sa,useCallback:jd,useContext:Sa,useEffect:ks,useImperativeHandle:xd,useInsertionEffect:wd,useLayoutEffect:kd,useMemo:Sd,useReducer:Ur,useRef:fd,useState:function(){return Ur(Gt)},useDebugValue:_s,useDeferredValue:function(a){var e=Pa();return Pd(e,H.memoizedState,a)},useTransition:function(){var a=Ur(Gt)[0],e=Pa().memoizedState;return[a,e]},useMutableSource:ud,useSyncExternalStore:pd,useId:Id,unstable_isNewReconciler:!1},mu={readContext:Sa,useCallback:jd,useContext:Sa,useEffect:ks,useImperativeHandle:xd,useInsertionEffect:wd,useLayoutEffect:kd,useMemo:Sd,useReducer:$r,useRef:fd,useState:function(){return $r(Gt)},useDebugValue:_s,useDeferredValue:function(a){var e=Pa();return H===null?e.memoizedState=a:Pd(e,H.memoizedState,a)},useTransition:function(){var a=$r(Gt)[0],e=Pa().memoizedState;return[a,e]},useMutableSource:ud,useSyncExternalStore:pd,useId:Id,unstable_isNewReconciler:!1};function Va(a,e){if(a&&a.defaultProps){e=K({},e),a=a.defaultProps;for(var t in a)e[t]===void 0&&(e[t]=a[t]);return e}return e}function Si(a,e,t,n){e=a.memoizedState,t=t(n,e),t=t==null?e:K({},e,t),a.memoizedState=t,a.lanes===0&&(a.updateQueue.baseState=t)}var ur={isMounted:function(a){return(a=a._reactInternals)?Ne(a)===a:!1},enqueueSetState:function(a,e,t){a=a._reactInternals;var n=ha(),r=de(a),i=$a(n,r);i.payload=e,t!=null&&(i.callback=t),e=he(a,i,r),e!==null&&(Na(e,a,r,n),Sn(e,a,r))},enqueueReplaceState:function(a,e,t){a=a._reactInternals;var n=ha(),r=de(a),i=$a(n,r);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=he(a,i,r),e!==null&&(Na(e,a,r,n),Sn(e,a,r))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var t=ha(),n=de(a),r=$a(t,n);r.tag=2,e!=null&&(r.callback=e),e=he(a,r,n),e!==null&&(Na(e,a,n,t),Sn(e,a,n))}};function jh(a,e,t,n,r,i,s){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(n,i,s):e.prototype&&e.prototype.isPureReactComponent?!Rt(t,n)||!Rt(r,i):!0}function Ad(a,e,t){var n=!1,r=ue,i=e.contextType;return typeof i=="object"&&i!==null?i=Sa(i):(r=pa(e)?Ie:ia.current,n=e.contextTypes,i=(n=n!=null)?at(a,r):ue),e=new e(t,i),a.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ur,a.stateNode=e,e._reactInternals=a,n&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=r,a.__reactInternalMemoizedMaskedChildContext=i),e}function Sh(a,e,t,n){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,n),e.state!==a&&ur.enqueueReplaceState(e,e.state,null)}function Pi(a,e,t,n){var r=a.stateNode;r.props=t,r.state=a.memoizedState,r.refs={},cs(a);var i=e.contextType;typeof i=="object"&&i!==null?r.context=Sa(i):(i=pa(e)?Ie:ia.current,r.context=at(a,i)),r.state=a.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Si(a,e,i,t),r.state=a.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ur.enqueueReplaceState(r,r.state,null),Hn(a,t,r,n),r.state=a.memoizedState),typeof r.componentDidMount=="function"&&(a.flags|=4194308)}function rt(a,e){try{var t="",n=e;do t+=Rl(n),n=n.return;while(n);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:a,source:e,stack:r,digest:null}}function Yr(a,e,t){return{value:a,source:null,stack:t??null,digest:e??null}}function Ii(a,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var uu=typeof WeakMap=="function"?WeakMap:Map;function Ld(a,e,t){t=$a(-1,t),t.tag=3,t.payload={element:null};var n=e.value;return t.callback=function(){Zn||(Zn=!0,Oi=n),Ii(a,e)},t}function Nd(a,e,t){t=$a(-1,t),t.tag=3;var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=e.value;t.payload=function(){return n(r)},t.callback=function(){Ii(a,e)}}var i=a.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ii(a,e),typeof n!="function"&&(oe===null?oe=new Set([this]):oe.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),t}function Ph(a,e,t){var n=a.pingCache;if(n===null){n=a.pingCache=new uu;var r=new Set;n.set(e,r)}else r=n.get(e),r===void 0&&(r=new Set,n.set(e,r));r.has(t)||(r.add(t),a=Pu.bind(null,a,e,t),e.then(a,a))}function Ih(a){do{var e;if((e=a.tag===13)&&(e=a.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return a;a=a.return}while(a!==null);return null}function Ch(a,e,t,n,r){return a.mode&1?(a.flags|=65536,a.lanes=r,a):(a===e?a.flags|=65536:(a.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=$a(-1,1),e.tag=2,he(t,e,1))),t.lanes|=1),a)}var pu=Qa.ReactCurrentOwner,ma=!1;function sa(a,e,t,n){e.child=a===null?od(e,null,t,n):tt(e,a.child,t,n)}function Vh(a,e,t,n,r){t=t.render;var i=e.ref;return Xe(e,r),n=fs(a,e,t,n,i,r),t=ws(),a!==null&&!ma?(e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~r,Wa(a,e,r)):(M&&t&&hs(e),e.flags|=1,sa(a,e,n,r),e.child)}function Eh(a,e,t,n,r){if(a===null){var i=t.type;return typeof i=="function"&&!Es(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,zd(a,e,i,n,r)):(a=An(t.type,null,n,e,e.mode,r),a.ref=e.ref,a.return=e,e.child=a)}if(i=a.child,!(a.lanes&r)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:Rt,t(s,n)&&a.ref===e.ref)return Wa(a,e,r)}return e.flags|=1,a=le(i,n),a.ref=e.ref,a.return=e,e.child=a}function zd(a,e,t,n,r){if(a!==null){var i=a.memoizedProps;if(Rt(i,n)&&a.ref===e.ref)if(ma=!1,e.pendingProps=n=i,(a.lanes&r)!==0)a.flags&131072&&(ma=!0);else return e.lanes=a.lanes,Wa(a,e,r)}return Ci(a,e,t,n,r)}function Td(a,e,t){var n=e.pendingProps,r=n.children,i=a!==null?a.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},T(Ge,ya),ya|=t;else{if(!(t&1073741824))return a=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:a,cachePool:null,transitions:null},e.updateQueue=null,T(Ge,ya),ya|=a,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:t,T(Ge,ya),ya|=n}else i!==null?(n=i.baseLanes|t,e.memoizedState=null):n=t,T(Ge,ya),ya|=n;return sa(a,e,r,t),e.child}function Dd(a,e){var t=e.ref;(a===null&&t!==null||a!==null&&a.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ci(a,e,t,n,r){var i=pa(t)?Ie:ia.current;return i=at(e,i),Xe(e,r),t=fs(a,e,t,n,i,r),n=ws(),a!==null&&!ma?(e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~r,Wa(a,e,r)):(M&&n&&hs(e),e.flags|=1,sa(a,e,t,r),e.child)}function Ah(a,e,t,n,r){if(pa(t)){var i=!0;Fn(e)}else i=!1;if(Xe(e,r),e.stateNode===null)Cn(a,e),Ad(e,t,n),Pi(e,t,n,r),n=!0;else if(a===null){var s=e.stateNode,h=e.memoizedProps;s.props=h;var o=s.context,l=t.contextType;typeof l=="object"&&l!==null?l=Sa(l):(l=pa(t)?Ie:ia.current,l=at(e,l));var y=t.getDerivedStateFromProps,c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==n||o!==l)&&Sh(e,s,n,l),Za=!1;var p=e.memoizedState;s.state=p,Hn(e,n,s,r),o=e.memoizedState,h!==n||p!==o||ua.current||Za?(typeof y=="function"&&(Si(e,t,y,n),o=e.memoizedState),(h=Za||jh(e,t,h,n,p,o,l))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=o),s.props=n,s.state=o,s.context=l,n=h):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,ld(a,e),h=e.memoizedProps,l=e.type===e.elementType?h:Va(e.type,h),s.props=l,c=e.pendingProps,p=s.context,o=t.contextType,typeof o=="object"&&o!==null?o=Sa(o):(o=pa(t)?Ie:ia.current,o=at(e,o));var v=t.getDerivedStateFromProps;(y=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h!==c||p!==o)&&Sh(e,s,n,o),Za=!1,p=e.memoizedState,s.state=p,Hn(e,n,s,r);var f=e.memoizedState;h!==c||p!==f||ua.current||Za?(typeof v=="function"&&(Si(e,t,v,n),f=e.memoizedState),(l=Za||jh(e,t,l,n,p,f,o)||!1)?(y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,f,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,f,o)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||h===a.memoizedProps&&p===a.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===a.memoizedProps&&p===a.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=f),s.props=n,s.state=f,s.context=o,n=l):(typeof s.componentDidUpdate!="function"||h===a.memoizedProps&&p===a.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||h===a.memoizedProps&&p===a.memoizedState||(e.flags|=1024),n=!1)}return Vi(a,e,t,n,i,r)}function Vi(a,e,t,n,r,i){Dd(a,e);var s=(e.flags&128)!==0;if(!n&&!s)return r&&vh(e,t,!1),Wa(a,e,i);n=e.stateNode,pu.current=e;var h=s&&typeof t.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,a!==null&&s?(e.child=tt(e,a.child,null,i),e.child=tt(e,null,h,i)):sa(a,e,h,i),e.memoizedState=n.state,r&&vh(e,t,!0),e.child}function Od(a){var e=a.stateNode;e.pendingContext?yh(a,e.pendingContext,e.pendingContext!==e.context):e.context&&yh(a,e.context,!1),ys(a,e.containerInfo)}function Lh(a,e,t,n,r){return et(),ds(r),e.flags|=256,sa(a,e,t,n),e.child}var Ei={dehydrated:null,treeContext:null,retryLane:0};function Ai(a){return{baseLanes:a,cachePool:null,transitions:null}}function Md(a,e,t){var n=e.pendingProps,r=R.current,i=!1,s=(e.flags&128)!==0,h;if((h=s)||(h=a!==null&&a.memoizedState===null?!1:(r&2)!==0),h?(i=!0,e.flags&=-129):(a===null||a.memoizedState!==null)&&(r|=1),T(R,r&1),a===null)return xi(e),a=e.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?(e.mode&1?a.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,a=n.fallback,i?(n=e.mode,i=e.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=yr(s,n,0,null),a=Pe(a,n,t,null),i.return=e,a.return=e,i.sibling=a,e.child=i,e.child.memoizedState=Ai(t),e.memoizedState=Ei,a):xs(e,s));if(r=a.memoizedState,r!==null&&(h=r.dehydrated,h!==null))return cu(a,e,s,n,h,r,t);if(i){i=n.fallback,s=e.mode,r=a.child,h=r.sibling;var o={mode:"hidden",children:n.children};return!(s&1)&&e.child!==r?(n=e.child,n.childLanes=0,n.pendingProps=o,e.deletions=null):(n=le(r,o),n.subtreeFlags=r.subtreeFlags&14680064),h!==null?i=le(h,i):(i=Pe(i,s,t,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,s=a.child.memoizedState,s=s===null?Ai(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=a.childLanes&~t,e.memoizedState=Ei,n}return i=a.child,a=i.sibling,n=le(i,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=t),n.return=e,n.sibling=null,a!==null&&(t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)),e.child=n,e.memoizedState=null,n}function xs(a,e){return e=yr({mode:"visible",children:e},a.mode,0,null),e.return=a,a.child=e}function vn(a,e,t,n){return n!==null&&ds(n),tt(e,a.child,null,t),a=xs(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function cu(a,e,t,n,r,i,s){if(t)return e.flags&256?(e.flags&=-257,n=Yr(Error(g(422))),vn(a,e,s,n)):e.memoizedState!==null?(e.child=a.child,e.flags|=128,null):(i=n.fallback,r=e.mode,n=yr({mode:"visible",children:n.children},r,0,null),i=Pe(i,r,s,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,e.mode&1&&tt(e,a.child,null,s),e.child.memoizedState=Ai(s),e.memoizedState=Ei,i);if(!(e.mode&1))return vn(a,e,s,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var h=n.dgst;return n=h,i=Error(g(419)),n=Yr(i,n,void 0),vn(a,e,s,n)}if(h=(s&a.childLanes)!==0,ma||h){if(n=Z,n!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Ha(a,r),Na(n,a,r,-1))}return Vs(),n=Yr(Error(g(421))),vn(a,e,s,n)}return r.data==="$?"?(e.flags|=128,e.child=a.child,e=Iu.bind(null,a),r._reactRetry=e,null):(a=i.treeContext,va=se(r.nextSibling),ba=e,M=!0,Aa=null,a!==null&&(ka[_a++]=Fa,ka[_a++]=Ua,ka[_a++]=Ce,Fa=a.id,Ua=a.overflow,Ce=e),e=xs(e,n.children),e.flags|=4096,e)}function Nh(a,e,t){a.lanes|=e;var n=a.alternate;n!==null&&(n.lanes|=e),ji(a.return,e,t)}function Gr(a,e,t,n,r){var i=a.memoizedState;i===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=t,i.tailMode=r)}function Rd(a,e,t){var n=e.pendingProps,r=n.revealOrder,i=n.tail;if(sa(a,e,n.children,t),n=R.current,n&2)n=n&1|2,e.flags|=128;else{if(a!==null&&a.flags&128)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Nh(a,t,e);else if(a.tag===19)Nh(a,t,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}n&=1}if(T(R,n),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)a=t.alternate,a!==null&&Wn(a)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Gr(e,!1,r,t,i);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(a=r.alternate,a!==null&&Wn(a)===null){e.child=r;break}a=r.sibling,r.sibling=t,t=r,r=a}Gr(e,!0,t,null,i);break;case"together":Gr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cn(a,e){!(e.mode&1)&&a!==null&&(a.alternate=null,e.alternate=null,e.flags|=2)}function Wa(a,e,t){if(a!==null&&(e.dependencies=a.dependencies),Ee|=e.lanes,!(t&e.childLanes))return null;if(a!==null&&e.child!==a.child)throw Error(g(153));if(e.child!==null){for(a=e.child,t=le(a,a.pendingProps),e.child=t,t.return=e;a.sibling!==null;)a=a.sibling,t=t.sibling=le(a,a.pendingProps),t.return=e;t.sibling=null}return e.child}function yu(a,e,t){switch(e.tag){case 3:Od(e),et();break;case 5:md(e);break;case 1:pa(e.type)&&Fn(e);break;case 4:ys(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,r=e.memoizedProps.value;T(Yn,n._currentValue),n._currentValue=r;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(T(R,R.current&1),e.flags|=128,null):t&e.child.childLanes?Md(a,e,t):(T(R,R.current&1),a=Wa(a,e,t),a!==null?a.sibling:null);T(R,R.current&1);break;case 19:if(n=(t&e.childLanes)!==0,a.flags&128){if(n)return Rd(a,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),T(R,R.current),n)break;return null;case 22:case 23:return e.lanes=0,Td(a,e,t)}return Wa(a,e,t)}var Bd,Li,Kd,Fd;Bd=function(a,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)a.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Li=function(){};Kd=function(a,e,t,n){var r=a.memoizedProps;if(r!==n){a=e.stateNode,xe(Ra.current);var i=null;switch(t){case"input":r=ai(a,r),n=ai(a,n),i=[];break;case"select":r=K({},r,{value:void 0}),n=K({},n,{value:void 0}),i=[];break;case"textarea":r=ni(a,r),n=ni(a,n),i=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(a.onclick=Bn)}ii(t,n);var s;t=null;for(l in r)if(!n.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var h=r[l];for(s in h)h.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Lt.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in n){var o=n[l];if(h=r!=null?r[l]:void 0,n.hasOwnProperty(l)&&o!==h&&(o!=null||h!=null))if(l==="style")if(h){for(s in h)!h.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in o)o.hasOwnProperty(s)&&h[s]!==o[s]&&(t||(t={}),t[s]=o[s])}else t||(i||(i=[]),i.push(l,t)),t=o;else l==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,h=h?h.__html:void 0,o!=null&&h!==o&&(i=i||[]).push(l,o)):l==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(l,""+o):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Lt.hasOwnProperty(l)?(o!=null&&l==="onScroll"&&D("scroll",a),i||h===o||(i=[])):(i=i||[]).push(l,o))}t&&(i=i||[]).push("style",t);var l=i;(e.updateQueue=l)&&(e.flags|=4)}};Fd=function(a,e,t,n){t!==n&&(e.flags|=4)};function bt(a,e){if(!M)switch(a.tailMode){case"hidden":e=a.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?a.tail=null:t.sibling=null;break;case"collapsed":t=a.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:n.sibling=null}}function na(a){var e=a.alternate!==null&&a.alternate.child===a.child,t=0,n=0;if(e)for(var r=a.child;r!==null;)t|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=a,r=r.sibling;else for(r=a.child;r!==null;)t|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=a,r=r.sibling;return a.subtreeFlags|=n,a.childLanes=t,e}function vu(a,e,t){var n=e.pendingProps;switch(os(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return na(e),null;case 1:return pa(e.type)&&Kn(),na(e),null;case 3:return n=e.stateNode,nt(),O(ua),O(ia),bs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(a===null||a.child===null)&&(cn(e)?e.flags|=4:a===null||a.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Aa!==null&&(Bi(Aa),Aa=null))),Li(a,e),na(e),null;case 5:vs(e);var r=xe($t.current);if(t=e.type,a!==null&&e.stateNode!=null)Kd(a,e,t,n,r),a.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(g(166));return na(e),null}if(a=xe(Ra.current),cn(e)){n=e.stateNode,t=e.type;var i=e.memoizedProps;switch(n[Oa]=e,n[Ft]=i,a=(e.mode&1)!==0,t){case"dialog":D("cancel",n),D("close",n);break;case"iframe":case"object":case"embed":D("load",n);break;case"video":case"audio":for(r=0;r<_t.length;r++)D(_t[r],n);break;case"source":D("error",n);break;case"img":case"image":case"link":D("error",n),D("load",n);break;case"details":D("toggle",n);break;case"input":Fs(n,i),D("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},D("invalid",n);break;case"textarea":$s(n,i),D("invalid",n)}ii(t,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var h=i[s];s==="children"?typeof h=="string"?n.textContent!==h&&(i.suppressHydrationWarning!==!0&&pn(n.textContent,h,a),r=["children",h]):typeof h=="number"&&n.textContent!==""+h&&(i.suppressHydrationWarning!==!0&&pn(n.textContent,h,a),r=["children",""+h]):Lt.hasOwnProperty(s)&&h!=null&&s==="onScroll"&&D("scroll",n)}switch(t){case"input":rn(n),Us(n,i,!0);break;case"textarea":rn(n),Ys(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Bn)}n=r,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=vo(t)),a==="http://www.w3.org/1999/xhtml"?t==="script"?(a=s.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof n.is=="string"?a=s.createElement(t,{is:n.is}):(a=s.createElement(t),t==="select"&&(s=a,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):a=s.createElementNS(a,t),a[Oa]=e,a[Ft]=n,Bd(a,e,!1,!1),e.stateNode=a;a:{switch(s=si(t,n),t){case"dialog":D("cancel",a),D("close",a),r=n;break;case"iframe":case"object":case"embed":D("load",a),r=n;break;case"video":case"audio":for(r=0;r<_t.length;r++)D(_t[r],a);r=n;break;case"source":D("error",a),r=n;break;case"img":case"image":case"link":D("error",a),D("load",a),r=n;break;case"details":D("toggle",a),r=n;break;case"input":Fs(a,n),r=ai(a,n),D("invalid",a);break;case"option":r=n;break;case"select":a._wrapperState={wasMultiple:!!n.multiple},r=K({},n,{value:void 0}),D("invalid",a);break;case"textarea":$s(a,n),r=ni(a,n),D("invalid",a);break;default:r=n}ii(t,r),h=r;for(i in h)if(h.hasOwnProperty(i)){var o=h[i];i==="style"?fo(a,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&bo(a,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&Nt(a,o):typeof o=="number"&&Nt(a,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lt.hasOwnProperty(i)?o!=null&&i==="onScroll"&&D("scroll",a):o!=null&&Hi(a,i,o,s))}switch(t){case"input":rn(a),Us(a,n,!1);break;case"textarea":rn(a),Ys(a);break;case"option":n.value!=null&&a.setAttribute("value",""+me(n.value));break;case"select":a.multiple=!!n.multiple,i=n.value,i!=null?He(a,!!n.multiple,i,!1):n.defaultValue!=null&&He(a,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(a.onclick=Bn)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break a;case"img":n=!0;break a;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return na(e),null;case 6:if(a&&e.stateNode!=null)Fd(a,e,a.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(g(166));if(t=xe($t.current),xe(Ra.current),cn(e)){if(n=e.stateNode,t=e.memoizedProps,n[Oa]=e,(i=n.nodeValue!==t)&&(a=ba,a!==null))switch(a.tag){case 3:pn(n.nodeValue,t,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&pn(n.nodeValue,t,(a.mode&1)!==0)}i&&(e.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[Oa]=e,e.stateNode=n}return na(e),null;case 13:if(O(R),n=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(M&&va!==null&&e.mode&1&&!(e.flags&128))sd(),et(),e.flags|=98560,i=!1;else if(i=cn(e),n!==null&&n.dehydrated!==null){if(a===null){if(!i)throw Error(g(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Oa]=e}else et(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;na(e),i=!1}else Aa!==null&&(Bi(Aa),Aa=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(n=n!==null,n!==(a!==null&&a.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(a===null||R.current&1?W===0&&(W=3):Vs())),e.updateQueue!==null&&(e.flags|=4),na(e),null);case 4:return nt(),Li(a,e),a===null&&Bt(e.stateNode.containerInfo),na(e),null;case 10:return us(e.type._context),na(e),null;case 17:return pa(e.type)&&Kn(),na(e),null;case 19:if(O(R),i=e.memoizedState,i===null)return na(e),null;if(n=(e.flags&128)!==0,s=i.rendering,s===null)if(n)bt(i,!1);else{if(W!==0||a!==null&&a.flags&128)for(a=e.child;a!==null;){if(s=Wn(a),s!==null){for(e.flags|=128,bt(i,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=t,t=e.child;t!==null;)i=t,a=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=a,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,a=s.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t=t.sibling;return T(R,R.current&1|2),e.child}a=a.sibling}i.tail!==null&&Y()>it&&(e.flags|=128,n=!0,bt(i,!1),e.lanes=4194304)}else{if(!n)if(a=Wn(s),a!==null){if(e.flags|=128,n=!0,t=a.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),bt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!M)return na(e),null}else 2*Y()-i.renderingStartTime>it&&t!==1073741824&&(e.flags|=128,n=!0,bt(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Y(),e.sibling=null,t=R.current,T(R,n?t&1|2:t&1),e):(na(e),null);case 22:case 23:return Cs(),n=e.memoizedState!==null,a!==null&&a.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?ya&1073741824&&(na(e),e.subtreeFlags&6&&(e.flags|=8192)):na(e),null;case 24:return null;case 25:return null}throw Error(g(156,e.tag))}function bu(a,e){switch(os(e),e.tag){case 1:return pa(e.type)&&Kn(),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return nt(),O(ua),O(ia),bs(),a=e.flags,a&65536&&!(a&128)?(e.flags=a&-65537|128,e):null;case 5:return vs(e),null;case 13:if(O(R),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(g(340));et()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return O(R),null;case 4:return nt(),null;case 10:return us(e.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var bn=!1,ra=!1,gu=typeof WeakSet=="function"?WeakSet:Set,k=null;function Ye(a,e){var t=a.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){F(a,e,n)}else t.current=null}function Ni(a,e,t){try{t()}catch(n){F(a,e,n)}}var zh=!1;function fu(a,e){if(vi=On,a=Ho(),ss(a)){if("selectionStart"in a)var t={start:a.selectionStart,end:a.selectionEnd};else a:{t=(t=a.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var r=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break a}var s=0,h=-1,o=-1,l=0,y=0,c=a,p=null;e:for(;;){for(var v;c!==t||r!==0&&c.nodeType!==3||(h=s+r),c!==i||n!==0&&c.nodeType!==3||(o=s+n),c.nodeType===3&&(s+=c.nodeValue.length),(v=c.firstChild)!==null;)p=c,c=v;for(;;){if(c===a)break e;if(p===t&&++l===r&&(h=s),p===i&&++y===n&&(o=s),(v=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=v}t=h===-1||o===-1?null:{start:h,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(bi={focusedElem:a,selectionRange:t},On=!1,k=e;k!==null;)if(e=k,a=e.child,(e.subtreeFlags&1028)!==0&&a!==null)a.return=e,k=a;else for(;k!==null;){e=k;try{var f=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var w=f.memoizedProps,L=f.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Va(e.type,w),L);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var u=e.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(b){F(e,e.return,b)}if(a=e.sibling,a!==null){a.return=e.return,k=a;break}k=e.return}return f=zh,zh=!1,f}function Vt(a,e,t){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&a)===a){var i=r.destroy;r.destroy=void 0,i!==void 0&&Ni(e,t,i)}r=r.next}while(r!==n)}}function pr(a,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&a)===a){var n=t.create;t.destroy=n()}t=t.next}while(t!==e)}}function zi(a){var e=a.ref;if(e!==null){var t=a.stateNode;switch(a.tag){case 5:a=t;break;default:a=t}typeof e=="function"?e(a):e.current=a}}function Ud(a){var e=a.alternate;e!==null&&(a.alternate=null,Ud(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&(delete e[Oa],delete e[Ft],delete e[wi],delete e[eu],delete e[tu])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function $d(a){return a.tag===5||a.tag===3||a.tag===4}function Th(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||$d(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Ti(a,e,t){var n=a.tag;if(n===5||n===6)a=a.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(a,e):t.insertBefore(a,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(a,t)):(e=t,e.appendChild(a)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Bn));else if(n!==4&&(a=a.child,a!==null))for(Ti(a,e,t),a=a.sibling;a!==null;)Ti(a,e,t),a=a.sibling}function Di(a,e,t){var n=a.tag;if(n===5||n===6)a=a.stateNode,e?t.insertBefore(a,e):t.appendChild(a);else if(n!==4&&(a=a.child,a!==null))for(Di(a,e,t),a=a.sibling;a!==null;)Di(a,e,t),a=a.sibling}var J=null,Ea=!1;function qa(a,e,t){for(t=t.child;t!==null;)Yd(a,e,t),t=t.sibling}function Yd(a,e,t){if(Ma&&typeof Ma.onCommitFiberUnmount=="function")try{Ma.onCommitFiberUnmount(ir,t)}catch{}switch(t.tag){case 5:ra||Ye(t,e);case 6:var n=J,r=Ea;J=null,qa(a,e,t),J=n,Ea=r,J!==null&&(Ea?(a=J,t=t.stateNode,a.nodeType===8?a.parentNode.removeChild(t):a.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Ea?(a=J,t=t.stateNode,a.nodeType===8?Rr(a.parentNode,t):a.nodeType===1&&Rr(a,t),Ot(a)):Rr(J,t.stateNode));break;case 4:n=J,r=Ea,J=t.stateNode.containerInfo,Ea=!0,qa(a,e,t),J=n,Ea=r;break;case 0:case 11:case 14:case 15:if(!ra&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Ni(t,e,s),r=r.next}while(r!==n)}qa(a,e,t);break;case 1:if(!ra&&(Ye(t,e),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(h){F(t,e,h)}qa(a,e,t);break;case 21:qa(a,e,t);break;case 22:t.mode&1?(ra=(n=ra)||t.memoizedState!==null,qa(a,e,t),ra=n):qa(a,e,t);break;default:qa(a,e,t)}}function Dh(a){var e=a.updateQueue;if(e!==null){a.updateQueue=null;var t=a.stateNode;t===null&&(t=a.stateNode=new gu),e.forEach(function(n){var r=Cu.bind(null,a,n);t.has(n)||(t.add(n),n.then(r,r))})}}function Ca(a,e){var t=e.deletions;if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];try{var i=a,s=e,h=s;a:for(;h!==null;){switch(h.tag){case 5:J=h.stateNode,Ea=!1;break a;case 3:J=h.stateNode.containerInfo,Ea=!0;break a;case 4:J=h.stateNode.containerInfo,Ea=!0;break a}h=h.return}if(J===null)throw Error(g(160));Yd(i,s,r),J=null,Ea=!1;var o=r.alternate;o!==null&&(o.return=null),r.return=null}catch(l){F(r,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gd(e,a),e=e.sibling}function Gd(a,e){var t=a.alternate,n=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(Ca(e,a),Ta(a),n&4){try{Vt(3,a,a.return),pr(3,a)}catch(w){F(a,a.return,w)}try{Vt(5,a,a.return)}catch(w){F(a,a.return,w)}}break;case 1:Ca(e,a),Ta(a),n&512&&t!==null&&Ye(t,t.return);break;case 5:if(Ca(e,a),Ta(a),n&512&&t!==null&&Ye(t,t.return),a.flags&32){var r=a.stateNode;try{Nt(r,"")}catch(w){F(a,a.return,w)}}if(n&4&&(r=a.stateNode,r!=null)){var i=a.memoizedProps,s=t!==null?t.memoizedProps:i,h=a.type,o=a.updateQueue;if(a.updateQueue=null,o!==null)try{h==="input"&&i.type==="radio"&&i.name!=null&&co(r,i),si(h,s);var l=si(h,i);for(s=0;s<o.length;s+=2){var y=o[s],c=o[s+1];y==="style"?fo(r,c):y==="dangerouslySetInnerHTML"?bo(r,c):y==="children"?Nt(r,c):Hi(r,y,c,l)}switch(h){case"input":ei(r,i);break;case"textarea":yo(r,i);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?He(r,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?He(r,!!i.multiple,i.defaultValue,!0):He(r,!!i.multiple,i.multiple?[]:"",!1))}r[Ft]=i}catch(w){F(a,a.return,w)}}break;case 6:if(Ca(e,a),Ta(a),n&4){if(a.stateNode===null)throw Error(g(162));r=a.stateNode,i=a.memoizedProps;try{r.nodeValue=i}catch(w){F(a,a.return,w)}}break;case 3:if(Ca(e,a),Ta(a),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Ot(e.containerInfo)}catch(w){F(a,a.return,w)}break;case 4:Ca(e,a),Ta(a);break;case 13:Ca(e,a),Ta(a),r=a.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Ps=Y())),n&4&&Dh(a);break;case 22:if(y=t!==null&&t.memoizedState!==null,a.mode&1?(ra=(l=ra)||y,Ca(e,a),ra=l):Ca(e,a),Ta(a),n&8192){if(l=a.memoizedState!==null,(a.stateNode.isHidden=l)&&!y&&a.mode&1)for(k=a,y=a.child;y!==null;){for(c=k=y;k!==null;){switch(p=k,v=p.child,p.tag){case 0:case 11:case 14:case 15:Vt(4,p,p.return);break;case 1:Ye(p,p.return);var f=p.stateNode;if(typeof f.componentWillUnmount=="function"){n=p,t=p.return;try{e=n,f.props=e.memoizedProps,f.state=e.memoizedState,f.componentWillUnmount()}catch(w){F(n,t,w)}}break;case 5:Ye(p,p.return);break;case 22:if(p.memoizedState!==null){Mh(c);continue}}v!==null?(v.return=p,k=v):Mh(c)}y=y.sibling}a:for(y=null,c=a;;){if(c.tag===5){if(y===null){y=c;try{r=c.stateNode,l?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(h=c.stateNode,o=c.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,h.style.display=go("display",s))}catch(w){F(a,a.return,w)}}}else if(c.tag===6){if(y===null)try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(w){F(a,a.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===a)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break a;for(;c.sibling===null;){if(c.return===null||c.return===a)break a;y===c&&(y=null),c=c.return}y===c&&(y=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ca(e,a),Ta(a),n&4&&Dh(a);break;case 21:break;default:Ca(e,a),Ta(a)}}function Ta(a){var e=a.flags;if(e&2){try{a:{for(var t=a.return;t!==null;){if($d(t)){var n=t;break a}t=t.return}throw Error(g(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(Nt(r,""),n.flags&=-33);var i=Th(a);Di(a,i,r);break;case 3:case 4:var s=n.stateNode.containerInfo,h=Th(a);Ti(a,h,s);break;default:throw Error(g(161))}}catch(o){F(a,a.return,o)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function wu(a,e,t){k=a,Hd(a)}function Hd(a,e,t){for(var n=(a.mode&1)!==0;k!==null;){var r=k,i=r.child;if(r.tag===22&&n){var s=r.memoizedState!==null||bn;if(!s){var h=r.alternate,o=h!==null&&h.memoizedState!==null||ra;h=bn;var l=ra;if(bn=s,(ra=o)&&!l)for(k=r;k!==null;)s=k,o=s.child,s.tag===22&&s.memoizedState!==null?Rh(r):o!==null?(o.return=s,k=o):Rh(r);for(;i!==null;)k=i,Hd(i),i=i.sibling;k=r,bn=h,ra=l}Oh(a)}else r.subtreeFlags&8772&&i!==null?(i.return=r,k=i):Oh(a)}}function Oh(a){for(;k!==null;){var e=k;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ra||pr(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!ra)if(t===null)n.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Va(e.type,t.memoizedProps);n.componentDidUpdate(r,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&kh(e,i,n);break;case 3:var s=e.updateQueue;if(s!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}kh(e,s,t)}break;case 5:var h=e.stateNode;if(t===null&&e.flags&4){t=h;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var y=l.memoizedState;if(y!==null){var c=y.dehydrated;c!==null&&Ot(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}ra||e.flags&512&&zi(e)}catch(p){F(e,e.return,p)}}if(e===a){k=null;break}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}}function Mh(a){for(;k!==null;){var e=k;if(e===a){k=null;break}var t=e.sibling;if(t!==null){t.return=e.return,k=t;break}k=e.return}}function Rh(a){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{pr(4,e)}catch(o){F(e,t,o)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var r=e.return;try{n.componentDidMount()}catch(o){F(e,r,o)}}var i=e.return;try{zi(e)}catch(o){F(e,i,o)}break;case 5:var s=e.return;try{zi(e)}catch(o){F(e,s,o)}}}catch(o){F(e,e.return,o)}if(e===a){k=null;break}var h=e.sibling;if(h!==null){h.return=e.return,k=h;break}k=e.return}}var ku=Math.ceil,Xn=Qa.ReactCurrentDispatcher,js=Qa.ReactCurrentOwner,ja=Qa.ReactCurrentBatchConfig,N=0,Z=null,G=null,aa=0,ya=0,Ge=ce(0),W=0,Wt=null,Ee=0,cr=0,Ss=0,Et=null,la=null,Ps=0,it=1/0,Ba=null,Zn=!1,Oi=null,oe=null,gn=!1,te=null,Jn=0,At=0,Mi=null,Vn=-1,En=0;function ha(){return N&6?Y():Vn!==-1?Vn:Vn=Y()}function de(a){return a.mode&1?N&2&&aa!==0?aa&-aa:ru.transition!==null?(En===0&&(En=Ao()),En):(a=z,a!==0||(a=window.event,a=a===void 0?16:Mo(a.type)),a):1}function Na(a,e,t,n){if(50<At)throw At=0,Mi=null,Error(g(185));qt(a,t,n),(!(N&2)||a!==Z)&&(a===Z&&(!(N&2)&&(cr|=t),W===4&&ae(a,aa)),ca(a,n),t===1&&N===0&&!(e.mode&1)&&(it=Y()+500,lr&&ye()))}function ca(a,e){var t=a.callbackNode;rm(a,e);var n=Dn(a,a===Z?aa:0);if(n===0)t!==null&&Ws(t),a.callbackNode=null,a.callbackPriority=0;else if(e=n&-n,a.callbackPriority!==e){if(t!=null&&Ws(t),e===1)a.tag===0?nu(Bh.bind(null,a)):nd(Bh.bind(null,a)),Jm(function(){!(N&6)&&ye()}),t=null;else{switch(Lo(n)){case 1:t=Zi;break;case 4:t=Vo;break;case 16:t=Tn;break;case 536870912:t=Eo;break;default:t=Tn}t=el(t,Wd.bind(null,a))}a.callbackPriority=e,a.callbackNode=t}}function Wd(a,e){if(Vn=-1,En=0,N&6)throw Error(g(327));var t=a.callbackNode;if(Ze()&&a.callbackNode!==t)return null;var n=Dn(a,a===Z?aa:0);if(n===0)return null;if(n&30||n&a.expiredLanes||e)e=ar(a,n);else{e=n;var r=N;N|=2;var i=qd();(Z!==a||aa!==e)&&(Ba=null,it=Y()+500,Se(a,e));do try{ju();break}catch(h){Qd(a,h)}while(!0);ms(),Xn.current=i,N=r,G!==null?e=0:(Z=null,aa=0,e=W)}if(e!==0){if(e===2&&(r=mi(a),r!==0&&(n=r,e=Ri(a,r))),e===1)throw t=Wt,Se(a,0),ae(a,n),ca(a,Y()),t;if(e===6)ae(a,n);else{if(r=a.current.alternate,!(n&30)&&!_u(r)&&(e=ar(a,n),e===2&&(i=mi(a),i!==0&&(n=i,e=Ri(a,i))),e===1))throw t=Wt,Se(a,0),ae(a,n),ca(a,Y()),t;switch(a.finishedWork=r,a.finishedLanes=n,e){case 0:case 1:throw Error(g(345));case 2:we(a,la,Ba);break;case 3:if(ae(a,n),(n&130023424)===n&&(e=Ps+500-Y(),10<e)){if(Dn(a,0)!==0)break;if(r=a.suspendedLanes,(r&n)!==n){ha(),a.pingedLanes|=a.suspendedLanes&r;break}a.timeoutHandle=fi(we.bind(null,a,la,Ba),e);break}we(a,la,Ba);break;case 4:if(ae(a,n),(n&4194240)===n)break;for(e=a.eventTimes,r=-1;0<n;){var s=31-La(n);i=1<<s,s=e[s],s>r&&(r=s),n&=~i}if(n=r,n=Y()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ku(n/1960))-n,10<n){a.timeoutHandle=fi(we.bind(null,a,la,Ba),n);break}we(a,la,Ba);break;case 5:we(a,la,Ba);break;default:throw Error(g(329))}}}return ca(a,Y()),a.callbackNode===t?Wd.bind(null,a):null}function Ri(a,e){var t=Et;return a.current.memoizedState.isDehydrated&&(Se(a,e).flags|=256),a=ar(a,e),a!==2&&(e=la,la=t,e!==null&&Bi(e)),a}function Bi(a){la===null?la=a:la.push.apply(la,a)}function _u(a){for(var e=a;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var r=t[n],i=r.getSnapshot;r=r.value;try{if(!za(i(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ae(a,e){for(e&=~Ss,e&=~cr,a.suspendedLanes|=e,a.pingedLanes&=~e,a=a.expirationTimes;0<e;){var t=31-La(e),n=1<<t;a[t]=-1,e&=~n}}function Bh(a){if(N&6)throw Error(g(327));Ze();var e=Dn(a,0);if(!(e&1))return ca(a,Y()),null;var t=ar(a,e);if(a.tag!==0&&t===2){var n=mi(a);n!==0&&(e=n,t=Ri(a,n))}if(t===1)throw t=Wt,Se(a,0),ae(a,e),ca(a,Y()),t;if(t===6)throw Error(g(345));return a.finishedWork=a.current.alternate,a.finishedLanes=e,we(a,la,Ba),ca(a,Y()),null}function Is(a,e){var t=N;N|=1;try{return a(e)}finally{N=t,N===0&&(it=Y()+500,lr&&ye())}}function Ae(a){te!==null&&te.tag===0&&!(N&6)&&Ze();var e=N;N|=1;var t=ja.transition,n=z;try{if(ja.transition=null,z=1,a)return a()}finally{z=n,ja.transition=t,N=e,!(N&6)&&ye()}}function Cs(){ya=Ge.current,O(Ge)}function Se(a,e){a.finishedWork=null,a.finishedLanes=0;var t=a.timeoutHandle;if(t!==-1&&(a.timeoutHandle=-1,Zm(t)),G!==null)for(t=G.return;t!==null;){var n=t;switch(os(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Kn();break;case 3:nt(),O(ua),O(ia),bs();break;case 5:vs(n);break;case 4:nt();break;case 13:O(R);break;case 19:O(R);break;case 10:us(n.type._context);break;case 22:case 23:Cs()}t=t.return}if(Z=a,G=a=le(a.current,null),aa=ya=e,W=0,Wt=null,Ss=cr=Ee=0,la=Et=null,_e!==null){for(e=0;e<_e.length;e++)if(t=_e[e],n=t.interleaved,n!==null){t.interleaved=null;var r=n.next,i=t.pending;if(i!==null){var s=i.next;i.next=r,n.next=s}t.pending=n}_e=null}return a}function Qd(a,e){do{var t=G;try{if(ms(),Pn.current=qn,Qn){for(var n=B.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Qn=!1}if(Ve=0,q=H=B=null,Ct=!1,Yt=0,js.current=null,t===null||t.return===null){W=1,Wt=e,G=null;break}a:{var i=a,s=t.return,h=t,o=e;if(e=aa,h.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var l=o,y=h,c=y.tag;if(!(y.mode&1)&&(c===0||c===11||c===15)){var p=y.alternate;p?(y.updateQueue=p.updateQueue,y.memoizedState=p.memoizedState,y.lanes=p.lanes):(y.updateQueue=null,y.memoizedState=null)}var v=Ih(s);if(v!==null){v.flags&=-257,Ch(v,s,h,i,e),v.mode&1&&Ph(i,l,e),e=v,o=l;var f=e.updateQueue;if(f===null){var w=new Set;w.add(o),e.updateQueue=w}else f.add(o);break a}else{if(!(e&1)){Ph(i,l,e),Vs();break a}o=Error(g(426))}}else if(M&&h.mode&1){var L=Ih(s);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Ch(L,s,h,i,e),ds(rt(o,h));break a}}i=o=rt(o,h),W!==4&&(W=2),Et===null?Et=[i]:Et.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Ld(i,o,e);wh(i,m);break a;case 1:h=o;var d=i.type,u=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(oe===null||!oe.has(u)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Nd(i,h,e);wh(i,b);break a}}i=i.return}while(i!==null)}Zd(t)}catch(_){e=_,G===t&&t!==null&&(G=t=t.return);continue}break}while(!0)}function qd(){var a=Xn.current;return Xn.current=qn,a===null?qn:a}function Vs(){(W===0||W===3||W===2)&&(W=4),Z===null||!(Ee&268435455)&&!(cr&268435455)||ae(Z,aa)}function ar(a,e){var t=N;N|=2;var n=qd();(Z!==a||aa!==e)&&(Ba=null,Se(a,e));do try{xu();break}catch(r){Qd(a,r)}while(!0);if(ms(),N=t,Xn.current=n,G!==null)throw Error(g(261));return Z=null,aa=0,W}function xu(){for(;G!==null;)Xd(G)}function ju(){for(;G!==null&&!Ql();)Xd(G)}function Xd(a){var e=al(a.alternate,a,ya);a.memoizedProps=a.pendingProps,e===null?Zd(a):G=e,js.current=null}function Zd(a){var e=a;do{var t=e.alternate;if(a=e.return,e.flags&32768){if(t=bu(t,e),t!==null){t.flags&=32767,G=t;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{W=6,G=null;return}}else if(t=vu(t,e,ya),t!==null){G=t;return}if(e=e.sibling,e!==null){G=e;return}G=e=a}while(e!==null);W===0&&(W=5)}function we(a,e,t){var n=z,r=ja.transition;try{ja.transition=null,z=1,Su(a,e,t,n)}finally{ja.transition=r,z=n}return null}function Su(a,e,t,n){do Ze();while(te!==null);if(N&6)throw Error(g(327));t=a.finishedWork;var r=a.finishedLanes;if(t===null)return null;if(a.finishedWork=null,a.finishedLanes=0,t===a.current)throw Error(g(177));a.callbackNode=null,a.callbackPriority=0;var i=t.lanes|t.childLanes;if(im(a,i),a===Z&&(G=Z=null,aa=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gn||(gn=!0,el(Tn,function(){return Ze(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=ja.transition,ja.transition=null;var s=z;z=1;var h=N;N|=4,js.current=null,fu(a,t),Gd(t,a),Ym(bi),On=!!vi,bi=vi=null,a.current=t,wu(t),ql(),N=h,z=s,ja.transition=i}else a.current=t;if(gn&&(gn=!1,te=a,Jn=r),i=a.pendingLanes,i===0&&(oe=null),Jl(t.stateNode),ca(a,Y()),e!==null)for(n=a.onRecoverableError,t=0;t<e.length;t++)r=e[t],n(r.value,{componentStack:r.stack,digest:r.digest});if(Zn)throw Zn=!1,a=Oi,Oi=null,a;return Jn&1&&a.tag!==0&&Ze(),i=a.pendingLanes,i&1?a===Mi?At++:(At=0,Mi=a):At=0,ye(),null}function Ze(){if(te!==null){var a=Lo(Jn),e=ja.transition,t=z;try{if(ja.transition=null,z=16>a?16:a,te===null)var n=!1;else{if(a=te,te=null,Jn=0,N&6)throw Error(g(331));var r=N;for(N|=4,k=a.current;k!==null;){var i=k,s=i.child;if(k.flags&16){var h=i.deletions;if(h!==null){for(var o=0;o<h.length;o++){var l=h[o];for(k=l;k!==null;){var y=k;switch(y.tag){case 0:case 11:case 15:Vt(8,y,i)}var c=y.child;if(c!==null)c.return=y,k=c;else for(;k!==null;){y=k;var p=y.sibling,v=y.return;if(Ud(y),y===l){k=null;break}if(p!==null){p.return=v,k=p;break}k=v}}}var f=i.alternate;if(f!==null){var w=f.child;if(w!==null){f.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}k=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,k=s;else a:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vt(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,k=m;break a}k=i.return}}var d=a.current;for(k=d;k!==null;){s=k;var u=s.child;if(s.subtreeFlags&2064&&u!==null)u.return=s,k=u;else a:for(s=d;k!==null;){if(h=k,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:pr(9,h)}}catch(_){F(h,h.return,_)}if(h===s){k=null;break a}var b=h.sibling;if(b!==null){b.return=h.return,k=b;break a}k=h.return}}if(N=r,ye(),Ma&&typeof Ma.onPostCommitFiberRoot=="function")try{Ma.onPostCommitFiberRoot(ir,a)}catch{}n=!0}return n}finally{z=t,ja.transition=e}}return!1}function Kh(a,e,t){e=rt(t,e),e=Ld(a,e,1),a=he(a,e,1),e=ha(),a!==null&&(qt(a,1,e),ca(a,e))}function F(a,e,t){if(a.tag===3)Kh(a,a,t);else for(;e!==null;){if(e.tag===3){Kh(e,a,t);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(oe===null||!oe.has(n))){a=rt(t,a),a=Nd(e,a,1),e=he(e,a,1),a=ha(),e!==null&&(qt(e,1,a),ca(e,a));break}}e=e.return}}function Pu(a,e,t){var n=a.pingCache;n!==null&&n.delete(e),e=ha(),a.pingedLanes|=a.suspendedLanes&t,Z===a&&(aa&t)===t&&(W===4||W===3&&(aa&130023424)===aa&&500>Y()-Ps?Se(a,0):Ss|=t),ca(a,e)}function Jd(a,e){e===0&&(a.mode&1?(e=on,on<<=1,!(on&130023424)&&(on=4194304)):e=1);var t=ha();a=Ha(a,e),a!==null&&(qt(a,e,t),ca(a,t))}function Iu(a){var e=a.memoizedState,t=0;e!==null&&(t=e.retryLane),Jd(a,t)}function Cu(a,e){var t=0;switch(a.tag){case 13:var n=a.stateNode,r=a.memoizedState;r!==null&&(t=r.retryLane);break;case 19:n=a.stateNode;break;default:throw Error(g(314))}n!==null&&n.delete(e),Jd(a,t)}var al;al=function(a,e,t){if(a!==null)if(a.memoizedProps!==e.pendingProps||ua.current)ma=!0;else{if(!(a.lanes&t)&&!(e.flags&128))return ma=!1,yu(a,e,t);ma=!!(a.flags&131072)}else ma=!1,M&&e.flags&1048576&&rd(e,$n,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Cn(a,e),a=e.pendingProps;var r=at(e,ia.current);Xe(e,t),r=fs(null,e,n,a,r,t);var i=ws();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pa(n)?(i=!0,Fn(e)):i=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cs(e),r.updater=ur,e.stateNode=r,r._reactInternals=e,Pi(e,n,a,t),e=Vi(null,e,n,!0,i,t)):(e.tag=0,M&&i&&hs(e),sa(null,e,r,t),e=e.child),e;case 16:n=e.elementType;a:{switch(Cn(a,e),a=e.pendingProps,r=n._init,n=r(n._payload),e.type=n,r=e.tag=Eu(n),a=Va(n,a),r){case 0:e=Ci(null,e,n,a,t);break a;case 1:e=Ah(null,e,n,a,t);break a;case 11:e=Vh(null,e,n,a,t);break a;case 14:e=Eh(null,e,n,Va(n.type,a),t);break a}throw Error(g(306,n,""))}return e;case 0:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:Va(n,r),Ci(a,e,n,r,t);case 1:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:Va(n,r),Ah(a,e,n,r,t);case 3:a:{if(Od(e),a===null)throw Error(g(387));n=e.pendingProps,i=e.memoizedState,r=i.element,ld(a,e),Hn(e,n,null,t);var s=e.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){r=rt(Error(g(423)),e),e=Lh(a,e,n,t,r);break a}else if(n!==r){r=rt(Error(g(424)),e),e=Lh(a,e,n,t,r);break a}else for(va=se(e.stateNode.containerInfo.firstChild),ba=e,M=!0,Aa=null,t=od(e,null,n,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),n===r){e=Wa(a,e,t);break a}sa(a,e,n,t)}e=e.child}return e;case 5:return md(e),a===null&&xi(e),n=e.type,r=e.pendingProps,i=a!==null?a.memoizedProps:null,s=r.children,gi(n,r)?s=null:i!==null&&gi(n,i)&&(e.flags|=32),Dd(a,e),sa(a,e,s,t),e.child;case 6:return a===null&&xi(e),null;case 13:return Md(a,e,t);case 4:return ys(e,e.stateNode.containerInfo),n=e.pendingProps,a===null?e.child=tt(e,null,n,t):sa(a,e,n,t),e.child;case 11:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:Va(n,r),Vh(a,e,n,r,t);case 7:return sa(a,e,e.pendingProps,t),e.child;case 8:return sa(a,e,e.pendingProps.children,t),e.child;case 12:return sa(a,e,e.pendingProps.children,t),e.child;case 10:a:{if(n=e.type._context,r=e.pendingProps,i=e.memoizedProps,s=r.value,T(Yn,n._currentValue),n._currentValue=s,i!==null)if(za(i.value,s)){if(i.children===r.children&&!ua.current){e=Wa(a,e,t);break a}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var h=i.dependencies;if(h!==null){s=i.child;for(var o=h.firstContext;o!==null;){if(o.context===n){if(i.tag===1){o=$a(-1,t&-t),o.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var y=l.pending;y===null?o.next=o:(o.next=y.next,y.next=o),l.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),ji(i.return,t,e),h.lanes|=t;break}o=o.next}}else if(i.tag===10)s=i.type===e.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(g(341));s.lanes|=t,h=s.alternate,h!==null&&(h.lanes|=t),ji(s,t,e),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}sa(a,e,r.children,t),e=e.child}return e;case 9:return r=e.type,n=e.pendingProps.children,Xe(e,t),r=Sa(r),n=n(r),e.flags|=1,sa(a,e,n,t),e.child;case 14:return n=e.type,r=Va(n,e.pendingProps),r=Va(n.type,r),Eh(a,e,n,r,t);case 15:return zd(a,e,e.type,e.pendingProps,t);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:Va(n,r),Cn(a,e),e.tag=1,pa(n)?(a=!0,Fn(e)):a=!1,Xe(e,t),Ad(e,n,r),Pi(e,n,r,t),Vi(null,e,n,!0,a,t);case 19:return Rd(a,e,t);case 22:return Td(a,e,t)}throw Error(g(156,e.tag))};function el(a,e){return Co(a,e)}function Vu(a,e,t,n){this.tag=a,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xa(a,e,t,n){return new Vu(a,e,t,n)}function Es(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Eu(a){if(typeof a=="function")return Es(a)?1:0;if(a!=null){if(a=a.$$typeof,a===Qi)return 11;if(a===qi)return 14}return 2}function le(a,e){var t=a.alternate;return t===null?(t=xa(a.tag,e,a.key,a.mode),t.elementType=a.elementType,t.type=a.type,t.stateNode=a.stateNode,t.alternate=a,a.alternate=t):(t.pendingProps=e,t.type=a.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=a.flags&14680064,t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=a.sibling,t.index=a.index,t.ref=a.ref,t}function An(a,e,t,n,r,i){var s=2;if(n=a,typeof a=="function")Es(a)&&(s=1);else if(typeof a=="string")s=5;else a:switch(a){case De:return Pe(t.children,r,i,e);case Wi:s=8,r|=8;break;case qr:return a=xa(12,t,e,r|2),a.elementType=qr,a.lanes=i,a;case Xr:return a=xa(13,t,e,r),a.elementType=Xr,a.lanes=i,a;case Zr:return a=xa(19,t,e,r),a.elementType=Zr,a.lanes=i,a;case mo:return yr(t,r,i,e);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case oo:s=10;break a;case lo:s=9;break a;case Qi:s=11;break a;case qi:s=14;break a;case Xa:s=16,n=null;break a}throw Error(g(130,a==null?a:typeof a,""))}return e=xa(s,t,e,r),e.elementType=a,e.type=n,e.lanes=i,e}function Pe(a,e,t,n){return a=xa(7,a,n,e),a.lanes=t,a}function yr(a,e,t,n){return a=xa(22,a,n,e),a.elementType=mo,a.lanes=t,a.stateNode={isHidden:!1},a}function Hr(a,e,t){return a=xa(6,a,null,e),a.lanes=t,a}function Wr(a,e,t){return e=xa(4,a.children!==null?a.children:[],a.key,e),e.lanes=t,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}function Au(a,e,t,n,r){this.tag=e,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cr(0),this.expirationTimes=Cr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cr(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function As(a,e,t,n,r,i,s,h,o){return a=new Au(a,e,t,h,o),e===1?(e=1,i===!0&&(e|=8)):e=0,i=xa(3,null,null,e),a.current=i,i.stateNode=a,i.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(i),a}function Lu(a,e,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:n==null?null:""+n,children:a,containerInfo:e,implementation:t}}function tl(a){if(!a)return ue;a=a._reactInternals;a:{if(Ne(a)!==a||a.tag!==1)throw Error(g(170));var e=a;do{switch(e.tag){case 3:e=e.stateNode.context;break a;case 1:if(pa(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break a}}e=e.return}while(e!==null);throw Error(g(171))}if(a.tag===1){var t=a.type;if(pa(t))return td(a,t,e)}return e}function nl(a,e,t,n,r,i,s,h,o){return a=As(t,n,!0,a,r,i,s,h,o),a.context=tl(null),t=a.current,n=ha(),r=de(t),i=$a(n,r),i.callback=e??null,he(t,i,r),a.current.lanes=r,qt(a,r,n),ca(a,n),a}function vr(a,e,t,n){var r=e.current,i=ha(),s=de(r);return t=tl(t),e.context===null?e.context=t:e.pendingContext=t,e=$a(i,s),e.payload={element:a},n=n===void 0?null:n,n!==null&&(e.callback=n),a=he(r,e,s),a!==null&&(Na(a,r,s,i),Sn(a,r,s)),s}function er(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Fh(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var t=a.retryLane;a.retryLane=t!==0&&t<e?t:e}}function Ls(a,e){Fh(a,e),(a=a.alternate)&&Fh(a,e)}function Nu(){return null}var rl=typeof reportError=="function"?reportError:function(a){console.error(a)};function Ns(a){this._internalRoot=a}br.prototype.render=Ns.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(g(409));vr(a,e,null,null)};br.prototype.unmount=Ns.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;Ae(function(){vr(null,a,null,null)}),e[Ga]=null}};function br(a){this._internalRoot=a}br.prototype.unstable_scheduleHydration=function(a){if(a){var e=To();a={blockedOn:null,target:a,priority:e};for(var t=0;t<Ja.length&&e!==0&&e<Ja[t].priority;t++);Ja.splice(t,0,a),t===0&&Oo(a)}};function zs(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function gr(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function Uh(){}function zu(a,e,t,n,r){if(r){if(typeof n=="function"){var i=n;n=function(){var l=er(s);i.call(l)}}var s=nl(e,n,a,0,null,!1,!1,"",Uh);return a._reactRootContainer=s,a[Ga]=s.current,Bt(a.nodeType===8?a.parentNode:a),Ae(),s}for(;r=a.lastChild;)a.removeChild(r);if(typeof n=="function"){var h=n;n=function(){var l=er(o);h.call(l)}}var o=As(a,0,!1,null,null,!1,!1,"",Uh);return a._reactRootContainer=o,a[Ga]=o.current,Bt(a.nodeType===8?a.parentNode:a),Ae(function(){vr(e,o,t,n)}),o}function fr(a,e,t,n,r){var i=t._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var h=r;r=function(){var o=er(s);h.call(o)}}vr(e,s,a,r)}else s=zu(t,e,a,r,n);return er(s)}No=function(a){switch(a.tag){case 3:var e=a.stateNode;if(e.current.memoizedState.isDehydrated){var t=kt(e.pendingLanes);t!==0&&(Ji(e,t|1),ca(e,Y()),!(N&6)&&(it=Y()+500,ye()))}break;case 13:Ae(function(){var n=Ha(a,1);if(n!==null){var r=ha();Na(n,a,1,r)}}),Ls(a,1)}};as=function(a){if(a.tag===13){var e=Ha(a,134217728);if(e!==null){var t=ha();Na(e,a,134217728,t)}Ls(a,134217728)}};zo=function(a){if(a.tag===13){var e=de(a),t=Ha(a,e);if(t!==null){var n=ha();Na(t,a,e,n)}Ls(a,e)}};To=function(){return z};Do=function(a,e){var t=z;try{return z=a,e()}finally{z=t}};oi=function(a,e,t){switch(e){case"input":if(ei(a,t),e=t.name,t.type==="radio"&&e!=null){for(t=a;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var n=t[e];if(n!==a&&n.form===a.form){var r=dr(n);if(!r)throw Error(g(90));po(n),ei(n,r)}}}break;case"textarea":yo(a,t);break;case"select":e=t.value,e!=null&&He(a,!!t.multiple,e,!1)}};_o=Is;xo=Ae;var Tu={usingClientEntryPoint:!1,Events:[Zt,Be,dr,wo,ko,Is]},gt={findFiberByHostInstance:ke,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Du={bundleType:gt.bundleType,version:gt.version,rendererPackageName:gt.rendererPackageName,rendererConfig:gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=Po(a),a===null?null:a.stateNode},findFiberByHostInstance:gt.findFiberByHostInstance||Nu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fn.isDisabled&&fn.supportsFiber)try{ir=fn.inject(Du),Ma=fn}catch{}}fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tu;fa.createPortal=function(a,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zs(e))throw Error(g(200));return Lu(a,e,null,t)};fa.createRoot=function(a,e){if(!zs(a))throw Error(g(299));var t=!1,n="",r=rl;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=As(a,1,!1,null,null,t,!1,n,r),a[Ga]=e.current,Bt(a.nodeType===8?a.parentNode:a),new Ns(e)};fa.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(g(188)):(a=Object.keys(a).join(","),Error(g(268,a)));return a=Po(e),a=a===null?null:a.stateNode,a};fa.flushSync=function(a){return Ae(a)};fa.hydrate=function(a,e,t){if(!gr(e))throw Error(g(200));return fr(null,a,e,!0,t)};fa.hydrateRoot=function(a,e,t){if(!zs(a))throw Error(g(405));var n=t!=null&&t.hydratedSources||null,r=!1,i="",s=rl;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),e=nl(e,null,a,1,t??null,r,!1,i,s),a[Ga]=e.current,Bt(a),n)for(a=0;a<n.length;a++)t=n[a],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new br(e)};fa.render=function(a,e,t){if(!gr(e))throw Error(g(200));return fr(null,a,e,!1,t)};fa.unmountComponentAtNode=function(a){if(!gr(a))throw Error(g(40));return a._reactRootContainer?(Ae(function(){fr(null,null,a,!1,function(){a._reactRootContainer=null,a[Ga]=null})}),!0):!1};fa.unstable_batchedUpdates=Is;fa.unstable_renderSubtreeIntoContainer=function(a,e,t,n){if(!gr(t))throw Error(g(200));if(a==null||a._reactInternals===void 0)throw Error(g(38));return fr(a,e,t,!1,n)};fa.version="18.3.1-next-f1338f8080-20240426";function il(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(il)}catch(a){console.error(a)}}il(),ro.exports=fa;var Ou=ro.exports,sl,$h=Ou;sl=$h.createRoot,$h.hydrateRoot;const Mu=[{chapter_number:1,id:1,image_name:"arjuna-vishada-yoga",name:"अर्जुनविषादयोग",name_meaning:"Arjuna's Dilemma",name_translation:"Arjuna Visada Yoga",name_transliterated:"Arjun Viṣhād Yog",verses_count:47},{chapter_number:2,id:2,image_name:"sankhya-yoga",name:"सांख्ययोग",name_meaning:"Transcendental Knowledge",name_translation:"Sankhya Yoga",name_transliterated:"Sānkhya Yog",verses_count:72},{chapter_number:3,id:3,image_name:"karma-yoga",name:"कर्मयोग",name_meaning:"Path of Selfless Service",name_translation:"Karma Yoga",name_transliterated:"Karm Yog",verses_count:43},{chapter_number:4,id:4,image_name:"jnana-karma-sanyasa-yoga",name:"ज्ञानकर्मसंन्यासयोग",name_meaning:"Path of Knowledge and the Disciplines of Action",name_translation:"Jnana Karma Sanyasa Yoga",name_transliterated:"Jñāna Karm Sanyās Yog",verses_count:42},{chapter_number:5,id:5,image_name:"karma-sanyasa-yoga",name:"कर्मसंन्यासयोग",name_meaning:"Path of Renunciation",name_translation:"Karma Sanyasa Yoga",name_transliterated:"Karm Sanyās Yog",verses_count:29},{chapter_number:6,id:6,image_name:"dhyana-yoga",name:"ध्यानयोग",name_meaning:"Path of Meditation",name_translation:"Dhyana Yoga",name_transliterated:"Dhyān Yog",verses_count:47},{chapter_number:7,id:7,image_name:"gyan-vigyana-yoga",name:"ज्ञानविज्ञानयोग",name_meaning:"Self-Knowledge and Enlightenment",name_translation:"Gyaan Vigyana Yoga",name_transliterated:"Jñāna Vijñāna Yog",verses_count:30},{chapter_number:8,id:8,image_name:"akshara-brahma-yoga",name:"अक्षरब्रह्मयोग",name_meaning:"Path of the Eternal God",name_translation:"Akshara Brahma Yoga",name_transliterated:"Akṣhar Brahma Yog",verses_count:28},{chapter_number:9,id:9,image_name:"raja-vidya-yoga",name:"राजविद्याराजगुह्ययोग",name_meaning:"Yoga through the King of Sciences",name_translation:"Raja Vidya Yoga",name_transliterated:"Rāja Vidyā Yog",verses_count:34},{chapter_number:10,id:10,image_name:"vibhooti-yoga",name:"विभूतियोग",name_meaning:"Yoga through Appreciating the Infinite Opulences of God",name_translation:"Vibhooti Yoga",name_transliterated:"Vibhūti Yog",verses_count:42},{chapter_number:11,id:11,image_name:"vishwaroopa-darshana-yoga",name:"विश्वरूपदर्शनयोग",name_meaning:"Yoga through Beholding the Cosmic Form of God",name_translation:"Vishwaroopa Darshana Yoga",name_transliterated:"Viśhwarūp Darśhan Yog",verses_count:55},{chapter_number:12,id:12,image_name:"bhakti-yoga",name:"भक्तियोग",name_meaning:"The Yoga of Devotion",name_translation:"Bhakti Yoga",name_transliterated:"Bhakti Yog",verses_count:20},{chapter_number:13,id:13,image_name:"kshetra-kshetrajna-vibhaga-yoga",name:"क्षेत्र-क्षेत्रज्ञविभागयोग",name_meaning:"Yoga through Distinguishing the Field and the Knower of the Field",name_translation:"Ksetra Ksetrajna Vibhaaga Yoga",name_transliterated:"Kṣhetra Kṣhetrajña Vibhāg Yog",verses_count:35},{chapter_number:14,id:14,image_name:"gunatraya-vibhaga-yoga",name:"गुणत्रयविभागयोग",name_meaning:"Yoga through Understanding the Three Modes of Material Nature",name_translation:"Gunatraya Vibhaga Yoga",name_transliterated:"Guṇa Traya Vibhāg Yog",verses_count:27},{chapter_number:15,id:15,image_name:"purushotamma-yoga",name:"पुरुषोत्तमयोग",name_meaning:"The Yoga of the Supreme Divine Personality",name_translation:"Purushottama Yoga",name_transliterated:"Puruṣhottam Yog",verses_count:20},{chapter_number:16,id:16,image_name:"daivasura-sampad-vibhaga-yoga",name:"दैवासुरसम्पद्विभागयोग",name_meaning:"Yoga through Discerning the Divine and Demoniac Natures",name_translation:"Daivasura Sampad Vibhaga Yoga",name_transliterated:"Daivāsura Sampad Vibhāg Yog",verses_count:24},{chapter_number:17,id:17,image_name:"shraddha-traya-vibhaga-yoga",name:"श्रद्धात्रयविभागयोग",name_meaning:"Yoga through Discerning the Three Divisions of Faith",name_translation:"Sraddhatraya Vibhaga Yoga",name_transliterated:"Śhraddhā Traya Vibhāg Yog",verses_count:28},{chapter_number:18,id:18,image_name:"moksha-sanyasa-yoga",name:"मोक्षसंन्यासयोग",name_meaning:"Yoga through the Perfection of Renunciation and Surrender",name_translation:"Moksha Sanyaas Yoga",name_transliterated:"Mokṣha Sanyās Yog",verses_count:78}],hl=[{chapter_id:1,chapter_number:1,externalId:1,id:1,text:`धृतराष्ट्र उवाच

धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।

मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।1.1।।
 `,title:"Verse 1",verse_number:1,verse_order:1,transliteration:`dhṛitarāśhtra uvācha
dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ
māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya
`,word_meanings:`dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S01.mp3"},{chapter_id:1,chapter_number:1,externalId:2,id:2,text:`सञ्जय उवाच

दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।

आचार्यमुपसङ्गम्य राजा वचनमब्रवीत्।।1.2।।
 `,title:"Verse 2",verse_number:2,verse_order:2,transliteration:`sañjaya uvācha
dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā
āchāryamupasaṅgamya rājā vachanamabravīt
`,word_meanings:`sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S02.mp3"},{chapter_id:1,chapter_number:1,externalId:3,id:3,text:`पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।

व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता।।1.3।।
 `,title:"Verse 3",verse_number:3,verse_order:3,transliteration:`paśhyaitāṁ pāṇḍu-putrāṇām āchārya mahatīṁ chamūm
vyūḍhāṁ drupada-putreṇa tava śhiṣhyeṇa dhīmatā
`,word_meanings:`paśhya—behold; etām—this; pāṇḍu-putrāṇām—of the sons of Pandu; āchārya—respected teacher; mahatīm—mighty; chamūm—army; vyūḍhām—arrayed in a military formation; drupada-putreṇa—son of Drupad, Dhrishtadyumna; tava—by your; śhiṣhyeṇa—disciple; dhī-matā—intelligent
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S03.mp3"},{chapter_id:1,chapter_number:1,externalId:4,id:4,text:`अत्र शूरा महेष्वासा भीमार्जुनसमा युधि।

युयुधानो विराटश्च द्रुपदश्च महारथः।।1.4।।
 `,title:"Verse 4",verse_number:4,verse_order:4,transliteration:`atra śhūrā maheṣhvāsā bhīmārjuna-samā yudhi
yuyudhāno virāṭaśhcha drupadaśhcha mahā-rathaḥ
`,word_meanings:`atra—here; śhūrāḥ—powerful warriors; mahā-iṣhu-āsāḥ—great bowmen; bhīma-arjuna-samāḥ—equal to Bheem and Arjun; yudhi—in military prowess; yuyudhānaḥ—Yuyudhan; virāṭaḥ—Virat; cha—and; drupadaḥ—Drupad; cha—also; mahā-rathaḥ—warriors who could single handedly match the strength of ten thousand ordinary warriors;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S04.mp3"},{chapter_id:1,chapter_number:1,externalId:5,id:5,text:`धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्।

पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः।।1.5।।
 `,title:"Verse 5",verse_number:5,verse_order:5,transliteration:`dhṛiṣhṭaketuśhchekitānaḥ kāśhirājaśhcha vīryavān
purujit kuntibhojaśhcha śhaibyaśhcha nara-puṅgavaḥ
yudhāmanyuśhcha vikrānta uttamaujāśhcha vīryavān
`,word_meanings:`dhṛiṣhṭaketuḥ—Dhrishtaketu; chekitānaḥ—Chekitan; kāśhirājaḥ—Kashiraj; cha—and; vīrya-vān—heroic; purujit—Purujit; kuntibhojaḥ—Kuntibhoj; cha—and; śhaibyaḥ—Shaibya; cha—and; nara-puṅgavaḥ—best of men; yudhāmanyuḥ—Yudhamanyu; cha—and; vikrāntaḥ—courageous; uttamaujāḥ—Uttamauja; cha—and; vīrya-vān—gallant;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S05.mp3"},{chapter_id:1,chapter_number:1,externalId:6,id:6,text:`युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्।

सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः।।1.6।।
 `,title:"Verse 6",verse_number:6,verse_order:6,transliteration:`saubhadro draupadeyāśhcha sarva eva mahā-rathāḥ
`,word_meanings:`saubhadraḥ—the son of Subhadra; draupadeyāḥ—the sons of Draupadi; cha—and; sarve—all; eva—indeed; mahā-rathāḥ—warriors who could single handedly match the strength of ten thousand ordinary warriors
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S06.mp3"},{chapter_id:1,chapter_number:1,externalId:7,id:7,text:`अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम।

नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते।।1.7।।
 `,title:"Verse 7",verse_number:7,verse_order:7,transliteration:`asmākaṁ tu viśhiṣhṭā ye tānnibodha dwijottama
nāyakā mama sainyasya sanjñārthaṁ tānbravīmi te
`,word_meanings:`asmākam—ours; tu—but; viśhiṣhṭāḥ—special; ye—who; tān—them; nibodha—be informed; dwija-uttama—best of Brahmnis; nāyakāḥ—principal generals; mama—our; sainyasya—of army; sanjñā-artham—for information; tān—them; bravīmi—I recount; te—unto you
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S07.mp3"},{chapter_id:1,chapter_number:1,externalId:8,id:8,text:`भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः।

अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च।।1.8।।
 `,title:"Verse 8",verse_number:8,verse_order:8,transliteration:`bhavānbhīṣhmaśhcha karṇaśhcha kṛipaśhcha samitiñjayaḥ
aśhvatthāmā vikarṇaśhcha saumadattis tathaiva cha
`,word_meanings:`bhavān—yourself; bhīṣhmaḥ—Bheeshma; cha—and; karṇaḥ—Karna; cha—and; kṛipaḥ—Kripa; cha—and; samitim-jayaḥ—victorious in battle; aśhvatthāmā—Ashvatthama; vikarṇaḥ—Vikarna; cha—and; saumadattiḥ—Bhurishrava; tathā—thus; eva—even; cha—also
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S08.mp3"},{chapter_id:1,chapter_number:1,externalId:9,id:9,text:`अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः।

नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः।।1.9।।
 `,title:"Verse 9",verse_number:9,verse_order:9,transliteration:`anye cha bahavaḥ śhūrā madarthe tyaktajīvitāḥ
nānā-śhastra-praharaṇāḥ sarve yuddha-viśhāradāḥ
`,word_meanings:`anye—others; cha—also; bahavaḥ—many; śhūrāḥ—heroic warriors; mat-arthe—for my sake; tyakta-jīvitāḥ—prepared to lay down their lives; nānā-śhastra-praharaṇāḥ—equipped with various kinds of weapons; sarve—all; yuddha-viśhāradāḥ—skilled in the art of warfare
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S09.mp3"},{chapter_id:1,chapter_number:1,externalId:10,id:10,text:`अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्।

पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम्।।1.10।।
 `,title:"Verse 10",verse_number:10,verse_order:10,transliteration:`aparyāptaṁ tadasmākaṁ balaṁ bhīṣhmābhirakṣhitam
paryāptaṁ tvidameteṣhāṁ balaṁ bhīmābhirakṣhitam
`,word_meanings:`aparyāptam—unlimited; tat—that; asmākam—ours; balam—strength; bhīṣhma—by Grandsire Bheeshma; abhirakṣhitam—safely marshalled; paryāptam—limited; tu—but; idam—this; eteṣhām—their; balam—strength; bhīma—Bheem; abhirakṣhitam—carefully marshalled
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S10.mp3"},{chapter_id:1,chapter_number:1,externalId:11,id:11,text:`अयनेषु च सर्वेषु यथाभागमवस्थिताः।

भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि।।1.11।।
 `,title:"Verse 11",verse_number:11,verse_order:11,transliteration:`ayaneṣhu cha sarveṣhu yathā-bhāgamavasthitāḥ
bhīṣhmamevābhirakṣhantu bhavantaḥ sarva eva hi
`,word_meanings:`ayaneṣhu—at the strategic points; cha—also; sarveṣhu—all; yathā-bhāgam—in respective position; avasthitāḥ—situated; bhīṣhmam—to Grandsire Bheeshma; eva—only; abhirakṣhantu—defend; bhavantaḥ—you; sarve—all; eva hi—even as
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S11.mp3"},{chapter_id:1,chapter_number:1,externalId:12,id:12,text:`तस्य संजनयन्हर्षं कुरुवृद्धः पितामहः।

सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान्।।1.12।।
 `,title:"Verse 12",verse_number:12,verse_order:12,transliteration:`tasya sañjanayan harṣhaṁ kuru-vṛiddhaḥ pitāmahaḥ
siṁha-nādaṁ vinadyochchaiḥ śhaṅkhaṁ dadhmau pratāpavān
`,word_meanings:`tasya—his; sañjanayan—causing; harṣham—joy; kuru-vṛiddhaḥ—the grand old man of the Kuru dynasty (Bheeshma); pitāmahaḥ—grandfather; sinha-nādam—lion’s roar; vinadya—sounding; uchchaiḥ—very loudly; śhaṅkham—conch shell; dadhmau—blew; pratāpa-vān—the glorious
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S12.mp3"},{chapter_id:1,chapter_number:1,externalId:13,id:13,text:`ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः।

सहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत्।।1.13।।
 `,title:"Verse 13",verse_number:13,verse_order:13,transliteration:`tataḥ śhaṅkhāśhcha bheryaśhcha paṇavānaka-gomukhāḥ
sahasaivābhyahanyanta sa śhabdastumulo ’bhavat
`,word_meanings:`tataḥ—thereafter; śhaṅkhāḥ—conches; cha—and; bheryaḥ—bugles; cha—and; paṇava-ānaka—drums and kettledrums; go-mukhāḥ—trumpets; sahasā—suddenly; eva—indeed; abhyahanyanta—blared forth; saḥ—that; śhabdaḥ—sound; tumulaḥ—overwhelming; abhavat—was
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S13.mp3"},{chapter_id:1,chapter_number:1,externalId:14,id:14,text:`ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ।

माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः।।1.14।।
 `,title:"Verse 14",verse_number:14,verse_order:14,transliteration:`tataḥ śhvetairhayairyukte mahati syandane sthitau
mādhavaḥ pāṇḍavaśhchaiva divyau śhaṅkhau pradadhmatuḥ
`,word_meanings:`tataḥ—then; śhvetaiḥ—by white; hayaiḥ—horses; yukte—yoked; mahati—glorious; syandane—chariot; sthitau—seated; mādhavaḥ—Shree Krishna, the husband of the goddess of fortune, Lakshmi; pāṇḍavaḥ—Arjun; cha—and; eva—also; divyau—Divine; śhaṅkhau—conch shells; pradadhmatuḥ—blew
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S14.mp3"},{chapter_id:1,chapter_number:1,externalId:15,id:15,text:`पाञ्चजन्यं हृषीकेशो देवदत्तं धनंजयः।

पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः।।1.15।।
 `,title:"Verse 15",verse_number:15,verse_order:15,transliteration:`pāñchajanyaṁ hṛiṣhīkeśho devadattaṁ dhanañjayaḥ
pauṇḍraṁ dadhmau mahā-śhaṅkhaṁ bhīma-karmā vṛikodaraḥ
`,word_meanings:`pāñchajanyam—the conch shell named Panchajanya; hṛiṣhīka-īśhaḥ—Shree Krishna, the Lord of the mind and senses; devadattam—the conch shell named Devadutta; dhanam-jayaḥ—Arjun, the winner of wealth; pauṇḍram—the conch named Paundra; dadhmau—blew; mahā-śhaṅkham—mighty conch; bhīma-karmā—one who performs herculean tasks; vṛika-udaraḥ—Bheem, the voracious eater
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S15.mp3"},{chapter_id:1,chapter_number:1,externalId:16,id:16,text:`अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः।

नकुलः सहदेवश्च सुघोषमणिपुष्पकौ।।1.16।।
 `,title:"Verse 16",verse_number:16,verse_order:16,transliteration:`anantavijayaṁ rājā kuntī-putro yudhiṣhṭhiraḥ
nakulaḥ sahadevaśhcha sughoṣha-maṇipuṣhpakau
`,word_meanings:`ananta-vijayam—the conch named Anantavijay; rājā—king; kuntī-putraḥ—son of Kunti; yudhiṣhṭhiraḥ—Yudhishthir; nakulaḥ—Nakul; sahadevaḥ—Sahadev; cha—and; sughoṣha-maṇipuṣhpakau—the conche shells named Sughosh and Manipushpak;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S16.mp3"},{chapter_id:1,chapter_number:1,externalId:17,id:17,text:`काश्यश्च परमेष्वासः शिखण्डी च महारथः।

धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः।।1.17।।
 `,title:"Verse 17",verse_number:17,verse_order:17,transliteration:`kāśhyaśhcha parameṣhvāsaḥ śhikhaṇḍī cha mahā-rathaḥ
dhṛiṣhṭadyumno virāṭaśhcha sātyakiśh chāparājitaḥ
`,word_meanings:`kāśhyaḥ—King of Kashi; cha—and; parama-iṣhu-āsaḥ—the excellent archer; śhikhaṇḍī—Shikhandi; cha—also; mahā-rathaḥ—warriors who could single handedly match the strength of ten thousand ordinary warriors; dhṛiṣhṭadyumnaḥ—Dhrishtadyumna; virāṭaḥ—Virat; cha—and; sātyakiḥ—Satyaki; cha—and; aparājitaḥ—invincible;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S17.mp3"},{chapter_id:1,chapter_number:1,externalId:18,id:18,text:`द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते।

सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक्।।1.18।।
 `,title:"Verse 18",verse_number:18,verse_order:18,transliteration:`drupado draupadeyāśhcha sarvaśhaḥ pṛithivī-pate
saubhadraśhcha mahā-bāhuḥ śhaṅkhāndadhmuḥ pṛithak pṛithak
`,word_meanings:`drupadaḥ—Drupad; draupadeyāḥ—the five sons of Draupadi; cha—and; sarvaśhaḥ—all; pṛithivī-pate—Ruler of the earth; saubhadraḥ—Abhimanyu, the son of Subhadra; cha—also; mahā-bāhuḥ—the mighty-armed; śhaṅkhān—conch shells; dadhmuḥ—blew; pṛithak pṛithak—individually
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S18.mp3"},{chapter_id:1,chapter_number:1,externalId:19,id:19,text:`स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्।

नभश्च पृथिवीं चैव तुमुलो व्यनुनादयन्।।1.19।।
 `,title:"Verse 19",verse_number:19,verse_order:19,transliteration:`sa ghoṣho dhārtarāṣhṭrāṇāṁ hṛidayāni vyadārayat
nabhaśhcha pṛithivīṁ chaiva tumulo nunādayan
`,word_meanings:`saḥ—that; ghoṣhaḥ—sound; dhārtarāṣhṭrāṇām—of Dhritarashtra’s sons; hṛidayāni—hearts; vyadārayat—shattered; nabhaḥ—the sky; cha—and; pṛithivīm—the earth; cha—and; eva—certainly; tumulaḥ—terrific sound; abhyanunādayan—thundering
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S19.mp3"},{chapter_id:1,chapter_number:1,externalId:20,id:20,text:`अथ व्यवस्थितान् दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः।

प्रवृत्ते शस्त्रसंपाते धनुरुद्यम्य पाण्डवः।।1.20।।
 `,title:"Verse 20",verse_number:20,verse_order:20,transliteration:`atha vyavasthitān dṛiṣhṭvā dhārtarāṣhṭrān kapi-dhwajaḥ
pravṛitte śhastra-sampāte dhanurudyamya pāṇḍavaḥ
hṛiṣhīkeśhaṁ tadā vākyam idam āha mahī-pate
`,word_meanings:`atha—thereupon; vyavasthitān—arrayed; dṛiṣhṭvā—seeing; dhārtarāṣhṭrān—Dhritarashtra’s sons; kapi-dwajaḥ—the Monkey Bannered; pravṛitte—about to commence; śhastra-sampāte—to use the weapons; dhanuḥ—bow; udyamya—taking up; pāṇḍavaḥ—Arjun, the son of Pandu; hṛiṣhīkeśham—to Shree Krishna; tadā—at that time; vākyam—words; idam—these; āha—said; mahī-pate—King
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S20.mp3"},{chapter_id:1,chapter_number:1,externalId:21,id:21,text:`अर्जुन उवाच

हृषीकेशं तदा वाक्यमिदमाह महीपते।

सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत।।1.21।।
 `,title:"Verse 21",verse_number:21,verse_order:21,transliteration:`arjuna uvācha
senayor ubhayor madhye rathaṁ sthāpaya me ’chyuta
`,word_meanings:`arjunaḥ uvācha—Arjun said; senayoḥ—armies; ubhayoḥ—both; madhye—in the middle; ratham—chariot; sthāpaya—place; me—my; achyuta—Shree Krishna, the infallible One;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S21.mp3"},{chapter_id:1,chapter_number:1,externalId:22,id:22,text:`यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्।

कैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे।।1.22।।
 `,title:"Verse 22",verse_number:22,verse_order:22,transliteration:`yāvadetān nirīkṣhe ’haṁ yoddhu-kāmān avasthitān
kairmayā saha yoddhavyam asmin raṇa-samudyame
`,word_meanings:`yāvat—as many as; etān—these; nirīkṣhe—look; aham—I; yoddhu-kāmān—for the battle; avasthitān—arrayed; kaiḥ—with whom; mayā—by me; saha—together; yoddhavyam—must fight; asmin—in this; raṇa-samudyame—great combat
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S22.mp3"},{chapter_id:1,chapter_number:1,externalId:23,id:23,text:`योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः।

धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः।।1.23।।
 `,title:"Verse 23",verse_number:23,verse_order:23,transliteration:`yotsyamānān avekṣhe ’haṁ ya ete ’tra samāgatāḥ
dhārtarāṣhṭrasya durbuddher yuddhe priya-chikīrṣhavaḥ
`,word_meanings:`yotsyamānān—those who have come to fight; avekṣhe aham—I desire to see; ye—who; ete—those; atra—here; samāgatāḥ—assembled; dhārtarāṣhṭrasya—of Dhritarashtra’s son; durbuddheḥ—evil-minded; yuddhe—in the fight; priya-chikīrṣhavaḥ—wishing to please
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S23.mp3"},{chapter_id:1,chapter_number:1,externalId:24,id:24,text:`संजय उवाच

एवमुक्तो हृषीकेशो गुडाकेशेन भारत।

सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम्।।1.24।।
 `,title:"Verse 24",verse_number:24,verse_order:24,transliteration:`sañjaya uvācha
evam ukto hṛiṣhīkeśho guḍākeśhena bhārata
senayor ubhayor madhye sthāpayitvā rathottamam
`,word_meanings:`sañjayaḥ uvācha—Sanjay said; evam—thus; uktaḥ—addressed; hṛiṣhīkeśhaḥ—Shree Krishna, the Lord of the senses; guḍākeśhena—by Arjun, the conqueror of sleep; bhārata—descendant of Bharat; senayoḥ—armies; ubhayoḥ—the two; madhye—between; sthāpayitvā—having drawn; ratha-uttamam—magnificent chariot
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S24.mp3"},{chapter_id:1,chapter_number:1,externalId:25,id:25,text:`भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्।

उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति।।1.25।।
 `,title:"Verse 25",verse_number:25,verse_order:25,transliteration:`bhīṣhma-droṇa-pramukhataḥ sarveṣhāṁ cha mahī-kṣhitām
uvācha pārtha paśhyaitān samavetān kurūn iti
`,word_meanings:`bhīṣhma—Grandsire Bheeshma; droṇa—Dronacharya; pramukhataḥ—in the presence; sarveṣhām—all; cha—and; mahī-kṣhitām—other kings; uvācha—said; pārtha—Arjun, the son of Pritha; paśhya—behold; etān—these; samavetān—gathered; kurūn—descendants of Kuru; iti—thus
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S25.mp3"},{chapter_id:1,chapter_number:1,externalId:26,id:26,text:`तत्रापश्यत्स्थितान्पार्थः पितृ़नथ पितामहान्।

आचार्यान्मातुलान्भ्रातृ़न्पुत्रान्पौत्रान्सखींस्तथा।।1.26।।
 `,title:"Verse 26",verse_number:26,verse_order:26,transliteration:`tatrāpaśhyat sthitān pārthaḥ pitṝīn atha pitāmahān
āchāryān mātulān bhrātṝīn putrān pautrān sakhīṁs tathā
śhvaśhurān suhṛidaśh chaiva senayor ubhayor api
`,word_meanings:`tatra—there; apaśhyat—saw; sthitān—stationed; pārthaḥ—Arjun; pitṝīn—fathers; atha—thereafter; pitāmahān—grandfathers; āchāryān—teachers; mātulān—maternal uncles; bhrātṝīn—brothers; putrān—sons; pautrān—grandsons; sakhīn—friends; tathā—also; śhvaśhurān—fathers-in-law; suhṛidaḥ—well-wishers; cha—and; eva—indeed; senayoḥ—armies; ubhayoḥ—in both armies; api—also
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S26.mp3"},{chapter_id:1,chapter_number:1,externalId:27,id:27,text:`श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि।

तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्।।1.27।।
 `,title:"Verse 27",verse_number:27,verse_order:27,transliteration:`tān samīkṣhya sa kaunteyaḥ sarvān bandhūn avasthitān
kṛipayā parayāviṣhṭo viṣhīdann idam abravīt
`,word_meanings:`tān—these; samīkṣhya—on seeing; saḥ—they; kaunteyaḥ—Arjun, the son of Kunti; sarvān—all; bandhūn—relatives; avasthitān—present; kṛipayā—by compassion; parayā—great; āviṣhṭaḥ—overwhelmed; viṣhīdan—deep sorrow; idam—this; abravīt—spoke
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S27.mp3"},{chapter_id:1,chapter_number:1,externalId:28,id:28,text:`अर्जुन उवाच

कृपया परयाऽऽविष्टो विषीदन्निदमब्रवीत्।

दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।।1.28।।
 `,title:"Verse 28",verse_number:28,verse_order:28,transliteration:`arjuna uvācha
dṛiṣhṭvemaṁ sva-janaṁ kṛiṣhṇa yuyutsuṁ samupasthitam
`,word_meanings:`arjunaḥ uvācha—Arjun said; dṛiṣhṭvā—on seeing; imam—these; sva-janam—kinsmen; kṛiṣhṇa—Krishna; yuyutsum—eager to fight; samupasthitam—present; 
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S28.mp3"},{chapter_id:1,chapter_number:1,externalId:29,id:29,text:`सीदन्ति मम गात्राणि मुखं च परिशुष्यति।

वेपथुश्च शरीरे मे रोमहर्षश्च जायते।।1.29।।
 `,title:"Verse 29",verse_number:29,verse_order:29,transliteration:`sīdanti mama gātrāṇi mukhaṁ cha pariśhuṣhyati
vepathuśh cha śharīre me roma-harṣhaśh cha jāyate
`,word_meanings:`sīdanti—quivering; mama—my; gātrāṇi—limbs; mukham—mouth; cha—and; pariśhuṣhyati—is drying up
vepathuḥ—shuddering; cha—and; śharīre—on the body; me—my; roma-harṣhaḥ—standing of bodily hair on end; cha—also; jāyate—is happening;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S29.mp3"},{chapter_id:1,chapter_number:1,externalId:30,id:30,text:`गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते।

न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः।।1.30।।
 `,title:"Verse 30",verse_number:30,verse_order:30,transliteration:`gāṇḍīvaṁ sraṁsate hastāt tvak chaiva paridahyate
na cha śhaknomy avasthātuṁ bhramatīva cha me manaḥ
`,word_meanings:`gāṇḍīvam—Arjun’s bow; sraṁsate—is slipping; hastāt—from (my) hand; tvak—skin; cha—and; eva—indeed; paridahyate—is burning all over; na—not; cha—and; śhaknomi—am able; avasthātum—remain steady; bhramati iva—whirling like; cha—and; me—my; manaḥ—mind;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S30.mp3"},{chapter_id:1,chapter_number:1,externalId:31,id:31,text:`निमित्तानि च पश्यामि विपरीतानि केशव।

न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे।।1.31।।
 `,title:"Verse 31",verse_number:31,verse_order:31,transliteration:`nimittāni cha paśhyāmi viparītāni keśhava
na cha śhreyo ’nupaśhyāmi hatvā sva-janam āhave
`,word_meanings:`nimittāni—omens; cha—and; paśhyāmi—I see; viparītāni—misfortune; keśhava—Shree Krishna, killer of the Keshi demon; na—not; cha—also; śhreyaḥ—good; anupaśhyāmi—I foresee; hatvā—from killing; sva-janam—kinsmen; āhave—in battle
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S31.mp3"},{chapter_id:1,chapter_number:1,externalId:32,id:32,text:`न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च।

किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा।।1.32।।
 `,title:"Verse 32",verse_number:32,verse_order:32,transliteration:`na kāṅkṣhe vijayaṁ kṛiṣhṇa na cha rājyaṁ sukhāni cha
kiṁ no rājyena govinda kiṁ bhogair jīvitena vā
`,word_meanings:`na—nor; kāṅkṣhe—do I desire; vijayam—victory; kṛiṣhṇa—Krishna; na—nor; cha—as well; rājyam—kingdom; sukhāni—happiness; cha—also; kim—what; naḥ—to us; rājyena—by kingdom; govinda—Krishna, he who gives pleasure to the senses, he who is fond of cows; kim—what?; bhogaiḥ—pleasures; jīvitena—life; vā—or;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S32.mp3"},{chapter_id:1,chapter_number:1,externalId:33,id:33,text:`येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च।

त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च।।1.33।।
 `,title:"Verse 33",verse_number:33,verse_order:33,transliteration:`yeṣhām arthe kāṅkṣhitaṁ no rājyaṁ bhogāḥ sukhāni cha
ta ime ’vasthitā yuddhe prāṇāṁs tyaktvā dhanāni cha
`,word_meanings:`yeṣhām—for whose; arthe—sake; kāṅkṣhitam—coveted for; naḥ—by us; rājyam—kingdom; bhogāḥ—pleasures; sukhāni—happiness; cha—also; te—they; ime—these; avasthitāḥ—situated; yuddhe—for battle; prāṇān—lives; tyaktvā—giving up; dhanāni—wealth; cha—also
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S33.mp3"},{chapter_id:1,chapter_number:1,externalId:34,id:34,text:`आचार्याः पितरः पुत्रास्तथैव च पितामहाः।

मातुलाः श्चशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा।।1.34।।
 `,title:"Verse 34",verse_number:34,verse_order:34,transliteration:`āchāryāḥ pitaraḥ putrās tathaiva cha pitāmahāḥ
mātulāḥ śhvaśhurāḥ pautrāḥ śhyālāḥ sambandhinas tathā
`,word_meanings:`āchāryāḥ—teachers; pitaraḥ—fathers; putrāḥ—sons; tathā—as well; eva—indeed; cha—also; pitāmahāḥ—grandfathers; mātulāḥ—maternal uncles; śhvaśhurāḥ—fathers-in-law; pautrāḥ—grandsons; śhyālāḥ—brothers-in-law; sambandhinaḥ—kinsmen; tathā—as well; 
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S34.mp3"},{chapter_id:1,chapter_number:1,externalId:35,id:35,text:`एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन।

अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते।।1.35।।
 `,title:"Verse 35",verse_number:35,verse_order:35,transliteration:`etān na hantum ichchhāmi ghnato ’pi madhusūdana
api trailokya-rājyasya hetoḥ kiṁ nu mahī-kṛite
`,word_meanings:`etān—these; na—not; hantum—to slay; ichchhāmi—I wish; ghnataḥ—killed; api—even though; madhusūdana—Shree Krishna, killer of the demon Madhu; api—even though; trai-lokya-rājyasya—dominion over three worlds; hetoḥ—for the sake of; kim nu—what to speak of; mahī-kṛite—for the earth
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S35.mp3"},{chapter_id:1,chapter_number:1,externalId:36,id:36,text:`निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन।

पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः।।1.36।।
 `,title:"Verse 36",verse_number:36,verse_order:36,transliteration:`nihatya dhārtarāṣhṭrān naḥ kā prītiḥ syāj janārdana
pāpam evāśhrayed asmān hatvaitān ātatāyinaḥ
`,word_meanings:`nihatya—by killing; dhārtarāṣhṭrān—the sons of Dhritarashtra; naḥ—our; kā—what; prītiḥ—pleasure; syāt—will there be; janārdana—he who looks after the public, Shree Krishna; pāpam—vices; eva—certainly; āśhrayet—must come upon; asmān—us; hatvā—by killing; etān—all these; ātatāyinaḥ—aggressors;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S36.mp3"},{chapter_id:1,chapter_number:1,externalId:37,id:37,text:`तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान्।

स्वजनं हि कथं हत्वा सुखिनः स्याम माधव।।1.37।।
 `,title:"Verse 37",verse_number:37,verse_order:37,transliteration:`tasmān nārhā vayaṁ hantuṁ dhārtarāṣhṭrān sa-bāndhavān 
sva-janaṁ hi kathaṁ hatvā sukhinaḥ syāma mādhava
`,word_meanings:`tasmāt—hence; na—never; arhāḥ—behoove; vayam—we; hantum—to kill; dhārtarāṣhṭrān—the sons of Dhritarashtra; sva-bāndhavān—along with friends; sva-janam—kinsmen; hi—certainly; katham—how; hatvā—by killing; sukhinaḥ—happy; syāma—will we become; mādhava—Shree Krishna, the husband of Yogmaya
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S37.mp3"},{chapter_id:1,chapter_number:1,externalId:38,id:38,text:`यद्यप्येते न पश्यन्ति लोभोपहतचेतसः।

कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम्।।1.38।।
 `,title:"Verse 38",verse_number:38,verse_order:38,transliteration:`yady apy ete na paśhyanti lobhopahata-chetasaḥ
kula-kṣhaya-kṛitaṁ doṣhaṁ mitra-drohe cha pātakam
`,word_meanings:`yadi api—even though; ete—they; na—not; paśhyanti—see; lobha—greed; upahata—overpowered; chetasaḥ—thoughts; kula-kṣhaya-kṛitam—in annihilating their relatives; doṣham—fault; mitra-drohe—to wreak treachery upon friends; cha—and; pātakam—sin;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S38.mp3"},{chapter_id:1,chapter_number:1,externalId:39,id:39,text:`कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम्।

कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन।।1.39।।
 `,title:"Verse 39",verse_number:39,verse_order:39,transliteration:`kathaṁ na jñeyam asmābhiḥ pāpād asmān nivartitum
kula-kṣhaya-kṛitaṁ doṣhaṁ prapaśhyadbhir janārdana
`,word_meanings:`katham—why; na—not; jñeyam—should be known; asmābhiḥ—we; pāpāt—from sin; asmāt—these; nivartitum—to turn away; kula-kṣhaya—killing the kindered; kṛitam—done; doṣham—crime; prapaśhyadbhiḥ—who can see; janārdana—he who looks after the public, Shree Krishna
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S39.mp3"},{chapter_id:1,chapter_number:1,externalId:40,id:40,text:`कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः।

धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत।।1.40।।
 `,title:"Verse 40",verse_number:40,verse_order:40,transliteration:`kula-kṣhaye praṇaśhyanti kula-dharmāḥ sanātanāḥ
dharme naṣhṭe kulaṁ kṛitsnam adharmo ’bhibhavaty uta
`,word_meanings:`kula-kṣhaye—in the destruction of a dynasty; praṇaśhyanti—are vanquished; kula-dharmāḥ—family traditions; sanātanāḥ—eternal; dharme—religion; naṣhṭe—is destroyed; kulam—family; kṛitsnam—the whole; adharmaḥ—irreligion; abhibhavati—overcome; uta—indeed
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S40.mp3"},{chapter_id:1,chapter_number:1,externalId:41,id:41,text:`अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः।

स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः।।1.41।।
 `,title:"Verse 41",verse_number:41,verse_order:41,transliteration:`adharmābhibhavāt kṛiṣhṇa praduṣhyanti kula-striyaḥ
strīṣhu duṣhṭāsu vārṣhṇeya jāyate varṇa-saṅkaraḥ
`,word_meanings:`adharma—irreligion; abhibhavāt—preponderance; kṛiṣhṇa—Shree Krishna; praduṣhyanti—become immoral; kula-striyaḥ—women of the family; strīṣhu—of women; duṣhṭāsu—become immoral; vārṣhṇeya—descendant of Vrishni; jāyate—are born; varṇa-saṅkaraḥ—unwanted progeny
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S41.mp3"},{chapter_id:1,chapter_number:1,externalId:42,id:42,text:`सङ्करो नरकायैव कुलघ्नानां कुलस्य च।

पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः।।1.42।।
 `,title:"Verse 42",verse_number:42,verse_order:42,transliteration:`saṅkaro narakāyaiva kula-ghnānāṁ kulasya cha
patanti pitaro hy eṣhāṁ lupta-piṇḍodaka-kriyāḥ
`,word_meanings:`saṅkaraḥ—unwanted children; narakāya—hellish; eva—indeed; kula-ghnānām—for those who destroy the family; kulasya—of the family; cha—also; patanti—fall; pitaraḥ—ancestors; hi—verily; eṣhām—their; lupta—deprived of; piṇḍodaka-kriyāḥ—performances of sacrificial offerings
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S42.mp3"},{chapter_id:1,chapter_number:1,externalId:43,id:43,text:`दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः।

उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः।।1.43।।
 `,title:"Verse 43",verse_number:43,verse_order:43,transliteration:`doṣhair etaiḥ kula-ghnānāṁ varṇa-saṅkara-kārakaiḥ
utsādyante jāti-dharmāḥ kula-dharmāśh cha śhāśhvatāḥ
`,word_meanings:`doṣhaiḥ—through evil deeds; etaiḥ—these; kula-ghnānām—of those who destroy the family; varṇa-saṅkara—unwanted progeny; kārakaiḥ—causing; utsādyante—are ruined; jāti-dharmāḥ—social and family welfare activities; kula-dharmāḥ—family traditions; cha—and; śhāśhvatāḥ—eternal
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S43.mp3"},{chapter_id:1,chapter_number:1,externalId:44,id:44,text:`उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन।

नरकेऽनियतं वासो भवतीत्यनुशुश्रुम।।1.44।।
 `,title:"Verse 44",verse_number:44,verse_order:44,transliteration:`utsanna-kula-dharmāṇāṁ manuṣhyāṇāṁ janārdana
narake ‘niyataṁ vāso bhavatītyanuśhuśhruma
`,word_meanings:`utsanna—destroyed; kula-dharmāṇām—whose family traditions; manuṣhyāṇām—of such human beings; janārdana—he who looks after the public, Shree Krishna; narake—in hell; aniyatam—indefinite; vāsaḥ—dwell; bhavati—is; iti—thus; anuśhuśhruma—I have heard from the learned
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S44.mp3"},{chapter_id:1,chapter_number:1,externalId:45,id:45,text:`अहो बत महत्पापं कर्तुं व्यवसिता वयम्।

यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः।।1.45।।
 `,title:"Verse 45",verse_number:45,verse_order:45,transliteration:`aho bata mahat pāpaṁ kartuṁ vyavasitā vayam
yad rājya-sukha-lobhena hantuṁ sva-janam udyatāḥ
`,word_meanings:`aho—alas; bata—how; mahat—great; pāpam—sins; kartum—to perform; vyavasitāḥ—have decided; vayam—we; yat—because; rājya-sukha-lobhena—driven by the desire for kingly pleasure; hantum—to kill; sva-janam—kinsmen; udyatāḥ—intending;
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S45.mp3"},{chapter_id:1,chapter_number:1,externalId:46,id:46,text:`यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः।

धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत्।।1.46।।
 `,title:"Verse 46",verse_number:46,verse_order:46,transliteration:`yadi mām apratīkāram aśhastraṁ śhastra-pāṇayaḥ
dhārtarāṣhṭrā raṇe hanyus tan me kṣhemataraṁ bhavet
`,word_meanings:`yadi—if; mām—me; apratīkāram—unresisting; aśhastram—unarmed; śhastra-pāṇayaḥ—those with weapons in hand; dhārtarāṣhṭrāḥ—the sons of Dhritarashtra; raṇe—on the battlefield; hanyuḥ—shall kill; tat—that; me—to me; kṣhema-taram—better; bhavet—would be
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S46.mp3"},{chapter_id:1,chapter_number:1,externalId:47,id:47,text:`सञ्जय उवाच

एवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत्।

विसृज्य सशरं चापं शोकसंविग्नमानसः।।1.47।।
 `,title:"Verse 47",verse_number:47,verse_order:47,transliteration:`sañjaya uvācha
evam uktvārjunaḥ saṅkhye rathopastha upāviśhat
visṛijya sa-śharaṁ chāpaṁ śhoka-saṁvigna-mānasaḥ
`,word_meanings:`sañjayaḥ uvācha—Sanjay said; evam uktvā—speaking thus; arjunaḥ—Arjun; saṅkhye—in the battlefield; ratha upasthe—on the chariot; upāviśhat—sat; visṛijya—casting aside; sa-śharam—along with arrows; chāpam—the bow; śhoka—with grief; saṁvigna—distressed; mānasaḥ—mind
`,Play:"https://testapi1test.blob.core.windows.net/test/1/Ch1S47.mp3"},{chapter_id:2,chapter_number:2,externalId:48,id:48,text:`सञ्जय उवाच

तं तथा कृपयाऽविष्टमश्रुपूर्णाकुलेक्षणम्।

विषीदन्तमिदं वाक्यमुवाच मधुसूदनः।।2.1।।
 `,title:"Verse 48",verse_number:1,verse_order:48,transliteration:`sañjaya uvācha
taṁ tathā kṛipayāviṣhṭamaśhru pūrṇākulekṣhaṇam
viṣhīdantamidaṁ vākyam uvācha madhusūdanaḥ
`,word_meanings:`sañjayaḥ uvācha—Sanjay said; tam—to him (Arjun); tathā—thus; kṛipayā—with pity; āviṣhṭam—overwhelmed; aśhru-pūrṇa—full of tears; ākula—distressed; īkṣhaṇam—eyes; viṣhīdantam—grief-stricken; idam—these; vākyam—words; uvācha—said; madhusūdanaḥ—Shree Krishn, slayer of the Madhu demon
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S01.mp3"},{chapter_id:2,chapter_number:2,externalId:49,id:49,text:`श्री भगवानुवाच

कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्।

अनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन।।2.2।।
 `,title:"Verse 49",verse_number:2,verse_order:49,transliteration:`śhrī bhagavān uvācha
kutastvā kaśhmalamidaṁ viṣhame samupasthitam
anārya-juṣhṭamaswargyam akīrti-karam arjuna
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; kutaḥ—wherefrom; tvā—to you; kaśhmalam—delusion; idam—this; viṣhame—in this hour of peril; samupasthitam—overcome; anārya—crude person; juṣhṭam—practiced; aswargyam—which does not lead to the higher abodes; akīrti-karam—leading to disgrace; arjuna—Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S02.mp3"},{chapter_id:2,chapter_number:2,externalId:50,id:50,text:`क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।

क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप।।2.3।।
 `,title:"Verse 50",verse_number:3,verse_order:50,transliteration:`klaibyaṁ mā sma gamaḥ pārtha naitat tvayyupapadyate
kṣhudraṁ hṛidaya-daurbalyaṁ tyaktvottiṣhṭha parantapa
`,word_meanings:`klaibyam—unmanliness; mā sma—do not; gamaḥ—yield to; pārtha—Arjun, the son of Pritha; na—not; etat—this; tvayi—to you; upapadyate—befitting; kṣhudram—petty; hṛidaya—heart; daurbalyam—weakness; tyaktvā—giving up; uttiṣhṭha—arise; param-tapa—conqueror of enemies
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S03.mp3"},{chapter_id:2,chapter_number:2,externalId:51,id:51,text:`अर्जुन उवाच

कथं भीष्ममहं संख्ये द्रोणं च मधुसूदन।

इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन।।2.4।।
 `,title:"Verse 51",verse_number:4,verse_order:51,transliteration:`arjuna uvācha
kathaṁ bhīṣhmam ahaṁ sankhye droṇaṁ cha madhusūdana
iṣhubhiḥ pratiyotsyāmi pūjārhāvari-sūdana
`,word_meanings:`arjunaḥ uvācha—Arjun said; katham—how; bhīṣhmam—Bheeshma; aham—I; sankhye—in battle; droṇam—Dronacharya; cha—and; madhu-sūdana—Shree Krishn, slayer of the Madhu demon; iṣhubhiḥ—with arrows; pratiyotsyāmi—shall I shoot; pūjā-arhau—worthy of worship; ari-sūdana—destroyer of enemies
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S04.mp3"},{chapter_id:2,chapter_number:2,externalId:52,id:52,text:`गुरूनहत्वा हि महानुभावान्

श्रेयो भोक्तुं भैक्ष्यमपीह लोके।

हत्वार्थकामांस्तु गुरूनिहैव

भुञ्जीय भोगान् रुधिरप्रदिग्धान्।।2.5।।
 `,title:"Verse 52",verse_number:5,verse_order:52,transliteration:`gurūnahatvā hi mahānubhāvān
śhreyo bhoktuṁ bhaikṣhyamapīha loke
hatvārtha-kāmāṁstu gurūnihaiva
bhuñjīya bhogān rudhira-pradigdhān
`,word_meanings:`gurūn—teachers; ahatvā—not killing; hi—certainly; mahā-anubhāvān—noble elders; śhreyaḥ—better; bhoktum—to enjoy life; bhaikṣhyam—by begging; api—even; iha loke—in this world; hatvā—killing; artha—gain; kāmān—desiring; tu—but; gurūn—noble elders; iha—in this world; eva—certainly; bhuñjīya—enjoy; bhogān—pleasures; rudhira—blood; pradigdhān—tainted with
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S05.mp3"},{chapter_id:2,chapter_number:2,externalId:53,id:53,text:`न चैतद्विद्मः कतरन्नो गरीयो

यद्वा जयेम यदि वा नो जयेयुः।

यानेव हत्वा न जिजीविषाम

स्तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः।।2.6।।
 `,title:"Verse 53",verse_number:6,verse_order:53,transliteration:`na chaitadvidmaḥ kataranno garīyo
yadvā jayema yadi vā no jayeyuḥ
yāneva hatvā na jijīviṣhāmas
te ’vasthitāḥ pramukhe dhārtarāṣhṭrāḥ
`,word_meanings:`na—not; cha—and; etat—this; vidmaḥ—we know; katarat—which; naḥ—for us; garīyaḥ—is preferable; yat vā—whether; jayema—we may conquer; yadi—if; vā—or; naḥ—us; jayeyuḥ—they may conquer; yān—whom; eva—certainly; hatvā—after killing; na—not; jijīviṣhāmaḥ—we desire to live; te—they; avasthitāḥ—are standing; pramukhe—before us; dhārtarāṣhṭrāḥ—the sons of Dhritarashtra
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S06.mp3"},{chapter_id:2,chapter_number:2,externalId:54,id:54,text:`कार्पण्यदोषोपहतस्वभावः

पृच्छामि त्वां धर्मसंमूढचेताः।

यच्छ्रेयः स्यान्निश्िचतं ब्रूहि तन्मे

शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्।।2.7।।
 `,title:"Verse 54",verse_number:7,verse_order:54,transliteration:`kārpaṇya-doṣhopahata-svabhāvaḥ
pṛichchhāmi tvāṁ dharma-sammūḍha-chetāḥ
yach-chhreyaḥ syānniśhchitaṁ brūhi tanme
śhiṣhyaste ’haṁ śhādhi māṁ tvāṁ prapannam
`,word_meanings:`kārpaṇya-doṣha—the flaw of cowardice; upahata—besieged; sva-bhāvaḥ—nature; pṛichchhāmi—I am asking; tvām—to you; dharma—duty; sammūḍha—confused; chetāḥ—in heart; yat—what; śhreyaḥ—best; syāt—may be; niśhchitam—decisively; brūhi—tell; tat—that; me—to me; śhiṣhyaḥ—disciple; te—your; aham—I; śhādhi—please instruct; mām—me; tvām—unto you; prapannam—surrendered
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S07.mp3"},{chapter_id:2,chapter_number:2,externalId:55,id:55,text:`न हि प्रपश्यामि ममापनुद्या

द्यच्छोकमुच्छोषणमिन्द्रियाणाम्।

अवाप्य भूमावसपत्नमृद्धम्

राज्यं सुराणामपि चाधिपत्यम्।।2.8।।
 `,title:"Verse 55",verse_number:8,verse_order:55,transliteration:`na hi prapaśhyāmi mamāpanudyād
yach-chhokam uchchhoṣhaṇam-indriyāṇām
avāpya bhūmāv-asapatnamṛiddhaṁ
rājyaṁ surāṇāmapi chādhipatyam
`,word_meanings:`na—not; hi—certainly; prapaśhyāmi—I see; mama—my; apanudyāt—drive away; yat—which; śhokam—anguish; uchchhoṣhaṇam—is drying up; indriyāṇām—of the senses; avāpya—after achieving; bhūmau—on the earth; asapatnam—unrivalled; ṛiddham—prosperous; rājyam—kingdom; surāṇām—like the celestial gods; api—even; cha—also; ādhipatyam—sovereignty
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S08.mp3"},{chapter_id:2,chapter_number:2,externalId:56,id:56,text:`सञ्जय उवाच

एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप।

न योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह।।2.9।।
 `,title:"Verse 56",verse_number:9,verse_order:56,transliteration:`sañjaya uvācha
evam-uktvā hṛiṣhīkeśhaṁ guḍākeśhaḥ parantapa
na yotsya iti govindam uktvā tūṣhṇīṁ babhūva ha
`,word_meanings:`sañjayaḥ uvācha—Sanjay said; evam—thus; uktvā—having spoken; hṛiṣhīkeśham—to Shree Krishna, the master of the mind and senses; guḍākeśhaḥ—Arjun, the conquerer of sleep; parantapaḥ—Arjun, the chastiser of the enemies; na yotsye—I shall not fight; iti—thus; govindam—Krishna, the giver of pleasure to the senses; uktvā—having addressed; tūṣhṇīm—silent; babhūva—became ha
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S09.mp3"},{chapter_id:2,chapter_number:2,externalId:57,id:57,text:`तमुवाच हृषीकेशः प्रहसन्निव भारत।

सेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः।।2.10।।
 `,title:"Verse 57",verse_number:10,verse_order:57,transliteration:`tam-uvācha hṛiṣhīkeśhaḥ prahasanniva bhārata
senayorubhayor-madhye viṣhīdantam-idaṁ vachaḥ
`,word_meanings:`tam—to him; uvācha—said; hṛiṣhīkeśhaḥ—Shree Krishna, the master of mind and senses; prahasan—smilingly; iva—as if; bhārata—Dhritarashtra, descendant of Bharat; senayoḥ—of the armies; ubhayoḥ—of both; madhye—in the midst of; viṣhīdantam—to the grief-stricken; idam—this; vachaḥ—words
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S10.mp3"},{chapter_id:2,chapter_number:2,externalId:58,id:58,text:`श्री भगवानुवाच

अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे।

गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः।।2.11।।
 `,title:"Verse 58",verse_number:11,verse_order:58,transliteration:`śhrī bhagavān uvācha
aśhochyān-anvaśhochas-tvaṁ prajñā-vādānśh cha bhāṣhase
gatāsūn-agatāsūnśh-cha nānuśhochanti paṇḍitāḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; aśhochyān—not worthy of grief; anvaśhochaḥ—are mourning; tvam—you; prajñā-vādān—words of wisdom; cha—and; bhāṣhase—speaking; gata āsūn—the dead; agata asūn—the living; cha—and; na—never; anuśhochanti—lament; paṇḍitāḥ—the wise
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S11.mp3"},{chapter_id:2,chapter_number:2,externalId:59,id:59,text:`न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।

न चैव न भविष्यामः सर्वे वयमतः परम्।।2.12।।
 `,title:"Verse 59",verse_number:12,verse_order:59,transliteration:`na tvevāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ
na chaiva na bhaviṣhyāmaḥ sarve vayamataḥ param
`,word_meanings:`na—never; tu—however; eva—certainly; aham—I; jātu—at any time; na—nor; āsam—exist; na—nor; tvam—you; na—nor; ime—these; jana-adhipāḥ—kings; na—never; cha—also; eva—indeed; na bhaviṣhyāmaḥ—shall not exist; sarve vayam—all of us; ataḥ—from now; param—after
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S12.mp3"},{chapter_id:2,chapter_number:2,externalId:60,id:60,text:`देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।

तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति।।2.13।।
 `,title:"Verse 60",verse_number:13,verse_order:60,transliteration:`dehino ’smin yathā dehe kaumāraṁ yauvanaṁ jarā
tathā dehāntara-prāptir dhīras tatra na muhyati
`,word_meanings:`dehinaḥ—of the embodied; asmin—in this; yathā—as; dehe—in the body; kaumāram—childhood; yauvanam—youth; jarā—old age; tathā—similarly; deha-antara—another body; prāptiḥ—achieves; dhīraḥ—the wise; tatra—thereupon; na muhyati—are not deluded
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S13.mp3"},{chapter_id:2,chapter_number:2,externalId:61,id:61,text:`मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।

आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत।।2.14।।
 `,title:"Verse 61",verse_number:14,verse_order:61,transliteration:`mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ
āgamāpāyino ’nityās tans-titikṣhasva bhārata
`,word_meanings:`mātrā-sparśhāḥ—contact of the senses with the sense objects; tu—indeed; kaunteya—Arjun, the son of Kunti; śhīta—winter; uṣhṇa—summer; sukha—happiness; duḥkha—distress; dāḥ—give; āgama—come; apāyinaḥ—go; anityāḥ—non-permanent; tān—them; titikṣhasva—tolerate; bhārata—descendant of the Bharat
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S14.mp3"},{chapter_id:2,chapter_number:2,externalId:62,id:62,text:`यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ।

समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते।।2.15।।
 `,title:"Verse 62",verse_number:15,verse_order:62,transliteration:`yaṁ hi na vyathayantyete puruṣhaṁ puruṣharṣhabha
sama-duḥkha-sukhaṁ dhīraṁ so ’mṛitatvāya kalpate
`,word_meanings:`yam—whom; hi—verily; na—not; vyathayanti—distressed; ete—these; puruṣham—person; puruṣha-ṛiṣhabha—the noblest amongst men, Arjun; sama—equipoised; duḥkha—distress; sukham—happiness; dhīram—steady; saḥ—that person; amṛitatvāya—for liberation; kalpate—becomes eligible
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S15.mp3"},{chapter_id:2,chapter_number:2,externalId:63,id:63,text:`नासतो विद्यते भावो नाभावो विद्यते सतः।

उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः।।2.16।।
 `,title:"Verse 63",verse_number:16,verse_order:63,transliteration:`nāsato vidyate bhāvo nābhāvo vidyate sataḥ
ubhayorapi dṛiṣhṭo ’nta stvanayos tattva-darśhibhiḥ
`,word_meanings:`na—no; asataḥ—of the temporary; vidyate—there is; bhāvaḥ—is; na—no; abhāvaḥ—cessation; vidyate—is; sataḥ—of the eternal; ubhayoḥ—of the two; api—also; dṛiṣhṭaḥ—observed; antaḥ—conclusion; tu—verily; anayoḥ—of these; tattva—of the truth; darśhibhiḥ—by the seers
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S16.mp3"},{chapter_id:2,chapter_number:2,externalId:64,id:64,text:`अविनाशि तु तद्विद्धि येन सर्वमिदं ततम्।

विनाशमव्ययस्यास्य न कश्चित् कर्तुमर्हति।।2.17।।
 `,title:"Verse 64",verse_number:17,verse_order:64,transliteration:`avināśhi tu tadviddhi yena sarvam idaṁ tatam
vināśham avyayasyāsya na kaśhchit kartum arhati
`,word_meanings:`avināśhi—indestructible; tu—indeed; tat—that; viddhi—know; yena—by whom; sarvam—entire; idam—this; tatam—pervaded; vināśham—destruction; avyayasya—of the imperishable; asya—of it; na kaśhchit—no one; kartum—to cause; arhati—is able
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S17.mp3"},{chapter_id:2,chapter_number:2,externalId:65,id:65,text:`अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः।

अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत।।2.18।।
 `,title:"Verse 65",verse_number:18,verse_order:65,transliteration:`antavanta ime dehā nityasyoktāḥ śharīriṇaḥ
anāśhino ’prameyasya tasmād yudhyasva bhārata
`,word_meanings:`anta-vantaḥ—having an end; ime—these; dehāḥ—material bodies; nityasya—eternally; uktāḥ—are said; śharīriṇaḥ—of the embodied soul; anāśhinaḥ—indestructible; aprameyasya—immeasurable; tasmāt—therefore; yudhyasva—fight; bhārata—descendant of Bharat, Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S18.mp3"},{chapter_id:2,chapter_number:2,externalId:66,id:66,text:`य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।

उभौ तौ न विजानीतो नायं हन्ति न हन्यते।।2.19।।
 `,title:"Verse 66",verse_number:19,verse_order:66,transliteration:`ya enaṁ vetti hantāraṁ yaśh chainaṁ manyate hatam
ubhau tau na vijānīto nāyaṁ hanti na hanyate
`,word_meanings:`yaḥ—one who; enam—this; vetti—knows; hantāram—the slayer; yaḥ—one who; cha—and; enam—this; manyate—thinks; hatam—slain; ubhau—both; tau—they; na—not; vijānītaḥ—in knowledge; na—neither; ayam—this; hanti—slays; na—nor; hanyate—is killed
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S19.mp3"},{chapter_id:2,chapter_number:2,externalId:67,id:67,text:`न जायते म्रियते वा कदाचि

न्नायं भूत्वा भविता वा न भूयः।

अजो नित्यः शाश्वतोऽयं पुराणो

न हन्यते हन्यमाने शरीरे।।2.20।।
 `,title:"Verse 67",verse_number:20,verse_order:67,transliteration:`na jāyate mriyate vā kadāchin
nāyaṁ bhūtvā bhavitā vā na bhūyaḥ
ajo nityaḥ śhāśhvato ’yaṁ purāṇo
na hanyate hanyamāne śharīre
`,word_meanings:`na jāyate—is not born; mriyate—dies; vā—or; kadāchit—at any time; na—not; ayam—this; bhūtvā—having once existed; bhavitā—will be; vā—or; na—not; bhūyaḥ—further; ajaḥ—unborn; nityaḥ—eternal; śhāśhvataḥ—immortal; ayam—this; purāṇaḥ—the ancient; na hanyate—is not destroyed; hanyamāne—is destroyed; śharīre—when the body
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S20.mp3"},{chapter_id:2,chapter_number:2,externalId:68,id:68,text:`वेदाविनाशिनं नित्यं य एनमजमव्ययम्।

कथं स पुरुषः पार्थ कं घातयति हन्ति कम्।।2.21।।
 `,title:"Verse 68",verse_number:21,verse_order:68,transliteration:`vedāvināśhinaṁ nityaṁ ya enam ajam avyayam
kathaṁ sa puruṣhaḥ pārtha kaṁ ghātayati hanti kam
`,word_meanings:`veda—knows; avināśhinam—imperishable; nityam—eternal; yaḥ—who; enam—this; ajam—unborn; avyayam—immutable; katham—how; saḥ—that; puruṣhaḥ—person; pārtha—Parth; kam—whom; ghātayati—causes to be killed; hanti—kills; kam—whom
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S21.mp3"},{chapter_id:2,chapter_number:2,externalId:69,id:69,text:`वासांसि जीर्णानि यथा विहाय

नवानि गृह्णाति नरोऽपराणि।

तथा शरीराणि विहाय जीर्णा

न्यन्यानि संयाति नवानि देही।।2.22।।
 `,title:"Verse 69",verse_number:22,verse_order:69,transliteration:`vāsānsi jīrṇāni yathā vihāya
navāni gṛihṇāti naro ’parāṇi
tathā śharīrāṇi vihāya jīrṇānya
nyāni sanyāti navāni dehī
`,word_meanings:`vāsānsi—garments; jīrṇāni—worn-out; yathā—as; vihāya—sheds; navāni—new; gṛihṇāti—accepts; naraḥ—a person; aparāṇi—others; tathā—likewise; śharīrāṇi—bodies; vihāya—casting off; jirṇāni—worn-out; anyāni—other; sanyāti—enters; navāni—new; dehī—the embodied soul
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S22.mp3"},{chapter_id:2,chapter_number:2,externalId:70,id:70,text:`नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।

न चैनं क्लेदयन्त्यापो न शोषयति मारुतः।।2.23।।
 `,title:"Verse 70",verse_number:23,verse_order:70,transliteration:`nainaṁ chhindanti śhastrāṇi nainaṁ dahati pāvakaḥ
na chainaṁ kledayantyāpo na śhoṣhayati mārutaḥ
`,word_meanings:`na—not; enam—this soul; chhindanti—shred; śhastrāṇi—weapons; na—nor; enam—this soul; dahati—burns; pāvakaḥ—fire; na—not; cha—and; enam—this soul; kledayanti—moisten; āpaḥ—water; na—nor; śhoṣhayati—dry; mārutaḥ—wind
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S23.mp3"},{chapter_id:2,chapter_number:2,externalId:71,id:71,text:`अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च।

नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः।।2.24।।
 `,title:"Verse 71",verse_number:24,verse_order:71,transliteration:`achchhedyo ’yam adāhyo ’yam akledyo ’śhoṣhya eva cha
nityaḥ sarva-gataḥ sthāṇur achalo ’yaṁ sanātanaḥ
`,word_meanings:`achchhedyaḥ—unbreakable; ayam—this soul; adāhyaḥ—incombustible; ayam—this soul; akledyaḥ—cannot be dampened; aśhoṣhyaḥ—cannot be dried; eva—indeed; cha—and; nityaḥ—everlasting; sarva-gataḥ—all-pervading; sthāṇuḥ—unalterable; achalaḥ—immutable; ayam—this soul; sanātanaḥ—primordial
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S24.mp3"},{chapter_id:2,chapter_number:2,externalId:72,id:72,text:`अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते।

तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि।।2.25।।
 `,title:"Verse 72",verse_number:25,verse_order:72,transliteration:`avyakto ’yam achintyo ’yam avikāryo ’yam uchyate
tasmādevaṁ viditvainaṁ nānuśhochitum arhasi
`,word_meanings:`avyaktaḥ—unmanifested; ayam—this soul; achintyaḥ—inconceivable; ayam—this soul; avikāryaḥ—unchangeable; ayam—this soul; uchyate—is said; tasmāt—therefore; evam—thus; viditvā—having known; enam—this soul; na—not; anuśhochitum—to grieve; arhasi—befitting
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S25.mp3"},{chapter_id:2,chapter_number:2,externalId:73,id:73,text:`अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम्।

तथापि त्वं महाबाहो नैवं शोचितुमर्हसि।।2.26।।
 `,title:"Verse 73",verse_number:26,verse_order:73,transliteration:`atha chainaṁ nitya-jātaṁ nityaṁ vā manyase mṛitam
tathāpi tvaṁ mahā-bāho naivaṁ śhochitum arhasi
`,word_meanings:`atha—if, however; cha—and; enam—this soul; nitya-jātam—taking constant birth; nityam—always; vā—or; manyase—you think; mṛitam—dead; tathā api—even then; tvam—you; mahā-bāho—mighty-armed one, Arjun; na—not; evam—like this; śhochitum—grieve; arhasi—befitting
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S26.mp3"},{chapter_id:2,chapter_number:2,externalId:74,id:74,text:`जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च।

तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि।।2.27।।
 `,title:"Verse 74",verse_number:27,verse_order:74,transliteration:`jātasya hi dhruvo mṛityur dhruvaṁ janma mṛitasya cha
tasmād aparihārye ’rthe na tvaṁ śhochitum arhasi
`,word_meanings:`jātasya—for one who has been born; hi—for; dhruvaḥ—certain; mṛityuḥ—death; dhruvam—certain; janma—birth; mṛitasya—for the dead; cha—and; tasmāt—therefore; aparihārye arthe—in this inevitable situation; na—not; tvam—you; śhochitum—lament; arhasi—befitting
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S27.mp3"},{chapter_id:2,chapter_number:2,externalId:75,id:75,text:`अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत।

अव्यक्तनिधनान्येव तत्र का परिदेवना।।2.28।।
 `,title:"Verse 75",verse_number:28,verse_order:75,transliteration:`avyaktādīni bhūtāni vyakta-madhyāni bhārata
avyakta-nidhanānyeva tatra kā paridevanā
`,word_meanings:`avyakta-ādīni—unmanifest before birth; bhūtāni—created beings; vyakta—manifest; madhyāni—in the middle; bhārata—Arjun, scion of Bharat; avyakta—unmanifest; nidhanāni—on death; eva—indeed; tatra—therefore; kā—why; paridevanā—grieve
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S28.mp3"},{chapter_id:2,chapter_number:2,externalId:76,id:76,text:`आश्चर्यवत्पश्यति कश्चिदेन

माश्चर्यवद्वदति तथैव चान्यः।

आश्चर्यवच्चैनमन्यः श्रृणोति

श्रुत्वाप्येनं वेद न चैव कश्चित्।।2.29।।
 `,title:"Verse 76",verse_number:29,verse_order:76,transliteration:`āśhcharya-vat paśhyati kaśhchid enan
āśhcharya-vad vadati tathaiva chānyaḥ
āśhcharya-vach chainam anyaḥ śhṛiṇoti
śhrutvāpyenaṁ veda na chaiva kaśhchit
`,word_meanings:`āśhcharya-vat—as amazing; paśhyati—see; kaśhchit—someone; enam—this soul; āśhcharya-vat—as amazing; vadati—speak of; tathā—thus; eva—indeed; cha—and; anyaḥ—other; āśhcharya-vat—similarly amazing; cha—also; enam—this soul; anyaḥ—others; śhṛiṇoti—hear; śhrutvā—having heard; api—even; enam—this soul; veda—understand; na—not; cha—and; eva—even; kaśhchit—some
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S29.mp3"},{chapter_id:2,chapter_number:2,externalId:77,id:77,text:`देही नित्यमवध्योऽयं देहे सर्वस्य भारत।

तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि।।2.30।।
 `,title:"Verse 77",verse_number:30,verse_order:77,transliteration:`dehī nityam avadhyo ’yaṁ dehe sarvasya bhārata
tasmāt sarvāṇi bhūtāni na tvaṁ śhochitum arhasi
`,word_meanings:`dehī—the soul that dwells within the body; nityam—always; avadhyaḥ—immortal; ayam—this soul; dehe—in the body; sarvasya—of everyone; bhārata—descendant of Bharat, Arjun; tasmāt—therefore; sarvāṇi—for all; bhūtāni—living entities; na—not; tvam—you; śhochitum—mourn; arhasi—should
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S30.mp3"},{chapter_id:2,chapter_number:2,externalId:78,id:78,text:`स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि।

धर्म्याद्धि युद्धाछ्रेयोऽन्यत्क्षत्रियस्य न विद्यते।।2.31।।
 `,title:"Verse 78",verse_number:31,verse_order:78,transliteration:`swa-dharmam api chāvekṣhya na vikampitum arhasi
dharmyāddhi yuddhāch chhreyo ’nyat kṣhatriyasya na vidyate
`,word_meanings:`swa-dharmam—one’s duty in accordance with the Vedas; api—also; cha—and; avekṣhya—considering; na—not; vikampitum—to waver; arhasi—should; dharmyāt—for righteousness; hi—indeed; yuddhāt—than fighting; śhreyaḥ—better; anyat—another; kṣhatriyasya—of a warrior; na—not; vidyate—exists
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S31.mp3"},{chapter_id:2,chapter_number:2,externalId:79,id:79,text:`यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम्।

सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम्।।2.32।।
 `,title:"Verse 79",verse_number:32,verse_order:79,transliteration:`yadṛichchhayā chopapannaṁ swarga-dvāram apāvṛitam
sukhinaḥ kṣhatriyāḥ pārtha labhante yuddham īdṛiśham
`,word_meanings:`yadṛichchhayā—unsought; cha—and; upapannam—come; swarga—celestial abodes; dvāram—door; apāvṛitam—wide open; sukhinaḥ—happy; kṣhatriyāḥ—warriors; pārtha—Arjun, the son of Pritha; labhante—obtain; yuddham—war; īdṛiśham—such
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S32.mp3"},{chapter_id:2,chapter_number:2,externalId:80,id:80,text:`अथ चैत्त्वमिमं धर्म्यं संग्रामं न करिष्यसि।

ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि।।2.33।।
 `,title:"Verse 80",verse_number:33,verse_order:80,transliteration:`atha chet tvam imaṁ dharmyaṁ saṅgrāmaṁ na kariṣhyasi
tataḥ sva-dharmaṁ kīrtiṁ cha hitvā pāpam avāpsyasi
`,word_meanings:`atha chet—if, however; tvam—you; imam—this; dharmyam saṅgrāmam—righteous war; na—not; kariṣhyasi—act; tataḥ—then; sva-dharmam—one’s duty in accordance with the Vedas; kīrtim—reputation; cha—and; hitvā—abandoning; pāpam—sin; avāpsyasi—will incur
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S33.mp3"},{chapter_id:2,chapter_number:2,externalId:81,id:81,text:`अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम्।

संभावितस्य चाकीर्तिर्मरणादतिरिच्यते।।2.34।।
 `,title:"Verse 81",verse_number:34,verse_order:81,transliteration:`akīrtiṁ chāpi bhūtāni
kathayiṣhyanti te ’vyayām
sambhāvitasya chākīrtir
maraṇād atirichyate
`,word_meanings:`akīrtim—infamy; cha—and; api—also; bhūtāni—people; kathayiṣhyanti—will speak; te—of your; avyayām—everlasting; sambhāvitasya—of a respectable person; cha—and; akīrtiḥ—infamy; maraṇāt—than death; atirichyate—is greater
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S34.mp3"},{chapter_id:2,chapter_number:2,externalId:82,id:82,text:`भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः।

येषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम्।।2.35।।
 `,title:"Verse 82",verse_number:35,verse_order:82,transliteration:`bhayād raṇād uparataṁ mansyante tvāṁ mahā-rathāḥ
yeṣhāṁ cha tvaṁ bahu-mato bhūtvā yāsyasi lāghavam
`,word_meanings:`bhayāt—out of fear; raṇāt—from the battlefield; uparatam—have fled; maṁsyante—will think; tvām—you; mahā-rathāḥ—warriors who could single handedly match the strength of ten thousand ordinary warriors; yeṣhām—for whom; cha—and; tvam—you; bahu-mataḥ—high esteemed; bhūtvā—having been; yāsyasi—you will loose; lāghavam—decreased in value
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S35.mp3"},{chapter_id:2,chapter_number:2,externalId:83,id:83,text:`अवाच्यवादांश्च बहून् वदिष्यन्ति तवाहिताः।

निन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम्।।2.36।।
 `,title:"Verse 83",verse_number:36,verse_order:83,transliteration:`avāchya-vādānśh cha bahūn vadiṣhyanti tavāhitāḥ
nindantastava sāmarthyaṁ tato duḥkhataraṁ nu kim
`,word_meanings:`avāchya-vādān—using harsh words; cha—and; bahūn—many; vadiṣhyanti—will say; tava—your; ahitāḥ—enemies; nindantaḥ—defame; tava—your; sāmarthyam—might; tataḥ—than that; duḥkha-taram—more painful; nu—indeed; kim—what
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S36.mp3"},{chapter_id:2,chapter_number:2,externalId:84,id:84,text:`हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम्।

तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः।।2.37।।
 `,title:"Verse 84",verse_number:37,verse_order:84,transliteration:`hato vā prāpsyasi swargaṁ jitvā vā bhokṣhyase mahīm
tasmād uttiṣhṭha kaunteya yuddhāya kṛita-niśhchayaḥ
`,word_meanings:`hataḥ—slain; vā—or; prāpsyasi—you will attain; swargam—celestial abodes; jitvā—by achieving victory; vā—or; bhokṣhyase—you shall enjoy; mahīm—the kingdom on earth; tasmāt—therefore; uttiṣhṭha—arise; kaunteya—Arjun, the son of Kunti; yuddhāya—for fight; kṛita-niśhchayaḥ—with determination
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S37.mp3"},{chapter_id:2,chapter_number:2,externalId:85,id:85,text:`सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।

ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि।।2.38।।
 `,title:"Verse 85",verse_number:38,verse_order:85,transliteration:`sukha-duḥkhe same kṛitvā lābhālābhau jayājayau
tato yuddhāya yujyasva naivaṁ pāpam avāpsyasi
`,word_meanings:`sukha—happiness; duḥkhe—in distress; same kṛitvā—treating alike; lābha-alābhau—gain and loss; jaya-ajayau—victory and defeat; tataḥ—thereafter; yuddhāya—for fighting; yujyasva—engage; na—never; evam—thus; pāpam—sin; avāpsyasi—shall incur
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S38.mp3"},{chapter_id:2,chapter_number:2,externalId:86,id:86,text:`एषा तेऽभिहिता सांख्ये बुद्धिर्योगे त्विमां श्रृणु।

बुद्ध्यायुक्तो यया पार्थ कर्मबन्धं प्रहास्यसि।।2.39।।
 `,title:"Verse 86",verse_number:39,verse_order:86,transliteration:`eṣhā te ’bhihitā sānkhye
buddhir yoge tvimāṁ śhṛiṇu
buddhyā yukto yayā pārtha
karma-bandhaṁ prahāsyasi
`,word_meanings:`eṣhā—hitherto; te—to you; abhihitā—explained; sānkhye—by analytical knowledge; buddhiḥ yoge—by the yog of intellect; tu—indeed; imām—this; śhṛiṇu—listen; buddhyā—by understanding; yuktaḥ—united; yayā—by which; pārtha—Arjun, the son of Pritha; karma-bandham—bondage of karma; prahāsyasi—you shall be released from
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S39.mp3"},{chapter_id:2,chapter_number:2,externalId:87,id:87,text:`नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।

स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्।।2.40।।
 `,title:"Verse 87",verse_number:40,verse_order:87,transliteration:`nehābhikrama-nāśho ’sti pratyavāyo na vidyate
svalpam apyasya dharmasya trāyate mahato bhayāt
`,word_meanings:`na—not; iha—in this; abhikrama—efforts; nāśhaḥ—loss; asti—there is; pratyavāyaḥ—adverse result; na—not; vidyate—is; su-alpam—a little; api—even; asya—of this; dharmasya—occupation; trāyate—saves; mahataḥ—from great; bhayāt—danger
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S40.mp3"},{chapter_id:2,chapter_number:2,externalId:88,id:88,text:`व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।

बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्।।2.41।।
 `,title:"Verse 88",verse_number:41,verse_order:88,transliteration:`vyavasāyātmikā buddhir ekeha kuru-nandana
bahu-śhākhā hyanantāśh cha buddhayo ’vyavasāyinām
`,word_meanings:`vyavasāya-ātmikā—resolute; buddhiḥ—intellect; ekā—single; iha—on this path; kuru-nandana—descendent of the Kurus; bahu-śhākhāḥ—many-branched; hi—indeed; anantāḥ—endless; cha—also; buddhayaḥ—intellect; avyavasāyinām—of the irresolute
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S41.mp3"},{chapter_id:2,chapter_number:2,externalId:89,id:89,text:`यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः।

वेदवादरताः पार्थ नान्यदस्तीति वादिनः।।2.42।।
 `,title:"Verse 89",verse_number:42,verse_order:89,transliteration:`yāmimāṁ puṣhpitāṁ vāchaṁ pravadanty-avipaśhchitaḥ
veda-vāda-ratāḥ pārtha nānyad astīti vādinaḥ
 kāmātmānaḥ swarga-parā janma-karma-phala-pradām
kriyā-viśheṣha-bahulāṁ bhogaiśhwarya-gatiṁ prati
`,word_meanings:`yām imām—all these; puṣhpitām—flowery; vācham—words; pravadanti—speak; avipaśhchitaḥ—those with limited understanding; veda-vāda-ratāḥ—attached to the flowery words of the Vedas; pārtha—Arjun, the son of Pritha; na anyat—no other; asti—is; iti—thus; vādinaḥ—advocate;
 kāma-ātmānaḥ—desirous of sensual pleasure; swarga-parāḥ—aiming to achieve the heavenly planets; janma-karma-phala—high birth and fruitive results; pradāṁ—awarding; kriyā-viśheṣha—pompous ritualistic ceremonies; bahulām—various; bhoga—gratification; aiśhwarya—luxury; gatim—progress; prati—toward
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S42.mp3"},{chapter_id:2,chapter_number:2,externalId:90,id:90,text:`कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम्।

क्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति।।2.43।।
 `,title:"Verse 90",verse_number:43,verse_order:90,transliteration:`kāmātmānaḥ svarga-parā 

 janma-karma-phala-pradām

 kriyā-viśeṣa-bahulāṁ

 bhogaiśvarya-gatiṁ prati
`,word_meanings:"kāmaātmānaḥ—desirous   of  sense   gratification;  svarga-parāḥ—aiming to  achieve heavenly    planets;    janma-karma-phala-pradām—resulting  in  fruitive    action, good        birth,     etc.;      kriyā-viśeṣa—pompous       ceremonies;        bahulām—various; bhoga—sense       enjoyment;     aiśvarya—opulence;     gatim—progress;    prati—towards.",Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S43.mp3"},{chapter_id:2,chapter_number:2,externalId:91,id:91,text:`भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम्।

व्यवसायात्मिका बुद्धिः समाधौ न विधीयते।।2.44।।
 `,title:"Verse 91",verse_number:44,verse_order:91,transliteration:`bhogaiśwvarya-prasaktānāṁ tayāpahṛita-chetasām
vyavasāyātmikā buddhiḥ samādhau na vidhīyate
`,word_meanings:`bhoga—gratification; aiśhwarya—luxury; prasaktānām—whose minds are deeply attached; tayā—by that; apahṛita-chetasām—bewildered in intellect; vyavasāya-ātmikā—resolute; buddhiḥ—intellect; samādhau—fulfilment; na—never; vidhīyate—occurs
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S44.mp3"},{chapter_id:2,chapter_number:2,externalId:92,id:92,text:`त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन।

निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान्।।2.45।।
 `,title:"Verse 92",verse_number:45,verse_order:92,transliteration:`trai-guṇya-viṣhayā vedā nistrai-guṇyo bhavārjuna
nirdvandvo nitya-sattva-stho niryoga-kṣhema ātmavān
`,word_meanings:`trai-guṇya—of the three modes of material nature; viṣhayāḥ—subject matter; vedāḥ—Vedic scriptures; nistrai-guṇyaḥ—above the three modes of material nature, transcendental; bhava—be; arjuna—Arjun; nirdvandvaḥ—free from dualities; nitya-sattva-sthaḥ—eternally fixed in truth; niryoga-kṣhemaḥ—unconcerned about gain and preservation; ātma-vān—situated in the self
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S45.mp3"},{chapter_id:2,chapter_number:2,externalId:93,id:93,text:`यावानर्थ उदपाने सर्वतः संप्लुतोदके।

तावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः।।2.46।।
 `,title:"Verse 93",verse_number:46,verse_order:93,transliteration:`yāvān artha udapāne sarvataḥ samplutodake
tāvānsarveṣhu vedeṣhu brāhmaṇasya vijānataḥ
`,word_meanings:`yāvān—whatever; arthaḥ—purpose; uda-pāne—a well of water; sarvataḥ—in all respects; sampluta-udake—by a large lake; tāvān—that many; sarveṣhu—in all; vedeṣhu—Vedas; brāhmaṇasya—one who realizes the Absolute Truth; vijānataḥ—who is in complete knowledge
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S46.mp3"},{chapter_id:2,chapter_number:2,externalId:94,id:94,text:`कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।

मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।2.47।।
 `,title:"Verse 94",verse_number:47,verse_order:94,transliteration:`karmaṇy-evādhikāras te mā phaleṣhu kadāchana
mā karma-phala-hetur bhūr mā te saṅgo ’stvakarmaṇi
`,word_meanings:`karmaṇi—in prescribed duties; eva—only; adhikāraḥ—right; te—your; mā—not; phaleṣhu—in the fruits; kadāchana—at any time; mā—never; karma-phala—results of the activities; hetuḥ—cause; bhūḥ—be; mā—not; te—your; saṅgaḥ—attachment; astu—must be; akarmaṇi—in inaction
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S47.mp3"},{chapter_id:2,chapter_number:2,externalId:95,id:95,text:`योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।

सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।।2.48।।
 `,title:"Verse 95",verse_number:48,verse_order:95,transliteration:`yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya
siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga uchyate
`,word_meanings:`yoga-sthaḥ—being steadfast in yog; kuru—perform; karmāṇi—duties; saṅgam—attachment; tyaktvā—having abandoned; dhanañjaya—Arjun; siddhi-asiddhyoḥ—in success and failure; samaḥ—equipoised; bhūtvā—becoming; samatvam—equanimity; yogaḥ—Yog; uchyate—is called
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S48.mp3"},{chapter_id:2,chapter_number:2,externalId:96,id:96,text:`दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय।

बुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः।।2.49।।
 `,title:"Verse 96",verse_number:49,verse_order:96,transliteration:`dūreṇa hy-avaraṁ karma buddhi-yogād dhanañjaya
buddhau śharaṇam anvichchha kṛipaṇāḥ phala-hetavaḥ
`,word_meanings:`dūreṇa—(discrad) from far away; hi—certainly; avaram—inferior; karma—reward-seeking actions; buddhi-yogāt—with the intellect established in Divine knowledge; dhanañjaya—Arjun; buddhau—divine knowledge and insight; śharaṇam—refuge; anvichchha—seek; kṛipaṇāḥ—miserly; phala-hetavaḥ—those seeking fruits of their work
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S49.mp3"},{chapter_id:2,chapter_number:2,externalId:97,id:97,text:`बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।

तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्।।2.50।।
 `,title:"Verse 97",verse_number:50,verse_order:97,transliteration:`buddhi-yukto jahātīha ubhe sukṛita-duṣhkṛite
tasmād yogāya yujyasva yogaḥ karmasu kauśhalam
`,word_meanings:`buddhi-yuktaḥ—endowed with wisdom; jahāti—get rid of; iha—in this life; ubhe—both; sukṛita-duṣhkṛite—good and bad deeds; tasmāt—therefore; yogāya—for Yog; yujyasva—strive for; yogaḥ—yog is; karmasu kauśhalam—the art of working skillfully
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S50.mp3"},{chapter_id:2,chapter_number:2,externalId:98,id:98,text:`कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः।

जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम्।।2.51।।
 `,title:"Verse 98",verse_number:51,verse_order:98,transliteration:`karma-jaṁ buddhi-yuktā hi phalaṁ tyaktvā manīṣhiṇaḥ
janma-bandha-vinirmuktāḥ padaṁ gachchhanty-anāmayam
`,word_meanings:`karma-jam—born of fruitive actions; buddhi-yuktāḥ—endowed with equanimity of intellect; hi—as; phalam—fruits; tyaktvā—abandoning; manīṣhiṇaḥ—the wise; janma-bandha-vinirmuktāḥ—freedom from the bondage of life and death; padam—state; gachchhanti—attain; anāmayam—devoid of sufferings
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S51.mp3"},{chapter_id:2,chapter_number:2,externalId:99,id:99,text:`यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति।

तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च।।2.52।।
 `,title:"Verse 99",verse_number:52,verse_order:99,transliteration:`yadā te moha-kalilaṁ buddhir vyatitariṣhyati
tadā gantāsi nirvedaṁ śhrotavyasya śhrutasya cha
`,word_meanings:`yadā—when; te—your; moha—delusion; kalilam—quagmire; buddhiḥ—intellect; vyatitariṣhyati—crosses; tadā—then; gantāsi—you shall acquire; nirvedam—indifferent; śhrotavyasya—to what is yet to be heard; śhrutasya—to what has been heard; cha—and
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S52.mp3"},{chapter_id:2,chapter_number:2,externalId:100,id:100,text:`श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला।

समाधावचला बुद्धिस्तदा योगमवाप्स्यसि।।2.53।।
 `,title:"Verse 100",verse_number:53,verse_order:100,transliteration:`śhruti-vipratipannā te yadā sthāsyati niśhchalā
samādhāv-achalā buddhis tadā yogam avāpsyasi
`,word_meanings:`śhruti-vipratipannā—not allured by the fruitive sections of the Vedas; te—your; yadā—when; sthāsyati—remains; niśhchalā—steadfast; samādhau—in divine consciousness; achalā—steadfast; buddhiḥ—intellect; tadā—at that time; yogam—Yog; avāpsyasi—you will attain
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S53.mp3"},{chapter_id:2,chapter_number:2,externalId:101,id:101,text:`अर्जुन उवाच

स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव।

स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम्।।2.54।।
 `,title:"Verse 101",verse_number:54,verse_order:101,transliteration:`arjuna uvācha
sthita-prajñasya kā bhāṣhā samādhi-sthasya keśhava
sthita-dhīḥ kiṁ prabhāṣheta kim āsīta vrajeta kim
`,word_meanings:`arjunaḥ uvācha—Arjun said; sthita-prajñasya—one with steady intellect; kā—what; bhāṣhā—talk; samādhi-sthasya—situated in divine consciousness; keśhava—Shree Krishna, killer of the Keshi Demon; sthita-dhīḥ—enlightened person; kim—what; prabhāṣheta—talks; kim—how; āsīta—sits; vrajeta—walks; kim—how
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S54.mp3"},{chapter_id:2,chapter_number:2,externalId:102,id:102,text:`श्री भगवानुवाच

प्रजहाति यदा कामान् सर्वान् पार्थ मनोगतान्।

आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते।।2.55।।
 `,title:"Verse 102",verse_number:55,verse_order:102,transliteration:`śhrī bhagavān uvācha
prajahāti yadā kāmān sarvān pārtha mano-gatān
ātmany-evātmanā tuṣhṭaḥ sthita-prajñas tadochyate
`,word_meanings:`śhrī-bhagavān uvācha—The Supreme Lord said; prajahāti—discards; yadā—when; kāmān—selfish desires; sarvān—all; pārtha—Arjun, the son of Pritha; manaḥ-gatān—of the mind; ātmani—of the self; eva—only; ātmanā—by the purified mind; tuṣhṭaḥ—satisfied; sthita-prajñaḥ—one with steady intellect; tadā—at that time; uchyate—is said
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S55.mp3"},{chapter_id:2,chapter_number:2,externalId:103,id:103,text:`दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।

वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते।।2.56।।
 `,title:"Verse 103",verse_number:56,verse_order:103,transliteration:`duḥkheṣhv-anudvigna-manāḥ sukheṣhu vigata-spṛihaḥ
vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir uchyate
`,word_meanings:`duḥkheṣhu—amidst miseries; anudvigna-manāḥ—one whose mind is undisturbed; sukheṣhu—in pleasure; vigata-spṛihaḥ—without craving; vīta—free from; rāga—attachment; bhaya—fear; krodhaḥ—anger; sthita-dhīḥ—enlightened person; muniḥ—a sage; uchyate—is called
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S56.mp3"},{chapter_id:2,chapter_number:2,externalId:104,id:104,text:`यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम्।

नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता।।2.57।।
 `,title:"Verse 104",verse_number:57,verse_order:104,transliteration:`yaḥ sarvatrānabhisnehas tat tat prāpya śhubhāśhubham
nābhinandati na dveṣhṭi tasya prajñā pratiṣhṭhitā
`,word_meanings:`yaḥ—who; sarvatra—in all conditions; anabhisnehaḥ—unattached; tat—that; tat—that; prāpya—attaining; śhubha—good; aśhubham—evil; na—neither; abhinandati—delight in; na—nor; dveṣhṭi—dejected by; tasya—his; prajñā—knowledge; pratiṣhṭhitā—is fixed
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S57.mp3"},{chapter_id:2,chapter_number:2,externalId:105,id:105,text:`यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः।

इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता।।2.58।।
 `,title:"Verse 105",verse_number:58,verse_order:105,transliteration:`yadā sanharate chāyaṁ kūrmo ’ṅgānīva sarvaśhaḥ
indriyāṇīndriyārthebhyas tasya prajñā pratiṣhṭhitā
`,word_meanings:`yadā—when; sanharate—withdraw; cha—and; ayam—this; kūrmaḥ—tortoise; aṅgāni—limbs; iva—as; sarvaśhaḥ—fully; indriyāṇi—senses; indriya-arthebhyaḥ—from the sense objects; tasya—his; prajñā—divine wisdom; pratiṣhṭhitā—fixed in
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S58.mp3"},{chapter_id:2,chapter_number:2,externalId:106,id:106,text:`विषया विनिवर्तन्ते निराहारस्य देहिनः।

रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते।।2.59।।
 `,title:"Verse 106",verse_number:59,verse_order:106,transliteration:`viṣhayā vinivartante nirāhārasya dehinaḥ
rasa-varjaṁ raso ’pyasya paraṁ dṛiṣhṭvā nivartate
`,word_meanings:`viṣhayāḥ—objects for senses; vinivartante—restrain; nirāhārasya—practicing self restraint; dehinaḥ—for the embodied; rasa-varjam—cessation of taste; rasaḥ—taste; api—however; asya—person’s; param—the Supreme; dṛiṣhṭvā—on realization; nivartate—ceases to be
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S59.mp3"},{chapter_id:2,chapter_number:2,externalId:107,id:107,text:`यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः।

इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः।।2.60।।
 `,title:"Verse 107",verse_number:60,verse_order:107,transliteration:`yatato hyapi kaunteya puruṣhasya vipaśhchitaḥ
indriyāṇi pramāthīni haranti prasabhaṁ manaḥ
`,word_meanings:`yatataḥ—while practicing self-control; hi—for; api—even; kaunteya—Arjun, the son of Kunti; puruṣhasya—of a person; vipaśhchitaḥ—one endowed with discrimination; indriyāṇi—the senses; pramāthīni—turbulent; haranti—carry away; prasabham—forcibly; manaḥ—the mind
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S60.mp3"},{chapter_id:2,chapter_number:2,externalId:108,id:108,text:`तानि सर्वाणि संयम्य युक्त आसीत मत्परः।

वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता।।2.61।।
 `,title:"Verse 108",verse_number:61,verse_order:108,transliteration:`tāni sarvāṇi sanyamya yukta āsīta mat-paraḥ
vaśhe hi yasyendriyāṇi tasya prajñā pratiṣhṭhitā
`,word_meanings:`tāni—them; sarvāṇi—all; sanyamya—subduing; yuktaḥ—united; āsīta—seated; mat-paraḥ—toward me (Shree Krishna); vaśhe—control; hi—certainly; yasya—whose; indriyāṇi—senses; tasya—their; prajñā—perfect knowledge pratiṣhṭhitā
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S61.mp3"},{chapter_id:2,chapter_number:2,externalId:109,id:109,text:`ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।

सङ्गात् संजायते कामः कामात्क्रोधोऽभिजायते।।2.62।।
 `,title:"Verse 109",verse_number:62,verse_order:109,transliteration:`dhyāyato viṣhayān puṁsaḥ saṅgas teṣhūpajāyate
saṅgāt sañjāyate kāmaḥ kāmāt krodho ’bhijāyate
`,word_meanings:`dhyāyataḥ—contemplating; viṣhayān—sense objects; puṁsaḥ—of a person; saṅgaḥ—attachment; teṣhu—to them (sense objects); upajāyate—arises; saṅgāt—from attachment; sañjāyate—develops; kāmaḥ—desire; kāmāt—from desire; krodhaḥ—anger; abhijāyate—arises
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S62.mp3"},{chapter_id:2,chapter_number:2,externalId:110,id:110,text:`क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।

स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति।।2.63।।
 `,title:"Verse 110",verse_number:63,verse_order:110,transliteration:`krodhād bhavati sammohaḥ sammohāt smṛiti-vibhramaḥ
smṛiti-bhranśhād buddhi-nāśho buddhi-nāśhāt praṇaśhyati
`,word_meanings:`krodhāt—from anger; bhavati—comes; sammohaḥ—clouding of judgement; sammohāt—from clouding of judgement; smṛiti—memory; vibhramaḥ—bewilderment; smṛiti-bhranśhāt—from bewilderment of memory; buddhi-nāśhaḥ—destruction of intellect; buddhi-nāśhāt—from destruction of intellect; praṇaśhyati—one is ruined
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S63.mp3"},{chapter_id:2,chapter_number:2,externalId:111,id:111,text:`रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन्।

आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति।।2.64।।
 `,title:"Verse 111",verse_number:64,verse_order:111,transliteration:`rāga-dveṣha-viyuktais tu viṣhayān indriyaiśh charan
ātma-vaśhyair-vidheyātmā prasādam adhigachchhati
`,word_meanings:`rāga—attachment; dveṣha—aversion; viyuktaiḥ—free; tu—but; viṣhayān—objects of the senses; indriyaiḥ—by the senses; charan—while using; ātma-vaśhyaiḥ—controlling one’s mind; vidheya-ātmā—one who controls the mind; prasādam—the Grace of God; adhigachchhati—attains
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S64.mp3"},{chapter_id:2,chapter_number:2,externalId:112,id:112,text:`प्रसादे सर्वदुःखानां हानिरस्योपजायते।

प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते।।2.65।।
 `,title:"Verse 112",verse_number:65,verse_order:112,transliteration:`prasāde sarva-duḥkhānāṁ hānir asyopajāyate
prasanna-chetaso hyāśhu buddhiḥ paryavatiṣhṭhate
`,word_meanings:`prasāde—by divine grace; sarva—all; duḥkhānām—of sorrows; hāniḥ—destruction; asya—his; upajāyate—comes; prasanna-chetasaḥ—with a tranquil mind; hi—indeed; āśhu—soon; buddhiḥ—intellect; paryavatiṣhṭhate—becomes firmly established
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S65.mp3"},{chapter_id:2,chapter_number:2,externalId:113,id:113,text:`नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना।

न चाभावयतः शान्तिरशान्तस्य कुतः सुखम्।।2.66।।
 `,title:"Verse 113",verse_number:66,verse_order:113,transliteration:`nāsti buddhir-ayuktasya na chāyuktasya bhāvanā
na chābhāvayataḥ śhāntir aśhāntasya kutaḥ sukham
`,word_meanings:`na—not; asti—is; buddhiḥ—intellect; ayuktasya—not united; na—not; cha—and; ayuktasya—not united; bhāvanā—contemplation; na—nor; cha—and; abhāvayataḥ—for those not united; śhāntiḥ—peace; aśhāntasya—of the unpeaceful; kutaḥ—where; sukham—happiness
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S66.mp3"},{chapter_id:2,chapter_number:2,externalId:114,id:114,text:`इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते।

तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि।।2.67।।
 `,title:"Verse 114",verse_number:67,verse_order:114,transliteration:`indriyāṇāṁ hi charatāṁ yan mano ’nuvidhīyate
tadasya harati prajñāṁ vāyur nāvam ivāmbhasi
`,word_meanings:`indriyāṇām—of the senses; hi—indeed; charatām—roaming; yat—which; manaḥ—the mind; anuvidhīyate—becomes constantly engaged; tat—that; asya—of that; harati—carries away; prajñām—intellect; vāyuḥ—wind; nāvam—boat; iva—as; ambhasi—on the water
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S67.mp3"},{chapter_id:2,chapter_number:2,externalId:115,id:115,text:`तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः।

इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता।।2.68।।
 `,title:"Verse 115",verse_number:68,verse_order:115,transliteration:`tasmād yasya mahā-bāho nigṛihītāni sarvaśhaḥ
indriyāṇīndriyārthebhyas tasya prajñā pratiṣhṭhitā
`,word_meanings:`tasmāt—therefore; yasya—whose; mahā-bāho—mighty-armed one; nigṛihītāni—restrained; sarvaśhaḥ—completely; indriyāṇi—senses; indriya-arthebhyaḥ—from sense objects; tasya—of that person; prajñā—transcendental knowledge; pratiṣhṭhitā—remains fixed
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S68.mp3"},{chapter_id:2,chapter_number:2,externalId:116,id:116,text:`या निशा सर्वभूतानां तस्यां जागर्ति संयमी।

यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः।।2.69।।
 `,title:"Verse 116",verse_number:69,verse_order:116,transliteration:`yā niśhā sarva-bhūtānāṁ tasyāṁ jāgarti sanyamī
yasyāṁ jāgrati bhūtāni sā niśhā paśhyato muneḥ
`,word_meanings:`yā—which; niśhā—night; sarva-bhūtānām—of all living beings; tasyām—in that; jāgarti—is awake; sanyamī—self-controlled; yasyām—in which; jāgrati—are awake; bhūtāni—creatures; sā—that; niśhā—night; paśhyataḥ—see; muneḥ—sage
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S69.mp3"},{chapter_id:2,chapter_number:2,externalId:117,id:117,text:`आपूर्यमाणमचलप्रतिष्ठं

समुद्रमापः प्रविशन्ति यद्वत्।

तद्वत्कामा यं प्रविशन्ति सर्वे

स शान्तिमाप्नोति न कामकामी।।2.70।।
 `,title:"Verse 117",verse_number:70,verse_order:117,transliteration:`āpūryamāṇam achala-pratiṣhṭhaṁ
samudram āpaḥ praviśhanti yadvat
tadvat kāmā yaṁ praviśhanti sarve
sa śhāntim āpnoti na kāma-kāmī
`,word_meanings:`āpūryamāṇam—filled from all sides; achala-pratiṣhṭham—undisturbed; samudram—ocean; āpaḥ—waters; praviśhanti—enter; yadvat—as; tadvat—likewise; kāmāḥ—desires; yam—whom; praviśhanti—enter; sarve—all; saḥ—that person; śhāntim—peace; āpnoti—attains; na—not; kāma-kāmī—one who strives to satisfy desires
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S70.mp3"},{chapter_id:2,chapter_number:2,externalId:118,id:118,text:`विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः।

निर्ममो निरहंकारः स शांतिमधिगच्छति।।2.71।।
 `,title:"Verse 118",verse_number:71,verse_order:118,transliteration:`vihāya kāmān yaḥ sarvān pumānśh charati niḥspṛihaḥ
nirmamo nirahankāraḥ sa śhāntim adhigachchhati
`,word_meanings:`vihāya—giving up; kāmān—material desires; yaḥ—who; sarvān—all; pumān—a person; charati—lives; niḥspṛihaḥ—free from hankering; nirmamaḥ—without a sense of proprietorship; nirahankāraḥ—without egoism; saḥ—that person; śhāntim—perfect peace; adhigachchhati—attains
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S71.mp3"},{chapter_id:2,chapter_number:2,externalId:119,id:119,text:`एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति।

स्थित्वाऽस्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति।।2.72।।
 `,title:"Verse 119",verse_number:72,verse_order:119,transliteration:`eṣhā brāhmī sthitiḥ pārtha naināṁ prāpya vimuhyati
sthitvāsyām anta-kāle ’pi brahma-nirvāṇam ṛichchhati
`,word_meanings:`eṣhā—such; brāhmī sthitiḥ—state of God-realization; pārtha—Arjun, the son of Pritha; na—never; enām—this; prāpya—having attained; vimuhyati—is deluded; sthitvā—being established; asyām—in this; anta-kāle—at the hour of death; api—even; brahma-nirvāṇam—liberation from Maya; ṛichchhati—attains
`,Play:"https://testapi1test.blob.core.windows.net/test/2/Ch2S72.mp3"},{chapter_id:3,chapter_number:3,externalId:120,id:120,text:`अर्जुन उवाच

ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन।

तत्किं कर्मणि घोरे मां नियोजयसि केशव।।3.1।।
 `,title:"Verse 120",verse_number:1,verse_order:120,transliteration:`arjuna uvācha
jyāyasī chet karmaṇas te matā buddhir janārdana
tat kiṁ karmaṇi ghore māṁ niyojayasi keśhava
`,word_meanings:`arjunaḥ uvācha—Arjun said; jyāyasī—superior; chet—if; karmaṇaḥ—than fruitive action; te—by you; matā—is considered; buddhiḥ—intellect; janārdana—he who looks after the public, Krishna; tat—then; kim—why; karmaṇi—action; ghore—terrible; mām—me; niyojayasi—do you engage; keśhava—Krishna, the killer of the demon named Keshi;
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S01.mp3"},{chapter_id:3,chapter_number:3,externalId:121,id:121,text:`व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे।

तदेकं वद निश्िचत्य येन श्रेयोऽहमाप्नुयाम्।।3.2।।
 `,title:"Verse 121",verse_number:2,verse_order:121,transliteration:`vyāmiśhreṇeva vākyena buddhiṁ mohayasīva me
tad ekaṁ vada niśhchitya yena śhreyo ’ham āpnuyām
`,word_meanings:`vyāmiśhreṇa iva—by your apparently ambiguous; vākyena—words; buddhim—intellect; mohayasi—I am getting bewildered; iva—as it were; me—my; tat—therefore; ekam—one; vada—please tell; niśhchitya—decisively; yena—by which; śhreyaḥ—the highest good; aham—I; āpnuyām—may attain
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S02.mp3"},{chapter_id:3,chapter_number:3,externalId:122,id:122,text:`श्री भगवानुवाच

लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ।

ज्ञानयोगेन सांख्यानां कर्मयोगेन योगिनाम्।।3.3।।
 `,title:"Verse 122",verse_number:3,verse_order:122,transliteration:`śhrī bhagavān uvācha
loke’smin dvi-vidhā niṣhṭhā purā proktā mayānagha
jñāna-yogena sāṅkhyānāṁ karma-yogena yoginām
`,word_meanings:`śhrī-bhagavān uvācha—the Blessed Lord said; loke—in the world; asmin—this; dvi-vidhā—two kinds of; niṣhṭhā—faith; purā—previously; proktā—explained; mayā—by me (Shree Krishna); anagha—sinless; jñāna-yogena—through the path of knowledge; sānkhyānām—for those inclined toward contemplation; karma-yogena—through the path of action; yoginām—of the yogis
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S03.mp3"},{chapter_id:3,chapter_number:3,externalId:123,id:123,text:`न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते।

न च संन्यसनादेव सिद्धिं समधिगच्छति।।3.4।।
 `,title:"Verse 123",verse_number:4,verse_order:123,transliteration:`na karmaṇām anārambhān naiṣhkarmyaṁ puruṣho ’śhnute
na cha sannyasanād eva siddhiṁ samadhigachchhati
`,word_meanings:`na—not; karmaṇām—of actions; anārambhāt—by abstaining from; naiṣhkarmyam—freedom from karmic reactions; puruṣhaḥ—a person; aśhnute—attains; na—not; cha—and; sannyasanāt—by renunciation; eva—only; siddhim—perfection; samadhigachchhati—attains
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S04.mp3"},{chapter_id:3,chapter_number:3,externalId:124,id:124,text:`न हि कश्िचत्क्षणमपि जातु तिष्ठत्यकर्मकृत्।

कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः।।3.5।।
 `,title:"Verse 124",verse_number:5,verse_order:124,transliteration:`na hi kaśhchit kṣhaṇam api jātu tiṣhṭhatyakarma-kṛit
kāryate hyavaśhaḥ karma sarvaḥ prakṛiti-jair guṇaiḥ
`,word_meanings:`na—not; hi—certainly; kaśhchit—anyone; kṣhaṇam—a moment; api—even; jātu—ever; tiṣhṭhati—can remain; akarma-kṛit—without action; kāryate—are performed; hi—certainly; avaśhaḥ—helpless; karma—work; sarvaḥ—all; prakṛiti-jaiḥ—born of material nature; guṇaiḥ—by the qualities
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S05.mp3"},{chapter_id:3,chapter_number:3,externalId:125,id:125,text:`कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन्।

इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते।।3.6।।
 `,title:"Verse 125",verse_number:6,verse_order:125,transliteration:`karmendriyāṇi sanyamya ya āste manasā smaran
indriyārthān vimūḍhātmā mithyāchāraḥ sa uchyate
`,word_meanings:`karma-indriyāṇi—the organs of action; sanyamya—restrain; yaḥ—who; āste—remain; manasā—in the mind; smaran—to remember; indriya-arthān—sense objects; vimūḍha-ātmā—the deluded; mithyā-āchāraḥ—hypocrite; saḥ—they; uchyate—are called
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S06.mp3"},{chapter_id:3,chapter_number:3,externalId:126,id:126,text:`यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन।

कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते।।3.7।।
 `,title:"Verse 126",verse_number:7,verse_order:126,transliteration:`yas tvindriyāṇi manasā niyamyārabhate ’rjuna
karmendriyaiḥ karma-yogam asaktaḥ sa viśhiṣhyate
`,word_meanings:`yaḥ—who; tu—but; indriyāṇi—the senses; manasā—by the mind; niyamya—control; ārabhate—begins; arjuna—Arjun; karma-indriyaiḥ—by the working senses; karma-yogam—karm yog; asaktaḥ—without attachment; saḥ—they; viśhiṣhyate—are superior
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S07.mp3"},{chapter_id:3,chapter_number:3,externalId:127,id:127,text:`नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।

शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः।।3.8।।
 `,title:"Verse 127",verse_number:8,verse_order:127,transliteration:`niyataṁ kuru karma tvaṁ karma jyāyo hyakarmaṇaḥ
śharīra-yātrāpi cha te na prasiddhyed akarmaṇaḥ
`,word_meanings:`niyatam—constantly; kuru—perform; karma—Vedic duties; tvam—you; karma—action; jyāyaḥ—superior; hi—certainly; akarmaṇaḥ—than inaction; śharīra—bodily; yātrā—maintenance; api—even; cha—and; te—your; na prasiddhyet—would not be possible; akarmaṇaḥ—inaction
 `,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S08.mp3"},{chapter_id:3,chapter_number:3,externalId:128,id:128,text:`यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः।

तदर्थं कर्म कौन्तेय मुक्तसंगः समाचर।।3.9।।
 `,title:"Verse 128",verse_number:9,verse_order:128,transliteration:`yajñārthāt karmaṇo ’nyatra loko ’yaṁ karma-bandhanaḥ
tad-arthaṁ karma kaunteya mukta-saṅgaḥ samāchara
`,word_meanings:`yajña-arthāt—for the sake of sacrifice; karmaṇaḥ—than action; anyatra—else; lokaḥ—material world; ayam—this; karma-bandhanaḥ—bondage through one’s work; tat—that; artham—for the sake of; karma—action; kaunteya—Arjun, the son of Kunti; mukta-saṅgaḥ—free from attachment; samāchara—perform properly
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S09.mp3"},{chapter_id:3,chapter_number:3,externalId:129,id:129,text:`सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः।

अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक्।।3.10।।
 `,title:"Verse 129",verse_number:10,verse_order:129,transliteration:`saha-yajñāḥ prajāḥ sṛiṣhṭvā purovācha prajāpatiḥ
anena prasaviṣhyadhvam eṣha vo ’stviṣhṭa-kāma-dhuk
`,word_meanings:`saha—along with; yajñāḥ—sacrifices; prajāḥ—humankind; sṛiṣhṭvā—created; purā—in beginning; uvācha—said; prajā-patiḥ—Brahma; anena—by this; prasaviṣhyadhvam—increase prosperity; eṣhaḥ—these; vaḥ—your; astu—shall be; iṣhṭa-kāma-dhuk—bestower of all wishes
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S10.mp3"},{chapter_id:3,chapter_number:3,externalId:130,id:130,text:`देवान्भावयतानेन ते देवा भावयन्तु वः।

परस्परं भावयन्तः श्रेयः परमवाप्स्यथ।।3.11।।
 `,title:"Verse 130",verse_number:11,verse_order:130,transliteration:`devān bhāvayatānena te devā bhāvayantu vaḥ
parasparaṁ bhāvayantaḥ śhreyaḥ param avāpsyatha
`,word_meanings:`devān—celestial gods; bhāvayatā—will be pleased; anena—by these (sacrifices); te—those; devāḥ—celestial gods; bhāvayantu—will be pleased; vaḥ—you; parasparam—one another; bhāvayantaḥ—pleasing one another; śhreyaḥ—prosperity; param—the supreme; avāpsyatha—shall achieve
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S11.mp3"},{chapter_id:3,chapter_number:3,externalId:131,id:131,text:`इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः।

तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः।।3.12।।
 `,title:"Verse 131",verse_number:12,verse_order:131,transliteration:`iṣhṭān bhogān hi vo devā dāsyante yajña-bhāvitāḥ
tair dattān apradāyaibhyo yo bhuṅkte stena eva saḥ
`,word_meanings:`iṣhṭān—desired; bhogān—necessities of life; hi—certainly; vaḥ—unto you; devāḥ—the celestial gods; dāsyante—will grant; yajña-bhāvitāḥ—satisfied by sacrifice; taiḥ—by them; dattān—things granted; apradāya—without offering; ebhyaḥ—to them; yaḥ—who; bhuṅkte—enjoys; stenaḥ—thieves; eva—verily; saḥ—they
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S12.mp3"},{chapter_id:3,chapter_number:3,externalId:132,id:132,text:`यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः।

भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात्।।3.13।।
 `,title:"Verse 132",verse_number:13,verse_order:132,transliteration:`yajña-śhiṣhṭāśhinaḥ santo muchyante sarva-kilbiṣhaiḥ
bhuñjate te tvaghaṁ pāpā ye pachantyātma-kāraṇāt
`,word_meanings:`yajña-śhiṣhṭa—of remnants of food offered in sacrifice; aśhinaḥ—eaters; santaḥ—saintly persons; muchyante—are released; sarva—all kinds of; kilbiṣhaiḥ—from sins; bhuñjate—enjoy; te—they; tu—but; agham—sins; pāpāḥ—sinners; ye—who; pachanti—cook (food); ātma-kāraṇāt—for their own sake
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S13.mp3"},{chapter_id:3,chapter_number:3,externalId:133,id:133,text:`अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः।

यज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः।।3.14।।
 `,title:"Verse 133",verse_number:14,verse_order:133,transliteration:`annād bhavanti bhūtāni parjanyād anna-sambhavaḥ
yajñād bhavati parjanyo yajñaḥ karma-samudbhavaḥ
`,word_meanings:`annāt—from food; bhavanti—subsist; bhūtāni—living beings; parjanyāt—from rains; anna—of food grains; sambhavaḥ—production; yajñāt—from the performance of sacrifice; bhavati—becomes possible; parjanyaḥ—rain; yajñaḥ—performance of sacrifice; karma—prescribed duties; samudbhavaḥ—born of
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S14.mp3"},{chapter_id:3,chapter_number:3,externalId:134,id:134,text:`कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम्।

तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम्।।3.15।।
 `,title:"Verse 134",verse_number:15,verse_order:134,transliteration:`karma brahmodbhavaṁ viddhi brahmākṣhara-samudbhavam
tasmāt sarva-gataṁ brahma nityaṁ yajñe pratiṣhṭhitam
`,word_meanings:`karma—duties; brahma—in the Vedas; udbhavam—manifested; viddhi—you should know; brahma—The Vedas; akṣhara—from the Imperishable (God); samudbhavam—directly manifested; tasmāt—therefore; sarva-gatam—all-pervading; brahma—The Lord; nityam—eternally; yajñe—in sacrifice; pratiṣhṭhitam—established
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S15.mp3"},{chapter_id:3,chapter_number:3,externalId:135,id:135,text:`एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।

अघायुरिन्द्रियारामो मोघं पार्थ स जीवति।।3.16।।
 `,title:"Verse 135",verse_number:16,verse_order:135,transliteration:`evaṁ pravartitaṁ chakraṁ nānuvartayatīha yaḥ
aghāyur indriyārāmo moghaṁ pārtha sa jīvati
`,word_meanings:`evam—thus; pravartitam—set into motion; chakram—cycle; na—not; anuvartayati—follow; iha—in this life; yaḥ—who; agha-āyuḥ—sinful living; indriya-ārāmaḥ—for the delight of their senses; mogham—vainly; pārtha—Arjun, the son of Pritha; saḥ—they; jīvati—live
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S16.mp3"},{chapter_id:3,chapter_number:3,externalId:136,id:136,text:`यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः।

आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते।।3.17।।
 `,title:"Verse 136",verse_number:17,verse_order:136,transliteration:`yas tvātma-ratir eva syād ātma-tṛiptaśh cha mānavaḥ
ātmanyeva cha santuṣhṭas tasya kāryaṁ na vidyate
`,word_meanings:`yaḥ—who; tu—but; ātma-ratiḥ—rejoice in the self; eva—certainly; syāt—is; ātma-tṛiptaḥ—self-satisfied; cha—and; mānavaḥ—human being; ātmani—in the self; eva—certainly; cha—and; santuṣhṭaḥ—satisfied; tasya—his; kāryam—duty; na—not; vidyate—exist
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S17.mp3"},{chapter_id:3,chapter_number:3,externalId:137,id:137,text:`नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन।

न चास्य सर्वभूतेषु कश्िचदर्थव्यपाश्रयः।।3.18।।
 `,title:"Verse 137",verse_number:18,verse_order:137,transliteration:`naiva tasya kṛitenārtho nākṛiteneha kaśhchana
na chāsya sarva-bhūteṣhu kaśhchid artha-vyapāśhrayaḥ
`,word_meanings:`na—not; eva—indeed; tasya—his; kṛitena—by discharge of duty; arthaḥ—gain; na—not; akṛitena—without discharge of duty; iha—here; kaśhchana—whatsoever; na—never; cha—and; asya—of that person; sarva-bhūteṣhu—among all living beings; kaśhchit—any; artha—necessity; vyapāśhrayaḥ—to depend upon
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S18.mp3"},{chapter_id:3,chapter_number:3,externalId:138,id:138,text:`तस्मादसक्तः सततं कार्यं कर्म समाचर।

असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः।।3.19।।
 `,title:"Verse 138",verse_number:19,verse_order:138,transliteration:`tasmād asaktaḥ satataṁ kāryaṁ karma samāchara
asakto hyācharan karma param āpnoti pūruṣhaḥ
`,word_meanings:`tasmāt—therefore; asaktaḥ—without attachment; satatam—constantly; kāryam—duty; karma—action; samāchara—perform; asaktaḥ—unattached; hi—certainly; ācharan—performing; karma—work; param—the Supreme; āpnoti—attains; pūruṣhaḥ—a person
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S19.mp3"},{chapter_id:3,chapter_number:3,externalId:139,id:139,text:`कर्मणैव हि संसिद्धिमास्थिता जनकादयः।

लोकसंग्रहमेवापि संपश्यन्कर्तुमर्हसि।।3.20।।
 `,title:"Verse 139",verse_number:20,verse_order:139,transliteration:`karmaṇaiva hi sansiddhim āsthitā janakādayaḥ
loka-saṅgraham evāpi sampaśhyan kartum arhasi
`,word_meanings:`karmaṇā—by the performance of prescribed duties; eva—only; hi—certainly; sansiddhim—perfection; āsthitāḥ—attained; janaka-ādayaḥ—King Janak and other kings; loka-saṅgraham—for the welfare of the masses; eva api—only; sampaśhyan—considering; kartum—to perform; arhasi—you should;
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S20.mp3"},{chapter_id:3,chapter_number:3,externalId:140,id:140,text:`यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।

स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते।।3.21।।
 `,title:"Verse 140",verse_number:21,verse_order:140,transliteration:`yad yad ācharati śhreṣhṭhas tat tad evetaro janaḥ
sa yat pramāṇaṁ kurute lokas tad anuvartate
`,word_meanings:`yat yat—whatever; ācharati—does; śhreṣhṭhaḥ—the best; tat tat—that (alone); eva—certainly; itaraḥ—common; janaḥ—people; saḥ—they; yat—whichever; pramāṇam—standard; kurute—perform; lokaḥ—world; tat—that; anuvartate—pursues
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S21.mp3"},{chapter_id:3,chapter_number:3,externalId:141,id:141,text:`न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन।

नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि।।3.22।।
 `,title:"Verse 141",verse_number:22,verse_order:141,transliteration:`na me pārthāsti kartavyaṁ triṣhu lokeṣhu kiñchana
nānavāptam avāptavyaṁ varta eva cha karmaṇi
`,word_meanings:`na—not; me—mine; pārtha—Arjun; asti—is; kartavyam—duty; triṣhu—in the three; lokeṣhu—worlds; kiñchana—any; na—not; anavāptam—to be attained; avāptavyam—to be gained; varte—I am engaged; eva—yet; cha—also; karmaṇi—in prescribed duties
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S22.mp3"},{chapter_id:3,chapter_number:3,externalId:142,id:142,text:`यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः।

मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः।।3.23।।
 `,title:"Verse 142",verse_number:23,verse_order:142,transliteration:`yadi hyahaṁ na varteyaṁ jātu karmaṇyatandritaḥ
mama vartmānuvartante manuṣhyāḥ pārtha sarvaśhaḥ
`,word_meanings:`yadi—if; hi—certainly; aham—I; na—not; varteyam—thus engage; jātu—ever; karmaṇi—in the performance of prescribed duties; atandritaḥ—carefully; mama—my; vartma—path; anuvartante—follow; manuṣhyāḥ—all men; pārtha—Arjun, the son of Pritha; sarvaśhaḥ—in all respects
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S23.mp3"},{chapter_id:3,chapter_number:3,externalId:143,id:143,text:`उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम्।

सङ्करस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः।।3.24।।
 `,title:"Verse 143",verse_number:24,verse_order:143,transliteration:`utsīdeyur ime lokā na kuryāṁ karma ched aham
sankarasya cha kartā syām upahanyām imāḥ prajāḥ
`,word_meanings:`utsīdeyuḥ—would perish; ime—all these; lokāḥ—worlds; na—not; kuryām—I perform; karma—prescribed duties; chet—if; aham—I; sankarasya—of uncultured population; cha—and; kartā—responsible; syām—would be; upahanyām—would destroy; imāḥ—all these; prajāḥ—living entities
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S24.mp3"},{chapter_id:3,chapter_number:3,externalId:144,id:144,text:`सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत।

कुर्याद्विद्वांस्तथासक्तश्िचकीर्षुर्लोकसंग्रहम्।।3.25।।
 `,title:"Verse 144",verse_number:25,verse_order:144,transliteration:`saktāḥ karmaṇyavidvānso yathā kurvanti bhārata
kuryād vidvāns tathāsaktaśh chikīrṣhur loka-saṅgraham
`,word_meanings:`saktāḥ—attached; karmaṇi—duties; avidvānsaḥ—the ignorant; yathā—as much as; kurvanti—act; bhārata—scion of Bharat (Arjun); kuryāt—should do; vidvān—the wise; tathā—thus; asaktaḥ—unattached; chikīrṣhuḥ—wishing; loka-saṅgraham—welfare of the world
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S25.mp3"},{chapter_id:3,chapter_number:3,externalId:145,id:145,text:`न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम्।

जोषयेत्सर्वकर्माणि विद्वान् युक्तः समाचरन्।।3.26।।
 `,title:"Verse 145",verse_number:26,verse_order:145,transliteration:`na buddhi-bhedaṁ janayed ajñānāṁ karma-saṅginām
joṣhayet sarva-karmāṇi vidvān yuktaḥ samācharan
`,word_meanings:`na—not; buddhi-bhedam—discord in the intellects; janayet—should create; ajñānām—of the ignorant; karma-saṅginām—who are attached to fruitive actions; joṣhayet—should inspire (them) to perform; sarva—all; karmāṇi—prescribed; vidvān—the wise; yuktaḥ—enlightened; samācharan—performing properly
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S26.mp3"},{chapter_id:3,chapter_number:3,externalId:146,id:146,text:`प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।

अहङ्कारविमूढात्मा कर्ताऽहमिति मन्यते।।3.27।।
 `,title:"Verse 146",verse_number:27,verse_order:146,transliteration:`prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśhaḥ
ahankāra-vimūḍhātmā kartāham iti manyate
`,word_meanings:`prakṛiteḥ—of material nature; kriyamāṇāni—carried out; guṇaiḥ—by the three modes; karmāṇi—activities; sarvaśhaḥ—all kinds of; ahankāra-vimūḍha-ātmā—those who are bewildered by the ego and misidentify themselves with the body; kartā—the doer; aham—I; iti—thus; manyate—thinks
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S27.mp3"},{chapter_id:3,chapter_number:3,externalId:147,id:147,text:`तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः।

गुणा गुणेषु वर्तन्त इति मत्वा न सज्जते।।3.28।।
 `,title:"Verse 147",verse_number:28,verse_order:147,transliteration:`tattva-vit tu mahā-bāho guṇa-karma-vibhāgayoḥ
guṇā guṇeṣhu vartanta iti matvā na sajjate
`,word_meanings:`tattva-vit—the knower of the Truth; tu—but; mahā-bāho—mighty-armed one; guṇa-karma—from guṇas and karma; vibhāgayoḥ—distinguish; guṇāḥ—modes of material nature in the shape of the senses, mind, etc; guṇeṣhu—modes of material nature in the shape of objects of perception; vartante—are engaged; iti—thus; matvā—knowing; na—never; sajjate—becomes attached
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S28.mp3"},{chapter_id:3,chapter_number:3,externalId:148,id:148,text:`प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु।

तानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत्।।3.29।।
 `,title:"Verse 148",verse_number:29,verse_order:148,transliteration:`prakṛiter guṇa-sammūḍhāḥ sajjante guṇa-karmasu
tān akṛitsna-vido mandān kṛitsna-vin na vichālayet
`,word_meanings:`prakṛiteḥ—of material nature; guṇa—by the modes of material nature; sammūḍhāḥ—deluded; sajjante—become attached; guṇa-karmasu—to results of actions; tān—those; akṛitsna-vidaḥ—persons without knowledge; mandān—the ignorant; kṛitsna-vit—persons with knowledge; na vichālayet—should not unsettle
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S29.mp3"},{chapter_id:3,chapter_number:3,externalId:149,id:149,text:`मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा।

निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः।।3.30।।
 `,title:"Verse 149",verse_number:30,verse_order:149,transliteration:`mayi sarvāṇi karmāṇi sannyasyādhyātma-chetasā
nirāśhīr nirmamo bhūtvā yudhyasva vigata-jvaraḥ
`,word_meanings:`mayi—unto me; sarvāṇi—all; karmāṇi—works; sannyasya—renouncing completely; adhyātma-chetasā—with the thoughts resting on God; nirāśhīḥ—free from hankering for the results of the actions; nirmamaḥ—without ownership; bhūtvā—so being; yudhyasva—fight; vigata-jvaraḥ—without mental fever
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S30.mp3"},{chapter_id:3,chapter_number:3,externalId:150,id:150,text:`ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः।

श्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः।।3.31।।
 `,title:"Verse 150",verse_number:31,verse_order:150,transliteration:`ye me matam idaṁ nityam anutiṣhṭhanti mānavāḥ
śhraddhāvanto ’nasūyanto muchyante te ’pi karmabhiḥ
`,word_meanings:`ye—who; me—my; matam—teachings; idam—these; nityam—constantly; anutiṣhṭhanti—abide by; mānavāḥ—human beings; śhraddhā-vantaḥ—with profound faith; anasūyantaḥ—free from cavilling; muchyante—become free; te—those; api—also; karmabhiḥ—from the bondage of karma
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S31.mp3"},{chapter_id:3,chapter_number:3,externalId:151,id:151,text:`ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम्।

सर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः।।3.32।।
 `,title:"Verse 151",verse_number:32,verse_order:151,transliteration:`ye tvetad abhyasūyanto nānutiṣhṭhanti me matam
sarva-jñāna-vimūḍhāns tān viddhi naṣhṭān achetasaḥ
`,word_meanings:`ye—those; tu—but; etat—this; abhyasūyantaḥ—cavilling; na—not; anutiṣhṭhanti—follow; me—my; matam—teachings; sarva-jñāna—in all types of knowledge; vimūḍhān—deluded; tān—they are; viddhi—know; naṣhṭān—ruined; achetasaḥ—devoid of discrimination
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S32.mp3"},{chapter_id:3,chapter_number:3,externalId:152,id:152,text:`सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि।

प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति।।3.33।।
 `,title:"Verse 152",verse_number:33,verse_order:152,transliteration:`sadṛiśhaṁ cheṣhṭate svasyāḥ prakṛiter jñānavān api
prakṛitiṁ yānti bhūtāni nigrahaḥ kiṁ kariṣhyati
`,word_meanings:`sadṛiśham—accordingly; cheṣhṭate—act; svasyāḥ—by their own; prakṛiteḥ—modes of nature; jñāna-vān—the wise; api—even; prakṛitim—nature; yānti—follow; bhūtāni—all living beings; nigrahaḥ—repression; kim—what; kariṣhyati—will do
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S33.mp3"},{chapter_id:3,chapter_number:3,externalId:153,id:153,text:`इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ।

तयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ।।3.34।।
 `,title:"Verse 153",verse_number:34,verse_order:153,transliteration:`indriyasyendriyasyārthe rāga-dveṣhau vyavasthitau
tayor na vaśham āgachchhet tau hyasya paripanthinau
`,word_meanings:`indriyasya—of the senses; indriyasya arthe—in the sense objects; rāga—attachment; dveṣhau—aversion; vyavasthitau—situated; tayoḥ—of them; na—never; vaśham—be controlled; āgachchhet—should become; tau—those; hi—certainly; asya—for him; paripanthinau—foes
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S34.mp3"},{chapter_id:3,chapter_number:3,externalId:154,id:154,text:`श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।

स्वधर्मे निधनं श्रेयः परधर्मो भयावहः।।3.35।।
 `,title:"Verse 154",verse_number:35,verse_order:154,transliteration:`śhreyān swa-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt
swa-dharme nidhanaṁ śhreyaḥ para-dharmo bhayāvahaḥ
`,word_meanings:`śhreyān—better; swa-dharmaḥ—personal duty; viguṇaḥ—tinged with faults; para-dharmāt—than another’s prescribed duties; su-anuṣhṭhitāt—perfectly done; swa-dharme—in one’s personal duties; nidhanam—death; śhreyaḥ—better; para-dharmaḥ—duties prescribed for others; bhaya-āvahaḥ—fraught with fear
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S35.mp3"},{chapter_id:3,chapter_number:3,externalId:155,id:155,text:`अर्जुन उवाच

अथ केन प्रयुक्तोऽयं पापं चरति पूरुषः।

अनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः।।3.36।।
 `,title:"Verse 155",verse_number:36,verse_order:155,transliteration:`arjuna uvācha
atha kena prayukto ’yaṁ pāpaṁ charati pūruṣhaḥ
anichchhann api vārṣhṇeya balād iva niyojitaḥ
`,word_meanings:`arjunaḥ uvācha—Arjun said; atha—then; kena—by what; prayuktaḥ—impelled; ayam—one; pāpam—sins; charati—commit; pūruṣhaḥ—a person; anichchhan—unwillingly; api—even; vārṣhṇeya—he who belongs to the Vrishni clan, Shree Krishna; balāt—by force; iva—as if; niyojitaḥ—engaged
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S36.mp3"},{chapter_id:3,chapter_number:3,externalId:156,id:156,text:`श्री भगवानुवाच

काम एष क्रोध एष रजोगुणसमुद्भवः।

महाशनो महापाप्मा विद्ध्येनमिह वैरिणम्।।3.37।।
 `,title:"Verse 156",verse_number:37,verse_order:156,transliteration:`śhrī bhagavān uvācha
kāma eṣha krodha eṣha rajo-guṇa-samudbhavaḥ
mahāśhano mahā-pāpmā viddhyenam iha vairiṇam
`,word_meanings:`śhri-bhagavān uvācha—the Supreme Lord said; kāmaḥ—desire; eṣhaḥ—this; krodhaḥ—wrath; eṣhaḥ—this; rajaḥ-guṇa—the mode of passion; samudbhavaḥ—born of; mahā-aśhanaḥ—all-devouring; mahā-pāpmā—greatly sinful; viddhi—know; enam—this; iha—in the material world; vairiṇam—the enemy
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S37.mp3"},{chapter_id:3,chapter_number:3,externalId:157,id:157,text:`धूमेनाव्रियते वह्निर्यथाऽऽदर्शो मलेन च।

यथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम्।।3.38।।
 `,title:"Verse 157",verse_number:38,verse_order:157,transliteration:`dhūmenāvriyate vahnir yathādarśho malena cha
yatholbenāvṛito garbhas tathā tenedam āvṛitam
`,word_meanings:`dhūmena—by smoke; āvriyate—is covered; vahniḥ—fire; yathā—just as; ādarśhaḥ—mirror; malena—by dust; cha—also; yathā—just as; ulbena—by the womb; āvṛitaḥ—is covered; garbhaḥ—embryo; tathā—similarly; tena—by that (desire); idam—this; āvṛitam—is covered
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S38.mp3"},{chapter_id:3,chapter_number:3,externalId:158,id:158,text:`आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा।

कामरूपेण कौन्तेय दुष्पूरेणानलेन च।।3.39।।
 `,title:"Verse 158",verse_number:39,verse_order:158,transliteration:`āvṛitaṁ jñānam etena jñānino nitya-vairiṇā
kāma-rūpeṇa kaunteya duṣhpūreṇānalena cha
`,word_meanings:`āvṛitam—covered; jñānam—knowledge; etena—by this; jñāninaḥ—of the wise; nitya-vairiṇā—by the perpetual enemy; kāma-rūpeṇa—in the form of desires; kaunteya—Arjun the son of Kunti; duṣhpūreṇa—insatiable; analena—like fire; cha—and
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S39.mp3"},{chapter_id:3,chapter_number:3,externalId:159,id:159,text:`इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते।

एतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम्।।3.40।।
 `,title:"Verse 159",verse_number:40,verse_order:159,transliteration:`indriyāṇi mano buddhir asyādhiṣhṭhānam uchyate
etair vimohayatyeṣha jñānam āvṛitya dehinam
`,word_meanings:`indriyāṇi—the senses; manaḥ—the mind; buddhiḥ—the intellect; asya—of this; adhiṣhṭhānam—dwelling place; uchyate—are said to be; etaiḥ—by these; vimohayati—deludes; eṣhaḥ—this; jñānam—knowledge; āvṛitya—clouds; dehinam—the embodied soul
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S40.mp3"},{chapter_id:3,chapter_number:3,externalId:160,id:160,text:`तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ।

पाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम्।।3.41।।
 `,title:"Verse 160",verse_number:41,verse_order:160,transliteration:`tasmāt tvam indriyāṇyādau niyamya bharatarṣhabha
pāpmānaṁ prajahi hyenaṁ jñāna-vijñāna-nāśhanam
`,word_meanings:`tasmāt—therefore; tvam—you; indriyāṇi—senses; ādau—in the very beginning; niyamya—having controlled; bharata-ṛiṣhabha—Arjun, the best of the Bharatas; pāpmānam—the sinful; prajahi—slay; hi—certainly; enam—this; jñāna—knowledge; vijñāna—realization; nāśhanam—the destroyer
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S41.mp3"},{chapter_id:3,chapter_number:3,externalId:161,id:161,text:`इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः।

मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः।।3.42।।
 `,title:"Verse 161",verse_number:42,verse_order:161,transliteration:`indriyāṇi parāṇyāhur indriyebhyaḥ paraṁ manaḥ
manasas tu parā buddhir yo buddheḥ paratas tu saḥ
`,word_meanings:`indriyāṇi—senses; parāṇi—superior; āhuḥ—are said; indriyebhyaḥ—than the senses; param—superior; manaḥ—the mind; manasaḥ—than the mind; tu—but; parā—superior; buddhiḥ—intellect; yaḥ—who; buddheḥ—than the intellect; parataḥ—more superior; tu—but; saḥ—that (soul)
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S42.mp3"},{chapter_id:3,chapter_number:3,externalId:162,id:162,text:`एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना।

जहि शत्रुं महाबाहो कामरूपं दुरासदम्।।3.43।।
 `,title:"Verse 162",verse_number:43,verse_order:162,transliteration:`evaṁ buddheḥ paraṁ buddhvā sanstabhyātmānam ātmanā
jahi śhatruṁ mahā-bāho kāma-rūpaṁ durāsadam
`,word_meanings:`evam—thus; buddheḥ—than the intellect; param—superior; buddhvā—knowing; sanstabhya—subdue; ātmānam—the lower self (senses, mind, and intellect); ātmanā—by higher self (soul); jahi—kill; śhatrum—the enemy; mahā-bāho—mighty-armed one; kāma-rūpam—in the form of desire; durāsadam—formidable
`,Play:"https://testapi1test.blob.core.windows.net/test/3/Ch3S43.mp3"},{chapter_id:4,chapter_number:4,externalId:163,id:163,text:`श्री भगवानुवाच

इमं विवस्वते योगं प्रोक्तवानहमव्ययम्।

विवस्वान् मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत्।।4.1।।
 `,title:"Verse 163",verse_number:1,verse_order:163,transliteration:`śhrī bhagavān uvācha
imaṁ vivasvate yogaṁ proktavān aham avyayam
vivasvān manave prāha manur ikṣhvākave ’bravīt
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord Shree Krishna said; imam—this; vivasvate—to the Sun-god; yogam—the science of Yog; proktavān—taught; aham—I; avyayam—eternal; vivasvān—Sun-god; manave—to Manu, the original progenitor of humankind; prāha—told; manuḥ—Manu; ikṣhvākave—to Ikshvaku, first king of the Solar dynasty; abravīt—instructed	
`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S01.mp3"},{chapter_id:4,chapter_number:4,externalId:164,id:164,text:`एवं परम्पराप्राप्तमिमं राजर्षयो विदुः।

स कालेनेह महता योगो नष्टः परन्तप।।4.2।।
 `,title:"Verse 164",verse_number:2,verse_order:164,transliteration:`evaṁ paramparā-prāptam imaṁ rājarṣhayo viduḥ
sa kāleneha mahatā yogo naṣhṭaḥ parantapa

`,word_meanings:`evam—thus; paramparā—in a continuous tradition; prāptam—received; imam—this (science); rāja-ṛiṣhayaḥ—the saintly kings; viduḥ—understood; saḥ—that; kālena—with the long passage of time; iha—in this world; mahatā—great; yogaḥ—the science of Yog; naṣhṭaḥ—lost; parantapa—Arjun, the scorcher of foes

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S02.mp3"},{chapter_id:4,chapter_number:4,externalId:165,id:165,text:`स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः।

भक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम्।।4.3।।
 `,title:"Verse 165",verse_number:3,verse_order:165,transliteration:`sa evāyaṁ mayā te ’dya yogaḥ proktaḥ purātanaḥ
bhakto ’si me sakhā cheti rahasyaṁ hyetad uttamam

`,word_meanings:`saḥ—that; eva—certainly; ayam—this; mayā—by me; te—unto you; adya—today; yogaḥ—the science of Yog; proktaḥ—reveal; purātanaḥ—ancient; bhaktaḥ—devotee; asi—you are; me—my; sakhā—friend; cha—and; iti—therefore; rahasyam—secret; hi—certainly; etat—this; uttamam—supreme

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S03.mp3"},{chapter_id:4,chapter_number:4,externalId:166,id:166,text:`अर्जुन उवाच

अपरं भवतो जन्म परं जन्म विवस्वतः।

कथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति।।4.4।।
 `,title:"Verse 166",verse_number:4,verse_order:166,transliteration:`arjuna uvācha
aparaṁ bhavato janma paraṁ janma vivasvataḥ
katham etad vijānīyāṁ tvam ādau proktavān iti

`,word_meanings:`arjunaḥ uvācha—Arjun said; aparam—later; bhavataḥ—your; janma—birth; param—prior; janma—birth; vivasvataḥ—Vivasvan, the sun-god; katham—how; etat—this; vijānīyām—am I to understand; tvam—you; ādau—in the beginning; proktavān—taught; iti—thus

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S04.mp3"},{chapter_id:4,chapter_number:4,externalId:167,id:167,text:`श्री भगवानुवाच

बहूनि मे व्यतीतानि जन्मानि तव चार्जुन।

तान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप।।4.5।।
 `,title:"Verse 167",verse_number:5,verse_order:167,transliteration:`śhrī bhagavān uvācha
bahūni me vyatītāni janmāni tava chārjuna
tānyahaṁ veda sarvāṇi na tvaṁ vettha parantapa

`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; bahūni—many; me—of mine; vyatītāni—have passed; janmāni—births; tava—of yours; cha—and; arjuna—Arjun; tāni—them; aham—I; veda—know; sarvāṇi—all; na—not; tvam—you; vettha—know; parantapa—Arjun, the scorcher of foes

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S05.mp3"},{chapter_id:4,chapter_number:4,externalId:168,id:168,text:`अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन्।

प्रकृतिं स्वामधिष्ठाय संभवाम्यात्ममायया।।4.6।।
 `,title:"Verse 168",verse_number:6,verse_order:168,transliteration:`ajo ’pi sannavyayātmā bhūtānām īśhvaro ’pi san
prakṛitiṁ svām adhiṣhṭhāya sambhavāmyātma-māyayā

`,word_meanings:`ajaḥ—unborn; api—although; san—being so; avyaya ātmā—Imperishable nature; bhūtānām—of (all) beings; īśhvaraḥ—the Lord; api—although; san—being; prakṛitim—nature; svām—of myself; adhiṣhṭhāya—situated; sambhavāmi—I manifest; ātma-māyayā—by my Yogmaya power

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S06.mp3"},{chapter_id:4,chapter_number:4,externalId:169,id:169,text:`यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।

अभ्युत्थानमधर्मस्य तदाऽऽत्मानं सृजाम्यहम्।।4.7।।
 `,title:"Verse 169",verse_number:7,verse_order:169,transliteration:`yadā yadā hi dharmasya glānir bhavati bhārata
abhyutthānam adharmasya tadātmānaṁ sṛijāmyaham

`,word_meanings:`yadā yadā—whenever; hi—certainly; dharmasya—of righteousness; glāniḥ—decline; bhavati—is; bhārata—Arjun, descendant of Bharat; abhyutthānam—increase; adharmasya—of unrighteousness; tadā—at that time; ātmānam—self; sṛijāmi—manifest; aham—I

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S07.mp3"},{chapter_id:4,chapter_number:4,externalId:170,id:170,text:`परित्राणाय साधूनां विनाशाय च दुष्कृताम्।

धर्मसंस्थापनार्थाय संभवामि युगे युगे।।4.8।।
 `,title:"Verse 170",verse_number:8,verse_order:170,transliteration:`paritrāṇāya sādhūnāṁ vināśhāya cha duṣhkṛitām
dharma-sansthāpanārthāya sambhavāmi yuge yuge

`,word_meanings:`paritrāṇāya—to protect; sādhūnām—the righteous; vināśhāya—to annihilate; cha—and; duṣhkṛitām—the wicked; dharma—the eternal religion; sansthāpana-arthāya—to reestablish; sambhavāmi—I appear; yuge yuge—age after age

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S08.mp3"},{chapter_id:4,chapter_number:4,externalId:171,id:171,text:`जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः।

त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन।।4.9।।
 `,title:"Verse 171",verse_number:9,verse_order:171,transliteration:`janma karma cha me divyam evaṁ yo vetti tattvataḥ
tyaktvā dehaṁ punar janma naiti mām eti so ’rjuna

`,word_meanings:`janma—birth; karma—activities; cha—and; me—of mine; divyam—divine; evam—thus; yaḥ—who; vetti—know; tattvataḥ—in truth; tyaktvā—having abandoned; deham—the body; punaḥ—again; janma—birth; na—never; eti—takes; mām—to me; eti—comes; saḥ—he; arjuna—Arjun

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S09.mp3"},{chapter_id:4,chapter_number:4,externalId:172,id:172,text:`वीतरागभयक्रोधा मन्मया मामुपाश्रिताः।

बहवो ज्ञानतपसा पूता मद्भावमागताः।।4.10।।
 `,title:"Verse 172",verse_number:10,verse_order:172,transliteration:`vīta-rāga-bhaya-krodhā man-mayā mām upāśhritāḥ
bahavo jñāna-tapasā pūtā mad-bhāvam āgatāḥ

`,word_meanings:`vīta—freed from; rāga—attachment; bhaya—fear; krodhāḥ—and anger; mat-mayā—completely absorbed in me; mām—in me; upāśhritāḥ—taking refuge (of); bahavaḥ—many (persons); jñāna—of knowledge; tapasā—by the fire of knowledge; pūtāḥ—purified; mat-bhāvam—my divine love; āgatāḥ—attained

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S10.mp3"},{chapter_id:4,chapter_number:4,externalId:173,id:173,text:`ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्।

मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः।।4.11।।
 `,title:"Verse 173",verse_number:11,verse_order:173,transliteration:`ye yathā māṁ prapadyante tāns tathaiva bhajāmyaham
mama vartmānuvartante manuṣhyāḥ pārtha sarvaśhaḥ

`,word_meanings:`ye—who; yathā—in whatever way; mām—unto me; prapadyante—surrender; tān—them; tathā—so; eva—certainly; bhajāmi—reciprocate; aham—I; mama—my; vartma—path; anuvartante—follow; manuṣhyāḥ—men; pārtha—Arjun, the son of Pritha; sarvaśhaḥ—in all respects

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S11.mp3"},{chapter_id:4,chapter_number:4,externalId:174,id:174,text:`काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः।

क्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा।।4.12।।
 `,title:"Verse 174",verse_number:12,verse_order:174,transliteration:`kāṅkṣhantaḥ karmaṇāṁ siddhiṁ yajanta iha devatāḥ
kṣhipraṁ hi mānuṣhe loke siddhir bhavati karmajā

`,word_meanings:`kāṅkṣhantaḥ—desiring; karmaṇām—material activities; siddhim—success; yajante—worship; iha—in this world; devatāḥ—the celestial gods; kṣhipram—quickly; hi—certainly; mānuṣhe—in human society; loke—within this world; siddhiḥ—rewarding; bhavati—manifest; karma-jā—from material activities

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S12.mp3"},{chapter_id:4,chapter_number:4,externalId:175,id:175,text:`चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः।

तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम्।।4.13।।
 `,title:"Verse 175",verse_number:13,verse_order:175,transliteration:`chātur-varṇyaṁ mayā sṛiṣhṭaṁ guṇa-karma-vibhāgaśhaḥ
tasya kartāram api māṁ viddhyakartāram avyayam

`,word_meanings:`chātuḥ-varṇyam—the four categories of occupations; mayā—by me; sṛiṣhṭam—were created; guṇa—of quality; karma—and activities; vibhāgaśhaḥ—according to divisions; tasya—of that; kartāram—the creator; api—although; mām—me; viddhi—know; akartāram—non-doer; avyayam—unchangeable

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S13.mp3"},{chapter_id:4,chapter_number:4,externalId:176,id:176,text:`न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा।

इति मां योऽभिजानाति कर्मभिर्न स बध्यते।।4.14।।
 `,title:"Verse 176",verse_number:14,verse_order:176,transliteration:`na māṁ karmāṇi limpanti na me karma-phale spṛihā
iti māṁ yo ’bhijānāti karmabhir na sa badhyate

`,word_meanings:`na—not; mām—me; karmāṇi—activities; limpanti—taint; na—nor; me—my; karma-phale—the fruits of action; spṛihā—desire; iti—thus; mām—me; yaḥ—who; abhijānāti—knows; karmabhiḥ—result of action; na—never; saḥ—that person; badhyate—is bound

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S14.mp3"},{chapter_id:4,chapter_number:4,externalId:177,id:177,text:`एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः।

कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम्।।4.15।।
 `,title:"Verse 177",verse_number:15,verse_order:177,transliteration:`evaṁ jñātvā kṛitaṁ karma pūrvair api mumukṣhubhiḥ
kuru karmaiva tasmāttvaṁ pūrvaiḥ pūrvataraṁ kṛitam

`,word_meanings:`evam—thus; jñātvā—knowing; kṛitam—performed; karma—actions; pūrvaiḥ—of ancient times; api—indeed; mumukṣhubhiḥ—seekers of liberation; kuru—should perform; karma—duty; eva—certainly; tasmāt—therefore; tvam—you; pūrvaiḥ—of those ancient sages; pūrva-taram—in ancient times; kṛitam—performed

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S15.mp3"},{chapter_id:4,chapter_number:4,externalId:178,id:178,text:`किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः।

तत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात्।।4.16।।
 `,title:"Verse 178",verse_number:16,verse_order:178,transliteration:`kiṁ karma kim akarmeti kavayo ’pyatra mohitāḥ
tat te karma pravakṣhyāmi yaj jñātvā mokṣhyase ’śhubhāt

`,word_meanings:`kim—what; karma—action; kim—what; akarma—inaction; iti—thus; kavayaḥ—the wise; api—even; atra—in this; mohitāḥ—are confused; tat—that; te—to you; karma—action; pravakṣhyāmi—I shall explain; yat—which; jñātvā—knowing; mokṣhyase—you may free yourself; aśhubhāt—from inauspiciousness

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S16.mp3"},{chapter_id:4,chapter_number:4,externalId:179,id:179,text:`कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः।

अकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः।।4.17।।
 `,title:"Verse 179",verse_number:17,verse_order:179,transliteration:`karmaṇo hyapi boddhavyaṁ boddhavyaṁ cha vikarmaṇaḥ
akarmaṇaśh cha boddhavyaṁ gahanā karmaṇo gatiḥ

`,word_meanings:`karmaṇaḥ—recommended action; hi—certainly; api—also; boddhavyam—should be known; boddhavyam—must understand; cha—and; vikarmaṇaḥ—forbidden action; akarmaṇaḥ—inaction; cha—and; boddhavyam—must understand; gahanā—profound; karmaṇaḥ—of action; gatiḥ—the true path

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S17.mp3"},{chapter_id:4,chapter_number:4,externalId:180,id:180,text:`कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।

स बुद्धिमान् मनुष्येषु स युक्तः कृत्स्नकर्मकृत्।।4.18।।
 `,title:"Verse 180",verse_number:18,verse_order:180,transliteration:`karmaṇyakarma yaḥ paśhyed akarmaṇi cha karma yaḥ
sa buddhimān manuṣhyeṣhu sa yuktaḥ kṛitsna-karma-kṛit

`,word_meanings:`karmaṇi—action; akarma—in inaction; yaḥ—who; paśhyet—see; akarmaṇi—inaction; cha—also; karma—action; yaḥ—who; saḥ—they; buddhi-mān—wise; manuṣhyeṣhu—amongst humans; saḥ—they; yuktaḥ—yogis; kṛitsna-karma-kṛit—performers all kinds of actions

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S18.mp3"},{chapter_id:4,chapter_number:4,externalId:181,id:181,text:`यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः।

ज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः।।4.19।।
 `,title:"Verse 181",verse_number:19,verse_order:181,transliteration:`yasya sarve samārambhāḥ kāma-saṅkalpa-varjitāḥ
jñānāgni-dagdha-karmāṇaṁ tam āhuḥ paṇḍitaṁ budhāḥ

`,word_meanings:`yasya—whose; sarve—every; samārambhāḥ—undertakings; kāma—desire for material pleasures; saṅkalpa—resolve; varjitāḥ—devoid of; jñāna—divine knowledge; agni—in the fire; dagdha—burnt; karmāṇam—actions; tam—him; āhuḥ—address; paṇḍitam—a sage; budhāḥ—the wise

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S19.mp3"},{chapter_id:4,chapter_number:4,externalId:182,id:182,text:`त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः।

कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः।।4.20।।
 `,title:"Verse 182",verse_number:20,verse_order:182,transliteration:`tyaktvā karma-phalāsaṅgaṁ nitya-tṛipto nirāśhrayaḥ
karmaṇyabhipravṛitto ’pi naiva kiñchit karoti saḥ

`,word_meanings:`tyaktvā—having given up; karma-phala-āsaṅgam—attachment to the fruits of action; nitya—always; tṛiptaḥ—satisfied; nirāśhrayaḥ—without dependence; karmaṇi—in activities; abhipravṛittaḥ—engaged; api—despite; na—not; eva—certainly; kiñchit—anything; karoti—do; saḥ—that person

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S20.mp3"},{chapter_id:4,chapter_number:4,externalId:183,id:183,text:`निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः।

शारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम्।।4.21।।
 `,title:"Verse 183",verse_number:21,verse_order:183,transliteration:`nirāśhīr yata-chittātmā tyakta-sarva-parigrahaḥ
śhārīraṁ kevalaṁ karma kurvan nāpnoti kilbiṣham

`,word_meanings:`nirāśhīḥ—free from expectations; yata—controlled; chitta-ātmā—mind and intellect; tyakta—having abandoned; sarva—all; parigrahaḥ—the sense of ownership; śhārīram—bodily; kevalam—only; karma—actions; kurvan—performing; na—never; āpnoti—incurs; kilbiṣham—sin

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S21.mp3"},{chapter_id:4,chapter_number:4,externalId:184,id:184,text:`यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः।

समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते।।4.22।।
 `,title:"Verse 184",verse_number:22,verse_order:184,transliteration:`yadṛichchhā-lābha-santuṣhṭo dvandvātīto vimatsaraḥ
samaḥ siddhāvasiddhau cha kṛitvāpi na nibadhyate

`,word_meanings:`yadṛichchhā—which comes of its own accord; lābha—gain; santuṣhṭaḥ—contented; dvandva—duality; atītaḥ—surpassed; vimatsaraḥ—free from envy; samaḥ—equipoised; siddhau—in success; asiddhau—failure; cha—and; kṛitvā—performing; api—even; na—never; nibadhyate—is bound

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S22.mp3"},{chapter_id:4,chapter_number:4,externalId:185,id:185,text:`गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः।

यज्ञायाचरतः कर्म समग्रं प्रविलीयते।।4.23।।
 `,title:"Verse 185",verse_number:23,verse_order:185,transliteration:`gata-saṅgasya muktasya jñānāvasthita-chetasaḥ
yajñāyācharataḥ karma samagraṁ pravilīyate

`,word_meanings:`gata-saṅgasya—free from material attachments; muktasya—of the liberated; jñāna-avasthita—established in divine knowledge; chetasaḥ—whose intellect; yajñāya—as a sacrifice (to God); ācharataḥ—performing; karma—action; samagram—completely; pravilīyate—are freed

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S23.mp3"},{chapter_id:4,chapter_number:4,externalId:186,id:186,text:`ब्रह्मार्पणं ब्रह्महविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।

ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना।।4.24।।
 `,title:"Verse 186",verse_number:24,verse_order:186,transliteration:`brahmārpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam
brahmaiva tena gantavyaṁ brahma-karma-samādhinā

`,word_meanings:`brahma—Brahman; arpaṇam—the ladle and other offerings; brahma—Brahman; haviḥ—the oblation; brahma—Brahman; agnau—in the sacrificial fire; brahmaṇā—by that person; hutam—offered; brahma—Brahman; eva—certainly; tena—by that; gantavyam—to be attained; brahma—Brahman; karma—offering; samādhinā—those completely absorbed in God-consciousness

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S24.mp3"},{chapter_id:4,chapter_number:4,externalId:187,id:187,text:`दैवमेवापरे यज्ञं योगिनः पर्युपासते।

ब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति।।4.25।।
 `,title:"Verse 187",verse_number:25,verse_order:187,transliteration:`daivam evāpare yajñaṁ yoginaḥ paryupāsate
brahmāgnāvapare yajñaṁ yajñenaivopajuhvati

`,word_meanings:`daivam—the celestial gods; eva—indeed; apare—others; yajñam—sacrifice; yoginaḥ—spiritual practioners; paryupāsate—worship; brahma—of the Supreme Truth; agnau—in the fire; apare—others; yajñam—sacrifice; yajñena—by sacrifice; eva—indeed; upajuhvati—offer

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S25.mp3"},{chapter_id:4,chapter_number:4,externalId:188,id:188,text:`श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति।

शब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति।।4.26।।
 `,title:"Verse 188",verse_number:26,verse_order:188,transliteration:`śhrotrādīnīndriyāṇyanye sanyamāgniṣhu juhvati
śhabdādīn viṣhayānanya indriyāgniṣhu juhvati

`,word_meanings:`śhrotra-ādīni—such as the hearing process; indriyāṇi—senses; anye—others; sanyama—restraint; agniṣhu—in the sacrficial fire; juhvati—sacrifice; śhabda-ādīn—sound vibration, etc; viṣhayān—objects of sense-gratification; anye—others; indriya—of the senses; agniṣhu—in the fire; juhvati—sacrifice

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S26.mp3"},{chapter_id:4,chapter_number:4,externalId:189,id:189,text:`सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे।

आत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते।।4.27।।
 `,title:"Verse 189",verse_number:27,verse_order:189,transliteration:`sarvāṇīndriya-karmāṇi prāṇa-karmāṇi chāpare
ātma-sanyama-yogāgnau juhvati jñāna-dīpite

`,word_meanings:`sarvāṇi—all; indriya—the senses; karmāṇi—functions; prāṇa-karmāṇi—functions of the life breath; cha—and; apare—others; ātma-sanyama yogāgnau—in the fire of the controlled mind; juhvati—sacrifice; jñāna-dīpite—kindled by knowledge

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S27.mp3"},{chapter_id:4,chapter_number:4,externalId:190,id:190,text:`द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे।

स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः।।4.28।।
 `,title:"Verse 190",verse_number:28,verse_order:190,transliteration:`dravya-yajñās tapo-yajñā yoga-yajñās tathāpare
swādhyāya-jñāna-yajñāśh cha yatayaḥ sanśhita-vratāḥ

`,word_meanings:`dravya-yajñāḥ—offering one’s own wealth as sacrifice; tapaḥ-yajñāḥ—offering severe austerities as sacrifice; yoga-yajñāḥ—performance of eight-fold path of yogic practices as sacrifice; tathā—thus; apare—others; swādhyāya—cultivating knowledge by studying the scriptures; jñāna-yajñāḥ—those offer cultivation of transcendental knowledge as sacrifice; cha—also; yatayaḥ—these ascetics; sanśhita-vratāḥ—observing strict vows

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S28.mp3"},{chapter_id:4,chapter_number:4,externalId:191,id:191,text:`अपाने जुह्वति प्राण प्राणेऽपानं तथाऽपरे।

प्राणापानगती रुद्ध्वा प्राणायामपरायणाः।।4.29।।
 `,title:"Verse 191",verse_number:29,verse_order:191,transliteration:`apāne juhvati prāṇaṁ prāṇe ’pānaṁ tathāpare
prāṇāpāna-gatī ruddhvā prāṇāyāma-parāyaṇāḥ
 apare niyatāhārāḥ prāṇān prāṇeṣhu juhvati
sarve ’pyete yajña-vido yajña-kṣhapita-kalmaṣhāḥ
`,word_meanings:`apāne—the incoming breath; juhvati—offer; prāṇam—the outgoing breath; prāṇe—in the outgoing breath; apānam—incoming breath; tathā—also; apare—others; prāṇa—of the outgoing breath; apāna—and the incoming breath; gatī—movement; ruddhvā—blocking; prāṇa-āyāma—control of breath; parāyaṇāḥ—wholly devoted
 apare—others; niyata—having controlled; āhārāḥ—food intake; prāṇān—life-breaths; prāṇeṣhu—life-energy; juhvati—sacrifice; sarve—all; api—also; ete—these; yajña-vidaḥ—knowers of sacrifices; yajña-kṣhapita—being cleansed by performances of sacrifices; kalmaṣhāḥ—of impurities
`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S29.mp3"},{chapter_id:4,chapter_number:4,externalId:192,id:192,text:`अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति।

सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः।।4.30।।
 `,title:"Verse 192",verse_number:30,verse_order:192,transliteration:`apare niyatāhārāḥ prāṇān  prāṇeṣu juhvati

sarve py 'ete yajña-vido yajña-kṣapita-kalmaṣāḥ 
`,word_meanings:"apare—others;  niyata—controlled;  āhārāḥ—eating;  prāṇān—outgoing air; prāṇeṣu—in  the outgoing  air; sarve—all;  api—although    apparently  different;  ete—all     these;  yajñavidaḥ—conversant   with the purpose of performing; yajña—sacrifices; kṣapita—being cleansed of the result of such performances; kalmaṣāḥ—sinful    reactions;  juhvati—sacrifices.",Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S30.mp3"},{chapter_id:4,chapter_number:4,externalId:193,id:193,text:`यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम्।

नायं लोकोऽस्त्ययज्ञस्य कुतो़ऽन्यः कुरुसत्तम।।4.31।।
 `,title:"Verse 193",verse_number:31,verse_order:193,transliteration:`yajña-śhiṣhṭāmṛita-bhujo yānti brahma sanātanam
nāyaṁ loko ’styayajñasya kuto ’nyaḥ kuru-sattama

`,word_meanings:`yajña-śhiṣhṭa amṛita-bhujaḥ—they partake of the nectarean remnants of sacrifice; yānti—go; brahma—the Absolute Truth; sanātanam—eternal; na—never; ayam—this; lokaḥ—planet; asti—is; ayajñasya—for one who performs no sacrifice; kutaḥ—how; anyaḥ—other (world); kuru-sat-tama—best of the Kurus, Arjun

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S31.mp3"},{chapter_id:4,chapter_number:4,externalId:194,id:194,text:`एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे।

कर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे।।4.32।।
 `,title:"Verse 194",verse_number:32,verse_order:194,transliteration:`evaṁ bahu-vidhā yajñā vitatā brahmaṇo mukhe
karma-jān viddhi tān sarvān evaṁ jñātvā vimokṣhyase

`,word_meanings:`evam—thus; bahu-vidhāḥ—various kinds of; yajñāḥ—sacrifices; vitatāḥ—have been described; brahmaṇaḥ—of the Vedas; mukhe—through the mouth; karma-jān—originating from works; viddhi—know; tān—them; sarvān—all; evam—thus; jñātvā—having known; vimokṣhyase—you shall be liberated

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S32.mp3"},{chapter_id:4,chapter_number:4,externalId:195,id:195,text:`श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप।

सर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते।।4.33।।
 `,title:"Verse 195",verse_number:33,verse_order:195,transliteration:`śhreyān dravya-mayād yajñāj jñāna-yajñaḥ parantapa
sarvaṁ karmākhilaṁ pārtha jñāne parisamāpyate

`,word_meanings:`śhreyān—superior; dravya-mayāt—of material possessions; yajñāt—than the sacrifice; jñāna-yajñaḥ—sacrifice performed in knowledge; parantapa—subduer of enemies, Arjun; sarvam—all; karma—works; akhilam—all; pārtha—Arjun, the son of Pritha; jñāne—in knowledge; parisamāpyate—culminate

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S33.mp3"},{chapter_id:4,chapter_number:4,externalId:196,id:196,text:`तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया।

उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः।।4.34।।
 `,title:"Verse 196",verse_number:34,verse_order:196,transliteration:`tad viddhi praṇipātena paripraśhnena sevayā
upadekṣhyanti te jñānaṁ jñāninas tattva-darśhinaḥ

`,word_meanings:`tat—the Truth; viddhi—try to learn; praṇipātena—by approaching a spiritual master; paripraśhnena—by humble inquiries; sevayā—by rendering service; upadekṣhyanti—can impart; te—unto you; jñānam—knowledge; jñāninaḥ—the enlightened; tattva-darśhinaḥ—those who have realized the Truth

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S34.mp3"},{chapter_id:4,chapter_number:4,externalId:197,id:197,text:`यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव।

येन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि।।4.35।।
 `,title:"Verse 197",verse_number:35,verse_order:197,transliteration:`yaj jñātvā na punar moham evaṁ yāsyasi pāṇḍava
yena bhūtānyaśheṣheṇa drakṣhyasyātmanyatho mayi

`,word_meanings:`yat—which; jñātvā—having known; na—never; punaḥ—again; moham—delusion; evam—like this; yāsyasi—you shall get; pāṇḍava—Arjun, the son of Pandu; yena—by this; bhūtāni—living beings; aśheṣhāṇi—all; drakṣhyasi—you will see; ātmani—within me (Shree Krishna); atho—that is to say; mayi—in me

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S35.mp3"},{chapter_id:4,chapter_number:4,externalId:198,id:198,text:`अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः।

सर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि।।4.36।।
 `,title:"Verse 198",verse_number:36,verse_order:198,transliteration:`api ched asi pāpebhyaḥ sarvebhyaḥ pāpa-kṛit-tamaḥ
sarvaṁ jñāna-plavenaiva vṛijinaṁ santariṣhyasi

`,word_meanings:`api—even; chet—if; asi—you are; pāpebhyaḥ—sinners; sarvebhyaḥ—of all; pāpa-kṛit-tamaḥ—most sinful; sarvam—all; jñāna-plavena—by the boat of divine knowledge; eva—certainly; vṛijinam—sin; santariṣhyasi—you shall cross over

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S36.mp3"},{chapter_id:4,chapter_number:4,externalId:199,id:199,text:`यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन।

ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा।।4.37।।
 `,title:"Verse 199",verse_number:37,verse_order:199,transliteration:`yathaidhānsi samiddho ’gnir bhasma-sāt kurute ’rjuna
jñānāgniḥ sarva-karmāṇi bhasma-sāt kurute tathā

`,word_meanings:`yathā—as; edhānsi—firewood; samiddhaḥ—blazing; agniḥ—fire; bhasma-sāt—to ashes; kurute—turns; arjuna—Arjun; jñāna-agniḥ—the fire of knowledge; sarva-karmāṇi—all reactions from material activities; bhasma-sāt—to ashes; kurute—it turns; tathā—similarly

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S37.mp3"},{chapter_id:4,chapter_number:4,externalId:200,id:200,text:`न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।

तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति।।4.38।।
 `,title:"Verse 200",verse_number:38,verse_order:200,transliteration:`na hi jñānena sadṛiśhaṁ pavitramiha vidyate
tatsvayaṁ yogasansiddhaḥ kālenātmani vindati

`,word_meanings:`na—not; hi—certainly; jñānena—with divine knowledge; sadṛiśham—like; pavitram—pure; iha—in this world; vidyate—exists; tat—that; svayam—oneself; yoga—practice of yog; sansiddhaḥ—he who has attained perfection; kālena—in course of time; ātmani—wihtin the heart; vindati—finds

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S38.mp3"},{chapter_id:4,chapter_number:4,externalId:201,id:201,text:`श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।

ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति।।4.39।।
 `,title:"Verse 201",verse_number:39,verse_order:201,transliteration:`śhraddhāvān labhate jñānaṁ tat-paraḥ sanyatendriyaḥ
jñānaṁ labdhvā parāṁ śhāntim achireṇādhigachchhati

`,word_meanings:`śhraddhā-vān—a faithful person; labhate—achieves; jñānam—divine knowledge; tat-paraḥ—devoted (to that); sanyata—controlled; indriyaḥ—senses; jñānam—transcendental knowledge; labdhvā—having achieved; parām—supreme; śhāntim—peace; achireṇa—without delay; adhigachchhati—attains

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S39.mp3"},{chapter_id:4,chapter_number:4,externalId:202,id:202,text:`अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति।

नायं लोकोऽस्ति न परो न सुखं संशयात्मनः।।4.40।।
 `,title:"Verse 202",verse_number:40,verse_order:202,transliteration:`ajñaśh chāśhraddadhānaśh cha sanśhayātmā vinaśhyati
nāyaṁ loko ’sti na paro na sukhaṁ sanśhayātmanaḥ

`,word_meanings:`ajñaḥ—the ignorant; cha—and; aśhraddadhānaḥ—without faith; cha—and; sanśhaya—skeptical; ātmā—a person; vinaśhyati—falls down; na—never; ayam—in this; lokaḥ—world; asti—is; na—not; paraḥ—in the next; na—not; sukham—happiness; sanśhaya-ātmanaḥ—for the skeptical soul

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S40.mp3"},{chapter_id:4,chapter_number:4,externalId:203,id:203,text:`योगसंन्यस्तकर्माणं ज्ञानसंछिन्नसंशयम्।

आत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय।।4.41।।
 `,title:"Verse 203",verse_number:41,verse_order:203,transliteration:`yoga-sannyasta-karmāṇaṁ jñāna-sañchhinna-sanśhayam
ātmavantaṁ na karmāṇi nibadhnanti dhanañjaya

`,word_meanings:`yoga-sannyasta-karmāṇam—those who renounce ritualistic karm, dedicating their body, mind, and soul to God; jñāna—by knowledge; sañchhinna—dispelled; sanśhayam—doubts; ātma-vantam—situated in knowledge of the self; na—not; karmāṇi—actions; nibadhnanti—bind; dhanañjaya—Arjun, the conqueror of wealth

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S41.mp3"},{chapter_id:4,chapter_number:4,externalId:204,id:204,text:`तस्मादज्ञानसंभूतं हृत्स्थं ज्ञानासिनाऽऽत्मनः।

छित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत।।4.42।।
 `,title:"Verse 204",verse_number:42,verse_order:204,transliteration:`tasmād ajñāna-sambhūtaṁ hṛit-sthaṁ jñānāsinātmanaḥ
chhittvainaṁ sanśhayaṁ yogam ātiṣhṭhottiṣhṭha bhārata

`,word_meanings:`tasmāt—therefore; ajñāna-sambhūtam—born of ignorance; hṛit-stham—situated in the heart; jñāna—of knowledge; asinā—with the sword; ātmanaḥ—of the self; chhittvā—cut asunder; enam—this; sanśhayam—doubt; yogam—in karm yog; ātiṣhṭha—take shelter; uttiṣhṭha—arise; bhārata—Arjun, descendant of Bharat

`,Play:"https://testapi1test.blob.core.windows.net/test/4/Ch4S42.mp3"},{chapter_id:5,chapter_number:5,externalId:205,id:205,text:`अर्जुन उवाच

संन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि।

यच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्िचतम्।।5.1।।
 `,title:"Verse 205",verse_number:1,verse_order:205,transliteration:`arjuna uvācha
sannyāsaṁ karmaṇāṁ kṛiṣhṇa punar yogaṁ cha śhansasi
yach chhreya etayor ekaṁ tan me brūhi su-niśhchitam

`,word_meanings:`arjunaḥ uvācha—Arjun said; sanyāsam—renunciation; karmaṇām—of actions; kṛiṣhṇa—Shree Krishna; punaḥ—again; yogam—about karm yog; cha—also; śhansasi—you praise; yat—which; śhreyaḥ—more beneficial; etayoḥ—of the two; ekam—one; tat—that; me—unto me; brūhi—please tell; su-niśhchitam—conclusively

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S01.mp3"},{chapter_id:5,chapter_number:5,externalId:206,id:206,text:`श्री भगवानुवाच

संन्यासः कर्मयोगश्च निःश्रेयसकरावुभौ।

तयोस्तु कर्मसंन्यासात्कर्मयोगो विशिष्यते।।5.2।।
 `,title:"Verse 206",verse_number:2,verse_order:206,transliteration:`śhrī bhagavān uvācha
sannyāsaḥ karma-yogaśh cha niḥśhreyasa-karāvubhau
tayos tu karma-sannyāsāt karma-yogo viśhiṣhyate

`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; sanyāsaḥ—renunciation; karma-yogaḥ—working in devotion; cha—and; niḥśhreyasa-karau—lead to the supreme goal; ubhau—both; tayoḥ—of the two; tu—but; karma-sanyāsāt—renunciation of actions; karma-yogaḥ—working in devotion; viśhiṣhyate—is superior

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S02.mp3"},{chapter_id:5,chapter_number:5,externalId:207,id:207,text:`ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति।

निर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते।।5.3।।
 `,title:"Verse 207",verse_number:3,verse_order:207,transliteration:`jñeyaḥ sa nitya-sannyāsī yo na dveṣhṭi na kāṅkṣhati
nirdvandvo hi mahā-bāho sukhaṁ bandhāt pramuchyate

`,word_meanings:`jñeyaḥ—should be considered; saḥ—that person; nitya—always; sanyāsī—practising renunciation; yaḥ—who; na—never; dveṣhṭi—hate; na—nor; kāṅkṣhati—desire; nirdvandvaḥ—free from all dualities; hi—certainly; mahā-bāho—mighty-armed one; sukham—easily; bandhāt—from bondage; pramuchyate—is liberated

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S03.mp3"},{chapter_id:5,chapter_number:5,externalId:208,id:208,text:`सांख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः।

एकमप्यास्थितः सम्यगुभयोर्विन्दते फलम्।।5.4।।
 `,title:"Verse 208",verse_number:4,verse_order:208,transliteration:`sānkhya-yogau pṛithag bālāḥ pravadanti na paṇḍitāḥ
ekamapyāsthitaḥ samyag ubhayor vindate phalam

`,word_meanings:`sānkhya—renunciation of actions; yogau—karm yog; pṛithak—different; bālāḥ—the ignorant; pravadanti—say; na—never; paṇḍitāḥ—the learned; ekam—in one; api—even; āsthitaḥ—being situated; samyak—completely; ubhayoḥ—of both; vindate—achieve; phalam—the result

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S04.mp3"},{chapter_id:5,chapter_number:5,externalId:209,id:209,text:`यत्सांख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते।

एकं सांख्यं च योगं च यः पश्यति स पश्यति।।5.5।।
 `,title:"Verse 209",verse_number:5,verse_order:209,transliteration:`
yat sānkhyaiḥ prāpyate sthānaṁ tad yogair api gamyate
ekaṁ sānkhyaṁ cha yogaṁ cha yaḥ paśhyati sa paśhyati

`,word_meanings:`yat—what; sānkhyaiḥ—by means of karm sanyās; prāpyate—is attained; sthānam—place; tat—that; yogaiḥ—by working in devotion; api—also; gamyate—is attained; ekam—one; sānkhyam—renunciation of actions; cha—and; yogam—karm yog; cha—and; yaḥ—who; paśhyati—sees; saḥ—that person; paśhyati—actually sees

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S05.mp3"},{chapter_id:5,chapter_number:5,externalId:210,id:210,text:`संन्यासस्तु महाबाहो दुःखमाप्तुमयोगतः।

योगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति।।5.6।।
 `,title:"Verse 210",verse_number:6,verse_order:210,transliteration:`sannyāsas tu mahā-bāho duḥkham āptum ayogataḥ
yoga-yukto munir brahma na chireṇādhigachchhati

`,word_meanings:`sanyāsaḥ—renunciation; tu—but; mahā-bāho—mighty-armed one; duḥkham—distress; āptum—attains; ayogataḥ—without karm yog; yoga-yuktaḥ—one who is adept in karm yog; muniḥ—a sage; brahma—Brahman; na chireṇa—quickly; adhigachchhati—goes

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S06.mp3"},{chapter_id:5,chapter_number:5,externalId:211,id:211,text:`योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः।

सर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते।।5.7।।
 `,title:"Verse 211",verse_number:7,verse_order:211,transliteration:`yoga-yukto viśhuddhātmā vijitātmā jitendriyaḥ
sarva-bhūtātma-bhūtātmā kurvann api na lipyate

`,word_meanings:`yoga-yuktaḥ—united in consciousness with God; viśhuddha-ātmā—one with purified intellect; vijita-ātmā—one who has conquered the mind; jita-indriyaḥ—having conquered the senses; sarva-bhūta-ātma-bhūta-ātmā—one who sees the Soul of all souls in every living being; kurvan—performing; api—although; na—never; lipyate—entangled
`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S07.mp3"},{chapter_id:5,chapter_number:5,externalId:212,id:212,text:`नैव किंचित्करोमीति युक्तो मन्येत तत्त्ववित्।

पश्यन् श्रृणवन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपन् श्वसन्।।5.8।।
 `,title:"Verse 212",verse_number:8,verse_order:212,transliteration:`naiva kiñchit karomīti yukto manyeta tattva-vit
paśhyañ śhṛiṇvan spṛiśhañjighrann aśhnangachchhan svapañśhvasan
 pralapan visṛijan gṛihṇann unmiṣhan nimiṣhann api
indriyāṇīndriyārtheṣhu vartanta iti dhārayan
`,word_meanings:`na—not; eva—certainly; kiñchit—anything; karomi—I do; iti—thus; yuktaḥ—steadfast in karm yog; manyeta—thinks; tattva-vit—one who knows the truth; paśhyan—seeing; śhṛiṇvan—hearing; spṛiśhan—touching; jighran—smelling; aśhnan—eating; gachchhan—moving; svapan—sleeping; śhvasan—breathing;
 pralapan—talking; visṛijan—giving up; gṛihṇan—accepting; unmiṣhan—opening (the eyes); nimiṣhan—closing (the eyes); api—although; indriyāṇi—the senses; indriya-artheṣhu—in sense-objects; vartante—moving; iti—thus; dhārayan—convinced
`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S08.mp3"},{chapter_id:5,chapter_number:5,externalId:213,id:213,text:`प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि।

इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्।।5.9।।
 `,title:"Verse 213",verse_number:9,verse_order:213,transliteration:"pralapan visṛjan gṛhṇann unmiṣan nimiṣann api indriyāṇīndriyārtheṣu vartanta iti dhārayan",word_meanings:"pralapan—by talking; visṛjan—by giving up; gṛhṇan—by accepting; unmiṣan—opening; nimiṣan—closing; api—in spite of; indriyāṇi—the senses; indriya-artheṣu—in sense gratification;   vartante—let    them be so engaged; iti—thus;   dhārayan—considering.",Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S09.mp3"},{chapter_id:5,chapter_number:5,externalId:214,id:214,text:`ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।

लिप्यते न स पापेन पद्मपत्रमिवाम्भसा।।5.10।।
 `,title:"Verse 214",verse_number:10,verse_order:214,transliteration:`brahmaṇyādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ
lipyate na sa pāpena padma-patram ivāmbhasā

`,word_meanings:`brahmaṇi—to God; ādhāya—dedicating; karmāṇi—all actions; saṅgam—attachment; tyaktvā—abandoning; karoti—performs; yaḥ—who; lipyate—is affected; na—never; saḥ—that person; pāpena—by sin; padma-patram—a lotus leaf; iva—like; ambhasā—by water

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S10.mp3"},{chapter_id:5,chapter_number:5,externalId:215,id:215,text:`कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि।

योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वाऽऽत्मशुद्धये।।5.11।।
 `,title:"Verse 215",verse_number:11,verse_order:215,transliteration:`kāyena manasā buddhyā kevalair indriyair api
yoginaḥ karma kurvanti saṅgaṁ tyaktvātma-śhuddhaye

`,word_meanings:`kāyena—with the body; manasā—with the mind; buddhyā—with the intellect; kevalaiḥ—only; indriyaiḥ—with the senses; api—even; yoginaḥ—the yogis; karma—actions; kurvanti—perform; saṅgam—attachment; tyaktvā—giving up; ātma—of the self; śhuddhaye—for the purification

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S11.mp3"},{chapter_id:5,chapter_number:5,externalId:216,id:216,text:`युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्।

अयुक्तः कामकारेण फले सक्तो निबध्यते।।5.12।।
 `,title:"Verse 216",verse_number:12,verse_order:216,transliteration:`yuktaḥ karma-phalaṁ tyaktvā śhāntim āpnoti naiṣhṭhikīm
ayuktaḥ kāma-kāreṇa phale sakto nibadhyate

`,word_meanings:`yuktaḥ—one who is united in consciousness with God; karma-phalam—the results of all activities; tyaktvā—giving up; śhāntim—peace; āpnoti—attains; naiṣhṭhikīm—everlasting; ayuktaḥ—one who is not united with God in consciousness; kāma-kāreṇa—impelled by desires; phale—in the result; saktaḥ—attached; nibadhyate—becomes entangled

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S12.mp3"},{chapter_id:5,chapter_number:5,externalId:217,id:217,text:`सर्वकर्माणि मनसा संन्यस्यास्ते सुखं वशी।

नवद्वारे पुरे देही नैव कुर्वन्न कारयन्।।5.13।।
 `,title:"Verse 217",verse_number:13,verse_order:217,transliteration:`sarva-karmāṇi manasā sannyasyāste sukhaṁ vaśhī
nava-dvāre pure dehī naiva kurvan na kārayan

`,word_meanings:`sarva—all; karmāṇi—activities; manasā—by the mind; sannyasya—having renounced; āste—remains; sukham—happily; vaśhī—the self-controlled; nava-dvāre—of nine gates; pure—in the city; dehī—the embodied being; na—never; eva—certainly; kurvan—doing anything; na—not; kārayan—causing to be done

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S13.mp3"},{chapter_id:5,chapter_number:5,externalId:218,id:218,text:`न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः।

न कर्मफलसंयोगं स्वभावस्तु प्रवर्तते।।5.14।।
 `,title:"Verse 218",verse_number:14,verse_order:218,transliteration:`na kartṛitvaṁ na karmāṇi lokasya sṛijati prabhuḥ
na karma-phala-saṅyogaṁ svabhāvas tu pravartate

`,word_meanings:`na—neither; kartṛitvam—sense of doership; na—nor; karmāṇi—actions; lokasya—of the people; sṛijati—creates; prabhuḥ—God; na—nor; karma-phala—fruits of actions; sanyogam—connection; svabhāvaḥ—one’s nature; tu—but; pravartate—is enacted

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S14.mp3"},{chapter_id:5,chapter_number:5,externalId:219,id:219,text:`नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः।

अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः।।5.15।।
 `,title:"Verse 219",verse_number:15,verse_order:219,transliteration:`nādatte kasyachit pāpaṁ na chaiva sukṛitaṁ vibhuḥ
ajñānenāvṛitaṁ jñānaṁ tena muhyanti jantavaḥ

`,word_meanings:`na—not; ādatte—accepts; kasyachit—anyone’s; pāpam—sin; na—not; cha—and; eva—certainly; su-kṛitam—virtuous deeds; vibhuḥ—the omnipresent God; ajñānena—by ignorance; āvṛitam—covered; jñānam—knowledge; tena—by that; muhyanti—are deluded; jantavaḥ—the living entities

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S15.mp3"},{chapter_id:5,chapter_number:5,externalId:220,id:220,text:`ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः।

तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम्।।5.16।।
 `,title:"Verse 220",verse_number:16,verse_order:220,transliteration:`jñānena tu tad ajñānaṁ yeṣhāṁ nāśhitam ātmanaḥ
teṣhām āditya-vaj jñānaṁ prakāśhayati tat param

`,word_meanings:`jñānena—by divine knowledge; tu—but; tat—that; ajñānam—ignorance; yeṣhām—whose; nāśhitam—has been destroyed; ātmanaḥ—of the self; teṣhām—their; āditya-vat—like the sun; jñānam—knowledge; prakāśhayati—illumines; tat—that; param—Supreme Entity

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S16.mp3"},{chapter_id:5,chapter_number:5,externalId:221,id:221,text:`तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः।

गच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः।।5.17।।
 `,title:"Verse 221",verse_number:17,verse_order:221,transliteration:`tad-buddhayas tad-ātmānas tan-niṣhṭhās tat-parāyaṇāḥ
gachchhantyapunar-āvṛittiṁ jñāna-nirdhūta-kalmaṣhāḥ

`,word_meanings:`tat-buddhayaḥ—those whose intellect is directed toward God; tat-ātmānaḥ—those whose heart (mind and intellect) is solely absorbed in God; tat-niṣhṭhāḥ—those whose intellect has firm faith in God; tat-parāyaṇāḥ—those who strive after God as the supreme goal and refuge; gachchhanti—go; apunaḥ-āvṛittim—not returning; jñāna—by knowledge; nirdhūta—dispelled; kalmaṣhāḥ—sins

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S17.mp3"},{chapter_id:5,chapter_number:5,externalId:222,id:222,text:`विद्याविनयसंपन्ने ब्राह्मणे गवि हस्तिनि।

शुनि चैव श्वपाके च पण्डिताः समदर्शिनः।।5.18।।
 `,title:"Verse 222",verse_number:18,verse_order:222,transliteration:`vidyā-vinaya-sampanne brāhmaṇe gavi hastini
śhuni chaiva śhva-pāke cha paṇḍitāḥ sama-darśhinaḥ

`,word_meanings:`vidyā—divine knowledge; vinaya—humbleness; sampanne—equipped with; brāhmaṇe—a Brahmin; gavi—a cow; hastini—an elephant; śhuni—a dog; cha—and; eva—certainly; śhva-pāke—a dog-eater; cha—and; paṇḍitāḥ—the learned; sama-darśhinaḥ—see with equal vision

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S18.mp3"},{chapter_id:5,chapter_number:5,externalId:223,id:223,text:`इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः।

निर्दोषं हि समं ब्रह्म तस्माद्ब्रह्मणि ते स्थिताः।।5.19।।
 `,title:"Verse 223",verse_number:19,verse_order:223,transliteration:`ihaiva tair jitaḥ sargo yeṣhāṁ sāmye sthitaṁ manaḥ
nirdoṣhaṁ hi samaṁ brahma tasmād brahmaṇi te sthitāḥ

`,word_meanings:`iha eva—in this very life; taiḥ—by them; jitaḥ—conquer; sargaḥ—the creation; yeṣhām—whose; sāmye—in equanimity; sthitam—situated; manaḥ—mind; nirdoṣham—flawless; hi—certainly; samam—in equality; brahma—God; tasmāt—therefore; brahmaṇi—in the Absolute Truth; te—they; sthitāḥ—are seated

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S19.mp3"},{chapter_id:5,chapter_number:5,externalId:224,id:224,text:`न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम्।

स्थिरबुद्धिरसम्मूढो ब्रह्मविद्ब्रह्मणि स्थितः।।5.20।।
 `,title:"Verse 224",verse_number:20,verse_order:224,transliteration:`na prahṛiṣhyet priyaṁ prāpya nodvijet prāpya chāpriyam
sthira-buddhir asammūḍho brahma-vid brahmaṇi sthitaḥ

`,word_meanings:`na—neither; prahṛiṣhyet—rejoice; priyam—the pleasant; prāpya—obtaining; na—nor; udvijet—become disturbed; prāpya—attaining; cha—also; apriyam—the unpleasant; sthira-buddhiḥ—steady intellect; asammūḍhaḥ—firmly situated; brahma-vit—having a firm understanding of divine knowledge; brahmaṇi—established in God; sthitaḥ—situated

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S20.mp3"},{chapter_id:5,chapter_number:5,externalId:225,id:225,text:`बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम्।

स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते।।5.21।।
 `,title:"Verse 225",verse_number:21,verse_order:225,transliteration:`bāhya-sparśheṣhvasaktātmā vindatyātmani yat sukham
sa brahma-yoga-yuktātmā sukham akṣhayam aśhnute

`,word_meanings:`bāhya-sparśheṣhu—external sense pleasure; asakta-ātmā—those who are unattached; vindati—find; ātmani—in the self; yat—which; sukham—bliss; saḥ—that person; brahma-yoga yukta-ātmā—those who are united with God through yog; sukham—happiness; akṣhayam—unlimited; aśhnute—experiences

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S21.mp3"},{chapter_id:5,chapter_number:5,externalId:226,id:226,text:`ये हि संस्पर्शजा भोगा दुःखयोनय एव ते।

आद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः।।5.22।।
 `,title:"Verse 226",verse_number:22,verse_order:226,transliteration:`ye hi sansparśha-jā bhogā duḥkha-yonaya eva te
ādyantavantaḥ kaunteya na teṣhu ramate budhaḥ

`,word_meanings:`ye—which; hi—verily; sansparśha-jāḥ—born of contact with the sense objects; bhogāḥ—pleasures; duḥkha—misery; yonayaḥ—source of; eva—verily; te—they are; ādya-antavantaḥ—having beginning and end; kaunteya—Arjun, the son of Kunti; na—never; teṣhu—in those; ramate—takes delight; budhaḥ—the wise

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S22.mp3"},{chapter_id:5,chapter_number:5,externalId:227,id:227,text:`शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्।

कामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः।।5.23।।
 `,title:"Verse 227",verse_number:23,verse_order:227,transliteration:`śhaknotīhaiva yaḥ soḍhuṁ prāk śharīra-vimokṣhaṇāt
kāma-krodhodbhavaṁ vegaṁ sa yuktaḥ sa sukhī naraḥ

`,word_meanings:`śhaknoti—is able; iha eva—in the present body; yaḥ—who; soḍhum—to withstand; prāk—before; śharīra—the body; vimokṣhaṇāt—giving up; kāma—desire; krodha—anger; udbhavam—generated from; vegam—forces; saḥ—that person; yuktaḥ—yogi; saḥ—that person; sukhī—happy; naraḥ—person

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S23.mp3"},{chapter_id:5,chapter_number:5,externalId:228,id:228,text:`योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः।

स योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति।।5.24।।
 `,title:"Verse 228",verse_number:24,verse_order:228,transliteration:`yo 'ntaḥ-sukho 'ntar-ārāmas tathāntar-jyotir eva yaḥ
sa yogī brahma-nirvāṇaṁ brahma-bhūto 'dhigachchhati

`,word_meanings:`yaḥ—who; antaḥ-sukhaḥ—happy within the self; antaḥ-ārāmaḥ—enjoying within the self; tathā; antaḥ-jyotiḥ—illumined by the inner light; eva—certainly; yaḥ—who; saḥ; yogī—yogi; brahma-nirvāṇam—liberation from material existence; brahmabhūtaḥ— united with the Lord; adhigachchhati—attains

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S24.mp3"},{chapter_id:5,chapter_number:5,externalId:229,id:229,text:`लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः।

छिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः।।5.25।।
 `,title:"Verse 229",verse_number:25,verse_order:229,transliteration:`labhante brahma-nirvāṇam ṛiṣhayaḥ kṣhīṇa-kalmaṣhāḥ
chhinna-dvaidhā yatātmānaḥ sarva-bhūta-hite ratāḥ

`,word_meanings:`labhante—achieve; brahma-nirvāṇam—liberation from material existence; ṛiṣhayaḥ—holy persons; kṣhīṇa-kalmaṣhāḥ—whose sins have been purged; chhinna—annihilated; dvaidhāḥ—doubts; yata-ātmānaḥ—whose minds are disciplined; sarva-bhūta—for all living entities; hite—in welfare work; ratāḥ—rejoice

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S25.mp3"},{chapter_id:5,chapter_number:5,externalId:230,id:230,text:`कामक्रोधवियुक्तानां यतीनां यतचेतसाम्।

अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम्।।5.26।।
 `,title:"Verse 230",verse_number:26,verse_order:230,transliteration:`kāma-krodha-viyuktānāṁ yatīnāṁ yata-chetasām
abhito brahma-nirvāṇaṁ vartate viditātmanām

`,word_meanings:`kāma—desires; krodha—anger; vimuktānām—of those who are liberated; yatīnām—of the saintly persons; yata-chetasām—those self-realized persons who have subdued their mind; abhitaḥ—from every side; brahma—spiritual; nirvāṇam—liberation from material existence; vartate—exists; vidita-ātmanām—of those who are self-realized

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S26.mp3"},{chapter_id:5,chapter_number:5,externalId:231,id:231,text:`स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः।

प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ।।5.27।।
 `,title:"Verse 231",verse_number:27,verse_order:231,transliteration:`sparśhān kṛitvā bahir bāhyānśh chakṣhuśh chaivāntare bhruvoḥ
prāṇāpānau samau kṛitvā nāsābhyantara-chāriṇau
 yatendriya-mano-buddhir munir mokṣha-parāyaṇaḥ
vigatechchhā-bhaya-krodho yaḥ sadā mukta eva saḥ
`,word_meanings:`sparśhān—contacts (through senses); kṛitvā—keeping; bahiḥ—outside; bāhyān—external; chakṣhuḥ—eyes; cha—and; eva—certainly; antare—between; bhruvoḥ—of the eyebrows; prāṇa-apānau—the outgoing and incoming breaths; samau—equal; kṛitvā—keeping; nāsa-abhyantara—within the nostrils; chāriṇau—moving; 
 yata—controlled; indriya—senses; manaḥ—mind; buddhiḥ—intellect; muniḥ—the sage; mokṣha—liberation; parāyaṇaḥ—dedicated; vigata—free; ichchhā—desires; bhaya—fear; krodhaḥ—anger; yaḥ—who; sadā—always; muktaḥ—liberated; eva—certainly; saḥ—that person
`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S27.mp3"},{chapter_id:5,chapter_number:5,externalId:232,id:232,text:`यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः।

विगतेच्छाभयक्रोधो यः सदा मुक्त एव सः।।5.28।।
 `,title:"Verse 232",verse_number:28,verse_order:232,transliteration:"yatendriya-mano-buddhir  munir   mokṣa-parāyaṇaḥ vigatecchā-bhaya-krodho yaḥ sadā    mukta   eva saḥ",word_meanings:"yata—controlled;   indriya—senses; manaḥ—mind; buddhiḥ—intelligence;   muniḥ—the   transcendentalist;  mokṣa—liberation;   parāyaṇaḥ—being so  destined;   vigata—discarded;   icchā—wishes;   bhaya—fear; krodhaḥ—anger;  yaḥ—one who;    sadā—always;    muktaḥ—liberated;   eva—certainly;  saḥ—he  is",Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S28.mp3"},{chapter_id:5,chapter_number:5,externalId:233,id:233,text:`भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्।

सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति।।5.29।।
 `,title:"Verse 233",verse_number:29,verse_order:233,transliteration:`bhoktāraṁ yajña-tapasāṁ sarva-loka-maheśhvaram
suhṛidaṁ sarva-bhūtānāṁ jñātvā māṁ śhāntim ṛichchhati

`,word_meanings:`bhoktāram—the enjoyer; yajña—sacrifices; tapasām—austerities; sarva-loka—of all worlds; mahā-īśhvaram—the Supreme Lord; su-hṛidam—the selfless Friend; sarva—of all; bhūtānām—the living beings; jñātvā—having realized; mām—me (Lord Krishna); śhāntim—peace; ṛichchhati—attains

`,Play:"https://testapi1test.blob.core.windows.net/test/5/Ch5S29.mp3"},{chapter_id:6,chapter_number:6,externalId:234,id:234,text:`श्री भगवानुवाच

अनाश्रितः कर्मफलं कार्यं कर्म करोति यः।

स संन्यासी च योगी च न निरग्निर्न चाक्रियः।।6.1।।
 `,title:"Verse 234",verse_number:1,verse_order:234,transliteration:`śhrī bhagavān uvācha
anāśhritaḥ karma-phalaṁ kāryaṁ karma karoti yaḥ
sa sannyāsī cha yogī cha na niragnir na chākriyaḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; anāśhritaḥ—not desiring; karma-phalam—results of actions; kāryam—obligatory; karma—work; karoti—perform; yaḥ—one who; saḥ—that person; sanyāsī—in the renounced order; cha—and; yogī—yogi; cha—and; na—not; niḥ—without; agniḥ—fire; na—not; cha—also; akriyaḥ—without activity
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S01.mp3"},{chapter_id:6,chapter_number:6,externalId:235,id:235,text:`यं संन्यासमिति प्राहुर्योगं तं विद्धि पाण्डव।

न ह्यसंन्यस्तसङ्कल्पो योगी भवति कश्चन।।6.2।।
 `,title:"Verse 235",verse_number:2,verse_order:235,transliteration:`yaṁ sannyāsam iti prāhur yogaṁ taṁ viddhi pāṇḍava
na hyasannyasta-saṅkalpo yogī bhavati kaśhchana
`,word_meanings:`yam—what; sanyāsam—renunciation; iti—thus; prāhuḥ—they say; yogam—yog; tam—that; viddhi—know; pāṇḍava—Arjun, the son of Pandu; na—not; hi—certainly; asannyasta—without giving up; saṅkalpaḥ—desire; yogī—a yogi; bhavati—becomes; kaśhchana—anyone
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S02.mp3"},{chapter_id:6,chapter_number:6,externalId:236,id:236,text:`आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते।

योगारूढस्य तस्यैव शमः कारणमुच्यते।।6.3।।
 `,title:"Verse 236",verse_number:3,verse_order:236,transliteration:`ārurukṣhor muner yogaṁ karma kāraṇam uchyate
yogārūḍhasya tasyaiva śhamaḥ kāraṇam uchyate
`,word_meanings:`ārurukṣhoḥ—a beginner; muneḥ—of a sage; yogam—Yog; karma—working without attachment; kāraṇam—the cause; uchyate—is said; yoga ārūḍhasya—of those who are elevated in Yog; tasya—their; eva—certainly; śhamaḥ—meditation; kāraṇam—the cause; uchyate—is said
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S03.mp3"},{chapter_id:6,chapter_number:6,externalId:237,id:237,text:`यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते।

सर्वसङ्कल्पसंन्यासी योगारूढस्तदोच्यते।।6.4।।
 `,title:"Verse 237",verse_number:4,verse_order:237,transliteration:`yadā hi nendriyārtheṣhu na karmasv-anuṣhajjate
sarva-saṅkalpa-sannyāsī yogārūḍhas tadochyate
`,word_meanings:`yadā—when; hi—certainly; na—not; indriya-artheṣhu—for sense-objects; na—not; karmasu—to actions; anuṣhajjate—is attachment; sarva-saṅkalpa—all desires for the fruits of actions; sanyāsī—renouncer; yoga-ārūḍhaḥ—elevated in the science of Yog; tadā—at that time; uchyate—is said
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S04.mp3"},{chapter_id:6,chapter_number:6,externalId:238,id:238,text:`उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत्।

आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।।6.5।।
 `,title:"Verse 238",verse_number:5,verse_order:238,transliteration:`uddhared ātmanātmānaṁ nātmānam avasādayet
ātmaiva hyātmano bandhur ātmaiva ripur ātmanaḥ
`,word_meanings:`uddharet—elevate; ātmanā—through the mind; ātmānam—the self; na—not; ātmānam—the self; avasādayet—degrade; ātmā—the mind; eva—certainly; hi—indeed; ātmanaḥ—of the self; bandhuḥ—friend; ātmā—the mind; eva—certainly; ripuḥ—enemy; ātmanaḥ—of the self
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S05.mp3"},{chapter_id:6,chapter_number:6,externalId:239,id:239,text:`बन्धुरात्माऽऽत्मनस्तस्य येनात्मैवात्मना जितः।

अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्।।6.6।।
 `,title:"Verse 239",verse_number:6,verse_order:239,transliteration:`bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ
anātmanas tu śhatrutve vartetātmaiva śhatru-vat
`,word_meanings:`bandhuḥ—friend; ātmā—the mind; ātmanaḥ—for the person; tasya—of him; yena—by whom; ātmā—the mind; eva—certainly; ātmanā—for the person; jitaḥ—conquered; anātmanaḥ—of those with unconquered mind; tu—but; śhatrutve—for an enemy; varteta—remains; ātmā—the mind; eva—as; śhatru-vat—like an enemy
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S06.mp3"},{chapter_id:6,chapter_number:6,externalId:240,id:240,text:`जितात्मनः प्रशान्तस्य परमात्मा समाहितः।

शीतोष्णसुखदुःखेषु तथा मानापमानयोः।।6.7।।
 `,title:"Verse 240",verse_number:7,verse_order:240,transliteration:`jitātmanaḥ praśhāntasya paramātmā samāhitaḥ
śhītoṣhṇa-sukha-duḥkheṣhu tathā mānāpamānayoḥ
`,word_meanings:`jita-ātmanaḥ—one who has conquered one’s mind; praśhāntasya—of the peaceful; parama-ātmā—God; samāhitaḥ—steadfast; śhīta—in cold; uṣhṇa—heat; sukha—happiness; duḥkheṣhu—and distress; tathā—also; māna—in honor; apamānayoḥ—and dishonor
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S07.mp3"},{chapter_id:6,chapter_number:6,externalId:241,id:241,text:`ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः।

युक्त इत्युच्यते योगी समलोष्टाश्मकाञ्चनः।।6.8।।
 `,title:"Verse 241",verse_number:8,verse_order:241,transliteration:`jñāna-vijñāna-tṛiptātmā kūṭa-stho vijitendriyaḥ
yukta ityuchyate yogī sama-loṣhṭāśhma-kāñchanaḥ
`,word_meanings:`jñāna—knowledge; vijñāna—realized knowledge, wisdom from within; tṛipta ātmā—one fully satisfied; kūṭa-sthaḥ—undisturbed; vijita-indriyaḥ—one who has conquered the senses; yuktaḥ—one who is in constant communion with the Supreme; iti—thus; uchyate—is said; yogī—a yogi; sama—looks equally; loṣhṭra—pebbles; aśhma—stone; kāñchanaḥ—gold
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S08.mp3"},{chapter_id:6,chapter_number:6,externalId:242,id:242,text:`सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु।

साधुष्वपि च पापेषु समबुद्धिर्विशिष्यते।।6.9।।
 `,title:"Verse 242",verse_number:9,verse_order:242,transliteration:`suhṛin-mitrāryudāsīna-madhyastha-dveṣhya-bandhuṣhu
sādhuṣhvapi cha pāpeṣhu sama-buddhir viśhiṣhyate
`,word_meanings:`su-hṛit—toward the well-wishers; mitra—friends; ari—enemies; udāsīna—neutral persons; madhya-stha—mediators; dveṣhya—the envious; bandhuṣhu—relatives; sādhuṣhu—pious; api—as well as; cha—and; pāpeṣhu—the sinners; sama-buddhiḥ—of impartial intellect; viśhiṣhyate—is distinguished
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S09.mp3"},{chapter_id:6,chapter_number:6,externalId:243,id:243,text:`योगी युञ्जीत सततमात्मानं रहसि स्थितः।

एकाकी यतचित्तात्मा निराशीरपरिग्रहः।।6.10।।
 `,title:"Verse 243",verse_number:10,verse_order:243,transliteration:`yogī yuñjīta satatam ātmānaṁ rahasi sthitaḥ
ekākī yata-chittātmā nirāśhīr aparigrahaḥ
`,word_meanings:`yogī—a yogi; yuñjīta—should remain engaged in meditation; satatam—constantly; ātmānam—self; rahasi—in seclusion; sthitaḥ—remaining; ekākī—alone; yata-chitta-ātmā—with a controlled mind and body; nirāśhīḥ—free from desires; aparigrahaḥ—free from desires for possessions for enjoyment
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S10.mp3"},{chapter_id:6,chapter_number:6,externalId:244,id:244,text:`शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः।

नात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम्।।6.11।।
 `,title:"Verse 244",verse_number:11,verse_order:244,transliteration:`śhuchau deśhe pratiṣhṭhāpya sthiram āsanam ātmanaḥ
nātyuchchhritaṁ nāti-nīchaṁ chailājina-kuśhottaram
`,word_meanings:`śhuchau—in a clean; deśhe—place; pratiṣhṭhāpya—having established; sthiram—steadfast; āsanam—seat; ātmanaḥ—his own; na—not; ati—too; uchchhritam—high; na—not; ati—too; nīcham—low; chaila—cloth; ajina—a deerskin; kuśha—kuśh grass; uttaram—one over the other
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S11.mp3"},{chapter_id:6,chapter_number:6,externalId:245,id:245,text:`तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः।

उपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये।।6.12।।
 `,title:"Verse 245",verse_number:12,verse_order:245,transliteration:`tatraikāgraṁ manaḥ kṛitvā yata-chittendriya-kriyaḥ
upaviśhyāsane yuñjyād yogam ātma-viśhuddhaye
`,word_meanings:`tatra—there; eka-agram—one-pointed; manaḥ—mind; kṛitvā—having made; yata-chitta—controlling the mind; indriya—senses; kriyaḥ—activities; upaviśhya—being seated; āsane—on the seat; yuñjyāt yogam—should strive to practice yog; ātma viśhuddhaye—for purification of the mind; 
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S12.mp3"},{chapter_id:6,chapter_number:6,externalId:246,id:246,text:`समं कायशिरोग्रीवं धारयन्नचलं स्थिरः।

संप्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन्।।6.13।।
 `,title:"Verse 246",verse_number:13,verse_order:246,transliteration:`samaṁ kāya-śhiro-grīvaṁ dhārayann achalaṁ sthiraḥ
samprekṣhya nāsikāgraṁ svaṁ diśhaśh chānavalokayan
`,word_meanings:`samam—straight; kāya—body; śhiraḥ—head; grīvam—neck; dhārayan—holding; achalam—unmoving; sthiraḥ—still; samprekṣhya—gazing; nāsika-agram—at the tip of the nose; svam—own; diśhaḥ—directions; cha—and; anavalokayan—not looking
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S13.mp3"},{chapter_id:6,chapter_number:6,externalId:247,id:247,text:`प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः।

मनः संयम्य मच्चित्तो युक्त आसीत मत्परः।।6.14।।
 `,title:"Verse 247",verse_number:14,verse_order:247,transliteration:`praśhāntātmā vigata-bhīr brahmachāri-vrate sthitaḥ
manaḥ sanyamya mach-chitto yukta āsīta mat-paraḥ
`,word_meanings:`praśhānta—serene; ātmā—mind; vigata-bhīḥ—fearless; brahmachāri-vrate—in the vow of celibacy; sthitaḥ—situated; manaḥ—mind; sanyamya—having controlled; mat-chittaḥ—meditate on me (Shree Krishna); yuktaḥ—engaged; āsīta—should sit; mat-paraḥ—having me as the supreme goal
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S14.mp3"},{chapter_id:6,chapter_number:6,externalId:248,id:248,text:`युञ्जन्नेवं सदाऽऽत्मानं योगी नियतमानसः।

शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।।6.15।।
 `,title:"Verse 248",verse_number:15,verse_order:248,transliteration:`yuñjann evaṁ sadātmānaṁ yogī niyata-mānasaḥ
śhantiṁ nirvāṇa-paramāṁ mat-sansthām adhigachchhati
`,word_meanings:`yuñjan—keeping the mind absorbed in God; evam—thus; sadā—constantly; ātmānam—the mind; yogī—a yogi; niyata-mānasaḥ—one with a disciplined mind; śhāntim—peace; nirvāṇa—liberation from the material bondage; paramām—supreme; mat-sansthām—abides in me; adhigachchhati—attains
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S15.mp3"},{chapter_id:6,chapter_number:6,externalId:249,id:249,text:`नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः।

न चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन।।6.16।।
 `,title:"Verse 249",verse_number:16,verse_order:249,transliteration:`nātyaśhnatastu yogo ’sti na chaikāntam anaśhnataḥ
na chāti-svapna-śhīlasya jāgrato naiva chārjuna
`,word_meanings:`na—not; ati—too much; aśhnataḥ—of one who eats; tu—however; yogaḥ—Yog; asti—there is; na—not; cha—and; ekāntam—at all; anaśhnataḥ—abstaining from eating; na—not; cha—and; ati—too much; svapna-śhīlasya—of one who sleeps; jāgrataḥ—of one who does not sleep enough; na—not; eva—certainly; cha—and; arjuna—Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S16.mp3"},{chapter_id:6,chapter_number:6,externalId:250,id:250,text:`युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।

युक्तस्वप्नावबोधस्य योगो भवति दुःखहा।।6.17।।
 `,title:"Verse 250",verse_number:17,verse_order:250,transliteration:`yuktāhāra-vihārasya yukta-cheṣhṭasya karmasu
yukta-svapnāvabodhasya yogo bhavati duḥkha-hā
`,word_meanings:`yukta—moderate; āhāra—eating; vihārasya—recreation; yukta cheṣhṭasya karmasu—balanced in work; yukta—regulated; svapna-avabodhasya—sleep and wakefulness; yogaḥ—Yog; bhavati—becomes; duḥkha-hā—the slayer of sorrows
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S17.mp3"},{chapter_id:6,chapter_number:6,externalId:251,id:251,text:`यदा विनियतं चित्तमात्मन्येवावतिष्ठते।

निःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा।।6.18।।
 `,title:"Verse 251",verse_number:18,verse_order:251,transliteration:`yadā viniyataṁ chittam ātmanyevāvatiṣhṭhate
niḥspṛihaḥ sarva-kāmebhyo yukta ityuchyate tadā
`,word_meanings:`yadā—when; viniyatam—fully controlled; chittam—the mind; ātmani—of the self; eva—certainly; avatiṣhṭhate—stays; nispṛihaḥ—free from cravings: sarva; kāmebhyaḥ—for yearning of the senses; yuktaḥ—situated in perfect Yog; iti—thus; uchyate—is said; tadā—then
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S18.mp3"},{chapter_id:6,chapter_number:6,externalId:252,id:252,text:`यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता।

योगिनो यतचित्तस्य युञ्जतो योगमात्मनः।।6.19।।
 `,title:"Verse 252",verse_number:19,verse_order:252,transliteration:`yathā dīpo nivāta-stho neṅgate sopamā smṛitā
yogino yata-chittasya yuñjato yogam ātmanaḥ
`,word_meanings:`yathā—as; dīpaḥ—a lamp; nivāta-sthaḥ—in a windless place; na—does not; iṅgate—flickers; sā—this; upamā—analogy; smṛitā—is considered; yoginaḥ—of a yogi; yata-chittasya—whose mind is disciplined; yuñjataḥ—steadily practicing; yogam—in meditation; ātmanaḥ—on the Supreme
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S19.mp3"},{chapter_id:6,chapter_number:6,externalId:253,id:253,text:`यत्रोपरमते चित्तं निरुद्धं योगसेवया।

यत्र चैवात्मनाऽऽत्मानं पश्यन्नात्मनि तुष्यति।।6.20।।
 `,title:"Verse 253",verse_number:20,verse_order:253,transliteration:`yatroparamate chittaṁ niruddhaṁ yoga-sevayā
yatra chaivātmanātmānaṁ paśhyann ātmani tuṣhyati
`,word_meanings:`yatra—when; uparamate—rejoice inner joy; chittam—the mind; niruddham—restrained; yoga-sevayā—by the practice of yog; yatra—when; cha—and; eva—certainly; ātmanā—through the purified mind; ātmānam—the soul; paśhyan—behold; ātmani—in the self; tuṣhyati—is satisfied
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S20.mp3"},{chapter_id:6,chapter_number:6,externalId:254,id:254,text:`सुखमात्यन्तिकं यत्तद्बुद्धिग्राह्यमतीन्द्रियम्।

वेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः।।6.21।।
 `,title:"Verse 254",verse_number:21,verse_order:254,transliteration:`sukham ātyantikaṁ yat tad buddhi-grāhyam atīndriyam
vetti yatra na chaivāyaṁ sthitaśh chalati tattvataḥ
`,word_meanings:`sukham—happiness; ātyantikam—limitless; yat—which; tat—that; buddhi—by intellect; grāhyam—grasp; atīndriyam—transcending the senses; vetti—knows; yatra—wherein; na—never; cha—and; eva—certainly; ayam—he; sthitaḥ—situated; chalati—deviates; tattvataḥ—from the Eternal Truth
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S21.mp3"},{chapter_id:6,chapter_number:6,externalId:255,id:255,text:`यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः।

यस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते।।6.22।।
 `,title:"Verse 255",verse_number:22,verse_order:255,transliteration:`yaṁ labdhvā chāparaṁ lābhaṁ manyate nādhikaṁ tataḥ
yasmin sthito na duḥkhena guruṇāpi vichālyate
`,word_meanings:`yam—which; labdhvā—having gained; cha—and; aparam—any other; lābham—gain; manyate—considers; na—not; adhikam—greater; tataḥ—than that; yasmin—in which; sthitaḥ—being situated; na—never; duḥkhena—by sorrow; guruṇā—(by) the greatest; api—even; vichālyate—is shaken
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S22.mp3"},{chapter_id:6,chapter_number:6,externalId:256,id:256,text:`तं विद्याद् दुःखसंयोगवियोगं योगसंज्ञितम्।

स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा।।6.23।।
 `,title:"Verse 256",verse_number:23,verse_order:256,transliteration:`taṁ vidyād duḥkha-sanyoga-viyogaṁ yogasaṅjñitam
sa niśhchayena yoktavyo yogo ’nirviṇṇa-chetasā
`,word_meanings:`tam—that; vidyāt—you should know; duḥkha-sanyoga-viyogam—state of severance from union with misery; yoga-saṁjñitam—is known as yog; saḥ—that; niśhchayena—resolutely; yoktavyaḥ—should be practiced; yogaḥ—yog; anirviṇṇa-chetasā—with an undeviating mind
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S23.mp3"},{chapter_id:6,chapter_number:6,externalId:257,id:257,text:`सङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः।

मनसैवेन्द्रियग्रामं विनियम्य समन्ततः।।6.24।।
 `,title:"Verse 257",verse_number:24,verse_order:257,transliteration:`saṅkalpa-prabhavān kāmāns tyaktvā sarvān aśheṣhataḥ
manasaivendriya-grāmaṁ viniyamya samantataḥ
`,word_meanings:`saṅkalpa—a resolve; prabhavān—born of; kāmān—desires; tyaktvā—having abandoned; sarvān—all; aśheṣhataḥ—completely; manasā—through the mind; eva—certainly; indriya-grāmam—the group of senses; viniyamya—restraining; samantataḥ—from all sides;
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S24.mp3"},{chapter_id:6,chapter_number:6,externalId:258,id:258,text:`शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया।

आत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्।।6.25।।
 `,title:"Verse 258",verse_number:25,verse_order:258,transliteration:`śhanaiḥ śhanair uparamed buddhyā dhṛiti-gṛihītayā
ātma-sansthaṁ manaḥ kṛitvā na kiñchid api chintayet
`,word_meanings:`śhanaiḥ—gradually; śhanaiḥ—gradually; uparamet—attain peace; buddhyā—by intellect; dhṛiti-gṛihītayā—achieved through determination of resolve that is in accordance with scriptures; ātma-sanstham—fixed in God; manaḥ—mind; kṛitvā—having made; na—not; kiñchit—anything; api—even; chintayet—should think of
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S25.mp3"},{chapter_id:6,chapter_number:6,externalId:259,id:259,text:`यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।

ततस्ततो नियम्यैतदात्मन्येव वशं नयेत्।।6.26।।
 `,title:"Verse 259",verse_number:26,verse_order:259,transliteration:`yato yato niśhcharati manaśh chañchalam asthiram
tatas tato niyamyaitad ātmanyeva vaśhaṁ nayet
`,word_meanings:`yataḥ yataḥ—whenever and wherever; niśhcharati—wanders; manaḥ—the mind; chañchalam—restless; asthiram—unsteady; tataḥ tataḥ—from there; niyamya—having restrained; etat—this; ātmani—on God; eva—certainly; vaśham—control; nayet—should bring
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S26.mp3"},{chapter_id:6,chapter_number:6,externalId:260,id:260,text:`प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम्।

उपैति शान्तरजसं ब्रह्मभूतमकल्मषम्।।6.27।।
 `,title:"Verse 260",verse_number:27,verse_order:260,transliteration:`praśhānta-manasaṁ hyenaṁ yoginaṁ sukham uttamam
upaiti śhānta-rajasaṁ brahma-bhūtam akalmaṣham
`,word_meanings:`praśhānta—peaceful; manasam—mind; hi—certainly; enam—this; yoginam—yogi; sukham uttamam—the highest bliss; upaiti—attains; śhānta-rajasam—whose passions are subdued; brahma-bhūtam—endowed with God-realization; akalmaṣham—without sin
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S27.mp3"},{chapter_id:6,chapter_number:6,externalId:261,id:261,text:`युञ्जन्नेवं सदाऽऽत्मानं योगी विगतकल्मषः।

सुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते।।6.28।।
 `,title:"Verse 261",verse_number:28,verse_order:261,transliteration:`yuñjann evaṁ sadātmānaṁ yogī vigata-kalmaṣhaḥ
sukhena brahma-sansparśham atyantaṁ sukham aśhnute
`,word_meanings:`yuñjan—uniting (the self with God); evam—thus; sadā—always; ātmānam—the self; yogī—a yogi; vigata—freed from; kalmaṣhaḥ—sins; sukhena—easily; brahma-sansparśham—constantly in touch with the Supreme; atyantam—the highest; sukham—bliss; aśhnute—attains
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S28.mp3"},{chapter_id:6,chapter_number:6,externalId:262,id:262,text:`सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि।

ईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः।।6.29।।
 `,title:"Verse 262",verse_number:29,verse_order:262,transliteration:`sarva-bhūta-stham ātmānaṁ sarva-bhūtāni chātmani
īkṣhate yoga-yuktātmā sarvatra sama-darśhanaḥ
`,word_meanings:`sarva-bhūta-stham—situated in all living beings; ātmānam—Supreme Soul; sarva—all; bhūtāni—living beings; cha—and; ātmani—in God; īkṣhate—sees; yoga-yukta-ātmā—one united in consciousness with God; sarvatra—everywhere; sama-darśhanaḥ—equal vision
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S29.mp3"},{chapter_id:6,chapter_number:6,externalId:263,id:263,text:`यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।

तस्याहं न प्रणश्यामि स च मे न प्रणश्यति।।6.30।।
 `,title:"Verse 263",verse_number:30,verse_order:263,transliteration:`yo māṁ paśhyati sarvatra sarvaṁ cha mayi paśhyati
tasyāhaṁ na praṇaśhyāmi sa cha me na praṇaśhyati
`,word_meanings:`yaḥ—who; mām—me; paśhyati—see; sarvatra—everywhere; sarvam—everything; cha—and; mayi—in me; paśhyati—see; tasya—for him; aham—I; na—not; praṇaśhyāmi—lost; saḥ—that person; cha—and; me—to me; na—nor; praṇaśhyati—lost
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S30.mp3"},{chapter_id:6,chapter_number:6,externalId:264,id:264,text:`सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः।

सर्वथा वर्तमानोऽपि स योगी मयि वर्तते।।6.31।।
 `,title:"Verse 264",verse_number:31,verse_order:264,transliteration:`sarva-bhūta-sthitaṁ yo māṁ bhajatyekatvam āsthitaḥ
sarvathā vartamāno ’pi sa yogī mayi vartate
`,word_meanings:`sarva-bhūta-sthitam—situated in all beings; yaḥ—who; mām—me; bhajati—worships; ekatvam—in unity; āsthitaḥ—established; sarvathā—in all kinds of; varta-mānaḥ—remain; api—although; saḥ—he; yogī—a yogi; mayi—in me; vartate—dwells
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S31.mp3"},{chapter_id:6,chapter_number:6,externalId:265,id:265,text:`आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन।

सुखं वा यदि वा दुःखं सः योगी परमो मतः।।6.32।।
 `,title:"Verse 265",verse_number:32,verse_order:265,transliteration:`ātmaupamyena sarvatra samaṁ paśhyati yo ’rjuna
sukhaṁ vā yadi vā duḥkhaṁ sa yogī paramo mataḥ
`,word_meanings:`ātma-aupamyena—similar to oneself; sarvatra—everywhere; samam—equally; paśhyati—see; yaḥ—who; arjuna—Arjun; sukham—joy; vā—or; yadi—if; vā—or; duḥkham—sorrow; saḥ—such; yogī—a yogi; paramaḥ—highest; mataḥ—is considered
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S32.mp3"},{chapter_id:6,chapter_number:6,externalId:266,id:266,text:`अर्जुन उवाच

योऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन।

एतस्याहं न पश्यामि चञ्चलत्वात् स्थितिं स्थिराम्।।6.33।।
 `,title:"Verse 266",verse_number:33,verse_order:266,transliteration:`arjuna uvācha
yo ’yaṁ yogas tvayā proktaḥ sāmyena madhusūdana
etasyāhaṁ na paśhyāmi chañchalatvāt sthitiṁ sthirām
`,word_meanings:`arjunaḥ uvācha—Arjun said; yaḥ—which; ayam—this; yogaḥ—system of Yog; tvayā—by you; proktaḥ—described; sāmyena—by equanimity; madhu-sūdana—Shree Krishna, the killer of the demon named Madhu; etasya—of this; aham—I; na—do not; paśhyāmi—see; chañchalatvāt—due to restlessness; sthitim—situation; sthirām—steady
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S33.mp3"},{chapter_id:6,chapter_number:6,externalId:267,id:267,text:`चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम्।

तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम्।।6.34।।
 `,title:"Verse 267",verse_number:34,verse_order:267,transliteration:`chañchalaṁ hi manaḥ kṛiṣhṇa pramāthi balavad dṛiḍham
tasyāhaṁ nigrahaṁ manye vāyor iva su-duṣhkaram
`,word_meanings:`chañchalam—restless; hi—certainly; manaḥ—mind; kṛiṣhṇa—Shree Krishna; pramāthi—turbulent; bala-vat—strong; dṛiḍham—obstinate; tasya—its; aham—I; nigraham—control; manye—think; vāyoḥ—of the wind; iva—like; su-duṣhkaram—difficult to perform
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S34.mp3"},{chapter_id:6,chapter_number:6,externalId:268,id:268,text:`श्री भगवानुवाच

असंशयं महाबाहो मनो दुर्निग्रहं चलं।

अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।।6.35।।
 `,title:"Verse 268",verse_number:35,verse_order:268,transliteration:`śhrī bhagavān uvācha
asanśhayaṁ mahā-bāho mano durnigrahaṁ chalam
abhyāsena tu kaunteya vairāgyeṇa cha gṛihyate
`,word_meanings:`śhrī-bhagavān uvācha—Lord Krishna said; asanśhayam—undoubtedly; mahā-bāho—mighty-armed one; manaḥ—the mind; durnigraham—difficult to restrain; chalam—restless; abhyāsena—by practice; tu—but; kaunteya—Arjun, the son of Kunti; vairāgyeṇa—by detachment; cha—and; gṛihyate—can be controlled
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S35.mp3"},{chapter_id:6,chapter_number:6,externalId:269,id:269,text:`असंयतात्मना योगो दुष्प्राप इति मे मतिः।

वश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः।।6.36।।
 `,title:"Verse 269",verse_number:36,verse_order:269,transliteration:`asaṅyatātmanā yogo duṣhprāpa iti me matiḥ
vaśhyātmanā tu yatatā śhakyo ’vāptum upāyataḥ
`,word_meanings:`asanyata-ātmanā—one whose mind is unbridled; yogaḥ—Yog; duṣhprāpaḥ—difficult to attain; iti—thus; me—my; matiḥ—opinion; vaśhya-ātmanā—by one whose mind is controlled; tu—but; yatatā—one who strives; śhakyaḥ—possible; avāptum—to achieve; upāyataḥ—by right means
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S36.mp3"},{chapter_id:6,chapter_number:6,externalId:270,id:270,text:`अर्जुन उवाच

अयतिः श्रद्धयोपेतो योगाच्चलितमानसः।

अप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति।।6.37।।
 `,title:"Verse 270",verse_number:37,verse_order:270,transliteration:`arjuna uvācha
ayatiḥ śhraddhayopeto yogāch chalita-mānasaḥ
aprāpya yoga-sansiddhiṁ kāṅ gatiṁ kṛiṣhṇa gachchhati
`,word_meanings:`arjunaḥ uvācha—Arjun said; ayatiḥ—lax; śhraddhayā—with faith; upetaḥ—possessed; yogāt—from Yog; chalita-mānasaḥ—whose mind becomes deviated; aprāpya—failing to attain; yoga-sansiddhim—the highest perfection in yog; kām—which; gatim—destination; kṛiṣhṇa—Shree Krishna; gachchhati—goes
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S37.mp3"},{chapter_id:6,chapter_number:6,externalId:271,id:271,text:`कच्चिन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति।

अप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि।।6.38।।
 `,title:"Verse 271",verse_number:38,verse_order:271,transliteration:`kachchin nobhaya-vibhraṣhṭaśh chhinnābhram iva naśhyati
apratiṣhṭho mahā-bāho vimūḍho brahmaṇaḥ pathi
`,word_meanings:`kachchit—whether; na—not; ubhaya—both; vibhraṣhṭaḥ—deviated from; chhinna—broken; abhram—cloud; iva—like; naśhyati—perishes; apratiṣhṭhaḥ—without any support; mahā-bāho—mighty-armed Krishna; vimūḍhaḥ—bewildered; brahmaṇaḥ—of God-realization; pathi—one on the path
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S38.mp3"},{chapter_id:6,chapter_number:6,externalId:272,id:272,text:`एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः।

त्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते।।6.39।।
 `,title:"Verse 272",verse_number:39,verse_order:272,transliteration:`etan me sanśhayaṁ kṛiṣhṇa chhettum arhasyaśheṣhataḥ
tvad-anyaḥ sanśhayasyāsya chhettā na hyupapadyate
`,word_meanings:`etat—this; me—my; sanśhayam—doubt; kṛiṣhṇa—Krishna; chhettum—to dispel; arhasi—you can; aśheṣhataḥ—completely; tvat—than you; anyaḥ—other; sanśhayasya—of doubt; asya—this; chhettā—a dispeller; na—never; hi—certainly; upapadyate—is fit
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S39.mp3"},{chapter_id:6,chapter_number:6,externalId:273,id:273,text:`श्री भगवानुवाच

पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते।

नहि कल्याणकृत्कश्िचद्दुर्गतिं तात गच्छति।।6.40।।
 `,title:"Verse 273",verse_number:40,verse_order:273,transliteration:`śhrī bhagavān uvācha
pārtha naiveha nāmutra vināśhas tasya vidyate
na hi kalyāṇa-kṛit kaśhchid durgatiṁ tāta gachchhati
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; pārtha—Arjun, the son of Pritha; na eva—never; iha—in this world; na—never; amutra—in the next world; vināśhaḥ—destruction; tasya—his; vidyate—exists; na—never; hi—certainly; kalyāṇa-kṛit—one who strives for God-realization; kaśhchit—anyone; durgatim—evil destination; tāta—my friend; gachchhati—goes
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S40.mp3"},{chapter_id:6,chapter_number:6,externalId:274,id:274,text:`प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः।

शुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते।।6.41।।
 `,title:"Verse 274",verse_number:41,verse_order:274,transliteration:`prāpya puṇya-kṛitāṁ lokān uṣhitvā śhāśhvatīḥ samāḥ
śhuchīnāṁ śhrīmatāṁ gehe yoga-bhraṣhṭo’bhijāyate
`,word_meanings:`prāpya—attain; puṇya-kṛitām—of the virtuous; lokān—abodes; uṣhitvā—after dwelling; śhāśhvatīḥ—many; samāḥ—ages; śhuchīnām—of the pious; śhrī-matām—of the prosperous; gehe—in the house; yoga-bhraṣhṭaḥ—the unsuccessful yogis; abhijāyate—take birth; 
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S41.mp3"},{chapter_id:6,chapter_number:6,externalId:275,id:275,text:`अथवा योगिनामेव कुले भवति धीमताम्।

एतद्धि दुर्लभतरं लोके जन्म यदीदृशम्।।6.42।।
 `,title:"Verse 275",verse_number:42,verse_order:275,transliteration:`atha vā yoginām eva kule bhavati dhīmatām
etad dhi durlabhataraṁ loke janma yad īdṛiśham
`,word_meanings:`atha vā—else; yoginām—of those endowed with divine wisdom; eva—certainly; kule—in the family; bhavati—take birth; dhī-matām—of the wise; etat—this; hi—certainly; durlabha-taram—very rare; loke—in this world; janma—birth; yat—which; īdṛiśham—like this
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S42.mp3"},{chapter_id:6,chapter_number:6,externalId:276,id:276,text:`तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम्।

यतते च ततो भूयः संसिद्धौ कुरुनन्दन।।6.43।।
 `,title:"Verse 276",verse_number:43,verse_order:276,transliteration:`tatra taṁ buddhi-sanyogaṁ labhate paurva-dehikam
yatate cha tato bhūyaḥ sansiddhau kuru-nandana
`,word_meanings:`tatra—there; tam—that; buddhi-sanyogam—reawaken their wisdom; labhate—obtains; paurva-dehikam—from the previous lives; yatate—strives; cha—and; tataḥ—thereafter; bhūyaḥ—again; sansiddhau—for perfection; kuru-nandana—Arjun, descendant of the Kurus
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S43.mp3"},{chapter_id:6,chapter_number:6,externalId:277,id:277,text:`पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः।

जिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते।।6.44।।
 `,title:"Verse 277",verse_number:44,verse_order:277,transliteration:`pūrvābhyāsena tenaiva hriyate hyavaśho ’pi saḥ
jijñāsur api yogasya śhabda-brahmātivartate
`,word_meanings:`pūrva—past; abhyāsena—discipline; tena—by that; eva—certainly; hriyate—is attracted; hi—surely; avaśhaḥ—helplessly; api—although; saḥ—that person; jijñāsuḥ—inquisitive; api—even; yogasya—about yog; śhabda-brahma—fruitive portion of the Vedas; ativartate—transcends
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S44.mp3"},{chapter_id:6,chapter_number:6,externalId:278,id:278,text:`प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः।

अनेकजन्मसंसिद्धस्ततो याति परां गतिम्।।6.45।।
 `,title:"Verse 278",verse_number:45,verse_order:278,transliteration:`prayatnād yatamānas tu yogī sanśhuddha-kilbiṣhaḥ
aneka-janma-sansiddhas tato yāti parāṁ gatim
`,word_meanings:`prayatnāt—with great effort; yatamānaḥ—endeavoring; tu—and; yogī—a yogi; sanśhuddha—purified; kilbiṣhaḥ—from material desires; aneka—after many, many; janma—births; sansiddhaḥ—attain perfection; tataḥ—then; yāti—attains; parām—the highest; gatim—path
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S45.mp3"},{chapter_id:6,chapter_number:6,externalId:279,id:279,text:`तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः।

कर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन।।6.46।।
 `,title:"Verse 279",verse_number:46,verse_order:279,transliteration:`tapasvibhyo ’dhiko yogī
jñānibhyo ’pi mato ’dhikaḥ
karmibhyaśh chādhiko yogī
tasmād yogī bhavārjuna
`,word_meanings:`tapasvibhyaḥ—than the ascetics; adhikaḥ—superior; yogī—a yogi; jñānibhyaḥ—than the persons of learning; api—even; mataḥ—considered; adhikaḥ—superior; karmibhyaḥ—than the ritualistic performers; cha—and; adhikaḥ—superior; yogī—a yogi; tasmāt—therefore; yogī—a yogi; bhava—just become; arjuna—Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S46.mp3"},{chapter_id:6,chapter_number:6,externalId:280,id:280,text:`योगिनामपि सर्वेषां मद्गतेनान्तरात्मना।

श्रद्धावान्भजते यो मां स मे युक्ततमो मतः।।6.47।।
 `,title:"Verse 280",verse_number:47,verse_order:280,transliteration:`yoginām api sarveṣhāṁ mad-gatenāntar-ātmanā
śhraddhāvān bhajate yo māṁ sa me yuktatamo mataḥ
`,word_meanings:`yoginām—of all yogis; api—however; sarveṣhām—all types of; mat-gatena—absorbed in me (God); antaḥ—inner; ātmanā—with the mind; śhraddhā-vān—with great faith; bhajate—engage in devotion; yaḥ—who; mām—to me; saḥ—he; me—by me; yukta-tamaḥ—the highest yogi; mataḥ—is considered
`,Play:"https://testapi1test.blob.core.windows.net/test/6/Ch6S47.mp3"},{chapter_id:7,chapter_number:7,externalId:281,id:281,text:`श्री भगवानुवाच

मय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः।

असंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु।।7.1।।
 `,title:"Verse 281",verse_number:1,verse_order:281,transliteration:`śhrī bhagavān uvācha
mayyāsakta-manāḥ pārtha yogaṁ yuñjan mad-āśhrayaḥ
asanśhayaṁ samagraṁ māṁ yathā jñāsyasi tach chhṛiṇu
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; mayi—to me; āsakta-manāḥ—with the mind attached; pārtha—Arjun, the son of Pritha; yogam—bhakti yog; yuñjan—practicing; mat-āśhrayaḥ—surrendering to me; asanśhayam—free from doubt; samagram—completely; mām—me; yathā—how; jñāsyasi—you shall know; tat—that; śhṛiṇu—listen
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S01.mp3"},{chapter_id:7,chapter_number:7,externalId:282,id:282,text:`ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः।

यज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते।।7.2।।
 `,title:"Verse 282",verse_number:2,verse_order:282,transliteration:`jñānaṁ te ’haṁ sa-vijñānam idaṁ vakṣhyāmyaśheṣhataḥ
yaj jñātvā neha bhūyo ’nyaj jñātavyam-avaśhiṣhyate
`,word_meanings:`jñānam—knowledge; te—unto you; aham—I; sa—with; vijñānam—wisdom; idam—this; vakṣhyāmi—shall reveal; aśheṣhataḥ—in full; yat—which; jñātvā—having known; na—not; iha—in this world; bhūyaḥ—further; anyat—anything else; jñātavyam—to be known; avaśhiṣhyate—remains
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S02.mp3"},{chapter_id:7,chapter_number:7,externalId:283,id:283,text:`मनुष्याणां सहस्रेषु कश्िचद्यतति सिद्धये।

यततामपि सिद्धानां कश्िचन्मां वेत्ति तत्त्वतः।।7.3।।
 `,title:"Verse 283",verse_number:3,verse_order:283,transliteration:`manuṣhyāṇāṁ sahasreṣhu kaśhchid yatati siddhaye
yatatām api siddhānāṁ kaśhchin māṁ vetti tattvataḥ
`,word_meanings:`manuṣhyāṇām—of men; sahasreṣhu—out of many thousands; kaśhchit—someone; yatati—strives; siddhaye—for perfection; yatatām—of those who strive; api—even; siddhānām—of those who have achieved perfection; kaśhchit—someone; mām—me; vetti—knows; tattvataḥ—in truth
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S03.mp3"},{chapter_id:7,chapter_number:7,externalId:284,id:284,text:`भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च।

अहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा।।7.4।।
 `,title:"Verse 284",verse_number:4,verse_order:284,transliteration:`bhūmir-āpo ’nalo vāyuḥ khaṁ mano buddhir eva cha
ahankāra itīyaṁ me bhinnā prakṛitir aṣhṭadhā
`,word_meanings:`bhūmiḥ—earth; āpaḥ—water; analaḥ—fire; vāyuḥ—air; kham—space; manaḥ—mind; buddhiḥ—intellect; eva—certainly; cha—and; ahankāraḥ—ego; iti—thus; iyam—all these; me—my; bhinnā—divisions; prakṛitiḥ—material energy; aṣhṭadhā—eightfold
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S04.mp3"},{chapter_id:7,chapter_number:7,externalId:285,id:285,text:`अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम्।

जीवभूतां महाबाहो ययेदं धार्यते जगत्।।7.5।।
 `,title:"Verse 285",verse_number:5,verse_order:285,transliteration:`apareyam itas tvanyāṁ prakṛitiṁ viddhi me parām
jīva-bhūtāṁ mahā-bāho yayedaṁ dhāryate jagat
`,word_meanings:`aparā—inferior; iyam—this; itaḥ—besides this; tu—but; anyām—another; prakṛitim—energy; viddhi—know; me—my; parām—superior; jīva-bhūtām—living beings; mahā-bāho—mighty-armed one; yayā—by whom; idam—this; dhāryate—the basis; jagat—the material world
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S05.mp3"},{chapter_id:7,chapter_number:7,externalId:286,id:286,text:`एतद्योनीनि भूतानि सर्वाणीत्युपधारय।

अहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा।।7.6।।
 `,title:"Verse 286",verse_number:6,verse_order:286,transliteration:`etad-yonīni bhūtāni sarvāṇītyupadhāraya
ahaṁ kṛitsnasya jagataḥ prabhavaḥ pralayas tathā
`,word_meanings:`etat yonīni—these two (energies) are the source of; bhūtāni—living beings; sarvāṇi—all; iti—that; upadhāraya—know; aham—I; kṛitsnasya—entire; jagataḥ—creation; prabhavaḥ—the source; pralayaḥ—dissolution; tathā—and
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S06.mp3"},{chapter_id:7,chapter_number:7,externalId:287,id:287,text:`मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।

मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव।।7.7।।
 `,title:"Verse 287",verse_number:7,verse_order:287,transliteration:`mattaḥ parataraṁ nānyat kiñchid asti dhanañjaya
mayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva
`,word_meanings:`mattaḥ—than me; para-taram—superior; na—not; anyat kiñchit—anything else; asti—there is; dhanañjaya—Arjun, conqueror of wealth; mayi—in me; sarvam—all; idam—which we see; protam—is strung; sūtre—on a thread; maṇi-gaṇāḥ—beads; iva—like
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S07.mp3"},{chapter_id:7,chapter_number:7,externalId:288,id:288,text:`रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः।

प्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु।।7.8।।
 `,title:"Verse 288",verse_number:8,verse_order:288,transliteration:`raso ’ham apsu kaunteya prabhāsmi śhaśhi-sūryayoḥ
praṇavaḥ sarva-vedeṣhu śhabdaḥ khe pauruṣhaṁ nṛiṣhu
`,word_meanings:`rasaḥ—taste; aham—I; apsu—in water; kaunteya—Arjun, the son of Kunti; prabhā—the radiance; asmi—I am; śhaśhi-sūryayoḥ—of the moon and the sun; praṇavaḥ—the sacred syllable Om; sarva—in all; vedeṣhu—Vedas; śhabdaḥ—sound; khe—in ether; pauruṣham—ability; nṛiṣhu—in humans
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S08.mp3"},{chapter_id:7,chapter_number:7,externalId:289,id:289,text:`पुण्यो गन्धः पृथिव्यां च तेजश्चास्मि विभावसौ।

जीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु।।7.9।।
 `,title:"Verse 289",verse_number:9,verse_order:289,transliteration:`puṇyo gandhaḥ pṛithivyāṁ cha tejaśh chāsmi vibhāvasau
jīvanaṁ sarva-bhūteṣhu tapaśh chāsmi tapasviṣhu
`,word_meanings:`puṇyaḥ—pure; gandhaḥ—fragrance; pṛithivyām—of the earth; cha—and; tejaḥ—brilliance; cha—and; asmi—I am; vibhāvasau—in the fire; jīvanam—the life-force; sarva—in all; bhūteṣhu—beings; tapaḥ—penance; cha—and; asmi—I am; tapasviṣhu—of the ascetics
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S09.mp3"},{chapter_id:7,chapter_number:7,externalId:290,id:290,text:`बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम्।

बुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम्।।7.10।।
 `,title:"Verse 290",verse_number:10,verse_order:290,transliteration:`bījaṁ māṁ sarva-bhūtānāṁ viddhi pārtha sanātanam
buddhir buddhimatām asmi tejas tejasvinām aham
`,word_meanings:`bījam—the seed; mām—me; sarva-bhūtānām—of all beings; viddhi—know; pārtha—Arjun, the son of Pritha; sanātanam—the eternal; buddhiḥ—intellect; buddhi-matām—of the intelligent; asmi—(I) am; tejaḥ—splendor; tejasvinām—of the splendid; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S10.mp3"},{chapter_id:7,chapter_number:7,externalId:291,id:291,text:`बलं बलवतां चाहं कामरागविवर्जितम्।

धर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ।।7.11।।
 `,title:"Verse 291",verse_number:11,verse_order:291,transliteration:`balaṁ balavatāṁ chāhaṁ kāma-rāga-vivarjitam
dharmāviruddho bhūteṣhu kāmo ’smi bharatarṣhabha
`,word_meanings:`balam—strength; bala-vatām—of the strong; cha—and; aham—I; kāma—desire; rāga—passion; vivarjitam—devoid of; dharma-aviruddhaḥ—not conflicting with dharma; bhūteṣhu—in all beings; kāmaḥ—sexual activity; asmi—(I) am; bharata-ṛiṣhabha—Arjun, the best of the Bharats
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S11.mp3"},{chapter_id:7,chapter_number:7,externalId:292,id:292,text:`ये चैव सात्त्विका भावा राजसास्तामसाश्च ये।

मत्त एवेति तान्विद्धि नत्वहं तेषु ते मयि।।7.12।।
 `,title:"Verse 292",verse_number:12,verse_order:292,transliteration:`ye chaiva sāttvikā bhāvā rājasās tāmasāśh cha ye
matta eveti tān viddhi na tvahaṁ teṣhu te mayi
`,word_meanings:`ye—whatever; cha—and; eva—certainly; sāttvikāḥ—in the mode of goodness; bhāvāḥ—states of material existence; rājasāḥ—in the mode of passion; tāmasāḥ—in the mode of ignorance; cha—and; ye—whatever; mattaḥ—from me; eva—certainly; iti—thus; tān—those; viddhi—know; na—not; tu—but; aham—I; teṣhu—in them; te—they; mayi—in me
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S12.mp3"},{chapter_id:7,chapter_number:7,externalId:293,id:293,text:`त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत्।

मोहितं नाभिजानाति मामेभ्यः परमव्ययम्।।7.13।।
 `,title:"Verse 293",verse_number:13,verse_order:293,transliteration:`tribhir guṇa-mayair bhāvair ebhiḥ sarvam idaṁ jagat
mohitaṁ nābhijānāti māmebhyaḥ param avyayam
`,word_meanings:`tribhiḥ—by three; guṇa-mayaiḥ—consisting of the modes of material nature; bhāvaiḥ—states; ebhiḥ—all these; sarvam—whole; idam—this; jagat—universe; mohitam—deluded; na—not; abhijānāti—know; mām—me; ebhyaḥ—these; param—the supreme; avyayam—imperishable
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S13.mp3"},{chapter_id:7,chapter_number:7,externalId:294,id:294,text:`दैवी ह्येषा गुणमयी मम माया दुरत्यया।

मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते।।7.14।।
 `,title:"Verse 294",verse_number:14,verse_order:294,transliteration:`daivī hyeṣhā guṇa-mayī mama māyā duratyayā
mām eva ye prapadyante māyām etāṁ taranti te
`,word_meanings:`daivī—divine; hi—certainly; eṣhā—this; guṇa-mayī—consisting of the three modes of nature; mama—my; māyā—one of God’s energies. It that veils God’s true nature from souls who have not yet attained the eligibility for God-realization; duratyayā—very difficult to overcome; mām—unto me; eva—certainly; ye—who; prapadyante—surrender; māyām etām—this Maya; taranti—cross over; te—they
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S14.mp3"},{chapter_id:7,chapter_number:7,externalId:295,id:295,text:`न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः।

माययापहृतज्ञाना आसुरं भावमाश्रिताः।।7.15।।
 `,title:"Verse 295",verse_number:15,verse_order:295,transliteration:`na māṁ duṣhkṛitino mūḍhāḥ prapadyante narādhamāḥ
māyayāpahṛita-jñānā āsuraṁ bhāvam āśhritāḥ
`,word_meanings:`na—not; mām—unto me; duṣhkṛitinaḥ—the evil doers; mūḍhāḥ—the ignorant; prapadyante—surrender; nara-adhamāḥ—one who lazily follows one’s lower nature; māyayā—by God’s material energy; apahṛita jñānāḥ—those with deluded intellect; āsuram—demoniac; bhāvam—nature; āśhritāḥ—surrender
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S15.mp3"},{chapter_id:7,chapter_number:7,externalId:296,id:296,text:`चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन।

आर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ।।7.16।।
 `,title:"Verse 296",verse_number:16,verse_order:296,transliteration:`chatur-vidhā bhajante māṁ janāḥ sukṛitino ’rjuna
ārto jijñāsur arthārthī jñānī cha bharatarṣhabha
`,word_meanings:`chatuḥ-vidhāḥ—four kinds; bhajante—worship; mām—me; janāḥ—people; su-kṛitinaḥ—those who are pious; arjuna—Arjun; ārtaḥ—the distressed; jijñāsuḥ—the seekers of knowledge; artha-arthī—the seekers of material gain; jñānī—those who are situated in knowledge; cha—and; bharata-ṛiṣhabha—The best amongst the Bharatas, Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S16.mp3"},{chapter_id:7,chapter_number:7,externalId:297,id:297,text:`तेषां ज्ञानी नित्ययुक्त एकभक्ितर्विशिष्यते।

प्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः।।7.17।।
 `,title:"Verse 297",verse_number:17,verse_order:297,transliteration:`teṣhāṁ jñānī nitya-yukta eka-bhaktir viśhiṣhyate
priyo hi jñānino ’tyartham ahaṁ sa cha mama priyaḥ
`,word_meanings:`teṣhām—amongst these; jñānī—those who are situated in knowledge; nitya-yuktaḥ—ever steadfast; eka—exclusively; bhaktiḥ—devotion; viśhiṣhyate—highest; priyaḥ—very dear; hi—certainly; jñāninaḥ—to the person in knowledge; atyartham—highly; aham—I; saḥ—he; cha—and; mama—to me; priyaḥ—dear
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S17.mp3"},{chapter_id:7,chapter_number:7,externalId:298,id:298,text:`उदाराः सर्व एवैते ज्ञानी त्वात्मैव मे मतम्।

आस्थितः स हि युक्तात्मा मामेवानुत्तमां गतिम्।।7.18।।
 `,title:"Verse 298",verse_number:18,verse_order:298,transliteration:`udārāḥ sarva evaite jñānī tvātmaiva me matam
āsthitaḥ sa hi yuktātmā mām evānuttamāṁ gatim
`,word_meanings:`udārāḥ—noble; sarve—all; eva—indeed; ete—these; jñānī—those in knowledge; tu—but; ātmā eva—my very self; me—my; matam—opinion; āsthitaḥ—situated; saḥ—he; hi—certainly; yukta-ātmā—those who are united; mām—in me; eva—certainly; anuttamām—the supreme; gatim—goal
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S18.mp3"},{chapter_id:7,chapter_number:7,externalId:299,id:299,text:`बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते।

वासुदेवः सर्वमिति स महात्मा सुदुर्लभः।।7.19।।
 `,title:"Verse 299",verse_number:19,verse_order:299,transliteration:`bahūnāṁ janmanām ante jñānavān māṁ prapadyate
vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ
`,word_meanings:`bahūnām—many; janmanām—births; ante—after; jñāna-vān—one who is endowed with knowledge; mām—unto me; prapadyate—surrenders; vāsudevaḥ—Shree Krishna, the son of Vasudev; sarvam—all; iti—that; saḥ—that; mahā-ātmā—great soul; su-durlabhaḥ—very rare
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S19.mp3"},{chapter_id:7,chapter_number:7,externalId:300,id:300,text:`कामैस्तैस्तैर्हृतज्ञानाः प्रपद्यन्तेऽन्यदेवताः।

तं तं नियममास्थाय प्रकृत्या नियताः स्वया।।7.20।।
 `,title:"Verse 300",verse_number:20,verse_order:300,transliteration:`kāmais tais tair hṛita-jñānāḥ prapadyante ’nya-devatāḥ
taṁ taṁ niyamam āsthāya prakṛityā niyatāḥ svayā
`,word_meanings:`kāmaiḥ—by material desires; taiḥ taiḥ—by various; hṛita-jñānāḥ—whose knowledge has been carried away; prapadyante—surrender; anya—to other; devatāḥ—celestial gods; tam tam—the various; niyamam—rules and regulations; āsthāya—following; prakṛityā—by nature; niyatāḥ—controlled; svayā—by their own
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S20.mp3"},{chapter_id:7,chapter_number:7,externalId:301,id:301,text:`यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति।

तस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम्।।7.21।।
 `,title:"Verse 301",verse_number:21,verse_order:301,transliteration:`yo yo yāṁ yāṁ tanuṁ bhaktaḥ śhraddhayārchitum ichchhati
tasya tasyāchalāṁ śhraddhāṁ tām eva vidadhāmyaham
`,word_meanings:`yaḥ yaḥ—whoever; yām yām—whichever; tanum—form; bhaktaḥ—devotee; śhraddhayā—with faith; architum—to worship; ichchhati—desires; tasya tasya—to him; achalām—steady; śhraddhām—faith; tām—in that; eva—certainly; vidadhāmi—bestow; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S21.mp3"},{chapter_id:7,chapter_number:7,externalId:302,id:302,text:`स तया श्रद्धया युक्तस्तस्याराधनमीहते।

लभते च ततः कामान्मयैव विहितान् हि तान्।।7.22।।
 `,title:"Verse 302",verse_number:22,verse_order:302,transliteration:`sa tayā śhraddhayā yuktas tasyārādhanam īhate
labhate cha tataḥ kāmān mayaiva vihitān hi tān
`,word_meanings:`saḥ—he; tayā—with that; śhraddhayā—faith; yuktaḥ—endowed with; tasya—of that; ārādhanam—worship; īhate—tries to engange in; labhate—obtains; cha—and; tataḥ—from that; kāmān—desires; mayā—by me; eva—alone; vihitān—granted; hi—certainly; tān—those
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S22.mp3"},{chapter_id:7,chapter_number:7,externalId:303,id:303,text:`अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम्।

देवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि।।7.23।।
 `,title:"Verse 303",verse_number:23,verse_order:303,transliteration:`antavat tu phalaṁ teṣhāṁ tad bhavatyalpa-medhasām
devān deva-yajo yānti mad-bhaktā yānti mām api
`,word_meanings:`anta-vat—perishable; tu—but; phalam—fruit; teṣhām—by them; tat—that; bhavati—is; alpa-medhasām—people of small understanding; devān—to the celestial gods; deva-yajaḥ—the worshipers of the celestial gods; yānti—go; mat—my; bhaktāḥ—devotees; yānti—go; mām—to me; api—whereas
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S23.mp3"},{chapter_id:7,chapter_number:7,externalId:304,id:304,text:`अव्यक्तं व्यक्ितमापन्नं मन्यन्ते मामबुद्धयः।

परं भावमजानन्तो ममाव्ययमनुत्तमम्।।7.24।।
 `,title:"Verse 304",verse_number:24,verse_order:304,transliteration:`avyaktaṁ vyaktim āpannaṁ manyante mām abuddhayaḥ
paraṁ bhāvam ajānanto mamāvyayam anuttamam
`,word_meanings:`avyaktam—formless; vyaktim—possessing a personality; āpannam—to have assumed; manyante—think; mām—me; abuddhayaḥ—less intelligent; param—Supreme; bhāvam—nature; ajānantaḥ—not understanding; mama—my; avyayam—imperishable; anuttamam—excellent
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S24.mp3"},{chapter_id:7,chapter_number:7,externalId:305,id:305,text:`नाहं प्रकाशः सर्वस्य योगमायासमावृतः।

मूढोऽयं नाभिजानाति लोको मामजमव्ययम्।।7.25।।
 `,title:"Verse 305",verse_number:25,verse_order:305,transliteration:`nāhaṁ prakāśhaḥ sarvasya yoga-māyā-samāvṛitaḥ
mūḍho ’yaṁ nābhijānāti loko mām ajam avyayam
`,word_meanings:`na—not; aham—I; prakāśhaḥ—manifest; sarvasya—to everyone; yoga-māyā—God’s supreme (divine) energy; samāvṛitaḥ—veiled; mūḍhaḥ—deluded; ayam—these; na—not; abhijānāti—know; lokaḥ—persons; mām—me; ajam—unborn; avyayam—immutable
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S25.mp3"},{chapter_id:7,chapter_number:7,externalId:306,id:306,text:`वेदाहं समतीतानि वर्तमानानि चार्जुन।

भविष्याणि च भूतानि मां तु वेद न कश्चन।।7.26।।
 `,title:"Verse 306",verse_number:26,verse_order:306,transliteration:`vedāhaṁ samatītāni vartamānāni chārjuna
bhaviṣhyāṇi cha bhūtāni māṁ tu veda na kaśhchana
`,word_meanings:`veda—know; aham—I; samatītāni—the past; vartamānāni—the present; cha—and; arjuna—Arjun; bhaviṣhyāṇi—the future; cha—also; bhūtāni—all living beings; mām—me; tu—but; veda—knows; na kaśhchana—no one
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S26.mp3"},{chapter_id:7,chapter_number:7,externalId:307,id:307,text:`इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत।

सर्वभूतानि संमोहं सर्गे यान्ति परन्तप।।7.27।।
 `,title:"Verse 307",verse_number:27,verse_order:307,transliteration:`ichchhā-dveṣha-samutthena dvandva-mohena bhārata
sarva-bhūtāni sammohaṁ sarge yānti parantapa
`,word_meanings:`ichchhā—desire; dveṣha—aversion; samutthena—arise from; dvandva—of duality; mohena—from the illusion; bhārata—Arjun, descendant of Bharat; sarva—all; bhūtāni—living beings; sammoham—into delusion; sarge—since birth; yānti—enter; parantapa—Arjun, conqueror of enemies
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S27.mp3"},{chapter_id:7,chapter_number:7,externalId:308,id:308,text:`येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम्।

ते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः।।7.28।।
 `,title:"Verse 308",verse_number:28,verse_order:308,transliteration:`yeṣhāṁ tvanta-gataṁ pāpaṁ janānāṁ puṇya-karmaṇām
te dvandva-moha-nirmuktā bhajante māṁ dṛiḍha-vratāḥ
`,word_meanings:`yeṣhām—whose; tu—but; anta-gatam—completely destroyed; pāpam—sins; janānām—of persons; puṇya—pious; karmaṇām—activities; te—they; dvandva—of dualities; moha—illusion; nirmuktāḥ—free from; bhajante—worship;mām; dṛiḍha-vratāḥ—with determination
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S28.mp3"},{chapter_id:7,chapter_number:7,externalId:309,id:309,text:`जरामरणमोक्षाय मामाश्रित्य यतन्ति ये।

ते ब्रह्म तद्विदुः कृत्स्नमध्यात्मं कर्म चाखिलम्।।7.29।।
 `,title:"Verse 309",verse_number:29,verse_order:309,transliteration:`jarā-maraṇa-mokṣhāya mām āśhritya yatanti ye
te brahma tadviduḥ kṛitsnam adhyātmaṁ karma chākhilam
`,word_meanings:`jarā—from old age; maraṇa—and death; mokṣhāya—for liberation; mām—me; āśhritya—take shelter in; yatanti—strive; ye—who; te—they; brahma—Brahman; tat—that; viduḥ—know; kṛitsnam—everything; adhyātmam—the individual self; karma—karmic action; cha—and; akhilam—entire
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S29.mp3"},{chapter_id:7,chapter_number:7,externalId:310,id:310,text:`साधिभूताधिदैवं मां साधियज्ञं च ये विदुः।

प्रयाणकालेऽपि च मां ते विदुर्युक्तचेतसः।।7.30।।
 `,title:"Verse 310",verse_number:30,verse_order:310,transliteration:`sādhibhūtādhidaivaṁ māṁ sādhiyajñaṁ cha ye viduḥ
prayāṇa-kāle ’pi cha māṁ te vidur yukta-chetasaḥ
`,word_meanings:`sa-adhibhūta—governing principle of the field of matter; adhidaivam—governing principle of the celestial gods; mām—me; sa-adhiyajñam—governing principle of the Lord all sacrificial performances; cha—and; ye—who; viduḥ—know; prayāṇa—of death; kāle—at the time; api—even; cha—and; mām—me; te—they; viduḥ—know; yukta-chetasaḥ—in full consciousness of me
`,Play:"https://testapi1test.blob.core.windows.net/test/7/Ch7S30.mp3"},{chapter_id:8,chapter_number:8,externalId:311,id:311,text:`अर्जुन उवाच

किं तद्ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम।

अधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते।।8.1।।
 `,title:"Verse 311",verse_number:1,verse_order:311,transliteration:`arjuna uvācha
kiṁ tad brahma kim adhyātmaṁ kiṁ karma puruṣhottama
adhibhūtaṁ cha kiṁ proktam adhidaivaṁ kim uchyate
`,word_meanings:`arjunaḥ uvācha—Arjun said; kim—what; tat—that; brahma—Brahman; kim—what; adhyātmam—the individual soul; kim—what; karma—the principle of karma; puruṣha-uttama—Shree Krishna, the Supreme Divine Personality; adhibhūtam—the material manifestation; cha—and; kim—what; proktam—is called; adhidaivam—the Lord of the celestial gods; kim—what; uchyate—is called; 
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S01.mp3"},{chapter_id:8,chapter_number:8,externalId:312,id:312,text:`अधियज्ञः कथं कोऽत्र देहेऽस्मिन्मधुसूदन।

प्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभिः।।8.2।।
 `,title:"Verse 312",verse_number:2,verse_order:312,transliteration:`adhiyajñaḥ kathaṁ ko ’tra dehe ’smin madhusūdana
prayāṇa-kāle cha kathaṁ jñeyo ’si niyatātmabhiḥ
`,word_meanings:`adhiyajñaḥ—the Lord all sacrificial performances; katham—how; kaḥ—who; atra—here; dehe—in body; asmin—this; madhusūdana—Shree Krishna, the killer of the demon named Madhu; prayāṇa-kāle—at the time of death; cha—and; katham—how; jñeyaḥ—to be known; asi—are (you); niyata-ātmabhiḥ—by those of steadfast mind
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S02.mp3"},{chapter_id:8,chapter_number:8,externalId:313,id:313,text:`श्री भगवानुवाच

अक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते।

भूतभावोद्भवकरो विसर्गः कर्मसंज्ञितः।।8.3।।
 `,title:"Verse 313",verse_number:3,verse_order:313,transliteration:`śhrī bhagavān uvācha
akṣharaṁ brahma paramaṁ svabhāvo ’dhyātmam uchyate
bhūta-bhāvodbhava-karo visargaḥ karma-sanjñitaḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Blessed Lord said; akṣharam—indestructible; brahma—Brahman; paramam—the Supreme; svabhāvaḥ—nature; adhyātmam—one’s own self; uchyate—is called; bhūta-bhāva-udbhava-karaḥ—Actions pertaining to the material personality of living beings, and its development; visargaḥ—creation; karma—fruitive activities; sanjñitaḥ—are called
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S03.mp3"},{chapter_id:8,chapter_number:8,externalId:314,id:314,text:`अधिभूतं क्षरो भावः पुरुषश्चाधिदैवतम्।

अधियज्ञोऽहमेवात्र देहे देहभृतां वर।।8.4।।
 `,title:"Verse 314",verse_number:4,verse_order:314,transliteration:`adhibhūtaṁ kṣharo bhāvaḥ puruṣhaśh chādhidaivatam
adhiyajño ’ham evātra dehe deha-bhṛitāṁ vara
`,word_meanings:`adhibhūtam—the ever changing physical manifestation; kṣharaḥ—perishable; bhāvaḥ—nature; puruṣhaḥ—the cosmic personality of God, encompassing the material creation; cha—and; adhidaivatam—the Lord of the celestial gods; adhiyajñaḥ—the Lord of all sacrifices; aham—I; eva—certainly; atra—here; dehe—in the body; deha-bhṛitām—of the embodied; vara—O best
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S04.mp3"},{chapter_id:8,chapter_number:8,externalId:315,id:315,text:`अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।

यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः।।8.5।।
 `,title:"Verse 315",verse_number:5,verse_order:315,transliteration:`anta-kāle cha mām eva smaran muktvā kalevaram
yaḥ prayāti sa mad-bhāvaṁ yāti nāstyatra sanśhayaḥ
`,word_meanings:`anta-kāle—at the time of death; cha—and; mām—me; eva—alone; smaran—remembering; muktvā—relinquish; kalevaram—the body; yaḥ—who; prayāti—goes; saḥ—he; mat-bhāvam—Godlike nature; yāti—achieves; na—no; asti—there is; atra—here; sanśhayaḥ—doubt
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S05.mp3"},{chapter_id:8,chapter_number:8,externalId:316,id:316,text:`यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम्।

तं तमेवैति कौन्तेय सदा तद्भावभावितः।।8.6।।
 `,title:"Verse 316",verse_number:6,verse_order:316,transliteration:`yaṁ yaṁ vāpi smaran bhāvaṁ tyajatyante kalevaram
taṁ tam evaiti kaunteya sadā tad-bhāva-bhāvitaḥ
`,word_meanings:`yam yam—whatever; vā—or; api—even; smaran—remembering; bhāvam—remembrance; tyajati—gives up; ante—in the end; kalevaram—the body; tam—to that; tam—to that; eva—certainly; eti—gets; kaunteya—Arjun, the son of Kunti; sadā—always; tat—that; bhāva-bhāvitaḥ—absorbed in contemplation
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S06.mp3"},{chapter_id:8,chapter_number:8,externalId:317,id:317,text:`तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च।

मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम्।।8.7।।
 `,title:"Verse 317",verse_number:7,verse_order:317,transliteration:`tasmāt sarveṣhu kāleṣhu mām anusmara yudhya cha
mayyarpita-mano-buddhir mām evaiṣhyasyasanśhayam
`,word_meanings:`tasmāt—therefore; sarveṣhu—in all; kāleṣhu—times; mām—me; anusmara—remember; yudhya—fight; cha—and; mayi—to me; arpita—surrender; manaḥ—mind; buddhiḥ—intellect; mām—to me; eva—surely; eṣhyasi—you shall attain; asanśhayaḥ—without a doubt
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S07.mp3"},{chapter_id:8,chapter_number:8,externalId:318,id:318,text:`अभ्यासयोगयुक्तेन चेतसा नान्यगामिना।

परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन्।।8.8।।
 `,title:"Verse 318",verse_number:8,verse_order:318,transliteration:`abhyāsa-yoga-yuktena chetasā nānya-gāminā
paramaṁ puruṣhaṁ divyaṁ yāti pārthānuchintayan
`,word_meanings:`abhyāsa-yoga—by practice of yog; yuktena—being constantly engaged in remembrance; chetasā—by the mind; na anya-gāminā—without deviating; paramam puruṣham—the Supreme Divine Personality; divyam—divine; yāti—one attains; pārtha—Arjun, the son of Pritha; anuchintayan—constant remembrance
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S08.mp3"},{chapter_id:8,chapter_number:8,externalId:319,id:319,text:`कविं पुराणमनुशासितार

मणोरणीयांसमनुस्मरेद्यः।

सर्वस्य धातारमचिन्त्यरूप

मादित्यवर्णं तमसः परस्तात्।।8.9।।
 `,title:"Verse 319",verse_number:9,verse_order:319,transliteration:`kaviṁ purāṇam anuśhāsitāram
aṇor aṇīyānsam anusmared yaḥ
sarvasya dhātāram achintya-rūpam
āditya-varṇaṁ tamasaḥ parastāt
`,word_meanings:`kavim—poet; purāṇam—ancient; anuśhāsitāram—the controller; aṇoḥ—than the atom; aṇīyānsam—smaller; anusmaret—always remembers; yaḥ—who; sarvasya—of everything; dhātāram—the support; achintya—inconceivable; rūpam—divine form; āditya-varṇam—effulgent like the sun; tamasaḥ—to the darkness of ignorance; parastāt—beyond;
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S09.mp3"},{chapter_id:8,chapter_number:8,externalId:320,id:320,text:`प्रयाणकाले मनसाऽचलेन

भक्त्या युक्तो योगबलेन चैव।

भ्रुवोर्मध्ये प्राणमावेश्य सम्यक्

स तं परं पुरुषमुपैति दिव्यम्।।8.10।।
 `,title:"Verse 320",verse_number:10,verse_order:320,transliteration:`prayāṇa-kāle manasāchalena
bhaktyā yukto yoga-balena chaiva
bhruvor madhye prāṇam āveśhya samyak
sa taṁ paraṁ puruṣham upaiti divyam
`,word_meanings:`prayāṇa-kāle—at the time of death; manasā—mind; achalena—steadily; bhaktyā—remembering with great devotion; yuktaḥ—united; yoga-balena—through the power of yog; cha—and; eva—certainly; bhruvoḥ—the two eyebrows; madhye—between; prāṇam—life airs; āveśhya—fixing; samyak—completely; saḥ—he; tam—him; param puruṣham—the Supreme Divine Lord; upaiti—attains; divyam—divine
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S10.mp3"},{chapter_id:8,chapter_number:8,externalId:321,id:321,text:`यदक्षरं वेदविदो वदन्ति

विशन्ति यद्यतयो वीतरागाः।

यदिच्छन्तो ब्रह्मचर्यं चरन्ति

तत्ते पदं संग्रहेण प्रवक्ष्ये।।8.11।।
 `,title:"Verse 321",verse_number:11,verse_order:321,transliteration:`yad akṣharaṁ veda-vido vadanti
viśhanti yad yatayo vīta-rāgāḥ
yad ichchhanto brahmacharyaṁ charanti
tat te padaṁ saṅgraheṇa pravakṣhye
`,word_meanings:`yat—which; akṣharam—Imperishable; veda-vidaḥ—scholars of the Vedas; vadanti—describe; viśhanti—enter; yat—which; yatayaḥ—great ascetics; vīta-rāgāḥ—free from attachment; yat—which; ichchhantaḥ—desiring; brahmacharyam—celibacy; charanti—practice; tat—that; te—to you; padam—goal; saṅgraheṇa—briefly; pravakṣhye—I shall explain
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S11.mp3"},{chapter_id:8,chapter_number:8,externalId:322,id:322,text:`सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च।

मूर्ध्न्याधायात्मनः प्राणमास्थितो योगधारणाम्।।8.12।।
 `,title:"Verse 322",verse_number:12,verse_order:322,transliteration:`sarva-dvārāṇi sanyamya mano hṛidi nirudhya cha
mūrdhnyādhāyātmanaḥ prāṇam āsthito yoga-dhāraṇām
`,word_meanings:`sarva-dvārāṇi—all gates; sanyamya—restraining; manaḥ—the mind; hṛidi—in the heart region; nirudhya—confining; cha—and; mūrdhni—in the head; ādhāya—establish; ātmanaḥ—of the self; prāṇam—the life breath; āsthitaḥ—situated (in); yoga-dhāraṇām—the yogic concentration
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S12.mp3"},{chapter_id:8,chapter_number:8,externalId:323,id:323,text:`ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन्।

यः प्रयाति त्यजन्देहं स याति परमां गतिम्।।8.13।।
 `,title:"Verse 323",verse_number:13,verse_order:323,transliteration:`oṁ ityekākṣharaṁ brahma vyāharan mām anusmaran
yaḥ prayāti tyajan dehaṁ sa yāti paramāṁ gatim
`,word_meanings:`om—sacred syllable representing the formless aspect of God; iti—thus; eka-akṣharam—one syllabled; brahma—the Absolute Truth; vyāharan—chanting; mām—me (Shree Krishna); anusmaran—remembering; yaḥ—who; prayāti—departs; tyajan—quitting; deham—the body; saḥ—he; yāti—attains; paramām—the supreme; gatim—goal
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S13.mp3"},{chapter_id:8,chapter_number:8,externalId:324,id:324,text:`अनन्यचेताः सततं यो मां स्मरति नित्यशः।

तस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः।।8.14।।
 `,title:"Verse 324",verse_number:14,verse_order:324,transliteration:`ananya-chetāḥ satataṁ yo māṁ smarati nityaśhaḥ
tasyāhaṁ sulabhaḥ pārtha nitya-yuktasya yoginaḥ
`,word_meanings:`ananya-chetāḥ—without deviation of the mind; satatam—always; yaḥ—who; mām—me; smarati—remembers; nityaśhaḥ—regularly; tasya—to him; aham—I; su-labhaḥ—easily attainable; pārtha—Arjun, the son of Pritha; nitya—constantly; yuktasya—engaged; yoginaḥ—of the yogis
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S14.mp3"},{chapter_id:8,chapter_number:8,externalId:325,id:325,text:`मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम्।

नाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः।।8.15।।
 `,title:"Verse 325",verse_number:15,verse_order:325,transliteration:`mām upetya punar janma duḥkhālayam aśhāśhvatam
nāpnuvanti mahātmānaḥ sansiddhiṁ paramāṁ gatāḥ
`,word_meanings:`mām—me; upetya—having attained; punaḥ—again; janma—birth; duḥkha-ālayam—place full of miseries; aśhāśhvatam—temporary; na—never; āpnuvanti—attain; mahā-ātmānaḥ—the great souls; sansiddhim—perfection; paramām—highest; gatāḥ—having achieved
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S15.mp3"},{chapter_id:8,chapter_number:8,externalId:326,id:326,text:`आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन।

मामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते।।8.16।।
 `,title:"Verse 326",verse_number:16,verse_order:326,transliteration:`ā-brahma-bhuvanāl lokāḥ punar āvartino ’rjuna
mām upetya tu kaunteya punar janma na vidyate
`,word_meanings:`ā-brahma-bhuvanāt—up to the abode of Brahma; lokāḥ—worlds; punaḥ āvartinaḥ—subject to rebirth; arjuna—Arjun; mām—mine; upetya—having attained; tu—but; kaunteya—Arjun, the son of Kunti; punaḥ janma—rebirth; na—never; vidyate—is
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S16.mp3"},{chapter_id:8,chapter_number:8,externalId:327,id:327,text:`सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः।

रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः।।8.17।।
 `,title:"Verse 327",verse_number:17,verse_order:327,transliteration:`sahasra-yuga-paryantam ahar yad brahmaṇo viduḥ
rātriṁ yuga-sahasrāntāṁ te ’ho-rātra-vido janāḥ
`,word_meanings:`sahasra—one thousand; yuga—age; paryantam—until; ahaḥ—one day; yat—which; brahmaṇaḥ—of Brahma; viduḥ—know; rātrim—night; yuga-sahasra-antām—lasts one thousand yugas; te—they; ahaḥ-rātra-vidaḥ—those who know his day and night; janāḥ—people
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S17.mp3"},{chapter_id:8,chapter_number:8,externalId:328,id:328,text:`अव्यक्ताद्व्यक्तयः सर्वाः प्रभवन्त्यहरागमे।

रात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके।।8.18।।
 `,title:"Verse 328",verse_number:18,verse_order:328,transliteration:`avyaktād vyaktayaḥ sarvāḥ prabhavantyahar-āgame
rātryāgame pralīyante tatraivāvyakta-sanjñake
`,word_meanings:`avyaktāt—from the unmanifested; vyaktayaḥ—the manifested; sarvāḥ—all; prabhavanti—emanate; ahaḥ-āgame—at the advent of Brahma’s day; rātri-āgame—at the fall of Brahma’s night; pralīyante—they dissolve; tatra—into that; eva—certainly; avyakta-sanjñake—in that which is called the unmanifest
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S18.mp3"},{chapter_id:8,chapter_number:8,externalId:329,id:329,text:`भूतग्रामः स एवायं भूत्वा भूत्वा प्रलीयते।

रात्र्यागमेऽवशः पार्थ प्रभवत्यहरागमे।।8.19।।
 `,title:"Verse 329",verse_number:19,verse_order:329,transliteration:`bhūta-grāmaḥ sa evāyaṁ bhūtvā bhūtvā pralīyate
rātryāgame ’vaśhaḥ pārtha prabhavatyahar-āgame
`,word_meanings:`bhūta-grāmaḥ—the multitude of beings; saḥ—these; eva—certainly; ayam—this; bhūtvā bhūtvā—repeatedly taking birth; pralīyate—dissolves; rātri-āgame—with the advent of night; avaśhaḥ—helpless; pārtha—Arjun, the son of Pritha; prabhavati—become manifest; ahaḥ-āgame—with the advent of day
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S19.mp3"},{chapter_id:8,chapter_number:8,externalId:330,id:330,text:`परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातनः।

यः स सर्वेषु भूतेषु नश्यत्सु न विनश्यति।।8.20।।
 `,title:"Verse 330",verse_number:20,verse_order:330,transliteration:`paras tasmāt tu bhāvo ’nyo ’vyakto ’vyaktāt sanātanaḥ
yaḥ sa sarveṣhu bhūteṣhu naśhyatsu na vinaśhyati
`,word_meanings:`paraḥ—transcendental; tasmāt—than that; tu—but; bhāvaḥ—creation; anyaḥ—another; avyaktaḥ—unmanifest; avyaktāt—to the unmanifest; sanātanaḥ—eternal; yaḥ—who; saḥ—that; sarveṣhu—all; bhūteṣhu—in beings; naśhyatsu—cease to exist; na—never; vinaśhyati—is annihilated
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S20.mp3"},{chapter_id:8,chapter_number:8,externalId:331,id:331,text:`अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम्।

यं प्राप्य न निवर्तन्ते तद्धाम परमं मम।।8.21।।
 `,title:"Verse 331",verse_number:21,verse_order:331,transliteration:`avyakto ’kṣhara ityuktas tam āhuḥ paramāṁ gatim
yaṁ prāpya na nivartante tad dhāma paramaṁ mama
`,word_meanings:`avyaktaḥ—unmanifest; akṣharaḥ—imperishable; iti—thus; uktaḥ—is said; tam—that; āhuḥ—is called; paramām—the supreme; gatim—destination; yam—which; prāpya—having reached; na—never; nivartante—come back; tat—that; dhāma—abode; paramam—the supreme; mama—my
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S21.mp3"},{chapter_id:8,chapter_number:8,externalId:332,id:332,text:`पुरुषः स परः पार्थ भक्त्या लभ्यस्त्वनन्यया।

यस्यान्तःस्थानि भूतानि येन सर्वमिदं ततम्।।8.22।।
 `,title:"Verse 332",verse_number:22,verse_order:332,transliteration:`puruṣhaḥ sa paraḥ pārtha bhaktyā labhyas tvananyayā
yasyāntaḥ-sthāni bhūtāni yena sarvam idaṁ tatam
`,word_meanings:`puruṣhaḥ—the Supreme Divine Personality; saḥ—he; paraḥ—greatest; pārtha—Arjun, the son of Pritha; bhaktyā—through devotion; labhyaḥ—is attainable; tu—indeed; ananyayā—without another; yasya—of whom; antaḥ-sthāni—situated within; bhūtāni—beings; yena—by whom; sarvam—all; idam—this; tatam—is pervaded
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S22.mp3"},{chapter_id:8,chapter_number:8,externalId:333,id:333,text:`यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिनः।

प्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ।।8.23।।
 `,title:"Verse 333",verse_number:23,verse_order:333,transliteration:`yatra kāle tvanāvṛittim āvṛittiṁ chaiva yoginaḥ
prayātā yānti taṁ kālaṁ vakṣhyāmi bharatarṣhabha
`,word_meanings:`yatra—where; kāle—time; tu—certainly; anāvṛittim—no return; āvṛittim—return; cha—and; eva—certainly; yoginaḥ—a yogi; prayātāḥ—having departed; yānti—attain; tam—that; kālam—time; vakṣhyāmi—I shall describe; bharata-ṛiṣhabha—Arjun, the best of the Bharatas;
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S23.mp3"},{chapter_id:8,chapter_number:8,externalId:334,id:334,text:`अग्निर्ज्योतिरहः शुक्लः षण्मासा उत्तरायणम्।

तत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जनाः।।8.24।।
 `,title:"Verse 334",verse_number:24,verse_order:334,transliteration:`agnir jyotir ahaḥ śhuklaḥ ṣhaṇ-māsā uttarāyaṇam
tatra prayātā gachchhanti brahma brahma-vido janāḥ
`,word_meanings:`agniḥ—fire; jyotiḥ—light; ahaḥ—day; śhuklaḥ—the bright fortnight of the moon; ṣhaṭ-māsāḥ—six months; uttara-ayanam—the sun’s northern course; tatra—there; prayātāḥ—departed; gachchhanti—go; brahma—Brahman; brahma-vidaḥ—those who know the Brahman; janāḥ—persons;
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S24.mp3"},{chapter_id:8,chapter_number:8,externalId:335,id:335,text:`धूमो रात्रिस्तथा कृष्णः षण्मासा दक्षिणायनम्।

तत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते।।8.25।।
 `,title:"Verse 335",verse_number:25,verse_order:335,transliteration:`dhūmo rātris tathā kṛiṣhṇaḥ ṣhaṇ-māsā dakṣhiṇāyanam
tatra chāndramasaṁ jyotir yogī prāpya nivartate
`,word_meanings:`dhūmaḥ—smoke; rātriḥ—night; tathā—and; kṛiṣhṇaḥ—the dark fortnight of the moon; ṣhaṭ-māsāḥ—six months; dakṣhiṇa-ayanam—the sun’s southern course; tatra—there; chāndra-masam—lunar; jyotiḥ—light; yogī—a yogi; prāpya—attain; nivartate—comes back;
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S25.mp3"},{chapter_id:8,chapter_number:8,externalId:336,id:336,text:`शुक्लकृष्णे गती ह्येते जगतः शाश्वते मते।

एकया यात्यनावृत्तिमन्ययाऽऽवर्तते पुनः।।8.26।।
 `,title:"Verse 336",verse_number:26,verse_order:336,transliteration:`śhukla-kṛiṣhṇe gatī hyete jagataḥ śhāśhvate mate
ekayā yātyanāvṛittim anyayāvartate punaḥ
`,word_meanings:`śhukla—bright; kṛiṣhṇe—dark; gatī—paths; hi—certainly; ete—these; jagataḥ—of the material world; śhāśhvate—eternal; mate—opinion; ekayā—by one; yāti—goes; anāvṛittim—to non return; anyayā—by the other; āvartate—comes back; punaḥ—again
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S26.mp3"},{chapter_id:8,chapter_number:8,externalId:337,id:337,text:`नैते सृती पार्थ जानन्योगी मुह्यति कश्चन।

तस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन।।8.27।।
 `,title:"Verse 337",verse_number:27,verse_order:337,transliteration:`naite sṛitī pārtha jānan yogī muhyati kaśhchana
tasmāt sarveṣhu kāleṣhu yoga-yukto bhavārjuna
`,word_meanings:`na—never; ete—these two; sṛitī—paths; pārtha—Arjun, the son of Pritha; jānan—knowing; yogī—a yogi; muhyati—bewildered; kaśhchana—any; tasmāt—therefore; sarveṣhu kāleṣhu—always; yoga-yuktaḥ—situated in Yog; bhava—be; arjuna—Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S27.mp3"},{chapter_id:8,chapter_number:8,externalId:338,id:338,text:`वेदेषु यज्ञेषु तपःसु चैव

दानेषु यत्पुण्यफलं प्रदिष्टम्।

अत्येति तत्सर्वमिदं विदित्वा

योगी परं स्थानमुपैति चाद्यम्।।8.28।।
 `,title:"Verse 338",verse_number:28,verse_order:338,transliteration:`vedeṣhu yajñeṣhu tapaḥsu chaiva
dāneṣhu yat puṇya-phalaṁ pradiṣhṭam
atyeti tat sarvam idaṁ viditvā
yogī paraṁ sthānam upaiti chādyam
`,word_meanings:`vedeṣhu—in the study of the Vedas; yajñeṣhu—in performance of sacrifices; tapaḥsu—in austerities; cha—and; eva—certainly; dāneṣhu—in giving charities; yat—which; puṇya-phalam—fruit of merit; pradiṣhṭam—is gained; atyeti—surpasses; tat sarvam—all; idam—this; viditvā—having known; yogī—a yogi; param—Supreme; sthānam—Abode; upaiti—achieves; cha—and; ādyam—original
`,Play:"https://testapi1test.blob.core.windows.net/test/8/Ch8S28.mp3"},{chapter_id:9,chapter_number:9,externalId:339,id:339,text:`श्री भगवानुवाच

इदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे।

ज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्।।9.1।।
 `,title:"Verse 339",verse_number:1,verse_order:339,transliteration:`śhrī bhagavān uvācha
idaṁ tu te guhyatamaṁ pravakṣhyāmyanasūyave
jñānaṁ vijñāna-sahitaṁ yaj jñātvā mokṣhyase ’śhubhāt
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; idam—this; tu—but; te—to you; guhya-tamam—the most confidential; pravakṣhyāmi—I shall impart; anasūyave—nonenvious; jñānam—knowledge; vijñāna—realized knowledge; sahitam—with; yat—which; jñātvā—knowing; mokṣhyase—you will be released; aśhubhāt—miseries of material existence
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S01.mp3"},{chapter_id:9,chapter_number:9,externalId:340,id:340,text:`राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्।

प्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम्।।9.2।।
 `,title:"Verse 340",verse_number:2,verse_order:340,transliteration:`rāja-vidyā rāja-guhyaṁ pavitram idam uttamam
pratyakṣhāvagamaṁ dharmyaṁ su-sukhaṁ kartum avyayam
`,word_meanings:`rāja-vidyā—the king of sciences; rāja-guhyam—the most profound secret; pavitram—pure; idam—this; uttamam—highest; pratyakṣha—directly perceptible; avagamam—directly realizable; dharmyam—virtuous; su-sukham—easy; kartum—to practice; avyayam—everlasting
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S02.mp3"},{chapter_id:9,chapter_number:9,externalId:341,id:341,text:`अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप।

अप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि।।9.3।।
 `,title:"Verse 341",verse_number:3,verse_order:341,transliteration:`aśhraddadhānāḥ puruṣhā dharmasyāsya parantapa
aprāpya māṁ nivartante mṛityu-samsāra-vartmani
`,word_meanings:`aśhraddadhānāḥ—people without faith; puruṣhāḥ—(such) persons; dharmasya—of dharma; asya—this; parantapa—Arjun, conqueror the enemies; aprāpya—without attaining; mām—me; nivartante—come back; mṛityu—death; samsāra—material existence; vartmani—in the path
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S03.mp3"},{chapter_id:9,chapter_number:9,externalId:342,id:342,text:`मया ततमिदं सर्वं जगदव्यक्तमूर्तिना।

मत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः।।9.4।।
 `,title:"Verse 342",verse_number:4,verse_order:342,transliteration:`mayā tatam idaṁ sarvaṁ jagad avyakta-mūrtinā
mat-sthāni sarva-bhūtāni na chāhaṁ teṣhvavasthitaḥ
`,word_meanings:`mayā—by me; tatam—pervaded; idam—this; sarvam—entire; jagat—cosmic manifestation; avyakta-mūrtinā—the unmanifested form; mat-sthāni—in me; sarva-bhūtāni—all living beings; na—not; cha—and; aham—I; teṣhu—in them; avasthitaḥ—dwell
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S04.mp3"},{chapter_id:9,chapter_number:9,externalId:343,id:343,text:`न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम्।

भूतभृन्न च भूतस्थो ममात्मा भूतभावनः।।9.5।।
 `,title:"Verse 343",verse_number:5,verse_order:343,transliteration:`na cha mat-sthāni bhūtāni paśhya me yogam aiśhwaram
bhūta-bhṛin na cha bhūta-stho mamātmā bhūta-bhāvanaḥ
`,word_meanings:`na—never; cha—and; mat-sthāni—abide in me; bhūtāni—all living beings; paśhya—behold; me—my; yogam aiśhwaram—divine energy; bhūta-bhṛit—the sustainer of all living beings; na—never; cha—yet; bhūta-sthaḥ—dwelling in; mama—my; ātmā—self; bhūta-bhāvanaḥ—the creator of all beings
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S05.mp3"},{chapter_id:9,chapter_number:9,externalId:344,id:344,text:`यथाऽऽकाशस्थितो नित्यं वायुः सर्वत्रगो महान्।

तथा सर्वाणि भूतानि मत्स्थानीत्युपधारय।।9.6।।
 `,title:"Verse 344",verse_number:6,verse_order:344,transliteration:`yathākāśha-sthito nityaṁ vāyuḥ sarvatra-go mahān
tathā sarvāṇi bhūtāni mat-sthānītyupadhāraya
`,word_meanings:`yathā—as; ākāśha-sthitaḥ—rests in the sky; nityam—always; vāyuḥ—the wind; sarvatra-gaḥ—blowing everywhere; mahān—mighty; tathā—likewise; sarvāṇi bhūtāni—all living beings; mat-sthāni—rest in me; iti—thus; upadhāraya—know
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S06.mp3"},{chapter_id:9,chapter_number:9,externalId:345,id:345,text:`सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम्।

कल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम्।।9.7।।
 `,title:"Verse 345",verse_number:7,verse_order:345,transliteration:`sarva-bhūtāni kaunteya prakṛitiṁ yānti māmikām
kalpa-kṣhaye punas tāni kalpādau visṛijāmyaham
`,word_meanings:`sarva-bhūtāni—all living beings; kaunteya—Arjun, the son of Kunti; prakṛitim—primordial material energy; yānti—merge; māmikām—my; kalpa-kṣhaye—at the end of a kalpa; punaḥ—again; tāni—them; kalpa-ādau—at the beginning of a kalpa; visṛijāmi—manifest; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S07.mp3"},{chapter_id:9,chapter_number:9,externalId:346,id:346,text:`प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः।

भूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात्।।9.8।।
 `,title:"Verse 346",verse_number:8,verse_order:346,transliteration:`prakṛitiṁ svām avaṣhṭabhya visṛijāmi punaḥ punaḥ
bhūta-grāmam imaṁ kṛitsnam avaśhaṁ prakṛiter vaśhāt
`,word_meanings:`prakṛitim—the material energy; svām—my own; avaṣhṭabhya—presiding over; visṛijāmi—generate; punaḥ punaḥ—again and again; bhūta-grāmam—myriad forms; imam—these; kṛitsnam—all; avaśham—beyond their control; prakṛiteḥ—nature; vaśhāt—force
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S08.mp3"},{chapter_id:9,chapter_number:9,externalId:347,id:347,text:`न च मां तानि कर्माणि निबध्नन्ति धनञ्जय।

उदासीनवदासीनमसक्तं तेषु कर्मसु।।9.9।।
 `,title:"Verse 347",verse_number:9,verse_order:347,transliteration:`na cha māṁ tāni karmāṇi nibadhnanti dhanañjaya
udāsīna-vad āsīnam asaktaṁ teṣhu karmasu
`,word_meanings:`na—none; cha—as; mām—me; tāni—those; karmāṇi—actions; nibadhnanti—bind; dhanañjaya—Arjun, conqueror of wealth; udāsīna-vat—as neutral; āsīnam—situated; asaktam—detached; teṣhu—those; karmasu—actions
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S09.mp3"},{chapter_id:9,chapter_number:9,externalId:348,id:348,text:`मयाऽध्यक्षेण प्रकृतिः सूयते सचराचरम्।

हेतुनाऽनेन कौन्तेय जगद्विपरिवर्तते।।9.10।।
 `,title:"Verse 348",verse_number:10,verse_order:348,transliteration:`mayādhyakṣheṇa prakṛitiḥ sūyate sa-charācharam
hetunānena kaunteya jagad viparivartate
`,word_meanings:`mayā—by me; adhyakṣheṇa—direction; prakṛitiḥ—material energy; sūyate—brings into being; sa—both; chara-acharam—the animate and the inanimate; hetunā—reason; anena—this; kaunteya—Arjun, the son of Kunti; jagat—the material world; viparivartate—undergoes the changes
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S10.mp3"},{chapter_id:9,chapter_number:9,externalId:349,id:349,text:`अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम्।

परं भावमजानन्तो मम भूतमहेश्वरम्।।9.11।।
 `,title:"Verse 349",verse_number:11,verse_order:349,transliteration:`avajānanti māṁ mūḍhā mānuṣhīṁ tanum āśhritam
paraṁ bhāvam ajānanto mama bhūta-maheśhvaram
`,word_meanings:`avajānanti—disregard; mām—me; mūḍhāḥ—dim-witted; mānuṣhīm—human; tanum—form; āśhritam—take on; param—divine; bhāvam—personality; ajānantaḥ—not knowing; mama—my; bhūta—all beings; mahā-īśhvaram—the Supreme Lord
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S11.mp3"},{chapter_id:9,chapter_number:9,externalId:350,id:350,text:`मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः।

राक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः।।9.12।।
 `,title:"Verse 350",verse_number:12,verse_order:350,transliteration:`moghāśhā mogha-karmāṇo mogha-jñānā vichetasaḥ
rākṣhasīm āsurīṁ chaiva prakṛitiṁ mohinīṁ śhritāḥ
`,word_meanings:`mogha-āśhāḥ—of vain hopes; mogha-karmāṇaḥ—of vain actions; mogha-jñānāḥ—of baffled knowledge; vichetasaḥ—deluded; rākṣhasīm—demoniac; āsurīm—atheistic; cha—and; eva—certainly; prakṛitim—material energy; mohinīm—bewildered; śhritāḥ—take shelter
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S12.mp3"},{chapter_id:9,chapter_number:9,externalId:351,id:351,text:`महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः।

भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम्।।9.13।।
 `,title:"Verse 351",verse_number:13,verse_order:351,transliteration:`mahātmānas tu māṁ pārtha daivīṁ prakṛitim āśhritāḥ
bhajantyananya-manaso jñātvā bhūtādim avyayam
`,word_meanings:`mahā-ātmānaḥ—the great souls; tu—but; mām—me; pārtha—Arjun, the son of Pritha; daivīm prakṛitim—divine energy; āśhritāḥ—take shelter of; bhajanti—engage in devotion; ananya-manasaḥ—with mind fixed exclusively; jñātvā—knowing; bhūta—all creation; ādim—the origin; avyayam—imperishable
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S13.mp3"},{chapter_id:9,chapter_number:9,externalId:352,id:352,text:`सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः।

नमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते।।9.14।।
 `,title:"Verse 352",verse_number:14,verse_order:352,transliteration:`satataṁ kīrtayanto māṁ yatantaśh cha dṛiḍha-vratāḥ
namasyantaśh cha māṁ bhaktyā nitya-yuktā upāsate
`,word_meanings:`satatam—always; kīrtayantaḥ—singing divine glories; mām—me; yatantaḥ—striving; cha—and; dṛiḍha-vratāḥ—with great determination; namasyantaḥ—humbly bowing down; cha—and; mām—me; bhaktyā—loving devotion; nitya-yuktāḥ—constantly united; upāsate—worship
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S14.mp3"},{chapter_id:9,chapter_number:9,externalId:353,id:353,text:`ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते।

एकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम्।।9.15।।
 `,title:"Verse 353",verse_number:15,verse_order:353,transliteration:`jñāna-yajñena chāpyanye yajanto mām upāsate
ekatvena pṛithaktvena bahudhā viśhvato-mukham
`,word_meanings:`jñāna-yajñena—yajña of cultivating knowledge; cha—and; api—also; anye—others; yajantaḥ—worship; mām—me; upāsate—worship; ekatvena—undifferentiated oneness; pṛithaktvena—separately; bahudhā—various; viśhwataḥ-mukham—the cosmic form
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S15.mp3"},{chapter_id:9,chapter_number:9,externalId:354,id:354,text:`अहं क्रतुरहं यज्ञः स्वधाऽहमहमौषधम्।

मंत्रोऽहमहमेवाज्यमहमग्निरहं हुतम्।।9.16।।
 `,title:"Verse 354",verse_number:16,verse_order:354,transliteration:`ahaṁ kratur ahaṁ yajñaḥ svadhāham aham auṣhadham
mantro ’ham aham evājyam aham agnir ahaṁ hutam
`,word_meanings:`aham—I; kratuḥ—Vedic ritual; aham—I; yajñaḥ—sacrifice; svadhā—oblation; aham—I; aham—I; auṣhadham—medicinal herb; mantraḥ—Vedic mantra; aham—I; aham—I; eva—also; ājyam—clarified butter; aham—I; agniḥ—fire; aham—I; hutam—the act offering;
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S16.mp3"},{chapter_id:9,chapter_number:9,externalId:355,id:355,text:`पिताऽहमस्य जगतो माता धाता पितामहः।

वेद्यं पवित्रमोंकार ऋक् साम यजुरेव च।।9.17।।
 `,title:"Verse 355",verse_number:17,verse_order:355,transliteration:`pitāham asya jagato mātā dhātā pitāmahaḥ
vedyaṁ pavitram oṁkāra ṛik sāma yajur eva cha
`,word_meanings:`pitā—Father; aham—I; asya—of this; jagataḥ—universe; mātā—Mother; dhātā—Sustainer; pitāmahaḥ—Grandsire; vedyam—the goal of knowledge; pavitram—the purifier; om-kāra—the sacred syllable Om; ṛik—the Rig Veda; sāma—the Sama Veda; yajuḥ—the Yajur Veda; eva—also; cha—and
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S17.mp3"},{chapter_id:9,chapter_number:9,externalId:356,id:356,text:`गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत्।

प्रभवः प्रलयः स्थानं निधानं बीजमव्ययम्।।9.18।।
 `,title:"Verse 356",verse_number:18,verse_order:356,transliteration:`gatir bhartā prabhuḥ sākṣhī nivāsaḥ śharaṇaṁ suhṛit
prabhavaḥ pralayaḥ sthānaṁ nidhānaṁ bījam avyayam
`,word_meanings:`gatiḥ—the supreme goal; bhartā—sustainer; prabhuḥ—master; sākṣhī—witness; nivāsaḥ—abode; śharaṇam—shelter; su-hṛit—friend; prabhavaḥ—the origin; pralayaḥ—dissolution; sthānam—store house; nidhānam—resting place; bījam—seed; avyayam—imperishable
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S18.mp3"},{chapter_id:9,chapter_number:9,externalId:357,id:357,text:`तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च।

अमृतं चैव मृत्युश्च सदसच्चाहमर्जुन।।9.19।।
 `,title:"Verse 357",verse_number:19,verse_order:357,transliteration:`tapāmyaham ahaṁ varṣhaṁ nigṛihṇāmyutsṛijāmi cha
amṛitaṁ chaiva mṛityuśh cha sad asach chāham arjuna
`,word_meanings:`tapāmi—radiate heat; aham—I; aham—I; varṣham—rain; nigṛihṇāmi—withhold; utsṛijāmi—send forth; cha—and; amṛitam—immortality; cha—and; eva—also; mṛityuḥ—death; cha—and; sat—eternal spirit; asat—temporary matter; cha—and; aham—I; arjuna—Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S19.mp3"},{chapter_id:9,chapter_number:9,externalId:358,id:358,text:`त्रैविद्या मां सोमपाः पूतपापा

यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते।

ते पुण्यमासाद्य सुरेन्द्रलोक

मश्नन्ति दिव्यान्दिवि देवभोगान्।।9.20।।
 `,title:"Verse 358",verse_number:20,verse_order:358,transliteration:`trai-vidyā māṁ soma-pāḥ pūta-pāpā
yajñair iṣhṭvā svar-gatiṁ prārthayante
te puṇyam āsādya surendra-lokam
aśhnanti divyān divi deva-bhogān
`,word_meanings:`trai-vidyāḥ—the science of karm kāṇḍ (Vedic Rituals); mām—me; soma-pāḥ—drinkers of the Soma juice; pūta—purified; pāpāḥ—sins; yajñaiḥ—through sacrifices; iṣhṭvā—worship; svaḥ-gatim—way to the abode of the king of heaven; prārthayante—seek; te—they; puṇyam—pious; āsādya—attain; sura-indra—of Indra; lokam—abode; aśhnanti—enjoy; divyān—celestial; divi—in heaven; deva-bhogān—the pleasures of the celestial gods
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S20.mp3"},{chapter_id:9,chapter_number:9,externalId:359,id:359,text:`ते तं भुक्त्वा स्वर्गलोकं विशालं

क्षीणे पुण्ये मर्त्यलोकं विशन्ति।

एव त्रयीधर्ममनुप्रपन्ना

गतागतं कामकामा लभन्ते।।9.21।।
 `,title:"Verse 359",verse_number:21,verse_order:359,transliteration:`te taṁ bhuktvā swarga-lokaṁ viśhālaṁ
kṣhīṇe puṇye martya-lokaṁ viśhanti
evaṁ trayī-dharmam anuprapannā
gatāgataṁ kāma-kāmā labhante
`,word_meanings:`te—they; tam—that; bhuktvā—having enjoyed; swarga-lokam—heaven; viśhālam—vast; kṣhīṇe—at the exhaustion of; puṇye—stock of merits; martya-lokam—to the earthly plane; viśhanti—return; evam—thus; trayī dharmam—the karm-kāṇḍ portion of the three Vedas; anuprapannāḥ—follow; gata-āgatam—repeated coming and going; kāma-kāmāḥ—desiring objects of enjoyments; labhante—attain
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S21.mp3"},{chapter_id:9,chapter_number:9,externalId:360,id:360,text:`अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।

तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्।।9.22।।`,title:"Verse 360",verse_number:22,verse_order:360,transliteration:`ananyāśh chintayanto māṁ ye janāḥ paryupāsate
teṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmyaham
`,word_meanings:`ananyāḥ—always; chintayantaḥ—think of; mām—me; ye—those who; janāḥ—persons; paryupāsate—worship exclusively; teṣhām—of them; nitya abhiyuktānām—who are always absorbed; yoga—supply spiritual assets; kṣhemam—protect spiritual assets; vahāmi—carry; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S22.mp3"},{chapter_id:9,chapter_number:9,externalId:361,id:361,text:`येऽप्यन्यदेवता भक्ता यजन्ते श्रद्धयाऽन्विताः।

तेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम्।।9.23।।
 `,title:"Verse 361",verse_number:23,verse_order:361,transliteration:`ye ’pyanya-devatā-bhaktā yajante śhraddhayānvitāḥ
te ’pi mām eva kaunteya yajantyavidhi-pūrvakam
`,word_meanings:`ye—those who; api—although; anya—other; devatā—celestial gods; bhaktāḥ—devotees; yajante—worship; śhraddhayā anvitāḥ—faithfully; te—they; api—also; mām—me; eva—only; kaunteya—Arjun, the son of Kunti; yajanti—worship; avidhi-pūrvakam—by the wrong method
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S23.mp3"},{chapter_id:9,chapter_number:9,externalId:362,id:362,text:`अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च।

न तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते।।9.24।।
 `,title:"Verse 362",verse_number:24,verse_order:362,transliteration:`ahaṁ hi sarva-yajñānāṁ bhoktā cha prabhureva cha
na tu mām abhijānanti tattvenātaśh chyavanti te
`,word_meanings:`aham—I; hi—verily; sarva—of all; yajñānām—sacrifices; bhoktā—the enjoyer; cha—and; prabhuḥ—the Lord; eva—only; cha—and; na—not; tu—but; mām—me; abhijānanti—realize; tattvena—divine nature; ataḥ—therefore; chyavanti—fall down (wander in samsara); te—they
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S24.mp3"},{chapter_id:9,chapter_number:9,externalId:363,id:363,text:`यान्ति देवव्रता देवान् पितृ़न्यान्ति पितृव्रताः।

भूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम्।।9.25।।
 `,title:"Verse 363",verse_number:25,verse_order:363,transliteration:`yānti deva-vratā devān pitṝīn yānti pitṛi-vratāḥ
bhūtāni yānti bhūtejyā yānti mad-yājino ’pi mām
`,word_meanings:`yānti—go; deva-vratāḥ—worshipers of celestial gods; devān—amongst the celestial gods; pitṝīn—to the ancestors; yānti—go; pitṛi-vratā—worshippers of ancestors; bhūtāni—to the ghosts; yānti—go; bhūta-ijyāḥ—worshippers of ghosts; yānti—go; mat—my; yājinaḥ—devotees; api—and; mām—to me
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S25.mp3"},{chapter_id:9,chapter_number:9,externalId:364,id:364,text:`पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।

तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः।।9.26।।
 `,title:"Verse 364",verse_number:26,verse_order:364,transliteration:`patraṁ puṣhpaṁ phalaṁ toyaṁ yo me bhaktyā prayachchhati
tadahaṁ bhaktyupahṛitam aśhnāmi prayatātmanaḥ
`,word_meanings:`patram—a leaf; puṣhpam—a flower; phalam—a fruit; toyam—water; yaḥ—who; me—to me; bhaktyā—with devotion; prayachchhati—offers; tat—that; aham—I; bhakti-upahṛitam—offered with devotion; aśhnāmi—partake; prayata-ātmanaḥ—one in pure consciousness
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S26.mp3"},{chapter_id:9,chapter_number:9,externalId:365,id:365,text:`यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्।

यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्।।9.27।।
 `,title:"Verse 365",verse_number:27,verse_order:365,transliteration:`yat karoṣhi yad aśhnāsi yaj juhoṣhi dadāsi yat
yat tapasyasi kaunteya tat kuruṣhva mad-arpaṇam
`,word_meanings:`yat—whatever; karoṣhi—you do; yat—whatever; aśhnāsi—you eat; yat—whatever; juhoṣhi—offer to the sacred fire; dadāsi—bestow as a gift; yat—whatever; yat—whatever; tapasyasi—austerities you perform; kaunteya—Arjun, the son of Kunti; tat—them; kuruṣhva—do; mad arpaṇam—as an offering to me
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S27.mp3"},{chapter_id:9,chapter_number:9,externalId:366,id:366,text:`शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः।

संन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि।।9.28।।
 `,title:"Verse 366",verse_number:28,verse_order:366,transliteration:`śhubhāśhubha-phalair evaṁ mokṣhyase karma-bandhanaiḥ
sannyāsa-yoga-yuktātmā vimukto mām upaiṣhyasi
`,word_meanings:`śhubha aśhubha phalaiḥ—from good and bad results; evam—thus; mokṣhyase—you shall be freed; karma—work; bandhanaiḥ—from the bondage; sanyāsa-yoga—renunciation of selfishness; yukta-ātmā—having the mind attached to me; vimuktaḥ—liberated; mām—to me; upaiṣhyasi—you shall reach
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S28.mp3"},{chapter_id:9,chapter_number:9,externalId:367,id:367,text:`समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः।

ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्।।9.29।।
 `,title:"Verse 367",verse_number:29,verse_order:367,transliteration:`samo ’haṁ sarva-bhūteṣhu na me dveṣhyo ’sti na priyaḥ
ye bhajanti tu māṁ bhaktyā mayi te teṣhu chāpyaham
`,word_meanings:`samaḥ—equally disposed; aham—I; sarva-bhūteṣhu—to all living beings; na—no one; me—to me; dveṣhyaḥ—inimical; asti—is; na—not; priyaḥ—dear; ye—who; bhajanti—worship with love; tu—but; mām—me; bhaktyā—with devotion; mayi—reside in me; te—such persons; teṣhu—in them; cha—and; api—also; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S29.mp3"},{chapter_id:9,chapter_number:9,externalId:368,id:368,text:`अपि चेत्सुदुराचारो भजते मामनन्यभाक्।

साधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः।।9.30।।
 `,title:"Verse 368",verse_number:30,verse_order:368,transliteration:`api chet su-durāchāro bhajate mām ananya-bhāk
sādhur eva sa mantavyaḥ samyag vyavasito hi saḥ
`,word_meanings:`api—even; chet—if; su-durāchāraḥ—the vilest sinners; bhajate—worship; mām—me; ananya-bhāk—exclusive devotion; sādhuḥ—righteous; eva—certainly; saḥ—that person; mantavyaḥ—is to be considered; samyak—properly; vyavasitaḥ—resolve; hi—certainly; saḥ—that person
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S30.mp3"},{chapter_id:9,chapter_number:9,externalId:369,id:369,text:`क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति।

कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति।।9.31।।
 `,title:"Verse 369",verse_number:31,verse_order:369,transliteration:`kṣhipraṁ bhavati dharmātmā śhaśhvach-chhāntiṁ nigachchhati
kaunteya pratijānīhi na me bhaktaḥ praṇaśhyati
`,word_meanings:`kṣhipram—quickly; bhavati—become; dharma-ātmā—virtuous; śhaśhvat-śhāntim—lasting peace; nigachchhati—attain; kaunteya—Arjun, the son of Kunti; pratijānīhi—declare; na—never; me—my; bhaktaḥ—devotee; praṇaśhyati—perishes
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S31.mp3"},{chapter_id:9,chapter_number:9,externalId:370,id:370,text:`मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः।

स्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम्।।9.32।।
 `,title:"Verse 370",verse_number:32,verse_order:370,transliteration:`māṁ hi pārtha vyapāśhritya ye ’pi syuḥ pāpa-yonayaḥ
striyo vaiśhyās tathā śhūdrās te ’pi yānti parāṁ gatim
`,word_meanings:`mām—in me; hi—certainly; pārtha—Arjun, the son of Pritha; vyapāśhritya—take refuge; ye—who; api—even; syuḥ—may be; pāpa yonayaḥ—of low birth; striyaḥ—women; vaiśhyāḥ—mercantile people; tathā—and; śhūdrāḥ—manual workers; te api—even they; yānti—go; parām—the supreme; gatim—destination
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S32.mp3"},{chapter_id:9,chapter_number:9,externalId:371,id:371,text:`किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा।

अनित्यमसुखं लोकमिमं प्राप्य भजस्व माम्।।9.33।।
 `,title:"Verse 371",verse_number:33,verse_order:371,transliteration:`kiṁ punar brāhmaṇāḥ puṇyā bhaktā rājarṣhayas tathā
anityam asukhaṁ lokam imaṁ prāpya bhajasva mām
`,word_meanings:`kim—what; punaḥ—then; brāhmaṇāḥ—sages; puṇyāḥ—meritorius; bhaktāḥ—devotees; rāja-ṛiṣhayaḥ—saintly kings; tathā—and; anityam—transient; asukham—joyless; lokam—world; imam—this; prāpya—having achieved; bhajasva—engage in devotion; mām—unto me
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S33.mp3"},{chapter_id:9,chapter_number:9,externalId:372,id:372,text:`मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।

मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः।।9.34।।
 `,title:"Verse 372",verse_number:34,verse_order:372,transliteration:`man-manā bhava mad-bhakto mad-yājī māṁ namaskuru
mām evaiṣhyasi yuktvaivam ātmānaṁ mat-parāyaṇaḥ
`,word_meanings:`mat-manāḥ—always think of me; bhava—be; mat—my; bhaktaḥ—devotee; mat—my; yājī—worshipper; mām—to me; namaskuru—offer obeisances; mām—to me; eva—certainly; eṣhyasi—you will come; yuktvā—united with me; evam—thus; ātmānam—your mind and body; mat-parāyaṇaḥ—having dedicated to me
`,Play:"https://testapi1test.blob.core.windows.net/test/9/Ch9S34.mp3"},{chapter_id:10,chapter_number:10,externalId:373,id:373,text:`श्री भगवानुवाच

भूय एव महाबाहो श्रृणु मे परमं वचः।

यत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया।।10.1।।
 `,title:"Verse 373",verse_number:1,verse_order:373,transliteration:`śhrī bhagavān uvācha
bhūya eva mahā-bāho śhṛiṇu me paramaṁ vachaḥ
yatte ’haṁ prīyamāṇāya vakṣhyāmi hita-kāmyayā
`,word_meanings:`śhrī-bhagavān uvācha—the Blessed Lord said; bhūyaḥ—again; eva—verily; mahā-bāho—mighty armed one; śhṛiṇu—hear; me—my; paramam—divine; vachaḥ—teachings; yat—which; te—to you; aham—I; prīyamāṇāya—you are my beloved confidant; vakṣhyāmi—say; hita-kāmyayā—for desiring your welfare
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S01.mp3"},{chapter_id:10,chapter_number:10,externalId:374,id:374,text:`न मे विदुः सुरगणाः प्रभवं न महर्षयः।

अहमादिर्हि देवानां महर्षीणां च सर्वशः।।10.2।।
 `,title:"Verse 374",verse_number:2,verse_order:374,transliteration:`na me viduḥ sura-gaṇāḥ prabhavaṁ na maharṣhayaḥ
aham ādir hi devānāṁ maharṣhīṇāṁ cha sarvaśhaḥ
`,word_meanings:`na—neither; me—my; viduḥ—know; sura-gaṇāḥ—the celestial gods; prabhavam—origin; na—nor; mahā-ṛiṣhayaḥ—the great sages; aham—I; ādiḥ—the source; hi—certainly; devānām—of the celestial gods; mahā-ṛiṣhīṇām—of the great seers; cha—also; sarvaśhaḥ—in every way
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S02.mp3"},{chapter_id:10,chapter_number:10,externalId:375,id:375,text:`यो मामजमनादिं च वेत्ति लोकमहेश्वरम्।

असम्मूढः स मर्त्येषु सर्वपापैः प्रमुच्यते।।10.3।।
 `,title:"Verse 375",verse_number:3,verse_order:375,transliteration:`yo māmajam anādiṁ cha vetti loka-maheśhvaram
asammūḍhaḥ sa martyeṣhu sarva-pāpaiḥ pramuchyate
`,word_meanings:`verseyaḥ—who; mām—me; ajam—unborn; anādim—beginningless; cha—and; vetti—know; loka—of the universe; mahā-īśhvaram—the Supreme Lord; asammūḍhaḥ—undeluded; saḥ—they; martyeṣhu—among mortals; sarva-pāpaiḥ—from all evils; pramuchyate—are freed from-3
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S03.mp3"},{chapter_id:10,chapter_number:10,externalId:376,id:376,text:`बुद्धिर्ज्ञानमसंमोहः क्षमा सत्यं दमः शमः।

सुखं दुःखं भवोऽभावो भयं चाभयमेव च।।10.4।।
 `,title:"Verse 376",verse_number:4,verse_order:376,transliteration:`buddhir jñānam asammohaḥ kṣhamā satyaṁ damaḥ śhamaḥ
sukhaṁ duḥkhaṁ bhavo ’bhāvo bhayaṁ chābhayameva cha
`,word_meanings:`buddhiḥ—intellect; jñānam—knowledge; asammohaḥ—clarity of thought; kṣhamā—forgiveness; satyam—truthfulness; damaḥ—control over the senses; śhamaḥ—control of the mind; sukham—joy; duḥkham—sorrow; bhavaḥ—birth; abhāvaḥ—death; bhayam—fear; cha—and; abhayam—courage; eva—certainly; cha—and;
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S04.mp3"},{chapter_id:10,chapter_number:10,externalId:377,id:377,text:`अहिंसा समता तुष्टिस्तपो दानं यशोऽयशः।

भवन्ति भावा भूतानां मत्त एव पृथग्विधाः।।10.5।।
 `,title:"Verse 377",verse_number:5,verse_order:377,transliteration:"ahiṁsā   samatā  tuṣṭis tapo dānaṁ   yaśo    'yaśaḥ  bhavanti    bhāvā   bhūtānāṁ    matta   eva pṛthag-vidhāḥ",word_meanings:"ahiṁsā—nonviolence;    samatā—equilibrium; tuṣṭiḥ—satisfaction;    tapaḥ—penance;  dānam—charity;  yaśaḥ—fame; ayaśaḥ—infamy;  bhavanti—become;    bhāvāḥ—natures;     bhūtānām—of living  entities;   mattaḥ—from Me; eva—certainly;  pṛthakvidhāḥ—differently    arranged.",Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S05.mp3"},{chapter_id:10,chapter_number:10,externalId:378,id:378,text:`महर्षयः सप्त पूर्वे चत्वारो मनवस्तथा।

मद्भावा मानसा जाता येषां लोक इमाः प्रजाः।।10.6।।
 `,title:"Verse 378",verse_number:6,verse_order:378,transliteration:`maharṣhayaḥ sapta pūrve chatvāro manavas tathā
mad-bhāvā mānasā jātā yeṣhāṁ loka imāḥ prajāḥ
`,word_meanings:`mahā-ṛiṣhayaḥ—the great Sages; sapta—seven; pūrve—before; chatvāraḥ—four; manavaḥ—Manus; tathā—also; mat bhāvāḥ—are born from me; mānasāḥ—mind; jātāḥ—born; yeṣhām—from them; loke—in the world; imāḥ—all these; prajāḥ—people
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S06.mp3"},{chapter_id:10,chapter_number:10,externalId:379,id:379,text:`एतां विभूतिं योगं च मम यो वेत्ति तत्त्वतः।

सोऽविकम्पेन योगेन युज्यते नात्र संशयः।।10.7।।
 `,title:"Verse 379",verse_number:7,verse_order:379,transliteration:`etāṁ vibhūtiṁ yogaṁ cha mama yo vetti tattvataḥ
so ’vikampena yogena yujyate nātra sanśhayaḥ
`,word_meanings:`etām—these; vibhūtim—glories; yogam—divine powers; cha—and; mama—my; yaḥ—those who; vetti—know; tattvataḥ—in truth; saḥ—they; avikalpena—unwavering; yogena—in bhakti yog; yujyate—becomes united; na—never; atra—here; sanśhayaḥ—doubt
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S07.mp3"},{chapter_id:10,chapter_number:10,externalId:380,id:380,text:`अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते।

इति मत्वा भजन्ते मां बुधा भावसमन्विताः।।10.8।।
 `,title:"Verse 380",verse_number:8,verse_order:380,transliteration:`ahaṁ sarvasya prabhavo mattaḥ sarvaṁ pravartate
iti matvā bhajante māṁ budhā bhāva-samanvitāḥ
`,word_meanings:`aham—I; sarvasya—of all creation; prabhavaḥ—the origin of; mattaḥ—from me; sarvam—everything; pravartate—proceeds; iti—thus; matvā—having known; bhajante—worship; mām—me; budhāḥ—the wise; bhāva-samanvitāḥ—endowed with great faith and devotion
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S08.mp3"},{chapter_id:10,chapter_number:10,externalId:381,id:381,text:`मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम्।

कथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च।।10.9।।
 `,title:"Verse 381",verse_number:9,verse_order:381,transliteration:`mach-chittā mad-gata-prāṇā bodhayantaḥ parasparam
kathayantaśh cha māṁ nityaṁ tuṣhyanti cha ramanti cha
`,word_meanings:`mat-chittāḥ—those with minds fixed on me; mat-gata-prāṇāḥ—those who have surrendered their lives to me; bodhayantaḥ—enlightening (with divine knowledge of God); parasparam—one another; kathayantaḥ—speaking; cha—and; mām—about me; nityam—continously; tuṣhyanti—satisfaction; cha—and; ramanti—(they) delight; cha—also
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S09.mp3"},{chapter_id:10,chapter_number:10,externalId:382,id:382,text:`तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम्।

ददामि बुद्धियोगं तं येन मामुपयान्ति ते।।10.10।।
 `,title:"Verse 382",verse_number:10,verse_order:382,transliteration:`teṣhāṁ satata-yuktānāṁ bhajatāṁ prīti-pūrvakam
dadāmi buddhi-yogaṁ taṁ yena mām upayānti te
`,word_meanings:`teṣhām—to them; satata-yuktānām—ever steadfast; bhajatām—who engage in devotion; prīti-pūrvakam—with love; dadāmi—I give; buddhi-yogam—divine knowledge; tam—that; yena—by which; mām—to me; upayānti—come; te—they
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S10.mp3"},{chapter_id:10,chapter_number:10,externalId:383,id:383,text:`तेषामेवानुकम्पार्थमहमज्ञानजं तमः।

नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता।।10.11।।
 `,title:"Verse 383",verse_number:11,verse_order:383,transliteration:`teṣhām evānukampārtham aham ajñāna-jaṁ tamaḥ
nāśhayāmyātma-bhāva-stho jñāna-dīpena bhāsvatā
`,word_meanings:`teṣhām—for them; eva—only; anukampā-artham—out of compassion; aham—I; ajñāna-jam—born of ignorance; tamaḥ—darkness; nāśhayāmi—destroy; ātma-bhāva—within their hearts; sthaḥ—dwelling; jñāna—of knowledge; dīpena—with the lamp; bhāsvatā—luminous
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S11.mp3"},{chapter_id:10,chapter_number:10,externalId:384,id:384,text:`अर्जुन उवाच

परं ब्रह्म परं धाम पवित्रं परमं भवान्।

पुरुषं शाश्वतं दिव्यमादिदेवमजं विभुम्।।10.12।।
 `,title:"Verse 384",verse_number:12,verse_order:384,transliteration:`arjuna uvācha
paraṁ brahma paraṁ dhāma pavitraṁ paramaṁ bhavān
puruṣhaṁ śhāśhvataṁ divyam ādi-devam ajaṁ vibhum
`,word_meanings:`arjunaḥ uvācha—Arjun said; param—Supreme; brahma—Brahman; param—Supreme; dhāma—Abode; pavitram—purifier; paramam—Supreme; bhavān—you; puruṣham—personality; śhāśhvatam—Eternal; divyam—Divine; ādi-devam—the Primal Being; ajam—the Unborn; vibhum—the Great;
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S12.mp3"},{chapter_id:10,chapter_number:10,externalId:385,id:385,text:`आहुस्त्वामृषयः सर्वे देवर्षिर्नारदस्तथा।

असितो देवलो व्यासः स्वयं चैव ब्रवीषि मे।।10.13।।
 `,title:"Verse 385",verse_number:13,verse_order:385,transliteration:`āhus tvām ṛiṣhayaḥ sarve devarṣhir nāradas tathā
asito devalo vyāsaḥ svayaṁ chaiva bravīṣhi me
`,word_meanings:`āhuḥ—(they) declare; tvām—you; ṛiṣhayaḥ—sages; sarve—all; deva-ṛiṣhiḥ-nāradaḥ—devarṣhi Narad; tathā—also; asitaḥ—Asit; devalaḥ—Deval; vyāsaḥ—Vyās; svayam—personally; cha—and; eva—even; bravīṣhī—you are declaring; me—to me
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S13.mp3"},{chapter_id:10,chapter_number:10,externalId:386,id:386,text:`सर्वमेतदृतं मन्ये यन्मां वदसि केशव।

न हि ते भगवन् व्यक्ितं विदुर्देवा न दानवाः।।10.14।।
 `,title:"Verse 386",verse_number:14,verse_order:386,transliteration:`sarvam etad ṛitaṁ manye yan māṁ vadasi keśhava
na hi te bhagavan vyaktiṁ vidur devā na dānavāḥ
`,word_meanings:`sarvam—everything; etat—this; ṛitam—truth; manye—I accept; yat—which; mām—me; vadasi—you tell; keśhava—Shree Krishna, the killer of the demon named Keshi; na—neither; hi—verily; te—your; bhagavan—the Supreme Lord; vyaktim—personality; viduḥ—can understand; devāḥ—the celestial gods; na—nor; dānavāḥ—the demons
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S14.mp3"},{chapter_id:10,chapter_number:10,externalId:387,id:387,text:`स्वयमेवात्मनाऽत्मानं वेत्थ त्वं पुरुषोत्तम।

भूतभावन भूतेश देवदेव जगत्पते।।10.15।।
 `,title:"Verse 387",verse_number:15,verse_order:387,transliteration:`swayam evātmanātmānaṁ vettha tvaṁ puruṣhottama
bhūta-bhāvana bhūteśha deva-deva jagat-pate
`,word_meanings:`swayam—yourself; eva—indeed; ātmanā—by yourself; ātmānam—yourself; vettha—know; tvam—you; puruṣha-uttama—the Supreme Personality; bhūta-bhāvana—the Creator of all beings; bhūta-īśha—the Lord of everything; deva-deva—the God of gods; jagat-pate—the Lord of the universe
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S15.mp3"},{chapter_id:10,chapter_number:10,externalId:388,id:388,text:`वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतयः।

याभिर्विभूतिभिर्लोकानिमांस्त्वं व्याप्य तिष्ठसि।।10.16।।
 `,title:"Verse 388",verse_number:16,verse_order:388,transliteration:`vaktum arhasyaśheṣheṇa divyā hyātma-vibhūtayaḥ
yābhir vibhūtibhir lokān imāṁs tvaṁ vyāpya tiṣhṭhasi
`,word_meanings:`vaktum—to describe; arhasi—please do; aśheṣheṇa—completely; divyāḥ—divine; hi—indeed; ātma—your own; vibhūtayaḥ—opulences; yābhiḥ—by which; vibhūtibhiḥ—opulences; lokān—all worlds; imān—these; tvam—you; vyāpya—pervade; tiṣhṭhasi—reside;
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S16.mp3"},{chapter_id:10,chapter_number:10,externalId:389,id:389,text:`कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन्।

केषु केषु च भावेषु चिन्त्योऽसि भगवन्मया।।10.17।।
 `,title:"Verse 389",verse_number:17,verse_order:389,transliteration:`kathaṁ vidyām ahaṁ yogins tvāṁ sadā parichintayan
keṣhu keṣhu cha bhāveṣhu chintyo ’si bhagavan mayā
`,word_meanings:`katham—how; vidyām aham—shall I know; yogin—the Supreme Master of Yogmaya; tvām—you; sadā—always; parichintayan—meditating; keṣhu—in what; keṣhu—in what; cha—and; bhāveṣhu—forms; chintyaḥ asi—to be thought of; bhagavan—the Supreme Divine Personality; mayā—by me
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S17.mp3"},{chapter_id:10,chapter_number:10,externalId:390,id:390,text:`विस्तरेणात्मनो योगं विभूतिं च जनार्दन।

भूयः कथय तृप्तिर्हि श्रृण्वतो नास्ति मेऽमृतम्।।10.18।।
 `,title:"Verse 390",verse_number:18,verse_order:390,transliteration:`vistareṇātmano yogaṁ vibhūtiṁ cha janārdana
bhūyaḥ kathaya tṛiptir hi śhṛiṇvato nāsti me ’mṛitam
`,word_meanings:`vistareṇa—in detail; ātmanaḥ—your; yogam—divine glories; vibhūtim—opulences; cha—also; janaārdana—Shree Krishna, he who looks after the public; bhūyaḥ—again; kathaya—describe; tṛiptiḥ—satisfaction; hi—because; śhṛiṇvataḥ—hearing; na—not; asti—is; me—my; amṛitam—nectar
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S18.mp3"},{chapter_id:10,chapter_number:10,externalId:391,id:391,text:`श्री भगवानुवाच

हन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतयः।

प्राधान्यतः कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे।।10.19।।
 `,title:"Verse 391",verse_number:19,verse_order:391,transliteration:`śhrī bhagavān uvācha
hanta te kathayiṣhyāmi divyā hyātma-vibhūtayaḥ
prādhānyataḥ kuru-śhreṣhṭha nāstyanto vistarasya me
`,word_meanings:`śhrī-bhagavān uvācha—the Blessed Lord spoke; hanta—yes; te—to you; kathayiṣhyāmi—I shall describe; divyāḥ—divine; hi—certainly; ātma-vibhūtayaḥ—my divine glories; prādhānyataḥ—salient; kuru-śhreṣhṭha—best of the Kurus; na—not; asti—is; antaḥ—limit; vistarasya—extensive glories; me—my
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S19.mp3"},{chapter_id:10,chapter_number:10,externalId:392,id:392,text:`अहमात्मा गुडाकेश सर्वभूताशयस्थितः।

अहमादिश्च मध्यं च भूतानामन्त एव च।।10.20।।
 `,title:"Verse 392",verse_number:20,verse_order:392,transliteration:`aham ātmā guḍākeśha sarva-bhūtāśhaya-sthitaḥ
aham ādiśh cha madhyaṁ cha bhūtānām anta eva cha
`,word_meanings:`aham—I; ātmā—soul; guḍākeśha—Arjun, the conqueror of sleep; sarva-bhūta—of all living entities; āśhaya-sthitaḥ—seated in the heart; aham—I; ādiḥ—the beginning; cha—and; madhyam—middle; cha—and; bhūtānām—of all beings; antaḥ—end; eva—even; cha—also
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S20.mp3"},{chapter_id:10,chapter_number:10,externalId:393,id:393,text:`आदित्यानामहं विष्णुर्ज्योतिषां रविरंशुमान्।

मरीचिर्मरुतामस्मि नक्षत्राणामहं शशी।।10.21।।
 `,title:"Verse 393",verse_number:21,verse_order:393,transliteration:`ādityānām ahaṁ viṣhṇur jyotiṣhāṁ ravir anśhumān
marīchir marutām asmi nakṣhatrāṇām ahaṁ śhaśhī
`,word_meanings:`ādityānām—amongst the twelve sons of Aditi; aham—I; viṣhṇuḥ—Lord Vishnu; jyotiṣhām—amongst luminous objects; raviḥ—the sun; anśhu-mān—radiant; marīchiḥ—Marichi; marutām—of the Maruts; asmi—(I) am; nakṣhatrāṇām—amongst the stars; aham—I; śhaśhī—the moon
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S21.mp3"},{chapter_id:10,chapter_number:10,externalId:394,id:394,text:`वेदानां सामवेदोऽस्मि देवानामस्मि वासवः।

इन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना।।10.22।।
 `,title:"Verse 394",verse_number:22,verse_order:394,transliteration:`vedānāṁ sāma-vedo ’smi devānām asmi vāsavaḥ
indriyāṇāṁ manaśh chāsmi bhūtānām asmi chetanā
`,word_meanings:`vedānām—amongst the Vedas; sāma-vedaḥ—the Sāma Veda; asmi—I am; devānām—of all the celestial gods; asmi—I am; vāsavaḥ̣—Indra; indriyāṇām—of amongst the senses; manaḥ—the mind; ca—and; asmi—I am; bhūtānām—amongst the living beings; asmi—I am; chetanā—consciousness
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S22.mp3"},{chapter_id:10,chapter_number:10,externalId:395,id:395,text:`रुद्राणां शङ्करश्चास्मि वित्तेशो यक्षरक्षसाम्।

वसूनां पावकश्चास्मि मेरुः शिखरिणामहम्।।10.23।।
 `,title:"Verse 395",verse_number:23,verse_order:395,transliteration:`rudrāṇāṁ śhaṅkaraśh chāsmi vitteśho yakṣha-rakṣhasām
vasūnāṁ pāvakaśh chāsmi meruḥ śhikhariṇām aham
`,word_meanings:`rudrāṇām—amongst the Rudras; śhaṅkaraḥ—Lord Shiv; cha—and; asmi—I am; vitta-īśhaḥ—the god of wealth and the treasurer of the celestial gods; yakṣha—amongst the semi-divine demons; rakṣhasām—amongst the demons; vasūnām—amongst the Vasus; pāvakaḥ—Agni (fire); cha—and; asmi—I am; meruḥ—Mount Meru; śhikhariṇām—amongst the mountains; aham—I am
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S23.mp3"},{chapter_id:10,chapter_number:10,externalId:396,id:396,text:`पुरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम्।

सेनानीनामहं स्कन्दः सरसामस्मि सागरः।।10.24।।
 `,title:"Verse 396",verse_number:24,verse_order:396,transliteration:`purodhasāṁ cha mukhyaṁ māṁ viddhi pārtha bṛihaspatim
senānīnām ahaṁ skandaḥ sarasām asmi sāgaraḥ
`,word_meanings:`purodhasām—amongst priests; cha—and; mukhyam—the chiefs; mām—me; viddhi—know; pārtha—Arjun, the son of Pritha; bṛihaspatim—Brihaspati; senānīnām—warrior chief; aham—I; skandaḥ—Kartikeya; sarasām—amongst reservoirs of water; asmi—I am; sāgaraḥ—the ocean
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S24.mp3"},{chapter_id:10,chapter_number:10,externalId:397,id:397,text:`महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम्।

यज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालयः।।10.25।।
 `,title:"Verse 397",verse_number:25,verse_order:397,transliteration:`maharṣhīṇāṁ bhṛigur ahaṁ girām asmyekam akṣharam
yajñānāṁ japa-yajño ’smi sthāvarāṇāṁ himālayaḥ
`,word_meanings:`mahā-ṛiṣhīṇām—among the great seers; bhṛiguḥ—Bhrigu; aham—I; girām—amongst chants; asmi—I am; ekam akṣharam—the syllable Om; yajñānām—of sacrifices; japa-yajñaḥ—sacrifice of the devotional repetition of the divine names of God; asmi—I am; sthāvarāṇām—amongst immovable things; himālayaḥ—the Himalayas
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S25.mp3"},{chapter_id:10,chapter_number:10,externalId:398,id:398,text:`अश्वत्थः सर्ववृक्षाणां देवर्षीणां च नारदः।

गन्धर्वाणां चित्ररथः सिद्धानां कपिलो मुनिः।।10.26।।
 `,title:"Verse 398",verse_number:26,verse_order:398,transliteration:`aśhvatthaḥ sarva-vṛikṣhāṇāṁ devarṣhīṇāṁ cha nāradaḥ
gandharvāṇāṁ chitrarathaḥ siddhānāṁ kapilo muniḥ
`,word_meanings:`aśhvatthaḥ—the banyan tree; sarva-vṛikṣhāṇām—amongst all trees; deva-ṛiṣhīṇām—amongst celestial sages; cha—and; nāradaḥ—Narad; gandharvāṇām—amongst the gandharvas; chitrarathaḥ—Chitrarath; siddhānām—of all those who are perfected; kapilaḥ muniḥ—sage Kapil
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S26.mp3"},{chapter_id:10,chapter_number:10,externalId:399,id:399,text:`उच्चैःश्रवसमश्वानां विद्धि माममृतोद्भवम्।

ऐरावतं गजेन्द्राणां नराणां च नराधिपम्।।10.27।।
 `,title:"Verse 399",verse_number:27,verse_order:399,transliteration:`uchchaiḥśhravasam aśhvānāṁ viddhi mām amṛitodbhavam
airāvataṁ gajendrāṇāṁ narāṇāṁ cha narādhipam
`,word_meanings:`uchchaiḥśhravasam—Uchchaihshrava; aśhvānām—amongst horses; viddhi—know; mām—me; amṛita-udbhavam—begotten from the churning of the ocean of nectar; airāvatam—Airavata; gaja-indrāṇām—amongst all lordly elephants; narāṇām—amongst humans; cha—and; nara-adhipam—the king
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S27.mp3"},{chapter_id:10,chapter_number:10,externalId:400,id:400,text:`आयुधानामहं वज्रं धेनूनामस्मि कामधुक्।

प्रजनश्चास्मि कन्दर्पः सर्पाणामस्मि वासुकिः।।10.28।।
 `,title:"Verse 400",verse_number:28,verse_order:400,transliteration:`āyudhānām ahaṁ vajraṁ dhenūnām asmi kāmadhuk
prajanaśh chāsmi kandarpaḥ sarpāṇām asmi vāsukiḥ
`,word_meanings:`āyudhānām—amongst weapons; aham—I; vajram—the Vajra (thunderbolt); dhenūnām—amongst cows; asmi—I am; kāma-dhuk—Kamdhenu; prajanaḥ—amongst causes for procreation; cha—and; asmi—I am; kandarpaḥ—Kaamdev, the god of love; sarpāṇām—amongst serpents; asmi—I am; vāsukiḥ—serpent Vasuki
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S28.mp3"},{chapter_id:10,chapter_number:10,externalId:401,id:401,text:`अनन्तश्चास्मि नागानां वरुणो यादसामहम्।

पितृ़णामर्यमा चास्मि यमः संयमतामहम्।।10.29।।
 `,title:"Verse 401",verse_number:29,verse_order:401,transliteration:`anantaśh chāsmi nāgānāṁ varuṇo yādasām aham
pitṝīṇām aryamā chāsmi yamaḥ sanyamatām aham
`,word_meanings:`anantaḥ—Anant; cha—and; asmi—I am; nāgānām—amongst snakes; varuṇaḥ—the celestial god of the ocean; yādasām—amongst aquatics; aham—I; pitṝīṇām—amongst the departed ancestors; aryamā—Aryama; cha—and; asmi—am; yamaḥ—the celestial god of death; sanyamatām—amongst dispensers of law; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S29.mp3"},{chapter_id:10,chapter_number:10,externalId:402,id:402,text:`प्रह्लादश्चास्मि दैत्यानां कालः कलयतामहम्।

मृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम्।।10.30।।
 `,title:"Verse 402",verse_number:30,verse_order:402,transliteration:`prahlādaśh chāsmi daityānāṁ kālaḥ kalayatām aham
mṛigāṇāṁ cha mṛigendro ’haṁ vainateyaśh cha pakṣhiṇām
`,word_meanings:`prahlādaḥ—Prahlad; cha—and; asmi—I am; daityānām—of the demons; kālaḥ—time; kalayatām—of all that controls; aham—I; mṛigāṇām—amongst animals; cha—and; mṛiga-indraḥ—the lion; aham—I; vainateyaḥ—Garud; cha—and; pakṣhiṇām—amongst birds
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S30.mp3"},{chapter_id:10,chapter_number:10,externalId:403,id:403,text:`पवनः पवतामस्मि रामः शस्त्रभृतामहम्।

झषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी।।10.31।।
 `,title:"Verse 403",verse_number:31,verse_order:403,transliteration:`pavanaḥ pavatām asmi rāmaḥ śhastra-bhṛitām aham
jhaṣhāṇāṁ makaraśh chāsmi srotasām asmi jāhnavī
`,word_meanings:`pavanaḥ—the wind; pavatām—of all that purifies; asmi—I am; rāmaḥ—Ram; śhastra-bhṛitām—of the carriers of weapons; aham—I am; jhaṣhāṇām—of all acquatics; makaraḥ—crocodile; cha—also; asmi—I am; srotasām—of flowing rivers; asmi—I am; jāhnavī—the Ganges
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S31.mp3"},{chapter_id:10,chapter_number:10,externalId:404,id:404,text:`सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन।

अध्यात्मविद्या विद्यानां वादः प्रवदतामहम्।।10.32।।
 `,title:"Verse 404",verse_number:32,verse_order:404,transliteration:`sargāṇām ādir antaśh cha madhyaṁ chaivāham arjuna
adhyātma-vidyā vidyānāṁ vādaḥ pravadatām aham
`,word_meanings:`sargāṇām—of all creations; ādiḥ—the beginning; antaḥ—end; cha—and; madhyam—middle; cha—and; eva—indeed; aham—I; arjuna—Arjun; adhyātma-vidyā—science of spirituality; vidyānām—amongst sciences; vādaḥ—the logical conclusion; pravadatām—of debates; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S32.mp3"},{chapter_id:10,chapter_number:10,externalId:405,id:405,text:`अक्षराणामकारोऽस्मि द्वन्द्वः सामासिकस्य च।

अहमेवाक्षयः कालो धाताऽहं विश्वतोमुखः।।10.33।।
 `,title:"Verse 405",verse_number:33,verse_order:405,transliteration:`अहमेवाक्षय: कालो धाताहं विश्वतोमुख: || 33||

akṣharāṇām a-kāro ’smi dvandvaḥ sāmāsikasya cha
aham evākṣhayaḥ kālo dhātāhaṁ viśhvato-mukhaḥ
`,word_meanings:`akṣharāṇām—amongst all letters; a-kāraḥ—the beginning letter “A”; asmi—I am; dvandvaḥ—the dual; sāmāsikasya—amongst grammatical compounds; cha—and; aham—I; eva—only; akṣhayaḥ—endless; kālaḥ—time; dhātā—amongst the creators; aham—I; viśhwataḥ-mukhaḥ—Brahma
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S33.mp3"},{chapter_id:10,chapter_number:10,externalId:406,id:406,text:`मृत्युः सर्वहरश्चाहमुद्भवश्च भविष्यताम्।

कीर्तिः श्रीर्वाक्च नारीणां स्मृतिर्मेधा धृतिः क्षमा।।10.34।।
 `,title:"Verse 406",verse_number:34,verse_order:406,transliteration:`mṛityuḥ sarva-haraśh chāham udbhavaśh cha bhaviṣhyatām
kīrtiḥ śhrīr vāk cha nārīṇāṁ smṛitir medhā dhṛitiḥ kṣhamā
`,word_meanings:`mṛityuḥ—death; sarva-haraḥ—all-devouring; cha—and; aham—I; udbhavaḥ—the origin; cha—and; bhaviṣhyatām—those things that are yet to be; kīrtiḥ—fame; śhrīḥ—prospective; vāk—fine speech; cha—and; nārīṇām—amongst feminine qualities; smṛitiḥ—memory; medhā—intelligence; dhṛitiḥ—courage; kṣhamā—forgiveness
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S34.mp3"},{chapter_id:10,chapter_number:10,externalId:407,id:407,text:`बृहत्साम तथा साम्नां गायत्री छन्दसामहम्।

मासानां मार्गशीर्षोऽहमृतूनां कुसुमाकरः।।10.35।।
 `,title:"Verse 407",verse_number:35,verse_order:407,transliteration:`bṛihat-sāma tathā sāmnāṁ gāyatrī chhandasām aham
māsānāṁ mārga-śhīrṣho ’ham ṛitūnāṁ kusumākaraḥ
`,word_meanings:`bṛihat-sāma—the Brihatsama; tathā—also; sāmnām—amongst the hymns in the Sama Veda; gāyatrī—the Gayatri mantra; chhandasām—amongst poetic meters; aham—I; māsānām—of the twelve months; mārga-śhīrṣhaḥ—the month of November-December; aham—I; ṛitūnām—of all seasons; kusuma-ākaraḥ—spring
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S35.mp3"},{chapter_id:10,chapter_number:10,externalId:408,id:408,text:`द्यूतं छलयतामस्मि तेजस्तेजस्विनामहम्।

जयोऽस्मि व्यवसायोऽस्मि सत्त्वं सत्त्ववतामहम्।।10.36।।
 `,title:"Verse 408",verse_number:36,verse_order:408,transliteration:`dyūtaṁ chhalayatām asmi tejas tejasvinām aham
jayo ’smi vyavasāyo ’smi sattvaṁ sattvavatām aham
`,word_meanings:`dyūtam—gambling; chhalayatām—of all cheats; asmi—I am; tejaḥ—the splendor; tejasvinām—of the splendid; aham—I; jayaḥ—victory; asmi—I am; vyavasāyaḥ—firm resolve; asmi—I am; sattvam—virtue; sattva-vatām—of the virtuous; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S36.mp3"},{chapter_id:10,chapter_number:10,externalId:409,id:409,text:`वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनंजयः।

मुनीनामप्यहं व्यासः कवीनामुशना कविः।।10.37।।
 `,title:"Verse 409",verse_number:37,verse_order:409,transliteration:`vṛiṣhṇīnāṁ vāsudevo ’smi pāṇḍavānāṁ dhanañjayaḥ
munīnām apyahaṁ vyāsaḥ kavīnām uśhanā kaviḥ
`,word_meanings:`vṛiṣhṇīnām—amongst the descendants of Vrishni; vāsudevaḥ—Krishna, the son of Vasudev; asmi—I am; pāṇḍavānām—amongst the Pandavas; dhanañjayaḥ—Arjun, the conqueror of wealth; munīnām—amongst the sages; api—also; aham—I; vyāsaḥ—Ved Vyas; kavīnām—amongst the great thinkers; uśhanā—Shukracharya; kaviḥ—the thinker
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S37.mp3"},{chapter_id:10,chapter_number:10,externalId:410,id:410,text:`दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम्।

मौनं चैवास्मि गुह्यानां ज्ञानं ज्ञानवतामहम्।।10.38।।
 `,title:"Verse 410",verse_number:38,verse_order:410,transliteration:`daṇḍo damayatām asmi nītir asmi jigīṣhatām
maunaṁ chaivāsmi guhyānāṁ jñānaṁ jñānavatām aham
`,word_meanings:`daṇḍaḥ—punishment; damayatām—amongst means of preventing lawlessness; asmi—I am; nītiḥ—proper conduct; asmi—I am; jigīṣhatām—amongst those who seek victory; maunam—silence; cha—and; eva—also; asmi—I am; guhyānām—amongst secrets; jñānam—wisdom; jñāna-vatām—in the wise; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S38.mp3"},{chapter_id:10,chapter_number:10,externalId:411,id:411,text:`यच्चापि सर्वभूतानां बीजं तदहमर्जुन।

न तदस्ति विना यत्स्यान्मया भूतं चराचरम्।।10.39।।
 `,title:"Verse 411",verse_number:39,verse_order:411,transliteration:`yach chāpi sarva-bhūtānāṁ bījaṁ tad aham arjuna
na tad asti vinā yat syān mayā bhūtaṁ charācharam
`,word_meanings:`yat—which; cha—and; api—also; sarva-bhūtānām—of all living beings; bījam—generating seed; tat—that; aham—I; arjuna—Arjun; na—not; tat—that; asti—is; vinā—without; yat—which; syāt—may exist; mayā—me; bhūtam—creature; chara-acharam—moving and nonmoving
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S39.mp3"},{chapter_id:10,chapter_number:10,externalId:412,id:412,text:`नान्तोऽस्ति मम दिव्यानां विभूतीनां परंतप।

एष तूद्देशतः प्रोक्तो विभूतेर्विस्तरो मया।।10.40।।
 `,title:"Verse 412",verse_number:40,verse_order:412,transliteration:`nānto ’sti mama divyānāṁ vibhūtīnāṁ parantapa
eṣha tūddeśhataḥ prokto vibhūter vistaro mayā
`,word_meanings:`na—not; antaḥ—end; asti—is; mama—my; divyānām—divine; vibhūtīnām—manifestations; parantapa—Arjun, the conqueror of the enemies; eṣhaḥ—this; tu—but; uddeśhataḥ—just one portion; proktaḥ—declared; vibhūteḥ—of (my) glories; vistaraḥ—the breath of the topic; mayā—by me
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S40.mp3"},{chapter_id:10,chapter_number:10,externalId:413,id:413,text:`यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।

तत्तदेवावगच्छ त्वं मम तेजोंऽशसंभवम्।।10.41।।
 `,title:"Verse 413",verse_number:41,verse_order:413,transliteration:`yad yad vibhūtimat sattvaṁ śhrīmad ūrjitam eva vā
tat tad evāvagachchha tvaṁ mama tejo ’nśha-sambhavam
`,word_meanings:`yat yat—whatever; vibhūtimat—opulent; sattvam—being; śhrī-mat—beautiful; ūrjitam—glorious; eva—also; vā—or; tat tat—all that; eva—only; avagachchha—know; tvam—you; mama—my; tejaḥ-anśha-sambhavam—splendor; anśha—a part; sambhavam—born of
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S41.mp3"},{chapter_id:10,chapter_number:10,externalId:414,id:414,text:`अथवा बहुनैतेन किं ज्ञातेन तवार्जुन।

विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत्।।10.42।।
 `,title:"Verse 414",verse_number:42,verse_order:414,transliteration:`atha vā bahunaitena kiṁ jñātena tavārjuna
viṣhṭabhyāham idaṁ kṛitsnam ekānśhena sthito jagat
`,word_meanings:`athavā—or; bahunā—detailed; etena—by this; kim—what; jñātena tava—can be known by you; arjuna—Arjun; viṣhṭabhya—pervade and support; aham—I; idam—this; kṛitsnam—entire; eka—by one; anśhena—fraction; sthitaḥ—am situated; jagat—creation
`,Play:"https://testapi1test.blob.core.windows.net/test/10/Ch10S42.mp3"},{chapter_id:11,chapter_number:11,externalId:415,id:415,text:`अर्जुन उवाच

मदनुग्रहाय परमं गुह्यमध्यात्मसंज्ञितम्।

यत्त्वयोक्तं वचस्तेन मोहोऽयं विगतो मम।।11.1।।
 `,title:"Verse 415",verse_number:1,verse_order:415,transliteration:`arjuna uvācha
mad-anugrahāya paramaṁ guhyam adhyātma-sanjñitam
yat tvayoktaṁ vachas tena moho ’yaṁ vigato mama
`,word_meanings:`arjunaḥ uvācha—Arjun said; mat-anugrahāya—out of compassion to me; paramam—supreme; guhyam—confidential; adhyātma-sanjñitam—about spiritual knowledge; yat—which; tvayā—by you; uktam—spoken; vachaḥ—words; tena—by that; mohaḥ—illusion; ayam—this; vigataḥ—is dispelled; mama—my
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S01.mp3"},{chapter_id:11,chapter_number:11,externalId:416,id:416,text:`भवाप्ययौ हि भूतानां श्रुतौ विस्तरशो मया।

त्वत्तः कमलपत्राक्ष माहात्म्यमपि चाव्ययम्।।11.2।।
 `,title:"Verse 416",verse_number:2,verse_order:416,transliteration:`bhavāpyayau hi bhūtānāṁ śhrutau vistaraśho mayā
tvattaḥ kamala-patrākṣha māhātmyam api chāvyayam
`,word_meanings:`bhava—appearance; apyayau—disappearance; hi—indeed; bhūtānām—of all living beings; śhrutau—have heard; vistaraśhaḥ—in detail; mayā—by me; tvattaḥ—from you; kamala-patra-akṣha—lotus-eyed one; māhātmyam—greatness; api—also; cha—and; avyayam—eternal
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S02.mp3"},{chapter_id:11,chapter_number:11,externalId:417,id:417,text:`एवमेतद्यथात्थ त्वमात्मानं परमेश्वर।

द्रष्टुमिच्छामि ते रूपमैश्वरं पुरुषोत्तम।।11.3।।
 `,title:"Verse 417",verse_number:3,verse_order:417,transliteration:`evam etad yathāttha tvam ātmānaṁ parameśhvara
draṣhṭum ichchhāmi te rūpam aiśhwaraṁ puruṣhottama
`,word_meanings:`evam—thus; etat—this; yathā—as; āttha—have spoken; tvam—you; ātmānam—yourself; parama-īśhvara—Supreme Lord; draṣhṭum—to see; ichchhāmi—I desire; te—your; rūpam—form; aiśhwaram—divine; puruṣha-uttama—Shree Krishna, the Supreme Divine Personality
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S03.mp3"},{chapter_id:11,chapter_number:11,externalId:418,id:418,text:`मन्यसे यदि तच्छक्यं मया द्रष्टुमिति प्रभो।

योगेश्वर ततो मे त्वं दर्शयाऽत्मानमव्ययम्।।11.4।।
 `,title:"Verse 418",verse_number:4,verse_order:418,transliteration:`manyase yadi tach chhakyaṁ mayā draṣhṭum iti prabho
yogeśhvara tato me tvaṁ darśhayātmānam avyayam
`,word_meanings:`manyase—you think; yadi—if; tat—that; śhakyam—possible; mayā—by me; draṣhṭum—to behold; iti—thus; prabho—Lord; yoga-īśhvara—Lord of all mystic powers; tataḥ—then; me—to me; tvam—you; darśhaya—reveal; ātmānam—yourself; avyayam—imperishable
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S04.mp3"},{chapter_id:11,chapter_number:11,externalId:419,id:419,text:`श्री भगवानुवाच

पश्य मे पार्थ रूपाणि शतशोऽथ सहस्रशः।

नानाविधानि दिव्यानि नानावर्णाकृतीनि च।।11.5।।
 `,title:"Verse 419",verse_number:5,verse_order:419,transliteration:`śhrī-bhagavān uvācha
paśhya me pārtha rūpāṇi śhataśho ’tha sahasraśhaḥ
nānā-vidhāni divyāni nānā-varṇākṛitīni cha
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; paśhya—behold; me—my; pārtha—Arjun, the son of Pritha; rūpāṇi—forms; śhataśhaḥ—by the hundreds; atha—and; sahasraśhaḥ—thousands; nānā-vidhāni—various; divyāni—divine; nānā—various; varṇa—colors; ākṛitīni—shapes; cha—and
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S05.mp3"},{chapter_id:11,chapter_number:11,externalId:420,id:420,text:`पश्यादित्यान्वसून्रुद्रानश्िवनौ मरुतस्तथा।

बहून्यदृष्टपूर्वाणि पश्याऽश्चर्याणि भारत।।11.6।।
 `,title:"Verse 420",verse_number:6,verse_order:420,transliteration:`paśhyādityān vasūn rudrān aśhvinau marutas tathā
bahūny adṛiṣhṭa-pūrvāṇi paśhyāśhcharyāṇi bhārata
`,word_meanings:`paśhya—behold; ādityān—the (twelve) sons of Aditi; vasūn—the (eight) Vasus; rudrān—the (eleven) Rudras; aśhvinau—the (twin) Ashvini Kumars; marutaḥ—the (forty-nine) Maruts; tathā—and; bahūni—many; adṛiṣhṭa—never revealed; pūrvāṇi—before; paśhya—behold; āśhcharyāṇi—marvels; bhārata—Arjun, scion of the Bharatas
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S06.mp3"},{chapter_id:11,chapter_number:11,externalId:421,id:421,text:`इहैकस्थं जगत्कृत्स्नं पश्याद्य सचराचरम्।

मम देहे गुडाकेश यच्चान्यद्द्रष्टुमिच्छसि।।11.7।।
 `,title:"Verse 421",verse_number:7,verse_order:421,transliteration:`ihaika-sthaṁ jagat kṛitsnaṁ paśhyādya sa-charācharam
mama dehe guḍākeśha yach chānyad draṣhṭum ichchhasi
`,word_meanings:`iha—here; eka-stham—assembled together; jagat—the universe; kṛitsnam—entire; paśhya—behold; adya—now; sa—with; chara—the moving; acharam—the non- moving; mama—my; dehe—in this form; guḍākeśha—Arjun, the conqueror of sleep; yat—whatever; cha—also; anyat—else; draṣhṭum—to see; ichchhasi—you wish
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S07.mp3"},{chapter_id:11,chapter_number:11,externalId:422,id:422,text:`न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा।

दिव्यं ददामि ते चक्षुः पश्य मे योगमैश्वरम्।।11.8।।
 `,title:"Verse 422",verse_number:8,verse_order:422,transliteration:`na tu māṁ śhakyase draṣhṭum anenaiva sva-chakṣhuṣhā
divyaṁ dadāmi te chakṣhuḥ paśhya me yogam aiśhwaram
`,word_meanings:`na—not; tu—but; mām—me; śhakyase—you can; draṣhṭum—to see; anena—with these; eva—even; sva-chakṣhuṣhā—with your physical eyes; divyam—divine; dadāmi—I give; te—to you; chakṣhuḥ—eyes; paśhya—behold; me—my; yogam aiśhwaram—majestic opulence
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S08.mp3"},{chapter_id:11,chapter_number:11,externalId:423,id:423,text:`सञ्जय उवाच

एवमुक्त्वा ततो राजन्महायोगेश्वरो हरिः।

दर्शयामास पार्थाय परमं रूपमैश्वरम्।।11.9।।
 `,title:"Verse 423",verse_number:9,verse_order:423,transliteration:`sañjaya uvācha
evam uktvā tato rājan mahā-yogeśhvaro hariḥ
darśhayām āsa pārthāya paramaṁ rūpam aiśhwaram
`,word_meanings:`sañjayaḥ uvācha—Sanjay said; evam—thus; uktvā—having spoken; tataḥ—then; rājan—King; mahā-yoga-īśhvaraḥ—the Supreme Lord of Yog; hariḥ—Shree Krishna; darśhayām āsa—displayed; pārthāya—to Arjun; paramam—divine; rūpam aiśhwaram—opulence
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S09.mp3"},{chapter_id:11,chapter_number:11,externalId:424,id:424,text:`अनेकवक्त्रनयनमनेकाद्भुतदर्शनम्।

अनेकदिव्याभरणं दिव्यानेकोद्यतायुधम्।।11.10।।
 `,title:"Verse 424",verse_number:10,verse_order:424,transliteration:`aneka-vaktra-nayanam anekādbhuta-darśhanam
aneka-divyābharaṇaṁ divyānekodyatāyudham
`,word_meanings:`aneka—many; vaktra—faces; nayanam—eyes; aneka—many; adbhuta—wonderful; darśhanam—had a vision of; aneka—many; divya—divine; ābharaṇam—ornaments; divya—divine; aneka—many; udyata—uplifted; āyudham—weapons;
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S10.mp3"},{chapter_id:11,chapter_number:11,externalId:425,id:425,text:`दिव्यमाल्याम्बरधरं दिव्यगन्धानुलेपनम्।

सर्वाश्चर्यमयं देवमनन्तं विश्वतोमुखम्।।11.11।।
 `,title:"Verse 425",verse_number:11,verse_order:425,transliteration:`divya-mālyāmbara-dharaṁ divya-gandhānulepanam
sarvāśhcharya-mayaṁ devam anantaṁ viśhvato-mukham
`,word_meanings:`divya—divine; mālya—garlands; āmbara—garments; dharam—wearing; divya—divine; gandha—fragrances; anulepanam—anointed with; sarva—all; āśhcharya-mayam—wonderful; devam—Lord; anantam—unlimited; viśhwataḥ—all sides; mukham—face
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S11.mp3"},{chapter_id:11,chapter_number:11,externalId:426,id:426,text:`दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता।

यदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः।।11.12।।
 `,title:"Verse 426",verse_number:12,verse_order:426,transliteration:`divi sūrya-sahasrasya bhaved yugapad utthitā
yadi bhāḥ sadṛiśhī sā syād bhāsas tasya mahātmanaḥ
`,word_meanings:`divi—in the sky; sūrya—suns; sahasrasya—thousand; bhavet—were; yugapat—simultaneously; utthitā—rising; yadi—if; bhāḥ—splendor; sadṛiśhī—like; sā—that; syāt—would be; bhāsaḥ—splendor; tasya—of them; mahā-ātmanaḥ—the great personality
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S12.mp3"},{chapter_id:11,chapter_number:11,externalId:427,id:427,text:`तत्रैकस्थं जगत्कृत्स्नं प्रविभक्तमनेकधा।

अपश्यद्देवदेवस्य शरीरे पाण्डवस्तदा।।11.13।।
 `,title:"Verse 427",verse_number:13,verse_order:427,transliteration:`tatraika-sthaṁ jagat kṛitsnaṁ pravibhaktam anekadhā
apaśhyad deva-devasya śharīre pāṇḍavas tadā
`,word_meanings:`tatra—there; eka-stham—established in one place; jagat—the universe; kṛitsnam—entire; pravibhaktam—divided; anekadhā—many; apaśhyat—could see; deva-devasya—of the God of gods; śharīre—in the body; pāṇḍavaḥ—Arjun; tadā—at that time
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S13.mp3"},{chapter_id:11,chapter_number:11,externalId:428,id:428,text:`ततः स विस्मयाविष्टो हृष्टरोमा धनञ्जयः।

प्रणम्य शिरसा देवं कृताञ्जलिरभाषत।।11.14।।
 `,title:"Verse 428",verse_number:14,verse_order:428,transliteration:`tataḥ sa vismayāviṣhṭo hṛiṣhṭa-romā dhanañjayaḥ
praṇamya śhirasā devaṁ kṛitāñjalir abhāṣhata
`,word_meanings:`tataḥ—then; saḥ—he; vismaya-āviṣhṭaḥ—full of wonder; hṛiṣhṭa-romā—with hair standing on end; dhanañjayaḥ—Arjun, the conqueror of wealth; praṇamya—bow down; śhirasā—with (his) head; devam—the Lord; kṛita-añjaliḥ—with folded hands; abhāṣhata—he addressed
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S14.mp3"},{chapter_id:11,chapter_number:11,externalId:429,id:429,text:`अर्जुन उवाच

पश्यामि देवांस्तव देव देहे

सर्वांस्तथा भूतविशेषसङ्घान्।

ब्रह्माणमीशं कमलासनस्थ

मृषींश्च सर्वानुरगांश्च दिव्यान्।।11.15।।
 `,title:"Verse 429",verse_number:15,verse_order:429,transliteration:`arjuna uvācha
paśhyāmi devāns tava deva dehe
sarvāns tathā bhūta-viśheṣha-saṅghān
brahmāṇam īśhaṁ kamalāsana-stham
ṛiṣhīnśh cha sarvān uragānśh cha divyān
`,word_meanings:`arjunaḥ uvācha—Arjun said; paśhyāmi—I behold; devān—all the gods; tava—your; deva—Lord; dehe—within the body; sarvān—all; tathā—as well as; bhūta viśheṣha-saṅghān—hosts of different beings; brahmāṇam—Lord Brahma; īśham—Shiv; kamala-āsana-stham—seated on the lotus flower; ṛiṣhīn—sages; cha—and; sarvān—all; uragān—serpents; cha—and; divyān—divine
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S15.mp3"},{chapter_id:11,chapter_number:11,externalId:430,id:430,text:`अनेकबाहूदरवक्त्रनेत्रं

पश्यामि त्वां सर्वतोऽनन्तरूपम्।

नान्तं न मध्यं न पुनस्तवादिं

पश्यामि विश्वेश्वर विश्वरूप।।11.16।।
 `,title:"Verse 430",verse_number:16,verse_order:430,transliteration:`aneka-bāhūdara-vaktra-netraṁ
paśhyāmi tvāṁ sarvato ’nanta-rūpam
nāntaṁ na madhyaṁ na punas tavādiṁ
paśhyāmi viśhveśhvara viśhva-rūpa
`,word_meanings:`aneka—infinite; bāhu—arms; udara—stomachs; vaktra—faces; netram—eyes; paśhyāmi—I see; tvām—you; sarvataḥ—in every direction; ananta-rūpam—inifinite forms; na antam—without end; na—not; madhyam—middle; na—no; punaḥ—again; tava—your; ādim—beginning; paśhyāmi—I see; viśhwa-īśhwara—The Lord of the universe; viśhwa-rūpa—universal form
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S16.mp3"},{chapter_id:11,chapter_number:11,externalId:431,id:431,text:`किरीटिनं गदिनं चक्रिणं च

तेजोराशिं सर्वतोदीप्तिमन्तम्।

पश्यामि त्वां दुर्निरीक्ष्यं समन्ता

द्दीप्तानलार्कद्युतिमप्रमेयम्।।11.17।।
 `,title:"Verse 431",verse_number:17,verse_order:431,transliteration:`kirīṭinaṁ gadinaṁ chakriṇaṁ cha
tejo-rāśhiṁ sarvato dīptimantam
paśhyāmi tvāṁ durnirīkṣhyaṁ samantād
dīptānalārka-dyutim aprameyam
`,word_meanings:`kirīṭinam—adorned with a crown; gadinam—with club; chakriṇam—with discs; cha—and; tejaḥ-rāśhim—abode of splendor; sarvataḥ—everywhere; dīpti-mantam—shining; paśhyāmi—I see; tvām—you; durnirīkṣhyam—difficult to look upon; samantāt—in all directions; dīpta-anala—blazing fire; arka—like the sun; dyutim—effulgence; aprameyam—immeasurable
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S17.mp3"},{chapter_id:11,chapter_number:11,externalId:432,id:432,text:`त्वमक्षरं परमं वेदितव्यं

त्वमस्य विश्वस्य परं निधानम्।

त्वमव्ययः शाश्वतधर्मगोप्ता

सनातनस्त्वं पुरुषो मतो मे।।11.18।।
 `,title:"Verse 432",verse_number:18,verse_order:432,transliteration:`tvam akṣharaṁ paramaṁ veditavyaṁ
tvam asya viśhvasya paraṁ nidhānam
tvam avyayaḥ śhāśhvata-dharma-goptā
sanātanas tvaṁ puruṣho mato me
`,word_meanings:`tvam—you; akṣharam—the imperishable; paramam—the supreme being; veditavyam—worthy of being known; tvam—you; asya—of this; viśhwasya—of the creation; param—supreme; nidhānam—support; tvam—you; avyayaḥ—eternal; śhāśhvata-dharma-goptā—protector of the eternal religion; sanātanaḥ—everlasting; tvam—you; puruṣhaḥ—the Supreme Divine Person; mataḥ me—my opinion
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S18.mp3"},{chapter_id:11,chapter_number:11,externalId:433,id:433,text:`अनादिमध्यान्तमनन्तवीर्य

मनन्तबाहुं शशिसूर्यनेत्रम्।

पश्यामि त्वां दीप्तहुताशवक्त्रम्

स्वतेजसा विश्वमिदं तपन्तम्।।11.19।।
 `,title:"Verse 433",verse_number:19,verse_order:433,transliteration:`स्वतेजसा विश्वमिदं तपन्तम् || 19||
`,word_meanings:`anādi-madhyāntam ananta-vīryam
ananta-bāhuṁ śhaśhi-sūrya-netram
paśhyāmi tvāṁ dīpta-hutāśha-vaktraṁ
sva-tejasā viśhvam idaṁ tapantam
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S19.mp3"},{chapter_id:11,chapter_number:11,externalId:434,id:434,text:`द्यावापृथिव्योरिदमन्तरं हि

व्याप्तं त्वयैकेन दिशश्च सर्वाः।

दृष्ट्वाऽद्भुतं रूपमुग्रं तवेदं

लोकत्रयं प्रव्यथितं महात्मन्।।11.20।।
 `,title:"Verse 434",verse_number:20,verse_order:434,transliteration:`dyāv ā-pṛithivyor idam antaraṁ hi
vyāptaṁ tvayaikena diśhaśh cha sarvāḥ
dṛiṣhṭvādbhutaṁ rūpam ugraṁ tavedaṁ
loka-trayaṁ pravyathitaṁ mahātman
`,word_meanings:`dyau-ā-pṛithivyoḥ—between heaven and earth; idam—this; antaram—space between; hi—indeed; vyāptam—pervaded; tvayā—by you; ekena—alone; diśhaḥ—directions; cha—and; sarvāḥ—all; dṛiṣhṭvā—seeing; adbhutam—wondrous; rūpam—form; ugram—terrible; tava—your; idam—this; loka—worlds; trayam—three; pravyathitam—trembling; mahā-ātman—The greatest of all beings
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S20.mp3"},{chapter_id:11,chapter_number:11,externalId:435,id:435,text:`अमी हि त्वां सुरसङ्घाः विशन्ति

केचिद्भीताः प्राञ्जलयो गृणन्ति।

स्वस्तीत्युक्त्वा महर्षिसिद्धसङ्घाः

स्तुवन्ति त्वां स्तुतिभिः पुष्कलाभिः।।11.21।।
 `,title:"Verse 435",verse_number:21,verse_order:435,transliteration:`amī hi tvāṁ sura-saṅghā viśhanti
kechid bhītāḥ prāñjalayo gṛiṇanti
svastīty uktvā maharṣhi-siddha-saṅghāḥ
stuvanti tvāṁ stutibhiḥ puṣhkalābhiḥ
`,word_meanings:`amī—these; hi—indeed; tvām—you; sura-saṅghāḥ—assembly of celestial gods; viśhanti—are entering; kechit—some; bhītāḥ—in fear; prāñjalayaḥ—with folded hands; gṛiṇanti—praise; svasti—auspicious; iti—thus; uktvā—reciting; mahā-ṛiṣhi—great sages; siddha-saṅghāḥ—perfect beings; stuvanti—are extolling; tvām—you; stutibhiḥ—with prayers; puṣhkalābhiḥ—hymns
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S21.mp3"},{chapter_id:11,chapter_number:11,externalId:436,id:436,text:`रुद्रादित्या वसवो ये च साध्या

विश्वेऽश्िवनौ मरुतश्चोष्मपाश्च।

गन्धर्वयक्षासुरसिद्धसङ्घा

वीक्षन्ते त्वां विस्मिताश्चैव सर्वे।।11.22।।
 `,title:"Verse 436",verse_number:22,verse_order:436,transliteration:`rudrādityā vasavo ye cha sādhyā
viśhve ’śhvinau marutaśh choṣhmapāśh cha
gandharva-yakṣhāsura-siddha-saṅghā
vīkṣhante tvāṁ vismitāśh chaiva sarve
`,word_meanings:`rudra—a form of Lord Shiv; ādityāḥ—the Adityas; vasavaḥ—the Vasus; ye—these; cha—and; sādhyāḥ—the Sadhyas; viśhve—the Vishvadevas; aśhvinau—the Ashvini kumars; marutaḥ—the Maruts; cha—and; uṣhma-pāḥ—the ancestors; cha—and; gandharva—Gandharvas; yakṣha—the Yakshas; asura—the demons; siddha—the perfected beings; saṅghāḥ—the assemblies; vīkṣhante—are beholding; tvām—you; vismitāḥ—in wonder; cha—and; eva—verily; sarve—all
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S22.mp3"},{chapter_id:11,chapter_number:11,externalId:437,id:437,text:`रूपं महत्ते बहुवक्त्रनेत्रं

महाबाहो बहुबाहूरुपादम्।

बहूदरं बहुदंष्ट्राकरालं

दृष्ट्वा लोकाः प्रव्यथितास्तथाऽहम्।।11.23।।
 `,title:"Verse 437",verse_number:23,verse_order:437,transliteration:`rūpaṁ mahat te bahu-vaktra-netraṁ
mahā-bāho bahu-bāhūru-pādam
bahūdaraṁ bahu-danṣhṭrā-karālaṁ
dṛiṣhṭvā lokāḥ pravyathitās tathāham
`,word_meanings:`rūpam—form; mahat—magnificent; te—your; bahu—many; vaktra—mouths; netram—eyes; mahā-bāho—mighty-armed Lord; bahu—many; bāhu—arms; ūru—thighs; pādam—legs; bahu-udaram—many stomachs; bahu-danṣhṭrā—many teeth; karālam—terrifying; dṛiṣhṭvā—seeing; lokāḥ—all the worlds; pravyathitāḥ—terror-stricken; tathā—so also; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S23.mp3"},{chapter_id:11,chapter_number:11,externalId:438,id:438,text:`नभःस्पृशं दीप्तमनेकवर्णं

व्यात्ताननं दीप्तविशालनेत्रम्।

दृष्ट्वा हि त्वां प्रव्यथितान्तरात्मा

धृतिं न विन्दामि शमं च विष्णो।।11.24।।
 `,title:"Verse 438",verse_number:24,verse_order:438,transliteration:`nabhaḥ-spṛiśhaṁ dīptam aneka-varṇaṁ
vyāttānanaṁ dīpta-viśhāla-netram
dṛiṣhṭvā hi tvāṁ pravyathitāntar-ātmā
dhṛitiṁ na vindāmi śhamaṁ cha viṣhṇo
`,word_meanings:`nabhaḥ-spṛiśham—touching the sky; dīptam—effulgent; aneka—many; varṇam—colors; vyātta—open; ānanam—mouths; dīpta—blazing; viśhāla—enormous; netram—eyes; dṛiṣhṭvā—seeing; hi—indeed; tvām—you; pravyathitāntar-ātmā—my heart is trembling with fear; dhṛitim—firmness; na—not; vindāmi—I find; śhamam—mental peace; cha—and; viṣhṇo—Lord Vishnu
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S24.mp3"},{chapter_id:11,chapter_number:11,externalId:439,id:439,text:`दंष्ट्राकरालानि च ते मुखानि

दृष्ट्वैव कालानलसन्निभानि।

दिशो न जाने न लभे च शर्म

प्रसीद देवेश जगन्निवास।।11.25।।
 `,title:"Verse 439",verse_number:25,verse_order:439,transliteration:`danṣhṭrā-karālāni cha te mukhāni
dṛiṣhṭvaiva kālānala-sannibhāni
diśho na jāne na labhe cha śharma
prasīda deveśha jagan-nivāsa
`,word_meanings:`danṣhṭrā—teeth; karālāni—terrible; cha—and; te—your; mukhāni—mouths; dṛiṣhṭvā—having seen; eva—indeed; kāla-anala—the fire of annihilation; sannibhāni—resembling; diśhaḥ—the directions; na—not; jāne—know; na—not; labhe—I obtain; cha—and; śharma—peace; prasīda—have mercy; deva-īśha—The Lord of lords; jagat-nivāsa—The shelter of the universe
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S25.mp3"},{chapter_id:11,chapter_number:11,externalId:440,id:440,text:`अमी च त्वां धृतराष्ट्रस्य पुत्राः

सर्वे सहैवावनिपालसङ्घैः।

भीष्मो द्रोणः सूतपुत्रस्तथाऽसौ

सहास्मदीयैरपि योधमुख्यैः।।11.26।।
 `,title:"Verse 440",verse_number:26,verse_order:440,transliteration:`amī cha tvāṁ dhṛitarāśhtrasya putrāḥ
sarve sahaivāvani-pāla-saṅghaiḥ
bhīṣhmo droṇaḥ sūta-putras tathāsau
sahāsmadīyair api yodha-mukhyaiḥ
 vaktrāṇi te tvaramāṇā viśhanti
danṣhṭrā-karālāni bhayānakāni
kechid vilagnā daśhanāntareṣhu
sandṛiśhyante chūrṇitair uttamāṅgaiḥ
`,word_meanings:`amī—these; cha—and; tvām—you; dhṛitarāśhtrasya—of Dhritarashtra; putrāḥ—sons; sarve—all; saha—with; eva—even; avani-pāla—their allied kings; sanghaiḥ—assembly; bhīṣhmaḥ—Bheeshma; droṇaḥ—Dronacharya; sūta-putraḥ—Karna; tathā—and also; asau—this; saha—with; asmadīyaiḥ—from our side; api—also; yodha-mukhyaiḥ—generals;
 vaktrāṇi—mouths; te—your; tvaramāṇāḥ—rushing; viśhanti—enter; danṣhṭrā—teeth; karālāni—terrible; bhayānakāni—fearsome; kechit—some; vilagnāḥ—getting stuck; daśhana-antareṣhu—between the teeth; sandṛiśhyante—are seen; chūrṇitaiḥ—getting smashed; uttama-aṅgaiḥ—heads
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S26.mp3"},{chapter_id:11,chapter_number:11,externalId:441,id:441,text:`वक्त्राणि ते त्वरमाणा विशन्ति

दंष्ट्राकरालानि भयानकानि।

केचिद्विलग्ना दशनान्तरेषु

संदृश्यन्ते चूर्णितैरुत्तमाङ्गैः।।11.27।।
 `,title:"Verse 441",verse_number:27,verse_order:441,transliteration:"vaktrāṇi te  tvaramāṇā   viśanti daṁṣṭrā-karālāni    bhayānakāni kecid   vilagnā daśanāntareṣu   sandṛśyante cūrṇitair   uttamāṅgaiḥ",word_meanings:"vaktrāṇi—mouths;   te—Your;    tvaramāṇāḥ—fearful;     viśanti—entering;   daṁṣṭrā—teeth;  karālāni—terrible;  bhayānakāni—very    fearful;    kecit—some  of  them;   vilagnāḥ—being  attacked;   daśanāntareṣu—between   the teeth;  sandṛśyante—being   seen;   cūrṇitaiḥ—smashed;  uttama-aṅgaiḥ—by    the head",Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S27.mp3"},{chapter_id:11,chapter_number:11,externalId:442,id:442,text:`यथा नदीनां बहवोऽम्बुवेगाः

समुद्रमेवाभिमुखाः द्रवन्ति।

तथा तवामी नरलोकवीरा

विशन्ति वक्त्राण्यभिविज्वलन्ति।।11.28।।
 `,title:"Verse 442",verse_number:28,verse_order:442,transliteration:`yathā nadīnāṁ bahavo ’mbu-vegāḥ
samudram evābhimukhā dravanti
tathā tavāmī nara-loka-vīrā
viśhanti vaktrāṇy abhivijvalanti
`,word_meanings:`yathā—as; nadīnām—of the rivers; bahavaḥ—many; ambu-vegāḥ—water waves; samudram—the ocean; eva—indeed; abhimukhāḥ—toward; dravanti—flowing rapidly; tathā—similarly; tava—your; amī—these; nara-loka-vīrāḥ—kings of human society; viśhanti—enter; vaktrāṇi—mouths; abhivijvalanti—blazing;
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S28.mp3"},{chapter_id:11,chapter_number:11,externalId:443,id:443,text:`यथा प्रदीप्तं ज्वलनं पतङ्गा

विशन्ति नाशाय समृद्धवेगाः।

तथैव नाशाय विशन्ति लोका

स्तवापि वक्त्राणि समृद्धवेगाः।।11.29।।
 `,title:"Verse 443",verse_number:29,verse_order:443,transliteration:`yathā pradīptaṁ jvalanaṁ pataṅgā
viśhanti nāśhāya samṛiddha-vegāḥ
tathaiva nāśhāya viśhanti lokās
tavāpi vaktrāṇi samṛiddha-vegāḥ
`,word_meanings:`yathā—as; pradīptam—blazing; jvalanam—fire; pataṅgāḥ—moths; viśhanti—enter; nāśhāya—to be perished; samṛiddha vegāḥ—with great speed; tathā eva—similarly; nāśhāya—to be perished; viśhanti—enter; lokāḥ—these people; tava—your; api—also; vaktrāṇi—mouths; samṛiddha-vegāḥ—with great speed
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S29.mp3"},{chapter_id:11,chapter_number:11,externalId:444,id:444,text:`लेलिह्यसे ग्रसमानः समन्ता

ल्लोकान्समग्रान्वदनैर्ज्वलद्भिः।

तेजोभिरापूर्य जगत्समग्रं

भासस्तवोग्राः प्रतपन्ति विष्णो।।11.30।।
 `,title:"Verse 444",verse_number:30,verse_order:444,transliteration:`lelihyase grasamānaḥ samantāl
lokān samagrān vadanair jvaladbhiḥ
tejobhir āpūrya jagat samagraṁ
bhāsas tavogrāḥ pratapanti viṣhṇo
`,word_meanings:`lelihyase—you are licking; grasamānaḥ—devouring; samantāt—on all sides; lokān—worlds; samagrān—all; vadanaiḥ—with mouths; jvaladbhiḥ—blazing; tejobhiḥ—by effulgence; āpūrya—filled with; jagat—the universe; samagram—all; bhāsaḥ—rays; tava—your; ugrāḥ—fierce; pratapanti—scorching; viṣhṇo—Lord Vishnu
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S30.mp3"},{chapter_id:11,chapter_number:11,externalId:445,id:445,text:`आख्याहि मे को भवानुग्ररूपो

नमोऽस्तु ते देववर प्रसीद।

विज्ञातुमिच्छामि भवन्तमाद्यं

न हि प्रजानामि तव प्रवृत्तिम्।।11.31।।
 `,title:"Verse 445",verse_number:31,verse_order:445,transliteration:`ākhyāhi me ko bhavān ugra-rūpo
namo ’stu te deva-vara prasīda
vijñātum ichchhāmi bhavantam ādyaṁ
na hi prajānāmi tava pravṛittim
`,word_meanings:`ākhyāhi—tell; me—me; kaḥ—who; bhavān—you; ugra-rūpaḥ—fierce form; namaḥ astu—I bow; te—to you; deva-vara—God of gods; prasīda—be merciful; vijñātum—to know; ichchhāmi—I wish; bhavantam—you; ādyam—the primeval; na—not; hi—because; prajānāmi—comprehend; tava—your; pravṛittim—workings
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S31.mp3"},{chapter_id:11,chapter_number:11,externalId:446,id:446,text:`श्री भगवानुवाच

कालोऽस्मि लोकक्षयकृत्प्रवृद्धो

लोकान्समाहर्तुमिह प्रवृत्तः।

ऋतेऽपि त्वां न भविष्यन्ति सर्वे

येऽवस्थिताः प्रत्यनीकेषु योधाः।।11.32।।
 `,title:"Verse 446",verse_number:32,verse_order:446,transliteration:`śhrī-bhagavān uvācha
kālo ’smi loka-kṣhaya-kṛit pravṛiddho
lokān samāhartum iha pravṛittaḥ
ṛite ’pi tvāṁ na bhaviṣhyanti sarve
ye ’vasthitāḥ pratyanīkeṣhu yodhāḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; kālaḥ—time; asmi—I am; loka-kṣhaya-kṛit—the source of destruction of the worlds; pravṛiddhaḥ—mighty; lokān—the worlds; samāhartum—annihilation; iha—this world; pravṛittaḥ—participation; ṛite—without; api—even; tvām—you; na bhaviṣhyanti—shall cease to exist; sarve—all; ye—who; avasthitāḥ—arrayed; prati-anīkeṣhu—in the opposing army; yodhāḥ—the warriors
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S32.mp3"},{chapter_id:11,chapter_number:11,externalId:447,id:447,text:`तस्मात्त्वमुत्तिष्ठ यशो लभस्व

जित्वा शत्रून् भुङ्क्ष्व राज्यं समृद्धम्।

मयैवैते निहताः पूर्वमेव

निमित्तमात्रं भव सव्यसाचिन्।।11.33।।
 `,title:"Verse 447",verse_number:33,verse_order:447,transliteration:`tasmāt tvam uttiṣhṭha yaśho labhasva
jitvā śhatrūn bhuṅkṣhva rājyaṁ samṛiddham
mayaivaite nihatāḥ pūrvam eva
nimitta-mātraṁ bhava savya-sāchin
`,word_meanings:`tasmāt—therefore; tvam—you; uttiṣhṭha—arise; yaśhaḥ—honor; labhasva—attain; jitvā—conquer; śhatrūn—foes; bhuṅkṣhva—enjoy; rājyam—kingdom; samṛiddham—prosperous; mayā—by me; eva—indeed; ete—these; nihatāḥ—slain; pūrvam—already; eva nimitta-mātram—only an instrument; bhava—become; savya-sāchin—Arjun, the one who can shoot arrows with both hands
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S33.mp3"},{chapter_id:11,chapter_number:11,externalId:448,id:448,text:`द्रोणं च भीष्मं च जयद्रथं च

कर्णं तथाऽन्यानपि योधवीरान्।

मया हतांस्त्वं जहि मा व्यथिष्ठा

युध्यस्व जेतासि रणे सपत्नान्।।11.34।।
 `,title:"Verse 448",verse_number:34,verse_order:448,transliteration:`droṇaṁ cha bhīṣhmaṁ cha jayadrathaṁ cha
karṇaṁ tathānyān api yodha-vīrān
mayā hatāṁs tvaṁ jahi mā vyathiṣhṭhā
yudhyasva jetāsi raṇe sapatnān
`,word_meanings:`droṇam—Dronacharya; cha—and; bhīṣhmam—Bheeshma; cha—and; jayadratham—Jayadratha; cha—and; karṇam—Karn; tathā—also; anyān—others; api—also; yodha-vīrān—brave warriors; mayā—by me; hatān—already killed; tvam—you; jahi—slay; mā—not; vyathiṣhṭhāḥ—be disturbed; yudhyasva—fight; jetā asi—you shall be victorious; raṇe—in battle; sapatnān—enemies
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S34.mp3"},{chapter_id:11,chapter_number:11,externalId:449,id:449,text:`सञ्जय उवाच

एतच्छ्रुत्वा वचनं केशवस्य

कृताञ्जलिर्वेपमानः किरीटी।

नमस्कृत्वा भूय एवाह कृष्णं

सगद्गदं भीतभीतः प्रणम्य।।11.35।।
 `,title:"Verse 449",verse_number:35,verse_order:449,transliteration:`sañjaya uvācha
etach chhrutvā vachanaṁ keśhavasya
kṛitāñjalir vepamānaḥ kirīṭī
namaskṛitvā bhūya evāha kṛiṣhṇaṁ
sa-gadgadaṁ bhīta-bhītaḥ praṇamya
`,word_meanings:`sañjayaḥ uvācha—Sanjay said; etat—thus; śhrutvā—hearing; vachanam—words; keśhavasya—of Shree Krishna; kṛita-añjaliḥ—with joined palms; vepamānaḥ—trembling; kirītī—the crowned one, Arjun; namaskṛitvā—with palms joined; bhūyaḥ—again; eva—indeed; āha—spoke; kṛiṣhṇam—to Shree Krishna; sa-gadgadam—in a faltering voice; bhīta-bhītaḥ—overwhelmed with fear; praṇamya—bowed down
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S35.mp3"},{chapter_id:11,chapter_number:11,externalId:450,id:450,text:`अर्जुन उवाच

स्थाने हृषीकेश तव प्रकीर्त्या

जगत् प्रहृष्यत्यनुरज्यते च।

रक्षांसि भीतानि दिशो द्रवन्ति

सर्वे नमस्यन्ति च सिद्धसङ्घाः।।11.36।।
 `,title:"Verse 450",verse_number:36,verse_order:450,transliteration:`arjuna uvācha
sthāne hṛiṣhīkeśha tava prakīrtyā
jagat prahṛiṣhyaty anurajyate cha
rakṣhānsi bhītāni diśho dravanti
sarve namasyanti cha siddha-saṅghāḥ
`,word_meanings:`arjunaḥ uvācha—Arjun said; sthāne—it is but apt; hṛiṣhīka-īśha—Shree Krishna, the master of the senses; tava—your; prakīrtyā—in praise; jagat—the universe; prahṛiṣhyati—rejoices; anurajyate—be enamored; cha—and; rakṣhānsi—the demons; bhītāni—fearfully; diśhaḥ—in all directions; dravanti—flee; sarve—all; namasyanti—bow down; cha—and; siddha-saṅghāḥ—hosts of perfected saints
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S36.mp3"},{chapter_id:11,chapter_number:11,externalId:451,id:451,text:`कस्माच्च ते न नमेरन्महात्मन्

गरीयसे ब्रह्मणोऽप्यादिकर्त्रे।

अनन्त देवेश जगन्निवास

त्वमक्षरं सदसत्तत्परं यत्।।11.37।।
 `,title:"Verse 451",verse_number:37,verse_order:451,transliteration:`kasmāch cha te na nameran mahātman
garīyase brahmaṇo ’py ādi-kartre
ananta deveśha jagan-nivāsa
tvam akṣharaṁ sad-asat tat paraṁ yat
`,word_meanings:`kasmāt—why; cha—and; te—you; na nameran—should they not bow down; mahā-ātman—The Great one; garīyase—who are greater; brahmaṇaḥ—than Brahma; api—even; ādi-kartre—to the original creator; ananta—The limitless One; deva-īśha—Lord of the devatās; jagat-nivāsa—Refuge of the universe; tvam—you; akṣharam—the imperishable; sat-asat—manifest and non-manifest; tat—that; param—beyond; yat—which
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S37.mp3"},{chapter_id:11,chapter_number:11,externalId:452,id:452,text:`त्वमादिदेवः पुरुषः पुराण

स्त्वमस्य विश्वस्य परं निधानम्।

वेत्तासि वेद्यं च परं च धाम

त्वया ततं विश्वमनन्तरूप।।11.38।।
 `,title:"Verse 452",verse_number:38,verse_order:452,transliteration:`tvam ādi-devaḥ puruṣhaḥ purāṇas
tvam asya viśhvasya paraṁ nidhānam
vettāsi vedyaṁ cha paraṁ cha dhāma
tvayā tataṁ viśhvam ananta-rūpa
`,word_meanings:`tvam—you; ādi-devaḥ—the original Divine God; puruṣhaḥ—personality; purāṇaḥ—primeval; tvam—you; asya—of (this); viśhwasya—universe; param—Supreme; nidhānam—resting place; vettā—the knower; asi—you are; vedyam—the object of knowledge; cha—and; param—Supreme; cha—and; dhāma—Abode; tvayā—by you; tatam—pervaded; viśhwam—the universe; ananta-rūpa—posessor of infinite forms
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S38.mp3"},{chapter_id:11,chapter_number:11,externalId:453,id:453,text:`वायुर्यमोऽग्निर्वरुणः शशाङ्कः

प्रजापतिस्त्वं प्रपितामहश्च।

नमो नमस्तेऽस्तु सहस्रकृत्वः

पुनश्च भूयोऽपि नमो नमस्ते।।11.39।।
 `,title:"Verse 453",verse_number:39,verse_order:453,transliteration:`vāyur yamo ’gnir varuṇaḥ śhaśhāṅkaḥ
prajāpatis tvaṁ prapitāmahaśh cha
namo namas te ’stu sahasra-kṛitvaḥ
punaśh cha bhūyo ’pi namo namas te
`,word_meanings:`vāyuḥ—the god of wind; yamaḥ—the god of death; agniḥ—the god of fire; varuṇaḥ—the god of water; śhaśha-aṅkaḥ—the moon-God; prajāpatiḥ—Brahma; tvam—you; prapitāmahaḥ—the great-grandfather; cha—and; namaḥ—my salutations; namaḥ—my salutations; te—unto you; astu—let there be; sahasra-kṛitvaḥ—a thousand times; punaḥ cha—and again; bhūyaḥ—again; api—also; namaḥ—(offering) my salutations; namaḥ te—offering my salutations unto you
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S39.mp3"},{chapter_id:11,chapter_number:11,externalId:454,id:454,text:`नमः पुरस्तादथ पृष्ठतस्ते

नमोऽस्तु ते सर्वत एव सर्व।

अनन्तवीर्यामितविक्रमस्त्वं

सर्वं समाप्नोषि ततोऽसि सर्वः।।11.40।।
 `,title:"Verse 454",verse_number:40,verse_order:454,transliteration:`namaḥ purastād atha pṛiṣhṭhatas te
namo ’stu te sarvata eva sarva
ananta-vīryāmita-vikramas tvaṁ
sarvaṁ samāpnoṣhi tato ’si sarvaḥ
`,word_meanings:`namaḥ—offering salutations; purastāt—from the front; atha—and; pṛiṣhṭhataḥ—the rear; te—to you; namaḥ astu—I offer my salutations; te—to you; sarvataḥ—from all sides; eva—indeed; sarva—all; ananta-vīrya—infinite power; amita-vikramaḥ—infinite valor and might; tvam—you; sarvam—everything; samāpnoṣhi—pervade; tataḥ—thus; asi—(you) are; sarvaḥ—everything
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S40.mp3"},{chapter_id:11,chapter_number:11,externalId:455,id:455,text:`सखेति मत्वा प्रसभं यदुक्तं

हे कृष्ण हे यादव हे सखेति।

अजानता महिमानं तवेदं

मया प्रमादात्प्रणयेन वापि।।11.41।।
 `,title:"Verse 455",verse_number:41,verse_order:455,transliteration:`sakheti matvā prasabhaṁ yad uktaṁ
he kṛiṣhṇa he yādava he sakheti
ajānatā mahimānaṁ tavedaṁ
mayā pramādāt praṇayena vāpi
`,word_meanings:`sakhā—friend; iti—as; matvā—thinking; prasabham—presumptuously; yat—whatever; uktam—addressed; he kṛiṣhṇa—O Shree Krishna; he yādava—O Shree Krishna, who was born in the Yadu clan; he sakhe—O my dear mate; iti—thus; ajānatā—in ignorance; mahimānam—majesty; tava—your; idam—this; mayā—by me; pramādāt—out of negligence; praṇayena—out of affection; vā api—or else; 
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S41.mp3"},{chapter_id:11,chapter_number:11,externalId:456,id:456,text:`यच्चावहासार्थमसत्कृतोऽसि

विहारशय्यासनभोजनेषु।

एकोऽथवाप्यच्युत तत्समक्षं

तत्क्षामये त्वामहमप्रमेयम्।।11.42।।
 `,title:"Verse 456",verse_number:42,verse_order:456,transliteration:`yach chāvahāsārtham asat-kṛito ’si
vihāra-śhayyāsana-bhojaneṣhu
eko ’tha vāpy achyuta tat-samakṣhaṁ
tat kṣhāmaye tvām aham aprameyam
`,word_meanings:`yat—whatever; cha—also; avahāsa-artham—humorously; asat-kṛitaḥ—disrespectfully; asi—you were; vihāra—while at play; śhayyā—while resting; āsana—while sitting; bhojaneṣhu—while eating; ekaḥ—(when) alone; athavā—or; api—even; achyuta—Krishna, the infallible one; tat-samakṣham—before others; tat—all that; kṣhāmaye—beg for forgiveness; tvām—from you; aham—I; aprameyam—immeasurable
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S42.mp3"},{chapter_id:11,chapter_number:11,externalId:457,id:457,text:`पितासि लोकस्य चराचरस्य

त्वमस्य पूज्यश्च गुरुर्गरीयान्।

न त्वत्समोऽस्त्यभ्यधिकः कुतोऽन्यो

लोकत्रयेऽप्यप्रतिमप्रभाव।।11.43।।
 `,title:"Verse 457",verse_number:43,verse_order:457,transliteration:`pitāsi lokasya charācharasya
tvam asya pūjyaśh cha gurur garīyān
na tvat-samo ’sty abhyadhikaḥ kuto ’nyo
loka-traye ’py apratima-prabhāva
`,word_meanings:`pitā—the father; asi—you are; lokasya—of the entire universe; chara—moving; acharasya—nonmoving; tvam—you; asya—of this; pūjyaḥ—worshipable; cha—and; guruḥ—spiritual master; garīyān—glorious; na—not; tvat-samaḥ—equal to you; asti—is; abhyadhikaḥ—greater; kutaḥ—who is?; anyaḥ—other; loka-traye—in the three worlds; api—even; apratima-prabhāva—possessor of incomparable power
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S43.mp3"},{chapter_id:11,chapter_number:11,externalId:458,id:458,text:`तस्मात्प्रणम्य प्रणिधाय कायं

प्रसादये त्वामहमीशमीड्यम्।

पितेव पुत्रस्य सखेव सख्युः

प्रियः प्रियायार्हसि देव सोढुम्।।11.44।।
 `,title:"Verse 458",verse_number:44,verse_order:458,transliteration:`tasmāt praṇamya praṇidhāya kāyaṁ
prasādaye tvām aham īśham īḍyam
piteva putrasya sakheva sakhyuḥ
priyaḥ priyāyārhasi deva soḍhum
`,word_meanings:`tasmāt—therefore; praṇamya—bowing down; praṇidhāya—prostrating; kāyam—the body; prasādaye—to implore grace; tvām—your; aham—I; īśham—the Supreme Lord; īḍyam—adorable; pitā—father; iva—as; putrasya—with a son; sakhā—friend; iva—as; sakhyuḥ—with a friend; priyaḥ—a lover; priyāyāḥ—with the beloved; arhasi—you should; deva—Lord; soḍhum—forgive
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S44.mp3"},{chapter_id:11,chapter_number:11,externalId:459,id:459,text:`अदृष्टपूर्वं हृषितोऽस्मि दृष्ट्वा

भयेन च प्रव्यथितं मनो मे।

तदेव मे दर्शय देव रूपं

प्रसीद देवेश जगन्निवास।।11.45।।
 `,title:"Verse 459",verse_number:45,verse_order:459,transliteration:`adṛiṣhṭa-pūrvaṁ hṛiṣhito ’smi dṛiṣhṭvā
bhayena cha pravyathitaṁ mano me
tad eva me darśhaya deva rūpaṁ
prasīda deveśha jagan-nivāsa
`,word_meanings:`adṛiṣhṭa-pūrvam—that which has not been seen before; hṛiṣhitaḥ—great joy; asmi—I am; dṛiṣhṭvā—having seen; bhayena—with fear; cha—yet; pravyathitam—trembles; manaḥ—mind; me—my; tat—that; eva—certainly; me—to me; darśhaya—show; deva—Lord; rūpam—form; prasīda—please have mercy; deva-īśha—God of gods; jagat-nivāsa—abode of the universe
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S45.mp3"},{chapter_id:11,chapter_number:11,externalId:460,id:460,text:`किरीटिनं गदिनं चक्रहस्त

मिच्छामि त्वां द्रष्टुमहं तथैव।

तेनैव रूपेण चतुर्भुजेन

सहस्रबाहो भव विश्वमूर्ते।।11.46।।
 `,title:"Verse 460",verse_number:46,verse_order:460,transliteration:`kirīṭinaṁ gadinaṁ chakra-hastam
ichchhāmi tvāṁ draṣhṭum ahaṁ tathaiva
tenaiva rūpeṇa chatur-bhujena
sahasra-bāho bhava viśhva-mūrte
`,word_meanings:`kirīṭinam—wearing the crown; gadinam—carrying the mace; chakra-hastam—disc in hand; ichchhāmi—I wish; tvām—you; draṣhṭum—to see; aham—I; tathā eva—similarly; tena eva—in that; rūpeṇa—form; chatuḥ-bhujena—four-armed; sahasra-bāho—thousand-armed one; bhava—be; viśhwa-mūrte—universal form
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S46.mp3"},{chapter_id:11,chapter_number:11,externalId:461,id:461,text:`श्री भगवानुवाच

मया प्रसन्नेन तवार्जुनेदं

रूपं परं दर्शितमात्मयोगात्।

तेजोमयं विश्वमनन्तमाद्यं

यन्मे त्वदन्येन न दृष्टपूर्वम्।।11.47।।
 `,title:"Verse 461",verse_number:47,verse_order:461,transliteration:`śhrī-bhagavān uvācha
mayā prasannena tavārjunedaṁ
rūpaṁ paraṁ darśhitam ātma-yogāt
tejo-mayaṁ viśhvam anantam ādyaṁ
yan me tvad anyena na dṛiṣhṭa-pūrvam
`,word_meanings:`śhrī-bhagavān uvācha—the Blessed Lord said; mayā—by me; prasannena—being pleased; tava—with you; arjuna—Arjun; idam—this; rūpam—form; param—divine; darśhitam—shown; ātma-yogāt—by my Yogmaya power; tejaḥ-mayam—resplendent; viśhwam—cosmic; anantam—unlimited; ādyam—primeval; yat—which; me—my; tvat anyena—other than you; na dṛiṣhṭa-pūrvam—no one has ever seen
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S47.mp3"},{chapter_id:11,chapter_number:11,externalId:462,id:462,text:`न वेदयज्ञाध्ययनैर्न दानै

र्न च क्रियाभिर्न तपोभिरुग्रैः।

एवंरूपः शक्य अहं नृलोके

द्रष्टुं त्वदन्येन कुरुप्रवीर।।11.48।।
 `,title:"Verse 462",verse_number:48,verse_order:462,transliteration:`na veda-yajñādhyayanair na dānair
na cha kriyābhir na tapobhir ugraiḥ
evaṁ-rūpaḥ śhakya ahaṁ nṛi-loke
draṣhṭuṁ tvad anyena kuru-pravīra
`,word_meanings:`na—not; veda-yajña—by performance of sacrifice; adhyayanaiḥ—by study of the Vedas; na—nor; dānaiḥ—by charity; na—nor; cha—and; kriyābhiḥ—by rituals; na—not; tapobhiḥ—by austerities; ugraiḥ—severe; evam-rūpaḥ—in this form; śhakyaḥ—possible; aham—I; nṛi-loke—in the world of the mortals; draṣhṭum—to be seen; tvat—than you; anyena—by another; kuru-pravīra—the best of the Kuru warriors
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S48.mp3"},{chapter_id:11,chapter_number:11,externalId:463,id:463,text:`मा ते व्यथा मा च विमूढभावो

दृष्ट्वा रूपं घोरमीदृङ्ममेदम्।

व्यपेतभीः प्रीतमनाः पुनस्त्वं

तदेव मे रूपमिदं प्रपश्य।।11.49।।
 `,title:"Verse 463",verse_number:49,verse_order:463,transliteration:`mā te vyathā mā cha vimūḍha-bhāvo
dṛiṣhṭvā rūpaṁ ghoram īdṛiṅ mamedam
vyapeta-bhīḥ prīta-manāḥ punas tvaṁ
tad eva me rūpam idaṁ prapaśhya
`,word_meanings:`mā te—you shout not be; vyathā—afraid; mā—not; cha—and; vimūḍha-bhāvaḥ—bewildered state; dṛiṣhṭvā—on seeing; rūpam—form; ghoram—terrible; īdṛik—such; mama—of mine; idam—this; vyapeta-bhīḥ—free from fear; prīta-manāḥ—cheerful mind; punaḥ—again; tvam—you; tat eva—that very; me—my; rūpam—form; idam—this; prapaśhya—behold
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S49.mp3"},{chapter_id:11,chapter_number:11,externalId:464,id:464,text:`सञ्जय उवाच

इत्यर्जुनं वासुदेवस्तथोक्त्वा

स्वकं रूपं दर्शयामास भूयः।

आश्वासयामास च भीतमेनं

भूत्वा पुनः सौम्यवपुर्महात्मा।।11.50।।
 `,title:"Verse 464",verse_number:50,verse_order:464,transliteration:`sañjaya uvācha
ity arjunaṁ vāsudevas tathoktvā
svakaṁ rūpaṁ darśhayām āsa bhūyaḥ
āśhvāsayām āsa cha bhītam enaṁ
bhūtvā punaḥ saumya-vapur mahātmā
`,word_meanings:`sañjayaḥ uvācha—Sanjay said; iti—thus; arjunam—to Arjun; vāsudevaḥ—Krishna, the son of Vasudev; tathā—in that way; uktvā—having spoken; svakam—his personal; rūpam—form; darśhayām āsa—displayed; bhūyaḥ—again; āśhvāsayām āsa—consoled; cha—and; bhītam—frightened; enam—him; bhūtvā—becoming; punaḥ—again; saumya-vapuḥ—the gentle (two-armed) form; mahā-ātmā—the compassionate
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S50.mp3"},{chapter_id:11,chapter_number:11,externalId:465,id:465,text:`अर्जुन उवाच

दृष्ट्वेदं मानुषं रूपं तवसौम्यं जनार्दन।

इदानीमस्मि संवृत्तः सचेताः प्रकृतिं गतः।।11.51।।
 `,title:"Verse 465",verse_number:51,verse_order:465,transliteration:`arjuna uvācha
dṛiṣhṭvedaṁ mānuṣhaṁ rūpaṁ tava saumyaṁ janārdana
idānīm asmi saṁvṛittaḥ sa-chetāḥ prakṛitiṁ gataḥ
`,word_meanings:`arjunaḥ uvācha—Arjun said; dṛiṣhṭvā—seeing; idam—this; mānuṣham—human; rūpam—form; tava—your; saumyam—gentle; janārdana—he who looks after the public, Krishna; idānīm—now; asmi—I am; saṁvṛittaḥ—composed; sa-chetāḥ—in my mind; prakṛitim—to normality; gataḥ—have become
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S51.mp3"},{chapter_id:11,chapter_number:11,externalId:466,id:466,text:`श्री भगवानुवाच

सुदुर्दर्शमिदं रूपं दृष्टवानसि यन्मम।

देवा अप्यस्य रूपस्य नित्यं दर्शनकाङ्क्षिणः।।11.52।।
 `,title:"Verse 466",verse_number:52,verse_order:466,transliteration:`śhrī-bhagavān uvācha
su-durdarśham idaṁ rūpaṁ dṛiṣhṭavān asi yan mama
devā apy asya rūpasya nityaṁ darśhana-kāṅkṣhiṇaḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Lord said; su-durdarśham—exceedingly difficult to behold; idam—this; rūpam—form; dṛiṣhṭavān asi—that you are seeing; yat—which; mama—of mine; devāḥ—the celestial gods; api—even; asya—this; rūpasya—form; nityam—eternally; darśhana-kāṅkṣhiṇaḥ—aspiring to see;
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S52.mp3"},{chapter_id:11,chapter_number:11,externalId:467,id:467,text:`नाहं वेदैर्न तपसा न दानेन न चेज्यया।

शक्य एवंविधो द्रष्टुं दृष्टवानसि मां यथा।।11.53।।
 `,title:"Verse 467",verse_number:53,verse_order:467,transliteration:`nāhaṁ vedair na tapasā na dānena na chejyayā
śhakya evaṁ-vidho draṣhṭuṁ dṛiṣhṭavān asi māṁ yathā
`,word_meanings:`na—never; aham—I; vedaiḥ—by study of the Vedas; na—never; tapasā—by serious penances; na—never; dānena—by charity; na—never; cha—also; ijyayā—by worship; śhakyaḥ—it is possible; evam-vidhaḥ—like this; draṣhṭum—to see; dṛiṣhṭavān—seeing; asi—you are; mām—me; yathā—as
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S53.mp3"},{chapter_id:11,chapter_number:11,externalId:468,id:468,text:`भक्त्या त्वनन्यया शक्यमहमेवंविधोऽर्जुन।

ज्ञातुं दृष्टुं च तत्त्वेन प्रवेष्टुं च परंतप।।11.54।।
 `,title:"Verse 468",verse_number:54,verse_order:468,transliteration:`bhaktyā tv ananyayā śhakya aham evaṁ-vidho ’rjuna
jñātuṁ draṣhṭuṁ cha tattvena praveṣhṭuṁ cha parantapa
`,word_meanings:`bhaktyā—by devotion; tu—alone; ananyayā—unalloyed; śhakyaḥ—possible; aham—I; evam-vidhaḥ—like this; arjuna—Arjun; jñātum—to be known; draṣhṭum—to be seen; cha—and; tattvena—truly; praveṣhṭum—to enter into (union with me); cha—and; parantapa—scorcher of foes
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S54.mp3"},{chapter_id:11,chapter_number:11,externalId:469,id:469,text:`मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः।

निर्वैरः सर्वभूतेषु यः स मामेति पाण्डव।।11.55।।
 `,title:"Verse 469",verse_number:55,verse_order:469,transliteration:`mat-karma-kṛin mat-paramo mad-bhaktaḥ saṅga-varjitaḥ
nirvairaḥ sarva-bhūteṣhu yaḥ sa mām eti pāṇḍava
`,word_meanings:`mat-karma-kṛit—perform duties for my sake; mat-paramaḥ—considering me the Supreme; mat-bhaktaḥ—devoted to me; saṅga-varjitaḥ—free from attachment; nirvairaḥ—without malice; sarva-bhūteṣhu—toward all entities; yaḥ—who; saḥ—he; mām—to me; eti—comes; pāṇḍava—Arjun, the son of Pandu
`,Play:"https://testapi1test.blob.core.windows.net/test/11/Ch11S55.mp3"},{chapter_id:12,chapter_number:12,externalId:470,id:470,text:"अर्जुन उवाचएवं सततयुक्ता ये भक्तास्त्वां पर्युपासते।येचाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः।।12.1।।",title:"Verse 470",verse_number:1,verse_order:470,transliteration:`arjuna uvācha
evaṁ satata-yuktā ye bhaktās tvāṁ paryupāsate
ye chāpy akṣharam avyaktaṁ teṣhāṁ ke yoga-vittamāḥ
`,word_meanings:`arjunaḥ uvācha—Arjun said; evam—thus; satata—steadfastly; yuktāḥ—devoted; ye—those; bhaktāḥ—devotees; tvām—you; paryupāsate—worship; ye—those; cha—and; api—also; akṣharam—the imperishable; avyaktam—the formless Brahman; teṣhām—of them; ke—who; yoga-vit-tamāḥ—more perfect in Yog
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S01.mp3"},{chapter_id:12,chapter_number:12,externalId:471,id:471,text:"श्री भगवानुवाचमय्यावेश्य मनो ये मां नित्ययुक्ता उपासते।श्रद्धया परयोपेतास्ते मे युक्ततमा मताः।।12.2।।",title:"Verse 471",verse_number:2,verse_order:471,transliteration:`śhrī-bhagavān uvācha
mayy āveśhya mano ye māṁ nitya-yuktā upāsate
śhraddhayā parayopetās te me yuktatamā matāḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Blessed Lord said; mayi—on me; āveśhya—fix; manaḥ—the mind; ye—those; mām—me; nitya yuktāḥ—always engaged; upāsate—worship; śhraddhayā—with faith; parayā—best; upetāḥ—endowed; te—they; me—by me; yukta-tamāḥ—situated highest in Yog; matāḥ—I consider
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S02.mp3"},{chapter_id:12,chapter_number:12,externalId:472,id:472,text:"ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते।सर्वत्रगमचिन्त्यं च कूटस्थमचलं ध्रुवम्।।12.3।।",title:"Verse 472",verse_number:3,verse_order:472,transliteration:`ye tv akṣharam anirdeśhyam avyaktaṁ paryupāsate
sarvatra-gam achintyañcha kūṭa-stham achalandhruvam
 sanniyamyendriya-grāmaṁ sarvatra sama-buddhayaḥ
te prāpnuvanti mām eva sarva-bhūta-hite ratāḥ
`,word_meanings:`ye—who; tu—but; akṣharam—the imperishable; anirdeśhyam—the indefinable; avyaktam—the unmanifest; paryupāsate—worship; sarvatra-gam—the all-pervading; achintyam—the unthinkable; cha—and; kūṭa-stham—the unchanging; achalam—the immovable; dhruvam—the eternal; 
 sanniyamya—restraining; indriya-grāmam—the senses; sarvatra—everywhere; sama-buddhayaḥ—even-minded; te—they; prāpnuvanti—attain; mām—me; eva—also; sarva-bhūta-hite—in the welfare of all beings; ratāḥ—engaged
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S03.mp3"},{chapter_id:12,chapter_number:12,externalId:473,id:473,text:"संनियम्येन्द्रियग्रामं सर्वत्र समबुद्धयः।ते प्राप्नुवन्ति मामेव सर्वभूतहिते रताः।।12.4।।",title:"Verse 473",verse_number:4,verse_order:473,transliteration:"sanniyamyendriya-grāmaṁ  sarvatra    sama-buddhayaḥ  te  prāpnuvanti mām eva sarva-bhūta-hite    ratāḥ",word_meanings:"sanniyamya-controlling;    indriya-grāmam—all  the senses; sarvatra—everywhere;     sama-buddayaḥ—equally  disposed;   te-they;    prāpnuvanti—achieve;    mām—unto    Me; eva—certainly;  sarva-bhūtahite—all living  entities'   welfare;    ratāḥ—engaged.",Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S04.mp3"},{chapter_id:12,chapter_number:12,externalId:474,id:474,text:`क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम्।

अव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते।।12.5।।
 `,title:"Verse 474",verse_number:5,verse_order:474,transliteration:`kleśho ’dhikataras teṣhām avyaktāsakta-chetasām
avyaktā hi gatir duḥkhaṁ dehavadbhir avāpyate
`,word_meanings:`kleśhaḥ—tribulations; adhika-taraḥ—full of; teṣhām—of those; avyakta—to the unmanifest; āsakta—attached; chetasām—whose minds; avyaktā—the unmanifest; hi—indeed; gatiḥ—path; duḥkham—exceeding difficulty; deha-vadbhiḥ—for the embodied; avāpyate—is reached
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S05.mp3"},{chapter_id:12,chapter_number:12,externalId:475,id:475,text:"ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः।अनन्येनैव योगेन मां ध्यायन्त उपासते।।12.6।।",title:"Verse 475",verse_number:6,verse_order:475,transliteration:`ye tu sarvāṇi karmāṇi mayi sannyasya mat-paraḥ
ananyenaiva yogena māṁ dhyāyanta upāsate
`,word_meanings:`ye—who; tu—but; sarvāṇi—all; karmāṇi—actions; mayi—to me; sannyasya—dedicating; mat-paraḥ—regarding me as the Supreme goal; ananyena—exclusively; eva—certainly; yogena—with devotion; mām—me; dhyāyantaḥ—meditating; upāsate—worship;
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S06.mp3"},{chapter_id:12,chapter_number:12,externalId:476,id:476,text:"तेषामहं समुद्धर्ता मृत्युसंसारसागरात्।भवामि नचिरात्पार्थ मय्यावेशितचेतसाम्।।12.7।।",title:"Verse 476",verse_number:7,verse_order:476,transliteration:`teṣhām ahaṁ samuddhartā mṛityu-saṁsāra-sāgarāt
bhavāmi na chirāt pārtha mayy āveśhita-chetasām
`,word_meanings:`teṣhām—of those; aham—I; samuddhartā—the deliverer; mṛityu-saṁsāra-sāgarāt—from the ocean of birth and death; bhavāmi—(I) become; na—not; chirāt—after a long time; pārtha—Arjun, the son of Pritha; mayi—with me; āveśhita chetasām—of those whose consciousness is united
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S07.mp3"},{chapter_id:12,chapter_number:12,externalId:477,id:477,text:"मय्येव मन आधत्स्व मयि बुद्धिं निवेशय।निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः।।12.8।।",title:"Verse 477",verse_number:8,verse_order:477,transliteration:`mayy eva mana ādhatsva mayi buddhiṁ niveśhaya
nivasiṣhyasi mayy eva ata ūrdhvaṁ na sanśhayaḥ
`,word_meanings:`mayi—on me; eva—alone; manaḥ—mind; ādhatsva—fix; mayi—on me; buddhim—intellect; niveśhaya—surrender; nivasiṣhyasi—you shall always live; mayi—in me; eva—alone; ataḥ ūrdhvam—thereafter; na—not; sanśhayaḥ—doubt
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S08.mp3"},{chapter_id:12,chapter_number:12,externalId:478,id:478,text:"अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम्।अभ्यासयोगेन ततो मामिच्छाप्तुं धनञ्जय।।12.9।।",title:"Verse 478",verse_number:9,verse_order:478,transliteration:`atha chittaṁ samādhātuṁ na śhaknoṣhi mayi sthiram
abhyāsa-yogena tato mām ichchhāptuṁ dhanañjaya
`,word_meanings:`atha—if; chittam—mind; samādhātum—to fix; na śhaknoṣhi—(you) are unable; mayi—on me; sthiram—steadily; abhyāsa-yogena—by uniting with God through repeated practice; tataḥ—then; mām—me; ichchhā—desire; āptum—to attain; dhanañjaya—Arjun, the conqueror of wealth
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S09.mp3"},{chapter_id:12,chapter_number:12,externalId:479,id:479,text:"अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव।मदर्थमपि कर्माणि कुर्वन् सिद्धिमवाप्स्यसि।।12.10।।",title:"Verse 479",verse_number:10,verse_order:479,transliteration:`abhyāse ’py asamartho ’si mat-karma-paramo bhava
mad-artham api karmāṇi kurvan siddhim avāpsyasi
`,word_meanings:`abhyāse—in practice; api—if; asamarthaḥ—unable; asi—you; mat-karma paramaḥ—devotedly work for me; bhava—be; mat-artham—for my sake; api—also; karmāṇi—work; kurvan—performing; siddhim—perfection; avāpsyasi—you shall achieve
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S10.mp3"},{chapter_id:12,chapter_number:12,externalId:480,id:480,text:"अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः।सर्वकर्मफलत्यागं ततः कुरु यतात्मवान्।।12.11।।",title:"Verse 480",verse_number:11,verse_order:480,transliteration:`athaitad apy aśhakto ’si kartuṁ mad-yogam āśhritaḥ
sarva-karma-phala-tyāgaṁ tataḥ kuru yatātmavān
`,word_meanings:`atha—if; etat—this; api—even; aśhaktaḥ—unable; asi—you are; kartum—to work; mad-yogam—with devotion to me; āśhritaḥ—taking refuge; sarva-karma—of all actions; phala-tyāgam—to renounce the fruits; tataḥ—then; kuru—do; yata-ātma-vān—be situated in the self
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S11.mp3"},{chapter_id:12,chapter_number:12,externalId:481,id:481,text:"श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते।ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम्।।12.12।।",title:"Verse 481",verse_number:12,verse_order:481,transliteration:`śhreyo hi jñānam abhyāsāj jñānād dhyānaṁ viśhiṣhyate
dhyānāt karma-phala-tyāgas tyāgāch chhāntir anantaram
`,word_meanings:`śhreyaḥ—better; hi—for; jñānam—knowledge; abhyāsāt—than (mechanical) practice; jñānāt—than knowledge; dhyānam—meditation; viśhiṣhyate—better; dhyānāt—than meditation; karma-phala-tyāgaḥ—renunciation of the fruits of actions; tyāgāt—renunciation; śhāntiḥ—peace; anantaram—immediately
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S12.mp3"},{chapter_id:12,chapter_number:12,externalId:482,id:482,text:"अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।निर्ममो निरहङ्कारः समदुःखसुखः क्षमी।।12.13।।",title:"Verse 482",verse_number:13,verse_order:482,transliteration:`adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha
nirmamo nirahankāraḥ sama-duḥkha-sukhaḥ kṣhamī
`,word_meanings:`adveṣhṭā—free from malice; sarva-bhūtānām—toward all living beings; maitraḥ—friendly; karuṇaḥ—compassionate; eva—indeed; cha—and; nirmamaḥ—free from attachment to possession; nirahankāraḥ—free from egoism; sama—equipoised; duḥkha—distress; sukhaḥ—happiness; kṣhamī—forgiving;
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S13.mp3"},{chapter_id:12,chapter_number:12,externalId:483,id:483,text:"सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः।मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः।।12.14।।",title:"Verse 483",verse_number:14,verse_order:483,transliteration:`santuṣhṭaḥ satataṁ yogī yatātmā dṛiḍha-niśhchayaḥ
mayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ
`,word_meanings:`santuṣhṭaḥ—contented; satatam—steadily; yogī—united in devotion; yata-ātmā—self-controlled; dṛiḍha-niśhchayaḥ—firm in conviction; mayi—to me; arpita—dedicated; manaḥ—mind; buddhiḥ—intellect; yaḥ—who; mat-bhaktaḥ—my devotees; saḥ—they; me—to me; priyaḥ—very dear
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S14.mp3"},{chapter_id:12,chapter_number:12,externalId:484,id:484,text:"यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः।।12.15।।",title:"Verse 484",verse_number:15,verse_order:484,transliteration:`yasmān nodvijate loko lokān nodvijate cha yaḥ
harṣhāmarṣha-bhayodvegair mukto yaḥ sa cha me priyaḥ
`,word_meanings:`yasmāt—by whom; na—not; udvijate—are agitated; lokaḥ—people; lokāt—from people; na—not; udvijate—are disturbed; cha—and; yaḥ—who; harṣha—pleasure; amarṣha—pain; bhaya—fear; udvegaiḥ—anxiety; muktaḥ—freed; yaḥ—who; saḥ—they; cha—and; me—to me; priyaḥ—very dear
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S15.mp3"},{chapter_id:12,chapter_number:12,externalId:485,id:485,text:"अनपेक्षः शुचिर्दक्ष उदासीनो गतव्यथः।सर्वारम्भपरित्यागी यो मद्भक्तः स मे प्रियः।।12.16।।",title:"Verse 485",verse_number:16,verse_order:485,transliteration:`anapekṣhaḥ śhuchir dakṣha udāsīno gata-vyathaḥ
sarvārambha-parityāgī yo mad-bhaktaḥ sa me priyaḥ
`,word_meanings:`anapekṣhaḥ—indifferent to worldly gain; śhuchiḥ—pure; dakṣhaḥ—skillful; udāsīnaḥ—without cares; gata-vyathaḥ—untroubled; sarva-ārambha—of all undertakings; parityāgī—renouncer; saḥ—who; mat-bhaktaḥ—my devotee; saḥ—he; me—to ne; priyaḥ—very dear
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S16.mp3"},{chapter_id:12,chapter_number:12,externalId:486,id:486,text:"यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति।शुभाशुभपरित्यागी भक्ितमान्यः स मे प्रियः।।12.17।।",title:"Verse 486",verse_number:17,verse_order:486,transliteration:`yo na hṛiṣhyati na dveṣhṭi na śhochati na kāṅkṣhati
śhubhāśhubha-parityāgī bhaktimān yaḥ sa me priyaḥ
`,word_meanings:`yaḥ—who; na—neither; hṛiṣhyati—rejoice; na—nor; dveṣhṭi—despair; na—neither; śhochati—lament; na—nor; kāṅkṣhati—hanker for gain; śhubha-aśhubha-parityāgī—who renounce both good and evil deeds; bhakti-mān—full of devotion; yaḥ—who; saḥ—that person; me—to me; priyaḥ—very dear
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S17.mp3"},{chapter_id:12,chapter_number:12,externalId:487,id:487,text:"समः शत्रौ च मित्रे च तथा मानापमानयोः।शीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः।।12.18।।",title:"Verse 487",verse_number:18,verse_order:487,transliteration:`samaḥ śhatrau cha mitre cha tathā mānāpamānayoḥ
śhītoṣhṇa-sukha-duḥkheṣhu samaḥ saṅga-vivarjitaḥ
`,word_meanings:`samaḥ—alike; śhatrau—to a foe; cha—and; mitre—to a friend; cha tathā—as well as; māna-apamānayoḥ—in honor and dishonor; śhīta-uṣhṇa—in cold and heat; sukha-duḥkheṣhu—in joy and sorrow; samaḥ—equipoised; saṅga-vivarjitaḥ—free from all unfavorable association;
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S18.mp3"},{chapter_id:12,chapter_number:12,externalId:488,id:488,text:"तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येनकेनचित्।अनिकेतः स्थिरमतिर्भक्ितमान्मे प्रियो नरः।।12.19।।",title:"Verse 488",verse_number:19,verse_order:488,transliteration:`tulya-nindā-stutir maunī santuṣhṭo yena kenachit
aniketaḥ sthira-matir bhaktimān me priyo naraḥ
`,word_meanings:`tulya—alike; nindā-stutiḥ—reproach and praise; maunī—silent contemplation; santuṣhṭaḥ—contented; yena kenachit—with anything; aniketaḥ—without attachment to the place of residence; sthira—firmly fixed; matiḥ—intellect; bhakti-mān—full of devotion; me—to me; priyaḥ—very dear; naraḥ—a person
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S19.mp3"},{chapter_id:12,chapter_number:12,externalId:489,id:489,text:"ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते।श्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः।।12.20।।",title:"Verse 489",verse_number:20,verse_order:489,transliteration:`ye tu dharmyāmṛitam idaṁ yathoktaṁ paryupāsate
śhraddadhānā mat-paramā bhaktās te ’tīva me priyāḥ
`,word_meanings:`ye—who; tu—indeed; dharma—of wisdom; amṛitam—nectar; idam—this; yathā—as; uktam—declared; paryupāsate—exclusive devotion; śhraddadhānāḥ—with faith; mat-paramāḥ—intent on me as the supreme goal; bhaktāḥ—devotees; te—they; atīva—exceedingly; me—to me; priyāḥ—dear
`,Play:"https://testapi1test.blob.core.windows.net/test/12/Ch12S20.mp3"},{chapter_id:13,chapter_number:13,externalId:490,id:490,text:`अर्जुन उवाच

प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च।

एतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव।।13.1।।
 `,title:"Verse 490",verse_number:1,verse_order:490,transliteration:`arjuna uvācha
prakṛitiṁ puruṣhaṁ chaiva kṣhetraṁ kṣhetra-jñam eva cha
etad veditum ichchhāmi jñānaṁ jñeyaṁ cha keśhava
`,word_meanings:`arjunaḥ uvācha—Arjun said; prakṛitim—material nature; puruṣham—the enjoyer; cha—and; eva—indeed; kṣhetram—the field of activities; kṣhetra-jñam—the knower of the field; eva—even; cha—also; etat—this; veditum—to know; ichchhāmi—I wish; jñānam—knowledge; jñeyam—the goal of knowledge; cha—and; keśhava—Krishna, the killer of the demon named Keshi
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S01.mp3"},{chapter_id:13,chapter_number:13,externalId:491,id:491,text:"श्री भगवानुवाचइदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते।एतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः।।13.2।।",title:"Verse 491",verse_number:2,verse_order:491,transliteration:`śhrī-bhagavān uvācha
idaṁ śharīraṁ kaunteya kṣhetram ity abhidhīyate
etad yo vetti taṁ prāhuḥ kṣhetra-jña iti tad-vidaḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Divine Lord said; idam—this; śharīram—body; kaunteya—Arjun, the son of Kunti; kṣhetram—the field of activities; iti—thus; abhidhīyate—is termed as; etat—this; yaḥ—one who; vetti—knows; tam—that person; prāhuḥ—is called; kṣhetra-jñaḥ—the knower of the field; iti—thus; tat-vidaḥ—those who discern the truth
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S02.mp3"},{chapter_id:13,chapter_number:13,externalId:492,id:492,text:`क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत।

क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम।।13.3।।
 `,title:"Verse 492",verse_number:3,verse_order:492,transliteration:`kṣhetra-jñaṁ chāpi māṁ viddhi sarva-kṣhetreṣhu bhārata
kṣhetra-kṣhetrajñayor jñānaṁ yat taj jñānaṁ mataṁ mama
`,word_meanings:`kṣhetra-jñam—the knower of the field; cha—also; api—only; mām—me; viddhi—know; sarva—all; kṣhetreṣhu—in individual fields of activities; bhārata—scion of Bharat; kṣhetra—the field of activities; kṣhetra-jñayoḥ—of the knower of the field; jñānam—understanding of; yat—which; tat—that; jñānam—knowledge; matam—opinion; mama—my
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S03.mp3"},{chapter_id:13,chapter_number:13,externalId:493,id:493,text:"तत्क्षेत्रं यच्च यादृक् च यद्विकारि यतश्च यत्।स च यो यत्प्रभावश्च तत्समासेन मे श्रृणु।।13.4।।",title:"Verse 493",verse_number:4,verse_order:493,transliteration:`tat kṣhetraṁ yach cha yādṛik cha yad-vikāri yataśh cha yat
sa cha yo yat-prabhāvaśh cha tat samāsena me śhṛiṇu
`,word_meanings:`tat—that; kṣhetram—field of activities; yat—what; cha—and; yādṛik—its nature; cha—and; yat-vikāri—how change takes place in it; yataḥ—from what; cha—also; yat—what; saḥ—he; cha—also; yaḥ—who; yat-prabhāvaḥ—what his powers are; cha—and; tat—that; samāsena—in summary; me—from me; śhṛiṇu—listen
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S04.mp3"},{chapter_id:13,chapter_number:13,externalId:494,id:494,text:"ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधैः पृथक्।ब्रह्मसूत्रपदैश्चैव हेतुमद्भिर्विनिश्िचतैः।।13.5।।",title:"Verse 494",verse_number:5,verse_order:494,transliteration:`ṛiṣhibhir bahudhā gītaṁ chhandobhir vividhaiḥ pṛithak
brahma-sūtra-padaiśh chaiva hetumadbhir viniśhchitaiḥ
`,word_meanings:`ṛiṣhibhiḥ—by great sages; bahudhā—in manifold ways; gītam—sung; chhandobhiḥ—in Vedic hymns; vividhaiḥ—various; pṛithak—variously; brahma-sūtra—the Brahma Sūtra; padaiḥ—by the hymns; cha—and; eva—especially; hetu-madbhiḥ—with logic; viniśhchitaiḥ—conclusive evidence
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S05.mp3"},{chapter_id:13,chapter_number:13,externalId:495,id:495,text:"महाभूतान्यहङ्कारो बुद्धिरव्यक्तमेव च।इन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचराः।।13.6।।",title:"Verse 495",verse_number:6,verse_order:495,transliteration:`mahā-bhūtāny ahankāro buddhir avyaktam eva cha
indriyāṇi daśhaikaṁ cha pañcha chendriya-gocharāḥ
`,word_meanings:`mahā-bhūtāni—the (five) great elements; ahankāraḥ—the ego; buddhiḥ—the intellect; avyaktam—the unmanifested primordial matter; eva—indeed; cha—and; indriyāṇi—the senses; daśha-ekam—eleven; cha—and; pañcha—five; cha—and; indriya-go-charāḥ—the (five) objects of the senses;
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S06.mp3"},{chapter_id:13,chapter_number:13,externalId:496,id:496,text:"इच्छा द्वेषः सुखं दुःखं सङ्घातश्चेतनाधृतिः।एतत्क्षेत्रं समासेन सविकारमुदाहृतम्।।13.7।।",title:"Verse 496",verse_number:7,verse_order:496,transliteration:`ichchhā dveṣhaḥ sukhaṁ duḥkhaṁ saṅghātaśh chetanā dhṛitiḥ
etat kṣhetraṁ samāsena sa-vikāram udāhṛitam
`,word_meanings:`ichchhā—desire; dveṣhaḥ—aversion; sukham—happiness; duḥkham—misery; saṅghātaḥ—the aggregate; chetanā—the consciousness; dhṛitiḥ—the will; etat—all these; kṣhetram—the field of activities; samāsena—comprise of; sa-vikāram—with modifications; udāhṛitam—are said
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S07.mp3"},{chapter_id:13,chapter_number:13,externalId:497,id:497,text:"अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्।आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः।।13.8।।",title:"Verse 497",verse_number:8,verse_order:497,transliteration:`amānitvam adambhitvam ahinsā kṣhāntir ārjavam
āchāryopāsanaṁ śhauchaṁ sthairyam ātma-vinigrahaḥ
`,word_meanings:`amānitvam—humbleness; adambhitvam—freedom from hypocrisy; ahinsā—non-violence; kṣhāntiḥ—forgiveness; ārjavam—simplicity; āchārya-upāsanam—service of the Guru; śhaucham—cleanliness of body and mind; sthairyam—steadfastness; ātma-vinigrahaḥ—self-control;
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S08.mp3"},{chapter_id:13,chapter_number:13,externalId:498,id:498,text:"इन्द्रियार्थेषु वैराग्यमनहङ्कार एव च।जन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम्।।13.9।।",title:"Verse 498",verse_number:9,verse_order:498,transliteration:`indriyārtheṣhu vairāgyam anahankāra eva cha
janma-mṛityu-jarā-vyādhi-duḥkha-doṣhānudarśhanam
`,word_meanings:`indriya-artheṣhu—toward objects of the senses; vairāgyam—dispassion; anahankāraḥ—absence of egotism; eva cha—and also; janma—of birth; mṛityu—death; jarā—old age; vyādhi—disease; duḥkha—evils; doṣha—faults; anudarśhanam—perception;
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S09.mp3"},{chapter_id:13,chapter_number:13,externalId:499,id:499,text:"असक्ितरनभिष्वङ्गः पुत्रदारगृहादिषु।नित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु।।13.10।।",title:"Verse 499",verse_number:10,verse_order:499,transliteration:`asaktir anabhiṣhvaṅgaḥ putra-dāra-gṛihādiṣhu
nityaṁ cha sama-chittatvam iṣhṭāniṣhṭopapattiṣhu
`,word_meanings:`asaktiḥ—non-attachment; anabhiṣhvaṅgaḥ—absence of craving; putra—children; dāra—spouse; gṛiha-ādiṣhu—home, etc; nityam—constant; cha—and; sama-chittatvam—even-mindedness; iṣhṭa—the desirable; aniṣhṭa—undesirable; upapattiṣhu—having obtained;
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S10.mp3"},{chapter_id:13,chapter_number:13,externalId:500,id:500,text:"मयि चानन्ययोगेन भक्ितरव्यभिचारिणी।विविक्तदेशसेवित्वमरतिर्जनसंसदि।।13.11।।",title:"Verse 500",verse_number:11,verse_order:500,transliteration:`mayi chānanya-yogena bhaktir avyabhichāriṇī
vivikta-deśha-sevitvam aratir jana-sansadi
`,word_meanings:`mayi—toward me; cha—also; ananya-yogena—exclusively united; bhaktiḥ—devotion; avyabhichāriṇī—constant; vivikta—solitary; deśha—places; sevitvam—inclination for; aratiḥ—aversion; jana-sansadi—for mundane society;
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S11.mp3"},{chapter_id:13,chapter_number:13,externalId:501,id:501,text:"अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम्।एतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोन्यथा।।13.12।।",title:"Verse 501",verse_number:12,verse_order:501,transliteration:`adhyātma-jñāna-nityatvaṁ tattva-jñānārtha-darśhanam
etaj jñānam iti proktam ajñānaṁ yad ato ’nyathā
`,word_meanings:`adhyātma—spiritual; jñāna—knowledge; nityatvam—constancy; tattva-jñāna—knowledge of spiritual principles; artha—for; darśhanam—philosophy; etat—all this; jñānam—knowledge; iti—thus; proktam—declared; ajñānam—ignorance; yat—what; ataḥ—to this; anyathā—contrary
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S12.mp3"},{chapter_id:13,chapter_number:13,externalId:502,id:502,text:"ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वाऽमृतमश्नुते।अनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते।।13.13।।",title:"Verse 502",verse_number:13,verse_order:502,transliteration:`jñeyaṁ yat tat pravakṣhyāmi yaj jñātvāmṛitam aśhnute
anādi mat-paraṁ brahma na sat tan nāsad uchyate
`,word_meanings:`jñeyam—ought to be known; yat—which; tat—that; pravakṣhyāmi—I shall now reveal; yat—which; jñātvā—knowing; amṛitam—immortality; aśhnute—one achieves; anādi—beginningless; mat-param—subordinate to me; brahma—Brahman; na—not; sat—existent; tat—that; na—not; asat—non-existent; uchyate—is called
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S13.mp3"},{chapter_id:13,chapter_number:13,externalId:503,id:503,text:"सर्वतः पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम्।सर्वतः श्रुतिमल्लोके सर्वमावृत्य तिष्ठति।।13.14।।",title:"Verse 503",verse_number:14,verse_order:503,transliteration:`sarvataḥ pāṇi-pādaṁ tat sarvato ’kṣhi-śhiro-mukham
sarvataḥ śhrutimal loke sarvam āvṛitya tiṣhṭhati
`,word_meanings:`sarvataḥ—everywhere; pāṇi—hands; pādam—feet; tat—that; sarvataḥ—everywhere; akṣhi—eyes; śhiraḥ—heads; mukham—faces; sarvataḥ—everywhere; śhruti-mat—having ears; loke—in the universe; sarvam—everything; āvṛitya—pervades; tiṣhṭhati—exists
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S14.mp3"},{chapter_id:13,chapter_number:13,externalId:504,id:504,text:"सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम्।असक्तं सर्वभृच्चैव निर्गुणं गुणभोक्तृ च।।13.15।।",title:"Verse 504",verse_number:15,verse_order:504,transliteration:`sarvendriya-guṇābhāsaṁ sarvendriya-vivarjitam
asaktaṁ sarva-bhṛich chaiva nirguṇaṁ guṇa-bhoktṛi cha
`,word_meanings:`sarva—all; indriya—senses; guṇa—sense-objects; ābhāsam—the perciever; sarva—all; indriya—senses; vivarjitam—devoid of; asaktam—unattached; sarva-bhṛit—the sustainer of all; cha—yet; eva—indeed; nirguṇam—beyond the three modes of material nature; guṇa-bhoktṛi—the enjoyer of the three modes of material nature; cha—although
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S15.mp3"},{chapter_id:13,chapter_number:13,externalId:505,id:505,text:"बहिरन्तश्च भूतानामचरं चरमेव च।सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत्।।13.16।।",title:"Verse 505",verse_number:16,verse_order:505,transliteration:`bahir antaśh cha bhūtānām acharaṁ charam eva cha
sūkṣhmatvāt tad avijñeyaṁ dūra-sthaṁ chāntike cha tat
`,word_meanings:`bahiḥ—outside; antaḥ—inside; cha—and; bhūtānām—all living beings; acharam—not moving; charam—moving; eva—indeed; cha—and; sūkṣhmatvāt—due to subtlety; tat—he; avijñeyam—incomprehensible; dūra-stham—very far away; cha—and; antike—very near; cha—also; tat—he
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S16.mp3"},{chapter_id:13,chapter_number:13,externalId:506,id:506,text:"अविभक्तं च भूतेषु विभक्तमिव च स्थितम्।भूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च।।13.17।।",title:"Verse 506",verse_number:17,verse_order:506,transliteration:`avibhaktaṁ cha bhūteṣhu vibhaktam iva cha sthitam
bhūta-bhartṛi cha taj jñeyaṁ grasiṣhṇu prabhaviṣhṇu cha
`,word_meanings:`avibhaktam—indivisible; cha—although; bhūteṣhu—amongst living beings; vibhaktam—divided; iva—apparently; cha—yet; sthitam—situated; bhūta-bhartṛi—the sustainer of all beings; cha—also; tat—that; jñeyam—to be known; grasiṣhṇu—the annihilator; prabhaviṣhṇu—the creator; cha—and
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S17.mp3"},{chapter_id:13,chapter_number:13,externalId:507,id:507,text:"ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते।ज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम्।।13.18।।",title:"Verse 507",verse_number:18,verse_order:507,transliteration:`jyotiṣhām api taj jyotis tamasaḥ param uchyate
jñānaṁ jñeyaṁ jñāna-gamyaṁ hṛidi sarvasya viṣhṭhitam
`,word_meanings:`jyotiṣhām—in all luminarie; api—and; tat—that; jyotiḥ—the source of light; tamasaḥ—the darkness; param—beyond; uchyate—is said (to be); jñānam—knowledge; jñeyam—the object of knowledge; jñāna-gamyam—the goal of knowledge; hṛidi—within the heart; sarvasya—of all living beings; viṣhṭhitam—dwells
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S18.mp3"},{chapter_id:13,chapter_number:13,externalId:508,id:508,text:"इति क्षेत्रं तथा ज्ञानं ज्ञेयं चोक्तं समासतः।मद्भक्त एतद्विज्ञाय मद्भावायोपपद्यते।।13.19।।",title:"Verse 508",verse_number:19,verse_order:508,transliteration:`iti kṣhetraṁ tathā jñānaṁ jñeyaṁ choktaṁ samāsataḥ
mad-bhakta etad vijñāya mad-bhāvāyopapadyate
`,word_meanings:`iti—thus; kṣhetram—the nature of the field; tathā—and; jñānam—the meaning of knowledge; jñeyam—the object of knowledge; cha—and; uktam—revealed; samāsataḥ—in summary; mat-bhaktaḥ—my devotee; etat—this; vijñāya—having understood; mat-bhāvāya—my divine nature; upapadyate—attain
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S19.mp3"},{chapter_id:13,chapter_number:13,externalId:509,id:509,text:"प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि।विकारांश्च गुणांश्चैव विद्धि प्रकृतिसंभवान्।।13.20।।",title:"Verse 509",verse_number:20,verse_order:509,transliteration:`prakṛitiṁ puruṣhaṁ chaiva viddhy anādī ubhāv api
vikārānśh cha guṇānśh chaiva viddhi prakṛiti-sambhavān
`,word_meanings:`prakṛitim—material nature; puruṣham—the individual souls; cha—and; eva—indeed; viddhi—know; anādī—beginningless; ubhau—both; api—and; vikārān—transformations (of the body); cha—also; guṇān—the three modes of nature; cha—and; eva—indeed; viddhi—know; prakṛiti—material energy; sambhavān—produced by
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S20.mp3"},{chapter_id:13,chapter_number:13,externalId:510,id:510,text:"कार्यकारणकर्तृत्वे हेतुः प्रकृतिरुच्यते।पुरुषः सुखदुःखानां भोक्तृत्वे हेतुरुच्यते।।13.21।।",title:"Verse 510",verse_number:21,verse_order:510,transliteration:`kārya-kāraṇa-kartṛitve hetuḥ prakṛitir uchyate
puruṣhaḥ sukha-duḥkhānāṁ bhoktṛitve hetur uchyate
`,word_meanings:`kārya—effect; kāraṇa—cause; kartṛitve—in the matter of creation; hetuḥ—the medium; prakṛitiḥ—the material energy; uchyate—is said to be; puruṣhaḥ—the individual soul; sukha-duḥkhānām—of happiness and distress; bhoktṛitve—in experiencing; hetuḥ—is responsible; uchyate—is said to be
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S21.mp3"},{chapter_id:13,chapter_number:13,externalId:511,id:511,text:"पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान्।कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु।।13.22।।",title:"Verse 511",verse_number:22,verse_order:511,transliteration:`puruṣhaḥ prakṛiti-stho hi bhuṅkte prakṛiti-jān guṇān
kāraṇaṁ guṇa-saṅgo ’sya sad-asad-yoni-janmasu
`,word_meanings:`puruṣhaḥ—the individual soul; prakṛiti-sthaḥ—seated in the material energy; hi—indeed; bhuṅkte—desires to enjoy; prakṛiti-jān—produced by the material energy; guṇān—the three modes of nature; kāraṇam—the cause; guṇa-saṅgaḥ—the attachment (to three guṇas); asya—of its; sat-asat-yoni—in superior and inferior wombs; janmasu—of birth
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S22.mp3"},{chapter_id:13,chapter_number:13,externalId:512,id:512,text:"उपद्रष्टाऽनुमन्ता च भर्ता भोक्ता महेश्वरः।परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः।।13.23।।",title:"Verse 512",verse_number:23,verse_order:512,transliteration:`upadraṣhṭānumantā cha bhartā bhoktā maheśhvaraḥ
paramātmeti chāpy ukto dehe ’smin puruṣhaḥ paraḥ
`,word_meanings:`upadraṣhṭā—the witness; anumantā—the permitter; cha—and; bhartā—the supporter; bhoktā—the transcendental enjoyer; mahā-īśhvaraḥ—the ultimate controller; parama-ātmā—Superme Soul; iti—that; cha api—and also; uktaḥ—is said; dehe—within the body; asmin—this; puruṣhaḥ paraḥ—the Supreme Lord
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S23.mp3"},{chapter_id:13,chapter_number:13,externalId:513,id:513,text:"य एवं वेत्ति पुरुषं प्रकृतिं च गुणैःसह।सर्वथा वर्तमानोऽपि न स भूयोऽभिजायते।।13.24।।",title:"Verse 513",verse_number:24,verse_order:513,transliteration:`ya evaṁ vetti puruṣhaṁ prakṛitiṁ cha guṇaiḥ saha
sarvathā vartamāno ’pi na sa bhūyo ’bhijāyate
`,word_meanings:`yaḥ—who; evam—thus; vetti—understand; puruṣham—Puruṣh; prakṛitim—the material nature; cha—and; guṇaiḥ—the three modes of nature; saha—with; sarvathā—in every way; vartamānaḥ—situated; api—although; na—not; saḥ—they; bhūyaḥ—again; abhijāyate—take birth
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S24.mp3"},{chapter_id:13,chapter_number:13,externalId:514,id:514,text:"ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना।अन्ये सांख्येन योगेन कर्मयोगेन चापरे।।13.25।।",title:"Verse 514",verse_number:25,verse_order:514,transliteration:`dhyānenātmani paśhyanti kechid ātmānam ātmanā
anye sānkhyena yogena karma-yogena chāpare
`,word_meanings:`dhyānena—through meditation; ātmani—within one’s heart; paśhyanti—percieve; kechit—some; ātmānam—the Supreme soul; ātmanā—by the mind; anye—others; sānkhyena—through cultivation of knowledge; yogena—the yog system; karma-yogena—union with God with through path of action; cha—and; apare—others
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S25.mp3"},{chapter_id:13,chapter_number:13,externalId:515,id:515,text:"अन्ये त्वेवमजानन्तः श्रुत्वाऽन्येभ्य उपासते।तेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणाः।।13.26।।",title:"Verse 515",verse_number:26,verse_order:515,transliteration:`anye tv evam ajānantaḥ śhrutvānyebhya upāsate
te ’pi chātitaranty eva mṛityuṁ śhruti-parāyaṇāḥ
`,word_meanings:`anye—others; tu—still; evam—thus; ajānantaḥ—those who are unaware (of spiritual paths); śhrutvā—by hearing; anyebhyaḥ—from others; upāsate—begin to worship; te—they; api—also; cha—and; atitaranti—cross over; eva—even; mṛityum—death; śhruti-parāyaṇāḥ—devotion to hearing (from saints)
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S26.mp3"},{chapter_id:13,chapter_number:13,externalId:516,id:516,text:"यावत्सञ्जायते किञ्चित्सत्त्वं स्थावरजङ्गमम्।क्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ।।13.27।।",title:"Verse 516",verse_number:27,verse_order:516,transliteration:`yāvat sañjāyate kiñchit sattvaṁ sthāvara-jaṅgamam
kṣhetra-kṣhetrajña-sanyogāt tad viddhi bharatarṣhabha
`,word_meanings:`yāvat—whatever; sañjāyate—manifesting; kiñchit—anything; sattvam—being; sthāvara—unmoving; jaṅgamam—moving; kṣhetra—field of activities; kṣhetra-jña—knower of the field; sanyogāt—combination of; tat—that; viddhi—know; bharata-ṛiṣhabha—best of the Bharatas
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S27.mp3"},{chapter_id:13,chapter_number:13,externalId:517,id:517,text:"समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्।विनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति।।13.28।।",title:"Verse 517",verse_number:28,verse_order:517,transliteration:`samaṁ sarveṣhu bhūteṣhu tiṣhṭhantaṁ parameśhvaram
vinaśhyatsv avinaśhyantaṁ yaḥ paśhyati sa paśhyati
`,word_meanings:`samam—equally; sarveṣhu—in all; bhūteṣhu—beings; tiṣhṭhan-tam—accompanying; parama-īśhvaram—Supreme Soul; vinaśhyatsu—amongst the perishable; avinaśhyantam—the imperishable; yaḥ—who; paśhyati—see; saḥ—they; paśhyati—perceive
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S28.mp3"},{chapter_id:13,chapter_number:13,externalId:518,id:518,text:"समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम्।न हिनस्त्यात्मनाऽऽत्मानं ततो याति परां गतिम्।।13.29।।",title:"Verse 518",verse_number:29,verse_order:518,transliteration:`samaṁ paśhyan hi sarvatra samavasthitam īśhvaram
na hinasty ātmanātmānaṁ tato yāti parāṁ gatim
`,word_meanings:`samam—equally; paśhyan—see; hi—indeed; sarvatra—everywhere; samavasthitam—equally present; īśhvaram—God as the Supreme soul; na—do not; hinasti—degrade; ātmanā—by one’s mind; ātmānam—the self; tataḥ—thereby; yāti—reach; parām—the supreme; gatim—destination
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S29.mp3"},{chapter_id:13,chapter_number:13,externalId:519,id:519,text:"प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः।यः पश्यति तथाऽऽत्मानमकर्तारं स पश्यति।।13.30।।",title:"Verse 519",verse_number:30,verse_order:519,transliteration:`prakṛityaiva cha karmāṇi kriyamāṇāni sarvaśhaḥ
yaḥ paśhyati tathātmānam akartāraṁ sa paśhyati
`,word_meanings:`prakṛityā—by material nature; eva—truly; cha—also; karmāṇi—actions; kriyamāṇāni—are performed; sarvaśhaḥ—all; yaḥ—who; paśhyati—see; tathā—also; ātmānam—(embodied) soul; akartāram—actionless; saḥ—they; paśhyati—see
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S30.mp3"},{chapter_id:13,chapter_number:13,externalId:520,id:520,text:"यदा भूतपृथग्भावमेकस्थमनुपश्यति।तत एव च विस्तारं ब्रह्म सम्पद्यते तदा।।13.31।।",title:"Verse 520",verse_number:31,verse_order:520,transliteration:`yadā bhūta-pṛithag-bhāvam eka-stham anupaśhyati
tata eva cha vistāraṁ brahma sampadyate tadā
`,word_meanings:`yadā—when; bhūta—living entities; pṛithak-bhāvam—diverse variety; eka-stham—situated in the same place; anupaśhyati—see; tataḥ—thereafter; eva—indeed; cha—and; vistāram—born from; brahma—Brahman; sampadyate—(they) attain; tadā—then
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S31.mp3"},{chapter_id:13,chapter_number:13,externalId:521,id:521,text:"अनादित्वान्निर्गुणत्वात्परमात्मायमव्ययः।शरीरस्थोऽपि कौन्तेय न करोति न लिप्यते।।13.32।।",title:"Verse 521",verse_number:32,verse_order:521,transliteration:`anāditvān nirguṇatvāt paramātmāyam avyayaḥ
śharīra-stho ’pi kaunteya na karoti na lipyate
`,word_meanings:`anāditvāt—being without beginning; nirguṇatvāt—being devoid of any material qualities; parama—the Supreme; ātmā—soul; ayam—this; avyayaḥ—imperishable; śharīra-sthaḥ—dwelling in the body; api—although; kaunteya—Arjun, the the son of Kunti; na—neither; karoti—acts; na—nor; lipyate—is tainted
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S32.mp3"},{chapter_id:13,chapter_number:13,externalId:522,id:522,text:"यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते।सर्वत्रावस्थितो देहे तथाऽऽत्मा नोपलिप्यते।।13.33।।",title:"Verse 522",verse_number:33,verse_order:522,transliteration:`yathā sarva-gataṁ saukṣhmyād ākāśhaṁ nopalipyate
sarvatrāvasthito dehe tathātmā nopalipyate
`,word_meanings:`yathā—as; sarva-gatam—all-pervading; saukṣhmyāt—due to subtlety; ākāśham—the space; na—not; upalipyate—is contaminated; sarvatra—everywhere; avasthitaḥ—situated; dehe—the body; tathā—similarly; ātmā—the soul; na—not; upalipyate—is contaminated
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S33.mp3"},{chapter_id:13,chapter_number:13,externalId:523,id:523,text:"यथा प्रकाशयत्येकः कृत्स्नं लोकमिमं रविः।क्षेत्रं क्षेत्री तथा कृत्स्नं प्रकाशयति भारत।।13.34।।",title:"Verse 523",verse_number:34,verse_order:523,transliteration:`yathā prakāśhayaty ekaḥ kṛitsnaṁ lokam imaṁ raviḥ
kṣhetraṁ kṣhetrī tathā kṛitsnaṁ prakāśhayati bhārata
`,word_meanings:`yathā—as; prakāśhayati—illumines; ekaḥ—one; kṛitsnam—entire; lokam—solar system; imam—this; raviḥ—sun; kṣhetram—the body; kṣhetrī—the soul; tathā—so; kṛitsnam—entire; prakāśhayati—illumine; bhārata—Arjun, the son of Bharat
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S34.mp3"},{chapter_id:13,chapter_number:13,externalId:524,id:524,text:"क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा।भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम्।।13.35।।",title:"Verse 524",verse_number:35,verse_order:524,transliteration:`kṣhetra-kṣhetrajñayor evam antaraṁ jñāna-chakṣhuṣhā
bhūta-prakṛiti-mokṣhaṁ cha ye vidur yānti te param
`,word_meanings:`kṣhetra—the body; kṣhetra-jñayoḥ—of the knower of the body; evam—thus; antaram—the difference; jñāna-chakṣhuṣhā—with the eyes of knowledge; bhūta—the living entity; prakṛiti-mokṣham—release from material nature; cha—and; ye—who; viduḥ—know; yānti—approach; te—they; param—the Supreme
`,Play:"https://testapi1test.blob.core.windows.net/test/13/Ch13S35.mp3"},{chapter_id:14,chapter_number:14,externalId:525,id:525,text:"श्री भगवानुवाचपरं भूयः प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम्।यज्ज्ञात्वा मुनयः सर्वे परां सिद्धिमितो गताः।।14.1।।",title:"Verse 525",verse_number:1,verse_order:525,transliteration:`śhrī-bhagavān uvācha
paraṁ bhūyaḥ pravakṣhyāmi jñānānāṁ jñānam uttamam
yaj jñātvā munayaḥ sarve parāṁ siddhim ito gatāḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Divine Lord said; param—supreme; bhūyaḥ—again; pravakṣhyāmi—I shall explain; jñānānām—of all knowledge; jñānam uttamam—the supreme wisdom; yat—which; jñātvā—knowing; munayaḥ—saints; sarve—all; parām—highest; siddhim—perfection; itaḥ—through this; gatāḥ—attained
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S01.mp3"},{chapter_id:14,chapter_number:14,externalId:526,id:526,text:"इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागताः।सर्गेऽपि नोपजायन्ते प्रलये न व्यथन्ति च।।14.2।।",title:"Verse 526",verse_number:2,verse_order:526,transliteration:`idaṁ jñānam upāśhritya mama sādharmyam āgatāḥ
sarge ’pi nopajāyante pralaye na vyathanti cha
`,word_meanings:`idam—this; jñānam—wisdom; upāśhritya—take refuge in; mama—mine; sādharmyam—of similar nature; āgatāḥ—having attained; sarge—at the time of creation; api—even; na—not; upajāyante—are born; pralaye—at the time of dissolution; na-vyathanti—they will not experience misery; cha—and
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S02.mp3"},{chapter_id:14,chapter_number:14,externalId:527,id:527,text:"मम योनिर्महद्ब्रह्म तस्मिन् गर्भं दधाम्यहम्।संभवः सर्वभूतानां ततो भवति भारत।।14.3।।",title:"Verse 527",verse_number:3,verse_order:527,transliteration:`mama yonir mahad brahma tasmin garbhaṁ dadhāmy aham
sambhavaḥ sarva-bhūtānāṁ tato bhavati bhārata
`,word_meanings:`mama—my; yoniḥ—womb; mahat brahma—the total material substance, prakṛiti; tasmin—in that; garbham—womb; dadhāmi—impregnate; aham—I; sambhavaḥ—birth; sarva-bhūtānām—of all living beings; tataḥ—thereby; bhavati—becomes; bhārata—Arjun, the son of Bharat; 
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S03.mp3"},{chapter_id:14,chapter_number:14,externalId:528,id:528,text:"सर्वयोनिषु कौन्तेय मूर्तयः सम्भवन्ति याः।तासां ब्रह्म महद्योनिरहं बीजप्रदः पिता।।14.4।।",title:"Verse 528",verse_number:4,verse_order:528,transliteration:`sarva-yoniṣhu kaunteya mūrtayaḥ sambhavanti yāḥ
tāsāṁ brahma mahad yonir ahaṁ bīja-pradaḥ pitā
`,word_meanings:`sarva—all; yoniṣhu—species of life; kaunteya—Arjun, the son of Kunti; mūrtayaḥ—forms; sambhavanti—are produced; yāḥ—which; tāsām—of all of them; brahma-mahat—great material nature; yoniḥ—womb; aham—I; bīja-pradaḥ—seed-giving; pitā—Father
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S04.mp3"},{chapter_id:14,chapter_number:14,externalId:529,id:529,text:"सत्त्वं रजस्तम इति गुणाः प्रकृतिसंभवाः।निबध्नन्ति महाबाहो देहे देहिनमव्ययम्।।14.5।।",title:"Verse 529",verse_number:5,verse_order:529,transliteration:`sattvaṁ rajas tama iti guṇāḥ prakṛiti-sambhavāḥ
nibadhnanti mahā-bāho dehe dehinam avyayam
`,word_meanings:`sattvam—mode of goodness; rajaḥ—mode of passion; tamaḥ—mode of ignorance; iti—thus; guṇāḥ—modes; prakṛiti—material nature; sambhavāḥ—consists of; nibadhnanti—bind; mahā-bāho—mighty-armed one; dehe—in the body; dehinam—the embodied soul; avyayam—eternal
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S05.mp3"},{chapter_id:14,chapter_number:14,externalId:530,id:530,text:"तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम्।सुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ।।14.6।।",title:"Verse 530",verse_number:6,verse_order:530,transliteration:`tatra sattvaṁ nirmalatvāt prakāśhakam anāmayam
sukha-saṅgena badhnāti jñāna-saṅgena chānagha
`,word_meanings:`tatra—amongst these; sattvam—mode of goodness; nirmalatvāt—being purest; prakāśhakam—illuminating; anāmayam—healthy and full of well-being; sukha—happiness; saṅgena—attachment; badhnāti—binds; jñāna—knowledge; saṅgena—attachment; cha—also; anagha—Arjun, the sinless one
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S06.mp3"},{chapter_id:14,chapter_number:14,externalId:531,id:531,text:"रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम्।तन्निबध्नाति कौन्तेय कर्मसङ्गेन देहिनम्।।14.7।।",title:"Verse 531",verse_number:7,verse_order:531,transliteration:`rajo rāgātmakaṁ viddhi tṛiṣhṇā-saṅga-samudbhavam
tan nibadhnāti kaunteya karma-saṅgena dehinam
`,word_meanings:`rajaḥ—mode of passion; rāga-ātmakam—of the nature of passion; viddhi—know; tṛiṣhṇā—desires; saṅga—association; samudbhavam—arises from; tat—that; nibadhnāti—binds; kaunteya—Arjun, the son of Kunti; karma-saṅgena—through attachment to fruitive actions; dehinam—the embodied soul
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S07.mp3"},{chapter_id:14,chapter_number:14,externalId:532,id:532,text:"तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम्।प्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत।।14.8।।",title:"Verse 532",verse_number:8,verse_order:532,transliteration:`tamas tv ajñāna-jaṁ viddhi mohanaṁ sarva-dehinām
pramādālasya-nidrābhis tan nibadhnāti bhārata
`,word_meanings:`tamaḥ—mode of ignorance; tu—but; ajñāna-jam—born of ignorance; viddhi—know; mohanam—illusion; sarva-dehinām—for all the embodied souls; pramāda—negligence; ālasya—laziness; nidrābhiḥ—and sleep; tat—that; nibadhnāti—binds; bhārata—Arjun, the son of Bharat
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S08.mp3"},{chapter_id:14,chapter_number:14,externalId:533,id:533,text:"सत्त्वं सुखे सञ्जयति रजः कर्मणि भारत।ज्ञानमावृत्य तु तमः प्रमादे सञ्जयत्युत।।14.9।।",title:"Verse 533",verse_number:9,verse_order:533,transliteration:`sattvaṁ sukhe sañjayati rajaḥ karmaṇi bhārata
jñānam āvṛitya tu tamaḥ pramāde sañjayaty uta
`,word_meanings:`sattvam—mode of goodness; sukhe—to happiness; sañjayati—binds; rajaḥ—mode of passion; karmaṇi—toward actions; bhārata—Arjun, the son of Bharat; jñānam—wisdom; āvṛitya—clouds; tu—but; tamaḥ—mode of ignorance; pramāde—to delusion; sañjayati—binds; uta—indeed
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S09.mp3"},{chapter_id:14,chapter_number:14,externalId:534,id:534,text:"रजस्तमश्चाभिभूय सत्त्वं भवति भारत।रजः सत्त्वं तमश्चैव तमः सत्त्वं रजस्तथा।।14.10।।",title:"Verse 534",verse_number:10,verse_order:534,transliteration:`rajas tamaśh chābhibhūya sattvaṁ bhavati bhārata
rajaḥ sattvaṁ tamaśh chaiva tamaḥ sattvaṁ rajas tathā
`,word_meanings:`rajaḥ—mode of passion; tamaḥ—mode of ignorance; cha—and; abhibhūya—prevails; sattvam—mode of goodness; bhavati—becomes; bhārata—Arjun, the son of Bharat; rajaḥ—mode of passion; sattvam—mode of goodness; tamaḥ—mode of ignorance; cha—and; eva—indeed; tamaḥ—mode of ignorance; sattvam—mode of goodness; rajaḥ—mode of passion; tathā—also
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S10.mp3"},{chapter_id:14,chapter_number:14,externalId:535,id:535,text:"सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते।ज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत।।14.11।।",title:"Verse 535",verse_number:11,verse_order:535,transliteration:`sarva-dvāreṣhu dehe ’smin prakāśha upajāyate
jñānaṁ yadā tadā vidyād vivṛiddhaṁ sattvam ity uta
`,word_meanings:`sarva—all; dvāreṣhu—through the gates; dehe—body; asmin—in this; prakāśhaḥ—illumination; upajāyate—manifest; jñānam—knowledge; yadā—when; tadā—then; vidyāt—know; vivṛiddham—predominates; sattvam—mode of goodness; iti—thus; uta—certainly;
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S11.mp3"},{chapter_id:14,chapter_number:14,externalId:536,id:536,text:"लोभः प्रवृत्तिरारम्भः कर्मणामशमः स्पृहा।रजस्येतानि जायन्ते विवृद्धे भरतर्षभ।।14.12।।",title:"Verse 536",verse_number:12,verse_order:536,transliteration:`lobhaḥ pravṛittir ārambhaḥ karmaṇām aśhamaḥ spṛihā
rajasy etāni jāyante vivṛiddhe bharatarṣhabha

`,word_meanings:`lobhaḥ—greed; pravṛittiḥ—activity; ārambhaḥ—exertion; karmaṇām—for fruitive actions; aśhamaḥ—restlessness; spṛihā—craving; rajasi—of the mode of passion; etāni—these; jāyante—develop; vivṛiddhe—when predominates; bharata-ṛiṣhabha—the best of the Bharatas, Arjun;
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S12.mp3"},{chapter_id:14,chapter_number:14,externalId:537,id:537,text:"अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च।तमस्येतानि जायन्ते विवृद्धे कुरुनन्दन।।14.13।।",title:"Verse 537",verse_number:13,verse_order:537,transliteration:`aprakāśho ’pravṛittiśh cha pramādo moha eva cha
tamasy etāni jāyante vivṛiddhe kuru-nandana

`,word_meanings:`aprakāśhaḥ—nescience; apravṛittiḥ—inertia; cha—and; pramādaḥ—negligence; mohaḥ—delusion; eva—indeed; cha—also; tamasi—mode of ignorance; etāni—these; jāyante—manifest; vivṛiddhe—when dominates; kuru-nandana—the joy of the Kurus, Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S13.mp3"},{chapter_id:14,chapter_number:14,externalId:538,id:538,text:"यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत्।तदोत्तमविदां लोकानमलान्प्रतिपद्यते।।14.14।।",title:"Verse 538",verse_number:14,verse_order:538,transliteration:`yadā sattve pravṛiddhe tu pralayaṁ yāti deha-bhṛit
tadottama-vidāṁ lokān amalān pratipadyate
`,word_meanings:`yadā—when; sattve—in the mode of goodness; pravṛiddhe—when premodinates; tu—indeed; pralayam—death; yāti—reach; deha-bhṛit—the embodied; tadā—then; uttama-vidām—of the learned; lokān—abodes; amalān—pure; pratipadyate—attains;
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S14.mp3"},{chapter_id:14,chapter_number:14,externalId:539,id:539,text:"रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते।तथा प्रलीनस्तमसि मूढयोनिषु जायते।।14.15।।",title:"Verse 539",verse_number:15,verse_order:539,transliteration:`rajasi pralayaṁ gatvā karma-saṅgiṣhu jāyate
tathā pralīnas tamasi mūḍha-yoniṣhu jāyate
`,word_meanings:`rajasi—in the mode of passion; pralayam—death; gatvā—attaining; karma-saṅgiṣhu—among people driven by work; jāyate—are born; tathā—likewise; pralīnaḥ—dying; tamasi—in the mode of ignorance; mūḍha-yoniṣhu—in the animal kingdom; jāyate—takes birth
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S15.mp3"},{chapter_id:14,chapter_number:14,externalId:540,id:540,text:"कर्मणः सुकृतस्याहुः सात्त्विकं निर्मलं फलम्।रजसस्तु फलं दुःखमज्ञानं तमसः फलम्।।14.16।।",title:"Verse 540",verse_number:16,verse_order:540,transliteration:`karmaṇaḥ sukṛitasyāhuḥ sāttvikaṁ nirmalaṁ phalam
rajasas tu phalaṁ duḥkham ajñānaṁ tamasaḥ phalam

`,word_meanings:`karmaṇaḥ—of action; su-kṛitasya—pure; āhuḥ—is said; sāttvikam—mode of goodness; nirmalam—pure; phalam—result; rajasaḥ—mode of passion; tu—indeed; phalam—result; duḥkham—pain; ajñānam—ignorance; tamasaḥ—mode of ignorance; phalam—result
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S16.mp3"},{chapter_id:14,chapter_number:14,externalId:541,id:541,text:"सत्त्वात्सञ्जायते ज्ञानं रजसो लोभ एव च।प्रमादमोहौ तमसो भवतोऽज्ञानमेव च।।14.17।।",title:"Verse 541",verse_number:17,verse_order:541,transliteration:`sattvāt sañjāyate jñānaṁ rajaso lobha eva cha
pramāda-mohau tamaso bhavato ’jñānam eva cha
`,word_meanings:`sattvāt—from the mode of goodness; sañjāyate—arises; jñānam—knowledge; rajasaḥ—from the mode of passion; lobhaḥ—greed; eva—indeed; cha—and; pramāda—negligence; mohau—delusion; tamasaḥ—from the mode of ignorance; bhavataḥ—arise; ajñānam—ignorance; eva—indeed; cha—and
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S17.mp3"},{chapter_id:14,chapter_number:14,externalId:542,id:542,text:"ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः।जघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः।।14.18।।",title:"Verse 542",verse_number:18,verse_order:542,transliteration:`ūrdhvaṁ gachchhanti sattva-sthā madhye tiṣhṭhanti rājasāḥ
jaghanya-guṇa-vṛitti-sthā adho gachchhanti tāmasāḥ
`,word_meanings:`ūrdhvam—upward; gachchhanti—rise; sattva-sthāḥ—those situated in the mode of goodness; madhye—in the middle; tiṣhṭhanti—stay; rājasāḥ—those in the mode of passion; jaghanya—abominable; guṇa—quality; vṛitti-sthāḥ—engaged in activities; adhaḥ—down; gachchhanti—go; tāmasāḥ—those in the mode of ignorance
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S18.mp3"},{chapter_id:14,chapter_number:14,externalId:543,id:543,text:"नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति।गुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति।।14.19।।",title:"Verse 543",verse_number:19,verse_order:543,transliteration:`nānyaṁ guṇebhyaḥ kartāraṁ yadā draṣhṭānupaśhyati
guṇebhyaśh cha paraṁ vetti mad-bhāvaṁ so ’dhigachchhati
`,word_meanings:`na—no; anyam—other; guṇebhyaḥ—of the guṇas; kartāram—agents of action; yadā—when; draṣhṭā—the seer; anupaśhyati—see; guṇebhyaḥ—to the modes of nature; cha—and; param—transcendental; vetti—know; mat-bhāvam—my divine nature; saḥ—they; adhigachchhati—attain
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S19.mp3"},{chapter_id:14,chapter_number:14,externalId:544,id:544,text:"गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान्।जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते।।14.20।।",title:"Verse 544",verse_number:20,verse_order:544,transliteration:`guṇān etān atītya trīn dehī deha-samudbhavān
janma-mṛityu-jarā-duḥkhair vimukto ’mṛitam aśhnute
`,word_meanings:`guṇān—the three modes of material nature; etān—these; atītya—transcending; trīn—three; dehī—the embodied; deha—body; samudbhavān—produced of; janma—birth; mṛityu—death; jarā—old age; duḥkhaiḥ—misery; vimuktaḥ—freed from; amṛitam—immortality; aśhnute—attains
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S20.mp3"},{chapter_id:14,chapter_number:14,externalId:545,id:545,text:"अर्जुन उवाचकैर्लिंगैस्त्रीन्गुणानेतानतीतो भवति प्रभो।किमाचारः कथं चैतांस्त्रीन्गुणानतिवर्तते।।14.21।।",title:"Verse 545",verse_number:21,verse_order:545,transliteration:`arjuna uvācha
kair liṅgais trīn guṇān etān atīto bhavati prabho
kim āchāraḥ kathaṁ chaitāns trīn guṇān ativartate
`,word_meanings:`arjunaḥ uvācha—Arjun inquired; kaiḥ—by what; liṅgaiḥ—symptoms; trīn—three; guṇān—modes of material nature; etān—these; atītaḥ—having transcended; bhavati—is; prabho—Lord; kim—what; āchāraḥ—conduct; katham—how; cha—and; etān—these; trīn—three; guṇān—modes of material nature; ativartate—transcend
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S21.mp3"},{chapter_id:14,chapter_number:14,externalId:546,id:546,text:"श्री भगवानुवाचप्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव।न द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्क्षति।।14.22।।",title:"Verse 546",verse_number:22,verse_order:546,transliteration:`śhrī-bhagavān uvācha
prakāśhaṁ cha pravṛittiṁ cha moham eva cha pāṇḍava
na dveṣhṭi sampravṛittāni na nivṛittāni kāṅkṣhati

`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Divine Personality said; prakāśham—illumination; cha—and; pravṛittim—activity; cha—and; moham—delusion; eva—even; cha—and; pāṇḍava—Arjun, the son of Pandu; na dveṣhṭi—do not hate; sampravṛittāni—when present; na—nor; nivṛittāni—when absent; kāṅkṣhati—longs;
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S22.mp3"},{chapter_id:14,chapter_number:14,externalId:547,id:547,text:"उदासीनवदासीनो गुणैर्यो न विचाल्यते।गुणा वर्तन्त इत्येव योऽवतिष्ठति नेङ्गते।।14.23।।",title:"Verse 547",verse_number:23,verse_order:547,transliteration:`udāsīna-vad āsīno guṇair yo na vichālyate
guṇā vartanta ity evaṁ yo ’vatiṣhṭhati neṅgate
`,word_meanings:`udāsīna-vat—neutral; āsīnaḥ—situated; guṇaiḥ—to the modes of material nature; yaḥ—who; na—not; vichālyate—are disturbed; guṇāḥ—modes of material nature; vartante—act; iti-evam—knowing it in this way; yaḥ—who; avatiṣhṭhati—established in the self; na—not; iṅgate—wavering
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S23.mp3"},{chapter_id:14,chapter_number:14,externalId:548,id:548,text:"समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः।तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः।।14.24।।",title:"Verse 548",verse_number:24,verse_order:548,transliteration:`sama-duḥkha-sukhaḥ sva-sthaḥ sama-loṣhṭāśhma-kāñchanaḥ
tulya-priyāpriyo dhīras tulya-nindātma-sanstutiḥ
`,word_meanings:`sama—alike; duḥkha—distress; sukhaḥ—happiness; sva-sthaḥ—established in the self; sama—equally; loṣhṭa—a clod; aśhma—stone; kāñchanaḥ—gold; tulya—of equal value; priya—pleasant; apriyaḥ—unpleasant; dhīraḥ—steady; tulya—the same; nindā—blame; ātma-sanstutiḥ—praise;
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S24.mp3"},{chapter_id:14,chapter_number:14,externalId:549,id:549,text:"मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयोः।सर्वारम्भपरित्यागी गुणातीतः स उच्यते।।14.25।।",title:"Verse 549",verse_number:25,verse_order:549,transliteration:`mānāpamānayos tulyas tulyo mitrāri-pakṣhayoḥ
sarvārambha-parityāgī guṇātītaḥ sa uchyate
`,word_meanings:`māna—honor; apamānayoḥ—dishonor; tulyaḥ—equal; tulyaḥ—equal; mitra—friend; ari—foe; pakṣhayoḥ—to the parties; sarva—all; ārambha—enterprises; parityāgī—renouncer; guṇa-atītaḥ—risen above the three modes of material nature; saḥ—they; uchyate—are said to have
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S25.mp3"},{chapter_id:14,chapter_number:14,externalId:550,id:550,text:"मां च योऽव्यभिचारेण भक्ितयोगेन सेवते।स गुणान्समतीत्यैतान् ब्रह्मभूयाय कल्पते।।14.26।।",title:"Verse 550",verse_number:26,verse_order:550,transliteration:`māṁ cha yo ’vyabhichāreṇa bhakti-yogena sevate
sa guṇān samatītyaitān brahma-bhūyāya kalpate

`,word_meanings:`mām—me; cha—only; yaḥ—who; avyabhichāreṇa—unalloyed; bhakti-yogena—through devotion; sevate—serve; saḥ—they; guṇān—the three modes of material nature; samatītya—rise above; etān—these; brahma-bhūyāya—level of Brahman; kalpate—comes to
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S26.mp3"},{chapter_id:14,chapter_number:14,externalId:551,id:551,text:"ब्रह्मणो हि प्रतिष्ठाऽहममृतस्याव्ययस्य च।शाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च।।14.27।।",title:"Verse 551",verse_number:27,verse_order:551,transliteration:`brahmaṇo hi pratiṣhṭhāham amṛitasyāvyayasya cha
śhāśhvatasya cha dharmasya sukhasyaikāntikasya cha
`,word_meanings:`brahmaṇaḥ—of Brahman; hi—only; pratiṣhṭhā—the basis; aham—I; amṛitasya—of the immortal; avyayasya—of the imperishable; cha—and; śhāśhvatasya—of the eternal; cha—and; dharmasya—of the dharma; sukhasya—of bliss; aikāntikasya—unending; cha—and
`,Play:"https://testapi1test.blob.core.windows.net/test/14/Ch14S27.mp3"},{chapter_id:15,chapter_number:15,externalId:552,id:552,text:"श्री भगवानुवाचऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्।छन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्।।15.1।।",title:"Verse 552",verse_number:1,verse_order:552,transliteration:`śhrī-bhagavān uvācha
ūrdhva-mūlam adhaḥ-śhākham aśhvatthaṁ prāhur avyayam
chhandānsi yasya parṇāni yas taṁ veda sa veda-vit
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Divine Personality said; ūrdhva-mūlam—with roots above; adhaḥ—downward; śhākham—branches; aśhvattham—the sacred fig tree; prāhuḥ—they speak; avyayam—eternal; chhandānsi—Vedic mantras; yasya—of which; parṇāni—leaves; yaḥ—who; tam—that; veda—knows; saḥ—he; veda-vit—the knower of the Vedas
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S01.mp3"},{chapter_id:15,chapter_number:15,externalId:553,id:553,text:"अधश्चोर्ध्वं प्रसृतास्तस्य शाखा     गुणप्रवृद्धा विषयप्रवालाः।अधश्च मूलान्यनुसन्ततानि     कर्मानुबन्धीनि मनुष्यलोके।।15.2।।",title:"Verse 553",verse_number:2,verse_order:553,transliteration:`adhaśh chordhvaṁ prasṛitās tasya śhākhā
guṇa-pravṛiddhā viṣhaya-pravālāḥ
adhaśh cha mūlāny anusantatāni
karmānubandhīni manuṣhya-loke
`,word_meanings:`adhaḥ—downward; cha—and; ūrdhvam—upward; prasṛitāḥ—extended; tasya—its; śhākhāḥ—branches; guṇa—modes of material nature; pravṛiddhāḥ—nourished; viṣhaya—objects of the senses; pravālāḥ—buds; adhaḥ—downward; cha—and; mūlāni—roots; anusantatāni—keep growing; karma—actions; anubandhīni—bound; manuṣhya-loke—in the world of humans
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S02.mp3"},{chapter_id:15,chapter_number:15,externalId:554,id:554,text:"न रूपमस्येह तथोपलभ्यते    नान्तो न चादिर्न च संप्रतिष्ठा।अश्वत्थमेनं सुविरूढमूल    मसङ्गशस्त्रेण दृढेन छित्त्वा।।15.3।।",title:"Verse 554",verse_number:3,verse_order:554,transliteration:`na rūpam asyeha tathopalabhyate
nānto na chādir na cha sampratiṣhṭhā
aśhvattham enaṁ su-virūḍha-mūlam
asaṅga-śhastreṇa dṛiḍhena chhittvā

`,word_meanings:`na—not; rūpam—form; asya—of this; iha—in this world; tathā—as such; upalabhyate—is perceived; na—neither; antaḥ—end; na—nor; cha—also; ādiḥ—beginning; na—never; cha—also; sampratiṣhṭhā—the basis; aśhvattham—sacred fig tree; enam—this; su-virūḍha-mūlam—deep-rooted; asaṅga-śhastreṇa—by the axe of detachment; dṛiḍhena—strong; chhittvā—having cut down;
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S03.mp3"},{chapter_id:15,chapter_number:15,externalId:555,id:555,text:"ततः पदं तत्परिमार्गितव्य    यस्मिन्गता न निवर्तन्ति भूयः।तमेव चाद्यं पुरुषं प्रपद्ये    यतः प्रवृत्तिः प्रसृता पुराणी।।15.4।।",title:"Verse 555",verse_number:4,verse_order:555,transliteration:`tataḥ padaṁ tat parimārgitavyaṁ
yasmin gatā na nivartanti bhūyaḥ
tam eva chādyaṁ puruṣhaṁ prapadye
yataḥ pravṛittiḥ prasṛitā purāṇī
`,word_meanings:`tataḥ—then; padam—place; tat—that; parimārgitavyam—one must search out; yasmin—where; gatāḥ—having gone; na—not; nivartanti—return; bhūyaḥ—again; tam—to him; eva—certainly; cha—and; ādyam—original; puruṣham—the Supreme Lord; prapadye—take refuge; yataḥ—whence; pravṛittiḥ—the activity; prasṛitā—streamed forth; purāṇi—very old
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S04.mp3"},{chapter_id:15,chapter_number:15,externalId:556,id:556,text:"निर्मानमोहा जितसङ्गदोषा    अध्यात्मनित्या विनिवृत्तकामाः।द्वन्द्वैर्विमुक्ताः सुखदुःखसंज्ञै    र्गच्छन्त्यमूढाः पदमव्ययं तत्।।15.5।।",title:"Verse 556",verse_number:5,verse_order:556,transliteration:`nirmāna-mohā jita-saṅga-doṣhā
adhyātma-nityā vinivṛitta-kāmāḥ
dvandvair vimuktāḥ sukha-duḥkha-sanjñair
gachchhanty amūḍhāḥ padam avyayaṁ tat
`,word_meanings:`niḥ—free from; māna—vanity; mohāḥ—delusion; jita—having overcome; saṅga—attachment; doṣhāḥ—evils; adhyātma-nityāḥ—dwelling constantly in the self and God; vinivṛitta—freed from; kāmāḥ—desire to enjoy senses; dvandvaiḥ—from the dualities; vimuktāḥ—liberated; sukha-duḥkha—pleasure and pain; saṁjñaiḥ—known as; gachchhanti—attain; amūḍhāḥ—unbewildered; padam—abode; avyayam—eternal; tat—that
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S05.mp3"},{chapter_id:15,chapter_number:15,externalId:557,id:557,text:"न तद्भासयते सूर्यो न शशाङ्को न पावकः।यद्गत्वा न निवर्तन्ते तद्धाम परमं मम।।15.6।।",title:"Verse 557",verse_number:6,verse_order:557,transliteration:`na tad bhāsayate sūryo na śhaśhāṅko na pāvakaḥ
yad gatvā na nivartante tad dhāma paramaṁ mama

`,word_meanings:`na—neither; tat—that; bhāsayate—illumine; sūryaḥ—the sun; na—nor; śhaśhāṅkaḥ—the moon; na—nor; pāvakaḥ—fire; yat—where; gatvā—having gone; na—never; nivartante—they return; tat—that; dhāma—abode; paramam—supreme; mama—mine
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S06.mp3"},{chapter_id:15,chapter_number:15,externalId:558,id:558,text:"ममैवांशो जीवलोके जीवभूतः सनातनः।मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति।।15.7।।",title:"Verse 558",verse_number:7,verse_order:558,transliteration:`mamaivānśho jīva-loke jīva-bhūtaḥ sanātanaḥ
manaḥ-ṣhaṣhṭhānīndriyāṇi prakṛiti-sthāni karṣhati
`,word_meanings:`mama—my; eva—only; anśhaḥ—fragmental part; jīva-loke—in the material world; jīva-bhūtaḥ—the embodied souls; sanātanaḥ—eternal; manaḥ—with the mind; ṣhaṣhṭhāni—the six; indriyāṇi—senses; prakṛiti-sthāni—bound by material nature; karṣhati—struggling
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S07.mp3"},{chapter_id:15,chapter_number:15,externalId:559,id:559,text:"शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वरः।गृहीत्वैतानि संयाति वायुर्गन्धानिवाशयात्।।15.8।।",title:"Verse 559",verse_number:8,verse_order:559,transliteration:`śharīraṁ yad avāpnoti yach chāpy utkrāmatīśhvaraḥ
gṛihītvaitāni sanyāti vāyur gandhān ivāśhayāt
`,word_meanings:`śharīram—the body; yat—as; avāpnoti—carries; yat—as; cha api—also; utkrāmati—leaves; īśhvaraḥ—the Lord of the material body, the embodied soul; gṛihītvā—taking; etāni—these; sanyāti—goes away; vāyuḥ—the air; gandhān—fragrance; iva—like; āśhayāt—from seats
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S08.mp3"},{chapter_id:15,chapter_number:15,externalId:560,id:560,text:"श्रोत्रं चक्षुः स्पर्शनं च रसनं घ्राणमेव च।अधिष्ठाय मनश्चायं विषयानुपसेवते।।15.9।।",title:"Verse 560",verse_number:9,verse_order:560,transliteration:`śhrotraṁ chakṣhuḥ sparśhanaṁ cha rasanaṁ ghrāṇam eva cha
adhiṣhṭhāya manaśh chāyaṁ viṣhayān upasevate
`,word_meanings:`śhrotram—ears; chakṣhuḥ—eyes; sparśhanam—the sense of touch; cha—and; rasanam—tongue; ghrāṇam—nose; eva—also; cha—and; adhiṣhṭhāya—grouped around; manaḥ—mind; cha—also; ayam—they; viṣhayān—sense objects; upasevate—savors
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S09.mp3"},{chapter_id:15,chapter_number:15,externalId:561,id:561,text:"उत्क्रामन्तं स्थितं वापि भुञ्जानं वा गुणान्वितम्।विमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुषः।।15.10।।",title:"Verse 561",verse_number:10,verse_order:561,transliteration:`utkrāmantaṁ sthitaṁ vāpi bhuñjānaṁ vā guṇānvitam
vimūḍhā nānupaśhyanti paśhyanti jñāna-chakṣhuṣhaḥ
`,word_meanings:`utkrāmantam—departing; sthitam—residing; vā api—or even; bhuñjānam—enjoys; vā—or; guṇa-anvitam—under the spell of the modes of material nature; vimūḍhāḥ—the ignorant; na—not; anupaśhyanti—percieve; paśhyanti—behold; jñāna-chakṣhuṣhaḥ—those who possess the eyes of knowledge
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S10.mp3"},{chapter_id:15,chapter_number:15,externalId:562,id:562,text:"यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम्।यतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतसः।।15.11।।",title:"Verse 562",verse_number:11,verse_order:562,transliteration:`yatanto yoginaśh chainaṁ paśhyanty ātmany avasthitam
yatanto ‘py akṛitātmāno nainaṁ paśhyanty achetasaḥ
`,word_meanings:`yatantaḥ—striving; yoginaḥ—yogis; cha—too; enam—this (the soul); paśhyanti—see; ātmani—in the body; avasthitam—enshrined; yatantaḥ—strive; api—even though; akṛita-ātmānaḥ—those whose minds are not purified; na—not; enam—this; paśhyanti—cognize; achetasaḥ—unaware
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S11.mp3"},{chapter_id:15,chapter_number:15,externalId:563,id:563,text:"यदादित्यगतं तेजो जगद्भासयतेऽखिलम्।यच्चन्द्रमसि यच्चाग्नौ तत्तेजो विद्धि मामकम्।।15.12।।",title:"Verse 563",verse_number:12,verse_order:563,transliteration:`yad āditya-gataṁ tejo jagad bhāsayate ’khilam
yach chandramasi yach chāgnau tat tejo viddhi māmakam
`,word_meanings:`yat—which; āditya-gatam—in the sun; tejaḥ—brilliance; jagat—solar system; bhāsayate—illuminates; akhilam—entire; yat—which; chandramasi—in the moon; yat—which; cha—also; agnau—in the fire; tat—that; tejaḥ—brightness; viddhi—know; māmakam—mine
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S12.mp3"},{chapter_id:15,chapter_number:15,externalId:564,id:564,text:"गामाविश्य च भूतानि धारयाम्यहमोजसा।पुष्णामि चौषधीः सर्वाः सोमो भूत्वा रसात्मकः।।15.13।।",title:"Verse 564",verse_number:13,verse_order:564,transliteration:`gām āviśhya cha bhūtāni dhārayāmy aham ojasā
puṣhṇāmi chauṣhadhīḥ sarvāḥ somo bhūtvā rasātmakaḥ

`,word_meanings:`gām—earth; āviśhya—permeating; cha—and; bhūtāni—living beings; dhārayāmi—sustain; aham—I; ojasā—energy; puṣhṇāmi—nourish; cha—and; auṣhadhīḥ—plants; sarvāḥ—all; somaḥ—the moon; bhūtvā—becoming; rasa-ātmakaḥ—supplying the juice of life
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S13.mp3"},{chapter_id:15,chapter_number:15,externalId:565,id:565,text:"अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः।प्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम्।।15.14।।",title:"Verse 565",verse_number:14,verse_order:565,transliteration:`ahaṁ vaiśhvānaro bhūtvā prāṇināṁ deham āśhritaḥ
prāṇāpāna-samāyuktaḥ pachāmy annaṁ chatur-vidham

`,word_meanings:`aham—I; vaiśhvānaraḥ—fire of digestion; bhūtvā—becoming; prāṇinām—of all living beings; deham—the body; āśhritaḥ—situated; prāṇa-apāna—outgoing and incoming breath; samāyuktaḥ—keeping in balance; pachāmi—I digest; annam—foods; chatuḥ-vidham—the four kinds
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S14.mp3"},{chapter_id:15,chapter_number:15,externalId:566,id:566,text:"सर्वस्य चाहं हृदि सन्निविष्टो    मत्तः स्मृतिर्ज्ञानमपोहनं च।वेदैश्च सर्वैरहमेव वेद्यो    वेदान्तकृद्वेदविदेव चाहम्।।15.15।।",title:"Verse 566",verse_number:15,verse_order:566,transliteration:`sarvasya chāhaṁ hṛidi sanniviṣhṭo
mattaḥ smṛitir jñānam apohanaṁ cha
vedaiśh cha sarvair aham eva vedyo
vedānta-kṛid veda-vid eva chāham

`,word_meanings:`sarvasya—of all living beings; cha—and; aham—I; hṛidi—in the hearts; sanniviṣhṭaḥ—seated; mattaḥ—from me; smṛitiḥ—memory; jñānam—knowledge; apohanam—forgetfulness; cha—as well as; vedaiḥ—by the Vedas; cha—and; sarvaiḥ—all; aham—I; eva—alone; vedyaḥ—to be known; vedānta-kṛit—the author of the Vedānt; veda-vit—the knower of the meaning of the Vedas; eva—alone; cha—and; aham—I
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S15.mp3"},{chapter_id:15,chapter_number:15,externalId:567,id:567,text:"द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च।क्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते।।15.16।।",title:"Verse 567",verse_number:16,verse_order:567,transliteration:`dvāv imau puruṣhau loke kṣharaśh chākṣhara eva cha
kṣharaḥ sarvāṇi bhūtāni kūṭa-stho ’kṣhara uchyate
`,word_meanings:`dvau—two; imau—these; puruṣhau—beings; loke—in creation; kṣharaḥ—the perishable; cha—and; akṣharaḥ—the imperishable; eva—even; cha—and; kṣharaḥ—the perishable; sarvāṇi—all; bhūtāni—beings; kūṭa-sthaḥ—the liberated; akṣharaḥ—the imperishable; uchyate—is said
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S16.mp3"},{chapter_id:15,chapter_number:15,externalId:568,id:568,text:"उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः।यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः।।15.17।।",title:"Verse 568",verse_number:17,verse_order:568,transliteration:`uttamaḥ puruṣhas tv anyaḥ paramātmety udāhṛitaḥ
yo loka-trayam āviśhya bibharty avyaya īśhvaraḥ

`,word_meanings:`uttamaḥ—the Supreme; puruṣhaḥ—Divine Personality; tu—but; anyaḥ—besides; parama-ātmā—the Supreme Soul; iti—thus; udāhṛitaḥ—is said; yaḥ—who; loka trayam—the three worlds; āviśhya—enters; bibharti—supports; avyayaḥ—indestructible; īśhvaraḥ—the controller
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S17.mp3"},{chapter_id:15,chapter_number:15,externalId:569,id:569,text:"यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः।अतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः।।15.18।।",title:"Verse 569",verse_number:18,verse_order:569,transliteration:`yasmāt kṣharam atīto ’ham akṣharād api chottamaḥ
ato ’smi loke vede cha prathitaḥ puruṣhottamaḥ

`,word_meanings:`yasmāt—hence; kṣharam—to the perishable; atītaḥ—transcendental; aham—I; akṣharāt—to the imperishable; api—even; cha—and; uttamaḥ—transcendental; ataḥ—therefore; asmi—I am; loke—in the world; vede—in the Vedas; cha—and; prathitaḥ—celebrated; puruṣha-uttamaḥ—as the Supreme Divine Personality
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S18.mp3"},{chapter_id:15,chapter_number:15,externalId:570,id:570,text:"यो मामेवमसम्मूढो जानाति पुरुषोत्तमम्।स सर्वविद्भजति मां सर्वभावेन भारत।।15.19।।",title:"Verse 570",verse_number:19,verse_order:570,transliteration:`yo mām evam asammūḍho jānāti puruṣhottamam
sa sarva-vid bhajati māṁ sarva-bhāvena bhārata

`,word_meanings:`yaḥ—who; mām—me; evam—thus; asammūḍhaḥ—without a doubt; jānāti—know; puruṣha-uttamam—the Supreme Divine Personality; saḥ—they; sarva-vit—those with complete knowledge; bhajati—worship; mām—me; sarva-bhāvena—with one’s whole being; bhārata—Arjun, the son of Bharat
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S19.mp3"},{chapter_id:15,chapter_number:15,externalId:571,id:571,text:"इति गुह्यतमं शास्त्रमिदमुक्तं मयाऽनघ।एतद्बुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत।।15.20।।",title:"Verse 571",verse_number:20,verse_order:571,transliteration:`iti guhyatamaṁ śhāstram idam uktaṁ mayānagha
etad buddhvā buddhimān syāt kṛita-kṛityaśh cha bhārata
`,word_meanings:`iti—these; guhya-tamam—most secret; śhāstram—Vedic scriptures; idam—this; uktam—spoken; mayā—by me; anagha—Arjun, the sinless one; etat—this; buddhvā—understanding; buddhi-mān—enlightened; syāt—one becomes; kṛita-kṛityaḥ—who fulfills all that is to be accomplished; cha—and; bhārata—Arjun, the son of Bharat
`,Play:"https://testapi1test.blob.core.windows.net/test/15/Ch15S20.mp3"},{chapter_id:16,chapter_number:16,externalId:572,id:572,text:`श्री भगवानुवाच

अभयं सत्त्वसंशुद्धिः ज्ञानयोगव्यवस्थितिः।

दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्।।16.1।।
 `,title:"Verse 572",verse_number:1,verse_order:572,transliteration:`śhrī-bhagavān uvācha
abhayaṁ sattva-sanśhuddhir jñāna-yoga-vyavasthitiḥ
dānaṁ damaśh cha yajñaśh cha svādhyāyas tapa ārjavam
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Divine Personality said; abhayam—fearlessness; sattva-sanśhuddhiḥ—purity of mind; jñāna—knowledge; yoga—spiritual; vyavasthitiḥ—steadfastness; dānam—charity; damaḥ—control of the senses; cha—and; yajñaḥ—performance of sacrifice; cha—and; svādhyāyaḥ—study of sacred books; tapaḥ—austerity; ārjavam—straightforwardness;
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S01.mp3"},{chapter_id:16,chapter_number:16,externalId:573,id:573,text:"अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्।दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्।।16.2।।",title:"Verse 573",verse_number:2,verse_order:573,transliteration:`ahinsā satyam akrodhas tyāgaḥ śhāntir apaiśhunam
dayā bhūteṣhv aloluptvaṁ mārdavaṁ hrīr achāpalam
`,word_meanings:`ahinsā—non-violence; satyam—truthfulness; akrodhaḥ—absence of anger; tyāgaḥ—renunciation; śhāntiḥ—peacefulness; apaiśhunam—restraint from fault-finding; dayā—compassion; bhūteṣhu—toward all living beings; aloluptvam—absence of covetousness; mārdavam—gentleness; hrīḥ—modesty; achāpalam—lack of fickleness;
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S02.mp3"},{chapter_id:16,chapter_number:16,externalId:574,id:574,text:`तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता।

भवन्ति सम्पदं दैवीमभिजातस्य भारत।।16.3।।
 `,title:"Verse 574",verse_number:3,verse_order:574,transliteration:`tejaḥ kṣhamā dhṛitiḥ śhaucham adroho nāti-mānitā
bhavanti sampadaṁ daivīm abhijātasya bhārata
`,word_meanings:`tejaḥ—vigor; kṣhamā—forgiveness; dhṛitiḥ—fortitude; śhaucham—cleanliness; adrohaḥ—bearing enmity toward none; na—not; ati-mānitā—absence of vanity; bhavanti—are; sampadam—qualities; daivīm—godly; abhijātasya—of those endowed with; bhārata—scion of Bharat
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S03.mp3"},{chapter_id:16,chapter_number:16,externalId:575,id:575,text:"दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च।अज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम्।।16.4।।",title:"Verse 575",verse_number:4,verse_order:575,transliteration:`dambho darpo ’bhimānaśh cha krodhaḥ pāruṣhyam eva cha
ajñānaṁ chābhijātasya pārtha sampadam āsurīm
`,word_meanings:`dambhaḥ—hypocrisy; darpaḥ—arrogance; abhimānaḥ—conceit; cha—and; krodhaḥ—anger; pāruṣhyam—harshness; eva—certainly; cha—and; ajñānam—ignorance; cha—and; abhijātasya—of those who possess; pārtha—Arjun, the son of Pritha; sampadam—qualities; āsurīm—demoniac
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S04.mp3"},{chapter_id:16,chapter_number:16,externalId:576,id:576,text:"दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता।मा शुचः सम्पदं दैवीमभिजातोऽसि पाण्डव।।16.5।।",title:"Verse 576",verse_number:5,verse_order:576,transliteration:`daivī sampad vimokṣhāya nibandhāyāsurī matā
mā śhuchaḥ sampadaṁ daivīm abhijāto ’si pāṇḍava
`,word_meanings:`daivī—divine; sampat—qualities; vimokṣhāya—toward liberation; nibandhāya—to bondage; āsurī—demoniac qualities; matā—are considered; mā—do not; śhuchaḥ—grieve; sampadam—virtues; daivīm—saintly; abhijātaḥ—born; asi—you are; pāṇḍava—Arjun, the son of Pandu
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S05.mp3"},{chapter_id:16,chapter_number:16,externalId:577,id:577,text:"द्वौ भूतसर्गौ लोकेऽस्मिन् दैव आसुर एव च।दैवो विस्तरशः प्रोक्त आसुरं पार्थ मे श्रृणु।।16.6।।",title:"Verse 577",verse_number:6,verse_order:577,transliteration:`dvau bhūta-sargau loke ’smin daiva āsura eva cha
daivo vistaraśhaḥ prokta āsuraṁ pārtha me śhṛiṇu
`,word_meanings:`dvau—two; bhūta-sargau—of created living beings; loke—in the world; asmin—this; daivaḥ—divine; āsuraḥ—demoniac; eva—certainly; cha—and; daivaḥ—the divine; vistaraśhaḥ—at great length; proktaḥ—said; āsuram—the demoniac; pārtha—Arjun, the son of Pritha; me—from me; śhṛiṇu—hear
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S06.mp3"},{chapter_id:16,chapter_number:16,externalId:578,id:578,text:"प्रवृत्तिं च निवृत्तिं च जना न विदुरासुराः।न शौचं नापि चाचारो न सत्यं तेषु विद्यते।।16.7।।",title:"Verse 578",verse_number:7,verse_order:578,transliteration:`pravṛittiṁ cha nivṛittiṁ cha janā na vidur āsurāḥ
na śhauchaṁ nāpi chāchāro na satyaṁ teṣhu vidyate
`,word_meanings:`pravṛittim—proper actions; cha—and; nivṛittim—improper actions; cha—and; janāḥ—persons; na—not; viduḥ—comprehend; āsurāḥ—those possessing demoniac nature; na—neither; śhaucham—purity; na—nor; api—even; cha—and; āchāraḥ—conduct; na—nor; satyam—truthfulness; teṣhu—in them; vidyate—exist
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S07.mp3"},{chapter_id:16,chapter_number:16,externalId:579,id:579,text:"असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम्।अपरस्परसम्भूतं किमन्यत्कामहैतुकम्।।16.8।।",title:"Verse 579",verse_number:8,verse_order:579,transliteration:`asatyam apratiṣhṭhaṁ te jagad āhur anīśhvaram
aparaspara-sambhūtaṁ kim anyat kāma-haitukam
`,word_meanings:`asatyam—without absolute truth; apratiṣhṭham—without any basis; te—they; jagat—the world; āhuḥ—say; anīśhvaram—without a God; aparaspara—without cause; sambhūtam—created; kim—what; anyat—other; kāma-haitukam—for sexual gratification only
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S08.mp3"},{chapter_id:16,chapter_number:16,externalId:580,id:580,text:"एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धयः।प्रभवन्त्युग्रकर्माणः क्षयाय जगतोऽहिताः।।16.9।।",title:"Verse 580",verse_number:9,verse_order:580,transliteration:`etāṁ dṛiṣhṭim avaṣhṭabhya naṣhṭātmāno ’lpa-buddhayaḥ
prabhavanty ugra-karmāṇaḥ kṣhayāya jagato ’hitāḥ
`,word_meanings:`etām—such; dṛiṣhṭim—views; avaṣhṭabhya—holding; naṣhṭa—misdirected; ātmānaḥ—souls; alpa-buddhayaḥ—of small intellect; prabhavanti—arise; ugra—cruel; karmāṇaḥ—actions; kṣhayāya—destruction; jagataḥ—of the world; ahitāḥ—enemies
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S09.mp3"},{chapter_id:16,chapter_number:16,externalId:581,id:581,text:"काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः।मोहाद्गृहीत्वासद्ग्राहान्प्रवर्तन्तेऽशुचिव्रताः।।16.10।।",title:"Verse 581",verse_number:10,verse_order:581,transliteration:`kāmam āśhritya duṣhpūraṁ dambha-māna-madānvitāḥ
mohād gṛihītvāsad-grāhān pravartante ’śhuchi-vratāḥ
`,word_meanings:`kāmam—lust; āśhritya—harboring; duṣhpūram—insatiable; dambha—hypocrisy; māna—arrogance; mada-anvitāḥ—clinging to false tenets; mohāt—the illusioned; gṛihītvā—being attracted to; asat—impermanent; grāhān—things; pravartante—they flourish; aśhuchi-vratāḥ—with impure resolve
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S10.mp3"},{chapter_id:16,chapter_number:16,externalId:582,id:582,text:"चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिताः।कामोपभोगपरमा एतावदिति निश्िचताः।।16.11।।",title:"Verse 582",verse_number:11,verse_order:582,transliteration:`chintām aparimeyāṁ cha pralayāntām upāśhritāḥ
kāmopabhoga-paramā etāvad iti niśhchitāḥ
`,word_meanings:`chintām—anxieties; aparimeyām—endless; cha—and; pralaya-antām—until death; upāśhritāḥ—taking refuge; kāma-upabhoga—gratification of desires; paramāḥ—the purpose of life; etāvat—still; iti—thus; niśhchitāḥ—with complete assurance
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S11.mp3"},{chapter_id:16,chapter_number:16,externalId:583,id:583,text:"आशापाशशतैर्बद्धाः कामक्रोधपरायणाः।ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान्।।16.12।।",title:"Verse 583",verse_number:12,verse_order:583,transliteration:`āśhā-pāśha-śhatair baddhāḥ kāma-krodha-parāyaṇāḥ
īhante kāma-bhogārtham anyāyenārtha-sañchayān
`,word_meanings:`āśhā-pāśha—bondage of desires; śhataiḥ—by hundreds; baddhāḥ—bound; kāma—lust; krodha—anger; parāyaṇāḥ—dedicated to; īhante—strive; kāma—lust; bhoga—gratification of the senses; artham—for; anyāyena—by unjust means; artha—wealth; sañchayān—to accumulate
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S12.mp3"},{chapter_id:16,chapter_number:16,externalId:584,id:584,text:"इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम्।इदमस्तीदमपि मे भविष्यति पुनर्धनम्।।16.13।।",title:"Verse 584",verse_number:13,verse_order:584,transliteration:`idam adya mayā labdham imaṁ prāpsye manoratham
idam astīdam api me bhaviṣhyati punar dhanam
`,word_meanings:`idam—this; adya—today; mayā—by me; labdham—gained; imam—this; prāpsye—I shall acquire; manaḥ-ratham—desire; idam—this; asti—is; idam—this; api—also; me—mine; bhaviṣhyati—in future; punaḥ—again; dhanam—wealth;
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S13.mp3"},{chapter_id:16,chapter_number:16,externalId:585,id:585,text:"असौ मया हतः शत्रुर्हनिष्ये चापरानपि।ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी।।16.14।।",title:"Verse 585",verse_number:14,verse_order:585,transliteration:`asau mayā hataḥ śhatrur haniṣhye chāparān api
īśhvaro ’ham ahaṁ bhogī siddho ’haṁ balavān sukhī
`,word_meanings:`asau—that; mayā—by me; hataḥ—has been destroyed; śhatruḥ—enemy; haniṣhye—I shall destroy; cha—and; aparān—others; api—also; īśhvaraḥ—God; aham—I; aham—I; bhogī—the enjoyer; siddhaḥ—powerful; aham—I; bala-vān—powerful; sukhī—happy;
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S14.mp3"},{chapter_id:16,chapter_number:16,externalId:586,id:586,text:"आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया।यक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः।।16.15।।",title:"Verse 586",verse_number:15,verse_order:586,transliteration:`āḍhyo ’bhijanavān asmi ko ’nyo ’sti sadṛiśho mayā
yakṣhye dāsyāmi modiṣhya ity ajñāna-vimohitāḥ
 aneka-chitta-vibhrāntā moha-jāla-samāvṛitāḥ
prasaktāḥ kāma-bhogeṣhu patanti narake ’śhuchau
`,word_meanings:`āḍhyaḥ—wealthy; abhijana-vān—having highly placed relatives; asmi—me; kaḥ—who; anyaḥ—else; asti—is; sadṛiśhaḥ—like; mayā—to me; yakṣhye—I shall perform sacrifices; dāsyāmi—I shall give alms; modiṣhye—I shall rejoice; iti—thus; ajñāna—ignorance; vimohitāḥ—deluded
 aneka—many; chitta—imaginings; vibhrāntāḥ—led astray; moha—delusion; jāla—mesh; samāvṛitāḥ—enveloped; prasaktāḥ—addicted; kāma-bhogeṣhu—gratification of sensuous pleasures; patanti—descend; narake—to hell; aśhuchau—murky
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S15.mp3"},{chapter_id:16,chapter_number:16,externalId:587,id:587,text:"अनेकचित्तविभ्रान्ता मोहजालसमावृताः।प्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ।।16.16।।",title:"Verse 587",verse_number:16,verse_order:587,transliteration:"aneka-citta-vibhrāntā    moha-jāla-samāvṛtāḥ prasaktāḥ   kāma-bhogeṣu    patanti narake  'śucau",word_meanings:"aneka—numerous;    citta-vibhrāntāḥ—perplexed  by  anxieties;  moha—of illusions;  jāla—by a   network;    samāvṛtāḥ—surrounded;   prasaktāḥ—attached; kāma—lust;  bhogeṣu—sense  gratification;   patanti—glides  down; narake—into hell; aśucau—unclean.",Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S16.mp3"},{chapter_id:16,chapter_number:16,externalId:588,id:588,text:"आत्मसम्भाविताः स्तब्धा धनमानमदान्विताः।यजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम्।।16.17।।",title:"Verse 588",verse_number:17,verse_order:588,transliteration:`ātma-sambhāvitāḥ stabdhā dhana-māna-madānvitāḥ
yajante nāma-yajñais te dambhenāvidhi-pūrvakam
`,word_meanings:`ātma-sambhāvitāḥ—self-conceited; stabdhāḥ—stubborn; dhana—wealth; māna—pride; mada—arrogance; anvitāḥ—full of; yajante—perform sacrifice; nāma—in name only; yajñaiḥ—sacrifices; te—they; dambhena—ostentatiously; avidhi-pūrvakam—with no regards to the rules of the scriptures
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S17.mp3"},{chapter_id:16,chapter_number:16,externalId:589,id:589,text:"अहङ्कारं बलं दर्पं कामं क्रोधं च संश्रिताः।मामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः।।16.18।।",title:"Verse 589",verse_number:18,verse_order:589,transliteration:`ahankāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ cha sanśhritāḥ
mām ātma-para-deheṣhu pradviṣhanto ’bhyasūyakāḥ
`,word_meanings:`ahankāram—egotism; balam—strength; darpam—arrogance; kāmam—desire; krodham—anger; cha—and; sanśhritāḥ—covered by; mām—me; ātma-para-deheṣhu—within one’s own and bodies of others; pradviṣhantaḥ—abuse; abhyasūyakāḥ—the demoniac
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S18.mp3"},{chapter_id:16,chapter_number:16,externalId:590,id:590,text:"तानहं द्विषतः क्रूरान्संसारेषु नराधमान्।क्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु।।16.19।।",title:"Verse 590",verse_number:19,verse_order:590,transliteration:`tān ahaṁ dviṣhataḥ krūrān sansāreṣhu narādhamān
kṣhipāmy ajasram aśhubhān āsurīṣhv eva yoniṣhu
`,word_meanings:`tān—these; aham—I; dviṣhataḥ—hateful; krūrān—cruel; sansāreṣhu—in the material world; nara-adhamān—the vile and vicious of humankind; kṣhipāmi—I hurl; ajasram—again and again; aśhubhān—inauspicious; āsurīṣhu—demoniac; eva—indeed; yoniṣhu—in to the wombs;
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S19.mp3"},{chapter_id:16,chapter_number:16,externalId:591,id:591,text:"असुरीं योनिमापन्ना मूढा जन्मनि जन्मनि।मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम्।।16.20।।",title:"Verse 591",verse_number:20,verse_order:591,transliteration:`āsurīṁ yonim āpannā mūḍhā janmani janmani
mām aprāpyaiva kaunteya tato yānty adhamāṁ gatim
`,word_meanings:`āsurīm—demoniac; yonim—wombs; āpannāḥ—gaining; mūḍhāḥ—the ignorant; janmani janmani—in birth after birth; mām—me; aprāpya—failing to reach; eva—even; kaunteya—Arjun, the son of Kunti; tataḥ—thereafter; yānti—go; adhamām—abominable; gatim—destination
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S20.mp3"},{chapter_id:16,chapter_number:16,externalId:592,id:592,text:"त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्।।16.21।।",title:"Verse 592",verse_number:21,verse_order:592,transliteration:`tri-vidhaṁ narakasyedaṁ dvāraṁ nāśhanam ātmanaḥ
kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet
`,word_meanings:`tri-vidham—three types of; narakasya—to the hell; idam—this; dvāram—gates; nāśhanam—destruction; ātmanaḥ—self; kāmaḥ—lust; krodhaḥ—anger; tathā—and; lobhaḥ—greed; tasmāt—therefore; etat—these; trayam—three; tyajet—should abandon
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S21.mp3"},{chapter_id:16,chapter_number:16,externalId:593,id:593,text:"एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः।आचरत्यात्मनः श्रेयस्ततो याति परां गतिम्।।16.22।।",title:"Verse 593",verse_number:22,verse_order:593,transliteration:`etair vimuktaḥ kaunteya tamo-dvārais tribhir naraḥ
ācharaty ātmanaḥ śhreyas tato yāti parāṁ gatim
`,word_meanings:`etaiḥ—from this; vimuktaḥ—freed; kaunteya—Arjun, the son of Kunti; tamaḥ-dvāraiḥ—gates to darkness; tribhiḥ—three; naraḥ—a person; ācharati—endeavor; ātmanaḥ—soul; śhreyaḥ—welfare; tataḥ—thereby; yāti—attain; parām—supreme; gatim—goal
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S22.mp3"},{chapter_id:16,chapter_number:16,externalId:594,id:594,text:"यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः।न स सिद्धिमवाप्नोति न सुखं न परां गतिम्।।16.23।।",title:"Verse 594",verse_number:23,verse_order:594,transliteration:`yaḥ śhāstra-vidhim utsṛijya vartate kāma-kārataḥ
na sa siddhim avāpnoti na sukhaṁ na parāṁ gatim
`,word_meanings:`yaḥ—who; śhāstra-vidhim—scriptural injunctions; utsṛijya—discarding; vartate—act; kāma-kārataḥ—under the impulse of desire; na—neither; saḥ—they; siddhim—perfection; avāpnoti—attain; na—nor; sukham—happiness; na—nor; parām—the supreme; gatim—goal
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S23.mp3"},{chapter_id:16,chapter_number:16,externalId:595,id:595,text:"तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ।ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि।।16.24।।",title:"Verse 595",verse_number:24,verse_order:595,transliteration:`tasmāch chhāstraṁ pramāṇaṁ te kāryākārya-vyavasthitau
jñātvā śhāstra-vidhānoktaṁ karma kartum ihārhasi
`,word_meanings:`tasmāt—therefore; śhāstram—scriptures; pramāṇam—authority; te—your; kārya—duty; akārya—forbidden action; vyavasthitau—in determining; jñātvā—having understood; śhāstra—scriptures; vidhāna—injunctions; uktam—as revealed; karma—actions; kartum—perform; iha—in this world; arhasi—you should
`,Play:"https://testapi1test.blob.core.windows.net/test/16/Ch16S24.mp3"},{chapter_id:17,chapter_number:17,externalId:596,id:596,text:"अर्जुन उवाचये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयाऽन्विताः।तेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तमः।।17.1।।",title:"Verse 596",verse_number:1,verse_order:596,transliteration:`arjuna uvācha
ye śhāstra-vidhim utsṛijya yajante śhraddhayānvitāḥ
teṣhāṁ niṣhṭhā tu kā kṛiṣhṇa sattvam āho rajas tamaḥ
`,word_meanings:`arjunaḥ uvācha—Arjun said; ye—who; śhāstra-vidhim—scriptural injunctions; utsṛijya—disregard; yajante—worship; śhraddhayā-anvitāḥ—with faith; teṣhām—their; niṣhṭhā—faith; tu—indeed; kā—what; kṛiṣhṇa—Krishna; sattvam—mode of goodness; āho—or; rajaḥ—mode of passion; tamaḥ—mode of ignorance
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S01.mp3"},{chapter_id:17,chapter_number:17,externalId:597,id:597,text:"श्री भगवानुवाचत्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा।सात्त्विकी राजसी चैव तामसी चेति तां श्रृणु।।17.2।।",title:"Verse 597",verse_number:2,verse_order:597,transliteration:`śhrī-bhagavān uvācha
tri-vidhā bhavati śhraddhā dehināṁ sā svabhāva-jā
sāttvikī rājasī chaiva tāmasī cheti tāṁ śhṛiṇu
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Personality said; tri-vidhā—of three kinds; bhavati—is; śhraddhā—faith; dehinām—embodied beings; sā—which; sva-bhāva-jā—born of one’s innate nature; sāttvikī—of the mode of goodness; rājasī—of the mode of passion; cha—and; eva—certainly; tāmasī—of the mode of ignorance; cha—and; iti—thus; tām—about this; śhṛiṇu—hear
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S02.mp3"},{chapter_id:17,chapter_number:17,externalId:598,id:598,text:"सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत।श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः।।17.3।।",title:"Verse 598",verse_number:3,verse_order:598,transliteration:`sattvānurūpā sarvasya śhraddhā bhavati bhārata
śhraddhā-mayo ‘yaṁ puruṣho yo yach-chhraddhaḥ sa eva saḥ
`,word_meanings:`sattva-anurūpā—conforming to the nature of one’s mind; sarvasya—all; śhraddhā—faith; bhavati—is; bhārata—Arjun, the scion of Bharat; śhraddhāmayaḥ—possessing faith; ayam—that; puruṣhaḥ—human being; yaḥ—who; yat-śhraddhaḥ—whatever the nature of their faith; saḥ—their; eva—verily; saḥ—they
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S03.mp3"},{chapter_id:17,chapter_number:17,externalId:599,id:599,text:"यजन्ते सात्त्विका देवान्यक्षरक्षांसि राजसाः।प्रेतान्भूतगणांश्चान्ये यजन्ते तामसा जनाः।।17.4।।",title:"Verse 599",verse_number:4,verse_order:599,transliteration:`yajante sāttvikā devān yakṣha-rakṣhānsi rājasāḥ
pretān bhūta-gaṇānśh chānye yajante tāmasā janāḥ
`,word_meanings:`yajante—worship; sāttvikāḥ—those in the mode of goodness; devān—celestial gods; yakṣha—semi-celestial beings who exude power and wealth; rakṣhānsi—powerful beings who embody sensual enjoyment, revenge, and wrath; rājasāḥ—those in the mode of passion; pretān-bhūta-gaṇān—ghosts and spirits; cha—and; anye—others; yajante—worship; tāmasāḥ—those in the mode of ignorance; janāḥ—persons
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S04.mp3"},{chapter_id:17,chapter_number:17,externalId:600,id:600,text:"अशास्त्रविहितं घोरं तप्यन्ते ये तपो जनाः।दम्भाहङ्कारसंयुक्ताः कामरागबलान्विताः।।17.5।।",title:"Verse 600",verse_number:5,verse_order:600,transliteration:`aśhāstra-vihitaṁ ghoraṁ tapyante ye tapo janāḥ
dambhāhankāra-sanyuktāḥ kāma-rāga-balānvitāḥ
`,word_meanings:`aśhāstra-vihitam—not enjoined by the scriptures; ghoram—stern; tapyante—perform; ye—who; tapaḥ—austerities; janāḥ—people; dambha—hypocrisy; ahankāra—egotism; sanyuktāḥ—possessed of; kāma—desire; rāga—attachment; bala—force; anvitāḥ—impelled by;
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S05.mp3"},{chapter_id:17,chapter_number:17,externalId:601,id:601,text:"कर्षयन्तः शरीरस्थं भूतग्राममचेतसः।मां चैवान्तःशरीरस्थं तान्विद्ध्यासुरनिश्चयान्।।17.6।।",title:"Verse 601",verse_number:6,verse_order:601,transliteration:`karṣhayantaḥ śharīra-sthaṁ bhūta-grāmam achetasaḥ
māṁ chaivāntaḥ śharīra-sthaṁ tān viddhy āsura-niśhchayān
`,word_meanings:`karṣhayantaḥ—torment; śharīra-stham—within the body; bhūta-grāmam—elements of the body; achetasaḥ—senseless; mām—me; cha—and; eva—even; antaḥ—within; śharīra-stham—dwelling in the body; tān—them; viddhi—know; āsura-niśhchayān—of demoniacal resolves
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S06.mp3"},{chapter_id:17,chapter_number:17,externalId:602,id:602,text:"आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रियः।यज्ञस्तपस्तथा दानं तेषां भेदमिमं श्रृणु।।17.7।।",title:"Verse 602",verse_number:7,verse_order:602,transliteration:`āhāras tv api sarvasya tri-vidho bhavati priyaḥ
yajñas tapas tathā dānaṁ teṣhāṁ bhedam imaṁ śhṛiṇu
`,word_meanings:`āhāraḥ—food; tu—indeed; api—even; sarvasya—of all; tri-vidhaḥ—of three kinds; bhavati—is; priyaḥ—dear; yajñaḥ—sacrifice; tapaḥ—austerity; tathā—and; dānam—charity; teṣhām—of them; bhedam—distinctions; imam—this; śhṛiṇu—hear
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S07.mp3"},{chapter_id:17,chapter_number:17,externalId:603,id:603,text:"आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः।रस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः।।17.8।।",title:"Verse 603",verse_number:8,verse_order:603,transliteration:`āyuḥ-sattva-balārogya-sukha-prīti-vivardhanāḥ
rasyāḥ snigdhāḥ sthirā hṛidyā āhārāḥ sāttvika-priyāḥ
`,word_meanings:`āyuḥ sattva—which promote longevity; bala—strength; ārogya—health; sukha—happiness; prīti—satisfaction; vivardhanāḥ—increase; rasyāḥ—juicy; snigdhāḥ—succulent; sthirāḥ—nourishing; hṛidyāḥ—pleasing to the heart; āhārāḥ—food; sāttvika-priyāḥ—dear to those in the mode of goodness
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S08.mp3"},{chapter_id:17,chapter_number:17,externalId:604,id:604,text:"कट्वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिनः।आहारा राजसस्येष्टा दुःखशोकामयप्रदाः।।17.9।।",title:"Verse 604",verse_number:9,verse_order:604,transliteration:`kaṭv-amla-lavaṇāty-uṣhṇa- tīkṣhṇa-rūkṣha-vidāhinaḥ
āhārā rājasasyeṣhṭā duḥkha-śhokāmaya-pradāḥ
`,word_meanings:`kaṭu—bitter; amla—sour; lavaṇa—salty; ati-uṣhṇa—very hot; tīkṣhṇa—pungent; rūkṣha—dry; vidāhinaḥ—chiliful; āhārāḥ—food; rājasasya—to persons in the mode of passion; iṣhṭāḥ—dear; duḥkha—pain; śhoka—grief; āmaya—disease; pradāḥ—produce
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S09.mp3"},{chapter_id:17,chapter_number:17,externalId:605,id:605,text:"यातयामं गतरसं पूति पर्युषितं च यत्।उच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम्।।17.10।।",title:"Verse 605",verse_number:10,verse_order:605,transliteration:`yāta-yāmaṁ gata-rasaṁ pūti paryuṣhitaṁ cha yat
uchchhiṣhṭam api chāmedhyaṁ bhojanaṁ tāmasa-priyam
`,word_meanings:`yāta-yāmam—stale foods; gata-rasam—tasteless; pūti—putrid; paryuṣhitam—polluted; cha—and; yat—which; uchchhiṣhṭam—left over; api—also; cha—and; amedhyam—impure; bhojanam—foods; tāmasa—to persons in the mode of ignorance; priyam—dear
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S10.mp3"},{chapter_id:17,chapter_number:17,externalId:606,id:606,text:"अफलाकाङ्क्षिभिर्यज्ञो विधिदृष्टो य इज्यते।यष्टव्यमेवेति मनः समाधाय स सात्त्विकः।।17.11।।",title:"Verse 606",verse_number:11,verse_order:606,transliteration:`aphalākāṅkṣhibhir yajño vidhi-driṣhṭo ya ijyate
yaṣhṭavyam eveti manaḥ samādhāya sa sāttvikaḥ
`,word_meanings:`aphala-ākāṅkṣhibhiḥ—without expectation of any reward; yajñaḥ—sacrifice; vidhi-driṣhṭaḥ—that is in accordance with the scriptural injunctions; yaḥ—which; ijyate—is performed; yaṣhṭavyam-eva-iti—ought to be offered; manaḥ—mind; samādhāya—with conviction; saḥ—that; sāttvikaḥ—of the nature of goodness
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S11.mp3"},{chapter_id:17,chapter_number:17,externalId:607,id:607,text:"अभिसंधाय तु फलं दम्भार्थमपि चैव यत्।इज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम्।।17.12।।",title:"Verse 607",verse_number:12,verse_order:607,transliteration:`abhisandhāya tu phalaṁ dambhārtham api chaiva yat
ijyate bharata-śhreṣhṭha taṁ yajñaṁ viddhi rājasam
`,word_meanings:`abhisandhāya—motivated by; tu—but; phalam—the result; dambha—pride; artham—for the sake of; api—also; cha—and; eva—certainly; yat—that which; ijyate—is performed; bharata-śhreṣhṭha—Arjun, the best of the Bharatas; tam—that; yajñam—sacrifice; viddhi—know; rājasam—in the mode of passion
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S12.mp3"},{chapter_id:17,chapter_number:17,externalId:608,id:608,text:"विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम्।श्रद्धाविरहितं यज्ञं तामसं परिचक्षते।।17.13।।",title:"Verse 608",verse_number:13,verse_order:608,transliteration:`vidhi-hīnam asṛiṣhṭānnaṁ mantra-hīnam adakṣhiṇam
śhraddhā-virahitaṁ yajñaṁ tāmasaṁ parichakṣhate
`,word_meanings:`vidhi-hīnam—without scriptural direction; asṛiṣhṭa-annam—without distribution of prasādam; mantra-hīnam—with no chanting of the Vedic hymns; adakṣhiṇam—with no remunerations to the priests; śhraddhā—faith; virahitam—without; yajñam—sacrifice; tāmasam—in the mode of ignorance; parichakṣhate—is to be considered
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S13.mp3"},{chapter_id:17,chapter_number:17,externalId:609,id:609,text:"देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम्।ब्रह्मचर्यमहिंसा च शारीरं तप उच्यते।।17.14।।",title:"Verse 609",verse_number:14,verse_order:609,transliteration:`deva-dwija-guru-prājña- pūjanaṁ śhaucham ārjavam
brahmacharyam ahinsā cha śhārīraṁ tapa uchyate
`,word_meanings:`deva—the Supreme Lord; dwija—the Brahmins; guru—the spiritual master; prājña—the elders; pūjanam—worship; śhaucham—cleanliness; ārjavam—simplicity; brahmacharyam—celibacy; ahinsā—non-violence; cha—and; śhārīram—of the body; tapaḥ—austerity; uchyate—is declared as
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S14.mp3"},{chapter_id:17,chapter_number:17,externalId:610,id:610,text:"अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्।स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते।।17.15।।",title:"Verse 610",verse_number:15,verse_order:610,transliteration:`anudvega-karaṁ vākyaṁ satyaṁ priya-hitaṁ cha yat
svādhyāyābhyasanaṁ chaiva vāṅ-mayaṁ tapa uchyate
`,word_meanings:`anudvega-karam—not causing distress; vākyam—words; satyam—truthful; priya- hitam—beneficial; cha—and; yat—which; svādhyāya-abhyasanam—recitation of the Vedic scriptures; cha eva—as well as; vāṅ-mayam—of speech; tapaḥ—austerity; uchyate—are declared as
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S15.mp3"},{chapter_id:17,chapter_number:17,externalId:611,id:611,text:"मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः।भावसंशुद्धिरित्येतत्तपो मानसमुच्यते।।17.16।।",title:"Verse 611",verse_number:16,verse_order:611,transliteration:`manaḥ-prasādaḥ saumyatvaṁ maunam ātma-vinigrahaḥ
bhāva-sanśhuddhir ity etat tapo mānasam uchyate
`,word_meanings:`manaḥ-prasādaḥ—serenity of thought; saumyatvam—gentleness; maunam—silence; ātma-vinigrahaḥ—self-control; bhāva-sanśhuddhiḥ—purity of purpose; iti—thus; etat—these; tapaḥ—austerity; mānasam—of the mind; uchyate—are declared as
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S16.mp3"},{chapter_id:17,chapter_number:17,externalId:612,id:612,text:"श्रद्धया परया तप्तं तपस्तत्ित्रविधं नरैः।अफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते।।17.17।।",title:"Verse 612",verse_number:17,verse_order:612,transliteration:`śhraddhayā parayā taptaṁ tapas tat tri-vidhaṁ naraiḥ
aphalākāṅkṣhibhir yuktaiḥ sāttvikaṁ parichakṣhate
`,word_meanings:`śhraddhayā—with faith; parayā—transcendental; taptam—practiced; tapaḥ—austerity; tat—that; tri-vidham—three-fold; naraiḥ—by persons; aphala-ākāṅkṣhibhiḥ—without yearning for material rewards; yuktaiḥ—steadfast; sāttvikam—in the mode of goodness; parichakṣhate—are designated
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S17.mp3"},{chapter_id:17,chapter_number:17,externalId:613,id:613,text:"सत्कारमानपूजार्थं तपो दम्भेन चैव यत्।क्रियते तदिह प्रोक्तं राजसं चलमध्रुवम्।।17.18।।",title:"Verse 613",verse_number:18,verse_order:613,transliteration:`satkāra-māna-pūjārthaṁ tapo dambhena chaiva yat
kriyate tad iha proktaṁ rājasaṁ chalam adhruvam
`,word_meanings:`sat-kāra—respect; māna—honor; pūjā—adoration; artham—for the sake of; tapaḥ—austerity; dambhena—with ostentation; cha—also; eva—certainly; yat—which; kriyate—is performed; tat—that; iha—in this world; proktam—is said; rājasam—in the mode of passion; chalam—flickering; adhruvam—temporary
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S18.mp3"},{chapter_id:17,chapter_number:17,externalId:614,id:614,text:"मूढग्राहेणात्मनो यत्पीडया क्रियते तपः।परस्योत्सादनार्थं वा तत्तामसमुदाहृतम्।।17.19।।",title:"Verse 614",verse_number:19,verse_order:614,transliteration:`mūḍha-grāheṇātmano yat pīḍayā kriyate tapaḥ
parasyotsādanārthaṁ vā tat tāmasam udāhṛitam
`,word_meanings:`mūḍha—those with confused notions; grāheṇa—with endeavor; ātmanaḥ—one’s own self; yat—which; pīḍayā—torturing; kriyate—is performed; tapaḥ—austerity; parasya—of others; utsādana-artham—for harming; vā—or; tat—that; tāmasam—in the mode of ignorance; udāhṛitam—is described to be
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S19.mp3"},{chapter_id:17,chapter_number:17,externalId:615,id:615,text:"दातव्यमिति यद्दानं दीयतेऽनुपकारिणे।देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्।।17.20।।",title:"Verse 615",verse_number:20,verse_order:615,transliteration:`dātavyam iti yad dānaṁ dīyate ‘nupakāriṇe
deśhe kāle cha pātre cha tad dānaṁ sāttvikaṁ smṛitam
`,word_meanings:`dātavyam—worthy of charity; iti—thus; yat—which; dānam—charity; dīyate—is given; anupakāriṇe—to one who cannot give in return; deśhe—in the proper place; kāle—at the proper time; cha—and; pātre—to a worthy person; cha—and; tat—that; dānam—charity; sāttvikam—in the mode of goodness; smṛitam—is stated to be
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S20.mp3"},{chapter_id:17,chapter_number:17,externalId:616,id:616,text:"यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुनः।दीयते च परिक्लिष्टं तद्दानं राजसं स्मृतम्।।17.21।।",title:"Verse 616",verse_number:21,verse_order:616,transliteration:`yat tu pratyupakārārthaṁ phalam uddiśhya vā punaḥ
dīyate cha parikliṣhṭaṁ tad dānaṁ rājasaṁ smṛitam
`,word_meanings:`yat—which; tu—but; prati-upakāra-artham—with the hope of a return; phalam—reward; uddiśhya—expectation; vā—or; punaḥ—again; dīyate—is given; cha—and; parikliṣhṭam—reluctantly; tat—that; dānam—charity; rājasam—in the mode of passion; smṛitam—is said to be
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S21.mp3"},{chapter_id:17,chapter_number:17,externalId:617,id:617,text:"अदेशकाले यद्दानमपात्रेभ्यश्च दीयते।असत्कृतमवज्ञातं तत्तामसमुदाहृतम्।।17.22।।",title:"Verse 617",verse_number:22,verse_order:617,transliteration:`adeśha-kāle yad dānam apātrebhyaśh cha dīyate
asat-kṛitam avajñātaṁ tat tāmasam udāhṛitam
`,word_meanings:`adeśha—at the wrong place; kāle—at the wrong time; yat—which; dānam—charity; apātrebhyaḥ—to unworthy persons; cha—and; dīyate—is given; asat-kṛitam—without respect; avajñātam—with contempt; tat—that; tāmasam—of the nature of nescience; udāhṛitam—is held to be
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S22.mp3"},{chapter_id:17,chapter_number:17,externalId:618,id:618,text:" तत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः।ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा।।17.23।।",title:"Verse 618",verse_number:23,verse_order:618,transliteration:`oṁ tat sad iti nirdeśho brahmaṇas tri-vidhaḥ smṛitaḥ
brāhmaṇās tena vedāśh cha yajñāśh cha vihitāḥ purā
`,word_meanings:`om tat sat—syllables representing aspects of transcendence; iti—thus; nirdeśhaḥ—symbolic representatives; brahmaṇaḥ—the Supreme Absolute Truth; tri-vidhaḥ—of three kinds; smṛitaḥ—have been declared; brāhmaṇāḥ—the priests; tena—from them; vedāḥ—scriptures; cha—and; yajñāḥ—sacrifice; cha—and; vihitāḥ—came about; purā—from the beginning of creation
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S23.mp3"},{chapter_id:17,chapter_number:17,externalId:619,id:619,text:"तस्मादोमित्युदाहृत्य यज्ञदानतपःक्रियाः।प्रवर्तन्ते विधानोक्ताः सततं ब्रह्मवादिनाम्।।17.24।।",title:"Verse 619",verse_number:24,verse_order:619,transliteration:`tasmād oṁ ity udāhṛitya yajña-dāna-tapaḥ-kriyāḥ
pravartante vidhānoktāḥ satataṁ brahma-vādinām
`,word_meanings:`tasmāt—therefore; om—sacred syllable om; iti—thus; udāhṛitya—by uttering; yajña—sacrifice; dāna—charity; tapaḥ—penance; kriyāḥ—performing; pravartante—begin; vidhāna-uktāḥ—according to the prescriptions of Vedic injunctions; satatam—always; brahma-vādinām—expounders of the Vedas
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S24.mp3"},{chapter_id:17,chapter_number:17,externalId:620,id:620,text:"तदित्यनभिसन्धाय फलं यज्ञतपःक्रियाः।दानक्रियाश्च विविधाः क्रियन्ते मोक्षकाङ्क्षि।।17.25।।",title:"Verse 620",verse_number:25,verse_order:620,transliteration:`tad ity anabhisandhāya phalaṁ yajña-tapaḥ-kriyāḥ
dāna-kriyāśh cha vividhāḥ kriyante mokṣha-kāṅkṣhibhiḥ
`,word_meanings:`tat—the syllable Tat; iti—thus; anabhisandhāya—without desiring; phalam—fruitive rewards; yajña—sacrifice; tapaḥ—austerity; kriyāḥ—acts; dāna—charity; kriyāḥ—acts; cha—and; vividhāḥ—various; kriyante—are done; mokṣha-kāṅkṣhibhiḥ—by seekers of freedom from material entanglements
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S25.mp3"},{chapter_id:17,chapter_number:17,externalId:621,id:621,text:"सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते।प्रशस्ते कर्मणि तथा सच्छब्दः पार्थ युज्यते।।17.26।।",title:"Verse 621",verse_number:26,verse_order:621,transliteration:`sad-bhāve sādhu-bhāve cha sad ity etat prayujyate
praśhaste karmaṇi tathā sach-chhabdaḥ pārtha yujyate
`,word_meanings:`sat-bhāve—with the intention of eternal existence and goodness; sādhu-bhāve—with auspicious intention; cha—also; sat—the syllable Sat; iti—thus; etat—this; prayujyate—is used; praśhaste—auspicious; karmaṇi—action; tathā—also; sat-śhabdaḥ—the word “Sat”; pārtha—Arjun, the son of Pritha; yujyate—is used;
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S26.mp3"},{chapter_id:17,chapter_number:17,externalId:622,id:622,text:"यज्ञे तपसि दाने च स्थितिः सदिति चोच्यते।कर्म चैव तदर्थीयं सदित्येवाभिधीयते।।17.27।।",title:"Verse 622",verse_number:27,verse_order:622,transliteration:`yajñe tapasi dāne cha sthitiḥ sad iti chochyate
karma chaiva tad-arthīyaṁ sad ity evābhidhīyate
`,word_meanings:`yajñe—in sacrifice; tapasi—in penance; dāne—in charity; cha—and; sthitiḥ—established in steadiness; sat—the syllable Sat; iti—thus; cha—and; uchyate—is pronounced; karma—action; cha—and; eva—indeed; tat-arthīyam—for such purposes; sat—the syllable Sat; iti—thus; eva—indeed; abhidhīyate—is described
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S27.mp3"},{chapter_id:17,chapter_number:17,externalId:623,id:623,text:"अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत्।असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह।।17.28।।",title:"Verse 623",verse_number:28,verse_order:623,transliteration:`aśhraddhayā hutaṁ dattaṁ tapas taptaṁ kṛitaṁ cha yat
asad ity uchyate pārtha na cha tat pretya no iha
`,word_meanings:`aśhraddhayā—without faith; hutam—sacrifice; dattam—charity; tapaḥ—penance; taptam—practiced; kṛitam—done; cha—and; yat—which; asat—perishable; iti—thus; uchyate—are termed as; pārtha—Arjun, the son of Pritha; na—not; cha—and; tat—that; pretya—in the next world; na u—not; iha—in this world
`,Play:"https://testapi1test.blob.core.windows.net/test/17/Ch17S28.mp3"},{chapter_id:18,chapter_number:18,externalId:624,id:624,text:`अर्जुन उवाच

संन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम्।

त्यागस्य च हृषीकेश पृथक्केशिनिषूदन।।18.1।।
 `,title:"Verse 624",verse_number:1,verse_order:624,transliteration:`arjuna uvācha
sannyāsasya mahā-bāho tattvam ichchhāmi veditum
tyāgasya cha hṛiṣhīkeśha pṛithak keśhi-niṣhūdana
`,word_meanings:`arjunaḥ uvācha—Arjun said; sanyāsasya—of renunciation of actions; mahā-bāho—mighty-armed one; tattvam—the truth; ichchhāmi—I wish; veditum—to understand; tyāgasya—of renunciation of desires for enjoying the fruits of actions; cha—and; hṛiṣhīkeśha—Krishna, the Lord of the senses; pṛithak—distinctively; keśhī-niṣhūdana—Krishna, the killer of the Keshi demon
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S01.mp3"},{chapter_id:18,chapter_number:18,externalId:625,id:625,text:`श्री भगवानुवाच

काम्यानां कर्मणां न्यासं संन्यासं कवयो विदुः।

सर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः।।18.2।।
 `,title:"Verse 625",verse_number:2,verse_order:625,transliteration:`śhrī-bhagavān uvācha
kāmyānāṁ karmaṇāṁ nyāsaṁ sannyāsaṁ kavayo viduḥ
sarva-karma-phala-tyāgaṁ prāhus tyāgaṁ vichakṣhaṇāḥ
`,word_meanings:`śhrī-bhagavān uvācha—the Supreme Divine Personality said; kāmyānām—desireful; karmaṇām—of actions; nyāsam—giving up; sanyāsam—renunciation of actions; kavayaḥ—the learned; viduḥ—to understand; sarva—all; karma-phala—fruits of actions; tyāgam—renunciation of desires for enjoying the fruits of actions; prāhuḥ—declare; tyāgam—renunciation of desires for enjoying the fruits of actions; vichakṣhaṇāḥ—the wise
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S02.mp3"},{chapter_id:18,chapter_number:18,externalId:626,id:626,text:`त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिणः।

यज्ञदानतपःकर्म न त्याज्यमिति चापरे।।18.3।।
 `,title:"Verse 626",verse_number:3,verse_order:626,transliteration:`tyājyaṁ doṣha-vad ity eke karma prāhur manīṣhiṇaḥ
yajña-dāna-tapaḥ-karma na tyājyam iti chāpare
`,word_meanings:`tyājyam—should be given up; doṣha-vat—as evil; iti—thus; eke—some; karma—actions; prāhuḥ—declare; manīṣhiṇaḥ—the learned; yajña—sacrifice; dāna—charity; tapaḥ—penance; karma—acts; na—never; tyājyam—should be abandoned; iti—thus; cha—and; apare—others
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S03.mp3"},{chapter_id:18,chapter_number:18,externalId:627,id:627,text:"निश्चयं श्रृणु मे तत्र त्यागे भरतसत्तम।त्यागो हि पुरुषव्याघ्र त्रिविधः संप्रकीर्तितः।।18.4।।",title:"Verse 627",verse_number:4,verse_order:627,transliteration:`niśhchayaṁ śhṛiṇu me tatra tyāge bharata-sattama
tyāgo hi puruṣha-vyāghra tri-vidhaḥ samprakīrtitaḥ
`,word_meanings:`niśhchayam—conclusion; śhṛiṇu—hear; me—my; tatra—there; tyāge—about renunciation of desires for enjoying the fruits of actions; bharata-sat-tama—best of the Bharatas; tyāgaḥ—renunciation of desires for enjoying the fruits of actions; hi—indeed; puruṣha-vyāghra—tiger amongst men; tri-vidhaḥ—of three kinds; samprakīrtitaḥ—declared
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S04.mp3"},{chapter_id:18,chapter_number:18,externalId:628,id:628,text:"यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत्।यज्ञो दानं तपश्चैव पावनानि मनीषिणाम्।।18.5।।",title:"Verse 628",verse_number:5,verse_order:628,transliteration:`yajña-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat
yajño dānaṁ tapaśh chaiva pāvanāni manīṣhiṇām
`,word_meanings:`yajña—sacrifice; dāna—charity; tapaḥ—penance; karma—actions; na—never; tyājyam—should be abandoned; kāryam eva—must certainly be performed; tat—that; yajñaḥ—sacrifice; dānam—charity; tapaḥ—penance; cha—and; eva—indeed; pāvanāni—purifying; manīṣhiṇām—for the wise
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S05.mp3"},{chapter_id:18,chapter_number:18,externalId:629,id:629,text:"एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च।कर्तव्यानीति मे पार्थ निश्िचतं मतमुत्तमम्।।18.6।।",title:"Verse 629",verse_number:6,verse_order:629,transliteration:`etāny api tu karmāṇi saṅgaṁ tyaktvā phalāni cha
kartavyānīti me pārtha niśhchitaṁ matam uttamam
`,word_meanings:`etāni—these; api tu—must certainly be; karmāṇi—activities; saṅgam—attachment; tyaktvā—giving up; phalāni—rewards; cha—and; kartavyāni—should be done as duty; iti—such; me—my; pārtha—Arjun, the son of Pritha; niśhchitam—definite; matam—opinion; uttamam—supreme
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S06.mp3"},{chapter_id:18,chapter_number:18,externalId:630,id:630,text:"नियतस्य तु संन्यासः कर्मणो नोपपद्यते।मोहात्तस्य परित्यागस्तामसः परिकीर्तितः।।18.7।।",title:"Verse 630",verse_number:7,verse_order:630,transliteration:`niyatasya tu sannyāsaḥ karmaṇo nopapadyate
mohāt tasya parityāgas tāmasaḥ parikīrtitaḥ
`,word_meanings:`niyatasya—of prescribed duties; tu—but; sanyāsaḥ—renunciation; karmaṇaḥ—actions; na—never; upapadyate—to be performed; mohāt—deluded; tasya—of that; parityāgaḥ—renunciation; tāmasaḥ—in the mode of ignorance; parikīrtitaḥ—has been declared
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S07.mp3"},{chapter_id:18,chapter_number:18,externalId:631,id:631,text:"दुःखमित्येव यत्कर्म कायक्लेशभयात्त्यजेत्।स कृत्वा राजसं त्यागं नैव त्यागफलं लभेत्।।18.8।।",title:"Verse 631",verse_number:8,verse_order:631,transliteration:`duḥkham ity eva yat karma kāya-kleśha-bhayāt tyajet
sa kṛitvā rājasaṁ tyāgaṁ naiva tyāga-phalaṁ labhet
`,word_meanings:`duḥkham—troublesome; iti—as; eva—indeed; yat—which; karma—duties; kāya—bodily; kleśha—discomfort; bhayāt—out of fear; tyajet—giving up; saḥ—they; kṛitvā—having done; rājasam—in the mode of passion; tyāgam—renunciation of desires for enjoying the fruits of actions; na—never; eva—certainly; tyāga—renunciation of desires for enjoying the fruits of actions; phalam—result; labhet—attain
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S08.mp3"},{chapter_id:18,chapter_number:18,externalId:632,id:632,text:"कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन।सङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः।।18.9।।",title:"Verse 632",verse_number:9,verse_order:632,transliteration:`kāryam ity eva yat karma niyataṁ kriyate ‘rjuna
saṅgaṁ tyaktvā phalaṁ chaiva sa tyāgaḥ sāttviko mataḥ
`,word_meanings:`kāryam—as a duty; iti—as; eva—indeed; yat—which; karma niyatam—obligatory actions; kriyate—are performed; arjuna—Arjun; saṅgam—attachment; tyaktvā—relinquishing; phalam—reward; cha—and; eva—certainly; saḥ—such; tyāgaḥ—renunciation of desires for enjoying the fruits of actions; sāttvikaḥ—in the mode of goodness; mataḥ—considered
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S09.mp3"},{chapter_id:18,chapter_number:18,externalId:633,id:633,text:"न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्जते।त्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशयः।।18.10।।",title:"Verse 633",verse_number:10,verse_order:633,transliteration:`na dveṣhṭy akuśhalaṁ karma kuśhale nānuṣhajjate
tyāgī sattva-samāviṣhṭo medhāvī chhinna-sanśhayaḥ
`,word_meanings:`na—neither; dveṣhṭi—hate; akuśhalam—disagreeable; karma—work; kuśhale—to an agreeable; na—nor; anuṣhajjate—seek; tyāgī—one who renounces desires for enjoying the fruits of actions; sattva—in the mode of goodness; samāviṣhṭaḥ—endowed with; medhāvī—intelligent; chhinna-sanśhayaḥ—those who have no doubts
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S10.mp3"},{chapter_id:18,chapter_number:18,externalId:634,id:634,text:"न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः।यस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते।।18.11।।",title:"Verse 634",verse_number:11,verse_order:634,transliteration:`na hi deha-bhṛitā śhakyaṁ tyaktuṁ karmāṇy aśheṣhataḥ
yas tu karma-phala-tyāgī sa tyāgīty abhidhīyate
`,word_meanings:`na—not; hi—indeed; deha-bhṛitā—for the embodied being; śhakyam—possible; tyaktum—to give up; karmāṇi—activities; aśheṣhataḥ—entirely; yaḥ—who; tu—but; karma-phala—fruits of actions; tyāgī—one who renounces all desires for enjoying the fruits of actions; saḥ—they; tyāgī—one who renounces all desires for enjoying the fruits of actions; iti—as; abhidhīyate—are said
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S11.mp3"},{chapter_id:18,chapter_number:18,externalId:635,id:635,text:"अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मणः फलम्।भवत्यत्यागिनां प्रेत्य न तु संन्यासिनां क्वचित्।।18.12।।",title:"Verse 635",verse_number:12,verse_order:635,transliteration:`aniṣhṭam iṣhṭaṁ miśhraṁ cha tri-vidhaṁ karmaṇaḥ phalam
bhavaty atyāgināṁ pretya na tu sannyāsināṁ kvachit
`,word_meanings:`aniṣhṭam—unpleasant; iṣhṭam—pleasant; miśhram—mixed; cha—and; tri-vidham—three-fold; karmaṇaḥ phalam—fruits of actions; bhavati—accrue; atyāginām—to those who are attached to persona reward; pretya—after death; na—not; tu—but; sanyāsinām—for the renouncers of actions; kvachit—ever
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S12.mp3"},{chapter_id:18,chapter_number:18,externalId:636,id:636,text:"पञ्चैतानि महाबाहो कारणानि निबोध मे।सांख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम्।।18.13।।",title:"Verse 636",verse_number:13,verse_order:636,transliteration:`pañchaitāni mahā-bāho kāraṇāni nibodha me
sānkhye kṛitānte proktāni siddhaye sarva-karmaṇām
`,word_meanings:`pañcha—five; etāni—these; mahā-bāho—mighty-armed one; kāraṇāni—causes; nibodha—listen; me—from me; sānkhye—of Sānkya; kṛita-ante—stop reactions of karmas; proktāni—explains; siddhaye—for the accomplishment; sarva—all; karmaṇām—of karmas
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S13.mp3"},{chapter_id:18,chapter_number:18,externalId:637,id:637,text:"अधिष्ठानं तथा कर्ता करणं च पृथग्विधम्।विविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम्।।18.14।।",title:"Verse 637",verse_number:14,verse_order:637,transliteration:`adhiṣhṭhānaṁ tathā kartā karaṇaṁ cha pṛithag-vidham
vividhāśh cha pṛithak cheṣhṭā daivaṁ chaivātra pañchamam
`,word_meanings:`adhiṣhṭhānam—the body; tathā—also; kartā—the doer (soul); karaṇam—senses; cha—and; pṛithak-vidham—various kinds; vividhāḥ—many; cha—and; pṛithak—distinct; cheṣhṭāḥ—efforts; daivam—Divine Providence; cha eva atra—these certainly are (causes); pañchamam—the fifth
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S14.mp3"},{chapter_id:18,chapter_number:18,externalId:638,id:638,text:"शरीरवाङ्मनोभिर्यत्कर्म प्रारभते नरः।न्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतवः।।18.15।।",title:"Verse 638",verse_number:15,verse_order:638,transliteration:`śharīra-vāṅ-manobhir yat karma prārabhate naraḥ
nyāyyaṁ vā viparītaṁ vā pañchaite tasya hetavaḥ
`,word_meanings:`śharīra-vāk-manobhiḥ—with body, speech, or mind; yat—which; karma—action; prārabhate—performs; naraḥ—a person; nyāyyam—proper; vā—or; viparītam—improper; vā—or; pañcha—five; ete—these; tasya—their; hetavaḥ—factors;
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S15.mp3"},{chapter_id:18,chapter_number:18,externalId:639,id:639,text:"तत्रैवं सति कर्तारमात्मानं केवलं तु यः।पश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः।।18.16।।",title:"Verse 639",verse_number:16,verse_order:639,transliteration:`tatraivaṁ sati kartāram ātmānaṁ kevalaṁ tu yaḥ
paśhyaty akṛita-buddhitvān na sa paśhyati durmatiḥ
`,word_meanings:`tatra—there; evam sati—in spite of this; kartāram—the doer; ātmānam—the soul; kevalam—only; tu—but; yaḥ—who; paśhyati—see; akṛita-buddhitvāt—with impure intellect; na—not; saḥ—they; paśhyati—see; durmatiḥ—foolish
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S16.mp3"},{chapter_id:18,chapter_number:18,externalId:640,id:640,text:"यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते।हत्वापि स इमाँल्लोकान्न हन्ति न निबध्यते।।18.17।।",title:"Verse 640",verse_number:17,verse_order:640,transliteration:`yasya nāhankṛito bhāvo buddhir yasya na lipyate
hatvā ‘pi sa imāl lokān na hanti na nibadhyate
`,word_meanings:`yasya—whose; na ahankṛitaḥ—free from the ego of being the doer; bhāvaḥ—nature; buddhiḥ—intellect; yasya—whose; na lipyate—unattached; hatvā—slay; api—even; saḥ—they; imān—this; lokān—living beings; na—neither; hanti—kill; na—nor; nibadhyate—get bound
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S17.mp3"},{chapter_id:18,chapter_number:18,externalId:641,id:641,text:"ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना।करणं कर्म कर्तेति त्रिविधः कर्मसंग्रहः।।18.18।।",title:"Verse 641",verse_number:18,verse_order:641,transliteration:`jñānaṁ jñeyaṁ parijñātā tri-vidhā karma-chodanā
karaṇaṁ karma karteti tri-vidhaḥ karma-saṅgrahaḥ
`,word_meanings:`jñānam—knowledge; jñeyam—the object of knowledge; parijñātā—the knower; tri-vidhā—three factors; karma-chodanā—factors that induce action; karaṇam—the instrumens of action; karma—the act; kartā—the doer; iti—thus; tri-vidhaḥ—threefold; karma-saṅgrahaḥ—constituents of action
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S18.mp3"},{chapter_id:18,chapter_number:18,externalId:642,id:642,text:"ज्ञानं कर्म च कर्ता च त्रिधैव गुणभेदतः।प्रोच्यते गुणसंख्याने यथावच्छृणु तान्यपि।।18.19।।",title:"Verse 642",verse_number:19,verse_order:642,transliteration:`jñānaṁ karma cha kartā cha tridhaiva guṇa-bhedataḥ
prochyate guṇa-saṅkhyāne yathāvach chhṛiṇu tāny api
`,word_meanings:`jñānam—knowledge; karma—action; cha—and; kartā—doer; cha—also; tridhā—of three kinds; eva—certainly; guṇa-bhedataḥ—distinguished according to the three modes of material nature; prochyate—are declared; guṇa-saṅkhyāne—Sānkhya philosophy, which describes the modes of material nature; yathā-vat—as they are; śhṛiṇu—listen; tāni—them; api—also
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S19.mp3"},{chapter_id:18,chapter_number:18,externalId:643,id:643,text:"सर्वभूतेषु येनैकं भावमव्ययमीक्षते।अविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम्।।18.20।।",title:"Verse 643",verse_number:20,verse_order:643,transliteration:`sarva-bhūteṣhu yenaikaṁ bhāvam avyayam īkṣhate
avibhaktaṁ vibhakteṣhu taj jñānaṁ viddhi sāttvikam
`,word_meanings:`sarva-bhūteṣhu—within all living beings; yena—by which; ekam—one; bhāvam—nature; avyayam—imperishable; īkṣhate—one sees; avibhaktam—undivided; vibhakteṣhu—in diversity; tat—that; jñānam—knowledge; viddhi—understand; sāttvikam—in the mode of goodness
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S20.mp3"},{chapter_id:18,chapter_number:18,externalId:644,id:644,text:"पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान्।वेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम्।।18.21।।",title:"Verse 644",verse_number:21,verse_order:644,transliteration:`pṛithaktvena tu yaj jñānaṁ nānā-bhāvān pṛithag-vidhān
vetti sarveṣhu bhūteṣhu taj jñānaṁ viddhi rājasam
`,word_meanings:`pṛithaktvena—unconnected; tu—however; yat—which; jñānam—knowledge; nānā-bhāvān—manifold entities; pṛithak-vidhān—of diversity; vetti—consider; sarveṣhu—in all; bhūteṣhu—living entities; tat—that; jñānam—knowledge; viddhi—know; rājasam—in the mode of passion
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S21.mp3"},{chapter_id:18,chapter_number:18,externalId:645,id:645,text:"यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम्।अतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम्।।18.22।।",title:"Verse 645",verse_number:22,verse_order:645,transliteration:`yat tu kṛitsna-vad ekasmin kārye saktam ahaitukam
atattvārtha-vad alpaṁ cha tat tāmasam udāhṛitam
`,word_meanings:`yat—which; tu—but; kṛitsna-vat—as if it encompasses the whole; ekasmin—in single; kārye—action; saktam—engrossed; ahaitukam—without a reason; atattva-artha-vat—not based on truth; alpam—fragmental; cha—and; tat—that; tāmasam—in the mode of ignorance; udāhṛitam—is said to be
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S22.mp3"},{chapter_id:18,chapter_number:18,externalId:646,id:646,text:"नियतं सङ्गरहितमरागद्वेषतः कृतम्।अफलप्रेप्सुना कर्म यत्तत्सात्त्विकमुच्यते।।18.23।।",title:"Verse 646",verse_number:23,verse_order:646,transliteration:`niyataṁ saṅga-rahitam arāga-dveṣhataḥ kṛitam
aphala-prepsunā karma yat tat sāttvikam uchyate
`,word_meanings:`niyatam—in accordance with scriptures; saṅga-rahitam—free from attachment; arāga-dveṣhataḥ—free from attachment and aversion; kṛitam—done; aphala-prepsunā—without desire for rewards; karma—action; yat—which; tat—that; sāttvikam—in the mode of goodness; uchyate—is called
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S23.mp3"},{chapter_id:18,chapter_number:18,externalId:647,id:647,text:"यत्तु कामेप्सुना कर्म साहङ्कारेण वा पुनः।क्रियते बहुलायासं तद्राजसमुदाहृतम्।।18.24।।",title:"Verse 647",verse_number:24,verse_order:647,transliteration:`yat tu kāmepsunā karma sāhankāreṇa vā punaḥ
kriyate bahulāyāsaṁ tad rājasam udāhṛitam
`,word_meanings:`yat—which; tu—but; kāma-īpsunā—prompted by selfish desire; karma—action; sa-ahaṅkāreṇa—with pride; vā—or; punaḥ—again; kriyate—enacted; bahula-āyāsam—stressfully; tat—that; rājasam—in the nature of passion; udāhṛitam—is said to be
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S24.mp3"},{chapter_id:18,chapter_number:18,externalId:648,id:648,text:"अनुबन्धं क्षयं हिंसामनपेक्ष्य च पौरुषम्।मोहादारभ्यते कर्म यत्तत्तामसमुच्यते।।18.25।।",title:"Verse 648",verse_number:25,verse_order:648,transliteration:`anubandhaṁ kṣhayaṁ hinsām anapekṣhya cha pauruṣham
mohād ārabhyate karma yat tat tāmasam uchyate
`,word_meanings:`anubandham—consequences; kṣhayam—loss; hinsām—injury; anapekṣhya—by disregarding; cha—and; pauruṣham—one’s own ability; mohāt—out of delusion; ārabhyate—is begun; karma—action; yat—which; tat—that; tāmasam—in the mode of ignorance; uchyate—is declared to be
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S25.mp3"},{chapter_id:18,chapter_number:18,externalId:649,id:649,text:"मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः।सिद्ध्यसिद्ध्योर्निर्विकारः कर्ता सात्त्विक उच्यते।।18.26।।",title:"Verse 649",verse_number:26,verse_order:649,transliteration:`mukta-saṅgo ‘nahaṁ-vādī dhṛity-utsāha-samanvitaḥ
siddhy-asiddhyor nirvikāraḥ kartā sāttvika uchyate
`,word_meanings:`mukta-saṅgaḥ—free from worldly attachment; anaham-vādī—free from ego; dhṛiti—strong resolve; utsāha—zeal; samanvitaḥ—endowed with; siddhi-asiddhyoḥ—in success and failure; nirvikāraḥ—unaffected; kartā—worker; sāttvikaḥ—in the mode of goodness; uchyate—is said to be
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S26.mp3"},{chapter_id:18,chapter_number:18,externalId:650,id:650,text:"रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽशुचिः।हर्षशोकान्वितः कर्ता राजसः परिकीर्तितः।।18.27।।",title:"Verse 650",verse_number:27,verse_order:650,transliteration:`rāgī karma-phala-prepsur lubdho hinsātmako ‘śhuchiḥ
harṣha-śhokānvitaḥ kartā rājasaḥ parikīrtitaḥ
`,word_meanings:`rāgī—craving; karma-phala—fruit of work; prepsuḥ—covet; lubdhaḥ—greedy; hinsā-ātmakaḥ—violent-natured; aśhuchiḥ—impure; harṣha-śhoka-anvitaḥ—moved by joy and sorrow; kartā—performer; rājasaḥ—in the mode of passion; parikīrtitaḥ—is declared
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S27.mp3"},{chapter_id:18,chapter_number:18,externalId:651,id:651,text:"अयुक्तः प्राकृतः स्तब्धः शठो नैष्कृतिकोऽलसः।विषादी दीर्घसूत्री च कर्ता तामस उच्यते।।18.28।।",title:"Verse 651",verse_number:28,verse_order:651,transliteration:`ayuktaḥ prākṛitaḥ stabdhaḥ śhaṭho naiṣhkṛitiko ‘lasaḥ
viṣhādī dīrgha-sūtrī cha kartā tāmasa uchyate
`,word_meanings:`ayuktaḥ—undisciplined; prākṛitaḥ—vulgar; stabdhaḥ—obstinate; śhaṭhaḥ—cunning; naiṣhkṛitikaḥ—dishonest or vile; alasaḥ—slothful; viṣhādī—unhappy and morose; dīrgha-sūtrī—procrastinating; cha—and; kartā—performer; tāmasaḥ—in the mode of ignorance; uchyate—is said to be
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S28.mp3"},{chapter_id:18,chapter_number:18,externalId:652,id:652,text:"बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं श्रृणु।प्रोच्यमानमशेषेण पृथक्त्वेन धनञ्जय।।18.29।।",title:"Verse 652",verse_number:29,verse_order:652,transliteration:`buddher bhedaṁ dhṛiteśh chaiva guṇatas tri-vidhaṁ śhṛiṇu
prochyamānam aśheṣheṇa pṛithaktvena dhanañjaya
`,word_meanings:`buddheḥ—of intellect; bhedam—the distinctions; dhṛiteḥ—of determination; cha—and; eva—certainly; guṇataḥ tri-vidham—according to the three modes of material nature; śhṛiṇu—hear; prochyamānam—described; aśheṣheṇa—in detail; pṛithaktvena—distinctly; dhanañjaya—conqueror of wealth, Arjun
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S29.mp3"},{chapter_id:18,chapter_number:18,externalId:653,id:653,text:"प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये।बन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी।।18.30।।",title:"Verse 653",verse_number:30,verse_order:653,transliteration:`pravṛittiṁ cha nivṛittiṁ cha kāryākārye bhayābhaye
bandhaṁ mokṣhaṁ cha yā vetti buddhiḥ sā pārtha sāttvikī
`,word_meanings:`pravṛittim—activities; cha—and; nivṛittim—renuncation from action; cha—and; kārya—proper action; akārye—improper action; bhaya—fear; abhaye—without fear; bandham—what is binding; mokṣham—what is liberating; cha—and; yā—which; vetti—understands; buddhiḥ—intellect; sā—that; pārtha—son of Pritha; sāttvikī—in the nature of goodness
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S30.mp3"},{chapter_id:18,chapter_number:18,externalId:654,id:654,text:"यया धर्ममधर्मं च कार्यं चाकार्यमेव च।अयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी।।18.31।।",title:"Verse 654",verse_number:31,verse_order:654,transliteration:`yayā dharmam adharmaṁ cha kāryaṁ chākāryam eva cha
ayathāvat prajānāti buddhiḥ sā pārtha rājasī
`,word_meanings:`yayā—by which; dharmam—righteousness; adharmam—unrighteousness; cha—and; kāryam—right conduct; cha—and; akāryam—wrong conduct; eva—certainly; cha—and; ayathā-vat—confused; prajānāti—distinguish; buddhiḥ—intellect; sā—that; pārtha—Arjun, the son of Pritha; rājasī—in the mode of passion
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S31.mp3"},{chapter_id:18,chapter_number:18,externalId:655,id:655,text:"अधर्मं धर्ममिति या मन्यते तमसाऽऽवृता।सर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी।।18.32।।",title:"Verse 655",verse_number:32,verse_order:655,transliteration:`adharmaṁ dharmam iti yā manyate tamasāvṛitā
sarvārthān viparītānśh cha buddhiḥ sā pārtha tāmasī
`,word_meanings:`adharmam—irreligion; dharmam—religion; iti—thus; yā—which; manyate—imagines; tamasa-āvṛitā—shrouded in darkness; sarva-arthān—all things; viparītān—opposite; cha—and; buddhiḥ—intellect; sā—that; pārtha—Arjun, the son of Pritha; tāmasī—of the nature of ignorance
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S32.mp3"},{chapter_id:18,chapter_number:18,externalId:656,id:656,text:"धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः।योगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी।।18.33।।",title:"Verse 656",verse_number:33,verse_order:656,transliteration:`dhṛityā yayā dhārayate manaḥ-prāṇendriya-kriyāḥ
yogenāvyabhichāriṇyā dhṛitiḥ sā pārtha sāttvikī
`,word_meanings:`dhṛityā—by determining; yayā—which; dhārayate—sustains; manaḥ—of the mind; prāṇa—life-airs; indriya—senses; kriyāḥ—activities; yogena—through Yog; avyabhichāriṇyā—with steadfastness; dhṛitiḥ—determination; sā—that; pārtha—Arjun, the son of Pritha; sāttvikī—in the mode of goodness
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S33.mp3"},{chapter_id:18,chapter_number:18,externalId:657,id:657,text:"यया तु धर्मकामार्थान् धृत्या धारयतेऽर्जुन।प्रसङ्गेन फलाकाङ्क्षी धृतिः सा पार्थ राजसी।।18.34।।",title:"Verse 657",verse_number:34,verse_order:657,transliteration:`yayā tu dharma-kāmārthān dhṛityā dhārayate ‘rjuna
prasaṅgena phalākāṅkṣhī dhṛitiḥ sā pārtha rājasī
`,word_meanings:`yayā—by which; tu—but; dharma-kāma-arthān—duty, pleasures, and wealth; dhṛityā—through steadfast will; dhārayate—holds; arjuna—Arjun; prasaṅgena—due of attachment; phala-ākāṅkṣhī—desire for rewards; dhṛitiḥ—determination; sā—that; pārtha—Arjun, the son of Pritha; rājasī—in the mode of passion
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S34.mp3"},{chapter_id:18,chapter_number:18,externalId:658,id:658,text:"यया स्वप्नं भयं शोकं विषादं मदमेव च।न विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी।।18.35।।",title:"Verse 658",verse_number:35,verse_order:658,transliteration:`yayā svapnaṁ bhayaṁ śhokaṁ viṣhādaṁ madam eva cha
na vimuñchati durmedhā dhṛitiḥ sā pārtha tāmasī
`,word_meanings:`yayā—in which; svapnam—dreaming; bhayam—fearing; śhokam—grieving; viṣhādam—despair; madam—conceit; eva—indeed; cha—and; na—not; vimuñchati—give up; durmedhā—unintelligent; dhṛitiḥ—resolve; sā—that; pārtha—Arjun, the son of Pritha; tāmasī—in the mode of ignorance
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S35.mp3"},{chapter_id:18,chapter_number:18,externalId:659,id:659,text:"सुखं त्विदानीं त्रिविधं श्रृणु मे भरतर्षभ।अभ्यासाद्रमते यत्र दुःखान्तं च निगच्छति।।18.36।।",title:"Verse 659",verse_number:36,verse_order:659,transliteration:`sukhaṁ tv idānīṁ tri-vidhaṁ śhṛiṇu me bharatarṣhabha
abhyāsād ramate yatra duḥkhāntaṁ cha nigachchhati
 yat tad agre viṣham iva pariṇāme ‘mṛitopamam
tat sukhaṁ sāttvikaṁ proktam ātma-buddhi-prasāda-jam
`,word_meanings:`sukham—happiness; tu—but; idānīm—now; tri-vidham—of three kinds; śhṛiṇu—hear; me—from me; bharata-ṛiṣhabha—Arjun, the best of the Bharatas; abhyāsāt—by practice; ramate—rejoices; yatra—in which; duḥkha-antam—end of all suffering; cha—and; nigachchhati—reaches
 yat—which; tat—that; agre—at first; viṣham iva—like poison; pariṇāme—in the end; amṛita-upamam—like nectar; tat—that; sukham—happiness; sāttvikam—in the mode of goodness; proktam—is said to be; ātma-buddhi—situated in self-knowledge; prasāda-jam—generated by the pure intellect
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S36.mp3"},{chapter_id:18,chapter_number:18,externalId:660,id:660,text:"यत्तदग्रे विषमिव परिणामेऽमृतोपमम्।तत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम्।।18.37।।",title:"Verse 660",verse_number:37,verse_order:660,transliteration:"yat  tad agre    viṣam   iva pariṇāme    'mṛtopamam  tat sukhaṁ  sāttvikaṁ   proktam ātma-buddhi-prasāda-jam",word_meanings:"yat—that   which;  tat—that;   agre—in the beginning;  viṣam   iva—like    poison; pariṇāme—at the end;    amṛta—nectar;   upamam—compared to; tat—that;   sukham—happiness;   sāttvikam—in    the mode    of  goodness;   proktam—is   said;    ātma—self;    buddhi—intelligence;    prasāda-jam—satisfactory.",Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S37.mp3"},{chapter_id:18,chapter_number:18,externalId:661,id:661,text:"विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम्।परिणामे विषमिव तत्सुखं राजसं स्मृतम्।।18.38।।",title:"Verse 661",verse_number:38,verse_order:661,transliteration:`viṣhayendriya-sanyogād yat tad agre ’mṛitopamam
pariṇāme viṣham iva tat sukhaṁ rājasaṁ smṛitam
`,word_meanings:`viṣhaya—with the sense objects; indriya—the senses; sanyogāt—from the contact; yat—which; tat—that; agre—at first; amṛita-upamam—like nectar; pariṇāme—at the end; viṣham iva—like poison; tat—that; sukham—happiness; rājasam—in the mode of passion; smṛitam—is said to be
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S38.mp3"},{chapter_id:18,chapter_number:18,externalId:662,id:662,text:"यदग्रे चानुबन्धे च सुखं मोहनमात्मनः।निद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम्।।18.39।।",title:"Verse 662",verse_number:39,verse_order:662,transliteration:`yad agre chānubandhe cha sukhaṁ mohanam ātmanaḥ
nidrālasya-pramādotthaṁ tat tāmasam udāhṛitam
`,word_meanings:`yat—which; agre—from beginning; cha—and; anubandhe—to end; cha—and; sukham—happiness; mohanam—illusory; ātmanaḥ—of the self; nidrā—sleep; ālasya—indolence; pramāda—negligence; uttham—derived from; tat—that; tāmasam—in the mode of ignorance; udāhṛitam—is said to be
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S39.mp3"},{chapter_id:18,chapter_number:18,externalId:663,id:663,text:"न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः।सत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्ित्रभिर्गुणैः।।18.40।।",title:"Verse 663",verse_number:40,verse_order:663,transliteration:`na tad asti pṛithivyāṁ vā divi deveṣhu vā punaḥ
sattvaṁ prakṛiti-jair muktaṁ yad ebhiḥ syāt tribhir guṇaiḥ
`,word_meanings:`na—no; tat—that; asti—exists; pṛithivyām—on earth; vā—or; divi—the higher celestial abodes; deveṣhu—amongst the celestial gods; vā—or; punaḥ—again; sattvam—existence; prakṛiti-jaiḥ—born of material nature; muktam—liberated; yat—that; ebhiḥ—from the influence of these; syāt—is; tribhiḥ—three; guṇaiḥ—modes of material nature
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S40.mp3"},{chapter_id:18,chapter_number:18,externalId:664,id:664,text:"ब्राह्मणक्षत्रियविशां शूद्राणां च परंतप।कर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः।।18.41।।",title:"Verse 664",verse_number:41,verse_order:664,transliteration:`brāhmaṇa-kṣhatriya-viśhāṁ śhūdrāṇāṁ cha parantapa
karmāṇi pravibhaktāni svabhāva-prabhavair guṇaiḥ
`,word_meanings:`brāhmaṇa—of the priestly class; kṣhatriya—the warrior and administrative class; viśhām—the mercantile and farming class; śhūdrāṇām—of the worker class; cha—and; parantapa—Arjun, subduer of the enemies; karmāṇi—duties; pravibhaktāni—distributed; svabhāva-prabhavaiḥ-guṇaiḥ—work based on one’s nature and guṇas
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S41.mp3"},{chapter_id:18,chapter_number:18,externalId:665,id:665,text:"शमो दमस्तपः शौचं क्षान्तिरार्जवमेव च।ज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम्।।18.42।।",title:"Verse 665",verse_number:42,verse_order:665,transliteration:`śhamo damas tapaḥ śhauchaṁ kṣhāntir ārjavam eva cha
jñānaṁ vijñānam āstikyaṁ brahma-karma svabhāva-jam
`,word_meanings:`śhamaḥ—tranquility; damaḥ—restraint; tapaḥ—austerity; śhaucham—purity; kṣhāntiḥ—patience; ārjavam—integrity; eva—certainly; cha—and; jñānam—knowledge; vijñānam—wisdom; āstikyam—belief in a hereafter; brahma—of the priestly class; karma—work; svabhāva-jam—born of one’s intrinsic qualities
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S42.mp3"},{chapter_id:18,chapter_number:18,externalId:666,id:666,text:"शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम्।दानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम्।।18.43।।",title:"Verse 666",verse_number:43,verse_order:666,transliteration:`śhauryaṁ tejo dhṛitir dākṣhyaṁ yuddhe chāpy apalāyanam
dānam īśhvara-bhāvaśh cha kṣhātraṁ karma svabhāva-jam
`,word_meanings:`śhauryam—valor; tejaḥ—strength; dhṛitiḥ—fortitude; dākṣhyam yuddhe—skill in weaponry; cha—and; api—also; apalāyanam—not fleeing; dānam—large-heartedness; īśhvara—leadership; bhāvaḥ—qualities; cha—and; kṣhātram—of the warrior and administrative class; karma—work; svabhāva-jam—born of one’s intrinsic qualities
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S43.mp3"},{chapter_id:18,chapter_number:18,externalId:667,id:667,text:"कृषिगौरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम्।परिचर्यात्मकं कर्म शूद्रस्यापि स्वभावजम्।।18.44।।",title:"Verse 667",verse_number:44,verse_order:667,transliteration:`kṛiṣhi-gau-rakṣhya-vāṇijyaṁ vaiśhya-karma svabhāva-jam
paricharyātmakaṁ karma śhūdrasyāpi svabhāva-jam
`,word_meanings:`kṛiṣhi—agriculture; gau-rakṣhya—dairy farming; vāṇijyam—commerce; vaiśhya—of the mercantile and farming class; karma—work; svabhāva-jam—born of one’s intrinsic qualities; paricharyā—serving through work; ātmakam—natural; karma—duty; śhūdrasya—of the worker class; api—and; svabhāva-jam—born of one’s intrinsic qualities
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S44.mp3"},{chapter_id:18,chapter_number:18,externalId:668,id:668,text:"स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।स्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु।।18.45।।",title:"Verse 668",verse_number:45,verse_order:668,transliteration:`sve sve karmaṇy abhirataḥ sansiddhiṁ labhate naraḥ
sva-karma-nirataḥ siddhiṁ yathā vindati tach chhṛiṇu
`,word_meanings:`sve sve—respectively; karmaṇi—work; abhirataḥ—fulfilling; sansiddhim—perfection; labhate—achieve; naraḥ—a person; sva-karma—to one’s own prescribed duty; nirataḥ—engaged; siddhim—perfection; yathā—as; vindati—attains; tat—that; śhṛiṇu—hear
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S45.mp3"},{chapter_id:18,chapter_number:18,externalId:669,id:669,text:"यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम्।स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः।।18.46।।",title:"Verse 669",verse_number:46,verse_order:669,transliteration:`yataḥ pravṛittir bhūtānāṁ yena sarvam idaṁ tatam
sva-karmaṇā tam abhyarchya siddhiṁ vindati mānavaḥ
`,word_meanings:`yataḥ—from whom; pravṛittiḥ—have come into being; bhūtānām—of all living entities; yena—by whom; sarvam—all; idam—this; tatam—pervaded; sva-karmaṇā—by one’s natural occupation; tam—him; abhyarchya—by worshipping; siddhim—perfection; vindati—attains; mānavaḥ—a person
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S46.mp3"},{chapter_id:18,chapter_number:18,externalId:670,id:670,text:"श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम्।।18.47।।",title:"Verse 670",verse_number:47,verse_order:670,transliteration:`śhreyān swa-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt
svabhāva-niyataṁ karma kurvan nāpnoti kilbiṣham
`,word_meanings:`śhreyān—better; swa-dharmaḥ—one’s own prescribed occupational duty; viguṇaḥ—imperfectly done; para-dharmāt—than another’s dharma; su-anuṣhṭhitāt—perfectly done; svabhāva-niyatam—according to one’s innate nature; karma—duty; kurvan—by performing; na āpnoti—does not incur; kilbiṣham—sin
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S47.mp3"},{chapter_id:18,chapter_number:18,externalId:671,id:671,text:"सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्।सर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः।।18.48।।",title:"Verse 671",verse_number:48,verse_order:671,transliteration:`saha-jaṁ karma kaunteya sa-doṣham api na tyajet
sarvārambhā hi doṣheṇa dhūmenāgnir ivāvṛitāḥ
`,word_meanings:`saha-jam—born of one’s nature; karma—duty; kaunteya—Arjun, the son of Kunti; sa-doṣham—with defects; api—even if; na tyajet—one should not abandon; sarva-ārambhāḥ—all endeavors; hi—indeed; doṣheṇa—with evil; dhūmena—with smoke; agniḥ—fire; iva—as; āvṛitāḥ—veiled
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S48.mp3"},{chapter_id:18,chapter_number:18,externalId:672,id:672,text:"असक्तबुद्धिः सर्वत्र जितात्मा विगतस्पृहः।नैष्कर्म्यसिद्धिं परमां संन्यासेनाधिगच्छति।।18.49।।",title:"Verse 672",verse_number:49,verse_order:672,transliteration:`asakta-buddhiḥ sarvatra jitātmā vigata-spṛihaḥ
naiṣhkarmya-siddhiṁ paramāṁ sannyāsenādhigachchhati
`,word_meanings:`asakta-buddhiḥ—those whose intellect is unattached; sarvatra—everywhere; jita-ātmā—who have mastered their mind; vigata-spṛihaḥ—free from desires; naiṣhkarmya-siddhim—state of actionlessness; paramām—highest; sanyāsena—by the practice of renunciation; adhigachchhati—attain
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S49.mp3"},{chapter_id:18,chapter_number:18,externalId:673,id:673,text:"सिद्धिं प्राप्तो यथा ब्रह्म तथाप्नोति निबोध मे।समासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा।।18.50।।",title:"Verse 673",verse_number:50,verse_order:673,transliteration:`siddhiṁ prāpto yathā brahma tathāpnoti nibodha me
samāsenaiva kaunteya niṣhṭhā jñānasya yā parā
`,word_meanings:`siddhim—perfection; prāptaḥ—attained; yathā—how; brahma—Brahman; tathā—also; āpnoti—attain; nibodha—hear; me—from me; samāsena—briefly; eva—indeed; kaunteya—Arjun, the son of Kunti; niṣhṭhā—firmly fixed; jñānasya—of knowledge; yā—which; parā—transcendental
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S50.mp3"},{chapter_id:18,chapter_number:18,externalId:674,id:674,text:"बुद्ध्या विशुद्धया युक्तो धृत्याऽऽत्मानं नियम्य च।शब्दादीन् विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च।।18.51।।",title:"Verse 674",verse_number:51,verse_order:674,transliteration:`buddhyā viśhuddhayā yukto dhṛityātmānaṁ niyamya cha
śhabdādīn viṣhayāns tyaktvā rāga-dveṣhau vyudasya cha
`,word_meanings:`buddhyā—intellect; viśhuddhayā—purified; yuktaḥ—endowed with; dhṛityā—by determination; ātmānam—the intellect; niyamya—restraining; cha—and; śhabda-ādīn viṣhayān—sound and other objects of the senses; tyaktvā—abandoning; rāga-dveṣhau—attachment and aversion; vyudasya—casting aside; cha—and;
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S51.mp3"},{chapter_id:18,chapter_number:18,externalId:675,id:675,text:"विविक्तसेवी लघ्वाशी यतवाक्कायमानसः।ध्यानयोगपरो नित्यं वैराग्यं समुपाश्रितः।।18.52।।",title:"Verse 675",verse_number:52,verse_order:675,transliteration:`vivikta-sevī laghv-āśhī yata-vāk-kāya-mānasaḥ
dhyāna-yoga-paro nityaṁ vairāgyaṁ samupāśhritaḥ
`,word_meanings:`vivikta-sevī—relishing solitude; laghu-āśhī—eating light; yata—controls; vāk—speech; kāya—body; mānasaḥ—and mind; dhyāna-yoga-paraḥ—engaged in meditation; nityam—always; vairāgyam—dispassion; samupāśhritaḥ—having taken shelter of;
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S52.mp3"},{chapter_id:18,chapter_number:18,externalId:676,id:676,text:"अहङ्कारं बलं दर्पं कामं क्रोधं परिग्रहम्।विमुच्य निर्ममः शान्तो ब्रह्मभूयाय कल्पते।।18.53।।",title:"Verse 676",verse_number:53,verse_order:676,transliteration:`ahankāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ parigraham
vimuchya nirmamaḥ śhānto brahma-bhūyāya kalpate
`,word_meanings:`ahankāram—egotism; balam—violence; darpam—arrogance; kāmam—desire; krodham—anger; parigraham—selfishness; vimuchya—being freed from; nirmamaḥ—without possessiveness of property; śhāntaḥ—peaceful; brahma-bhūyāya—union with Brahman; kalpate—is fit
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S53.mp3"},{chapter_id:18,chapter_number:18,externalId:677,id:677,text:"ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति।समः सर्वेषु भूतेषु मद्भक्तिं लभते पराम्।।18.54।।",title:"Verse 677",verse_number:54,verse_order:677,transliteration:`brahma-bhūtaḥ prasannātmā na śhochati na kāṅkṣhati
samaḥ sarveṣhu bhūteṣhu mad-bhaktiṁ labhate parām
`,word_meanings:`brahma-bhūtaḥ—one situated in Brahman; prasanna-ātmā—mentally serene; na—neither; śhochati—grieving; na—nor; kāṅkṣhati—desiring; samaḥ—equitably disposed; sarveṣhu—toward all; bhūteṣhu—living beings; mat-bhaktim—devotion to me; labhate—attains; parām—supreme
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S54.mp3"},{chapter_id:18,chapter_number:18,externalId:678,id:678,text:"भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः।ततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम्।।18.55।।",title:"Verse 678",verse_number:55,verse_order:678,transliteration:`bhaktyā mām abhijānāti yāvān yaśh chāsmi tattvataḥ
tato māṁ tattvato jñātvā viśhate tad-anantaram
`,word_meanings:`bhaktyā—by loving devotion; mām—me; abhijānāti—one comes to know; yāvān—as much as; yaḥ cha asmi—as I am; tattvataḥ—in truth; tataḥ—then; mām—me; tattvataḥ—in truth; jñātvā—having known; viśhate—enters; tat-anantaram—thereafter
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S55.mp3"},{chapter_id:18,chapter_number:18,externalId:679,id:679,text:"सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रयः।मत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम्।।18.56।।",title:"Verse 679",verse_number:56,verse_order:679,transliteration:`sarva-karmāṇy api sadā kurvāṇo mad-vyapāśhrayaḥ
mat-prasādād avāpnoti śhāśhvataṁ padam avyayam
`,word_meanings:`sarva—all; karmāṇi—actions; api—though; sadā—always; kurvāṇaḥ—performing; mat-vyapāśhrayaḥ—take full refuge in me; mat-prasādāt—by my grace; avāpnoti—attain; śhāśhvatam—the eternal; padam—abode; avyayam—imperishable
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S56.mp3"},{chapter_id:18,chapter_number:18,externalId:680,id:680,text:"चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः।बुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव।।18.57।।",title:"Verse 680",verse_number:57,verse_order:680,transliteration:`chetasā sarva-karmāṇi mayi sannyasya mat-paraḥ
buddhi-yogam upāśhritya mach-chittaḥ satataṁ bhava
`,word_meanings:`chetasā—by consciousness; sarva-karmāṇi—every activity; mayi—to me; sannyasya—dedicating; mat-paraḥ—having me as the supreme goal; buddhi-yogam—having the intellect united with God; upāśhritya—taking shelter of; mat-chittaḥ—consciousness absorbed in me; satatam—always; bhava—be
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S57.mp3"},{chapter_id:18,chapter_number:18,externalId:681,id:681,text:"मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि।अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि।।18.58।।",title:"Verse 681",verse_number:58,verse_order:681,transliteration:`mach-chittaḥ sarva-durgāṇi mat-prasādāt tariṣhyasi
atha chet tvam ahankārān na śhroṣhyasi vinaṅkṣhyasi
`,word_meanings:`mat-chittaḥ—by always remembering me; sarva—all; durgāṇi—obstacles; mat-prasādāt—by my grace; tariṣhyasi—you shall overcome; atha—but; chet—if; tvam—you; ahankārāt—due to pride; na śhroṣhyasi—do not listen; vinaṅkṣhyasi—you will perish
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S58.mp3"},{chapter_id:18,chapter_number:18,externalId:682,id:682,text:"यदहङ्कारमाश्रित्य न योत्स्य इति मन्यसे।मिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति।।18.59।।",title:"Verse 682",verse_number:59,verse_order:682,transliteration:`yad ahankāram āśhritya na yotsya iti manyase
mithyaiṣha vyavasāyas te prakṛitis tvāṁ niyokṣhyati
`,word_meanings:`yat—if; ahankāram—motivated by pride; āśhritya—taking shelter; na yotsye—I shall not fight; iti—thus; manyase—you think; mithyā eṣhaḥ—this is all false; vyavasāyaḥ—determination; te—your; prakṛitiḥ—material nature; tvām—you; niyokṣhyati—will engage
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S59.mp3"},{chapter_id:18,chapter_number:18,externalId:683,id:683,text:"स्वभावजेन कौन्तेय निबद्धः स्वेन कर्मणा।कर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोऽपि तत्।।18.60।।",title:"Verse 683",verse_number:60,verse_order:683,transliteration:`swbhāva-jena kaunteya nibaddhaḥ svena karmaṇā
kartuṁ nechchhasi yan mohāt kariṣhyasy avaśho ’pi tat
`,word_meanings:`swabhāva-jena—born of one’s own material nature; kaunteya—Arjun, the son of Kunti; nibaddhaḥ—bound; svena—by your own; karmaṇā—actions; kartum—to do; na—not; ichchhasi—you wish; yat—which; mohāt—out of delusion; kariṣhyasi—you will do; avaśhaḥ—helplessly; api—even though; tat—that
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S60.mp3"},{chapter_id:18,chapter_number:18,externalId:684,id:684,text:"ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया।।18.61।।",title:"Verse 684",verse_number:61,verse_order:684,transliteration:`īśhvaraḥ sarva-bhūtānāṁ hṛid-deśhe ‘rjuna tiṣhṭhati
bhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā
`,word_meanings:`īśhvaraḥ—the Supreme Lord; sarva-bhūtānām—in all living being; hṛit-deśhe—in the hearts; arjuna—Arjun; tiṣhṭhati—dwells; bhrāmayan—causing to wander; sarva-bhūtāni—all living beings; yantra ārūḍhani—seated on a machine; māyayā—made of the material energy
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S61.mp3"},{chapter_id:18,chapter_number:18,externalId:685,id:685,text:"तमेव शरणं गच्छ सर्वभावेन भारत।तत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम्।।18.62।।",title:"Verse 685",verse_number:62,verse_order:685,transliteration:`tam eva śharaṇaṁ gachchha sarva-bhāvena bhārata
tat-prasādāt parāṁ śhāntiṁ sthānaṁ prāpsyasi śhāśhvatam
`,word_meanings:`tam—unto him; eva—only; śharaṇam gachchha—surrender; sarva-bhāvena—whole-heartedly; bhārata—Arjun, the son of Bharat; tat-prasādāt—by his grace; parām—supreme; śhāntim—peace; sthānam—the abode; prāpsyasi—you will attain; śhāśhvatam—eternal
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S62.mp3"},{chapter_id:18,chapter_number:18,externalId:686,id:686,text:"इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया।विमृश्यैतदशेषेण यथेच्छसि तथा कुरु।।18.63।।",title:"Verse 686",verse_number:63,verse_order:686,transliteration:`iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā
vimṛiśhyaitad aśheṣheṇa yathechchhasi tathā kuru
`,word_meanings:`iti—thus; te—to you; jñānam—knowledge; ākhyātam—explained; guhyāt—than secret knowledge; guhya-taram—still more secret knowledge; mayā—by me; vimṛiśhya—pondering; etat—on this; aśheṣheṇa—completely; yathā—as; ichchhasi—you wish; tathā—so; kuru—do
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S63.mp3"},{chapter_id:18,chapter_number:18,externalId:687,id:687,text:"सर्वगुह्यतमं भूयः श्रृणु मे परमं वचः।इष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम्।।18.64।।",title:"Verse 687",verse_number:64,verse_order:687,transliteration:`sarva-guhyatamaṁ bhūyaḥ śhṛiṇu me paramaṁ vachaḥ
iṣhṭo ‘si me dṛiḍham iti tato vakṣhyāmi te hitam
`,word_meanings:`sarva-guhya-tamam—the most confidential of all; bhūyaḥ—again; śhṛiṇu—hear; me—by me; paramam—supreme; vachaḥ—instruction; iṣhṭaḥ asi—you are dear; me—to me; dṛiḍham—very; iti—thus; tataḥ—because; vakṣhyāmi—I am speaking; te—for your; hitam—benefit
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S64.mp3"},{chapter_id:18,chapter_number:18,externalId:688,id:688,text:"मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे।।18.65।।",title:"Verse 688",verse_number:65,verse_order:688,transliteration:`man-manā bhava mad-bhakto mad-yājī māṁ namaskuru
mām evaiṣhyasi satyaṁ te pratijāne priyo ‘si me
`,word_meanings:`mat-manāḥ—thinking of me; bhava—be; mat-bhaktaḥ—my devotee; mat-yājī—worship me; mām—to me; namaskuru—offer obeisance; mām—to me; eva—certainly; eṣhyasi—you will come; satyam—truly; te—to you; pratijāne—I promise; priyaḥ—dear; asi—you are; me—to me
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S65.mp3"},{chapter_id:18,chapter_number:18,externalId:689,id:689,text:"सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।।18.66।।",title:"Verse 689",verse_number:66,verse_order:689,transliteration:`sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja
ahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ
`,word_meanings:`sarva-dharmān—all varieties of dharmas; parityajya—abandoning; mām—unto me; ekam—only; śharaṇam—take refuge; vraja—take; aham—I; tvām—you; sarva—all; pāpebhyaḥ—from sinful reactions; mokṣhayiṣhyāmi—shall liberate; mā—do not; śhuchaḥ—fear
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S66.mp3"},{chapter_id:18,chapter_number:18,externalId:690,id:690,text:"इदं ते नातपस्काय नाभक्ताय कदाचन।न चाशुश्रूषवे वाच्यं न च मां योऽभ्यसूयति।।18.67।।",title:"Verse 690",verse_number:67,verse_order:690,transliteration:`idaṁ te nātapaskyāya nābhaktāya kadāchana
na chāśhuśhruṣhave vāchyaṁ na cha māṁ yo ‘bhyasūtayi
`,word_meanings:`idam—this; te—by you; na—never; atapaskāya—to those who are not austere; na—never; abhaktāya—to those who are not devoted; kadāchana—at any time; na—never; cha—also; aśhuśhrūṣhave—to those who are averse to listening (to spiritual topics); vāchyam—to be spoken; na—never; cha—also; mām—toward me; yaḥ—who; abhyasūyati—those who are envious
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S67.mp3"},{chapter_id:18,chapter_number:18,externalId:691,id:691,text:"य इमं परमं गुह्यं मद्भक्तेष्वभिधास्यति।भक्ितं मयि परां कृत्वा मामेवैष्यत्यसंशयः।।18.68।।",title:"Verse 691",verse_number:68,verse_order:691,transliteration:`ya idaṁ paramaṁ guhyaṁ mad-bhakteṣhv abhidhāsyati
bhaktiṁ mayi parāṁ kṛitvā mām evaiṣhyaty asanśhayaḥ
`,word_meanings:`yaḥ—who; idam—this; paramam—most; guhyam—confidential knowledge; mat-bhakteṣhu—amongst my devotees; abhidhāsyati—teaches; bhaktim—greatest act of love; mayi—to me; parām—transcendental; kṛitvā—doing; mām—to me; eva—certainly; eṣhyati—comes; asanśhayaḥ—without doubt
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S68.mp3"},{chapter_id:18,chapter_number:18,externalId:692,id:692,text:"न च तस्मान्मनुष्येषु कश्िचन्मे प्रियकृत्तमः।भविता न च मे तस्मादन्यः प्रियतरो भुवि।।18.69।।",title:"Verse 692",verse_number:69,verse_order:692,transliteration:`na cha tasmān manuṣhyeṣhu kaśhchin me priya-kṛittamaḥ
bhavitā na cha me tasmād anyaḥ priyataro bhuvi
`,word_meanings:`na—no; cha—and; tasmāt—than them; manuṣhyeṣhu—amongst human beings; kaśhchit—anyone; me—to me; priya-kṛit-tamaḥ—more dear; bhavitā—will be; na—never; cha—and; me—to me; tasmāt—than them; anyaḥ—another; priya-taraḥ—dearer; bhuvi—on this earth
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S69.mp3"},{chapter_id:18,chapter_number:18,externalId:693,id:693,text:"अध्येष्यते च य इमं धर्म्यं संवादमावयोः।ज्ञानयज्ञेन तेनाहमिष्टः स्यामिति मे मतिः।।18.70।।",title:"Verse 693",verse_number:70,verse_order:693,transliteration:`adhyeṣhyate cha ya imaṁ dharmyaṁ saṁvādam āvayoḥ
jñāna-yajñena tenāham iṣhṭaḥ syām iti me matiḥ
`,word_meanings:`adhyeṣhyate—study; cha—and; yaḥ—who; imam—this; dharmyam—sacred; saṁvādam—dialogue; āvayoḥ—of ours; jñāna—of knowledge; yajñena-tena—through the sacrifice of knowledge; aham—I; iṣhṭaḥ—worshipped; syām—shall be; iti—such; me—my; matiḥ—opinion
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S70.mp3"},{chapter_id:18,chapter_number:18,externalId:694,id:694,text:"श्रद्धावाननसूयश्च श्रृणुयादपि यो नरः।सोऽपि मुक्तः शुभाँल्लोकान्प्राप्नुयात्पुण्यकर्मणाम्।।18.71।।",title:"Verse 694",verse_number:71,verse_order:694,transliteration:`śhraddhāvān anasūyaśh cha śhṛiṇuyād api yo naraḥ
so ‘pi muktaḥ śhubhāl lokān prāpnuyāt puṇya-karmaṇām
`,word_meanings:`śhraddhā-vān—faithful; anasūyaḥ—without envy; cha—and; śhṛiṇuyāt—listen; api—certainly; yaḥ—who; naraḥ—a person; saḥ—that person; api—also; muktaḥ—liberated; śhubhān—the auspicious; lokān—abodes; prāpnuyāt—attain; puṇya-karmaṇām—of the pious
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S71.mp3"},{chapter_id:18,chapter_number:18,externalId:695,id:695,text:"कच्चिदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा।कच्चिदज्ञानसंमोहः प्रनष्टस्ते धनञ्जय।।18.72।।",title:"Verse 695",verse_number:72,verse_order:695,transliteration:`kachchid etach chhrutaṁ pārtha tvayaikāgreṇa chetasā
kachchid ajñāna-sammohaḥ pranaṣhṭas te dhanañjaya
`,word_meanings:`kachchit—whether; etat—this; śhrutam—heard; pārtha—Arjun, the son of Pritha; tvayā—by you; eka-agreṇa chetasā—with a concentrated mind; kachchit—whether; ajñāna—ignorance; sammohaḥ—delusion; pranaṣhṭaḥ—destroyed; te—your; dhanañjaya—Arjun, conqueror of wealth
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S72.mp3"},{chapter_id:18,chapter_number:18,externalId:696,id:696,text:"अर्जुन उवाचनष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत।स्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव।।18.73।।",title:"Verse 696",verse_number:73,verse_order:696,transliteration:`arjuna uvācha
naṣhṭo mohaḥ smṛitir labdhā tvat-prasādān mayāchyuta
sthito ‘smi gata-sandehaḥ kariṣhye vachanaṁ tava
`,word_meanings:`arjunaḥ uvācha—Arjun said; naṣhṭaḥ—dispelled; mohaḥ—illusion; smṛitiḥ—memory; labdhā—regained; tvat-prasādāt—by your grace; mayā—by me; achyuta—Shree Krishna, the infallible one; sthitaḥ—situated; asmi—I am; gata-sandehaḥ—free from doubts; kariṣhye—I shall act; vachanam—instructions; tava—your
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S73.mp3"},{chapter_id:18,chapter_number:18,externalId:697,id:697,text:"सञ्जय उवाचइत्यहं वासुदेवस्य पार्थस्य च महात्मनः।संवादमिममश्रौषमद्भुतं रोमहर्षणम्।।18.74।।",title:"Verse 697",verse_number:74,verse_order:697,transliteration:`sañjaya uvācha
ity ahaṁ vāsudevasya pārthasya cha mahātmanaḥ
saṁvādam imam aśhrauṣham adbhutaṁ roma-harṣhaṇam
`,word_meanings:`sañjayaḥ uvācha—Sanjay said; iti—thus; aham—I; vāsudevasya—of Shree Krishna; pārthasya—Arjun; cha—and; mahā-ātmanaḥ—the noble hearted soul; saṁvādam—conversation; imam—this; aśhrauṣham—have heard; adbhutam—wonderful; roma-harṣhaṇam—which causes the hair to stand on end
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S74.mp3"},{chapter_id:18,chapter_number:18,externalId:698,id:698,text:"व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम्।योगं योगेश्वरात्कृष्णात्साक्षात्कथयतः स्वयम्।।18.75।।",title:"Verse 698",verse_number:75,verse_order:698,transliteration:`vyāsa-prasādāch chhrutavān etad guhyam ahaṁ param
yogaṁ yogeśhvarāt kṛiṣhṇāt sākṣhāt kathayataḥ svayam
`,word_meanings:`vyāsa-prasādāt—by the grace of Ved Vyas; śhrutavān—have heard; etat—this; guhyam—secret; aham—I; param—supreme; yogam—Yog; yoga-īśhvarāt—from the Lod of Yog; kṛiṣhṇāt—from Shree Krishna; sākṣhāt—directly; kathayataḥ—speaking; svayam—himself
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S75.mp3"},{chapter_id:18,chapter_number:18,externalId:699,id:699,text:"राजन्संस्मृत्य संस्मृत्य संवादमिममद्भुतम्।केशवार्जुनयोः पुण्यं हृष्यामि च मुहुर्मुहुः।।18.76।।",title:"Verse 699",verse_number:76,verse_order:699,transliteration:`rājan sansmṛitya sansmṛitya saṁvādam imam adbhutam
keśhavārjunayoḥ puṇyaṁ hṛiṣhyāmi cha muhur muhuḥ
`,word_meanings:`rājan—King; sansmṛitya saṁsmṛitya—repeatedly recalling; saṁvādam—dialogue; imam—this; adbhutam—astonishing; keśhava-arjunayoḥ—between Lord Shree Krishna and Arjun; puṇyam—pious; hṛiṣhyāmi—I rejoice; cha—and; muhuḥ muhuḥ—repeatedly
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S76.mp3"},{chapter_id:18,chapter_number:18,externalId:700,id:700,text:`तच्च संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरेः।

विस्मयो मे महान् राजन् हृष्यामि च पुनः पुनः।।18.77।।
 `,title:"Verse 700",verse_number:77,verse_order:700,transliteration:`tach cha sansmṛitya saṁsmṛitya rūpam aty-adbhutaṁ hareḥ
vismayo ye mahān rājan hṛiṣhyāmi cha punaḥ punaḥ
`,word_meanings:`tat—that; cha—and; sansmṛitya saṁsmṛitya—remembering repeatedly; rūpam—cosmic form; ati—most; adbhutam—wonderful; hareḥ—of Lord Krishna; vismayaḥ—astonishment; me—my; mahān—great; rājan—King; hṛiṣhyāmi—I am thrilled with joy; cha—and; punaḥ punaḥ—over and over again
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S77.mp3"},{chapter_id:18,chapter_number:18,externalId:701,id:701,text:`यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।

तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम।।18.78।
 `,title:"Verse 701",verse_number:78,verse_order:701,transliteration:`yatra yogeśhvaraḥ kṛiṣhṇo yatra pārtho dhanur-dharaḥ
tatra śhrīr vijayo bhūtir dhruvā nītir matir mama
`,word_meanings:`yatra—wherever; yoga-īśhvaraḥ—Shree Krishna, the Lord of Yog; kṛiṣhṇaḥ—Shree Krishna; yatra—wherever; pārthaḥ—Arjun, the son of Pritha; dhanuḥ-dharaḥ—the supreme archer; tatra—there; śhrīḥ—opulence; vijayaḥ—victory; bhūtiḥ—prosperity; dhruvā—unending; nītiḥ—righteousness; matiḥ mama—my opinion
`,Play:"https://testapi1test.blob.core.windows.net/test/18/Ch18S78.mp3"}];var ol={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yh=je.createContext&&je.createContext(ol),Ru=["attr","size","title"];function Bu(a,e){if(a==null)return{};var t=Ku(a,e),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}function Ku(a,e){if(a==null)return{};var t={};for(var n in a)if(Object.prototype.hasOwnProperty.call(a,n)){if(e.indexOf(n)>=0)continue;t[n]=a[n]}return t}function tr(){return tr=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},tr.apply(this,arguments)}function Gh(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,n)}return t}function nr(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Gh(Object(t),!0).forEach(function(n){Fu(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Gh(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function Fu(a,e,t){return e=Uu(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Uu(a){var e=$u(a,"string");return typeof e=="symbol"?e:e+""}function $u(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var n=t.call(a,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function dl(a){return a&&a.map((e,t)=>je.createElement(e.tag,nr({key:t},e.attr),dl(e.child)))}function ve(a){return e=>je.createElement(Yu,tr({attr:nr({},a.attr)},e),dl(a.child))}function Yu(a){var e=t=>{var{attr:n,size:r,title:i}=a,s=Bu(a,Ru),h=r||t.size||"1em",o;return t.className&&(o=t.className),a.className&&(o=(o?o+" ":"")+a.className),je.createElement("svg",tr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:o,style:nr(nr({color:a.color||t.color},t.style),a.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),i&&je.createElement("title",null,i),a.children)};return Yh!==void 0?je.createElement(Yh.Consumer,null,t=>e(t)):e(ol)}function Gu(a){return ve({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(a)}function Hu(a){return ve({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(a)}function Wu(a){return ve({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M224 432h-80V80h80zm144 0h-80V80h80z"},child:[]}]})(a)}function Qu(a){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"},child:[]}]})(a)}function qu({url:a}){const e=X.useRef(null),[t,n]=X.useState(0),[r,i]=X.useState(0),[s,h]=X.useState(!0),[o,l]=X.useState(!1),y=()=>h(L=>!L),c=()=>l(L=>!L),p=()=>{const L=e.current.currentTime;n(L/r*100)},v=()=>i(e.current.duration),f=L=>{const m=L.nativeEvent.offsetX,d=L.target.clientWidth,u=m/d*r;e.current.currentTime=u},w=()=>{e.current.currentTime=0,n(0),h(!1)};return X.useEffect(()=>{s?e.current.play():e.current.pause()},[s]),X.useEffect(()=>{e.current&&(e.current.pause(),e.current.load(),n(0),s&&e.current.play())},[a,s]),P.jsxs("div",{className:"music-handler-container",children:[P.jsxs("audio",{ref:e,autoPlay:!1,loop:o,onTimeUpdate:p,onLoadedMetadata:v,onEnded:w,children:[P.jsx("source",{src:a,type:"audio/mp3"}),"Your browser does not support the audio element."]}),P.jsxs("div",{className:"audio-controls",children:[P.jsx("button",{className:"audio-button",onClick:y,children:s?P.jsx(Wu,{className:"text-orange-500"}):P.jsx(Hu,{className:"text-orange-500"})}),P.jsx("button",{className:"audio-button",onClick:c,children:P.jsx(Qu,{className:o?"text-blue-400":"text-orange-500"})})]}),P.jsx("div",{className:"progress-bar-container",onClick:f,children:P.jsx("div",{className:"progress-bar",style:{width:`${t}%`}})})]})}function Xu(a){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},child:[]}]})(a)}function Zu(a){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"},child:[]}]})(a)}function Ju(a){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},child:[]},{tag:"path",attr:{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},child:[]}]})(a)}function ap(a){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},child:[]},{tag:"path",attr:{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},child:[]}]})(a)}function ep({verse:a,selectedLanguage:e,verses_g:t}){const[n,r]=X.useState(t),[i,s]=X.useState(t.chapter_id),[h,o]=X.useState(a),l=e,y=v=>{const f=n.find(w=>w.verse_number===v);o(f)};X.useEffect(()=>{const v=hl.filter(f=>f.chapter_id===i);v.length>0&&(r(v),o(v[0]))},[i]);const c=()=>{const v=n.find(f=>f.verse_number===h.verse_number+1);Object.keys(n).length!==h.verse_number&&o(v)},p=()=>{const v=n.find(f=>f.verse_number===h.verse_number-1);h.verse_number!==1&&o(v)};return P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"h-10  w-[90%] flex items-center justif text-orange-500 text-lg",children:P.jsx("div",{className:"flex-grow text-center font-bold",children:`BG ${h.chapter_id+"."+h.verse_number}`})}),P.jsx("div",{className:"w-[100%] m-1 h-[13rem] text-lg text-orange-500 font-semibold bg-white shadow-sm rounded-lg px-5 py-4 transition-transform transform overflow-hidden items-start flex flex-col music-handler-container",children:h!==null?l==="Sanskrit"?h.text.split(`

`).map((v,f)=>P.jsx("p",{children:v},f)):h.transliteration.split(`
`).map((v,f)=>P.jsx("p",{children:v},f)):"run into issue"}),P.jsx("br",{}),h!==null?P.jsx("div",{className:"flex flex-wrap justify-center gap-1 mb-5 ",children:P.jsx(qu,{url:h.Play})}):"music handler not working",P.jsxs("p",{className:"text-orange-500 m-1 font-bold text-center text-xl flex",children:[P.jsx(Ju,{className:"mt-1.5 mr-2",onClick:()=>{h.chapter_id>1&&s(h.chapter_id-1)}}),`Chapter ${h.chapter_id}`,P.jsx(ap,{className:"mt-1.5 ml-2",onClick:()=>{h.chapter_id>0&&h.chapter_id<18&&s(h.chapter_id+1)}})]}),P.jsxs("div",{className:"flex text-orange-500 font-semibold text-center text-x items-center mb-1",children:[P.jsx(Xu,{className:"mr-2 cursor-pointer hover:scale-110",onClick:()=>p(),size:20}),P.jsx("p",{className:"",children:`Verse ${h.verse_number}`}),P.jsx(Zu,{className:"ml-2 cursor-pointer hover:scale-110",onClick:()=>c(),size:20})]}),P.jsx("div",{className:"grid grid-cols-6 gap-1 w-[50%] mx-auto mb-5 ",children:n.map((v,f)=>P.jsx("span",{onClick:()=>y(v.verse_number),className:`text-orange-500 px-1 py-1 font-bold text-center text-l border border-orange-300 ${h.verse_number===v.verse_number?"bg-orange-500 text-white":"text-orange-500"} hover:scale-110`,children:v.verse_number},f))})]})}function tp({chapter:a,selectedLanguage:e}){const[t,n]=X.useState({}),r=()=>{window.location.reload()},i=hl.filter((h,o)=>h.chapter_id===a+1),s=h=>{n(h)};return P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"absolute left-0 text-orange-500 text-lg m-1 px-4 py-2 cursor-pointer hover:scale-105 hover:bg-gray-50",children:P.jsx(Gu,{onClick:r})}),Object.keys(t).length===0?i.map((h,o)=>P.jsx("p",{onClick:()=>s(h),className:"w-[95%] max-w-md h-auto m-1 text-orange-500 font-semibold bg-white border border-gray-300 shadow-sm text-left px-4 py-4 cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-50 overflow-hidden",children:e==="Sanskrit"?h.text.split(`

`).map((l,y)=>P.jsx("p",{children:l},y)):h.transliteration.split(`
`).map((l,y)=>P.jsx("p",{children:l},y))},o)):P.jsx(P.Fragment,{children:P.jsx(ep,{verse:t,selectedLanguage:e,verses_g:i})})]})}function np({onLanguageChange:a}){return P.jsx(P.Fragment,{children:P.jsx("div",{className:"flex mb-2",children:P.jsxs("div",{className:"flex flex-grow text-center font-bold",children:[P.jsx("button",{className:"w-full max-w-xs h-auto m-1 text-orange-500 bg-white border border-gray-300 shadow-sm rounded-lg text-left px-4 py-2 cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-50 overflow-hidden",onClick:()=>{a("Sanskrit")},children:"Sanskrit"}),P.jsx("button",{className:"w-full max-w-xs h-auto m-1 text-orange-500 bg-white border border-gray-300 shadow-sm rounded-lg text-left px-4 py-2 cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-50 overflow-hidden",onClick:()=>{a("English")},children:"English"})]})})})}const rp=()=>{const[a,e]=X.useState(null),[t,n]=X.useState("Sanskrit"),r=s=>{e(s)},i=s=>{n(s)};return P.jsxs(P.Fragment,{children:[P.jsx(np,{onLanguageChange:i}),a===null?Mu.map((s,h)=>P.jsxs("p",{className:"w-full max-w-xs h-auto m-1 text-orange-500 bg-white border border-gray-300 shadow-sm rounded-lg text-left px-4 py-2 cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-50 overflow-hidden",onClick:()=>r(h),style:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:[P.jsx("span",{className:"font-semibold",children:s.chapter_number})," -"," ",t==="Sanskrit"?s.name:s.name_transliterated]},h)):P.jsx(tp,{chapter:a,selectedLanguage:t})]})};function ip(){return P.jsx("div",{className:"flex flex-col items-center",children:P.jsx(rp,{})})}sl(document.getElementById("root")).render(P.jsx(X.StrictMode,{children:P.jsx(ip,{})}));
