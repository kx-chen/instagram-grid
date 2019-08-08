(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},30:function(e,t,n){e.exports=n(42)},36:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(19),s=n.n(r),l=(n(14),n(5)),o=n(6),c=n(8),u=n(7),d=n(9),m=n(21),h=n(13),p=n(20),g=n.n(p),f=n(26),b=(n(36),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return 0!==this.props.inProgress&&(e=i.a.createElement("p",null,"Progress: ",this.props.done," / ",this.props.inProgress)),this.props.show?i.a.createElement("div",{className:"plan"},i.a.createElement("h3",null,"Plan Feed"),i.a.createElement("input",{type:"file",id:"single",onChange:this.props.onChange,multiple:"multiple",title:"Add Images"}),e):null}}]),t}(a.Component)),E=n(15),y=n(17),A=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(y.a,{id:"some_unique_identifier"},i.a.createElement(y.c,{data:{delete:"single"},onClick:this.props.handleClick},"Delete"),i.a.createElement(y.c,{data:{delete:"all"},onClick:this.props.handleClick},"Clear All")))}}]),t}(a.Component),O=(n(39),n(27)),v=n.n(O),j=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"gallery-item",style:this.props.style},i.a.createElement(y.b,{id:"some_unique_identifier",style:{height:"100%"},keyId:this.props.keyId},i.a.createElement("img",{src:this.props.src,onClick:function(){return e.props.handleClick(e.props.keyId)},className:"gallery-image",alt:"",id:this.props.keyId})))}}]),t}(a.Component),k=Object(E.SortableElement)(function(e){var t=e.value,n=e.disabled;return i.a.createElement(j,{src:t.src,keyId:t.id,selected:!1,disabled:n})}),w={display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"auto auto auto",gridGap:"2px"},S=Object(E.SortableContainer)(function(e){var t=e.items,n=e.disabled;return i.a.createElement("div",{style:w},t.map(function(e,t){return i.a.createElement(k,{key:"item-".concat(t),index:t,value:e,disabled:n})}))}),C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSortEnd=function(e){var t=e.oldIndex,a=e.newIndex;n.setState({images:Object(E.arrayMove)(n.state.images,t,a)}),localStorage.setItem("images",JSON.stringify(n.state.images))},n.state={images:[],selected:[],uploading:!1,inProgress:0,disabled:!1},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("images");if(e){var t=JSON.parse(e);this.setState({images:t})}}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(b,{show:!0,title:"Feed Planner",onChange:this.addImage.bind(this),done:this.state.done,inProgress:this.state.inProgress}),i.a.createElement("div",{className:"gallery"},i.a.createElement(S,{items:this.state.images,disabled:this.state.disabled,onSortEnd:this.onSortEnd,axis:"xy",useWindowAsScrollContainer:!0})),i.a.createElement(A,{handleClick:this.handleDelete.bind(this)}))}},{key:"handleDelete",value:function(e,t){if(console.log("handleDelete data",t),"single"===t.delete){var n=this.state.images.filter(function(e){return!(e.id===parseInt(t.target.id))});this.setState(function(e){return{images:n}}),localStorage.setItem("images",JSON.stringify(this.state.images))}else"all"===t.delete&&(this.setState({images:[]}),localStorage.setItem("images",""))}},{key:"addImage",value:function(e){var t=this;Array.from(e.target.files).forEach(function(){var e=Object(f.a)(g.a.mark(function e(n){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.imageFileResizer(n,300,300,"JPEG",100,0,function(e){t.setState(function(t,n){return{uploading:!1,pics:t.images.push({id:t.images.length,src:e}),done:t.done+1}}),document.getElementById("single").value=""},"base64");case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}]),t}(a.Component),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={open:n.props.open},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.open?i.a.createElement("ul",{className:"TopBar-dropdown"},i.a.createElement("li",null,i.a.createElement("p",null,"Settings")),i.a.createElement("hr",null),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"https://github.com/kx-chen",rel:"noopener noreferrer"},"Developer")),i.a.createElement("li",null,i.a.createElement("a",{target:"_blank",href:"https://forms.gle/5F1UWdv5L6YAbAnAA",rel:"noopener noreferrer"},"Feedback"))):null}}]),t}(a.Component),M=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={settingsMenuOpen:!1},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"TopBar"},i.a.createElement("img",{id:"settings-toggle",onClick:this.toggleSettings.bind(this),"data-toggle":"tooltip",title:"Settings",height:"26",alt:"Settings Cog",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAHlBMVEVMaXGIi4+Ah4yCh4yDiI2BhoyBh4yBh4yAh4yAhouZAMq8AAAACXRSTlMAG8FYOd+D86AAMG8OAAABF0lEQVRYw+1X2RKDIAw0gXD8/w+3djwiFQ3DtuMD+yqsIceyTNPAwMADkPKG1EWUFaiDx2si30HkNJHrIAqaKGBy3Zdt1kTcuJlSWOvjoiaKa5IoJDJGwfMef4hnhsyFc2yLbimUhJBPkIJYSyjZBGkq+BVumoGilSiSvXGukcyzdQdvbcClDd37DOTOvrQEJNtvvTSEROViVhmlMii5SHex+Li0+A2TvY/8xclvRUUNKtdrEQ0qt/ekqwpmNMmuVNWezJP2wRZR/VKJ/yVCHc2Dko0qP6ghUSMCG1qYjMCEDSe1MPHHXUewCxJ3Ze8m4jRdwW4ilK35Co5bbA3OaMGs30/MKMwewww77AlBmugZz6yBgQEQXgplKz7I4pSzAAAAAElFTkSuQmCC"}),i.a.createElement(I,{open:this.state.settingsMenuOpen}))}},{key:"toggleSettings",value:function(){var e=this;this.setState(function(t,n){return{settingsMenuOpen:!e.state.settingsMenuOpen}})}}]),t}(a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return window.hsp.init({useTheme:!1}),window.hsp.getAuth(function(e){console.log(e)}),i.a.createElement(m.a,{basename:"/instagram-grid"},i.a.createElement(M,null),i.a.createElement(m.b,{to:"/",className:"App-link"},"Home"),i.a.createElement(h.a,{path:"/",exact:!0,render:function(){return i.a.createElement(C,null)}}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.91768159.chunk.js.map