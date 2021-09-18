(this.webpackJsonplob=this.webpackJsonplob||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var l=c(1),n=c.n(l),a=c(7),r=c.n(a),s=(c(12),c(13),c(2)),o=c(3),i=c(0),d=function(e){var t=e.children;return Object(i.jsx)("div",{className:"relative rounded-xl max-h-max w-24 h-32 font-semibold text-7xl ml-2 mr-2",children:t})},b=function(e){var t=e.className,c=void 0===t?"":t,l=e.status,n=void 0===l?"default":l,a=e.label,r=e.value,s=e.flipped,o=e.onSelect,d=void 0===o?function(){}:o,b=e.onFlipped,u=void 0===b?function(){}:b,j={default:"text-gray-500 bg-gray-50 border-gray-300 hover:bg-gray-300 hover:border-gray-500 cursor-help",selected:"text-red-600 bg-yellow-50 border-yellow-500 hover:bg-yellow-300 cursor-".concat(s?"default":"pointer")},x="absolute max-h-max w-24 h-32 rounded-xl flex items-center justify-center h-full border-2 ".concat(j[n]," ").concat(c);return Object(i.jsxs)("div",{className:"lob-card relative rounded-xl shadow-md max-h-max w-24 h-32 font-semibold text-7xl ".concat(s?"is-flipped":""),children:[Object(i.jsx)("div",{className:"lob-card__face lob-card__face--front ".concat(x),onClick:function(){d(),!s&&u()},children:a}),Object(i.jsx)("div",{className:"lob-card__face lob-card__face--back ".concat(x),onClick:d,children:r})]})},u=Array.from("abcdefg".toUpperCase()),j=function(){var e=n.a.useState(null),t=Object(o.a)(e,2),c=t[0],l=t[1],a=n.a.useState(u),r=Object(o.a)(a,2),j=r[0],x=r[1],m=n.a.useState([]),f=Object(o.a)(m,2),h=f[0],O=f[1],v=n.a.useState([]),p=Object(o.a)(v,2),g=p[0],y=p[1],w=n.a.useState(null),N=Object(o.a)(w,2),S=N[0],k=N[1],_=h.length===u.length,C=null!==c?j[c]:null,F=function(){localStorage.removeItem("lob_1key"),x(u),O([]),y([]),k(null),l(null)};return n.a.useEffect((function(){var e=parseInt(localStorage.getItem("lob_1key")||"-1",10);l(e>=0?e:null)}),[]),Object(i.jsxs)("div",{className:"flex h-screen",children:[Object(i.jsx)("div",{className:"w-8/12 flex flex-column items-center justify-center",children:null!==c?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"flex flex-row max-h-max",children:[h.map((function(e,t){return Object(i.jsx)(d,{children:Object(i.jsx)(b,{label:e,value:e===C?1:0,status:_?"selected":"default",flipped:g.some((function(t){return t===e})),onFlipped:function(){var t=5===g.length;h[0]!==e&&_&&!t&&y([].concat(Object(s.a)(g),[e])),t?k(e):y([].concat(Object(s.a)(g),[e]))}},t)},t)})),Array.from(Array(u.length-h.length).keys()).map((function(e,t){return Object(i.jsx)(d,{children:Object(i.jsx)(b,{label:"?",value:0,status:"default"},t)},t)}))]}),!!S&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"py-4"}),Object(i.jsx)("div",{className:"flex items-center justify-center",children:Object(i.jsx)("button",{className:"bg-blue-600 px-4 py-2 border-2 border-blue-600 rounded text-white max-w-max",onClick:function(){y([].concat(Object(s.a)(g),[S])),k(null)},children:"Reveal?"})})]}),!_&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"py-4"}),Object(i.jsx)("div",{className:"flex flex-row max-h-max",children:j.map((function(e,t){var c=h.some((function(t){return t===e}));return Object(i.jsx)(d,{children:!c&&Object(i.jsx)(b,{label:e,status:"selected",onSelect:function(){O([].concat(Object(s.a)(h),[e]))}})},t)}))})]})]}):Object(i.jsx)("div",{className:"flex items-center justify-center",children:Object(i.jsx)("button",{className:"bg-blue-600 px-4 py-2 border-2 border-blue-600 rounded text-white max-w-max",onClick:function(){F();var e=Math.floor(7*Math.random());localStorage.setItem("lob_1key",e.toString()),l(e)},children:"START"})})}),Object(i.jsx)("div",{className:"w-4/12 border-l-2 flex justify-center items-center",children:Object(i.jsxs)("div",{className:"w-full flex flex-column justify-center items-center py-6",children:[Object(i.jsx)("div",{className:"text-3xl",children:"Controls"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"flex",children:[].concat(Object(s.a)(h),Object(s.a)(j.filter((function(e){return!h.includes(e)})))).map((function(e,t){return Object(i.jsx)("div",{className:"rounded-xl shadow-md max-h-max w-12 h-12 text-red-600 font-semibold bg-yellow-50 border-2 border-yellow-500 ml-1 mr-1 flex items-center justify-center ".concat(e===C?"bg-yellow-300":""),children:e===C?1:0},t)}))}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"bg-blue-600 px-4 py-2 border-2 border-blue-600 rounded text-white",onClick:function(){return F()},children:"RESET"})]})})]})},x=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(j,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,l=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),l(e),n(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.62b01193.chunk.js.map