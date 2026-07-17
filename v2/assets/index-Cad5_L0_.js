(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Sh={exports:{}},Wo={};var t_;function ly(){if(t_)return Wo;t_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=e,Wo.jsx=i,Wo.jsxs=i,Wo}var n_;function cy(){return n_||(n_=1,Sh.exports=ly()),Sh.exports}var Q=cy(),yh={exports:{}},lt={};var i_;function uy(){if(i_)return lt;i_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(N,B,J){this.props=N,this.context=B,this.refs=M,this.updater=J||T}x.prototype.isReactComponent={},x.prototype.setState=function(N,B){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,B,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=x.prototype;function H(N,B,J){this.props=N,this.context=B,this.refs=M,this.updater=J||T}var C=H.prototype=new F;C.constructor=H,w(C,x.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(N,B,J){var ye=J.ref;return{$$typeof:r,type:N,key:B,ref:ye!==void 0?ye:null,props:J}}function k(N,B){return D(N.type,B,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function q(N){var B={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(J){return B[J]})}var te=/\/+/g;function ne(N,B){return typeof N=="object"&&N!==null&&N.key!=null?q(""+N.key):B.toString(36)}function j(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(U,U):(N.status="pending",N.then(function(B){N.status==="pending"&&(N.status="fulfilled",N.value=B)},function(B){N.status==="pending"&&(N.status="rejected",N.reason=B)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,B,J,ye,Le){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(ie){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case r:case e:Se=!0;break;case v:return Se=N._init,P(Se(N._payload),B,J,ye,Le)}}if(Se)return Le=Le(N),Se=ye===""?"."+ne(N,0):ye,I(Le)?(J="",Se!=null&&(J=Se.replace(te,"$&/")+"/"),P(Le,B,J,"",function(tt){return tt})):Le!=null&&(V(Le)&&(Le=k(Le,J+(Le.key==null||N&&N.key===Le.key?"":(""+Le.key).replace(te,"$&/")+"/")+Se)),B.push(Le)),1;Se=0;var Te=ye===""?".":ye+":";if(I(N))for(var Ve=0;Ve<N.length;Ve++)ye=N[Ve],ie=Te+ne(ye,Ve),Se+=P(ye,B,J,ie,Le);else if(Ve=E(N),typeof Ve=="function")for(N=Ve.call(N),Ve=0;!(ye=N.next()).done;)ye=ye.value,ie=Te+ne(ye,Ve++),Se+=P(ye,B,J,ie,Le);else if(ie==="object"){if(typeof N.then=="function")return P(j(N),B,J,ye,Le);throw B=String(N),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return Se}function z(N,B,J){if(N==null)return N;var ye=[],Le=0;return P(N,ye,"","",function(ie){return B.call(J,ie,Le++)}),ye}function ae(N){if(N._status===-1){var B=N._result;B=B(),B.then(function(J){(N._status===0||N._status===-1)&&(N._status=1,N._result=J)},function(J){(N._status===0||N._status===-1)&&(N._status=2,N._result=J)}),N._status===-1&&(N._status=0,N._result=B)}if(N._status===1)return N._result.default;throw N._result}var _e=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Ee={map:z,forEach:function(N,B,J){z(N,function(){B.apply(this,arguments)},J)},count:function(N){var B=0;return z(N,function(){B++}),B},toArray:function(N){return z(N,function(B){return B})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return lt.Activity=S,lt.Children=Ee,lt.Component=x,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=H,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,lt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},lt.cache=function(N){return function(){return N.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(N,B,J){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ye=w({},N.props),Le=N.key;if(B!=null)for(ie in B.key!==void 0&&(Le=""+B.key),B)!b.call(B,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&B.ref===void 0||(ye[ie]=B[ie]);var ie=arguments.length-2;if(ie===1)ye.children=J;else if(1<ie){for(var Se=Array(ie),Te=0;Te<ie;Te++)Se[Te]=arguments[Te+2];ye.children=Se}return D(N.type,Le,ye)},lt.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},lt.createElement=function(N,B,J){var ye,Le={},ie=null;if(B!=null)for(ye in B.key!==void 0&&(ie=""+B.key),B)b.call(B,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Le[ye]=B[ye]);var Se=arguments.length-2;if(Se===1)Le.children=J;else if(1<Se){for(var Te=Array(Se),Ve=0;Ve<Se;Ve++)Te[Ve]=arguments[Ve+2];Le.children=Te}if(N&&N.defaultProps)for(ye in Se=N.defaultProps,Se)Le[ye]===void 0&&(Le[ye]=Se[ye]);return D(N,ie,Le)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(N){return{$$typeof:p,render:N}},lt.isValidElement=V,lt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ae}},lt.memo=function(N,B){return{$$typeof:d,type:N,compare:B===void 0?null:B}},lt.startTransition=function(N){var B=O.T,J={};O.T=J;try{var ye=N(),Le=O.S;Le!==null&&Le(J,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(U,_e)}catch(ie){_e(ie)}finally{B!==null&&J.types!==null&&(B.types=J.types),O.T=B}},lt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},lt.use=function(N){return O.H.use(N)},lt.useActionState=function(N,B,J){return O.H.useActionState(N,B,J)},lt.useCallback=function(N,B){return O.H.useCallback(N,B)},lt.useContext=function(N){return O.H.useContext(N)},lt.useDebugValue=function(){},lt.useDeferredValue=function(N,B){return O.H.useDeferredValue(N,B)},lt.useEffect=function(N,B){return O.H.useEffect(N,B)},lt.useEffectEvent=function(N){return O.H.useEffectEvent(N)},lt.useId=function(){return O.H.useId()},lt.useImperativeHandle=function(N,B,J){return O.H.useImperativeHandle(N,B,J)},lt.useInsertionEffect=function(N,B){return O.H.useInsertionEffect(N,B)},lt.useLayoutEffect=function(N,B){return O.H.useLayoutEffect(N,B)},lt.useMemo=function(N,B){return O.H.useMemo(N,B)},lt.useOptimistic=function(N,B){return O.H.useOptimistic(N,B)},lt.useReducer=function(N,B,J){return O.H.useReducer(N,B,J)},lt.useRef=function(N){return O.H.useRef(N)},lt.useState=function(N){return O.H.useState(N)},lt.useSyncExternalStore=function(N,B,J){return O.H.useSyncExternalStore(N,B,J)},lt.useTransition=function(){return O.H.useTransition()},lt.version="19.2.1",lt}var a_;function ip(){return a_||(a_=1,yh.exports=uy()),yh.exports}var mt=ip(),Mh={exports:{}},qo={},Eh={exports:{}},bh={};var s_;function fy(){return s_||(s_=1,(function(r){function e(P,z){var ae=P.length;P.push(z);e:for(;0<ae;){var _e=ae-1>>>1,Ee=P[_e];if(0<l(Ee,z))P[_e]=z,P[ae]=Ee,ae=_e;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var z=P[0],ae=P.pop();if(ae!==z){P[0]=ae;e:for(var _e=0,Ee=P.length,N=Ee>>>1;_e<N;){var B=2*(_e+1)-1,J=P[B],ye=B+1,Le=P[ye];if(0>l(J,ae))ye<Ee&&0>l(Le,J)?(P[_e]=Le,P[ye]=ae,_e=ye):(P[_e]=J,P[B]=ae,_e=B);else if(ye<Ee&&0>l(Le,ae))P[_e]=Le,P[ye]=ae,_e=ye;else break e}}return z}function l(P,z){var ae=P.sortIndex-z.sortIndex;return ae!==0?ae:P.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,S=null,g=3,E=!1,T=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var z=i(d);z!==null;){if(z.callback===null)s(d);else if(z.startTime<=P)s(d),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(d)}}function I(P){if(w=!1,C(P),!T)if(i(m)!==null)T=!0,U||(U=!0,q());else{var z=i(d);z!==null&&j(I,z.startTime-P)}}var U=!1,O=-1,b=5,D=-1;function k(){return M?!0:!(r.unstable_now()-D<b)}function V(){if(M=!1,U){var P=r.unstable_now();D=P;var z=!0;try{e:{T=!1,w&&(w=!1,F(O),O=-1),E=!0;var ae=g;try{t:{for(C(P),S=i(m);S!==null&&!(S.expirationTime>P&&k());){var _e=S.callback;if(typeof _e=="function"){S.callback=null,g=S.priorityLevel;var Ee=_e(S.expirationTime<=P);if(P=r.unstable_now(),typeof Ee=="function"){S.callback=Ee,C(P),z=!0;break t}S===i(m)&&s(m),C(P)}else s(m);S=i(m)}if(S!==null)z=!0;else{var N=i(d);N!==null&&j(I,N.startTime-P),z=!1}}break e}finally{S=null,g=ae,E=!1}z=void 0}}finally{z?q():U=!1}}}var q;if(typeof H=="function")q=function(){H(V)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=V,q=function(){ne.postMessage(null)}}else q=function(){x(V,0)};function j(P,z){O=x(function(){P(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(P){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var ae=g;g=z;try{return P()}finally{g=ae}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ae=g;g=P;try{return z()}finally{g=ae}},r.unstable_scheduleCallback=function(P,z,ae){var _e=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?_e+ae:_e):ae=_e,P){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ae+Ee,P={id:v++,callback:z,priorityLevel:P,startTime:ae,expirationTime:Ee,sortIndex:-1},ae>_e?(P.sortIndex=ae,e(d,P),i(m)===null&&P===i(d)&&(w?(F(O),O=-1):w=!0,j(I,ae-_e))):(P.sortIndex=Ee,e(m,P),T||E||(T=!0,U||(U=!0,q()))),P},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(P){var z=g;return function(){var ae=g;g=z;try{return P.apply(this,arguments)}finally{g=ae}}}})(bh)),bh}var r_;function hy(){return r_||(r_=1,Eh.exports=fy()),Eh.exports}var Th={exports:{}},Xn={};var o_;function dy(){if(o_)return Xn;o_=1;var r=ip();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},Xn.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},Xn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Xn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Xn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Xn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Xn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Xn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Xn.requestFormReset=function(m){s.d.r(m)},Xn.unstable_batchedUpdates=function(m,d){return m(d)},Xn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Xn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Xn.version="19.2.1",Xn}var l_;function py(){if(l_)return Th.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Th.exports=dy(),Th.exports}var c_;function my(){if(c_)return qo;c_=1;var r=hy(),e=ip(),i=py();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),H=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var te=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===te?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case H:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:ne(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ne(t(n))}catch{}}return null}var j=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},_e=[],Ee=-1;function N(t){return{current:t}}function B(t){0>Ee||(t.current=_e[Ee],_e[Ee]=null,Ee--)}function J(t,n){Ee++,_e[Ee]=t.current,t.current=n}var ye=N(null),Le=N(null),ie=N(null),Se=N(null);function Te(t,n){switch(J(ie,n),J(Le,t),J(ye,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b0(n),t=T0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B(ye),J(ye,t)}function Ve(){B(ye),B(Le),B(ie)}function tt(t){t.memoizedState!==null&&J(Se,t);var n=ye.current,a=T0(n,t.type);n!==a&&(J(Le,t),J(ye,a))}function Ke(t){Le.current===t&&(B(ye),B(Le)),Se.current===t&&(B(Se),Go._currentValue=ae)}var It,ut;function xt(t){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+t+ut}var St=!1;function ft(t,n){if(!t||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(de){var he=de}Reflect.construct(t,[],be)}else{try{be.call()}catch(de){he=de}t.call(be.prototype)}}else{try{throw Error()}catch(de){he=de}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(de){if(de&&he&&typeof de.stack=="string")return[de.stack,he.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var G=_.split(`
`),le=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===le.length)for(o=G.length-1,u=le.length-1;1<=o&&0<=u&&G[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==le[u]){var xe=`
`+G[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function an(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return xt("Activity");default:return""}}function Jt(t){try{var n="",a=null;do n+=an(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var kt=Object.prototype.hasOwnProperty,$t=r.unstable_scheduleCallback,Xt=r.unstable_cancelCallback,sn=r.unstable_shouldYield,Y=r.unstable_requestPaint,Nt=r.unstable_now,At=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,y=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,re=r.unstable_LowPriority,pe=r.unstable_IdlePriority,De=r.log,Oe=r.unstable_setDisableYieldValue,me=null,ge=null;function Ce(t){if(typeof De=="function"&&Oe(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(me,t)}catch{}}var ze=Math.clz32?Math.clz32:je,Ie=Math.log,Pe=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Ie(t)/Pe|0)|0}var Qe=256,it=262144,W=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ue(o):(_&=R,_!==0?u=Ue(_):a||(a=R&~t,a!==0&&(u=Ue(a))))):(R=o&~f,R!==0?u=Ue(R):_!==0?u=Ue(_):a||(a=o&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ne(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function se(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Re(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ot(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,le=t.hiddenUpdates;for(a=_&~a;0<a;){var xe=31-ze(a),be=1<<xe;R[xe]=0,G[xe]=-1;var he=le[xe];if(he!==null)for(le[xe]=null,xe=0;xe<he.length;xe++){var de=he[xe];de!==null&&(de.lane&=-536870913)}a&=~be}o!==0&&st(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function st(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function jt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ze(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Mn(t,n){var a=n&-n;return a=(a&42)!==0?1:Un(a),(a&(t.suspendedLanes|n))!==0?0:a}function Un(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Nn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gn(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:Z0(t.type))}function Cn(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var Zn=Math.random().toString(36).slice(2),un="__reactFiber$"+Zn,dn="__reactProps$"+Zn,Vn="__reactContainer$"+Zn,Ss="__reactEvents$"+Zn,fl="__reactListeners$"+Zn,hl="__reactHandles$"+Zn,ys="__reactResources$"+Zn,Oa="__reactMarker$"+Zn;function Pa(t){delete t[un],delete t[dn],delete t[Ss],delete t[fl],delete t[hl]}function sa(t){var n=t[un];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=U0(t);t!==null;){if(a=t[un])return a;t=U0(t)}return n}t=a,a=t.parentNode}return null}function ra(t){if(t=t[un]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ms(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ia(t){var n=t[ys];return n||(n=t[ys]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Oa]=!0}var dl=new Set,A={};function Z(t,n){fe(t,n),fe(t+"Capture",n)}function fe(t,n){for(A[t]=n,t=0;t<n.length;t++)dl.add(n[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},He={};function Xe(t){return kt.call(He,t)?!0:kt.call(ue,t)?!1:ce.test(t)?He[t]=!0:(ue[t]=!0,!1)}function Be(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function We(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dt(t){if(!t._valueTracker){var n=ht(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ht(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bt=/[\n"\\]/g;function zt(t){return t.replace(Bt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,a,o,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?yt(t,_,$e(n)):a!=null?yt(t,_,$e(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function kn(t,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Dt(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Dt(t)}function yt(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function En(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ci(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function Ni(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(j(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Dt(t)}function ui(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ft.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Oi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&on(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&on(t,f,n[f])}function Pt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ba=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Es(t){return Ba.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function oa(){}var gu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $s=null,er=null;function Ep(t){var n=ra(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[dn]||null;if(!u)throw Error(s(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&rn(o)}break e;case"textarea":ci(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&En(t,!!a.multiple,n,!1)}}}var vu=!1;function bp(t,n,a){if(vu)return t(n,a);vu=!0;try{var o=t(n);return o}finally{if(vu=!1,($s!==null||er!==null)&&(ec(),$s&&(n=$s,t=er,er=$s=null,Ep(n),t)))for(n=0;n<t.length;n++)Ep(t[n])}}function io(t,n){var a=t.stateNode;if(a===null)return null;var o=a[dn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(la)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){xu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{xu=!1}var za=null,Su=null,pl=null;function Tp(){if(pl)return pl;var t,n=Su,a=n.length,o,u="value"in za?za.value:za.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return pl=u.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Ap(){return!1}function Jn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?gl:Ap,this.isPropagationStopped=Ap,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Jn(bs),so=S({},bs,{view:0,detail:0}),rx=Jn(so),yu,Mu,ro,vl=S({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(yu=t.screenX-ro.screenX,Mu=t.screenY-ro.screenY):Mu=yu=0,ro=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),Rp=Jn(vl),ox=S({},vl,{dataTransfer:0}),lx=Jn(ox),cx=S({},so,{relatedTarget:0}),Eu=Jn(cx),ux=S({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=Jn(ux),hx=S({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Jn(hx),px=S({},bs,{data:0}),Cp=Jn(px),mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=_x[t])?!!n[t]:!1}function bu(){return vx}var xx=S({},so,{key:function(t){if(t.key){var n=mx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sx=Jn(xx),yx=S({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Jn(yx),Mx=S({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Ex=Jn(Mx),bx=S({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Jn(bx),Ax=S({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=Jn(Ax),Cx=S({},bs,{newState:0,oldState:0}),wx=Jn(Cx),Dx=[9,13,27,32],Tu=la&&"CompositionEvent"in window,oo=null;la&&"documentMode"in document&&(oo=document.documentMode);var Lx=la&&"TextEvent"in window&&!oo,Dp=la&&(!Tu||oo&&8<oo&&11>=oo),Lp=" ",Up=!1;function Np(t,n){switch(t){case"keyup":return Dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tr=!1;function Ux(t,n){switch(t){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Up=!0,Lp);case"textInput":return t=n.data,t===Lp&&Up?null:t;default:return null}}function Nx(t,n){if(tr)return t==="compositionend"||!Tu&&Np(t,n)?(t=Tp(),pl=Su=za=null,tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ox[t.type]:n==="textarea"}function Ip(t,n,a,o){$s?er?er.push(o):er=[o]:$s=o,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var lo=null,co=null;function Px(t){v0(t,0)}function xl(t){var n=Ms(t);if(rn(n))return t}function Bp(t,n){if(t==="change")return n}var zp=!1;if(la){var Au;if(la){var Ru="oninput"in document;if(!Ru){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Ru=typeof Fp.oninput=="function"}Au=Ru}else Au=!1;zp=Au&&(!document.documentMode||9<document.documentMode)}function Hp(){lo&&(lo.detachEvent("onpropertychange",Gp),co=lo=null)}function Gp(t){if(t.propertyName==="value"&&xl(co)){var n=[];Ip(n,co,t,_u(t)),bp(Px,n)}}function Ix(t,n,a){t==="focusin"?(Hp(),lo=n,co=a,lo.attachEvent("onpropertychange",Gp)):t==="focusout"&&Hp()}function Bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(co)}function zx(t,n){if(t==="click")return xl(n)}function Fx(t,n){if(t==="input"||t==="change")return xl(n)}function Hx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:Hx;function uo(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!kt.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,n){var a=Vp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vp(a)}}function Xp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Gx=la&&"documentMode"in document&&11>=document.documentMode,nr=null,wu=null,fo=null,Du=!1;function qp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||nr==null||nr!==Kt(o)||(o=nr,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=oc(wu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=nr)))}function Ts(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ir={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Lu={},Yp={};la&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function As(t){if(Lu[t])return Lu[t];if(!ir[t])return t;var n=ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Yp)return Lu[t]=n[a];return t}var Zp=As("animationend"),jp=As("animationiteration"),Kp=As("animationstart"),Vx=As("transitionrun"),kx=As("transitionstart"),Xx=As("transitioncancel"),Qp=As("transitionend"),Jp=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Pi(t,n){Jp.set(t,n),Z(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ei=[],ar=0,Nu=0;function yl(){for(var t=ar,n=Nu=ar=0;n<t;){var a=Ei[n];Ei[n++]=null;var o=Ei[n];Ei[n++]=null;var u=Ei[n];Ei[n++]=null;var f=Ei[n];if(Ei[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&$p(a,u,f)}}function Ml(t,n,a,o){Ei[ar++]=t,Ei[ar++]=n,Ei[ar++]=a,Ei[ar++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ou(t,n,a,o){return Ml(t,n,a,o),El(t)}function Rs(t,n){return Ml(t,null,null,n),El(t)}function $p(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ze(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function El(t){if(50<Oo)throw Oo=0,Xf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var sr={};function Wx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,n,a,o){return new Wx(t,n,a,o)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,n){var a=t.alternate;return a===null?(a=hi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function em(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Pu(t)&&(_=1);else if(typeof t=="string")_=KS(t,a,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=hi(31,a,n,u),t.elementType=D,t.lanes=f,t;case w:return Cs(a.children,u,f,n);case M:_=8,u|=24;break;case x:return t=hi(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case I:return t=hi(13,a,n,u),t.elementType=I,t.lanes=f,t;case U:return t=hi(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:_=10;break e;case F:_=9;break e;case C:_=11;break e;case O:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=hi(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Cs(t,n,a,o){return t=hi(7,t,o,n),t.lanes=a,t}function Iu(t,n,a){return t=hi(6,t,null,n),t.lanes=a,t}function tm(t){var n=hi(18,null,null,0);return n.stateNode=t,n}function Bu(t,n,a){return n=hi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var nm=new WeakMap;function bi(t,n){if(typeof t=="object"&&t!==null){var a=nm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},nm.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var rr=[],or=0,Tl=null,ho=0,Ti=[],Ai=0,Fa=null,Wi=1,qi="";function ua(t,n){rr[or++]=ho,rr[or++]=Tl,Tl=t,ho=n}function im(t,n,a){Ti[Ai++]=Wi,Ti[Ai++]=qi,Ti[Ai++]=Fa,Fa=t;var o=Wi;t=qi;var u=32-ze(o)-1;o&=~(1<<u),a+=1;var f=32-ze(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Wi=1<<32-ze(n)+u|a<<u|o,qi=f+t}else Wi=1<<f|a<<u|o,qi=t}function zu(t){t.return!==null&&(ua(t,1),im(t,1,0))}function Fu(t){for(;t===Tl;)Tl=rr[--or],rr[or]=null,ho=rr[--or],rr[or]=null;for(;t===Fa;)Fa=Ti[--Ai],Ti[Ai]=null,qi=Ti[--Ai],Ti[Ai]=null,Wi=Ti[--Ai],Ti[Ai]=null}function am(t,n){Ti[Ai++]=Wi,Ti[Ai++]=qi,Ti[Ai++]=Fa,Wi=n.id,qi=n.overflow,Fa=t}var On=null,en=null,Rt=!1,Ha=null,Ri=!1,Hu=Error(s(519));function Ga(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(bi(n,t)),Hu}function sm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[un]=t,n[dn]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)Et(Io[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),kn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||M0(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||Ga(t,!0)}function rm(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:On=On.return}}function lr(t){if(t!==On)return!1;if(!Rt)return rm(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sh(t.type,t.memoizedProps)),a=!a),a&&en&&Ga(t),rm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=L0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=L0(t)}else n===27?(n=en,ts(t.type)?(t=uh,uh=null,en=t):en=n):en=On?wi(t.stateNode.nextSibling):null;return!0}function ws(){en=On=null,Rt=!1}function Gu(){var t=Ha;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),Ha=null),t}function po(t){Ha===null?Ha=[t]:Ha.push(t)}var Vu=N(null),Ds=null,fa=null;function Va(t,n,a){J(Vu,n._currentValue),n._currentValue=a}function ha(t){t._currentValue=Vu.current,B(Vu)}function ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Xu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),ku(f.return,a,t),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),ku(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function cr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;fi(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===Se.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}u=u.return}t!==null&&Xu(n,t,a,o),n.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){Ds=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return om(Ds,t)}function Rl(t,n){return Ds===null&&Ls(t),om(t,n)}function om(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(t===null)throw Error(s(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return a}var qx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Yx=r.unstable_scheduleCallback,Zx=r.unstable_NormalPriority,_n={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new qx,data:new Map,refCount:0}}function mo(t){t.refCount--,t.refCount===0&&Yx(Zx,function(){t.controller.abort()})}var go=null,qu=0,ur=0,fr=null;function jx(t,n){if(go===null){var a=go=[];qu=0,ur=Kf(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(lm,lm),n}function lm(){if(--qu===0&&go!==null){fr!==null&&(fr.status="fulfilled");var t=go;go=null,ur=0,fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Kx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var cm=P.S;P.S=function(t,n){qg=Nt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jx(t,n),cm!==null&&cm(t,n)};var Us=N(null);function Yu(){var t=Us.current;return t!==null?t:Qt.pooledCache}function Cl(t,n){n===null?J(Us,Us.current):J(Us,n.pool)}function um(){var t=Yu();return t===null?null:{parent:_n._currentValue,pool:t}}var hr=Error(s(460)),Zu=Error(s(474)),wl=Error(s(542)),Dl={then:function(){}};function fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t;default:if(typeof n.status=="string")n.then(oa,oa);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t}throw Os=n,hr}}function Ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,hr):a}}var Os=null;function dm(){if(Os===null)throw Error(s(459));var t=Os;return Os=null,t}function pm(t){if(t===hr||t===wl)throw Error(s(483))}var dr=null,_o=0;function Ll(t){var n=_o;return _o+=1,dr===null&&(dr=[]),hm(dr,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ul(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function mm(t){function n(ee,X){if(t){var oe=ee.deletions;oe===null?(ee.deletions=[X],ee.flags|=16):oe.push(X)}}function a(ee,X){if(!t)return null;for(;X!==null;)n(ee,X),X=X.sibling;return null}function o(ee){for(var X=new Map;ee!==null;)ee.key!==null?X.set(ee.key,ee):X.set(ee.index,ee),ee=ee.sibling;return X}function u(ee,X){return ee=ca(ee,X),ee.index=0,ee.sibling=null,ee}function f(ee,X,oe){return ee.index=oe,t?(oe=ee.alternate,oe!==null?(oe=oe.index,oe<X?(ee.flags|=67108866,X):oe):(ee.flags|=67108866,X)):(ee.flags|=1048576,X)}function _(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function R(ee,X,oe,Me){return X===null||X.tag!==6?(X=Iu(oe,ee.mode,Me),X.return=ee,X):(X=u(X,oe),X.return=ee,X)}function G(ee,X,oe,Me){var et=oe.type;return et===w?xe(ee,X,oe.props.children,Me,oe.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&Ns(et)===X.type)?(X=u(X,oe.props),vo(X,oe),X.return=ee,X):(X=bl(oe.type,oe.key,oe.props,null,ee.mode,Me),vo(X,oe),X.return=ee,X)}function le(ee,X,oe,Me){return X===null||X.tag!==4||X.stateNode.containerInfo!==oe.containerInfo||X.stateNode.implementation!==oe.implementation?(X=Bu(oe,ee.mode,Me),X.return=ee,X):(X=u(X,oe.children||[]),X.return=ee,X)}function xe(ee,X,oe,Me,et){return X===null||X.tag!==7?(X=Cs(oe,ee.mode,Me,et),X.return=ee,X):(X=u(X,oe),X.return=ee,X)}function be(ee,X,oe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Iu(""+X,ee.mode,oe),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return oe=bl(X.type,X.key,X.props,null,ee.mode,oe),vo(oe,X),oe.return=ee,oe;case T:return X=Bu(X,ee.mode,oe),X.return=ee,X;case b:return X=Ns(X),be(ee,X,oe)}if(j(X)||q(X))return X=Cs(X,ee.mode,oe,null),X.return=ee,X;if(typeof X.then=="function")return be(ee,Ll(X),oe);if(X.$$typeof===H)return be(ee,Rl(ee,X),oe);Ul(ee,X)}return null}function he(ee,X,oe,Me){var et=X!==null?X.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return et!==null?null:R(ee,X,""+oe,Me);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:return oe.key===et?G(ee,X,oe,Me):null;case T:return oe.key===et?le(ee,X,oe,Me):null;case b:return oe=Ns(oe),he(ee,X,oe,Me)}if(j(oe)||q(oe))return et!==null?null:xe(ee,X,oe,Me,null);if(typeof oe.then=="function")return he(ee,X,Ll(oe),Me);if(oe.$$typeof===H)return he(ee,X,Rl(ee,oe),Me);Ul(ee,oe)}return null}function de(ee,X,oe,Me,et){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ee=ee.get(oe)||null,R(X,ee,""+Me,et);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case E:return ee=ee.get(Me.key===null?oe:Me.key)||null,G(X,ee,Me,et);case T:return ee=ee.get(Me.key===null?oe:Me.key)||null,le(X,ee,Me,et);case b:return Me=Ns(Me),de(ee,X,oe,Me,et)}if(j(Me)||q(Me))return ee=ee.get(oe)||null,xe(X,ee,Me,et,null);if(typeof Me.then=="function")return de(ee,X,oe,Ll(Me),et);if(Me.$$typeof===H)return de(ee,X,oe,Rl(X,Me),et);Ul(X,Me)}return null}function Ye(ee,X,oe,Me){for(var et=null,Lt=null,Ze=X,pt=X=0,Tt=null;Ze!==null&&pt<oe.length;pt++){Ze.index>pt?(Tt=Ze,Ze=null):Tt=Ze.sibling;var Ut=he(ee,Ze,oe[pt],Me);if(Ut===null){Ze===null&&(Ze=Tt);break}t&&Ze&&Ut.alternate===null&&n(ee,Ze),X=f(Ut,X,pt),Lt===null?et=Ut:Lt.sibling=Ut,Lt=Ut,Ze=Tt}if(pt===oe.length)return a(ee,Ze),Rt&&ua(ee,pt),et;if(Ze===null){for(;pt<oe.length;pt++)Ze=be(ee,oe[pt],Me),Ze!==null&&(X=f(Ze,X,pt),Lt===null?et=Ze:Lt.sibling=Ze,Lt=Ze);return Rt&&ua(ee,pt),et}for(Ze=o(Ze);pt<oe.length;pt++)Tt=de(Ze,ee,pt,oe[pt],Me),Tt!==null&&(t&&Tt.alternate!==null&&Ze.delete(Tt.key===null?pt:Tt.key),X=f(Tt,X,pt),Lt===null?et=Tt:Lt.sibling=Tt,Lt=Tt);return t&&Ze.forEach(function(rs){return n(ee,rs)}),Rt&&ua(ee,pt),et}function nt(ee,X,oe,Me){if(oe==null)throw Error(s(151));for(var et=null,Lt=null,Ze=X,pt=X=0,Tt=null,Ut=oe.next();Ze!==null&&!Ut.done;pt++,Ut=oe.next()){Ze.index>pt?(Tt=Ze,Ze=null):Tt=Ze.sibling;var rs=he(ee,Ze,Ut.value,Me);if(rs===null){Ze===null&&(Ze=Tt);break}t&&Ze&&rs.alternate===null&&n(ee,Ze),X=f(rs,X,pt),Lt===null?et=rs:Lt.sibling=rs,Lt=rs,Ze=Tt}if(Ut.done)return a(ee,Ze),Rt&&ua(ee,pt),et;if(Ze===null){for(;!Ut.done;pt++,Ut=oe.next())Ut=be(ee,Ut.value,Me),Ut!==null&&(X=f(Ut,X,pt),Lt===null?et=Ut:Lt.sibling=Ut,Lt=Ut);return Rt&&ua(ee,pt),et}for(Ze=o(Ze);!Ut.done;pt++,Ut=oe.next())Ut=de(Ze,ee,pt,Ut.value,Me),Ut!==null&&(t&&Ut.alternate!==null&&Ze.delete(Ut.key===null?pt:Ut.key),X=f(Ut,X,pt),Lt===null?et=Ut:Lt.sibling=Ut,Lt=Ut);return t&&Ze.forEach(function(oy){return n(ee,oy)}),Rt&&ua(ee,pt),et}function Yt(ee,X,oe,Me){if(typeof oe=="object"&&oe!==null&&oe.type===w&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case E:e:{for(var et=oe.key;X!==null;){if(X.key===et){if(et=oe.type,et===w){if(X.tag===7){a(ee,X.sibling),Me=u(X,oe.props.children),Me.return=ee,ee=Me;break e}}else if(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&Ns(et)===X.type){a(ee,X.sibling),Me=u(X,oe.props),vo(Me,oe),Me.return=ee,ee=Me;break e}a(ee,X);break}else n(ee,X);X=X.sibling}oe.type===w?(Me=Cs(oe.props.children,ee.mode,Me,oe.key),Me.return=ee,ee=Me):(Me=bl(oe.type,oe.key,oe.props,null,ee.mode,Me),vo(Me,oe),Me.return=ee,ee=Me)}return _(ee);case T:e:{for(et=oe.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===oe.containerInfo&&X.stateNode.implementation===oe.implementation){a(ee,X.sibling),Me=u(X,oe.children||[]),Me.return=ee,ee=Me;break e}else{a(ee,X);break}else n(ee,X);X=X.sibling}Me=Bu(oe,ee.mode,Me),Me.return=ee,ee=Me}return _(ee);case b:return oe=Ns(oe),Yt(ee,X,oe,Me)}if(j(oe))return Ye(ee,X,oe,Me);if(q(oe)){if(et=q(oe),typeof et!="function")throw Error(s(150));return oe=et.call(oe),nt(ee,X,oe,Me)}if(typeof oe.then=="function")return Yt(ee,X,Ll(oe),Me);if(oe.$$typeof===H)return Yt(ee,X,Rl(ee,oe),Me);Ul(ee,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,X!==null&&X.tag===6?(a(ee,X.sibling),Me=u(X,oe),Me.return=ee,ee=Me):(a(ee,X),Me=Iu(oe,ee.mode,Me),Me.return=ee,ee=Me),_(ee)):a(ee,X)}return function(ee,X,oe,Me){try{_o=0;var et=Yt(ee,X,oe,Me);return dr=null,et}catch(Ze){if(Ze===hr||Ze===wl)throw Ze;var Lt=hi(29,Ze,null,ee.mode);return Lt.lanes=Me,Lt.return=ee,Lt}finally{}}}var Ps=mm(!0),gm=mm(!1),ka=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),$p(t,null,a),n}return Ml(t,o,n,a),El(t)}function xo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,jt(t,a)}}function Qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ju=!1;function So(){if(Ju){var t=fr;if(t!==null)throw t}}function yo(t,n,a,o){Ju=!1;var u=t.updateQueue;ka=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,le=G.next;G.next=null,_===null?f=le:_.next=le,_=G;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,R=xe.lastBaseUpdate,R!==_&&(R===null?xe.firstBaseUpdate=le:R.next=le,xe.lastBaseUpdate=G))}if(f!==null){var be=u.baseState;_=0,xe=le=G=null,R=f;do{var he=R.lane&-536870913,de=he!==R.lane;if(de?(bt&he)===he:(o&he)===he){he!==0&&he===ur&&(Ju=!0),xe!==null&&(xe=xe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ye=t,nt=R;he=n;var Yt=a;switch(nt.tag){case 1:if(Ye=nt.payload,typeof Ye=="function"){be=Ye.call(Yt,be,he);break e}be=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=nt.payload,he=typeof Ye=="function"?Ye.call(Yt,be,he):Ye,he==null)break e;be=S({},be,he);break e;case 2:ka=!0}}he=R.callback,he!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[he]:de.push(he))}else de={lane:he,tag:R.tag,payload:R.payload,callback:R.callback,next:null},xe===null?(le=xe=de,G=be):xe=xe.next=de,_|=he;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;de=R,R=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);xe===null&&(G=be),u.baseState=G,u.firstBaseUpdate=le,u.lastBaseUpdate=xe,f===null&&(u.shared.lanes=0),Ka|=_,t.lanes=_,t.memoizedState=be}}function _m(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function vm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_m(a[t],n)}var pr=N(null),Nl=N(0);function xm(t,n){t=ya,J(Nl,t),J(pr,n),ya=t|n.baseLanes}function $u(){J(Nl,ya),J(pr,pr.current)}function ef(){ya=Nl.current,B(pr),B(Nl)}var di=N(null),Ci=null;function qa(t){var n=t.alternate;J(pn,pn.current&1),J(di,t),Ci===null&&(n===null||pr.current!==null||n.memoizedState!==null)&&(Ci=t)}function tf(t){J(pn,pn.current),J(di,t),Ci===null&&(Ci=t)}function Sm(t){t.tag===22?(J(pn,pn.current),J(di,t),Ci===null&&(Ci=t)):Ya()}function Ya(){J(pn,pn.current),J(di,di.current)}function pi(t){B(di),Ci===t&&(Ci=null),B(pn)}var pn=N(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,dt=null,Wt=null,vn=null,Pl=!1,mr=!1,Is=!1,Il=0,Mo=0,gr=null,Qx=0;function fn(){throw Error(s(321))}function nf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function af(t,n,a,o,u,f){return da=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?ig:xf,Is=!1,f=a(o,u),Is=!1,mr&&(f=Mm(n,a,o,u)),ym(t),f}function ym(t){P.H=To;var n=Wt!==null&&Wt.next!==null;if(da=0,vn=Wt=dt=null,Pl=!1,Mo=0,gr=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&Al(t)&&(xn=!0))}function Mm(t,n,a,o){dt=t;var u=0;do{if(mr&&(gr=null),Mo=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,vn=Wt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=ag,f=n(a,o)}while(mr);return f}function Jx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Eo(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(dt.flags|=1024),n}function sf(){var t=Il!==0;return Il=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function of(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}da=0,vn=Wt=dt=null,mr=!1,Mo=Il=0,gr=null}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?dt.memoizedState=vn=t:vn=vn.next=t,vn}function mn(){if(Wt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=vn===null?dt.memoizedState:vn.next;if(n!==null)vn=n,Wt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},vn===null?dt.memoizedState=vn=t:vn=vn.next=t}return vn}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var n=Mo;return Mo+=1,gr===null&&(gr=[]),t=hm(gr,t,n),n=dt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?ig:xf),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===H)return Pn(t)}throw Error(s(438,String(t)))}function lf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function pa(t,n){return typeof n=="function"?n(t):n}function Fl(t){var n=mn();return cf(n,Wt,t)}function cf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,G=null,le=n,xe=!1;do{var be=le.lane&-536870913;if(be!==le.lane?(bt&be)===be:(da&be)===be){var he=le.revertLane;if(he===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),be===ur&&(xe=!0);else if((da&he)===he){le=le.next,he===ur&&(xe=!0);continue}else be={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(R=G=be,_=f):G=G.next=be,dt.lanes|=he,Ka|=he;be=le.action,Is&&a(f,be),f=le.hasEagerState?le.eagerState:a(f,be)}else he={lane:be,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(R=G=he,_=f):G=G.next=he,dt.lanes|=be,Ka|=be;le=le.next}while(le!==null&&le!==n);if(G===null?_=f:G.next=R,!fi(f,t.memoizedState)&&(xn=!0,xe&&(a=fr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function uf(t){var n=mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);fi(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Em(t,n,a){var o=dt,u=mn(),f=Rt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!fi((Wt||u).memoizedState,a);if(_&&(u.memoizedState=a,xn=!0),u=u.queue,df(Am.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,_r(9,{destroy:void 0},Tm.bind(null,o,u,a,n),null),Qt===null)throw Error(s(349));f||(da&127)!==0||bm(o,n,a)}return a}function bm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Bl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Tm(t,n,a,o){n.value=a,n.getSnapshot=o,Rm(n)&&Cm(t)}function Am(t,n,a){return a(function(){Rm(n)&&Cm(t)})}function Rm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function Cm(t){var n=Rs(t,2);n!==null&&ii(n,t,2)}function ff(t){var n=jn();if(typeof t=="function"){var a=t;if(t=a(),Is){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function wm(t,n,a,o){return t.baseState=a,cf(t,Wt,typeof o=="function"?o:pa)}function $x(t,n,a,o,u){if(Vl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Dm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var R=a(u,o),G=P.S;G!==null&&G(_,R),Lm(t,n,R)}catch(le){hf(t,n,le)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(u,o),Lm(t,n,f)}catch(le){hf(t,n,le)}}function Lm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Um(t,n,o)},function(o){return hf(t,n,o)}):Um(t,n,a)}function Um(t,n,a){n.status="fulfilled",n.value=a,Nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Dm(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}t.action=null}function Nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Om(t,n){return n}function Pm(t,n){if(Rt){var a=Qt.formState;if(a!==null){e:{var o=dt;if(Rt){if(en){t:{for(var u=en,f=Ri;u.nodeType!==8;){if(!f){u=null;break t}if(u=wi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){en=wi(u.nextSibling),o=u.data==="F!";break e}}Ga(o)}o=!1}o&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},a.queue=o,a=eg.bind(null,dt,o),o.dispatch=a,o=ff(!1),f=vf.bind(null,dt,!1,o.queue),o=jn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=$x.bind(null,dt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Im(t){var n=mn();return Bm(n,Wt,t)}function Bm(t,n,a){if(n=cf(t,n,Om)[0],t=Fl(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(_){throw _===hr?wl:_}else o=n;n=mn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,_r(9,{destroy:void 0},eS.bind(null,u,a),null)),[o,f,t]}function eS(t,n){t.action=n}function zm(t){var n=mn(),a=Wt;if(a!==null)return Bm(n,a,t);mn(),n=n.memoizedState,a=mn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function _r(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Bl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Fm(){return mn().memoizedState}function Hl(t,n,a,o){var u=jn();dt.flags|=t,u.memoizedState=_r(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(t,n,a,o){var u=mn();o=o===void 0?null:o;var f=u.memoizedState.inst;Wt!==null&&o!==null&&nf(o,Wt.memoizedState.deps)?u.memoizedState=_r(n,f,a,o):(dt.flags|=t,u.memoizedState=_r(1|n,f,a,o))}function Hm(t,n){Hl(8390656,8,t,n)}function df(t,n){Gl(2048,8,t,n)}function tS(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Bl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Gm(t){var n=mn().memoizedState;return tS({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Vm(t,n){return Gl(4,2,t,n)}function km(t,n){return Gl(4,4,t,n)}function Xm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Wm(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,Xm.bind(null,n,t),a)}function pf(){}function qm(t,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Ym(t,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=t(),Is){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function mf(t,n,a){return a===void 0||(da&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Zg(),dt.lanes|=t,Ka|=t,a)}function Zm(t,n,a,o){return fi(a,n)?a:pr.current!==null?(t=mf(t,a,o),fi(t,n)||(xn=!0),t):(da&42)===0||(da&1073741824)!==0&&(bt&261930)===0?(xn=!0,t.memoizedState=a):(t=Zg(),dt.lanes|=t,Ka|=t,n)}function jm(t,n,a,o,u){var f=z.p;z.p=f!==0&&8>f?f:8;var _=P.T,R={};P.T=R,vf(t,!1,n,a);try{var G=u(),le=P.S;if(le!==null&&le(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var xe=Kx(G,o);bo(t,n,xe,_i(t))}else bo(t,n,o,_i(t))}catch(be){bo(t,n,{then:function(){},status:"rejected",reason:be},_i())}finally{z.p=f,_!==null&&R.types!==null&&(_.types=R.types),P.T=_}}function nS(){}function gf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Km(t).queue;jm(t,u,n,ae,a===null?nS:function(){return Qm(t),a(o)})}function Km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qm(t){var n=Km(t);n.next===null&&(n=t.alternate.memoizedState),bo(t,n.next.queue,{},_i())}function _f(){return Pn(Go)}function Jm(){return mn().memoizedState}function $m(){return mn().memoizedState}function iS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();t=Xa(a);var o=Wa(n,t,a);o!==null&&(ii(o,n,a),xo(o,n,a)),n={cache:Wu()},t.payload=n;return}n=n.return}}function aS(t,n,a){var o=_i();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?tg(n,a):(a=Ou(t,n,a,o),a!==null&&(ii(a,t,o),ng(a,n,o)))}function eg(t,n,a){var o=_i();bo(t,n,a,o)}function bo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))tg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,fi(R,_))return Ml(t,n,u,0),Qt===null&&yl(),!1}catch{}finally{}if(a=Ou(t,n,u,o),a!==null)return ii(a,t,o),ng(a,n,o),!0}return!1}function vf(t,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(s(479))}else n=Ou(t,a,o,2),n!==null&&ii(n,t,2)}function Vl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function tg(t,n){mr=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ng(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,jt(t,a)}}var To={readContext:Pn,use:zl,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};To.useEffectEvent=fn;var ig={readContext:Pn,use:zl,useCallback:function(t,n){return jn().memoizedState=[t,n===void 0?null:n],t},useContext:Pn,useEffect:Hm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Xm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=jn();n=n===void 0?null:n;var o=t();if(Is){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=jn();if(a!==void 0){var u=a(n);if(Is){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=aS.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=jn();return t={current:t},n.memoizedState=t},useState:function(t){t=ff(t);var n=t.queue,a=eg.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(t,n){var a=jn();return mf(a,t,n)},useTransition:function(){var t=ff(!1);return t=jm.bind(null,dt,t.queue,!0,!1),jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=jn();if(Rt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qt===null)throw Error(s(349));(bt&127)!==0||bm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Hm(Am.bind(null,o,f,t),[t]),o.flags|=2048,_r(9,{destroy:void 0},Tm.bind(null,o,f,a,n),null),a},useId:function(){var t=jn(),n=Qt.identifierPrefix;if(Rt){var a=qi,o=Wi;a=(o&~(1<<32-ze(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Qx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_f,useFormState:Pm,useActionState:Pm,useOptimistic:function(t){var n=jn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return jn().memoizedState=iS.bind(null,dt)},useEffectEvent:function(t){var n=jn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:Pn,use:zl,useCallback:qm,useContext:Pn,useEffect:df,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:Ym,useReducer:Fl,useRef:Fm,useState:function(){return Fl(pa)},useDebugValue:pf,useDeferredValue:function(t,n){var a=mn();return Zm(a,Wt.memoizedState,t,n)},useTransition:function(){var t=Fl(pa)[0],n=mn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:_f,useFormState:Im,useActionState:Im,useOptimistic:function(t,n){var a=mn();return wm(a,Wt,t,n)},useMemoCache:lf,useCacheRefresh:$m};xf.useEffectEvent=Gm;var ag={readContext:Pn,use:zl,useCallback:qm,useContext:Pn,useEffect:df,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:Ym,useReducer:uf,useRef:Fm,useState:function(){return uf(pa)},useDebugValue:pf,useDeferredValue:function(t,n){var a=mn();return Wt===null?mf(a,t,n):Zm(a,Wt.memoizedState,t,n)},useTransition:function(){var t=uf(pa)[0],n=mn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:_f,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=mn();return Wt!==null?wm(a,Wt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:$m};ag.useEffectEvent=Gm;function Sf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=_i(),u=Xa(o);u.payload=n,a!=null&&(u.callback=a),n=Wa(t,u,o),n!==null&&(ii(n,t,o),xo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=_i(),u=Xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Wa(t,u,o),n!==null&&(ii(n,t,o),xo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=_i(),o=Xa(a);o.tag=2,n!=null&&(o.callback=n),n=Wa(t,o,a),n!==null&&(ii(n,t,a),xo(n,t,a))}};function sg(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,f):!0}function rg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&yf.enqueueReplaceState(n,n.state,null)}function Bs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function og(t){Sl(t)}function lg(t){console.error(t)}function cg(t){Sl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(t,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function fg(t){return t=Xa(t),t.tag=3,t}function hg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){ug(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){ug(n,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function sS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&cr(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 31:case 13:return Ci===null?tc():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(t,o,u)),!1}throw Error(s(435,a.tag))}return Yf(t,o,u),tc(),!1}if(Rt)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(t=Error(s(422),{cause:o}),po(bi(t,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),po(bi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=bi(o,a),u=Mf(t.stateNode,o,u),Qu(t,u),hn!==4&&(hn=2)),!1;var f=Error(s(520),{cause:o});if(f=bi(f,a),No===null?No=[f]:No.push(f),hn!==4&&(hn=2),n===null)return!0;o=bi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Mf(a.stateNode,o,t),Qu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qa===null||!Qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=fg(u),hg(u,t,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),xn=!1;function In(t,n,a,o){n.child=t===null?gm(n,null,a,o):Ps(n,t.child,a,o)}function dg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Ls(n),o=af(t,n,a,_,f,u),R=sf(),t!==null&&!xn?(rf(t,n,u),ma(t,n,u)):(Rt&&R&&zu(n),n.flags|=1,In(t,n,o,u),n.child)}function pg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,mg(t,n,f,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(_,o)&&t.ref===n.ref)return ma(t,n,u)}return n.flags|=1,t=ca(f,o),t.ref=n.ref,t.return=n,n.child=t}function mg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(uo(f,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=f,Lf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ma(t,n,u)}return bf(t,n,a,o,u)}function gg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return _g(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?xm(n,f):$u(),Sm(n);else return o=n.lanes=536870912,_g(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Cl(n,f.cachePool),xm(n,f),Ya(),n.memoizedState=null):(t!==null&&Cl(n,null),$u(),Ya());return In(t,n,u,a),n.child}function Ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _g(t,n,a,o,u){var f=Yu();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Cl(n,null),$u(),Sm(n),t!==null&&cr(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function vg(t,n,a){return Ps(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,pi(n),n.memoizedState=null,t}function rS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,Ao(null,t);if(tf(n),(t=en)?(t=D0(t,Ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=tm(t),a.return=n,n.child=a,On=n,en=null)):t=null,t===null)throw Ga(n);return n.lanes=536870912,null}return Xl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(tf(n),u)if(n.flags&256)n.flags&=-257,n=vg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||cr(t,n,a,!1),u=(a&t.childLanes)!==0,xn||u){if(o=Qt,o!==null&&(_=Mn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Rs(t,_),ii(o,t,_),Ef;tc(),n=vg(t,n,a)}else t=f.treeContext,en=wi(_.nextSibling),On=n,Rt=!0,Ha=null,Ri=!1,t!==null&&am(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=ca(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bf(t,n,a,o,u){return Ls(n),a=af(t,n,a,o,void 0,u),o=sf(),t!==null&&!xn?(rf(t,n,u),ma(t,n,u)):(Rt&&o&&zu(n),n.flags|=1,In(t,n,a,u),n.child)}function xg(t,n,a,o,u,f){return Ls(n),n.updateQueue=null,a=Mm(n,o,a,u),ym(t),o=sf(),t!==null&&!xn?(rf(t,n,f),ma(t,n,f)):(Rt&&o&&zu(n),n.flags|=1,In(t,n,a,f),n.child)}function Sg(t,n,a,o,u){if(Ls(n),n.stateNode===null){var f=sr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Pn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ju(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Pn(_):sr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Sf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&yf.enqueueReplaceState(f,f.state,null),yo(n,o,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,G=Bs(a,R);f.props=G;var le=f.context,xe=a.contextType;_=sr,typeof xe=="object"&&xe!==null&&(_=Pn(xe));var be=a.getDerivedStateFromProps;xe=typeof be=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,xe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||le!==_)&&rg(n,f,o,_),ka=!1;var he=n.memoizedState;f.state=he,yo(n,o,f,u),So(),le=n.memoizedState,R||he!==le||ka?(typeof be=="function"&&(Sf(n,a,be,o),le=n.memoizedState),(G=ka||sg(n,a,G,o,he,le,_))?(xe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=_,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(t,n),_=n.memoizedProps,xe=Bs(a,_),f.props=xe,be=n.pendingProps,he=f.context,le=a.contextType,G=sr,typeof le=="object"&&le!==null&&(G=Pn(le)),R=a.getDerivedStateFromProps,(le=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==be||he!==G)&&rg(n,f,o,G),ka=!1,he=n.memoizedState,f.state=he,yo(n,o,f,u),So();var de=n.memoizedState;_!==be||he!==de||ka||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof R=="function"&&(Sf(n,a,R,o),de=n.memoizedState),(xe=ka||sg(n,a,xe,o,he,de,G)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(le||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,de,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,de,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&he===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&he===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=de),f.props=o,f.state=de,f.context=G,o=xe):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&he===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&he===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Wl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ps(n,t.child,null,u),n.child=Ps(n,null,a,u)):In(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ma(t,n,u),t}function yg(t,n,a,o){return ws(),n.flags|=256,In(t,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(t){return{baseLanes:t,cachePool:um()}}function Rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=gi),t}function Mg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(u?qa(n):Ya(),(t=en)?(t=D0(t,Ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=tm(t),a.return=n,n.child=a,On=n,en=null)):t=null,t===null)throw Ga(n);return ch(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ya(),u=n.mode,R=ql({mode:"hidden",children:R},u),o=Cs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(t,_,a),n.memoizedState=Tf,Ao(null,o)):(qa(n),Cf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(qa(n),n.flags&=-257,n=wf(t,n,a)):n.memoizedState!==null?(Ya(),n.child=t.child,n.flags|=128,n=null):(Ya(),R=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),R=Cs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ps(n,t.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(t,_,a),n.memoizedState=Tf,n=Ao(null,o));else if(qa(n),ch(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var le=_.dgst;_=le,o=Error(s(419)),o.stack="",o.digest=_,po({value:o,source:null,stack:null}),n=wf(t,n,a)}else if(xn||cr(t,n,a,!1),_=(a&t.childLanes)!==0,xn||_){if(_=Qt,_!==null&&(o=Mn(_,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Rs(t,o),ii(_,t,o),Ef;lh(R)||tc(),n=wf(t,n,a)}else lh(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,en=wi(R.nextSibling),On=n,Rt=!0,Ha=null,Ri=!1,t!==null&&am(n,t),n=Cf(n,o.children),n.flags|=4096);return n}return u?(Ya(),R=o.fallback,u=n.mode,G=t.child,le=G.sibling,o=ca(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,le!==null?R=ca(le,R):(R=Cs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Af(a):(u=R.cachePool,u!==null?(G=_n._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=um(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Rf(t,_,a),n.memoizedState=Tf,Ao(t.child,o)):(qa(n),a=t.child,t=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Cf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=hi(22,t,null,n),t.lanes=0,t}function wf(t,n,a){return Ps(n,t.child,null,a),t=Cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Eg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ku(t.return,n,a)}function Df(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function bg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=pn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,J(pn,_),In(t,n,o,a),o=Rt?ho:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,a,n);else if(t.tag===19)Eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Df(n,!0,a,null,f,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(cr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ca(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ca(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function oS(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Va(n,_n,t.memoizedState.cache),ws();break;case 27:case 5:tt(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Mg(t,n,a):(qa(n),t=ma(t,n,a),t!==null?t.sibling:null);qa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(cr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return bg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(pn,pn.current),o)break;return null;case 22:return n.lanes=0,gg(t,n,a,n.pendingProps);case 24:Va(n,_n,t.memoizedState.cache)}return ma(t,n,a)}function Tg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Lf(t,a)&&(n.flags&128)===0)return xn=!1,oS(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Rt&&(n.flags&1048576)!==0&&im(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ns(n.elementType),n.type=t,typeof t=="function")Pu(t)?(o=Bs(t,o),n.tag=1,n=Sg(null,n,t,o,a)):(n.tag=0,n=bf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=dg(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=pg(null,n,t,o,a);break e}}throw n=ne(t)||t,Error(s(306,n,""))}}return n;case 0:return bf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Bs(o,n.pendingProps),Sg(t,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(t,n),yo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Va(n,_n,o),o!==f.cache&&Xu(n,[_n],a,!0),So(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=yg(t,n,o,a);break e}else if(o!==u){u=bi(Error(s(424)),n),po(u),n=yg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=wi(t.firstChild),On=n,Rt=!0,Ha=null,Ri=!0,a=gm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ws(),o===u){n=ma(t,n,a);break e}In(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=I0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,o=lc(ie.current).createElement(a),o[un]=n,o[dn]=t,Bn(o,a,t),gn(o),n.stateNode=o):n.memoizedState=I0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&Rt&&(o=n.stateNode=N0(n.type,n.pendingProps,ie.current),On=n,Ri=!0,u=en,ts(n.type)?(uh=u,en=wi(o.firstChild)):en=u),In(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((u=o=en)&&(o=BS(o,n.type,n.pendingProps,Ri),o!==null?(n.stateNode=o,On=n,en=wi(o.firstChild),Ri=!1,u=!0):u=!1),u||Ga(n)),tt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,sh(u,f)?o=null:_!==null&&sh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=af(t,n,Jx,null,null,a),Go._currentValue=u),Wl(t,n),In(t,n,o,a),n.child;case 6:return t===null&&Rt&&((t=a=en)&&(a=zS(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,On=n,en=null,t=!0):t=!1),t||Ga(n)),null;case 13:return Mg(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ps(n,null,o,a):In(t,n,o,a),n.child;case 11:return dg(t,n,n.type,n.pendingProps,a);case 7:return In(t,n,n.pendingProps,a),n.child;case 8:return In(t,n,n.pendingProps.children,a),n.child;case 12:return In(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Va(n,n.type,o.value),In(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ls(n),u=Pn(u),o=o(u),n.flags|=1,In(t,n,o,a),n.child;case 14:return pg(t,n,n.type,n.pendingProps,a);case 15:return mg(t,n,n.type,n.pendingProps,a);case 19:return bg(t,n,a);case 31:return rS(t,n,a);case 22:return gg(t,n,a,n.pendingProps);case 24:return Ls(n),o=Pn(_n),t===null?(u=Yu(),u===null&&(u=Qt,f=Wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ju(n),Va(n,_n,u)):((t.lanes&a)!==0&&(Ku(t,n),yo(n,null,null,a),So()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Va(n,_n,o)):(o=f.cache,Va(n,_n,o),o!==u.cache&&Xu(n,[_n],a,!0))),In(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(t){t.flags|=4}function Uf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Jg())t.flags|=8192;else throw Os=Dl,Zu}else t.flags&=-16777217}function Ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!G0(n))if(Jg())t.flags|=8192;else throw Os=Dl,Zu}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?se():536870912,t.lanes|=n,yr|=n)}function Ro(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function lS(t,n,a){var o=n.pendingProps;switch(Fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ha(_n),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(lr(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gu())),tn(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ga(n),f!==null?(tn(n),Ag(n,f)):(tn(n),Uf(n,u,null,o,a))):f?f!==t.memoizedState?(ga(n),tn(n),Ag(n,f)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ga(n),tn(n),Uf(n,u,t,o,a)),null;case 27:if(Ke(n),a=ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}t=ye.current,lr(n)?sm(n):(t=N0(u,o,a),n.stateNode=t,ga(n))}return tn(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(f=ye.current,lr(n))sm(n);else{var _=lc(ie.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[un]=n,f[dn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(n)}}return tn(n),Uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,lr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||M0(t.nodeValue,a)),t||Ga(n,!0)}else t=lc(t).createTextNode(o),t[un]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=lr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[un]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=Gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=lr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Gu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),tn(n),null);case 4:return Ve(),t===null&&eh(n.stateNode.containerInfo),tn(n),null;case 10:return ha(n.type),tn(n),null;case 19:if(B(pn),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ro(o,!1);else{if(hn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ol(t),f!==null){for(n.flags|=128,Ro(o,!1),t=f.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)em(a,t),a=a.sibling;return J(pn,pn.current&1|2),Rt&&ua(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Nt()>Jl&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Rt)return tn(n),null}else 2*Nt()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Nt(),t.sibling=null,a=pn.current,J(pn,u?a&1|2:a&1),Rt&&ua(n,o.treeForkCount),t):(tn(n),null);case 22:case 23:return pi(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&B(Us),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(_n),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cS(t,n){switch(Fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(_n),Ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(pi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return B(pn),null;case 4:return Ve(),null;case 10:return ha(n.type),null;case 22:case 23:return pi(n),ef(),t!==null&&B(Us),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ha(_n),null;case 25:return null;default:return null}}function Rg(t,n){switch(Fu(n),n.tag){case 3:ha(_n),Ve();break;case 26:case 27:case 5:Ke(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:B(pn);break;case 10:ha(n.type);break;case 22:case 23:pi(n),ef(),t!==null&&B(Us);break;case 24:ha(_n)}}function Co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Gt(n,n.return,R)}}function Za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var G=a,le=R;try{le()}catch(xe){Gt(u,G,xe)}}}o=o.next}while(o!==f)}}catch(xe){Gt(n,n.return,xe)}}function Cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{vm(n,a)}catch(o){Gt(t,t.return,o)}}}function wg(t,n,a){a.props=Bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function wo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function Yi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function Dg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;LS(o,t.type,a,n),o[dn]=n}catch(u){Gt(t,t.return,u)}}function Lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ts(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&ts(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pf(t,n,a),t=t.sibling;t!==null;)Pf(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ts(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function Ug(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,o,a),n[un]=t,n[dn]=a}catch(f){Gt(t,t.return,f)}}var _a=!1,Sn=!1,If=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,wn=null;function uS(t,n){if(t=t.containerInfo,ih=mc,t=Wp(t),Cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,G=-1,le=0,xe=0,be=t,he=null;t:for(;;){for(var de;be!==a||u!==0&&be.nodeType!==3||(R=_+u),be!==f||o!==0&&be.nodeType!==3||(G=_+o),be.nodeType===3&&(_+=be.nodeValue.length),(de=be.firstChild)!==null;)he=be,be=de;for(;;){if(be===t)break t;if(he===a&&++le===u&&(R=_),he===f&&++xe===o&&(G=_),(de=be.nextSibling)!==null)break;be=he,he=be.parentNode}be=de}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:t,selectionRange:a},mc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ye=Bs(a.type,u);t=o.getSnapshotBeforeUpdate(Ye,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Gt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)oh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":oh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function Og(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:xa(t,a),o&4&&Co(5,a);break;case 1:if(xa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Gt(a,a.return,_)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Gt(a,a.return,_)}}o&64&&Cg(a),o&512&&wo(a,a.return);break;case 3:if(xa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vm(t,n)}catch(_){Gt(a,a.return,_)}}break;case 27:n===null&&o&4&&Ug(a);case 26:case 5:xa(t,a),n===null&&o&4&&Dg(a),o&512&&wo(a,a.return);break;case 12:xa(t,a);break;case 31:xa(t,a),o&4&&Bg(t,a);break;case 13:xa(t,a),o&4&&zg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=xS.bind(null,a),FS(t,a))));break;case 22:if(o=a.memoizedState!==null||_a,!o){n=n!==null&&n.memoizedState!==null||Sn,u=_a;var f=Sn;_a=o,(Sn=n)&&!f?Sa(t,a,(a.subtreeFlags&8772)!==0):xa(t,a),_a=u,Sn=f}break;case 30:break;default:xa(t,a)}}function Pg(t){var n=t.alternate;n!==null&&(t.alternate=null,Pg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,$n=!1;function va(t,n,a){for(a=a.child;a!==null;)Ig(t,n,a),a=a.sibling}function Ig(t,n,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:Sn||Yi(a,n),va(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||Yi(a,n);var o=ln,u=$n;ts(a.type)&&(ln=a.stateNode,$n=!1),va(t,n,a),zo(a.stateNode),ln=o,$n=u;break;case 5:Sn||Yi(a,n);case 6:if(o=ln,u=$n,ln=null,va(t,n,a),ln=o,$n=u,ln!==null)if($n)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{ln.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:ln!==null&&($n?(t=ln,C0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),wr(t)):C0(ln,a.stateNode));break;case 4:o=ln,u=$n,ln=a.stateNode.containerInfo,$n=!0,va(t,n,a),ln=o,$n=u;break;case 0:case 11:case 14:case 15:Za(2,a,n),Sn||Za(4,a,n),va(t,n,a);break;case 1:Sn||(Yi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&wg(a,n,o)),va(t,n,a);break;case 21:va(t,n,a);break;case 22:Sn=(o=Sn)||a.memoizedState!==null,va(t,n,a),Sn=o;break;default:va(t,n,a)}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{wr(t)}catch(a){Gt(n,n.return,a)}}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wr(t)}catch(a){Gt(n,n.return,a)}}function fS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ng),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ng),n;default:throw Error(s(435,t.tag))}}function jl(t,n){var a=fS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=SS.bind(null,t,o);o.then(u,u)}})}function ei(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(ts(R.type)){ln=R.stateNode,$n=!1;break e}break;case 5:ln=R.stateNode,$n=!1;break e;case 3:case 4:ln=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(ln===null)throw Error(s(160));Ig(f,_,u),ln=null,$n=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fg(n,t),n=n.sibling}var Ii=null;function Fg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ei(n,t),ti(t),o&4&&(Za(3,t,t.return),Co(3,t),Za(5,t,t.return));break;case 1:ei(n,t),ti(t),o&512&&(Sn||a===null||Yi(a,a.return)),o&64&&_a&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ii;if(ei(n,t),ti(t),o&512&&(Sn||a===null||Yi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Oa]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Bn(f,o,a),f[un]=t,gn(f),o=f;break e;case"link":var _=F0("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=F0("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[un]=t,gn(f),o=f}t.stateNode=o}else H0(u,t.type,t.stateNode);else t.stateNode=z0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?H0(u,t.type,t.stateNode):z0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ei(n,t),ti(t),o&512&&(Sn||a===null||Yi(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ei(n,t),ti(t),o&512&&(Sn||a===null||Yi(a,a.return)),t.flags&32){u=t.stateNode;try{ui(u,"")}catch(Ye){Gt(t,t.return,Ye)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(ei(n,t),ti(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ye){Gt(t,t.return,Ye)}}break;case 3:if(fc=null,u=Ii,Ii=cc(n.containerInfo),ei(n,t),Ii=u,ti(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(Ye){Gt(t,t.return,Ye)}If&&(If=!1,Hg(t));break;case 4:o=Ii,Ii=cc(t.stateNode.containerInfo),ei(n,t),ti(t),Ii=o;break;case 12:ei(n,t),ti(t);break;case 31:ei(n,t),ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 13:ei(n,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=Nt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,le=_a,xe=Sn;if(_a=le||u,Sn=xe||G,ei(n,t),Sn=xe,_a=le,ti(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||_a||Sn||zs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=G.stateNode;var be=G.memoizedProps.style,he=be!=null&&be.hasOwnProperty("display")?be.display:null;R.style.display=he==null||typeof he=="boolean"?"":(""+he).trim()}}catch(Ye){Gt(G,G.return,Ye)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ye){Gt(G,G.return,Ye)}}}else if(n.tag===18){if(a===null){G=n;try{var de=G.stateNode;u?w0(de,!0):w0(G.stateNode,!1)}catch(Ye){Gt(G,G.return,Ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(t,a))));break;case 19:ei(n,t),ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 30:break;case 21:break;default:ei(n,t),ti(t)}}function ti(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Lg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Of(t);Zl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ui(_,""),a.flags&=-33);var R=Of(t);Zl(t,R,_);break;case 3:case 4:var G=a.stateNode.containerInfo,le=Of(t);Pf(t,le,G);break;default:throw Error(s(161))}}catch(xe){Gt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Hg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(t,n.alternate,n),n=n.sibling}function zs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),zs(n);break;case 1:Yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wg(n,n.return,a),zs(n);break;case 27:zo(n.stateNode);case 26:case 5:Yi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}t=t.sibling}}function Sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),Co(4,f);break;case 1:if(Sa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Gt(o,o.return,le)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)_m(G[u],R)}catch(le){Gt(o,o.return,le)}}a&&_&64&&Cg(f),wo(f,f.return);break;case 27:Ug(f);case 26:case 5:Sa(u,f,a),a&&o===null&&_&4&&Dg(f),wo(f,f.return);break;case 12:Sa(u,f,a);break;case 31:Sa(u,f,a),a&&_&4&&Bg(u,f);break;case 13:Sa(u,f,a),a&&_&4&&zg(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),wo(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function Bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&mo(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t))}function Bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(t,n,a,o),n=n.sibling}function Gg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(t,n,a,o),u&2048&&Co(9,n);break;case 1:Bi(t,n,a,o);break;case 3:Bi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t)));break;case 12:if(u&2048){Bi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Gt(n,n.return,G)}}else Bi(t,n,a,o);break;case 31:Bi(t,n,a,o);break;case 13:Bi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Bi(t,n,a,o):Do(t,n):f._visibility&2?Bi(t,n,a,o):(f._visibility|=2,vr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Bf(_,n);break;case 24:Bi(t,n,a,o),u&2048&&zf(n.alternate,n);break;default:Bi(t,n,a,o)}}function vr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,G=o,le=_.flags;switch(_.tag){case 0:case 11:case 15:vr(f,_,R,G,u),Co(8,_);break;case 23:break;case 22:var xe=_.stateNode;_.memoizedState!==null?xe._visibility&2?vr(f,_,R,G,u):Do(f,_):(xe._visibility|=2,vr(f,_,R,G,u)),u&&le&2048&&Bf(_.alternate,_);break;case 24:vr(f,_,R,G,u),u&&le&2048&&zf(_.alternate,_);break;default:vr(f,_,R,G,u)}n=n.sibling}}function Do(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Bf(o.alternate,o);break;case 24:Do(a,o),u&2048&&zf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Lo=8192;function xr(t,n,a){if(t.subtreeFlags&Lo)for(t=t.child;t!==null;)Vg(t,n,a),t=t.sibling}function Vg(t,n,a){switch(t.tag){case 26:xr(t,n,a),t.flags&Lo&&t.memoizedState!==null&&QS(a,Ii,t.memoizedState,t.memoizedProps);break;case 5:xr(t,n,a);break;case 3:case 4:var o=Ii;Ii=cc(t.stateNode.containerInfo),xr(t,n,a),Ii=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,xr(t,n,a),Lo=o):xr(t,n,a));break;default:xr(t,n,a)}}function kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Wg(o,t)}kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xg(t),t=t.sibling}function Xg(t){switch(t.tag){case 0:case 11:case 15:Uo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Uo(t);break;case 12:Uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):Uo(t);break;default:Uo(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Wg(o,t)}kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Za(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function Wg(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,f=o.return;if(Pg(o),o===a){wn=null;break e}if(u!==null){u.return=f,wn=u;break e}wn=f}}}var hS={getCacheForType:function(t){var n=Pn(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Pn(_n).controller.signal}},dS=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Qt=null,Mt=null,bt=0,Ht=0,mi=null,ja=!1,Sr=!1,Ff=!1,ya=0,hn=0,Ka=0,Fs=0,Hf=0,gi=0,yr=0,No=null,ni=null,Gf=!1,Ql=0,qg=0,Jl=1/0,$l=null,Qa=null,bn=0,Ja=null,Mr=null,Ma=0,Vf=0,kf=null,Yg=null,Oo=0,Xf=null;function _i(){return(Ot&2)!==0&&bt!==0?bt&-bt:P.T!==null?Kf():Gn()}function Zg(){if(gi===0)if((bt&536870912)===0||Rt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),gi=t}else gi=536870912;return t=di.current,t!==null&&(t.flags|=32),gi}function ii(t,n,a){(t===Qt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(Er(t,0),$a(t,bt,gi,!1)),Re(t,a),((Ot&2)===0||t!==Qt)&&(t===Qt&&((Ot&2)===0&&(Fs|=a),hn===4&&$a(t,bt,gi,!1)),Zi(t))}function jg(t,n,a){if((Ot&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ne(t,n),u=o?gS(t,n):qf(t,n,!0),f=o;do{if(u===0){Sr&&!o&&$a(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!pS(a)){u=qf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=No;var G=R.current.memoizedState.isDehydrated;if(G&&(Er(R,_).flags|=256),_=qf(R,_,!1),_!==2){if(Ff&&!G){R.errorRecoveryDisabledLanes|=f,Fs|=f,u=4;break e}f=ni,ni=u,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Er(t,0),$a(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:$a(o,n,gi,!ja);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ql+300-Nt(),10<u)){if($a(o,n,gi,!ja),ve(o,0,!0)!==0)break e;Ma=n,o.timeoutHandle=A0(Kg.bind(null,o,a,ni,$l,Gf,n,gi,Fs,yr,ja,f,"Throttled",-0,0),u);break e}Kg(o,a,ni,$l,Gf,n,gi,Fs,yr,ja,f,null,-0,0)}}break}while(!0);Zi(t)}function Kg(t,n,a,o,u,f,_,R,G,le,xe,be,he,de){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},Vg(n,f,be);var Ye=(f&62914560)===f?Ql-Nt():(f&4194048)===f?qg-Nt():0;if(Ye=JS(be,Ye),Ye!==null){Ma=f,t.cancelPendingCommit=Ye(a0.bind(null,t,n,f,a,o,u,_,R,G,xe,be,null,he,de)),$a(t,f,_,!le);return}}a0(t,n,f,a,o,u,_,R,G)}function pS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!fi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(t,n,a,o){n&=~Hf,n&=~Fs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&st(t,a,n)}function ec(){return(Ot&6)===0?(Po(0),!1):!0}function Wf(){if(Mt!==null){if(Ht===0)var t=Mt.return;else t=Mt,fa=Ds=null,of(t),dr=null,_o=0,t=Mt;for(;t!==null;)Rg(t.alternate,t),t=t.return;Mt=null}}function Er(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,OS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ma=0,Wf(),Qt=t,Mt=a=ca(t.current,null),bt=n,Ht=0,mi=null,ja=!1,Sr=Ne(t,n),Ff=!1,yr=gi=Hf=Fs=Ka=hn=0,ni=No=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),f=1<<u;n|=t[u],o&=~f}return ya=n,yl(),a}function Qg(t,n){dt=null,P.H=To,n===hr||n===wl?(n=dm(),Ht=3):n===Zu?(n=dm(),Ht=4):Ht=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Mt===null&&(hn=1,kl(t,bi(n,t.current)))}function Jg(){var t=di.current;return t===null?!0:(bt&4194048)===bt?Ci===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Ci:!1}function $g(){var t=P.H;return P.H=To,t===null?To:t}function e0(){var t=P.A;return P.A=hS,t}function tc(){hn=4,ja||(bt&4194048)!==bt&&di.current!==null||(Sr=!0),(Ka&134217727)===0&&(Fs&134217727)===0||Qt===null||$a(Qt,bt,gi,!1)}function qf(t,n,a){var o=Ot;Ot|=2;var u=$g(),f=e0();(Qt!==t||bt!==n)&&($l=null,Er(t,n)),n=!1;var _=hn;e:do try{if(Ht!==0&&Mt!==null){var R=Mt,G=mi;switch(Ht){case 8:Wf(),_=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var le=Ht;if(Ht=0,mi=null,br(t,R,G,le),a&&Sr){_=0;break e}break;default:le=Ht,Ht=0,mi=null,br(t,R,G,le)}}mS(),_=hn;break}catch(xe){Qg(t,xe)}while(!0);return n&&t.shellSuspendCounter++,fa=Ds=null,Ot=o,P.H=u,P.A=f,Mt===null&&(Qt=null,bt=0,yl()),_}function mS(){for(;Mt!==null;)t0(Mt)}function gS(t,n){var a=Ot;Ot|=2;var o=$g(),u=e0();Qt!==t||bt!==n?($l=null,Jl=Nt()+500,Er(t,n)):Sr=Ne(t,n);e:do try{if(Ht!==0&&Mt!==null){n=Mt;var f=mi;t:switch(Ht){case 1:Ht=0,mi=null,br(t,n,f,1);break;case 2:case 9:if(fm(f)){Ht=0,mi=null,n0(n);break}n=function(){Ht!==2&&Ht!==9||Qt!==t||(Ht=7),Zi(t)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:fm(f)?(Ht=0,mi=null,n0(n)):(Ht=0,mi=null,br(t,n,f,7));break;case 5:var _=null;switch(Mt.tag){case 26:_=Mt.memoizedState;case 5:case 27:var R=Mt;if(_?G0(_):R.stateNode.complete){Ht=0,mi=null;var G=R.sibling;if(G!==null)Mt=G;else{var le=R.return;le!==null?(Mt=le,nc(le)):Mt=null}break t}}Ht=0,mi=null,br(t,n,f,5);break;case 6:Ht=0,mi=null,br(t,n,f,6);break;case 8:Wf(),hn=6;break e;default:throw Error(s(462))}}_S();break}catch(xe){Qg(t,xe)}while(!0);return fa=Ds=null,P.H=o,P.A=u,Ot=a,Mt!==null?0:(Qt=null,bt=0,yl(),hn)}function _S(){for(;Mt!==null&&!sn();)t0(Mt)}function t0(t){var n=Tg(t.alternate,t,ya);t.memoizedProps=t.pendingProps,n===null?nc(t):Mt=n}function n0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=xg(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=xg(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:of(n);default:Rg(a,n),n=Mt=em(n,ya),n=Tg(a,n,ya)}t.memoizedProps=t.pendingProps,n===null?nc(t):Mt=n}function br(t,n,a,o){fa=Ds=null,of(n),dr=null,_o=0;var u=n.return;try{if(sS(t,u,n,a,bt)){hn=1,kl(t,bi(a,t.current)),Mt=null;return}}catch(f){if(u!==null)throw Mt=u,f;hn=1,kl(t,bi(a,t.current)),Mt=null;return}n.flags&32768?(Rt||o===1?t=!0:Sr||(bt&536870912)!==0?t=!1:(ja=t=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),i0(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){i0(n,ja);return}t=n.return;var a=lS(n.alternate,n,ya);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);hn===0&&(hn=5)}function i0(t,n){do{var a=cS(t.alternate,t);if(a!==null){a.flags&=32767,Mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=a}while(t!==null);hn=6,Mt=null}function a0(t,n,a,o,u,f,_,R,G){t.cancelPendingCommit=null;do ic();while(bn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Nu,ot(t,a,f,_,R,G),t===Qt&&(Mt=Qt=null,bt=0),Mr=n,Ja=t,Ma=a,Vf=f,kf=u,Yg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,yS(K,function(){return c0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=z.p,z.p=2,_=Ot,Ot|=4;try{uS(t,n,a)}finally{Ot=_,z.p=u,P.T=o}}bn=1,s0(),r0(),o0()}}function s0(){if(bn===1){bn=0;var t=Ja,n=Mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=z.p;z.p=2;var u=Ot;Ot|=4;try{Fg(n,t);var f=ah,_=Wp(t.containerInfo),R=f.focusedElem,G=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Xp(R.ownerDocument.documentElement,R)){if(G!==null&&Cu(R)){var le=G.start,xe=G.end;if(xe===void 0&&(xe=le),"selectionStart"in R)R.selectionStart=le,R.selectionEnd=Math.min(xe,R.value.length);else{var be=R.ownerDocument||document,he=be&&be.defaultView||window;if(he.getSelection){var de=he.getSelection(),Ye=R.textContent.length,nt=Math.min(G.start,Ye),Yt=G.end===void 0?nt:Math.min(G.end,Ye);!de.extend&&nt>Yt&&(_=Yt,Yt=nt,nt=_);var ee=kp(R,nt),X=kp(R,Yt);if(ee&&X&&(de.rangeCount!==1||de.anchorNode!==ee.node||de.anchorOffset!==ee.offset||de.focusNode!==X.node||de.focusOffset!==X.offset)){var oe=be.createRange();oe.setStart(ee.node,ee.offset),de.removeAllRanges(),nt>Yt?(de.addRange(oe),de.extend(X.node,X.offset)):(oe.setEnd(X.node,X.offset),de.addRange(oe))}}}}for(be=[],de=R;de=de.parentNode;)de.nodeType===1&&be.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var Me=be[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}mc=!!ih,ah=ih=null}finally{Ot=u,z.p=o,P.T=a}}t.current=n,bn=2}}function r0(){if(bn===2){bn=0;var t=Ja,n=Mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=z.p;z.p=2;var u=Ot;Ot|=4;try{Og(t,n.alternate,n)}finally{Ot=u,z.p=o,P.T=a}}bn=3}}function o0(){if(bn===4||bn===3){bn=0,Y();var t=Ja,n=Mr,a=Ma,o=Yg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Mr=Ja=null,l0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Qa=null),Nn(a),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=z.p,z.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{P.T=n,z.p=u}}(Ma&3)!==0&&ic(),Zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Xf?Oo++:(Oo=0,Xf=t):Oo=0,Po(0)}}function l0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,mo(n)))}function ic(){return s0(),r0(),o0(),c0()}function c0(){if(bn!==5)return!1;var t=Ja,n=Vf;Vf=0;var a=Nn(Ma),o=P.T,u=z.p;try{z.p=32>a?32:a,P.T=null,a=kf,kf=null;var f=Ja,_=Ma;if(bn=0,Mr=Ja=null,Ma=0,(Ot&6)!==0)throw Error(s(331));var R=Ot;if(Ot|=4,Xg(f.current),Gg(f,f.current,_,a),Ot=R,Po(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(me,f)}catch{}return!0}finally{z.p=u,P.T=o,l0(t,n)}}function u0(t,n,a){n=bi(a,n),n=Mf(t.stateNode,n,2),t=Wa(t,n,2),t!==null&&(Re(t,2),Zi(t))}function Gt(t,n,a){if(t.tag===3)u0(t,t,a);else for(;n!==null;){if(n.tag===3){u0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){t=bi(a,t),a=fg(2),o=Wa(n,a,2),o!==null&&(hg(a,o,n,t),Re(o,2),Zi(o));break}}n=n.return}}function Yf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new dS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ff=!0,u.add(a),t=vS.bind(null,t,n,a),n.then(t,t))}function vS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(bt&a)===a&&(hn===4||hn===3&&(bt&62914560)===bt&&300>Nt()-Ql?(Ot&2)===0&&Er(t,0):Hf|=a,yr===bt&&(yr=0)),Zi(t)}function f0(t,n){n===0&&(n=se()),t=Rs(t,n),t!==null&&(Re(t,n),Zi(t))}function xS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),f0(t,a)}function SS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),f0(t,a)}function yS(t,n){return $t(t,n)}var ac=null,Tr=null,Zf=!1,sc=!1,jf=!1,es=0;function Zi(t){t!==Tr&&t.next===null&&(Tr===null?ac=Tr=t:Tr=Tr.next=t),sc=!0,Zf||(Zf=!0,ES())}function Po(t,n){if(!jf&&sc){jf=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,m0(o,f))}else f=bt,f=ve(o,o===Qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ne(o,f)||(a=!0,m0(o,f));o=o.next}while(a);jf=!1}}function MS(){h0()}function h0(){sc=Zf=!1;var t=0;es!==0&&NS()&&(t=es);for(var n=Nt(),a=null,o=ac;o!==null;){var u=o.next,f=d0(o,n);f===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(Tr=a)):(a=o,(t!==0||(f&3)!==0)&&(sc=!0)),o=u}bn!==0&&bn!==5||Po(t),es!==0&&(es=0)}function d0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-ze(f),R=1<<_,G=u[_];G===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Fe(R,n)):G<=n&&(t.expiredLanes|=R),f&=~R}if(n=Qt,a=bt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Xt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ne(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Xt(o),Nn(a)){case 2:case 8:a=y;break;case 32:a=K;break;case 268435456:a=pe;break;default:a=K}return o=p0.bind(null,t),a=$t(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Xt(o),t.callbackPriority=2,t.callbackNode=null,2}function p0(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=bt;return o=ve(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(jg(t,o,n),d0(t,Nt()),t.callbackNode!=null&&t.callbackNode===a?p0.bind(null,t):null)}function m0(t,n){if(ic())return null;jg(t,n,!0)}function ES(){PS(function(){(Ot&6)!==0?$t(L,MS):h0()})}function Kf(){if(es===0){var t=ur;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),es=t}return es}function g0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Es(""+t)}function _0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function bS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=g0((u[dn]||null).action),_=o.submitter;_&&(n=(n=_[dn]||null)?g0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new _l("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var G=_?_0(u,_):new FormData(u);gf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=_?_0(u,_):new FormData(u),gf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Qf=0;Qf<Uu.length;Qf++){var Jf=Uu[Qf],TS=Jf.toLowerCase(),AS=Jf[0].toUpperCase()+Jf.slice(1);Pi(TS,"on"+AS)}Pi(Zp,"onAnimationEnd"),Pi(jp,"onAnimationIteration"),Pi(Kp,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(Vx,"onTransitionRun"),Pi(kx,"onTransitionStart"),Pi(Xx,"onTransitionCancel"),Pi(Qp,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function v0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],G=R.instance,le=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=le;try{f(u)}catch(xe){Sl(xe)}u.currentTarget=null,f=G}else for(_=0;_<o.length;_++){if(R=o[_],G=R.instance,le=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=le;try{f(u)}catch(xe){Sl(xe)}u.currentTarget=null,f=G}}}}function Et(t,n){var a=n[Ss];a===void 0&&(a=n[Ss]=new Set);var o=t+"__bubble";a.has(o)||(x0(n,t,2,!1),a.add(o))}function $f(t,n,a){var o=0;n&&(o|=4),x0(a,t,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function eh(t){if(!t[rc]){t[rc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(RS.has(a)||$f(a,!1,t),$f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[rc]||(n[rc]=!0,$f("selectionchange",!1,n))}}function x0(t,n,a,o){switch(Z0(n)){case 2:var u=ty;break;case 8:u=ny;break;default:u=mh}a=u.bind(null,n,a,t),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function th(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=sa(R),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){o=f=_;continue e}R=R.parentNode}}o=o.return}bp(function(){var le=f,xe=_u(a),be=[];e:{var he=Jp.get(t);if(he!==void 0){var de=_l,Ye=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":de=Sx;break;case"focusin":Ye="focus",de=Eu;break;case"focusout":Ye="blur",de=Eu;break;case"beforeblur":case"afterblur":de=Eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Ex;break;case Zp:case jp:case Kp:de=fx;break;case Qp:de=Tx;break;case"scroll":case"scrollend":de=rx;break;case"wheel":de=Rx;break;case"copy":case"cut":case"paste":de=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=wp;break;case"toggle":case"beforetoggle":de=wx}var nt=(n&4)!==0,Yt=!nt&&(t==="scroll"||t==="scrollend"),ee=nt?he!==null?he+"Capture":null:he;nt=[];for(var X=le,oe;X!==null;){var Me=X;if(oe=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||oe===null||ee===null||(Me=io(X,ee),Me!=null&&nt.push(Bo(X,Me,oe))),Yt)break;X=X.return}0<nt.length&&(he=new de(he,Ye,null,a,xe),be.push({event:he,listeners:nt}))}}if((n&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",he&&a!==gu&&(Ye=a.relatedTarget||a.fromElement)&&(sa(Ye)||Ye[Vn]))break e;if((de||he)&&(he=xe.window===xe?xe:(he=xe.ownerDocument)?he.defaultView||he.parentWindow:window,de?(Ye=a.relatedTarget||a.toElement,de=le,Ye=Ye?sa(Ye):null,Ye!==null&&(Yt=c(Ye),nt=Ye.tag,Ye!==Yt||nt!==5&&nt!==27&&nt!==6)&&(Ye=null)):(de=null,Ye=le),de!==Ye)){if(nt=Rp,Me="onMouseLeave",ee="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(nt=wp,Me="onPointerLeave",ee="onPointerEnter",X="pointer"),Yt=de==null?he:Ms(de),oe=Ye==null?he:Ms(Ye),he=new nt(Me,X+"leave",de,a,xe),he.target=Yt,he.relatedTarget=oe,Me=null,sa(xe)===le&&(nt=new nt(ee,X+"enter",Ye,a,xe),nt.target=oe,nt.relatedTarget=Yt,Me=nt),Yt=Me,de&&Ye)t:{for(nt=CS,ee=de,X=Ye,oe=0,Me=ee;Me;Me=nt(Me))oe++;Me=0;for(var et=X;et;et=nt(et))Me++;for(;0<oe-Me;)ee=nt(ee),oe--;for(;0<Me-oe;)X=nt(X),Me--;for(;oe--;){if(ee===X||X!==null&&ee===X.alternate){nt=ee;break t}ee=nt(ee),X=nt(X)}nt=null}else nt=null;de!==null&&S0(be,he,de,nt,!1),Ye!==null&&Yt!==null&&S0(be,Yt,Ye,nt,!0)}}e:{if(he=le?Ms(le):window,de=he.nodeName&&he.nodeName.toLowerCase(),de==="select"||de==="input"&&he.type==="file")var Lt=Bp;else if(Pp(he))if(zp)Lt=Fx;else{Lt=Bx;var Ze=Ix}else de=he.nodeName,!de||de.toLowerCase()!=="input"||he.type!=="checkbox"&&he.type!=="radio"?le&&Pt(le.elementType)&&(Lt=Bp):Lt=zx;if(Lt&&(Lt=Lt(t,le))){Ip(be,Lt,a,xe);break e}Ze&&Ze(t,he,le),t==="focusout"&&le&&he.type==="number"&&le.memoizedProps.value!=null&&yt(he,"number",he.value)}switch(Ze=le?Ms(le):window,t){case"focusin":(Pp(Ze)||Ze.contentEditable==="true")&&(nr=Ze,wu=le,fo=null);break;case"focusout":fo=wu=nr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,qp(be,a,xe);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":qp(be,a,xe)}var pt;if(Tu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else tr?Np(t,a)&&(Tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(Dp&&a.locale!=="ko"&&(tr||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&tr&&(pt=Tp()):(za=xe,Su="value"in za?za.value:za.textContent,tr=!0)),Ze=oc(le,Tt),0<Ze.length&&(Tt=new Cp(Tt,t,null,a,xe),be.push({event:Tt,listeners:Ze}),pt?Tt.data=pt:(pt=Op(a),pt!==null&&(Tt.data=pt)))),(pt=Lx?Ux(t,a):Nx(t,a))&&(Tt=oc(le,"onBeforeInput"),0<Tt.length&&(Ze=new Cp("onBeforeInput","beforeinput",null,a,xe),be.push({event:Ze,listeners:Tt}),Ze.data=pt)),bS(be,t,le,a,xe)}v0(be,n)})}function Bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=io(t,a),u!=null&&o.unshift(Bo(t,u,f)),u=io(t,n),u!=null&&o.push(Bo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function CS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function S0(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,G=R.alternate,le=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||le===null||(G=le,u?(le=io(a,f),le!=null&&_.unshift(Bo(a,le,G))):u||(le=io(a,f),le!=null&&_.push(Bo(a,le,G)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var wS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function y0(t){return(typeof t=="string"?t:""+t).replace(wS,`
`).replace(DS,"")}function M0(t,n){return n=y0(n),y0(t)===n}function qt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ui(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ui(t,""+o);break;case"className":qe(t,"class",o);break;case"tabIndex":qe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,a,o);break;case"style":Oi(t,o,f);break;case"data":if(n!=="object"){qe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Es(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Es(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=oa);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Es(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xi.get(a)||a,Be(t,a,o))}}function nh(t,n,a,o,u,f){switch(a){case"style":Oi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ui(t,o):(typeof o=="number"||typeof o=="bigint")&&ui(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Be(t,a,o)}}}function Bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,f,_,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var R=f=_=u=null,G=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var xe=a[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":_=xe;break;case"checked":G=xe;break;case"defaultChecked":le=xe;break;case"value":f=xe;break;case"defaultValue":R=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:qt(t,n,o,xe,a,null)}}kn(t,f,R,G,le,_,u,!1);return;case"select":Et("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:qt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?En(t,!!o,n,!1):a!=null&&En(t,!!o,a,!0);return;case"textarea":Et("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:qt(t,n,_,R,a,null)}Ni(t,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qt(t,n,G,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)Et(Io[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qt(t,n,le,o,a,null)}return;default:if(Pt(n)){for(xe in a)a.hasOwnProperty(xe)&&(o=a[xe],o!==void 0&&nh(t,n,xe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&qt(t,n,R,o,a,null))}function LS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,G=null,le=null,xe=null;for(de in a){var be=a[de];if(a.hasOwnProperty(de)&&be!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":G=be;default:o.hasOwnProperty(de)||qt(t,n,de,null,o,be)}}for(var he in o){var de=o[he];if(be=a[he],o.hasOwnProperty(he)&&(de!=null||be!=null))switch(he){case"type":f=de;break;case"name":u=de;break;case"checked":le=de;break;case"defaultChecked":xe=de;break;case"value":_=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:de!==be&&qt(t,n,he,de,o,be)}}ke(t,_,R,G,le,xe,f,u);return;case"select":de=_=R=he=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":de=G;default:o.hasOwnProperty(f)||qt(t,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":he=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==G&&qt(t,n,u,f,o,G)}n=R,a=_,o=de,he!=null?En(t,!!a,he,!1):!!o!=!!a&&(n!=null?En(t,!!a,n,!0):En(t,!!a,a?[]:"",!1));return;case"textarea":de=he=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":he=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&qt(t,n,_,u,o,f)}ci(t,he,de);return;case"option":for(var Ye in a)if(he=a[Ye],a.hasOwnProperty(Ye)&&he!=null&&!o.hasOwnProperty(Ye))switch(Ye){case"selected":t.selected=!1;break;default:qt(t,n,Ye,null,o,he)}for(G in o)if(he=o[G],de=a[G],o.hasOwnProperty(G)&&he!==de&&(he!=null||de!=null))switch(G){case"selected":t.selected=he&&typeof he!="function"&&typeof he!="symbol";break;default:qt(t,n,G,he,o,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)he=a[nt],a.hasOwnProperty(nt)&&he!=null&&!o.hasOwnProperty(nt)&&qt(t,n,nt,null,o,he);for(le in o)if(he=o[le],de=a[le],o.hasOwnProperty(le)&&he!==de&&(he!=null||de!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:qt(t,n,le,he,o,de)}return;default:if(Pt(n)){for(var Yt in a)he=a[Yt],a.hasOwnProperty(Yt)&&he!==void 0&&!o.hasOwnProperty(Yt)&&nh(t,n,Yt,void 0,o,he);for(xe in o)he=o[xe],de=a[xe],!o.hasOwnProperty(xe)||he===de||he===void 0&&de===void 0||nh(t,n,xe,he,o,de);return}}for(var ee in a)he=a[ee],a.hasOwnProperty(ee)&&he!=null&&!o.hasOwnProperty(ee)&&qt(t,n,ee,null,o,he);for(be in o)he=o[be],de=a[be],!o.hasOwnProperty(be)||he===de||he==null&&de==null||qt(t,n,be,he,o,de)}function E0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function US(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&E0(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],le=G.startTime;if(le>R)break;var xe=G.transferSize,be=G.initiatorType;xe&&E0(be)&&(G=G.responseEnd,_+=xe*(G<R?1:(R-le)/(G-le)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ih=null,ah=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function b0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function sh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function NS(){var t=window.event;return t&&t.type==="popstate"?t===rh?!1:(rh=t,!0):(rh=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,OS=typeof clearTimeout=="function"?clearTimeout:void 0,R0=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof R0<"u"?function(t){return R0.resolve(null).then(t).catch(IS)}:A0;function IS(t){setTimeout(function(){throw t})}function ts(t){return t==="head"}function C0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),wr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Oa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&zo(t.ownerDocument.body);a=u}while(a);wr(n)}function w0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function oh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),Pa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function BS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Oa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function zS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=wi(t.nextSibling),t===null))return null;return t}function D0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=wi(t.nextSibling),t===null))return null;return t}function lh(t){return t.data==="$?"||t.data==="$~"}function ch(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function FS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var uh=null;function L0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return wi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function N0(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function zo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pa(t)}var Di=new Map,O0=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ea=z.d;z.d={f:HS,r:GS,D:VS,C:kS,L:XS,m:WS,X:YS,S:qS,M:ZS};function HS(){var t=Ea.f(),n=ec();return t||n}function GS(t){var n=ra(t);n!==null&&n.tag===5&&n.type==="form"?Qm(n):Ea.r(t)}var Ar=typeof document>"u"?null:document;function P0(t,n,a){var o=Ar;if(o&&typeof n=="string"&&n){var u=zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),O0.has(u)||(O0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Bn(n,"link",t),gn(n),o.head.appendChild(n)))}}function VS(t){Ea.D(t),P0("dns-prefetch",t,null)}function kS(t,n){Ea.C(t,n),P0("preconnect",t,n)}function XS(t,n,a){Ea.L(t,n,a);var o=Ar;if(o&&t&&n){var u='link[rel="preload"][as="'+zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+zt(a.imageSizes)+'"]')):u+='[href="'+zt(t)+'"]';var f=u;switch(n){case"style":f=Rr(t);break;case"script":f=Cr(t)}Di.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Di.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Ho(f))||(n=o.createElement("link"),Bn(n,"link",t),gn(n),o.head.appendChild(n)))}}function WS(t,n){Ea.m(t,n);var a=Ar;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+zt(o)+'"][href="'+zt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Cr(t)}if(!Di.has(f)&&(t=S({rel:"modulepreload",href:t},n),Di.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(f)))return}o=a.createElement("link"),Bn(o,"link",t),gn(o),a.head.appendChild(o)}}}function qS(t,n,a){Ea.S(t,n,a);var o=Ar;if(o&&t){var u=Ia(o).hoistableStyles,f=Rr(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Fo(f)))R.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Di.get(f))&&fh(t,a);var G=_=o.createElement("link");gn(G),Bn(G,"link",t),G._p=new Promise(function(le,xe){G.onload=le,G.onerror=xe}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,uc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function YS(t,n){Ea.X(t,n);var a=Ar;if(a&&t){var o=Ia(a).hoistableScripts,u=Cr(t),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(t=S({src:t,async:!0},n),(n=Di.get(u))&&hh(t,n),f=a.createElement("script"),gn(f),Bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ZS(t,n){Ea.M(t,n);var a=Ar;if(a&&t){var o=Ia(a).hoistableScripts,u=Cr(t),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=Di.get(u))&&hh(t,n),f=a.createElement("script"),gn(f),Bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function I0(t,n,a,o){var u=(u=ie.current)?cc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rr(a.href),a=Ia(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Rr(a.href);var f=Ia(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Fo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(t,a),f||jS(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cr(a),a=Ia(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Rr(t){return'href="'+zt(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function B0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function jS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Bn(n,"link",a),gn(n),t.head.appendChild(n))}function Cr(t){return'[src="'+zt(t)+'"]'}function Ho(t){return"script[async]"+t}function z0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+zt(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),Bn(o,"style",u),uc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Rr(a.href);var f=t.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,gn(f),f;o=B0(a),(u=Di.get(u))&&fh(o,u),f=(t.ownerDocument||t).createElement("link"),gn(f);var _=f;return _._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Bn(f,"link",o),n.state.loading|=4,uc(f,a.precedence,t),n.instance=f;case"script":return f=Cr(a.src),(u=t.querySelector(Ho(f)))?(n.instance=u,gn(u),u):(o=a,(u=Di.get(f))&&(o=S({},a),hh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),Bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,t));return n.instance}function uc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function fh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function F0(t,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Oa]||f[un]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function H0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function KS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function QS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Rr(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,gn(f);return}f=n.ownerDocument||n,o=B0(o),(u=Di.get(u))&&fh(o,u),f=f.createElement("link"),gn(f);var _=f;_._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),Bn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dh=0;function JS(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&dh===0&&(dh=62500*US());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>dh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,n.forEach($S,t),dc=null,hc.call(t))}function $S(t,n){if(!(n.state.loading&4)){var a=dc.get(t);if(a)var o=a.get(null);else{a=new Map,dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Go={$$typeof:H,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function ey(t,n,a,o,u,f,_,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function V0(t,n,a,o,u,f,_,R,G,le,xe,be){return t=new ey(t,n,a,_,G,le,xe,be,R),n=1,f===!0&&(n|=24),f=hi(3,null,null,n),t.current=f,f.stateNode=t,n=Wu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ju(f),t}function k0(t){return t?(t=sr,t):sr}function X0(t,n,a,o,u,f){u=k0(u),o.context===null?o.context=u:o.pendingContext=u,o=Xa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Wa(t,o,n),a!==null&&(ii(a,t,n),xo(a,t,n))}function W0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ph(t,n){W0(t,n),(t=t.alternate)&&W0(t,n)}function q0(t){if(t.tag===13||t.tag===31){var n=Rs(t,67108864);n!==null&&ii(n,t,67108864),ph(t,67108864)}}function Y0(t){if(t.tag===13||t.tag===31){var n=_i();n=Un(n);var a=Rs(t,n);a!==null&&ii(a,t,n),ph(t,n)}}var mc=!0;function ty(t,n,a,o){var u=P.T;P.T=null;var f=z.p;try{z.p=2,mh(t,n,a,o)}finally{z.p=f,P.T=u}}function ny(t,n,a,o){var u=P.T;P.T=null;var f=z.p;try{z.p=8,mh(t,n,a,o)}finally{z.p=f,P.T=u}}function mh(t,n,a,o){if(mc){var u=gh(o);if(u===null)th(t,n,o,gc,a),j0(t,o);else if(ay(u,t,n,a,o))o.stopPropagation();else if(j0(t,o),n&4&&-1<iy.indexOf(t)){for(;u!==null;){var f=ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ue(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var G=1<<31-ze(_);R.entanglements[1]|=G,_&=~G}Zi(f),(Ot&6)===0&&(Jl=Nt()+500,Po(0))}}break;case 31:case 13:R=Rs(f,2),R!==null&&ii(R,f,2),ec(),ph(f,2)}if(f=gh(o),f===null&&th(t,n,o,gc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else th(t,n,o,null,a)}}function gh(t){return t=_u(t),_h(t)}var gc=null;function _h(t){if(gc=null,t=sa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function Z0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case L:return 2;case y:return 8;case K:case re:return 32;case pe:return 268435456;default:return 32}default:return 32}}var vh=!1,ns=null,is=null,as=null,Vo=new Map,ko=new Map,ss=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j0(t,n){switch(t){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ra(n),n!==null&&q0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ay(t,n,a,o,u){switch(n){case"focusin":return ns=Xo(ns,t,n,a,o,u),!0;case"dragenter":return is=Xo(is,t,n,a,o,u),!0;case"mouseover":return as=Xo(as,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Vo.set(f,Xo(Vo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ko.set(f,Xo(ko.get(f)||null,t,n,a,o,u)),!0}return!1}function K0(t){var n=sa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Cn(t.priority,function(){Y0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Cn(t.priority,function(){Y0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=gh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=ra(a),n!==null&&q0(n),t.blockedOn=a,!1;n.shift()}return!0}function Q0(t,n,a){_c(t)&&a.delete(n)}function sy(){vh=!1,ns!==null&&_c(ns)&&(ns=null),is!==null&&_c(is)&&(is=null),as!==null&&_c(as)&&(as=null),Vo.forEach(Q0),ko.forEach(Q0)}function vc(t,n){t.blockedOn===n&&(t.blockedOn=null,vh||(vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sy)))}var xc=null;function J0(t){xc!==t&&(xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var f=ra(a);f!==null&&(t.splice(n,3),n-=3,gf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wr(t){function n(G){return vc(G,t)}ns!==null&&vc(ns,t),is!==null&&vc(is,t),as!==null&&vc(as,t),Vo.forEach(n),ko.forEach(n);for(var a=0;a<ss.length;a++){var o=ss[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ss.length&&(a=ss[0],a.blockedOn===null);)K0(a),a.blockedOn===null&&ss.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[dn]||null;if(typeof f=="function")_||J0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[dn]||null)R=_.formAction;else if(_h(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),J0(a)}}}function $0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xh(t){this._internalRoot=t}Sc.prototype.render=xh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=_i();X0(a,o,t,n,null,null)},Sc.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;X0(t.current,2,null,t,null,null),ec(),n[Vn]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ss.length&&n!==0&&n<ss[a].priority;a++);ss.splice(a,0,t),a===0&&K0(t)}};var e_=e.version;if(e_!=="19.2.1")throw Error(s(527,e_,"19.2.1"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var ry={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{me=yc.inject(ry),ge=yc}catch{}}return qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=og,f=lg,_=cg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=V0(t,1,!1,null,null,a,o,null,u,f,_,$0),t[Vn]=n.current,eh(t),new xh(n)},qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=og,_=lg,R=cg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=V0(t,1,!0,n,a??null,o,u,G,f,_,R,$0),n.context=k0(null),a=n.current,o=_i(),o=Un(o),u=Xa(o),u.callback=null,Wa(a,u,o),a=o,n.current.lanes=a,Re(n,a),Zi(n),t[Vn]=n.current,eh(t),new Sc(n)},qo.version="19.2.1",qo}var u_;function gy(){if(u_)return Mh.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Mh.exports=my(),Mh.exports}var _y=gy();const ap="185",Yr={ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vy=0,f_=1,xy=2,Qc=1,Sy=2,tl=3,gs=0,oi=1,Gi=2,Da=0,Zr=1,h_=2,d_=3,p_=4,yy=5,Xs=100,My=101,Ey=102,by=103,Ty=104,Ay=200,Ry=201,Cy=202,wy=203,ud=204,fd=205,Dy=206,Ly=207,Uy=208,Ny=209,Oy=210,Py=211,Iy=212,By=213,zy=214,hd=0,dd=1,pd=2,Qr=3,md=4,gd=5,_d=6,vd=7,Ev=0,Fy=1,Hy=2,ea=0,bv=1,Tv=2,Av=3,sp=4,Rv=5,Cv=6,wv=7,Dv=300,Qs=301,Jr=302,Ah=303,Rh=304,fu=306,xd=1e3,wa=1001,Sd=1002,Fn=1003,Gy=1004,Mc=1005,Yn=1006,Ch=1007,Ys=1008,Mi=1009,Lv=1010,Uv=1011,sl=1012,rp=1013,ia=1014,Ji=1015,Ua=1016,op=1017,lp=1018,rl=1020,Nv=35902,Ov=35899,Pv=1021,Iv=1022,ki=1023,Na=1026,Zs=1027,Bv=1028,cp=1029,Js=1030,up=1031,fp=1033,Jc=33776,$c=33777,eu=33778,tu=33779,yd=35840,Md=35841,Ed=35842,bd=35843,Td=36196,Ad=37492,Rd=37496,Cd=37488,wd=37489,au=37490,Dd=37491,Ld=37808,Ud=37809,Nd=37810,Od=37811,Pd=37812,Id=37813,Bd=37814,zd=37815,Fd=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,Wd=36492,qd=36494,Yd=36495,Zd=36283,jd=36284,su=36285,Kd=36286,Vy=3200,Qd=0,ky=1,ps="",Si="srgb",ru="srgb-linear",ou="linear",Vt="srgb",Dr=7680,m_=519,Xy=512,Wy=513,qy=514,hp=515,Yy=516,Zy=517,dp=518,jy=519,g_=35044,__="300 es",$i=2e3,ol=2001;function Ky(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qy(){const r=lu("canvas");return r.style.display="block",r}const v_={};function x_(...r){const e="THREE."+r.shift();console.log(e,...r)}function zv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=zv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function wt(...r){r=zv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function jr(...r){const e=r.join(" ");e in v_||(v_[e]=!0,at(...r))}function Jy(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const $y={[hd]:dd,[pd]:_d,[md]:vd,[Qr]:gd,[dd]:hd,[_d]:pd,[vd]:md,[gd]:Qr};class xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=Math.PI/180,Jd=180/Math.PI;function ll(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function vt(r,e,i){return Math.max(e,Math.min(i,r))}function eM(r,e){return(r%e+e)%e}function wh(r,e,i){return(1-i)*r+i*e}function Yo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ai(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tM={DEG2RAD:il};class rt{static{rt.prototype.isVector2=!0}constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _s{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],S=s[l+3],g=c[h+0],E=c[h+1],T=c[h+2],w=c[h+3];if(S!==w||m!==g||d!==E||v!==T){let M=m*g+d*E+v*T+S*w;M<0&&(g=-g,E=-E,T=-T,w=-w,M=-M);let x=1-p;if(M<.9995){const F=Math.acos(M),H=Math.sin(F);x=Math.sin(x*F)/H,p=Math.sin(p*F)/H,m=m*x+g*p,d=d*x+E*p,v=v*x+T*p,S=S*x+w*p}else{m=m*x+g*p,d=d*x+E*p,v=v*x+T*p,S=S*x+w*p;const F=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=F,d*=F,v*=F,S*=F}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],S=c[h],g=c[h+1],E=c[h+2],T=c[h+3];return e[i]=p*T+v*S+m*E-d*g,e[i+1]=m*T+v*g+d*S-p*E,e[i+2]=d*T+v*E+p*g-m*S,e[i+3]=v*T-p*S-m*g-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),S=p(c/2),g=m(s/2),E=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*v*S+d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S-g*E*T;break;case"YXZ":this._x=g*v*S+d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S+g*E*T;break;case"ZXY":this._x=g*v*S-d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S-g*E*T;break;case"ZYX":this._x=g*v*S-d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S+g*E*T;break;case"YZX":this._x=g*v*S+d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S-g*E*T;break;case"XZY":this._x=g*v*S-d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S+g*E*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],g=s+p+S;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(s>p&&s>S){const E=2*Math.sqrt(1+s-p-S);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>S){const E=2*Math.sqrt(1+p-s-S);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+S-s-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-s*d,this._z=c*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${static{$.prototype.isVector3=!0}constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(S_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(S_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),v=2*(p*i-c*l),S=2*(c*s-h*i);return this.x=i+m*d+h*S-p*v,this.y=s+m*v+p*d-c*S,this.z=l+m*S+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dh=new $,S_=new _s;class ct{static{ct.prototype.isMatrix3=!0}constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],S=s[7],g=s[2],E=s[5],T=s[8],w=l[0],M=l[3],x=l[6],F=l[1],H=l[4],C=l[7],I=l[2],U=l[5],O=l[8];return c[0]=h*w+p*F+m*I,c[3]=h*M+p*H+m*U,c[6]=h*x+p*C+m*O,c[1]=d*w+v*F+S*I,c[4]=d*M+v*H+S*U,c[7]=d*x+v*C+S*O,c[2]=g*w+E*F+T*I,c[5]=g*M+E*H+T*U,c[8]=g*x+E*C+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-s*c*v+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=v*h-p*d,g=p*m-v*c,E=d*c-h*m,T=i*S+s*g+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=S*w,e[1]=(l*d-v*s)*w,e[2]=(p*s-l*h)*w,e[3]=g*w,e[4]=(v*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=E*w,e[7]=(s*m-d*i)*w,e[8]=(h*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return jr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,i)),this}rotate(e){return jr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,i){return jr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lh=new ct,y_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nM(){const r={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Vt&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Vt&&(l.r=Kr(l.r),l.g=Kr(l.g),l.b=Kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ps?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ru]:{primaries:e,whitePoint:s,transfer:ou,toXYZ:y_,fromXYZ:M_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:y_,fromXYZ:M_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Ct=nM();function La(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Lr;class iM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Lr===void 0&&(Lr=lu("canvas")),Lr.width=e.width,Lr.height=e.height;const l=Lr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Lr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=lu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=La(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(La(i[s]/255)*255):i[s]=La(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aM=0;class pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Uh(l[h].image)):c.push(Uh(l[h]))}else c=Uh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?iM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let sM=0;const Nh=new $;class Qn extends xs{constructor(e=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,s=wa,l=wa,c=Yn,h=Ys,p=ki,m=Mi,d=Qn.DEFAULT_ANISOTROPY,v=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ll(),this.name="",this.source=new pp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Dv;Qn.DEFAULT_ANISOTROPY=1;class cn{static{cn.prototype.isVector4=!0}constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],v=m[4],S=m[8],g=m[1],E=m[5],T=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+w)<.1&&Math.abs(T+M)<.1&&Math.abs(d+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(d+1)/2,C=(E+1)/2,I=(x+1)/2,U=(v+g)/4,O=(S+w)/4,b=(T+M)/4;return H>C&&H>I?H<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(H),l=U/s,c=O/s):C>I?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=U/l,c=b/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=O/c,l=b/c),this.set(s,l,c,i),this}let F=Math.sqrt((M-T)*(M-T)+(S-w)*(S-w)+(g-v)*(g-v));return Math.abs(F)<.001&&(F=1),this.x=(M-T)/F,this.y=(S-w)/F,this.z=(g-v)/F,this.w=Math.acos((d+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this.w=vt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this.w=vt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rM extends xs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Qn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new pp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends rM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Fv extends Qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends Qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{static{nn.prototype.isMatrix4=!0}constructor(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,M)}set(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=S,x[14]=g,x[3]=E,x[7]=T,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ur.setFromMatrixColumn(e,0).length(),c=1/Ur.setFromMatrixColumn(e,1).length(),h=1/Ur.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=h*v,E=h*S,T=p*v,w=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=E+T*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=T+E*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*v,E=m*S,T=d*v,w=d*S;i[0]=g+w*p,i[4]=T*p-E,i[8]=h*d,i[1]=h*S,i[5]=h*v,i[9]=-p,i[2]=E*p-T,i[6]=w+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*v,E=m*S,T=d*v,w=d*S;i[0]=g-w*p,i[4]=-h*S,i[8]=T+E*p,i[1]=E+T*p,i[5]=h*v,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*v,E=h*S,T=p*v,w=p*S;i[0]=m*v,i[4]=T*d-E,i[8]=g*d+w,i[1]=m*S,i[5]=w*d+g,i[9]=E*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,E=h*d,T=p*m,w=p*d;i[0]=m*v,i[4]=w-g*S,i[8]=T*S+E,i[1]=S,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*S+T,i[10]=g-w*S}else if(e.order==="XZY"){const g=h*m,E=h*d,T=p*m,w=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=g*S+w,i[5]=h*v,i[9]=E*S-T,i[2]=T*S-E,i[6]=p*v,i[10]=w*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,cM)}lookAt(e,i,s){const l=this.elements;return vi.subVectors(e,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),os.crossVectors(s,vi),os.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),os.crossVectors(s,vi)),os.normalize(),Ec.crossVectors(vi,os),l[0]=os.x,l[4]=Ec.x,l[8]=vi.x,l[1]=os.y,l[5]=Ec.y,l[9]=vi.y,l[2]=os.z,l[6]=Ec.z,l[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],S=s[5],g=s[9],E=s[13],T=s[2],w=s[6],M=s[10],x=s[14],F=s[3],H=s[7],C=s[11],I=s[15],U=l[0],O=l[4],b=l[8],D=l[12],k=l[1],V=l[5],q=l[9],te=l[13],ne=l[2],j=l[6],P=l[10],z=l[14],ae=l[3],_e=l[7],Ee=l[11],N=l[15];return c[0]=h*U+p*k+m*ne+d*ae,c[4]=h*O+p*V+m*j+d*_e,c[8]=h*b+p*q+m*P+d*Ee,c[12]=h*D+p*te+m*z+d*N,c[1]=v*U+S*k+g*ne+E*ae,c[5]=v*O+S*V+g*j+E*_e,c[9]=v*b+S*q+g*P+E*Ee,c[13]=v*D+S*te+g*z+E*N,c[2]=T*U+w*k+M*ne+x*ae,c[6]=T*O+w*V+M*j+x*_e,c[10]=T*b+w*q+M*P+x*Ee,c[14]=T*D+w*te+M*z+x*N,c[3]=F*U+H*k+C*ne+I*ae,c[7]=F*O+H*V+C*j+I*_e,c[11]=F*b+H*q+C*P+I*Ee,c[15]=F*D+H*te+C*z+I*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],S=e[6],g=e[10],E=e[14],T=e[3],w=e[7],M=e[11],x=e[15],F=m*E-d*g,H=p*E-d*S,C=p*g-m*S,I=h*E-d*v,U=h*g-m*v,O=h*S-p*v;return i*(w*F-M*H+x*C)-s*(T*F-M*I+x*U)+l*(T*H-w*I+x*O)-c*(T*C-w*U+M*O)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],v=e[10];return i*(h*v-p*d)-s*(c*v-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=e[9],g=e[10],E=e[11],T=e[12],w=e[13],M=e[14],x=e[15],F=i*p-s*h,H=i*m-l*h,C=i*d-c*h,I=s*m-l*p,U=s*d-c*p,O=l*d-c*m,b=v*w-S*T,D=v*M-g*T,k=v*x-E*T,V=S*M-g*w,q=S*x-E*w,te=g*x-E*M,ne=F*te-H*q+C*V+I*k-U*D+O*b;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ne;return e[0]=(p*te-m*q+d*V)*j,e[1]=(l*q-s*te-c*V)*j,e[2]=(w*O-M*U+x*I)*j,e[3]=(g*U-S*O-E*I)*j,e[4]=(m*k-h*te-d*D)*j,e[5]=(i*te-l*k+c*D)*j,e[6]=(M*C-T*O-x*H)*j,e[7]=(v*O-g*C+E*H)*j,e[8]=(h*q-p*k+d*b)*j,e[9]=(s*k-i*q-c*b)*j,e[10]=(T*U-w*C+x*F)*j,e[11]=(S*C-v*U-E*F)*j,e[12]=(p*D-h*V-m*b)*j,e[13]=(i*V-s*D+l*b)*j,e[14]=(w*H-T*I-M*F)*j,e[15]=(v*I-S*H+g*F)*j,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,v=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,S=p+p,g=c*d,E=c*v,T=c*S,w=h*v,M=h*S,x=p*S,F=m*d,H=m*v,C=m*S,I=s.x,U=s.y,O=s.z;return l[0]=(1-(w+x))*I,l[1]=(E+C)*I,l[2]=(T-H)*I,l[3]=0,l[4]=(E-C)*U,l[5]=(1-(g+x))*U,l[6]=(M+F)*U,l[7]=0,l[8]=(T+H)*O,l[9]=(M-F)*O,l[10]=(1-(g+w))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Ur.set(l[0],l[1],l[2]).length();const p=Ur.set(l[4],l[5],l[6]).length(),m=Ur.set(l[8],l[9],l[10]).length();c<0&&(h=-h),zi.copy(this);const d=1/h,v=1/p,S=1/m;return zi.elements[0]*=d,zi.elements[1]*=d,zi.elements[2]*=d,zi.elements[4]*=v,zi.elements[5]*=v,zi.elements[6]*=v,zi.elements[8]*=S,zi.elements[9]*=S,zi.elements[10]*=S,i.setFromRotationMatrix(zi),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=$i,m=!1){const d=this.elements,v=2*c/(i-e),S=2*c/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(p===$i)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===ol)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=$i,m=!1){const d=this.elements,v=2/(i-e),S=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(p===$i)T=-2/(h-c),w=-(h+c)/(h-c);else if(p===ol)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ur=new $,zi=new nn,lM=new $(0,0,0),cM=new $(1,1,1),os=new $,Ec=new $,vi=new $,E_=new nn,b_=new _s;class vs{constructor(e=0,i=0,s=0,l=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-vt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return E_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return b_.setFromEuler(this),this.setFromQuaternion(b_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class mp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uM=0;const T_=new $,Nr=new _s,ba=new nn,bc=new $,Zo=new $,fM=new $,hM=new _s,A_=new $(1,0,0),R_=new $(0,1,0),C_=new $(0,0,1),w_={type:"added"},dM={type:"removed"},Or={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Ln extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new $,i=new vs,s=new _s,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ct}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(A_,e)}rotateY(e){return this.rotateOnAxis(R_,e)}rotateZ(e){return this.rotateOnAxis(C_,e)}translateOnAxis(e,i){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(A_,e)}translateY(e){return this.translateOnAxis(R_,e)}translateZ(e){return this.translateOnAxis(C_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?bc.copy(e):bc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(Zo,bc,this.up):ba.lookAt(bc,Zo,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(ba),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w_),Or.child=e,this.dispatchEvent(Or),Or.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(dM),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w_),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),S=h(e.shapes),g=h(e.skeletons),E=h(e.animations),T=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new $(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class js extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pM={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(d,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=v.position.distanceTo(S.position),E=.02,T=.005;d.inputState.pinching&&g>E+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=E-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new js;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Ih(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class gt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ct.workingColorSpace){if(e=eM(e,1),i=vt(i,0,1),s=vt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ih(h,c,e+1/3),this.g=Ih(h,c,e),this.b=Ih(h,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const s=Hv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Ct.workingToColorSpace(qn.copy(this),e),Math.round(vt(qn.r*255,0,255))*65536+Math.round(vt(qn.g*255,0,255))*256+Math.round(vt(qn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(qn.copy(this),i);const s=qn.r,l=qn.g,c=qn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=v<=.5?S/(h+p):S/(2-h-p),h){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(qn.copy(this),i),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Si){Ct.workingToColorSpace(qn.copy(this),e);const i=qn.r,s=qn.g,l=qn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+i,ls.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ls),e.getHSL(Tc);const s=wh(ls.h,Tc.h,i),l=wh(ls.s,Tc.s,i),c=wh(ls.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new gt;gt.NAMES=Hv;class gp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new gt(e),this.density=i}clone(){return new gp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mM extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new $,Ta=new $,Bh=new $,Aa=new $,Pr=new $,Ir=new $,D_=new $,zh=new $,Fh=new $,Hh=new $,Gh=new cn,Vh=new cn,kh=new cn;class Ui{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Fi.subVectors(l,i),Ta.subVectors(s,i),Bh.subVectors(e,i);const h=Fi.dot(Fi),p=Fi.dot(Ta),m=Fi.dot(Bh),d=Ta.dot(Ta),v=Ta.dot(Bh),S=h*d-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,E=(d*m-p*v)*g,T=(h*v-p*m)*g;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(h,Aa.y),m.addScaledVector(p,Aa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(e,i),Vh.fromBufferAttribute(e,s),kh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Gh,c.x),h.addScaledVector(Vh,c.y),h.addScaledVector(kh,c.z),h}static isFrontFacing(e,i,s,l){return Fi.subVectors(s,i),Ta.subVectors(e,i),Fi.cross(Ta).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Fi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;Pr.subVectors(l,s),Ir.subVectors(c,s),zh.subVectors(e,s);const m=Pr.dot(zh),d=Ir.dot(zh);if(m<=0&&d<=0)return i.copy(s);Fh.subVectors(e,l);const v=Pr.dot(Fh),S=Ir.dot(Fh);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Pr,h);Hh.subVectors(e,c);const E=Pr.dot(Hh),T=Ir.dot(Hh);if(T>=0&&E<=T)return i.copy(c);const w=E*d-m*T;if(w<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Ir,p);const M=v*T-E*S;if(M<=0&&S-v>=0&&E-T>=0)return D_.subVectors(c,l),p=(S-v)/(S-v+(E-T)),i.copy(l).addScaledVector(D_,p);const x=1/(M+w+g);return h=w*x,p=g*x,i.copy(s).addScaledVector(Pr,h).addScaledVector(Ir,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Hi):Hi.fromBufferAttribute(c,h),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Rc.subVectors(this.max,jo),Br.subVectors(e.a,jo),zr.subVectors(e.b,jo),Fr.subVectors(e.c,jo),cs.subVectors(zr,Br),us.subVectors(Fr,zr),Hs.subVectors(Br,Fr);let i=[0,-cs.z,cs.y,0,-us.z,us.y,0,-Hs.z,Hs.y,cs.z,0,-cs.x,us.z,0,-us.x,Hs.z,0,-Hs.x,-cs.y,cs.x,0,-us.y,us.x,0,-Hs.y,Hs.x,0];return!Xh(i,Br,zr,Fr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Xh(i,Br,zr,Fr,Rc))?!1:(Cc.crossVectors(cs,us),i=[Cc.x,Cc.y,Cc.z],Xh(i,Br,zr,Fr,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new $,new $,new $,new $,new $,new $,new $,new $],Hi=new $,Ac=new cl,Br=new $,zr=new $,Fr=new $,cs=new $,us=new $,Hs=new $,jo=new $,Rc=new $,Cc=new $,Gs=new $;function Xh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Gs.fromArray(r,c);const p=l.x*Math.abs(Gs.x)+l.y*Math.abs(Gs.y)+l.z*Math.abs(Gs.z),m=e.dot(Gs),d=i.dot(Gs),v=s.dot(Gs);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const yn=new $,wc=new rt;let gM=0;class na extends xs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=g_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Yo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ai(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),s=ai(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),s=ai(s,this.array),l=ai(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),s=ai(s,this.array),l=ai(l,this.array),c=ai(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gv extends na{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Vv extends na{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Hn extends na{constructor(e,i,s){super(new Float32Array(e),i,s)}}const _M=new cl,Ko=new $,Wh=new $;class hu{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):_M.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Wh)),this.expandByPoint(Ko.copy(e.center).sub(Wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vM=0;const Li=new nn,qh=new Ln,Hr=new $,xi=new cl,Qo=new cl,Dn=new $;class li extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ky(e)?Vv:Gv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ct().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,i,s){return Li.makeTranslation(e,i,s),this.applyMatrix4(Li),this}scale(e,i,s){return Li.makeScale(e,i,s),this.applyMatrix4(Li),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Hn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];xi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Qo.setFromBufferAttribute(p),this.morphTargetsRelative?(Dn.addVectors(xi.min,Qo.min),xi.expandByPoint(Dn),Dn.addVectors(xi.max,Qo.max),xi.expandByPoint(Dn)):(xi.expandByPoint(Qo.min),xi.expandByPoint(Qo.max))}xi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)Dn.fromBufferAttribute(p,d),m&&(Hr.fromBufferAttribute(e,d),Dn.add(Hr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new na(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new $,m[b]=new $;const d=new $,v=new $,S=new $,g=new rt,E=new rt,T=new rt,w=new $,M=new $;function x(b,D,k){d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,D),S.fromBufferAttribute(s,k),g.fromBufferAttribute(c,b),E.fromBufferAttribute(c,D),T.fromBufferAttribute(c,k),v.sub(d),S.sub(d),E.sub(g),T.sub(g);const V=1/(E.x*T.y-T.x*E.y);isFinite(V)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(S,-E.y).multiplyScalar(V),M.copy(S).multiplyScalar(E.x).addScaledVector(v,-T.x).multiplyScalar(V),p[b].add(w),p[D].add(w),p[k].add(w),m[b].add(M),m[D].add(M),m[k].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let b=0,D=F.length;b<D;++b){const k=F[b],V=k.start,q=k.count;for(let te=V,ne=V+q;te<ne;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const H=new $,C=new $,I=new $,U=new $;function O(b){I.fromBufferAttribute(l,b),U.copy(I);const D=p[b];H.copy(D),H.sub(I.multiplyScalar(I.dot(D))).normalize(),C.crossVectors(U,D);const V=C.dot(m[b])<0?-1:1;h.setXYZW(b,H.x,H.y,H.z,V)}for(let b=0,D=F.length;b<D;++b){const k=F[b],V=k.start,q=k.count;for(let te=V,ne=V+q;te<ne;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new na(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,h=new $,p=new $,m=new $,d=new $,v=new $,S=new $;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),w=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,M),p.add(v),m.add(v),d.add(v),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,S=p.normalized,g=new d.constructor(m.length*v);let E=0,T=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?E=m[w]*p.data.stride+p.offset:E=m[w]*v;for(let x=0;x<v;x++)g[T++]=d[E++]}return new na(g,v,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new li,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,S=d.length;v<S;v++){const g=d[v],E=e(g,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,g=d.length;S<g;S++){const E=d[S];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],S=c[d];for(let g=0,E=S.length;g<E;g++)v.push(S[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xM=0;class to extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=Zr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(s.blending=this.blending),this.side!==gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ud&&(s.blendSrc=this.blendSrc),this.blendDst!==fd&&(s.blendDst=this.blendDst),this.blendEquation!==Xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new rt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ca=new $,Yh=new $,Dc=new $,fs=new $,Zh=new $,Lc=new $,jh=new $;class du{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Yh.copy(e).add(i).multiplyScalar(.5),Dc.copy(i).sub(e).normalize(),fs.copy(this.origin).sub(Yh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Dc),p=fs.dot(this.direction),m=-fs.dot(Dc),d=fs.lengthSq(),v=Math.abs(1-h*h);let S,g,E,T;if(v>0)if(S=h*m-p,g=h*p-m,T=c*v,S>=0)if(g>=-T)if(g<=T){const w=1/v;S*=w,g*=w,E=S*(S+h*g+2*p)+g*(h*S+g+2*m)+d}else g=c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;else g=-c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;else g<=-T?(S=Math.max(0,-(-h*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+d):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+d):(S=Math.max(0,-(h*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+d);else g=h>0?-c:c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Yh).addScaledVector(Dc,g),E}intersectSphere(e,i){Ca.subVectors(e.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,h=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,h=(e.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,s,l,c){Zh.subVectors(i,e),Lc.subVectors(s,e),jh.crossVectors(Zh,Lc);let h=this.direction.dot(jh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;fs.subVectors(this.origin,e);const m=p*this.direction.dot(Lc.crossVectors(fs,Lc));if(m<0)return null;const d=p*this.direction.dot(Zh.cross(fs));if(d<0||m+d>h)return null;const v=-p*fs.dot(jh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _p extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=Ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const L_=new nn,Vs=new du,Uc=new hu,U_=new $,Nc=new $,Oc=new $,Pc=new $,Kh=new $,Ic=new $,N_=new $,Bc=new $;class zn extends Ln{constructor(e=new li,i=new _p){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ic.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],S=c[m];v!==0&&(Kh.fromBufferAttribute(S,e),h?Ic.addScaledVector(Kh,v):Ic.addScaledVector(Kh.sub(i),v))}i.add(Ic)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),Vs.copy(e.ray).recast(e.near),!(Uc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(Uc,U_)===null||Vs.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(L_.copy(c).invert(),Vs.copy(e.ray).applyMatrix4(L_),!(s.boundingBox!==null&&Vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Vs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],x=h[M.materialIndex],F=Math.max(M.start,E.start),H=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let C=F,I=H;C<I;C+=3){const U=p.getX(C),O=p.getX(C+1),b=p.getX(C+2);l=zc(this,x,e,s,d,v,S,U,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let M=T,x=w;M<x;M+=3){const F=p.getX(M),H=p.getX(M+1),C=p.getX(M+2);l=zc(this,h,e,s,d,v,S,F,H,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],x=h[M.materialIndex],F=Math.max(M.start,E.start),H=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let C=F,I=H;C<I;C+=3){const U=C,O=C+1,b=C+2;l=zc(this,x,e,s,d,v,S,U,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let M=T,x=w;M<x;M+=3){const F=M,H=M+1,C=M+2;l=zc(this,h,e,s,d,v,S,F,H,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function SM(r,e,i,s,l,c,h,p){let m;if(e.side===oi?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===gs,p),m===null)return null;Bc.copy(p),Bc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Bc);return d<i.near||d>i.far?null:{distance:d,point:Bc.clone(),object:r}}function zc(r,e,i,s,l,c,h,p,m,d){r.getVertexPosition(p,Nc),r.getVertexPosition(m,Oc),r.getVertexPosition(d,Pc);const v=SM(r,e,i,s,Nc,Oc,Pc,N_);if(v){const S=new $;Ui.getBarycoord(N_,Nc,Oc,Pc,S),l&&(v.uv=Ui.getInterpolatedAttribute(l,p,m,d,S,new rt)),c&&(v.uv1=Ui.getInterpolatedAttribute(c,p,m,d,S,new rt)),h&&(v.normal=Ui.getInterpolatedAttribute(h,p,m,d,S,new $),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new $,materialIndex:0};Ui.getNormal(Nc,Oc,Pc,g.normal),v.face=g,v.barycoord=S}return v}class yM extends Qn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=Fn,v=Fn,S,g){super(null,h,p,m,d,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new $,MM=new $,EM=new ct;class ds{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Qh.subVectors(s,i).cross(MM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Qh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||EM.getNormalMatrix(e),l=this.coplanarPoint(Qh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new hu,bM=new rt(.5,.5),Fc=new $;class vp{constructor(e=new ds,i=new ds,s=new ds,l=new ds,c=new ds,h=new ds){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=$i,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],S=c[5],g=c[6],E=c[7],T=c[8],w=c[9],M=c[10],x=c[11],F=c[12],H=c[13],C=c[14],I=c[15];if(l[0].setComponents(d-h,E-v,x-T,I-F).normalize(),l[1].setComponents(d+h,E+v,x+T,I+F).normalize(),l[2].setComponents(d+p,E+S,x+w,I+H).normalize(),l[3].setComponents(d-p,E-S,x-w,I-H).normalize(),s)l[4].setComponents(m,g,M,C).normalize(),l[5].setComponents(d-m,E-g,x-M,I-C).normalize();else if(l[4].setComponents(d-m,E-g,x-M,I-C).normalize(),i===$i)l[5].setComponents(d+m,E+g,x+M,I+C).normalize();else if(i===ol)l[5].setComponents(m,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);const i=bM.distanceTo(e.center);return ks.radius=.7071067811865476+i,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fc.x=l.normal.x>0?e.max.x:e.min.x,Fc.y=l.normal.y>0?e.max.y:e.min.y,Fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ks extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cu=new $,uu=new $,O_=new nn,Jo=new du,Hc=new hu,Jh=new $,P_=new $;class kv extends Ln{constructor(e=new li,i=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=cu.distanceTo(uu);e.setAttribute("lineDistance",new Hn(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;O_.copy(l).invert(),Jo.copy(e.ray).applyMatrix4(O_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const E=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let w=E,M=T-1;w<M;w+=d){const x=v.getX(w),F=v.getX(w+1),H=Gc(this,e,Jo,m,x,F,w);H&&i.push(H)}if(this.isLineLoop){const w=v.getX(T-1),M=v.getX(E),x=Gc(this,e,Jo,m,w,M,T-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let w=E,M=T-1;w<M;w+=d){const x=Gc(this,e,Jo,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=Gc(this,e,Jo,m,T-1,E,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Gc(r,e,i,s,l,c,h){const p=r.geometry.attributes.position;if(cu.fromBufferAttribute(p,l),uu.fromBufferAttribute(p,c),i.distanceSqToSegment(cu,uu,Jh,P_)>s)return;Jh.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Jh);if(!(d<e.near||d>e.far))return{distance:d,point:P_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const I_=new $,B_=new $;class al extends kv{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)I_.fromBufferAttribute(i,l),B_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+I_.distanceTo(B_);e.setAttribute("lineDistance",new Hn(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xv extends Qn{constructor(e=[],i=Qs,s,l,c,h,p,m,d,v){super(e,i,s,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $r extends Qn{constructor(e,i,s=ia,l,c,h,p=Fn,m=Fn,d,v=Na,S=1){if(v!==Na&&v!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,c,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class TM extends $r{constructor(e,i=ia,s=Qs,l,c,h=Fn,p=Fn,m,d=Na){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,s,l,c,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wv extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vi extends li{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],S=[];let g=0,E=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Hn(d,3)),this.setAttribute("normal",new Hn(v,3)),this.setAttribute("uv",new Hn(S,2));function T(w,M,x,F,H,C,I,U,O,b,D){const k=C/O,V=I/b,q=C/2,te=I/2,ne=U/2,j=O+1,P=b+1;let z=0,ae=0;const _e=new $;for(let Ee=0;Ee<P;Ee++){const N=Ee*V-te;for(let B=0;B<j;B++){const J=B*k-q;_e[w]=J*F,_e[M]=N*H,_e[x]=ne,d.push(_e.x,_e.y,_e.z),_e[w]=0,_e[M]=0,_e[x]=U>0?1:-1,v.push(_e.x,_e.y,_e.z),S.push(B/O),S.push(1-Ee/b),z+=1}}for(let Ee=0;Ee<b;Ee++)for(let N=0;N<O;N++){const B=g+N+j*Ee,J=g+N+j*(Ee+1),ye=g+(N+1)+j*(Ee+1),Le=g+(N+1)+j*Ee;m.push(B,J,Le),m.push(J,ye,Le),ae+=6}p.addGroup(E,ae,D),E+=ae,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xp extends li{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const v=[],S=[],g=[],E=[];let T=0;const w=[],M=s/2;let x=0;F(),h===!1&&(e>0&&H(!0),i>0&&H(!1)),this.setIndex(v),this.setAttribute("position",new Hn(S,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(E,2));function F(){const C=new $,I=new $;let U=0;const O=(i-e)/s;for(let b=0;b<=c;b++){const D=[],k=b/c,V=k*(i-e)+e;for(let q=0;q<=l;q++){const te=q/l,ne=te*m+p,j=Math.sin(ne),P=Math.cos(ne);I.x=V*j,I.y=-k*s+M,I.z=V*P,S.push(I.x,I.y,I.z),C.set(j,O,P).normalize(),g.push(C.x,C.y,C.z),E.push(te,1-k),D.push(T++)}w.push(D)}for(let b=0;b<l;b++)for(let D=0;D<c;D++){const k=w[D][b],V=w[D+1][b],q=w[D+1][b+1],te=w[D][b+1];(e>0||D!==0)&&(v.push(k,V,te),U+=3),(i>0||D!==c-1)&&(v.push(V,q,te),U+=3)}d.addGroup(x,U,0),x+=U}function H(C){const I=T,U=new rt,O=new $;let b=0;const D=C===!0?e:i,k=C===!0?1:-1;for(let q=1;q<=l;q++)S.push(0,M*k,0),g.push(0,k,0),E.push(.5,.5),T++;const V=T;for(let q=0;q<=l;q++){const ne=q/l*m+p,j=Math.cos(ne),P=Math.sin(ne);O.x=D*P,O.y=M*k,O.z=D*j,S.push(O.x,O.y,O.z),g.push(0,k,0),U.x=j*.5+.5,U.y=P*.5*k+.5,E.push(U.x,U.y),T++}for(let q=0;q<l;q++){const te=I+q,ne=V+q;C===!0?v.push(ne,ne+1,te):v.push(ne+1,ne,te),b+=3}d.addGroup(x,b,C===!0?1:2),x+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Vc=new $,kc=new $,$h=new $,Xc=new Ui;class nu extends li{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(il*i),h=e.getIndex(),p=e.getAttribute("position"),m=h?h.count:p.count,d=[0,0,0],v=["a","b","c"],S=new Array(3),g={},E=[];for(let T=0;T<m;T+=3){h?(d[0]=h.getX(T),d[1]=h.getX(T+1),d[2]=h.getX(T+2)):(d[0]=T,d[1]=T+1,d[2]=T+2);const{a:w,b:M,c:x}=Xc;if(w.fromBufferAttribute(p,d[0]),M.fromBufferAttribute(p,d[1]),x.fromBufferAttribute(p,d[2]),Xc.getNormal($h),S[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,S[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,S[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let F=0;F<3;F++){const H=(F+1)%3,C=S[F],I=S[H],U=Xc[v[F]],O=Xc[v[H]],b=`${C}_${I}`,D=`${I}_${C}`;D in g&&g[D]?($h.dot(g[D].normal)<=c&&(E.push(U.x,U.y,U.z),E.push(O.x,O.y,O.z)),g[D]=null):b in g||(g[b]={index0:d[F],index1:d[H],normal:$h.clone()})}}for(const T in g)if(g[T]){const{index0:w,index1:M}=g[T];Vc.fromBufferAttribute(p,w),kc.fromBufferAttribute(p,M),E.push(Vc.x,Vc.y,Vc.z),E.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new Hn(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ul extends li{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,S=e/p,g=i/m,E=[],T=[],w=[],M=[];for(let x=0;x<v;x++){const F=x*g-h;for(let H=0;H<d;H++){const C=H*S-c;T.push(C,-F,0),w.push(0,0,1),M.push(H/p),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<p;F++){const H=F+d*x,C=F+d*(x+1),I=F+1+d*(x+1),U=F+1+d*x;E.push(H,C,U),E.push(C,I,U)}this.setIndex(E),this.setAttribute("position",new Hn(T,3)),this.setAttribute("normal",new Hn(w,3)),this.setAttribute("uv",new Hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}function eo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(z_(l))l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(z_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Kn(r){const e={};for(let i=0;i<r.length;i++){const s=eo(r[i]);for(const l in s)e[l]=s[l]}return e}function z_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function AM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function qv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const RM={clone:eo,merge:Kn};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=AM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new gt().setHex(l.value);break;case"v2":this.uniforms[s].value=new rt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new $().fromArray(l.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ct().fromArray(l.value);break;case"m4":this.uniforms[s].value=new nn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class DM extends aa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ws extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LM extends Ws{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class UM extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NM extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sp extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class OM extends Sp{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const ed=new nn,F_=new $,H_=new $;class Yv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vp,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;F_.setFromMatrixPosition(e.matrixWorld),i.position.copy(F_),H_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(H_),i.updateMatrixWorld(),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ol||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wc=new $,qc=new _s,ji=new $;class Zv extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wc,qc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,ji.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Wc,qc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hs=new $,G_=new rt,V_=new rt;class yi extends Zv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,i){return this.getViewBounds(e,G_,V_),i.subVectors(V_,G_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(il*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class PM extends Yv{constructor(){super(new yi(90,1,.5,500)),this.isPointLightShadow=!0}}class k_ extends Sp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new PM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class yp extends Zv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IM extends Yv{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BM extends Sp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new IM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Gr=-90,Vr=1;class zM extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Gr,Vr,e,i);l.layers=this.layers,this.add(l);const c=new yi(Gr,Vr,e,i);c.layers=this.layers,this.add(c);const h=new yi(Gr,Vr,e,i);h.layers=this.layers,this.add(h);const p=new yi(Gr,Vr,e,i);p.layers=this.layers,this.add(p);const m=new yi(Gr,Vr,e,i);m.layers=this.layers,this.add(m);const d=new yi(Gr,Vr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ol)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,g,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class FM extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const X_=new nn;class HM{constructor(e,i,s=0,l=1/0){this.ray=new du(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new mp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):wt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return X_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X_),this}intersectObject(e,i=!0,s=[]){return $d(e,this,s,i),s.sort(W_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)$d(e[l],this,s,i);return s.sort(W_),s}}function W_(r,e){return r.distance-e.distance}function $d(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,p=c.length;h<p;h++)$d(c[h],e,i,!0)}}class q_{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(vt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jv{static{jv.prototype.isMatrix2=!0}constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}}class GM extends al{constructor(e=10,i=10,s=4473924,l=8947848){s=new gt(s),l=new gt(l);const c=i/2,h=e/i,p=e/2,m=[],d=[];for(let g=0,E=0,T=-p;g<=i;g++,T+=h){m.push(-p,0,T,p,0,T),m.push(T,0,-p,T,0,p);const w=g===c?s:l;w.toArray(d,E),E+=3,w.toArray(d,E),E+=3,w.toArray(d,E),E+=3,w.toArray(d,E),E+=3}const v=new li;v.setAttribute("position",new Hn(m,3)),v.setAttribute("color",new Hn(d,3));const S=new Ks({vertexColors:!0,toneMapped:!1});super(v,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class VM extends xs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){at("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Y_(r,e,i,s){const l=kM(s);switch(i){case Pv:return r*e;case Bv:return r*e/l.components*l.byteLength;case cp:return r*e/l.components*l.byteLength;case Js:return r*e*2/l.components*l.byteLength;case up:return r*e*2/l.components*l.byteLength;case Iv:return r*e*3/l.components*l.byteLength;case ki:return r*e*4/l.components*l.byteLength;case fp:return r*e*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Md:case bd:return Math.max(r,16)*Math.max(e,8)/4;case yd:case Ed:return Math.max(r,8)*Math.max(e,8)/2;case Td:case Ad:case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Rd:case au:case Dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wd:case qd:case Yd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zd:case jd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case su:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kM(r){switch(r){case Mi:case Lv:return{byteLength:1,components:1};case sl:case Uv:case Ua:return{byteLength:2,components:1};case op:case lp:return{byteLength:2,components:4};case ia:case rp:case Ji:return{byteLength:4,components:1};case Nv:case Ov:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);function Kv(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function XM(r){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=r.SHORT;else if(d instanceof Uint32Array)E=r.UNSIGNED_INT;else if(d instanceof Int32Array)E=r.INT;else if(d instanceof Int8Array)E=r.BYTE;else if(d instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const v=m.array,S=m.updateRanges;if(r.bindBuffer(d,p),S.length===0)r.bufferSubData(d,0,v);else{S.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<S.length;E++){const T=S[g],w=S[E];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,S[g]=w)}S.length=g+1;for(let E=0,T=S.length;E<T;E++){const w=S[E];r.bufferSubData(d,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,BE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Db=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ub=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ob=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:WM,alphahash_pars_fragment:qM,alphamap_fragment:YM,alphamap_pars_fragment:ZM,alphatest_fragment:jM,alphatest_pars_fragment:KM,aomap_fragment:QM,aomap_pars_fragment:JM,batching_pars_vertex:$M,batching_vertex:eE,begin_vertex:tE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:aE,bumpmap_pars_fragment:sE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:fE,color_pars_vertex:hE,color_vertex:dE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:gE,displacementmap_pars_vertex:_E,displacementmap_vertex:vE,emissivemap_fragment:xE,emissivemap_pars_fragment:SE,colorspace_fragment:yE,colorspace_pars_fragment:ME,envmap_fragment:EE,envmap_common_pars_fragment:bE,envmap_pars_fragment:TE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:BE,envmap_vertex:RE,fog_vertex:CE,fog_pars_vertex:wE,fog_fragment:DE,fog_pars_fragment:LE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:NE,lights_lambert_fragment:OE,lights_lambert_pars_fragment:PE,lights_pars_begin:IE,lights_toon_fragment:zE,lights_toon_pars_fragment:FE,lights_phong_fragment:HE,lights_phong_pars_fragment:GE,lights_physical_fragment:VE,lights_physical_pars_fragment:kE,lights_fragment_begin:XE,lights_fragment_maps:WE,lights_fragment_end:qE,lightprobes_pars_fragment:YE,logdepthbuf_fragment:ZE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:QE,map_fragment:JE,map_pars_fragment:$E,map_particle_fragment:eb,map_particle_pars_fragment:tb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:ab,morphcolor_vertex:sb,morphnormal_vertex:rb,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:fb,normal_pars_vertex:hb,normal_vertex:db,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:_b,iridescence_pars_fragment:vb,opaque_fragment:xb,packing:Sb,premultiplied_alpha_fragment:yb,project_vertex:Mb,dithering_fragment:Eb,dithering_pars_fragment:bb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:Ab,shadowmap_pars_fragment:Rb,shadowmap_pars_vertex:Cb,shadowmap_vertex:wb,shadowmask_pars_fragment:Db,skinbase_vertex:Lb,skinning_pars_vertex:Ub,skinning_vertex:Nb,skinnormal_vertex:Ob,specularmap_fragment:Pb,specularmap_pars_fragment:Ib,tonemapping_fragment:Bb,tonemapping_pars_fragment:zb,transmission_fragment:Fb,transmission_pars_fragment:Hb,uv_pars_fragment:Gb,uv_pars_vertex:Vb,uv_vertex:kb,worldpos_vertex:Xb,background_vert:Wb,background_frag:qb,backgroundCube_vert:Yb,backgroundCube_frag:Zb,cube_vert:jb,cube_frag:Kb,depth_vert:Qb,depth_frag:Jb,distance_vert:$b,distance_frag:eT,equirect_vert:tT,equirect_frag:nT,linedashed_vert:iT,linedashed_frag:aT,meshbasic_vert:sT,meshbasic_frag:rT,meshlambert_vert:oT,meshlambert_frag:lT,meshmatcap_vert:cT,meshmatcap_frag:uT,meshnormal_vert:fT,meshnormal_frag:hT,meshphong_vert:dT,meshphong_frag:pT,meshphysical_vert:mT,meshphysical_frag:gT,meshtoon_vert:_T,meshtoon_frag:vT,points_vert:xT,points_frag:ST,shadow_vert:yT,shadow_frag:MT,sprite_vert:ET,sprite_frag:bT},Ge={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Qi={basic:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Kn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Kn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Kn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new gt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Kn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Kn([Ge.points,Ge.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Kn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Kn([Ge.common,Ge.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Kn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Kn([Ge.sprite,Ge.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Kn([Ge.common,Ge.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Kn([Ge.lights,Ge.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Qi.physical={uniforms:Kn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Yc={r:0,b:0,g:0},TT=new nn,Qv=new ct;Qv.set(-1,0,0,0,1,0,0,0,1);function AT(r,e,i,s,l,c){const h=new gt(0);let p=l===!0?0:1,m,d,v=null,S=0,g=null;function E(F){let H=F.isScene===!0?F.background:null;if(H&&H.isTexture){const C=F.backgroundBlurriness>0;H=e.get(H,C)}return H}function T(F){let H=!1;const C=E(F);C===null?M(h,p):C&&C.isColor&&(M(C,1),H=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(F,H){const C=E(H);C&&(C.isCubeTexture||C.mapping===fu)?(d===void 0&&(d=new zn(new Vi(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:eo(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Qv),d.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Vt,(v!==C||S!==C.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,v=C,S=C.version,g=r.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new zn(new ul(2,2),new aa({name:"BackgroundMaterial",uniforms:eo(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||S!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=C,S=C.version,g=r.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function M(F,H){F.getRGB(Yc,qv(r)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,H,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(F,H=1){h.set(F),p=H,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(F){p=F,M(h,p)},render:T,addToRenderList:w,dispose:x}}function RT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(V,q,te,ne,j){let P=!1;const z=S(V,ne,te,q);c!==z&&(c=z,d(c.object)),P=E(V,ne,te,j),P&&T(V,ne,te,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,C(V,q,te,ne),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function m(){return r.createVertexArray()}function d(V){return r.bindVertexArray(V)}function v(V){return r.deleteVertexArray(V)}function S(V,q,te,ne){const j=ne.wireframe===!0;let P=s[q.id];P===void 0&&(P={},s[q.id]=P);const z=V.isInstancedMesh===!0?V.id:0;let ae=P[z];ae===void 0&&(ae={},P[z]=ae);let _e=ae[te.id];_e===void 0&&(_e={},ae[te.id]=_e);let Ee=_e[j];return Ee===void 0&&(Ee=g(m()),_e[j]=Ee),Ee}function g(V){const q=[],te=[],ne=[];for(let j=0;j<i;j++)q[j]=0,te[j]=0,ne[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:te,attributeDivisors:ne,object:V,attributes:{},index:null}}function E(V,q,te,ne){const j=c.attributes,P=q.attributes;let z=0;const ae=te.getAttributes();for(const _e in ae)if(ae[_e].location>=0){const N=j[_e];let B=P[_e];if(B===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(B=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(B=V.instanceColor)),N===void 0||N.attribute!==B||B&&N.data!==B.data)return!0;z++}return c.attributesNum!==z||c.index!==ne}function T(V,q,te,ne){const j={},P=q.attributes;let z=0;const ae=te.getAttributes();for(const _e in ae)if(ae[_e].location>=0){let N=P[_e];N===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(N=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(N=V.instanceColor));const B={};B.attribute=N,N&&N.data&&(B.data=N.data),j[_e]=B,z++}c.attributes=j,c.attributesNum=z,c.index=ne}function w(){const V=c.newAttributes;for(let q=0,te=V.length;q<te;q++)V[q]=0}function M(V){x(V,0)}function x(V,q){const te=c.newAttributes,ne=c.enabledAttributes,j=c.attributeDivisors;te[V]=1,ne[V]===0&&(r.enableVertexAttribArray(V),ne[V]=1),j[V]!==q&&(r.vertexAttribDivisor(V,q),j[V]=q)}function F(){const V=c.newAttributes,q=c.enabledAttributes;for(let te=0,ne=q.length;te<ne;te++)q[te]!==V[te]&&(r.disableVertexAttribArray(te),q[te]=0)}function H(V,q,te,ne,j,P,z){z===!0?r.vertexAttribIPointer(V,q,te,j,P):r.vertexAttribPointer(V,q,te,ne,j,P)}function C(V,q,te,ne){w();const j=ne.attributes,P=te.getAttributes(),z=q.defaultAttributeValues;for(const ae in P){const _e=P[ae];if(_e.location>=0){let Ee=j[ae];if(Ee===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(Ee=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(Ee=V.instanceColor)),Ee!==void 0){const N=Ee.normalized,B=Ee.itemSize,J=e.get(Ee);if(J===void 0)continue;const ye=J.buffer,Le=J.type,ie=J.bytesPerElement,Se=Le===r.INT||Le===r.UNSIGNED_INT||Ee.gpuType===rp;if(Ee.isInterleavedBufferAttribute){const Te=Ee.data,Ve=Te.stride,tt=Ee.offset;if(Te.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)x(_e.location+Ke,Te.meshPerAttribute);V.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)M(_e.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ke=0;Ke<_e.locationSize;Ke++)H(_e.location+Ke,B/_e.locationSize,Le,N,Ve*ie,(tt+B/_e.locationSize*Ke)*ie,Se)}else{if(Ee.isInstancedBufferAttribute){for(let Te=0;Te<_e.locationSize;Te++)x(_e.location+Te,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Te=0;Te<_e.locationSize;Te++)M(_e.location+Te);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Te=0;Te<_e.locationSize;Te++)H(_e.location+Te,B/_e.locationSize,Le,N,B*ie,B/_e.locationSize*Te*ie,Se)}}else if(z!==void 0){const N=z[ae];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(_e.location,N);break;case 3:r.vertexAttrib3fv(_e.location,N);break;case 4:r.vertexAttrib4fv(_e.location,N);break;default:r.vertexAttrib1fv(_e.location,N)}}}}F()}function I(){D();for(const V in s){const q=s[V];for(const te in q){const ne=q[te];for(const j in ne){const P=ne[j];for(const z in P)v(P[z].object),delete P[z];delete ne[j]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const q=s[V.id];for(const te in q){const ne=q[te];for(const j in ne){const P=ne[j];for(const z in P)v(P[z].object),delete P[z];delete ne[j]}}delete s[V.id]}function O(V){for(const q in s){const te=s[q];for(const ne in te){const j=te[ne];if(j[V.id]===void 0)continue;const P=j[V.id];for(const z in P)v(P[z].object),delete P[z];delete j[V.id]}}}function b(V){for(const q in s){const te=s[q],ne=V.isInstancedMesh===!0?V.id:0,j=te[ne];if(j!==void 0){for(const P in j){const z=j[P];for(const ae in z)v(z[ae].object),delete z[ae];delete j[P]}delete te[ne],Object.keys(te).length===0&&delete s[q]}}}function D(){k(),h=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:M,disableUnusedAttributes:F}}function CT(r,e,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,v){v!==0&&(r.drawArraysInstanced(s,m,d,v),i.update(d,s,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,v);let g=0;for(let E=0;E<v;E++)g+=d[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function wT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==ki&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const b=O===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Mi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ji&&!b)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(at("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),H=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:H,maxFragmentUniforms:C,maxSamples:I,samples:U}}function DT(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new ds,p=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const E=S.length!==0||g||s!==0||l;return l=g,s=S.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,E){const T=S.clippingPlanes,w=S.clipIntersection,M=S.clipShadows,x=r.get(S);if(!l||T===null||T.length===0||c&&!M)c?v(null):d();else{const F=c?0:s,H=F*4;let C=x.clippingState||null;m.value=C,C=v(T,g,H,E);for(let I=0;I!==H;++I)C[I]=i[I];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,g,E,T){const w=S!==null?S.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const x=E+w*4,F=g.matrixWorldInverse;p.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let H=0,C=E;H!==w;++H,C+=4)h.copy(S[H]).applyMatrix4(F,p),h.normal.toArray(M,C),M[C+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const ms=4,Z_=[.125,.215,.35,.446,.526,.582],qs=20,LT=256,$o=new yp,j_=new gt;let td=null,nd=0,id=0,ad=!1;const UT=new $;class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=UT}=c;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=ad,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Qs||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ua,format:ki,colorSpace:ru,depthBuffer:!1},l=Q_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NT(c)),this._blurMaterial=PT(c,e,i),this._ggxMaterial=OT(c,e,i)}return l}_compileMaterial(e){const i=new zn(new li,e);this._renderer.compile(i,$o)}_sceneToCubeUV(e,i,s,l,c){const m=new yi(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,E=S.toneMapping;S.getClearColor(j_),S.toneMapping=ea,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zn(new Vi,new _p({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const F=e.background;F?F.isColor&&(M.color.copy(F),e.background=null,x=!0):(M.color.copy(j_),x=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[H],c.y,c.z)):C===1?(m.up.set(0,0,d[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[H],c.z)):(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[H]));const I=this._cubeSize;kr(l,C*I,H>2?I:0,I,I),S.setRenderTarget(l),x&&S.render(w,m),S.render(e,m)}S.toneMapping=E,S.autoClear=g,e.background=F}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Qs||e.mapping===Jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,$o)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),g=0+d*1.25,E=S*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-ms?s-T+ms:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,kr(c,M,x,3*w,2*w),l.setRenderTarget(c),l.render(p,$o),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,kr(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(p,$o)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const g=d.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*qs-1),w=c/T,M=isFinite(c)?1+Math.floor(v*w):qs;M>qs&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${qs}`);const x=[];let F=0;for(let O=0;O<qs;++O){const b=O/w,D=Math.exp(-b*b/2);x.push(D),O===0?F+=D:O<M&&(F+=2*D)}for(let O=0;O<x.length;O++)x[O]=x[O]/F;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=x,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:H}=this;g.dTheta.value=T,g.mipInt.value=H-s;const C=this._sizeLods[l],I=3*C*(l>H-ms?l-H+ms:0),U=4*(this._cubeSize-C);kr(i,I,U,3*C,2*C),m.setRenderTarget(i),m.render(S,$o)}}function NT(r){const e=[],i=[],s=[];let l=r;const c=r-ms+1+Z_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>r-ms?m=Z_[h-r+ms-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,g=[v,v,S,v,S,S,v,v,S,S,v,S],E=6,T=6,w=3,M=2,x=1,F=new Float32Array(w*T*E),H=new Float32Array(M*T*E),C=new Float32Array(x*T*E);for(let U=0;U<E;U++){const O=U%3*2/3-1,b=U>2?0:-1,D=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];F.set(D,w*T*U),H.set(g,M*T*U);const k=[U,U,U,U,U,U];C.set(k,x*T*U)}const I=new li;I.setAttribute("position",new na(F,w)),I.setAttribute("uv",new na(H,M)),I.setAttribute("faceIndex",new na(C,x)),s.push(new zn(I,null)),l>ms&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Q_(r,e,i){const s=new ta(r,e,i);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function OT(r,e,i){return new aa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function PT(r,e,i){const s=new Float32Array(qs),l=new $(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function J_(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function $_(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jv extends ta{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vi(5,5,5),c=new aa({name:"CubemapFromEquirect",uniforms:eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:oi,blending:Da});c.uniforms.tEquirect.value=i;const h=new zn(l,c),p=i.minFilter;return i.minFilter===Ys&&(i.minFilter=Yn),new zM(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function IT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===Ah||E===Rh)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Jv(T.height);return w.fromEquirectangularTexture(r,g),e.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,T=E===Ah||E===Rh,w=E===Qs||E===Jr;if(T||w){let M=i.get(g);const x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new K_(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const F=g.image;return T&&F&&F.height>0||w&&F&&m(F)?(s===null&&(s=new K_(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function p(g,E){return E===Ah?g.mapping=Qs:E===Rh&&(g.mapping=Jr),g}function m(g){let E=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&E++;return E===T}function d(g){const E=g.target;E.removeEventListener("dispose",d);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function BT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jr("WebGLRenderer: "+s+" extension not supported."),l}}}function zT(r,e,i,s){const l={},c=new WeakMap;function h(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function d(S){const g=[],E=S.index,T=S.attributes.position;let w=0;if(T===void 0)return;if(E!==null){const F=E.array;w=E.version;for(let H=0,C=F.length;H<C;H+=3){const I=F[H+0],U=F[H+1],O=F[H+2];g.push(I,U,U,O,O,I)}}else{const F=T.array;w=T.version;for(let H=0,C=F.length/3-1;H<C;H+=3){const I=H+0,U=H+1,O=H+2;g.push(I,U,U,O,O,I)}}const M=new(T.count>=65535?Vv:Gv)(g,1);M.version=w;const x=c.get(S);x&&e.remove(x),c.set(S,M)}function v(S){const g=c.get(S);if(g){const E=S.index;E!==null&&g.version<E.version&&d(S)}else d(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function FT(r,e,i){let s;function l(S){s=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function m(S,g){r.drawElements(s,g,c,S*h),i.update(g,s,1)}function d(S,g,E){E!==0&&(r.drawElementsInstanced(s,g,c,S*h,E),i.update(g,s,E))}function v(S,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,E);let w=0;for(let M=0;M<E;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function HT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:wt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function GT(r,e,i){const s=new WeakMap,l=new cn;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let k=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",k)};var E=k;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let I=p.attributes.position.count*C,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*U*4*S),b=new Fv(O,I,U,S);b.type=Ji,b.needsUpdate=!0;const D=C*4;for(let V=0;V<S;V++){const q=x[V],te=F[V],ne=H[V],j=I*U*4*V;for(let P=0;P<q.count;P++){const z=P*D;T===!0&&(l.fromBufferAttribute(q,P),O[j+z+0]=l.x,O[j+z+1]=l.y,O[j+z+2]=l.z,O[j+z+3]=0),w===!0&&(l.fromBufferAttribute(te,P),O[j+z+4]=l.x,O[j+z+5]=l.y,O[j+z+6]=l.z,O[j+z+7]=0),M===!0&&(l.fromBufferAttribute(ne,P),O[j+z+8]=l.x,O[j+z+9]=l.y,O[j+z+10]=l.z,O[j+z+11]=ne.itemSize===4?l.w:1)}}g={count:S,texture:b,size:new rt(I,U)},s.set(p,g),p.addEventListener("dispose",k)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const w=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function VT(r,e,i,s,l){let c=new WeakMap;function h(d){const v=l.render.frame,S=d.geometry,g=e.get(d,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const kT={[bv]:"LINEAR_TONE_MAPPING",[Tv]:"REINHARD_TONE_MAPPING",[Av]:"CINEON_TONE_MAPPING",[sp]:"ACES_FILMIC_TONE_MAPPING",[Cv]:"AGX_TONE_MAPPING",[wv]:"NEUTRAL_TONE_MAPPING",[Rv]:"CUSTOM_TONE_MAPPING"};function XT(r,e,i,s,l,c){const h=new ta(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new $r(e,i):void 0}),p=new ta(e,i,{type:Ua,depthBuffer:!1,stencilBuffer:!1}),m=new li;m.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const d=new DM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new zn(m,d),S=new yp(-1,1,1,-1,0,1);let g=null,E=null,T=!1,w,M=null,x=[],F=!1;this.setSize=function(H,C){h.setSize(H,C),p.setSize(H,C);for(let I=0;I<x.length;I++){const U=x[I];U.setSize&&U.setSize(H,C)}},this.setEffects=function(H){x=H,F=x.length>0&&x[0].isRenderPass===!0;const C=h.width,I=h.height;for(let U=0;U<x.length;U++){const O=x[U];O.setSize&&O.setSize(C,I)}},this.begin=function(H,C){if(T||H.toneMapping===ea&&x.length===0)return!1;if(M=C,C!==null){const I=C.width,U=C.height;(h.width!==I||h.height!==U)&&this.setSize(I,U)}return F===!1&&H.setRenderTarget(h),w=H.toneMapping,H.toneMapping=ea,!0},this.hasRenderPass=function(){return F},this.end=function(H,C){H.toneMapping=w,T=!0;let I=h,U=p;for(let O=0;O<x.length;O++){const b=x[O];if(b.enabled!==!1&&(b.render(H,U,I,C),b.needsSwap!==!1)){const D=I;I=U,U=D}}if(g!==H.outputColorSpace||E!==H.toneMapping){g=H.outputColorSpace,E=H.toneMapping,d.defines={},Ct.getTransfer(g)===Vt&&(d.defines.SRGB_TRANSFER="");const O=kT[E];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,H.setRenderTarget(M),H.render(v,S),M=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const $v=new Qn,ep=new $r(1,1),ex=new Fv,tx=new oM,nx=new Xv,ev=[],tv=[],nv=new Float32Array(16),iv=new Float32Array(9),av=new Float32Array(4);function no(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=ev[l];if(c===void 0&&(c=new Float32Array(l),ev[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,r[h].toArray(c,p)}return c}function An(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Rn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function mu(r,e){let i=tv[e];i===void 0&&(i=new Int32Array(e),tv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function WT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function qT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2fv(this.addr,e),Rn(i,e)}}function YT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(An(i,e))return;r.uniform3fv(this.addr,e),Rn(i,e)}}function ZT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4fv(this.addr,e),Rn(i,e)}}function jT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;av.set(s),r.uniformMatrix2fv(this.addr,!1,av),Rn(i,s)}}function KT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;iv.set(s),r.uniformMatrix3fv(this.addr,!1,iv),Rn(i,s)}}function QT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;nv.set(s),r.uniformMatrix4fv(this.addr,!1,nv),Rn(i,s)}}function JT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function $T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2iv(this.addr,e),Rn(i,e)}}function e1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;r.uniform3iv(this.addr,e),Rn(i,e)}}function t1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4iv(this.addr,e),Rn(i,e)}}function n1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function i1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;r.uniform2uiv(this.addr,e),Rn(i,e)}}function a1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;r.uniform3uiv(this.addr,e),Rn(i,e)}}function s1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;r.uniform4uiv(this.addr,e),Rn(i,e)}}function r1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ep.compareFunction=i.isReversedDepthBuffer()?dp:hp,c=ep):c=$v,i.setTexture2D(e||c,l)}function o1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||tx,l)}function l1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||nx,l)}function c1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||ex,l)}function u1(r){switch(r){case 5126:return WT;case 35664:return qT;case 35665:return YT;case 35666:return ZT;case 35674:return jT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return $T;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function f1(r,e){r.uniform1fv(this.addr,e)}function h1(r,e){const i=no(e,this.size,2);r.uniform2fv(this.addr,i)}function d1(r,e){const i=no(e,this.size,3);r.uniform3fv(this.addr,i)}function p1(r,e){const i=no(e,this.size,4);r.uniform4fv(this.addr,i)}function m1(r,e){const i=no(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function g1(r,e){const i=no(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function _1(r,e){const i=no(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function v1(r,e){r.uniform1iv(this.addr,e)}function x1(r,e){r.uniform2iv(this.addr,e)}function S1(r,e){r.uniform3iv(this.addr,e)}function y1(r,e){r.uniform4iv(this.addr,e)}function M1(r,e){r.uniform1uiv(this.addr,e)}function E1(r,e){r.uniform2uiv(this.addr,e)}function b1(r,e){r.uniform3uiv(this.addr,e)}function T1(r,e){r.uniform4uiv(this.addr,e)}function A1(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=ep:h=$v;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function R1(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||tx,c[h])}function C1(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||nx,c[h])}function w1(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||ex,c[h])}function D1(r){switch(r){case 5126:return f1;case 35664:return h1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return S1;case 35669:case 35673:return y1;case 5125:return M1;case 36294:return E1;case 36295:return b1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return w1}}class L1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=u1(i.type)}}class U1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=D1(i.type)}}class N1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function sv(r,e){r.seq.push(e),r.map[e.id]=e}function O1(r,e,i){const s=r.name,l=s.length;for(sd.lastIndex=0;;){const c=sd.exec(s),h=sd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){sv(i,d===void 0?new L1(p,r,e):new U1(p,r,e));break}else{let S=i.map[p];S===void 0&&(S=new N1(p),sv(i,S)),i=S}}}class iu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);O1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function rv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const P1=37297;let I1=0;function B1(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const ov=new ct;function z1(r){Ct._getMatrix(ov,Ct.workingColorSpace,r);const e=`mat3( ${ov.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(r)){case ou:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function lv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+B1(r.getShaderSource(e),p)}else return c}function F1(r,e){const i=z1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const H1={[bv]:"Linear",[Tv]:"Reinhard",[Av]:"Cineon",[sp]:"ACESFilmic",[Cv]:"AgX",[wv]:"Neutral",[Rv]:"Custom"};function G1(r,e){const i=H1[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new $;function V1(){Ct.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),e=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function X1(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function W1(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:p}}return i}function nl(r){return r!==""}function cv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(r){return r.replace(q1,Z1)}const Y1=new Map;function Z1(r,e){let i=_t[e];if(i===void 0){const s=Y1.get(e);if(s!==void 0)i=_t[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tp(i)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(r){return r.replace(j1,K1)}function K1(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function hv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Q1={[Qc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function J1(r){return Q1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $1={[Qs]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function eA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":$1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const tA={[Jr]:"ENVMAP_MODE_REFRACTION"};function nA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":tA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iA={[Ev]:"ENVMAP_BLENDING_MULTIPLY",[Fy]:"ENVMAP_BLENDING_MIX",[Hy]:"ENVMAP_BLENDING_ADD"};function aA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":iA[r.combine]||"ENVMAP_BLENDING_NONE"}function sA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function rA(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=J1(i),d=eA(i),v=nA(i),S=aA(i),g=sA(i),E=k1(i),T=X1(c),w=l.createProgram();let M,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(nl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(nl).join(`
`),x.length>0&&(x+=`
`)):(M=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),x=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ea?"#define TONE_MAPPING":"",i.toneMapping!==ea?_t.tonemapping_pars_fragment:"",i.toneMapping!==ea?G1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,F1("linearToOutputTexel",i.outputColorSpace),V1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),h=tp(h),h=cv(h,i),h=uv(h,i),p=tp(p),p=cv(p,i),p=uv(p,i),h=fv(h),p=fv(p),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===__?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===__?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=F+M+h,C=F+x+p,I=rv(l,l.VERTEX_SHADER,H),U=rv(l,l.FRAGMENT_SHADER,C);l.attachShader(w,I),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function O(V){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(w)||"",te=l.getShaderInfoLog(I)||"",ne=l.getShaderInfoLog(U)||"",j=q.trim(),P=te.trim(),z=ne.trim();let ae=!0,_e=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,I,U);else{const Ee=lv(l,I,"vertex"),N=lv(l,U,"fragment");wt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+j+`
`+Ee+`
`+N)}else j!==""?at("WebGLProgram: Program Info Log:",j):(P===""||z==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ae,programLog:j,vertexShader:{log:P,prefix:M},fragmentShader:{log:z,prefix:x}})}l.deleteShader(I),l.deleteShader(U),b=new iu(l,w),D=W1(l,w)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(w,P1)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=I1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=U,this}let oA=0;class lA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new cA(e),i.set(e,s)),s}}class cA{constructor(e){this.id=oA++,this.code=e,this.usedTimes=0}}function uA(r){return r===Js||r===au||r===su}function fA(r,e,i,s,l,c){const h=new mp,p=new lA,m=new Set,d=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,D,k,V,q,te){const ne=V.fog,j=q.geometry,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ae=e.get(b.envMap||P,z),_e=ae&&ae.mapping===fu?ae.image.height:null,Ee=E[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&at("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const N=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,B=N!==void 0?N.length:0;let J=0;j.morphAttributes.position!==void 0&&(J=1),j.morphAttributes.normal!==void 0&&(J=2),j.morphAttributes.color!==void 0&&(J=3);let ye,Le,ie,Se;if(Ee){const Re=Qi[Ee];ye=Re.vertexShader,Le=Re.fragmentShader}else{ye=b.vertexShader,Le=b.fragmentShader;const Re=p.getVertexShaderStage(b),ot=p.getFragmentShaderStage(b);p.update(b,Re,ot),ie=Re.id,Se=ot.id}const Te=r.getRenderTarget(),Ve=r.state.buffers.depth.getReversed(),tt=q.isInstancedMesh===!0,Ke=q.isBatchedMesh===!0,It=!!b.map,ut=!!b.matcap,xt=!!ae,St=!!b.aoMap,ft=!!b.lightMap,an=!!b.bumpMap&&b.wireframe===!1,Jt=!!b.normalMap,kt=!!b.displacementMap,$t=!!b.emissiveMap,Xt=!!b.metalnessMap,sn=!!b.roughnessMap,Y=b.anisotropy>0,Nt=b.clearcoat>0,At=b.dispersion>0,L=b.iridescence>0,y=b.sheen>0,K=b.transmission>0,re=Y&&!!b.anisotropyMap,pe=Nt&&!!b.clearcoatMap,De=Nt&&!!b.clearcoatNormalMap,Oe=Nt&&!!b.clearcoatRoughnessMap,me=L&&!!b.iridescenceMap,ge=L&&!!b.iridescenceThicknessMap,Ce=y&&!!b.sheenColorMap,ze=y&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,Pe=!!b.specularColorMap,je=!!b.specularIntensityMap,Qe=K&&!!b.transmissionMap,it=K&&!!b.thicknessMap,W=!!b.gradientMap,Ue=!!b.alphaMap,ve=b.alphaTest>0,Ne=!!b.alphaHash,Fe=!!b.extensions;let se=ea;b.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(se=r.toneMapping);const Ae={shaderID:Ee,shaderType:b.type,shaderName:b.name,vertexShader:ye,fragmentShader:Le,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&q._colorsTexture!==null,instancing:tt,instancingColor:tt&&q.instanceColor!==null,instancingMorph:tt&&q.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:ut,envMap:xt,envMapMode:xt&&ae.mapping,envMapCubeUVHeight:_e,aoMap:St,lightMap:ft,bumpMap:an,normalMap:Jt,displacementMap:kt,emissiveMap:$t,normalMapObjectSpace:Jt&&b.normalMapType===ky,normalMapTangentSpace:Jt&&b.normalMapType===Qd,packedNormalMap:Jt&&b.normalMapType===Qd&&uA(b.normalMap.format),metalnessMap:Xt,roughnessMap:sn,anisotropy:Y,anisotropyMap:re,clearcoat:Nt,clearcoatMap:pe,clearcoatNormalMap:De,clearcoatRoughnessMap:Oe,dispersion:At,iridescence:L,iridescenceMap:me,iridescenceThicknessMap:ge,sheen:y,sheenColorMap:Ce,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:Pe,specularIntensityMap:je,transmission:K,transmissionMap:Qe,thicknessMap:it,gradientMap:W,opaque:b.transparent===!1&&b.blending===Zr&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ve,alphaHash:Ne,combine:b.combine,mapUv:It&&T(b.map.channel),aoMapUv:St&&T(b.aoMap.channel),lightMapUv:ft&&T(b.lightMap.channel),bumpMapUv:an&&T(b.bumpMap.channel),normalMapUv:Jt&&T(b.normalMap.channel),displacementMapUv:kt&&T(b.displacementMap.channel),emissiveMapUv:$t&&T(b.emissiveMap.channel),metalnessMapUv:Xt&&T(b.metalnessMap.channel),roughnessMapUv:sn&&T(b.roughnessMap.channel),anisotropyMapUv:re&&T(b.anisotropyMap.channel),clearcoatMapUv:pe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(b.sheenRoughnessMap.channel),specularMapUv:Ie&&T(b.specularMap.channel),specularColorMapUv:Pe&&T(b.specularColorMap.channel),specularIntensityMapUv:je&&T(b.specularIntensityMap.channel),transmissionMapUv:Qe&&T(b.transmissionMap.channel),thicknessMapUv:it&&T(b.thicknessMap.channel),alphaMapUv:Ue&&T(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Jt||Y),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&(It||Ue),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&Jt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ve,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:J,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&Ct.getTransfer(b.map.colorSpace)===Vt,decodeVideoTextureEmissive:$t&&b.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(b.emissiveMap.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gi,flipSided:b.side===oi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ae.vertexUv1s=m.has(1),Ae.vertexUv2s=m.has(2),Ae.vertexUv3s=m.has(3),m.clear(),Ae}function M(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)D.push(k),D.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(x(D,b),F(D,b),D.push(r.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function x(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function F(b,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),D.packedNormalMap&&h.enable(22),D.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),D.numLightProbeGrids>0&&h.enable(22),D.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function H(b){const D=E[b.type];let k;if(D){const V=Qi[D];k=RM.clone(V.uniforms)}else k=b.uniforms;return k}function C(b,D){let k=v.get(D);return k!==void 0?++k.usedTimes:(k=new rA(r,D,b,l),d.push(k),v.set(D,k)),k}function I(b){if(--b.usedTimes===0){const D=d.indexOf(b);d[D]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function O(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:H,acquireProgram:C,releaseProgram:I,releaseShaderCache:U,programs:d,dispose:O}}function hA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function dA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function dv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,T,w,M,x){let F=r[e];return F===void 0?(F={id:g.id,object:g,geometry:E,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:x},r[e]=F):(F.id=g.id,F.object=g,F.geometry=E,F.material=T,F.materialVariant=h(g),F.groupOrder=w,F.renderOrder=g.renderOrder,F.z=M,F.group=x),e++,F}function m(g,E,T,w,M,x){const F=p(g,E,T,w,M,x);T.transmission>0?s.push(F):T.transparent===!0?l.push(F):i.push(F)}function d(g,E,T,w,M,x){const F=p(g,E,T,w,M,x);T.transmission>0?s.unshift(F):T.transparent===!0?l.unshift(F):i.unshift(F)}function v(g,E,T){i.length>1&&i.sort(g||dA),s.length>1&&s.sort(E||dv),l.length>1&&l.sort(E||dv),T&&(i.reverse(),s.reverse(),l.reverse())}function S(){for(let g=e,E=r.length;g<E;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:S,sort:v}}function pA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new pv,r.set(s,[h])):l>=c.length?(h=new pv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function mA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new gt};break;case"SpotLight":i={position:new $,direction:new $,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":i={color:new gt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function gA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let _A=0;function vA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xA(r){const e=new mA,i=gA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new $);const l=new $,c=new nn,h=new nn;function p(d){let v=0,S=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,T=0,w=0,M=0,x=0,F=0,H=0,C=0,I=0,U=0,O=0;d.sort(vA);for(let D=0,k=d.length;D<k;D++){const V=d[D],q=V.color,te=V.intensity,ne=V.distance;let j=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Js?j=V.shadow.map.texture:j=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=q.r*te,S+=q.g*te,g+=q.b*te;else if(V.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(V.sh.coefficients[P],te);O++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const z=V.shadow,ae=i.get(V);ae.shadowIntensity=z.intensity,ae.shadowBias=z.bias,ae.shadowNormalBias=z.normalBias,ae.shadowRadius=z.radius,ae.shadowMapSize=z.mapSize,s.directionalShadow[E]=ae,s.directionalShadowMap[E]=j,s.directionalShadowMatrix[E]=V.shadow.matrix,F++}s.directional[E]=P,E++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(q).multiplyScalar(te),P.distance=ne,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,s.spot[w]=P;const z=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,z.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[w]=z.matrix,V.castShadow){const ae=i.get(V);ae.shadowIntensity=z.intensity,ae.shadowBias=z.bias,ae.shadowNormalBias=z.normalBias,ae.shadowRadius=z.radius,ae.shadowMapSize=z.mapSize,s.spotShadow[w]=ae,s.spotShadowMap[w]=j,C++}w++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(q).multiplyScalar(te),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=P,M++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const z=V.shadow,ae=i.get(V);ae.shadowIntensity=z.intensity,ae.shadowBias=z.bias,ae.shadowNormalBias=z.normalBias,ae.shadowRadius=z.radius,ae.shadowMapSize=z.mapSize,ae.shadowCameraNear=z.camera.near,ae.shadowCameraFar=z.camera.far,s.pointShadow[T]=ae,s.pointShadowMap[T]=j,s.pointShadowMatrix[T]=V.shadow.matrix,H++}s.point[T]=P,T++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(te),P.groundColor.copy(V.groundColor).multiplyScalar(te),s.hemi[x]=P,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==M||b.hemiLength!==x||b.numDirectionalShadows!==F||b.numPointShadows!==H||b.numSpotShadows!==C||b.numSpotMaps!==I||b.numLightProbes!==O)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=H,s.pointShadowMap.length=H,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=H,s.spotLightMatrix.length=C+I-U,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=O,b.directionalLength=E,b.pointLength=T,b.spotLength=w,b.rectAreaLength=M,b.hemiLength=x,b.numDirectionalShadows=F,b.numPointShadows=H,b.numSpotShadows=C,b.numSpotMaps=I,b.numLightProbes=O,s.version=_A++)}function m(d,v){let S=0,g=0,E=0,T=0,w=0;const M=v.matrixWorldInverse;for(let x=0,F=d.length;x<F;x++){const H=d[x];if(H.isDirectionalLight){const C=s.directional[S];C.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),S++}else if(H.isSpotLight){const C=s.spot[E];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),E++}else if(H.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(M),h.identity(),c.copy(H.matrixWorld),c.premultiply(M),h.extractRotation(c),C.halfWidth.set(H.width*.5,0,0),C.halfHeight.set(0,H.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),T++}else if(H.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(M),g++}else if(H.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(H.matrixWorld),C.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function mv(r){const e=new xA(r),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function SA(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new mv(r),e.set(l,[p])):c>=h.length?(p=new mv(r),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,EA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],bA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],gv=new nn,el=new $,rd=new $;function TA(r,e,i){let s=new vp;const l=new rt,c=new rt,h=new cn,p=new UM,m=new NM,d={},v=i.maxTextureSize,S={[gs]:oi,[oi]:gs,[Gi]:Gi},g=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:yA,fragmentShader:MA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new li;T.setAttribute("position",new na(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new zn(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let x=this.type;this.render=function(U,O,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===Sy&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const D=r.getRenderTarget(),k=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Da),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const te=x!==this.type;te&&O.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(j=>j.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,j=U.length;ne<j;ne++){const P=U[ne],z=P.shadow;if(z===void 0){at("WebGLShadowMap:",P,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ae=z.getFrameExtents();l.multiply(ae),c.copy(z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ae.x),l.x=c.x*ae.x,z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ae.y),l.y=c.y*ae.y,z.mapSize.y=c.y));const _e=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=_e,z.map===null||te===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===tl){if(P.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ta(l.x,l.y,{format:Js,type:Ua,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),z.map.texture.name=P.name+".shadowMap",z.map.depthTexture=new $r(l.x,l.y,Ji),z.map.depthTexture.name=P.name+".shadowMapDepth",z.map.depthTexture.format=Na,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn}else P.isPointLight?(z.map=new Jv(l.x),z.map.depthTexture=new TM(l.x,ia)):(z.map=new ta(l.x,l.y),z.map.depthTexture=new $r(l.x,l.y,ia)),z.map.depthTexture.name=P.name+".shadowMap",z.map.depthTexture.format=Na,this.type===Qc?(z.map.depthTexture.compareFunction=_e?dp:hp,z.map.depthTexture.minFilter=Yn,z.map.depthTexture.magFilter=Yn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn);z.camera.updateProjectionMatrix()}const Ee=z.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<Ee;N++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,N),r.clear();else{N===0&&(r.setRenderTarget(z.map),r.clear());const B=z.getViewport(N);h.set(c.x*B.x,c.y*B.y,c.x*B.z,c.y*B.w),q.viewport(h)}if(P.isPointLight){const B=z.camera,J=z.matrix,ye=P.distance||B.far;ye!==B.far&&(B.far=ye,B.updateProjectionMatrix()),el.setFromMatrixPosition(P.matrixWorld),B.position.copy(el),rd.copy(B.position),rd.add(EA[N]),B.up.copy(bA[N]),B.lookAt(rd),B.updateMatrixWorld(),J.makeTranslation(-el.x,-el.y,-el.z),gv.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),z._frustum.setFromProjectionMatrix(gv,B.coordinateSystem,B.reversedDepth)}else z.updateMatrices(P);s=z.getFrustum(),C(O,b,z.camera,P,this.type)}z.isPointLightShadow!==!0&&this.type===tl&&F(z,b),z.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(D,k,V)};function F(U,O){const b=e.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ta(l.x,l.y,{format:Js,type:Ua})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(O,null,b,g,w,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(O,null,b,E,w,null)}function H(U,O,b,D){let k=null;const V=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)k=V;else if(k=b.isPointLight===!0?m:p,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const q=k.uuid,te=O.uuid;let ne=d[q];ne===void 0&&(ne={},d[q]=ne);let j=ne[te];j===void 0&&(j=k.clone(),ne[te]=j,O.addEventListener("dispose",I)),k=j}if(k.visible=O.visible,k.wireframe=O.wireframe,D===tl?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:S[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=r.properties.get(k);q.light=b}return k}function C(U,O,b,D,k){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&k===tl)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const te=e.update(U),ne=U.material;if(Array.isArray(ne)){const j=te.groups;for(let P=0,z=j.length;P<z;P++){const ae=j[P],_e=ne[ae.materialIndex];if(_e&&_e.visible){const Ee=H(U,_e,D,k);U.onBeforeShadow(r,U,O,b,te,Ee,ae),r.renderBufferDirect(b,null,te,Ee,U,ae),U.onAfterShadow(r,U,O,b,te,Ee,ae)}}}else if(ne.visible){const j=H(U,ne,D,k);U.onBeforeShadow(r,U,O,b,te,j,null),r.renderBufferDirect(b,null,te,j,U,null),U.onAfterShadow(r,U,O,b,te,j,null)}}const q=U.children;for(let te=0,ne=q.length;te<ne;te++)C(q[te],O,b,D,k)}function I(U){U.target.removeEventListener("dispose",I);for(const b in d){const D=d[b],k=U.target.uuid;k in D&&(D[k].dispose(),delete D[k])}}}function AA(r,e){function i(){let W=!1;const Ue=new cn;let ve=null;const Ne=new cn(0,0,0,0);return{setMask:function(Fe){ve!==Fe&&!W&&(r.colorMask(Fe,Fe,Fe,Fe),ve=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,se,Ae,Re,ot){ot===!0&&(Fe*=Re,se*=Re,Ae*=Re),Ue.set(Fe,se,Ae,Re),Ne.equals(Ue)===!1&&(r.clearColor(Fe,se,Ae,Re),Ne.copy(Ue))},reset:function(){W=!1,ve=null,Ne.set(-1,0,0,0)}}}function s(){let W=!1,Ue=!1,ve=null,Ne=null,Fe=null;return{setReversed:function(se){if(Ue!==se){const Ae=e.get("EXT_clip_control");se?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Ue=se;const Re=Fe;Fe=null,this.setClear(Re)}},getReversed:function(){return Ue},setTest:function(se){se?Te(r.DEPTH_TEST):Ve(r.DEPTH_TEST)},setMask:function(se){ve!==se&&!W&&(r.depthMask(se),ve=se)},setFunc:function(se){if(Ue&&(se=$y[se]),Ne!==se){switch(se){case hd:r.depthFunc(r.NEVER);break;case dd:r.depthFunc(r.ALWAYS);break;case pd:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case md:r.depthFunc(r.EQUAL);break;case gd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=se}},setLocked:function(se){W=se},setClear:function(se){Fe!==se&&(Fe=se,Ue&&(se=1-se),r.clearDepth(se))},reset:function(){W=!1,ve=null,Ne=null,Fe=null,Ue=!1}}}function l(){let W=!1,Ue=null,ve=null,Ne=null,Fe=null,se=null,Ae=null,Re=null,ot=null;return{setTest:function(st){W||(st?Te(r.STENCIL_TEST):Ve(r.STENCIL_TEST))},setMask:function(st){Ue!==st&&!W&&(r.stencilMask(st),Ue=st)},setFunc:function(st,jt,Mn){(ve!==st||Ne!==jt||Fe!==Mn)&&(r.stencilFunc(st,jt,Mn),ve=st,Ne=jt,Fe=Mn)},setOp:function(st,jt,Mn){(se!==st||Ae!==jt||Re!==Mn)&&(r.stencilOp(st,jt,Mn),se=st,Ae=jt,Re=Mn)},setLocked:function(st){W=st},setClear:function(st){ot!==st&&(r.clearStencil(st),ot=st)},reset:function(){W=!1,Ue=null,ve=null,Ne=null,Fe=null,se=null,Ae=null,Re=null,ot=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},g={},E=new WeakMap,T=[],w=null,M=!1,x=null,F=null,H=null,C=null,I=null,U=null,O=null,b=new gt(0,0,0),D=0,k=!1,V=null,q=null,te=null,ne=null,j=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ae=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(_e)[1]),z=ae>=1):_e.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),z=ae>=2);let Ee=null,N={};const B=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),ye=new cn().fromArray(B),Le=new cn().fromArray(J);function ie(W,Ue,ve,Ne){const Fe=new Uint8Array(4),se=r.createTexture();r.bindTexture(W,se),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ae=0;Ae<ve;Ae++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ue,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(Ue+Ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return se}const Se={};Se[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Te(r.DEPTH_TEST),h.setFunc(Qr),an(!1),Jt(f_),Te(r.CULL_FACE),St(Da);function Te(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function Ve(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function tt(W,Ue){return g[W]!==Ue?(r.bindFramebuffer(W,Ue),g[W]=Ue,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ue),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Ke(W,Ue){let ve=T,Ne=!1;if(W){ve=E.get(Ue),ve===void 0&&(ve=[],E.set(Ue,ve));const Fe=W.textures;if(ve.length!==Fe.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let se=0,Ae=Fe.length;se<Ae;se++)ve[se]=r.COLOR_ATTACHMENT0+se;ve.length=Fe.length,Ne=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(ve)}function It(W){return w!==W?(r.useProgram(W),w=W,!0):!1}const ut={[Xs]:r.FUNC_ADD,[My]:r.FUNC_SUBTRACT,[Ey]:r.FUNC_REVERSE_SUBTRACT};ut[by]=r.MIN,ut[Ty]=r.MAX;const xt={[Ay]:r.ZERO,[Ry]:r.ONE,[Cy]:r.SRC_COLOR,[ud]:r.SRC_ALPHA,[Oy]:r.SRC_ALPHA_SATURATE,[Uy]:r.DST_COLOR,[Dy]:r.DST_ALPHA,[wy]:r.ONE_MINUS_SRC_COLOR,[fd]:r.ONE_MINUS_SRC_ALPHA,[Ny]:r.ONE_MINUS_DST_COLOR,[Ly]:r.ONE_MINUS_DST_ALPHA,[Py]:r.CONSTANT_COLOR,[Iy]:r.ONE_MINUS_CONSTANT_COLOR,[By]:r.CONSTANT_ALPHA,[zy]:r.ONE_MINUS_CONSTANT_ALPHA};function St(W,Ue,ve,Ne,Fe,se,Ae,Re,ot,st){if(W===Da){M===!0&&(Ve(r.BLEND),M=!1);return}if(M===!1&&(Te(r.BLEND),M=!0),W!==yy){if(W!==x||st!==k){if((F!==Xs||I!==Xs)&&(r.blendEquation(r.FUNC_ADD),F=Xs,I=Xs),st)switch(W){case Zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case h_:r.blendFunc(r.ONE,r.ONE);break;case d_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case p_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case Zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case h_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case d_:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p_:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}H=null,C=null,U=null,O=null,b.set(0,0,0),D=0,x=W,k=st}return}Fe=Fe||Ue,se=se||ve,Ae=Ae||Ne,(Ue!==F||Fe!==I)&&(r.blendEquationSeparate(ut[Ue],ut[Fe]),F=Ue,I=Fe),(ve!==H||Ne!==C||se!==U||Ae!==O)&&(r.blendFuncSeparate(xt[ve],xt[Ne],xt[se],xt[Ae]),H=ve,C=Ne,U=se,O=Ae),(Re.equals(b)===!1||ot!==D)&&(r.blendColor(Re.r,Re.g,Re.b,ot),b.copy(Re),D=ot),x=W,k=!1}function ft(W,Ue){W.side===Gi?Ve(r.CULL_FACE):Te(r.CULL_FACE);let ve=W.side===oi;Ue&&(ve=!ve),an(ve),W.blending===Zr&&W.transparent===!1?St(Da):St(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ne=W.stencilWrite;p.setTest(Ne),Ne&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),$t(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):Ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function an(W){V!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),V=W)}function Jt(W){W!==vy?(Te(r.CULL_FACE),W!==q&&(W===f_?r.cullFace(r.BACK):W===xy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ve(r.CULL_FACE),q=W}function kt(W){W!==te&&(z&&r.lineWidth(W),te=W)}function $t(W,Ue,ve){W?(Te(r.POLYGON_OFFSET_FILL),(ne!==Ue||j!==ve)&&(ne=Ue,j=ve,h.getReversed()&&(Ue=-Ue),r.polygonOffset(Ue,ve))):Ve(r.POLYGON_OFFSET_FILL)}function Xt(W){W?Te(r.SCISSOR_TEST):Ve(r.SCISSOR_TEST)}function sn(W){W===void 0&&(W=r.TEXTURE0+P-1),Ee!==W&&(r.activeTexture(W),Ee=W)}function Y(W,Ue,ve){ve===void 0&&(Ee===null?ve=r.TEXTURE0+P-1:ve=Ee);let Ne=N[ve];Ne===void 0&&(Ne={type:void 0,texture:void 0},N[ve]=Ne),(Ne.type!==W||Ne.texture!==Ue)&&(Ee!==ve&&(r.activeTexture(ve),Ee=ve),r.bindTexture(W,Ue||Se[W]),Ne.type=W,Ne.texture=Ue)}function Nt(){const W=N[Ee];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function At(){try{r.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function y(){try{r.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function K(){try{r.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function pe(){try{r.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function De(){try{r.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Oe(){try{r.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function me(){try{r.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function ge(){try{r.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ce(W){return S[W]!==void 0?S[W]:r.getParameter(W)}function ze(W,Ue){S[W]!==Ue&&(r.pixelStorei(W,Ue),S[W]=Ue)}function Ie(W){ye.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ye.copy(W))}function Pe(W){Le.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Le.copy(W))}function je(W,Ue){let ve=d.get(Ue);ve===void 0&&(ve=new WeakMap,d.set(Ue,ve));let Ne=ve.get(W);Ne===void 0&&(Ne=r.getUniformBlockIndex(Ue,W.name),ve.set(W,Ne))}function Qe(W,Ue){const Ne=d.get(Ue).get(W);m.get(Ue)!==Ne&&(r.uniformBlockBinding(Ue,Ne,W.__bindingPointIndex),m.set(Ue,Ne))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},S={},Ee=null,N={},g={},E=new WeakMap,T=[],w=null,M=!1,x=null,F=null,H=null,C=null,I=null,U=null,O=null,b=new gt(0,0,0),D=0,k=!1,V=null,q=null,te=null,ne=null,j=null,ye.set(0,0,r.canvas.width,r.canvas.height),Le.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Te,disable:Ve,bindFramebuffer:tt,drawBuffers:Ke,useProgram:It,setBlending:St,setMaterial:ft,setFlipSided:an,setCullFace:Jt,setLineWidth:kt,setPolygonOffset:$t,setScissorTest:Xt,activeTexture:sn,bindTexture:Y,unbindTexture:Nt,compressedTexImage2D:At,compressedTexImage3D:L,texImage2D:me,texImage3D:ge,pixelStorei:ze,getParameter:Ce,updateUBOMapping:je,uniformBlockBinding:Qe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:re,compressedTexSubImage3D:pe,scissor:Ie,viewport:Pe,reset:it}}function RA(r,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new rt,v=new WeakMap,S=new Set;let g;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,y){return T?new OffscreenCanvas(L,y):lu("canvas")}function M(L,y,K){let re=1;const pe=At(L);if((pe.width>K||pe.height>K)&&(re=K/Math.max(pe.width,pe.height)),re<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const De=Math.floor(re*pe.width),Oe=Math.floor(re*pe.height);g===void 0&&(g=w(De,Oe));const me=y?w(De,Oe):g;return me.width=De,me.height=Oe,me.getContext("2d").drawImage(L,0,0,De,Oe),at("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+De+"x"+Oe+")."),me}else return"data"in L&&at("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function x(L){return L.generateMipmaps}function F(L){r.generateMipmap(L)}function H(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(L,y,K,re,pe,De=!1){if(L!==null){if(r[L]!==void 0)return r[L];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Oe;re&&(Oe=e.get("EXT_texture_norm16"),Oe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=y;if(y===r.RED&&(K===r.FLOAT&&(me=r.R32F),K===r.HALF_FLOAT&&(me=r.R16F),K===r.UNSIGNED_BYTE&&(me=r.R8),K===r.UNSIGNED_SHORT&&Oe&&(me=Oe.R16_EXT),K===r.SHORT&&Oe&&(me=Oe.R16_SNORM_EXT)),y===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(me=r.R8UI),K===r.UNSIGNED_SHORT&&(me=r.R16UI),K===r.UNSIGNED_INT&&(me=r.R32UI),K===r.BYTE&&(me=r.R8I),K===r.SHORT&&(me=r.R16I),K===r.INT&&(me=r.R32I)),y===r.RG&&(K===r.FLOAT&&(me=r.RG32F),K===r.HALF_FLOAT&&(me=r.RG16F),K===r.UNSIGNED_BYTE&&(me=r.RG8),K===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RG16_EXT),K===r.SHORT&&Oe&&(me=Oe.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(me=r.RG8UI),K===r.UNSIGNED_SHORT&&(me=r.RG16UI),K===r.UNSIGNED_INT&&(me=r.RG32UI),K===r.BYTE&&(me=r.RG8I),K===r.SHORT&&(me=r.RG16I),K===r.INT&&(me=r.RG32I)),y===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(me=r.RGB8UI),K===r.UNSIGNED_SHORT&&(me=r.RGB16UI),K===r.UNSIGNED_INT&&(me=r.RGB32UI),K===r.BYTE&&(me=r.RGB8I),K===r.SHORT&&(me=r.RGB16I),K===r.INT&&(me=r.RGB32I)),y===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),K===r.UNSIGNED_INT&&(me=r.RGBA32UI),K===r.BYTE&&(me=r.RGBA8I),K===r.SHORT&&(me=r.RGBA16I),K===r.INT&&(me=r.RGBA32I)),y===r.RGB&&(K===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RGB16_EXT),K===r.SHORT&&Oe&&(me=Oe.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(me=r.R11F_G11F_B10F)),y===r.RGBA){const ge=De?ou:Ct.getTransfer(pe);K===r.FLOAT&&(me=r.RGBA32F),K===r.HALF_FLOAT&&(me=r.RGBA16F),K===r.UNSIGNED_BYTE&&(me=ge===Vt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Oe&&(me=Oe.RGBA16_EXT),K===r.SHORT&&Oe&&(me=Oe.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function I(L,y){let K;return L?y===null||y===ia||y===rl?K=r.DEPTH24_STENCIL8:y===Ji?K=r.DEPTH32F_STENCIL8:y===sl&&(K=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ia||y===rl?K=r.DEPTH_COMPONENT24:y===Ji?K=r.DEPTH_COMPONENT32F:y===sl&&(K=r.DEPTH_COMPONENT16),K}function U(L,y){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Fn&&L.minFilter!==Yn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function O(L){const y=L.target;y.removeEventListener("dispose",O),D(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&S.delete(y)}function b(L){const y=L.target;y.removeEventListener("dispose",b),V(y)}function D(L){const y=s.get(L);if(y.__webglInit===void 0)return;const K=L.source,re=E.get(K);if(re){const pe=re[y.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&k(L),Object.keys(re).length===0&&E.delete(K)}s.remove(L)}function k(L){const y=s.get(L);r.deleteTexture(y.__webglTexture);const K=L.source,re=E.get(K);delete re[y.__cacheKey],h.memory.textures--}function V(L){const y=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let pe=0;pe<y.__webglFramebuffer[re].length;pe++)r.deleteFramebuffer(y.__webglFramebuffer[re][pe]);else r.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)r.deleteFramebuffer(y.__webglFramebuffer[re]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=L.textures;for(let re=0,pe=K.length;re<pe;re++){const De=s.get(K[re]);De.__webglTexture&&(r.deleteTexture(De.__webglTexture),h.memory.textures--),s.remove(K[re])}s.remove(L)}let q=0;function te(){q=0}function ne(){return q}function j(L){q=L}function P(){const L=q;return L>=l.maxTextures&&at("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),q+=1,L}function z(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function ae(L,y){const K=s.get(L);if(L.isVideoTexture&&Y(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const re=L.image;if(re===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(K,L,y);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+y)}function _e(L,y){const K=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Ve(K,L,y);return}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+y)}function Ee(L,y){const K=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){Ve(K,L,y);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+y)}function N(L,y){const K=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&K.__version!==L.version){tt(K,L,y);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+y)}const B={[xd]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},J={[Fn]:r.NEAREST,[Gy]:r.NEAREST_MIPMAP_NEAREST,[Mc]:r.NEAREST_MIPMAP_LINEAR,[Yn]:r.LINEAR,[Ch]:r.LINEAR_MIPMAP_NEAREST,[Ys]:r.LINEAR_MIPMAP_LINEAR},ye={[Xy]:r.NEVER,[jy]:r.ALWAYS,[Wy]:r.LESS,[hp]:r.LEQUAL,[qy]:r.EQUAL,[dp]:r.GEQUAL,[Yy]:r.GREATER,[Zy]:r.NOTEQUAL};function Le(L,y){if(y.type===Ji&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Yn||y.magFilter===Ch||y.magFilter===Mc||y.magFilter===Ys||y.minFilter===Yn||y.minFilter===Ch||y.minFilter===Mc||y.minFilter===Ys)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,B[y.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,B[y.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,B[y.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,J[y.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,J[y.minFilter]),y.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,ye[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fn||y.minFilter!==Mc&&y.minFilter!==Ys||y.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function ie(L,y){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",O));const re=y.source;let pe=E.get(re);pe===void 0&&(pe={},E.set(re,pe));const De=z(y);if(De!==L.__cacheKey){pe[De]===void 0&&(pe[De]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,K=!0),pe[De].usedTimes++;const Oe=pe[L.__cacheKey];Oe!==void 0&&(pe[L.__cacheKey].usedTimes--,Oe.usedTimes===0&&k(y)),L.__cacheKey=De,L.__webglTexture=pe[De].texture}return K}function Se(L,y,K){return Math.floor(Math.floor(L/K)/y)}function Te(L,y,K,re){const De=L.updateRanges;if(De.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,K,re,y.data);else{De.sort((ze,Ie)=>ze.start-Ie.start);let Oe=0;for(let ze=1;ze<De.length;ze++){const Ie=De[Oe],Pe=De[ze],je=Ie.start+Ie.count,Qe=Se(Pe.start,y.width,4),it=Se(Ie.start,y.width,4);Pe.start<=je+1&&Qe===it&&Se(Pe.start+Pe.count-1,y.width,4)===Qe?Ie.count=Math.max(Ie.count,Pe.start+Pe.count-Ie.start):(++Oe,De[Oe]=Pe)}De.length=Oe+1;const me=i.getParameter(r.UNPACK_ROW_LENGTH),ge=i.getParameter(r.UNPACK_SKIP_PIXELS),Ce=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let ze=0,Ie=De.length;ze<Ie;ze++){const Pe=De[ze],je=Math.floor(Pe.start/4),Qe=Math.ceil(Pe.count/4),it=je%y.width,W=Math.floor(je/y.width),Ue=Qe,ve=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,it),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,it,W,Ue,ve,K,re,y.data)}L.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,me),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function Ve(L,y,K){let re=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=r.TEXTURE_3D);const pe=ie(L,y),De=y.source;i.bindTexture(re,L.__webglTexture,r.TEXTURE0+K);const Oe=s.get(De);if(De.version!==Oe.__version||pe===!0){if(i.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ve=Ct.getPrimaries(Ct.workingColorSpace),Ne=y.colorSpace===ps?null:Ct.getPrimaries(y.colorSpace),Fe=y.colorSpace===ps||ve===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let ge=M(y.image,!1,l.maxTextureSize);ge=Nt(y,ge);const Ce=c.convert(y.format,y.colorSpace),ze=c.convert(y.type);let Ie=C(y.internalFormat,Ce,ze,y.normalized,y.colorSpace,y.isVideoTexture);Le(re,y);let Pe;const je=y.mipmaps,Qe=y.isVideoTexture!==!0,it=Oe.__version===void 0||pe===!0,W=De.dataReady,Ue=U(y,ge);if(y.isDepthTexture)Ie=I(y.format===Zs,y.type),it&&(Qe?i.texStorage2D(r.TEXTURE_2D,1,Ie,ge.width,ge.height):i.texImage2D(r.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ce,ze,null));else if(y.isDataTexture)if(je.length>0){Qe&&it&&i.texStorage2D(r.TEXTURE_2D,Ue,Ie,je[0].width,je[0].height);for(let ve=0,Ne=je.length;ve<Ne;ve++)Pe=je[ve],Qe?W&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Ce,ze,Pe.data):i.texImage2D(r.TEXTURE_2D,ve,Ie,Pe.width,Pe.height,0,Ce,ze,Pe.data);y.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(r.TEXTURE_2D,Ue,Ie,ge.width,ge.height),W&&Te(y,ge,Ce,ze)):i.texImage2D(r.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Ce,ze,ge.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Ie,je[0].width,je[0].height,ge.depth);for(let ve=0,Ne=je.length;ve<Ne;ve++)if(Pe=je[ve],y.format!==ki)if(Ce!==null)if(Qe){if(W)if(y.layerUpdates.size>0){const Fe=Y_(Pe.width,Pe.height,y.format,y.type);for(const se of y.layerUpdates){const Ae=Pe.data.subarray(se*Fe/Pe.data.BYTES_PER_ELEMENT,(se+1)*Fe/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,se,Pe.width,Pe.height,1,Ce,Ae)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,ge.depth,Ce,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Ie,Pe.width,Pe.height,ge.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,ge.depth,Ce,ze,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ve,Ie,Pe.width,Pe.height,ge.depth,0,Ce,ze,Pe.data)}else{Qe&&it&&i.texStorage2D(r.TEXTURE_2D,Ue,Ie,je[0].width,je[0].height);for(let ve=0,Ne=je.length;ve<Ne;ve++)Pe=je[ve],y.format!==ki?Ce!==null?Qe?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Ce,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,ve,Ie,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?W&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Ce,ze,Pe.data):i.texImage2D(r.TEXTURE_2D,ve,Ie,Pe.width,Pe.height,0,Ce,ze,Pe.data)}else if(y.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Ie,ge.width,ge.height,ge.depth),W)if(y.layerUpdates.size>0){const ve=Y_(ge.width,ge.height,y.format,y.type);for(const Ne of y.layerUpdates){const Fe=ge.data.subarray(Ne*ve/ge.data.BYTES_PER_ELEMENT,(Ne+1)*ve/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ne,ge.width,ge.height,1,Ce,ze,Fe)}y.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,ze,ge.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,Ce,ze,ge.data);else if(y.isData3DTexture)Qe?(it&&i.texStorage3D(r.TEXTURE_3D,Ue,Ie,ge.width,ge.height,ge.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,ze,ge.data)):i.texImage3D(r.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,Ce,ze,ge.data);else if(y.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(r.TEXTURE_2D,Ue,Ie,ge.width,ge.height);else{let ve=ge.width,Ne=ge.height;for(let Fe=0;Fe<Ue;Fe++)i.texImage2D(r.TEXTURE_2D,Fe,Ie,ve,Ne,0,Ce,ze,null),ve>>=1,Ne>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ge.parentNode!==ve){ve.appendChild(ge),S.add(y),ve.onpaint=Ne=>{const Fe=Ne.changedElements;for(const se of S)Fe.includes(se.image)&&(se.needsUpdate=!0)},ve.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ge);else{const Fe=r.RGBA,se=r.RGBA,Ae=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Fe,se,Ae,ge)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(je.length>0){if(Qe&&it){const ve=At(je[0]);i.texStorage2D(r.TEXTURE_2D,Ue,Ie,ve.width,ve.height)}for(let ve=0,Ne=je.length;ve<Ne;ve++)Pe=je[ve],Qe?W&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ce,ze,Pe):i.texImage2D(r.TEXTURE_2D,ve,Ie,Ce,ze,Pe);y.generateMipmaps=!1}else if(Qe){if(it){const ve=At(ge);i.texStorage2D(r.TEXTURE_2D,Ue,Ie,ve.width,ve.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,ze,ge)}else i.texImage2D(r.TEXTURE_2D,0,Ie,Ce,ze,ge);x(y)&&F(re),Oe.__version=De.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function tt(L,y,K){if(y.image.length!==6)return;const re=ie(L,y),pe=y.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+K);const De=s.get(pe);if(pe.version!==De.__version||re===!0){i.activeTexture(r.TEXTURE0+K);const Oe=Ct.getPrimaries(Ct.workingColorSpace),me=y.colorSpace===ps?null:Ct.getPrimaries(y.colorSpace),ge=y.colorSpace===ps||Oe===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,ze=y.image[0]&&y.image[0].isDataTexture,Ie=[];for(let se=0;se<6;se++)!Ce&&!ze?Ie[se]=M(y.image[se],!0,l.maxCubemapSize):Ie[se]=ze?y.image[se].image:y.image[se],Ie[se]=Nt(y,Ie[se]);const Pe=Ie[0],je=c.convert(y.format,y.colorSpace),Qe=c.convert(y.type),it=C(y.internalFormat,je,Qe,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Ue=De.__version===void 0||re===!0,ve=pe.dataReady;let Ne=U(y,Pe);Le(r.TEXTURE_CUBE_MAP,y);let Fe;if(Ce){W&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,it,Pe.width,Pe.height);for(let se=0;se<6;se++){Fe=Ie[se].mipmaps;for(let Ae=0;Ae<Fe.length;Ae++){const Re=Fe[Ae];y.format!==ki?je!==null?W?ve&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,Re.width,Re.height,je,Re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,it,Re.width,Re.height,0,Re.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,Re.width,Re.height,je,Qe,Re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,it,Re.width,Re.height,0,je,Qe,Re.data)}}}else{if(Fe=y.mipmaps,W&&Ue){Fe.length>0&&Ne++;const se=At(Ie[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,it,se.width,se.height)}for(let se=0;se<6;se++)if(ze){W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie[se].width,Ie[se].height,je,Qe,Ie[se].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,it,Ie[se].width,Ie[se].height,0,je,Qe,Ie[se].data);for(let Ae=0;Ae<Fe.length;Ae++){const ot=Fe[Ae].image[se].image;W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,ot.width,ot.height,je,Qe,ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,it,ot.width,ot.height,0,je,Qe,ot.data)}}else{W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,je,Qe,Ie[se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,it,je,Qe,Ie[se]);for(let Ae=0;Ae<Fe.length;Ae++){const Re=Fe[Ae];W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,je,Qe,Re.image[se]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,it,je,Qe,Re.image[se])}}}x(y)&&F(r.TEXTURE_CUBE_MAP),De.__version=pe.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Ke(L,y,K,re,pe,De){const Oe=c.convert(K.format,K.colorSpace),me=c.convert(K.type),ge=C(K.internalFormat,Oe,me,K.normalized,K.colorSpace),Ce=s.get(y),ze=s.get(K);if(ze.__renderTarget=y,!Ce.__hasExternalTextures){const Ie=Math.max(1,y.width>>De),Pe=Math.max(1,y.height>>De);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?i.texImage3D(pe,De,ge,Ie,Pe,y.depth,0,Oe,me,null):i.texImage2D(pe,De,ge,Ie,Pe,0,Oe,me,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),sn(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,pe,ze.__webglTexture,0,Xt(y)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,pe,ze.__webglTexture,De),i.bindFramebuffer(r.FRAMEBUFFER,null)}function It(L,y,K){if(r.bindRenderbuffer(r.RENDERBUFFER,L),y.depthBuffer){const re=y.depthTexture,pe=re&&re.isDepthTexture?re.type:null,De=I(y.stencilBuffer,pe),Oe=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;sn(y)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt(y),De,y.width,y.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt(y),De,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,De,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,L)}else{const re=y.textures;for(let pe=0;pe<re.length;pe++){const De=re[pe],Oe=c.convert(De.format,De.colorSpace),me=c.convert(De.type),ge=C(De.internalFormat,Oe,me,De.normalized,De.colorSpace);sn(y)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt(y),ge,y.width,y.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt(y),ge,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ge,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(L,y,K){const re=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=s.get(y.depthTexture);if(pe.__renderTarget=y,(!pe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),re){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,y.depthTexture.addEventListener("dispose",O)),pe.__webglTexture===void 0){pe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),Le(r.TEXTURE_CUBE_MAP,y.depthTexture);const Ce=c.convert(y.depthTexture.format),ze=c.convert(y.depthTexture.type);let Ie;y.depthTexture.format===Na?Ie=r.DEPTH_COMPONENT24:y.depthTexture.format===Zs&&(Ie=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ie,y.width,y.height,0,Ce,ze,null)}}else ae(y.depthTexture,0);const De=pe.__webglTexture,Oe=Xt(y),me=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,ge=y.depthTexture.format===Zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Na)sn(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,me,De,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ge,me,De,0);else if(y.depthTexture.format===Zs)sn(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,me,De,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,ge,me,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(L){const y=s.get(L),K=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const re=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),re){const pe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,re.removeEventListener("dispose",pe)};re.addEventListener("dispose",pe),y.__depthDisposeCallback=pe}y.__boundDepthTexture=re}if(L.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let re=0;re<6;re++)ut(y.__webglFramebuffer[re],L,re);else{const re=L.texture.mipmaps;re&&re.length>0?ut(y.__webglFramebuffer[0],L,0):ut(y.__webglFramebuffer,L,0)}else if(K){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]===void 0)y.__webglDepthbuffer[re]=r.createRenderbuffer(),It(y.__webglDepthbuffer[re],L,!1);else{const pe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=y.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,De),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,De)}}else{const re=L.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),It(y.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,De),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,De)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function St(L,y,K){const re=s.get(L);y!==void 0&&Ke(re.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&xt(L)}function ft(L){const y=L.texture,K=s.get(L),re=s.get(y);L.addEventListener("dispose",b);const pe=L.textures,De=L.isWebGLCubeRenderTarget===!0,Oe=pe.length>1;if(Oe||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=y.version,h.memory.textures++),De){K.__webglFramebuffer=[];for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[me]=[];for(let ge=0;ge<y.mipmaps.length;ge++)K.__webglFramebuffer[me][ge]=r.createFramebuffer()}else K.__webglFramebuffer[me]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let me=0;me<y.mipmaps.length;me++)K.__webglFramebuffer[me]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let me=0,ge=pe.length;me<ge;me++){const Ce=s.get(pe[me]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&sn(L)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let me=0;me<pe.length;me++){const ge=pe[me];K.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[me]);const Ce=c.convert(ge.format,ge.colorSpace),ze=c.convert(ge.type),Ie=C(ge.internalFormat,Ce,ze,ge.normalized,ge.colorSpace,L.isXRRenderTarget===!0),Pe=Xt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Ie,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,K.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),It(K.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(De){i.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Le(r.TEXTURE_CUBE_MAP,y);for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Ke(K.__webglFramebuffer[me][ge],L,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else Ke(K.__webglFramebuffer[me],L,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(y)&&F(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let me=0,ge=pe.length;me<ge;me++){const Ce=pe[me],ze=s.get(Ce);let Ie=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ie,ze.__webglTexture),Le(Ie,Ce),Ke(K.__webglFramebuffer,L,Ce,r.COLOR_ATTACHMENT0+me,Ie,0),x(Ce)&&F(Ie)}i.unbindTexture()}else{let me=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(me,re.__webglTexture),Le(me,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Ke(K.__webglFramebuffer[ge],L,y,r.COLOR_ATTACHMENT0,me,ge);else Ke(K.__webglFramebuffer,L,y,r.COLOR_ATTACHMENT0,me,0);x(y)&&F(me),i.unbindTexture()}L.depthBuffer&&xt(L)}function an(L){const y=L.textures;for(let K=0,re=y.length;K<re;K++){const pe=y[K];if(x(pe)){const De=H(L),Oe=s.get(pe).__webglTexture;i.bindTexture(De,Oe),F(De),i.unbindTexture()}}}const Jt=[],kt=[];function $t(L){if(L.samples>0){if(sn(L)===!1){const y=L.textures,K=L.width,re=L.height;let pe=r.COLOR_BUFFER_BIT;const De=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=s.get(L),me=y.length>1;if(me)for(let Ce=0;Ce<y.length;Ce++)i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ge=L.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ce]);const ze=s.get(y[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ze,0)}r.blitFramebuffer(0,0,K,re,0,0,K,re,pe,r.NEAREST),m===!0&&(Jt.length=0,kt.length=0,Jt.push(r.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Jt.push(De),kt.push(De),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let Ce=0;Ce<y.length;Ce++){i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ce]);const ze=s.get(y[Ce]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,ze,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const y=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Xt(L){return Math.min(l.maxSamples,L.samples)}function sn(L){const y=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(L){const y=h.render.frame;v.get(L)!==y&&(v.set(L,y),L.update())}function Nt(L,y){const K=L.colorSpace,re=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==ru&&K!==ps&&(Ct.getTransfer(K)===Vt?(re!==ki||pe!==Mi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",K)),y}function At(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=P,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=j,this.setTexture2D=ae,this.setTexture2DArray=_e,this.setTexture3D=Ee,this.setTextureCube=N,this.rebindTextures=St,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function CA(r,e){function i(s,l=ps){let c;const h=Ct.getTransfer(l);if(s===Mi)return r.UNSIGNED_BYTE;if(s===op)return r.UNSIGNED_SHORT_4_4_4_4;if(s===lp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Nv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Ov)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Lv)return r.BYTE;if(s===Uv)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===rp)return r.INT;if(s===ia)return r.UNSIGNED_INT;if(s===Ji)return r.FLOAT;if(s===Ua)return r.HALF_FLOAT;if(s===Pv)return r.ALPHA;if(s===Iv)return r.RGB;if(s===ki)return r.RGBA;if(s===Na)return r.DEPTH_COMPONENT;if(s===Zs)return r.DEPTH_STENCIL;if(s===Bv)return r.RED;if(s===cp)return r.RED_INTEGER;if(s===Js)return r.RG;if(s===up)return r.RG_INTEGER;if(s===fp)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===eu||s===tu)if(h===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===Md||s===Ed||s===bd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===au||s===Dd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Td||s===Ad)return h===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Rd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Cd)return c.COMPRESSED_R11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===au)return c.COMPRESSED_RG11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ld||s===Ud||s===Nd||s===Od||s===Pd||s===Id||s===Bd||s===zd||s===Fd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ld)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ud)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Od)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Id)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wd||s===qd||s===Yd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Wd)return h===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===jd||s===su||s===Kd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===su)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Wv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new aa({vertexShader:wA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zn(new ul(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends xs{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,S=null,g=null,E=null,T=null;const w=typeof XRWebGLBinding<"u",M=new LA,x={},F=i.getContextAttributes();let H=null,C=null;const I=[],U=[],O=new rt;let b=null;const D=new yi;D.viewport=new cn;const k=new yi;k.viewport=new cn;const V=[D,k],q=new FM;let te=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Se=I[ie];return Se===void 0&&(Se=new Ph,I[ie]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ie){let Se=I[ie];return Se===void 0&&(Se=new Ph,I[ie]=Se),Se.getGripSpace()},this.getHand=function(ie){let Se=I[ie];return Se===void 0&&(Se=new Ph,I[ie]=Se),Se.getHandSpace()};function j(ie){const Se=U.indexOf(ie.inputSource);if(Se===-1)return;const Te=I[Se];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,d||h),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",z);for(let ie=0;ie<I.length;ie++){const Se=U[ie];Se!==null&&(U[ie]=null,I[ie].disconnect(Se))}te=null,ne=null,M.reset();for(const ie in x)delete x[ie];e.setRenderTarget(H),E=null,g=null,S=null,l=null,C=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){p=ie,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return S===null&&w&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",P),l.addEventListener("inputsourceschange",z),F.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ve=null,tt=null;F.depth&&(tt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=F.stencil?Zs:Na,Ve=F.stencil?rl:ia);const Ke={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new ta(g.textureWidth,g.textureHeight,{format:ki,type:Mi,depthTexture:new $r(g.textureWidth,g.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new ta(E.framebufferWidth,E.framebufferHeight,{format:ki,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Le.setContext(l),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(ie){for(let Se=0;Se<ie.removed.length;Se++){const Te=ie.removed[Se],Ve=U.indexOf(Te);Ve>=0&&(U[Ve]=null,I[Ve].disconnect(Te))}for(let Se=0;Se<ie.added.length;Se++){const Te=ie.added[Se];let Ve=U.indexOf(Te);if(Ve===-1){for(let Ke=0;Ke<I.length;Ke++)if(Ke>=U.length){U.push(Te),Ve=Ke;break}else if(U[Ke]===null){U[Ke]=Te,Ve=Ke;break}if(Ve===-1)break}const tt=I[Ve];tt&&tt.connect(Te)}}const ae=new $,_e=new $;function Ee(ie,Se,Te){ae.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(Te.matrixWorld);const Ve=ae.distanceTo(_e),tt=Se.projectionMatrix.elements,Ke=Te.projectionMatrix.elements,It=tt[14]/(tt[10]-1),ut=tt[14]/(tt[10]+1),xt=(tt[9]+1)/tt[5],St=(tt[9]-1)/tt[5],ft=(tt[8]-1)/tt[0],an=(Ke[8]+1)/Ke[0],Jt=It*ft,kt=It*an,$t=Ve/(-ft+an),Xt=$t*-ft;if(Se.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Xt),ie.translateZ($t),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),tt[10]===-1)ie.projectionMatrix.copy(Se.projectionMatrix),ie.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const sn=It+$t,Y=ut+$t,Nt=Jt-Xt,At=kt+(Ve-Xt),L=xt*ut/Y*sn,y=St*ut/Y*sn;ie.projectionMatrix.makePerspective(Nt,At,L,y,sn,Y),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function N(ie,Se){Se===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Se.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let Se=ie.near,Te=ie.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(Te=M.depthFar)),q.near=k.near=D.near=Se,q.far=k.far=D.far=Te,(te!==q.near||ne!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),te=q.near,ne=q.far),q.layers.mask=ie.layers.mask|6,D.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;const Ve=ie.parent,tt=q.cameras;N(q,Ve);for(let Ke=0;Ke<tt.length;Ke++)N(tt[Ke],Ve);tt.length===2?Ee(q,D,k):q.projectionMatrix.copy(D.projectionMatrix),B(ie,q,Ve)};function B(ie,Se,Te){Te===null?ie.matrix.copy(Se.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Se.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Se.projectionMatrix),ie.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Jd*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(ie){return x[ie]};let J=null;function ye(ie,Se){if(v=Se.getViewerPose(d||h),T=Se,v!==null){const Te=v.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let Ve=!1;Te.length!==q.cameras.length&&(q.cameras.length=0,Ve=!0);for(let ut=0;ut<Te.length;ut++){const xt=Te[ut];let St=null;if(E!==null)St=E.getViewport(xt);else{const an=S.getViewSubImage(g,xt);St=an.viewport,ut===0&&(e.setRenderTargetTextures(C,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(C))}let ft=V[ut];ft===void 0&&(ft=new yi,ft.layers.enable(ut),ft.viewport=new cn,V[ut]=ft),ft.matrix.fromArray(xt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(xt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(St.x,St.y,St.width,St.height),ut===0&&(q.matrix.copy(ft.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ve===!0&&q.cameras.push(ft)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){S=s.getBinding();const ut=S.getDepthInformation(Te[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,l.renderState)}if(tt&&tt.includes("camera-access")&&w){e.state.unbindTexture(),S=s.getBinding();for(let ut=0;ut<Te.length;ut++){const xt=Te[ut].camera;if(xt){let St=x[xt];St||(St=new Wv,x[xt]=St);const ft=S.getCameraImage(xt);St.sourceTexture=ft}}}}for(let Te=0;Te<I.length;Te++){const Ve=U[Te],tt=I[Te];Ve!==null&&tt!==void 0&&tt.update(Ve,Se,d||h)}J&&J(ie,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),T=null}const Le=new Kv;Le.setAnimationLoop(ye),this.setAnimationLoop=function(ie){J=ie},this.dispose=function(){}}}const NA=new nn,ix=new ct;ix.set(-1,0,0,0,1,0,0,0,1);function OA(r,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,qv(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,F,H,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),S(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),g(M,x),x.isMeshPhysicalMaterial&&E(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),T(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),w(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?m(M,x,F,H):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===oi&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===oi&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=e.get(x),H=F.envMap,C=F.envMapRotation;H&&(M.envMap.value=H,M.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(ix),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,F,H){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=H*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function S(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===oi&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const F=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function PA(r,e,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const U=I.program;s.uniformBlockBinding(C,U)}function d(C,I){let U=l[C.id];U===void 0&&(M(C),U=v(C),l[C.id]=U,C.addEventListener("dispose",F));const O=I.program;s.updateUBOMapping(C,O);const b=e.render.frame;c[C.id]!==b&&(g(C),c[C.id]=b)}function v(C){const I=S();C.__bindingPointIndex=I;const U=r.createBuffer(),O=C.__size,b=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,O,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,U),U}function S(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const I=l[C.id],U=C.uniforms,O=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let b=0,D=U.length;b<D;b++){const k=U[b];if(Array.isArray(k))for(let V=0,q=k.length;V<q;V++)E(k[V],b,V,O);else E(k,b,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(C,I,U,O){if(w(C,I,U,O)===!0){const b=C.__offset,D=C.value;if(Array.isArray(D)){let k=0;for(let V=0;V<D.length;V++){const q=D[V],te=x(q);T(q,C.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,C.__data)}}function T(C,I,U){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,U)}function w(C,I,U,O){const b=C.value,D=I+"_"+U;if(O[D]===void 0)return typeof b=="number"||typeof b=="boolean"?O[D]=b:ArrayBuffer.isView(b)?O[D]=b.slice():O[D]=b.clone(),!0;{const k=O[D];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return O[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(k.equals(b)===!1)return k.copy(b),!0}}return!1}function M(C){const I=C.uniforms;let U=0;const O=16;for(let D=0,k=I.length;D<k;D++){const V=Array.isArray(I[D])?I[D]:[I[D]];for(let q=0,te=V.length;q<te;q++){const ne=V[q],j=Array.isArray(ne.value)?ne.value:[ne.value];for(let P=0,z=j.length;P<z;P++){const ae=j[P],_e=x(ae),Ee=U%O,N=Ee%_e.boundary,B=Ee+N;U+=N,B!==0&&O-B<_e.storage&&(U+=O-B),ne.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=U,U+=_e.storage}}}const b=U%O;return b>0&&(U+=O-b),C.__size=U,C.__cache={},this}function x(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):at("WebGLRenderer: Unsupported uniform value type.",C),I}function F(C){const I=C.target;I.removeEventListener("dispose",F);const U=h.indexOf(I.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function H(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:H}}const IA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function BA(){return Ki===null&&(Ki=new yM(IA,16,16,Js,Ua),Ki.name="DFG_LUT",Ki.minFilter=Yn,Ki.magFilter=Yn,Ki.wrapS=wa,Ki.wrapT=wa,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class zA{constructor(e={}){const{canvas:i=Qy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:E=Mi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=E,M=new Set([fp,up,cp]),x=new Set([Mi,ia,sl,rl,op,lp]),F=new Uint32Array(4),H=new Int32Array(4),C=new $;let I=null,U=null;const O=[],b=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,q=null,te=null,ne=null,j=null;this._outputColorSpace=Si;let P=0,z=0,ae=null,_e=-1,Ee=null;const N=new cn,B=new cn;let J=null;const ye=new gt(0);let Le=0,ie=i.width,Se=i.height,Te=1,Ve=null,tt=null;const Ke=new cn(0,0,ie,Se),It=new cn(0,0,ie,Se);let ut=!1;const xt=new vp;let St=!1,ft=!1;const an=new nn,Jt=new $,kt=new cn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function sn(){return ae===null?Te:1}let Y=s;function Nt(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",ot,!1),i.addEventListener("webglcontextrestored",st,!1),i.addEventListener("webglcontextcreationerror",jt,!1),Y===null){const Z="webgl2";if(Y=Nt(Z,A),Y===null)throw Nt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw wt("WebGLRenderer: "+A.message),A}let At,L,y,K,re,pe,De,Oe,me,ge,Ce,ze,Ie,Pe,je,Qe,it,W,Ue,ve,Ne,Fe,se;function Ae(){At=new BT(Y),At.init(),Ne=new CA(Y,At),L=new wT(Y,At,e,Ne),y=new AA(Y,At),L.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),te=Y.createFramebuffer(),ne=Y.createFramebuffer(),j=Y.createFramebuffer(),K=new HT(Y),re=new hA,pe=new RA(Y,At,y,re,L,Ne,K),De=new IT(k),Oe=new XM(Y),Fe=new RT(Y,Oe),me=new zT(Y,Oe,K,Fe),ge=new VT(Y,me,Oe,Fe,K),W=new GT(Y,L,pe),je=new DT(re),Ce=new fA(k,De,At,L,Fe,je),ze=new OA(k,re),Ie=new pA,Pe=new SA(At),it=new AT(k,De,y,ge,T,m),Qe=new TA(k,ge,L),se=new PA(Y,K,L,y),Ue=new CT(Y,At,K),ve=new FT(Y,At,K),K.programs=Ce.programs,k.capabilities=L,k.extensions=At,k.properties=re,k.renderLists=Ie,k.shadowMap=Qe,k.state=y,k.info=K}Ae(),w!==Mi&&(D=new XT(w,i.width,i.height,p,l,c));const Re=new UA(k,Y);this.xr=Re,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(A){A!==void 0&&(Te=A,this.setSize(ie,Se,!1))},this.getSize=function(A){return A.set(ie,Se)},this.setSize=function(A,Z,fe=!0){if(Re.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Se=Z,i.width=Math.floor(A*Te),i.height=Math.floor(Z*Te),fe===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(ie*Te,Se*Te).floor()},this.setDrawingBufferSize=function(A,Z,fe){ie=A,Se=Z,Te=fe,i.width=Math.floor(A*fe),i.height=Math.floor(Z*fe),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(w===Mi){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Ke)},this.setViewport=function(A,Z,fe,ce){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,Z,fe,ce),y.viewport(N.copy(Ke).multiplyScalar(Te).round())},this.getScissor=function(A){return A.copy(It)},this.setScissor=function(A,Z,fe,ce){A.isVector4?It.set(A.x,A.y,A.z,A.w):It.set(A,Z,fe,ce),y.scissor(B.copy(It).multiplyScalar(Te).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){y.setScissorTest(ut=A)},this.setOpaqueSort=function(A){Ve=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,fe=!0){let ce=0;if(A){let ue=!1;if(ae!==null){const He=ae.texture.format;ue=M.has(He)}if(ue){const He=ae.texture.type,Xe=x.has(He),Be=it.getClearColor(),qe=it.getClearAlpha(),We=Be.r,$e=Be.g,ht=Be.b;Xe?(F[0]=We,F[1]=$e,F[2]=ht,F[3]=qe,Y.clearBufferuiv(Y.COLOR,0,F)):(H[0]=We,H[1]=$e,H[2]=ht,H[3]=qe,Y.clearBufferiv(Y.COLOR,0,H))}else ce|=Y.COLOR_BUFFER_BIT}Z&&(ce|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&Y.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",ot,!1),i.removeEventListener("webglcontextrestored",st,!1),i.removeEventListener("webglcontextcreationerror",jt,!1),it.dispose(),Ie.dispose(),Pe.dispose(),re.dispose(),De.dispose(),ge.dispose(),Fe.dispose(),se.dispose(),Ce.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",un),Re.removeEventListener("sessionend",dn),Vn.stop()};function ot(A){A.preventDefault(),x_("WebGLRenderer: Context Lost."),V=!0}function st(){x_("WebGLRenderer: Context Restored."),V=!1;const A=K.autoReset,Z=Qe.enabled,fe=Qe.autoUpdate,ce=Qe.needsUpdate,ue=Qe.type;Ae(),K.autoReset=A,Qe.enabled=Z,Qe.autoUpdate=fe,Qe.needsUpdate=ce,Qe.type=ue}function jt(A){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Mn(A){const Z=A.target;Z.removeEventListener("dispose",Mn),Un(Z)}function Un(A){Nn(A),re.remove(A)}function Nn(A){const Z=re.get(A).programs;Z!==void 0&&(Z.forEach(function(fe){Ce.releaseProgram(fe)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,fe,ce,ue,He){Z===null&&(Z=$t);const Xe=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Be=Ia(A,Z,fe,ce,ue);y.setMaterial(ce,Xe);let qe=fe.index,We=1;if(ce.wireframe===!0){if(qe=me.getWireframeAttribute(fe),qe===void 0)return;We=2}const $e=fe.drawRange,ht=fe.attributes.position;let Je=$e.start*We,Dt=($e.start+$e.count)*We;He!==null&&(Je=Math.max(Je,He.start*We),Dt=Math.min(Dt,(He.start+He.count)*We)),qe!==null?(Je=Math.max(Je,0),Dt=Math.min(Dt,qe.count)):ht!=null&&(Je=Math.max(Je,0),Dt=Math.min(Dt,ht.count));const rn=Dt-Je;if(rn<0||rn===1/0)return;Fe.setup(ue,ce,Be,fe,qe);let Kt,Bt=Ue;if(qe!==null&&(Kt=Oe.get(qe),Bt=ve,Bt.setIndex(Kt)),ue.isMesh)ce.wireframe===!0?(y.setLineWidth(ce.wireframeLinewidth*sn()),Bt.setMode(Y.LINES)):Bt.setMode(Y.TRIANGLES);else if(ue.isLine){let zt=ce.linewidth;zt===void 0&&(zt=1),y.setLineWidth(zt*sn()),ue.isLineSegments?Bt.setMode(Y.LINES):ue.isLineLoop?Bt.setMode(Y.LINE_LOOP):Bt.setMode(Y.LINE_STRIP)}else ue.isPoints?Bt.setMode(Y.POINTS):ue.isSprite&&Bt.setMode(Y.TRIANGLES);if(ue.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const zt=ue._multiDrawStarts,ke=ue._multiDrawCounts,kn=ue._multiDrawCount,yt=qe?Oe.get(qe).bytesPerElement:1,En=re.get(ce).currentProgram.getUniforms();for(let ci=0;ci<kn;ci++)En.setValue(Y,"_gl_DrawID",ci),Bt.render(zt[ci]/yt,ke[ci])}else if(ue.isInstancedMesh)Bt.renderInstances(Je,rn,ue.count);else if(fe.isInstancedBufferGeometry){const zt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,ke=Math.min(fe.instanceCount,zt);Bt.renderInstances(Je,rn,ke)}else Bt.render(Je,rn)};function Gn(A,Z,fe){A.transparent===!0&&A.side===Gi&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,Pa(A,Z,fe),A.side=gs,A.needsUpdate=!0,Pa(A,Z,fe),A.side=Gi):Pa(A,Z,fe)}this.compile=function(A,Z,fe=null){fe===null&&(fe=A),U=Pe.get(fe),U.init(Z),b.push(U),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Z.layers)&&(U.pushLight(ue),ue.castShadow&&U.pushShadow(ue))}),A!==fe&&A.traverseVisible(function(ue){ue.isLight&&ue.layers.test(Z.layers)&&(U.pushLight(ue),ue.castShadow&&U.pushShadow(ue))}),U.setupLights();const ce=new Set;return A.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const He=ue.material;if(He)if(Array.isArray(He))for(let Xe=0;Xe<He.length;Xe++){const Be=He[Xe];Gn(Be,fe,ue),ce.add(Be)}else Gn(He,fe,ue),ce.add(He)}),U=b.pop(),ce},this.compileAsync=function(A,Z,fe=null){const ce=this.compile(A,Z,fe);return new Promise(ue=>{function He(){if(ce.forEach(function(Xe){re.get(Xe).currentProgram.isReady()&&ce.delete(Xe)}),ce.size===0){ue(A);return}setTimeout(He,10)}At.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Cn=null;function Zn(A){Cn&&Cn(A)}function un(){Vn.stop()}function dn(){Vn.start()}const Vn=new Kv;Vn.setAnimationLoop(Zn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(A){Cn=A,Re.setAnimationLoop(A),A===null?Vn.stop():Vn.start()},Re.addEventListener("sessionstart",un),Re.addEventListener("sessionend",dn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(A,Z);const fe=Re.enabled===!0&&Re.isPresenting===!0,ce=D!==null&&(ae===null||fe)&&D.begin(k,ae);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Z),Z=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,Z,ae),U=Pe.get(A,b.length),U.init(Z),U.state.textureUnits=pe.getTextureUnits(),b.push(U),an.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),xt.setFromProjectionMatrix(an,$i,Z.reversedDepth),ft=this.localClippingEnabled,St=je.init(this.clippingPlanes,ft),I=Ie.get(A,O.length),I.init(),O.push(I),Re.enabled===!0&&Re.isPresenting===!0){const Xe=k.xr.getDepthSensingMesh();Xe!==null&&Ss(Xe,Z,-1/0,k.sortObjects)}Ss(A,Z,0,k.sortObjects),I.finish(),k.sortObjects===!0&&I.sort(Ve,tt,Z.reversedDepth),Xt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Xt&&it.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&je.beginShadows();const ue=U.state.shadowsArray;if(Qe.render(ue,A,Z),St===!0&&je.endShadows(),(ce&&D.hasRenderPass())===!1){const Xe=I.opaque,Be=I.transmissive;if(U.setupLights(),Z.isArrayCamera){const qe=Z.cameras;if(Be.length>0)for(let We=0,$e=qe.length;We<$e;We++){const ht=qe[We];hl(Xe,Be,A,ht)}Xt&&it.render(A);for(let We=0,$e=qe.length;We<$e;We++){const ht=qe[We];fl(I,A,ht,ht.viewport)}}else Be.length>0&&hl(Xe,Be,A,Z),Xt&&it.render(A),fl(I,A,Z)}ae!==null&&z===0&&(pe.updateMultisampleRenderTarget(ae),pe.updateRenderTargetMipmap(ae)),ce&&D.end(k),A.isScene===!0&&A.onAfterRender(k,A,Z),Fe.resetDefaultState(),_e=-1,Ee=null,b.pop(),b.length>0?(U=b[b.length-1],pe.setTextureUnits(U.state.textureUnits),St===!0&&je.setGlobalState(k.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,q!==null&&q.renderEnd()};function Ss(A,Z,fe,ce){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){ce&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(an);const Xe=ge.update(A),Be=A.material;Be.visible&&I.push(A,Xe,Be,fe,kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const Xe=ge.update(A),Be=A.material;if(ce&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),kt.copy(Xe.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(an)),Array.isArray(Be)){const qe=Xe.groups;for(let We=0,$e=qe.length;We<$e;We++){const ht=qe[We],Je=Be[ht.materialIndex];Je&&Je.visible&&I.push(A,Xe,Je,fe,kt.z,ht)}}else Be.visible&&I.push(A,Xe,Be,fe,kt.z,null)}}const He=A.children;for(let Xe=0,Be=He.length;Xe<Be;Xe++)Ss(He[Xe],Z,fe,ce)}function fl(A,Z,fe,ce){const{opaque:ue,transmissive:He,transparent:Xe}=A;U.setupLightsView(fe),St===!0&&je.setGlobalState(k.clippingPlanes,fe),ce&&y.viewport(N.copy(ce)),ue.length>0&&ys(ue,Z,fe),He.length>0&&ys(He,Z,fe),Xe.length>0&&ys(Xe,Z,fe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function hl(A,Z,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ce.id]===void 0){const Je=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ce.id]=new ta(1,1,{generateMipmaps:!0,type:Je?Ua:Mi,minFilter:Ys,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const He=U.state.transmissionRenderTarget[ce.id],Xe=ce.viewport||N;He.setSize(Xe.z*k.transmissionResolutionScale,Xe.w*k.transmissionResolutionScale);const Be=k.getRenderTarget(),qe=k.getActiveCubeFace(),We=k.getActiveMipmapLevel();k.setRenderTarget(He),k.getClearColor(ye),Le=k.getClearAlpha(),Le<1&&k.setClearColor(16777215,.5),k.clear(),Xt&&it.render(fe);const $e=k.toneMapping;k.toneMapping=ea;const ht=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),U.setupLightsView(ce),St===!0&&je.setGlobalState(k.clippingPlanes,ce),ys(A,fe,ce),pe.updateMultisampleRenderTarget(He),pe.updateRenderTargetMipmap(He),At.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Dt=0,rn=Z.length;Dt<rn;Dt++){const Kt=Z[Dt],{object:Bt,geometry:zt,material:ke,group:kn}=Kt;if(ke.side===Gi&&Bt.layers.test(ce.layers)){const yt=ke.side;ke.side=oi,ke.needsUpdate=!0,Oa(Bt,fe,ce,zt,ke,kn),ke.side=yt,ke.needsUpdate=!0,Je=!0}}Je===!0&&(pe.updateMultisampleRenderTarget(He),pe.updateRenderTargetMipmap(He))}k.setRenderTarget(Be,qe,We),k.setClearColor(ye,Le),ht!==void 0&&(ce.viewport=ht),k.toneMapping=$e}function ys(A,Z,fe){const ce=Z.isScene===!0?Z.overrideMaterial:null;for(let ue=0,He=A.length;ue<He;ue++){const Xe=A[ue],{object:Be,geometry:qe,group:We}=Xe;let $e=Xe.material;$e.allowOverride===!0&&ce!==null&&($e=ce),Be.layers.test(fe.layers)&&Oa(Be,Z,fe,qe,$e,We)}}function Oa(A,Z,fe,ce,ue,He){A.onBeforeRender(k,Z,fe,ce,ue,He),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ue.onBeforeRender(k,Z,fe,ce,A,He),ue.transparent===!0&&ue.side===Gi&&ue.forceSinglePass===!1?(ue.side=oi,ue.needsUpdate=!0,k.renderBufferDirect(fe,Z,ce,ue,A,He),ue.side=gs,ue.needsUpdate=!0,k.renderBufferDirect(fe,Z,ce,ue,A,He),ue.side=Gi):k.renderBufferDirect(fe,Z,ce,ue,A,He),A.onAfterRender(k,Z,fe,ce,ue,He)}function Pa(A,Z,fe){Z.isScene!==!0&&(Z=$t);const ce=re.get(A),ue=U.state.lights,He=U.state.shadowsArray,Xe=ue.state.version,Be=Ce.getParameters(A,ue.state,He,Z,fe,U.state.lightProbeGridArray),qe=Ce.getProgramCacheKey(Be);let We=ce.programs;ce.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,ce.fog=Z.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ce.envMap=De.get(A.envMap||ce.environment,$e),ce.envMapRotation=ce.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Mn),We=new Map,ce.programs=We);let ht=We.get(qe);if(ht!==void 0){if(ce.currentProgram===ht&&ce.lightsStateVersion===Xe)return ra(A,Be),ht}else Be.uniforms=Ce.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,fe,Be),A.onBeforeCompile(Be,k),ht=Ce.acquireProgram(Be,qe),We.set(qe,ht),ce.uniforms=Be.uniforms;const Je=ce.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=je.uniform),ra(A,Be),ce.needsLights=dl(A),ce.lightsStateVersion=Xe,ce.needsLights&&(Je.ambientLightColor.value=ue.state.ambient,Je.lightProbe.value=ue.state.probe,Je.directionalLights.value=ue.state.directional,Je.directionalLightShadows.value=ue.state.directionalShadow,Je.spotLights.value=ue.state.spot,Je.spotLightShadows.value=ue.state.spotShadow,Je.rectAreaLights.value=ue.state.rectArea,Je.ltc_1.value=ue.state.rectAreaLTC1,Je.ltc_2.value=ue.state.rectAreaLTC2,Je.pointLights.value=ue.state.point,Je.pointLightShadows.value=ue.state.pointShadow,Je.hemisphereLights.value=ue.state.hemi,Je.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Je.spotLightMatrix.value=ue.state.spotLightMatrix,Je.spotLightMap.value=ue.state.spotLightMap,Je.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=U.state.lightProbeGridArray.length>0,ce.currentProgram=ht,ce.uniformsList=null,ht}function sa(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=iu.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function ra(A,Z){const fe=re.get(A);fe.outputColorSpace=Z.outputColorSpace,fe.batching=Z.batching,fe.batchingColor=Z.batchingColor,fe.instancing=Z.instancing,fe.instancingColor=Z.instancingColor,fe.instancingMorph=Z.instancingMorph,fe.skinning=Z.skinning,fe.morphTargets=Z.morphTargets,fe.morphNormals=Z.morphNormals,fe.morphColors=Z.morphColors,fe.morphTargetsCount=Z.morphTargetsCount,fe.numClippingPlanes=Z.numClippingPlanes,fe.numIntersection=Z.numClipIntersection,fe.vertexAlphas=Z.vertexAlphas,fe.vertexTangents=Z.vertexTangents,fe.toneMapping=Z.toneMapping}function Ms(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(Z.matrixWorld);for(let fe=0,ce=A.length;fe<ce;fe++){const ue=A[fe];if(ue.texture!==null&&ue.boundingBox.containsPoint(C))return ue}return null}function Ia(A,Z,fe,ce,ue){Z.isScene!==!0&&(Z=$t),pe.resetTextureUnits();const He=Z.fog,Xe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Z.environment:null,Be=ae===null?k.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ct.workingColorSpace,qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,We=De.get(ce.envMap||Xe,qe),$e=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ht=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Je=!!fe.morphAttributes.position,Dt=!!fe.morphAttributes.normal,rn=!!fe.morphAttributes.color;let Kt=ea;ce.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Kt=k.toneMapping);const Bt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,zt=Bt!==void 0?Bt.length:0,ke=re.get(ce),kn=U.state.lights;if(St===!0&&(ft===!0||A!==Ee)){const Pt=A===Ee&&ce.id===_e;je.setState(ce,A,Pt)}let yt=!1;ce.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==kn.state.version||ke.outputColorSpace!==Be||ue.isBatchedMesh&&ke.batching===!1||!ue.isBatchedMesh&&ke.batching===!0||ue.isBatchedMesh&&ke.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&ke.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&ke.instancing===!1||!ue.isInstancedMesh&&ke.instancing===!0||ue.isSkinnedMesh&&ke.skinning===!1||!ue.isSkinnedMesh&&ke.skinning===!0||ue.isInstancedMesh&&ke.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&ke.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&ke.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&ke.instancingMorph===!1&&ue.morphTexture!==null||ke.envMap!==We||ce.fog===!0&&ke.fog!==He||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==je.numPlanes||ke.numIntersection!==je.numIntersection)||ke.vertexAlphas!==$e||ke.vertexTangents!==ht||ke.morphTargets!==Je||ke.morphNormals!==Dt||ke.morphColors!==rn||ke.toneMapping!==Kt||ke.morphTargetsCount!==zt||!!ke.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,ke.__version=ce.version);let En=ke.currentProgram;yt===!0&&(En=Pa(ce,Z,ue),q&&ce.isNodeMaterial&&q.onUpdateProgram(ce,En,ke));let ci=!1,Ni=!1,ui=!1;const Ft=En.getUniforms(),on=ke.uniforms;if(y.useProgram(En.program)&&(ci=!0,Ni=!0,ui=!0),ce.id!==_e&&(_e=ce.id,Ni=!0),ke.needsLights){const Pt=Ms(U.state.lightProbeGridArray,ue);ke.lightProbeGrid!==Pt&&(ke.lightProbeGrid=Pt,Ni=!0)}if(ci||Ee!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(Y,"projectionMatrix",A.projectionMatrix),Ft.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Xi=Ft.map.cameraPosition;Xi!==void 0&&Xi.setValue(Y,Jt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Ft.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ft.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),Ee!==A&&(Ee=A,Ni=!0,ui=!0)}if(ke.needsLights&&(kn.state.directionalShadowMap.length>0&&Ft.setValue(Y,"directionalShadowMap",kn.state.directionalShadowMap,pe),kn.state.spotShadowMap.length>0&&Ft.setValue(Y,"spotShadowMap",kn.state.spotShadowMap,pe),kn.state.pointShadowMap.length>0&&Ft.setValue(Y,"pointShadowMap",kn.state.pointShadowMap,pe)),ue.isSkinnedMesh){Ft.setOptional(Y,ue,"bindMatrix"),Ft.setOptional(Y,ue,"bindMatrixInverse");const Pt=ue.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Ft.setValue(Y,"boneTexture",Pt.boneTexture,pe))}ue.isBatchedMesh&&(Ft.setOptional(Y,ue,"batchingTexture"),Ft.setValue(Y,"batchingTexture",ue._matricesTexture,pe),Ft.setOptional(Y,ue,"batchingIdTexture"),Ft.setValue(Y,"batchingIdTexture",ue._indirectTexture,pe),Ft.setOptional(Y,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Ft.setValue(Y,"batchingColorTexture",ue._colorsTexture,pe));const Oi=fe.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&W.update(ue,fe,En),(Ni||ke.receiveShadow!==ue.receiveShadow)&&(ke.receiveShadow=ue.receiveShadow,Ft.setValue(Y,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Z.environment!==null&&(on.envMapIntensity.value=Z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=BA()),Ni){if(Ft.setValue(Y,"toneMappingExposure",k.toneMappingExposure),ke.needsLights&&gn(on,ui),He&&ce.fog===!0&&ze.refreshFogUniforms(on,He),ze.refreshMaterialUniforms(on,ce,Te,Se,U.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Pt=ke.lightProbeGrid;on.probesSH.value=Pt.texture,on.probesMin.value.copy(Pt.boundingBox.min),on.probesMax.value.copy(Pt.boundingBox.max),on.probesResolution.value.copy(Pt.resolution)}iu.upload(Y,sa(ke),on,pe)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(iu.upload(Y,sa(ke),on,pe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ft.setValue(Y,"center",ue.center),Ft.setValue(Y,"modelViewMatrix",ue.modelViewMatrix),Ft.setValue(Y,"normalMatrix",ue.normalMatrix),Ft.setValue(Y,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Pt=ce.uniformsGroups;for(let Xi=0,Ba=Pt.length;Xi<Ba;Xi++){const Es=Pt[Xi];se.update(Es,En),se.bind(Es,En)}}return En}function gn(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function dl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(A,Z,fe){const ce=re.get(A);ce.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=Z,re.get(A.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const fe=re.get(A);fe.__webglFramebuffer=Z,fe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,fe=0){ae=A,P=Z,z=fe;let ce=null,ue=!1,He=!1;if(A){const Be=re.get(A);if(Be.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(Y.FRAMEBUFFER,Be.__webglFramebuffer),N.copy(A.viewport),B.copy(A.scissor),J=A.scissorTest,y.viewport(N),y.scissor(B),y.setScissorTest(J),_e=-1;return}else if(Be.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(Be.__hasExternalTextures)pe.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Be.__boundDepthTexture!==$e){if($e!==null&&re.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(He=!0);const We=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[Z])?ce=We[Z][fe]:ce=We[Z],ue=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?ce=re.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?ce=We[fe]:ce=We,N.copy(A.viewport),B.copy(A.scissor),J=A.scissorTest}else N.copy(Ke).multiplyScalar(Te).floor(),B.copy(It).multiplyScalar(Te).floor(),J=ut;if(fe!==0&&(ce=te),y.bindFramebuffer(Y.FRAMEBUFFER,ce)&&y.drawBuffers(A,ce),y.viewport(N),y.scissor(B),y.setScissorTest(J),ue){const Be=re.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,fe)}else if(He){const Be=Z;for(let qe=0;qe<A.textures.length;qe++){const We=re.get(A.textures[qe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+qe,We.__webglTexture,fe,Be)}}else if(A!==null&&fe!==0){const Be=re.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Be.__webglTexture,fe)}_e=-1},this.readRenderTargetPixels=function(A,Z,fe,ce,ue,He,Xe,Be=0){if(!(A&&A.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){y.bindFramebuffer(Y.FRAMEBUFFER,qe);try{const We=A.textures[Be],$e=We.format,ht=We.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Be),!L.textureFormatReadable($e)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(ht)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ce&&fe>=0&&fe<=A.height-ue&&Y.readPixels(Z,fe,ce,ue,Ne.convert($e),Ne.convert(ht),He)}finally{const We=ae!==null?re.get(ae).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,Z,fe,ce,ue,He,Xe,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(Z>=0&&Z<=A.width-ce&&fe>=0&&fe<=A.height-ue){y.bindFramebuffer(Y.FRAMEBUFFER,qe);const We=A.textures[Be],$e=We.format,ht=We.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Be),!L.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Je),Y.bufferData(Y.PIXEL_PACK_BUFFER,He.byteLength,Y.STREAM_READ),Y.readPixels(Z,fe,ce,ue,Ne.convert($e),Ne.convert(ht),0);const Dt=ae!==null?re.get(ae).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,Dt);const rn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Jy(Y,rn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,He),Y.deleteBuffer(Je),Y.deleteSync(rn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,fe=0){const ce=Math.pow(2,-fe),ue=Math.floor(A.image.width*ce),He=Math.floor(A.image.height*ce),Xe=Z!==null?Z.x:0,Be=Z!==null?Z.y:0;pe.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,fe,0,0,Xe,Be,ue,He),y.unbindTexture()},this.copyTextureToTexture=function(A,Z,fe=null,ce=null,ue=0,He=0){let Xe,Be,qe,We,$e,ht,Je,Dt,rn;const Kt=A.isCompressedTexture?A.mipmaps[He]:A.image;if(fe!==null)Xe=fe.max.x-fe.min.x,Be=fe.max.y-fe.min.y,qe=fe.isBox3?fe.max.z-fe.min.z:1,We=fe.min.x,$e=fe.min.y,ht=fe.isBox3?fe.min.z:0;else{const on=Math.pow(2,-ue);Xe=Math.floor(Kt.width*on),Be=Math.floor(Kt.height*on),A.isDataArrayTexture?qe=Kt.depth:A.isData3DTexture?qe=Math.floor(Kt.depth*on):qe=1,We=0,$e=0,ht=0}ce!==null?(Je=ce.x,Dt=ce.y,rn=ce.z):(Je=0,Dt=0,rn=0);const Bt=Ne.convert(Z.format),zt=Ne.convert(Z.type);let ke;Z.isData3DTexture?(pe.setTexture3D(Z,0),ke=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(pe.setTexture2DArray(Z,0),ke=Y.TEXTURE_2D_ARRAY):(pe.setTexture2D(Z,0),ke=Y.TEXTURE_2D),y.activeTexture(Y.TEXTURE0),y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const kn=y.getParameter(Y.UNPACK_ROW_LENGTH),yt=y.getParameter(Y.UNPACK_IMAGE_HEIGHT),En=y.getParameter(Y.UNPACK_SKIP_PIXELS),ci=y.getParameter(Y.UNPACK_SKIP_ROWS),Ni=y.getParameter(Y.UNPACK_SKIP_IMAGES);y.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,We),y.pixelStorei(Y.UNPACK_SKIP_ROWS,$e),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ht);const ui=A.isDataArrayTexture||A.isData3DTexture,Ft=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const on=re.get(A),Oi=re.get(Z),Pt=re.get(on.__renderTarget),Xi=re.get(Oi.__renderTarget);y.bindFramebuffer(Y.READ_FRAMEBUFFER,Pt.__webglFramebuffer),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Ba=0;Ba<qe;Ba++)ui&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ue,ht+Ba),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,re.get(Z).__webglTexture,He,rn+Ba)),Y.blitFramebuffer(We,$e,Xe,Be,Je,Dt,Xe,Be,Y.DEPTH_BUFFER_BIT,Y.NEAREST);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ue!==0||A.isRenderTargetTexture||re.has(A)){const on=re.get(A),Oi=re.get(Z);y.bindFramebuffer(Y.READ_FRAMEBUFFER,ne),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,j);for(let Pt=0;Pt<qe;Pt++)ui?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,on.__webglTexture,ue,ht+Pt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,on.__webglTexture,ue),Ft?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Oi.__webglTexture,He,rn+Pt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oi.__webglTexture,He),ue!==0?Y.blitFramebuffer(We,$e,Xe,Be,Je,Dt,Xe,Be,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ft?Y.copyTexSubImage3D(ke,He,Je,Dt,rn+Pt,We,$e,Xe,Be):Y.copyTexSubImage2D(ke,He,Je,Dt,We,$e,Xe,Be);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(ke,He,Je,Dt,rn,Xe,Be,qe,Bt,zt,Kt.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(ke,He,Je,Dt,rn,Xe,Be,qe,Bt,Kt.data):Y.texSubImage3D(ke,He,Je,Dt,rn,Xe,Be,qe,Bt,zt,Kt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,He,Je,Dt,Xe,Be,Bt,zt,Kt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,He,Je,Dt,Kt.width,Kt.height,Bt,Kt.data):Y.texSubImage2D(Y.TEXTURE_2D,He,Je,Dt,Xe,Be,Bt,zt,Kt);y.pixelStorei(Y.UNPACK_ROW_LENGTH,kn),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,yt),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,En),y.pixelStorei(Y.UNPACK_SKIP_ROWS,ci),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ni),He===0&&Z.generateMipmaps&&Y.generateMipmap(ke),y.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){P=0,z=0,ae=null,y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const _v={type:"change"},Mp={type:"start"},ax={type:"end"},jc=new du,vv=new ds,FA=Math.cos(70*tM.DEG2RAD),Tn=new $,si=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},od=1e-6;class HA extends VM{constructor(e,i=null){super(e,i),this.state=Zt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new _s,this._lastTargetPosition=new $,this._quat=new _s().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q_,this._sphericalDelta=new q_,this._scale=1,this._panOffset=new $,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new $,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VA.bind(this),this._onPointerDown=GA.bind(this),this._onPointerUp=kA.bind(this),this._onContextMenu=KA.bind(this),this._onMouseWheel=qA.bind(this),this._onKeyDown=YA.bind(this),this._onTouchStart=ZA.bind(this),this._onTouchMove=jA.bind(this),this._onMouseDown=XA.bind(this),this._onMouseMove=WA.bind(this),this._interceptControlDown=QA.bind(this),this._interceptControlUp=JA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_v),this.update(),this.state=Zt.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;Tn.copy(i).sub(this.target),Tn.applyQuaternion(this._quat),this._spherical.setFromVector3(Tn),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=si:s>Math.PI&&(s-=si),l<-Math.PI?l+=si:l>Math.PI&&(l-=si),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Tn.setFromSpherical(this._spherical),Tn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=Tn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=Tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(jc.origin.copy(this.object.position),jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jc.direction))<FA?this.object.lookAt(this.target):(vv.setFromNormalAndCoplanarPoint(this.object.up,this.target),jc.intersectPlane(vv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>od||this._lastTargetPosition.distanceToSquared(this.target)>od?(this.dispatchEvent(_v),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?si/60*this.autoRotateSpeed*e:si/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Tn.setFromMatrixColumn(i,0),Tn.multiplyScalar(-e),this._panOffset.add(Tn)}_panUp(e,i){this.screenSpacePanning===!0?Tn.setFromMatrixColumn(i,1):(Tn.setFromMatrixColumn(i,0),Tn.crossVectors(this.object.up,Tn)),Tn.multiplyScalar(e),this._panOffset.add(Tn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Tn.copy(l).sub(this.target);let c=Tn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(si*this._rotateDelta.x/i.clientHeight),this._rotateUp(si*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(si*this._rotateDelta.x/i.clientHeight),this._rotateUp(si*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new rt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function GA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function kA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ax),this.state=Zt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function XA(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Zt.DOLLY;break;case Yr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Zt.ROTATE}break;case Yr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Mp)}function WA(r){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function qA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(r.preventDefault(),this.dispatchEvent(Mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ax))}function YA(r){this.enabled!==!1&&this._handleKeyDown(r)}function ZA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Zt.TOUCH_ROTATE;break;case qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Zt.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Mp)}function jA(r){switch(this._trackPointer(r),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Zt.NONE}}function KA(r){this.enabled!==!1&&r.preventDefault()}function QA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function JA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const np=[{id:"entry",opcode:"CALL",title:"Entry gate",detail:"External payload enters the execution volume."},{id:"resolver",opcode:"SLOAD",title:"Target resolver",detail:"Registry state resolves the active implementation."},{id:"boundary",opcode:"DELEGATECALL",title:"Trust boundary",detail:"Foreign bytecode enters the vault storage context."},{id:"storage",opcode:"SSTORE",title:"Storage rack",detail:"Slot zero mutates inside the delegated call frame."},{id:"impact",opcode:"TRANSFER",title:"Value exit",detail:"Vault principal becomes externally movable."},{id:"patch",opcode:"GUARD",title:"Patch plane",detail:"The call is rejected before foreign code crosses the boundary."}],Kc=new Map(np.map(r=>[r.id,r])),xv={entry:[-3.85,1.3,.45],resolver:[-2.05,1.3,.45],boundary:[-2.05,.05,.45],storage:[.95,.05,.45],impact:[.95,-1.35,.45],patch:[-.34,.05,.45]},$A={entry:{left:"2.5%",top:"18%"},resolver:{left:"2.5%",top:"40%"},boundary:{left:"2.5%",top:"62%"},storage:{right:"2.5%",top:"18%"},impact:{right:"2.5%",top:"40%"},patch:{right:"2.5%",top:"62%"}},Wr=["entry","resolver","boundary","storage","impact"],Sv={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0};function yv(r){return Math.max(0,Math.min(Wr.length-1,Math.round(r)))}function eR(){const[r,e]=mt.useState(!1);return mt.useEffect(()=>{const i=window.matchMedia("(prefers-reduced-motion: reduce)"),s=()=>e(i.matches);return s(),i.addEventListener?.("change",s),()=>i.removeEventListener?.("change",s)},[]),r}function tR(r){if(Array.isArray(r)){r.forEach(e=>e.dispose());return}r.dispose()}function ld(r,e,i){const s=new Vi(...r),l=new nu(s,24);s.dispose();const c=new Ks({color:e,transparent:!0,opacity:i,depthWrite:!1});return new al(l,c)}function nR(r,e){const i=e.clone().sub(r),s=i.length(),l=new xp(.026,.026,s,8,1,!1),c=new Ws({color:4608333,emissive:1120278,emissiveIntensity:.35,metalness:.72,roughness:.28,transparent:!0,opacity:.38}),h=new zn(l,c);return h.position.copy(r).add(e).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new $(0,1,0),i.normalize()),{segment:h,material:c}}function iR(r,e,i){const s=Math.max(0,Math.min(r.length-1,e)),l=Math.min(r.length-2,Math.floor(s)),c=s>=r.length-1?1:s-l;return i.lerpVectors(r[l],r[l+1],c)}function aR({className:r="",phase:e="idle",step:i=0,patched:s=!1,selected:l,onSelect:c}){const h=mt.useRef(null),p=mt.useRef(null),m=mt.useRef(e),d=mt.useRef(yv(i)),v=mt.useRef(s),S=mt.useRef("boundary"),g=mt.useRef(c),[E,T]=mt.useState("boundary"),[w,M]=mt.useState(null),[x,F]=mt.useState(!1),[H,C]=mt.useState(!1),I=eR(),U=l===void 0?E:l,O=yv(i),b=e==="impact"?4:e==="storage"?Math.max(3,O):O,D=Wr[b],k=U?Kc.get(U):void 0;m.current=e,d.current=O,v.current=s,S.current=U,g.current=c,mt.useEffect(()=>{p.current?.()},[U,s,e,i]);const V=mt.useCallback(te=>{const ne=Kc.get(te);ne&&(T(te),g.current?.(ne))},[]),q=mt.useMemo(()=>`EVM execution volume. Active operation ${D}. Patch plane ${s?"armed":"dormant"}. ${k?`Selected ${k.title}: ${k.detail}`:"No node selected."}`,[D,s,k]);return mt.useEffect(()=>{const te=h.current;if(!te)return;let ne;try{ne=new zA({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{C(!0);return}C(!1),ne.setClearColor(0,0),ne.outputColorSpace=Si,ne.toneMapping=sp,ne.toneMappingExposure=1.05,ne.domElement.className="trace-shell-three__canvas",ne.domElement.setAttribute("aria-hidden","true"),ne.domElement.tabIndex=-1,te.appendChild(ne.domElement);const j=new mM;j.fog=new gp(329736,.028);const P=new yi(38,1,.1,70);P.position.set(8.6,5.8,10.6);const z=new HA(P,ne.domElement);z.target.set(-.15,0,0),z.enableDamping=!1,z.enablePan=!1,z.minDistance=8.2,z.maxDistance=18,z.minPolarAngle=Math.PI*.2,z.maxPolarAngle=Math.PI*.68,z.minAzimuthAngle=-Math.PI*.32,z.maxAzimuthAngle=Math.PI*.32,z.zoomToCursor=!0,z.update(),j.add(new OM(13226957,1119508,1.45));const ae=new BM(15199977,2.4);ae.position.set(6,8,7),j.add(ae);const _e=new k_(16758090,12,11,2);_e.position.set(-.5,1.5,2.2),j.add(_e);const Ee=new js;Ee.rotation.x=-.04,j.add(Ee);const N=ld([8.8,4.4,3.25],10136482,.34);Ee.add(N);const B=ld([8.55,4.15,.12],5529947,.22);B.position.z=-1.52,Ee.add(B),[-2.65,-.2,2.2].forEach((se,Ae)=>{const Re=ld([2.08,3.45,2.55],Ae===1?9411990:6582635,Ae===1?.26:.18);Re.position.set(se,0,-.08),Ee.add(Re)});for(let se=-1;se<=1;se+=1){const Ae=new li().setFromPoints([new $(-4.18,se*1.28,-1.34),new $(4.18,se*1.28,-1.34)]),Re=new Ks({color:se===0?7569529:4608332,transparent:!0,opacity:se===0?.22:.14});Ee.add(new kv(Ae,Re))}const J=new GM(10,20,5792606,3160374);J.position.y=-2.18,J.material.transparent=!0,J.material.opacity=.16,Ee.add(J);const ye=Wr.map(se=>new $(...xv[se])),Le=[];for(let se=0;se<ye.length-1;se+=1){const{segment:Ae,material:Re}=nR(ye[se],ye[se+1]);Le.push(Re),Ee.add(Ae)}const ie=new Map,Se=[];Wr.forEach((se,Ae)=>{const Re=new Vi(Ae===2?.45:.32,Ae===2?.45:.32,Ae===2?.45:.32),ot=new Ws({color:3753023,emissive:1252120,emissiveIntensity:.4,metalness:.76,roughness:.22}),st=new zn(Re,ot);st.position.copy(ye[Ae]),st.userData.nodeId=se,st.userData.baseScale=st.scale.clone(),ie.set(se,st),Se.push(st),Ee.add(st);const jt=new al(new nu(Re),new Ks({color:13358287,transparent:!0,opacity:.42}));st.add(jt)});const Te=new js;Te.position.set(2.42,.46,-.83),Ee.add(Te);for(let se=0;se<9;se+=1){const Ae=se%3,Re=Math.floor(se/3),ot=new Vi(.42,.34,.48),st=new Ws({color:se===0?4993832:2239271,emissive:se===0?2363915:527627,emissiveIntensity:.6,metalness:.7,roughness:.32,transparent:!0,opacity:.86}),jt=new zn(ot,st);jt.position.set((Ae-1)*.55,(1-Re)*.48,0),jt.userData.nodeId="storage",jt.userData.slot=se,Se.push(jt),Te.add(jt);const Mn=new al(new nu(ot),new Ks({color:se===0?16748900:7043185,transparent:!0,opacity:se===0?.64:.28}));jt.add(Mn)}const Ve=new js;Ve.position.set(...xv.patch),Ee.add(Ve);const tt=new Vi(.09,2.55,2.45),Ke=new LM({color:13888215,emissive:5013600,emissiveIntensity:.65,metalness:.18,roughness:.18,transparent:!0,opacity:s?.24:.018,transmission:.14,depthWrite:!1,side:Gi}),It=new zn(tt,Ke);It.userData.nodeId="patch",Se.push(It),Ve.add(It);const ut=new al(new nu(tt),new Ks({color:13624019,transparent:!0,opacity:s?.76:.12}));Ve.add(ut);const xt=new Vi(.115,.035,2.5),St=new _p({color:15466481,transparent:!0,opacity:.68,depthWrite:!1}),ft=new zn(xt,St);ft.visible=s,Ve.add(ft);const an=new Vi(.24,.24,.24),Jt=new Ws({color:16758090,emissive:13200919,emissiveIntensity:3.4,metalness:.36,roughness:.18}),kt=new zn(an,Jt);Ee.add(kt);const $t=new k_(16758090,4.8,2.6,2);kt.add($t);const Xt=new ul(1.65,.72),sn=new Ws({color:1120021,emissive:2241580,emissiveIntensity:.42,metalness:.68,roughness:.26,transparent:!0,opacity:.9,side:Gi}),Y=new zn(Xt,sn);Y.position.set(-3.18,-1.45,-1.28),Y.rotation.x=-.12,Ee.add(Y);const Nt=new HM,At=new rt(10,10),L=new $;let y=null,K=null,re=!0,pe=document.visibilityState==="visible",De=performance.now(),Oe=0,me={x:0,y:0};const ge=se=>{let Ae=d.current;const Re=m.current;if(!I&&Re!=="idle"&&Ae<ye.length-1){const ot=(Math.sin(se*.0024-Math.PI/2)+1)/2;Ae+=.12+ot*.76}return Re==="storage"&&(Ae=Math.max(Ae,3)),Re==="impact"&&(Ae=Math.max(Ae,4)),v.current?Math.min(Ae,2.53):Ae},Ce=(se=performance.now())=>{const Ae=Math.min(.05,Math.max(0,(se-De)/1e3));De=se,I||(Oe+=Ae);const Re=ge(se);iR(ye,Re,L),kt.position.copy(L),I||(kt.rotation.x+=Ae*1.7,kt.rotation.y+=Ae*2.35);const ot=v.current;Jt.color.setHex(ot?14215900:16758090),Jt.emissive.setHex(ot?5935469:13200919),$t.color.setHex(ot?11462589:16758090),$t.intensity=ot?2.8:4.8;const st=Math.floor(Re);Le.forEach((Un,Nn)=>{const Gn=Nn<st||Nn===st&&Re%1>.04,Cn=ot&&Nn>=2;Un.color.setHex(Cn?3490107:Gn?16758090:4608333),Un.emissive.setHex(Cn?1581854:Gn?9130776:1120278),Un.emissiveIntensity=Gn&&!Cn?1.45:.3,Un.opacity=Cn?.16:Gn?.92:.34});const jt=S.current;ie.forEach((Un,Nn)=>{const Gn=Wr.indexOf(Nn),Cn=Re>=Gn-.02,Zn=jt===Nn,un=y===Nn,dn=Un.material;dn.color.setHex(Zn?14674146:Cn?7026727:3753023),dn.emissive.setHex(Zn?5399899:Cn?9119245:1252120),dn.emissiveIntensity=Zn?1.25:Cn?.9:.36;const Vn=Zn?1.26:un?1.13:1;Un.scale.setScalar(Vn)});const Mn=jt==="patch"||y==="patch";Ke.opacity=ot?Mn?.36:.24:Mn?.075:.018,Ke.emissiveIntensity=ot?.9:.18,ut.material.opacity=ot?.78:Mn?.36:.12,ft.visible=ot,ot&&(ft.position.y=I?0:Math.sin(Oe*2.1)*1.12),Te.children.forEach(Un=>{if(!(Un instanceof zn))return;const Nn=Un.material;if(!(Nn instanceof Ws))return;const Gn=Un.userData.slot===0,Cn=Re>=3&&!ot;Nn.emissiveIntensity=Gn&&Cn?1.65:.5,Nn.color.setHex(Gn&&Cn?10304800:Gn?4993832:2239271)}),_e.intensity=m.current==="idle"?6:12,I||(_e.position.y=1.45+Math.sin(Oe*1.15)*.12),z.update(),ne.render(j,P)},ze=()=>{K!==null||I||m.current==="idle"||!re||!pe||(K=window.requestAnimationFrame(Ie))},Ie=se=>{K=null,!(!re||!pe)&&(Ce(se),ze())};p.current=()=>{re&&pe&&(Ce(),ze())};const Pe=()=>{const se=te.getBoundingClientRect(),Ae=Math.max(1,se.width),Re=Math.max(1,se.height);ne.setPixelRatio(Math.min(window.devicePixelRatio||1,Ae<700?1.2:1.5)),ne.setSize(Ae,Re,!1),P.aspect=Ae/Re,P.updateProjectionMatrix(),Ce()},je=se=>{const Ae=ne.domElement.getBoundingClientRect();At.x=(se.clientX-Ae.left)/Ae.width*2-1,At.y=-((se.clientY-Ae.top)/Ae.height)*2+1,Nt.setFromCamera(At,P);const Re=Nt.intersectObjects(Se,!1),st=(Re.find(jt=>jt.object.userData.nodeId!=="patch")??Re[0])?.object.userData.nodeId??null;st!==y&&(y=st,M(st),ne.domElement.style.cursor=st?"pointer":"grab",I&&Ce())},Qe=se=>{me={x:se.clientX,y:se.clientY},ne.domElement.style.cursor="grabbing"},it=se=>{const Ae=Math.hypot(se.clientX-me.x,se.clientY-me.y);if(ne.domElement.style.cursor=y?"pointer":"grab",Ae>5||(je(se),!y))return;const Re=Kc.get(y);Re&&(T(Re.id),g.current?.(Re))},W=()=>{y=null,M(null),ne.domElement.style.cursor="grab",I&&Ce()},Ue=()=>{pe=document.visibilityState==="visible",pe?(De=performance.now(),Ce(),ze()):K!==null&&(window.cancelAnimationFrame(K),K=null)},ve=()=>{re&&pe&&ne.render(j,P)},Ne=new ResizeObserver(Pe);Ne.observe(te);const Fe=new IntersectionObserver(([se])=>{re=se.isIntersecting,re?(De=performance.now(),Ce(),ze()):K!==null&&(window.cancelAnimationFrame(K),K=null)},{rootMargin:"140px"});return Fe.observe(te),ne.domElement.addEventListener("pointermove",je),ne.domElement.addEventListener("pointerdown",Qe),ne.domElement.addEventListener("pointerup",it),ne.domElement.addEventListener("pointerleave",W),z.addEventListener("change",ve),document.addEventListener("visibilitychange",Ue),Pe(),Ce(),ze(),F(!0),()=>{F(!1),p.current=null,K!==null&&window.cancelAnimationFrame(K),Ne.disconnect(),Fe.disconnect(),document.removeEventListener("visibilitychange",Ue),ne.domElement.removeEventListener("pointermove",je),ne.domElement.removeEventListener("pointerdown",Qe),ne.domElement.removeEventListener("pointerup",it),ne.domElement.removeEventListener("pointerleave",W),z.removeEventListener("change",ve),z.dispose(),j.traverse(se=>{const Ae=se;Ae.geometry?.dispose?.(),Ae.material&&tR(Ae.material)}),ne.dispose(),ne.forceContextLoss(),ne.domElement.parentElement===te&&te.removeChild(ne.domElement)}},[I]),Q.jsxs("section",{className:`trace-shell-three ${r}`.trim(),"data-phase":e,"data-patched":s?"true":"false","data-ready":x?"true":"false","aria-label":"Trace Shell EVM execution volume",children:[Q.jsxs("div",{className:"trace-shell-three__chrome","aria-hidden":"true",children:[Q.jsx("span",{children:"TRACE_SHELL // EVM EXECUTION VOLUME"}),Q.jsxs("span",{children:["STEP ",String(b+1).padStart(2,"0")," / 05"]})]}),Q.jsx("div",{ref:h,className:"trace-shell-three__viewport"}),!x&&!H?Q.jsxs("div",{className:"trace-shell-three__boot","aria-hidden":"true",children:[Q.jsx("span",{}),"Mounting execution volume"]}):null,H?Q.jsxs("div",{className:"trace-shell-three__fallback",role:"status",children:[Q.jsx("strong",{children:"3D renderer unavailable"}),Q.jsx("span",{children:"The execution trace remains available through the node controls."})]}):null,Q.jsx("div",{className:"trace-shell-three__nodes",children:np.map(te=>{const ne=U===te.id,j=D===te.id||te.id==="patch"&&s;return Q.jsxs("button",{type:"button",className:"trace-shell-three__node",style:$A[te.id],"data-node":te.id,"data-active":j?"true":"false","aria-pressed":ne,onClick:()=>V(te.id),children:[Q.jsx("span",{className:"trace-shell-three__node-index",children:te.id==="patch"?"PX":String(Wr.indexOf(te.id)).padStart(2,"0")}),Q.jsxs("span",{className:"trace-shell-three__node-copy",children:[Q.jsx("strong",{children:te.opcode}),Q.jsx("small",{children:te.title})]}),Q.jsx("span",{className:"trace-shell-three__node-state","aria-hidden":"true",children:te.id==="patch"?s?"ARMED":"STANDBY":j?"LIVE":"NODE"})]},te.id)})}),Q.jsxs("div",{className:"trace-shell-three__readout","aria-live":"polite",children:[Q.jsx("span",{className:"trace-shell-three__signal","aria-hidden":"true"}),Q.jsx("span",{children:w?"PROBE":k?"PINNED":"READY"}),Q.jsx("strong",{children:w?Kc.get(w)?.title:k?.title??"Execution volume"})]}),Q.jsx("div",{className:"trace-shell-three__hint","aria-hidden":"true",children:"DRAG TO ROTATE  ·  SCROLL TO INSPECT  ·  SELECT A NODE"}),Q.jsx("p",{style:Sv,children:q}),Q.jsx("ol",{style:Sv,children:np.map(te=>Q.jsx("li",{children:`${te.opcode}: ${te.detail}`},te.id))}),Q.jsx("style",{jsx:!0,children:`
        .trace-shell-three {
          --shell-ink: #050807;
          --shell-line: rgba(202, 215, 207, 0.16);
          --shell-text: #dce5df;
          --shell-muted: #78857f;
          --shell-signal: #ffb54a;
          --shell-patched: #cfe2d3;
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          min-height: 0;
          overflow: hidden;
          isolation: isolate;
          color: var(--shell-text);
          background:
            linear-gradient(90deg, transparent 49.9%, rgba(190, 204, 196, 0.05) 50%, transparent 50.1%),
            linear-gradient(rgba(190, 204, 196, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(190, 204, 196, 0.035) 1px, transparent 1px),
            radial-gradient(circle at 50% 42%, rgba(255, 181, 74, 0.055), transparent 36%),
            var(--shell-ink);
          background-size: auto, 36px 36px, 36px 36px, auto, auto;
          border: 1px solid var(--shell-line);
          font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .trace-shell-three::before,
        .trace-shell-three::after {
          content: '';
          position: absolute;
          z-index: 4;
          width: 22px;
          height: 22px;
          pointer-events: none;
        }

        .trace-shell-three::before {
          top: 14px;
          left: 14px;
          border-top: 1px solid rgba(224, 233, 227, 0.52);
          border-left: 1px solid rgba(224, 233, 227, 0.52);
        }

        .trace-shell-three::after {
          right: 14px;
          bottom: 14px;
          border-right: 1px solid rgba(224, 233, 227, 0.52);
          border-bottom: 1px solid rgba(224, 233, 227, 0.52);
        }

        .trace-shell-three__viewport {
          position: absolute;
          inset: 42px 0 38px;
          z-index: 1;
          touch-action: none;
        }

        :global(.trace-shell-three__canvas) {
          display: block;
          width: 100%;
          height: 100%;
          outline: none;
          cursor: grab;
        }

        .trace-shell-three__chrome {
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 42px;
          padding: 0 18px;
          border-bottom: 1px solid var(--shell-line);
          color: #9aa69f;
          background: rgba(5, 8, 7, 0.76);
          backdrop-filter: blur(8px);
          font-size: 10px;
          letter-spacing: 0.14em;
          pointer-events: none;
        }

        .trace-shell-three__boot,
        .trace-shell-three__fallback {
          position: absolute;
          z-index: 3;
          inset: 42px 0 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
          color: var(--shell-muted);
          background: rgba(5, 8, 7, 0.88);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          pointer-events: none;
        }

        .trace-shell-three__boot span {
          width: 76px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--shell-signal), transparent);
          animation: trace-shell-scan 1s ease-in-out infinite;
        }

        .trace-shell-three__fallback strong {
          color: var(--shell-text);
          font-weight: 560;
        }

        .trace-shell-three__fallback span {
          max-width: 310px;
          text-align: center;
          line-height: 1.6;
        }

        .trace-shell-three__nodes {
          position: absolute;
          z-index: 6;
          inset: 42px 0 38px;
          pointer-events: none;
        }

        .trace-shell-three__node {
          position: absolute;
          display: grid;
          grid-template-columns: 26px minmax(74px, 1fr) auto;
          align-items: center;
          gap: 8px;
          width: min(190px, 24%);
          min-height: 48px;
          padding: 7px 8px;
          color: var(--shell-muted);
          text-align: left;
          background: rgba(7, 11, 9, 0.82);
          border: 1px solid rgba(184, 198, 190, 0.16);
          border-radius: 0;
          backdrop-filter: blur(8px);
          cursor: pointer;
          pointer-events: auto;
          transition: color 160ms ease, border-color 160ms ease, background 160ms ease, transform 160ms ease;
        }

        .trace-shell-three__node::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 16px;
          height: 1px;
          background: currentColor;
          opacity: 0.28;
        }

        .trace-shell-three__node[style*='left']::after { right: -17px; }
        .trace-shell-three__node[style*='right']::after { left: -17px; }

        .trace-shell-three__node:hover,
        .trace-shell-three__node:focus-visible {
          color: var(--shell-text);
          border-color: rgba(223, 233, 227, 0.48);
          background: rgba(14, 20, 17, 0.94);
          outline: none;
        }

        .trace-shell-three__node:focus-visible {
          box-shadow: 0 0 0 2px var(--shell-ink), 0 0 0 3px rgba(255, 181, 74, 0.72);
        }

        .trace-shell-three__node[aria-pressed='true'] {
          color: var(--shell-text);
          border-color: rgba(255, 181, 74, 0.64);
          background: rgba(32, 24, 12, 0.94);
          transform: translateX(3px);
        }

        .trace-shell-three__node[data-node='patch'][data-active='true'] {
          border-color: rgba(207, 226, 211, 0.7);
          color: var(--shell-patched);
          background: rgba(18, 31, 23, 0.92);
        }

        .trace-shell-three__node-index {
          display: grid;
          place-items: center;
          width: 26px;
          height: 26px;
          color: #a8b3ad;
          border: 1px solid rgba(190, 203, 195, 0.22);
          font-size: 9px;
          letter-spacing: 0.08em;
        }

        .trace-shell-three__node[data-active='true'] .trace-shell-three__node-index {
          color: #fff0e8;
          border-color: rgba(255, 181, 74, 0.62);
          background: rgba(255, 181, 74, 0.14);
        }

        .trace-shell-three__node-copy {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 3px;
        }

        .trace-shell-three__node-copy strong {
          overflow: hidden;
          color: currentColor;
          font-size: 9px;
          font-weight: 580;
          letter-spacing: 0.08em;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .trace-shell-three__node-copy small {
          overflow: hidden;
          color: #6f7c75;
          font-size: 8px;
          letter-spacing: 0.03em;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .trace-shell-three__node-state {
          color: #59655f;
          font-size: 7px;
          letter-spacing: 0.1em;
          writing-mode: vertical-rl;
        }

        .trace-shell-three__readout {
          position: absolute;
          z-index: 6;
          left: 50%;
          bottom: 53px;
          display: grid;
          grid-template-columns: 7px auto auto;
          align-items: center;
          gap: 8px;
          max-width: 44%;
          padding: 8px 11px;
          color: #66736c;
          background: rgba(5, 8, 7, 0.78);
          border: 1px solid rgba(183, 197, 189, 0.12);
          transform: translateX(-50%);
          font-size: 8px;
          letter-spacing: 0.12em;
          pointer-events: none;
        }

        .trace-shell-three__readout strong {
          overflow: hidden;
          color: #b9c4bd;
          font-size: 9px;
          font-weight: 520;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .trace-shell-three__signal {
          width: 6px;
          height: 6px;
          background: var(--shell-signal);
          box-shadow: 0 0 12px rgba(255, 181, 74, 0.72);
        }

        .trace-shell-three[data-patched='true'] .trace-shell-three__signal {
          background: var(--shell-patched);
          box-shadow: 0 0 12px rgba(207, 226, 211, 0.62);
        }

        .trace-shell-three__hint {
          position: absolute;
          z-index: 5;
          right: 18px;
          bottom: 0;
          display: flex;
          align-items: center;
          height: 38px;
          color: #57625d;
          font-size: 8px;
          letter-spacing: 0.12em;
          pointer-events: none;
        }

        @keyframes trace-shell-scan {
          0%, 100% { opacity: 0.25; transform: scaleX(0.3); }
          50% { opacity: 1; transform: scaleX(1); }
        }

        @media (max-width: 760px) {
          .trace-shell-three { min-height: 0; }
          .trace-shell-three__viewport { touch-action: pan-y; }
          .trace-shell-three__chrome { padding: 0 12px; letter-spacing: 0.08em; }
          .trace-shell-three__node {
            grid-template-columns: 22px minmax(0, 1fr);
            width: min(148px, 35%);
            min-height: 44px;
            padding: 5px 6px;
          }
          .trace-shell-three__node-index { width: 22px; height: 22px; }
          .trace-shell-three__node-state { display: none; }
          .trace-shell-three__node-copy small { display: none; }
          .trace-shell-three__readout { max-width: 72%; }
          .trace-shell-three__hint { left: 12px; right: auto; font-size: 7px; }
        }

        @media (max-width: 440px) {
          .trace-shell-three { min-height: 0; }
          .trace-shell-three__chrome span:first-child { max-width: 58%; overflow: hidden; white-space: nowrap; }
          .trace-shell-three__node { width: 126px; }
          .trace-shell-three__node-copy strong { font-size: 8px; }
          .trace-shell-three__readout { bottom: 46px; max-width: calc(100% - 24px); }
          .trace-shell-three__hint { overflow: hidden; max-width: calc(100% - 24px); white-space: nowrap; }
        }

        @media (prefers-reduced-motion: reduce) {
          .trace-shell-three__boot span { animation: none; }
          .trace-shell-three__node { transition: none; }
        }
      `})]})}const sR="_shell_h72p4_1",rR="_skipLink_h72p4_43",oR="_topbar_h72p4_57",lR="_identity_h72p4_70",cR="_session_h72p4_71",uR="_systemState_h72p4_72",fR="_versionSwitch_h72p4_73",hR="_brandMark_h72p4_86",dR="_stateLamp_h72p4_124",pR="_stateLampPatched_h72p4_131",mR="_workspace_h72p4_136",gR="_leftPane_h72p4_147",_R="_volumePane_h72p4_148",vR="_inspector_h72p4_149",xR="_console_h72p4_150",SR="_paneHeader_h72p4_188",yR="_treeSection_h72p4_215",MR="_sectionLabel_h72p4_220",ER="_treeList_h72p4_232",bR="_findingList_h72p4_233",TR="_traceRail_h72p4_234",AR="_logLines_h72p4_236",RR="_treeButton_h72p4_242",CR="_findingButton_h72p4_243",wR="_traceButton_h72p4_244",DR="_treeButtonActive_h72p4_265",LR="_treeGlyph_h72p4_271",UR="_treeName_h72p4_275",NR="_treeLine_h72p4_281",OR="_findingsSection_h72p4_286",PR="_findingButtonActive_h72p4_305",IR="_findingTick_h72p4_315",BR="_findingTickPending_h72p4_322",zR="_findingMeta_h72p4_326",FR="_versionCurrent_h72p4_355",HR="_sceneStage_h72p4_388",GR="_transport_h72p4_478",VR="_transportBar_h72p4_485",kR="_transportButton_h72p4_494",XR="_transportPosition_h72p4_519",WR="_traceButtonActive_h72p4_556",qR="_traceButtonPast_h72p4_567",YR="_traceButtonBlocked_h72p4_578",ZR="_traceIndex_h72p4_582",jR="_inspectorTabs_h72p4_605",KR="_tabActive_h72p4_630",QR="_inspectorBody_h72p4_637",JR="_sourceHeader_h72p4_643",$R="_sourceCode_h72p4_657",e2="_sourceLine_h72p4_666",t2="_sourceLineNo_h72p4_673",n2="_sourceLineHot_h72p4_680",i2="_sourceLineDanger_h72p4_686",a2="_stateTable_h72p4_700",s2="_evidenceBlock_h72p4_701",r2="_stateRow_h72p4_705",o2="_stateHazard_h72p4_725",l2="_stateVerified_h72p4_729",c2="_evidenceLead_h72p4_733",u2="_evidenceFact_h72p4_741",f2="_frameCard_h72p4_760",h2="_frameCardHeader_h72p4_766",d2="_logIdentity_h72p4_792",p2="_logViewport_h72p4_809",m2="_logLine_h72p4_236",g2="_logKind_h72p4_835",_2="_logLineHazard_h72p4_846",v2="_logLineVerified_h72p4_851",x2="_promptForm_h72p4_856",S2="_promptContext_h72p4_869",y2="_promptGlyph_h72p4_874",M2="_promptInput_h72p4_879",E2="_promptHint_h72p4_898",b2="_visuallyHidden_h72p4_908",we={shell:sR,skipLink:rR,topbar:oR,identity:lR,session:cR,systemState:uR,versionSwitch:fR,brandMark:hR,stateLamp:dR,stateLampPatched:pR,workspace:mR,leftPane:gR,volumePane:_R,inspector:vR,console:xR,paneHeader:SR,treeSection:yR,sectionLabel:MR,treeList:ER,findingList:bR,traceRail:TR,logLines:AR,treeButton:RR,findingButton:CR,traceButton:wR,treeButtonActive:DR,treeGlyph:LR,treeName:UR,treeLine:NR,findingsSection:OR,findingButtonActive:PR,findingTick:IR,findingTickPending:BR,findingMeta:zR,versionCurrent:FR,sceneStage:HR,transport:GR,transportBar:VR,transportButton:kR,transportPosition:XR,traceButtonActive:WR,traceButtonPast:qR,traceButtonBlocked:YR,traceIndex:ZR,inspectorTabs:jR,tabActive:KR,inspectorBody:QR,sourceHeader:JR,sourceCode:$R,sourceLine:e2,sourceLineNo:t2,sourceLineHot:n2,sourceLineDanger:i2,stateTable:a2,evidenceBlock:s2,stateRow:r2,stateHazard:o2,stateVerified:l2,evidenceLead:c2,evidenceFact:u2,frameCard:f2,frameCardHeader:h2,logIdentity:d2,logViewport:p2,logLine:m2,logKind:g2,logLineHazard:_2,logLineVerified:v2,promptForm:x2,promptContext:S2,promptGlyph:y2,promptInput:M2,promptHint:E2,visuallyHidden:b2},ri=[{node:"entry",opcode:"CALL",pc:"0x11",frame:"01",file:"VaultRouter.sol",line:176,gas:"71,204",detail:"Attacker-controlled payload enters execute(bytes)."},{node:"registry",opcode:"SLOAD",pc:"0x42",frame:"02",file:"ModuleRegistry.sol",line:91,gas:"62,881",detail:"Module address resolves from an approved registry slot."},{node:"boundary",opcode:"DELEGATECALL",pc:"0x8f",frame:"03",file:"VaultRouter.sol",line:184,gas:"41,288",detail:"Execution crosses the authority plane without binding runtime code."},{node:"slot0",opcode:"SSTORE",pc:"0xb4",frame:"04",file:"VaultStorage.sol",line:12,gas:"19,044",detail:"Delegate context overwrites vault owner at storage slot 0."},{node:"outflow",opcode:"TRANSFER",pc:"0xf1",frame:"05",file:"Withdrawal.sol",line:77,gas:"7,902",detail:"Value exits after the forged owner check succeeds."}],Xr={entry:"entry.call",registry:"registry.slot",boundary:"authority.gate",slot0:"storage[0]",outflow:"value.out"},T2={entry:"entry",registry:"resolver",boundary:"boundary",slot0:"storage",outflow:"impact"},A2={entry:"entry",resolver:"registry",boundary:"boundary",storage:"slot0",impact:"outflow",patch:"boundary"},R2={entry:{file:"VaultRouter.sol",start:172,hot:4,lines:["function execute(bytes calldata data)","    external payable returns (bytes memory)","{","    address module = registry.resolve(selector);","    (bool ok, bytes memory result) =","        module.delegatecall(data);","    if (!ok) revert ExecutionFailed();","    return result;","}"]},registry:{file:"ModuleRegistry.sol",start:87,hot:4,lines:["function resolve(bytes4 selector)","    external view returns (address module)","{","    module = modules[selector];","    if (module == address(0)) revert UnknownModule();","    // address is approved; runtime code is not bound","}"]},boundary:{file:"VaultRouter.sol",start:180,hot:4,lines:["address module = registry.resolve(selector);","","// trust boundary: router -> external module code","(bool ok, bytes memory result) =","    module.delegatecall(data);","","if (!ok) revert ExecutionFailed();","return result;"]},slot0:{file:"VaultStorage.sol",start:8,hot:4,lines:["contract VaultStorage {","    // slot 0 in the router context","    address public owner;","","    function setOwner(address next) external {","        owner = next;","    }","}"]},outflow:{file:"Withdrawal.sol",start:73,hot:4,lines:["function withdraw(address payable to, uint256 amount)","    external","{","    if (msg.sender != owner) revert Unauthorized();",'    (bool sent,) = to.call{value: amount}("");',"    if (!sent) revert TransferFailed();","}"]}},C2=[{target:"boundary",name:"VaultRouter.sol",line:184,glyph:"◇"},{target:"registry",name:"ModuleRegistry.sol",line:91,glyph:"├"},{target:"slot0",name:"VaultStorage.sol",line:12,glyph:"├"},{target:"outflow",name:"Withdrawal.sol",line:77,glyph:"└"}],Mv=[{offset:"+000ms",kind:"CASE",message:"AB-001 loaded from local trace fixture"},{offset:"+004ms",kind:"FRAME",message:"pc 0x8f / DELEGATECALL / frame 03"},{offset:"+006ms",kind:"CROSS",message:"authority boundary pierced by unbound runtime code",tone:"hazard"},{offset:"+009ms",kind:"PROOF",message:"slot[0] mutation precedes 128.40 ETH outflow",tone:"hazard"}],w2=["scan ./contracts","trace AB-001","frame 27","isolate storage","diff AB-001 --patched","watch proxy","case AB-001","reset","clear","help"];function cd(r){return Math.max(0,Math.min(ri.length-1,r))}function D2(r){return r==="hazard"?we.logLineHazard:r==="verified"?we.logLineVerified:""}function L2({versionOneHref:r="/concept"}){const[e,i]=mt.useState(2),[s,l]=mt.useState("boundary"),[c,h]=mt.useState("breach"),[p,m]=mt.useState(!1),[d,v]=mt.useState(!1),[S,g]=mt.useState("source"),[E,T]=mt.useState(Mv),[w,M]=mt.useState(""),[x,F]=mt.useState([]),[H,C]=mt.useState(-1),[I,U]=mt.useState(!1),O=mt.useRef(null),b=ri[e],D=R2[s],k=mt.useCallback(B=>{T(J=>[...J,...B].slice(-5))},[]),V=mt.useCallback(B=>{const J=p?Math.min(2,cd(B)):cd(B);i(J),l(ri[J].node),g("source")},[p]),q=mt.useCallback(()=>{v(!1),h(p&&e>=2?"blocked":e>=4?"complete":"breach")},[e,p]),te=mt.useCallback((B=!1)=>{const J=B?!1:p;if(B&&m(!1),i(0),l("entry"),g("source"),k([{offset:"+000ms",kind:"TRACE",message:J?"patched branch executing from frame 01":"AB-001 replay executing from frame 01"}]),I){const ye=J?2:4;i(ye),l(ri[ye].node),h(J?"blocked":"complete"),k([J?{offset:"+011ms",kind:"REJECT",message:"CodeHashMismatch() at authority gate",tone:"verified"}:{offset:"+021ms",kind:"IMPACT",message:"trace completes with 128.40 ETH outflow",tone:"hazard"}]);return}h("running"),v(!0)},[k,p,I]),ne=mt.useCallback(()=>{v(!1),m(!0),h("blocked"),i(2),l("boundary"),g("evidence"),k([{offset:"+000ms",kind:"DIFF",message:"extcodehash guard inserted before delegatecall"},{offset:"+008ms",kind:"REJECT",message:"CodeHashMismatch() / state mutation unreachable",tone:"verified"}])},[k]),j=mt.useCallback(()=>{v(!1),m(!1),h("breach"),i(2),l("boundary"),g("source"),T(Mv)},[]),P=mt.useCallback(B=>{const J=B.trim();if(!J)return;F(Le=>[...Le.filter(ie=>ie!==J),J].slice(-16)),C(-1),M("");const ye=J.toLowerCase();if(ye==="scan"||ye.startsWith("scan ")){v(!1),m(!1),h("indexed"),i(0),l("entry"),g("evidence"),T([{offset:"+000ms",kind:"SCAN",message:"4 Solidity units indexed / 1 execution boundary"},{offset:"+117ms",kind:"FLOW",message:"CALL → SLOAD → DELEGATECALL → SSTORE → TRANSFER"},{offset:"+123ms",kind:"FIND",message:"AB-001 / runtime code identity is not bound",tone:"hazard"}]);return}if(ye==="trace"||ye.startsWith("trace ")){te(!0);return}if(ye.startsWith("diff ")||ye==="patch"||ye==="patch on"){ne();return}if(ye==="patch off"){m(!1),h("breach"),i(2),l("boundary"),k([{offset:"+000ms",kind:"DIFF",message:"baseline vulnerable route restored",tone:"hazard"}]);return}if(ye.startsWith("frame ")){const Le=Number.parseInt(ye.slice(6),10),ie=Number.isFinite(Le)?cd(Math.round(Le/44*4)):2,Se=p?Math.min(2,ie):ie;v(!1),V(Se),h(p&&Se>=2?"blocked":"breach"),k([{offset:"+000ms",kind:"FRAME",message:`frame ${String(Le||Se+1).padStart(2,"0")} mapped to ${ri[Se].opcode} / ${ri[Se].pc}`}]);return}if(ye.startsWith("inspect ")){const Le=ye.slice(8).replace(/[^a-z0-9]/g,""),ie=Object.keys(Xr).find(Se=>`${Se}${Xr[Se]}`.replace(/[^a-z0-9]/g,"").includes(Le));if(ie){const Se=ri.findIndex(Te=>Te.node===ie);V(Se),k([{offset:"+000ms",kind:"INSPECT",message:`${Xr[ie]} synchronized with source and volume`}])}else k([{offset:"+000ms",kind:"ERROR",message:`unknown trace node: ${ye.slice(8)}`,tone:"hazard"}]);return}if(ye==="isolate storage"){v(!1),V(p?2:3),g("state"),k([{offset:"+000ms",kind:"ISOLATE",message:p?"storage lane unreachable behind active codehash guard":"storage lane filtered to router context"},p?{offset:"+003ms",kind:"REJECT",message:"no SSTORE frame exists on patched path",tone:"verified"}:{offset:"+003ms",kind:"WRITE",message:"slot[0] 0xA11C… → 0xBAD0…",tone:"hazard"}]);return}if(ye==="watch proxy"){v(!1),V(2),g("state"),k([{offset:"+000ms",kind:"WATCH",message:"module codehash differs after registry approval",tone:"hazard"}]);return}if(ye==="case ab-001"||ye==="report"){v(!1),h("reported"),g("evidence"),k([{offset:"+000ms",kind:"CASE",message:"AB-001 evidence bundle assembled / 5 frames / 1 state diff",tone:"verified"}]);return}if(ye==="clear"){T([]);return}if(ye==="reset"){j();return}if(ye==="help"){T([{offset:"CMD",kind:"SCAN",message:"scan ./contracts"},{offset:"CMD",kind:"TRACE",message:"trace AB-001 / frame 27 / isolate storage"},{offset:"CMD",kind:"DIFF",message:"diff AB-001 --patched / patch off"},{offset:"CMD",kind:"CASE",message:"watch proxy / case AB-001 / reset / clear"}]);return}k([{offset:"+000ms",kind:"ERROR",message:`command not recognized: ${J}`,tone:"hazard"}])},[k,ne,p,j,V,te]);mt.useEffect(()=>{const B=window.matchMedia("(prefers-reduced-motion: reduce)"),J=()=>U(B.matches);return J(),B.addEventListener("change",J),()=>B.removeEventListener("change",J)},[]),mt.useEffect(()=>{if(!d)return;const B=window.setTimeout(()=>{if(p&&e>=2){v(!1),h("blocked"),l("boundary"),k([{offset:"+011ms",kind:"REJECT",message:"CodeHashMismatch() / execution terminated",tone:"verified"}]);return}if(e>=ri.length-1){v(!1),h("complete"),k([{offset:"+021ms",kind:"IMPACT",message:"128.40 ETH outflow committed",tone:"hazard"}]);return}const J=e+1;i(J),l(ri[J].node),k([{offset:`+${String(J*4+3).padStart(3,"0")}ms`,kind:"STEP",message:`${ri[J].pc} / ${ri[J].opcode} / ${Xr[ri[J].node]}`,tone:J>=2?"hazard":"normal"}])},620);return()=>window.clearTimeout(B)},[e,k,p,d]),mt.useEffect(()=>{const B=J=>{const Le=!!J.target?.closest('button, a, input, textarea, select, [contenteditable="true"]');if((J.metaKey||J.ctrlKey)&&J.key.toLowerCase()==="k"){J.preventDefault(),O.current?.focus();return}J.defaultPrevented||Le||(J.key===" "?(J.preventDefault(),d?q():te()):J.key==="ArrowRight"?(J.preventDefault(),v(!1),V(e+1)):J.key==="ArrowLeft"?(J.preventDefault(),v(!1),V(e-1)):J.key.toLowerCase()==="p"?(J.preventDefault(),p?P("patch off"):ne()):/^[1-5]$/.test(J.key)&&(J.preventDefault(),v(!1),V(Number(J.key)-1)))};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[e,ne,P,p,d,V,te,q]);const z=mt.useMemo(()=>c==="running"?`executing / frame ${b.frame}`:p||c==="blocked"?"patched path / rejected":c==="indexed"?"indexed / finding selected":c==="reported"?"evidence bundle / ready":c==="complete"?"vulnerable path / impact proven":"breach frame / impact proven",[b.frame,p,c]),ae=B=>{B.preventDefault(),P(w)},_e=B=>{if(B.key==="Tab"){const J=w2.find(ye=>ye.startsWith(w.trim().toLowerCase()));J&&(B.preventDefault(),M(J));return}if(B.key==="ArrowUp"){if(B.preventDefault(),!x.length)return;const J=H<0?x.length-1:Math.max(0,H-1);C(J),M(x[J]);return}if(B.key==="ArrowDown"){if(B.preventDefault(),H<0)return;const J=H+1;J>=x.length?(C(-1),M("")):(C(J),M(x[J]));return}B.key==="Escape"&&O.current?.blur()},Ee=d?"trace":"idle",N=B=>{const J=A2[B.id]??"boundary",ye=ri.findIndex(Le=>Le.node===J);v(!1),V(ye),k([{offset:"+000ms",kind:"PICK",message:`${Xr[J]} selected in execution volume`}])};return Q.jsxs("main",{className:we.shell,children:[Q.jsx("h1",{className:we.visuallyHidden,children:"AuditBase Trace Shell contract execution debugger"}),Q.jsx("a",{className:we.skipLink,href:"#trace-volume",children:"Skip to execution volume"}),Q.jsxs("header",{className:we.topbar,children:[Q.jsxs("div",{className:we.identity,children:[Q.jsx("span",{className:we.brandMark,"aria-hidden":"true",children:"AB"}),Q.jsx("span",{children:"AUDITBASE //"}),Q.jsx("span",{children:"TRACE_SHELL"})]}),Q.jsxs("div",{className:we.session,"aria-label":"Current target",children:[Q.jsxs("span",{children:["target ",Q.jsx("b",{children:"vault-core"})]}),Q.jsxs("span",{children:["branch ",Q.jsx("b",{children:"review/runtime-binding"})]}),Q.jsxs("span",{children:["fixture ",Q.jsx("b",{children:"local / deterministic"})]})]}),Q.jsxs("div",{className:we.systemState,children:[Q.jsx("span",{className:`${we.stateLamp} ${p?we.stateLampPatched:""}`,"aria-hidden":"true"}),Q.jsx("span",{children:p?"GUARD ACTIVE":"IMPACT PROVEN"}),Q.jsx("span",{children:"V02"})]})]}),Q.jsxs("div",{className:we.workspace,children:[Q.jsxs("aside",{className:we.leftPane,"aria-label":"Audit worktree",children:[Q.jsxs("div",{className:we.paneHeader,children:[Q.jsx("strong",{children:"Worktree"}),Q.jsx("span",{children:"04 units"})]}),Q.jsxs("section",{className:we.treeSection,"aria-labelledby":"contracts-label",children:[Q.jsxs("div",{className:we.sectionLabel,id:"contracts-label",children:[Q.jsx("span",{children:"contracts/"}),Q.jsx("span",{children:"sol"})]}),Q.jsx("ul",{className:we.treeList,children:C2.map(B=>Q.jsx("li",{children:Q.jsxs("button",{className:`${we.treeButton} ${D.file===B.name?we.treeButtonActive:""}`,type:"button",onClick:()=>P(`inspect ${B.target}`),children:[Q.jsx("span",{className:we.treeGlyph,"aria-hidden":"true",children:B.glyph}),Q.jsx("span",{className:we.treeName,children:B.name}),Q.jsxs("span",{className:we.treeLine,children:[":",B.line]})]})},B.name))})]}),Q.jsxs("section",{className:we.findingsSection,"aria-labelledby":"findings-label",children:[Q.jsxs("div",{className:we.sectionLabel,id:"findings-label",children:[Q.jsx("span",{children:"Findings"}),Q.jsx("span",{children:"02"})]}),Q.jsxs("ul",{className:we.findingList,children:[Q.jsx("li",{children:Q.jsxs("button",{className:`${we.findingButton} ${we.findingButtonActive}`,type:"button",onClick:()=>P("trace AB-001"),children:[Q.jsx("span",{className:we.findingTick,"aria-hidden":"true"}),Q.jsxs("span",{children:[Q.jsxs("span",{className:we.findingMeta,children:[Q.jsx("span",{children:"AB-001"}),Q.jsx("b",{children:"CRITICAL"})]}),Q.jsx("p",{children:"Mutable module code crosses delegate boundary"})]})]})}),Q.jsx("li",{children:Q.jsxs("button",{className:we.findingButton,type:"button",onClick:()=>k([{offset:"+000ms",kind:"QUEUE",message:"AB-002 retained for manual reachability review"}]),children:[Q.jsx("span",{className:`${we.findingTick} ${we.findingTickPending}`,"aria-hidden":"true"}),Q.jsxs("span",{children:[Q.jsxs("span",{className:we.findingMeta,children:[Q.jsx("span",{children:"AB-002"}),Q.jsx("span",{children:"REVIEW"})]}),Q.jsx("p",{children:"Unchecked return on recovery adapter"})]})]})})]})]}),Q.jsxs("nav",{className:we.versionSwitch,"aria-label":"Design versions",children:[Q.jsxs("a",{href:r,children:[Q.jsx("span",{children:"VERSION 01"}),Q.jsx("b",{children:"TRANSACTION ENGINE"})]}),Q.jsxs("span",{className:we.versionCurrent,"aria-current":"page",children:[Q.jsx("span",{children:"VERSION 02"}),Q.jsx("b",{children:"TRACE_SHELL"})]})]})]}),Q.jsxs("section",{className:we.volumePane,id:"trace-volume","aria-labelledby":"volume-heading",tabIndex:-1,children:[Q.jsxs("div",{className:we.paneHeader,children:[Q.jsx("strong",{id:"volume-heading",children:"EVM execution volume / AB-001"}),Q.jsx("span",{children:z})]}),Q.jsx("div",{className:we.sceneStage,children:Q.jsx(aR,{phase:Ee,step:e,patched:p,selected:T2[s],onSelect:N})}),Q.jsxs("div",{className:we.transport,"aria-label":"Trace transport",children:[Q.jsxs("div",{className:we.transportBar,children:[Q.jsx("button",{className:we.transportButton,type:"button",onClick:()=>d?q():te(),"aria-pressed":d,children:d?"II PAUSE":"▶ PLAY"}),Q.jsx("button",{className:we.transportButton,type:"button",onClick:ne,children:"DIFF"}),Q.jsxs("label",{children:[Q.jsx("span",{className:we.visuallyHidden,children:"Execution frame"}),Q.jsx("input",{type:"range",min:"0",max:p?2:4,step:"1",value:e,onChange:B=>{v(!1),V(Number(B.target.value))}})]}),Q.jsxs("span",{className:we.transportPosition,children:["FRAME ",b.frame," / 05"]})]}),Q.jsx("ol",{className:we.traceRail,children:ri.map((B,J)=>Q.jsx("li",{children:Q.jsxs("button",{className:[we.traceButton,J<e?we.traceButtonPast:"",J===e?we.traceButtonActive:"",p&&J===2?we.traceButtonBlocked:""].filter(Boolean).join(" "),type:"button",onClick:()=>V(J),disabled:p&&J>2,"aria-current":J===e?"step":void 0,children:[Q.jsxs("span",{className:we.traceIndex,children:["0",J+1]}),Q.jsx("strong",{children:B.opcode}),Q.jsxs("small",{children:[B.pc," / ",B.file.replace(".sol","")]})]})},B.node))})]})]}),Q.jsxs("aside",{className:we.inspector,"aria-label":"Frame inspector",children:[Q.jsxs("div",{className:we.paneHeader,children:[Q.jsx("strong",{children:"Frame inspector"}),Q.jsxs("span",{children:["pc ",b.pc]})]}),Q.jsx("div",{className:we.inspectorTabs,role:"tablist","aria-label":"Inspector views",children:["source","state","evidence"].map(B=>Q.jsx("button",{className:S===B?we.tabActive:"",type:"button",role:"tab",id:`trace-tab-${B}`,"aria-controls":"trace-inspector-panel","aria-selected":S===B,onClick:()=>g(B),children:B},B))}),Q.jsxs("div",{className:we.inspectorBody,role:"tabpanel",id:"trace-inspector-panel","aria-labelledby":`trace-tab-${S}`,children:[S==="source"&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("div",{className:we.sourceHeader,children:[Q.jsx("span",{children:D.file}),Q.jsxs("span",{children:["L",D.start+D.hot]})]}),Q.jsx("code",{className:we.sourceCode,children:D.lines.map((B,J)=>{const ye=J===D.hot,Le=ye&&!p&&e>=2;return Q.jsxs("span",{className:`${we.sourceLine} ${ye?we.sourceLineHot:""} ${Le?we.sourceLineDanger:""}`,children:[Q.jsx("span",{className:we.sourceLineNo,children:D.start+J}),Q.jsx("span",{children:B||" "})]},`${D.file}-${D.start+J}`)})})]}),S==="state"&&Q.jsxs("div",{className:we.stateTable,children:[Q.jsxs("div",{className:we.stateRow,children:[Q.jsx("span",{children:"context"}),Q.jsx("code",{children:"VaultRouter"})]}),Q.jsxs("div",{className:we.stateRow,children:[Q.jsx("span",{children:"msg.sender"}),Q.jsx("code",{children:"0xBAD0…C0DE"})]}),Q.jsxs("div",{className:we.stateRow,children:[Q.jsx("span",{children:"module"}),Q.jsx("code",{children:"0x71D9…0A11"})]}),Q.jsxs("div",{className:we.stateRow,children:[Q.jsx("span",{children:"codehash"}),Q.jsx("code",{className:p?we.stateVerified:we.stateHazard,children:p?"0xAPPROVED…E91F":"0xMISMATCH…BA5E"})]}),Q.jsxs("div",{className:we.stateRow,children:[Q.jsx("span",{children:"slot[0]"}),Q.jsx("code",{className:p?we.stateVerified:e>=3?we.stateHazard:"",children:p?"unchanged / 0xA11C…":e>=3?"0xBAD0…C0DE":"0xA11C…E001"})]}),Q.jsxs("div",{className:we.stateRow,children:[Q.jsx("span",{children:"value"}),Q.jsx("code",{children:e>=4&&!p?"128.40 ETH → external":"128.40 ETH / vault"})]})]}),S==="evidence"&&Q.jsxs("div",{className:we.evidenceBlock,children:[Q.jsx("p",{className:we.evidenceLead,children:"The registry approves an address, but execution trusts whatever runtime code exists there later. The trace proves that code can cross into router storage."}),Q.jsxs("div",{className:we.evidenceFact,children:[Q.jsx("span",{children:"ENTRY"}),Q.jsx("b",{children:"external execute(bytes)"})]}),Q.jsxs("div",{className:we.evidenceFact,children:[Q.jsx("span",{children:"CONTROL"}),Q.jsx("b",{children:"module runtime code"})]}),Q.jsxs("div",{className:we.evidenceFact,children:[Q.jsx("span",{children:"MUTATION"}),Q.jsx("b",{children:"owner / slot[0]"})]}),Q.jsxs("div",{className:we.evidenceFact,children:[Q.jsx("span",{children:"IMPACT"}),Q.jsx("b",{children:"unauthorized value outflow"})]}),Q.jsxs("div",{className:we.evidenceFact,children:[Q.jsx("span",{children:"PATCH"}),Q.jsx("b",{children:"bind extcodehash before call"})]})]})]}),Q.jsxs("div",{className:we.frameCard,children:[Q.jsxs("div",{className:we.frameCardHeader,children:[Q.jsxs("span",{children:["FRAME ",b.frame," / ",b.file,":",b.line]}),Q.jsx("b",{children:p&&e>=2?"BLOCKED":b.opcode})]}),Q.jsx("h2",{children:Xr[s]}),Q.jsx("p",{children:p&&e>=2?"The code identity guard seals the authority plane before state is reachable.":b.detail})]})]}),Q.jsxs("section",{className:we.console,"aria-label":"Trace command console",children:[Q.jsx("div",{className:we.logIdentity,children:Q.jsxs("span",{children:[Q.jsx("b",{children:"LOCAL CONSOLE"}),"one state model",Q.jsx("br",{}),"no network writes"]})}),Q.jsx("div",{className:we.logViewport,role:"log","aria-live":"polite","aria-relevant":"additions text",children:Q.jsx("ul",{className:we.logLines,children:E.map((B,J)=>Q.jsxs("li",{className:`${we.logLine} ${D2(B.tone)}`,children:[Q.jsx("span",{children:B.offset}),Q.jsx("span",{className:we.logKind,children:B.kind}),Q.jsx("code",{children:B.message})]},`${B.offset}-${B.kind}-${J}`))})}),Q.jsxs("form",{className:we.promptForm,onSubmit:ae,children:[Q.jsx("label",{className:we.promptContext,htmlFor:"trace-command",children:"trace@vault-core"}),Q.jsx("span",{className:we.promptGlyph,"aria-hidden":"true",children:"›"}),Q.jsx("input",{className:we.promptInput,id:"trace-command",ref:O,value:w,onChange:B=>M(B.target.value),onKeyDown:_e,placeholder:"trace AB-001",autoComplete:"off",spellCheck:!1}),Q.jsx("span",{className:we.promptHint,children:"Ctrl K · Tab completes · help"})]})]})]})]})}const sx=document.getElementById("root");if(!sx)throw new Error("TraceOS preview root was not found.");_y.createRoot(sx).render(Q.jsx(mt.StrictMode,{children:Q.jsx(L2,{versionOneHref:"/auditbase-ui-preview/"})}));
//# sourceMappingURL=index-Cad5_L0_.js.map
