webpackHotUpdate("static\\development\\pages\\roster.js",{

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
    className: "jsx-3636217367" + " " + "menu",
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
    className: "jsx-3636217367" + " " + "menu-wrapper",
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
    className: "jsx-3636217367" + " " + "menu-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("nav", {
    role: "navigation",
    className: "jsx-3636217367" + " " + "menu-nav",
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
    className: "jsx-3636217367" + " " + "nav-link w-nav-link",
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
    className: "jsx-3636217367" + " " + "nav-link w-nav-link",
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
    className: "jsx-3636217367" + " " + "nav-link w-nav-link menu-link",
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
    className: "jsx-3636217367" + " " + "nav-link w-nav-link",
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
    className: "jsx-3636217367" + " " + "nav-link w-nav-link",
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
    className: "jsx-3636217367" + " " + "nav-link w-nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "Contact"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3636217367",
    __self: this
  }, ".menu.jsx-3636217367{display:none;z-index:9;top:0;left:0;right:0;position:fixed;height:100%;width:100%;}.menu-button.jsx-3636217367{position:absolute;z-index:20;right:10%;top:50%;}.menu-wrapper.jsx-3636217367{width:100%;height:100%;background-color:black;position:absolute;overflow:hidden;}.menu-container.jsx-3636217367{width:100%;height:100vh;background-color:black;}.menu-nav.jsx-3636217367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;z-index:2;}a.jsx-3636217367{font-size:50px;}.close-menu.jsx-3636217367{color:white;background-color:black;font-size:40px;position:absolute;right:5%;top:5%;z-index:10;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;}.close-menu.jsx-3636217367:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxjb21wb25lbnRzXFxtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGa0IsQUFHd0IsQUFVSyxBQU1QLEFBVUEsQUFNRSxBQVVFLEFBSUgsQUFVRixVQUNaLENBeENjLEFBVUMsQ0FvQlUsQ0E5Q2IsRUEwQ1osR0FoQ2EsS0FUTCxBQWdCaUIsQ0FVQSxLQXpCaEIsQUFTRyxNQW9DSyxDQTVDUCxHQVNBLEtBUk8sRUFjRyxDQUxwQixBQWVBLEdBb0JvQixTQTNDTixLQWlCSSxJQTJCUCxHQTNDRSxHQTBCVyxHQWtCZixHQTNCVCxFQWhCQSxFQTRDYSxXQUNpQix5REFuQmpCLE9Bb0JiLElBbkJjLFlBQ1csbUdBQ0wsa0JBQ1IsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXFpha1xcRG9jdW1lbnRzXFxDb2RlXFxwbWctc2l0ZVxcY29tcG9uZW50c1xcbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KHsgc3RhdGUgfSkge1xyXG4gIGxldCBtZW51ID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCByZXZlYWxNZW51ID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCByZXZlYWxNZW51QmFja2dyb3VuZCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZS5jbGlja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBjbG9zZSBtZW51XHJcbiAgICAgIGdzYXAudG8oW3JldmVhbE1lbnUsIHJldmVhbE1lbnVCYWNrZ3JvdW5kXSwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIGVhc2U6IFwicG93ZXIzLmluT3V0XCIsXHJcbiAgICAgICAgc3RhZ2dlcjoge1xyXG4gICAgICAgICAgYW1vdW50OiAwLjA3XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZ3NhcC50byhtZW51LCB7XHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgY3NzOiB7IGRpc3BsYXk6IFwibm9uZVwiIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzdGF0ZS5jbGlja2VkID09PSB0cnVlIHx8XHJcbiAgICAgIChzdGF0ZS5jbGlja2VkID09PSB0cnVlICYmIHN0YXRlLmluaXRpYWwgPT09IG51bGwpXHJcbiAgICApIHtcclxuICAgICAgLy8gb3BlbiBtZW51XHJcbiAgICAgIGdzYXAudG8obWVudSwge1xyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGNzczogeyBkaXNwbGF5OiBcImJsb2NrXCIgfVxyXG4gICAgICB9KTtcclxuICAgICAgZ3NhcC50byhbcmV2ZWFsTWVudUJhY2tncm91bmQsIHJldmVhbE1lbnVdLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGFnZ2VyUmV2ZWFsKHJldmVhbE1lbnVCYWNrZ3JvdW5kLCByZXZlYWxNZW51KTtcclxuICAgIH1cclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgY29uc3Qgc3RhZ2dlclJldmVhbCA9IChub2RlMSwgbm9kZTIpID0+IHtcclxuICAgIGdzYXAuZnJvbShbbm9kZTEsIG5vZGUyXSwge1xyXG4gICAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgICBoZWlnaHQ6IDAsXHJcblxyXG4gICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiLFxyXG4gICAgICBzdGFnZ2VyOiB7XHJcbiAgICAgICAgYW1vdW50OiAwLjAyXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgIG1lbnUgPSBlbDtcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwibWVudVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgIHJldmVhbE1lbnVCYWNrZ3JvdW5kID0gZWw7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtZW51LXdyYXBwZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgIHJldmVhbE1lbnUgPSBlbDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5hdiByb2xlPVwibmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cIm1lbnUtbmF2XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXhcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayB3LW5hdi1saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Jvc3RlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5Sb3N0ZXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tdXNpY1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmsgbWVudS1saW5rXCI+TXVzaWM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYW1lZmlsbVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5HYW1lRmlsbTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdy1uYXYtbGlua1wiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHctbmF2LWxpbmtcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudS1idXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgICAgICByaWdodDogMTAlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51LXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8qIHotaW5kZXg6IDEwMDsgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51LW5hdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2UtbWVudSB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZS1tZW51OmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Zak\\\\Documents\\\\Code\\\\pmg-site\\\\components\\\\menu.js */"));
}

/***/ })

})
//# sourceMappingURL=roster.js.49032e14da24b3fb9d28.hot-update.js.map