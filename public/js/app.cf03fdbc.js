(function(e){function t(t){for(var n,o,r=t[0],c=t[1],m=t[2],l=0,h=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,m||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var m=0;m<r.length;m++)t(r[m]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1:function(e,t){},"53f0":function(e,t,s){"use strict";var n=s("a572"),a=s.n(n);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=s("1dce"),i=s.n(a),o=s("ee98"),r=s.n(o),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:"Chat"!==e.$router.currentRoute.name?"wrapper":"wrapper wrapper__chat",attrs:{id:"app"}},[s("notifications",{attrs:{group:"main",position:"top center"}}),s("main",{class:{main__chat:"Chat"===e.$router.currentRoute.name,main__home:"Home"===e.$router.currentRoute.name,main__loading:"Loading"===e.$router.currentRoute.name}},[s("div",{class:"Chat"!==e.$router.currentRoute.name?"brand":"brand brand__hidden"},[s("h1",{staticClass:"brand-title"},[e._v("Switchats")]),s("p",{staticClass:"brand-description"},[e._v("הצ’אטים שיעבירו לכם את הזמן")])]),s("div",{class:"Chat"!==e.$router.currentRoute.name?"window":"window window__chat"},[s("router-view")],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"Home"===e.$router.currentRoute.name&&0===e.$store.state.home.step,expression:"$router.currentRoute.name === 'Home' && $store.state.home.step === 0"}],staticClass:"app-counter"},[s("p",{staticClass:"app-counter-text"},[e._v(e._s("מחוברים כרגע"))]),s("p",{staticClass:"app-counter-content"},[e._v(e._s(e.online))])]),s("div",{class:"Chat"!==e.$router.currentRoute.name?"footer":"footer footer__hidden"},[e._m(0),e._m(1)])],1)},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"footer-links"},[s("div",{staticClass:"footer-links-item"},[s("a",{attrs:{href:"#"}},[e._v("תקנון")])]),s("div",{staticClass:"footer-links-item"},[s("a",{attrs:{href:""}},[e._v("דווח")])]),s("div",{staticClass:"footer-links-item"},[s("a",{attrs:{href:""}},[e._v("צור קשר")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer-copyright"},[s("p",[e._v("נבנה ע”י © Grimix")])])}],u=(s("b0c0"),s("b680"),s("96cf"),s("1da1")),l=s("bc3a"),h=s.n(l),d=null,f={created:function(){window.visualViewport.addEventListener("resize",this.visualViewportResizeHandler),this.getOnline(),d=setInterval(this.getOnline,1e4)},beforeUnmount:function(){window.visualViewport.removeEventListener("resize",this.visualViewportResizeHandler),clearInterval(d),d=null},methods:{getOnline:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/online");case 3:if(t=e.sent,200===t.status){e.next=6;break}throw new Error("Network or server error");case 6:this.$store.commit("setOnline",t.data.online),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),visualViewportResizeHandler:function(e){"Chat"===this.$router.currentRoute.name&&setTimeout((function(){var e=window.visualViewport.height;window.scrollTo(0,0),document.getElementById("app").style.height="".concat(e,"px"),document.getElementById("app").style.maxHeight="".concat(e,"px"),document.querySelector(".window").style.height="".concat(e,"px"),document.querySelector(".window").style.maxHeight="".concat(e,"px"),document.body.style.height="".concat(e,"px"),document.body.style.maxHeight="".concat(e,"px"),window.dispatchEvent(new Event("resize"))}),500)}},computed:{mainClass:function(){return"Chat"===this.$router.currentRoute.name?"main__chat":"Home"===this.$router.currentRoute.name?"main__home":"main"},online:function(){return this.$store.state.home.online.toFixed(0)}}},p=f,g=(s("5c0b"),s("2877")),v=Object(g["a"])(p,c,m,!1,null,null,null),$=v.exports,_=(s("45fc"),s("8c4f")),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loading-container"},[s("div",{staticClass:"loading-circle"},[s("div"),s("div")])])}],C={created:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/status");case 3:if(t=e.sent,200===t.status){e.next=6;break}throw new Error("Network error");case 6:if(200!==t.data.status){e.next=10;break}return localStorage.nickname&&this.$store.commit("setNickname",{nickname:localStorage.nickname}),e.next=10,setTimeout((function(){s.$store.state.nickname&&s.$store.state.nickname.length>0?s.$router.push("chat"):s.$router.push("signin")}),1e3);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));function t(){return e.apply(this,arguments)}return t}()},j=C,y=(s("53f0"),Object(g["a"])(j,w,b,!1,null,"2baa57f8",null)),x=y.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("form",{staticClass:"form stepper"},[0===e.step?s("div",{staticClass:"stepper-item"},[s("div",{staticClass:"form-group form-group__text"},[s("label",{attrs:{for:"nickname"}},[e._v("בחר שם:")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.nickname.$model,expression:"$v.nickname.$model",modifiers:{trim:!0}}],attrs:{type:"text",id:"nickname",name:"nickname",placeholder:"הקלד שם..."},domProps:{value:e.$v.nickname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nickname,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]):e._e(),1===e.step?s("div",{staticClass:"stepper-item"},[s("div",{staticClass:"stepper-item-title"},[e._v("אנא אשר שקראת את התקנון...")]),s("div",{staticClass:"scroller"},[s("div",{staticClass:"scroller-container",on:{"&scroll":function(t){return e.rulesScroll(t)}}},[s("p",[e._v("1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),s("p",[e._v("2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),s("p",[e._v("3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),s("p",[e._v("4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),s("p",[e._v("5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),s("p",[e._v("6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])]),s("transition",{attrs:{name:"fade"}},[s("button",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.home.rulesBottom,expression:"!$store.state.home.rulesBottom"}],staticClass:"scroller-action scroller-action__pulldown",on:{click:e.scrollRulesDown}},[s("div",{staticClass:"rectangle rectangle__white"})])])],1),s("div",{staticClass:"form-group form-group__checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.read,expression:"read"}],attrs:{type:"checkbox",id:"accept-terms",name:"accept-terms"},domProps:{checked:Array.isArray(e.read)?e._i(e.read,null)>-1:e.read},on:{change:function(t){var s=e.read,n=t.target,a=!!n.checked;if(Array.isArray(s)){var i=null,o=e._i(s,i);n.checked?o<0&&(e.read=s.concat([i])):o>-1&&(e.read=s.slice(0,o).concat(s.slice(o+1)))}else e.read=a}}}),e._m(0)])]):e._e(),s("div",{staticClass:"stepper-action"},[s("button",{staticClass:"button button__primary",on:{click:e.next}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.step<1,expression:"step < 1"}]},[e._v("חפש צאט")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.step>=1,expression:"step >= 1"}]},[e._v("המשך")])])])])])},G=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"accept-terms"}},[e._v("אני מאשר שקראתי את התקנון"),s("span",[e._v("*")])])}],S=s("b5ae"),O={name:"Home",components:{},methods:{next:function(e){e.preventDefault(),this.step<1?this.$v.nickname.$invalid?this.$notify({group:"main",text:"נדרשים לפחות 3 תווים",type:"warn"}):this.$store.commit("increaseStep"):!this.$v.$invalid&&this.read?(localStorage.nickname=this.nickname,this.$router.push("/")):this.$notify({group:"main",text:"אשר שקראת את הכללים",type:"warn"})},rulesScroll:function(e){var t=e.srcElement.scrollHeight,s=e.srcElement.offsetHeight,n=e.srcElement.scrollTop;t-s===n?this.$store.commit("setRulesBottom",!0):this.$store.commit("setRulesBottom",!1)},scrollRulesDown:function(e){e.preventDefault();var t=document.querySelector(".scroller-container");t&&t.scrollBy(0,32)}},validations:{nickname:{required:S["required"],minLength:Object(S["minLength"])(3),maxLength:Object(S["maxLength"])(18)}},computed:{nickname:{get:function(){return this.$store.state.nickname},set:function(e){this.$store.commit("setNickname",{nickname:e})}},read:{get:function(){return this.$store.state.readRules},set:function(e){this.$store.commit("readRules",{readRules:e})}},step:{get:function(){return this.$store.state.home.step}}}},E=O,R=(s("5d85"),Object(g["a"])(E,k,G,!1,null,"1d637841",null)),T=R.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card messenger"},[s("div",{staticClass:"card-navigation"},[s("a",{staticClass:"card-navigation-item card-navigation-item__left",attrs:{href:"#"},on:{click:e.goToHome}},[e._v("‹ בית")])]),s("div",{staticClass:"messenger-header"},[s("div",{staticClass:"messenger-header-container"},[e.$store.state.chat.loading||e.$store.state.chat.inQueue?s("div",{staticClass:"messenger-header-status"},[s("p",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.chat.loading,expression:"$store.state.chat.loading"}]},[e._v(e._s("חיבור ..."))]),s("p",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.chat.loading&&e.$store.state.chat.inQueue,expression:"!$store.state.chat.loading && $store.state.chat.inQueue"}]},[e._v(e._s("חיפוש בן שיח"))])]):[s("div",{staticClass:"messenger-header-subject"},[s("div",{staticClass:"messenger-header-subject-avatar"},[s("img",{attrs:{src:e.$store.state.chat.currentUser&&e.$store.state.chat.currentUser.avatarUrl,alt:""}})]),s("div",{staticClass:"messenger-header-subject-info"},[s("h4",{staticClass:"messenger-header-subject-name"},[e._v(e._s(e.$store.state.chat.currentUser&&e.$store.state.chat.currentUser.nickname))]),s("p",{staticClass:"messenger-header-subject-status"},[e._v(e._s("מחובר/ת"))])])]),s("div",{staticClass:"messenger-header-action"},[s("button",{on:{click:e.handleLeave}},[e._v(" Switch ")])]),s("div",{staticClass:"messenger-header-companion"},[s("div",{staticClass:"messenger-header-companion-info"},[s("h4",{staticClass:"messenger-header-companion-name"},[e._v(e._s(e.$store.state.chat.peer&&e.$store.state.chat.peer.nickname))]),s("p",{staticClass:"messenger-header-companion-status"},[e._v(" "+e._s(e.$store.state.chat.peerTyping?"מקליד/ה":"מחובר/ת")+" ")])]),s("div",{staticClass:"messenger-header-companion-avatar"},[s("img",{attrs:{src:e.$store.state.chat.peer&&e.$store.state.chat.peer.avatarUrl,alt:""}})])])]],2)]),s("div",{staticClass:"messenger-content"},[s("div",{staticClass:"messenger-content-container"},[s("div",{staticClass:"messenger-content-status"},[e.$store.state.chat.inQueue||e.$store.state.chat.loading?s("p",[e._v(e._s("חכה עד שנמצא בן שיח ראוי עבורך :)"))]):s("p",[e._v(e._s("אתה מצ’וטט כרגע עם “"+(e.$store.state.chat.peer&&e.$store.state.chat.peer.nickname)+"” בצאט מאובטח"))])]),s("div",{ref:"chatScroll",staticClass:"messenger-content-list"},e._l(e.$store.state.chat.messages,(function(t,n){return s("message",{key:n,attrs:{message:t,imgOnLoad:e.handleGifLoad,ownerId:e.$store.state.chat.currentUser.id}})})),1),s("div",{staticClass:"messenger-content-input"},[s("form",{on:{submit:e.handleSubmit}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"chatInput",attrs:{type:"text",placeholder:"הקלד כאן..."},domProps:{value:e.message},on:{focus:e.chatInputFocus,blur:e.chatInputBlur,click:e.chatInputClick,keyup:e.chatInputKeyUp,input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._m(0),s("button",{class:e.$store.state.emoji.visible?"messenger-content-input-button__emoji messenger-content-input-button__emoji__active":"messenger-content-input-button__emoji",on:{click:e.openEmojiBox}},[s("i",{staticClass:"icon icon-emoji"})]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.emoji.visible,expression:"$store.state.emoji.visible"}],staticClass:"messenger-content-emoji-box"},[s("div",{staticClass:"messenger-content-emoji-box-container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"gifs"===e.$store.state.emoji.activeTab,expression:"$store.state.emoji.activeTab === 'gifs'"}],staticClass:"messenger-content-emoji-box-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchGifQuery,expression:"searchGifQuery"}],attrs:{type:"text",placeholder:"חיפוש GIF"},domProps:{value:e.searchGifQuery},on:{input:function(t){t.target.composing||(e.searchGifQuery=t.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:"gifs"===e.$store.state.emoji.activeTab,expression:"$store.state.emoji.activeTab === 'gifs'"}],staticClass:"messenger-content-emoji-box-content"},[s("p",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.emoji.loading,expression:"$store.state.emoji.loading"}],staticClass:"messenger-content-emoji-box-content-message"},[e._v("חכה רגע...")]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.emoji.loading&&e.$store.state.emoji.gifs.length>0,expression:"!$store.state.emoji.loading && $store.state.emoji.gifs.length > 0"}],staticClass:"messenger-content-emoji-box-content-results",on:{scroll:e.handleScroll}},e._l(e.$store.state.emoji.gifs,(function(t,n){return s("a",{key:n,staticClass:"messenger-content-emoji-box-content-results-item",attrs:{href:"#"},on:{click:function(s){return e.handleSendGif(t,s)}}},[s("img",{attrs:{src:t.fixed_height,alt:"GIPHY GIF "+t.id}})])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.emoji.loading&&e.$store.state.emoji.popularGifs.length>0&&0===e.$store.state.emoji.recentGifs.length&&0===e.$store.state.emoji.gifs.length,expression:"!$store.state.emoji.loading && $store.state.emoji.popularGifs.length > 0 && $store.state.emoji.recentGifs.length === 0 && $store.state.emoji.gifs.length === 0"}],staticClass:"messenger-content-emoji-box-content-results"},e._l(e.$store.state.emoji.popularGifs,(function(t,n){return s("a",{key:n,staticClass:"messenger-content-emoji-box-content-results-item",attrs:{href:"#"},on:{click:function(s){return e.handleSendGif(t,s)}}},[s("img",{attrs:{src:t.fixed_height,alt:"GIPHY GIF "+t.id}})])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.emoji.loading&&e.$store.state.emoji.recentGifs.length>0&&0===e.$store.state.emoji.gifs.length,expression:"!$store.state.emoji.loading && $store.state.emoji.recentGifs.length > 0 && $store.state.emoji.gifs.length === 0"}],staticClass:"messenger-content-emoji-box-content-results"},[s("p",{staticClass:"messenger-content-emoji-box-content-text"},[e._v("GIFs שהשתמשו לאחרונה")]),e._l(e.$store.state.emoji.recentGifs,(function(t,n){return s("a",{key:n,staticClass:"messenger-content-emoji-box-content-results-item",attrs:{href:"#"},on:{click:function(s){return e.handleSendGif(t,s)}}},[s("img",{attrs:{src:t.fixed_height,alt:"GIPHY GIF "+t.id}})])}))],2)]),s("div",{staticClass:"messenger-content-emoji-box-tabs"},[s("a",{staticClass:"messenger-content-emoji-box-tabs-item messenger-content-emoji-box-tabs-item__active",attrs:{href:"#"}},[e._v("GIFs")])])])])])],1)])])])])},H=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"button button__primary messenger-content-input-button__send",attrs:{type:"submit"}},[s("i",{staticClass:"icon icon-chevron__left"})])}],L=(s("d81d"),s("ac1f"),s("5319"),s("4bea")),P=s.n(L),N=s("2ef0"),Q=s("11c1"),q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[s("div",{class:e.owned?"messenger-content-list-item messenger-content-list-item__owned":"messenger-content-list-item"},["text"===e.message.type?s("p",{staticClass:"messenger-content-list-item-text"},[e._v(" "+e._s(e.message.data.text)+" ")]):e._e(),"gif"===e.message.type?s("div",{staticClass:"messenger-content-list-item-image"},[s("img",{attrs:{src:e.message.data.gif.original,alt:"GIPHY GIF "+e.message.data.gif.id},on:{load:e.imgOnLoad}})]):e._e()])])},D=[],B={props:{message:Object,ownerId:String,imgOnLoad:Function},computed:{owned:{get:function(){return this.ownerId===this.message.uid}}}},U=B,M=(s("7773"),Object(g["a"])(U,q,D,!1,null,"6e97fd40",null)),F=M.exports,Y=null,V=null,A={created:function(){var e=this,t=JSON.parse(localStorage.getItem("recent_gifs"));t&&this.$store.commit("setRecentGifs",t),this.$store.commit("setChatLoading",!0),Y=P()(window.location.origin.replace(/^http/,"ws")),Y.on("connect",(function(){console.log("[WS] Connected");var t={id:Object(Q["v4"])(),nickname:e.$store.state.nickname};Y.emit("join",t)}),{reconnection:!0,reconnectionDelay:1e3,reconnectionDelayMax:5e3,forceNew:!0}),Y.on("joined",(function(t){e.$store.commit("setCurrentUser",t),e.$store.commit("setChatLoading",!1),e.$store.commit("setChatQueue",!0)})),Y.on("chatStart",(function(t){e.$store.commit("clearChat"),e.$store.commit("setChatQueue",!1),e.$store.commit("setChatPeer",t.user),e.$store.commit("setChatRoom",t.room)})),Y.on("chatEnd",(function(){e.$store.commit("clearChat"),e.$store.commit("setChatQueue",!0),e.$router.push("/ads")})),Y.on("message",(function(t){e.$store.commit("addMessage",t),e.scrollChatDown()})),Y.on("typingStatus",(function(t){e.$store.commit("setPeerTypingStatus",t)})),this.getPopularGifs()},beforeDestroy:function(){Y.close(),Y=null,this.$store.commit("clearChat")},methods:{openEmojiBox:function(e){e.preventDefault(),this.$store.commit("setEmojiVisibility",!this.$store.state.emoji.visible)},getPopularGifs:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://api.giphy.com/v1/gifs/trending",{params:{api_key:"fCluNP2WYQOBvk1Tp2kQQG21Ca9wMXHC",limit:25}});case 3:if(t=e.sent,200===t.status){e.next=6;break}throw new Error("[GIPHY] Cant access to the server");case 6:if(0!==t.data.data.length){e.next=8;break}throw new Error("[GIPHY] שום דבר לא נמצא");case 8:s=t.data.data.map((function(e){return{original:e.images.original.url,fixed_height:e.images.fixed_height.url,id:e.id}})),this.$store.commit("setEmojiLoading",!1),this.$store.commit("setPopularGifs",s),e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](0),this.$store.commit("setEmojiLoading",!1),this.$store.commit("setPopularGifs",[]),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,this,[[0,13]])})));function t(){return e.apply(this,arguments)}return t}(),searchGifs:N["debounce"](Object(u["a"])(regeneratorRuntime.mark((function e(){var t,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.searchGifQuery,e.prev=1,e.next=4,h.a.get("https://api.giphy.com/v1/gifs/search",{params:{api_key:"fCluNP2WYQOBvk1Tp2kQQG21Ca9wMXHC",q:t,limit:10,offset:this.$store.state.emoji.searchOffset}});case 4:if(s=e.sent,200===s.status){e.next=7;break}throw new Error("[GIPHY] Status code not 200");case 7:if(0!==s.data.data.length||0!==this.$store.state.emoji.seachOffset){e.next=9;break}throw new Error("[GIPHY] שום דבר לא נמצא");case 9:n=s.data.data.map((function(e){return{original:e.images.original.url,fixed_height:e.images.fixed_height.url,id:e.id}})),this.$store.commit("setEmojiLoading",!1),this.$store.commit("setGifs",n),e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](1),this.$store.commit("setEmojiLoading",!1),this.$store.commit("clearGifs"),console.error(e.t0.message);case 19:case"end":return e.stop()}}),e,this,[[1,14]])}))),300),handleScroll:function(e){var t=e.target.scrollHeight,s=e.target.offsetHeight,n=e.target.scrollTop;t-s<=2*n&&(this.$store.commit("setSearchOffset",this.$store.state.emoji.searchOffset+10),this.searchGifs())},handleSubmit:function(e){if(e.preventDefault(),this.message.length>0){var t={type:"text",uid:this.$store.state.chat.currentUser.id,data:{text:this.message}};clearTimeout(V),this.typingTimeoutHandler(),Y.emit("message",t),this.$store.commit("addMessage",t),this.$store.commit("setMessage",""),this.scrollChatDown()}else this.$notify({group:"main",text:"אנא הכנס הודעה",type:"warn"});this.$refs.chatInput.focus()},handleSendGif:function(e,t){t.preventDefault();var s=JSON.parse(localStorage.getItem("recent_gifs")||"[]");s&&s.length<20&&(s.push(e),s=N["uniqBy"](s,"id")),this.$store.commit("setRecentGifs",s),localStorage.setItem("recent_gifs",JSON.stringify(s));var n={type:"gif",uid:this.$store.state.chat.currentUser.id,data:{gif:e}};this.$store.commit("addMessage",n),Y.emit("message",n),this.scrollChatDown(),this.$store.commit("setEmojiVisibility",!1)},handleLeave:function(e){e.preventDefault(),Y.emit("leaveRoom")},handleGifLoad:function(e){this.scrollChatDown()},scrollChatDown:function(){var e=this;setTimeout((function(){e.$refs.chatScroll.scrollTo({top:e.$refs.chatScroll.scrollHeight,behavior:"smooth"})}),200)},chatInputFocus:function(e){var t=this;setTimeout((function(){t.scrollChatDown()}),100)},chatInputBlur:function(e){},chatInputClick:function(e){var t=this;setTimeout((function(){t.scrollChatDown()}),100)},chatInputKeyUp:function(e){!1===this.$store.state.chat.typing?(this.$store.commit("setTypingStatus",!0),Y.emit("isTyping",!0),V=setTimeout(this.typingTimeoutHandler,2e3)):(clearTimeout(V),V=setTimeout(this.typingTimeoutHandler,2e3))},typingTimeoutHandler:function(){this.$store.commit("setTypingStatus",!1),Y.emit("isTyping",!1)},goToHome:function(e){e.preventDefault(),localStorage.removeItem("nickname"),this.$store.commit("setNickname",""),this.$router.push("/")}},computed:{message:{get:function(){return this.$store.state.chat.message},set:function(e){this.$store.commit("setMessage",e)}},searchGifQuery:{get:function(){return this.$store.state.emoji.query},set:function(e){e.length>0?(this.$store.commit("setEmojiLoading",!0),this.$store.commit("setSearchGifQuery",e),this.$store.commit("clearGifs"),this.$store.commit("setSearchOffset",0),this.searchGifs()):(this.$store.commit("setEmojiLoading",!1),this.$store.commit("setSearchGifQuery",e),this.$store.commit("clearGifs"),this.$store.commit("setSearchOffset",0))}}},components:{message:F}},z=A,J=(s("73bf"),Object(g["a"])(z,I,H,!1,null,"54bc5012",null)),W=J.exports,K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ads"},[e._m(0),s("div",{staticClass:"window-action"},[s("a",{staticClass:"button button__primary",attrs:{href:"#"},on:{click:e.handleLeave}},[e._v("התחל שיחה חדשה")])])])},X=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ads-container"},[s("div",{staticClass:"ads-item"},[s("h4",[e._v("פרסומת 1")])]),s("div",{staticClass:"ads-item"},[s("h4",[e._v("פרסומת 2")])]),s("div",{staticClass:"ads-item"},[s("h4",[e._v("פרסומת 3")])])])}],Z={methods:{handleLeave:function(){this.$router.push("/")}}},ee=Z,te=(s("5e71"),Object(g["a"])(ee,K,X,!1,null,"41496a14",null)),se=te.exports,ne=(s("99af"),s("2909")),ae=s("2f62");n["default"].use(ae["a"]);var ie=new ae["a"].Store({state:{nickname:"",readRules:!1,home:{step:0,rulesBottom:!1,online:0},emoji:{visible:!1,loading:!1,gifs:[],popularGifs:[],recentGifs:[],query:"",searchOffset:0,activeTab:"gifs"},chat:{loading:!1,inQueue:!1,message:"",messages:[],currentUser:null,typing:!1,peer:null,peerTyping:!1,room:null}},mutations:{setNickname:function(e,t){e.nickname=t.nickname},readRules:function(e,t){e.readRules=t.readRules},setStep:function(e,t){e.home.step=t},setOnline:function(e,t){e.home.online=t},increaseStep:function(e){e.home.step=e.home.step+1},setRulesBottom:function(e,t){e.home.rulesBottom=t},setEmojiLoading:function(e,t){e.emoji.loading=t},setPopularGifs:function(e,t){e.emoji.popularGifs=t},setRecentGifs:function(e,t){e.emoji.recentGifs=t},setGifs:function(e,t){e.emoji.gifs=[].concat(Object(ne["a"])(e.emoji.gifs),Object(ne["a"])(t))},clearGifs:function(e){e.emoji.gifs=[]},setSearchGifQuery:function(e,t){e.emoji.query=t},setSearchOffset:function(e,t){e.emoji.searchOffset=t},setEmojiVisibility:function(e,t){e.emoji.visible=t},setChatLoading:function(e,t){e.chat.loading=t},setChatQueue:function(e,t){e.chat.inQueue=t},setChatPeer:function(e,t){e.chat.peer=t},setPeerTypingStatus:function(e,t){e.chat.peerTyping=t},setChatRoom:function(e,t){e.chat.room=t},addMessage:function(e,t){e.chat.messages=[].concat(Object(ne["a"])(e.chat.messages),[t])},setMessage:function(e,t){e.chat.message=t},setCurrentUser:function(e,t){e.chat.currentUser=t},setTypingStatus:function(e,t){e.chat.typing=t},clearChat:function(e,t){e.chat.loading=!1,e.chat.inQueue=!1,e.chat.message="",e.chat.messages=[],e.chat.peer=null,e.chat.room=null}},actions:{},modules:{}});n["default"].use(_["a"]);var oe=[{path:"/",name:"Loading",component:x},{path:"/signin",name:"Home",component:T},{path:"/chat",name:"Chat",component:W,meta:{requiresAuth:!0}},{path:"/ads",name:"Ads",component:se,meta:{requiresAuth:!0}}],re=new _["a"]({mode:"history",base:"/",routes:oe});re.beforeEach((function(e,t,s){e.matched.some((function(e){return e.meta.requiresAuth}))?ie.state.nickname&&ie.state.nickname.length>0?s():s("/"):s(),"Home"===e.name&&ie.commit("setStep",0)}));var ce=re;n["default"].config.productionTip=!1,n["default"].use(i.a),n["default"].use(r.a),new n["default"]({router:ce,store:ie,render:function(e){return e($)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},"5d85":function(e,t,s){"use strict";var n=s("9868"),a=s.n(n);a.a},"5e71":function(e,t,s){"use strict";var n=s("953f"),a=s.n(n);a.a},"73bf":function(e,t,s){"use strict";var n=s("eea0"),a=s.n(n);a.a},7773:function(e,t,s){"use strict";var n=s("fcac"),a=s.n(n);a.a},"953f":function(e,t,s){},9868:function(e,t,s){},"9c0c":function(e,t,s){},a572:function(e,t,s){},eea0:function(e,t,s){},fcac:function(e,t,s){}});
//# sourceMappingURL=app.cf03fdbc.js.map