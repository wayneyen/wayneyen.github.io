(function(t){function s(s){for(var i,n,l=s[0],r=s[1],o=s[2],d=0,f=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&f.push(e[n][0]),e[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);v&&v(s);while(f.length)f.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var t,s=0;s<c.length;s++){for(var a=c[s],i=!0,l=1;l<a.length;l++){var r=a[l];0!==e[r]&&(i=!1)}i&&(c.splice(s--,1),t=n(n.s=a[0]))}return t}var i={},e={app:0},c=[];function n(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)n.d(a,i,function(s){return t[s]}.bind(null,i));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var o=0;o<l.length;o++)s(l[o]);var v=r;c.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"04b7":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("Menu"),a("UserContact"),a("UserIntro"),a("UserSkill"),a("UserExperience"),a("UserCase")],1)},c=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu"},[a("div",{staticClass:"pc-menu-top"},[a("a",{attrs:{href:"javascript: void(0)"},on:{click:function(s){return t.scrollTo("#user-intro")}}},[t._v("個人介紹")]),a("a",{attrs:{href:"javascript: void(0)"},on:{click:function(s){return t.scrollTo("#user-skill")}}},[t._v("技能專長")]),a("a",{attrs:{href:"javascript: void(0)"},on:{click:function(s){return t.scrollTo("#user-experience")}}},[t._v("企業經歷")]),a("a",{attrs:{href:"javascript: void(0)"},on:{click:function(s){return t.scrollTo("#user-case")}}},[t._v("作品展示")])]),a("div",{staticClass:"pc-menu-left"},[a("a",{attrs:{href:"javascript: void(0)"},on:{click:function(s){return t.scrollTo("#user-contact")}}},[a("font-awesome-icon",{attrs:{icon:"home",size:"2x","fixed-width":""}})],1),a("div",[a("a",{staticClass:"block",attrs:{href:"https://www.facebook.com/wayne.yen",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook"],size:"2x","fixed-width":""}})],1),a("a",{staticClass:"block mt-5",attrs:{href:"https://www.linkedin.com/in/wayne-yen-b6b03134/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"2x","fixed-width":""}})],1)])]),t.menuIsOpen?t._e():a("a",{staticClass:"mobile-menu-icon",attrs:{href:"javascript: void(0)"},on:{click:t.switchMenu}},[a("font-awesome-icon",{attrs:{icon:"bars"}})],1),a("transition",{attrs:{name:"slide"}},[t.menuIsOpen?a("div",{staticClass:"mobile-menu",staticStyle:{width:"40vw"}},[a("a",{attrs:{href:"javascript: void(0)"},on:{click:t.switchMenu}},[a("div",{staticClass:"fixed text-center text-3xl text-white close"},[a("font-awesome-icon",{attrs:{icon:"times"}})],1)]),a("div",{staticClass:"link"}),a("a",{attrs:{href:"javascript: void(0)"}},[a("div",{staticClass:"link",on:{click:function(s){return t.scrollTo("#user-contact")}}},[t._v("聯絡方式")])]),a("a",{attrs:{href:"javascript: void(0)"}},[a("div",{staticClass:"link",on:{click:function(s){return t.scrollTo("#user-intro")}}},[t._v("個人介紹")])]),a("a",{attrs:{href:"javascript: void(0)"}},[a("div",{staticClass:"link",on:{click:function(s){return t.scrollTo("#user-skill")}}},[t._v("技能專長")])]),a("a",{attrs:{href:"javascript: void(0)"}},[a("div",{staticClass:"link",on:{click:function(s){return t.scrollTo("#user-experience")}}},[t._v("企業經歷")])]),a("a",{attrs:{href:"#"}},[a("div",{staticClass:"link",on:{click:function(s){return t.scrollTo("#user-case")}}},[t._v("作品展示")])])]):t._e()])],1)},l=[],r=a("f13c"),o=a.n(r),v={name:"Menu",data:function(){return{menuIsOpen:!1}},methods:{switchMenu:function(){this.menuIsOpen=!this.menuIsOpen},scrollTo:function(t){this.menuIsOpen=!1,o.a.scrollTo(t)}}},d=v,f=(a("d9b9"),a("2877")),u=Object(f["a"])(d,n,l,!1,null,"170b7116",null),p=u.exports,_=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-contact",attrs:{id:"user-contact"}},[a("div",{staticClass:"display-pc section-block"},[a("div",{staticClass:"title1 font-thin text-shadow-title"},[t._v("Wayne")]),a("div",{staticClass:"title2 font-thin text-shadow-title mt-2 ml-1"},[t._v("顏晨暐")]),a("div",{staticClass:"contact"},[a("div",[a("font-awesome-icon",{attrs:{icon:"envelope"}}),t._v(" "),a("a",{attrs:{href:"mailto:wayway1974@gmail.com"}},[t._v("wayway1974@gmail.com")])],1),a("div",[a("font-awesome-icon",{attrs:{icon:"mobile"}}),t._v(" 手機暫不提供")],1),a("div",[a("font-awesome-icon",{attrs:{icon:["fab","line"]}}),t._v(" Line 暫不提供")],1),a("div",[a("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),t._v(" 苗栗縣苑裡鎮")],1)])]),a("div",{staticClass:"display-mobile section-block"},[a("div",{staticClass:"text-5xl font-thin text-shadow-title"},[t._v("Wayne")]),a("div",{staticClass:"text-2xl font-thin text-shadow-title mt-2 ml-1"},[t._v("顏晨暐")]),a("div",{staticClass:"info"},[a("div",{staticClass:"social"},[a("a",{attrs:{href:"https://www.facebook.com/wayne.yen",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook"],"fixed-width":""}})],1),a("a",{attrs:{href:"https://www.linkedin.com/in/wayne-yen-b6b03134/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"],"fixed-width":""}})],1)]),a("div",{staticClass:"contact"},[a("div",[a("font-awesome-icon",{attrs:{icon:"envelope","fixed-width":""}}),t._v(" "),a("a",{attrs:{href:"mailto:wayway1974@gmail.com"}},[t._v("wayway1974@gmail.com")])],1),a("div",[a("font-awesome-icon",{attrs:{icon:"mobile","fixed-width":""}}),t._v(" 手機暫不提供")],1),a("div",[a("font-awesome-icon",{attrs:{icon:["fab","line"],"fixed-width":""}}),t._v(" Line 暫不提供")],1),a("div",[a("font-awesome-icon",{attrs:{icon:"map-marker-alt","fixed-width":""}}),t._v(" 苗栗縣苑裡鎮")],1)])])])])},C=[],x={name:"UserContact"},m=x,h=(a("938c"),Object(f["a"])(m,_,C,!1,null,"5d6512d6",null)),b=h.exports,w=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-intro section-block",attrs:{id:"user-intro"}},[a("div",{staticClass:"sub-title pb-8 whitespace-no-wrap"},[t._v("個人介紹")]),a("div",{staticClass:"sub-content"},[a("div",{staticClass:"flex pt-8"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("姓名")]),a("div",{staticClass:"text-dark mt-1"},[t._v("顏晨暐")])]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("年齡")]),a("div",{staticClass:"text-dark mt-1"},[t._v("1974年生")])]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("工作年限")]),a("div",{staticClass:"text-dark mt-1"},[t._v("10年以上")])]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("婚姻狀態")]),a("div",{staticClass:"text-dark mt-1"},[t._v("已婚")])])]),a("div",{staticClass:"flex pt-8"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("學歷")]),a("div",{staticClass:"text-dark mt-1"},[t._v("大學")])]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("專業")]),a("div",{staticClass:"text-dark mt-1"},[t._v("資訊管理")])]),a("div",{staticStyle:{flex:"2"}},[a("div",{staticClass:"text-light"},[t._v("駕駛證")]),a("div",{staticClass:"text-dark mt-1"},[t._v("輕型機車/普通小型車")])])]),a("div",{staticClass:"text-dark pt-8"},[t._v(" 由於本身對資訊產業中，舉凡軟體或硬體皆有相當程度的熱愛，不只是針對某一領域做學習而己，像是程式設計、電玩 、遊戲設計、科技新知、資訊新聞等等，都會要求自我學習與研究，如此一來，不僅是增加了新興的知識，也為自己的實力加分。或許是因為對資訊的熱愛，讓我不斷的從各方面去吸收最新的知識，養成閱讀的好習慣，加上對每件事都要求盡善盡美，也養成了我在對每件事情上的認真與負責。 ")])])])}],g={name:"UserIntro"},y=g,j=Object(f["a"])(y,w,k,!1,null,"579d86c6",null),O=j.exports,S=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-skill section-block",attrs:{id:"user-skill"}},[a("div",{staticClass:"sub-title pb-8 whitespace-no-wrap"},[t._v("技能專長")]),a("div",{staticClass:"sub-content pt-8"},[a("p",{staticClass:"text-dark"},[a("strong",[t._v("外文")]),t._v(" - 英文 聽(中等) 說(中等) 讀(中等) 寫(中等) "),a("br"),a("strong",[t._v("中文")]),t._v(" - 中文 聽(精通) 說(精通) 讀(精通) 寫(精通) "),a("br"),a("strong",[t._v("方言")]),t._v(" - 台語(精通)")]),a("p",{staticClass:"text-dark pt-3"},[a("strong",[t._v("OS：")]),t._v("MacOS、Windows 10、Linux "),a("br"),a("strong",[t._v("Frontend：")]),t._v("HTML、CSS、Sass、JavaScript、jQuery、Vue、SVG "),a("br"),a("strong",[t._v("Backend：")]),t._v("PHP、Laravel、Node.js、ASP "),a("br"),a("strong",[t._v("行動應用：")]),t._v("Objective-C、SWIFT、微信小程序 "),a("br"),a("strong",[t._v("DB：")]),t._v("MySQL、MariaDB、MS SQL、PostgreSQL "),a("br"),a("strong",[t._v("其他：")]),t._v("GitHub、GitLab、VB ")]),a("p",{staticClass:"text-dark pt-3"},[t._v(" 伺服器網站管理維護、作業系統基本操作、資料備份與復原、系統架構規劃、系統維護操作、系統整合分析、軟硬體設備成本控制、軟體工程系統開發、軟體品質與保證、軟體程式設計、結構化程式設計 ")])])])}],M={name:"UserIntro"},P=M,U=Object(f["a"])(P,S,T,!1,null,"73d90864",null),I=U.exports,E=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-experience section-block",attrs:{id:"user-experience"}},[a("div",{staticClass:"sub-title pb-8 whitespace-no-wrap"},[t._v("企業經歷")]),a("div",{staticClass:"sub-content"},[a("div",[a("div",{staticClass:"pt-8"},[a("p",{staticClass:"text-black"},[t._v("CTO/新智造科技(深圳)（2014/09～2020/06）")])]),a("div",{staticClass:"flex pt-4"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("職務類別")]),a("div",{staticClass:"text-dark"},[t._v("資訊長")])]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("產業類別")]),a("div",{staticClass:"text-dark"},[t._v("印刷業、電子商務")])])]),a("div",{staticClass:"flex pt-4"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("工作內容")]),a("div",{staticClass:"text-dark"},[t._v("帶領資訊團隊開發電子商務平台、工廠生產管理、開發各種商務運用等")])])])]),a("div",[a("div",{staticClass:"pt-8"},[a("p",{staticClass:"text-black"},[t._v("iOS engineer/playsport.cc（2013/06～2014/09）")])]),a("div",{staticClass:"flex pt-4"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("職務類別")]),a("div",{staticClass:"text-dark"},[t._v("APP工程師")])]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("產業類別")]),a("div",{staticClass:"text-dark"},[t._v("軟體科技、電子商務")])])]),a("div",{staticClass:"flex pt-4"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("工作內容")]),a("div",{staticClass:"text-dark"},[t._v("開發 iOS app、開發 PHP")])])])]),a("div",[a("div",{staticClass:"pt-8"},[a("p",{staticClass:"text-black"},[t._v("程式部主任/醫集購資訊科技股份有限公司（2011/01～2013/06）")])]),a("div",{staticClass:"flex pt-4"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("職務類別")]),a("div",{staticClass:"text-dark"},[t._v("資訊主管")])]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("產業類別")]),a("div",{staticClass:"text-dark"},[t._v("廣告行銷公關業")])])]),a("div",{staticClass:"flex pt-4"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("工作內容")]),a("div",{staticClass:"text-dark"},[t._v("線上平台開發、客戶案件處理")])])])]),a("div",[a("div",{staticClass:"pt-8"},[a("p",{staticClass:"text-black"},[t._v("系統工程師/環球誠信（2007/01～2010/11）")])]),a("div",{staticClass:"flex pt-4"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("職務類別")]),a("div",{staticClass:"text-dark"},[t._v("工程師")])]),a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("產業類別")]),a("div",{staticClass:"text-dark"},[t._v("醫療保健服務業")])])]),a("div",{staticClass:"flex py-4"},[a("div",{staticClass:"flex-1"},[a("div",{staticClass:"text-light"},[t._v("工作內容")]),a("div",{staticClass:"text-dark"},[t._v("遠端醫療平台開發、醫療保險系統開發")])])])])])])}],L={name:"UserIntro"},z=L,B=Object(f["a"])(z,E,$,!1,null,"f22ac928",null),H=B.exports,Q=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-case section-block",attrs:{id:"user-case"}},[a("div",{staticClass:"sub-title pb-8 whitespace-no-wrap"},[t._v("作品展示")]),a("div",{staticClass:"sub-content pt-8"},[a("div",{staticClass:"text-black"},[t._v("微自定")]),a("div",{staticClass:"text-dark"},[t._v("微自定線上附帶下單鏈接的平臺，公司自有生産線，屬於你的加工廠。高分辨率的手機殼DIY印錶機，智能印刷。實現計算機數據輸出到機器上，直接把彩色圖案在你的物品上噴印。代理合作流程:客服1V1對接→申請成為代理→諮詢獲取資料 →開始出售→自行下單→完成 0加盟門檻、0代理費、0庫存")]),a("img",{attrs:{src:"https://www.4family.co/images/weiziding.png",alt:""}}),a("div",{staticClass:"text-black pt-8"},[t._v(" 平台由於疫情原因停止營運，以下是臨時網址，由於空間關係有些小地方可能有些問題 "),a("br"),a("a",{staticStyle:{"font-size":"24px"},attrs:{href:"http://18.162.51.40:8081/",target:"_blank"}},[t._v("http://18.162.51.40:8081/")])])])])}],W={name:"UserIntro"},A=W,D=Object(f["a"])(A,Q,V,!1,null,"d58ea72e",null),G=D.exports,J={name:"App",components:{Menu:p,UserContact:b,UserIntro:O,UserSkill:I,UserExperience:H,UserCase:G}},F=J,N=(a("5c0b"),Object(f["a"])(F,e,c,!1,null,null,null)),Y=N.exports,q=a("ecee"),K=a("c074"),R=a("f2d1"),X=a("ad3d");a("def6");q["c"].add(K["c"],K["f"],K["a"],K["b"],K["e"],K["d"],R["b"],R["a"],R["c"]),i["a"].component("font-awesome-icon",X["a"]),i["a"].component("font-awesome-layers",X["b"]),i["a"].component("font-awesome-layers-text",X["c"]),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,s,a){"use strict";var i=a("9c0c"),e=a.n(i);e.a},"938c":function(t,s,a){"use strict";var i=a("cc72"),e=a.n(i);e.a},"9c0c":function(t,s,a){},cc72:function(t,s,a){},d9b9:function(t,s,a){"use strict";var i=a("04b7"),e=a.n(i);e.a},def6:function(t,s,a){}});
//# sourceMappingURL=app.f44321fb.js.map