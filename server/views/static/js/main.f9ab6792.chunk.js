(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{37:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(14),r=t.n(a),i=t(3),u=function(e,n,t){return e?"E"!==e?"".concat(e===t?"M\xe1quina":"Voc\xea"," venceu!"):"Empatou!":n===t?"\xc9 a vez da m\xe1quina!":"\xc9 a sua vez!"},s=t(4),o=t.n(s),l=(t(37),t(0));var f=function(){var e=Array(9).fill(""),n=["O","X"],t="X",a=Object(c.useState)(e),r=Object(i.a)(a,2),s=r[0],f=r[1],h=Object(c.useState)(n[Number(!n.indexOf(t))]),j=Object(i.a)(h,2),d=j[0],b=j[1],O=Object(c.useState)(null),m=Object(i.a)(O,2),p=m[0],v=m[1],x=Object(c.useState)("1"),g=Object(i.a)(x,2),N=g[0],E=g[1],y=Object(c.useState)(null),k=Object(i.a)(y,2),M=k[0],S=k[1],X=function(e){o.a.put("/api/user/".concat(e)).then((function(e){S(e.data)}))},w=function(e){if(p||""!==s[e])return null;f(s.map((function(n,t){return t===e?d:n}))),b(n[Number(!n.indexOf(d))])},C=function(){var e=function(e,n){var t=[],c=[],a=[],r={1:[],2:[],3:[]},i={1:[],2:[],3:[]},u=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];e.forEach((function(e,n){"O"===e?c.push(n):"X"===e?t.push(n):""===e&&a.push(n)}));var s=u.filter((function(e,n){return!e.filter((function(e){return c.includes(e)})).length}));(s=s.map((function(e,n){return e.filter((function(e){return a.includes(e)}))}))).forEach((function(e){e.length&&r[e.length].push(e)}));var o,l=u.filter((function(e,n){return!e.filter((function(e){return t.includes(e)})).length}));return(l=l.map((function(e,n){return e.filter((function(e){return a.includes(e)}))}))).forEach((function(e){e.length&&i[e.length].push(e)})),i[1].length&&(r[1]=i[1]),console.log("Level ".concat(n," ativo!")),(o=1===parseInt(n)?a:2===parseInt(n)||t.includes(4)||c.includes(4)?r[1].length?r[1].flat(1):r[2].length?r[2].flat(1):r[3].length?r[3].flat(1):a:[4])[Math.floor(Math.random()*o.length)]}(s,N);w(e)},J=function(){b("E"!==p&&p?p:n[Number(!n.indexOf(t))]),f(e),v(null)};return Object(c.useEffect)((function(){M||S(void o.a.get("/api/users").then((function(e){S(e.data)})));var e="";(function(e){return[[e[0],e[1],e[2]],[e[3],e[4],e[5]],[e[6],e[7],e[8]],[e[0],e[3],e[6]],[e[1],e[4],e[7]],[e[2],e[5],e[8]],[e[2],e[4],e[6]],[e[0],e[4],e[8]]]})(s).forEach((function(n){n.every((function(e){return"X"===e}))?(v(e="X"),X("robot")):n.every((function(e){return"O"===e}))&&(e="O",X("user"),v(e))})),e||(s.every((function(e){return""!==e}))?v("E"):d===t&&C())}),[s,d]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{className:"title",children:"Jogo da Velha"}),Object(l.jsxs)("select",{className:"custom-select",onChange:function(e){E(e.target.value),J()},defaultValue:N,children:[Object(l.jsx)("option",{value:"1",children:"F\xe1cil"}),Object(l.jsx)("option",{value:"2",children:"M\xe9dio"}),Object(l.jsx)("option",{value:"3",children:"Dif\xedcil"})]}),Object(l.jsx)("div",{className:"users",children:!!M&&M.map((function(e,n){return Object(l.jsxs)("div",{className:"name ".concat(e.name),children:["user"===e.name?"Voc\xea":"M\xe1quina",": ",e.score]},n)}))})]}),Object(l.jsx)("main",{children:Object(l.jsx)("div",{className:"board ".concat(p?"game-over":""),children:s.map((function(e,n){return Object(l.jsx)("div",{className:"cell ".concat(e),onClick:function(){return w(n)},children:e},n)}))})}),Object(l.jsxs)("footer",{children:[Object(l.jsx)("h2",{className:"winner-message",children:Object(l.jsx)("span",{className:p||"player ".concat(d),children:u(p,d,t)})}),p&&Object(l.jsxs)("section",{className:"container space-between",children:[Object(l.jsx)("div",{className:"item",children:Object(l.jsx)("button",{className:"reset-button",onClick:J,children:"Recome\xe7ar o Jogo"})}),Object(l.jsx)("div",{className:"item",children:Object(l.jsx)("button",{className:"reset-game",onClick:function(){o.a.get("/api/user/reset").then((function(e){S(e.data)}))},children:"Zerar pontua\xe7\xe3o"})})]})]})]})};r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f9ab6792.chunk.js.map