webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./components/menu.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\components\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Header() {
  // State of our Menu
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    initial: false,
    clicked: null,
    menuName: "Menu"
  }),
      state = _useState[0],
      setState = _useState[1]; // State of our button


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      disabled = _useState2[0],
      setDisabled = _useState2[1];

  var handleMenu = function handleMenu() {
    disableMenu();

    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
      console.log(1);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
      console.log(2);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
      console.log(3);
    }
  }; //Determine if out menu button should be disabled


  var disableMenu = function disableMenu() {
    setDisabled(!disabled);
    setTimeout(function () {
      setDisabled(false);
    }, 1200);
  };

  return __jsx("div", {
    "data-collapse": "medium",
    "data-animation": "default",
    "data-duration": "400",
    className: "nav-bar w-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("script", {
    src: "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e7cf138d6fc4513ca1fca73",
    type: "text/javascript",
    integrity: "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })), __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://use.fontawesome.com/releases/v5.0.2/css/all.css",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })), __jsx(_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    state: state,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-93270026" + " " + "w-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "index.html",
    "aria-current": "page",
    className: "jsx-93270026" + " " + "brand-link w-nav-brand w--current",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./logo.png",
    width: "117",
    srcSet: "./images/logo-p-500.png 500w, images/logo.png 640w",
    sizes: "117px",
    alt: "logo",
    className: "jsx-93270026" + " " + "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4164027654",
    __self: this
  }, ".brand-link.jsx-93270026{width:100%;z-index:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxjb21wb25lbnRzXFxoZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0ZvQixBQUd3QixXQUNDLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxaYWtcXERvY3VtZW50c1xcQ29kZVxccG1nLXNpdGVcXGNvbXBvbmVudHNcXGhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFJbnN0YWdyYW0gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgLy8gU3RhdGUgb2Ygb3VyIE1lbnVcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGluaXRpYWw6IGZhbHNlLFxyXG4gICAgY2xpY2tlZDogbnVsbCxcclxuICAgIG1lbnVOYW1lOiBcIk1lbnVcIlxyXG4gIH0pO1xyXG4gIC8vIFN0YXRlIG9mIG91ciBidXR0b25cclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudSA9ICgpID0+IHtcclxuICAgIGRpc2FibGVNZW51KCk7XHJcbiAgICBpZiAoc3RhdGUuaW5pdGlhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIGluaXRpYWw6IG51bGwsXHJcbiAgICAgICAgY2xpY2tlZDogdHJ1ZSxcclxuICAgICAgICBtZW51TmFtZTogXCJDbG9zZVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygxKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgY2xpY2tlZDogIXN0YXRlLmNsaWNrZWQsXHJcbiAgICAgICAgbWVudU5hbWU6IFwiTWVudVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygyKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIGNsaWNrZWQ6ICFzdGF0ZS5jbGlja2VkLFxyXG4gICAgICAgIG1lbnVOYW1lOiBcIkNsb3NlXCJcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKDMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vRGV0ZXJtaW5lIGlmIG91dCBtZW51IGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWRcclxuICBjb25zdCBkaXNhYmxlTWVudSA9ICgpID0+IHtcclxuICAgIHNldERpc2FibGVkKCFkaXNhYmxlZCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgfSwgMTIwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgZGF0YS1jb2xsYXBzZT1cIm1lZGl1bVwiXHJcbiAgICAgIGRhdGEtYW5pbWF0aW9uPVwiZGVmYXVsdFwiXHJcbiAgICAgIGRhdGEtZHVyYXRpb249XCI0MDBcIlxyXG4gICAgICBjbGFzc05hbWU9XCJuYXYtYmFyIHctbmF2XCJcclxuICAgID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9kM2U1NHYxMDNqOHFiYi5jbG91ZGZyb250Lm5ldC9qcy9qcXVlcnktMy40LjEubWluLjIyMGFmZDc0M2QuanM/c2l0ZT01ZTdjZjEzOGQ2ZmM0NTEzY2ExZmNhNzNcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEyNTYtQ1NYb3JYdlpjVGthaXg2WXZvNkhwcGNaR2V0YllNR1dTRmxCdzhIZkNKbz1cIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4wLjIvY3NzL2FsbC5jc3NcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVudSBzdGF0ZT17c3RhdGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1jb250YWluZXJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2luZGV4XCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaW5kZXguaHRtbFwiXHJcbiAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJicmFuZC1saW5rIHctbmF2LWJyYW5kIHctLWN1cnJlbnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiLi9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMTdcIlxyXG4gICAgICAgICAgICAgIHNyY1NldD1cIi4vaW1hZ2VzL2xvZ28tcC01MDAucG5nIDUwMHcsIGltYWdlcy9sb2dvLnBuZyA2NDB3XCJcclxuICAgICAgICAgICAgICBzaXplcz1cIjExN3B4XCJcclxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5icmFuZC1saW5rIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPG5hdiByb2xlPVwibmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cIm5hdi1tZW51IHctbmF2LW1lbnVcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcm9zdGVyXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5Sb3N0ZXI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL211c2ljXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5NdXNpYzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZWZpbG1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGlua1wiPkdhbWVGaWxtPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGlua1wiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1idXR0b24gdy1jbGVhcmZpeCB3LW5hdi1idXR0b25cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtdGV4dFwiPk1FTlU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uIHctaWNvbi1uYXYtbWVudVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Zak\\\\Documents\\\\Code\\\\pmg-site\\\\components\\\\header.js */"), __jsx("nav", {
    role: "navigation",
    className: "jsx-93270026" + " " + "nav-menu w-nav-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/roster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-93270026" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "Roster")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/music",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-93270026" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Music")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/gamefilm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-93270026" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "GameFilm")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-93270026" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-93270026" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Contact"))), __jsx("div", {
    disabled: disabled,
    onClick: handleMenu,
    className: "jsx-93270026" + " " + "menu-button w-clearfix w-nav-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-93270026" + " " + "menu-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "MENU"), __jsx("div", {
    className: "jsx-93270026" + " " + "menu-icon w-icon-nav-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2413566597",
    __self: this
  }, ".menu-button.jsx-93270026{z-index:100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxjb21wb25lbnRzXFxoZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUhvQixBQUd5QixZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxjb21wb25lbnRzXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhSW5zdGFncmFtIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIC8vIFN0YXRlIG9mIG91ciBNZW51XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbml0aWFsOiBmYWxzZSxcclxuICAgIGNsaWNrZWQ6IG51bGwsXHJcbiAgICBtZW51TmFtZTogXCJNZW51XCJcclxuICB9KTtcclxuICAvLyBTdGF0ZSBvZiBvdXIgYnV0dG9uXHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBkaXNhYmxlTWVudSgpO1xyXG4gICAgaWYgKHN0YXRlLmluaXRpYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICBpbml0aWFsOiBudWxsLFxyXG4gICAgICAgIGNsaWNrZWQ6IHRydWUsXHJcbiAgICAgICAgbWVudU5hbWU6IFwiQ2xvc2VcIlxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coMSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgIGNsaWNrZWQ6ICFzdGF0ZS5jbGlja2VkLFxyXG4gICAgICAgIG1lbnVOYW1lOiBcIk1lbnVcIlxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coMik7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICBjbGlja2VkOiAhc3RhdGUuY2xpY2tlZCxcclxuICAgICAgICBtZW51TmFtZTogXCJDbG9zZVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0RldGVybWluZSBpZiBvdXQgbWVudSBidXR0b24gc2hvdWxkIGJlIGRpc2FibGVkXHJcbiAgY29uc3QgZGlzYWJsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXREaXNhYmxlZCghZGlzYWJsZWQpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgIH0sIDEyMDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGRhdGEtY29sbGFwc2U9XCJtZWRpdW1cIlxyXG4gICAgICBkYXRhLWFuaW1hdGlvbj1cImRlZmF1bHRcIlxyXG4gICAgICBkYXRhLWR1cmF0aW9uPVwiNDAwXCJcclxuICAgICAgY2xhc3NOYW1lPVwibmF2LWJhciB3LW5hdlwiXHJcbiAgICA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vZDNlNTR2MTAzajhxYmIuY2xvdWRmcm9udC5uZXQvanMvanF1ZXJ5LTMuNC4xLm1pbi4yMjBhZmQ3NDNkLmpzP3NpdGU9NWU3Y2YxMzhkNmZjNDUxM2NhMWZjYTczXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMjU2LUNTWG9yWHZaY1RrYWl4Nll2bzZIcHBjWkdldGJZTUdXU0ZsQnc4SGZDSm89XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC4yL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lbnUgc3RhdGU9e3N0YXRlfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleFwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImluZGV4Lmh0bWxcIlxyXG4gICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJhbmQtbGluayB3LW5hdi1icmFuZCB3LS1jdXJyZW50XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi4vbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTE3XCJcclxuICAgICAgICAgICAgICBzcmNTZXQ9XCIuL2ltYWdlcy9sb2dvLXAtNTAwLnBuZyA1MDB3LCBpbWFnZXMvbG9nby5wbmcgNjQwd1wiXHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCIxMTdweFwiXHJcbiAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYnJhbmQtbGluayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxuYXYgcm9sZT1cIm5hdmlnYXRpb25cIiBjbGFzc05hbWU9XCJuYXYtbWVudSB3LW5hdi1tZW51XCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Jvc3RlclwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+Um9zdGVyPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9tdXNpY1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+TXVzaWM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2dhbWVmaWxtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5HYW1lRmlsbTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGlua1wiPkFib3V0PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtYnV0dG9uIHctY2xlYXJmaXggdy1uYXYtYnV0dG9uXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXRleHRcIj5NRU5VPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaWNvbiB3LWljb24tbmF2LW1lbnVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Zak\\\\Documents\\\\Code\\\\pmg-site\\\\components\\\\header.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.847e166b465a46645c26.hot-update.js.map