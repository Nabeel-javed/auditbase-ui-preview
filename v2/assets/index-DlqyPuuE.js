(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var vh={exports:{}},ot={};var j0;function iy(){if(j0)return ot;j0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(N,B,J){this.props=N,this.context=B,this.refs=M,this.updater=J||T}x.prototype.isReactComponent={},x.prototype.setState=function(N,B){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,B,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=x.prototype;function H(N,B,J){this.props=N,this.context=B,this.refs=M,this.updater=J||T}var C=H.prototype=new F;C.constructor=H,w(C,x.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function D(N,B,J){var Se=J.ref;return{$$typeof:r,type:N,key:B,ref:Se!==void 0?Se:null,props:J}}function k(N,B){return D(N.type,B,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function q(N){var B={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(J){return B[J]})}var ee=/\/+/g;function te(N,B){return typeof N=="object"&&N!==null&&N.key!=null?q(""+N.key):B.toString(36)}function K(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(U,U):(N.status="pending",N.then(function(B){N.status==="pending"&&(N.status="fulfilled",N.value=B)},function(B){N.status==="pending"&&(N.status="rejected",N.reason=B)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,B,J,Se,De){var ne=typeof N;(ne==="undefined"||ne==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(ne){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case r:case e:xe=!0;break;case v:return xe=N._init,P(xe(N._payload),B,J,Se,De)}}if(xe)return De=De(N),xe=Se===""?"."+te(N,0):Se,I(De)?(J="",xe!=null&&(J=xe.replace(ee,"$&/")+"/"),P(De,B,J,"",function(et){return et})):De!=null&&(V(De)&&(De=k(De,J+(De.key==null||N&&N.key===De.key?"":(""+De.key).replace(ee,"$&/")+"/")+xe)),B.push(De)),1;xe=0;var be=Se===""?".":Se+":";if(I(N))for(var Ge=0;Ge<N.length;Ge++)Se=N[Ge],ne=be+te(Se,Ge),xe+=P(Se,B,J,ne,De);else if(Ge=E(N),typeof Ge=="function")for(N=Ge.call(N),Ge=0;!(Se=N.next()).done;)Se=Se.value,ne=be+te(Se,Ge++),xe+=P(Se,B,J,ne,De);else if(ne==="object"){if(typeof N.then=="function")return P(K(N),B,J,Se,De);throw B=String(N),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return xe}function z(N,B,J){if(N==null)return N;var Se=[],De=0;return P(N,Se,"","",function(ne){return B.call(J,ne,De++)}),Se}function ie(N){if(N._status===-1){var B=N._result;B=B(),B.then(function(J){(N._status===0||N._status===-1)&&(N._status=1,N._result=J)},function(J){(N._status===0||N._status===-1)&&(N._status=2,N._result=J)}),N._status===-1&&(N._status=0,N._result=B)}if(N._status===1)return N._result.default;throw N._result}var ge=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Me={map:z,forEach:function(N,B,J){z(N,function(){B.apply(this,arguments)},J)},count:function(N){var B=0;return z(N,function(){B++}),B},toArray:function(N){return z(N,function(B){return B})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ot.Activity=S,ot.Children=Me,ot.Component=x,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=H,ot.StrictMode=s,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ot.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},ot.cache=function(N){return function(){return N.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(N,B,J){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Se=w({},N.props),De=N.key;if(B!=null)for(ne in B.key!==void 0&&(De=""+B.key),B)!b.call(B,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&B.ref===void 0||(Se[ne]=B[ne]);var ne=arguments.length-2;if(ne===1)Se.children=J;else if(1<ne){for(var xe=Array(ne),be=0;be<ne;be++)xe[be]=arguments[be+2];Se.children=xe}return D(N.type,De,Se)},ot.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ot.createElement=function(N,B,J){var Se,De={},ne=null;if(B!=null)for(Se in B.key!==void 0&&(ne=""+B.key),B)b.call(B,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(De[Se]=B[Se]);var xe=arguments.length-2;if(xe===1)De.children=J;else if(1<xe){for(var be=Array(xe),Ge=0;Ge<xe;Ge++)be[Ge]=arguments[Ge+2];De.children=be}if(N&&N.defaultProps)for(Se in xe=N.defaultProps,xe)De[Se]===void 0&&(De[Se]=xe[Se]);return D(N,ne,De)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(N){return{$$typeof:p,render:N}},ot.isValidElement=V,ot.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ie}},ot.memo=function(N,B){return{$$typeof:d,type:N,compare:B===void 0?null:B}},ot.startTransition=function(N){var B=O.T,J={};O.T=J;try{var Se=N(),De=O.S;De!==null&&De(J,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(U,ge)}catch(ne){ge(ne)}finally{B!==null&&J.types!==null&&(B.types=J.types),O.T=B}},ot.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ot.use=function(N){return O.H.use(N)},ot.useActionState=function(N,B,J){return O.H.useActionState(N,B,J)},ot.useCallback=function(N,B){return O.H.useCallback(N,B)},ot.useContext=function(N){return O.H.useContext(N)},ot.useDebugValue=function(){},ot.useDeferredValue=function(N,B){return O.H.useDeferredValue(N,B)},ot.useEffect=function(N,B){return O.H.useEffect(N,B)},ot.useEffectEvent=function(N){return O.H.useEffectEvent(N)},ot.useId=function(){return O.H.useId()},ot.useImperativeHandle=function(N,B,J){return O.H.useImperativeHandle(N,B,J)},ot.useInsertionEffect=function(N,B){return O.H.useInsertionEffect(N,B)},ot.useLayoutEffect=function(N,B){return O.H.useLayoutEffect(N,B)},ot.useMemo=function(N,B){return O.H.useMemo(N,B)},ot.useOptimistic=function(N,B){return O.H.useOptimistic(N,B)},ot.useReducer=function(N,B,J){return O.H.useReducer(N,B,J)},ot.useRef=function(N){return O.H.useRef(N)},ot.useState=function(N){return O.H.useState(N)},ot.useSyncExternalStore=function(N,B,J){return O.H.useSyncExternalStore(N,B,J)},ot.useTransition=function(){return O.H.useTransition()},ot.version="19.2.1",ot}var $0;function ep(){return $0||($0=1,vh.exports=iy()),vh.exports}var pt=ep(),xh={exports:{}},Xo={},Sh={exports:{}},yh={};var e_;function ay(){return e_||(e_=1,(function(r){function e(P,z){var ie=P.length;P.push(z);e:for(;0<ie;){var ge=ie-1>>>1,Me=P[ge];if(0<l(Me,z))P[ge]=z,P[ie]=Me,ie=ge;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var z=P[0],ie=P.pop();if(ie!==z){P[0]=ie;e:for(var ge=0,Me=P.length,N=Me>>>1;ge<N;){var B=2*(ge+1)-1,J=P[B],Se=B+1,De=P[Se];if(0>l(J,ie))Se<Me&&0>l(De,J)?(P[ge]=De,P[Se]=ie,ge=Se):(P[ge]=J,P[B]=ie,ge=B);else if(Se<Me&&0>l(De,ie))P[ge]=De,P[Se]=ie,ge=Se;else break e}}return z}function l(P,z){var ie=P.sortIndex-z.sortIndex;return ie!==0?ie:P.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,S=null,g=3,E=!1,T=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var z=i(d);z!==null;){if(z.callback===null)s(d);else if(z.startTime<=P)s(d),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(d)}}function I(P){if(w=!1,C(P),!T)if(i(m)!==null)T=!0,U||(U=!0,q());else{var z=i(d);z!==null&&K(I,z.startTime-P)}}var U=!1,O=-1,b=5,D=-1;function k(){return M?!0:!(r.unstable_now()-D<b)}function V(){if(M=!1,U){var P=r.unstable_now();D=P;var z=!0;try{e:{T=!1,w&&(w=!1,F(O),O=-1),E=!0;var ie=g;try{t:{for(C(P),S=i(m);S!==null&&!(S.expirationTime>P&&k());){var ge=S.callback;if(typeof ge=="function"){S.callback=null,g=S.priorityLevel;var Me=ge(S.expirationTime<=P);if(P=r.unstable_now(),typeof Me=="function"){S.callback=Me,C(P),z=!0;break t}S===i(m)&&s(m),C(P)}else s(m);S=i(m)}if(S!==null)z=!0;else{var N=i(d);N!==null&&K(I,N.startTime-P),z=!1}}break e}finally{S=null,g=ie,E=!1}z=void 0}}finally{z?q():U=!1}}}var q;if(typeof H=="function")q=function(){H(V)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=V,q=function(){te.postMessage(null)}}else q=function(){x(V,0)};function K(P,z){O=x(function(){P(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(P){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var ie=g;g=z;try{return P()}finally{g=ie}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ie=g;g=P;try{return z()}finally{g=ie}},r.unstable_scheduleCallback=function(P,z,ie){var ge=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ge+ie:ge):ie=ge,P){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=ie+Me,P={id:v++,callback:z,priorityLevel:P,startTime:ie,expirationTime:Me,sortIndex:-1},ie>ge?(P.sortIndex=ie,e(d,P),i(m)===null&&P===i(d)&&(w?(F(O),O=-1):w=!0,K(I,ie-ge))):(P.sortIndex=Me,e(m,P),T||E||(T=!0,U||(U=!0,q()))),P},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(P){var z=g;return function(){var ie=g;g=z;try{return P.apply(this,arguments)}finally{g=ie}}}})(yh)),yh}var t_;function sy(){return t_||(t_=1,Sh.exports=ay()),Sh.exports}var Mh={exports:{}},kn={};var n_;function ry(){if(n_)return kn;n_=1;var r=ep();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,kn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},kn.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},kn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},kn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},kn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},kn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},kn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},kn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},kn.requestFormReset=function(m){s.d.r(m)},kn.unstable_batchedUpdates=function(m,d){return m(d)},kn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},kn.useFormStatus=function(){return h.H.useHostTransitionStatus()},kn.version="19.2.1",kn}var i_;function oy(){if(i_)return Mh.exports;i_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Mh.exports=ry(),Mh.exports}var a_;function ly(){if(a_)return Xo;a_=1;var r=sy(),e=ep(),i=oy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),H=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Symbol.for("react.client.reference");function te(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ee?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case H:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:te(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return te(t(n))}catch{}}return null}var K=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ge=[],Me=-1;function N(t){return{current:t}}function B(t){0>Me||(t.current=ge[Me],ge[Me]=null,Me--)}function J(t,n){Me++,ge[Me]=t.current,t.current=n}var Se=N(null),De=N(null),ne=N(null),xe=N(null);function be(t,n){switch(J(ne,n),J(De,t),J(Se,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y0(n),t=M0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B(Se),J(Se,t)}function Ge(){B(Se),B(De),B(ne)}function et(t){t.memoizedState!==null&&J(xe,t);var n=Se.current,a=M0(n,t.type);n!==a&&(J(De,t),J(Se,a))}function Ke(t){De.current===t&&(B(Se),B(De)),xe.current===t&&(B(xe),Ho._currentValue=ie)}var Pt,ct;function vt(t){if(Pt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Pt=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pt+t+ct}var xt=!1;function ut(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(he){var fe=he}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(he){fe=he}t.call(Ee.prototype)}}else{try{throw Error()}catch(he){fe=he}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(he){if(he&&fe&&typeof he.stack=="string")return[he.stack,fe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var G=_.split(`
`),oe=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===oe.length)for(o=G.length-1,u=oe.length-1;1<=o&&0<=u&&G[o]!==oe[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==oe[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==oe[u]){var ve=`
`+G[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function nn(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return vt("Activity");default:return""}}function Jt(t){try{var n="",a=null;do n+=nn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vt=Object.prototype.hasOwnProperty,jt=r.unstable_scheduleCallback,kt=r.unstable_cancelCallback,an=r.unstable_shouldYield,Y=r.unstable_requestPaint,Ut=r.unstable_now,Tt=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,y=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,se=r.unstable_LowPriority,de=r.unstable_IdlePriority,we=r.log,Ne=r.unstable_setDisableYieldValue,pe=null,me=null;function Re(t){if(typeof we=="function"&&Ne(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(pe,t)}catch{}}var Be=Math.clz32?Math.clz32:Ze,Pe=Math.log,Oe=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Pe(t)/Oe|0)|0}var Qe=256,nt=262144,W=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Le(o):(_&=R,_!==0?u=Le(_):a||(a=R&~t,a!==0&&(u=Le(a))))):(R=o&~f,R!==0?u=Le(R):_!==0?u=Le(_):a||(a=o&~t,a!==0&&(u=Le(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ae(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ae(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rt(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,oe=t.hiddenUpdates;for(a=_&~a;0<a;){var ve=31-Be(a),Ee=1<<ve;R[ve]=0,G[ve]=-1;var fe=oe[ve];if(fe!==null)for(oe[ve]=null,ve=0;ve<fe.length;ve++){var he=fe[ve];he!==null&&(he.lane&=-536870913)}a&=~Ee}o!==0&&at(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function at(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Zt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function yn(t,n){var a=n&-n;return a=(a&42)!==0?1:Ln(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ln(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Un(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hn(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:W0(t.type))}function Rn(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var Yn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Yn,hn="__reactProps$"+Yn,Gn="__reactContainer$"+Yn,xs="__reactEvents$"+Yn,cl="__reactListeners$"+Yn,ul="__reactHandles$"+Yn,Ss="__reactResources$"+Yn,Na="__reactMarker$"+Yn;function Oa(t){delete t[cn],delete t[hn],delete t[xs],delete t[cl],delete t[ul]}function aa(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gn]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=w0(t);t!==null;){if(a=t[cn])return a;t=w0(t)}return n}t=a,a=t.parentNode}return null}function sa(t){if(t=t[cn]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ys(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Pa(t){var n=t[Ss];return n||(n=t[Ss]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(t){t[Na]=!0}var fl=new Set,A={};function Z(t,n){ue(t,n),ue(t+"Capture",n)}function ue(t,n){for(A[t]=n,t=0;t<n.length;t++)fl.add(n[t])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},Fe={};function ke(t){return Vt.call(Fe,t)?!0:Vt.call(ce,t)?!1:le.test(t)?Fe[t]=!0:(ce[t]=!0,!1)}function Ie(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wt(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function Bt(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+je(n)):t.value!==""+je(n)&&(t.value=""+je(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?St(t,_,je(n)):a!=null?St(t,_,je(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+je(R):t.removeAttribute("name")}function Vn(t,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){wt(t);return}a=a!=null?""+je(a):"",n=n!=null?""+je(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),wt(t)}function St(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function li(t,n,a){if(n!=null&&(n=""+je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+je(a):""}function Ui(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),wt(t)}function ci(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ni(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&rn(t,f,n[f])}function Ot(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ia=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ms(t){return Ia.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ra(){}var pu=null;function mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var js=null,$s=null;function Sp(t){var n=sa(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Bt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[hn]||null;if(!u)throw Error(s(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&sn(o)}break e;case"textarea":li(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Mn(t,!!a.multiple,n,!1)}}}var gu=!1;function yp(t,n,a){if(gu)return t(n,a);gu=!0;try{var o=t(n);return o}finally{if(gu=!1,(js!==null||$s!==null)&&(jl(),js&&(n=js,t=$s,$s=js=null,Sp(n),t)))for(n=0;n<t.length;n++)Sp(t[n])}}function no(t,n){var a=t.stateNode;if(a===null)return null;var o=a[hn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(oa)try{var io={};Object.defineProperty(io,"passive",{get:function(){_u=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{_u=!1}var Ba=null,vu=null,hl=null;function Mp(){if(hl)return hl;var t,n=vu,a=n.length,o,u="value"in Ba?Ba.value:Ba.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return hl=u.slice(t,1<o?1-o:void 0)}function dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function Ep(){return!1}function Jn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:Ep,this.isPropagationStopped=Ep,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Jn(Es),ao=S({},Es,{view:0,detail:0}),tx=Jn(ao),xu,Su,so,gl=S({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(xu=t.screenX-so.screenX,Su=t.screenY-so.screenY):Su=xu=0,so=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),bp=Jn(gl),nx=S({},gl,{dataTransfer:0}),ix=Jn(nx),ax=S({},ao,{relatedTarget:0}),yu=Jn(ax),sx=S({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),rx=Jn(sx),ox=S({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lx=Jn(ox),cx=S({},Es,{data:0}),Tp=Jn(cx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hx[t])?!!n[t]:!1}function Mu(){return dx}var px=S({},ao,{key:function(t){if(t.key){var n=ux[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mx=Jn(px),gx=S({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Jn(gx),_x=S({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),vx=Jn(_x),xx=S({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=Jn(xx),yx=S({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mx=Jn(yx),Ex=S({},Es,{newState:0,oldState:0}),bx=Jn(Ex),Tx=[9,13,27,32],Eu=oa&&"CompositionEvent"in window,ro=null;oa&&"documentMode"in document&&(ro=document.documentMode);var Ax=oa&&"TextEvent"in window&&!ro,Rp=oa&&(!Eu||ro&&8<ro&&11>=ro),Cp=" ",wp=!1;function Dp(t,n){switch(t){case"keyup":return Tx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var er=!1;function Rx(t,n){switch(t){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(wp=!0,Cp);case"textInput":return t=n.data,t===Cp&&wp?null:t;default:return null}}function Cx(t,n){if(er)return t==="compositionend"||!Eu&&Dp(t,n)?(t=Mp(),hl=vu=Ba=null,er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!wx[t.type]:n==="textarea"}function Np(t,n,a,o){js?$s?$s.push(o):$s=[o]:js=o,n=sc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var oo=null,lo=null;function Dx(t){m0(t,0)}function _l(t){var n=ys(t);if(sn(n))return t}function Op(t,n){if(t==="change")return n}var Pp=!1;if(oa){var bu;if(oa){var Tu="oninput"in document;if(!Tu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Tu=typeof Ip.oninput=="function"}bu=Tu}else bu=!1;Pp=bu&&(!document.documentMode||9<document.documentMode)}function Bp(){oo&&(oo.detachEvent("onpropertychange",zp),lo=oo=null)}function zp(t){if(t.propertyName==="value"&&_l(lo)){var n=[];Np(n,lo,t,mu(t)),yp(Dx,n)}}function Lx(t,n,a){t==="focusin"?(Bp(),oo=n,lo=a,oo.attachEvent("onpropertychange",zp)):t==="focusout"&&Bp()}function Ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(lo)}function Nx(t,n){if(t==="click")return _l(n)}function Ox(t,n){if(t==="input"||t==="change")return _l(n)}function Px(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ui=typeof Object.is=="function"?Object.is:Px;function co(t,n){if(ui(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Vt.call(n,u)||!ui(t[u],n[u]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,n){var a=Fp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fp(a)}}function Gp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function Au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ix=oa&&"documentMode"in document&&11>=document.documentMode,tr=null,Ru=null,uo=null,Cu=!1;function kp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||tr==null||tr!==Kt(o)||(o=tr,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=sc(Ru,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=tr)))}function bs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var nr={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},wu={},Xp={};oa&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Ts(t){if(wu[t])return wu[t];if(!nr[t])return t;var n=nr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xp)return wu[t]=n[a];return t}var Wp=Ts("animationend"),qp=Ts("animationiteration"),Yp=Ts("animationstart"),Bx=Ts("transitionrun"),zx=Ts("transitionstart"),Fx=Ts("transitioncancel"),Zp=Ts("transitionend"),Kp=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Oi(t,n){Kp.set(t,n),Z(n,[t])}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mi=[],ir=0,Lu=0;function xl(){for(var t=ir,n=Lu=ir=0;n<t;){var a=Mi[n];Mi[n++]=null;var o=Mi[n];Mi[n++]=null;var u=Mi[n];Mi[n++]=null;var f=Mi[n];if(Mi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Qp(a,u,f)}}function Sl(t,n,a,o){Mi[ir++]=t,Mi[ir++]=n,Mi[ir++]=a,Mi[ir++]=o,Lu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Uu(t,n,a,o){return Sl(t,n,a,o),yl(t)}function As(t,n){return Sl(t,null,null,n),yl(t)}function Qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Be(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function yl(t){if(50<No)throw No=0,Vf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ar={};function Hx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,n,a,o){return new Hx(t,n,a,o)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=fi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ml(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Nu(t)&&(_=1);else if(typeof t=="string")_=WS(t,a,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=fi(31,a,n,u),t.elementType=D,t.lanes=f,t;case w:return Rs(a.children,u,f,n);case M:_=8,u|=24;break;case x:return t=fi(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case I:return t=fi(13,a,n,u),t.elementType=I,t.lanes=f,t;case U:return t=fi(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:_=10;break e;case F:_=9;break e;case C:_=11;break e;case O:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=fi(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Rs(t,n,a,o){return t=fi(7,t,o,n),t.lanes=a,t}function Ou(t,n,a){return t=fi(6,t,null,n),t.lanes=a,t}function jp(t){var n=fi(18,null,null,0);return n.stateNode=t,n}function Pu(t,n,a){return n=fi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var $p=new WeakMap;function Ei(t,n){if(typeof t=="object"&&t!==null){var a=$p.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},$p.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var sr=[],rr=0,El=null,fo=0,bi=[],Ti=0,za=null,Xi=1,Wi="";function ca(t,n){sr[rr++]=fo,sr[rr++]=El,El=t,fo=n}function em(t,n,a){bi[Ti++]=Xi,bi[Ti++]=Wi,bi[Ti++]=za,za=t;var o=Xi;t=Wi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Xi=1<<32-Be(n)+u|a<<u|o,Wi=f+t}else Xi=1<<f|a<<u|o,Wi=t}function Iu(t){t.return!==null&&(ca(t,1),em(t,1,0))}function Bu(t){for(;t===El;)El=sr[--rr],sr[rr]=null,fo=sr[--rr],sr[rr]=null;for(;t===za;)za=bi[--Ti],bi[Ti]=null,Wi=bi[--Ti],bi[Ti]=null,Xi=bi[--Ti],bi[Ti]=null}function tm(t,n){bi[Ti++]=Xi,bi[Ti++]=Wi,bi[Ti++]=za,Xi=n.id,Wi=n.overflow,za=t}var Nn=null,$t=null,At=!1,Fa=null,Ai=!1,zu=Error(s(519));function Ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(Ei(n,t)),zu}function nm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[hn]=o,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)Mt(Po[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),Vn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Ui(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||x0(n.textContent,a)?(o.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),o.onScroll!=null&&Mt("scroll",n),o.onScrollEnd!=null&&Mt("scrollend",n),o.onClick!=null&&(n.onclick=ra),n=!0):n=!1,n||Ha(t,!0)}function im(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Nn=Nn.return}}function or(t){if(t!==Nn)return!1;if(!At)return im(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ih(t.type,t.memoizedProps)),a=!a),a&&$t&&Ha(t),im(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=C0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=C0(t)}else n===27?(n=$t,es(t.type)?(t=lh,lh=null,$t=t):$t=n):$t=Nn?Ci(t.stateNode.nextSibling):null;return!0}function Cs(){$t=Nn=null,At=!1}function Fu(){var t=Fa;return t!==null&&(ti===null?ti=t:ti.push.apply(ti,t),Fa=null),t}function ho(t){Fa===null?Fa=[t]:Fa.push(t)}var Hu=N(null),ws=null,ua=null;function Ga(t,n,a){J(Hu,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=Hu.current,B(Hu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Vu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Gu(f.return,a,t),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Gu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function lr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;ui(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===xe.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ho):t=[Ho])}u=u.return}t!==null&&Vu(n,t,a,o),n.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ds(t){ws=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function On(t){return am(ws,t)}function Tl(t,n){return ws===null&&Ds(t),am(t,n)}function am(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(s(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var Gx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Vx=r.unstable_scheduleCallback,kx=r.unstable_NormalPriority,gn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new Gx,data:new Map,refCount:0}}function po(t){t.refCount--,t.refCount===0&&Vx(kx,function(){t.controller.abort()})}var mo=null,Xu=0,cr=0,ur=null;function Xx(t,n){if(mo===null){var a=mo=[];Xu=0,cr=Zf(),ur={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(sm,sm),n}function sm(){if(--Xu===0&&mo!==null){ur!==null&&(ur.status="fulfilled");var t=mo;mo=null,cr=0,ur=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Wx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var rm=P.S;P.S=function(t,n){kg=Ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xx(t,n),rm!==null&&rm(t,n)};var Ls=N(null);function Wu(){var t=Ls.current;return t!==null?t:Qt.pooledCache}function Al(t,n){n===null?J(Ls,Ls.current):J(Ls,n.pool)}function om(){var t=Wu();return t===null?null:{parent:gn._currentValue,pool:t}}var fr=Error(s(460)),qu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function lm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ra,ra),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fm(t),t;default:if(typeof n.status=="string")n.then(ra,ra);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fm(t),t}throw Ns=n,fr}}function Us(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ns=a,fr):a}}var Ns=null;function um(){if(Ns===null)throw Error(s(459));var t=Ns;return Ns=null,t}function fm(t){if(t===fr||t===Rl)throw Error(s(483))}var hr=null,go=0;function wl(t){var n=go;return go+=1,hr===null&&(hr=[]),cm(hr,t,n)}function _o(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Dl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hm(t){function n($,X){if(t){var re=$.deletions;re===null?($.deletions=[X],$.flags|=16):re.push(X)}}function a($,X){if(!t)return null;for(;X!==null;)n($,X),X=X.sibling;return null}function o($){for(var X=new Map;$!==null;)$.key!==null?X.set($.key,$):X.set($.index,$),$=$.sibling;return X}function u($,X){return $=la($,X),$.index=0,$.sibling=null,$}function f($,X,re){return $.index=re,t?(re=$.alternate,re!==null?(re=re.index,re<X?($.flags|=67108866,X):re):($.flags|=67108866,X)):($.flags|=1048576,X)}function _($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,X,re,ye){return X===null||X.tag!==6?(X=Ou(re,$.mode,ye),X.return=$,X):(X=u(X,re),X.return=$,X)}function G($,X,re,ye){var $e=re.type;return $e===w?ve($,X,re.props.children,ye,re.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===b&&Us($e)===X.type)?(X=u(X,re.props),_o(X,re),X.return=$,X):(X=Ml(re.type,re.key,re.props,null,$.mode,ye),_o(X,re),X.return=$,X)}function oe($,X,re,ye){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=Pu(re,$.mode,ye),X.return=$,X):(X=u(X,re.children||[]),X.return=$,X)}function ve($,X,re,ye,$e){return X===null||X.tag!==7?(X=Rs(re,$.mode,ye,$e),X.return=$,X):(X=u(X,re),X.return=$,X)}function Ee($,X,re){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ou(""+X,$.mode,re),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return re=Ml(X.type,X.key,X.props,null,$.mode,re),_o(re,X),re.return=$,re;case T:return X=Pu(X,$.mode,re),X.return=$,X;case b:return X=Us(X),Ee($,X,re)}if(K(X)||q(X))return X=Rs(X,$.mode,re,null),X.return=$,X;if(typeof X.then=="function")return Ee($,wl(X),re);if(X.$$typeof===H)return Ee($,Tl($,X),re);Dl($,X)}return null}function fe($,X,re,ye){var $e=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return $e!==null?null:R($,X,""+re,ye);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case E:return re.key===$e?G($,X,re,ye):null;case T:return re.key===$e?oe($,X,re,ye):null;case b:return re=Us(re),fe($,X,re,ye)}if(K(re)||q(re))return $e!==null?null:ve($,X,re,ye,null);if(typeof re.then=="function")return fe($,X,wl(re),ye);if(re.$$typeof===H)return fe($,X,Tl($,re),ye);Dl($,re)}return null}function he($,X,re,ye,$e){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return $=$.get(re)||null,R(X,$,""+ye,$e);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case E:return $=$.get(ye.key===null?re:ye.key)||null,G(X,$,ye,$e);case T:return $=$.get(ye.key===null?re:ye.key)||null,oe(X,$,ye,$e);case b:return ye=Us(ye),he($,X,re,ye,$e)}if(K(ye)||q(ye))return $=$.get(re)||null,ve(X,$,ye,$e,null);if(typeof ye.then=="function")return he($,X,re,wl(ye),$e);if(ye.$$typeof===H)return he($,X,re,Tl(X,ye),$e);Dl(X,ye)}return null}function qe($,X,re,ye){for(var $e=null,Dt=null,Ye=X,dt=X=0,bt=null;Ye!==null&&dt<re.length;dt++){Ye.index>dt?(bt=Ye,Ye=null):bt=Ye.sibling;var Lt=fe($,Ye,re[dt],ye);if(Lt===null){Ye===null&&(Ye=bt);break}t&&Ye&&Lt.alternate===null&&n($,Ye),X=f(Lt,X,dt),Dt===null?$e=Lt:Dt.sibling=Lt,Dt=Lt,Ye=bt}if(dt===re.length)return a($,Ye),At&&ca($,dt),$e;if(Ye===null){for(;dt<re.length;dt++)Ye=Ee($,re[dt],ye),Ye!==null&&(X=f(Ye,X,dt),Dt===null?$e=Ye:Dt.sibling=Ye,Dt=Ye);return At&&ca($,dt),$e}for(Ye=o(Ye);dt<re.length;dt++)bt=he(Ye,$,dt,re[dt],ye),bt!==null&&(t&&bt.alternate!==null&&Ye.delete(bt.key===null?dt:bt.key),X=f(bt,X,dt),Dt===null?$e=bt:Dt.sibling=bt,Dt=bt);return t&&Ye.forEach(function(ss){return n($,ss)}),At&&ca($,dt),$e}function tt($,X,re,ye){if(re==null)throw Error(s(151));for(var $e=null,Dt=null,Ye=X,dt=X=0,bt=null,Lt=re.next();Ye!==null&&!Lt.done;dt++,Lt=re.next()){Ye.index>dt?(bt=Ye,Ye=null):bt=Ye.sibling;var ss=fe($,Ye,Lt.value,ye);if(ss===null){Ye===null&&(Ye=bt);break}t&&Ye&&ss.alternate===null&&n($,Ye),X=f(ss,X,dt),Dt===null?$e=ss:Dt.sibling=ss,Dt=ss,Ye=bt}if(Lt.done)return a($,Ye),At&&ca($,dt),$e;if(Ye===null){for(;!Lt.done;dt++,Lt=re.next())Lt=Ee($,Lt.value,ye),Lt!==null&&(X=f(Lt,X,dt),Dt===null?$e=Lt:Dt.sibling=Lt,Dt=Lt);return At&&ca($,dt),$e}for(Ye=o(Ye);!Lt.done;dt++,Lt=re.next())Lt=he(Ye,$,dt,Lt.value,ye),Lt!==null&&(t&&Lt.alternate!==null&&Ye.delete(Lt.key===null?dt:Lt.key),X=f(Lt,X,dt),Dt===null?$e=Lt:Dt.sibling=Lt,Dt=Lt);return t&&Ye.forEach(function(ny){return n($,ny)}),At&&ca($,dt),$e}function qt($,X,re,ye){if(typeof re=="object"&&re!==null&&re.type===w&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case E:e:{for(var $e=re.key;X!==null;){if(X.key===$e){if($e=re.type,$e===w){if(X.tag===7){a($,X.sibling),ye=u(X,re.props.children),ye.return=$,$=ye;break e}}else if(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===b&&Us($e)===X.type){a($,X.sibling),ye=u(X,re.props),_o(ye,re),ye.return=$,$=ye;break e}a($,X);break}else n($,X);X=X.sibling}re.type===w?(ye=Rs(re.props.children,$.mode,ye,re.key),ye.return=$,$=ye):(ye=Ml(re.type,re.key,re.props,null,$.mode,ye),_o(ye,re),ye.return=$,$=ye)}return _($);case T:e:{for($e=re.key;X!==null;){if(X.key===$e)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){a($,X.sibling),ye=u(X,re.children||[]),ye.return=$,$=ye;break e}else{a($,X);break}else n($,X);X=X.sibling}ye=Pu(re,$.mode,ye),ye.return=$,$=ye}return _($);case b:return re=Us(re),qt($,X,re,ye)}if(K(re))return qe($,X,re,ye);if(q(re)){if($e=q(re),typeof $e!="function")throw Error(s(150));return re=$e.call(re),tt($,X,re,ye)}if(typeof re.then=="function")return qt($,X,wl(re),ye);if(re.$$typeof===H)return qt($,X,Tl($,re),ye);Dl($,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,X!==null&&X.tag===6?(a($,X.sibling),ye=u(X,re),ye.return=$,$=ye):(a($,X),ye=Ou(re,$.mode,ye),ye.return=$,$=ye),_($)):a($,X)}return function($,X,re,ye){try{go=0;var $e=qt($,X,re,ye);return hr=null,$e}catch(Ye){if(Ye===fr||Ye===Rl)throw Ye;var Dt=fi(29,Ye,null,$.mode);return Dt.lanes=ye,Dt.return=$,Dt}finally{}}}var Os=hm(!0),dm=hm(!1),Va=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),Qp(t,null,a),n}return Sl(t,o,n,a),yl(t)}function vo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Zt(t,a)}}function Ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qu=!1;function xo(){if(Qu){var t=ur;if(t!==null)throw t}}function So(t,n,a,o){Qu=!1;var u=t.updateQueue;Va=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,oe=G.next;G.next=null,_===null?f=oe:_.next=oe,_=G;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==_&&(R===null?ve.firstBaseUpdate=oe:R.next=oe,ve.lastBaseUpdate=G))}if(f!==null){var Ee=u.baseState;_=0,ve=oe=G=null,R=f;do{var fe=R.lane&-536870913,he=fe!==R.lane;if(he?(Et&fe)===fe:(o&fe)===fe){fe!==0&&fe===cr&&(Qu=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,tt=R;fe=n;var qt=a;switch(tt.tag){case 1:if(qe=tt.payload,typeof qe=="function"){Ee=qe.call(qt,Ee,fe);break e}Ee=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=tt.payload,fe=typeof qe=="function"?qe.call(qt,Ee,fe):qe,fe==null)break e;Ee=S({},Ee,fe);break e;case 2:Va=!0}}fe=R.callback,fe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[fe]:he.push(fe))}else he={lane:fe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(oe=ve=he,G=Ee):ve=ve.next=he,_|=fe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;he=R,R=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);ve===null&&(G=Ee),u.baseState=G,u.firstBaseUpdate=oe,u.lastBaseUpdate=ve,f===null&&(u.shared.lanes=0),Ka|=_,t.lanes=_,t.memoizedState=Ee}}function pm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pm(a[t],n)}var dr=N(null),Ll=N(0);function gm(t,n){t=Sa,J(Ll,t),J(dr,n),Sa=t|n.baseLanes}function Ju(){J(Ll,Sa),J(dr,dr.current)}function ju(){Sa=Ll.current,B(dr),B(Ll)}var hi=N(null),Ri=null;function Wa(t){var n=t.alternate;J(dn,dn.current&1),J(hi,t),Ri===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(Ri=t)}function $u(t){J(dn,dn.current),J(hi,t),Ri===null&&(Ri=t)}function _m(t){t.tag===22?(J(dn,dn.current),J(hi,t),Ri===null&&(Ri=t)):qa()}function qa(){J(dn,dn.current),J(hi,hi.current)}function di(t){B(hi),Ri===t&&(Ri=null),B(dn)}var dn=N(0);function Ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rh(a)||oh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,ht=null,Xt=null,_n=null,Nl=!1,pr=!1,Ps=!1,Ol=0,yo=0,mr=null,qx=0;function un(){throw Error(s(321))}function ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ui(t[a],n[a]))return!1;return!0}function tf(t,n,a,o,u,f){return ha=f,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?eg:_f,Ps=!1,f=a(o,u),Ps=!1,pr&&(f=xm(n,a,o,u)),vm(t),f}function vm(t){P.H=bo;var n=Xt!==null&&Xt.next!==null;if(ha=0,_n=Xt=ht=null,Nl=!1,yo=0,mr=null,n)throw Error(s(300));t===null||vn||(t=t.dependencies,t!==null&&bl(t)&&(vn=!0))}function xm(t,n,a,o){ht=t;var u=0;do{if(pr&&(mr=null),yo=0,pr=!1,25<=u)throw Error(s(301));if(u+=1,_n=Xt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=tg,f=n(a,o)}while(pr);return f}function Yx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ht.flags|=1024),n}function nf(){var t=Ol!==0;return Ol=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(Nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Nl=!1}ha=0,_n=Xt=ht=null,pr=!1,yo=Ol=0,mr=null}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?ht.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(Xt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=_n===null?ht.memoizedState:_n.next;if(n!==null)_n=n,Xt=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},_n===null?ht.memoizedState=_n=t:_n=_n.next=t}return _n}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=yo;return yo+=1,mr===null&&(mr=[]),t=cm(mr,t,n),n=ht,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?eg:_f),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===H)return On(t)}throw Error(s(438,String(t)))}function rf(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=pn();return of(n,Xt,t)}function of(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,G=null,oe=n,ve=!1;do{var Ee=oe.lane&-536870913;if(Ee!==oe.lane?(Et&Ee)===Ee:(ha&Ee)===Ee){var fe=oe.revertLane;if(fe===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Ee===cr&&(ve=!0);else if((ha&fe)===fe){oe=oe.next,fe===cr&&(ve=!0);continue}else Ee={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(R=G=Ee,_=f):G=G.next=Ee,ht.lanes|=fe,Ka|=fe;Ee=oe.action,Ps&&a(f,Ee),f=oe.hasEagerState?oe.eagerState:a(f,Ee)}else fe={lane:Ee,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(R=G=fe,_=f):G=G.next=fe,ht.lanes|=Ee,Ka|=Ee;oe=oe.next}while(oe!==null&&oe!==n);if(G===null?_=f:G.next=R,!ui(f,t.memoizedState)&&(vn=!0,ve&&(a=ur,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function lf(t){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ui(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Sm(t,n,a){var o=ht,u=pn(),f=At;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ui((Xt||u).memoizedState,a);if(_&&(u.memoizedState=a,vn=!0),u=u.queue,ff(Em.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,gr(9,{destroy:void 0},Mm.bind(null,o,u,a,n),null),Qt===null)throw Error(s(349));f||(ha&127)!==0||ym(o,n,a)}return a}function ym(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Pl(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mm(t,n,a,o){n.value=a,n.getSnapshot=o,bm(n)&&Tm(t)}function Em(t,n,a){return a(function(){bm(n)&&Tm(t)})}function bm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ui(t,a)}catch{return!0}}function Tm(t){var n=As(t,2);n!==null&&ni(n,t,2)}function cf(t){var n=Zn();if(typeof t=="function"){var a=t;if(t=a(),Ps){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function Am(t,n,a,o){return t.baseState=a,of(t,Xt,typeof o=="function"?o:da)}function Zx(t,n,a,o,u){if(Hl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var R=a(u,o),G=P.S;G!==null&&G(_,R),Cm(t,n,R)}catch(oe){uf(t,n,oe)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(u,o),Cm(t,n,f)}catch(oe){uf(t,n,oe)}}function Cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wm(t,n,o)},function(o){return uf(t,n,o)}):wm(t,n,a)}function wm(t,n,a){n.status="fulfilled",n.value=a,Dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rm(t,a)))}function uf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dm(n),n=n.next;while(n!==o)}t.action=null}function Dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Lm(t,n){return n}function Um(t,n){if(At){var a=Qt.formState;if(a!==null){e:{var o=ht;if(At){if($t){t:{for(var u=$t,f=Ai;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ci(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=Ci(u.nextSibling),o=u.data==="F!";break e}}Ha(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=o,a=Jm.bind(null,ht,o),o.dispatch=a,o=cf(!1),f=gf.bind(null,ht,!1,o.queue),o=Zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Zx.bind(null,ht,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Nm(t){var n=pn();return Om(n,Xt,t)}function Om(t,n,a){if(n=of(t,n,Lm)[0],t=Bl(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(_){throw _===fr?Rl:_}else o=n;n=pn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,gr(9,{destroy:void 0},Kx.bind(null,u,a),null)),[o,f,t]}function Kx(t,n){t.action=n}function Pm(t){var n=pn(),a=Xt;if(a!==null)return Om(n,a,t);pn(),n=n.memoizedState,a=pn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function gr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Pl(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Im(){return pn().memoizedState}function zl(t,n,a,o){var u=Zn();ht.flags|=t,u.memoizedState=gr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Fl(t,n,a,o){var u=pn();o=o===void 0?null:o;var f=u.memoizedState.inst;Xt!==null&&o!==null&&ef(o,Xt.memoizedState.deps)?u.memoizedState=gr(n,f,a,o):(ht.flags|=t,u.memoizedState=gr(1|n,f,a,o))}function Bm(t,n){zl(8390656,8,t,n)}function ff(t,n){Fl(2048,8,t,n)}function Qx(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Pl(),ht.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function zm(t){var n=pn().memoizedState;return Qx({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Fm(t,n){return Fl(4,2,t,n)}function Hm(t,n){return Fl(4,4,t,n)}function Gm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vm(t,n,a){a=a!=null?a.concat([t]):null,Fl(4,4,Gm.bind(null,n,t),a)}function hf(){}function km(t,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Xm(t,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),Ps){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function df(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Et&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Wg(),ht.lanes|=t,Ka|=t,a)}function Wm(t,n,a,o){return ui(a,n)?a:dr.current!==null?(t=df(t,a,o),ui(t,n)||(vn=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(Et&261930)===0?(vn=!0,t.memoizedState=a):(t=Wg(),ht.lanes|=t,Ka|=t,n)}function qm(t,n,a,o,u){var f=z.p;z.p=f!==0&&8>f?f:8;var _=P.T,R={};P.T=R,gf(t,!1,n,a);try{var G=u(),oe=P.S;if(oe!==null&&oe(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=Wx(G,o);Eo(t,n,ve,gi(t))}else Eo(t,n,o,gi(t))}catch(Ee){Eo(t,n,{then:function(){},status:"rejected",reason:Ee},gi())}finally{z.p=f,_!==null&&R.types!==null&&(_.types=R.types),P.T=_}}function Jx(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Ym(t).queue;qm(t,u,n,ie,a===null?Jx:function(){return Zm(t),a(o)})}function Ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zm(t){var n=Ym(t);n.next===null&&(n=t.alternate.memoizedState),Eo(t,n.next.queue,{},gi())}function mf(){return On(Ho)}function Km(){return pn().memoizedState}function Qm(){return pn().memoizedState}function jx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();t=ka(a);var o=Xa(n,t,a);o!==null&&(ni(o,n,a),vo(o,n,a)),n={cache:ku()},t.payload=n;return}n=n.return}}function $x(t,n,a){var o=gi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(t)?jm(n,a):(a=Uu(t,n,a,o),a!==null&&(ni(a,t,o),$m(a,n,o)))}function Jm(t,n,a){var o=gi();Eo(t,n,a,o)}function Eo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(t))jm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ui(R,_))return Sl(t,n,u,0),Qt===null&&xl(),!1}catch{}finally{}if(a=Uu(t,n,u,o),a!==null)return ni(a,t,o),$m(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(t)){if(n)throw Error(s(479))}else n=Uu(t,a,o,2),n!==null&&ni(n,t,2)}function Hl(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function jm(t,n){pr=Nl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $m(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Zt(t,a)}}var bo={readContext:On,use:Il,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};bo.useEffectEvent=un;var eg={readContext:On,use:Il,useCallback:function(t,n){return Zn().memoizedState=[t,n===void 0?null:n],t},useContext:On,useEffect:Bm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,zl(4194308,4,Gm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var a=Zn();n=n===void 0?null:n;var o=t();if(Ps){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Zn();if(a!==void 0){var u=a(n);if(Ps){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=$x.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Zn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,a=Jm.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Zn();return df(a,t,n)},useTransition:function(){var t=cf(!1);return t=qm.bind(null,ht,t.queue,!0,!1),Zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,u=Zn();if(At){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qt===null)throw Error(s(349));(Et&127)!==0||ym(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Bm(Em.bind(null,o,f,t),[t]),o.flags|=2048,gr(9,{destroy:void 0},Mm.bind(null,o,f,a,n),null),a},useId:function(){var t=Zn(),n=Qt.identifierPrefix;if(At){var a=Wi,o=Xi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=qx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Um,useActionState:Um,useOptimistic:function(t){var n=Zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:rf,useCacheRefresh:function(){return Zn().memoizedState=jx.bind(null,ht)},useEffectEvent:function(t){var n=Zn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:On,use:Il,useCallback:km,useContext:On,useEffect:ff,useImperativeHandle:Vm,useInsertionEffect:Fm,useLayoutEffect:Hm,useMemo:Xm,useReducer:Bl,useRef:Im,useState:function(){return Bl(da)},useDebugValue:hf,useDeferredValue:function(t,n){var a=pn();return Wm(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Bl(da)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:mf,useFormState:Nm,useActionState:Nm,useOptimistic:function(t,n){var a=pn();return Am(a,Xt,t,n)},useMemoCache:rf,useCacheRefresh:Qm};_f.useEffectEvent=zm;var tg={readContext:On,use:Il,useCallback:km,useContext:On,useEffect:ff,useImperativeHandle:Vm,useInsertionEffect:Fm,useLayoutEffect:Hm,useMemo:Xm,useReducer:lf,useRef:Im,useState:function(){return lf(da)},useDebugValue:hf,useDeferredValue:function(t,n){var a=pn();return Xt===null?df(a,t,n):Wm(a,Xt.memoizedState,t,n)},useTransition:function(){var t=lf(da)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:mf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,n){var a=pn();return Xt!==null?Am(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:Qm};tg.useEffectEvent=zm;function vf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=gi(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&(ni(n,t,o),vo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=gi(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&(ni(n,t,o),vo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=gi(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(t,o,a),n!==null&&(ni(n,t,a),vo(n,t,a))}};function ng(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,f):!0}function ig(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Is(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function ag(t){vl(t)}function sg(t){console.error(t)}function rg(t){vl(t)}function Gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function og(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(t,n)},a}function lg(t){return t=ka(t),t.tag=3,t}function cg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){og(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){og(n,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function eS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ri===null?$l():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,u)),!1}throw Error(s(435,a.tag))}return Wf(t,o,u),$l(),!1}if(At)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(t=Error(s(422),{cause:o}),ho(Ei(t,a)))):(o!==zu&&(n=Error(s(423),{cause:o}),ho(Ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Ei(o,a),u=Sf(t.stateNode,o,u),Ku(t,u),fn!==4&&(fn=2)),!1;var f=Error(s(520),{cause:o});if(f=Ei(f,a),Uo===null?Uo=[f]:Uo.push(f),fn!==4&&(fn=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Ku(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qa===null||!Qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=lg(u),cg(u,t,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(s(461)),vn=!1;function Pn(t,n,a,o){n.child=t===null?dm(n,null,a,o):Os(n,t.child,a,o)}function ug(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Ds(n),o=tf(t,n,a,_,f,u),R=nf(),t!==null&&!vn?(af(t,n,u),pa(t,n,u)):(At&&R&&Iu(n),n.flags|=1,Pn(t,n,o,u),n.child)}function fg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,hg(t,n,f,o,u)):(t=Ml(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!wf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(_,o)&&t.ref===n.ref)return pa(t,n,u)}return n.flags|=1,t=la(f,o),t.ref=n.ref,t.return=n,n.child=t}function hg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(co(f,o)&&t.ref===n.ref)if(vn=!1,n.pendingProps=o=f,wf(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,pa(t,n,u)}return Mf(t,n,a,o,u)}function dg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return pg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,f!==null?f.cachePool:null),f!==null?gm(n,f):Ju(),_m(n);else return o=n.lanes=536870912,pg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Al(n,f.cachePool),gm(n,f),qa(),n.memoizedState=null):(t!==null&&Al(n,null),Ju(),qa());return Pn(t,n,u,a),n.child}function To(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function pg(t,n,a,o,u){var f=Wu();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Al(n,null),Ju(),_m(n),t!==null&&lr(t,n,o,!0),n.childLanes=u,null}function Vl(t,n){return n=Xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function mg(t,n,a){return Os(n,t.child,null,a),t=Vl(n,n.pendingProps),t.flags|=2,di(n),n.memoizedState=null,t}function tS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(At){if(o.mode==="hidden")return t=Vl(n,o),n.lanes=536870912,To(null,t);if($u(n),(t=$t)?(t=R0(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=jp(t),a.return=n,n.child=a,Nn=n,$t=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return Vl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=mg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||lr(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(o=Qt,o!==null&&(_=yn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,As(t,_),ni(o,t,_),yf;$l(),n=mg(t,n,a)}else t=f.treeContext,$t=Ci(_.nextSibling),Nn=n,At=!0,Fa=null,Ai=!1,t!==null&&tm(n,t),n=Vl(n,o),n.flags|=4096;return n}return t=la(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Mf(t,n,a,o,u){return Ds(n),a=tf(t,n,a,o,void 0,u),o=nf(),t!==null&&!vn?(af(t,n,u),pa(t,n,u)):(At&&o&&Iu(n),n.flags|=1,Pn(t,n,a,u),n.child)}function gg(t,n,a,o,u,f){return Ds(n),n.updateQueue=null,a=xm(n,o,a,u),vm(t),o=nf(),t!==null&&!vn?(af(t,n,f),pa(t,n,f)):(At&&o&&Iu(n),n.flags|=1,Pn(t,n,a,f),n.child)}function _g(t,n,a,o,u){if(Ds(n),n.stateNode===null){var f=ar,_=a.contextType;typeof _=="object"&&_!==null&&(f=On(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Yu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?On(_):ar,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(vf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&xf.enqueueReplaceState(f,f.state,null),So(n,o,f,u),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,G=Is(a,R);f.props=G;var oe=f.context,ve=a.contextType;_=ar,typeof ve=="object"&&ve!==null&&(_=On(ve));var Ee=a.getDerivedStateFromProps;ve=typeof Ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||oe!==_)&&ig(n,f,o,_),Va=!1;var fe=n.memoizedState;f.state=fe,So(n,o,f,u),xo(),oe=n.memoizedState,R||fe!==oe||Va?(typeof Ee=="function"&&(vf(n,a,Ee,o),oe=n.memoizedState),(G=Va||ng(n,a,G,o,fe,oe,_))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=oe),f.props=o,f.state=oe,f.context=_,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Zu(t,n),_=n.memoizedProps,ve=Is(a,_),f.props=ve,Ee=n.pendingProps,fe=f.context,oe=a.contextType,G=ar,typeof oe=="object"&&oe!==null&&(G=On(oe)),R=a.getDerivedStateFromProps,(oe=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Ee||fe!==G)&&ig(n,f,o,G),Va=!1,fe=n.memoizedState,f.state=fe,So(n,o,f,u),xo();var he=n.memoizedState;_!==Ee||fe!==he||Va||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof R=="function"&&(vf(n,a,R,o),he=n.memoizedState),(ve=Va||ng(n,a,ve,o,fe,he,G)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(oe||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,he,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,he,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),f.props=o,f.state=he,f.context=G,o=ve):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,kl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Os(n,t.child,null,u),n.child=Os(n,null,a,u)):Pn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=pa(t,n,u),t}function vg(t,n,a,o){return Cs(),n.flags|=256,Pn(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(t){return{baseLanes:t,cachePool:om()}}function Tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=mi),t}function xg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(u?Wa(n):qa(),(t=$t)?(t=R0(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=jp(t),a.return=n,n.child=a,Nn=n,$t=null)):t=null,t===null)throw Ha(n);return oh(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(qa(),u=n.mode,R=Xl({mode:"hidden",children:R},u),o=Rs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(t,_,a),n.memoizedState=Ef,To(null,o)):(Wa(n),Af(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Wa(n),n.flags&=-257,n=Rf(t,n,a)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,n=null):(qa(),R=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),R=Rs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Os(n,t.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(t,_,a),n.memoizedState=Ef,n=To(null,o));else if(Wa(n),oh(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var oe=_.dgst;_=oe,o=Error(s(419)),o.stack="",o.digest=_,ho({value:o,source:null,stack:null}),n=Rf(t,n,a)}else if(vn||lr(t,n,a,!1),_=(a&t.childLanes)!==0,vn||_){if(_=Qt,_!==null&&(o=yn(_,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,As(t,o),ni(_,t,o),yf;rh(R)||$l(),n=Rf(t,n,a)}else rh(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,$t=Ci(R.nextSibling),Nn=n,At=!0,Fa=null,Ai=!1,t!==null&&tm(n,t),n=Af(n,o.children),n.flags|=4096);return n}return u?(qa(),R=o.fallback,u=n.mode,G=t.child,oe=G.sibling,o=la(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,oe!==null?R=la(oe,R):(R=Rs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,To(null,o),o=n.child,R=t.child.memoizedState,R===null?R=bf(a):(u=R.cachePool,u!==null?(G=gn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=om(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Tf(t,_,a),n.memoizedState=Ef,To(t.child,o)):(Wa(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Af(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=fi(22,t,null,n),t.lanes=0,t}function Rf(t,n,a){return Os(n,t.child,null,a),t=Af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Cf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function yg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=dn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,J(dn,_),Pn(t,n,o,a),o=At?fo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,a,n);else if(t.tag===19)Sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ul(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ul(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Cf(n,!0,a,null,f,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(lr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function nS(t,n,a){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Ga(n,gn,t.memoizedState.cache),Cs();break;case 27:case 5:et(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xg(t,n,a):(Wa(n),t=pa(t,n,a),t!==null?t.sibling:null);Wa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return yg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(dn,dn.current),o)break;return null;case 22:return n.lanes=0,dg(t,n,a,n.pendingProps);case 24:Ga(n,gn,t.memoizedState.cache)}return pa(t,n,a)}function Mg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!wf(t,a)&&(n.flags&128)===0)return vn=!1,nS(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,At&&(n.flags&1048576)!==0&&em(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Us(n.elementType),n.type=t,typeof t=="function")Nu(t)?(o=Is(t,o),n.tag=1,n=_g(null,n,t,o,a)):(n.tag=0,n=Mf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=ug(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=fg(null,n,t,o,a);break e}}throw n=te(t)||t,Error(s(306,n,""))}}return n;case 0:return Mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Is(o,n.pendingProps),_g(t,n,o,u,a);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Zu(t,n),So(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ga(n,gn,o),o!==f.cache&&Vu(n,[gn],a,!0),xo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=vg(t,n,o,a);break e}else if(o!==u){u=Ei(Error(s(424)),n),ho(u),n=vg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Ci(t.firstChild),Nn=n,At=!0,Fa=null,Ai=!0,a=dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Cs(),o===u){n=pa(t,n,a);break e}Pn(t,n,o,a)}n=n.child}return n;case 26:return kl(t,n),t===null?(a=N0(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=rc(ne.current).createElement(a),o[cn]=n,o[hn]=t,In(o,a,t),mn(o),n.stateNode=o):n.memoizedState=N0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&At&&(o=n.stateNode=D0(n.type,n.pendingProps,ne.current),Nn=n,Ai=!0,u=$t,es(n.type)?(lh=u,$t=Ci(o.firstChild)):$t=u),Pn(t,n,n.pendingProps.children,a),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((u=o=$t)&&(o=US(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,Nn=n,$t=Ci(o.firstChild),Ai=!1,u=!0):u=!1),u||Ha(n)),et(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,ih(u,f)?o=null:_!==null&&ih(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,Yx,null,null,a),Ho._currentValue=u),kl(t,n),Pn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=$t)&&(a=NS(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Nn=n,$t=null,t=!0):t=!1),t||Ha(n)),null;case 13:return xg(t,n,a);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Os(n,null,o,a):Pn(t,n,o,a),n.child;case 11:return ug(t,n,n.type,n.pendingProps,a);case 7:return Pn(t,n,n.pendingProps,a),n.child;case 8:return Pn(t,n,n.pendingProps.children,a),n.child;case 12:return Pn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Pn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ds(n),u=On(u),o=o(u),n.flags|=1,Pn(t,n,o,a),n.child;case 14:return fg(t,n,n.type,n.pendingProps,a);case 15:return hg(t,n,n.type,n.pendingProps,a);case 19:return yg(t,n,a);case 31:return tS(t,n,a);case 22:return dg(t,n,a,n.pendingProps);case 24:return Ds(n),o=On(gn),t===null?(u=Wu(),u===null&&(u=Qt,f=ku(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Yu(n),Ga(n,gn,u)):((t.lanes&a)!==0&&(Zu(t,n),So(n,null,null,a),xo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,gn,o)):(o=f.cache,Ga(n,gn,o),o!==u.cache&&Vu(n,[gn],a,!0))),Pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ma(t){t.flags|=4}function Df(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Kg())t.flags|=8192;else throw Ns=Cl,qu}else t.flags&=-16777217}function Eg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!z0(n))if(Kg())t.flags|=8192;else throw Ns=Cl,qu}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ae():536870912,t.lanes|=n,Sr|=n)}function Ao(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function iS(t,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),fa(gn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(or(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ma(n),f!==null?(en(n),Eg(n,f)):(en(n),Df(n,u,null,o,a))):f?f!==t.memoizedState?(ma(n),en(n),Eg(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ma(n),en(n),Df(n,u,t,o,a)),null;case 27:if(Ke(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ma(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=Se.current,or(n)?nm(n):(t=D0(u,o,a),n.stateNode=t,ma(n))}return en(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ma(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(f=Se.current,or(n))nm(n);else{var _=rc(ne.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[cn]=n,f[hn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(In(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ma(n)}}return en(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ma(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,or(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||x0(t.nodeValue,a)),t||Ha(n,!0)}else t=rc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=or(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=or(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Fu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),en(n),null);case 4:return Ge(),t===null&&jf(n.stateNode.containerInfo),en(n),null;case 10:return fa(n.type),en(n),null;case 19:if(B(dn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ao(o,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ul(t),f!==null){for(n.flags|=128,Ao(o,!1),t=f.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jp(a,t),a=a.sibling;return J(dn,dn.current&1|2),At&&ca(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ut()>Ql&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ul(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!At)return en(n),null}else 2*Ut()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ut(),t.sibling=null,a=dn.current,J(dn,u?a&1|2:a&1),At&&ca(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return di(n),ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&B(Ls),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(gn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function aS(t,n){switch(Bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(gn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(s(340));Cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return B(dn),null;case 4:return Ge(),null;case 10:return fa(n.type),null;case 22:case 23:return di(n),ju(),t!==null&&B(Ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(gn),null;case 25:return null;default:return null}}function bg(t,n){switch(Bu(n),n.tag){case 3:fa(gn),Ge();break;case 26:case 27:case 5:Ke(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:B(dn);break;case 10:fa(n.type);break;case 22:case 23:di(n),ju(),t!==null&&B(Ls);break;case 24:fa(gn)}}function Ro(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){Ht(n,n.return,R)}}function Ya(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var G=a,oe=R;try{oe()}catch(ve){Ht(u,G,ve)}}}o=o.next}while(o!==f)}}catch(ve){Ht(n,n.return,ve)}}function Tg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mm(n,a)}catch(o){Ht(t,t.return,o)}}}function Ag(t,n,a){a.props=Is(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function Co(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function qi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function Rg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Lf(t,n,a){try{var o=t.stateNode;AS(o,t.type,a,n),o[hn]=n}catch(u){Ht(t,t.return,u)}}function Cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&es(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&es(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ra));else if(o!==4&&(o===27&&es(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Nf(t,n,a),t=t.sibling;t!==null;)Nf(t,n,a),t=t.sibling}function ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&es(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ql(t,n,a),t=t.sibling;t!==null;)ql(t,n,a),t=t.sibling}function wg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);In(n,o,a),n[cn]=t,n[hn]=a}catch(f){Ht(t,t.return,f)}}var ga=!1,xn=!1,Of=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function sS(t,n){if(t=t.containerInfo,th=dc,t=Vp(t),Au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,G=-1,oe=0,ve=0,Ee=t,fe=null;t:for(;;){for(var he;Ee!==a||u!==0&&Ee.nodeType!==3||(R=_+u),Ee!==f||o!==0&&Ee.nodeType!==3||(G=_+o),Ee.nodeType===3&&(_+=Ee.nodeValue.length),(he=Ee.firstChild)!==null;)fe=Ee,Ee=he;for(;;){if(Ee===t)break t;if(fe===a&&++oe===u&&(R=_),fe===f&&++ve===o&&(G=_),(he=Ee.nextSibling)!==null)break;Ee=fe,fe=Ee.parentNode}Ee=he}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:t,selectionRange:a},dc=!1,Cn=n;Cn!==null;)if(n=Cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Cn=t;else for(;Cn!==null;){switch(n=Cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var qe=Is(a.type,u);t=o.getSnapshotBeforeUpdate(qe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Cn=t;break}Cn=n.return}}function Lg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),o&4&&Ro(5,a);break;case 1:if(va(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ht(a,a.return,_)}else{var u=Is(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ht(a,a.return,_)}}o&64&&Tg(a),o&512&&Co(a,a.return);break;case 3:if(va(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mm(t,n)}catch(_){Ht(a,a.return,_)}}break;case 27:n===null&&o&4&&wg(a);case 26:case 5:va(t,a),n===null&&o&4&&Rg(a),o&512&&Co(a,a.return);break;case 12:va(t,a);break;case 31:va(t,a),o&4&&Og(t,a);break;case 13:va(t,a),o&4&&Pg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=pS.bind(null,a),OS(t,a))));break;case 22:if(o=a.memoizedState!==null||ga,!o){n=n!==null&&n.memoizedState!==null||xn,u=ga;var f=xn;ga=o,(xn=n)&&!f?xa(t,a,(a.subtreeFlags&8772)!==0):va(t,a),ga=u,xn=f}break;case 30:break;default:va(t,a)}}function Ug(t){var n=t.alternate;n!==null&&(t.alternate=null,Ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Oa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,jn=!1;function _a(t,n,a){for(a=a.child;a!==null;)Ng(t,n,a),a=a.sibling}function Ng(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:xn||qi(a,n),_a(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||qi(a,n);var o=on,u=jn;es(a.type)&&(on=a.stateNode,jn=!1),_a(t,n,a),Bo(a.stateNode),on=o,jn=u;break;case 5:xn||qi(a,n);case 6:if(o=on,u=jn,on=null,_a(t,n,a),on=o,jn=u,on!==null)if(jn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:on!==null&&(jn?(t=on,T0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Cr(t)):T0(on,a.stateNode));break;case 4:o=on,u=jn,on=a.stateNode.containerInfo,jn=!0,_a(t,n,a),on=o,jn=u;break;case 0:case 11:case 14:case 15:Ya(2,a,n),xn||Ya(4,a,n),_a(t,n,a);break;case 1:xn||(qi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ag(a,n,o)),_a(t,n,a);break;case 21:_a(t,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,_a(t,n,a),xn=o;break;default:_a(t,n,a)}}function Og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Cr(t)}catch(a){Ht(n,n.return,a)}}}function Pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Cr(t)}catch(a){Ht(n,n.return,a)}}function rS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Dg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Dg),n;default:throw Error(s(435,t.tag))}}function Yl(t,n){var a=rS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=mS.bind(null,t,o);o.then(u,u)}})}function $n(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(es(R.type)){on=R.stateNode,jn=!1;break e}break;case 5:on=R.stateNode,jn=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(on===null)throw Error(s(160));Ng(f,_,u),on=null,jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ig(n,t),n=n.sibling}var Pi=null;function Ig(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(n,t),ei(t),o&4&&(Ya(3,t,t.return),Ro(3,t),Ya(5,t,t.return));break;case 1:$n(n,t),ei(t),o&512&&(xn||a===null||qi(a,a.return)),o&64&&ga&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Pi;if($n(n,t),ei(t),o&512&&(xn||a===null||qi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Na]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),In(f,o,a),f[cn]=t,mn(f),o=f;break e;case"link":var _=I0("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),In(f,o,a),u.head.appendChild(f);break;case"meta":if(_=I0("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),In(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=t,mn(f),o=f}t.stateNode=o}else B0(u,t.type,t.stateNode);else t.stateNode=P0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?B0(u,t.type,t.stateNode):P0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Lf(t,t.memoizedProps,a.memoizedProps)}break;case 27:$n(n,t),ei(t),o&512&&(xn||a===null||qi(a,a.return)),a!==null&&o&4&&Lf(t,t.memoizedProps,a.memoizedProps);break;case 5:if($n(n,t),ei(t),o&512&&(xn||a===null||qi(a,a.return)),t.flags&32){u=t.stateNode;try{ci(u,"")}catch(qe){Ht(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Lf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if($n(n,t),ei(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Ht(t,t.return,qe)}}break;case 3:if(cc=null,u=Pi,Pi=oc(n.containerInfo),$n(n,t),Pi=u,ei(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(qe){Ht(t,t.return,qe)}Of&&(Of=!1,Bg(t));break;case 4:o=Pi,Pi=oc(t.stateNode.containerInfo),$n(n,t),ei(t),Pi=o;break;case 12:$n(n,t),ei(t);break;case 31:$n(n,t),ei(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 13:$n(n,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=Ut()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,oe=ga,ve=xn;if(ga=oe||u,xn=ve||G,$n(n,t),xn=ve,ga=oe,ei(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ga||xn||Bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=G.stateNode;var Ee=G.memoizedProps.style,fe=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;R.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(qe){Ht(G,G.return,qe)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(qe){Ht(G,G.return,qe)}}}else if(n.tag===18){if(a===null){G=n;try{var he=G.stateNode;u?A0(he,!0):A0(G.stateNode,!1)}catch(qe){Ht(G,G.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Yl(t,a))));break;case 19:$n(n,t),ei(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Yl(t,o)));break;case 30:break;case 21:break;default:$n(n,t),ei(t)}}function ei(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Cg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Uf(t);ql(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ci(_,""),a.flags&=-33);var R=Uf(t);ql(t,R,_);break;case 3:case 4:var G=a.stateNode.containerInfo,oe=Uf(t);Nf(t,oe,G);break;default:throw Error(s(161))}}catch(ve){Ht(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Bg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lg(t,n.alternate,n),n=n.sibling}function Bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),Bs(n);break;case 1:qi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ag(n,n.return,a),Bs(n);break;case 27:Bo(n.stateNode);case 26:case 5:qi(n,n.return),Bs(n);break;case 22:n.memoizedState===null&&Bs(n);break;case 30:Bs(n);break;default:Bs(n)}t=t.sibling}}function xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:xa(u,f,a),Ro(4,f);break;case 1:if(xa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){Ht(o,o.return,oe)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)pm(G[u],R)}catch(oe){Ht(o,o.return,oe)}}a&&_&64&&Tg(f),Co(f,f.return);break;case 27:wg(f);case 26:case 5:xa(u,f,a),a&&o===null&&_&4&&Rg(f),Co(f,f.return);break;case 12:xa(u,f,a);break;case 31:xa(u,f,a),a&&_&4&&Og(u,f);break;case 13:xa(u,f,a),a&&_&4&&Pg(u,f);break;case 22:f.memoizedState===null&&xa(u,f,a),Co(f,f.return);break;case 30:break;default:xa(u,f,a)}n=n.sibling}}function Pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&po(a))}function If(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t))}function Ii(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zg(t,n,a,o),n=n.sibling}function zg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(t,n,a,o),u&2048&&Ro(9,n);break;case 1:Ii(t,n,a,o);break;case 3:Ii(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&po(t)));break;case 12:if(u&2048){Ii(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Ht(n,n.return,G)}}else Ii(t,n,a,o);break;case 31:Ii(t,n,a,o);break;case 13:Ii(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ii(t,n,a,o):wo(t,n):f._visibility&2?Ii(t,n,a,o):(f._visibility|=2,_r(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(_,n);break;case 24:Ii(t,n,a,o),u&2048&&If(n.alternate,n);break;default:Ii(t,n,a,o)}}function _r(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,G=o,oe=_.flags;switch(_.tag){case 0:case 11:case 15:_r(f,_,R,G,u),Ro(8,_);break;case 23:break;case 22:var ve=_.stateNode;_.memoizedState!==null?ve._visibility&2?_r(f,_,R,G,u):wo(f,_):(ve._visibility|=2,_r(f,_,R,G,u)),u&&oe&2048&&Pf(_.alternate,_);break;case 24:_r(f,_,R,G,u),u&&oe&2048&&If(_.alternate,_);break;default:_r(f,_,R,G,u)}n=n.sibling}}function wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Pf(o.alternate,o);break;case 24:wo(a,o),u&2048&&If(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function vr(t,n,a){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)Fg(t,n,a),t=t.sibling}function Fg(t,n,a){switch(t.tag){case 26:vr(t,n,a),t.flags&Do&&t.memoizedState!==null&&qS(a,Pi,t.memoizedState,t.memoizedProps);break;case 5:vr(t,n,a);break;case 3:case 4:var o=Pi;Pi=oc(t.stateNode.containerInfo),vr(t,n,a),Pi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,vr(t,n,a),Do=o):vr(t,n,a));break;default:vr(t,n,a)}}function Hg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,Vg(o,t)}Hg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gg(t),t=t.sibling}function Gg(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Ya(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Zl(t)):Lo(t);break;default:Lo(t)}}function Zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,Vg(o,t)}Hg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}t=t.sibling}}function Vg(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Cn=o;else e:for(a=t;Cn!==null;){o=Cn;var u=o.sibling,f=o.return;if(Ug(o),o===a){Cn=null;break e}if(u!==null){u.return=f,Cn=u;break e}Cn=f}}}var oS={getCacheForType:function(t){var n=On(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return On(gn).controller.signal}},lS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Qt=null,yt=null,Et=0,Ft=0,pi=null,Za=!1,xr=!1,Bf=!1,Sa=0,fn=0,Ka=0,zs=0,zf=0,mi=0,Sr=0,Uo=null,ti=null,Ff=!1,Kl=0,kg=0,Ql=1/0,Jl=null,Qa=null,En=0,Ja=null,yr=null,ya=0,Hf=0,Gf=null,Xg=null,No=0,Vf=null;function gi(){return(Nt&2)!==0&&Et!==0?Et&-Et:P.T!==null?Zf():Hn()}function Wg(){if(mi===0)if((Et&536870912)===0||At){var t=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),mi=t}else mi=536870912;return t=hi.current,t!==null&&(t.flags|=32),mi}function ni(t,n,a){(t===Qt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(Mr(t,0),ja(t,Et,mi,!1)),Ae(t,a),((Nt&2)===0||t!==Qt)&&(t===Qt&&((Nt&2)===0&&(zs|=a),fn===4&&ja(t,Et,mi,!1)),Yi(t))}function qg(t,n,a){if((Nt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?fS(t,n):Xf(t,n,!0),f=o;do{if(u===0){xr&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!cS(a)){u=Xf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Uo;var G=R.current.memoizedState.isDehydrated;if(G&&(Mr(R,_).flags|=256),_=Xf(R,_,!1),_!==2){if(Bf&&!G){R.errorRecoveryDisabledLanes|=f,zs|=f,u=4;break e}f=ti,ti=u,f!==null&&(ti===null?ti=f:ti.push.apply(ti,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Mr(t,0),ja(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,mi,!Za);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-Ut(),10<u)){if(ja(o,n,mi,!Za),_e(o,0,!0)!==0)break e;ya=n,o.timeoutHandle=E0(Yg.bind(null,o,a,ti,Jl,Ff,n,mi,zs,Sr,Za,f,"Throttled",-0,0),u);break e}Yg(o,a,ti,Jl,Ff,n,mi,zs,Sr,Za,f,null,-0,0)}}break}while(!0);Yi(t)}function Yg(t,n,a,o,u,f,_,R,G,oe,ve,Ee,fe,he){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},Fg(n,f,Ee);var qe=(f&62914560)===f?Kl-Ut():(f&4194048)===f?kg-Ut():0;if(qe=YS(Ee,qe),qe!==null){ya=f,t.cancelPendingCommit=qe(t0.bind(null,t,n,f,a,o,u,_,R,G,ve,Ee,null,fe,he)),ja(t,f,_,!oe);return}}t0(t,n,f,a,o,u,_,R,G)}function cS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ui(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~zf,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&at(t,a,n)}function jl(){return(Nt&6)===0?(Oo(0),!1):!0}function kf(){if(yt!==null){if(Ft===0)var t=yt.return;else t=yt,ua=ws=null,sf(t),hr=null,go=0,t=yt;for(;t!==null;)bg(t.alternate,t),t=t.return;yt=null}}function Mr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,wS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ya=0,kf(),Qt=t,yt=a=la(t.current,null),Et=n,Ft=0,pi=null,Za=!1,xr=Ue(t,n),Bf=!1,Sr=mi=zf=zs=Ka=fn=0,ti=Uo=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),f=1<<u;n|=t[u],o&=~f}return Sa=n,xl(),a}function Zg(t,n){ht=null,P.H=bo,n===fr||n===Rl?(n=um(),Ft=3):n===qu?(n=um(),Ft=4):Ft=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,yt===null&&(fn=1,Gl(t,Ei(n,t.current)))}function Kg(){var t=hi.current;return t===null?!0:(Et&4194048)===Et?Ri===null:(Et&62914560)===Et||(Et&536870912)!==0?t===Ri:!1}function Qg(){var t=P.H;return P.H=bo,t===null?bo:t}function Jg(){var t=P.A;return P.A=oS,t}function $l(){fn=4,Za||(Et&4194048)!==Et&&hi.current!==null||(xr=!0),(Ka&134217727)===0&&(zs&134217727)===0||Qt===null||ja(Qt,Et,mi,!1)}function Xf(t,n,a){var o=Nt;Nt|=2;var u=Qg(),f=Jg();(Qt!==t||Et!==n)&&(Jl=null,Mr(t,n)),n=!1;var _=fn;e:do try{if(Ft!==0&&yt!==null){var R=yt,G=pi;switch(Ft){case 8:kf(),_=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var oe=Ft;if(Ft=0,pi=null,Er(t,R,G,oe),a&&xr){_=0;break e}break;default:oe=Ft,Ft=0,pi=null,Er(t,R,G,oe)}}uS(),_=fn;break}catch(ve){Zg(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ua=ws=null,Nt=o,P.H=u,P.A=f,yt===null&&(Qt=null,Et=0,xl()),_}function uS(){for(;yt!==null;)jg(yt)}function fS(t,n){var a=Nt;Nt|=2;var o=Qg(),u=Jg();Qt!==t||Et!==n?(Jl=null,Ql=Ut()+500,Mr(t,n)):xr=Ue(t,n);e:do try{if(Ft!==0&&yt!==null){n=yt;var f=pi;t:switch(Ft){case 1:Ft=0,pi=null,Er(t,n,f,1);break;case 2:case 9:if(lm(f)){Ft=0,pi=null,$g(n);break}n=function(){Ft!==2&&Ft!==9||Qt!==t||(Ft=7),Yi(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:lm(f)?(Ft=0,pi=null,$g(n)):(Ft=0,pi=null,Er(t,n,f,7));break;case 5:var _=null;switch(yt.tag){case 26:_=yt.memoizedState;case 5:case 27:var R=yt;if(_?z0(_):R.stateNode.complete){Ft=0,pi=null;var G=R.sibling;if(G!==null)yt=G;else{var oe=R.return;oe!==null?(yt=oe,ec(oe)):yt=null}break t}}Ft=0,pi=null,Er(t,n,f,5);break;case 6:Ft=0,pi=null,Er(t,n,f,6);break;case 8:kf(),fn=6;break e;default:throw Error(s(462))}}hS();break}catch(ve){Zg(t,ve)}while(!0);return ua=ws=null,P.H=o,P.A=u,Nt=a,yt!==null?0:(Qt=null,Et=0,xl(),fn)}function hS(){for(;yt!==null&&!an();)jg(yt)}function jg(t){var n=Mg(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?ec(t):yt=n}function $g(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=gg(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=gg(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:sf(n);default:bg(a,n),n=yt=Jp(n,Sa),n=Mg(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?ec(t):yt=n}function Er(t,n,a,o){ua=ws=null,sf(n),hr=null,go=0;var u=n.return;try{if(eS(t,u,n,a,Et)){fn=1,Gl(t,Ei(a,t.current)),yt=null;return}}catch(f){if(u!==null)throw yt=u,f;fn=1,Gl(t,Ei(a,t.current)),yt=null;return}n.flags&32768?(At||o===1?t=!0:xr||(Et&536870912)!==0?t=!1:(Za=t=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),e0(n,t)):ec(n)}function ec(t){var n=t;do{if((n.flags&32768)!==0){e0(n,Za);return}t=n.return;var a=iS(n.alternate,n,Sa);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);fn===0&&(fn=5)}function e0(t,n){do{var a=aS(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);fn=6,yt=null}function t0(t,n,a,o,u,f,_,R,G){t.cancelPendingCommit=null;do tc();while(En!==0);if((Nt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Lu,rt(t,a,f,_,R,G),t===Qt&&(yt=Qt=null,Et=0),yr=n,Ja=t,ya=a,Hf=f,Gf=u,Xg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gS(Q,function(){return r0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=z.p,z.p=2,_=Nt,Nt|=4;try{sS(t,n,a)}finally{Nt=_,z.p=u,P.T=o}}En=1,n0(),i0(),a0()}}function n0(){if(En===1){En=0;var t=Ja,n=yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=z.p;z.p=2;var u=Nt;Nt|=4;try{Ig(n,t);var f=nh,_=Vp(t.containerInfo),R=f.focusedElem,G=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Gp(R.ownerDocument.documentElement,R)){if(G!==null&&Au(R)){var oe=G.start,ve=G.end;if(ve===void 0&&(ve=oe),"selectionStart"in R)R.selectionStart=oe,R.selectionEnd=Math.min(ve,R.value.length);else{var Ee=R.ownerDocument||document,fe=Ee&&Ee.defaultView||window;if(fe.getSelection){var he=fe.getSelection(),qe=R.textContent.length,tt=Math.min(G.start,qe),qt=G.end===void 0?tt:Math.min(G.end,qe);!he.extend&&tt>qt&&(_=qt,qt=tt,tt=_);var $=Hp(R,tt),X=Hp(R,qt);if($&&X&&(he.rangeCount!==1||he.anchorNode!==$.node||he.anchorOffset!==$.offset||he.focusNode!==X.node||he.focusOffset!==X.offset)){var re=Ee.createRange();re.setStart($.node,$.offset),he.removeAllRanges(),tt>qt?(he.addRange(re),he.extend(X.node,X.offset)):(re.setEnd(X.node,X.offset),he.addRange(re))}}}}for(Ee=[],he=R;he=he.parentNode;)he.nodeType===1&&Ee.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var ye=Ee[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}dc=!!th,nh=th=null}finally{Nt=u,z.p=o,P.T=a}}t.current=n,En=2}}function i0(){if(En===2){En=0;var t=Ja,n=yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=z.p;z.p=2;var u=Nt;Nt|=4;try{Lg(t,n.alternate,n)}finally{Nt=u,z.p=o,P.T=a}}En=3}}function a0(){if(En===4||En===3){En=0,Y();var t=Ja,n=yr,a=ya,o=Xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,yr=Ja=null,s0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Qa=null),Un(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=z.p,z.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{P.T=n,z.p=u}}(ya&3)!==0&&tc(),Yi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Vf?No++:(No=0,Vf=t):No=0,Oo(0)}}function s0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,po(n)))}function tc(){return n0(),i0(),a0(),r0()}function r0(){if(En!==5)return!1;var t=Ja,n=Hf;Hf=0;var a=Un(ya),o=P.T,u=z.p;try{z.p=32>a?32:a,P.T=null,a=Gf,Gf=null;var f=Ja,_=ya;if(En=0,yr=Ja=null,ya=0,(Nt&6)!==0)throw Error(s(331));var R=Nt;if(Nt|=4,Gg(f.current),zg(f,f.current,_,a),Nt=R,Oo(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(pe,f)}catch{}return!0}finally{z.p=u,P.T=o,s0(t,n)}}function o0(t,n,a){n=Ei(a,n),n=Sf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(Ae(t,2),Yi(t))}function Ht(t,n,a){if(t.tag===3)o0(t,t,a);else for(;n!==null;){if(n.tag===3){o0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){t=Ei(a,t),a=lg(2),o=Xa(n,a,2),o!==null&&(cg(a,o,n,t),Ae(o,2),Yi(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new lS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),t=dS.bind(null,t,n,a),n.then(t,t))}function dS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(Et&a)===a&&(fn===4||fn===3&&(Et&62914560)===Et&&300>Ut()-Kl?(Nt&2)===0&&Mr(t,0):zf|=a,Sr===Et&&(Sr=0)),Yi(t)}function l0(t,n){n===0&&(n=ae()),t=As(t,n),t!==null&&(Ae(t,n),Yi(t))}function pS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),l0(t,a)}function mS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),l0(t,a)}function gS(t,n){return jt(t,n)}var nc=null,br=null,qf=!1,ic=!1,Yf=!1,$a=0;function Yi(t){t!==br&&t.next===null&&(br===null?nc=br=t:br=br.next=t),ic=!0,qf||(qf=!0,vS())}function Oo(t,n){if(!Yf&&ic){Yf=!0;do for(var a=!1,o=nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,h0(o,f))}else f=Et,f=_e(o,o===Qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ue(o,f)||(a=!0,h0(o,f));o=o.next}while(a);Yf=!1}}function _S(){c0()}function c0(){ic=qf=!1;var t=0;$a!==0&&CS()&&(t=$a);for(var n=Ut(),a=null,o=nc;o!==null;){var u=o.next,f=u0(o,n);f===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(br=a)):(a=o,(t!==0||(f&3)!==0)&&(ic=!0)),o=u}En!==0&&En!==5||Oo(t),$a!==0&&($a=0)}function u0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Be(f),R=1<<_,G=u[_];G===-1?((R&a)===0||(R&o)!==0)&&(u[_]=ze(R,n)):G<=n&&(t.expiredLanes|=R),f&=~R}if(n=Qt,a=Et,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&kt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&kt(o),Un(a)){case 2:case 8:a=y;break;case 32:a=Q;break;case 268435456:a=de;break;default:a=Q}return o=f0.bind(null,t),a=jt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&kt(o),t.callbackPriority=2,t.callbackNode=null,2}function f0(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var o=Et;return o=_e(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(qg(t,o,n),u0(t,Ut()),t.callbackNode!=null&&t.callbackNode===a?f0.bind(null,t):null)}function h0(t,n){if(tc())return null;qg(t,n,!0)}function vS(){DS(function(){(Nt&6)!==0?jt(L,_S):c0()})}function Zf(){if($a===0){var t=cr;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),$a=t}return $a}function d0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ms(""+t)}function p0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function xS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=d0((u[hn]||null).action),_=o.submitter;_&&(n=(n=_[hn]||null)?d0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new ml("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var G=_?p0(u,_):new FormData(u);pf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=_?p0(u,_):new FormData(u),pf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Kf=0;Kf<Du.length;Kf++){var Qf=Du[Kf],SS=Qf.toLowerCase(),yS=Qf[0].toUpperCase()+Qf.slice(1);Oi(SS,"on"+yS)}Oi(Wp,"onAnimationEnd"),Oi(qp,"onAnimationIteration"),Oi(Yp,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(Bx,"onTransitionRun"),Oi(zx,"onTransitionStart"),Oi(Fx,"onTransitionCancel"),Oi(Zp,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function m0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],G=R.instance,oe=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=oe;try{f(u)}catch(ve){vl(ve)}u.currentTarget=null,f=G}else for(_=0;_<o.length;_++){if(R=o[_],G=R.instance,oe=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=oe;try{f(u)}catch(ve){vl(ve)}u.currentTarget=null,f=G}}}}function Mt(t,n){var a=n[xs];a===void 0&&(a=n[xs]=new Set);var o=t+"__bubble";a.has(o)||(g0(n,t,2,!1),a.add(o))}function Jf(t,n,a){var o=0;n&&(o|=4),g0(a,t,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function jf(t){if(!t[ac]){t[ac]=!0,fl.forEach(function(a){a!=="selectionchange"&&(MS.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,Jf("selectionchange",!1,n))}}function g0(t,n,a,o){switch(W0(n)){case 2:var u=QS;break;case 8:u=JS;break;default:u=dh}a=u.bind(null,n,a,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=aa(R),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){o=f=_;continue e}R=R.parentNode}}o=o.return}yp(function(){var oe=f,ve=mu(a),Ee=[];e:{var fe=Kp.get(t);if(fe!==void 0){var he=ml,qe=t;switch(t){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":he=mx;break;case"focusin":qe="focus",he=yu;break;case"focusout":qe="blur",he=yu;break;case"beforeblur":case"afterblur":he=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=vx;break;case Wp:case qp:case Yp:he=rx;break;case Zp:he=Sx;break;case"scroll":case"scrollend":he=tx;break;case"wheel":he=Mx;break;case"copy":case"cut":case"paste":he=lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Ap;break;case"toggle":case"beforetoggle":he=bx}var tt=(n&4)!==0,qt=!tt&&(t==="scroll"||t==="scrollend"),$=tt?fe!==null?fe+"Capture":null:fe;tt=[];for(var X=oe,re;X!==null;){var ye=X;if(re=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||re===null||$===null||(ye=no(X,$),ye!=null&&tt.push(Io(X,ye,re))),qt)break;X=X.return}0<tt.length&&(fe=new he(fe,qe,null,a,ve),Ee.push({event:fe,listeners:tt}))}}if((n&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",fe&&a!==pu&&(qe=a.relatedTarget||a.fromElement)&&(aa(qe)||qe[Gn]))break e;if((he||fe)&&(fe=ve.window===ve?ve:(fe=ve.ownerDocument)?fe.defaultView||fe.parentWindow:window,he?(qe=a.relatedTarget||a.toElement,he=oe,qe=qe?aa(qe):null,qe!==null&&(qt=c(qe),tt=qe.tag,qe!==qt||tt!==5&&tt!==27&&tt!==6)&&(qe=null)):(he=null,qe=oe),he!==qe)){if(tt=bp,ye="onMouseLeave",$="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Ap,ye="onPointerLeave",$="onPointerEnter",X="pointer"),qt=he==null?fe:ys(he),re=qe==null?fe:ys(qe),fe=new tt(ye,X+"leave",he,a,ve),fe.target=qt,fe.relatedTarget=re,ye=null,aa(ve)===oe&&(tt=new tt($,X+"enter",qe,a,ve),tt.target=re,tt.relatedTarget=qt,ye=tt),qt=ye,he&&qe)t:{for(tt=ES,$=he,X=qe,re=0,ye=$;ye;ye=tt(ye))re++;ye=0;for(var $e=X;$e;$e=tt($e))ye++;for(;0<re-ye;)$=tt($),re--;for(;0<ye-re;)X=tt(X),ye--;for(;re--;){if($===X||X!==null&&$===X.alternate){tt=$;break t}$=tt($),X=tt(X)}tt=null}else tt=null;he!==null&&_0(Ee,fe,he,tt,!1),qe!==null&&qt!==null&&_0(Ee,qt,qe,tt,!0)}}e:{if(fe=oe?ys(oe):window,he=fe.nodeName&&fe.nodeName.toLowerCase(),he==="select"||he==="input"&&fe.type==="file")var Dt=Op;else if(Up(fe))if(Pp)Dt=Ox;else{Dt=Ux;var Ye=Lx}else he=fe.nodeName,!he||he.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?oe&&Ot(oe.elementType)&&(Dt=Op):Dt=Nx;if(Dt&&(Dt=Dt(t,oe))){Np(Ee,Dt,a,ve);break e}Ye&&Ye(t,fe,oe),t==="focusout"&&oe&&fe.type==="number"&&oe.memoizedProps.value!=null&&St(fe,"number",fe.value)}switch(Ye=oe?ys(oe):window,t){case"focusin":(Up(Ye)||Ye.contentEditable==="true")&&(tr=Ye,Ru=oe,uo=null);break;case"focusout":uo=Ru=tr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,kp(Ee,a,ve);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":kp(Ee,a,ve)}var dt;if(Eu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else er?Dp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Rp&&a.locale!=="ko"&&(er||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&er&&(dt=Mp()):(Ba=ve,vu="value"in Ba?Ba.value:Ba.textContent,er=!0)),Ye=sc(oe,bt),0<Ye.length&&(bt=new Tp(bt,t,null,a,ve),Ee.push({event:bt,listeners:Ye}),dt?bt.data=dt:(dt=Lp(a),dt!==null&&(bt.data=dt)))),(dt=Ax?Rx(t,a):Cx(t,a))&&(bt=sc(oe,"onBeforeInput"),0<bt.length&&(Ye=new Tp("onBeforeInput","beforeinput",null,a,ve),Ee.push({event:Ye,listeners:bt}),Ye.data=dt)),xS(Ee,t,oe,a,ve)}m0(Ee,n)})}function Io(t,n,a){return{instance:t,listener:n,currentTarget:a}}function sc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=no(t,a),u!=null&&o.unshift(Io(t,u,f)),u=no(t,n),u!=null&&o.push(Io(t,u,f))),t.tag===3)return o;t=t.return}return[]}function ES(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _0(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,G=R.alternate,oe=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||oe===null||(G=oe,u?(oe=no(a,f),oe!=null&&_.unshift(Io(a,oe,G))):u||(oe=no(a,f),oe!=null&&_.push(Io(a,oe,G)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var bS=/\r\n?/g,TS=/\u0000|\uFFFD/g;function v0(t){return(typeof t=="string"?t:""+t).replace(bS,`
`).replace(TS,"")}function x0(t,n){return n=v0(n),v0(t)===n}function Wt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ci(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ci(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Ni(t,o,f);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ms(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ms(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ra);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ms(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ki.get(a)||a,Ie(t,a,o))}}function eh(t,n,a,o,u,f){switch(a){case"style":Ni(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ci(t,o):(typeof o=="number"||typeof o=="bigint")&&ci(t,""+o);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ie(t,a,o)}}}function In(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,f,_,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":Mt("invalid",t);var R=f=_=u=null,G=null,oe=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":_=ve;break;case"checked":G=ve;break;case"defaultChecked":oe=ve;break;case"value":f=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:Wt(t,n,o,ve,a,null)}}Vn(t,f,R,G,oe,_,u,!1);return;case"select":Mt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Wt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?Mn(t,!!o,n,!1):a!=null&&Mn(t,!!o,a,!0);return;case"textarea":Mt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Wt(t,n,_,R,a,null)}Ui(t,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,G,o,a,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(o=0;o<Po.length;o++)Mt(Po[o],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(o=a[oe],o!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,oe,o,a,null)}return;default:if(Ot(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&eh(t,n,ve,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Wt(t,n,R,o,a,null))}function AS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,G=null,oe=null,ve=null;for(he in a){var Ee=a[he];if(a.hasOwnProperty(he)&&Ee!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":G=Ee;default:o.hasOwnProperty(he)||Wt(t,n,he,null,o,Ee)}}for(var fe in o){var he=o[fe];if(Ee=a[fe],o.hasOwnProperty(fe)&&(he!=null||Ee!=null))switch(fe){case"type":f=he;break;case"name":u=he;break;case"checked":oe=he;break;case"defaultChecked":ve=he;break;case"value":_=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==Ee&&Wt(t,n,fe,he,o,Ee)}}Ve(t,_,R,G,oe,ve,f,u);return;case"select":he=_=R=fe=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":he=G;default:o.hasOwnProperty(f)||Wt(t,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":fe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==G&&Wt(t,n,u,f,o,G)}n=R,a=_,o=he,fe!=null?Mn(t,!!a,fe,!1):!!o!=!!a&&(n!=null?Mn(t,!!a,n,!0):Mn(t,!!a,a?[]:"",!1));return;case"textarea":he=fe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":fe=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Wt(t,n,_,u,o,f)}li(t,fe,he);return;case"option":for(var qe in a)if(fe=a[qe],a.hasOwnProperty(qe)&&fe!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Wt(t,n,qe,null,o,fe)}for(G in o)if(fe=o[G],he=a[G],o.hasOwnProperty(G)&&fe!==he&&(fe!=null||he!=null))switch(G){case"selected":t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Wt(t,n,G,fe,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)fe=a[tt],a.hasOwnProperty(tt)&&fe!=null&&!o.hasOwnProperty(tt)&&Wt(t,n,tt,null,o,fe);for(oe in o)if(fe=o[oe],he=a[oe],o.hasOwnProperty(oe)&&fe!==he&&(fe!=null||he!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Wt(t,n,oe,fe,o,he)}return;default:if(Ot(n)){for(var qt in a)fe=a[qt],a.hasOwnProperty(qt)&&fe!==void 0&&!o.hasOwnProperty(qt)&&eh(t,n,qt,void 0,o,fe);for(ve in o)fe=o[ve],he=a[ve],!o.hasOwnProperty(ve)||fe===he||fe===void 0&&he===void 0||eh(t,n,ve,fe,o,he);return}}for(var $ in a)fe=a[$],a.hasOwnProperty($)&&fe!=null&&!o.hasOwnProperty($)&&Wt(t,n,$,null,o,fe);for(Ee in o)fe=o[Ee],he=a[Ee],!o.hasOwnProperty(Ee)||fe===he||fe==null&&he==null||Wt(t,n,Ee,fe,o,he)}function S0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function RS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&S0(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],oe=G.startTime;if(oe>R)break;var ve=G.transferSize,Ee=G.initiatorType;ve&&S0(Ee)&&(G=G.responseEnd,_+=ve*(G<R?1:(R-oe)/(G-oe)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var th=null,nh=null;function rc(t){return t.nodeType===9?t:t.ownerDocument}function y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ih(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function CS(){var t=window.event;return t&&t.type==="popstate"?t===ah?!1:(ah=t,!0):(ah=null,!1)}var E0=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(t){return b0.resolve(null).then(t).catch(LS)}:E0;function LS(t){setTimeout(function(){throw t})}function es(t){return t==="head"}function T0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Cr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Na]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Bo(t.ownerDocument.body);a=u}while(a);Cr(n)}function A0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),Oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function US(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function NS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function R0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function rh(t){return t.data==="$?"||t.data==="$~"}function oh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function OS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var lh=null;function C0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function w0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function D0(t,n,a){switch(n=rc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Oa(t)}var wi=new Map,L0=new Set;function oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=z.d;z.d={f:PS,r:IS,D:BS,C:zS,L:FS,m:HS,X:VS,S:GS,M:kS};function PS(){var t=Ma.f(),n=jl();return t||n}function IS(t){var n=sa(t);n!==null&&n.tag===5&&n.type==="form"?Zm(n):Ma.r(t)}var Tr=typeof document>"u"?null:document;function U0(t,n,a){var o=Tr;if(o&&typeof n=="string"&&n){var u=Bt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),L0.has(u)||(L0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),In(n,"link",t),mn(n),o.head.appendChild(n)))}}function BS(t){Ma.D(t),U0("dns-prefetch",t,null)}function zS(t,n){Ma.C(t,n),U0("preconnect",t,n)}function FS(t,n,a){Ma.L(t,n,a);var o=Tr;if(o&&t&&n){var u='link[rel="preload"][as="'+Bt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Bt(a.imageSizes)+'"]')):u+='[href="'+Bt(t)+'"]';var f=u;switch(n){case"style":f=Ar(t);break;case"script":f=Rr(t)}wi.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),In(n,"link",t),mn(n),o.head.appendChild(n)))}}function HS(t,n){Ma.m(t,n);var a=Tr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Rr(t)}if(!wi.has(f)&&(t=S({rel:"modulepreload",href:t},n),wi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),In(o,"link",t),mn(o),a.head.appendChild(o)}}}function GS(t,n,a){Ma.S(t,n,a);var o=Tr;if(o&&t){var u=Pa(o).hoistableStyles,f=Ar(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(zo(f)))R.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(f))&&ch(t,a);var G=_=o.createElement("link");mn(G),In(G,"link",t),G._p=new Promise(function(oe,ve){G.onload=oe,G.onerror=ve}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function VS(t,n){Ma.X(t,n);var a=Tr;if(a&&t){var o=Pa(a).hoistableScripts,u=Rr(t),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(t=S({src:t,async:!0},n),(n=wi.get(u))&&uh(t,n),f=a.createElement("script"),mn(f),In(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function kS(t,n){Ma.M(t,n);var a=Tr;if(a&&t){var o=Pa(a).hoistableScripts,u=Rr(t),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=wi.get(u))&&uh(t,n),f=a.createElement("script"),mn(f),In(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function N0(t,n,a,o){var u=(u=ne.current)?oc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ar(a.href),a=Pa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ar(a.href);var f=Pa(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(zo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),wi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,a),f||XS(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rr(a),a=Pa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ar(t){return'href="'+Bt(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function O0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function XS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),In(n,"link",a),mn(n),t.head.appendChild(n))}function Rr(t){return'[src="'+Bt(t)+'"]'}function Fo(t){return"script[async]"+t}function P0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Bt(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),mn(o),In(o,"style",u),lc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ar(a.href);var f=t.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,mn(f),f;o=O0(a),(u=wi.get(u))&&ch(o,u),f=(t.ownerDocument||t).createElement("link"),mn(f);var _=f;return _._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),In(f,"link",o),n.state.loading|=4,lc(f,a.precedence,t),n.instance=f;case"script":return f=Rr(a.src),(u=t.querySelector(Fo(f)))?(n.instance=u,mn(u),u):(o=a,(u=wi.get(f))&&(o=S({},a),uh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),mn(u),In(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,t));return n.instance}function lc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var cc=null;function I0(t,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Na]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function B0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function WS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function z0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ar(o.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=uc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,mn(f);return}f=n.ownerDocument||n,o=O0(o),(u=wi.get(u))&&ch(o,u),f=f.createElement("link"),mn(f);var _=f;_._p=new Promise(function(R,G){_.onload=R,_.onerror=G}),In(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=uc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var fh=0;function YS(t,n){return t.stylesheets&&t.count===0&&hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&hc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&fh===0&&(fh=62500*RS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&hc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>fh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fc=null;function hc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fc=new Map,n.forEach(ZS,t),fc=null,uc.call(t))}function ZS(t,n){if(!(n.state.loading&4)){var a=fc.get(t);if(a)var o=a.get(null);else{a=new Map,fc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ho={$$typeof:H,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function KS(t,n,a,o,u,f,_,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function F0(t,n,a,o,u,f,_,R,G,oe,ve,Ee){return t=new KS(t,n,a,_,G,oe,ve,Ee,R),n=1,f===!0&&(n|=24),f=fi(3,null,null,n),t.current=f,f.stateNode=t,n=ku(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Yu(f),t}function H0(t){return t?(t=ar,t):ar}function G0(t,n,a,o,u,f){u=H0(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Xa(t,o,n),a!==null&&(ni(a,t,n),vo(a,t,n))}function V0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hh(t,n){V0(t,n),(t=t.alternate)&&V0(t,n)}function k0(t){if(t.tag===13||t.tag===31){var n=As(t,67108864);n!==null&&ni(n,t,67108864),hh(t,67108864)}}function X0(t){if(t.tag===13||t.tag===31){var n=gi();n=Ln(n);var a=As(t,n);a!==null&&ni(a,t,n),hh(t,n)}}var dc=!0;function QS(t,n,a,o){var u=P.T;P.T=null;var f=z.p;try{z.p=2,dh(t,n,a,o)}finally{z.p=f,P.T=u}}function JS(t,n,a,o){var u=P.T;P.T=null;var f=z.p;try{z.p=8,dh(t,n,a,o)}finally{z.p=f,P.T=u}}function dh(t,n,a,o){if(dc){var u=ph(o);if(u===null)$f(t,n,o,pc,a),q0(t,o);else if($S(u,t,n,a,o))o.stopPropagation();else if(q0(t,o),n&4&&-1<jS.indexOf(t)){for(;u!==null;){var f=sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Le(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var G=1<<31-Be(_);R.entanglements[1]|=G,_&=~G}Yi(f),(Nt&6)===0&&(Ql=Ut()+500,Oo(0))}}break;case 31:case 13:R=As(f,2),R!==null&&ni(R,f,2),jl(),hh(f,2)}if(f=ph(o),f===null&&$f(t,n,o,pc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function ph(t){return t=mu(t),mh(t)}var pc=null;function mh(t){if(pc=null,t=aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return pc=t,null}function W0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tt()){case L:return 2;case y:return 8;case Q:case se:return 32;case de:return 268435456;default:return 32}default:return 32}}var gh=!1,ts=null,ns=null,is=null,Go=new Map,Vo=new Map,as=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q0(t,n){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=sa(n),n!==null&&k0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function $S(t,n,a,o,u){switch(n){case"focusin":return ts=ko(ts,t,n,a,o,u),!0;case"dragenter":return ns=ko(ns,t,n,a,o,u),!0;case"mouseover":return is=ko(is,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Go.set(f,ko(Go.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Vo.set(f,ko(Vo.get(f)||null,t,n,a,o,u)),!0}return!1}function Y0(t){var n=aa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Rn(t.priority,function(){X0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Rn(t.priority,function(){X0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ph(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=sa(a),n!==null&&k0(n),t.blockedOn=a,!1;n.shift()}return!0}function Z0(t,n,a){mc(t)&&a.delete(n)}function ey(){gh=!1,ts!==null&&mc(ts)&&(ts=null),ns!==null&&mc(ns)&&(ns=null),is!==null&&mc(is)&&(is=null),Go.forEach(Z0),Vo.forEach(Z0)}function gc(t,n){t.blockedOn===n&&(t.blockedOn=null,gh||(gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ey)))}var _c=null;function K0(t){_c!==t&&(_c=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===t&&(_c=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(mh(o||a)===null)continue;break}var f=sa(a);f!==null&&(t.splice(n,3),n-=3,pf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(t){function n(G){return gc(G,t)}ts!==null&&gc(ts,t),ns!==null&&gc(ns,t),is!==null&&gc(is,t),Go.forEach(n),Vo.forEach(n);for(var a=0;a<as.length;a++){var o=as[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)Y0(a),a.blockedOn===null&&as.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[hn]||null;if(typeof f=="function")_||K0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[hn]||null)R=_.formAction;else if(mh(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),K0(a)}}}function Q0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _h(t){this._internalRoot=t}vc.prototype.render=_h.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=gi();G0(a,o,t,n,null,null)},vc.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;G0(t.current,2,null,t,null,null),jl(),n[Gn]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,t),a===0&&Y0(t)}};var J0=e.version;if(J0!=="19.2.1")throw Error(s(527,J0,"19.2.1"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var ty={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{pe=xc.inject(ty),me=xc}catch{}}return Xo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=ag,f=sg,_=rg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=F0(t,1,!1,null,null,a,o,null,u,f,_,Q0),t[Gn]=n.current,jf(t),new _h(n)},Xo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=ag,_=sg,R=rg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=F0(t,1,!0,n,a??null,o,u,G,f,_,R,Q0),n.context=H0(null),a=n.current,o=gi(),o=Ln(o),u=ka(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,Ae(n,a),Yi(n),t[Gn]=n.current,jf(t),new vc(n)},Xo.version="19.2.1",Xo}var s_;function cy(){if(s_)return xh.exports;s_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xh.exports=ly(),xh.exports}var uy=cy();const tp="185",qr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fy=0,r_=1,hy=2,Kc=1,dy=2,$o=3,ms=0,ri=1,Hi=2,wa=0,Yr=1,o_=2,l_=3,c_=4,py=5,ks=100,my=101,gy=102,_y=103,vy=104,xy=200,Sy=201,yy=202,My=203,od=204,ld=205,Ey=206,by=207,Ty=208,Ay=209,Ry=210,Cy=211,wy=212,Dy=213,Ly=214,cd=0,ud=1,fd=2,Qr=3,hd=4,dd=5,pd=6,md=7,vv=0,Uy=1,Ny=2,$i=0,xv=1,Sv=2,yv=3,np=4,Mv=5,Ev=6,bv=7,Tv=300,Qs=301,Jr=302,Eh=303,bh=304,cu=306,gd=1e3,Ca=1001,_d=1002,zn=1003,Oy=1004,Sc=1005,qn=1006,Th=1007,qs=1008,yi=1009,Av=1010,Rv=1011,il=1012,ip=1013,na=1014,Ji=1015,La=1016,ap=1017,sp=1018,al=1020,Cv=35902,wv=35899,Dv=1021,Lv=1022,Vi=1023,Ua=1026,Ys=1027,Uv=1028,rp=1029,Js=1030,op=1031,lp=1033,Qc=33776,Jc=33777,jc=33778,$c=33779,vd=35840,xd=35841,Sd=35842,yd=35843,Md=36196,Ed=37492,bd=37496,Td=37488,Ad=37489,nu=37490,Rd=37491,Cd=37808,wd=37809,Dd=37810,Ld=37811,Ud=37812,Nd=37813,Od=37814,Pd=37815,Id=37816,Bd=37817,zd=37818,Fd=37819,Hd=37820,Gd=37821,Vd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,iu=36285,Yd=36286,Py=3200,Zd=0,Iy=1,ds="",xi="srgb",au="srgb-linear",su="linear",Gt="srgb",wr=7680,u_=519,By=512,zy=513,Fy=514,cp=515,Hy=516,Gy=517,up=518,Vy=519,f_=35044,h_="300 es",ji=2e3,sl=2001;function ky(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xy(){const r=ru("canvas");return r.style.display="block",r}const d_={};function p_(...r){const e="THREE."+r.shift();console.log(e,...r)}function Nv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function it(...r){r=Nv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Ct(...r){r=Nv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Zr(...r){const e=r.join(" ");e in d_||(d_[e]=!0,it(...r))}function Wy(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const qy={[cd]:ud,[fd]:pd,[hd]:md,[Qr]:dd,[ud]:cd,[pd]:fd,[md]:hd,[dd]:Qr};class vs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=Math.PI/180,Kd=180/Math.PI;function rl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[i&63|128]+Xn[i>>8&255]+"-"+Xn[i>>16&255]+Xn[i>>24&255]+Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]).toLowerCase()}function _t(r,e,i){return Math.max(e,Math.min(i,r))}function Yy(r,e){return(r%e+e)%e}function Ah(r,e,i){return(1-i)*r+i*e}function Wo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zy={DEG2RAD:tl};class st{static{st.prototype.isVector2=!0}constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],S=s[l+3],g=c[h+0],E=c[h+1],T=c[h+2],w=c[h+3];if(S!==w||m!==g||d!==E||v!==T){let M=m*g+d*E+v*T+S*w;M<0&&(g=-g,E=-E,T=-T,w=-w,M=-M);let x=1-p;if(M<.9995){const F=Math.acos(M),H=Math.sin(F);x=Math.sin(x*F)/H,p=Math.sin(p*F)/H,m=m*x+g*p,d=d*x+E*p,v=v*x+T*p,S=S*x+w*p}else{m=m*x+g*p,d=d*x+E*p,v=v*x+T*p,S=S*x+w*p;const F=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=F,d*=F,v*=F,S*=F}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],S=c[h],g=c[h+1],E=c[h+2],T=c[h+3];return e[i]=p*T+v*S+m*E-d*g,e[i+1]=m*T+v*g+d*S-p*E,e[i+2]=d*T+v*E+p*g-m*S,e[i+3]=v*T-p*S-m*g-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),S=p(c/2),g=m(s/2),E=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*v*S+d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S-g*E*T;break;case"YXZ":this._x=g*v*S+d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S+g*E*T;break;case"ZXY":this._x=g*v*S-d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S-g*E*T;break;case"ZYX":this._x=g*v*S-d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S+g*E*T;break;case"YZX":this._x=g*v*S+d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S-g*E*T;break;case"XZY":this._x=g*v*S-d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S+g*E*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],g=s+p+S;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(s>p&&s>S){const E=2*Math.sqrt(1+s-p-S);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>S){const E=2*Math.sqrt(1+p-s-S);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+S-s-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-s*d,this._z=c*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{static{j.prototype.isVector3=!0}constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(m_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(m_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),v=2*(p*i-c*l),S=2*(c*s-h*i);return this.x=i+m*d+h*S-p*v,this.y=s+m*v+p*d-c*S,this.z=l+m*S+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rh=new j,m_=new gs;class lt{static{lt.prototype.isMatrix3=!0}constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],S=s[7],g=s[2],E=s[5],T=s[8],w=l[0],M=l[3],x=l[6],F=l[1],H=l[4],C=l[7],I=l[2],U=l[5],O=l[8];return c[0]=h*w+p*F+m*I,c[3]=h*M+p*H+m*U,c[6]=h*x+p*C+m*O,c[1]=d*w+v*F+S*I,c[4]=d*M+v*H+S*U,c[7]=d*x+v*C+S*O,c[2]=g*w+E*F+T*I,c[5]=g*M+E*H+T*U,c[8]=g*x+E*C+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-s*c*v+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=v*h-p*d,g=p*m-v*c,E=d*c-h*m,T=i*S+s*g+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=S*w,e[1]=(l*d-v*s)*w,e[2]=(p*s-l*h)*w,e[3]=g*w,e[4]=(v*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=E*w,e[7]=(s*m-d*i)*w,e[8]=(h*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return Zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ch.makeScale(e,i)),this}rotate(e){return Zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ch.makeRotation(-e)),this}translate(e,i){return Zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ch.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ch=new lt,g_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),__=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ky(){const r={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Gt&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Gt&&(l.r=Kr(l.r),l.g=Kr(l.g),l.b=Kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[au]:{primaries:e,whitePoint:s,transfer:su,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:s,transfer:Gt,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),r}const Rt=Ky();function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class Qy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Dr===void 0&&(Dr=ru("canvas")),Dr.width=e.width,Dr.height=e.height;const l=Dr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Dr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ru("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Da(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jy=0;class fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(wh(l[h].image)):c.push(wh(l[h]))}else c=wh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function wh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let jy=0;const Dh=new j;class Qn extends vs{constructor(e=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,s=Ca,l=Ca,c=qn,h=qs,p=Vi,m=yi,d=Qn.DEFAULT_ANISOTROPY,v=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=rl(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Ca:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Ca:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Tv;Qn.DEFAULT_ANISOTROPY=1;class ln{static{ln.prototype.isVector4=!0}constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],v=m[4],S=m[8],g=m[1],E=m[5],T=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+w)<.1&&Math.abs(T+M)<.1&&Math.abs(d+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(d+1)/2,C=(E+1)/2,I=(x+1)/2,U=(v+g)/4,O=(S+w)/4,b=(T+M)/4;return H>C&&H>I?H<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(H),l=U/s,c=O/s):C>I?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=U/l,c=b/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=O/c,l=b/c),this.set(s,l,c,i),this}let F=Math.sqrt((M-T)*(M-T)+(S-w)*(S-w)+(g-v)*(g-v));return Math.abs(F)<.001&&(F=1),this.x=(M-T)/F,this.y=(S-w)/F,this.z=(g-v)/F,this.w=Math.acos((d+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends vs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Qn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new fp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends $y{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ov extends Qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends Qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{static{tn.prototype.isMatrix4=!0}constructor(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,M)}set(e,i,s,l,c,h,p,m,d,v,S,g,E,T,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=S,x[14]=g,x[3]=E,x[7]=T,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Lr.setFromMatrixColumn(e,0).length(),c=1/Lr.setFromMatrixColumn(e,1).length(),h=1/Lr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=h*v,E=h*S,T=p*v,w=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=E+T*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=T+E*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*v,E=m*S,T=d*v,w=d*S;i[0]=g+w*p,i[4]=T*p-E,i[8]=h*d,i[1]=h*S,i[5]=h*v,i[9]=-p,i[2]=E*p-T,i[6]=w+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*v,E=m*S,T=d*v,w=d*S;i[0]=g-w*p,i[4]=-h*S,i[8]=T+E*p,i[1]=E+T*p,i[5]=h*v,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*v,E=h*S,T=p*v,w=p*S;i[0]=m*v,i[4]=T*d-E,i[8]=g*d+w,i[1]=m*S,i[5]=w*d+g,i[9]=E*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,E=h*d,T=p*m,w=p*d;i[0]=m*v,i[4]=w-g*S,i[8]=T*S+E,i[1]=S,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*S+T,i[10]=g-w*S}else if(e.order==="XZY"){const g=h*m,E=h*d,T=p*m,w=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=g*S+w,i[5]=h*v,i[9]=E*S-T,i[2]=T*S-E,i[6]=p*v,i[10]=w*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,nM)}lookAt(e,i,s){const l=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),rs.crossVectors(s,_i),rs.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),rs.crossVectors(s,_i)),rs.normalize(),yc.crossVectors(_i,rs),l[0]=rs.x,l[4]=yc.x,l[8]=_i.x,l[1]=rs.y,l[5]=yc.y,l[9]=_i.y,l[2]=rs.z,l[6]=yc.z,l[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],S=s[5],g=s[9],E=s[13],T=s[2],w=s[6],M=s[10],x=s[14],F=s[3],H=s[7],C=s[11],I=s[15],U=l[0],O=l[4],b=l[8],D=l[12],k=l[1],V=l[5],q=l[9],ee=l[13],te=l[2],K=l[6],P=l[10],z=l[14],ie=l[3],ge=l[7],Me=l[11],N=l[15];return c[0]=h*U+p*k+m*te+d*ie,c[4]=h*O+p*V+m*K+d*ge,c[8]=h*b+p*q+m*P+d*Me,c[12]=h*D+p*ee+m*z+d*N,c[1]=v*U+S*k+g*te+E*ie,c[5]=v*O+S*V+g*K+E*ge,c[9]=v*b+S*q+g*P+E*Me,c[13]=v*D+S*ee+g*z+E*N,c[2]=T*U+w*k+M*te+x*ie,c[6]=T*O+w*V+M*K+x*ge,c[10]=T*b+w*q+M*P+x*Me,c[14]=T*D+w*ee+M*z+x*N,c[3]=F*U+H*k+C*te+I*ie,c[7]=F*O+H*V+C*K+I*ge,c[11]=F*b+H*q+C*P+I*Me,c[15]=F*D+H*ee+C*z+I*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],S=e[6],g=e[10],E=e[14],T=e[3],w=e[7],M=e[11],x=e[15],F=m*E-d*g,H=p*E-d*S,C=p*g-m*S,I=h*E-d*v,U=h*g-m*v,O=h*S-p*v;return i*(w*F-M*H+x*C)-s*(T*F-M*I+x*U)+l*(T*H-w*I+x*O)-c*(T*C-w*U+M*O)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],v=e[10];return i*(h*v-p*d)-s*(c*v-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=e[9],g=e[10],E=e[11],T=e[12],w=e[13],M=e[14],x=e[15],F=i*p-s*h,H=i*m-l*h,C=i*d-c*h,I=s*m-l*p,U=s*d-c*p,O=l*d-c*m,b=v*w-S*T,D=v*M-g*T,k=v*x-E*T,V=S*M-g*w,q=S*x-E*w,ee=g*x-E*M,te=F*ee-H*q+C*V+I*k-U*D+O*b;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/te;return e[0]=(p*ee-m*q+d*V)*K,e[1]=(l*q-s*ee-c*V)*K,e[2]=(w*O-M*U+x*I)*K,e[3]=(g*U-S*O-E*I)*K,e[4]=(m*k-h*ee-d*D)*K,e[5]=(i*ee-l*k+c*D)*K,e[6]=(M*C-T*O-x*H)*K,e[7]=(v*O-g*C+E*H)*K,e[8]=(h*q-p*k+d*b)*K,e[9]=(s*k-i*q-c*b)*K,e[10]=(T*U-w*C+x*F)*K,e[11]=(S*C-v*U-E*F)*K,e[12]=(p*D-h*V-m*b)*K,e[13]=(i*V-s*D+l*b)*K,e[14]=(w*H-T*I-M*F)*K,e[15]=(v*I-S*H+g*F)*K,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,v=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,S=p+p,g=c*d,E=c*v,T=c*S,w=h*v,M=h*S,x=p*S,F=m*d,H=m*v,C=m*S,I=s.x,U=s.y,O=s.z;return l[0]=(1-(w+x))*I,l[1]=(E+C)*I,l[2]=(T-H)*I,l[3]=0,l[4]=(E-C)*U,l[5]=(1-(g+x))*U,l[6]=(M+F)*U,l[7]=0,l[8]=(T+H)*O,l[9]=(M-F)*O,l[10]=(1-(g+w))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Lr.set(l[0],l[1],l[2]).length();const p=Lr.set(l[4],l[5],l[6]).length(),m=Lr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Bi.copy(this);const d=1/h,v=1/p,S=1/m;return Bi.elements[0]*=d,Bi.elements[1]*=d,Bi.elements[2]*=d,Bi.elements[4]*=v,Bi.elements[5]*=v,Bi.elements[6]*=v,Bi.elements[8]*=S,Bi.elements[9]*=S,Bi.elements[10]*=S,i.setFromRotationMatrix(Bi),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=ji,m=!1){const d=this.elements,v=2*c/(i-e),S=2*c/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(p===ji)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===sl)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=ji,m=!1){const d=this.elements,v=2/(i-e),S=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(p===ji)T=-2/(h-c),w=-(h+c)/(h-c);else if(p===sl)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Lr=new j,Bi=new tn,tM=new j(0,0,0),nM=new j(1,1,1),rs=new j,yc=new j,_i=new j,v_=new tn,x_=new gs;class _s{constructor(e=0,i=0,s=0,l=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_t(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return v_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iM=0;const S_=new j,Ur=new gs,Ea=new tn,Mc=new j,qo=new j,aM=new j,sM=new gs,y_=new j(1,0,0),M_=new j(0,1,0),E_=new j(0,0,1),b_={type:"added"},rM={type:"removed"},Nr={type:"childadded",child:null},Lh={type:"childremoved",child:null};class Dn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new j,i=new _s,s=new gs,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new lt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ur.setFromAxisAngle(e,i),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,i){return Ur.setFromAxisAngle(e,i),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(y_,e)}rotateY(e){return this.rotateOnAxis(M_,e)}rotateZ(e){return this.rotateOnAxis(E_,e)}translateOnAxis(e,i){return S_.copy(e).applyQuaternion(this.quaternion),this.position.add(S_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(y_,e)}translateY(e){return this.translateOnAxis(M_,e)}translateZ(e){return this.translateOnAxis(E_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Mc.copy(e):Mc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(qo,Mc,this.up):Ea.lookAt(Mc,qo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Ur.setFromRotationMatrix(Ea),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(b_),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(rM),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(b_),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,aM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),S=h(e.shapes),g=h(e.skeletons),E=h(e.animations),T=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new j(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zs extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oM={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(d,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=v.position.distanceTo(S.position),E=.02,T=.005;d.inputState.pinching&&g>E+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=E-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(oM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Zs;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Nh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class mt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=Yy(e,1),i=_t(i,0,1),s=_t(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Nh(h,c,e+1/3),this.g=Nh(h,c,e),this.b=Nh(h,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const s=Pv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Rt.workingToColorSpace(Wn.copy(this),e),Math.round(_t(Wn.r*255,0,255))*65536+Math.round(_t(Wn.g*255,0,255))*256+Math.round(_t(Wn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Wn.copy(this),i);const s=Wn.r,l=Wn.g,c=Wn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=v<=.5?S/(h+p):S/(2-h-p),h){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Wn.copy(this),i),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=xi){Rt.workingToColorSpace(Wn.copy(this),e);const i=Wn.r,s=Wn.g,l=Wn.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(os),this.setHSL(os.h+e,os.s+i,os.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(os),e.getHSL(Ec);const s=Ah(os.h,Ec.h,i),l=Ah(os.s,Ec.s,i),c=Ah(os.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new mt;mt.NAMES=Pv;class dp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=i}clone(){return new dp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new j,ba=new j,Oh=new j,Ta=new j,Or=new j,Pr=new j,T_=new j,Ph=new j,Ih=new j,Bh=new j,zh=new ln,Fh=new ln,Hh=new ln;class Li{constructor(e=new j,i=new j,s=new j){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),zi.subVectors(e,i),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){zi.subVectors(l,i),ba.subVectors(s,i),Oh.subVectors(e,i);const h=zi.dot(zi),p=zi.dot(ba),m=zi.dot(Oh),d=ba.dot(ba),v=ba.dot(Oh),S=h*d-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,E=(d*m-p*v)*g,T=(h*v-p*m)*g;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,Ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ta.x),m.addScaledVector(h,Ta.y),m.addScaledVector(p,Ta.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return zh.setScalar(0),Fh.setScalar(0),Hh.setScalar(0),zh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,s),Hh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(zh,c.x),h.addScaledVector(Fh,c.y),h.addScaledVector(Hh,c.z),h}static isFrontFacing(e,i,s,l){return zi.subVectors(s,i),ba.subVectors(e,i),zi.cross(ba).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),zi.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;Or.subVectors(l,s),Pr.subVectors(c,s),Ph.subVectors(e,s);const m=Or.dot(Ph),d=Pr.dot(Ph);if(m<=0&&d<=0)return i.copy(s);Ih.subVectors(e,l);const v=Or.dot(Ih),S=Pr.dot(Ih);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Or,h);Bh.subVectors(e,c);const E=Or.dot(Bh),T=Pr.dot(Bh);if(T>=0&&E<=T)return i.copy(c);const w=E*d-m*T;if(w<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Pr,p);const M=v*T-E*S;if(M<=0&&S-v>=0&&E-T>=0)return T_.subVectors(c,l),p=(S-v)/(S-v+(E-T)),i.copy(l).addScaledVector(T_,p);const x=1/(M+w+g);return h=w*x,p=g*x,i.copy(s).addScaledVector(Or,h).addScaledVector(Pr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ol{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Fi):Fi.fromBufferAttribute(c,h),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Tc.subVectors(this.max,Yo),Ir.subVectors(e.a,Yo),Br.subVectors(e.b,Yo),zr.subVectors(e.c,Yo),ls.subVectors(Br,Ir),cs.subVectors(zr,Br),Fs.subVectors(Ir,zr);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Fs.z,Fs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Fs.z,0,-Fs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Fs.y,Fs.x,0];return!Gh(i,Ir,Br,zr,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Gh(i,Ir,Br,zr,Tc))?!1:(Ac.crossVectors(ls,cs),i=[Ac.x,Ac.y,Ac.z],Gh(i,Ir,Br,zr,Tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Aa=[new j,new j,new j,new j,new j,new j,new j,new j],Fi=new j,bc=new ol,Ir=new j,Br=new j,zr=new j,ls=new j,cs=new j,Fs=new j,Yo=new j,Tc=new j,Ac=new j,Hs=new j;function Gh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Hs.fromArray(r,c);const p=l.x*Math.abs(Hs.x)+l.y*Math.abs(Hs.y)+l.z*Math.abs(Hs.z),m=e.dot(Hs),d=i.dot(Hs),v=s.dot(Hs);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const Sn=new j,Rc=new st;let cM=0;class ta extends vs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=f_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(e),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Wo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ii(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),s=ii(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),s=ii(s,this.array),l=ii(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ii(i,this.array),s=ii(s,this.array),l=ii(l,this.array),c=ii(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==f_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Iv extends ta{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Bv extends ta{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Fn extends ta{constructor(e,i,s){super(new Float32Array(e),i,s)}}const uM=new ol,Zo=new j,Vh=new j;class uu{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):uM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Vh)),this.expandByPoint(Zo.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fM=0;const Di=new tn,kh=new Dn,Fr=new j,vi=new ol,Ko=new ol,wn=new j;class oi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ky(e)?Bv:Iv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new lt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,s){return Di.makeTranslation(e,i,s),this.applyMatrix4(Di),this}scale(e,i,s){return Di.makeScale(e,i,s),this.applyMatrix4(Di),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Fn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Ko.setFromBufferAttribute(p),this.morphTargetsRelative?(wn.addVectors(vi.min,Ko.min),vi.expandByPoint(wn),wn.addVectors(vi.max,Ko.max),vi.expandByPoint(wn)):(vi.expandByPoint(Ko.min),vi.expandByPoint(Ko.max))}vi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)wn.fromBufferAttribute(p,d),m&&(Fr.fromBufferAttribute(e,d),wn.add(Fr)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new ta(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new j,m[b]=new j;const d=new j,v=new j,S=new j,g=new st,E=new st,T=new st,w=new j,M=new j;function x(b,D,k){d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,D),S.fromBufferAttribute(s,k),g.fromBufferAttribute(c,b),E.fromBufferAttribute(c,D),T.fromBufferAttribute(c,k),v.sub(d),S.sub(d),E.sub(g),T.sub(g);const V=1/(E.x*T.y-T.x*E.y);isFinite(V)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(S,-E.y).multiplyScalar(V),M.copy(S).multiplyScalar(E.x).addScaledVector(v,-T.x).multiplyScalar(V),p[b].add(w),p[D].add(w),p[k].add(w),m[b].add(M),m[D].add(M),m[k].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let b=0,D=F.length;b<D;++b){const k=F[b],V=k.start,q=k.count;for(let ee=V,te=V+q;ee<te;ee+=3)x(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const H=new j,C=new j,I=new j,U=new j;function O(b){I.fromBufferAttribute(l,b),U.copy(I);const D=p[b];H.copy(D),H.sub(I.multiplyScalar(I.dot(D))).normalize(),C.crossVectors(U,D);const V=C.dot(m[b])<0?-1:1;h.setXYZW(b,H.x,H.y,H.z,V)}for(let b=0,D=F.length;b<D;++b){const k=F[b],V=k.start,q=k.count;for(let ee=V,te=V+q;ee<te;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new ta(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,h=new j,p=new j,m=new j,d=new j,v=new j,S=new j;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),w=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,M),p.add(v),m.add(v),d.add(v),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,S=p.normalized,g=new d.constructor(m.length*v);let E=0,T=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?E=m[w]*p.data.stride+p.offset:E=m[w]*v;for(let x=0;x<v;x++)g[T++]=d[E++]}return new ta(g,v,S)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,S=d.length;v<S;v++){const g=d[v],E=e(g,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,g=d.length;S<g;S++){const E=d[S];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],S=c[d];for(let g=0,E=S.length;g<E;g++)v.push(S[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let hM=0;class eo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Yr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(s.blending=this.blending),this.side!==ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==od&&(s.blendSrc=this.blendSrc),this.blendDst!==ld&&(s.blendDst=this.blendDst),this.blendEquation!==ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new st().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ra=new j,Xh=new j,Cc=new j,us=new j,Wh=new j,wc=new j,qh=new j;class fu{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ra)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ra.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ra.copy(this.origin).addScaledVector(this.direction,i),Ra.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Xh.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),us.copy(this.origin).sub(Xh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Cc),p=us.dot(this.direction),m=-us.dot(Cc),d=us.lengthSq(),v=Math.abs(1-h*h);let S,g,E,T;if(v>0)if(S=h*m-p,g=h*p-m,T=c*v,S>=0)if(g>=-T)if(g<=T){const w=1/v;S*=w,g*=w,E=S*(S+h*g+2*p)+g*(h*S+g+2*m)+d}else g=c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;else g=-c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;else g<=-T?(S=Math.max(0,-(-h*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+d):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+d):(S=Math.max(0,-(h*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+d);else g=h>0?-c:c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Xh).addScaledVector(Cc,g),E}intersectSphere(e,i){Ra.subVectors(e.center,this.origin);const s=Ra.dot(this.direction),l=Ra.dot(Ra)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,h=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,h=(e.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ra)!==null}intersectTriangle(e,i,s,l,c){Wh.subVectors(i,e),wc.subVectors(s,e),qh.crossVectors(Wh,wc);let h=this.direction.dot(qh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;us.subVectors(this.origin,e);const m=p*this.direction.dot(wc.crossVectors(us,wc));if(m<0)return null;const d=p*this.direction.dot(Wh.cross(us));if(d<0||m+d>h)return null;const v=-p*us.dot(qh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pp extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const A_=new tn,Gs=new fu,Dc=new uu,R_=new j,Lc=new j,Uc=new j,Nc=new j,Yh=new j,Oc=new j,C_=new j,Pc=new j;class Bn extends Dn{constructor(e=new oi,i=new pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Oc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],S=c[m];v!==0&&(Yh.fromBufferAttribute(S,e),h?Oc.addScaledVector(Yh,v):Oc.addScaledVector(Yh.sub(i),v))}i.add(Oc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),Gs.copy(e.ray).recast(e.near),!(Dc.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(Dc,R_)===null||Gs.origin.distanceToSquared(R_)>(e.far-e.near)**2))&&(A_.copy(c).invert(),Gs.copy(e.ray).applyMatrix4(A_),!(s.boundingBox!==null&&Gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Gs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],x=h[M.materialIndex],F=Math.max(M.start,E.start),H=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let C=F,I=H;C<I;C+=3){const U=p.getX(C),O=p.getX(C+1),b=p.getX(C+2);l=Ic(this,x,e,s,d,v,S,U,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let M=T,x=w;M<x;M+=3){const F=p.getX(M),H=p.getX(M+1),C=p.getX(M+2);l=Ic(this,h,e,s,d,v,S,F,H,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],x=h[M.materialIndex],F=Math.max(M.start,E.start),H=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let C=F,I=H;C<I;C+=3){const U=C,O=C+1,b=C+2;l=Ic(this,x,e,s,d,v,S,U,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let M=T,x=w;M<x;M+=3){const F=M,H=M+1,C=M+2;l=Ic(this,h,e,s,d,v,S,F,H,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function dM(r,e,i,s,l,c,h,p){let m;if(e.side===ri?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===ms,p),m===null)return null;Pc.copy(p),Pc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Pc);return d<i.near||d>i.far?null:{distance:d,point:Pc.clone(),object:r}}function Ic(r,e,i,s,l,c,h,p,m,d){r.getVertexPosition(p,Lc),r.getVertexPosition(m,Uc),r.getVertexPosition(d,Nc);const v=dM(r,e,i,s,Lc,Uc,Nc,C_);if(v){const S=new j;Li.getBarycoord(C_,Lc,Uc,Nc,S),l&&(v.uv=Li.getInterpolatedAttribute(l,p,m,d,S,new st)),c&&(v.uv1=Li.getInterpolatedAttribute(c,p,m,d,S,new st)),h&&(v.normal=Li.getInterpolatedAttribute(h,p,m,d,S,new j),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new j,materialIndex:0};Li.getNormal(Lc,Uc,Nc,g.normal),v.face=g,v.barycoord=S}return v}class pM extends Qn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=zn,v=zn,S,g){super(null,h,p,m,d,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new j,mM=new j,gM=new lt;class hs{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Zh.subVectors(s,i).cross(mM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Zh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||gM.getNormalMatrix(e),l=this.coplanarPoint(Zh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new uu,_M=new st(.5,.5),Bc=new j;class mp{constructor(e=new hs,i=new hs,s=new hs,l=new hs,c=new hs,h=new hs){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ji,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],S=c[5],g=c[6],E=c[7],T=c[8],w=c[9],M=c[10],x=c[11],F=c[12],H=c[13],C=c[14],I=c[15];if(l[0].setComponents(d-h,E-v,x-T,I-F).normalize(),l[1].setComponents(d+h,E+v,x+T,I+F).normalize(),l[2].setComponents(d+p,E+S,x+w,I+H).normalize(),l[3].setComponents(d-p,E-S,x-w,I-H).normalize(),s)l[4].setComponents(m,g,M,C).normalize(),l[5].setComponents(d-m,E-g,x-M,I-C).normalize();else if(l[4].setComponents(d-m,E-g,x-M,I-C).normalize(),i===ji)l[5].setComponents(d+m,E+g,x+M,I+C).normalize();else if(i===sl)l[5].setComponents(m,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const i=_M.distanceTo(e.center);return Vs.radius=.7071067811865476+i,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?e.max.x:e.min.x,Bc.y=l.normal.y>0?e.max.y:e.min.y,Bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ks extends eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new j,lu=new j,w_=new tn,Qo=new fu,zc=new uu,Kh=new j,D_=new j;class zv extends Dn{constructor(e=new oi,i=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);e.setAttribute("lineDistance",new Fn(s,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;w_.copy(l).invert(),Qo.copy(e.ray).applyMatrix4(w_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const E=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let w=E,M=T-1;w<M;w+=d){const x=v.getX(w),F=v.getX(w+1),H=Fc(this,e,Qo,m,x,F,w);H&&i.push(H)}if(this.isLineLoop){const w=v.getX(T-1),M=v.getX(E),x=Fc(this,e,Qo,m,w,M,T-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let w=E,M=T-1;w<M;w+=d){const x=Fc(this,e,Qo,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=Fc(this,e,Qo,m,T-1,E,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Fc(r,e,i,s,l,c,h){const p=r.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),lu.fromBufferAttribute(p,c),i.distanceSqToSegment(ou,lu,Kh,D_)>s)return;Kh.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(Kh);if(!(d<e.near||d>e.far))return{distance:d,point:D_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const L_=new j,U_=new j;class nl extends zv{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)L_.fromBufferAttribute(i,l),U_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+L_.distanceTo(U_);e.setAttribute("lineDistance",new Fn(s,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fv extends Qn{constructor(e=[],i=Qs,s,l,c,h,p,m,d,v){super(e,i,s,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jr extends Qn{constructor(e,i,s=na,l,c,h,p=zn,m=zn,d,v=Ua,S=1){if(v!==Ua&&v!==Ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,c,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class vM extends jr{constructor(e,i=na,s=Qs,l,c,h=zn,p=zn,m,d=Ua){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,s,l,c,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hv extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gi extends oi{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],S=[];let g=0,E=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Fn(d,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(S,2));function T(w,M,x,F,H,C,I,U,O,b,D){const k=C/O,V=I/b,q=C/2,ee=I/2,te=U/2,K=O+1,P=b+1;let z=0,ie=0;const ge=new j;for(let Me=0;Me<P;Me++){const N=Me*V-ee;for(let B=0;B<K;B++){const J=B*k-q;ge[w]=J*F,ge[M]=N*H,ge[x]=te,d.push(ge.x,ge.y,ge.z),ge[w]=0,ge[M]=0,ge[x]=U>0?1:-1,v.push(ge.x,ge.y,ge.z),S.push(B/O),S.push(1-Me/b),z+=1}}for(let Me=0;Me<b;Me++)for(let N=0;N<O;N++){const B=g+N+K*Me,J=g+N+K*(Me+1),Se=g+(N+1)+K*(Me+1),De=g+(N+1)+K*Me;m.push(B,J,De),m.push(J,Se,De),ie+=6}p.addGroup(E,ie,D),E+=ie,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gp extends oi{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const v=[],S=[],g=[],E=[];let T=0;const w=[],M=s/2;let x=0;F(),h===!1&&(e>0&&H(!0),i>0&&H(!1)),this.setIndex(v),this.setAttribute("position",new Fn(S,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(E,2));function F(){const C=new j,I=new j;let U=0;const O=(i-e)/s;for(let b=0;b<=c;b++){const D=[],k=b/c,V=k*(i-e)+e;for(let q=0;q<=l;q++){const ee=q/l,te=ee*m+p,K=Math.sin(te),P=Math.cos(te);I.x=V*K,I.y=-k*s+M,I.z=V*P,S.push(I.x,I.y,I.z),C.set(K,O,P).normalize(),g.push(C.x,C.y,C.z),E.push(ee,1-k),D.push(T++)}w.push(D)}for(let b=0;b<l;b++)for(let D=0;D<c;D++){const k=w[D][b],V=w[D+1][b],q=w[D+1][b+1],ee=w[D][b+1];(e>0||D!==0)&&(v.push(k,V,ee),U+=3),(i>0||D!==c-1)&&(v.push(V,q,ee),U+=3)}d.addGroup(x,U,0),x+=U}function H(C){const I=T,U=new st,O=new j;let b=0;const D=C===!0?e:i,k=C===!0?1:-1;for(let q=1;q<=l;q++)S.push(0,M*k,0),g.push(0,k,0),E.push(.5,.5),T++;const V=T;for(let q=0;q<=l;q++){const te=q/l*m+p,K=Math.cos(te),P=Math.sin(te);O.x=D*P,O.y=M*k,O.z=D*K,S.push(O.x,O.y,O.z),g.push(0,k,0),U.x=K*.5+.5,U.y=P*.5*k+.5,E.push(U.x,U.y),T++}for(let q=0;q<l;q++){const ee=I+q,te=V+q;C===!0?v.push(te,te+1,ee):v.push(te+1,te,ee),b+=3}d.addGroup(x,b,C===!0?1:2),x+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Hc=new j,Gc=new j,Qh=new j,Vc=new Li;class eu extends oi{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(tl*i),h=e.getIndex(),p=e.getAttribute("position"),m=h?h.count:p.count,d=[0,0,0],v=["a","b","c"],S=new Array(3),g={},E=[];for(let T=0;T<m;T+=3){h?(d[0]=h.getX(T),d[1]=h.getX(T+1),d[2]=h.getX(T+2)):(d[0]=T,d[1]=T+1,d[2]=T+2);const{a:w,b:M,c:x}=Vc;if(w.fromBufferAttribute(p,d[0]),M.fromBufferAttribute(p,d[1]),x.fromBufferAttribute(p,d[2]),Vc.getNormal(Qh),S[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,S[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,S[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let F=0;F<3;F++){const H=(F+1)%3,C=S[F],I=S[H],U=Vc[v[F]],O=Vc[v[H]],b=`${C}_${I}`,D=`${I}_${C}`;D in g&&g[D]?(Qh.dot(g[D].normal)<=c&&(E.push(U.x,U.y,U.z),E.push(O.x,O.y,O.z)),g[D]=null):b in g||(g[b]={index0:d[F],index1:d[H],normal:Qh.clone()})}}for(const T in g)if(g[T]){const{index0:w,index1:M}=g[T];Hc.fromBufferAttribute(p,w),Gc.fromBufferAttribute(p,M),E.push(Hc.x,Hc.y,Hc.z),E.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new Fn(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ll extends oi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,S=e/p,g=i/m,E=[],T=[],w=[],M=[];for(let x=0;x<v;x++){const F=x*g-h;for(let H=0;H<d;H++){const C=H*S-c;T.push(C,-F,0),w.push(0,0,1),M.push(H/p),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<p;F++){const H=F+d*x,C=F+d*(x+1),I=F+1+d*(x+1),U=F+1+d*x;E.push(H,C,U),E.push(C,I,U)}this.setIndex(E),this.setAttribute("position",new Fn(T,3)),this.setAttribute("normal",new Fn(w,3)),this.setAttribute("uv",new Fn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}function $r(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(N_(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(N_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Kn(r){const e={};for(let i=0;i<r.length;i++){const s=$r(r[i]);for(const l in s)e[l]=s[l]}return e}function N_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function xM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Gv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const SM={clone:$r,merge:Kn};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=xM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new mt().setHex(l.value);break;case"v2":this.uniforms[s].value=new st().fromArray(l.value);break;case"v3":this.uniforms[s].value=new j().fromArray(l.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[s].value=new lt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new tn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class EM extends ia{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xs extends eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bM extends Xs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class TM extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AM extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _p extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class RM extends _p{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Jh=new tn,O_=new j,P_=new j;class Vv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;O_.setFromMatrixPosition(e.matrixWorld),i.position.copy(O_),P_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(P_),i.updateMatrixWorld(),Jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===sl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kc=new j,Xc=new gs,Zi=new j;class kv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,Xc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(kc,Xc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fs=new j,I_=new st,B_=new st;class Si extends kv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Kd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,i){return this.getViewBounds(e,I_,B_),i.subVectors(B_,I_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(tl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class CM extends Vv{constructor(){super(new Si(90,1,.5,500)),this.isPointLightShadow=!0}}class z_ extends _p{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new CM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class vp extends kv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wM extends Vv{constructor(){super(new vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DM extends _p{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new wM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Hr=-90,Gr=1;class LM extends Dn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Hr,Gr,e,i);l.layers=this.layers,this.add(l);const c=new Si(Hr,Gr,e,i);c.layers=this.layers,this.add(c);const h=new Si(Hr,Gr,e,i);h.layers=this.layers,this.add(h);const p=new Si(Hr,Gr,e,i);p.layers=this.layers,this.add(p);const m=new Si(Hr,Gr,e,i);m.layers=this.layers,this.add(m);const d=new Si(Hr,Gr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,g,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class UM extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const F_=new tn;class NM{constructor(e,i,s=0,l=1/0){this.ray=new fu(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ct("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return F_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(F_),this}intersectObject(e,i=!0,s=[]){return Qd(e,this,s,i),s.sort(H_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Qd(e[l],this,s,i);return s.sort(H_),s}}function H_(r,e){return r.distance-e.distance}function Qd(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,p=c.length;h<p;h++)Qd(c[h],e,i,!0)}}class G_{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(_t(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xv{static{Xv.prototype.isMatrix2=!0}constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}}class OM extends nl{constructor(e=10,i=10,s=4473924,l=8947848){s=new mt(s),l=new mt(l);const c=i/2,h=e/i,p=e/2,m=[],d=[];for(let g=0,E=0,T=-p;g<=i;g++,T+=h){m.push(-p,0,T,p,0,T),m.push(T,0,-p,T,0,p);const w=g===c?s:l;w.toArray(d,E),E+=3,w.toArray(d,E),E+=3,w.toArray(d,E),E+=3,w.toArray(d,E),E+=3}const v=new oi;v.setAttribute("position",new Fn(m,3)),v.setAttribute("color",new Fn(d,3));const S=new Ks({vertexColors:!0,toneMapped:!1});super(v,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class PM extends vs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){it("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function V_(r,e,i,s){const l=IM(s);switch(i){case Dv:return r*e;case Uv:return r*e/l.components*l.byteLength;case rp:return r*e/l.components*l.byteLength;case Js:return r*e*2/l.components*l.byteLength;case op:return r*e*2/l.components*l.byteLength;case Lv:return r*e*3/l.components*l.byteLength;case Vi:return r*e*4/l.components*l.byteLength;case lp:return r*e*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xd:case yd:return Math.max(r,16)*Math.max(e,8)/4;case vd:case Sd:return Math.max(r,8)*Math.max(e,8)/2;case Md:case Ed:case Td:case Ad:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bd:case nu:case Rd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vd:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case iu:case Yd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IM(r){switch(r){case yi:case Av:return{byteLength:1,components:1};case il:case Rv:case La:return{byteLength:2,components:1};case ap:case sp:return{byteLength:2,components:4};case na:case ip:case Ji:return{byteLength:4,components:1};case Cv:case wv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);function Wv(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function BM(r){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=r.SHORT;else if(d instanceof Uint32Array)E=r.UNSIGNED_INT;else if(d instanceof Int32Array)E=r.INT;else if(d instanceof Int8Array)E=r.BYTE;else if(d instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const v=m.array,S=m.updateRanges;if(r.bindBuffer(d,p),S.length===0)r.bufferSubData(d,0,v);else{S.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<S.length;E++){const T=S[g],w=S[E];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,S[g]=w)}S.length=g+1;for(let E=0,T=S.length;E<T;E++){const w=S[E];r.bufferSubData(d,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FM=`#ifdef USE_ALPHAHASH
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
#endif`,HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XM=`#ifdef USE_AOMAP
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
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
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
#endif`,YM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JM=`#ifdef USE_IRIDESCENCE
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
#endif`,jM=`#ifdef USE_BUMPMAP
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,oE=`#define PI 3.141592653589793
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
} // validated`,lE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cE=`vec3 transformedNormal = objectNormal;
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
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pE="gl_FragColor = linearToOutputTexel( gl_FragColor );",mE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gE=`#ifdef USE_ENVMAP
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
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,xE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ME=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TE=`#ifdef USE_GRADIENTMAP
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
}`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,DE=`#ifdef USE_ENVMAP
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
#endif`,LE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PE=`PhysicalMaterial material;
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
#endif`,IE=`uniform sampler2D dfgLUT;
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
}`,BE=`
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
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
#endif`,FE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZE=`#if defined( USE_POINTS_UV )
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
#endif`,KE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
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
#endif`,lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,db=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eb=`float getShadowMask() {
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
}`,bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,Ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ub=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fb=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`#include <common>
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
}`,Wb=`#if DEPTH_PACKING == 3200
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
}`,qb=`#define DISTANCE
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
}`,Yb=`#define DISTANCE
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`uniform float scale;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,$b=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,sT=`#define NORMAL
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
}`,rT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,fT=`#define TOON
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
}`,hT=`uniform float size;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:zM,alphahash_pars_fragment:FM,alphamap_fragment:HM,alphamap_pars_fragment:GM,alphatest_fragment:VM,alphatest_pars_fragment:kM,aomap_fragment:XM,aomap_pars_fragment:WM,batching_pars_vertex:qM,batching_vertex:YM,begin_vertex:ZM,beginnormal_vertex:KM,bsdfs:QM,iridescence_fragment:JM,bumpmap_pars_fragment:jM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:eE,clipping_planes_pars_vertex:tE,clipping_planes_vertex:nE,color_fragment:iE,color_pars_fragment:aE,color_pars_vertex:sE,color_vertex:rE,common:oE,cube_uv_reflection_fragment:lE,defaultnormal_vertex:cE,displacementmap_pars_vertex:uE,displacementmap_vertex:fE,emissivemap_fragment:hE,emissivemap_pars_fragment:dE,colorspace_fragment:pE,colorspace_pars_fragment:mE,envmap_fragment:gE,envmap_common_pars_fragment:_E,envmap_pars_fragment:vE,envmap_pars_vertex:xE,envmap_physical_pars_fragment:DE,envmap_vertex:SE,fog_vertex:yE,fog_pars_vertex:ME,fog_fragment:EE,fog_pars_fragment:bE,gradientmap_pars_fragment:TE,lightmap_pars_fragment:AE,lights_lambert_fragment:RE,lights_lambert_pars_fragment:CE,lights_pars_begin:wE,lights_toon_fragment:LE,lights_toon_pars_fragment:UE,lights_phong_fragment:NE,lights_phong_pars_fragment:OE,lights_physical_fragment:PE,lights_physical_pars_fragment:IE,lights_fragment_begin:BE,lights_fragment_maps:zE,lights_fragment_end:FE,lightprobes_pars_fragment:HE,logdepthbuf_fragment:GE,logdepthbuf_pars_fragment:VE,logdepthbuf_pars_vertex:kE,logdepthbuf_vertex:XE,map_fragment:WE,map_pars_fragment:qE,map_particle_fragment:YE,map_particle_pars_fragment:ZE,metalnessmap_fragment:KE,metalnessmap_pars_fragment:QE,morphinstance_vertex:JE,morphcolor_vertex:jE,morphnormal_vertex:$E,morphtarget_pars_vertex:eb,morphtarget_vertex:tb,normal_fragment_begin:nb,normal_fragment_maps:ib,normal_pars_fragment:ab,normal_pars_vertex:sb,normal_vertex:rb,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:lb,clearcoat_normal_fragment_maps:cb,clearcoat_pars_fragment:ub,iridescence_pars_fragment:fb,opaque_fragment:hb,packing:db,premultiplied_alpha_fragment:pb,project_vertex:mb,dithering_fragment:gb,dithering_pars_fragment:_b,roughnessmap_fragment:vb,roughnessmap_pars_fragment:xb,shadowmap_pars_fragment:Sb,shadowmap_pars_vertex:yb,shadowmap_vertex:Mb,shadowmask_pars_fragment:Eb,skinbase_vertex:bb,skinning_pars_vertex:Tb,skinning_vertex:Ab,skinnormal_vertex:Rb,specularmap_fragment:Cb,specularmap_pars_fragment:wb,tonemapping_fragment:Db,tonemapping_pars_fragment:Lb,transmission_fragment:Ub,transmission_pars_fragment:Nb,uv_pars_fragment:Ob,uv_pars_vertex:Pb,uv_vertex:Ib,worldpos_vertex:Bb,background_vert:zb,background_frag:Fb,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:Vb,cube_frag:kb,depth_vert:Xb,depth_frag:Wb,distance_vert:qb,distance_frag:Yb,equirect_vert:Zb,equirect_frag:Kb,linedashed_vert:Qb,linedashed_frag:Jb,meshbasic_vert:jb,meshbasic_frag:$b,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:sT,meshphong_vert:rT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:hT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},He={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Qi={basic:{uniforms:Kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Kn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Kn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new mt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Kn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Kn([He.points,He.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Kn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Kn([He.common,He.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Kn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Kn([He.sprite,He.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Kn([He.common,He.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Kn([He.lights,He.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Qi.physical={uniforms:Kn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Wc={r:0,b:0,g:0},vT=new tn,qv=new lt;qv.set(-1,0,0,0,1,0,0,0,1);function xT(r,e,i,s,l,c){const h=new mt(0);let p=l===!0?0:1,m,d,v=null,S=0,g=null;function E(F){let H=F.isScene===!0?F.background:null;if(H&&H.isTexture){const C=F.backgroundBlurriness>0;H=e.get(H,C)}return H}function T(F){let H=!1;const C=E(F);C===null?M(h,p):C&&C.isColor&&(M(C,1),H=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(F,H){const C=E(H);C&&(C.isCubeTexture||C.mapping===cu)?(d===void 0&&(d=new Bn(new Gi(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:$r(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(qv),d.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Gt,(v!==C||S!==C.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,v=C,S=C.version,g=r.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Bn(new ll(2,2),new ia({name:"BackgroundMaterial",uniforms:$r(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||S!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=C,S=C.version,g=r.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function M(F,H){F.getRGB(Wc,Gv(r)),i.buffers.color.setClear(Wc.r,Wc.g,Wc.b,H,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(F,H=1){h.set(F),p=H,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(F){p=F,M(h,p)},render:T,addToRenderList:w,dispose:x}}function ST(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(V,q,ee,te,K){let P=!1;const z=S(V,te,ee,q);c!==z&&(c=z,d(c.object)),P=E(V,te,ee,K),P&&T(V,te,ee,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,C(V,q,ee,te),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function m(){return r.createVertexArray()}function d(V){return r.bindVertexArray(V)}function v(V){return r.deleteVertexArray(V)}function S(V,q,ee,te){const K=te.wireframe===!0;let P=s[q.id];P===void 0&&(P={},s[q.id]=P);const z=V.isInstancedMesh===!0?V.id:0;let ie=P[z];ie===void 0&&(ie={},P[z]=ie);let ge=ie[ee.id];ge===void 0&&(ge={},ie[ee.id]=ge);let Me=ge[K];return Me===void 0&&(Me=g(m()),ge[K]=Me),Me}function g(V){const q=[],ee=[],te=[];for(let K=0;K<i;K++)q[K]=0,ee[K]=0,te[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ee,attributeDivisors:te,object:V,attributes:{},index:null}}function E(V,q,ee,te){const K=c.attributes,P=q.attributes;let z=0;const ie=ee.getAttributes();for(const ge in ie)if(ie[ge].location>=0){const N=K[ge];let B=P[ge];if(B===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(B=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(B=V.instanceColor)),N===void 0||N.attribute!==B||B&&N.data!==B.data)return!0;z++}return c.attributesNum!==z||c.index!==te}function T(V,q,ee,te){const K={},P=q.attributes;let z=0;const ie=ee.getAttributes();for(const ge in ie)if(ie[ge].location>=0){let N=P[ge];N===void 0&&(ge==="instanceMatrix"&&V.instanceMatrix&&(N=V.instanceMatrix),ge==="instanceColor"&&V.instanceColor&&(N=V.instanceColor));const B={};B.attribute=N,N&&N.data&&(B.data=N.data),K[ge]=B,z++}c.attributes=K,c.attributesNum=z,c.index=te}function w(){const V=c.newAttributes;for(let q=0,ee=V.length;q<ee;q++)V[q]=0}function M(V){x(V,0)}function x(V,q){const ee=c.newAttributes,te=c.enabledAttributes,K=c.attributeDivisors;ee[V]=1,te[V]===0&&(r.enableVertexAttribArray(V),te[V]=1),K[V]!==q&&(r.vertexAttribDivisor(V,q),K[V]=q)}function F(){const V=c.newAttributes,q=c.enabledAttributes;for(let ee=0,te=q.length;ee<te;ee++)q[ee]!==V[ee]&&(r.disableVertexAttribArray(ee),q[ee]=0)}function H(V,q,ee,te,K,P,z){z===!0?r.vertexAttribIPointer(V,q,ee,K,P):r.vertexAttribPointer(V,q,ee,te,K,P)}function C(V,q,ee,te){w();const K=te.attributes,P=ee.getAttributes(),z=q.defaultAttributeValues;for(const ie in P){const ge=P[ie];if(ge.location>=0){let Me=K[ie];if(Me===void 0&&(ie==="instanceMatrix"&&V.instanceMatrix&&(Me=V.instanceMatrix),ie==="instanceColor"&&V.instanceColor&&(Me=V.instanceColor)),Me!==void 0){const N=Me.normalized,B=Me.itemSize,J=e.get(Me);if(J===void 0)continue;const Se=J.buffer,De=J.type,ne=J.bytesPerElement,xe=De===r.INT||De===r.UNSIGNED_INT||Me.gpuType===ip;if(Me.isInterleavedBufferAttribute){const be=Me.data,Ge=be.stride,et=Me.offset;if(be.isInstancedInterleavedBuffer){for(let Ke=0;Ke<ge.locationSize;Ke++)x(ge.location+Ke,be.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ke=0;Ke<ge.locationSize;Ke++)M(ge.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Ke=0;Ke<ge.locationSize;Ke++)H(ge.location+Ke,B/ge.locationSize,De,N,Ge*ne,(et+B/ge.locationSize*Ke)*ne,xe)}else{if(Me.isInstancedBufferAttribute){for(let be=0;be<ge.locationSize;be++)x(ge.location+be,Me.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let be=0;be<ge.locationSize;be++)M(ge.location+be);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let be=0;be<ge.locationSize;be++)H(ge.location+be,B/ge.locationSize,De,N,B*ne,B/ge.locationSize*be*ne,xe)}}else if(z!==void 0){const N=z[ie];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(ge.location,N);break;case 3:r.vertexAttrib3fv(ge.location,N);break;case 4:r.vertexAttrib4fv(ge.location,N);break;default:r.vertexAttrib1fv(ge.location,N)}}}}F()}function I(){D();for(const V in s){const q=s[V];for(const ee in q){const te=q[ee];for(const K in te){const P=te[K];for(const z in P)v(P[z].object),delete P[z];delete te[K]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const q=s[V.id];for(const ee in q){const te=q[ee];for(const K in te){const P=te[K];for(const z in P)v(P[z].object),delete P[z];delete te[K]}}delete s[V.id]}function O(V){for(const q in s){const ee=s[q];for(const te in ee){const K=ee[te];if(K[V.id]===void 0)continue;const P=K[V.id];for(const z in P)v(P[z].object),delete P[z];delete K[V.id]}}}function b(V){for(const q in s){const ee=s[q],te=V.isInstancedMesh===!0?V.id:0,K=ee[te];if(K!==void 0){for(const P in K){const z=K[P];for(const ie in z)v(z[ie].object),delete z[ie];delete K[P]}delete ee[te],Object.keys(ee).length===0&&delete s[q]}}}function D(){k(),h=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:M,disableUnusedAttributes:F}}function yT(r,e,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,v){v!==0&&(r.drawArraysInstanced(s,m,d,v),i.update(d,s,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,v);let g=0;for(let E=0;E<v;E++)g+=d[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function MT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Vi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const b=O===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==yi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ji&&!b)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(it("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),H=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:H,maxFragmentUniforms:C,maxSamples:I,samples:U}}function ET(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new hs,p=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const E=S.length!==0||g||s!==0||l;return l=g,s=S.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,E){const T=S.clippingPlanes,w=S.clipIntersection,M=S.clipShadows,x=r.get(S);if(!l||T===null||T.length===0||c&&!M)c?v(null):d();else{const F=c?0:s,H=F*4;let C=x.clippingState||null;m.value=C,C=v(T,g,H,E);for(let I=0;I!==H;++I)C[I]=i[I];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,g,E,T){const w=S!==null?S.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const x=E+w*4,F=g.matrixWorldInverse;p.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let H=0,C=E;H!==w;++H,C+=4)h.copy(S[H]).applyMatrix4(F,p),h.normal.toArray(M,C),M[C+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const ps=4,k_=[.125,.215,.35,.446,.526,.582],Ws=20,bT=256,Jo=new vp,X_=new mt;let jh=null,$h=0,ed=0,td=!1;const TT=new j;class W_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=TT}=c;jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,$h,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Qs||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:La,format:Vi,colorSpace:au,depthBuffer:!1},l=q_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AT(c)),this._blurMaterial=CT(c,e,i),this._ggxMaterial=RT(c,e,i)}return l}_compileMaterial(e){const i=new Bn(new oi,e);this._renderer.compile(i,Jo)}_sceneToCubeUV(e,i,s,l,c){const m=new Si(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,E=S.toneMapping;S.getClearColor(X_),S.toneMapping=$i,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Gi,new pp({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const F=e.background;F?F.isColor&&(M.color.copy(F),e.background=null,x=!0):(M.color.copy(X_),x=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[H],c.y,c.z)):C===1?(m.up.set(0,0,d[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[H],c.z)):(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[H]));const I=this._cubeSize;Vr(l,C*I,H>2?I:0,I,I),S.setRenderTarget(l),x&&S.render(w,m),S.render(e,m)}S.toneMapping=E,S.autoClear=g,e.background=F}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Qs||e.mapping===Jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Vr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Jo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),g=0+d*1.25,E=S*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-ps?s-T+ps:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Vr(c,M,x,3*w,2*w),l.setRenderTarget(c),l.render(p,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Vr(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(p,Jo)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const g=d.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Ws-1),w=c/T,M=isFinite(c)?1+Math.floor(v*w):Ws;M>Ws&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ws}`);const x=[];let F=0;for(let O=0;O<Ws;++O){const b=O/w,D=Math.exp(-b*b/2);x.push(D),O===0?F+=D:O<M&&(F+=2*D)}for(let O=0;O<x.length;O++)x[O]=x[O]/F;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=x,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:H}=this;g.dTheta.value=T,g.mipInt.value=H-s;const C=this._sizeLods[l],I=3*C*(l>H-ps?l-H+ps:0),U=4*(this._cubeSize-C);Vr(i,I,U,3*C,2*C),m.setRenderTarget(i),m.render(S,Jo)}}function AT(r){const e=[],i=[],s=[];let l=r;const c=r-ps+1+k_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>r-ps?m=k_[h-r+ps-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,g=[v,v,S,v,S,S,v,v,S,S,v,S],E=6,T=6,w=3,M=2,x=1,F=new Float32Array(w*T*E),H=new Float32Array(M*T*E),C=new Float32Array(x*T*E);for(let U=0;U<E;U++){const O=U%3*2/3-1,b=U>2?0:-1,D=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];F.set(D,w*T*U),H.set(g,M*T*U);const k=[U,U,U,U,U,U];C.set(k,x*T*U)}const I=new oi;I.setAttribute("position",new ta(F,w)),I.setAttribute("uv",new ta(H,M)),I.setAttribute("faceIndex",new ta(C,x)),s.push(new Bn(I,null)),l>ps&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function q_(r,e,i){const s=new ea(r,e,i);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Vr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function RT(r,e,i){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function CT(r,e,i){const s=new Float32Array(Ws),l=new j(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Y_(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Z_(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}class Yv extends ea{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Fv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Gi(5,5,5),c=new ia({name:"CubemapFromEquirect",uniforms:$r(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ri,blending:wa});c.uniforms.tEquirect.value=i;const h=new Bn(l,c),p=i.minFilter;return i.minFilter===qs&&(i.minFilter=qn),new LM(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function wT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===Eh||E===bh)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Yv(T.height);return w.fromEquirectangularTexture(r,g),e.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,T=E===Eh||E===bh,w=E===Qs||E===Jr;if(T||w){let M=i.get(g);const x=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new W_(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const F=g.image;return T&&F&&F.height>0||w&&F&&m(F)?(s===null&&(s=new W_(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function p(g,E){return E===Eh?g.mapping=Qs:E===bh&&(g.mapping=Jr),g}function m(g){let E=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&E++;return E===T}function d(g){const E=g.target;E.removeEventListener("dispose",d);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function DT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zr("WebGLRenderer: "+s+" extension not supported."),l}}}function LT(r,e,i,s){const l={},c=new WeakMap;function h(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function d(S){const g=[],E=S.index,T=S.attributes.position;let w=0;if(T===void 0)return;if(E!==null){const F=E.array;w=E.version;for(let H=0,C=F.length;H<C;H+=3){const I=F[H+0],U=F[H+1],O=F[H+2];g.push(I,U,U,O,O,I)}}else{const F=T.array;w=T.version;for(let H=0,C=F.length/3-1;H<C;H+=3){const I=H+0,U=H+1,O=H+2;g.push(I,U,U,O,O,I)}}const M=new(T.count>=65535?Bv:Iv)(g,1);M.version=w;const x=c.get(S);x&&e.remove(x),c.set(S,M)}function v(S){const g=c.get(S);if(g){const E=S.index;E!==null&&g.version<E.version&&d(S)}else d(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function UT(r,e,i){let s;function l(S){s=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function m(S,g){r.drawElements(s,g,c,S*h),i.update(g,s,1)}function d(S,g,E){E!==0&&(r.drawElementsInstanced(s,g,c,S*h,E),i.update(g,s,E))}function v(S,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,E);let w=0;for(let M=0;M<E;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function NT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ct("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function OT(r,e,i){const s=new WeakMap,l=new ln;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let k=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",k)};var E=k;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let I=p.attributes.position.count*C,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*U*4*S),b=new Ov(O,I,U,S);b.type=Ji,b.needsUpdate=!0;const D=C*4;for(let V=0;V<S;V++){const q=x[V],ee=F[V],te=H[V],K=I*U*4*V;for(let P=0;P<q.count;P++){const z=P*D;T===!0&&(l.fromBufferAttribute(q,P),O[K+z+0]=l.x,O[K+z+1]=l.y,O[K+z+2]=l.z,O[K+z+3]=0),w===!0&&(l.fromBufferAttribute(ee,P),O[K+z+4]=l.x,O[K+z+5]=l.y,O[K+z+6]=l.z,O[K+z+7]=0),M===!0&&(l.fromBufferAttribute(te,P),O[K+z+8]=l.x,O[K+z+9]=l.y,O[K+z+10]=l.z,O[K+z+11]=te.itemSize===4?l.w:1)}}g={count:S,texture:b,size:new st(I,U)},s.set(p,g),p.addEventListener("dispose",k)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const w=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function PT(r,e,i,s,l){let c=new WeakMap;function h(d){const v=l.render.frame,S=d.geometry,g=e.get(d,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const IT={[xv]:"LINEAR_TONE_MAPPING",[Sv]:"REINHARD_TONE_MAPPING",[yv]:"CINEON_TONE_MAPPING",[np]:"ACES_FILMIC_TONE_MAPPING",[Ev]:"AGX_TONE_MAPPING",[bv]:"NEUTRAL_TONE_MAPPING",[Mv]:"CUSTOM_TONE_MAPPING"};function BT(r,e,i,s,l,c){const h=new ea(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new jr(e,i):void 0}),p=new ea(e,i,{type:La,depthBuffer:!1,stencilBuffer:!1}),m=new oi;m.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const d=new EM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Bn(m,d),S=new vp(-1,1,1,-1,0,1);let g=null,E=null,T=!1,w,M=null,x=[],F=!1;this.setSize=function(H,C){h.setSize(H,C),p.setSize(H,C);for(let I=0;I<x.length;I++){const U=x[I];U.setSize&&U.setSize(H,C)}},this.setEffects=function(H){x=H,F=x.length>0&&x[0].isRenderPass===!0;const C=h.width,I=h.height;for(let U=0;U<x.length;U++){const O=x[U];O.setSize&&O.setSize(C,I)}},this.begin=function(H,C){if(T||H.toneMapping===$i&&x.length===0)return!1;if(M=C,C!==null){const I=C.width,U=C.height;(h.width!==I||h.height!==U)&&this.setSize(I,U)}return F===!1&&H.setRenderTarget(h),w=H.toneMapping,H.toneMapping=$i,!0},this.hasRenderPass=function(){return F},this.end=function(H,C){H.toneMapping=w,T=!0;let I=h,U=p;for(let O=0;O<x.length;O++){const b=x[O];if(b.enabled!==!1&&(b.render(H,U,I,C),b.needsSwap!==!1)){const D=I;I=U,U=D}}if(g!==H.outputColorSpace||E!==H.toneMapping){g=H.outputColorSpace,E=H.toneMapping,d.defines={},Rt.getTransfer(g)===Gt&&(d.defines.SRGB_TRANSFER="");const O=IT[E];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,H.setRenderTarget(M),H.render(v,S),M=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Zv=new Qn,Jd=new jr(1,1),Kv=new Ov,Qv=new eM,Jv=new Fv,K_=[],Q_=[],J_=new Float32Array(16),j_=new Float32Array(9),$_=new Float32Array(4);function to(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=K_[l];if(c===void 0&&(c=new Float32Array(l),K_[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,r[h].toArray(c,p)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function An(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function du(r,e){let i=Q_[e];i===void 0&&(i=new Int32Array(e),Q_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function zT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function FT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2fv(this.addr,e),An(i,e)}}function HT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;r.uniform3fv(this.addr,e),An(i,e)}}function GT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4fv(this.addr,e),An(i,e)}}function VT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;$_.set(s),r.uniformMatrix2fv(this.addr,!1,$_),An(i,s)}}function kT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;j_.set(s),r.uniformMatrix3fv(this.addr,!1,j_),An(i,s)}}function XT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;J_.set(s),r.uniformMatrix4fv(this.addr,!1,J_),An(i,s)}}function WT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function qT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2iv(this.addr,e),An(i,e)}}function YT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3iv(this.addr,e),An(i,e)}}function ZT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4iv(this.addr,e),An(i,e)}}function KT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function QT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2uiv(this.addr,e),An(i,e)}}function JT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3uiv(this.addr,e),An(i,e)}}function jT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4uiv(this.addr,e),An(i,e)}}function $T(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Jd.compareFunction=i.isReversedDepthBuffer()?up:cp,c=Jd):c=Zv,i.setTexture2D(e||c,l)}function e1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Qv,l)}function t1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Jv,l)}function n1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Kv,l)}function i1(r){switch(r){case 5126:return zT;case 35664:return FT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return XT;case 5124:case 35670:return WT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return ZT;case 5125:return KT;case 36294:return QT;case 36295:return JT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function a1(r,e){r.uniform1fv(this.addr,e)}function s1(r,e){const i=to(e,this.size,2);r.uniform2fv(this.addr,i)}function r1(r,e){const i=to(e,this.size,3);r.uniform3fv(this.addr,i)}function o1(r,e){const i=to(e,this.size,4);r.uniform4fv(this.addr,i)}function l1(r,e){const i=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function c1(r,e){const i=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function u1(r,e){const i=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function f1(r,e){r.uniform1iv(this.addr,e)}function h1(r,e){r.uniform2iv(this.addr,e)}function d1(r,e){r.uniform3iv(this.addr,e)}function p1(r,e){r.uniform4iv(this.addr,e)}function m1(r,e){r.uniform1uiv(this.addr,e)}function g1(r,e){r.uniform2uiv(this.addr,e)}function _1(r,e){r.uniform3uiv(this.addr,e)}function v1(r,e){r.uniform4uiv(this.addr,e)}function x1(r,e,i){const s=this.cache,l=e.length,c=du(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Jd:h=Zv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function S1(r,e,i){const s=this.cache,l=e.length,c=du(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Qv,c[h])}function y1(r,e,i){const s=this.cache,l=e.length,c=du(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Jv,c[h])}function M1(r,e,i){const s=this.cache,l=e.length,c=du(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Kv,c[h])}function E1(r){switch(r){case 5126:return a1;case 35664:return s1;case 35665:return r1;case 35666:return o1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}class b1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=i1(i.type)}}class T1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=E1(i.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function ev(r,e){r.seq.push(e),r.map[e.id]=e}function R1(r,e,i){const s=r.name,l=s.length;for(nd.lastIndex=0;;){const c=nd.exec(s),h=nd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){ev(i,d===void 0?new b1(p,r,e):new T1(p,r,e));break}else{let S=i.map[p];S===void 0&&(S=new A1(p),ev(i,S)),i=S}}}class tu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);R1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function tv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const C1=37297;let w1=0;function D1(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const nv=new lt;function L1(r){Rt._getMatrix(nv,Rt.workingColorSpace,r);const e=`mat3( ${nv.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(r)){case su:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function iv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+D1(r.getShaderSource(e),p)}else return c}function U1(r,e){const i=L1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const N1={[xv]:"Linear",[Sv]:"Reinhard",[yv]:"Cineon",[np]:"ACESFilmic",[Ev]:"AgX",[bv]:"Neutral",[Mv]:"Custom"};function O1(r,e){const i=N1[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new j;function P1(){Rt.getLuminanceCoefficients(qc);const r=qc.x.toFixed(4),e=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function B1(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function z1(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:p}}return i}function el(r){return r!==""}function av(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(r){return r.replace(F1,G1)}const H1=new Map;function G1(r,e){let i=gt[e];if(i===void 0){const s=H1.get(e);if(s!==void 0)i=gt[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jd(i)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rv(r){return r.replace(V1,k1)}function k1(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ov(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const X1={[Kc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function W1(r){return X1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q1={[Qs]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function Y1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":q1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z1={[Jr]:"ENVMAP_MODE_REFRACTION"};function K1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Z1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q1={[vv]:"ENVMAP_BLENDING_MULTIPLY",[Uy]:"ENVMAP_BLENDING_MIX",[Ny]:"ENVMAP_BLENDING_ADD"};function J1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Q1[r.combine]||"ENVMAP_BLENDING_NONE"}function j1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function $1(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=W1(i),d=Y1(i),v=K1(i),S=J1(i),g=j1(i),E=I1(i),T=B1(c),w=l.createProgram();let M,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(el).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(el).join(`
`),x.length>0&&(x+=`
`)):(M=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),x=[ov(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$i?"#define TONE_MAPPING":"",i.toneMapping!==$i?gt.tonemapping_pars_fragment:"",i.toneMapping!==$i?O1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,U1("linearToOutputTexel",i.outputColorSpace),P1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),h=jd(h),h=av(h,i),h=sv(h,i),p=jd(p),p=av(p,i),p=sv(p,i),h=rv(h),p=rv(p),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===h_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===h_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=F+M+h,C=F+x+p,I=tv(l,l.VERTEX_SHADER,H),U=tv(l,l.FRAGMENT_SHADER,C);l.attachShader(w,I),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function O(V){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(w)||"",ee=l.getShaderInfoLog(I)||"",te=l.getShaderInfoLog(U)||"",K=q.trim(),P=ee.trim(),z=te.trim();let ie=!0,ge=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,I,U);else{const Me=iv(l,I,"vertex"),N=iv(l,U,"fragment");Ct("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+K+`
`+Me+`
`+N)}else K!==""?it("WebGLProgram: Program Info Log:",K):(P===""||z==="")&&(ge=!1);ge&&(V.diagnostics={runnable:ie,programLog:K,vertexShader:{log:P,prefix:M},fragmentShader:{log:z,prefix:x}})}l.deleteShader(I),l.deleteShader(U),b=new tu(l,w),D=z1(l,w)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(w,C1)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=U,this}let eA=0;class tA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new nA(e),i.set(e,s)),s}}class nA{constructor(e){this.id=eA++,this.code=e,this.usedTimes=0}}function iA(r){return r===Js||r===nu||r===iu}function aA(r,e,i,s,l,c){const h=new hp,p=new tA,m=new Set,d=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,D,k,V,q,ee){const te=V.fog,K=q.geometry,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ie=e.get(b.envMap||P,z),ge=ie&&ie.mapping===cu?ie.image.height:null,Me=E[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&it("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const N=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,B=N!==void 0?N.length:0;let J=0;K.morphAttributes.position!==void 0&&(J=1),K.morphAttributes.normal!==void 0&&(J=2),K.morphAttributes.color!==void 0&&(J=3);let Se,De,ne,xe;if(Me){const Ae=Qi[Me];Se=Ae.vertexShader,De=Ae.fragmentShader}else{Se=b.vertexShader,De=b.fragmentShader;const Ae=p.getVertexShaderStage(b),rt=p.getFragmentShaderStage(b);p.update(b,Ae,rt),ne=Ae.id,xe=rt.id}const be=r.getRenderTarget(),Ge=r.state.buffers.depth.getReversed(),et=q.isInstancedMesh===!0,Ke=q.isBatchedMesh===!0,Pt=!!b.map,ct=!!b.matcap,vt=!!ie,xt=!!b.aoMap,ut=!!b.lightMap,nn=!!b.bumpMap&&b.wireframe===!1,Jt=!!b.normalMap,Vt=!!b.displacementMap,jt=!!b.emissiveMap,kt=!!b.metalnessMap,an=!!b.roughnessMap,Y=b.anisotropy>0,Ut=b.clearcoat>0,Tt=b.dispersion>0,L=b.iridescence>0,y=b.sheen>0,Q=b.transmission>0,se=Y&&!!b.anisotropyMap,de=Ut&&!!b.clearcoatMap,we=Ut&&!!b.clearcoatNormalMap,Ne=Ut&&!!b.clearcoatRoughnessMap,pe=L&&!!b.iridescenceMap,me=L&&!!b.iridescenceThicknessMap,Re=y&&!!b.sheenColorMap,Be=y&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Oe=!!b.specularColorMap,Ze=!!b.specularIntensityMap,Qe=Q&&!!b.transmissionMap,nt=Q&&!!b.thicknessMap,W=!!b.gradientMap,Le=!!b.alphaMap,_e=b.alphaTest>0,Ue=!!b.alphaHash,ze=!!b.extensions;let ae=$i;b.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Te={shaderID:Me,shaderType:b.type,shaderName:b.name,vertexShader:Se,fragmentShader:De,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&q._colorsTexture!==null,instancing:et,instancingColor:et&&q.instanceColor!==null,instancingMorph:et&&q.morphTexture!==null,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:ct,envMap:vt,envMapMode:vt&&ie.mapping,envMapCubeUVHeight:ge,aoMap:xt,lightMap:ut,bumpMap:nn,normalMap:Jt,displacementMap:Vt,emissiveMap:jt,normalMapObjectSpace:Jt&&b.normalMapType===Iy,normalMapTangentSpace:Jt&&b.normalMapType===Zd,packedNormalMap:Jt&&b.normalMapType===Zd&&iA(b.normalMap.format),metalnessMap:kt,roughnessMap:an,anisotropy:Y,anisotropyMap:se,clearcoat:Ut,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:Ne,dispersion:Tt,iridescence:L,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:y,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:Oe,specularIntensityMap:Ze,transmission:Q,transmissionMap:Qe,thicknessMap:nt,gradientMap:W,opaque:b.transparent===!1&&b.blending===Yr&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:_e,alphaHash:Ue,combine:b.combine,mapUv:Pt&&T(b.map.channel),aoMapUv:xt&&T(b.aoMap.channel),lightMapUv:ut&&T(b.lightMap.channel),bumpMapUv:nn&&T(b.bumpMap.channel),normalMapUv:Jt&&T(b.normalMap.channel),displacementMapUv:Vt&&T(b.displacementMap.channel),emissiveMapUv:jt&&T(b.emissiveMap.channel),metalnessMapUv:kt&&T(b.metalnessMap.channel),roughnessMapUv:an&&T(b.roughnessMap.channel),anisotropyMapUv:se&&T(b.anisotropyMap.channel),clearcoatMapUv:de&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(b.sheenRoughnessMap.channel),specularMapUv:Pe&&T(b.specularMap.channel),specularColorMapUv:Oe&&T(b.specularColorMap.channel),specularIntensityMapUv:Ze&&T(b.specularIntensityMap.channel),transmissionMapUv:Qe&&T(b.transmissionMap.channel),thicknessMapUv:nt&&T(b.thicknessMap.channel),alphaMapUv:Le&&T(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Jt||Y),vertexNormals:!!K.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!K.attributes.uv&&(Pt||Le),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||K.attributes.normal===void 0&&Jt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ge,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:J,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===Gt,decodeVideoTextureEmissive:jt&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===Gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hi,flipSided:b.side===ri,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=m.has(1),Te.vertexUv2s=m.has(2),Te.vertexUv3s=m.has(3),m.clear(),Te}function M(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)D.push(k),D.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(x(D,b),F(D,b),D.push(r.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function x(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function F(b,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),D.packedNormalMap&&h.enable(22),D.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),D.numLightProbeGrids>0&&h.enable(22),D.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function H(b){const D=E[b.type];let k;if(D){const V=Qi[D];k=SM.clone(V.uniforms)}else k=b.uniforms;return k}function C(b,D){let k=v.get(D);return k!==void 0?++k.usedTimes:(k=new $1(r,D,b,l),d.push(k),v.set(D,k)),k}function I(b){if(--b.usedTimes===0){const D=d.indexOf(b);d[D]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function O(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:H,acquireProgram:C,releaseProgram:I,releaseShaderCache:U,programs:d,dispose:O}}function sA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function rA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function lv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,T,w,M,x){let F=r[e];return F===void 0?(F={id:g.id,object:g,geometry:E,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:x},r[e]=F):(F.id=g.id,F.object=g,F.geometry=E,F.material=T,F.materialVariant=h(g),F.groupOrder=w,F.renderOrder=g.renderOrder,F.z=M,F.group=x),e++,F}function m(g,E,T,w,M,x){const F=p(g,E,T,w,M,x);T.transmission>0?s.push(F):T.transparent===!0?l.push(F):i.push(F)}function d(g,E,T,w,M,x){const F=p(g,E,T,w,M,x);T.transmission>0?s.unshift(F):T.transparent===!0?l.unshift(F):i.unshift(F)}function v(g,E,T){i.length>1&&i.sort(g||rA),s.length>1&&s.sort(E||lv),l.length>1&&l.sort(E||lv),T&&(i.reverse(),s.reverse(),l.reverse())}function S(){for(let g=e,E=r.length;g<E;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:S,sort:v}}function oA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new cv,r.set(s,[h])):l>=c.length?(h=new cv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function lA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new mt};break;case"SpotLight":i={position:new j,direction:new j,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":i={color:new mt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=i,i}}}function cA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let uA=0;function fA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hA(r){const e=new lA,i=cA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new j);const l=new j,c=new tn,h=new tn;function p(d){let v=0,S=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,T=0,w=0,M=0,x=0,F=0,H=0,C=0,I=0,U=0,O=0;d.sort(fA);for(let D=0,k=d.length;D<k;D++){const V=d[D],q=V.color,ee=V.intensity,te=V.distance;let K=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Js?K=V.shadow.map.texture:K=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=q.r*ee,S+=q.g*ee,g+=q.b*ee;else if(V.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(V.sh.coefficients[P],ee);O++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const z=V.shadow,ie=i.get(V);ie.shadowIntensity=z.intensity,ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,s.directionalShadow[E]=ie,s.directionalShadowMap[E]=K,s.directionalShadowMatrix[E]=V.shadow.matrix,F++}s.directional[E]=P,E++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(q).multiplyScalar(ee),P.distance=te,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,s.spot[w]=P;const z=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,z.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[w]=z.matrix,V.castShadow){const ie=i.get(V);ie.shadowIntensity=z.intensity,ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,s.spotShadow[w]=ie,s.spotShadowMap[w]=K,C++}w++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(q).multiplyScalar(ee),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=P,M++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const z=V.shadow,ie=i.get(V);ie.shadowIntensity=z.intensity,ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,ie.shadowCameraNear=z.camera.near,ie.shadowCameraFar=z.camera.far,s.pointShadow[T]=ie,s.pointShadowMap[T]=K,s.pointShadowMatrix[T]=V.shadow.matrix,H++}s.point[T]=P,T++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(ee),P.groundColor.copy(V.groundColor).multiplyScalar(ee),s.hemi[x]=P,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==M||b.hemiLength!==x||b.numDirectionalShadows!==F||b.numPointShadows!==H||b.numSpotShadows!==C||b.numSpotMaps!==I||b.numLightProbes!==O)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=H,s.pointShadowMap.length=H,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=H,s.spotLightMatrix.length=C+I-U,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=O,b.directionalLength=E,b.pointLength=T,b.spotLength=w,b.rectAreaLength=M,b.hemiLength=x,b.numDirectionalShadows=F,b.numPointShadows=H,b.numSpotShadows=C,b.numSpotMaps=I,b.numLightProbes=O,s.version=uA++)}function m(d,v){let S=0,g=0,E=0,T=0,w=0;const M=v.matrixWorldInverse;for(let x=0,F=d.length;x<F;x++){const H=d[x];if(H.isDirectionalLight){const C=s.directional[S];C.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),S++}else if(H.isSpotLight){const C=s.spot[E];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),E++}else if(H.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(M),h.identity(),c.copy(H.matrixWorld),c.premultiply(M),h.extractRotation(c),C.halfWidth.set(H.width*.5,0,0),C.halfHeight.set(0,H.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),T++}else if(H.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(M),g++}else if(H.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(H.matrixWorld),C.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function uv(r){const e=new hA(r),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function dA(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new uv(r),e.set(l,[p])):c>=h.length?(p=new uv(r),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
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
}`,gA=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],_A=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],fv=new tn,jo=new j,id=new j;function vA(r,e,i){let s=new mp;const l=new st,c=new st,h=new ln,p=new TM,m=new AM,d={},v=i.maxTextureSize,S={[ms]:ri,[ri]:ms,[Hi]:Hi},g=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new oi;T.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Bn(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let x=this.type;this.render=function(U,O,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===dy&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kc);const D=r.getRenderTarget(),k=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),q=r.state;q.setBlending(wa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ee=x!==this.type;ee&&O.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(K=>K.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,K=U.length;te<K;te++){const P=U[te],z=P.shadow;if(z===void 0){it("WebGLShadowMap:",P,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ie=z.getFrameExtents();l.multiply(ie),c.copy(z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ie.x),l.x=c.x*ie.x,z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ie.y),l.y=c.y*ie.y,z.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ge,z.map===null||ee===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===$o){if(P.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ea(l.x,l.y,{format:Js,type:La,minFilter:qn,magFilter:qn,generateMipmaps:!1}),z.map.texture.name=P.name+".shadowMap",z.map.depthTexture=new jr(l.x,l.y,Ji),z.map.depthTexture.name=P.name+".shadowMapDepth",z.map.depthTexture.format=Ua,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zn,z.map.depthTexture.magFilter=zn}else P.isPointLight?(z.map=new Yv(l.x),z.map.depthTexture=new vM(l.x,na)):(z.map=new ea(l.x,l.y),z.map.depthTexture=new jr(l.x,l.y,na)),z.map.depthTexture.name=P.name+".shadowMap",z.map.depthTexture.format=Ua,this.type===Kc?(z.map.depthTexture.compareFunction=ge?up:cp,z.map.depthTexture.minFilter=qn,z.map.depthTexture.magFilter=qn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zn,z.map.depthTexture.magFilter=zn);z.camera.updateProjectionMatrix()}const Me=z.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<Me;N++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,N),r.clear();else{N===0&&(r.setRenderTarget(z.map),r.clear());const B=z.getViewport(N);h.set(c.x*B.x,c.y*B.y,c.x*B.z,c.y*B.w),q.viewport(h)}if(P.isPointLight){const B=z.camera,J=z.matrix,Se=P.distance||B.far;Se!==B.far&&(B.far=Se,B.updateProjectionMatrix()),jo.setFromMatrixPosition(P.matrixWorld),B.position.copy(jo),id.copy(B.position),id.add(gA[N]),B.up.copy(_A[N]),B.lookAt(id),B.updateMatrixWorld(),J.makeTranslation(-jo.x,-jo.y,-jo.z),fv.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),z._frustum.setFromProjectionMatrix(fv,B.coordinateSystem,B.reversedDepth)}else z.updateMatrices(P);s=z.getFrustum(),C(O,b,z.camera,P,this.type)}z.isPointLightShadow!==!0&&this.type===$o&&F(z,b),z.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(D,k,V)};function F(U,O){const b=e.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ea(l.x,l.y,{format:Js,type:La})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(O,null,b,g,w,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(O,null,b,E,w,null)}function H(U,O,b,D){let k=null;const V=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)k=V;else if(k=b.isPointLight===!0?m:p,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const q=k.uuid,ee=O.uuid;let te=d[q];te===void 0&&(te={},d[q]=te);let K=te[ee];K===void 0&&(K=k.clone(),te[ee]=K,O.addEventListener("dispose",I)),k=K}if(k.visible=O.visible,k.wireframe=O.wireframe,D===$o?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:S[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=r.properties.get(k);q.light=b}return k}function C(U,O,b,D,k){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&k===$o)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const ee=e.update(U),te=U.material;if(Array.isArray(te)){const K=ee.groups;for(let P=0,z=K.length;P<z;P++){const ie=K[P],ge=te[ie.materialIndex];if(ge&&ge.visible){const Me=H(U,ge,D,k);U.onBeforeShadow(r,U,O,b,ee,Me,ie),r.renderBufferDirect(b,null,ee,Me,U,ie),U.onAfterShadow(r,U,O,b,ee,Me,ie)}}}else if(te.visible){const K=H(U,te,D,k);U.onBeforeShadow(r,U,O,b,ee,K,null),r.renderBufferDirect(b,null,ee,K,U,null),U.onAfterShadow(r,U,O,b,ee,K,null)}}const q=U.children;for(let ee=0,te=q.length;ee<te;ee++)C(q[ee],O,b,D,k)}function I(U){U.target.removeEventListener("dispose",I);for(const b in d){const D=d[b],k=U.target.uuid;k in D&&(D[k].dispose(),delete D[k])}}}function xA(r,e){function i(){let W=!1;const Le=new ln;let _e=null;const Ue=new ln(0,0,0,0);return{setMask:function(ze){_e!==ze&&!W&&(r.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){W=ze},setClear:function(ze,ae,Te,Ae,rt){rt===!0&&(ze*=Ae,ae*=Ae,Te*=Ae),Le.set(ze,ae,Te,Ae),Ue.equals(Le)===!1&&(r.clearColor(ze,ae,Te,Ae),Ue.copy(Le))},reset:function(){W=!1,_e=null,Ue.set(-1,0,0,0)}}}function s(){let W=!1,Le=!1,_e=null,Ue=null,ze=null;return{setReversed:function(ae){if(Le!==ae){const Te=e.get("EXT_clip_control");ae?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),Le=ae;const Ae=ze;ze=null,this.setClear(Ae)}},getReversed:function(){return Le},setTest:function(ae){ae?be(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(ae){_e!==ae&&!W&&(r.depthMask(ae),_e=ae)},setFunc:function(ae){if(Le&&(ae=qy[ae]),Ue!==ae){switch(ae){case cd:r.depthFunc(r.NEVER);break;case ud:r.depthFunc(r.ALWAYS);break;case fd:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case hd:r.depthFunc(r.EQUAL);break;case dd:r.depthFunc(r.GEQUAL);break;case pd:r.depthFunc(r.GREATER);break;case md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=ae}},setLocked:function(ae){W=ae},setClear:function(ae){ze!==ae&&(ze=ae,Le&&(ae=1-ae),r.clearDepth(ae))},reset:function(){W=!1,_e=null,Ue=null,ze=null,Le=!1}}}function l(){let W=!1,Le=null,_e=null,Ue=null,ze=null,ae=null,Te=null,Ae=null,rt=null;return{setTest:function(at){W||(at?be(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(at){Le!==at&&!W&&(r.stencilMask(at),Le=at)},setFunc:function(at,Zt,yn){(_e!==at||Ue!==Zt||ze!==yn)&&(r.stencilFunc(at,Zt,yn),_e=at,Ue=Zt,ze=yn)},setOp:function(at,Zt,yn){(ae!==at||Te!==Zt||Ae!==yn)&&(r.stencilOp(at,Zt,yn),ae=at,Te=Zt,Ae=yn)},setLocked:function(at){W=at},setClear:function(at){rt!==at&&(r.clearStencil(at),rt=at)},reset:function(){W=!1,Le=null,_e=null,Ue=null,ze=null,ae=null,Te=null,Ae=null,rt=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},g={},E=new WeakMap,T=[],w=null,M=!1,x=null,F=null,H=null,C=null,I=null,U=null,O=null,b=new mt(0,0,0),D=0,k=!1,V=null,q=null,ee=null,te=null,K=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ie=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(ge)[1]),z=ie>=1):ge.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),z=ie>=2);let Me=null,N={};const B=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),Se=new ln().fromArray(B),De=new ln().fromArray(J);function ne(W,Le,_e,Ue){const ze=new Uint8Array(4),ae=r.createTexture();r.bindTexture(W,ae),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Te=0;Te<_e;Te++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(Le+Te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return ae}const xe={};xe[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),be(r.DEPTH_TEST),h.setFunc(Qr),nn(!1),Jt(r_),be(r.CULL_FACE),xt(wa);function be(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function Ge(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function et(W,Le){return g[W]!==Le?(r.bindFramebuffer(W,Le),g[W]=Le,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ke(W,Le){let _e=T,Ue=!1;if(W){_e=E.get(Le),_e===void 0&&(_e=[],E.set(Le,_e));const ze=W.textures;if(_e.length!==ze.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,Te=ze.length;ae<Te;ae++)_e[ae]=r.COLOR_ATTACHMENT0+ae;_e.length=ze.length,Ue=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(_e)}function Pt(W){return w!==W?(r.useProgram(W),w=W,!0):!1}const ct={[ks]:r.FUNC_ADD,[my]:r.FUNC_SUBTRACT,[gy]:r.FUNC_REVERSE_SUBTRACT};ct[_y]=r.MIN,ct[vy]=r.MAX;const vt={[xy]:r.ZERO,[Sy]:r.ONE,[yy]:r.SRC_COLOR,[od]:r.SRC_ALPHA,[Ry]:r.SRC_ALPHA_SATURATE,[Ty]:r.DST_COLOR,[Ey]:r.DST_ALPHA,[My]:r.ONE_MINUS_SRC_COLOR,[ld]:r.ONE_MINUS_SRC_ALPHA,[Ay]:r.ONE_MINUS_DST_COLOR,[by]:r.ONE_MINUS_DST_ALPHA,[Cy]:r.CONSTANT_COLOR,[wy]:r.ONE_MINUS_CONSTANT_COLOR,[Dy]:r.CONSTANT_ALPHA,[Ly]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(W,Le,_e,Ue,ze,ae,Te,Ae,rt,at){if(W===wa){M===!0&&(Ge(r.BLEND),M=!1);return}if(M===!1&&(be(r.BLEND),M=!0),W!==py){if(W!==x||at!==k){if((F!==ks||I!==ks)&&(r.blendEquation(r.FUNC_ADD),F=ks,I=ks),at)switch(W){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case o_:r.blendFunc(r.ONE,r.ONE);break;case l_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case c_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",W);break}else switch(W){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case o_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case l_:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case c_:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",W);break}H=null,C=null,U=null,O=null,b.set(0,0,0),D=0,x=W,k=at}return}ze=ze||Le,ae=ae||_e,Te=Te||Ue,(Le!==F||ze!==I)&&(r.blendEquationSeparate(ct[Le],ct[ze]),F=Le,I=ze),(_e!==H||Ue!==C||ae!==U||Te!==O)&&(r.blendFuncSeparate(vt[_e],vt[Ue],vt[ae],vt[Te]),H=_e,C=Ue,U=ae,O=Te),(Ae.equals(b)===!1||rt!==D)&&(r.blendColor(Ae.r,Ae.g,Ae.b,rt),b.copy(Ae),D=rt),x=W,k=!1}function ut(W,Le){W.side===Hi?Ge(r.CULL_FACE):be(r.CULL_FACE);let _e=W.side===ri;Le&&(_e=!_e),nn(_e),W.blending===Yr&&W.transparent===!1?xt(wa):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ue=W.stencilWrite;p.setTest(Ue),Ue&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function nn(W){V!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),V=W)}function Jt(W){W!==fy?(be(r.CULL_FACE),W!==q&&(W===r_?r.cullFace(r.BACK):W===hy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),q=W}function Vt(W){W!==ee&&(z&&r.lineWidth(W),ee=W)}function jt(W,Le,_e){W?(be(r.POLYGON_OFFSET_FILL),(te!==Le||K!==_e)&&(te=Le,K=_e,h.getReversed()&&(Le=-Le),r.polygonOffset(Le,_e))):Ge(r.POLYGON_OFFSET_FILL)}function kt(W){W?be(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function an(W){W===void 0&&(W=r.TEXTURE0+P-1),Me!==W&&(r.activeTexture(W),Me=W)}function Y(W,Le,_e){_e===void 0&&(Me===null?_e=r.TEXTURE0+P-1:_e=Me);let Ue=N[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},N[_e]=Ue),(Ue.type!==W||Ue.texture!==Le)&&(Me!==_e&&(r.activeTexture(_e),Me=_e),r.bindTexture(W,Le||xe[W]),Ue.type=W,Ue.texture=Le)}function Ut(){const W=N[Me];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Tt(){try{r.compressedTexImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function y(){try{r.texSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Q(){try{r.texSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function we(){try{r.texStorage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Ne(){try{r.texStorage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function pe(){try{r.texImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function me(){try{r.texImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Re(W){return S[W]!==void 0?S[W]:r.getParameter(W)}function Be(W,Le){S[W]!==Le&&(r.pixelStorei(W,Le),S[W]=Le)}function Pe(W){Se.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function Oe(W){De.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),De.copy(W))}function Ze(W,Le){let _e=d.get(Le);_e===void 0&&(_e=new WeakMap,d.set(Le,_e));let Ue=_e.get(W);Ue===void 0&&(Ue=r.getUniformBlockIndex(Le,W.name),_e.set(W,Ue))}function Qe(W,Le){const Ue=d.get(Le).get(W);m.get(Le)!==Ue&&(r.uniformBlockBinding(Le,Ue,W.__bindingPointIndex),m.set(Le,Ue))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},S={},Me=null,N={},g={},E=new WeakMap,T=[],w=null,M=!1,x=null,F=null,H=null,C=null,I=null,U=null,O=null,b=new mt(0,0,0),D=0,k=!1,V=null,q=null,ee=null,te=null,K=null,Se.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:be,disable:Ge,bindFramebuffer:et,drawBuffers:Ke,useProgram:Pt,setBlending:xt,setMaterial:ut,setFlipSided:nn,setCullFace:Jt,setLineWidth:Vt,setPolygonOffset:jt,setScissorTest:kt,activeTexture:an,bindTexture:Y,unbindTexture:Ut,compressedTexImage2D:Tt,compressedTexImage3D:L,texImage2D:pe,texImage3D:me,pixelStorei:Be,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:we,texStorage3D:Ne,texSubImage2D:y,texSubImage3D:Q,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Pe,viewport:Oe,reset:nt}}function SA(r,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new st,v=new WeakMap,S=new Set;let g;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,y){return T?new OffscreenCanvas(L,y):ru("canvas")}function M(L,y,Q){let se=1;const de=Tt(L);if((de.width>Q||de.height>Q)&&(se=Q/Math.max(de.width,de.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const we=Math.floor(se*de.width),Ne=Math.floor(se*de.height);g===void 0&&(g=w(we,Ne));const pe=y?w(we,Ne):g;return pe.width=we,pe.height=Ne,pe.getContext("2d").drawImage(L,0,0,we,Ne),it("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+we+"x"+Ne+")."),pe}else return"data"in L&&it("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function x(L){return L.generateMipmaps}function F(L){r.generateMipmap(L)}function H(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(L,y,Q,se,de,we=!1){if(L!==null){if(r[L]!==void 0)return r[L];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ne;se&&(Ne=e.get("EXT_texture_norm16"),Ne||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=y;if(y===r.RED&&(Q===r.FLOAT&&(pe=r.R32F),Q===r.HALF_FLOAT&&(pe=r.R16F),Q===r.UNSIGNED_BYTE&&(pe=r.R8),Q===r.UNSIGNED_SHORT&&Ne&&(pe=Ne.R16_EXT),Q===r.SHORT&&Ne&&(pe=Ne.R16_SNORM_EXT)),y===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pe=r.R8UI),Q===r.UNSIGNED_SHORT&&(pe=r.R16UI),Q===r.UNSIGNED_INT&&(pe=r.R32UI),Q===r.BYTE&&(pe=r.R8I),Q===r.SHORT&&(pe=r.R16I),Q===r.INT&&(pe=r.R32I)),y===r.RG&&(Q===r.FLOAT&&(pe=r.RG32F),Q===r.HALF_FLOAT&&(pe=r.RG16F),Q===r.UNSIGNED_BYTE&&(pe=r.RG8),Q===r.UNSIGNED_SHORT&&Ne&&(pe=Ne.RG16_EXT),Q===r.SHORT&&Ne&&(pe=Ne.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pe=r.RG8UI),Q===r.UNSIGNED_SHORT&&(pe=r.RG16UI),Q===r.UNSIGNED_INT&&(pe=r.RG32UI),Q===r.BYTE&&(pe=r.RG8I),Q===r.SHORT&&(pe=r.RG16I),Q===r.INT&&(pe=r.RG32I)),y===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),Q===r.UNSIGNED_INT&&(pe=r.RGB32UI),Q===r.BYTE&&(pe=r.RGB8I),Q===r.SHORT&&(pe=r.RGB16I),Q===r.INT&&(pe=r.RGB32I)),y===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),Q===r.UNSIGNED_INT&&(pe=r.RGBA32UI),Q===r.BYTE&&(pe=r.RGBA8I),Q===r.SHORT&&(pe=r.RGBA16I),Q===r.INT&&(pe=r.RGBA32I)),y===r.RGB&&(Q===r.UNSIGNED_SHORT&&Ne&&(pe=Ne.RGB16_EXT),Q===r.SHORT&&Ne&&(pe=Ne.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),y===r.RGBA){const me=we?su:Rt.getTransfer(de);Q===r.FLOAT&&(pe=r.RGBA32F),Q===r.HALF_FLOAT&&(pe=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(pe=me===Gt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Ne&&(pe=Ne.RGBA16_EXT),Q===r.SHORT&&Ne&&(pe=Ne.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function I(L,y){let Q;return L?y===null||y===na||y===al?Q=r.DEPTH24_STENCIL8:y===Ji?Q=r.DEPTH32F_STENCIL8:y===il&&(Q=r.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===na||y===al?Q=r.DEPTH_COMPONENT24:y===Ji?Q=r.DEPTH_COMPONENT32F:y===il&&(Q=r.DEPTH_COMPONENT16),Q}function U(L,y){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==zn&&L.minFilter!==qn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function O(L){const y=L.target;y.removeEventListener("dispose",O),D(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&S.delete(y)}function b(L){const y=L.target;y.removeEventListener("dispose",b),V(y)}function D(L){const y=s.get(L);if(y.__webglInit===void 0)return;const Q=L.source,se=E.get(Q);if(se){const de=se[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&k(L),Object.keys(se).length===0&&E.delete(Q)}s.remove(L)}function k(L){const y=s.get(L);r.deleteTexture(y.__webglTexture);const Q=L.source,se=E.get(Q);delete se[y.__cacheKey],h.memory.textures--}function V(L){const y=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(y.__webglFramebuffer[se]))for(let de=0;de<y.__webglFramebuffer[se].length;de++)r.deleteFramebuffer(y.__webglFramebuffer[se][de]);else r.deleteFramebuffer(y.__webglFramebuffer[se]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[se])}else{if(Array.isArray(y.__webglFramebuffer))for(let se=0;se<y.__webglFramebuffer.length;se++)r.deleteFramebuffer(y.__webglFramebuffer[se]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let se=0;se<y.__webglColorRenderbuffer.length;se++)y.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[se]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Q=L.textures;for(let se=0,de=Q.length;se<de;se++){const we=s.get(Q[se]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),h.memory.textures--),s.remove(Q[se])}s.remove(L)}let q=0;function ee(){q=0}function te(){return q}function K(L){q=L}function P(){const L=q;return L>=l.maxTextures&&it("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),q+=1,L}function z(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function ie(L,y){const Q=s.get(L);if(L.isVideoTexture&&Y(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const se=L.image;if(se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(Q,L,y);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+y)}function ge(L,y){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){Ge(Q,L,y);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+y)}function Me(L,y){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){Ge(Q,L,y);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+y)}function N(L,y){const Q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Q.__version!==L.version){et(Q,L,y);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+y)}const B={[gd]:r.REPEAT,[Ca]:r.CLAMP_TO_EDGE,[_d]:r.MIRRORED_REPEAT},J={[zn]:r.NEAREST,[Oy]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[qn]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[qs]:r.LINEAR_MIPMAP_LINEAR},Se={[By]:r.NEVER,[Vy]:r.ALWAYS,[zy]:r.LESS,[cp]:r.LEQUAL,[Fy]:r.EQUAL,[up]:r.GEQUAL,[Hy]:r.GREATER,[Gy]:r.NOTEQUAL};function De(L,y){if(y.type===Ji&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===qn||y.magFilter===Th||y.magFilter===Sc||y.magFilter===qs||y.minFilter===qn||y.minFilter===Th||y.minFilter===Sc||y.minFilter===qs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,B[y.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,B[y.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,B[y.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,J[y.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,J[y.minFilter]),y.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zn||y.minFilter!==Sc&&y.minFilter!==qs||y.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function ne(L,y){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",O));const se=y.source;let de=E.get(se);de===void 0&&(de={},E.set(se,de));const we=z(y);if(we!==L.__cacheKey){de[we]===void 0&&(de[we]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),de[we].usedTimes++;const Ne=de[L.__cacheKey];Ne!==void 0&&(de[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&k(y)),L.__cacheKey=we,L.__webglTexture=de[we].texture}return Q}function xe(L,y,Q){return Math.floor(Math.floor(L/Q)/y)}function be(L,y,Q,se){const we=L.updateRanges;if(we.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,Q,se,y.data);else{we.sort((Be,Pe)=>Be.start-Pe.start);let Ne=0;for(let Be=1;Be<we.length;Be++){const Pe=we[Ne],Oe=we[Be],Ze=Pe.start+Pe.count,Qe=xe(Oe.start,y.width,4),nt=xe(Pe.start,y.width,4);Oe.start<=Ze+1&&Qe===nt&&xe(Oe.start+Oe.count-1,y.width,4)===Qe?Pe.count=Math.max(Pe.count,Oe.start+Oe.count-Pe.start):(++Ne,we[Ne]=Oe)}we.length=Ne+1;const pe=i.getParameter(r.UNPACK_ROW_LENGTH),me=i.getParameter(r.UNPACK_SKIP_PIXELS),Re=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Be=0,Pe=we.length;Be<Pe;Be++){const Oe=we[Be],Ze=Math.floor(Oe.start/4),Qe=Math.ceil(Oe.count/4),nt=Ze%y.width,W=Math.floor(Ze/y.width),Le=Qe,_e=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,nt,W,Le,_e,Q,se,y.data)}L.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,pe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function Ge(L,y,Q){let se=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=r.TEXTURE_3D);const de=ne(L,y),we=y.source;i.bindTexture(se,L.__webglTexture,r.TEXTURE0+Q);const Ne=s.get(we);if(we.version!==Ne.__version||de===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const _e=Rt.getPrimaries(Rt.workingColorSpace),Ue=y.colorSpace===ds?null:Rt.getPrimaries(y.colorSpace),ze=y.colorSpace===ds||_e===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let me=M(y.image,!1,l.maxTextureSize);me=Ut(y,me);const Re=c.convert(y.format,y.colorSpace),Be=c.convert(y.type);let Pe=C(y.internalFormat,Re,Be,y.normalized,y.colorSpace,y.isVideoTexture);De(se,y);let Oe;const Ze=y.mipmaps,Qe=y.isVideoTexture!==!0,nt=Ne.__version===void 0||de===!0,W=we.dataReady,Le=U(y,me);if(y.isDepthTexture)Pe=I(y.format===Ys,y.type),nt&&(Qe?i.texStorage2D(r.TEXTURE_2D,1,Pe,me.width,me.height):i.texImage2D(r.TEXTURE_2D,0,Pe,me.width,me.height,0,Re,Be,null));else if(y.isDataTexture)if(Ze.length>0){Qe&&nt&&i.texStorage2D(r.TEXTURE_2D,Le,Pe,Ze[0].width,Ze[0].height);for(let _e=0,Ue=Ze.length;_e<Ue;_e++)Oe=Ze[_e],Qe?W&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Re,Be,Oe.data):i.texImage2D(r.TEXTURE_2D,_e,Pe,Oe.width,Oe.height,0,Re,Be,Oe.data);y.generateMipmaps=!1}else Qe?(nt&&i.texStorage2D(r.TEXTURE_2D,Le,Pe,me.width,me.height),W&&be(y,me,Re,Be)):i.texImage2D(r.TEXTURE_2D,0,Pe,me.width,me.height,0,Re,Be,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qe&&nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Pe,Ze[0].width,Ze[0].height,me.depth);for(let _e=0,Ue=Ze.length;_e<Ue;_e++)if(Oe=Ze[_e],y.format!==Vi)if(Re!==null)if(Qe){if(W)if(y.layerUpdates.size>0){const ze=V_(Oe.width,Oe.height,y.format,y.type);for(const ae of y.layerUpdates){const Te=Oe.data.subarray(ae*ze/Oe.data.BYTES_PER_ELEMENT,(ae+1)*ze/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,ae,Oe.width,Oe.height,1,Re,Te)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Oe.width,Oe.height,me.depth,Re,Oe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,Pe,Oe.width,Oe.height,me.depth,0,Oe.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Oe.width,Oe.height,me.depth,Re,Be,Oe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,_e,Pe,Oe.width,Oe.height,me.depth,0,Re,Be,Oe.data)}else{Qe&&nt&&i.texStorage2D(r.TEXTURE_2D,Le,Pe,Ze[0].width,Ze[0].height);for(let _e=0,Ue=Ze.length;_e<Ue;_e++)Oe=Ze[_e],y.format!==Vi?Re!==null?Qe?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Re,Oe.data):i.compressedTexImage2D(r.TEXTURE_2D,_e,Pe,Oe.width,Oe.height,0,Oe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?W&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Re,Be,Oe.data):i.texImage2D(r.TEXTURE_2D,_e,Pe,Oe.width,Oe.height,0,Re,Be,Oe.data)}else if(y.isDataArrayTexture)if(Qe){if(nt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Pe,me.width,me.height,me.depth),W)if(y.layerUpdates.size>0){const _e=V_(me.width,me.height,y.format,y.type);for(const Ue of y.layerUpdates){const ze=me.data.subarray(Ue*_e/me.data.BYTES_PER_ELEMENT,(Ue+1)*_e/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,me.width,me.height,1,Re,Be,ze)}y.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,Be,me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Re,Be,me.data);else if(y.isData3DTexture)Qe?(nt&&i.texStorage3D(r.TEXTURE_3D,Le,Pe,me.width,me.height,me.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,Be,me.data)):i.texImage3D(r.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Re,Be,me.data);else if(y.isFramebufferTexture){if(nt)if(Qe)i.texStorage2D(r.TEXTURE_2D,Le,Pe,me.width,me.height);else{let _e=me.width,Ue=me.height;for(let ze=0;ze<Le;ze++)i.texImage2D(r.TEXTURE_2D,ze,Pe,_e,Ue,0,Re,Be,null),_e>>=1,Ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),me.parentNode!==_e){_e.appendChild(me),S.add(y),_e.onpaint=Ue=>{const ze=Ue.changedElements;for(const ae of S)ze.includes(ae.image)&&(ae.needsUpdate=!0)},_e.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,me);else{const ze=r.RGBA,ae=r.RGBA,Te=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ze,ae,Te,me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&nt){const _e=Tt(Ze[0]);i.texStorage2D(r.TEXTURE_2D,Le,Pe,_e.width,_e.height)}for(let _e=0,Ue=Ze.length;_e<Ue;_e++)Oe=Ze[_e],Qe?W&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Re,Be,Oe):i.texImage2D(r.TEXTURE_2D,_e,Pe,Re,Be,Oe);y.generateMipmaps=!1}else if(Qe){if(nt){const _e=Tt(me);i.texStorage2D(r.TEXTURE_2D,Le,Pe,_e.width,_e.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Be,me)}else i.texImage2D(r.TEXTURE_2D,0,Pe,Re,Be,me);x(y)&&F(se),Ne.__version=we.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function et(L,y,Q){if(y.image.length!==6)return;const se=ne(L,y),de=y.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Q);const we=s.get(de);if(de.version!==we.__version||se===!0){i.activeTexture(r.TEXTURE0+Q);const Ne=Rt.getPrimaries(Rt.workingColorSpace),pe=y.colorSpace===ds?null:Rt.getPrimaries(y.colorSpace),me=y.colorSpace===ds||Ne===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,Be=y.image[0]&&y.image[0].isDataTexture,Pe=[];for(let ae=0;ae<6;ae++)!Re&&!Be?Pe[ae]=M(y.image[ae],!0,l.maxCubemapSize):Pe[ae]=Be?y.image[ae].image:y.image[ae],Pe[ae]=Ut(y,Pe[ae]);const Oe=Pe[0],Ze=c.convert(y.format,y.colorSpace),Qe=c.convert(y.type),nt=C(y.internalFormat,Ze,Qe,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Le=we.__version===void 0||se===!0,_e=de.dataReady;let Ue=U(y,Oe);De(r.TEXTURE_CUBE_MAP,y);let ze;if(Re){W&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,nt,Oe.width,Oe.height);for(let ae=0;ae<6;ae++){ze=Pe[ae].mipmaps;for(let Te=0;Te<ze.length;Te++){const Ae=ze[Te];y.format!==Vi?Ze!==null?W?_e&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,0,0,Ae.width,Ae.height,Ze,Ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,nt,Ae.width,Ae.height,0,Ae.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,0,0,Ae.width,Ae.height,Ze,Qe,Ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,nt,Ae.width,Ae.height,0,Ze,Qe,Ae.data)}}}else{if(ze=y.mipmaps,W&&Le){ze.length>0&&Ue++;const ae=Tt(Pe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,nt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Be){W?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Pe[ae].width,Pe[ae].height,Ze,Qe,Pe[ae].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,Pe[ae].width,Pe[ae].height,0,Ze,Qe,Pe[ae].data);for(let Te=0;Te<ze.length;Te++){const rt=ze[Te].image[ae].image;W?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,0,0,rt.width,rt.height,Ze,Qe,rt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,nt,rt.width,rt.height,0,Ze,Qe,rt.data)}}else{W?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ze,Qe,Pe[ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,Ze,Qe,Pe[ae]);for(let Te=0;Te<ze.length;Te++){const Ae=ze[Te];W?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,0,0,Ze,Qe,Ae.image[ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,nt,Ze,Qe,Ae.image[ae])}}}x(y)&&F(r.TEXTURE_CUBE_MAP),we.__version=de.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Ke(L,y,Q,se,de,we){const Ne=c.convert(Q.format,Q.colorSpace),pe=c.convert(Q.type),me=C(Q.internalFormat,Ne,pe,Q.normalized,Q.colorSpace),Re=s.get(y),Be=s.get(Q);if(Be.__renderTarget=y,!Re.__hasExternalTextures){const Pe=Math.max(1,y.width>>we),Oe=Math.max(1,y.height>>we);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?i.texImage3D(de,we,me,Pe,Oe,y.depth,0,Ne,pe,null):i.texImage2D(de,we,me,Pe,Oe,0,Ne,pe,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),an(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,de,Be.__webglTexture,0,kt(y)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,de,Be.__webglTexture,we),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(L,y,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),y.depthBuffer){const se=y.depthTexture,de=se&&se.isDepthTexture?se.type:null,we=I(y.stencilBuffer,de),Ne=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;an(y)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,kt(y),we,y.width,y.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,kt(y),we,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,we,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,L)}else{const se=y.textures;for(let de=0;de<se.length;de++){const we=se[de],Ne=c.convert(we.format,we.colorSpace),pe=c.convert(we.type),me=C(we.internalFormat,Ne,pe,we.normalized,we.colorSpace);an(y)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,kt(y),me,y.width,y.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,kt(y),me,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,me,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(L,y,Q){const se=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(y.depthTexture);if(de.__renderTarget=y,(!de.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),se){if(de.__webglInit===void 0&&(de.__webglInit=!0,y.depthTexture.addEventListener("dispose",O)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),De(r.TEXTURE_CUBE_MAP,y.depthTexture);const Re=c.convert(y.depthTexture.format),Be=c.convert(y.depthTexture.type);let Pe;y.depthTexture.format===Ua?Pe=r.DEPTH_COMPONENT24:y.depthTexture.format===Ys&&(Pe=r.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,y.width,y.height,0,Re,Be,null)}}else ie(y.depthTexture,0);const we=de.__webglTexture,Ne=kt(y),pe=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,me=y.depthTexture.format===Ys?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ua)an(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,we,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,we,0);else if(y.depthTexture.format===Ys)an(y)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,we,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(L){const y=s.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const se=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){const de=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",de)};se.addEventListener("dispose",de),y.__depthDisposeCallback=de}y.__boundDepthTexture=se}if(L.depthTexture&&!y.__autoAllocateDepthBuffer)if(Q)for(let se=0;se<6;se++)ct(y.__webglFramebuffer[se],L,se);else{const se=L.texture.mipmaps;se&&se.length>0?ct(y.__webglFramebuffer[0],L,0):ct(y.__webglFramebuffer,L,0)}else if(Q){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=r.createRenderbuffer(),Pt(y.__webglDepthbuffer[se],L,!1);else{const de=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,we)}}else{const se=L.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Pt(y.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,we)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(L,y,Q){const se=s.get(L);y!==void 0&&Ke(se.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&vt(L)}function ut(L){const y=L.texture,Q=s.get(L),se=s.get(y);L.addEventListener("dispose",b);const de=L.textures,we=L.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=y.version,h.memory.textures++),we){Q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){Q.__webglFramebuffer[pe]=[];for(let me=0;me<y.mipmaps.length;me++)Q.__webglFramebuffer[pe][me]=r.createFramebuffer()}else Q.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)Q.__webglFramebuffer[pe]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let pe=0,me=de.length;pe<me;pe++){const Re=s.get(de[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&an(L)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const me=de[pe];Q.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const Re=c.convert(me.format,me.colorSpace),Be=c.convert(me.type),Pe=C(me.internalFormat,Re,Be,me.normalized,me.colorSpace,L.isXRRenderTarget===!0),Oe=kt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Pe,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,Q.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){i.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),De(r.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Ke(Q.__webglFramebuffer[pe][me],L,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Ke(Q.__webglFramebuffer[pe],L,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(y)&&F(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let pe=0,me=de.length;pe<me;pe++){const Re=de[pe],Be=s.get(Re);let Pe=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Be.__webglTexture),De(Pe,Re),Ke(Q.__webglFramebuffer,L,Re,r.COLOR_ATTACHMENT0+pe,Pe,0),x(Re)&&F(Pe)}i.unbindTexture()}else{let pe=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(pe,se.__webglTexture),De(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Ke(Q.__webglFramebuffer[me],L,y,r.COLOR_ATTACHMENT0,pe,me);else Ke(Q.__webglFramebuffer,L,y,r.COLOR_ATTACHMENT0,pe,0);x(y)&&F(pe),i.unbindTexture()}L.depthBuffer&&vt(L)}function nn(L){const y=L.textures;for(let Q=0,se=y.length;Q<se;Q++){const de=y[Q];if(x(de)){const we=H(L),Ne=s.get(de).__webglTexture;i.bindTexture(we,Ne),F(we),i.unbindTexture()}}}const Jt=[],Vt=[];function jt(L){if(L.samples>0){if(an(L)===!1){const y=L.textures,Q=L.width,se=L.height;let de=r.COLOR_BUFFER_BIT;const we=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=s.get(L),pe=y.length>1;if(pe)for(let Re=0;Re<y.length;Re++)i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const me=L.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const Be=s.get(y[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,Q,se,0,0,Q,se,de,r.NEAREST),m===!0&&(Jt.length=0,Vt.length=0,Jt.push(r.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Jt.push(we),Vt.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<y.length;Re++){i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const Be=s.get(y[Re]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,Be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const y=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function kt(L){return Math.min(l.maxSamples,L.samples)}function an(L){const y=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(L){const y=h.render.frame;v.get(L)!==y&&(v.set(L,y),L.update())}function Ut(L,y){const Q=L.colorSpace,se=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==au&&Q!==ds&&(Rt.getTransfer(Q)===Gt?(se!==Vi||de!==yi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Q)),y}function Tt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=P,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=K,this.setTexture2D=ie,this.setTexture2DArray=ge,this.setTexture3D=Me,this.setTextureCube=N,this.rebindTextures=xt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function yA(r,e){function i(s,l=ds){let c;const h=Rt.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===sp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Cv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===wv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Av)return r.BYTE;if(s===Rv)return r.SHORT;if(s===il)return r.UNSIGNED_SHORT;if(s===ip)return r.INT;if(s===na)return r.UNSIGNED_INT;if(s===Ji)return r.FLOAT;if(s===La)return r.HALF_FLOAT;if(s===Dv)return r.ALPHA;if(s===Lv)return r.RGB;if(s===Vi)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===Ys)return r.DEPTH_STENCIL;if(s===Uv)return r.RED;if(s===rp)return r.RED_INTEGER;if(s===Js)return r.RG;if(s===op)return r.RG_INTEGER;if(s===lp)return r.RGBA_INTEGER;if(s===Qc||s===Jc||s===jc||s===$c)if(h===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vd||s===xd||s===Sd||s===yd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Md||s===Ed||s===bd||s===Td||s===Ad||s===nu||s===Rd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Md||s===Ed)return h===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===bd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Td)return c.COMPRESSED_R11_EAC;if(s===Ad)return c.COMPRESSED_SIGNED_R11_EAC;if(s===nu)return c.COMPRESSED_RG11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Cd||s===wd||s===Dd||s===Ld||s===Ud||s===Nd||s===Od||s===Pd||s===Id||s===Bd||s===zd||s===Fd||s===Hd||s===Gd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Cd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ld)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ud)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Od)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===kd||s===Xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return h===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wd||s===qd||s===iu||s===Yd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const MA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
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

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Hv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ia({vertexShader:MA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bn(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TA extends vs{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,S=null,g=null,E=null,T=null;const w=typeof XRWebGLBinding<"u",M=new bA,x={},F=i.getContextAttributes();let H=null,C=null;const I=[],U=[],O=new st;let b=null;const D=new Si;D.viewport=new ln;const k=new Si;k.viewport=new ln;const V=[D,k],q=new UM;let ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=I[ne];return xe===void 0&&(xe=new Uh,I[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=I[ne];return xe===void 0&&(xe=new Uh,I[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=I[ne];return xe===void 0&&(xe=new Uh,I[ne]=xe),xe.getHandSpace()};function K(ne){const xe=U.indexOf(ne.inputSource);if(xe===-1)return;const be=I[xe];be!==void 0&&(be.update(ne.inputSource,ne.frame,d||h),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function P(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",z);for(let ne=0;ne<I.length;ne++){const xe=U[ne];xe!==null&&(U[ne]=null,I[ne].disconnect(xe))}ee=null,te=null,M.reset();for(const ne in x)delete x[ne];e.setRenderTarget(H),E=null,g=null,S=null,l=null,C=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return S===null&&w&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",P),l.addEventListener("inputsourceschange",z),F.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ge=null,et=null;F.depth&&(et=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=F.stencil?Ys:Ua,Ge=F.stencil?al:na);const Ke={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new ea(g.textureWidth,g.textureHeight,{format:Vi,type:yi,depthTexture:new jr(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new ea(E.framebufferWidth,E.framebufferHeight,{format:Vi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),De.setContext(l),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(ne){for(let xe=0;xe<ne.removed.length;xe++){const be=ne.removed[xe],Ge=U.indexOf(be);Ge>=0&&(U[Ge]=null,I[Ge].disconnect(be))}for(let xe=0;xe<ne.added.length;xe++){const be=ne.added[xe];let Ge=U.indexOf(be);if(Ge===-1){for(let Ke=0;Ke<I.length;Ke++)if(Ke>=U.length){U.push(be),Ge=Ke;break}else if(U[Ke]===null){U[Ke]=be,Ge=Ke;break}if(Ge===-1)break}const et=I[Ge];et&&et.connect(be)}}const ie=new j,ge=new j;function Me(ne,xe,be){ie.setFromMatrixPosition(xe.matrixWorld),ge.setFromMatrixPosition(be.matrixWorld);const Ge=ie.distanceTo(ge),et=xe.projectionMatrix.elements,Ke=be.projectionMatrix.elements,Pt=et[14]/(et[10]-1),ct=et[14]/(et[10]+1),vt=(et[9]+1)/et[5],xt=(et[9]-1)/et[5],ut=(et[8]-1)/et[0],nn=(Ke[8]+1)/Ke[0],Jt=Pt*ut,Vt=Pt*nn,jt=Ge/(-ut+nn),kt=jt*-ut;if(xe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(kt),ne.translateZ(jt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),et[10]===-1)ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const an=Pt+jt,Y=ct+jt,Ut=Jt-kt,Tt=Vt+(Ge-kt),L=vt*ct/Y*an,y=xt*ct/Y*an;ne.projectionMatrix.makePerspective(Ut,Tt,L,y,an,Y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function N(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let xe=ne.near,be=ne.far;M.texture!==null&&(M.depthNear>0&&(xe=M.depthNear),M.depthFar>0&&(be=M.depthFar)),q.near=k.near=D.near=xe,q.far=k.far=D.far=be,(ee!==q.near||te!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),ee=q.near,te=q.far),q.layers.mask=ne.layers.mask|6,D.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;const Ge=ne.parent,et=q.cameras;N(q,Ge);for(let Ke=0;Ke<et.length;Ke++)N(et[Ke],Ge);et.length===2?Me(q,D,k):q.projectionMatrix.copy(D.projectionMatrix),B(ne,q,Ge)};function B(ne,xe,be){be===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Kd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(ne){m=ne,g!==null&&(g.fixedFoveation=ne),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(ne){return x[ne]};let J=null;function Se(ne,xe){if(v=xe.getViewerPose(d||h),T=xe,v!==null){const be=v.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let Ge=!1;be.length!==q.cameras.length&&(q.cameras.length=0,Ge=!0);for(let ct=0;ct<be.length;ct++){const vt=be[ct];let xt=null;if(E!==null)xt=E.getViewport(vt);else{const nn=S.getViewSubImage(g,vt);xt=nn.viewport,ct===0&&(e.setRenderTargetTextures(C,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(C))}let ut=V[ct];ut===void 0&&(ut=new Si,ut.layers.enable(ct),ut.viewport=new ln,V[ct]=ut),ut.matrix.fromArray(vt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(vt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(xt.x,xt.y,xt.width,xt.height),ct===0&&(q.matrix.copy(ut.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ge===!0&&q.cameras.push(ut)}const et=l.enabledFeatures;if(et&&et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){S=s.getBinding();const ct=S.getDepthInformation(be[0]);ct&&ct.isValid&&ct.texture&&M.init(ct,l.renderState)}if(et&&et.includes("camera-access")&&w){e.state.unbindTexture(),S=s.getBinding();for(let ct=0;ct<be.length;ct++){const vt=be[ct].camera;if(vt){let xt=x[vt];xt||(xt=new Hv,x[vt]=xt);const ut=S.getCameraImage(vt);xt.sourceTexture=ut}}}}for(let be=0;be<I.length;be++){const Ge=U[be],et=I[be];Ge!==null&&et!==void 0&&et.update(Ge,xe,d||h)}J&&J(ne,xe),xe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xe}),T=null}const De=new Wv;De.setAnimationLoop(Se),this.setAnimationLoop=function(ne){J=ne},this.dispose=function(){}}}const AA=new tn,jv=new lt;jv.set(-1,0,0,0,1,0,0,0,1);function RA(r,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Gv(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,F,H,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),S(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),g(M,x),x.isMeshPhysicalMaterial&&E(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),T(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),w(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?m(M,x,F,H):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ri&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ri&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=e.get(x),H=F.envMap,C=F.envMapRotation;H&&(M.envMap.value=H,M.envMapRotation.value.setFromMatrix4(AA.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(jv),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,F,H){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=H*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function S(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function g(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ri&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const F=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function CA(r,e,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const U=I.program;s.uniformBlockBinding(C,U)}function d(C,I){let U=l[C.id];U===void 0&&(M(C),U=v(C),l[C.id]=U,C.addEventListener("dispose",F));const O=I.program;s.updateUBOMapping(C,O);const b=e.render.frame;c[C.id]!==b&&(g(C),c[C.id]=b)}function v(C){const I=S();C.__bindingPointIndex=I;const U=r.createBuffer(),O=C.__size,b=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,O,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,U),U}function S(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const I=l[C.id],U=C.uniforms,O=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let b=0,D=U.length;b<D;b++){const k=U[b];if(Array.isArray(k))for(let V=0,q=k.length;V<q;V++)E(k[V],b,V,O);else E(k,b,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(C,I,U,O){if(w(C,I,U,O)===!0){const b=C.__offset,D=C.value;if(Array.isArray(D)){let k=0;for(let V=0;V<D.length;V++){const q=D[V],ee=x(q);T(q,C.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,C.__data)}}function T(C,I,U){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,U)}function w(C,I,U,O){const b=C.value,D=I+"_"+U;if(O[D]===void 0)return typeof b=="number"||typeof b=="boolean"?O[D]=b:ArrayBuffer.isView(b)?O[D]=b.slice():O[D]=b.clone(),!0;{const k=O[D];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return O[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(k.equals(b)===!1)return k.copy(b),!0}}return!1}function M(C){const I=C.uniforms;let U=0;const O=16;for(let D=0,k=I.length;D<k;D++){const V=Array.isArray(I[D])?I[D]:[I[D]];for(let q=0,ee=V.length;q<ee;q++){const te=V[q],K=Array.isArray(te.value)?te.value:[te.value];for(let P=0,z=K.length;P<z;P++){const ie=K[P],ge=x(ie),Me=U%O,N=Me%ge.boundary,B=Me+N;U+=N,B!==0&&O-B<ge.storage&&(U+=O-B),te.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=U,U+=ge.storage}}}const b=U%O;return b>0&&(U+=O-b),C.__size=U,C.__cache={},this}function x(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):it("WebGLRenderer: Unsupported uniform value type.",C),I}function F(C){const I=C.target;I.removeEventListener("dispose",F);const U=h.indexOf(I.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function H(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:H}}const wA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function DA(){return Ki===null&&(Ki=new pM(wA,16,16,Js,La),Ki.name="DFG_LUT",Ki.minFilter=qn,Ki.magFilter=qn,Ki.wrapS=Ca,Ki.wrapT=Ca,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class LA{constructor(e={}){const{canvas:i=Xy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:E=yi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=E,M=new Set([lp,op,rp]),x=new Set([yi,na,il,al,ap,sp]),F=new Uint32Array(4),H=new Int32Array(4),C=new j;let I=null,U=null;const O=[],b=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,q=null,ee=null,te=null,K=null;this._outputColorSpace=xi;let P=0,z=0,ie=null,ge=-1,Me=null;const N=new ln,B=new ln;let J=null;const Se=new mt(0);let De=0,ne=i.width,xe=i.height,be=1,Ge=null,et=null;const Ke=new ln(0,0,ne,xe),Pt=new ln(0,0,ne,xe);let ct=!1;const vt=new mp;let xt=!1,ut=!1;const nn=new tn,Jt=new j,Vt=new ln,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function an(){return ie===null?be:1}let Y=s;function Ut(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tp}`),i.addEventListener("webglcontextlost",rt,!1),i.addEventListener("webglcontextrestored",at,!1),i.addEventListener("webglcontextcreationerror",Zt,!1),Y===null){const Z="webgl2";if(Y=Ut(Z,A),Y===null)throw Ut(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let Tt,L,y,Q,se,de,we,Ne,pe,me,Re,Be,Pe,Oe,Ze,Qe,nt,W,Le,_e,Ue,ze,ae;function Te(){Tt=new DT(Y),Tt.init(),Ue=new yA(Y,Tt),L=new MT(Y,Tt,e,Ue),y=new xA(Y,Tt),L.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ee=Y.createFramebuffer(),te=Y.createFramebuffer(),K=Y.createFramebuffer(),Q=new NT(Y),se=new sA,de=new SA(Y,Tt,y,se,L,Ue,Q),we=new wT(k),Ne=new BM(Y),ze=new ST(Y,Ne),pe=new LT(Y,Ne,Q,ze),me=new PT(Y,pe,Ne,ze,Q),W=new OT(Y,L,de),Ze=new ET(se),Re=new aA(k,we,Tt,L,ze,Ze),Be=new RA(k,se),Pe=new oA,Oe=new dA(Tt),nt=new xT(k,we,y,me,T,m),Qe=new vA(k,me,L),ae=new CA(Y,Q,L,y),Le=new yT(Y,Tt,Q),_e=new UT(Y,Tt,Q),Q.programs=Re.programs,k.capabilities=L,k.extensions=Tt,k.properties=se,k.renderLists=Pe,k.shadowMap=Qe,k.state=y,k.info=Q}Te(),w!==yi&&(D=new BT(w,i.width,i.height,p,l,c));const Ae=new TA(k,Y);this.xr=Ae,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(A){A!==void 0&&(be=A,this.setSize(ne,xe,!1))},this.getSize=function(A){return A.set(ne,xe)},this.setSize=function(A,Z,ue=!0){if(Ae.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,xe=Z,i.width=Math.floor(A*be),i.height=Math.floor(Z*be),ue===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(ne*be,xe*be).floor()},this.setDrawingBufferSize=function(A,Z,ue){ne=A,xe=Z,be=ue,i.width=Math.floor(A*ue),i.height=Math.floor(Z*ue),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(w===yi){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Ke)},this.setViewport=function(A,Z,ue,le){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,Z,ue,le),y.viewport(N.copy(Ke).multiplyScalar(be).round())},this.getScissor=function(A){return A.copy(Pt)},this.setScissor=function(A,Z,ue,le){A.isVector4?Pt.set(A.x,A.y,A.z,A.w):Pt.set(A,Z,ue,le),y.scissor(B.copy(Pt).multiplyScalar(be).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(A){y.setScissorTest(ct=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,ue=!0){let le=0;if(A){let ce=!1;if(ie!==null){const Fe=ie.texture.format;ce=M.has(Fe)}if(ce){const Fe=ie.texture.type,ke=x.has(Fe),Ie=nt.getClearColor(),We=nt.getClearAlpha(),Xe=Ie.r,je=Ie.g,ft=Ie.b;ke?(F[0]=Xe,F[1]=je,F[2]=ft,F[3]=We,Y.clearBufferuiv(Y.COLOR,0,F)):(H[0]=Xe,H[1]=je,H[2]=ft,H[3]=We,Y.clearBufferiv(Y.COLOR,0,H))}else le|=Y.COLOR_BUFFER_BIT}Z&&(le|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(le|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Y.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",rt,!1),i.removeEventListener("webglcontextrestored",at,!1),i.removeEventListener("webglcontextcreationerror",Zt,!1),nt.dispose(),Pe.dispose(),Oe.dispose(),se.dispose(),we.dispose(),me.dispose(),ze.dispose(),ae.dispose(),Re.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",cn),Ae.removeEventListener("sessionend",hn),Gn.stop()};function rt(A){A.preventDefault(),p_("WebGLRenderer: Context Lost."),V=!0}function at(){p_("WebGLRenderer: Context Restored."),V=!1;const A=Q.autoReset,Z=Qe.enabled,ue=Qe.autoUpdate,le=Qe.needsUpdate,ce=Qe.type;Te(),Q.autoReset=A,Qe.enabled=Z,Qe.autoUpdate=ue,Qe.needsUpdate=le,Qe.type=ce}function Zt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yn(A){const Z=A.target;Z.removeEventListener("dispose",yn),Ln(Z)}function Ln(A){Un(A),se.remove(A)}function Un(A){const Z=se.get(A).programs;Z!==void 0&&(Z.forEach(function(ue){Re.releaseProgram(ue)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,ue,le,ce,Fe){Z===null&&(Z=jt);const ke=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Ie=Pa(A,Z,ue,le,ce);y.setMaterial(le,ke);let We=ue.index,Xe=1;if(le.wireframe===!0){if(We=pe.getWireframeAttribute(ue),We===void 0)return;Xe=2}const je=ue.drawRange,ft=ue.attributes.position;let Je=je.start*Xe,wt=(je.start+je.count)*Xe;Fe!==null&&(Je=Math.max(Je,Fe.start*Xe),wt=Math.min(wt,(Fe.start+Fe.count)*Xe)),We!==null?(Je=Math.max(Je,0),wt=Math.min(wt,We.count)):ft!=null&&(Je=Math.max(Je,0),wt=Math.min(wt,ft.count));const sn=wt-Je;if(sn<0||sn===1/0)return;ze.setup(ce,le,Ie,ue,We);let Kt,It=Le;if(We!==null&&(Kt=Ne.get(We),It=_e,It.setIndex(Kt)),ce.isMesh)le.wireframe===!0?(y.setLineWidth(le.wireframeLinewidth*an()),It.setMode(Y.LINES)):It.setMode(Y.TRIANGLES);else if(ce.isLine){let Bt=le.linewidth;Bt===void 0&&(Bt=1),y.setLineWidth(Bt*an()),ce.isLineSegments?It.setMode(Y.LINES):ce.isLineLoop?It.setMode(Y.LINE_LOOP):It.setMode(Y.LINE_STRIP)}else ce.isPoints?It.setMode(Y.POINTS):ce.isSprite&&It.setMode(Y.TRIANGLES);if(ce.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))It.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const Bt=ce._multiDrawStarts,Ve=ce._multiDrawCounts,Vn=ce._multiDrawCount,St=We?Ne.get(We).bytesPerElement:1,Mn=se.get(le).currentProgram.getUniforms();for(let li=0;li<Vn;li++)Mn.setValue(Y,"_gl_DrawID",li),It.render(Bt[li]/St,Ve[li])}else if(ce.isInstancedMesh)It.renderInstances(Je,sn,ce.count);else if(ue.isInstancedBufferGeometry){const Bt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ve=Math.min(ue.instanceCount,Bt);It.renderInstances(Je,sn,Ve)}else It.render(Je,sn)};function Hn(A,Z,ue){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=ri,A.needsUpdate=!0,Oa(A,Z,ue),A.side=ms,A.needsUpdate=!0,Oa(A,Z,ue),A.side=Hi):Oa(A,Z,ue)}this.compile=function(A,Z,ue=null){ue===null&&(ue=A),U=Oe.get(ue),U.init(Z),b.push(U),ue.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Z.layers)&&(U.pushLight(ce),ce.castShadow&&U.pushShadow(ce))}),A!==ue&&A.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Z.layers)&&(U.pushLight(ce),ce.castShadow&&U.pushShadow(ce))}),U.setupLights();const le=new Set;return A.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Fe=ce.material;if(Fe)if(Array.isArray(Fe))for(let ke=0;ke<Fe.length;ke++){const Ie=Fe[ke];Hn(Ie,ue,ce),le.add(Ie)}else Hn(Fe,ue,ce),le.add(Fe)}),U=b.pop(),le},this.compileAsync=function(A,Z,ue=null){const le=this.compile(A,Z,ue);return new Promise(ce=>{function Fe(){if(le.forEach(function(ke){se.get(ke).currentProgram.isReady()&&le.delete(ke)}),le.size===0){ce(A);return}setTimeout(Fe,10)}Tt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Rn=null;function Yn(A){Rn&&Rn(A)}function cn(){Gn.stop()}function hn(){Gn.start()}const Gn=new Wv;Gn.setAnimationLoop(Yn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(A){Rn=A,Ae.setAnimationLoop(A),A===null?Gn.stop():Gn.start()},Ae.addEventListener("sessionstart",cn),Ae.addEventListener("sessionend",hn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(A,Z);const ue=Ae.enabled===!0&&Ae.isPresenting===!0,le=D!==null&&(ie===null||ue)&&D.begin(k,ie);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(Z),Z=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,Z,ie),U=Oe.get(A,b.length),U.init(Z),U.state.textureUnits=de.getTextureUnits(),b.push(U),nn.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),vt.setFromProjectionMatrix(nn,ji,Z.reversedDepth),ut=this.localClippingEnabled,xt=Ze.init(this.clippingPlanes,ut),I=Pe.get(A,O.length),I.init(),O.push(I),Ae.enabled===!0&&Ae.isPresenting===!0){const ke=k.xr.getDepthSensingMesh();ke!==null&&xs(ke,Z,-1/0,k.sortObjects)}xs(A,Z,0,k.sortObjects),I.finish(),k.sortObjects===!0&&I.sort(Ge,et,Z.reversedDepth),kt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,kt&&nt.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Ze.beginShadows();const ce=U.state.shadowsArray;if(Qe.render(ce,A,Z),xt===!0&&Ze.endShadows(),(le&&D.hasRenderPass())===!1){const ke=I.opaque,Ie=I.transmissive;if(U.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(Ie.length>0)for(let Xe=0,je=We.length;Xe<je;Xe++){const ft=We[Xe];ul(ke,Ie,A,ft)}kt&&nt.render(A);for(let Xe=0,je=We.length;Xe<je;Xe++){const ft=We[Xe];cl(I,A,ft,ft.viewport)}}else Ie.length>0&&ul(ke,Ie,A,Z),kt&&nt.render(A),cl(I,A,Z)}ie!==null&&z===0&&(de.updateMultisampleRenderTarget(ie),de.updateRenderTargetMipmap(ie)),le&&D.end(k),A.isScene===!0&&A.onAfterRender(k,A,Z),ze.resetDefaultState(),ge=-1,Me=null,b.pop(),b.length>0?(U=b[b.length-1],de.setTextureUnits(U.state.textureUnits),xt===!0&&Ze.setGlobalState(k.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,q!==null&&q.renderEnd()};function xs(A,Z,ue,le){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){le&&Vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nn);const ke=me.update(A),Ie=A.material;Ie.visible&&I.push(A,ke,Ie,ue,Vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const ke=me.update(A),Ie=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Vt.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Vt.copy(ke.boundingSphere.center)),Vt.applyMatrix4(A.matrixWorld).applyMatrix4(nn)),Array.isArray(Ie)){const We=ke.groups;for(let Xe=0,je=We.length;Xe<je;Xe++){const ft=We[Xe],Je=Ie[ft.materialIndex];Je&&Je.visible&&I.push(A,ke,Je,ue,Vt.z,ft)}}else Ie.visible&&I.push(A,ke,Ie,ue,Vt.z,null)}}const Fe=A.children;for(let ke=0,Ie=Fe.length;ke<Ie;ke++)xs(Fe[ke],Z,ue,le)}function cl(A,Z,ue,le){const{opaque:ce,transmissive:Fe,transparent:ke}=A;U.setupLightsView(ue),xt===!0&&Ze.setGlobalState(k.clippingPlanes,ue),le&&y.viewport(N.copy(le)),ce.length>0&&Ss(ce,Z,ue),Fe.length>0&&Ss(Fe,Z,ue),ke.length>0&&Ss(ke,Z,ue),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ul(A,Z,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[le.id]===void 0){const Je=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[le.id]=new ea(1,1,{generateMipmaps:!0,type:Je?La:yi,minFilter:qs,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Fe=U.state.transmissionRenderTarget[le.id],ke=le.viewport||N;Fe.setSize(ke.z*k.transmissionResolutionScale,ke.w*k.transmissionResolutionScale);const Ie=k.getRenderTarget(),We=k.getActiveCubeFace(),Xe=k.getActiveMipmapLevel();k.setRenderTarget(Fe),k.getClearColor(Se),De=k.getClearAlpha(),De<1&&k.setClearColor(16777215,.5),k.clear(),kt&&nt.render(ue);const je=k.toneMapping;k.toneMapping=$i;const ft=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),U.setupLightsView(le),xt===!0&&Ze.setGlobalState(k.clippingPlanes,le),Ss(A,ue,le),de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let wt=0,sn=Z.length;wt<sn;wt++){const Kt=Z[wt],{object:It,geometry:Bt,material:Ve,group:Vn}=Kt;if(Ve.side===Hi&&It.layers.test(le.layers)){const St=Ve.side;Ve.side=ri,Ve.needsUpdate=!0,Na(It,ue,le,Bt,Ve,Vn),Ve.side=St,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe))}k.setRenderTarget(Ie,We,Xe),k.setClearColor(Se,De),ft!==void 0&&(le.viewport=ft),k.toneMapping=je}function Ss(A,Z,ue){const le=Z.isScene===!0?Z.overrideMaterial:null;for(let ce=0,Fe=A.length;ce<Fe;ce++){const ke=A[ce],{object:Ie,geometry:We,group:Xe}=ke;let je=ke.material;je.allowOverride===!0&&le!==null&&(je=le),Ie.layers.test(ue.layers)&&Na(Ie,Z,ue,We,je,Xe)}}function Na(A,Z,ue,le,ce,Fe){A.onBeforeRender(k,Z,ue,le,ce,Fe),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ce.onBeforeRender(k,Z,ue,le,A,Fe),ce.transparent===!0&&ce.side===Hi&&ce.forceSinglePass===!1?(ce.side=ri,ce.needsUpdate=!0,k.renderBufferDirect(ue,Z,le,ce,A,Fe),ce.side=ms,ce.needsUpdate=!0,k.renderBufferDirect(ue,Z,le,ce,A,Fe),ce.side=Hi):k.renderBufferDirect(ue,Z,le,ce,A,Fe),A.onAfterRender(k,Z,ue,le,ce,Fe)}function Oa(A,Z,ue){Z.isScene!==!0&&(Z=jt);const le=se.get(A),ce=U.state.lights,Fe=U.state.shadowsArray,ke=ce.state.version,Ie=Re.getParameters(A,ce.state,Fe,Z,ue,U.state.lightProbeGridArray),We=Re.getProgramCacheKey(Ie);let Xe=le.programs;le.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,le.fog=Z.fog;const je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;le.envMap=we.get(A.envMap||le.environment,je),le.envMapRotation=le.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",yn),Xe=new Map,le.programs=Xe);let ft=Xe.get(We);if(ft!==void 0){if(le.currentProgram===ft&&le.lightsStateVersion===ke)return sa(A,Ie),ft}else Ie.uniforms=Re.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,ue,Ie),A.onBeforeCompile(Ie,k),ft=Re.acquireProgram(Ie,We),Xe.set(We,ft),le.uniforms=Ie.uniforms;const Je=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ze.uniform),sa(A,Ie),le.needsLights=fl(A),le.lightsStateVersion=ke,le.needsLights&&(Je.ambientLightColor.value=ce.state.ambient,Je.lightProbe.value=ce.state.probe,Je.directionalLights.value=ce.state.directional,Je.directionalLightShadows.value=ce.state.directionalShadow,Je.spotLights.value=ce.state.spot,Je.spotLightShadows.value=ce.state.spotShadow,Je.rectAreaLights.value=ce.state.rectArea,Je.ltc_1.value=ce.state.rectAreaLTC1,Je.ltc_2.value=ce.state.rectAreaLTC2,Je.pointLights.value=ce.state.point,Je.pointLightShadows.value=ce.state.pointShadow,Je.hemisphereLights.value=ce.state.hemi,Je.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Je.spotLightMatrix.value=ce.state.spotLightMatrix,Je.spotLightMap.value=ce.state.spotLightMap,Je.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=U.state.lightProbeGridArray.length>0,le.currentProgram=ft,le.uniformsList=null,ft}function aa(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=tu.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function sa(A,Z){const ue=se.get(A);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.batchingColor=Z.batchingColor,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.instancingMorph=Z.instancingMorph,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function ys(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(Z.matrixWorld);for(let ue=0,le=A.length;ue<le;ue++){const ce=A[ue];if(ce.texture!==null&&ce.boundingBox.containsPoint(C))return ce}return null}function Pa(A,Z,ue,le,ce){Z.isScene!==!0&&(Z=jt),de.resetTextureUnits();const Fe=Z.fog,ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Z.environment:null,Ie=ie===null?k.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Rt.workingColorSpace,We=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Xe=we.get(le.envMap||ke,We),je=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ft=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Je=!!ue.morphAttributes.position,wt=!!ue.morphAttributes.normal,sn=!!ue.morphAttributes.color;let Kt=$i;le.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Kt=k.toneMapping);const It=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Bt=It!==void 0?It.length:0,Ve=se.get(le),Vn=U.state.lights;if(xt===!0&&(ut===!0||A!==Me)){const Ot=A===Me&&le.id===ge;Ze.setState(le,A,Ot)}let St=!1;le.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Vn.state.version||Ve.outputColorSpace!==Ie||ce.isBatchedMesh&&Ve.batching===!1||!ce.isBatchedMesh&&Ve.batching===!0||ce.isBatchedMesh&&Ve.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&Ve.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&Ve.instancing===!1||!ce.isInstancedMesh&&Ve.instancing===!0||ce.isSkinnedMesh&&Ve.skinning===!1||!ce.isSkinnedMesh&&Ve.skinning===!0||ce.isInstancedMesh&&Ve.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&Ve.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&Ve.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&Ve.instancingMorph===!1&&ce.morphTexture!==null||Ve.envMap!==Xe||le.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ze.numPlanes||Ve.numIntersection!==Ze.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==ft||Ve.morphTargets!==Je||Ve.morphNormals!==wt||Ve.morphColors!==sn||Ve.toneMapping!==Kt||Ve.morphTargetsCount!==Bt||!!Ve.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ve.__version=le.version);let Mn=Ve.currentProgram;St===!0&&(Mn=Oa(le,Z,ce),q&&le.isNodeMaterial&&q.onUpdateProgram(le,Mn,Ve));let li=!1,Ui=!1,ci=!1;const zt=Mn.getUniforms(),rn=Ve.uniforms;if(y.useProgram(Mn.program)&&(li=!0,Ui=!0,ci=!0),le.id!==ge&&(ge=le.id,Ui=!0),Ve.needsLights){const Ot=ys(U.state.lightProbeGridArray,ce);Ve.lightProbeGrid!==Ot&&(Ve.lightProbeGrid=Ot,Ui=!0)}if(li||Me!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(Y,"projectionMatrix",A.projectionMatrix),zt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const ki=zt.map.cameraPosition;ki!==void 0&&ki.setValue(Y,Jt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&zt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&zt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),Me!==A&&(Me=A,Ui=!0,ci=!0)}if(Ve.needsLights&&(Vn.state.directionalShadowMap.length>0&&zt.setValue(Y,"directionalShadowMap",Vn.state.directionalShadowMap,de),Vn.state.spotShadowMap.length>0&&zt.setValue(Y,"spotShadowMap",Vn.state.spotShadowMap,de),Vn.state.pointShadowMap.length>0&&zt.setValue(Y,"pointShadowMap",Vn.state.pointShadowMap,de)),ce.isSkinnedMesh){zt.setOptional(Y,ce,"bindMatrix"),zt.setOptional(Y,ce,"bindMatrixInverse");const Ot=ce.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),zt.setValue(Y,"boneTexture",Ot.boneTexture,de))}ce.isBatchedMesh&&(zt.setOptional(Y,ce,"batchingTexture"),zt.setValue(Y,"batchingTexture",ce._matricesTexture,de),zt.setOptional(Y,ce,"batchingIdTexture"),zt.setValue(Y,"batchingIdTexture",ce._indirectTexture,de),zt.setOptional(Y,ce,"batchingColorTexture"),ce._colorsTexture!==null&&zt.setValue(Y,"batchingColorTexture",ce._colorsTexture,de));const Ni=ue.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&W.update(ce,ue,Mn),(Ui||Ve.receiveShadow!==ce.receiveShadow)&&(Ve.receiveShadow=ce.receiveShadow,zt.setValue(Y,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Z.environment!==null&&(rn.envMapIntensity.value=Z.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=DA()),Ui){if(zt.setValue(Y,"toneMappingExposure",k.toneMappingExposure),Ve.needsLights&&mn(rn,ci),Fe&&le.fog===!0&&Be.refreshFogUniforms(rn,Fe),Be.refreshMaterialUniforms(rn,le,be,xe,U.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ot=Ve.lightProbeGrid;rn.probesSH.value=Ot.texture,rn.probesMin.value.copy(Ot.boundingBox.min),rn.probesMax.value.copy(Ot.boundingBox.max),rn.probesResolution.value.copy(Ot.resolution)}tu.upload(Y,aa(Ve),rn,de)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(tu.upload(Y,aa(Ve),rn,de),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&zt.setValue(Y,"center",ce.center),zt.setValue(Y,"modelViewMatrix",ce.modelViewMatrix),zt.setValue(Y,"normalMatrix",ce.normalMatrix),zt.setValue(Y,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const Ot=le.uniformsGroups;for(let ki=0,Ia=Ot.length;ki<Ia;ki++){const Ms=Ot[ki];ae.update(Ms,Mn),ae.bind(Ms,Mn)}}return Mn}function mn(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function fl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(A,Z,ue){const le=se.get(A);le.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=Z,se.get(A.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const ue=se.get(A);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,ue=0){ie=A,P=Z,z=ue;let le=null,ce=!1,Fe=!1;if(A){const Ie=se.get(A);if(Ie.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(Y.FRAMEBUFFER,Ie.__webglFramebuffer),N.copy(A.viewport),B.copy(A.scissor),J=A.scissorTest,y.viewport(N),y.scissor(B),y.setScissorTest(J),ge=-1;return}else if(Ie.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Ie.__hasExternalTextures)de.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Ie.__boundDepthTexture!==je){if(je!==null&&se.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const Xe=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[Z])?le=Xe[Z][ue]:le=Xe[Z],ce=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?le=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?le=Xe[ue]:le=Xe,N.copy(A.viewport),B.copy(A.scissor),J=A.scissorTest}else N.copy(Ke).multiplyScalar(be).floor(),B.copy(Pt).multiplyScalar(be).floor(),J=ct;if(ue!==0&&(le=ee),y.bindFramebuffer(Y.FRAMEBUFFER,le)&&y.drawBuffers(A,le),y.viewport(N),y.scissor(B),y.setScissorTest(J),ce){const Ie=se.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ie.__webglTexture,ue)}else if(Fe){const Ie=Z;for(let We=0;We<A.textures.length;We++){const Xe=se.get(A.textures[We]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+We,Xe.__webglTexture,ue,Ie)}}else if(A!==null&&ue!==0){const Ie=se.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ie.__webglTexture,ue)}ge=-1},this.readRenderTargetPixels=function(A,Z,ue,le,ce,Fe,ke,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){y.bindFramebuffer(Y.FRAMEBUFFER,We);try{const Xe=A.textures[Ie],je=Xe.format,ft=Xe.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie),!L.textureFormatReadable(je)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(ft)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-le&&ue>=0&&ue<=A.height-ce&&Y.readPixels(Z,ue,le,ce,Ue.convert(je),Ue.convert(ft),Fe)}finally{const Xe=ie!==null?se.get(ie).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,Z,ue,le,ce,Fe,ke,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(Z>=0&&Z<=A.width-le&&ue>=0&&ue<=A.height-ce){y.bindFramebuffer(Y.FRAMEBUFFER,We);const Xe=A.textures[Ie],je=Xe.format,ft=Xe.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ie),!L.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Fe.byteLength,Y.STREAM_READ),Y.readPixels(Z,ue,le,ce,Ue.convert(je),Ue.convert(ft),0);const wt=ie!==null?se.get(ie).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,wt);const sn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Wy(Y,sn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Fe),Y.deleteBuffer(Je),Y.deleteSync(sn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,ue=0){const le=Math.pow(2,-ue),ce=Math.floor(A.image.width*le),Fe=Math.floor(A.image.height*le),ke=Z!==null?Z.x:0,Ie=Z!==null?Z.y:0;de.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ue,0,0,ke,Ie,ce,Fe),y.unbindTexture()},this.copyTextureToTexture=function(A,Z,ue=null,le=null,ce=0,Fe=0){let ke,Ie,We,Xe,je,ft,Je,wt,sn;const Kt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(ue!==null)ke=ue.max.x-ue.min.x,Ie=ue.max.y-ue.min.y,We=ue.isBox3?ue.max.z-ue.min.z:1,Xe=ue.min.x,je=ue.min.y,ft=ue.isBox3?ue.min.z:0;else{const rn=Math.pow(2,-ce);ke=Math.floor(Kt.width*rn),Ie=Math.floor(Kt.height*rn),A.isDataArrayTexture?We=Kt.depth:A.isData3DTexture?We=Math.floor(Kt.depth*rn):We=1,Xe=0,je=0,ft=0}le!==null?(Je=le.x,wt=le.y,sn=le.z):(Je=0,wt=0,sn=0);const It=Ue.convert(Z.format),Bt=Ue.convert(Z.type);let Ve;Z.isData3DTexture?(de.setTexture3D(Z,0),Ve=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(de.setTexture2DArray(Z,0),Ve=Y.TEXTURE_2D_ARRAY):(de.setTexture2D(Z,0),Ve=Y.TEXTURE_2D),y.activeTexture(Y.TEXTURE0),y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const Vn=y.getParameter(Y.UNPACK_ROW_LENGTH),St=y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Mn=y.getParameter(Y.UNPACK_SKIP_PIXELS),li=y.getParameter(Y.UNPACK_SKIP_ROWS),Ui=y.getParameter(Y.UNPACK_SKIP_IMAGES);y.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xe),y.pixelStorei(Y.UNPACK_SKIP_ROWS,je),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ft);const ci=A.isDataArrayTexture||A.isData3DTexture,zt=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const rn=se.get(A),Ni=se.get(Z),Ot=se.get(rn.__renderTarget),ki=se.get(Ni.__renderTarget);y.bindFramebuffer(Y.READ_FRAMEBUFFER,Ot.__webglFramebuffer),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Ia=0;Ia<We;Ia++)ci&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(A).__webglTexture,ce,ft+Ia),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(Z).__webglTexture,Fe,sn+Ia)),Y.blitFramebuffer(Xe,je,ke,Ie,Je,wt,ke,Ie,Y.DEPTH_BUFFER_BIT,Y.NEAREST);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ce!==0||A.isRenderTargetTexture||se.has(A)){const rn=se.get(A),Ni=se.get(Z);y.bindFramebuffer(Y.READ_FRAMEBUFFER,te),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,K);for(let Ot=0;Ot<We;Ot++)ci?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rn.__webglTexture,ce,ft+Ot):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,rn.__webglTexture,ce),zt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ni.__webglTexture,Fe,sn+Ot):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ni.__webglTexture,Fe),ce!==0?Y.blitFramebuffer(Xe,je,ke,Ie,Je,wt,ke,Ie,Y.COLOR_BUFFER_BIT,Y.NEAREST):zt?Y.copyTexSubImage3D(Ve,Fe,Je,wt,sn+Ot,Xe,je,ke,Ie):Y.copyTexSubImage2D(Ve,Fe,Je,wt,Xe,je,ke,Ie);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Ve,Fe,Je,wt,sn,ke,Ie,We,It,Bt,Kt.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ve,Fe,Je,wt,sn,ke,Ie,We,It,Kt.data):Y.texSubImage3D(Ve,Fe,Je,wt,sn,ke,Ie,We,It,Bt,Kt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Fe,Je,wt,ke,Ie,It,Bt,Kt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Fe,Je,wt,Kt.width,Kt.height,It,Kt.data):Y.texSubImage2D(Y.TEXTURE_2D,Fe,Je,wt,ke,Ie,It,Bt,Kt);y.pixelStorei(Y.UNPACK_ROW_LENGTH,Vn),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,St),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Mn),y.pixelStorei(Y.UNPACK_SKIP_ROWS,li),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ui),Fe===0&&Z.generateMipmaps&&Y.generateMipmap(Ve),y.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){P=0,z=0,ie=null,y.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const hv={type:"change"},xp={type:"start"},$v={type:"end"},Yc=new fu,dv=new hs,UA=Math.cos(70*Zy.DEG2RAD),bn=new j,ai=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ad=1e-6;class NA extends PM{constructor(e,i=null){super(e,i),this.state=Yt.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new gs,this._lastTargetPosition=new j,this._quat=new gs().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new G_,this._sphericalDelta=new G_,this._scale=1,this._panOffset=new j,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new j,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PA.bind(this),this._onPointerDown=OA.bind(this),this._onPointerUp=IA.bind(this),this._onContextMenu=kA.bind(this),this._onMouseWheel=FA.bind(this),this._onKeyDown=HA.bind(this),this._onTouchStart=GA.bind(this),this._onTouchMove=VA.bind(this),this._onMouseDown=BA.bind(this),this._onMouseMove=zA.bind(this),this._interceptControlDown=XA.bind(this),this._interceptControlUp=WA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hv),this.update(),this.state=Yt.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;bn.copy(i).sub(this.target),bn.applyQuaternion(this._quat),this._spherical.setFromVector3(bn),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ai:s>Math.PI&&(s-=ai),l<-Math.PI?l+=ai:l>Math.PI&&(l-=ai),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(bn.setFromSpherical(this._spherical),bn.applyQuaternion(this._quatInverse),i.copy(this.target).add(bn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=bn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=bn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Yc.origin.copy(this.object.position),Yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yc.direction))<UA?this.object.lookAt(this.target):(dv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yc.intersectPlane(dv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ad||this._lastTargetPosition.distanceToSquared(this.target)>ad?(this.dispatchEvent(hv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ai/60*this.autoRotateSpeed*e:ai/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){bn.setFromMatrixColumn(i,0),bn.multiplyScalar(-e),this._panOffset.add(bn)}_panUp(e,i){this.screenSpacePanning===!0?bn.setFromMatrixColumn(i,1):(bn.setFromMatrixColumn(i,0),bn.crossVectors(this.object.up,bn)),bn.multiplyScalar(e),this._panOffset.add(bn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;bn.copy(l).sub(this.target);let c=bn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new st,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function OA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function PA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function IA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($v),this.state=Yt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function BA(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Yt.DOLLY;break;case qr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Yt.ROTATE}break;case qr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(xp)}function zA(r){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function FA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(r.preventDefault(),this.dispatchEvent(xp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent($v))}function HA(r){this.enabled!==!1&&this._handleKeyDown(r)}function GA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Yt.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Yt.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(xp)}function VA(r){switch(this._trackPointer(r),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Yt.NONE}}function kA(r){this.enabled!==!1&&r.preventDefault()}function XA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $d=[{id:"entry",opcode:"CALL",title:"Entry gate",detail:"External payload enters the execution volume."},{id:"resolver",opcode:"SLOAD",title:"Target resolver",detail:"Registry state resolves the active implementation."},{id:"boundary",opcode:"DELEGATECALL",title:"Trust boundary",detail:"Foreign bytecode enters the vault storage context."},{id:"storage",opcode:"SSTORE",title:"Storage rack",detail:"Slot zero mutates inside the delegated call frame."},{id:"impact",opcode:"TRANSFER",title:"Value exit",detail:"Vault principal becomes externally movable."},{id:"patch",opcode:"GUARD",title:"Patch plane",detail:"The call is rejected before foreign code crosses the boundary."}],Zc=new Map($d.map(r=>[r.id,r])),pv={entry:[-3.85,1.3,.45],resolver:[-2.05,1.3,.45],boundary:[-2.05,.05,.45],storage:[.95,.05,.45],impact:[.95,-1.35,.45],patch:[-.34,.05,.45]},qA={entry:{left:"2.5%",top:"18%"},resolver:{left:"2.5%",top:"40%"},boundary:{left:"2.5%",top:"62%"},storage:{right:"2.5%",top:"18%"},impact:{right:"2.5%",top:"40%"},patch:{right:"2.5%",top:"62%"}},Xr=["entry","resolver","boundary","storage","impact"],mv={position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0};function gv(r){return Math.max(0,Math.min(Xr.length-1,Math.round(r)))}function YA(){const[r,e]=pt.useState(!1);return pt.useEffect(()=>{const i=window.matchMedia("(prefers-reduced-motion: reduce)"),s=()=>e(i.matches);return s(),i.addEventListener?.("change",s),()=>i.removeEventListener?.("change",s)},[]),r}function ZA(r){if(Array.isArray(r)){r.forEach(e=>e.dispose());return}r.dispose()}function sd(r,e,i){const s=new Gi(...r),l=new eu(s,24);s.dispose();const c=new Ks({color:e,transparent:!0,opacity:i,depthWrite:!1});return new nl(l,c)}function KA(r,e){const i=e.clone().sub(r),s=i.length(),l=new gp(.026,.026,s,8,1,!1),c=new Xs({color:4608333,emissive:1120278,emissiveIntensity:.35,metalness:.72,roughness:.28,transparent:!0,opacity:.38}),h=new Bn(l,c);return h.position.copy(r).add(e).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new j(0,1,0),i.normalize()),{segment:h,material:c}}function QA(r,e,i){const s=Math.max(0,Math.min(r.length-1,e)),l=Math.min(r.length-2,Math.floor(s)),c=s>=r.length-1?1:s-l;return i.lerpVectors(r[l],r[l+1],c)}function JA({className:r="",phase:e="idle",step:i=0,patched:s=!1,selected:l,onSelect:c}){const h=pt.useRef(null),p=pt.useRef(null),m=pt.useRef(e),d=pt.useRef(gv(i)),v=pt.useRef(s),S=pt.useRef("boundary"),g=pt.useRef(c),[E,T]=pt.useState("boundary"),[w,M]=pt.useState(null),[x,F]=pt.useState(!1),[H,C]=pt.useState(!1),I=YA(),U=l===void 0?E:l,O=gv(i),b=e==="impact"?4:e==="storage"?Math.max(3,O):O,D=Xr[b],k=U?Zc.get(U):void 0;m.current=e,d.current=O,v.current=s,S.current=U,g.current=c,pt.useEffect(()=>{p.current?.()},[U,s,e,i]);const V=pt.useCallback(ee=>{const te=Zc.get(ee);te&&(T(ee),g.current?.(te))},[]),q=pt.useMemo(()=>`EVM execution volume. Active operation ${D}. Patch plane ${s?"armed":"dormant"}. ${k?`Selected ${k.title}: ${k.detail}`:"No node selected."}`,[D,s,k]);return pt.useEffect(()=>{const ee=h.current;if(!ee)return;let te;try{te=new LA({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{C(!0);return}C(!1),te.setClearColor(0,0),te.outputColorSpace=xi,te.toneMapping=np,te.toneMappingExposure=1.05,te.domElement.className="trace-shell-three__canvas",te.domElement.setAttribute("aria-hidden","true"),te.domElement.tabIndex=-1,ee.appendChild(te.domElement);const K=new lM;K.fog=new dp(329736,.028);const P=new Si(38,1,.1,70);P.position.set(8.6,5.8,10.6);const z=new NA(P,te.domElement);z.target.set(-.15,0,0),z.enableDamping=!1,z.enablePan=!1,z.minDistance=8.2,z.maxDistance=18,z.minPolarAngle=Math.PI*.2,z.maxPolarAngle=Math.PI*.68,z.minAzimuthAngle=-Math.PI*.32,z.maxAzimuthAngle=Math.PI*.32,z.zoomToCursor=!0,z.update(),K.add(new RM(13226957,1119508,1.45));const ie=new DM(15199977,2.4);ie.position.set(6,8,7),K.add(ie);const ge=new z_(16758090,12,11,2);ge.position.set(-.5,1.5,2.2),K.add(ge);const Me=new Zs;Me.rotation.x=-.04,K.add(Me);const N=sd([8.8,4.4,3.25],10136482,.34);Me.add(N);const B=sd([8.55,4.15,.12],5529947,.22);B.position.z=-1.52,Me.add(B),[-2.65,-.2,2.2].forEach((ae,Te)=>{const Ae=sd([2.08,3.45,2.55],Te===1?9411990:6582635,Te===1?.26:.18);Ae.position.set(ae,0,-.08),Me.add(Ae)});for(let ae=-1;ae<=1;ae+=1){const Te=new oi().setFromPoints([new j(-4.18,ae*1.28,-1.34),new j(4.18,ae*1.28,-1.34)]),Ae=new Ks({color:ae===0?7569529:4608332,transparent:!0,opacity:ae===0?.22:.14});Me.add(new zv(Te,Ae))}const J=new OM(10,20,5792606,3160374);J.position.y=-2.18,J.material.transparent=!0,J.material.opacity=.16,Me.add(J);const Se=Xr.map(ae=>new j(...pv[ae])),De=[];for(let ae=0;ae<Se.length-1;ae+=1){const{segment:Te,material:Ae}=KA(Se[ae],Se[ae+1]);De.push(Ae),Me.add(Te)}const ne=new Map,xe=[];Xr.forEach((ae,Te)=>{const Ae=new Gi(Te===2?.45:.32,Te===2?.45:.32,Te===2?.45:.32),rt=new Xs({color:3753023,emissive:1252120,emissiveIntensity:.4,metalness:.76,roughness:.22}),at=new Bn(Ae,rt);at.position.copy(Se[Te]),at.userData.nodeId=ae,at.userData.baseScale=at.scale.clone(),ne.set(ae,at),xe.push(at),Me.add(at);const Zt=new nl(new eu(Ae),new Ks({color:13358287,transparent:!0,opacity:.42}));at.add(Zt)});const be=new Zs;be.position.set(2.42,.46,-.83),Me.add(be);for(let ae=0;ae<9;ae+=1){const Te=ae%3,Ae=Math.floor(ae/3),rt=new Gi(.42,.34,.48),at=new Xs({color:ae===0?4993832:2239271,emissive:ae===0?2363915:527627,emissiveIntensity:.6,metalness:.7,roughness:.32,transparent:!0,opacity:.86}),Zt=new Bn(rt,at);Zt.position.set((Te-1)*.55,(1-Ae)*.48,0),Zt.userData.nodeId="storage",Zt.userData.slot=ae,xe.push(Zt),be.add(Zt);const yn=new nl(new eu(rt),new Ks({color:ae===0?16748900:7043185,transparent:!0,opacity:ae===0?.64:.28}));Zt.add(yn)}const Ge=new Zs;Ge.position.set(...pv.patch),Me.add(Ge);const et=new Gi(.09,2.55,2.45),Ke=new bM({color:13888215,emissive:5013600,emissiveIntensity:.65,metalness:.18,roughness:.18,transparent:!0,opacity:s?.24:.018,transmission:.14,depthWrite:!1,side:Hi}),Pt=new Bn(et,Ke);Pt.userData.nodeId="patch",xe.push(Pt),Ge.add(Pt);const ct=new nl(new eu(et),new Ks({color:13624019,transparent:!0,opacity:s?.76:.12}));Ge.add(ct);const vt=new Gi(.115,.035,2.5),xt=new pp({color:15466481,transparent:!0,opacity:.68,depthWrite:!1}),ut=new Bn(vt,xt);ut.visible=s,Ge.add(ut);const nn=new Gi(.24,.24,.24),Jt=new Xs({color:16758090,emissive:13200919,emissiveIntensity:3.4,metalness:.36,roughness:.18}),Vt=new Bn(nn,Jt);Me.add(Vt);const jt=new z_(16758090,4.8,2.6,2);Vt.add(jt);const kt=new ll(1.65,.72),an=new Xs({color:1120021,emissive:2241580,emissiveIntensity:.42,metalness:.68,roughness:.26,transparent:!0,opacity:.9,side:Hi}),Y=new Bn(kt,an);Y.position.set(-3.18,-1.45,-1.28),Y.rotation.x=-.12,Me.add(Y);const Ut=new NM,Tt=new st(10,10),L=new j;let y=null,Q=null,se=!0,de=document.visibilityState==="visible",we=performance.now(),Ne=0,pe={x:0,y:0};const me=ae=>{let Te=d.current;const Ae=m.current;if(!I&&Ae!=="idle"&&Te<Se.length-1){const rt=(Math.sin(ae*.0024-Math.PI/2)+1)/2;Te+=.12+rt*.76}return Ae==="storage"&&(Te=Math.max(Te,3)),Ae==="impact"&&(Te=Math.max(Te,4)),v.current?Math.min(Te,2.53):Te},Re=(ae=performance.now())=>{const Te=Math.min(.05,Math.max(0,(ae-we)/1e3));we=ae,I||(Ne+=Te);const Ae=me(ae);QA(Se,Ae,L),Vt.position.copy(L),I||(Vt.rotation.x+=Te*1.7,Vt.rotation.y+=Te*2.35);const rt=v.current;Jt.color.setHex(rt?14215900:16758090),Jt.emissive.setHex(rt?5935469:13200919),jt.color.setHex(rt?11462589:16758090),jt.intensity=rt?2.8:4.8;const at=Math.floor(Ae);De.forEach((Ln,Un)=>{const Hn=Un<at||Un===at&&Ae%1>.04,Rn=rt&&Un>=2;Ln.color.setHex(Rn?3490107:Hn?16758090:4608333),Ln.emissive.setHex(Rn?1581854:Hn?9130776:1120278),Ln.emissiveIntensity=Hn&&!Rn?1.45:.3,Ln.opacity=Rn?.16:Hn?.92:.34});const Zt=S.current;ne.forEach((Ln,Un)=>{const Hn=Xr.indexOf(Un),Rn=Ae>=Hn-.02,Yn=Zt===Un,cn=y===Un,hn=Ln.material;hn.color.setHex(Yn?14674146:Rn?7026727:3753023),hn.emissive.setHex(Yn?5399899:Rn?9119245:1252120),hn.emissiveIntensity=Yn?1.25:Rn?.9:.36;const Gn=Yn?1.26:cn?1.13:1;Ln.scale.setScalar(Gn)});const yn=Zt==="patch"||y==="patch";Ke.opacity=rt?yn?.36:.24:yn?.075:.018,Ke.emissiveIntensity=rt?.9:.18,ct.material.opacity=rt?.78:yn?.36:.12,ut.visible=rt,rt&&(ut.position.y=I?0:Math.sin(Ne*2.1)*1.12),be.children.forEach(Ln=>{if(!(Ln instanceof Bn))return;const Un=Ln.material;if(!(Un instanceof Xs))return;const Hn=Ln.userData.slot===0,Rn=Ae>=3&&!rt;Un.emissiveIntensity=Hn&&Rn?1.65:.5,Un.color.setHex(Hn&&Rn?10304800:Hn?4993832:2239271)}),ge.intensity=m.current==="idle"?6:12,I||(ge.position.y=1.45+Math.sin(Ne*1.15)*.12),z.update(),te.render(K,P)},Be=()=>{Q!==null||I||m.current==="idle"||!se||!de||(Q=window.requestAnimationFrame(Pe))},Pe=ae=>{Q=null,!(!se||!de)&&(Re(ae),Be())};p.current=()=>{se&&de&&(Re(),Be())};const Oe=()=>{const ae=ee.getBoundingClientRect(),Te=Math.max(1,ae.width),Ae=Math.max(1,ae.height);te.setPixelRatio(Math.min(window.devicePixelRatio||1,Te<700?1.2:1.5)),te.setSize(Te,Ae,!1),P.aspect=Te/Ae,P.updateProjectionMatrix(),Re()},Ze=ae=>{const Te=te.domElement.getBoundingClientRect();Tt.x=(ae.clientX-Te.left)/Te.width*2-1,Tt.y=-((ae.clientY-Te.top)/Te.height)*2+1,Ut.setFromCamera(Tt,P);const Ae=Ut.intersectObjects(xe,!1),at=(Ae.find(Zt=>Zt.object.userData.nodeId!=="patch")??Ae[0])?.object.userData.nodeId??null;at!==y&&(y=at,M(at),te.domElement.style.cursor=at?"pointer":"grab",I&&Re())},Qe=ae=>{pe={x:ae.clientX,y:ae.clientY},te.domElement.style.cursor="grabbing"},nt=ae=>{const Te=Math.hypot(ae.clientX-pe.x,ae.clientY-pe.y);if(te.domElement.style.cursor=y?"pointer":"grab",Te>5||(Ze(ae),!y))return;const Ae=Zc.get(y);Ae&&(T(Ae.id),g.current?.(Ae))},W=()=>{y=null,M(null),te.domElement.style.cursor="grab",I&&Re()},Le=()=>{de=document.visibilityState==="visible",de?(we=performance.now(),Re(),Be()):Q!==null&&(window.cancelAnimationFrame(Q),Q=null)},_e=()=>{se&&de&&te.render(K,P)},Ue=new ResizeObserver(Oe);Ue.observe(ee);const ze=new IntersectionObserver(([ae])=>{se=ae.isIntersecting,se?(we=performance.now(),Re(),Be()):Q!==null&&(window.cancelAnimationFrame(Q),Q=null)},{rootMargin:"140px"});return ze.observe(ee),te.domElement.addEventListener("pointermove",Ze),te.domElement.addEventListener("pointerdown",Qe),te.domElement.addEventListener("pointerup",nt),te.domElement.addEventListener("pointerleave",W),z.addEventListener("change",_e),document.addEventListener("visibilitychange",Le),Oe(),Re(),Be(),F(!0),()=>{F(!1),p.current=null,Q!==null&&window.cancelAnimationFrame(Q),Ue.disconnect(),ze.disconnect(),document.removeEventListener("visibilitychange",Le),te.domElement.removeEventListener("pointermove",Ze),te.domElement.removeEventListener("pointerdown",Qe),te.domElement.removeEventListener("pointerup",nt),te.domElement.removeEventListener("pointerleave",W),z.removeEventListener("change",_e),z.dispose(),K.traverse(ae=>{const Te=ae;Te.geometry?.dispose?.(),Te.material&&ZA(Te.material)}),te.dispose(),te.forceContextLoss(),te.domElement.parentElement===ee&&ee.removeChild(te.domElement)}},[I]),React.createElement("section",{className:`trace-shell-three ${r}`.trim(),"data-phase":e,"data-patched":s?"true":"false","data-ready":x?"true":"false","aria-label":"Trace Shell EVM execution volume"},React.createElement("div",{className:"trace-shell-three__chrome","aria-hidden":"true"},React.createElement("span",null,"TRACE_SHELL // EVM EXECUTION VOLUME"),React.createElement("span",null,"STEP ",String(b+1).padStart(2,"0")," / 05")),React.createElement("div",{ref:h,className:"trace-shell-three__viewport"}),!x&&!H?React.createElement("div",{className:"trace-shell-three__boot","aria-hidden":"true"},React.createElement("span",null),"Mounting execution volume"):null,H?React.createElement("div",{className:"trace-shell-three__fallback",role:"status"},React.createElement("strong",null,"3D renderer unavailable"),React.createElement("span",null,"The execution trace remains available through the node controls.")):null,React.createElement("div",{className:"trace-shell-three__nodes"},$d.map(ee=>{const te=U===ee.id,K=D===ee.id||ee.id==="patch"&&s;return React.createElement("button",{key:ee.id,type:"button",className:"trace-shell-three__node",style:qA[ee.id],"data-node":ee.id,"data-active":K?"true":"false","aria-pressed":te,onClick:()=>V(ee.id)},React.createElement("span",{className:"trace-shell-three__node-index"},ee.id==="patch"?"PX":String(Xr.indexOf(ee.id)).padStart(2,"0")),React.createElement("span",{className:"trace-shell-three__node-copy"},React.createElement("strong",null,ee.opcode),React.createElement("small",null,ee.title)),React.createElement("span",{className:"trace-shell-three__node-state","aria-hidden":"true"},ee.id==="patch"?s?"ARMED":"STANDBY":K?"LIVE":"NODE"))})),React.createElement("div",{className:"trace-shell-three__readout","aria-live":"polite"},React.createElement("span",{className:"trace-shell-three__signal","aria-hidden":"true"}),React.createElement("span",null,w?"PROBE":k?"PINNED":"READY"),React.createElement("strong",null,w?Zc.get(w)?.title:k?.title??"Execution volume")),React.createElement("div",{className:"trace-shell-three__hint","aria-hidden":"true"},"DRAG TO ROTATE  ·  SCROLL TO INSPECT  ·  SELECT A NODE"),React.createElement("p",{style:mv},q),React.createElement("ol",{style:mv},$d.map(ee=>React.createElement("li",{key:ee.id},`${ee.opcode}: ${ee.detail}`))),React.createElement("style",{jsx:!0},`
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
      `))}const jA="_shell_h72p4_1",$A="_skipLink_h72p4_43",eR="_topbar_h72p4_57",tR="_identity_h72p4_70",nR="_session_h72p4_71",iR="_systemState_h72p4_72",aR="_versionSwitch_h72p4_73",sR="_brandMark_h72p4_86",rR="_stateLamp_h72p4_124",oR="_stateLampPatched_h72p4_131",lR="_workspace_h72p4_136",cR="_leftPane_h72p4_147",uR="_volumePane_h72p4_148",fR="_inspector_h72p4_149",hR="_console_h72p4_150",dR="_paneHeader_h72p4_188",pR="_treeSection_h72p4_215",mR="_sectionLabel_h72p4_220",gR="_treeList_h72p4_232",_R="_findingList_h72p4_233",vR="_traceRail_h72p4_234",xR="_logLines_h72p4_236",SR="_treeButton_h72p4_242",yR="_findingButton_h72p4_243",MR="_traceButton_h72p4_244",ER="_treeButtonActive_h72p4_265",bR="_treeGlyph_h72p4_271",TR="_treeName_h72p4_275",AR="_treeLine_h72p4_281",RR="_findingsSection_h72p4_286",CR="_findingButtonActive_h72p4_305",wR="_findingTick_h72p4_315",DR="_findingTickPending_h72p4_322",LR="_findingMeta_h72p4_326",UR="_versionCurrent_h72p4_355",NR="_sceneStage_h72p4_388",OR="_transport_h72p4_478",PR="_transportBar_h72p4_485",IR="_transportButton_h72p4_494",BR="_transportPosition_h72p4_519",zR="_traceButtonActive_h72p4_556",FR="_traceButtonPast_h72p4_567",HR="_traceButtonBlocked_h72p4_578",GR="_traceIndex_h72p4_582",VR="_inspectorTabs_h72p4_605",kR="_tabActive_h72p4_630",XR="_inspectorBody_h72p4_637",WR="_sourceHeader_h72p4_643",qR="_sourceCode_h72p4_657",YR="_sourceLine_h72p4_666",ZR="_sourceLineNo_h72p4_673",KR="_sourceLineHot_h72p4_680",QR="_sourceLineDanger_h72p4_686",JR="_stateTable_h72p4_700",jR="_evidenceBlock_h72p4_701",$R="_stateRow_h72p4_705",e2="_stateHazard_h72p4_725",t2="_stateVerified_h72p4_729",n2="_evidenceLead_h72p4_733",i2="_evidenceFact_h72p4_741",a2="_frameCard_h72p4_760",s2="_frameCardHeader_h72p4_766",r2="_logIdentity_h72p4_792",o2="_logViewport_h72p4_809",l2="_logLine_h72p4_236",c2="_logKind_h72p4_835",u2="_logLineHazard_h72p4_846",f2="_logLineVerified_h72p4_851",h2="_promptForm_h72p4_856",d2="_promptContext_h72p4_869",p2="_promptGlyph_h72p4_874",m2="_promptInput_h72p4_879",g2="_promptHint_h72p4_898",_2="_visuallyHidden_h72p4_908",Ce={shell:jA,skipLink:$A,topbar:eR,identity:tR,session:nR,systemState:iR,versionSwitch:aR,brandMark:sR,stateLamp:rR,stateLampPatched:oR,workspace:lR,leftPane:cR,volumePane:uR,inspector:fR,console:hR,paneHeader:dR,treeSection:pR,sectionLabel:mR,treeList:gR,findingList:_R,traceRail:vR,logLines:xR,treeButton:SR,findingButton:yR,traceButton:MR,treeButtonActive:ER,treeGlyph:bR,treeName:TR,treeLine:AR,findingsSection:RR,findingButtonActive:CR,findingTick:wR,findingTickPending:DR,findingMeta:LR,versionCurrent:UR,sceneStage:NR,transport:OR,transportBar:PR,transportButton:IR,transportPosition:BR,traceButtonActive:zR,traceButtonPast:FR,traceButtonBlocked:HR,traceIndex:GR,inspectorTabs:VR,tabActive:kR,inspectorBody:XR,sourceHeader:WR,sourceCode:qR,sourceLine:YR,sourceLineNo:ZR,sourceLineHot:KR,sourceLineDanger:QR,stateTable:JR,evidenceBlock:jR,stateRow:$R,stateHazard:e2,stateVerified:t2,evidenceLead:n2,evidenceFact:i2,frameCard:a2,frameCardHeader:s2,logIdentity:r2,logViewport:o2,logLine:l2,logKind:c2,logLineHazard:u2,logLineVerified:f2,promptForm:h2,promptContext:d2,promptGlyph:p2,promptInput:m2,promptHint:g2,visuallyHidden:_2},si=[{node:"entry",opcode:"CALL",pc:"0x11",frame:"01",file:"VaultRouter.sol",line:176,gas:"71,204",detail:"Attacker-controlled payload enters execute(bytes)."},{node:"registry",opcode:"SLOAD",pc:"0x42",frame:"02",file:"ModuleRegistry.sol",line:91,gas:"62,881",detail:"Module address resolves from an approved registry slot."},{node:"boundary",opcode:"DELEGATECALL",pc:"0x8f",frame:"03",file:"VaultRouter.sol",line:184,gas:"41,288",detail:"Execution crosses the authority plane without binding runtime code."},{node:"slot0",opcode:"SSTORE",pc:"0xb4",frame:"04",file:"VaultStorage.sol",line:12,gas:"19,044",detail:"Delegate context overwrites vault owner at storage slot 0."},{node:"outflow",opcode:"TRANSFER",pc:"0xf1",frame:"05",file:"Withdrawal.sol",line:77,gas:"7,902",detail:"Value exits after the forged owner check succeeds."}],kr={entry:"entry.call",registry:"registry.slot",boundary:"authority.gate",slot0:"storage[0]",outflow:"value.out"},v2={entry:"entry",registry:"resolver",boundary:"boundary",slot0:"storage",outflow:"impact"},x2={entry:"entry",resolver:"registry",boundary:"boundary",storage:"slot0",impact:"outflow",patch:"boundary"},S2={entry:{file:"VaultRouter.sol",start:172,hot:4,lines:["function execute(bytes calldata data)","    external payable returns (bytes memory)","{","    address module = registry.resolve(selector);","    (bool ok, bytes memory result) =","        module.delegatecall(data);","    if (!ok) revert ExecutionFailed();","    return result;","}"]},registry:{file:"ModuleRegistry.sol",start:87,hot:4,lines:["function resolve(bytes4 selector)","    external view returns (address module)","{","    module = modules[selector];","    if (module == address(0)) revert UnknownModule();","    // address is approved; runtime code is not bound","}"]},boundary:{file:"VaultRouter.sol",start:180,hot:4,lines:["address module = registry.resolve(selector);","","// trust boundary: router -> external module code","(bool ok, bytes memory result) =","    module.delegatecall(data);","","if (!ok) revert ExecutionFailed();","return result;"]},slot0:{file:"VaultStorage.sol",start:8,hot:4,lines:["contract VaultStorage {","    // slot 0 in the router context","    address public owner;","","    function setOwner(address next) external {","        owner = next;","    }","}"]},outflow:{file:"Withdrawal.sol",start:73,hot:4,lines:["function withdraw(address payable to, uint256 amount)","    external","{","    if (msg.sender != owner) revert Unauthorized();",'    (bool sent,) = to.call{value: amount}("");',"    if (!sent) revert TransferFailed();","}"]}},y2=[{target:"boundary",name:"VaultRouter.sol",line:184,glyph:"◇"},{target:"registry",name:"ModuleRegistry.sol",line:91,glyph:"├"},{target:"slot0",name:"VaultStorage.sol",line:12,glyph:"├"},{target:"outflow",name:"Withdrawal.sol",line:77,glyph:"└"}],_v=[{offset:"+000ms",kind:"CASE",message:"AB-001 loaded from local trace fixture"},{offset:"+004ms",kind:"FRAME",message:"pc 0x8f / DELEGATECALL / frame 03"},{offset:"+006ms",kind:"CROSS",message:"authority boundary pierced by unbound runtime code",tone:"hazard"},{offset:"+009ms",kind:"PROOF",message:"slot[0] mutation precedes 128.40 ETH outflow",tone:"hazard"}],M2=["scan ./contracts","trace AB-001","frame 27","isolate storage","diff AB-001 --patched","watch proxy","case AB-001","reset","clear","help"];function rd(r){return Math.max(0,Math.min(si.length-1,r))}function E2(r){return r==="hazard"?Ce.logLineHazard:r==="verified"?Ce.logLineVerified:""}function b2({versionOneHref:r="/concept"}){const[e,i]=pt.useState(2),[s,l]=pt.useState("boundary"),[c,h]=pt.useState("breach"),[p,m]=pt.useState(!1),[d,v]=pt.useState(!1),[S,g]=pt.useState("source"),[E,T]=pt.useState(_v),[w,M]=pt.useState(""),[x,F]=pt.useState([]),[H,C]=pt.useState(-1),[I,U]=pt.useState(!1),O=pt.useRef(null),b=si[e],D=S2[s],k=pt.useCallback(B=>{T(J=>[...J,...B].slice(-5))},[]),V=pt.useCallback(B=>{const J=p?Math.min(2,rd(B)):rd(B);i(J),l(si[J].node),g("source")},[p]),q=pt.useCallback(()=>{v(!1),h(p&&e>=2?"blocked":e>=4?"complete":"breach")},[e,p]),ee=pt.useCallback((B=!1)=>{const J=B?!1:p;if(B&&m(!1),i(0),l("entry"),g("source"),k([{offset:"+000ms",kind:"TRACE",message:J?"patched branch executing from frame 01":"AB-001 replay executing from frame 01"}]),I){const Se=J?2:4;i(Se),l(si[Se].node),h(J?"blocked":"complete"),k([J?{offset:"+011ms",kind:"REJECT",message:"CodeHashMismatch() at authority gate",tone:"verified"}:{offset:"+021ms",kind:"IMPACT",message:"trace completes with 128.40 ETH outflow",tone:"hazard"}]);return}h("running"),v(!0)},[k,p,I]),te=pt.useCallback(()=>{v(!1),m(!0),h("blocked"),i(2),l("boundary"),g("evidence"),k([{offset:"+000ms",kind:"DIFF",message:"extcodehash guard inserted before delegatecall"},{offset:"+008ms",kind:"REJECT",message:"CodeHashMismatch() / state mutation unreachable",tone:"verified"}])},[k]),K=pt.useCallback(()=>{v(!1),m(!1),h("breach"),i(2),l("boundary"),g("source"),T(_v)},[]),P=pt.useCallback(B=>{const J=B.trim();if(!J)return;F(De=>[...De.filter(ne=>ne!==J),J].slice(-16)),C(-1),M("");const Se=J.toLowerCase();if(Se==="scan"||Se.startsWith("scan ")){v(!1),m(!1),h("indexed"),i(0),l("entry"),g("evidence"),T([{offset:"+000ms",kind:"SCAN",message:"4 Solidity units indexed / 1 execution boundary"},{offset:"+117ms",kind:"FLOW",message:"CALL → SLOAD → DELEGATECALL → SSTORE → TRANSFER"},{offset:"+123ms",kind:"FIND",message:"AB-001 / runtime code identity is not bound",tone:"hazard"}]);return}if(Se==="trace"||Se.startsWith("trace ")){ee(!0);return}if(Se.startsWith("diff ")||Se==="patch"||Se==="patch on"){te();return}if(Se==="patch off"){m(!1),h("breach"),i(2),l("boundary"),k([{offset:"+000ms",kind:"DIFF",message:"baseline vulnerable route restored",tone:"hazard"}]);return}if(Se.startsWith("frame ")){const De=Number.parseInt(Se.slice(6),10),ne=Number.isFinite(De)?rd(Math.round(De/44*4)):2,xe=p?Math.min(2,ne):ne;v(!1),V(xe),h(p&&xe>=2?"blocked":"breach"),k([{offset:"+000ms",kind:"FRAME",message:`frame ${String(De||xe+1).padStart(2,"0")} mapped to ${si[xe].opcode} / ${si[xe].pc}`}]);return}if(Se.startsWith("inspect ")){const De=Se.slice(8).replace(/[^a-z0-9]/g,""),ne=Object.keys(kr).find(xe=>`${xe}${kr[xe]}`.replace(/[^a-z0-9]/g,"").includes(De));if(ne){const xe=si.findIndex(be=>be.node===ne);V(xe),k([{offset:"+000ms",kind:"INSPECT",message:`${kr[ne]} synchronized with source and volume`}])}else k([{offset:"+000ms",kind:"ERROR",message:`unknown trace node: ${Se.slice(8)}`,tone:"hazard"}]);return}if(Se==="isolate storage"){v(!1),V(p?2:3),g("state"),k([{offset:"+000ms",kind:"ISOLATE",message:p?"storage lane unreachable behind active codehash guard":"storage lane filtered to router context"},p?{offset:"+003ms",kind:"REJECT",message:"no SSTORE frame exists on patched path",tone:"verified"}:{offset:"+003ms",kind:"WRITE",message:"slot[0] 0xA11C… → 0xBAD0…",tone:"hazard"}]);return}if(Se==="watch proxy"){v(!1),V(2),g("state"),k([{offset:"+000ms",kind:"WATCH",message:"module codehash differs after registry approval",tone:"hazard"}]);return}if(Se==="case ab-001"||Se==="report"){v(!1),h("reported"),g("evidence"),k([{offset:"+000ms",kind:"CASE",message:"AB-001 evidence bundle assembled / 5 frames / 1 state diff",tone:"verified"}]);return}if(Se==="clear"){T([]);return}if(Se==="reset"){K();return}if(Se==="help"){T([{offset:"CMD",kind:"SCAN",message:"scan ./contracts"},{offset:"CMD",kind:"TRACE",message:"trace AB-001 / frame 27 / isolate storage"},{offset:"CMD",kind:"DIFF",message:"diff AB-001 --patched / patch off"},{offset:"CMD",kind:"CASE",message:"watch proxy / case AB-001 / reset / clear"}]);return}k([{offset:"+000ms",kind:"ERROR",message:`command not recognized: ${J}`,tone:"hazard"}])},[k,te,p,K,V,ee]);pt.useEffect(()=>{const B=window.matchMedia("(prefers-reduced-motion: reduce)"),J=()=>U(B.matches);return J(),B.addEventListener("change",J),()=>B.removeEventListener("change",J)},[]),pt.useEffect(()=>{if(!d)return;const B=window.setTimeout(()=>{if(p&&e>=2){v(!1),h("blocked"),l("boundary"),k([{offset:"+011ms",kind:"REJECT",message:"CodeHashMismatch() / execution terminated",tone:"verified"}]);return}if(e>=si.length-1){v(!1),h("complete"),k([{offset:"+021ms",kind:"IMPACT",message:"128.40 ETH outflow committed",tone:"hazard"}]);return}const J=e+1;i(J),l(si[J].node),k([{offset:`+${String(J*4+3).padStart(3,"0")}ms`,kind:"STEP",message:`${si[J].pc} / ${si[J].opcode} / ${kr[si[J].node]}`,tone:J>=2?"hazard":"normal"}])},620);return()=>window.clearTimeout(B)},[e,k,p,d]),pt.useEffect(()=>{const B=J=>{const De=!!J.target?.closest('button, a, input, textarea, select, [contenteditable="true"]');if((J.metaKey||J.ctrlKey)&&J.key.toLowerCase()==="k"){J.preventDefault(),O.current?.focus();return}J.defaultPrevented||De||(J.key===" "?(J.preventDefault(),d?q():ee()):J.key==="ArrowRight"?(J.preventDefault(),v(!1),V(e+1)):J.key==="ArrowLeft"?(J.preventDefault(),v(!1),V(e-1)):J.key.toLowerCase()==="p"?(J.preventDefault(),p?P("patch off"):te()):/^[1-5]$/.test(J.key)&&(J.preventDefault(),v(!1),V(Number(J.key)-1)))};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[e,te,P,p,d,V,ee,q]);const z=pt.useMemo(()=>c==="running"?`executing / frame ${b.frame}`:p||c==="blocked"?"patched path / rejected":c==="indexed"?"indexed / finding selected":c==="reported"?"evidence bundle / ready":c==="complete"?"vulnerable path / impact proven":"breach frame / impact proven",[b.frame,p,c]),ie=B=>{B.preventDefault(),P(w)},ge=B=>{if(B.key==="Tab"){const J=M2.find(Se=>Se.startsWith(w.trim().toLowerCase()));J&&(B.preventDefault(),M(J));return}if(B.key==="ArrowUp"){if(B.preventDefault(),!x.length)return;const J=H<0?x.length-1:Math.max(0,H-1);C(J),M(x[J]);return}if(B.key==="ArrowDown"){if(B.preventDefault(),H<0)return;const J=H+1;J>=x.length?(C(-1),M("")):(C(J),M(x[J]));return}B.key==="Escape"&&O.current?.blur()},Me=d?"trace":"idle",N=B=>{const J=x2[B.id]??"boundary",Se=si.findIndex(De=>De.node===J);v(!1),V(Se),k([{offset:"+000ms",kind:"PICK",message:`${kr[J]} selected in execution volume`}])};return React.createElement("main",{className:Ce.shell},React.createElement("h1",{className:Ce.visuallyHidden},"AuditBase Trace Shell contract execution debugger"),React.createElement("a",{className:Ce.skipLink,href:"#trace-volume"},"Skip to execution volume"),React.createElement("header",{className:Ce.topbar},React.createElement("div",{className:Ce.identity},React.createElement("span",{className:Ce.brandMark,"aria-hidden":"true"},"AB"),React.createElement("span",null,"AUDITBASE //"),React.createElement("span",null,"TRACE_SHELL")),React.createElement("div",{className:Ce.session,"aria-label":"Current target"},React.createElement("span",null,"target ",React.createElement("b",null,"vault-core")),React.createElement("span",null,"branch ",React.createElement("b",null,"review/runtime-binding")),React.createElement("span",null,"fixture ",React.createElement("b",null,"local / deterministic"))),React.createElement("div",{className:Ce.systemState},React.createElement("span",{className:`${Ce.stateLamp} ${p?Ce.stateLampPatched:""}`,"aria-hidden":"true"}),React.createElement("span",null,p?"GUARD ACTIVE":"IMPACT PROVEN"),React.createElement("span",null,"V02"))),React.createElement("div",{className:Ce.workspace},React.createElement("aside",{className:Ce.leftPane,"aria-label":"Audit worktree"},React.createElement("div",{className:Ce.paneHeader},React.createElement("strong",null,"Worktree"),React.createElement("span",null,"04 units")),React.createElement("section",{className:Ce.treeSection,"aria-labelledby":"contracts-label"},React.createElement("div",{className:Ce.sectionLabel,id:"contracts-label"},React.createElement("span",null,"contracts/"),React.createElement("span",null,"sol")),React.createElement("ul",{className:Ce.treeList},y2.map(B=>React.createElement("li",{key:B.name},React.createElement("button",{className:`${Ce.treeButton} ${D.file===B.name?Ce.treeButtonActive:""}`,type:"button",onClick:()=>P(`inspect ${B.target}`)},React.createElement("span",{className:Ce.treeGlyph,"aria-hidden":"true"},B.glyph),React.createElement("span",{className:Ce.treeName},B.name),React.createElement("span",{className:Ce.treeLine},":",B.line)))))),React.createElement("section",{className:Ce.findingsSection,"aria-labelledby":"findings-label"},React.createElement("div",{className:Ce.sectionLabel,id:"findings-label"},React.createElement("span",null,"Findings"),React.createElement("span",null,"02")),React.createElement("ul",{className:Ce.findingList},React.createElement("li",null,React.createElement("button",{className:`${Ce.findingButton} ${Ce.findingButtonActive}`,type:"button",onClick:()=>P("trace AB-001")},React.createElement("span",{className:Ce.findingTick,"aria-hidden":"true"}),React.createElement("span",null,React.createElement("span",{className:Ce.findingMeta},React.createElement("span",null,"AB-001"),React.createElement("b",null,"CRITICAL")),React.createElement("p",null,"Mutable module code crosses delegate boundary")))),React.createElement("li",null,React.createElement("button",{className:Ce.findingButton,type:"button",onClick:()=>k([{offset:"+000ms",kind:"QUEUE",message:"AB-002 retained for manual reachability review"}])},React.createElement("span",{className:`${Ce.findingTick} ${Ce.findingTickPending}`,"aria-hidden":"true"}),React.createElement("span",null,React.createElement("span",{className:Ce.findingMeta},React.createElement("span",null,"AB-002"),React.createElement("span",null,"REVIEW")),React.createElement("p",null,"Unchecked return on recovery adapter")))))),React.createElement("nav",{className:Ce.versionSwitch,"aria-label":"Design versions"},React.createElement("a",{href:r},React.createElement("span",null,"VERSION 01"),React.createElement("b",null,"TRANSACTION ENGINE")),React.createElement("span",{className:Ce.versionCurrent,"aria-current":"page"},React.createElement("span",null,"VERSION 02"),React.createElement("b",null,"TRACE_SHELL")))),React.createElement("section",{className:Ce.volumePane,id:"trace-volume","aria-labelledby":"volume-heading",tabIndex:-1},React.createElement("div",{className:Ce.paneHeader},React.createElement("strong",{id:"volume-heading"},"EVM execution volume / AB-001"),React.createElement("span",null,z)),React.createElement("div",{className:Ce.sceneStage},React.createElement(JA,{phase:Me,step:e,patched:p,selected:v2[s],onSelect:N})),React.createElement("div",{className:Ce.transport,"aria-label":"Trace transport"},React.createElement("div",{className:Ce.transportBar},React.createElement("button",{className:Ce.transportButton,type:"button",onClick:()=>d?q():ee(),"aria-pressed":d},d?"II PAUSE":"▶ PLAY"),React.createElement("button",{className:Ce.transportButton,type:"button",onClick:te},"DIFF"),React.createElement("label",null,React.createElement("span",{className:Ce.visuallyHidden},"Execution frame"),React.createElement("input",{type:"range",min:"0",max:p?2:4,step:"1",value:e,onChange:B=>{v(!1),V(Number(B.target.value))}})),React.createElement("span",{className:Ce.transportPosition},"FRAME ",b.frame," / 05")),React.createElement("ol",{className:Ce.traceRail},si.map((B,J)=>React.createElement("li",{key:B.node},React.createElement("button",{className:[Ce.traceButton,J<e?Ce.traceButtonPast:"",J===e?Ce.traceButtonActive:"",p&&J===2?Ce.traceButtonBlocked:""].filter(Boolean).join(" "),type:"button",onClick:()=>V(J),disabled:p&&J>2,"aria-current":J===e?"step":void 0},React.createElement("span",{className:Ce.traceIndex},"0",J+1),React.createElement("strong",null,B.opcode),React.createElement("small",null,B.pc," / ",B.file.replace(".sol","")))))))),React.createElement("aside",{className:Ce.inspector,"aria-label":"Frame inspector"},React.createElement("div",{className:Ce.paneHeader},React.createElement("strong",null,"Frame inspector"),React.createElement("span",null,"pc ",b.pc)),React.createElement("div",{className:Ce.inspectorTabs,role:"tablist","aria-label":"Inspector views"},["source","state","evidence"].map(B=>React.createElement("button",{className:S===B?Ce.tabActive:"",type:"button",role:"tab",id:`trace-tab-${B}`,"aria-controls":"trace-inspector-panel","aria-selected":S===B,key:B,onClick:()=>g(B)},B))),React.createElement("div",{className:Ce.inspectorBody,role:"tabpanel",id:"trace-inspector-panel","aria-labelledby":`trace-tab-${S}`},S==="source"&&React.createElement(React.Fragment,null,React.createElement("div",{className:Ce.sourceHeader},React.createElement("span",null,D.file),React.createElement("span",null,"L",D.start+D.hot)),React.createElement("code",{className:Ce.sourceCode},D.lines.map((B,J)=>{const Se=J===D.hot,De=Se&&!p&&e>=2;return React.createElement("span",{className:`${Ce.sourceLine} ${Se?Ce.sourceLineHot:""} ${De?Ce.sourceLineDanger:""}`,key:`${D.file}-${D.start+J}`},React.createElement("span",{className:Ce.sourceLineNo},D.start+J),React.createElement("span",null,B||" "))}))),S==="state"&&React.createElement("div",{className:Ce.stateTable},React.createElement("div",{className:Ce.stateRow},React.createElement("span",null,"context"),React.createElement("code",null,"VaultRouter")),React.createElement("div",{className:Ce.stateRow},React.createElement("span",null,"msg.sender"),React.createElement("code",null,"0xBAD0…C0DE")),React.createElement("div",{className:Ce.stateRow},React.createElement("span",null,"module"),React.createElement("code",null,"0x71D9…0A11")),React.createElement("div",{className:Ce.stateRow},React.createElement("span",null,"codehash"),React.createElement("code",{className:p?Ce.stateVerified:Ce.stateHazard},p?"0xAPPROVED…E91F":"0xMISMATCH…BA5E")),React.createElement("div",{className:Ce.stateRow},React.createElement("span",null,"slot[0]"),React.createElement("code",{className:p?Ce.stateVerified:e>=3?Ce.stateHazard:""},p?"unchanged / 0xA11C…":e>=3?"0xBAD0…C0DE":"0xA11C…E001")),React.createElement("div",{className:Ce.stateRow},React.createElement("span",null,"value"),React.createElement("code",null,e>=4&&!p?"128.40 ETH → external":"128.40 ETH / vault"))),S==="evidence"&&React.createElement("div",{className:Ce.evidenceBlock},React.createElement("p",{className:Ce.evidenceLead},"The registry approves an address, but execution trusts whatever runtime code exists there later. The trace proves that code can cross into router storage."),React.createElement("div",{className:Ce.evidenceFact},React.createElement("span",null,"ENTRY"),React.createElement("b",null,"external execute(bytes)")),React.createElement("div",{className:Ce.evidenceFact},React.createElement("span",null,"CONTROL"),React.createElement("b",null,"module runtime code")),React.createElement("div",{className:Ce.evidenceFact},React.createElement("span",null,"MUTATION"),React.createElement("b",null,"owner / slot[0]")),React.createElement("div",{className:Ce.evidenceFact},React.createElement("span",null,"IMPACT"),React.createElement("b",null,"unauthorized value outflow")),React.createElement("div",{className:Ce.evidenceFact},React.createElement("span",null,"PATCH"),React.createElement("b",null,"bind extcodehash before call")))),React.createElement("div",{className:Ce.frameCard},React.createElement("div",{className:Ce.frameCardHeader},React.createElement("span",null,"FRAME ",b.frame," / ",b.file,":",b.line),React.createElement("b",null,p&&e>=2?"BLOCKED":b.opcode)),React.createElement("h2",null,kr[s]),React.createElement("p",null,p&&e>=2?"The code identity guard seals the authority plane before state is reachable.":b.detail))),React.createElement("section",{className:Ce.console,"aria-label":"Trace command console"},React.createElement("div",{className:Ce.logIdentity},React.createElement("span",null,React.createElement("b",null,"LOCAL CONSOLE"),"one state model",React.createElement("br",null),"no network writes")),React.createElement("div",{className:Ce.logViewport,role:"log","aria-live":"polite","aria-relevant":"additions text"},React.createElement("ul",{className:Ce.logLines},E.map((B,J)=>React.createElement("li",{className:`${Ce.logLine} ${E2(B.tone)}`,key:`${B.offset}-${B.kind}-${J}`},React.createElement("span",null,B.offset),React.createElement("span",{className:Ce.logKind},B.kind),React.createElement("code",null,B.message))))),React.createElement("form",{className:Ce.promptForm,onSubmit:ie},React.createElement("label",{className:Ce.promptContext,htmlFor:"trace-command"},"trace@vault-core"),React.createElement("span",{className:Ce.promptGlyph,"aria-hidden":"true"},"›"),React.createElement("input",{className:Ce.promptInput,id:"trace-command",ref:O,value:w,onChange:B=>M(B.target.value),onKeyDown:ge,placeholder:"trace AB-001",autoComplete:"off",spellCheck:!1}),React.createElement("span",{className:Ce.promptHint},"Ctrl K · Tab completes · help")))))}const ex=document.getElementById("root");if(!ex)throw new Error("TraceOS preview root was not found.");uy.createRoot(ex).render(React.createElement(pt.StrictMode,null,React.createElement(b2,{versionOneHref:"/auditbase-ui-preview/"})));
//# sourceMappingURL=index-DlqyPuuE.js.map
