webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/styles/main.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./public/styles/main.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#fp-nav ul li a span,\n.fp-slidesNav ul li a span {\n  background: #ffc331 !important; }\n\n#fp-nav.fp-show-active a.active + .fp-tooltip,\n#fp-nav ul li:hover .fp-tooltip {\n  color: #ffc331 !important;\n  font-weight: 600; }\n\n.fp-controlArrow.fp-next {\n  border-color: transparent transparent transparent #ffc331 !important;\n  border-width: 21.5px 0 21.5px 34px !important;\n  display: none; }\n\n.fp-controlArrow.fp-prev {\n  border-color: transparent #ffc331 transparent transparent !important;\n  border-width: 21.5px 34px 21.5px 0 !important;\n  display: none; }\n\n.fp-slidesNav.fp-bottom {\n  bottom: 170px !important; }\n\n#fp-nav ul,\n.fp-slidesNav ul {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%); }\n\n.hero {\n  background-attachment: fixed; }\n\n.section {\n  border-radius: 0; }\n\n.music-player {\n  position: fixed;\n  z-index: 999;\n  bottom: 0; }\n", "",{"version":3,"sources":["C:/Users/Zak/Documents/Code/pmg-label-site/public/styles/main.scss"],"names":[],"mappings":"AAAA;;EAEE,8BAA8B,EAAA;;AAEhC;;EAEE,yBAAyB;EACzB,gBAAgB,EAAA;;AAIlB;EACE,oEAAoE;EACpE,6CAA6C;EAC7C,aAAa,EAAA;;AAGf;EACE,oEAAoE;EACpE,6CAA6C;EAC7C,aAAa,EAAA;;AAIf;EACE,wBAAwB,EAAA;;AAI1B;;EAEE,kBAAkB;EAClB,SAAS;EAET,0BAA0B,EAAA;;AAG5B;EACE,4BAA4B,EAAA;;AAG9B;EACE,gBAAgB,EAAA;;AAGlB;EACE,eAAe;EACf,YAAY;EACZ,SAAS,EAAA","file":"main.scss","sourcesContent":["#fp-nav ul li a span,\r\n.fp-slidesNav ul li a span {\r\n  background: #ffc331 !important;\r\n}\r\n#fp-nav.fp-show-active a.active + .fp-tooltip,\r\n#fp-nav ul li:hover .fp-tooltip {\r\n  color: #ffc331 !important;\r\n  font-weight: 600;\r\n}\r\n\r\n// slider arrows\r\n.fp-controlArrow.fp-next {\r\n  border-color: transparent transparent transparent #ffc331 !important;\r\n  border-width: 21.5px 0 21.5px 34px !important;\r\n  display: none;\r\n}\r\n\r\n.fp-controlArrow.fp-prev {\r\n  border-color: transparent #ffc331 transparent transparent !important;\r\n  border-width: 21.5px 34px 21.5px 0 !important;\r\n  display: none;\r\n}\r\n\r\n// bottom dots container\r\n.fp-slidesNav.fp-bottom {\r\n  bottom: 170px !important;\r\n}\r\n// bottom dots\r\n\r\n#fp-nav ul,\r\n.fp-slidesNav ul {\r\n  position: absolute;\r\n  left: 50%;\r\n\r\n  transform: translate(-50%);\r\n}\r\n\r\n.hero {\r\n  background-attachment: fixed;\r\n}\r\n\r\n.section {\r\n  border-radius: 0;\r\n}\r\n\r\n.music-player {\r\n  position: fixed;\r\n  z-index: 999;\r\n  bottom: 0;\r\n}\r\n"]}]);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_webflow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/webflow.css */ "./css/webflow.css");
/* harmony import */ var _css_webflow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_webflow_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles/main.scss */ "./public/styles/main.scss");
/* harmony import */ var _public_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-label-site\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./public/styles/main.scss":
/*!*********************************!*\
  !*** ./public/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/styles/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/styles/main.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/styles/main.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.cb52114277367119b3c2.hot-update.js.map