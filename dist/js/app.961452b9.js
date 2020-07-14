(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/jwt-decode/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("JWT Decode Token")]),e.decodeToken?n("button",{attrs:{type:"button"},on:{click:e.handleCopy}},[e._v("Copy")]):e._e(),n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.handleSubmitForm(t)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],attrs:{cols:"30",rows:"10",placeholder:"Paste token here..."},domProps:{value:e.token},on:{input:function(t){t.target.composing||(e.token=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Decode token")])]),n("Highlight",{staticClass:"highlight__wrapper"},[e._v(e._s(e.decodeToken))])],1)},a=[],i=(n("96cf"),n("3b8d")),c=(n("28a5"),n("768b")),u=(n("ac6a"),n("456d"),n("7618")),s=n("d7ac"),l=n.n(s),p=n("04e1"),f=n.n(p),d=n("8b82"),h=n.n(d),b={isObject:function(e){return Boolean(e&&"object"===Object(u["a"])(e)&&Object.keys(e).length)},checkCompressType:function(e){var t=JSON.parse(h.a.decode(e));return this.isObject(t)&&t.zip?t.zip:null},inflateToken:function(e){var t=h.a.decode(e),n=l.a.inflate(t,{to:"string"});return JSON.parse(n)},decode:function(e){try{var t=e.split("."),n=Object(c["a"])(t,2),r=n[0],o=n[1],a=this.checkCompressType(r);return"DEF"===a?this.inflateToken(o):f()(e)}catch(i){return new Error(i)}}},v=b,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("prism",{staticClass:"prism",class:[{"prism--fixed":e.fixed},{"prism--bottom":e.bottom},{"prism--left":e.left},{"prism--right":e.right},{"prism--top":e.top}],attrs:{language:e.language}},[e._t("default")],2):e._e()},g=[],y=n("8d51"),k=n.n(y),O=(n("c197"),n("6b2c"),{name:"Highlight",props:{language:{type:String,default:"javascript"},fixed:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1},top:{type:Boolean,default:!1}},components:{Prism:k.a},computed:{visible:function(){return!1}}}),j=O,w=(n("bb10"),n("2877")),_=Object(w["a"])(j,m,g,!1,null,"7ffadbac",null),x=_.exports,T={name:"app",components:{Highlight:x},data:function(){return{token:null,decodeToken:null}},methods:{handleSubmitForm:function(){if(!this.token)return alert("Insert a valid token"),void(this.decodeToken=null);if(/^{.+?}$/.test(this.token)){var e=JSON.parse(this.token);this.decodeToken=v.decode(e.content)}else this.decodeToken=v.decode(this.token)},handleCopy:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(JSON.stringify(this.decodeToken));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("ERROR",e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}()}},S=T,P=(n("034f"),Object(w["a"])(S,o,a,!1,null,null,null)),C=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(C)}}).$mount("#app")},"64a9":function(e,t,n){},"7f5a":function(e,t,n){},bb10:function(e,t,n){"use strict";var r=n("7f5a"),o=n.n(r);o.a}});
//# sourceMappingURL=app.961452b9.js.map