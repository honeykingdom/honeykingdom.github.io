(this.webpackJsonphoneykingdom=this.webpackJsonphoneykingdom||[]).push([[0],{16:function(n,t,e){n.exports=e(25)},25:function(n,t,e){"use strict";e.r(t);var a,r=e(0),o=e.n(r),c=e(11),i=e.n(c),u=e(6),l=e(3),s=e(1),d=e(2),h=e(12);!function(n){n.twitch="twitch",n.youtube="youtube",n.goodgame="goodgame",n.wasd="wasd"}(a||(a={}));var f,g,b={nytick:{player:"nytick",chats:"honeymad,nytick"},gg:{player:"goodgame@41677",chats:"honeymad,goodgame@41677"},"gg-lasqa":{player:"goodgame@99600",chats:"lasqa,goodgame@99600"},"gg-segall":{player:"goodgame@99600",chats:"segall,goodgame@99600"},"gg-arrowwoods":{player:"goodgame@137757",chats:"arrowwoods,goodgame@137757"},"gg-melharucos":{player:"goodgame@171713",chats:"melharucos,goodgame@171713"},"gg-liz0n":{player:"goodgame@79564",chats:"liz0n,goodgame@79564"},"gg-roadhouse":{player:"goodgame@130743",chats:"roadhouse,goodgame@130743"},"gg-zanuda":{player:"goodgame@88446",chats:"zanuda,goodgame@88446"},"gg-nuke73":{player:"goodgame@3610",chats:"nuke73,goodgame@3610"},wasd:{player:"wasd@22196",chats:"honeymad,wasd@22196"},"wasd-cake":{player:"wasd@40656",chats:"c_a_k_e,wasd@40656"},"wasd-zanuda":{player:"wasd@20402",chats:"zanuda,wasd@20402"},"wasd-lasqa":{player:"wasd@164328",chats:"lasqa,goodgame@99600,wasd@164328"},"wasd-segall":{player:"wasd@166801",chats:"segall,wasd@166801"},"wasd-guit88man":{player:"wasd@111152",chats:"guit88man,wasd@111152"},"wasd-nuke73":{player:"wasd@103444",chats:"nuke73,wasd@103444"},youtube:{player:function(n){return"youtube@".concat(n)},chats:function(n){return"honeymad,youtube@".concat(n)}}},v=function(n){var t=n.service,e=n.payload;return t===a.twitch?e:t},w=e(4),p=(f={},Object(w.a)(f,a.twitch,(function(n){return"//www.twitch.tv/embed/".concat(n,"/chat?darkpopout&parent=").concat(window.location.host)})),Object(w.a)(f,a.youtube,(function(n){return"//www.youtube.com/live_chat?v=".concat(n,"&is_popout=1")})),Object(w.a)(f,a.goodgame,(function(n){return"//goodgame.ru/chat/".concat(n)})),Object(w.a)(f,a.wasd,(function(n){return"//wasd.tv/chat?channel_id=".concat(n)})),f),m=(g={},Object(w.a)(g,a.twitch,(function(n){return"//player.twitch.tv/?channel=".concat(n,"&parent=").concat(window.location.host)})),Object(w.a)(g,a.youtube,(function(n){return"//www.youtube.com/embed/".concat(n,"?autoplay=1")})),Object(w.a)(g,a.goodgame,(function(n){return"//goodgame.ru/player?".concat(n)})),Object(w.a)(g,a.wasd,(function(n){return"//wasd.tv/channel/".concat(n)})),g),y=function(n,t){return p[n](t)},j=function(n,t){return m[n](t)},O=/^(youtube)=([a-zA-Z0-9_-]{11})$/,k=b.wasd,x=k.player,E=k.chats,$=function(n,t){if(!n)return null;var e=n.split("@"),r=null,o=null;if(1===e.length){var c=Object(l.a)(e,1)[0];r=a.twitch,o=c}if(2===e.length){var i=Object(l.a)(e,2),u=i[0],s=i[1];if(!function(n){return n in a}(u))return null;r=u,o=s}return r&&o?{service:r,payload:o,url:t(r,o)}:null},z=function(n){return n.split(",").map((function(n){return $(n,y)}))},M=function(n){var t=n.hash,e=n.searchParams,a=new URLSearchParams(e),r=a.get("player"),o=a.get("chats"),c=t.slice(1);if(c){var i=O.exec(c),u="",s="";if(null!==i){var d=Object(l.a)(i,3);u=d[1],s=d[2]}else u=c;if(Object.keys(b).includes(u)){var h=b[u],f=h.player,g=h.chats;r="function"===typeof f?f(s):f,o="function"===typeof g?g(s):g}}return r||o||(r=x,o=E),r||(r=x),o||(o=r),{player:$(r,j)||$(x,j),chats:function(n){var t=z(n||E).filter(Boolean);return t.length>0?t:z(E)}(o)}},_=function(){return M({hash:window.location.hash,searchParams:window.location.search})},L=function(){var n=Object(r.useState)(_),t=Object(l.a)(n,2),e=t[0],a=t[1];return Object(r.useEffect)((function(){var n=function(){a(_())};return window.addEventListener("hashchange",n),function(){return window.removeEventListener("hashchange",n)}}),[]),e},S=function(){var n=window,t=n.innerWidth,e=n.innerHeight;return t<920&&e>=768},q=function(){var n=Object(r.useState)(S),t=Object(l.a)(n,2),e=t[0],a=t[1];return Object(r.useEffect)((function(){var n=function(){return a(S())};return window.addEventListener("resize",n),function(){return window.addEventListener("resize",n)}}),[a]),e};function C(){var n=Object(s.a)(["\n      height: calc(100% - var(--chat-tabs-height));\n    "]);return C=function(){return n},n}function H(){var n=Object(s.a)(["\n  display: ",";\n  width: 100%;\n  height: calc(100vh - var(--chat-tabs-height));\n  border: none;\n  background-color: #fff;\n\n  ","\n"]);return H=function(){return n},n}function P(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--chat-tabs-height);\n  background-color: var(--color-black);\n\n  &:hover {\n    background-color: var(--color-violet-dark);\n  }\n\n  svg path {\n    fill: #898395;\n  }\n"]);return P=function(){return n},n}function U(){var n=Object(s.a)(["\n  flex-grow: 1;\n  flex-basis: 0;\n  color: ",";\n  background-color: ",";\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: var(--chat-tabs-height);\n  text-align: center;\n  border-right: 1px solid var(--color-violet);\n  cursor: pointer;\n\n  &:hover {\n    background-color: var(--color-violet-dark);\n  }\n"]);return U=function(){return n},n}function A(){var n=Object(s.a)(["\n  display: flex;\n  flex-grow: 1;\n"]);return A=function(){return n},n}function B(){var n=Object(s.a)(["\n  display: flex;\n  height: var(--chat-tabs-height);\n  border-bottom: 1px solid var(--color-violet);\n"]);return B=function(){return n},n}function F(){var n=Object(s.a)(["\n      width: 100%;\n      flex-grow: 1;\n    "]);return F=function(){return n},n}function G(){var n=Object(s.a)(["\n  position: relative;\n  flex-shrink: 0;\n  width: var(--chat-witdh);\n\n  ","\n"]);return G=function(){return n},n}function I(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: none;\n  width: 100%;\n  height: 100%;\n"]);return I=function(){return n},n}function J(){var n=Object(s.a)(["\n      height: auto;\n      flex-grow: 0;\n      flex-shrink: 0;\n\n      &:after {\n        display: block;\n        content: '';\n        padding-top: 56.25%;\n      }\n    "]);return J=function(){return n},n}function R(){var n=Object(s.a)(["\n      --wasd-offset-top: 48px;\n\n      height: calc(100% + var(--wasd-offset-top));\n      margin-top: calc(-1 * var(--wasd-offset-top));\n      margin-right: -320px;\n    "]);return R=function(){return n},n}function W(){var n=Object(s.a)(["\n  position: relative;\n  flex-grow: 1;\n  height: 100%;\n\n  ",";\n\n  ","\n"]);return W=function(){return n},n}function Z(){var n=Object(s.a)(["\n  position: absolute;\n  top: 54px;\n  right: var(--chat-witdh);\n  width: 32px;\n  height: 28px;\n"]);return Z=function(){return n},n}function D(){var n=Object(s.a)(["\n      flex-direction: column;\n      align-items: stretch;\n    "]);return D=function(){return n},n}function K(){var n=Object(s.a)(["\n  display: flex;\n  align-items: flex-start;\n  height: 100vh;\n  font-family: sans-serif;\n\n  ","\n"]);return K=function(){return n},n}function N(){var n=Object(s.a)(["\n  :root {\n    --color-black: #0e0c13;\n    --color-violet: #2c2541;\n    --color-violet-dark: #1f1925;\n    --chat-tabs-height: 20px;\n    --chat-witdh: 340px;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n  }\n"]);return N=function(){return n},n}var Q=Object(d.a)(N()),T=d.c.div(K(),(function(n){return n.$isMobile&&Object(d.b)(D())})),V=d.c.div(Z()),X=d.c.div(W(),(function(n){return n.$service===a.wasd&&Object(d.b)(R())}),(function(n){return n.$isMobile&&Object(d.b)(J())})),Y=d.c.iframe.attrs({allow:"autoplay",allowFullScreen:!0})(I()),nn=d.c.div(G(),(function(n){return n.$isMobile&&Object(d.b)(F())})),tn=d.c.div(B()),en=d.c.div(A()),an=d.c.div(U(),(function(n){return n.$active?"#d3d3d3":"#898395"}),(function(n){return n.$active?"var(--color-violet-dark)":"var(--color-black)"})),rn=d.c.a(P()),on=d.c.iframe(H(),(function(n){return n.$active?"block":"none"}),(function(n){return n.$isMobile&&Object(d.b)(C())})),cn=function(){return u.a.event({category:"User Interface",action:"GitHub Repository Click"})},un=function(){var n=L(),t=n.player,e=n.chats,c=Object(r.useState)(e[0].url),i=Object(l.a)(c,2),u=i[0],s=i[1],d=q()&&t.service!==a.wasd;Object(r.useEffect)((function(){return s(e[0].url)}),[s,e]);var f=e.filter((function(n){var e=n.service,r=n.payload;return!(e===a.wasd&&r===t.payload)}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{$isMobile:d},o.a.createElement(X,{$service:t.service,$isMobile:d},o.a.createElement(Y,{src:t.url,title:"".concat(t.service," - ").concat(t.payload)})),t.service===a.wasd&&o.a.createElement(V,null),o.a.createElement(nn,{$isMobile:d},o.a.createElement(tn,null,o.a.createElement(en,null,e.map((function(n){return o.a.createElement(an,{key:n.url,$active:n.url===u,onClick:function(){return s(n.url)}},v(n))}))),o.a.createElement(rn,{target:"_blank",rel:"noreferrer noopener",href:"//github.com/honeykingdom/honeykingdom.github.io",title:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043d\u0430 GitHub",onClick:cn},o.a.createElement(h.a,null))),f.map((function(n){var t=n.url;return o.a.createElement(on,{key:t,src:t,$active:t===u,$isMobile:d})})))),o.a.createElement(Q,null))};u.a.initialize("UA-139550930-1"),u.a.pageview(window.location.pathname+window.location.search+window.location.hash),i.a.render(o.a.createElement(un,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b0162877.chunk.js.map