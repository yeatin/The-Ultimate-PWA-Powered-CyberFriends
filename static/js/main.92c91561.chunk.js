(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=(n(13),n(5)),l=function(e){var t=e.email,n=e.id,r=e.name;return o.a.createElement("div",{className:"tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,r),o.a.createElement("p",null,t)))},s=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement(l,{key:e.id,id:e.id,name:e.name,email:e.email})})))},u=function(e){e.searchField;var t=e.searchChange;return o.a.createElement("input",{"aria-label":"search robots",className:"pa3 ba b--orange bg-lightest-blue tc mt2",type:"search",placeholder:"search robots",onChange:t})},d=function(e){return o.a.createElement("div",{style:{overflow:"auto",border:"5px solid red",height:"33em",margin:"10px"}},e.children)},h=(n(14),n(1)),f=n(2),m=n(4),b=n(3),v=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(f.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==e.count}},{key:"render",value:function(){return o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(r.Component),p=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"Cyberfriends"),o.a.createElement(v,{color:"red"}))}}]),n}(r.Component),g=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),l=Object(i.a)(c,2),h=l[0],f=l[1],m=Object(r.useState)(0),b=Object(i.a)(m,2),v=b[0],g=b[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);var w=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?o.a.createElement("div",{className:"tc"},o.a.createElement(p,null),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return g(v+1)}},"Click Me")),o.a.createElement(u,{searchChange:function(e){f(e.target.value)}}),o.a.createElement(d,null,o.a.createElement(s,{robots:w}))):o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement("h2",{className:"f1 tc"},"Now loading..."),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return g(v+1)}},"Click Me")))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(15);c.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/The-Ultimate-PWA-Powered-CyberFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/The-Ultimate-PWA-Powered-CyberFriends","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.92c91561.chunk.js.map