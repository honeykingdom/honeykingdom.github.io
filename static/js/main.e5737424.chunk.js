(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(4),a=t.n(c),i=t(3),l=t(1),u=t(2),f={TWITCH:"twitch",NONOLIVE:"nonolive",GOODGAME:"goodgame"},s=function(e){var n=e.service,t=e.payload;switch(n){case f.TWITCH:default:return"//www.twitch.tv/embed/".concat(t,"/chat?darkpopout");case f.GOODGAME:return"//goodgame.ru/chat/".concat(t);case f.NONOLIVE:return"//www.nonolive.com/popout/chat/".concat(t)}},d=function(e){var n=e.service,t=e.payload;switch(n){case f.TWITCH:default:return"//player.twitch.tv/?channel=".concat(t);case f.GOODGAME:return"//goodgame.ru/player?".concat(t);case f.NONOLIVE:return"//www.nonolive.com/room/".concat(t)}},v=function(e){var n=e.className,t=e.src,c=e.service,a=Object(r.useRef)(null);return Object(r.useLayoutEffect)(function(){a.current&&c===f.TWITCH&&a.current.setAttribute("allowfullscreen","true")},[c]),o.a.createElement("iframe",{className:n,src:t,service:c,ref:a})};function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createElement("path",{fill:"currentColor",d:"M4 6v14h19V6h-2v12H6V8h10v10h2V8h3V6z"}),b=function(e){var n=e.svgRef,t=m(e,["svgRef"]);return o.a.createElement("svg",h({viewBox:"0 0 26 26",ref:n},t),p)},g=o.a.forwardRef(function(e,n){return o.a.createElement(b,h({svgRef:n},e))});t.p;function O(){var e=Object(l.a)(["\n  display: inline-flex;\n  width: 26px;\n  height: 26px;\n  color: #fff;\n"]);return O=function(){return e},e}function y(){var e=Object(l.a)(["\n  text-decoration: none;\n  color: #f2a525;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return y=function(){return e},e}function E(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  opacity: 0.5;\n  color: #9f9f9f;\n"]);return E=function(){return e},e}var w=u.c.div(E()),x=u.c.a.attrs({target:"_blank",rel:"noopener noreferrer"})(y()),j=Object(u.c)(g)(O()),k=function(){return o.a.createElement(w,null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\xa0",o.a.createElement("strong",null,"Ignore X-Frame-Options Header"),"\xa0(",o.a.createElement(x,{href:"https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe"},"Chrome"),",\xa0",o.a.createElement(x,{href:"https://addons.mozilla.org/en-US/firefox/addon/ignore-x-frame-options-header/"},"Firefox"),") \u0438 \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 Theatre Mode\xa0",o.a.createElement(j,null),"\xa0\u0432 \u043f\u043b\u0435\u0435\u0440\u0435")},F={service:f.TWITCH,payload:"honeymad"},I=[{id:1,service:f.TWITCH,payload:"honeymad"},{id:2,service:f.TWITCH,payload:"nytick"}],T=function(e){return e&&Object.values(f).includes(e.service)},H=function(e){if(!e)return null;var n=e.split("@");if(1===n.length){var t=Object(i.a)(n,1)[0];return{id:e,service:f.TWITCH,payload:t}}if(2===n.length){var r=Object(i.a)(n,2);return{id:e,service:r[0],payload:r[1]}}return null};function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function z(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var C=o.a.createElement("path",{fill:"currentColor",d:"M6 10H4V4h6v2H6zM15 4h6v6h-2V6h-4zM4 16v6h6v-2H6v-4zM15 22h6v-6h-2v4h-4z"}),R=function(e){var n=e.svgRef,t=z(e,["svgRef"]);return o.a.createElement("svg",N({viewBox:"0 0 26 26",ref:n},t),C)},V=o.a.forwardRef(function(e,n){return o.a.createElement(R,N({svgRef:n},e))});t.p;function M(){var e=Object(l.a)(["\n  position: absolute;\n  top: var(--chat-tabs-height);\n  right: 0;\n  display: ",";\n  width: var(--chat-witdh);\n  height: calc(100% - var(--chat-tabs-height));\n  border: none;\n  background-color: #fff;\n"]);return M=function(){return e},e}function S(){var e=Object(l.a)(["\n  flex-grow: 1;\n  flex-basis: 0;\n  color: ",";\n  background-color: var(",");\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: var(--chat-tabs-height);\n  text-align: center;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--color-violet-dark);\n  }\n  &:not(:last-child) {\n    border-right: 1px solid var(--color-violet);\n  }\n"]);return S=function(){return e},e}function P(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  height: var(--chat-tabs-height);\n  width: var(--chat-witdh);\n  border-bottom: 1px solid var(--color-violet);\n"]);return P=function(){return e},e}function L(){var e=Object(l.a)(["\n      margin-right: 0;\n    "]);return L=function(){return e},e}function W(){var e=Object(l.a)(["\n  position: relative;\n  border: none;\n  width: 100%;\n  margin-right: var(--chat-witdh);\n\n  ",";\n"]);return W=function(){return e},e}function q(){var e=Object(l.a)(["\n  display: inline-flex;\n  width: 26px;\n  height: 26px;\n  margin-left: auto;\n  cursor: pointer;\n  color: #fff;\n  transition-duration: 0.2s;\n  transition-property: color;\n\n  &:hover {\n    color: #e33d3d;\n  }\n"]);return q=function(){return e},e}function G(){var e=Object(l.a)(["\n  position: absolute;\n  left: 0;\n  right: var(--chat-witdh);\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  height: 60px;\n  background-color: #313131;\n"]);return G=function(){return e},e}function A(){var e=Object(l.a)(["\n  display: flex;\n  height: 100vh;\n  font-family: sans-serif;\n"]);return A=function(){return e},e}function B(){var e=Object(l.a)(["\n  :root {\n    --color-black: #0e0c13;\n    --color-violet: #2c2541;\n    --color-violet-dark: #1f1925;\n    --chat-tabs-height: 26px;\n    --chat-witdh: 340px;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n  }\n"]);return B=function(){return e},e}document.title="HoneyMad";var D=Object(u.a)(B()),J=u.c.div(A()),U=u.c.div(G()),X=Object(u.c)(V)(q()),_=Object(u.c)(v)(W(),function(e){return e.service===f.NONOLIVE&&Object(u.b)(L())}),K=u.c.div(P()),Q=u.c.div(S(),function(e){return e.active?"#d3d3d3":"#898395"},function(e){return e.active?"--color-violet-dark":"--color-black"}),Y=u.c.iframe(M(),function(e){return e.active?"block":"none"}),Z=function(){var e=new URLSearchParams(window.location.search),n=function(e){var n=H(e);return T(n)?n:F}(e.get("player")),t=function(e){if(!e)return I;var n=e.split(",").map(function(e){return H(e)}).filter(function(e){return e&&T(e)});return n.length>0?n:I}(e.get("chats")),c=Object(r.useState)(t[0].id),a=Object(i.a)(c,2),l=a[0],u=a[1],v=Object(r.useState)(!1),h=Object(i.a)(v,2),m=h[0],p=h[1],b=t.filter(function(e){return!(e.service===f.NONOLIVE&&e.payload===n.payload)});return o.a.createElement(o.a.Fragment,null,o.a.createElement(J,{service:n.service},o.a.createElement(_,{src:d(n),service:n.service}),n.service===f.NONOLIVE&&o.a.createElement(U,null,o.a.createElement(k,null),o.a.createElement(X,{onClick:function(){m&&document.fullscreenElement?(p(!1),document.exitFullscreen()):(p(!0),document.documentElement.requestFullscreen())}})),o.a.createElement(K,null,t.map(function(e){return o.a.createElement(Q,{key:e.id,active:e.id===l,onClick:function(){return u(e.id)}},e.payload)})),b.map(function(e){return o.a.createElement(Y,{key:e.id,active:e.id===l,src:s(e)})})),o.a.createElement(D,null))};Element.prototype.requestFullscreen||(Element.prototype.requestFullscreen=Element.prototype.mozRequestFullscreen||Element.prototype.webkitRequestFullscreen||Element.prototype.msRequestFullscreen),document.exitFullscreen||(document.exitFullscreen=document.mozExitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen),document.fullscreenElement||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,"fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}})),a.a.render(o.a.createElement(Z,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e5737424.chunk.js.map