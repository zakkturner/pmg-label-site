webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.js */ "./components/header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\pages\\main.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // import "../public/styles/main.scss";

function Main() {
  var _this = this;

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
    url: "https://www.youtube.com/embed/JSWGjf37hEs"
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_4___default.a, {
    autoScrolling: true,
    navigation: true,
    anchors: ["home", "roster"],
    slidesNavigation: true,
    render: function render(_ref) {
      var state = _ref.state,
          fullpageApi = _ref.fullpageApi;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
        className: "hero section",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "hero-container w-container",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "hero-heading",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 19
        }
      }, "PlayOffS", __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }
      }), "Music ", __jsx("span", {
        className: "head-span text-span-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 27
        }
      }, "Group")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/roster",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "button big w-button",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      }, "View our Roster")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/music",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "button big w-button",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, "Check Out Our Music")))), __jsx("div", {
        className: "jsx-822545871" + " " + "artist-page section",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "content-wrapper w-container",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "jsx-822545871" + " " + "page-title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 19
        }
      }, "Our ", __jsx("span", {
        className: "jsx-822545871" + " " + "head-span text-span-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }
      }, "Roster")), __jsx("div", {
        className: "jsx-822545871" + " " + "section-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "w-layout-grid grid",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }, __jsx("div", {
        id: "w-node-c2d8d88ac434-49055390",
        className: "jsx-822545871" + " " + "artist-box",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }
      }, __jsx("h2", {
        className: "jsx-822545871" + " " + "heading",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 27
        }
      }, "Orange Beanie"))), __jsx("div", {
        id: "w-node-584f6c6cbeae-49055390",
        className: "jsx-822545871" + " " + "artist-box taco",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 25
        }
      }, __jsx("h2", {
        className: "jsx-822545871" + " " + "heading",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 27
        }
      }, "Jerry Owens"))))), __jsx("div", {
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 19
        }
      }, __jsx("div", {
        "data-animation": "slide",
        "data-duration": "500",
        "data-infinite": "1",
        className: "jsx-822545871" + " " + "slider w-slider",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "w-slider-mask",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "slide w-slide",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 27
        }
      }, __jsx("h2", {
        className: "jsx-822545871" + " " + "heading-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }
      }, "Orange ", __jsx("br", {
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 38
        }
      }), "Beanie"), __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "#",
        className: "jsx-822545871" + " " + "footer-link w-inline-block",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: "images/social-03-white.svg",
        width: "23",
        alt: "",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 33
        }
      })), __jsx("a", {
        href: "#",
        className: "jsx-822545871" + " " + "footer-link w-inline-block",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: "images/social-18-white.svg",
        width: "23",
        alt: "",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 33
        }
      }))))), __jsx("div", {
        className: "jsx-822545871" + " " + "slide-2 w-slide bio-slide",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 27
        }
      }, __jsx("h2", {
        className: "jsx-822545871" + " " + "heading-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }, "Orange Beanie"), __jsx("div", {
        className: "jsx-822545871" + " " + "social-links",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "https://www.instagram.com/orangebeanie/",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 31
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"],
        width: "20",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 33
        }
      })), __jsx("a", {
        href: "https://www.instagram.com/orangebeanie/",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 31
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFacebook"],
        width: "20",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 33
        }
      })), __jsx("a", {
        href: "https://twitter.com/OrangeBeanie_",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 31
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTwitter"],
        width: "20",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 33
        }
      }))), __jsx("div", {
        className: "jsx-822545871" + " " + "bio-container",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 29
        }
      }, __jsx("p", {
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 31
        }
      }, "Orange Beanie is an emerging artist from Indianapolis, IN. Due to his charismatic stage presence and personality he\u2019s been dubbed an Odd-Ball and predominantly makes energetic music for other Odd-Balls to enjoy. However that doesn\u2019t mean he\u2019s a one trick pony, he can\u2019t be boxed in artistically and he\u2019s eager to prove it.")), __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "#",
        className: "jsx-822545871" + " " + "footer-link w-inline-block",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: "images/social-03-white.svg",
        width: "23",
        alt: "",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 33
        }
      })), __jsx("a", {
        href: "#",
        className: "jsx-822545871" + " " + "footer-link w-inline-block",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: "images/social-18-white.svg",
        width: "23",
        alt: "",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 33
        }
      }))))), __jsx("div", {
        className: "jsx-822545871" + " " + "slide-3 w-slide",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 27
        }
      }, __jsx("h2", {
        className: "jsx-822545871" + " " + "heading-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 29
        }
      }, "Jerry", __jsx("br", {
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 31
        }
      }), "Owens"), __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "#",
        className: "jsx-822545871" + " " + "footer-link w-inline-block",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: "images/social-03-white.svg",
        width: "23",
        alt: "",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 33
        }
      })), __jsx("a", {
        href: "#",
        className: "jsx-822545871" + " " + "footer-link w-inline-block",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: "images/social-18-white.svg",
        width: "23",
        alt: "",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 33
        }
      }))))), __jsx("div", {
        className: "jsx-822545871" + " " + "slide-4 w-slide bio-slide",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 27
        }
      }, __jsx("h2", {
        className: "jsx-822545871" + " " + "heading-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 29
        }
      }, "Jerry Owens"), __jsx("div", {
        className: "jsx-822545871" + " " + "social-links",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "https://www.instagram.com/taco_prince3/",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 31
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"],
        width: "20",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 33
        }
      })), __jsx("a", {
        href: "https://www.facebook.com/YoJerryOwens/",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 31
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFacebook"],
        width: "20",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 33
        }
      })), __jsx("a", {
        href: "https://twitter.com/taco_prince3",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 31
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTwitter"],
        width: "20",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 33
        }
      }))), __jsx("div", {
        className: "jsx-822545871" + " " + "bio-container",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 29
        }
      }, __jsx("p", {
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 31
        }
      }, "What is the Jerry Owens Experience? It's a meditation. You may start with an inner turbulence that boils through your body, but the heat will transcend. It will transpire. It will transgress. By the time it is supposed to reach your toes, by the time you reach the last track of the tape, it will have evaporated from you and just be part of the air you breathe. It's effortless in capturing the atmosphere, the turmoil, the sensations."), __jsx("p", {
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 31
        }
      }, "It is a familiar road under your tires. (Old Days) It is a park bench on a cloudy day, or a windowsill for the rain. (Edge of madness) It is harder and harder head bopping at the concert. (Newbie) It is an experience that makes you remember how wonderful music can be. (Dura)")), __jsx("div", {
        className: "jsx-822545871" + " " + "div-block-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "#",
        className: "jsx-822545871" + " " + "footer-link w-inline-block",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: "images/social-03-white.svg",
        width: "23",
        alt: "",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 33
        }
      })), __jsx("a", {
        href: "#",
        className: "jsx-822545871" + " " + "footer-link w-inline-block",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: "images/social-18-white.svg",
        width: "23",
        alt: "",
        className: "jsx-822545871",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 33
        }
      })))))), __jsx("div", {
        className: "jsx-822545871" + " " + "left-arrow w-slider-arrow-left",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "w-icon-slider-left",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "jsx-822545871" + " " + "w-slider-arrow-right",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "jsx-822545871" + " " + "w-icon-slider-right",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "jsx-822545871" + " " + "w-slider-nav w-round",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 23
        }
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "822545871",
        __self: _this
      }, "#fp-nav.jsx-822545871 ul.jsx-822545871 li.jsx-822545871 a.jsx-822545871 span.jsx-822545871,.fp-slidesNav.jsx-822545871 ul.jsx-822545871 li.jsx-822545871 a.jsx-822545871 span.jsx-822545871{background:#fff !important;}.content-wrapper.jsx-822545871{margin-top:0;}.artist-page.jsx-822545871{height:100vh;}.div-block-3.jsx-822545871{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.bio-slide.jsx-822545871{background-color:#000;}.bio-slide.jsx-822545871 .heading-2.jsx-822545871{margin:50px auto;}.social-links.jsx-822545871{margin-bottom:25px;height:auto;z-index:2000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.social-links.jsx-822545871 a.jsx-822545871{margin-right:10px;color:#fff;-webkit-transition:0.4s ease-in-out;transition:0.4s ease-in-out;}.social-links.jsx-822545871 a.jsx-822545871:hover{color:#ec1c23;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxwYWdlc1xcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwVG1CLEFBSWtELEFBR2QsQUFJQSxBQUdBLEFBSVMsQUFJTCxBQU9FLEFBUUQsQUFLSixhQWxDaEIsQUFJQSxDQStCQSxHQXBCQSxDQWVhLENBUkMsR0FYZCxLQWRBLEVBa0M4QixFQVJmLGFBQ0EsOEJBakJTLG1CQXlCeEIseUJBUCtCLGtDQWpCL0IseUZBa0JBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxwYWdlc1xcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0RnVsbHBhZ2UgZnJvbSBcIkBmdWxscGFnZS9yZWFjdC1mdWxscGFnZVwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFJbnN0YWdyYW0sXHJcbiAgZmFGYWNlYm9vayxcclxuICBmYVR3aXR0ZXIsXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuLy8gaW1wb3J0IFwiLi4vcHVibGljL3N0eWxlcy9tYWluLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgZ2FtZUZpbG1EYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCJPcmFuZ2UgQmVhbmllIC0gTmljZSB0byBNZWV0IE1lXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9QRTBDYWZQS1pyMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IFwiT3JhbmdlIEJlYW5pZSAtIE1hdGhib29rXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9veVdNa1AxQmZIb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5hbWU6IFwiT3JhbmdlIEJlYW5pZSAtIERlc2lnbmVyIEh1YmNhcHNcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2t4RmxrNGJUQ1ZvXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogXCJPcmFuZ2UgQmVhbmllIC0gTm8gTGVhc2VcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3VhQUxvNXZ2SXVjXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNSxcclxuICAgICAgbmFtZTogXCJPcmFuZ2UgQmVhbmllIC0gVGhleSAyXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9KU1dHamYzN2hFc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDYsXHJcbiAgICAgIG5hbWU6IFwiSmVycnkgT3dlbnMgLSBZb3VuZyBIYXMgQmVlblwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvMXFYLTZSUkltb1lcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3LFxyXG4gICAgICBuYW1lOiBcIkplcnJ5IE93ZW5zIC0gTG9uZWx5XCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9oRWZyNURCNHY4Z1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDgsXHJcbiAgICAgIG5hbWU6IFwiSmVycnkgT3dlbnMgLSBFZGdlIG9mIE1hZG5lc3NcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL19uNTZrNFRXM2o0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgbmFtZTogXCJKZXJyeSBPd2VucyAtIE11bmRhbmUgRnVuZGF5XCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8zTkFoeTl5WmZyOFwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8UmVhY3RGdWxscGFnZVxyXG4gICAgICAgIGF1dG9TY3JvbGxpbmc9e3RydWV9XHJcbiAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cclxuICAgICAgICBhbmNob3JzPXtbXCJob21lXCIsIFwicm9zdGVyXCJdfVxyXG4gICAgICAgIHNsaWRlc05hdmlnYXRpb249e3RydWV9XHJcbiAgICAgICAgcmVuZGVyPXsoeyBzdGF0ZSwgZnVsbHBhZ2VBcGkgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvIHNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250YWluZXIgdy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsYXlPZmZTXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgTXVzaWMgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZC1zcGFuIHRleHQtc3Bhbi0yXCI+R3JvdXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcm9zdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJpZyB3LWJ1dHRvblwiPlZpZXcgb3VyIFJvc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL211c2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJpZyB3LWJ1dHRvblwiPkNoZWNrIE91dCBPdXIgTXVzaWM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1wYWdlIHNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyIHctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT3VyIDxzcGFuIGNsYXNzTmFtZT1cImhlYWQtc3BhbiB0ZXh0LXNwYW4tMlwiPlJvc3Rlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbGF5b3V0LWdyaWQgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInctbm9kZS1jMmQ4ZDg4YWM0MzQtNDkwNTUzOTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3QtYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+T3JhbmdlIEJlYW5pZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidy1ub2RlLTU4NGY2YzZjYmVhZS00OTA1NTM5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1ib3ggdGFjb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkplcnJ5IE93ZW5zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWR1cmF0aW9uPVwiNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW5maW5pdGU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlciB3LXNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNsaWRlci1tYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUgdy1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JhbmdlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZWFuaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2stNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXItbGluayB3LWlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc29jaWFsLTAzLXdoaXRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXItbGluayB3LWlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc29jaWFsLTE4LXdoaXRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS0yIHctc2xpZGUgYmlvLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2stM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctMlwiPk9yYW5nZSBCZWFuaWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb3JhbmdlYmVhbmllL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhSW5zdGFncmFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vcmFuZ2ViZWFuaWUvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSB3aWR0aD1cIjIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9PcmFuZ2VCZWFuaWVfXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVR3aXR0ZXJ9IHdpZHRoPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmFuZ2UgQmVhbmllIGlzIGFuIGVtZXJnaW5nIGFydGlzdCBmcm9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kaWFuYXBvbGlzLCBJTi4gRHVlIHRvIGhpcyBjaGFyaXNtYXRpYyBzdGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlIGFuZCBwZXJzb25hbGl0eSBoZeKAmXMgYmVlbiBkdWJiZWQgYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPZGQtQmFsbCBhbmQgcHJlZG9taW5hbnRseSBtYWtlcyBlbmVyZ2V0aWMgbXVzaWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Igb3RoZXIgT2RkLUJhbGxzIHRvIGVuam95LiBIb3dldmVyIHRoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2VzbuKAmXQgbWVhbiBoZeKAmXMgYSBvbmUgdHJpY2sgcG9ueSwgaGUgY2Fu4oCZdCBiZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveGVkIGluIGFydGlzdGljYWxseSBhbmQgaGXigJlzIGVhZ2VyIHRvIHByb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgdy1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3NvY2lhbC0wMy13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgdy1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3NvY2lhbC0xOC13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtMyB3LXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2stM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKZXJyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3dlbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1ibG9jay00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1saW5rIHctaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zb2NpYWwtMDMtd2hpdGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1saW5rIHctaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zb2NpYWwtMTgtd2hpdGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtNCB3LXNsaWRlIGJpby1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLTJcIj5KZXJyeSBPd2VuczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90YWNvX3ByaW5jZTMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFJbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vWW9KZXJyeU93ZW5zL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGYWNlYm9va30gd2lkdGg9XCIyMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdGFjb19wcmluY2UzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVR3aXR0ZXJ9IHdpZHRoPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGlzIHRoZSBKZXJyeSBPd2VucyBFeHBlcmllbmNlPyBJdCdzIGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdGF0aW9uLiBZb3UgbWF5IHN0YXJ0IHdpdGggYW4gaW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJidWxlbmNlIHRoYXQgYm9pbHMgdGhyb3VnaCB5b3VyIGJvZHksIGJ1dCB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWF0IHdpbGwgdHJhbnNjZW5kLiBJdCB3aWxsIHRyYW5zcGlyZS4gSXQgd2lsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZ3Jlc3MuIEJ5IHRoZSB0aW1lIGl0IGlzIHN1cHBvc2VkIHRvIHJlYWNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciB0b2VzLCBieSB0aGUgdGltZSB5b3UgcmVhY2ggdGhlIGxhc3QgdHJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgdGFwZSwgaXQgd2lsbCBoYXZlIGV2YXBvcmF0ZWQgZnJvbSB5b3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQganVzdCBiZSBwYXJ0IG9mIHRoZSBhaXIgeW91IGJyZWF0aGUuIEl0J3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZvcnRsZXNzIGluIGNhcHR1cmluZyB0aGUgYXRtb3NwaGVyZSwgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybW9pbCwgdGhlIHNlbnNhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgaXMgYSBmYW1pbGlhciByb2FkIHVuZGVyIHlvdXIgdGlyZXMuIChPbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXlzKSBJdCBpcyBhIHBhcmsgYmVuY2ggb24gYSBjbG91ZHkgZGF5LCBvciBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93c2lsbCBmb3IgdGhlIHJhaW4uIChFZGdlIG9mIG1hZG5lc3MpIEl0IGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFyZGVyIGFuZCBoYXJkZXIgaGVhZCBib3BwaW5nIGF0IHRoZSBjb25jZXJ0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChOZXdiaWUpIEl0IGlzIGFuIGV4cGVyaWVuY2UgdGhhdCBtYWtlcyB5b3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1lbWJlciBob3cgd29uZGVyZnVsIG11c2ljIGNhbiBiZS4gKER1cmEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgdy1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3NvY2lhbC0wMy13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgdy1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3NvY2lhbC0xOC13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWFycm93IHctc2xpZGVyLWFycm93LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWljb24tc2xpZGVyLWxlZnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNsaWRlci1hcnJvdy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctaWNvbi1zbGlkZXItcmlnaHRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNsaWRlci1uYXYgdy1yb3VuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgI2ZwLW5hdiB1bCBsaSBhIHNwYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgLmZwLXNsaWRlc05hdiB1bCBsaSBhIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aXN0LXBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdi1ibG9jay0zIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYmlvLXNsaWRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYmlvLXNsaWRlIC5oZWFkaW5nLTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc29jaWFsLWxpbmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIHdpZHRoOiAyNSU7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWwtbGlua3MgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWwtbGlua3MgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VjMWMyMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbWVmaWxtLXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyIHctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZSA8c3BhbiBjbGFzc05hbWU9XCJoZWFkLXNwYW4gdGV4dC1zcGFuLTJcIj5GaWxtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZHluLWxpc3QgbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZUZpbG1EYXRhLm1hcCgodmlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZHluLWl0ZW1zIGdyaWQtY2VsbCB3LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSB3LWR5bi1pdGVtIHctY29sIHctY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGluZy0zXCI+e3ZpZC5uYW1lfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3ZpZC51cmx9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGlzdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0ZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5ncmlkLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmctMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogR3JhZHVhdGUsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAubGlzdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Zak\\\\Documents\\\\Code\\\\pmg-site\\\\pages\\\\main.js */")), __jsx("section", {
        className: "jsx-1728697004" + " " + "gamefilm-page",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 15
        }
      }, __jsx(_components_header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "jsx-1728697004" + " " + "content-wrapper w-container",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "jsx-1728697004" + " " + "page-title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 19
        }
      }, "Game ", __jsx("span", {
        className: "jsx-1728697004" + " " + "head-span text-span-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 26
        }
      }, "Film")), __jsx("div", {
        className: "jsx-1728697004" + " " + "w-dyn-list list-container",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 19
        }
      }, gameFilmData.map(function (vid) {
        return __jsx("div", {
          className: "jsx-1728697004" + " " + "w-dyn-items grid-cell w-row",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 23
          }
        }, __jsx("div", {
          className: "jsx-1728697004" + " " + "collection-item w-dyn-item w-col w-col-4",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 25
          }
        }, __jsx("h3", {
          className: "jsx-1728697004" + " " + "heading-3",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 27
          }
        }, vid.name), __jsx("iframe", {
          width: "300",
          height: "215",
          src: "".concat(vid.url),
          frameborder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: true,
          className: "jsx-1728697004",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 27
          }
        })));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1728697004",
        __self: _this
      }, "body.jsx-1728697004{height:100vh;}.list-container.jsx-1728697004{display:grid;grid-template-columns:33% 33% 33%;grid-gap:1rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.collection-item.jsx-1728697004{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justfy-content:center !important;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.grid-cell.jsx-1728697004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.heading-3.jsx-1728697004{font-family:Graduate,sans-serif;width:100%;text-align:center;}iframe.jsx-1728697004{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media only screen and (max-width:768px){.list-container.jsx-1728697004{display:grid;grid-template-columns:1fr;grid-gap:1rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}@media only screen and (min-width:769px) and (max-width:1024px){.list-container.jsx-1728697004{display:grid;grid-template-columns:50% 50% !important;grid-gap:1rem;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxwYWdlc1xcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrWW1CLEFBR29DLEFBR0EsQUFPRixBQU9FLEFBTW9CLEFBS2YsQUFJSCxBQVNBLFdBOUJGLEVBVmYsQUFHb0MsQUE2Qk4sQUFTZSxtQkFsQmhDLE9BVUssSUFURSxJQXBCSixNQThCVyxDQVFULE9BckNPLEFBb0J6QixPQWtCMkIsR0FmM0IsR0FWeUIsV0FQRCxtRUF3QkMsUUE3QkYsR0FNWSxJQWdDVixNQXpCRix1QkFOQSxnQ0F1QnJCLFFBN0JGLE9Bc0NFLE1BekJGLHVCQU5BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcWmFrXFxEb2N1bWVudHNcXENvZGVcXHBtZy1zaXRlXFxwYWdlc1xcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyLmpzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0RnVsbHBhZ2UgZnJvbSBcIkBmdWxscGFnZS9yZWFjdC1mdWxscGFnZVwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFJbnN0YWdyYW0sXHJcbiAgZmFGYWNlYm9vayxcclxuICBmYVR3aXR0ZXIsXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuLy8gaW1wb3J0IFwiLi4vcHVibGljL3N0eWxlcy9tYWluLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgZ2FtZUZpbG1EYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCJPcmFuZ2UgQmVhbmllIC0gTmljZSB0byBNZWV0IE1lXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9QRTBDYWZQS1pyMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IFwiT3JhbmdlIEJlYW5pZSAtIE1hdGhib29rXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9veVdNa1AxQmZIb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5hbWU6IFwiT3JhbmdlIEJlYW5pZSAtIERlc2lnbmVyIEh1YmNhcHNcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2t4RmxrNGJUQ1ZvXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogXCJPcmFuZ2UgQmVhbmllIC0gTm8gTGVhc2VcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3VhQUxvNXZ2SXVjXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNSxcclxuICAgICAgbmFtZTogXCJPcmFuZ2UgQmVhbmllIC0gVGhleSAyXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9KU1dHamYzN2hFc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDYsXHJcbiAgICAgIG5hbWU6IFwiSmVycnkgT3dlbnMgLSBZb3VuZyBIYXMgQmVlblwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvMXFYLTZSUkltb1lcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3LFxyXG4gICAgICBuYW1lOiBcIkplcnJ5IE93ZW5zIC0gTG9uZWx5XCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9oRWZyNURCNHY4Z1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDgsXHJcbiAgICAgIG5hbWU6IFwiSmVycnkgT3dlbnMgLSBFZGdlIG9mIE1hZG5lc3NcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL19uNTZrNFRXM2o0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgbmFtZTogXCJKZXJyeSBPd2VucyAtIE11bmRhbmUgRnVuZGF5XCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8zTkFoeTl5WmZyOFwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8UmVhY3RGdWxscGFnZVxyXG4gICAgICAgIGF1dG9TY3JvbGxpbmc9e3RydWV9XHJcbiAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cclxuICAgICAgICBhbmNob3JzPXtbXCJob21lXCIsIFwicm9zdGVyXCJdfVxyXG4gICAgICAgIHNsaWRlc05hdmlnYXRpb249e3RydWV9XHJcbiAgICAgICAgcmVuZGVyPXsoeyBzdGF0ZSwgZnVsbHBhZ2VBcGkgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvIHNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250YWluZXIgdy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm8taGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBsYXlPZmZTXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgTXVzaWMgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZC1zcGFuIHRleHQtc3Bhbi0yXCI+R3JvdXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcm9zdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJpZyB3LWJ1dHRvblwiPlZpZXcgb3VyIFJvc3RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL211c2ljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGJpZyB3LWJ1dHRvblwiPkNoZWNrIE91dCBPdXIgTXVzaWM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGlzdC1wYWdlIHNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyIHctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT3VyIDxzcGFuIGNsYXNzTmFtZT1cImhlYWQtc3BhbiB0ZXh0LXNwYW4tMlwiPlJvc3Rlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctbGF5b3V0LWdyaWQgZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInctbm9kZS1jMmQ4ZDg4YWM0MzQtNDkwNTUzOTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnRpc3QtYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+T3JhbmdlIEJlYW5pZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidy1ub2RlLTU4NGY2YzZjYmVhZS00OTA1NTM5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFydGlzdC1ib3ggdGFjb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPkplcnJ5IE93ZW5zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWR1cmF0aW9uPVwiNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW5maW5pdGU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlciB3LXNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNsaWRlci1tYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUgdy1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JhbmdlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCZWFuaWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2stNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXItbGluayB3LWlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc29jaWFsLTAzLXdoaXRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXItbGluayB3LWlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc29jaWFsLTE4LXdoaXRlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS0yIHctc2xpZGUgYmlvLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2stM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctMlwiPk9yYW5nZSBCZWFuaWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb3JhbmdlYmVhbmllL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ZhSW5zdGFncmFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vcmFuZ2ViZWFuaWUvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSB3aWR0aD1cIjIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9PcmFuZ2VCZWFuaWVfXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVR3aXR0ZXJ9IHdpZHRoPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmFuZ2UgQmVhbmllIGlzIGFuIGVtZXJnaW5nIGFydGlzdCBmcm9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kaWFuYXBvbGlzLCBJTi4gRHVlIHRvIGhpcyBjaGFyaXNtYXRpYyBzdGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbmNlIGFuZCBwZXJzb25hbGl0eSBoZeKAmXMgYmVlbiBkdWJiZWQgYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPZGQtQmFsbCBhbmQgcHJlZG9taW5hbnRseSBtYWtlcyBlbmVyZ2V0aWMgbXVzaWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Igb3RoZXIgT2RkLUJhbGxzIHRvIGVuam95LiBIb3dldmVyIHRoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2VzbuKAmXQgbWVhbiBoZeKAmXMgYSBvbmUgdHJpY2sgcG9ueSwgaGUgY2Fu4oCZdCBiZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveGVkIGluIGFydGlzdGljYWxseSBhbmQgaGXigJlzIGVhZ2VyIHRvIHByb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgdy1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3NvY2lhbC0wMy13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgdy1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3NvY2lhbC0xOC13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtMyB3LXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtYmxvY2stM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKZXJyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3dlbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1ibG9jay00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1saW5rIHctaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zb2NpYWwtMDMtd2hpdGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1saW5rIHctaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zb2NpYWwtMTgtd2hpdGUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtNCB3LXNsaWRlIGJpby1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLTJcIj5KZXJyeSBPd2VuczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90YWNvX3ByaW5jZTMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFJbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vWW9KZXJyeU93ZW5zL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGYWNlYm9va30gd2lkdGg9XCIyMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdGFjb19wcmluY2UzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVR3aXR0ZXJ9IHdpZHRoPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0IGlzIHRoZSBKZXJyeSBPd2VucyBFeHBlcmllbmNlPyBJdCdzIGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpdGF0aW9uLiBZb3UgbWF5IHN0YXJ0IHdpdGggYW4gaW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJidWxlbmNlIHRoYXQgYm9pbHMgdGhyb3VnaCB5b3VyIGJvZHksIGJ1dCB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWF0IHdpbGwgdHJhbnNjZW5kLiBJdCB3aWxsIHRyYW5zcGlyZS4gSXQgd2lsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZ3Jlc3MuIEJ5IHRoZSB0aW1lIGl0IGlzIHN1cHBvc2VkIHRvIHJlYWNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91ciB0b2VzLCBieSB0aGUgdGltZSB5b3UgcmVhY2ggdGhlIGxhc3QgdHJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgdGFwZSwgaXQgd2lsbCBoYXZlIGV2YXBvcmF0ZWQgZnJvbSB5b3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQganVzdCBiZSBwYXJ0IG9mIHRoZSBhaXIgeW91IGJyZWF0aGUuIEl0J3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZvcnRsZXNzIGluIGNhcHR1cmluZyB0aGUgYXRtb3NwaGVyZSwgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybW9pbCwgdGhlIHNlbnNhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgaXMgYSBmYW1pbGlhciByb2FkIHVuZGVyIHlvdXIgdGlyZXMuIChPbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXlzKSBJdCBpcyBhIHBhcmsgYmVuY2ggb24gYSBjbG91ZHkgZGF5LCBvciBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93c2lsbCBmb3IgdGhlIHJhaW4uIChFZGdlIG9mIG1hZG5lc3MpIEl0IGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFyZGVyIGFuZCBoYXJkZXIgaGVhZCBib3BwaW5nIGF0IHRoZSBjb25jZXJ0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChOZXdiaWUpIEl0IGlzIGFuIGV4cGVyaWVuY2UgdGhhdCBtYWtlcyB5b3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1lbWJlciBob3cgd29uZGVyZnVsIG11c2ljIGNhbiBiZS4gKER1cmEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWJsb2NrLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgdy1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3NvY2lhbC0wMy13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmsgdy1pbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3NvY2lhbC0xOC13aGl0ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWFycm93IHctc2xpZGVyLWFycm93LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWljb24tc2xpZGVyLWxlZnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNsaWRlci1hcnJvdy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctaWNvbi1zbGlkZXItcmlnaHRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNsaWRlci1uYXYgdy1yb3VuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgI2ZwLW5hdiB1bCBsaSBhIHNwYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgLmZwLXNsaWRlc05hdiB1bCBsaSBhIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aXN0LXBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdi1ibG9jay0zIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYmlvLXNsaWRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYmlvLXNsaWRlIC5oZWFkaW5nLTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc29jaWFsLWxpbmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIHdpZHRoOiAyNSU7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWwtbGlua3MgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWwtbGlua3MgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VjMWMyMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbWVmaWxtLXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyIHctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZSA8c3BhbiBjbGFzc05hbWU9XCJoZWFkLXNwYW4gdGV4dC1zcGFuLTJcIj5GaWxtPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZHluLWxpc3QgbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZUZpbG1EYXRhLm1hcCgodmlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZHluLWl0ZW1zIGdyaWQtY2VsbCB3LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSB3LWR5bi1pdGVtIHctY29sIHctY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGluZy0zXCI+e3ZpZC5uYW1lfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3ZpZC51cmx9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGlzdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0ZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5ncmlkLWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmctMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogR3JhZHVhdGUsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAubGlzdC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Zak\\\\Documents\\\\Code\\\\pmg-site\\\\pages\\\\main.js */")));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=main.js.305ab1048defc4a7dce6.hot-update.js.map