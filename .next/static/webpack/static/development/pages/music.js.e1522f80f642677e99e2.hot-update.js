webpackHotUpdate("static\\development\\pages\\music.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\components\\menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Menu(_ref) {
  var state = _ref.state;
  var menu = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var revealMenu = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var revealMenuBackground = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (state.clicked === false) {
      // close menu
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(menu, {
        duration: 1,
        css: {
          display: "none"
        }
      });
    } else if (state.clicked === true || state.clicked === true && state.initial === null) {
      // open menu
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(menu, {
        duration: 0,
        css: {
          display: "block"
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(revealMenuBackground, revealMenu);
    }
  }, [state]);

  var staggerReveal = function staggerReveal(node1, node2) {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].from([node1, node2], {
      duration: 0.8,
      height: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 0.02
      }
    });
  };

  return __jsx("section", {
    ref: function ref(el) {
      menu = el;
    },
    className: "jsx-1861609679" + " " + "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("div", {
    ref: function ref(el) {
      revealMenuBackground = el;
    },
    className: "jsx-1861609679" + " " + "menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: function ref(el) {
      revealMenu = el;
    },
    className: "jsx-1861609679" + " " + "menu-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("nav", {
    role: "navigation",
    className: "jsx-1861609679" + " " + "menu-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1861609679" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/roster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1861609679" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "Roster")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/music",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1861609679" + " " + "nav-link w-nav-link menu-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "Music")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/gamefilm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1861609679" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "GameFilm")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1861609679" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-1861609679" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "Contact"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1861609679",
    __self: this
  }, ".menu.jsx-1861609679{display:none;z-index:9;top:0;left:0;right:0;position:fixed;height:100%;width:100%;}.menu-button.jsx-1861609679{position:absolute;z-index:20;right:10%;top:50%;}.menu-wrapper.jsx-1861609679{width:100%;height:100%;background-color:black;position:absolute;overflow:hidden;}.menu-container.jsx-1861609679{width:100%;height:100vh;background-color:black;}.menu-nav.jsx-1861609679{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;z-index:2;}a.jsx-1861609679{font-size:50px;}a.jsx-1861609679:hover{color:#ec1c23;}.close-menu.jsx-1861609679{color:white;background-color:black;font-size:40px;position:absolute;right:5%;top:5%;z-index:10;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;}.close-menu.jsx-1861609679:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxjb21wb25lbnRzXFxtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGa0IsQUFHd0IsQUFVSyxBQU1QLEFBVUEsQUFNRSxBQVVFLEFBSUQsQUFJRixBQVVGLFVBQ1osQ0E1Q2MsQUFVQyxDQXdCVSxDQWxEYixDQThDWixDQUpBLEdBaENhLEtBVEwsQUFnQmlCLENBVUEsS0F6QmhCLEFBU0csTUF3Q0ssQ0FoRFAsR0FTQSxLQVJPLEVBY0csQ0FMcEIsQUFlQSxHQXdCb0IsU0EvQ04sS0FpQkksSUErQlAsR0EvQ0UsR0EwQlcsR0FzQmYsR0EvQlQsRUFoQkEsRUFnRGEsV0FDaUIseURBdkJqQixPQXdCYixJQXZCYyxZQUNXLG1HQUNMLGtCQUNSLFVBQ1oiLCJmaWxlIjoiQzpcXFVzZXJzXFxaYWtcXERvY3VtZW50c1xcQ29kZVxccG1nLXNpdGVcXGNvbXBvbmVudHNcXG1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSh7IHN0YXRlIH0pIHtcclxuICBsZXQgbWVudSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgcmV2ZWFsTWVudSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgcmV2ZWFsTWVudUJhY2tncm91bmQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUuY2xpY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8gY2xvc2UgbWVudVxyXG4gICAgICBnc2FwLnRvKFtyZXZlYWxNZW51LCByZXZlYWxNZW51QmFja2dyb3VuZF0sIHtcclxuICAgICAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiLFxyXG4gICAgICAgIHN0YWdnZXI6IHtcclxuICAgICAgICAgIGFtb3VudDogMC4wN1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGdzYXAudG8obWVudSwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGNzczogeyBkaXNwbGF5OiBcIm5vbmVcIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgc3RhdGUuY2xpY2tlZCA9PT0gdHJ1ZSB8fFxyXG4gICAgICAoc3RhdGUuY2xpY2tlZCA9PT0gdHJ1ZSAmJiBzdGF0ZS5pbml0aWFsID09PSBudWxsKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIG9wZW4gbWVudVxyXG4gICAgICBnc2FwLnRvKG1lbnUsIHtcclxuICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICBjc3M6IHsgZGlzcGxheTogXCJibG9ja1wiIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGdzYXAudG8oW3JldmVhbE1lbnVCYWNrZ3JvdW5kLCByZXZlYWxNZW51XSwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxyXG4gICAgICB9KTtcclxuICAgICAgc3RhZ2dlclJldmVhbChyZXZlYWxNZW51QmFja2dyb3VuZCwgcmV2ZWFsTWVudSk7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIGNvbnN0IHN0YWdnZXJSZXZlYWwgPSAobm9kZTEsIG5vZGUyKSA9PiB7XHJcbiAgICBnc2FwLmZyb20oW25vZGUxLCBub2RlMl0sIHtcclxuICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgaGVpZ2h0OiAwLFxyXG5cclxuICAgICAgZWFzZTogXCJwb3dlcjMuaW5PdXRcIixcclxuICAgICAgc3RhZ2dlcjoge1xyXG4gICAgICAgIGFtb3VudDogMC4wMlxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICBtZW51ID0gZWw7XHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cIm1lbnVcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICByZXZlYWxNZW51QmFja2dyb3VuZCA9IGVsO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudS13cmFwcGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICByZXZlYWxNZW51ID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuYXYgcm9sZT1cIm5hdmlnYXRpb25cIiBjbGFzc05hbWU9XCJtZW51LW5hdlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yb3N0ZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+Um9zdGVyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbXVzaWNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rIG1lbnUtbGlua1wiPk11c2ljPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZWZpbG1cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+R2FtZUZpbG08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUtYnV0dG9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudS13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAvKiB6LWluZGV4OiAxMDA7ICovXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudS1jb250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudS1uYXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2VjMWMyMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZS1tZW51IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsb3NlLW1lbnU6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Zak\\\\Documents\\\\Code\\\\pmg-site\\\\components\\\\menu.js */"));
}

/***/ })

})
//# sourceMappingURL=music.js.e1522f80f642677e99e2.hot-update.js.map