!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("prop-types"),require("@feizheng/noop")):"function"==typeof define&&define.amd?define(["react","classnames","prop-types","@feizheng/noop"],t):"object"==typeof exports?exports.table=t(require("react"),require("classnames"),require("prop-types"),require("@feizheng/noop")):e.table=t(e.react,e.classnames,e["prop-types"],e["@feizheng/noop"])}(window,(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},18:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1),i=n.n(u),a=n(2),l=n.n(a);n(3);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=(e.className,e.striped),n=(e.rowKey,e.items,e.columns,e.template,e.templateColumn,f(e,["className","striped","rowKey","items","columns","template","templateColumn"]));return o.a.createElement("table",p({className:i()("table",{"table-striped":t},i.a)},n),o.a.createElement("thead",null,o.a.createElement("tr",null,this.columnView)),o.a.createElement("tbody",null,this.childView))}},{key:"columnView",get:function(){var e=this.props,t=e.columns,n=e.templateColumn;return t.map((function(e,t){return n({item:e,index:t})}))}},{key:"childView",get:function(){var e=this.props,t=e.rowKey,n=e.items,r=e.columns,u=e.template;return n.map((function(e,n){return console.log(e[t]),o.a.createElement("tr",{key:e[t]},r.map((function(t){return u({item:e,column:t,index:n})})))}))}}])&&s(n.prototype,r),u&&s(n,u),t}(o.a.Component);d(h,"displayName","table"),d(h,"propsTypes",{striped:l.a.bool,rowKey:l.a.string,columns:l.a.array,items:l.a.array,templateColumn:l.a.func,template:l.a.func}),d(h,"defaultProps",{rowKey:"id",columns:[],items:[],templateColumn:function(e){var t=e.item;return o.a.createElement("th",{key:t.key},t.label)},template:function(e){var t=e.item,n=e.column;return o.a.createElement("td",{key:n.key},t[n.dataIndex])}});t.default=h},2:function(e,t){e.exports=n},3:function(e,t){e.exports=r}})}));