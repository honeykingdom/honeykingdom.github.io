(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(4),c=t.n(o),i=t(3),l=t(1),u=t(2),f={TWITCH:"twitch",NONOLIVE:"nonolive"},s=function(e){var n=e.service,t=e.payload;switch(n){case f.TWITCH:default:return"//www.twitch.tv/embed/".concat(t,"/chat?darkpopout");case f.NONOLIVE:return"//www.nonolive.com/popout/chat/".concat(t)}},d=function(e){var n=e.service,t=e.payload;switch(n){case f.TWITCH:default:return"//player.twitch.tv/?channel=".concat(t);case f.NONOLIVE:return"//www.nonolive.com/room/".concat(t)}},v=function(e){var n=e.className,t=e.src,o=e.service,c=Object(r.useRef)(null);return Object(r.useLayoutEffect)(function(){c.current&&o===f.TWITCH&&c.current.setAttribute("allowfullscreen","true")},[o]),a.a.createElement("iframe",{className:n,src:t,service:o,ref:c})};function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createElement("path",{fill:"currentColor",d:"M4 6v14h19V6h-2v12H6V8h10v10h2V8h3V6z"}),m=function(e){var n=e.svgRef,t=p(e,["svgRef"]);return a.a.createElement("svg",h({viewBox:"0 0 26 26",ref:n},t),b)},g=a.a.forwardRef(function(e,n){return a.a.createElement(m,h({svgRef:n},e))});t.p;function O(){var e=Object(l.a)(["\n  display: inline-flex;\n  width: 26px;\n  height: 26px;\n  color: #fff;\n"]);return O=function(){return e},e}function w(){var e=Object(l.a)(["\n  text-decoration: none;\n  color: #f2a525;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  opacity: 0.5;\n  color: #9f9f9f;\n"]);return y=function(){return e},e}var x=u.c.div(y()),j=u.c.a.attrs({target:"_blank",rel:"noopener noreferrer"})(w()),E=Object(u.c)(g)(O()),k=function(){return a.a.createElement(x,null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\xa0",a.a.createElement("strong",null,"Ignore X-Frame-Options Header"),"\xa0(",a.a.createElement(j,{href:"https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe"},"Chrome"),",\xa0",a.a.createElement(j,{href:"https://addons.mozilla.org/en-US/firefox/addon/ignore-x-frame-options-header/"},"Firefox"),") \u0438 \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 Theatre Mode\xa0",a.a.createElement(E,null),"\xa0\u0432 \u043f\u043b\u0435\u0435\u0440\u0435")},I={service:f.TWITCH,payload:"honeymad"},T=[{id:1,service:f.TWITCH,payload:"honeymad"},{id:2,service:f.TWITCH,payload:"nytick"}],N=function(e){return e&&Object.values(f).includes(e.service)},C=function(e){if(!e)return null;var n=e.split("@");if(1===n.length){var t=Object(i.a)(n,1)[0];return{id:e,service:f.TWITCH,payload:t}}if(2===n.length){var r=Object(i.a)(n,2);return{id:e,service:r[0],payload:r[1]}}return null};function H(){var e=Object(l.a)(["\n  position: absolute;\n  top: var(--chat-tabs-height);\n  right: 0;\n  display: ",";\n  width: var(--chat-witdh);\n  height: calc(100% - var(--chat-tabs-height));\n  border: none;\n  background-color: #fff;\n"]);return H=function(){return e},e}function V(){var e=Object(l.a)(["\n  flex-grow: 1;\n  flex-basis: 0;\n  color: ",";\n  background-color: var(",");\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: var(--chat-tabs-height);\n  text-align: center;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--color-violet-dark);\n  }\n  &:not(:last-child) {\n    border-right: 1px solid var(--color-violet);\n  }\n"]);return V=function(){return e},e}function L(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  height: var(--chat-tabs-height);\n  width: var(--chat-witdh);\n  border-bottom: 1px solid var(--color-violet);\n"]);return L=function(){return e},e}function W(){var e=Object(l.a)(["\n      margin-right: 0;\n    "]);return W=function(){return e},e}function R(){var e=Object(l.a)(["\n  position: relative;\n  border: none;\n  width: 100%;\n  margin-right: var(--chat-witdh);\n\n  ",";\n"]);return R=function(){return e},e}function z(){var e=Object(l.a)(["\n  position: absolute;\n  left: 0;\n  right: var(--chat-witdh);\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  height: 60px;\n  background-color: #313131;\n"]);return z=function(){return e},e}function S(){var e=Object(l.a)(["\n  display: flex;\n  height: 100vh;\n  font-family: sans-serif;\n"]);return S=function(){return e},e}function P(){var e=Object(l.a)(["\n  :root {\n    --color-black: #0e0c13;\n    --color-violet: #2c2541;\n    --color-violet-dark: #1f1925;\n    --chat-tabs-height: 26px;\n    --chat-witdh: 340px;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n  }\n"]);return P=function(){return e},e}document.title="HoneyMad";var F=Object(u.a)(P()),M=u.c.div(S()),B=u.c.div(z()),J=Object(u.c)(v)(R(),function(e){return e.service===f.NONOLIVE&&Object(u.b)(W())}),U=u.c.div(L()),A=u.c.div(V(),function(e){return e.active?"#d3d3d3":"#898395"},function(e){return e.active?"--color-violet-dark":"--color-black"}),X=u.c.iframe(H(),function(e){return e.active?"block":"none"}),_=function(){var e=new URLSearchParams(window.location.search),n=function(e){var n=C(e);return N(n)?n:I}(e.get("player")),t=function(e){if(!e)return T;var n=e.split(",").map(function(e){return C(e)}).filter(function(e){return e&&N(e)});return n.length>0?n:T}(e.get("chats")),o=Object(r.useState)(t[0].id),c=Object(i.a)(o,2),l=c[0],u=c[1],v=t.filter(function(e){return!(e.service===f.NONOLIVE&&e.payload===n.payload)});return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{service:n.service},a.a.createElement(J,{src:d(n),service:n.service}),n.service===f.NONOLIVE&&a.a.createElement(B,null,a.a.createElement(k,null)),a.a.createElement(U,null,t.map(function(e){return a.a.createElement(A,{key:e.id,active:e.id===l,onClick:function(){return u(e.id)}},e.payload)})),v.map(function(e){return a.a.createElement(X,{key:e.id,active:e.id===l,src:s(e)})})),a.a.createElement(F,null))};c.a.render(a.a.createElement(_,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.da59adda.chunk.js.map