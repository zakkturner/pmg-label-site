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
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/gsap */ "./node_modules/gsap/dist/gsap.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/SplitText */ "./node_modules/gsap/dist/SplitText.js");
/* harmony import */ var gsap_dist_SplitText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_SplitText__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\components\\hero\\Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_dist_SplitText__WEBPACK_IMPORTED_MODULE_2__["SplitText"]);
function Hero() {
  var playoffs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var musicGroup = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var playSplit = new gsap_dist_SplitText__WEBPACK_IMPORTED_MODULE_2__["SplitText"](playoffs, {
      type: "words, chars"
    });
    var musicSplit = new gsap_dist_SplitText__WEBPACK_IMPORTED_MODULE_2__["SplitText"](musicGroup, {
      type: "words, chars"
    });
    var tl = gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
    tl.from(playSplit.chars, 0.8, {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      rotateX: "45deg",
      ease: "bounce.out",
      delay: 1
    }).from(musicSplit.chars, {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.1
    });
  });
  return __jsx("section", {
    className: "hero section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-container w-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 9
    }
  }, "PlayOffS"), __jsx("h1", {
    className: "hero-heading",
    ref: function ref(el) {
      musicGroup = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Music", __jsx("span", {
    className: "head-span text-span-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, " Group"))), __jsx("div", {
    className: "music-player",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("iframe", {
    src: "https://open.spotify.com/embed/album/1XKYqX42urtlhtnLBEksD8?theme=white",
    width: "400",
    height: "80",
    frameborder: "0",
    allowtransparency: "true",
    allow: "encrypted-media",
    className: "w-inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=main.js.fb6dadd1c28801b033bf.hot-update.js.map