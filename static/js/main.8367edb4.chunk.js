(this.webpackJsonphoneykingdom=this.webpackJsonphoneykingdom||[]).push([[0],{15:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(10),c=t.n(o),i=t(8),u=t(4),l=t(1),s=t(2),f=function(n){var e=n.className,t=n.src;return(a.a.createElement("iframe",{className:e,src:t,allow:"autoplay",allowFullScreen:"true"}))};function d(){return(d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function h(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var v=a.a.createElement("path",{fill:"currentColor",d:"M4 6v14h19V6h-2v12H6V8h10v10h2V8h3V6z"}),g=function(n){var e=n.svgRef,t=n.title,r=h(n,["svgRef","title"]);return a.a.createElement("svg",d({viewBox:"0 0 26 26",ref:e},r),t?a.a.createElement("title",null,t):null,v)},b=a.a.forwardRef((function(n,e){return a.a.createElement(g,d({svgRef:e},n))}));t.p;function p(){var n=Object(l.a)(["\n  display: inline-flex;\n  width: 26px;\n  height: 26px;\n  color: #fff;\n"]);return p=function(){return n},n}function m(){var n=Object(l.a)(["\n  text-decoration: none;\n  color: #f2a525;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return m=function(){return n},n}function w(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  opacity: 0.5;\n  color: #9f9f9f;\n"]);return w=function(){return n},n}var O,y,j=s.c.div(w()),x=s.c.a.attrs({target:"_blank",rel:"noopener noreferrer"})(m()),E=Object(s.c)(b)(p()),k=function(){return a.a.createElement(j,null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\xa0",a.a.createElement("strong",null,"Ignore X-Frame-Options Header"),"\xa0(",a.a.createElement(x,{href:"https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe"},"Chrome"),",\xa0",a.a.createElement(x,{href:"https://addons.mozilla.org/en-US/firefox/addon/ignore-x-frame-options-header/"},"Firefox"),") \u0438 \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 Theatre Mode\xa0",a.a.createElement(E,null),"\xa0\u0432 \u043f\u043b\u0435\u0435\u0440\u0435")},I={TWITCH:"twitch",YOUTUBE:"youtube",GOODGAME:"goodgame",NONOLIVE:"nonolive",WASD:"wasd",MIXER:"mixer"},M={nytick:{player:"nytick",chats:"honeymad,nytick"},gg:{player:"goodgame@41677",chats:"honeymad,goodgame@41677"},"gg-lasqa":{player:"goodgame@99600",chats:"lasqa,goodgame@99600"},"gg-segall":{player:"goodgame@99600",chats:"segall,goodgame@99600"},"gg-arrowwoods":{player:"goodgame@137757",chats:"arrowwoods,goodgame@137757"},"gg-melharucos":{player:"goodgame@171713",chats:"melharucos,goodgame@171713"},"gg-liz0n":{player:"goodgame@79564",chats:"liz0n,goodgame@79564"},"gg-roadhouse":{player:"goodgame@130743",chats:"roadhouse,goodgame@130743"},"gg-zanuda":{player:"goodgame@88446",chats:"zanuda,goodgame@88446"},nonolive:{player:"nonolive@18407291",chats:"honeymad,nonolive@18407291"},wasd:{player:"wasd@22196",chats:"honeymad,wasd@22196"},"wasd-cake":{player:"wasd@40656",chats:"c_a_k_e,wasd@40656"},"wasd-zanuda":{player:"wasd@20402",chats:"zanuda,wasd@20402"},"wasd-lasqa":{player:"wasd@164328",chats:"lasqa,goodgame@99600,wasd@164328"},youtube:{player:function(n){return"youtube@".concat(n)},chats:function(n){return"honeymad,youtube@".concat(n)}},mixer:{player:"mixer@JoaquinPanis",chats:"honeymad,mixer@JoaquinPanis"}},N=function(){var n=window,e=n.innerWidth,t=n.innerHeight;return e<920&&t>=768},z=function(){var n=Object(r.useState)(N),e=Object(u.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){var n=function(){return a(N())};return window.addEventListener("resize",n),function(){return window.addEventListener("resize",n)}}),[a]),t},S=t(3),L=(O={},Object(S.a)(O,I.TWITCH,(function(n){return"//www.twitch.tv/embed/".concat(n,"/chat?darkpopout")})),Object(S.a)(O,I.YOUTUBE,(function(n){return"//www.youtube.com/live_chat?v=".concat(n,"&is_popout=1")})),Object(S.a)(O,I.GOODGAME,(function(n){return"//goodgame.ru/chat/".concat(n)})),Object(S.a)(O,I.NONOLIVE,(function(n){return"//www.nonolive.com/popout/chat/".concat(n)})),Object(S.a)(O,I.WASD,(function(n){return"//wasd.tv/chat?channel_id=".concat(n)})),Object(S.a)(O,I.MIXER,(function(n){return"//mixer.com/embed/chat/".concat(n)})),O),T=(y={},Object(S.a)(y,I.TWITCH,(function(n){return"//player.twitch.tv/?channel=".concat(n)})),Object(S.a)(y,I.YOUTUBE,(function(n){return"//www.youtube.com/embed/".concat(n,"?autoplay=1")})),Object(S.a)(y,I.GOODGAME,(function(n){return"//goodgame.ru/player?".concat(n)})),Object(S.a)(y,I.NONOLIVE,(function(n){return"//www.nonolive.com/room/".concat(n)})),Object(S.a)(y,I.WASD,(function(n){return"//wasd.tv/channel/".concat(n)})),Object(S.a)(y,I.MIXER,(function(n){return"//mixer.com/embed/player/".concat(n)})),y),A=function(n){var e=n.service,t=n.payload;return L[e](t)},V=function(n){var e=n.service,t=n.payload;return T[e](t)},W=M.wasd,D=W.player,U=W.chats,R=function(n){return n&&Object.values(I).includes(n.service)},_=function(n,e){if(!n)return null;var t=n.split("@");if(1===t.length){var r=I.TWITCH,a=Object(u.a)(t,1)[0];return{service:r,payload:a,url:e({service:r,payload:a})}}if(2===t.length){var o=Object(u.a)(t,2),c=o[0],i=o[1];return{service:c,payload:i,url:e({service:c,payload:i})}}return null},C=function(n){var e=_(n,V);return R(e)?e:_(D,V)},H=function(n){return n.split(",").map((function(n){return _(n,A)}))},q=function(n){var e=H(n||U).filter((function(n){return n&&R(n)}));return e.length>0?e:H(U)};function G(){var n=Object(l.a)(["\n      height: calc(100% - var(--chat-tabs-height));\n    "]);return G=function(){return n},n}function P(){var n=Object(l.a)(["\n  display: ",";\n  width: 100%;\n  height: calc(100vh - var(--chat-tabs-height));\n  border: none;\n  background-color: #fff;\n\n  ","\n"]);return P=function(){return n},n}function B(){var n=Object(l.a)(["\n  flex-grow: 1;\n  flex-basis: 0;\n  color: ",";\n  background-color: var(",");\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: var(--chat-tabs-height);\n  text-align: center;\n  cursor: pointer;\n  &:hover {\n    background-color: var(--color-violet-dark);\n  }\n  &:not(:last-child) {\n    border-right: 1px solid var(--color-violet);\n  }\n"]);return B=function(){return n},n}function F(){var n=Object(l.a)(["\n  display: flex;\n  height: var(--chat-tabs-height);\n  border-bottom: 1px solid var(--color-violet);\n"]);return F=function(){return n},n}function J(){var n=Object(l.a)(["\n      width: 100%;\n      flex-grow: 1;\n    "]);return J=function(){return n},n}function X(){var n=Object(l.a)(["\n  position: relative;\n  flex-shrink: 0;\n  width: var(--chat-witdh);\n\n  ","\n"]);return X=function(){return n},n}function Y(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: none;\n  width: 100%;\n  height: 100%;\n"]);return Y=function(){return n},n}function Z(){var n=Object(l.a)(["\n      height: auto;\n      flex-grow: 0;\n      flex-shrink: 0;\n\n      &:after {\n        display: block;\n        content: '';\n        padding-top: 56.25%;\n      }\n    "]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n      --wasd-offset-top: 48px;\n\n      height: calc(100% + var(--wasd-offset-top));\n      margin-top: calc(-1 * var(--wasd-offset-top));\n      margin-right: -320px;\n    "]);return $=function(){return n},n}function K(){var n=Object(l.a)(["\n      margin-right: calc(-1 * var(--chat-witdh));\n    "]);return K=function(){return n},n}function Q(){var n=Object(l.a)(["\n  position: relative;\n  flex-grow: 1;\n  height: 100%;\n\n  ",";\n\n  ",";\n\n  ","\n"]);return Q=function(){return n},n}function nn(){var n=Object(l.a)(["\n  position: absolute;\n  top: 6px;\n  right: var(--chat-witdh);\n  width: 32px;\n  height: 28px;\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  position: absolute;\n  left: 0;\n  right: var(--chat-witdh);\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  height: 60px;\n  background-color: #313131;\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n      flex-direction: column;\n      align-items: stretch;\n    "]);return tn=function(){return n},n}function rn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: flex-start;\n  height: 100vh;\n  font-family: sans-serif;\n\n  ","\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n  :root {\n    --color-black: #0e0c13;\n    --color-violet: #2c2541;\n    --color-violet-dark: #1f1925;\n    --chat-tabs-height: 26px;\n    --chat-witdh: 340px;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n  }\n"]);return an=function(){return n},n}var on=Object(s.a)(an()),cn=s.c.div(rn(),(function(n){return n.isMobile&&Object(s.b)(tn())})),un=s.c.div(en()),ln=s.c.div(nn()),sn=s.c.div(Q(),(function(n){return n.service===I.NONOLIVE&&Object(s.b)(K())}),(function(n){return n.service===I.WASD&&Object(s.b)($())}),(function(n){return n.isMobile&&Object(s.b)(Z())})),fn=Object(s.c)(f)(Y()),dn=s.c.div(X(),(function(n){return n.isMobile&&Object(s.b)(J())})),hn=s.c.div(F()),vn=s.c.div(B(),(function(n){return n.active?"#d3d3d3":"#898395"}),(function(n){return n.active?"--color-violet-dark":"--color-black"})),gn=s.c.iframe(P(),(function(n){return n.active?"block":"none"}),(function(n){return n.isMobile&&Object(s.b)(G())})),bn=/^(youtube)=([a-zA-Z0-9_-]{11})$/,pn=function(){var n=window.location.hash.slice(1),e=bn.exec(n);if(null!==e){var t=Object(u.a)(e,3);return{value:t[1],payload:t[2]}}return{value:n}},mn=function(n){return n&&Object.keys(M).includes(n.value)},wn=function(){var n=pn();return mn(n)?n:null},On=function(){var n=Object(r.useState)(wn),e=Object(u.a)(n,2),t=e[0],o=e[1],c=function(n){var e,t;if(n){var r=n.value,a=n.payload,o=M[r],c=o.player,i=o.chats;e="function"===typeof c?c(a):c,t="function"===typeof i?i(a):i}else{var u=new URLSearchParams(window.location.search);e=u.get("player"),t=u.get("chats")}return{player:C(e),chats:q(t)}}(t),i=c.player,l=c.chats,s=Object(r.useState)(l[0].url),f=Object(u.a)(s,2),d=f[0],h=f[1],v=z()&&i.service!==I.WASD&&i.service!==I.NONOLIVE;Object(r.useEffect)((function(){return h(l[0].url)}),[t]),Object(r.useEffect)((function(){var n=function(){var n=pn();mn(n)&&o(n)};return window.addEventListener("hashchange",n),function(){return window.removeEventListener("hashchange",n)}}),[o]);var g=l.filter((function(n){return!(n.service===I.NONOLIVE&&n.payload===i.payload)}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(cn,{service:i.service,isMobile:v},a.a.createElement(sn,{service:i.service,isMobile:v},a.a.createElement(fn,{src:i.url})),i.service===I.WASD&&a.a.createElement(ln,null),i.service===I.NONOLIVE&&a.a.createElement(un,null,a.a.createElement(k,null)),a.a.createElement(dn,{isMobile:v},a.a.createElement(hn,null,l.map((function(n){return a.a.createElement(vn,{key:n.url,active:n.url===d,onClick:function(){return h(n.url)}},n.payload)}))),g.map((function(n){return a.a.createElement(gn,{key:n.url,active:n.url===d,src:n.url,isMobile:v})})))),a.a.createElement(on,null))};i.a.initialize("UA-139550930-1"),i.a.pageview(window.location.pathname+window.location.search+window.location.hash),c.a.render(a.a.createElement(On,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8367edb4.chunk.js.map