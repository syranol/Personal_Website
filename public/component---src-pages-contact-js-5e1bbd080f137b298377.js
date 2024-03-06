"use strict";(self.webpackChunkseanlo_netlify_com=self.webpackChunkseanlo_netlify_com||[]).push([[209],{1017:function(e,t,r){r.d(t,{A:function(){return b}});var n=r(6540),a=r(8027),l=r(4194);const c=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about/"},{id:5,text:"contact",url:"/contact/"}].map((e=>n.createElement("li",{key:e.id},n.createElement(l.Link,{to:e.url},e.text))));var o=e=>{let{styleClass:t}=e;return n.createElement("ul",{className:"page-links "+(t||"")},c)};var s=e=>{let{toggleSidebar:t}=e;return n.createElement("nav",{className:"navbar"},n.createElement("div",{class:"nav-center"},n.createElement("div",{class:"nav-header"},n.createElement(l.Link,{to:"/"},n.createElement("h3",{class:"navbar-title"},n.createElement("span",null," Sean"),n.createElement("span",{class:"navbar-lastname"}," Lo "))),n.createElement("button",{type:"button",className:"toggle-btn",onClick:t},n.createElement(a.v$9,null))),n.createElement(o,{styleClass:"nav-links"})))},i=r(3302);var m=e=>{let{isOpen:t,toggleSidebar:r}=e;return n.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},n.createElement("button",{className:"close-btn",onClick:r},n.createElement(a.QCr,null)),n.createElement("div",{class:"side-container"},n.createElement(o,{styleClass:t?"sidebar-links":""}),n.createElement(i.A,{styleClass:t?"sidebar-icons":""})))};var u=()=>n.createElement("footer",{className:"footer"},n.createElement("div",null,n.createElement(i.A,{styleClass:"footer-links"}),n.createElement("h4",null,n.createElement("span",null,"Designed & Built by Sean Lo "))));var b=e=>{let{children:t}=e;const[r,a]=n.useState(!1),l=()=>{a(!r)};return n.createElement(n.Fragment,null,n.createElement(s,{toggleSidebar:l}),n.createElement(m,{isOpen:r,toggleSidebar:l}),t,n.createElement(u,null))}},3302:function(e,t,r){var n=r(6540),a=r(8027);const l=[{id:1,icon:n.createElement(a.QEs,{className:"social-icon"}),url:"https://www.linkedin.com/in/syranol"},{id:2,icon:n.createElement(a.g3s,{className:"social-icon"}),url:"https://www.github.com/syranol"},{id:3,icon:n.createElement(a.ub,{className:"social-icon"}),url:"https://syranol.github.io/markdown-cv/"},{id:4,icon:n.createElement(a.xF4,{className:"social-icon"}),url:"https://www.instagram.com/syranol"}].map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:e.url,className:"social-link"},e.icon))));t.A=e=>{let{styleClass:t}=e;return n.createElement("ul",{className:"social-links "+(t||"")},l)}},5351:function(e,t,r){r.r(t);var n=r(6540),a=r(1017);t.default=()=>n.createElement(a.A,null,n.createElement("section",{className:"contact-page"},n.createElement("article",{className:"contact-form"},n.createElement("h3",null,"Get in touch"),n.createElement("form",{action:"https://formspree.io/mqkyqkvp",method:"POST"},n.createElement("div",{class:"form-group"},n.createElement("input",{type:"text",placeholder:"name",name:"name",className:"form-control"}),n.createElement("input",{type:"email",name:"email",placeholder:"email",className:"form-control"}),n.createElement("textarea",{name:"message",rows:"5",placeholder:"message",className:"form-control"})),n.createElement("button",{type:"submit",className:"submit-btn btn"},"Submit here")))))},2225:function(e,t,r){r.d(t,{k5:function(){return f}});var n=r(6540),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),c=["attr","size","title"];function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return e&&e.map(((e,t)=>n.createElement(e.tag,m({key:t},e.attr),b(e.child))))}function f(e){return t=>n.createElement(p,s({attr:m({},e.attr)},t),b(e.child))}function p(e){var t=t=>{var r,{attr:a,size:l,title:i}=e,u=o(e,c),b=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-5e1bbd080f137b298377.js.map