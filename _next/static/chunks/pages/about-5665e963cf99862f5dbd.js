(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},l=r(1063),s=r(4651),c=r(7426);var i={};function u(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=s.useRouter(),f=o.default.useMemo((function(){var t=l.resolveHref(a,e.href,!0),r=n(t,2),o=r[0],s=r[1];return{href:o,as:e.as?l.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,m=f.as,h=e.children,p=e.replace,x=e.shallow,v=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var b=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),w=n(j,2),g=w[0],O=w[1],N=o.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);o.default.useEffect((function(){var e=O&&r&&l.isLocalURL(d),t="undefined"!==typeof y?y:a&&a.locale,n=i[d+"%"+m+(t?"%"+t:"")];e&&!n&&u(a,d,m,{locale:t})}),[m,d,O,y,r,a]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:s}))}(e,a,d,m,p,x,v,y)},onMouseEnter:function(e){l.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof y?y:a&&a.locale,_=a&&a.isLocaleDomain&&l.getDomainLocale(m,k,a&&a.locales,a&&a.domainLocales);E.href=_||l.addBasePath(l.addLocale(m,k,a&&a.defaultLocale))}return o.default.cloneElement(t,E)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,c=a.useRef(),i=a.useState(!1),u=n(i,2),f=u[0],d=u[1],m=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,l=n.elements;return l.set(e,t),o.observe(e),function(){l.delete(e),o.unobserve(e),0===l.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return a.useEffect((function(){if(!l&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[m,f]};var a=r(7294),o=r(3447),l="undefined"!==typeof IntersectionObserver;var s=new Map},2781:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});r(7294);var n=r(5774),a=r(7063),o=r(9008),l=r(3750),s=r(6963),c=r(1664),i=r(2809),u=r(4883),f=r(8193),d=r(9583),m=r(5893),h=function(e){var t=e.link,r=e.photo,n=e.name,a=e.description,o=e.twitter,l=e.linkedin;return(0,m.jsxs)("div",{className:"mt-70 md:mt-40 w-40 mx-50 sm:mx-20",children:[(0,m.jsx)(c.default,{href:t,children:(0,m.jsx)("a",{children:(0,m.jsx)("div",{className:"overflow-hidden rounded-default w-40 h-40",children:(0,m.jsx)("img",{src:s.v+r,className:"object-cover w-full h-full",alt:n})})})}),(0,m.jsx)(c.default,{href:t,children:(0,m.jsx)("a",{children:(0,m.jsx)("h5",{className:"text-gray-f2f text-h5 font-semibold mt-25 w-40",children:n})})}),a&&(0,m.jsx)("p",{className:"text-gray-bdb font-normal text-body-sm mt-10 w-40",children:a}),(0,m.jsxs)("div",{className:"flex items-center mt-5",children:[o&&(0,m.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:(0,m.jsx)(f.h3E,{size:15,fill:s.O.twitter})}),l&&(0,m.jsx)("a",{href:l,className:o?"ml-15":"",target:"_blank",rel:"noreferrer",children:(0,m.jsx)(d.BUd,{size:15,fill:s.O.linkedin})})]})]})};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x=function(){return(0,m.jsx)("section",{id:"our-team",className:"",children:(0,m.jsxs)("div",{className:"mx-auto md:px-30 pt-64",style:{maxWidth:"1200px"},children:[(0,m.jsx)("h3",{className:"text-h3 font-semibold text-gray-e0e mb-40 text-center",children:u.d$.teamsSection.title}),(0,m.jsx)("h6",{className:"text-h6 font-light text-gray-e0e text-center w-7/12 mx-auto md:w-full",children:u.d$.teamsSection.description}),(0,m.jsx)("div",{className:"flex justify-center flex-wrap mb-20 md:max-w-full mx-auto",children:u.vn.map((function(e,t){return(0,m.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.id)}))})]})})},v=function(){return(0,m.jsxs)("div",{className:"main_layout",children:[(0,m.jsx)(o.default,{children:(0,m.jsx)("title",{children:"About Us | Dynopii | Redefining the way you communicate."})}),(0,m.jsx)(n.h,{}),(0,m.jsxs)("section",{className:"about-us-section-bg min-h-screen",children:[(0,m.jsxs)("div",{className:"mx-auto px-30 pt-140 sm:pt-90",style:{maxWidth:"1200px"},children:[(0,m.jsx)("h3",{className:"text-white font-semibold text-h3 mb-30",children:u.d$.title}),(0,m.jsx)("h6",{className:"text-h6 font-normal text-gray-f2f mb-25 w-7/12 lg:w-9/12 sm:w-10/12",children:u.d$.upperParagraph}),(0,m.jsx)("h6",{className:"text-h6 font-normal text-gray-f2f mb-60 w-7/12 lg:w-9-12 sm:w-10/12",children:u.d$.lowerParagraph}),(0,m.jsx)(c.default,{href:u.d$.link.href,children:(0,m.jsx)("a",{children:(0,m.jsxs)("div",{className:"flex items-center",children:[(0,m.jsx)("p",{className:"text-body-lg text-brand font-medium mr-10",children:u.d$.link.title}),(0,m.jsx)(l.lzl,{size:22,fill:s.O.brand})]})})})]}),(0,m.jsx)(x,{})]}),(0,m.jsx)(a.$_,{})]})}},4613:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(2781)}])},9008:function(e,t,r){e.exports=r(639)},1664:function(e,t,r){e.exports=r(2167)},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function i(e){return function(t){return n.createElement(u,l({attr:l({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,c=e.title,i=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[445,617,13,184,774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);