(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){},44:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(11),a(3)),s=a(4),l=a(6),u=a(5),m=a(8),h=(a(17),a(1));var d=function(t){var e=t.handleInput,a=t.handleFormSubmit,n=t.imgName;return Object(h.jsxs)("form",{className:"SearchForm",onSubmit:a,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{value:n,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:e})]})},g=(a(19),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={imgName:""},t.handleInput=function(e){var a=e.currentTarget.value;t.setState({imgName:a})},t.handleFormSubmit=function(e){e.preventDefault(),""!==t.state.imgName.trim()?(t.props.onSubmit(t.state.imgName),t.setState({imgName:""})):m.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e.")},t}return Object(s.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsx)(d,{handleFormSubmit:this.handleFormSubmit,handleInput:this.handleInput,imgName:this.state.imgName})})}}]),a}(n.Component)),j=a(9),b=a(2),p=a.n(b);a(22);var f=function(t){var e=t.id,a=t.alt,n=t.webformatURL,r=t.largeImageURL,o=t.onClick,c=t.scrollStatus,i={id:e,alt:a,largeImageURL:r};return Object(h.jsxs)("li",{className:"ImageGalleryItem",onClick:function(){o(i)},children:[Object(h.jsx)("img",{src:n,alt:a,"data-imglarge":r,className:"ImageGalleryItem-image"}),c&&void setTimeout((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),100)]},e)};a(23);var v=function(t){var e=t.handleLoadMoreButton;return Object(h.jsx)("button",{type:"button",className:"Button",onClick:function(){return e()},children:"Load more"})},O=(a(24),a(12)),S=a.n(O);a(43);var y=function(t,e){return fetch("".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(e,"&").concat("key=22260377-843feab13a68cee38d30608c2","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.json()}))},C="idle",x="pending",w="resolved",N="rejected",k=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={imgCards:[],error:null,status:C,page:1,scrollStatus:!1},t.handleLoadMoreButton=function(){t.setState((function(t){return{page:t.page+1,scrollStatus:!0}}))},t.changeStatusScrooll=function(e){(0,t.props.onCLickImg)(e),t.setState({scrollStatus:!1})},t}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(t,e){var a=this,n=t.imgName,r=this.props.imgName;if(n!==r){this.setState({status:x});var o=this.state.page;y(r,o).then((function(t){var e=t.hits;if(0===e.length)return a.setState({status:C}),m.b.error("\u041d\u0435 \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a !!!");a.setState({imgCards:Object(j.a)(e),status:w})})).catch((function(t){return a.setState({error:t,status:N})}))}var c=e.page,i=this.state.page;c!==i&&y(r,i).then((function(t){var e=t.hits;a.setState({imgCards:[].concat(Object(j.a)(a.state.imgCards),Object(j.a)(e)),status:w})})).catch((function(t){return a.setState({error:t,status:N})}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.status,n=e.imgCards,r=e.error,o=e.scrollStatus;return"idle"===a?null:"pending"===a?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)(S.a,{type:"Bars",color:"#00BFFF",height:80,width:80,timeout:3e3})}):"resolved"===a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"ImageGallery",children:n.map((function(e){var a=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(h.jsx)(f,{id:a,alt:c,webformatURL:n,largeImageURL:r,onClick:t.changeStatusScrooll,scrollStatus:o},a)}))}),Object(h.jsx)(v,{handleLoadMoreButton:this.handleLoadMoreButton})]}):"rejected"===a?Object(h.jsx)("h2",{children:r.message}):void 0}}]),a}(n.Component);k.propType={img:p.a.string.isRequired,onCLickImg:p.a.func.isRequired};var I=k,L=(a(44),document.querySelector("#modal-root")),F=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).handleKeyDown=function(e){"Escape"===e.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),t.props.onClose())},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this.props.imgInfo;return Object(o.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:t.largeImageURL,alt:t.alt})})}),L)}}]),a}(n.Component),M=(a(45),function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={imgName:null,showModal:!1,src:null},t.onSubmit=function(e){t.setState({imgName:e})},t.toggleModal=function(e){t.setState((function(t){return{showModal:!t.showModal,src:e}}))},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state,e=t.showModal,a=t.src;return Object(h.jsxs)("div",{className:"App",children:[e&&Object(h.jsx)(F,{onClose:this.toggleModal,imgInfo:a}),Object(h.jsx)(m.a,{autoClose:3e3}),Object(h.jsx)(g,{onSubmit:this.onSubmit}),Object(h.jsx)(I,{imgName:this.state.imgName,onCLickImg:this.toggleModal})]})}}]),a}(n.Component)),B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),o(t),c(t)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),B()}},[[46,1,2]]]);
//# sourceMappingURL=main.8a6234c7.chunk.js.map