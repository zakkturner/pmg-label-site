webpackHotUpdate("static\\development\\pages\\index.js",{

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
var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-label-site\\components\\roster\\Roster.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"]);

function Roster() {
  return __jsx("section", {
    id: "roster",
    className: " ".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.roster, " section") // ref={(el) => {
    //   roster = el;
    // }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.panel, " ").concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.one, " slide") // ref={(el) => {
    //   one = el;
    // }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rosterTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Our ", __jsx("span", {
    className: _Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titleColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "Roster"))), __jsx("div", {
    className: "".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.panel, " ").concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.player, " slide"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(_RosterProfile_RosterProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    albumData: _data_albumData__WEBPACK_IMPORTED_MODULE_5__["albumData"][0].albums,
    biosData: _data_biosData__WEBPACK_IMPORTED_MODULE_6__["biosData"][0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.panel, " ").concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.player, " slide") // ref={(el) => {
    //   three = el;
    // }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(_RosterProfile_RosterProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    albumData: _data_albumData__WEBPACK_IMPORTED_MODULE_5__["albumData"][1].albums,
    biosData: _data_biosData__WEBPACK_IMPORTED_MODULE_6__["biosData"][1],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.panel, " ").concat(_Roster_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.player, " slide") // ref={(el) => {
    //   four = el;
    // }}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 63,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.0049038485743d3b72d1.hot-update.js.map