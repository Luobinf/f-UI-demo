(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{162:function(t,e,a){},163:function(t,e,a){},188:function(t,e,a){"use strict";var n=a(162);a.n(n).a},189:function(t,e,a){"use strict";var n=a(163);a.n(n).a},197:function(t,e,a){"use strict";a(63),a(43),a(64);var n={name:"fLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"fSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(a(188),a(29)),i=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"6429ed0a",null);e.a=i.exports},198:function(t,e,a){"use strict";var n={name:"fHeader"},s=a(29),i=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"7934da64",null);e.a=i.exports},199:function(t,e,a){"use strict";var n={name:"fContent"},s=(a(189),a(29)),i=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"72d7ba52",null);e.a=i.exports},200:function(t,e,a){"use strict";var n={name:"fFooter"},s=a(29),i=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"305cee5c",null);e.a=i.exports},205:function(t,e,a){"use strict";var n={name:"fSider",data:function(){return{visible:!0}},methods:{hide:function(){this.visible=!1}}},s=a(29),i=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[this.visible?e("div",{staticClass:"sider"},[this._t("default")],2):this._e()])}),[],!1,null,"9f4ef6da",null);e.a=i.exports},262:function(t,e,a){"use strict";a.r(e);var n=a(197),s=a(198),i=a(199),r=a(200),c=a(205),l={data:function(){return{}},components:{fLayout:n.a,fHeader:s.a,fMain:i.a,fFooter:r.a,fSider:c.a}},u=a(29),o=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"20px 0"}},[a("h3",[t._v("有侧边栏的布局方式")]),t._v(" "),a("f-layout",{staticStyle:{height:"100vh"}},[a("f-sider",{staticStyle:{"background-color":"#ff4d4f"}},[t._v("sider")]),t._v(" "),a("f-layout",[a("f-header",{staticStyle:{"background-color":"orange"}},[t._v("header")]),t._v(" "),a("f-main",{staticStyle:{"background-color":"skyblue"}},[t._v("main")]),t._v(" "),a("f-footer",{staticStyle:{background:"blue"}},[t._v("footer")])],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);