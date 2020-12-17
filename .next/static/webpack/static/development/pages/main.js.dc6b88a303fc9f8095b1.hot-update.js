webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./components/roster/RosterProfile/RosterProfile.js":
/*!**********************************************************!*\
  !*** ./components/roster/RosterProfile/RosterProfile.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RosterProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RosterProfile.module.scss */ "./components/roster/RosterProfile/RosterProfile.module.scss");
/* harmony import */ var _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Stats_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Stats/Stats */ "./components/roster/Stats/Stats.js");
/* harmony import */ var _Bios_Bios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Bios/Bios */ "./components/roster/Bios/Bios.js");
var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\components\\roster\\RosterProfile\\RosterProfile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function RosterProfile(_ref) {
  var _this = this;

  var albumData = _ref.albumData,
      biosData = _ref.biosData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var tabs = [{
    name: "Stats"
  }, {
    name: "Bio"
  }];

  var handleClick = function handleClick(i) {
    setIndex(i);
  };

  return __jsx("div", {
    className: _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subNav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, tabs.map(function (tab, i) {
    return __jsx("li", {
      className: _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
      onClick: function onClick() {
        return handleClick(i);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, tab.name);
  }))), __jsx("div", {
    className: _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.profileContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, index === 0 && __jsx("div", {
    className: _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.statsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(_Stats_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    albumData: albumData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), index === 1 && __jsx("div", {
    className: _RosterProfile_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.biosContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(_Bios_Bios__WEBPACK_IMPORTED_MODULE_3__["default"], {
    biosData: biosData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=main.js.dc6b88a303fc9f8095b1.hot-update.js.map