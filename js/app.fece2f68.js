(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background}},[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"",height:"40"}},[a("div",{staticClass:"d-flex align-center"},[a("span",{staticClass:"mr-2 title"},[t._v("簡易ファイル名作成補助ツール")])]),a("v-spacer"),a("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{icon:""}},r),[a("v-icon",[t._v("mdi-history")])],1)]}}])},[a("v-card",[a("v-card-title",[t._v("履歴")]),a("v-divider",{staticClass:"my-1"}),a("v-card-text",{attrs:{height:"200px"}},t._l(t.history,(function(e){return a("li",{key:e},[a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e,expression:"history",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],attrs:{depressed:""}},[t._v(" "+t._s(e)+" ")]),a("v-divider",{staticClass:"my-1"})],1)})),0)],1)],1),a("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{icon:""}},r),[a("v-icon",[t._v("mdi-help-circle")])],1)]}}])},[a("v-card",[a("v-card-title",[t._v("使い方")]),a("v-divider"),a("v-card-text",{attrs:{height:"200px"}},[a("span",{domProps:{innerHTML:t._s(t.how2use())}})])],1)],1),[a("v-btn",{attrs:{icon:""},on:{click:t.switchDarkMode}},[a("v-icon",[t._v("mdi-theme-light-dark")])],1)]],2),[a("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" コピーしました ")])],a("v-main",[a("HelloWorld",{on:{HistoryData:t.getHistory}})],1)],2)},i=[],o=(a("ac1f"),a("5319"),a("8785")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("span",{},[t._v("分野")]),a("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[a("v-btn-toggle",[a("v-radio-group",{staticClass:"mt-n1",style:{background:t.$vuetify.theme.themes[t.theme].background},attrs:{row:""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.volunteerType,(function(t){return a("v-radio",{key:t.id,attrs:{label:t.value,value:t.value}})})),1)],1)],1)],1),a("v-text-field",{staticClass:"pa-0 my-n1",attrs:{label:"新聞名、朝夕、日付",placeholder:"ay940324",outlined:""},model:{value:t.dateDATA,callback:function(e){t.dateDATA=e},expression:"dateDATA"}}),a("v-text-field",{staticClass:"pa-0 my-n2",attrs:{label:"タイトル",placeholder:"障害者が働ける場を 福祉の会 明日設立",outlined:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-text-field",{staticClass:"pa-0 my-n2",attrs:{label:"キーワード",placeholder:"社会福祉・自立推進研究会、堀内進一、清水哲",outlined:""},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),a("v-checkbox",{staticClass:"pa-0 my-n2",attrs:{label:"大阪ボランティア協会"},model:{value:t.isOsaka,callback:function(e){t.isOsaka=e},expression:"isOsaka"}}),a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:this.copy,expression:"this.copy",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:this.copySuccess,expression:"this.copySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:this.copyFail,expression:"this.copyFail",arg:"error"}],staticClass:"mx-1",attrs:{color:"info"},on:{click:t.CheckStr}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-content-copy ")]),t._v(" コピー ")],1),a("v-btn",{staticClass:"mx-1",attrs:{color:"error"},on:{click:t.reset}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-delete ")]),t._v(" リセット ")],1),[a("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" コピーしました ")]),a("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.copyErr,callback:function(e){t.copyErr=e},expression:"copyErr"}},[t._v(" クリップボードアクセスエラー！ ")]),a("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.inputErr,callback:function(e){t.inputErr=e},expression:"inputErr"}},[t._v(" 新聞名、朝夕、日付の欄に誤りがあります ")]),a("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.typeNoInput,callback:function(e){t.typeNoInput=e},expression:"typeNoInput"}},[t._v(" 分野未入力です ")])]],2)},s=[],u=(a("99af"),a("a9e3"),a("4d63"),a("25f0"),a("466d"),{name:"HelloWorld",data:function(){return{dateDATA:"",title:"",keywords:"",type:!1,isOsaka:!1,snackbar:!1,copyErr:!1,inputErr:!1,typeNoInput:!1,timeout:1e3,volunteerType:[{id:0,value:"保健"},{id:1,value:"医療"},{id:2,value:"福祉"},{id:3,value:"まち"},{id:4,value:"芸術"},{id:5,value:"スポ"},{id:6,value:"環境"},{id:7,value:"動物"},{id:8,value:"災害"},{id:9,value:"人権"},{id:10,value:"平和"},{id:11,value:"国際"},{id:12,value:"男女"},{id:13,value:"こども"},{id:14,value:"社会教育"},{id:15,value:"情報"},{id:16,value:"政治"},{id:17,value:"消費者"},{id:18,value:"経済"},{id:19,value:"活動支援"},{id:20,value:"企業"},{id:21,value:"その他"}],radioGroup:1,PubIDList:"AYMSNOFK",MorningOrEveningList:"AY",DateStrRegExp:"(\\d{6}|\\d{8})",history:[]}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"},InputCheckRegExp:function(){return new RegExp("^[".concat(this.PubIDList,"][").concat(this.MorningOrEveningList,"]").concat(this.DateStrRegExp,"$"))},copy:function(){var t=this,e=this.Normalize(this.dateDATA);if(this.InputCheckRegExp.test(e)&&!1!==this.type){var a=function(){var a=new RegExp("^[".concat(t.PubIDList,"]")),r=e.match(a)[0];switch(r){case"A":return"【朝日】";case"Y":return"【読売】";case"M":return"【毎日】";case"S":return"【産経】";case"N":return"【日経】";case"O":return"【大日】";case"F":return"【ファミリー】";case"K":return"【掲載紙不明】"}}(),r=function(){var a=new RegExp("(?<=[".concat(t.PubIDList,"])[").concat(t.MorningOrEveningList,"]")),r=e.match(a)[0];switch(r){case"A":return"朝刊";case"Y":return"夕刊";default:return""}}(),n=function(){var a=new RegExp("".concat(t.DateStrRegExp,"$")),r=e.match(a)[0];if(6===r.length){var n=function(){return r.match(/^\d{2}/)[0]}(),i=function(){return String((new Date).getFullYear()).match(/\d{2}$/)[0]}();return Number(n)>Number(i)?"19".concat(r):"20".concat(r)}if(8===r.length)return r}(),i=this.isOsaka?"<大阪ボランティア協会>":"";return"".concat(n).concat(this.type).concat(a).concat(r,"「").concat(this.title,"」").concat(this.keywords).concat(i)}}},methods:{reset:function(){this.dateDATA="",this.title="",this.keywords="",this.type=!1,this.isOsaka=!1},CheckStr:function(){this.InputCheckRegExp.test(this.Normalize(this.dateDATA))||(this.inputErr=!0),!1===this.type&&(this.typeNoInput=!0)},Normalize:function(t){function e(t){return t.replace(/[Ａ-Ｚａ-ｚ０-９]/g,(function(t){return String.fromCharCode(t.charCodeAt(0)-65248)}))}return e(t).toUpperCase()},copySuccess:function(){this.history.unshift(this.copy),this.$emit("HistoryData",this.history),this.snackbar=!0,this.reset()},copyFail:function(){this.copyErr=!0}}}),l=u,p=a("2877"),d=a("6544"),v=a.n(d),h=a("8336"),b=a("a609"),f=a("ac7c"),y=a("62ad"),m=a("a523"),k=a("132d"),g=a("67b6"),x=a("43a6"),w=a("2db4"),_=a("8654"),C=Object(p["a"])(l,c,s,!1,null,null,null),E=C.exports;function S(){var t=Object(o["a"])(["\n          Tabキーで次のテキスト欄(チェックボックス、ボタン)にカーソルを移動できます。<br>\n          <b>うまくコピーできない場合、新聞名、朝夕、日付の欄に正しい値を入力できているか確認してください</b><br><br>\n          <b>新聞名、朝夕、日付の欄</b><br>\n          新聞名の記号、朝,夕(a,y)、日付(西暦+月+日、6桁か8桁で)をスペースを空けずに入力<br>\n          ただし、大阪日日新聞、朝日ファミリー、掲載紙不明はそれぞれo,f,kと入力<br>\n          例えばA`94,3,24と書かれていたらay940324と入力<br>\n          <b>IE未対応</b>"],["\n          Tabキーで次のテキスト欄(チェックボックス、ボタン)にカーソルを移動できます。<br>\n          <b>うまくコピーできない場合、新聞名、朝夕、日付の欄に正しい値を入力できているか確認してください</b><br><br>\n          <b>新聞名、朝夕、日付の欄</b><br>\n          新聞名の記号、朝,夕(a,y)、日付(西暦+月+日、6桁か8桁で)をスペースを空けずに入力<br>\n          ただし、大阪日日新聞、朝日ファミリー、掲載紙不明はそれぞれo,f,kと入力<br>\n          例えばA\\`94,3,24と書かれていたらay940324と入力<br>\n          <b>IE未対応</b>"]);return S=function(){return t},t}v()(C,{VBtn:h["a"],VBtnToggle:b["a"],VCheckbox:f["a"],VCol:y["a"],VContainer:m["a"],VIcon:k["a"],VRadio:g["a"],VRadioGroup:x["a"],VSnackbar:w["a"],VTextField:_["a"]});var O={name:"App",components:{HelloWorld:E},data:function(){return{snackbar:!1,timeout:1e3,dialog:!1,how2use:function(){return function(t){return t[0].replace(/[\n\r]/g,"")}(S())},history:[]}},methods:{switchDarkMode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},getHistory:function(t){this.history=t},copySuccess:function(){this.snackbar=!0}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}}},A=O,V=a("7496"),D=a("40dc"),T=a("b0af"),N=a("99d9"),I=a("169a"),M=a("ce7e"),$=a("f6c4"),j=a("2fa4"),P=Object(p["a"])(A,n,i,!1,null,null,null),R=P.exports;v()(P,{VApp:V["a"],VAppBar:D["a"],VBtn:h["a"],VCard:T["a"],VCardText:N["a"],VCardTitle:N["b"],VDialog:I["a"],VDivider:M["a"],VIcon:k["a"],VMain:$["a"],VSnackbar:w["a"],VSpacer:j["a"]});var H=a("f309"),L=a("4eb5"),F=a.n(L);r["a"].use(H["a"]),F.a.config.autoSetContainer=!0,r["a"].use(F.a);var Y=new H["a"]({theme:{dark:!1,themes:{light:{background:"#fcfcfc"},dark:{background:"#303030"}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:Y,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.fece2f68.js.map