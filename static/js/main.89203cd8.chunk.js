(this["webpackJsonpreact-timeline-exercise"]=this["webpackJsonpreact-timeline-exercise"]||[]).push([[0],{138:function(t,e,n){"use strict";n.r(e);var r=n(29),i=n.n(r),c=n(73),a=n.n(c),o=n(28),s=n.n(o),u=n(41),p=n(34),l=n(43),d=(n(82),n(75)),j=n(22),b=n(74),f=n(55),h=n(26),O=n(8),m=n(19),v=function(t){var e=t.events,n=t.className,r=void 0===n?"":n;return Object(m.jsx)("ul",{className:"tam-timeline "+r,children:e.map((function(t,e){return Object(m.jsx)(x,{time:t.time,title:t.title,description:t.description,position:t.position,popIn:0===e},t.key)}))})},x=function(t){return Object(m.jsx)("li",{className:"tam-timeline-event ".concat(t.position),children:Object(m.jsxs)("article",{className:t.popIn?"pop-in":"",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("span",{className:"timeline-title",children:t.title}),Object(m.jsx)("span",{className:"timeline-time",children:t.time})]}),t.description]})})},w=function(t){return Object(O.pipe)(Object(j.head)(t),h.map(Object(O.flow)(Object(f.prop)("position"),(function(t){return"right"===t?"left":"right"}))),h.getOrElse((function(){return"right"})))},g=function(t){return Object(O.pipe)(Object(j.head)(t),h.map(Object(O.flow)(Object(f.prop)("key"),Object(d.add)(1))),h.getOrElse((function(){return 0})))},k=n(23),y=n(76),N=function(){var t=Object(u.a)(s.a.mark((function t(){var e,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:return e=t.sent,n=e.author,r=e.content,t.abrupt("return",{time:I(),title:n,description:r});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){return(new Date).toLocaleTimeString()},T=function(){var t=Object(u.a)(s.a.mark((function t(){var e,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.quotable.io/random",t.next=3,new y.Fetcher("https://api.quotable.io/random").handle(200,(function(t){return{author:t.author,content:t.content}})).discardRest((function(){return{author:"An error occurred.",content:"This quote couldn't be retrieved."}})).run();case 3:return e=t.sent,n=Object(p.a)(e,1),r=n[0],t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=k.e({author:k.d,content:k.d}),S=(k.b([E,k.e({_id:k.d,tags:k.a(k.d),authorSlug:k.d,length:k.c,dateAdded:k.d,dateModified:k.d})]),function(){var t=function(t){var e=t.initial,n=t.max,i=void 0===n?5:n,c=e?[Object(l.a)(Object(l.a)({},e),{},{key:0,position:"right"})]:[],a=Object(r.useState)(c),o=Object(p.a)(a,2),s=o[0],u=o[1];return[s,function(t){var e=w(s),n=g(s),r=Object(l.a)(Object(l.a)({},t),{},{position:e,key:n}),c=Object(O.pipe)(s,Object(j.prepend)(r),Object(b.slice)(0)(i));u(c)}]}({initial:{time:I(),title:"Tam",description:"This is the first event. The next one will appear in 20s!"}}),e=Object(p.a)(t,2),n=e[0],i=e[1];return Object(r.useEffect)((function(){var t=setInterval(function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=i,t.next=3,N();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),2e4);return function(){return clearInterval(t)}})),Object(m.jsx)("main",{style:{maxWidth:1100,margin:"auto"},children:Object(m.jsx)(v,{events:n})})});a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))},82:function(t,e,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.89203cd8.chunk.js.map