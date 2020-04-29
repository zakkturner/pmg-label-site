webpackHotUpdate("static\\development\\pages\\gamefilm.js",{

/***/ "./pages/gamefilm.js":
/*!***************************!*\
  !*** ./pages/gamefilm.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.js */ "./components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer.js */ "./components/footer.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\pages\\gamefilm.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var gameFilmData = [{
  id: 1,
  name: "Orange Beanie - Nice to Meet Me",
  url: "https://www.youtube.com/embed/PE0CafPKZr0"
}, {
  id: 2,
  name: "Orange Beanie - Mathbook",
  url: "https://www.youtube.com/embed/oyWMkP1BfHo"
}, {
  id: 3,
  name: "Orange Beanie - Designer Hubcaps",
  url: "https://www.youtube.com/embed/kxFlk4bTCVo"
}, {
  id: 4,
  name: "Orange Beanie - No Lease",
  url: "https://www.youtube.com/embed/uaALo5vvIuc"
}, {
  id: 5,
  name: "Orange Beanie - They 2",
  url: "https://www.youtube.com/embed/kxFlk4bTCVo"
}, {
  id: 6,
  name: "Jerry Owens - Young Has Been",
  url: "https://www.youtube.com/embed/1qX-6RRImoY"
}, {
  id: 7,
  name: "Jerry Owens - Lonely",
  url: "https://www.youtube.com/embed/hEfr5DB4v8g"
}, {
  id: 8,
  name: "Jerry Owens - Edge of Madness",
  url: "https://www.youtube.com/embed/_n56k4TW3j4"
}, {
  id: 9,
  name: "Jerry Owens - Mundane Funday",
  url: "https://www.youtube.com/embed/3NAhy9yZfr8"
}];

var GameFilm = function GameFilm() {
  return __jsx("section", {
    className: "jsx-258534850" + " " + "gamefilm-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_components_header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-258534850" + " " + "content-wrapper w-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-258534850" + " " + "page-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Game Film"), __jsx("div", {
    className: "jsx-258534850" + " " + "w-dyn-list list-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, gameFilmData.map(function (vid) {
    return __jsx("div", {
      className: "jsx-258534850" + " " + "w-dyn-items grid-cell w-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-258534850" + " " + "collection-item w-dyn-item w-col w-col-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx("h3", {
      className: "jsx-258534850" + " " + "heading-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, vid.name), __jsx("iframe", {
      width: "300",
      height: "215",
      src: "".concat(vid.url),
      frameborder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true,
      className: "jsx-258534850",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    })));
  }))), __jsx(_components_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "258534850",
    __self: _this
  }, "body.jsx-258534850{height:100vh;}.list-container.jsx-258534850{display:grid;grid-template-columns:33% 33% 33%;grid-gap:1rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.collection-item.jsx-258534850{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justfy-content:center !important;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.grid-cell.jsx-258534850{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.heading-3.jsx-258534850{font-family:Graduate,sans-serif;width:100%;text-align:center;margin-bottom:20px;}iframe.jsx-258534850{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (max-width:768px){.list-container.jsx-258534850{display:grid;grid-template-columns:1fr;grid-gap:1rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}@media only screen and (min-width:769px) and (max-width:1024px){.list-container.jsx-258534850{display:grid;grid-template-columns:50% 50% !important;grid-gap:1rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxwYWdlc1xcZ2FtZWZpbG0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VTLEFBRzBCLEFBR0EsQUFPRixBQU9FLEFBTW9CLEFBTWYsQUFJSCxBQVNBLFdBL0JGLEVBVmYsQUFHb0MsQUE4Qk4sQUFTZSxtQkFuQmhDLE9BV0ssSUFWRSxJQXBCSixNQStCVyxDQVFULE9BdENPLEFBb0JKLE9BbUJNLEdBZjNCLEdBWHlCLE1BUXpCLEtBZndCLG1FQXlCQyxRQTlCRixHQU1ZLElBaUNWLE1BMUJGLHVCQU5BLGdDQXdCckIsUUE5QkYsT0F1Q0UsTUExQkYsdUJBTkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxaYWtcXERvY3VtZW50c1xcQ29kZVxccG1nLXNpdGVcXHBhZ2VzXFxnYW1lZmlsbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyLmpzXCI7XHJcblxyXG5jb25zdCBnYW1lRmlsbURhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcIk9yYW5nZSBCZWFuaWUgLSBOaWNlIHRvIE1lZXQgTWVcIixcclxuICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9QRTBDYWZQS1pyMFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwiT3JhbmdlIEJlYW5pZSAtIE1hdGhib29rXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvb3lXTWtQMUJmSG9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiBcIk9yYW5nZSBCZWFuaWUgLSBEZXNpZ25lciBIdWJjYXBzXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQva3hGbGs0YlRDVm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiBcIk9yYW5nZSBCZWFuaWUgLSBObyBMZWFzZVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3VhQUxvNXZ2SXVjXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogXCJPcmFuZ2UgQmVhbmllIC0gVGhleSAyXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQva3hGbGs0YlRDVm9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBuYW1lOiBcIkplcnJ5IE93ZW5zIC0gWW91bmcgSGFzIEJlZW5cIixcclxuICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8xcVgtNlJSSW1vWVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIG5hbWU6IFwiSmVycnkgT3dlbnMgLSBMb25lbHlcIixcclxuICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9oRWZyNURCNHY4Z1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOCxcclxuICAgIG5hbWU6IFwiSmVycnkgT3dlbnMgLSBFZGdlIG9mIE1hZG5lc3NcIixcclxuICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9fbjU2azRUVzNqNFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOSxcclxuICAgIG5hbWU6IFwiSmVycnkgT3dlbnMgLSBNdW5kYW5lIEZ1bmRheVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzNOQWh5OXlaZnI4XCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBHYW1lRmlsbSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2FtZWZpbG0tcGFnZVwiPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyIHctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5HYW1lIEZpbG08L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1keW4tbGlzdCBsaXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge2dhbWVGaWxtRGF0YS5tYXAodmlkID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWR5bi1pdGVtcyBncmlkLWNlbGwgdy1yb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSB3LWR5bi1pdGVtIHctY29sIHctY29sLTRcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nLTNcIj57dmlkLm5hbWV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjE1XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt2aWQudXJsfWB9XHJcbiAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW5cclxuICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29sbGVjdGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdyaWQtY2VsbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmctMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHcmFkdWF0ZSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAubGlzdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUZpbG07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Zak\\\\Documents\\\\Code\\\\pmg-site\\\\pages\\\\gamefilm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (GameFilm);

/***/ })

})
//# sourceMappingURL=gamefilm.js.075cc0443567a97fabf7.hot-update.js.map