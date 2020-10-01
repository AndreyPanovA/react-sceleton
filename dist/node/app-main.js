exports.ids=[5],exports.modules={136:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(6),o=n.n(c),i=n(0),l=n.n(i),u=n(71),s=n(22),f=n(75),p=n(288),v=n(72),m=n(74),h=n(11),d=n.n(h),y=n(12),R=n.n(y),g=n(31),E=n.n(g),b=n(26),k=n.n(b),C=n(27),_=n.n(C),O=n(14),j=n.n(O),N=n(2),w=n.n(N),x=n(1),T=n.n(x),D=n(24),A=n.n(D),L=n(28);n(296);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j()(e);if(t){var a=j()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _()(this,n)}}var S=function(e){k()(n,e);var t=P(n);function n(){var e;d()(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a)),w()(E()(e),"state",{isOpen:!0}),w()(E()(e),"handleClick",(function(){var t=e.state.isOpen,n=e.props.disabled;e.setState({isOpen:n?t:!t})})),e}return R()(n,[{key:"render",value:function(){var e=this.state.isOpen,t=this.props,n=t.theme,r=t.title,a=t.children,c=t.disabled;return l.a.createElement("div",{className:Object(L.a)("Accordion",n),onClick:this.onClick,disabled:c},l.a.createElement("div",{className:Object(L.a)("Accordion__header",n),onClick:this.handleClick},l.a.createElement("div",{className:"Accordion__title"},r)),l.a.createElement("div",{className:A()("Accordion__collapse",{Accordion__collapse_open:e})},l.a.createElement("div",{className:"Accordion__body"},a)))}}]),n}(i.Component);w()(S,"propTypes",{children:T.a.node,onClick:T.a.func,title:T.a.node,theme:T.a.oneOfType([T.a.string,T.a.array]),disabled:T.a.bool}),w()(S,"defaultProps",{disabled:!1,theme:"default"});var H=S;n(292);t.default=l.a.memo((function(){var e={showInfo:Object(i.useCallback)(o()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.open("info",{overflowTransparent:!1,overflowClose:!0});case 2:e.sent;case 3:case"end":return e.stop()}}),e)}))),[])};return l.a.createElement(f.a,{header:l.a.createElement(p.a,null)},l.a.createElement(v.a,null,l.a.createElement("h1",null,"Главная страница"),l.a.createElement("p",null,l.a.createElement(u.a,{to:"/private"},"Раздел для авторизованных")),l.a.createElement("p",null,l.a.createElement(m.a,{onClick:e.showInfo},"Показать модалку")),l.a.createElement(H,{title:"Заголовок"},"text for accordion, with other components, ex. ",l.a.createElement(m.a,null,"Button"))))}))},288:function(e,t,n){"use strict";var r=n(11),a=n.n(r),c=n(12),o=n.n(c),i=n(31),l=n.n(i),u=n(26),s=n.n(u),f=n(27),p=n.n(f),v=n(14),m=n.n(v),h=n(2),d=n.n(h),y=n(0),R=n.n(y),g=n(1),E=n.n(g),b=n(33),k=n(29),C=n(19),_=n(32),O=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},j=function(e,t){var n=t.pathname,r=null;return e.map((function(e){return e.active=new RegExp("^".concat(O(e.to+"/"))).test(n+"/"),e.active&&(r&&(r.active=!1),r=e),e}))},N=n(24),w=n.n(N),x=n(72),T=n(28);n(289);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var A=function(e){s()(n,e);var t=D(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){var e=this.props,t=e.left,n=e.children,r=e.right,a=e.center,c=e.theme;return R.a.createElement("div",{className:Object(T.a)("LayoutHeader",c)},R.a.createElement(x.a,null,R.a.createElement("div",{className:"LayoutHeader__wrap"},R.a.createElement("div",{className:"LayoutHeader__left"},t),R.a.createElement("div",{className:"LayoutHeader__center"},n||a),R.a.createElement("div",{className:"LayoutHeader__right"},r))))}}]),n}(y.Component);d()(A,"propTypes",{children:E.a.node,left:E.a.node,right:E.a.node,center:E.a.node,theme:E.a.oneOfType([E.a.string,E.a.array])}),d()(A,"defaultProps",{theme:""});var L=A,P=n(71);n(290);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var H=function(e){s()(n,e);var t=S(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){var e=this.props.items;return R.a.createElement("div",{className:"MenuTop"},R.a.createElement("ul",{className:"MenuTop__list"},e.map((function(e,t){return R.a.createElement("li",{key:t,className:w()("MenuTop__item ",{MenuTop__item_active:e.active})},R.a.createElement(P.a,{to:e.to,className:"MenuTop__link"},e.title))}))))}}]),n}(y.Component);d()(H,"propTypes",{items:E.a.arrayOf(E.a.shape({title:E.a.string,to:E.a.string,active:E.a.bool})).isRequired,theme:E.a.oneOfType([E.a.string,E.a.array])}),d()(H,"defaultProps",{});var q=H,M=n(74);n(291);function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var $=function(e){s()(n,e);var t=K(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){var e=this.props,t=e.to,n=e.title;return R.a.createElement(P.a,{className:Object(T.a)("Logo",this.props.theme),to:t,title:n},"Skeleton")}}]),n}(y.Component);d()($,"propTypes",{to:E.a.string,title:E.a.string,theme:E.a.oneOfType([E.a.string,E.a.array])}),d()($,"defaultProps",{to:"/",title:"",theme:""});var I=$;function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var U=function(e){s()(n,e);var t=B(n);function n(e){var r;return a()(this,n),r=t.call(this,e),d()(l()(r),"onClickLogin",(function(){r.props.history.push("/login")})),d()(l()(r),"onClickLogout",(function(){_.a.clear()})),r.state={items:j([{title:"Главная",to:"/",active:!1},{title:"О нас",to:"/about",active:!1},{title:"Каталог",to:"/catalog",active:!1},{title:"Редактор каталога",to:"/catalog-editor",active:!1},{title:"Админка",to:"/private",active:!1}],e.location)},r}return o()(n,[{key:"componentDidUpdate",value:function(e){var t=this.state.items;this.props.location!==e.location&&this.setState({items:j(t,e.location)})}},{key:"renderRight",value:function(){var e=[];return this.props.session.exists?e.push(R.a.createElement(M.a,{key:1,theme:["clear-white","margins"],onClick:this.onClickLogout},"Выход")):e.push(R.a.createElement(M.a,{key:1,theme:["clear-white","margins"],onClick:this.onClickLogin},"Вход")),e}},{key:"render",value:function(){var e=this.state.items;return R.a.createElement(L,{left:R.a.createElement(I,null),right:this.renderRight(),center:R.a.createElement(q,{items:e})})}}]),n}(y.Component);d()(U,"propTypes",{dispatch:E.a.func.isRequired,location:E.a.object.isRequired,history:E.a.object.isRequired,session:E.a.object.isRequired});t.a=Object(k.compose)(C.g,Object(b.b)((function(e){return{session:e.session}})))(U)},289:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){},292:function(e,t,n){},296:function(e,t,n){},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(19),a=n(13),c=n(0),o=n.n(c),i=n(15),l=(n(1),n(4)),u=n(9),s=n(17);o.a.Component;o.a.Component;var f=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?Object(i.c)(e,null,null,t):e},v=function(e){return e},m=o.a.forwardRef;void 0===m&&(m=v);var h=m((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,c=Object(u.a)(e,["innerRef","navigate","onClick"]),i=c.target,s=Object(l.a)({},c,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=v!==m&&t||n,o.a.createElement("a",s)}));var d=m((function(e,t){var n=e.component,a=void 0===n?h:n,c=e.replace,i=e.to,d=e.innerRef,y=Object(u.a)(e,["component","replace","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var n=e.history,r=p(f(i,e.location),e.location),u=r?n.createHref(r):"",h=Object(l.a)({},y,{href:u,navigate:function(){var t=f(i,e.location);(c?n.replace:n.push)(t)}});return v!==m?h.ref=t||d:h.innerRef=d,o.a.createElement(a,h)}))})),y=function(e){return e},R=o.a.forwardRef;void 0===R&&(R=y);R((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,c=e.activeClassName,i=void 0===c?"active":c,v=e.activeStyle,m=e.className,h=e.exact,g=e.isActive,E=e.location,b=e.sensitive,k=e.strict,C=e.style,_=e.to,O=e.innerRef,j=Object(u.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var n=E||e.location,c=p(f(_,n),n),u=c.pathname,N=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),w=N?Object(r.f)(n.pathname,{path:N,exact:h,sensitive:b,strict:k}):null,x=!!(g?g(w,n):w),T=x?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(m,i):m,D=x?Object(l.a)({},C,{},v):C,A=Object(l.a)({"aria-current":x&&a||null,className:T,style:D,to:c},j);return y!==R?A.ref=t||O:A.innerRef=O,o.a.createElement(d,A)}))}))}};