(function(t){function s(s){for(var a,i,l=s[0],r=s[1],c=s[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);m&&m(s);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,i=1;i<e.length;i++){var l=e[i];0!==o[l]&&(a=!1)}a&&(n.splice(s--,1),t=r(r.s=e[0]))}return t}var a={},i={app:0},o={app:0},n=[];function l(t){return r.p+"js/"+({dashboard:"dashboard",login:"login"}[t]||t)+"."+{dashboard:"11c2e933",login:"e6b40610"}[t]+".js"}function r(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var s=[],e={dashboard:1,login:1};i[t]?s.push(i[t]):0!==i[t]&&e[t]&&s.push(i[t]=new Promise((function(s,e){for(var a="css/"+({dashboard:"dashboard",login:"login"}[t]||t)+"."+{dashboard:"08d5b097",login:"20eca79d"}[t]+".css",o=r.p+a,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var c=n[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return s()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===a||u===o)return s()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=s,m.onerror=function(s){var a=s&&s.target&&s.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete i[t],m.parentNode.removeChild(m),e(n)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)s.push(a[2]);else{var n=new Promise((function(s,e){a=o[t]=[s,e]}));s.push(a[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=l(t);var d=new Error;c=function(s){u.onerror=u.onload=null,clearTimeout(m);var e=o[t];if(0!==e){if(e){var a=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,e[1](d)}o[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(s)},r.m=t,r.c=a,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)r.d(e,a,function(s){return t[s]}.bind(null,a));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/airdrop-prod/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=s,c=c.slice();for(var d=0;d<c.length;d++)s(c[d]);var m=u;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"03ff":function(t,s,e){},"0eec":function(t,s,e){},"138a":function(t,s,e){},"21bb":function(t,s,e){"use strict";e("4d54")},2922:function(t,s,e){"use strict";e("c621")},"2ae2":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ModalWrapper",[e("transition",{attrs:{appear:"",mode:"out-in"}},[e("div",{staticClass:"modal-success form-wrapper"},[e("img",{staticClass:"modal-close",attrs:{src:"icon/close.svg",alt:""},on:{click:t.CloseModal}}),e("div",{staticClass:"modal-success__success"},[e("Success")],1),e("h3",{staticClass:"modal-success__description heading"},[t._v("Success")])])])],1)},i=[],o=e("7c4b"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",{attrs:{width:"62",height:"44",viewBox:"0 0 62 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 26.2L18.1429 43L61 1",stroke:"#21FDA1","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])},l=[],r={name:"success"},c=r,u=e("2877"),d=Object(u["a"])(c,n,l,!1,null,"3588e5c5",null),m=d.exports,p=e("8a0a"),f={name:"modal-success",components:{Success:m,ModalWrapper:o["a"]},mixins:[p["a"]],mounted:function(){document.querySelector("body").style.overflow="hidden"},destroyed:function(){document.querySelector("body").style.overflow="auto"}},_=f,b=(e("c60c"),Object(u["a"])(_,a,i,!1,null,null,null));s["a"]=b.exports},"2e6f":function(t,s,e){"use strict";e("dec2")},"4d54":function(t,s,e){},"500a":function(t,s,e){"use strict";e("621b")},5387:function(t,s,e){},"53d1":function(t,s,e){"use strict";e("61b9")},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("b2e7"),e("78a7");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("portal-target",{attrs:{name:"modal"}}),e("Header",{style:"background-color: rgba(10, 9, 20, "+t.isScroll+")",on:{scroll:t.onScroll}}),e("router-view")],1)},o=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("img",{staticClass:"logo",attrs:{src:"icon/logo.svg",alt:"logo"}}),e("nav",{staticClass:"nav"},t._l(t.links,(function(s,a){return e("router-link",{key:a,staticClass:"nav__item text-nav",attrs:{to:s.to}},[t._v(" "+t._s(s.name)+" ")])})),1),e("div",{staticClass:"action-block"},[t._m(0),e("p",{staticClass:"action-block__language text-nav"},[t._v("EN")]),e("div",{staticClass:"grad"},[e("transition",{attrs:{name:"menu"}},[e("Menu",{directives:[{name:"show",rawName:"v-show",value:t.menuIsOpen,expression:"menuIsOpen"}],on:{closeMenu:function(s){t.menuIsOpen=!1}}})],1),e("img",{staticClass:"user-icon",attrs:{src:"image/unnamed.jpg",alt:""},on:{click:function(s){t.menuIsOpen=!t.menuIsOpen}}})],1),e("transition",{attrs:{name:"menu-mobile"}},[e("MenuMobile",{directives:[{name:"show",rawName:"v-show",value:t.menuMobIsOpen,expression:"menuMobIsOpen"}],on:{closeMobMenu:function(s){t.menuMobIsOpen=!1}}})],1),e("img",{staticClass:"action-block__bar",attrs:{src:"/icon/bar.svg",alt:""},on:{click:function(s){t.menuMobIsOpen=!0}}})],1)])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"action-block__icons"},[e("img",{attrs:{src:"icon/md.svg",alt:""}}),e("img",{attrs:{src:"icon/tg.svg",alt:""}}),e("img",{attrs:{src:"icon/tw.svg",alt:""}})])}],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"menu"},[e("div",{staticClass:"menu-list"},[e("div",{staticClass:"menu-list__link link",on:{click:function(s){t.modals.settings=!0,t.closeMenu()}}},[e("img",{staticClass:"link__img",attrs:{src:"icon/cog.svg",alt:""}}),e("span",{staticClass:"link__title"},[t._v("Settings")])]),e("div",{staticClass:"menu__separator"}),e("router-link",{staticClass:"menu-list__link",attrs:{to:"/login"},nativeOn:{click:function(s){return t.closeMenu()}}},[e("img",{staticClass:"link__img",attrs:{src:"icon/log-out.svg",alt:""}}),e("span",{staticClass:"link__title"},[t._v("Relogin")])])],1),t.modals.support?e("ModalSupport",{on:{isSuccess:function(s){t.modals.support=!1,t.modals.success=!0}},model:{value:t.modals.support,callback:function(s){t.$set(t.modals,"support",s)},expression:"modals.support"}}):t._e(),t.modals.success?e("ModalSuccess",{model:{value:t.modals.success,callback:function(s){t.$set(t.modals,"success",s)},expression:"modals.success"}}):t._e(),t.modals.settings?e("ModalSettings",{on:{isSuccess:function(s){t.modals.settings=!1,t.modals.success=!0},openSupport:function(s){t.modals.settings=!1,t.modals.success=!1,t.modals.support=!0}},model:{value:t.modals.settings,callback:function(s){t.$set(t.modals,"settings",s)},expression:"modals.settings"}}):t._e()],1)},c=[],u=e("2ae2"),d=e("eee8"),m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ModalWrapper",[e("transition",{attrs:{appear:"",mode:"out-in"}},[e("form",{key:"set",staticClass:"modal-settings form-wrapper"},[e("img",{staticClass:"modal-close",attrs:{src:"icon/close.svg",alt:""},on:{click:t.CloseModal}}),e("h3",{staticClass:"form-wrapper__title heading heading--h3"},[t._v(" Settings profile ")]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Your name")]),e("input",{staticClass:"fieldset__input",attrs:{type:"text"}})]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Your city")]),e("input",{staticClass:"fieldset__input",attrs:{type:"text"}})]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Phone number")]),e("input",{staticClass:"fieldset__input",attrs:{type:"tel"}})]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("E-mail")]),e("input",{staticClass:"fieldset__input",attrs:{type:"email"}})]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Wallet Foil")]),e("input",{staticClass:"fieldset__input",attrs:{type:"text"}})]),e("div",{staticClass:"collaboration"},[e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Google")]),e("button",{staticClass:"fieldset__button",class:{"fileset__button--joined":t.isJoined.google},attrs:{type:"button"},on:{click:function(s){t.isJoined.google=!0}}},[t._v(" "+t._s(t.isJoined.google?"Nickname":"Joined")+" ")])]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Telegram")]),e("button",{staticClass:"fieldset__button",class:{"fileset__button--joined":t.isJoined.telegram},attrs:{type:"button"},on:{click:function(s){t.isJoined.telegram=!0}}},[t._v(" "+t._s(t.isJoined.telegram?"@nickname":"Joined")+" ")])]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Facebook")]),e("button",{staticClass:"fieldset__button",class:{"fileset__button--joined":t.isJoined.facebook},attrs:{type:"button"},on:{click:function(s){t.isJoined.facebook=!0}}},[t._v(" "+t._s(t.isJoined.facebook?"@nickname":"Joined")+" ")])]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Linkedin")]),e("button",{staticClass:"fieldset__button",class:{"fileset__button--joined":t.isJoined.linkedin},attrs:{type:"button"},on:{click:function(s){t.isJoined.linkedin=!0}}},[t._v(" "+t._s(t.isJoined.linkedin?"nickname":"Joined")+" ")])])]),e("div",{staticClass:"separator"}),e("button",{staticClass:"button button--gradient",attrs:{type:"button"},on:{click:t.isSuccess}},[t._v(" Save settings ")]),e("div",{staticClass:"button-wrap",on:{click:t.openSupport}},[e("button",{staticClass:"button button--grad-border",attrs:{type:"button"}},[t._v(" Support ")])]),e("button",{staticClass:"button button--border",attrs:{type:"reset"}},[t._v("Cancel")])])])],1)},p=[],f=e("7c4b"),_=e("8a0a"),b={name:"modal-settings",components:{ModalWrapper:f["a"]},mixins:[_["a"]],data:function(){return{isJoined:{google:!1,telegram:!1,facebook:!1,linkedin:!1},modalSupport:!1}},methods:{openSupport:function(){this.$emit("openSupport")},isSuccess:function(){this.$emit("isSuccess")}},mounted:function(){document.querySelector("body").style.overflow="hidden"},destroyed:function(){document.querySelector("body").style.overflow="auto"}},g=b,v=(e("ef25"),e("2877")),h=Object(v["a"])(g,m,p,!1,null,null,null),C=h.exports,x={name:"menu",components:{ModalSettings:C,ModalSupport:d["a"],ModalSuccess:u["a"]},data:function(){return{modals:{settings:!1,success:!1,support:!1}}},methods:{closeMenu:function(){this.$emit("closeMenu")}}},y=x,k=(e("500a"),Object(v["a"])(y,r,c,!1,null,null,null)),w=k.exports,S=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"menu-mobile"},[e("img",{staticClass:"menu-mobile__close",attrs:{src:"/icon/close.svg",alt:""},on:{click:t.closeMobMenu}}),e("nav",{staticClass:"menu-mobile__nav"},[t._l(t.links,(function(s,a){return e("router-link",{key:a,staticClass:"menu-mobile__link",attrs:{to:s.to}},[t._v(" "+t._s(s.name)+" ")])})),e("router-link",{staticClass:"menu-mobile__link",attrs:{to:"/"},nativeOn:{click:function(s){t.modals.settings=!0,t.closeMobMenu()}}},[t._v(" Settings ")]),e("router-link",{staticClass:"menu-mobile__link",attrs:{to:"/login"},nativeOn:{click:function(s){return t.closeMobMenu.apply(null,arguments)}}},[t._v(" Relogin ")])],2),t._m(0),t.modals.settings?e("ModalSettings",{on:{isSuccess:function(s){t.modals.support=!1,t.modals.success=!0},openSupport:function(s){t.modals.settings=!1,t.modals.success=!1,t.modals.support=!0}},model:{value:t.modals.settings,callback:function(s){t.$set(t.modals,"settings",s)},expression:"modals.settings"}}):t._e(),t.modals.support?e("ModalSupport",{on:{isSuccess:function(s){t.modals.support=!1,t.modals.success=!0}},model:{value:t.modals.support,callback:function(s){t.$set(t.modals,"support",s)},expression:"modals.support"}}):t._e(),t.modals.success?e("ModalSuccess",{model:{value:t.modals.success,callback:function(s){t.$set(t.modals,"success",s)},expression:"modals.success"}}):t._e()],1)},L=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"menu-mobile__social"},[e("img",{staticClass:"menu-mobile__icon",attrs:{src:"icon/md.svg",alt:""}}),e("img",{staticClass:"menu-mobile__icon",attrs:{src:"icon/tw.svg",alt:""}}),e("img",{staticClass:"menu-mobile__icon",attrs:{src:"icon/tg.svg",alt:""}})])}],M=[{name:"Foil",to:"/"},{name:"Learn",to:"/"},{name:"Blog",to:"/"},{name:"Product",to:"/"},{name:"Community",to:"/"},{name:"Block Explorer",to:"/"},{name:"Contact Us",to:"/"}],O={name:"menu-mobile",components:{ModalSuccess:u["a"],ModalSupport:d["a"],ModalSettings:C},data:function(){return{links:M,modals:{settings:!1,success:!1,support:!1}}},methods:{closeMobMenu:function(){this.$emit("closeMobMenu")}}},E=O,A=(e("cd99"),Object(v["a"])(E,S,L,!1,null,null,null)),j=A.exports,$={name:"header",components:{MenuMobile:j,Menu:w},data:function(){return{menuIsOpen:!1,menuMobIsOpen:!1,links:M}}},q=$,B=(e("2922"),Object(v["a"])(q,n,l,!1,null,null,null)),V=B.exports,I={components:{Header:V},data:function(){return{isScroll:.5}},methods:{onScroll:function(t){var s=t.target.scrollingElement.scrollTop;s>=window.innerHeight/2&&(this.isScroll=s/window.innerHeight)}},mounted:function(){window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)}},Y=I,J=(e("5c0b"),Object(v["a"])(Y,i,o,!1,null,null,null)),X=J.exports,F=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("Main"),e("section",{staticClass:"content-wrapper"},[t._m(0),e("div",{staticClass:"content"},[e("Actual"),e("Completed"),e("Subscribe")],1)])],1)},T=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"background"},[e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__bg-to-logo"})]),e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__bg-to-logo-2"})]),e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__shadow-rose-top"})]),e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__shadow-blue-top"})]),e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__shadow-rose-bot"})]),e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__shadow-blue-bot"})]),e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__shadow-bottom"})]),e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__box-rose"})]),e("div",{staticClass:"background__item"},[e("div",{staticClass:"background__box-blue"})])])}],H=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("div",{staticClass:"parallax"},[e("div",{staticClass:"body"},[t._m(0),e("div",{staticClass:"parallax-img"},[e("div",{staticClass:"parallax-img__item"},[e("div",{staticClass:"parallax-img__shadow-rose parallax-img__shadow-rose--1",style:t.transform.shadow})]),e("div",{staticClass:"parallax-img__item"},[e("div",{staticClass:"parallax-img__shadow-blue parallax-img__shadow-blue--1",style:t.transform.shadow})]),e("div",{staticClass:"parallax-img__item"},[e("div",{staticClass:"parallax-img__sky",style:t.transform.sky})]),e("div",{staticClass:"parallax-img__item"},[e("div",{staticClass:"parallax-img__shadow-rose parallax-img__shadow-rose--2",style:t.transform.shadow})]),e("div",{staticClass:"parallax-img__item"},[e("div",{staticClass:"parallax-img__shadow-blue parallax-img__shadow-blue--2",style:t.transform.shadow})]),e("div",{staticClass:"parallax-img__item",style:t.transform.boxLV1},[e("div",{staticClass:"parallax-img__box-rose parallax-img__box-rose--0"})]),t._l(new Array(4),(function(s,a){return e("div",{key:a+"-b",staticClass:"parallax-img__item",style:t.transform["boxLV"+(a+1)]},[e("div",{staticClass:"parallax-img__box-blue",class:"parallax-img__box-blue--"+(a+1)})])})),e("div",{staticClass:"parallax-img__item"},[e("div",{staticClass:"parallax-img__human",style:t.transform.human})]),e("div",{staticClass:"parallax-img__item",staticStyle:{"mix-blend-mode":"screen"},style:t.transform.boxOpen},[e("div",{staticClass:"parallax-img__box-open"})]),t._l(new Array(5),(function(s,a){return e("div",{key:a,staticClass:"parallax-img__item",style:t.transform["boxLV"+(a+1)]},[e("div",{staticClass:"parallax-img__box-rose",class:"parallax-img__box-rose--"+(a+1)})])}))],2)])])])},N=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container wrapper grid"},[e("h1",{staticClass:"body__title"},[e("span",{staticClass:"heading heading--h1"},[t._v(" Foil.Network ")]),e("span",{staticClass:"heading heading--h1 heading--grad1"},[t._v(" Bounty Hunt & Airdrop ")])]),e("button",{staticClass:"button button--gradient"},[t._v("Actual Airdrops")]),e("p",{staticClass:"body__text"},[t._v(" Earn FOIL by participating in the bounty campaign. The Blockchain Interactions crypto rewards event brings the important mission of scalability and sustainability of the FOIL elastic blockchain. ")])])}],W=e("1da1"),D=(e("96cf"),e("99af"),{name:"main",data:function(){return{forShadow:-30,forSky:40,forBoxLV5:-25,forBoxLV4:20,forBoxLV3:-20,forBoxLV2:-15,forBoxLV1:15,forHuman:20,forBoxOpen:10,speed:.05,positionX:0,positionY:0,coordXprocent:0,coordYprocent:0,parallax:null,transform:{sky:"",human:"",boxLV1:"",boxLV2:"",boxLV3:"",boxLV4:"",boxLV5:"",boxOpen:"",shadow:""}}},methods:{setMouseParallaxStyle:function(){if(this.parallax=this.$el.querySelector(".parallax"),this.parallax){var t=this.coordXprocent-this.positionX,s=this.coordYprocent-this.positionY;this.positionX=this.positionX+t*this.speed,this.positionY=this.positionY+s*this.speed,this.transform.boxOpen="transform: translate(".concat(this.positionX/this.forBoxOpen,"%,").concat(this.positionY/this.forBoxOpen,"%)"),this.transform.boxLV1="transform: translate(".concat(this.positionX/this.forBoxLV1,"%,").concat(this.positionY/this.forBoxLV1,"%)"),this.transform.human="transform: translate(".concat(this.positionX/this.forHuman,"%,").concat(this.positionY/this.forHuman,"%)"),this.transform.boxLV2="transform: translate(".concat(this.positionX/this.forBoxLV2,"%,").concat(this.positionY/this.forBoxLV2,"%)"),this.transform.boxLV3="transform: translate(".concat(this.positionX/this.forBoxLV3,"%,").concat(this.positionY/this.forBoxLV3,"%)"),this.transform.boxLV4="transform: translate(".concat(this.positionX/this.forBoxLV4,"%,").concat(this.positionY/this.forBoxLV4,"%)"),this.transform.boxLV5="transform: translate(".concat(this.positionX/this.forBoxLV5,"%,").concat(this.positionY/this.forBoxLV5,"%)"),this.transform.shadow="transform: translate(".concat(this.positionX/this.forShadow,"%,").concat(this.positionY/this.forShadow,"%)"),this.transform.sky="transform: translate(".concat(this.positionX/this.forSky,"%,").concat(this.positionY/this.forSky,"%)"),requestAnimationFrame(this.setMouseParallaxStyle),this.parallax.addEventListener("mousemove",this.forEventListener)}},forEventListener:function(t){var s=this;return Object(W["a"])(regeneratorRuntime.mark((function e(){var a,i,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=s.parallax.offsetWidth,i=s.parallax.offsetHeight,o=t.pageX-a/2,n=t.pageY-i/2,s.coordXprocent=o/a*100,s.coordYprocent=n/i*100;case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.setMouseParallaxStyle()},beforeDestroy:function(){this.parallax.removeEventListener("mousemove",this.forEventListener())}}),R=D,U=(e("2e6f"),Object(v["a"])(R,H,N,!1,null,null,null)),G=U.exports,K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"actual"},[e("div",{staticClass:"wrapper grid"},[t._m(0),e("div",{staticClass:"info"},[e("p",{staticClass:"info__text"},[t._v(" Test the FOIL NFT storage, send and receive encrypted messages, transactions and save NFT content over blockchain and bring the crypto benchmark tests of FOIL Network live! 1,250,000 FOIL are reserved for the crypto airdrop and bounty participants. ")]),t._m(1),e("button",{staticClass:"info__but button button--circle"},[e("Arrow",{staticClass:"info__arrow"})],1)]),t._l(t.cards,(function(t,s){return e("CardActual",{key:s,staticClass:"actual__card",attrs:{card:t}})}))],2),e("div",{staticClass:"line"})])},Z=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"logo-circle"},[e("img",{staticClass:"logo-circle__icon",attrs:{src:"icon/logo-circle.svg",alt:""}}),e("img",{staticClass:"logo-circle__bg",attrs:{src:"icon/logo-circle.svg",alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h2",{staticClass:"info__title heading heading--h2 heading--grad2"},[e("span",{staticClass:"heading heading--h2"},[t._v(" Join FOIL Blockchain Interactions and earn FOIL crypto. ")])])}],z=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-actual"},[e("div",{staticClass:"card-actual__image image"},[e("img",{staticClass:"image__bg",attrs:{src:t.card.img,alt:""}}),e("img",{staticClass:"image__front",attrs:{src:t.card.img,alt:""}})]),e("h3",{staticClass:"card-actual__title"},[e("span",{staticClass:"heading heading--card-title heading--grad2"},[t._v(" "+t._s(t.card.title)+" ")])]),e("p",{staticClass:"card-actual__description"},[t._v(" "+t._s(t.card.description)+" ")])])},Q=[],tt={name:"card-actual",props:{card:Object}},st=tt,et=(e("5d9b"),Object(v["a"])(st,z,Q,!1,null,null,null)),at=et.exports,it=[{img:"image/card-actual/c1.png",title:"Actual Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae corporis debitis dignissimos minima molestiae odio odit, quo unde."},{img:"image/card-actual/c2.png",title:"Actual Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae corporis debitis dignissimos minima molestiae odio odit, quo unde."}],ot=e("8e09"),nt={name:"actual",data:function(){return{cards:it}},components:{Arrow:ot["a"],CardActual:at}},lt=nt,rt=(e("9ffb"),Object(v["a"])(lt,K,Z,!1,null,null,null)),ct=rt.exports,ut=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"completed"},[e("div",{staticClass:"wrapper grid"},[e("h2",{staticClass:"completed__title heading heading--h2"},[t._v(" Completed Bounty Hunt & Airdrops ")]),t._l(t.cards.slice(0,t.sliceEnd),(function(t,s){return e("CardCompleted",{key:s,staticClass:"completed__card",attrs:{card:t}})})),e("button",{staticClass:"completed__btn button button--border"},[t._v("Load more")])],2)])},dt=[],mt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-completed"},[e("img",{staticClass:"card-completed__img",attrs:{src:t.card.img,alt:""}}),e("h3",{staticClass:"card-completed__title heading heading--card-title2"},[t._v(" "+t._s(t.card.title)+" ")]),e("p",{staticClass:"card-completed__description"},[t._v(" "+t._s(t.card.description)+" ")])])},pt=[],ft={name:"card-completed",props:{card:Object}},_t=ft,bt=(e("947a"),Object(v["a"])(_t,mt,pt,!1,null,null,null)),gt=bt.exports,vt=[{img:"image/card-completed/c1.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."},{img:"image/card-completed/c2.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."},{img:"image/card-completed/c3.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."},{img:"image/card-completed/c4.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."},{img:"image/card-completed/c5.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."},{img:"image/card-completed/c6.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."},{img:"image/card-completed/c7.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."},{img:"image/card-completed/c8.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."},{img:"image/card-completed/c9.png",title:"Completed Airdrop title",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque dolorum ipsum placeat possimus ratione similique tempora totam veritatis."}];function ht(){return window.innerWidth<=768}var Ct={name:"completed",data:function(){return{cards:vt,sliceEnd:9}},computed:{},mounted:function(){ht()&&(this.sliceEnd=4)},components:{CardCompleted:gt},methods:{}},xt=Ct,yt=(e("5bfa"),Object(v["a"])(xt,ut,dt,!1,null,null,null)),kt=yt.exports,wt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"subscribe"},[e("h2",{staticClass:"subscribe__title heading heading--grad2"},[t._v(" Subscribe to us and stay turned! ")]),e("form",{staticClass:"subscribe__form subscribe-form"},[e("input",{staticClass:"subscribe-form__input",attrs:{type:"text",placeholder:"Enter your e-mail"}}),e("button",{staticClass:"subscribe-form__btn button"},[e("span",[t._v("Send information")]),e("Arrow",{staticClass:"subscribe-form"})],1)])])])},St=[],Lt={name:"subscribe",components:{Arrow:ot["a"]}},Mt=Lt,Ot=(e("b519"),Object(v["a"])(Mt,wt,St,!1,null,null,null)),Et=Ot.exports,At={name:"Home",components:{Subscribe:Et,Completed:kt,Actual:ct,Main:G}},jt=At,$t=(e("21bb"),Object(v["a"])(jt,P,T,!1,null,null,null)),qt=$t.exports;a["default"].use(F["a"]);var Bt=[{path:"/",name:"Home",component:qt},{path:"/login",name:"Login",component:function(){return e.e("login").then(e.bind(null,"a55b"))}},{path:"/dashboard",name:"Dashboard",component:function(){return e.e("dashboard").then(e.bind(null,"7277"))}}],Vt=new F["a"]({mode:"history",base:"/airdrop-prod/",routes:Bt}),It=Vt,Yt=e("2f62");a["default"].use(Yt["a"]);var Jt=new Yt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Xt=e("2b88"),Ft=e.n(Xt);a["default"].use(Ft.a),a["default"].config.productionTip=!1,new a["default"]({router:It,store:Jt,render:function(t){return t(X)}}).$mount("#app")},"5bfa":function(t,s,e){"use strict";e("6aa7")},"5c0b":function(t,s,e){"use strict";e("5387")},"5d9b":function(t,s,e){"use strict";e("b191")},"61b9":function(t,s,e){},"621b":function(t,s,e){},"6aa7":function(t,s,e){},"78a7":function(t,s,e){},"7c4b":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("portal",{attrs:{to:"modal"}},[e("transition",{attrs:{name:"modal",appear:"",mode:"out-in"}},[e("div",{staticClass:"modal-wrapper"},[t._t("default")],2)])],1)},i=[],o={name:"modal-wrapper"},n=o,l=(e("53d1"),e("2877")),r=Object(l["a"])(n,a,i,!1,null,null,null);s["a"]=r.exports},"8a0a":function(t,s,e){"use strict";var a,i,o={name:"modal-mixin",methods:{CloseModal:function(){this.$emit("input",!1)}}},n=o,l=e("2877"),r=Object(l["a"])(n,a,i,!1,null,null,null);s["a"]=r.exports},"8e09":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",{attrs:{width:"24",height:"14",viewBox:"0 0 12 8",fill:"white",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.71985 0.794318C7.8605 0.662924 8.05123 0.589111 8.25011 0.589111C8.44899 0.589111 8.63972 0.662924 8.78037 0.794318L11.7804 3.59782C11.921 3.72926 12 3.9075 12 4.09334C12 4.27919 11.921 4.45743 11.7804 4.58886L8.78037 7.39237C8.63891 7.52004 8.44946 7.59068 8.25281 7.58908C8.05616 7.58749 7.86805 7.51378 7.72899 7.38383C7.58993 7.25388 7.51105 7.07809 7.50935 6.89433C7.50764 6.71056 7.58323 6.53351 7.71985 6.40133L9.43963 4.79422L0.75001 4.79422C0.551095 4.79422 0.360327 4.72038 0.219673 4.58894C0.0790187 4.4575 0 4.27923 0 4.09334C0 3.90746 0.0790187 3.72919 0.219673 3.59775C0.360327 3.46631 0.551095 3.39247 0.75001 3.39247L9.43963 3.39247L7.71985 1.78536C7.57925 1.65392 7.50026 1.47569 7.50026 1.28984C7.50026 1.10399 7.57925 0.925752 7.71985 0.794318Z"}})])},i=[],o={name:"arrow"},n=o,l=e("2877"),r=Object(l["a"])(n,a,i,!1,null,"fb906eaa",null);s["a"]=r.exports},"947a":function(t,s,e){"use strict";e("9669")},9669:function(t,s,e){},"9ffb":function(t,s,e){"use strict";e("ef5a")},b191:function(t,s,e){},b2e7:function(t,s,e){},b519:function(t,s,e){"use strict";e("0eec")},bb74:function(t,s,e){},c60c:function(t,s,e){"use strict";e("03ff")},c621:function(t,s,e){},cd99:function(t,s,e){"use strict";e("bb74")},dec2:function(t,s,e){},eee8:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ModalWrapper",[e("transition",{attrs:{appear:"",mode:"out-in"}},[e("form",{key:"sup",staticClass:"modal-support form-wrapper",attrs:{action:""}},[e("img",{staticClass:"modal-close",attrs:{src:"icon/close.svg",alt:""},on:{click:t.CloseModal}}),e("h3",{staticClass:"form-wrapper__title heading heading--h3"},[t._v("Support")]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Your name")]),e("input",{staticClass:"fieldset__input",attrs:{type:"text"}})]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("E-mail")]),e("input",{staticClass:"fieldset__input",attrs:{type:"email"}})]),e("div",{staticClass:"fieldset"},[e("label",{staticClass:"fieldset__label"},[t._v("Your message")]),e("textarea",{staticClass:"fieldset__input"})]),e("button",{staticClass:"button button--gradient",attrs:{type:"button"},on:{click:t.isSuccess}},[t._v(" Send ")]),e("button",{staticClass:"button button--border",attrs:{type:"reset"}},[t._v("Cancel")])])])],1)},i=[],o=e("7c4b"),n=e("8a0a"),l={name:"modal-support",components:{ModalWrapper:o["a"]},mixins:[n["a"]],methods:{isSuccess:function(){this.$emit("isSuccess")}},mounted:function(){document.querySelector("body").style.overflow="hidden"},destroyed:function(){document.querySelector("body").style.overflow="auto"}},r=l,c=e("2877"),u=Object(c["a"])(r,a,i,!1,null,null,null);s["a"]=u.exports},ef25:function(t,s,e){"use strict";e("138a")},ef5a:function(t,s,e){}});
//# sourceMappingURL=app.5b446585.js.map