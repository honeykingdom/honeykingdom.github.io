(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,t,e){n.exports=e(23)},23:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),c=e(3),i=e.n(c),a=e(10),l=e(1),u=e(2),f=function(n){var t=n.service,e=n.payload;switch(t){case"twitch":default:return"//www.twitch.tv/embed/".concat(e,"/chat?darkpopout");case"nonolive":return"//www.nonolive.com/popout/chat/".concat(e)}},v=function(n){var t=n.service,e=n.payload;switch(t){case"twitch":default:return"//player.twitch.tv/?channel=".concat(e);case"nonolive":return"//www.nonolive.com/room/".concat(e)}};function s(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: ",";\n  z-index: ",";\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n  flex-shrink: 0;\n  border: none;\n  background-color: #fff;\n"]);return s=function(){return n},n}function d(){var n=Object(l.a)(["\n  position: relative;\n  margin-top: var(--chat-tabs-height);\n  height: calc(100% - var(--chat-tabs-height));\n"]);return d=function(){return n},n}function h(){var n=Object(l.a)(["\n  flex-grow: 1;\n  flex-basis: 0;\n  color: ",";\n  background-color: var(",");\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: var(--chat-tabs-height);\n  text-align: center;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--color-violet-dark);\n  }\n  &:not(:last-child) {\n    border-right: 1px solid var(--color-violet);\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  height: var(--chat-tabs-height);\n  border-bottom: 1px solid var(--color-violet);\n"]);return b=function(){return n},n}function p(){var n=Object(l.a)(["\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  width: 340px;\n"]);return p=function(){return n},n}function w(){var n=Object(l.a)(["\n      margin-right: -340px;\n    "]);return w=function(){return n},n}function m(){var n=Object(l.a)(["\n  position: relative;\n  border: none;\n  width: 100%;\n\n  ",";\n"]);return m=function(){return n},n}function g(){var n=Object(l.a)(["\n      &:after {\n        content: '';\n        position: absolute;\n        left: 0;\n        right: 340px;\n        bottom: 0;\n        height: 60px;\n        background-color: #313131;\n      }\n    "]);return g=function(){return n},n}function y(){var n=Object(l.a)(["\n  display: flex;\n  height: 100vh;\n\n  ",";\n"]);return y=function(){return n},n}function x(){var n=Object(l.a)(["\n  :root {\n    --color-black: #0e0c13;\n    --color-violet: #2c2541;\n    --color-violet-dark: #1f1925;\n    --chat-tabs-height: 26px;\n  }\n  body {\n    margin: 0;\n  }\n"]);return x=function(){return n},n}document.title="HoneyNyticK - Twitch";var k=Object(u.a)(x()),j=u.c.div(y(),function(n){return"nonolive"===n.service&&Object(u.b)(g())}),O=u.c.iframe(m(),function(n){return"nonolive"===n.service&&Object(u.b)(w())}),E=u.c.div(p()),z=u.c.div(b()),J=u.c.div(h(),function(n){return n.active?"#d3d3d3":"#898395"},function(n){return n.active?"--color-violet-dark":"--color-black"}),A=u.c.div(d()),B=u.c.iframe(s(),function(n){return n.active?"block":"none"},function(n){return n.active?1:0}),C={service:"twitch",payload:"honeymad"},F=[{id:1,service:"twitch",payload:"honeymad"},{id:2,service:"twitch",payload:"nytick"}],H=function(){var n=Object(r.useState)(F[0].id),t=Object(a.a)(n,2),e=t[0],c=t[1],i=Object(r.useRef)(null);return Object(r.useLayoutEffect)(function(){i.current&&"twitch"===C.service&&i.current.setAttribute("allowfullscreen","true")},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{service:C.service},o.a.createElement(O,{name:"player",src:v(C),service:C.service,ref:i}),o.a.createElement(E,null,o.a.createElement(z,null,F.map(function(n){return o.a.createElement(J,{key:n.id,active:n.id===e,onClick:function(){return c(n.id)}},n.payload)})),o.a.createElement(A,null,o.a.createElement(B,{key:F[0].id,active:F[0].id===e,src:f(F[0])})))),o.a.createElement(k,null))};i.a.render(o.a.createElement(H,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.04c3d32e.chunk.js.map