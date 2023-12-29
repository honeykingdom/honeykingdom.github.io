"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{1796:function(e,t,n){n.r(t),n.d(t,{default:function(){return src_Home}});var a,l,r=n(5489),o=n(757),i=n(7726),c=n(8360),u=n(2659);(a=l||(l={})).twitch="twitch",a.youtube="youtube",a.goodgame="goodgame",a.rutube="rutube",a.vkplay="vkplay";let s={nytick:{player:"nytick",chats:"honeymad,nytick"},gg:{player:"goodgame@41677",chats:"honeymad,goodgame@Maddyson"},"gg-lasqa":{player:"goodgame@99600",chats:"lasqa,goodgame@gegeboyz"},"gg-segall":{player:"goodgame@172112",chats:"segall,goodgame@pleb"},"gg-arrowwoods":{player:"goodgame@137757",chats:"arrowwoods,goodgame@Arrowwood"},"gg-melharucos":{player:"goodgame@171713",chats:"melharucos,goodgame@melharucos"},"gg-liz0n":{player:"goodgame@188564",chats:"liz0n,goodgame@KINOklub"},"gg-roadhouse":{player:"goodgame@165622",chats:"roadhouse,goodgame@r0adhousegg"},"gg-peacedaria":{player:"goodgame@187660",chats:"peacedaria"},"gg-praden":{player:"goodgame@176695",chats:"praden,goodgame@Praden"},youtube:{player:e=>"youtube@".concat(e),chats:e=>"honeymad,youtube@".concat(e)},"rt-lasqa":{player:e=>"rutube@".concat(e),chats:()=>"lasqa"}};var utils_getChatTabTitle=e=>{let{service:t,payload:n}=e;return t===l.twitch?n:t};let h={[l.twitch]:e=>"//www.twitch.tv/embed/".concat(e,"/chat?darkpopout&parent=").concat(window.location.host),[l.youtube]:e=>"//www.youtube.com/live_chat?v=".concat(e,"&is_popout=1"),[l.goodgame]:e=>"//goodgame.ru/chat/".concat(e),[l.rutube]:e=>"//rutube.ru/pl/?pl_id&pl_type&pl_video=".concat(e),[l.vkplay]:e=>"//vkplay.live/".concat(e,"/only-chat?initialMode=0")},g={[l.twitch]:e=>"//player.twitch.tv/?channel=".concat(e,"&parent=").concat(window.location.host),[l.youtube]:e=>"//www.youtube.com/embed/".concat(e,"?autoplay=1"),[l.goodgame]:e=>"//goodgame.ru/player?".concat(e),[l.rutube]:e=>"//rutube.ru/chat/?videoId=".concat(e),[l.vkplay]:e=>"//vkplay.live/app/embed/".concat(e)},getChatUrl=(e,t)=>h[e](t),getPlayerUrl=(e,t)=>g[e](t),d=/^(youtube)=([a-zA-Z0-9_-]{11})$/,p=s["gg-arrowwoods"],{player:b,chats:m}=p,isValidService=e=>e in l,getFrame=(e,t)=>{if(!e)return null;let n=e.split("@"),a=null,r=null;if(1===n.length){let[e]=n;a=l.twitch,r=e}if(2===n.length){let[e,t]=n;if(!isValidService(e))return null;a=e,r=t}return a&&r?{service:a,payload:r,url:t(a,r)}:null},getPlayerFrame=e=>{let t=getFrame(e,getPlayerUrl);return t||getFrame(b,getPlayerUrl)},getChats=e=>e.split(",").map(e=>getFrame(e,getChatUrl)),getChatFrames=e=>{let t=getChats(e||m),n=t.filter(Boolean);return n.length>0?n:getChats(m)};var utils_getPlayerAndChat=e=>{let{hash:t,searchParams:n}=e,a=new URLSearchParams(n),l=a.get("player"),r=a.get("chats"),o=t.slice(1);if(o){let e=d.exec(o),t="",n="";if(null!==e){let[,a,l]=e;t=a,n=l}else t=o;if(Object.keys(s).includes(t)){let{player:e,chats:a}=s[t];l="function"==typeof e?e(n):e,r="function"==typeof a?a(n):a}}l||r||(l=b,r=m),l||(l=b),r||(r=l);let i=getPlayerFrame(l),c=getChatFrames(r);return{player:i,chats:c}};let getPlayerAndChatData=()=>utils_getPlayerAndChat({hash:window.location.hash,searchParams:window.location.search});var hooks_usePlayerAndChat=()=>{let[e,t]=(0,i.useState)(getPlayerAndChatData);return(0,i.useEffect)(()=>{let handleHashChange=()=>{t(getPlayerAndChatData())};return window.addEventListener("hashchange",handleHashChange),()=>window.removeEventListener("hashchange",handleHashChange)},[]),e};let getIsMobile=()=>{let{innerWidth:e,innerHeight:t}=window;return e<920&&t>=768};var hooks_useIsMobile=()=>{let[e,t]=(0,i.useState)(getIsMobile);return(0,i.useEffect)(()=>{let handleResize=()=>t(getIsMobile());return window.addEventListener("resize",handleResize),()=>window.addEventListener("resize",handleResize)},[t]),e};function _templateObject(){let e=(0,r._)(["\n  :root {\n    --color-black: #0e0c13;\n    --color-violet: #2c2541;\n    --color-violet-dark: #1f1925;\n    --chat-tabs-height: 20px;\n    --chat-width: 340px;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n      flex-direction: column;\n      align-items: stretch;\n    "]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  display: flex;\n  align-items: flex-start;\n  height: 100vh;\n  font-family: sans-serif;\n\n  ","\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  position: absolute;\n  top: 54px;\n  right: var(--chat-width);\n  width: 32px;\n  height: 28px;\n"]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n      height: auto;\n      flex-grow: 0;\n      flex-shrink: 0;\n\n      &:after {\n        display: block;\n        content: '';\n        padding-top: 56.25%;\n      }\n    "]);return _templateObject4=function(){return e},e}function _templateObject5(){let e=(0,r._)(["\n  position: relative;\n  flex-grow: 1;\n  height: 100%;\n\n  ","\n"]);return _templateObject5=function(){return e},e}function _templateObject6(){let e=(0,r._)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: none;\n  width: 100%;\n  height: 100%;\n"]);return _templateObject6=function(){return e},e}function _templateObject7(){let e=(0,r._)(["\n      width: 100%;\n      flex-grow: 1;\n    "]);return _templateObject7=function(){return e},e}function _templateObject8(){let e=(0,r._)(["\n  position: relative;\n  flex-shrink: 0;\n  width: var(--chat-width);\n\n  ","\n"]);return _templateObject8=function(){return e},e}function _templateObject9(){let e=(0,r._)(["\n  display: flex;\n  height: var(--chat-tabs-height);\n  border-bottom: 1px solid var(--color-violet);\n"]);return _templateObject9=function(){return e},e}function _templateObject10(){let e=(0,r._)(["\n  display: flex;\n  flex-grow: 1;\n"]);return _templateObject10=function(){return e},e}function _templateObject11(){let e=(0,r._)(["\n  flex-grow: 1;\n  flex-basis: 0;\n  color: ",";\n  background-color: ",";\n  font-family: sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: var(--chat-tabs-height);\n  text-align: center;\n  border-right: 1px solid var(--color-violet);\n  cursor: pointer;\n\n  &:hover {\n    background-color: var(--color-violet-dark);\n  }\n"]);return _templateObject11=function(){return e},e}function _templateObject12(){let e=(0,r._)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--chat-tabs-height);\n  background-color: var(--color-black);\n\n  &:hover {\n    background-color: var(--color-violet-dark);\n  }\n\n  svg path {\n    fill: #898395;\n  }\n"]);return _templateObject12=function(){return e},e}function _templateObject13(){let e=(0,r._)(["\n      height: calc(100% - var(--chat-tabs-height));\n    "]);return _templateObject13=function(){return e},e}function _templateObject14(){let e=(0,r._)(["\n  display: ",";\n  width: 100%;\n  height: calc(100vh - var(--chat-tabs-height));\n  border: none;\n  background-color: #fff;\n\n  ","\n"]);return _templateObject14=function(){return e},e}let f=(0,c.vJ)(_templateObject()),_=c.ZP.div(_templateObject2(),e=>e.$isMobile&&(0,c.iv)(_templateObject1()));c.ZP.div(_templateObject3());let v=c.ZP.div(_templateObject5(),e=>e.$isMobile&&(0,c.iv)(_templateObject4())),y=c.ZP.iframe.attrs({allow:"autoplay",allowFullScreen:!0})(_templateObject6()),w=c.ZP.div(_templateObject8(),e=>e.$isMobile&&(0,c.iv)(_templateObject7())),j=c.ZP.div(_templateObject9()),O=c.ZP.div(_templateObject10()),k=c.ZP.div(_templateObject11(),e=>e.$active?"#d3d3d3":"#898395",e=>e.$active?"var(--color-violet-dark)":"var(--color-black)"),x=c.ZP.a(_templateObject12()),C=c.ZP.iframe(_templateObject14(),e=>e.$active?"block":"none",e=>e.$isMobile&&(0,c.iv)(_templateObject13())),handleGitHubLinkClick=()=>ga("send",{category:"User Interface",eventAction:"GitHub Repository Click"});var src_Home=()=>{let{player:e,chats:t}=hooks_usePlayerAndChat(),[n,a]=(0,i.useState)(t[0].url),l=hooks_useIsMobile();(0,i.useEffect)(()=>a(t[0].url),[a,t]);let r=t.filter(t=>{let{payload:n}=t;return n!==e.payload});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(_,{$isMobile:l,children:[(0,o.jsx)(v,{$service:e.service,$isMobile:l,children:(0,o.jsx)(y,{src:e.url,title:"".concat(e.service," - ").concat(e.payload)})}),(0,o.jsxs)(w,{$isMobile:l,children:[(0,o.jsxs)(j,{children:[(0,o.jsx)(O,{children:t.map(e=>(0,o.jsx)(k,{$active:e.url===n,onClick:()=>a(e.url),children:utils_getChatTabTitle(e)},e.url))}),(0,o.jsx)(x,{target:"_blank",rel:"noreferrer noopener",href:"//github.com/honeykingdom/honeykingdom.github.io",title:"Репозиторий на GitHub",onClick:handleGitHubLinkClick,children:(0,o.jsx)(u.Z,{})})]}),r.map(e=>{let{url:t}=e;return(0,o.jsx)(C,{src:t,$active:t===n,$isMobile:l},t)})]})]}),(0,o.jsx)(f,{})]})}}}]);