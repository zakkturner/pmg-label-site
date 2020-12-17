webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./components/roster/Roster.js":
/*!*************************************!*\
  !*** ./components/roster/Roster.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Roster; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Roster_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roster.module.scss */ "./components/roster/Roster.module.scss");
/* harmony import */ var _Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/gsap */ "./node_modules/gsap/dist/gsap.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RosterCard_RosterCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RosterCard/RosterCard */ "./components/roster/RosterCard/RosterCard.js");
/* harmony import */ var _data_albumData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/albumData */ "./components/roster/data/albumData.js");
/* harmony import */ var _data_biosData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/biosData */ "./components/roster/data/biosData.js");
/* harmony import */ var _RosterProfile_RosterProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RosterProfile/RosterProfile */ "./components/roster/RosterProfile/RosterProfile.js");
var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\components\\roster\\Roster.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"]);

function Roster() {
  var one = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var two = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var three = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var four = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var roster = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var sections = [one, two, three, four];
    gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: roster,
        // markers: true,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: function end() {
          return "+=" + document.querySelector("#roster").offsetWidth;
        }
      }
    });
  });
  return __jsx("section", {
    id: "roster",
    className: " ".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.roster, " section"),
    ref: function ref(el) {
      roster = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.panel, " ").concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.one),
    ref: function ref(el) {
      one = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rosterTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "Our Roster")), __jsx("div", {
    className: "".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.panel, " ").concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.player),
    ref: function ref(el) {
      two = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_RosterCard_RosterCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    background: "images/obHeadshot.png",
    name: "Orange Beanie",
    position: "Rapper",
    number: "#16",
    bgColor: "#006BB6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(_RosterProfile_RosterProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    albumData: _data_albumData__WEBPACK_IMPORTED_MODULE_5__["albumData"][0].albums,
    biosData: _data_biosData__WEBPACK_IMPORTED_MODULE_6__["biosData"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.panel, " ").concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.player),
    ref: function ref(el) {
      three = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_RosterCard_RosterCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    background: "images/johs.png",
    name: "Jerry Owens",
    position: "Rapper",
    number: "#3",
    bgColor: "#ce1141",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(_RosterProfile_RosterProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    albumData: _data_albumData__WEBPACK_IMPORTED_MODULE_5__["albumData"][1].albums,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.panel, " ").concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.player),
    ref: function ref(el) {
      four = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_RosterCard_RosterCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    background: "images/obHeadshot.png",
    name: "Lord Ward",
    position: "Producer",
    number: "#2",
    bgColor: "#552583",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(_RosterProfile_RosterProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=main.js.86d6b0ae4f2c594c477d.hot-update.js.map