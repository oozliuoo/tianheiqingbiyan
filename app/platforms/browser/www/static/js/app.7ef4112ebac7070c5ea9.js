webpackJsonp([1,2],[,function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o={"zh-cn":{CREATE_ROOM:"创建房间",JOIN_ROOM:"进入房间",PERSONAL_SETTINGS:"个人设置"},en:{CREATE_ROOM:"Create Room",JOIN_ROOM:"Join Room",PERSONAL_SETTINGS:"Personal Settings"}}},function(t,n,e){"use strict";var o=e(21),a=e.n(o),r=e(22),i=e.n(r),u=function(){function t(){a()(this,t),this.supportedLang=["zh-cn","en"],this.lang="zh-cn"}return i()(t,[{key:"getLanguageCode",value:function(){return this.lang}},{key:"setLanguageCode",value:function(t){this.supportedLang.indexOf(t)!==-1&&(this.lang=t)}}]),t}();n.a=new u},,,function(t,n,e){"use strict";var o=e(6),a=e(49),r=e(40),i=e.n(r),u=e(41),c=e.n(u),s=e(42),l=e.n(s),f=e(43),d=e.n(f);o.a.use(a.a),n.a=new a.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/create-room/",name:"CreateRoom",component:c.a},{path:"/join-room/",name:"JoinRoom",component:l.a},{path:"/settings/",name:"SettingHome",component:d.a}]})},,,,,,function(t,n){},,,function(t,n,e){e(38);var o=e(0)(e(15),e(48),null,null);t.exports=o.exports},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app"}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),a=e(2),r=e(5);n.default={name:"home",data:function(){return{currentLang:a.a.getLanguageCode()}},computed:{buttons:function(){return[{label:o.a[this.currentLang].CREATE_ROOM,onClick:function(){r.a.push({path:"create-room"})}},{label:o.a[this.currentLang].JOIN_ROOM,onClick:function(){r.a.push({path:"join-room"})}},{label:o.a[this.currentLang].PERSONAL_SETTINGS,onClick:function(){r.a.push({path:"settings"})}}]}},methods:{createRoomOnClick:function(t){}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=(e(1),e(2));n.default={name:"create-room",data:function(){return{currentLang:o.a.getLanguageCode()}},computed:{}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=(e(1),e(2));n.default={name:"join-room",data:function(){return{currentLang:o.a.getLanguageCode()}},computed:{}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=(e(1),e(2));n.default={name:"setting-home",data:function(){return{currentLang:o.a.getLanguageCode()}},computed:{}}},,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n,e){t.exports=e.p+"static/img/logo.630febc.png"},function(t,n,e){e(34);var o=e(0)(e(16),e(44),"data-v-0062597f",null);t.exports=o.exports},function(t,n,e){e(36);var o=e(0)(e(17),e(46),"data-v-2d2b3084",null);t.exports=o.exports},function(t,n,e){e(35);var o=e(0)(e(18),e(45),"data-v-13d937f2",null);t.exports=o.exports},function(t,n,e){e(37);var o=e(0)(e(19),e(47),"data-v-567ed220",null);t.exports=o.exports},function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"home-main"},[o("img",{staticClass:"logo",attrs:{src:e(39)}}),t._v(" "),o("section",{staticClass:"button-section"},t._l(t.buttons,function(n){return o("button",{staticClass:"ui teal button",on:{click:n.onClick}},[t._v("\n\t\t\t\t"+t._s(n.label)+"\n\t\t\t")])}))])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"join-room-main"})},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"create-room-main"})},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"setting-home-main"})},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(6),a=e(14),r=e.n(a),i=e(5);window.$=window.jQuery=e(12),e(11),e(13),o.a.config.productionTip=!1,new o.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})}],[52]);
//# sourceMappingURL=app.7ef4112ebac7070c5ea9.js.map