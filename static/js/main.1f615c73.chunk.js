(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c.n(s),o=c(4),n=c(5),r=c(7),l=c(6),d=c(1),i=c.n(d),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.clearGood=function(){e.setState({selectedGood:""})},e.setGood=function(t){e.setState({selectedGood:t})},e}return Object(n.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[t?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearGood})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(c){var s=t===c;return Object(u.jsxs)("tr",{"data-cy":"Good",className:s?"has-background-success-light":"",children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){s?e.clearGood():e.setGood(c)},"data-cy":"".concat(s?"RemoveButton":"AddButton"),type:"button",className:"button ".concat(s?"is-info":""),children:s?"-":"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);a.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1f615c73.chunk.js.map