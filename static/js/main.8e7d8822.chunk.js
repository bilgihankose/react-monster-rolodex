(this["webpackJsonpmosnters-rolodex"]=this["webpackJsonpmosnters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),o=n.n(c),a=n(4),i=n(5),h=n(7),u=n(6),l=(n(12),n(13),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},m=(n(15),function(e){e.placeholder;var t=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:"search monster",onChange:t})}),b=(n(16),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monster Rolodex"}),Object(l.jsx)(m,{handleChange:function(t){e.setState({searchField:t.target.value})}}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(r.a.Component));n(17);o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.8e7d8822.chunk.js.map