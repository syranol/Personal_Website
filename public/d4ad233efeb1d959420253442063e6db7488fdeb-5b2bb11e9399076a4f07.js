(self.webpackChunkseanlo_netlify_com=self.webpackChunkseanlo_netlify_com||[]).push([[336],{4333:function(e,t,r){"use strict";var a=r(4994);t.A=void 0;var i,n=a(r(2475)),s=a(r(6221)),l=a(r(4893)),o=a(r(4634)),d=a(r(6540)),c=a(r(5556)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=g(t||r||[]);return a&&a.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),r=p(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),r&&d.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function x(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function k(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function L(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+l+r+a+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=d.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(R,(0,o.default)({ref:t,src:r},n,{ariaHidden:s}));return a.length>1?d.default.createElement("picture",null,i(a),l):l})),R=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,m=e.draggable,p=e.ariaHidden,g=(0,l.default)(e,u);return d.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:r,srcSet:a,src:i},g,{onLoad:s,onError:c,ref:t,loading:f,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&b(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&E&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,S=e.loading,O=e.draggable,L=p||h;if(!L)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,o.default)({opacity:j?1:0,transition:I?"opacity "+y+"ms":"none"},l),z="boolean"==typeof b?"lightgray":b,V={transitionDelay:y+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&V,l,u),T={title:t,alt:this.state.isVisible?"":r,style:H,className:m,itemProp:E},W=this.state.isHydrated?g(L):L[0];if(p)return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&V)}),W.base64&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:T,imageVariants:L,generateSources:k}),W.tracedSVG&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:T,imageVariants:L,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(R,{alt:r,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:r,title:t,loading:S},W,{imageVariants:L}))}}));if(h){var _=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},I&&V)}),W.base64&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:T,imageVariants:L,generateSources:k}),W.tracedSVG&&d.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:T,imageVariants:L,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(R,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:r,title:t,loading:S},W,{imageVariants:L}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,r,a){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[r]=e,i),t,"prop",a)}}I.propTypes={resolutions:P,sizes:z,fixed:V(c.default.oneOfType([P,c.default.arrayOf(P)])),fluid:V(c.default.oneOfType([z,c.default.arrayOf(z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=I;t.A=H},1017:function(e,t,r){"use strict";r.d(t,{A:function(){return f}});var a=r(6540),i=r(8027),n=r(4194);const s=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about/"},{id:5,text:"contact",url:"/contact/"}].map((e=>a.createElement("li",{key:e.id},a.createElement(n.Link,{to:e.url},e.text))));var l=e=>{let{styleClass:t}=e;return a.createElement("ul",{className:"page-links "+(t||"")},s)};var o=e=>{let{toggleSidebar:t}=e;return a.createElement("nav",{className:"navbar"},a.createElement("div",{class:"nav-center"},a.createElement("div",{class:"nav-header"},a.createElement(n.Link,{to:"/"},a.createElement("h3",{class:"navbar-title"},a.createElement("span",null," Sean"),a.createElement("span",{class:"navbar-lastname"}," Lo "))),a.createElement("button",{type:"button",className:"toggle-btn",onClick:t},a.createElement(i.v$9,null))),a.createElement(l,{styleClass:"nav-links"})))},d=r(3302);var c=e=>{let{isOpen:t,toggleSidebar:r}=e;return a.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},a.createElement("button",{className:"close-btn",onClick:r},a.createElement(i.QCr,null)),a.createElement("div",{class:"side-container"},a.createElement(l,{styleClass:t?"sidebar-links":""}),a.createElement(d.A,{styleClass:t?"sidebar-icons":""})))};var u=()=>a.createElement("footer",{className:"footer"},a.createElement("div",null,a.createElement(d.A,{styleClass:"footer-links"}),a.createElement("h4",null,a.createElement("span",null,"Designed & Built by Sean Lo "))));var f=e=>{let{children:t}=e;const[r,i]=a.useState(!1),n=()=>{i(!r)};return a.createElement(a.Fragment,null,a.createElement(o,{toggleSidebar:n}),a.createElement(c,{isOpen:r,toggleSidebar:n}),t,a.createElement(u,null))}},9695:function(e,t,r){"use strict";var a=r(6540);t.A=e=>{let{title:t}=e;return a.createElement("div",{className:"section-title"},a.createElement("h2",null,t||"default title"),a.createElement("div",{className:"underline"}))}},3302:function(e,t,r){"use strict";var a=r(6540),i=r(8027);const n=[{id:1,icon:a.createElement(i.QEs,{className:"social-icon"}),url:"https://www.linkedin.com/in/syranol"},{id:2,icon:a.createElement(i.g3s,{className:"social-icon"}),url:"https://www.github.com/syranol"},{id:3,icon:a.createElement(i.ub,{className:"social-icon"}),url:"https://syranol.github.io/markdown-cv/"},{id:4,icon:a.createElement(i.xF4,{className:"social-icon"}),url:"https://www.instagram.com/syranol"}].map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:e.url,className:"social-link"},e.icon))));t.A=e=>{let{styleClass:t}=e;return a.createElement("ul",{className:"social-links "+(t||"")},n)}},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4893:function(e){e.exports=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i},e.exports.__esModule=!0,e.exports.default=e.exports},2225:function(e,t,r){"use strict";r.d(t,{k5:function(){return m}});var a=r(6540),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(i),s=["attr","size","title"];function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>a.createElement(e.tag,c({key:t},e.attr),f(e.child))))}function m(e){return t=>a.createElement(p,o({attr:c({},e.attr)},t),f(e.child))}function p(e){var t=t=>{var r,{attr:i,size:n,title:d}=e,u=l(e,s),f=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),d&&a.createElement("title",null,d),e.children)};return void 0!==n?a.createElement(n.Consumer,null,(e=>t(e))):t(i)}}}]);
//# sourceMappingURL=d4ad233efeb1d959420253442063e6db7488fdeb-5b2bb11e9399076a4f07.js.map