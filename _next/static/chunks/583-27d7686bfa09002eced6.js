(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{7682:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});n(7294);var r=n(5893),o=function(e){var t=e.title,n=e.type,o=void 0===n?"button":n,i=e.disabled,a=void 0!==i&&i,l=e.uiType;return"outlined"===(void 0===l?"primary":l)?(0,r.jsxs)("button",{type:o||"button",disabled:a,className:"disabled:opacity-50 h-16 content-box text-gray-f2f px-11 sm:px-40 rounded-default border-gray-f2f border-2 text-white font-medium box-content capitalize text-h6 hover:shadow-btn-hover-white transition-all",children:[" ",t]}):(0,r.jsx)("button",{type:o||"button",disabled:a,className:"disabled:opacity-50 h-16 text-gray-f2f font-medium px-11 sm:px-40 btn--gradient rounded-default text-button hover:shadow-btn-hover transition-all duration-300 text-h6 capitalize",children:t})}},8148:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var r=n(2809),o=(n(7294),n(6915)),i=n(4666),a=n(4883),l=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(){return(0,l.jsxs)("div",{className:"bg-gray-333 rounded-default overflow-hidden",children:[(0,l.jsxs)("div",{className:"dhwani-cover-bg h-96 flex items-center justify-center overflow-hidden relative",children:[(0,l.jsx)("img",{className:"z-1",src:"/svgs/dhwanilogo.svg",alt:"logo",width:115,height:115}),(0,l.jsx)("h4",{className:"z-1 text-h4 text-gray-f2f font-normal ml-15",children:"Dhwani"})]}),(0,l.jsxs)("div",{className:"p-30",children:[(0,l.jsx)("h6",{className:"text-h6 font-semibold text-gray-f2f mt-20",children:a.vE.firstSectionTitle}),(0,l.jsx)("p",{className:"text-body-lg font-normal text-gray-e0e mt-30",children:a.vE.firstSectionDescription}),(0,l.jsx)("h6",{className:"text-h6 font-semibold text-gray-f2f mt-30 mb-30",children:a.vE.secondSectionTitle}),(0,l.jsx)("div",{className:"grid-feature-container",children:o.R.map((function(e){return(0,l.jsx)(i.T,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({size:"small"},e),e.id)}))})]})]})}},4666:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});n(7294);var r=n(5893),o=function(e){var t=e.Icon,n=e.label,o=e.size,i="large"===(void 0===o?"small":o);return(0,r.jsxs)("div",{className:"bg-gray-444 flex items-center justify-center flex-col ".concat(i?"h-56 max-w-80":"h-48 max-w-60"," rounded-default"),children:[t,i?(0,r.jsx)("h6",{className:"text-h6 font-semibold text-gray-e0e mt-35 text-center",children:n}):(0,r.jsx)("p",{className:"text-body-lg font-normal text-gray-e0e mt-30 md:w-10/12 text-center",children:n})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),l=n(4651),c=n(7426);var s={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),f=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],l=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):l||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,b=e.shallow,m=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var x=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,g=c.useIntersection({rootMargin:"200px"}),j=r(g,2),w=j[0],O=j[1],N=i.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);i.default.useEffect((function(){var e=O&&n&&a.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,O,y,n,o]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:l}))}(e,o,d,p,v,b,m,y)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof y?y:o&&o.locale,z=o&&o.isLocaleDomain&&a.getDomainLocale(p,I,o&&o.locales,o&&o.domainLocales);E.href=z||a.addBasePath(a.addLocale(p,I,o&&o.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=o.useRef(),s=o.useState(!1),u=r(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var l=new Map},6915:function(e,t,n){"use strict";n.d(t,{R:function(){return u},w:function(){return f}});var r=n(8193),o=n(1724),i=n(3750),a=n(471),l=n(7516),c=n(3854),s=n(5893),u=[{id:"1",Icon:(0,s.jsx)(r.VB9,{size:40,fill:"#777777"}),label:"AI generated voices"},{id:"2",Icon:(0,s.jsx)(o.QN,{height:60}),label:"SAAS based solution"},{id:"3",Icon:(0,s.jsx)(c.xHd,{size:60,fill:"#777777"}),label:"One-click install"},{id:"4",Icon:(0,s.jsx)(l._6r,{size:60,fill:"#777777"}),label:"Easy integration"},{id:"5",Icon:(0,s.jsx)(a.Kt7,{size:60,fill:"#777777",color:"#777777"}),label:"Insights based dashboard"},{id:"6",Icon:(0,s.jsx)(i.aL5,{size:60,fill:"#777777"}),label:"50% cost reduction in training"}],f=[{id:"1",Icon:(0,s.jsx)(r.VB9,{size:80,fill:"#777777"}),label:"AI generated voices"},{id:"2",Icon:(0,s.jsx)(o.QN,{height:80}),label:"SAAS based solution"},{id:"3",Icon:(0,s.jsx)(c.xHd,{size:80,fill:"#777777"}),label:"One-click install"},{id:"4",Icon:(0,s.jsx)(l._6r,{size:80,fill:"#777777"}),label:"Easy integration"},{id:"5",Icon:(0,s.jsx)(a.Kt7,{size:80,fill:"#777777",color:"#777777"}),label:"Insights based \n dashboard"},{id:"6",Icon:(0,s.jsx)(i.aL5,{size:80,fill:"#777777"}),label:"50% cost reduction in training"}]},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}}]);