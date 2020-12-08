webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./components/hero/Hero.js":
/*!*********************************!*\
  !*** ./components/hero/Hero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/SplitText */ "./node_modules/gsap/SplitText.js");
var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\components\\hero\\Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__["SplitText"]);
function Hero() {
  var playoffs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var playSplit = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__["SplitText"](playoffs, {
    type: "words, chars"
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].from(playSplit.chars, 0.8, {
      x: 200,
      opacity: 0
    });
  });
  return __jsx("section", {
    className: "hero section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-container w-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "hero-heading",
    ref: function ref(el) {
      playoffs = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "PlayOffS", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), "Music ", __jsx("span", {
    className: "head-span text-span-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Group"))));
}

/***/ })

})
//# sourceMappingURL=main.js.441fb81733ec998981fe.hot-update.js.map