(this.webpackJsonpreadhub=this.webpackJsonpreadhub||[]).push([[0],{106:function(e,t,a){e.exports=a(181)},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(45),l=a.n(r),i=(a(111),a(112),a(6)),o=a(7),s=a(9),u=a(8),d=a(10),m=(a(113),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("a",{href:"/"},c.a.createElement("img",{alt:"\u56fe\u6807",src:"https://cdn.readhub.cn/static/assets/png/readhub_logo_m@2x.78b35cd0.png"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"list-content"},c.a.createElement("div",null,c.a.createElement("a",{href:"/",className:"head-link"},"\u70ed\u95e8\u8bdd\u9898")),c.a.createElement("div",null,c.a.createElement("a",{href:"/new",className:"head-link"},"\u79d1\u6280\u52a8\u6001")),c.a.createElement("div",null,c.a.createElement("a",{href:"/tech",className:"head-link"},"\u5f00\u53d1\u8005\u8d44\u8baf"))))}}]),t}(c.a.Component)),h=a(35),f=a(182),b=a(102),p=(a(72),f.a.Panel),E={background:"gray",borderRadius:4,marginBottom:4,border:0,overflow:"hidden"},v={fontSize:"18px"},g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f.a,{bordered:!1,defaultActiveKey:["1"],expandIconPosition:"right",expandIcon:function(e){var t=e.isActive;return c.a.createElement(b.a,{type:"caret-right",rotate:t?90:0})}},this.props.data.map((function(e,t){var a;return c.a.createElement(p,(a={header:e.title,key:"1",style:E},Object(h.a)(a,"style",v),Object(h.a)(a,"key",t+1),a),c.a.createElement("a",{style:E,href:"/".concat(e.id)},c.a.createElement("p",null,e.summary)))}))))}}]),t}(c.a.Component),j=a(12),O=a.n(j),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getMore=function(){Math.ceil(document.documentElement.scrollTop+document.body.clientHeight)>=document.body.scrollHeight&&O.a.get(a.state.url+"?pageSize=16&lastCursor="+a.state.id).then((function(e){var t=e.data.data[15].publishDate,n=a.state.data.concat(e.data.data);a.setState({data:n,id:Date.parse(t)})})).catch((function(e){console.log(e)}))},a.state={data:[],id:"",url:"/topic"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get(this.state.url+"?pageSize=16&lastCursor=").then((function(t){var a=t.data.data[15].publishDate;e.setState({data:t.data.data,id:Date.parse(a)})})).catch((function(e){console.log(e)})),window.addEventListener("scroll",this.getMore)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{data:this.state.data}))}}]),t}(c.a.Component),w=f.a.Panel,k={background:"gray",borderRadius:4,marginBottom:4,border:0,overflow:"hidden"},S={fontSize:"18px"},N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f.a,{bordered:!1,defaultActiveKey:["1"],expandIconPosition:"right",expandIcon:function(e){var t=e.isActive;return c.a.createElement(b.a,{type:"caret-right",rotate:t?90:0})}},this.props.data.map((function(e,t){var a;return c.a.createElement(w,(a={header:e.title,key:"1",style:k},Object(h.a)(a,"style",S),Object(h.a)(a,"key",t+1),a),c.a.createElement("a",{style:k,href:e.url},c.a.createElement("p",null,e.summary)))}))))}}]),t}(c.a.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getMore=function(){Math.ceil(document.documentElement.scrollTop+document.body.clientHeight)>=document.body.scrollHeight&&O.a.get(a.state.url+"?pageSize=16&lastCursor="+a.state.id).then((function(e){var t=e.data.data[15].publishDate,n=a.state.data.concat(e.data.data);a.setState({data:n,id:Date.parse(t)})})).catch((function(e){console.log(e)}))},a.state={data:[],id:"",url:"/technews"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get(this.state.url+"?pageSize=16&lastCursor=").then((function(t){var a=t.data.data[15].publishDate;e.setState({data:t.data.data,id:Date.parse(a)})})).catch((function(e){console.log(e)})),window.addEventListener("scroll",this.getMore)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,{data:this.state.data}))}}]),t}(c.a.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getMore=function(){Math.ceil(document.documentElement.scrollTop+document.body.clientHeight)>=document.body.scrollHeight&&O.a.get(a.state.url+"?pageSize=16&lastCursor="+a.state.id).then((function(e){var t=e.data.data[15].publishDate,n=a.state.data.concat(e.data.data);a.setState({data:n,id:Date.parse(t)})})).catch((function(e){console.log(e)}))},a.state={data:[],id:"",url:"/news"},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get(this.state.url+"?pageSize=16&lastCursor=").then((function(t){var a=t.data.data[15].publishDate;e.setState({data:t.data.data,id:Date.parse(a)})})).catch((function(e){console.log(e)})),window.addEventListener("scroll",this.getMore)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,{data:this.state.data}))}}]),t}(c.a.Component),C=a(48),M=(a(177),a(21));a(178);var z=function(e){return c.a.createElement("div",null,c.a.createElement("hr",null),c.a.createElement("a",{href:e.news.url},c.a.createElement("p",{className:"news-title"},e.news.title),c.a.createElement("p",{className:"news-from"},e.news.siteName)))};a(179);var A=function(e){return c.a.createElement("div",null,c.a.createElement("ul",null,e.more.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:"/".concat(e.id)},c.a.createElement("div",{className:"item-time"},e.createdAt.substring(0,10)),c.a.createElement("div",{className:"item-title"},e.title)))}))))};var H=function(){var e=Object(M.f)().id,t=Object(n.useState)({}),a=Object(C.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)([]),o=Object(C.a)(i,2),s=o[0],u=o[1],d=Object(n.useState)([]),m=Object(C.a)(d,2),h=m[0],f=m[1];return Object(n.useEffect)((function(){O.a.get("topic/"+e).then((function(e){l(e.data),u(e.data.newsArray),f(e.data.timeline.topics)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("p",{className:"detail-title"},"\xb7 ",r.title," \xb7"),c.a.createElement("p",{className:"detail-summary"},r.summary),c.a.createElement("hr",{className:"more-next"}),c.a.createElement("p",{className:"meta-info"},"\u5a92\u4f53\u62a5\u9053"),s.map((function(e,t){return c.a.createElement(z,{news:e,key:t})})),c.a.createElement("br",null),c.a.createElement("p",{className:"meta-info"},"\u76f8\u5173\u4e8b\u4ef6"),c.a.createElement(A,{more:h}))},I=a(67);var B=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement("hr",{className:"Hr"}),c.a.createElement(I.a,null,c.a.createElement(M.c,null,c.a.createElement(M.a,{exact:!0,path:"/"},c.a.createElement(y,null)),c.a.createElement(M.a,{exact:!0,path:"/new"},c.a.createElement(x,null)),c.a.createElement(M.a,{exact:!0,path:"/tech"},c.a.createElement(D,null)),c.a.createElement(M.a,{exact:!0,path:"/:id",children:c.a.createElement(H,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[106,1,2]]]);
//# sourceMappingURL=main.abe0c4ec.chunk.js.map