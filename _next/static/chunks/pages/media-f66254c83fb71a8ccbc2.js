(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},o=r(1063),s=r(4651),i=r(7426);var c={};function u(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=s.useRouter(),f=l.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),r=n(t,2),l=r[0],s=r[1];return{href:l,as:e.as?o.resolveHref(a,e.as):s||l}}),[a,e.href,e.as]),d=f.href,h=f.as,m=e.children,p=e.replace,x=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var y=(t=l.default.Children.only(m))&&"object"===typeof t&&t.ref,b=i.useIntersection({rootMargin:"200px"}),j=n(b,2),w=j[0],N=j[1],_=l.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);l.default.useEffect((function(){var e=N&&r&&o.isLocalURL(d),t="undefined"!==typeof g?g:a&&a.locale,n=c[d+"%"+h+(t?"%"+t:"")];e&&!n&&u(a,d,h,{locale:t})}),[h,d,N,g,r,a]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,l,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](r,n,{shallow:l,locale:i,scroll:s}))}(e,a,d,h,p,x,v,g)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof g?g:a&&a.locale,k=a&&a.isLocaleDomain&&o.getDomainLocale(h,O,a&&a.locales,a&&a.domainLocales);E.href=k||o.addBasePath(o.addLocale(h,O,a&&a.defaultLocale))}return l.default.cloneElement(t,E)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,i=a.useRef(),c=a.useState(!1),u=n(c,2),f=u[0],d=u[1],h=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,l=n.observer,o=n.elements;return o.set(e,t),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return a.useEffect((function(){if(!o&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=r(7294),l=r(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},3666:function(e,t,r){"use strict";r.r(t);r(7294);var n=r(5774),a=r(7063),l=r(9008),o=r(3750),s=r(6963),i=r(1664),c=r(4883),u=r(5893);t.default=function(){return(0,u.jsxs)("div",{className:"main_layout",children:[(0,u.jsx)(l.default,{children:(0,u.jsx)("title",{children:"Media | Dynopii | Redefining the way you communicate."})}),(0,u.jsx)(n.h,{}),(0,u.jsxs)("section",{className:"media-section-bg min-h-screen",children:[(0,u.jsxs)("div",{className:"mx-auto px-30 pt-140",style:{maxWidth:"1200px"},children:[(0,u.jsx)("h3",{className:"text-white font-semibold text-h3 mb-30",children:c.$A.title}),(0,u.jsx)("h6",{className:"text-h6 font-normal text-gray-f2f mb-25 w-7/12 lg:w-9/12 sm:w-10/12",children:c.$A.upperParagraph}),(0,u.jsx)("h6",{className:"text-h6 font-normal text-gray-f2f mb-60 w-7/12 lg:w-9-12 sm:w-10/12",children:c.$A.lowerParagraph}),(0,u.jsx)(i.default,{href:c.$A.link.href,children:(0,u.jsx)("a",{children:(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("p",{className:"text-body-lg text-brand font-medium mr-10",children:c.$A.link.title}),(0,u.jsx)(o.lzl,{size:22,fill:s.O.brand})]})})})]}),(0,u.jsx)("div",{className:"mx-auto",style:{maxWidth:"1200px",paddingTop:"280px"},children:(0,u.jsx)("a",{href:c.$A.featured.href,target:"_blank",rel:"noreferrer",children:(0,u.jsxs)("div",{className:"mx-auto p-30 mb-10",children:[(0,u.jsx)("h3",{className:"font-light text-gray-e0e text-h3 mb-50",children:c.$A.featured.title}),(0,u.jsxs)("div",{className:"p-20 lg:p-30 bg-gray-333 hover:bg-gray-444 transition-all flex items-center rounded-default lg:flex-col",children:[(0,u.jsx)("div",{className:"overflow-hidden w-7/12 lg:w-auto",children:(0,u.jsx)("img",{src:c.$A.featured.photo,className:"object-cover rounded-default",style:{aspectRatio:"2"},alt:c.$A.featured.title})}),(0,u.jsxs)("div",{className:"ml-20 lg:ml-0 lg:mt-20 w-5/12 lg:w-auto",children:[(0,u.jsx)("h5",{className:"font-normal text-h5 text-white mb-15",children:c.$A.featured.blogTitle}),(0,u.jsx)("p",{className:"font-normal text-body-lg text-gray-e0e",children:c.$A.featured.description}),(0,u.jsx)("p",{className:"mt-35 font-normal text-gray-f2f text-body-sm",children:c.$A.featured.publishedAt})]})]})]})})}),(0,u.jsxs)("div",{id:"all-appreances",className:"mx-auto p-30 pt-60 mb-70",style:{maxWidth:"1200px"},children:[(0,u.jsx)("h3",{className:"font-light text-gray-e0e text-h3 mb-50",children:c.$A.allAppearances.title}),(0,u.jsx)("div",{className:"grid-small-blogs-container",children:c.t7.map((function(e){var t=e.date,r=e.id,n=e.image,a=e.title,l=e.href;return(0,u.jsx)("a",{className:"h-full",href:l,target:"_blank",rel:"noreferrer",children:(0,u.jsxs)("div",{className:"p-20 lg:p-30 bg-gray-333 hover:bg-gray-444 transition-all rounded-default h-full",children:[(0,u.jsxs)("div",{className:"overflow-hidden rounded-default w-full h-40 md:h-auto",children:[" ",(0,u.jsx)("img",{className:"w-full h-full object-cover",src:n,alt:"Blog - ".concat(a)})]}),(0,u.jsx)("h6",{className:"text-h6 font-normal text-white mt-30 mb-10",children:a}),(0,u.jsx)("p",{className:"text-body-lg font-light text-gray-bdb",children:t})]})},r)}))})]})]}),(0,u.jsx)(a.$_,{})]})}},6061:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/media",function(){return r(3666)}])},9008:function(e,t,r){e.exports=r(639)},1664:function(e,t,r){e.exports=r(2167)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),i(e.child))}))}function c(e){return function(t){return n.createElement(u,o({attr:o({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var r,a=e.attr,l=e.size,i=e.title,c=s(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[445,617,13,184,774,888,179],(function(){return t=6061,e(e.s=t);var t}));var t=e.O();_N_E=t}]);