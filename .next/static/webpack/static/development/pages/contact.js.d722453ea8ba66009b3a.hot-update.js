webpackHotUpdate("static\\development\\pages\\contact.js",{

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
    className: "jsx-4074460164" + " " + "menu",
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
    className: "jsx-4074460164" + " " + "menu-wrapper",
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
    className: "jsx-4074460164" + " " + "menu-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("nav", {
    role: "navigation",
    className: "jsx-4074460164" + " " + "menu-nav",
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
    className: "jsx-4074460164" + " " + "nav-link w-nav-link",
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
    className: "jsx-4074460164" + " " + "nav-link w-nav-link",
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
    className: "jsx-4074460164" + " " + "nav-link w-nav-link menu-link",
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
    className: "jsx-4074460164" + " " + "nav-link w-nav-link",
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
    className: "jsx-4074460164" + " " + "nav-link w-nav-link",
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
    className: "jsx-4074460164" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "Contact"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4074460164",
    __self: this
  }, ".menu.jsx-4074460164{display:none;z-index:9;top:0;left:0;right:0;position:fixed;height:100%;width:100%;}.menu-button.jsx-4074460164{position:absolute;z-index:20;right:10%;top:50%;}.menu-wrapper.jsx-4074460164{width:100%;height:100%;background-color:black;position:absolute;overflow:hidden;}.menu-container.jsx-4074460164{width:100%;height:100vh;background-color:black;}.menu-nav.jsx-4074460164{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;z-index:2;}a.jsx-4074460164{font-size:50px;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;}a.jsx-4074460164:hover{color:#ec1c23;}.close-menu.jsx-4074460164{color:white;background-color:black;font-size:40px;position:absolute;right:5%;top:5%;z-index:10;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;}.close-menu.jsx-4074460164:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxjb21wb25lbnRzXFxtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGa0IsQUFHd0IsQUFVSyxBQU1QLEFBVUEsQUFNRSxBQVVFLEFBS0QsQUFJRixBQVVGLFVBQ1osQ0E3Q2MsQUFVQyxDQXlCVSxDQW5EYixDQStDWixDQUw4QixHQWhDakIsS0FUTCxBQWdCaUIsQ0FVQSxLQXpCaEIsQUFTRyxNQXlDSyxDQWpEUCxHQVNBLEtBUk8sRUFjRyxDQUxwQixBQWVBLEdBeUJvQixTQWhETixLQWlCSSxJQWdDUCxHQWhERSxHQTBCVyxHQXVCZixFQVpULENBcEJBLEVBaEJBLEVBaURhLFdBQ2lCLHlEQXhCakIsT0F5QmIsSUF4QmMsWUFDVyxtR0FDTCxrQkFDUixVQUNaIiwiZmlsZSI6IkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxjb21wb25lbnRzXFxtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoeyBzdGF0ZSB9KSB7XHJcbiAgbGV0IG1lbnUgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IHJldmVhbE1lbnUgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IHJldmVhbE1lbnVCYWNrZ3JvdW5kID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlLmNsaWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIGNsb3NlIG1lbnVcclxuICAgICAgZ3NhcC50byhbcmV2ZWFsTWVudSwgcmV2ZWFsTWVudUJhY2tncm91bmRdLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDAuOCxcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgZWFzZTogXCJwb3dlcjMuaW5PdXRcIixcclxuICAgICAgICBzdGFnZ2VyOiB7XHJcbiAgICAgICAgICBhbW91bnQ6IDAuMDdcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBnc2FwLnRvKG1lbnUsIHtcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICBjc3M6IHsgZGlzcGxheTogXCJub25lXCIgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHN0YXRlLmNsaWNrZWQgPT09IHRydWUgfHxcclxuICAgICAgKHN0YXRlLmNsaWNrZWQgPT09IHRydWUgJiYgc3RhdGUuaW5pdGlhbCA9PT0gbnVsbClcclxuICAgICkge1xyXG4gICAgICAvLyBvcGVuIG1lbnVcclxuICAgICAgZ3NhcC50byhtZW51LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgY3NzOiB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBnc2FwLnRvKFtyZXZlYWxNZW51QmFja2dyb3VuZCwgcmV2ZWFsTWVudV0sIHtcclxuICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCJcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YWdnZXJSZXZlYWwocmV2ZWFsTWVudUJhY2tncm91bmQsIHJldmVhbE1lbnUpO1xyXG4gICAgfVxyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICBjb25zdCBzdGFnZ2VyUmV2ZWFsID0gKG5vZGUxLCBub2RlMikgPT4ge1xyXG4gICAgZ3NhcC5mcm9tKFtub2RlMSwgbm9kZTJdLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgIGhlaWdodDogMCxcclxuXHJcbiAgICAgIGVhc2U6IFwicG93ZXIzLmluT3V0XCIsXHJcbiAgICAgIHN0YWdnZXI6IHtcclxuICAgICAgICBhbW91bnQ6IDAuMDJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgbWVudSA9IGVsO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJtZW51XCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgcmV2ZWFsTWVudUJhY2tncm91bmQgPSBlbDtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtd3JhcHBlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgcmV2ZWFsTWVudSA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmF2IHJvbGU9XCJuYXZpZ2F0aW9uXCIgY2xhc3NOYW1lPVwibWVudS1uYXZcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcm9zdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGlua1wiPlJvc3RlcjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL211c2ljXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGluayBtZW51LWxpbmtcIj5NdXNpYzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2dhbWVmaWxtXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGlua1wiPkdhbWVGaWxtPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGlua1wiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICAgIHJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUtd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgLyogei1pbmRleDogMTAwOyAqL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUtbmF2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjZWMxYzIzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLW1lbnUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2UtbWVudTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Zak\\\\Documents\\\\Code\\\\pmg-site\\\\components\\\\menu.js */"));
}

/***/ })

})
//# sourceMappingURL=contact.js.d722453ea8ba66009b3a.hot-update.js.map