!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("prop-types"),require("@feizheng/noop")):"function"==typeof define&&define.amd?define(["react","classnames","prop-types","@feizheng/noop"],t):"object"==typeof exports?exports.checkbox=t(require("react"),require("classnames"),require("prop-types"),require("@feizheng/noop")):e.checkbox=t(e.react,e.classnames,e["prop-types"],e["@feizheng/noop"])}(window,(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),u=n.n(a),c=n(2),i=n.n(c),l=n(3),f=n.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return r=this,o=(e=d(t)).call.apply(e,[this].concat(u)),n=!o||"object"!==p(o)&&"function"!=typeof o?h(r):o,g(h(n),"onChange",(function(e){var t=n.props.onChange,r=e.target;t({target:{value:r.checked,name:r.name,dataset:r.dataset}})})),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=(e.className,e.label),n=(e.onChange,e.defaultValue),r=e.value,a=b(e,["className","label","onChange","defaultValue","value"]);return o.a.createElement("div",{className:u()("form-checkbox","checkbox",u.a)},o.a.createElement("label",null,o.a.createElement("input",s({type:"checkbox",defaultChecked:n,checked:r},a,{onChange:this.onChange})),t))}}])&&y(n.prototype,r),a&&y(n,a),t}(o.a.Component);g(v,"displayName","form-checkbox"),g(v,"propsTypes",{label:i.a.string,defaultValue:i.a.bool,value:i.a.bool}),g(v,"defaultProps",{onChange:f.a});t.default=v}])}));