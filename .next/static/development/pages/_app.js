(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./css/webflow.css":
/*!*************************!*\
  !*** ./css/webflow.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./webflow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/webflow.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./webflow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/webflow.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./webflow.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/webflow.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./images/IMG_6735.jpg":
/*!*****************************!*\
  !*** ./images/IMG_6735.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_6735.a84ce940f935bb914bb5af154807c801.jpg";

/***/ }),

/***/ "./images/IMG_7344.jpg":
/*!*****************************!*\
  !*** ./images/IMG_7344.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IMG_7344.0ae85cc003ce55b42b00fa81eea4d277.jpg";

/***/ }),

/***/ "./images/ai.jpg":
/*!***********************!*\
  !*** ./images/ai.jpg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ai.efdaf93c7482bd77e3bb5cce9220096d.jpg";

/***/ }),

/***/ "./images/dj1.jpg":
/*!************************!*\
  !*** ./images/dj1.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dj1.1193ffe01605ad66dad63dd6915135e5.jpg";

/***/ }),

/***/ "./images/jerry-rice.png":
/*!*******************************!*\
  !*** ./images/jerry-rice.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jerry-rice.94b6ebb83f3c536ef1fc9195b68b1bb6.png";

/***/ }),

/***/ "./images/messi.jpg":
/*!**************************!*\
  !*** ./images/messi.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/messi.0bcd0e98b06c4798e333e5ea3ee31afa.jpg";

/***/ }),

/***/ "./images/mj2.jpg":
/*!************************!*\
  !*** ./images/mj2.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mj2.ee730305f825e3e6bf4bc8496b1a4046.jpg";

/***/ }),

/***/ "./images/mj32.jpg":
/*!*************************!*\
  !*** ./images/mj32.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mj32.946ce55ff126d8be349ddd85f391394c.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/webflow.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./css/webflow.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ../images/mj2.jpg */ "./images/mj2.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_1___ = __webpack_require__(/*! ../images/ai.jpg */ "./images/ai.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_2___ = __webpack_require__(/*! ../images/IMG_6735.jpg */ "./images/IMG_6735.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_3___ = __webpack_require__(/*! ../images/IMG_7344.jpg */ "./images/IMG_7344.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_4___ = __webpack_require__(/*! ../images/mj32.jpg */ "./images/mj32.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_5___ = __webpack_require__(/*! ../images/dj1.jpg */ "./images/dj1.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_6___ = __webpack_require__(/*! ../images/messi.jpg */ "./images/messi.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_7___ = __webpack_require__(/*! ../images/jerry-rice.png */ "./images/jerry-rice.png");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Graduate&family=Oswald:wght@300;400;600;700&display=swap);"]);
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
var ___CSS_LOADER_URL_IMPORT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_1___);
var ___CSS_LOADER_URL_IMPORT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_2___);
var ___CSS_LOADER_URL_IMPORT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_3___);
var ___CSS_LOADER_URL_IMPORT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_4___);
var ___CSS_LOADER_URL_IMPORT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_5___);
var ___CSS_LOADER_URL_IMPORT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_6___);
var ___CSS_LOADER_URL_IMPORT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_7___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"webflow-icons\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,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\")\n    format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"w-icon-\"],\n[class*=\" w-icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"webflow-icons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.w-icon-slider-right:before {\n  content: \"\\e600\";\n}\n.w-icon-slider-left:before {\n  content: \"\\e601\";\n}\n.w-icon-nav-menu:before {\n  content: \"\\e602\";\n}\n.w-icon-arrow-down:before,\n.w-icon-dropdown-toggle:before {\n  content: \"\\e603\";\n}\n.w-icon-file-upload-remove:before {\n  content: \"\\e900\";\n}\n.w-icon-file-upload-icon:before {\n  content: \"\\e903\";\n}\n\n* {\n  box-sizing: border-box;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n  background-color: #fff;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333;\n}\nimg {\n  max-width: 100%;\n  vertical-align: middle;\n  display: inline-block;\n}\nhtml.w-mod-touch * {\n  background-attachment: scroll !important;\n}\n.w-block {\n  display: block;\n}\n.w-inline-block {\n  max-width: 100%;\n  display: inline-block;\n}\n.w-clearfix:before,\n.w-clearfix:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-clearfix:after {\n  clear: both;\n}\n.w-hidden {\n  display: none;\n}\n.w-button {\n  display: inline-block;\n  padding: 9px 15px;\n  background-color: #3898ec;\n  color: white;\n  border: 0;\n  line-height: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 0;\n}\ninput.w-button {\n  -webkit-appearance: button;\n}\nhtml[data-w-dynpage] [data-w-cloak] {\n  color: transparent !important;\n}\n.w-webflow-badge,\n.w-webflow-badge * {\n  position: static;\n  left: auto;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  z-index: auto;\n  display: block;\n  visibility: visible;\n  overflow: visible;\n  overflow-x: visible;\n  overflow-y: visible;\n  box-sizing: border-box;\n  width: auto;\n  height: auto;\n  max-height: none;\n  max-width: none;\n  min-height: 0;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  float: none;\n  clear: none;\n  border: 0 none transparent;\n  border-radius: 0;\n  background: none;\n  background-image: none;\n  background-position: 0% 0%;\n  background-size: auto auto;\n  background-repeat: repeat;\n  background-origin: padding-box;\n  background-clip: border-box;\n  background-attachment: scroll;\n  background-color: transparent;\n  box-shadow: none;\n  opacity: 1;\n  transform: none;\n  transition: none;\n  direction: ltr;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-style: inherit;\n  font-feature-settings: inherit;\n  font-variant: inherit;\n  text-align: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: 0;\n  text-transform: inherit;\n  list-style-type: disc;\n  text-shadow: none;\n  font-smoothing: auto;\n  vertical-align: baseline;\n  cursor: inherit;\n  white-space: inherit;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n}\n.w-webflow-badge {\n  position: fixed !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  z-index: 2147483647 !important;\n  top: auto !important;\n  right: 12px !important;\n  bottom: 12px !important;\n  left: auto !important;\n  color: #aaadb0 !important;\n  background-color: #fff !important;\n  border-radius: 3px !important;\n  padding: 6px 8px 6px 6px !important;\n  font-size: 12px !important;\n  opacity: 1 !important;\n  line-height: 14px !important;\n  text-decoration: none !important;\n  transform: none !important;\n  margin: 0 !important;\n  width: auto !important;\n  height: auto !important;\n  overflow: visible !important;\n  white-space: nowrap;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.w-webflow-badge > img {\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  vertical-align: middle !important;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\nh1 {\n  font-size: 38px;\n  line-height: 44px;\n  margin-top: 20px;\n}\nh2 {\n  font-size: 32px;\n  line-height: 36px;\n  margin-top: 20px;\n}\nh3 {\n  font-size: 24px;\n  line-height: 30px;\n  margin-top: 20px;\n}\nh4 {\n  font-size: 18px;\n  line-height: 24px;\n  margin-top: 10px;\n}\nh5 {\n  font-size: 14px;\n  line-height: 20px;\n  margin-top: 10px;\n}\nh6 {\n  font-size: 12px;\n  line-height: 18px;\n  margin-top: 10px;\n}\np {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nblockquote {\n  margin: 0 0 10px 0;\n  padding: 10px 20px;\n  border-left: 5px solid #e2e2e2;\n  font-size: 18px;\n  line-height: 22px;\n}\nfigure {\n  margin: 0;\n  margin-bottom: 10px;\n}\nfigcaption {\n  margin-top: 5px;\n  text-align: center;\n}\nul,\nol {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding-left: 40px;\n}\n.w-list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.w-embed:before,\n.w-embed:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-embed:after {\n  clear: both;\n}\n.w-video {\n  width: 100%;\n  position: relative;\n  padding: 0;\n}\n.w-video iframe,\n.w-video object,\n.w-video embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"] {\n  border: 0;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n.w-form {\n  margin: 0 0 15px;\n}\n.w-form-done {\n  display: none;\n  padding: 20px;\n  text-align: center;\n  background-color: #dddddd;\n}\n.w-form-fail {\n  display: none;\n  margin-top: 10px;\n  padding: 10px;\n  background-color: #ffdede;\n}\nlabel {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n.w-input,\n.w-select {\n  display: block;\n  width: 100%;\n  height: 38px;\n  padding: 8px 12px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  line-height: 1.428571429;\n  color: #333333;\n  vertical-align: middle;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n}\n.w-input:-moz-placeholder,\n.w-select:-moz-placeholder {\n  color: #999;\n}\n.w-input::-moz-placeholder,\n.w-select::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.w-input:-ms-input-placeholder,\n.w-select:-ms-input-placeholder {\n  color: #999;\n}\n.w-input::-webkit-input-placeholder,\n.w-select::-webkit-input-placeholder {\n  color: #999;\n}\n.w-input:focus,\n.w-select:focus {\n  border-color: #3898ec;\n  outline: 0;\n}\n.w-input[disabled],\n.w-select[disabled],\n.w-input[readonly],\n.w-select[readonly],\nfieldset[disabled] .w-input,\nfieldset[disabled] .w-select {\n  cursor: not-allowed;\n  background-color: #eeeeee;\n}\ntextarea.w-input,\ntextarea.w-select {\n  height: auto;\n}\n.w-select {\n  background-color: #f3f3f3;\n}\n.w-select[multiple] {\n  height: auto;\n}\n.w-form-label {\n  display: inline-block;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0px;\n}\n.w-radio {\n  display: block;\n  margin-bottom: 5px;\n  padding-left: 20px;\n}\n.w-radio:before,\n.w-radio:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-radio:after {\n  clear: both;\n}\n.w-radio-input {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n  float: left;\n  margin-left: -20px;\n}\n.w-radio-input {\n  margin-top: 3px;\n}\n.w-file-upload {\n  display: block;\n  margin-bottom: 10px;\n}\n.w-file-upload-input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -100;\n}\n.w-file-upload-default,\n.w-file-upload-uploading,\n.w-file-upload-success {\n  display: inline-block;\n  color: #333333;\n}\n.w-file-upload-error {\n  display: block;\n  margin-top: 10px;\n}\n.w-file-upload-default.w-hidden,\n.w-file-upload-uploading.w-hidden,\n.w-file-upload-error.w-hidden,\n.w-file-upload-success.w-hidden {\n  display: none;\n}\n.w-file-upload-uploading-btn {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n  cursor: pointer;\n  margin: 0;\n  padding: 8px 12px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-file-upload-file {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  margin: 0;\n  padding: 8px 9px 8px 11px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-file-upload-file-name {\n  font-size: 14px;\n  font-weight: normal;\n  display: block;\n}\n.w-file-remove-link {\n  margin-top: 3px;\n  margin-left: 10px;\n  width: auto;\n  height: auto;\n  padding: 3px;\n  display: block;\n  cursor: pointer;\n}\n.w-icon-file-upload-remove {\n  margin: auto;\n  font-size: 10px;\n}\n.w-file-upload-error-msg {\n  display: inline-block;\n  color: #ea384c;\n  padding: 2px 0;\n}\n.w-file-upload-info {\n  display: inline-block;\n  line-height: 38px;\n  padding: 0 12px;\n}\n.w-file-upload-label {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: normal;\n  cursor: pointer;\n  margin: 0;\n  padding: 8px 12px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-icon-file-upload-icon,\n.w-icon-file-upload-uploading {\n  display: inline-block;\n  margin-right: 8px;\n  width: 20px;\n}\n.w-icon-file-upload-uploading {\n  height: 20px;\n}\n.w-container {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 940px;\n}\n.w-container:before,\n.w-container:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-container:after {\n  clear: both;\n}\n.w-container .w-row {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n.w-row:before,\n.w-row:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-row:after {\n  clear: both;\n}\n.w-row .w-row {\n  margin-left: 0;\n  margin-right: 0;\n}\n.w-col {\n  position: relative;\n  float: left;\n  width: 100%;\n  min-height: 1px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.w-col .w-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n.w-col-1 {\n  width: 8.33333333%;\n}\n.w-col-2 {\n  width: 16.66666667%;\n}\n.w-col-3 {\n  width: 25%;\n}\n.w-col-4 {\n  width: 33.33333333%;\n}\n.w-col-5 {\n  width: 41.66666667%;\n}\n.w-col-6 {\n  width: 50%;\n}\n.w-col-7 {\n  width: 58.33333333%;\n}\n.w-col-8 {\n  width: 66.66666667%;\n}\n.w-col-9 {\n  width: 75%;\n}\n.w-col-10 {\n  width: 83.33333333%;\n}\n.w-col-11 {\n  width: 91.66666667%;\n}\n.w-col-12 {\n  width: 100%;\n}\n.w-hidden-main {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n  .w-container {\n    max-width: 728px;\n  }\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: none !important;\n  }\n  .w-col-medium-1 {\n    width: 8.33333333%;\n  }\n  .w-col-medium-2 {\n    width: 16.66666667%;\n  }\n  .w-col-medium-3 {\n    width: 25%;\n  }\n  .w-col-medium-4 {\n    width: 33.33333333%;\n  }\n  .w-col-medium-5 {\n    width: 41.66666667%;\n  }\n  .w-col-medium-6 {\n    width: 50%;\n  }\n  .w-col-medium-7 {\n    width: 58.33333333%;\n  }\n  .w-col-medium-8 {\n    width: 66.66666667%;\n  }\n  .w-col-medium-9 {\n    width: 75%;\n  }\n  .w-col-medium-10 {\n    width: 83.33333333%;\n  }\n  .w-col-medium-11 {\n    width: 91.66666667%;\n  }\n  .w-col-medium-12 {\n    width: 100%;\n  }\n  .w-col-stack {\n    width: 100%;\n    left: auto;\n    right: auto;\n  }\n}\n@media screen and (max-width: 767px) {\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: inherit !important;\n  }\n  .w-hidden-small {\n    display: none !important;\n  }\n  .w-row,\n  .w-container .w-row {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .w-col {\n    width: 100%;\n    left: auto;\n    right: auto;\n  }\n  .w-col-small-1 {\n    width: 8.33333333%;\n  }\n  .w-col-small-2 {\n    width: 16.66666667%;\n  }\n  .w-col-small-3 {\n    width: 25%;\n  }\n  .w-col-small-4 {\n    width: 33.33333333%;\n  }\n  .w-col-small-5 {\n    width: 41.66666667%;\n  }\n  .w-col-small-6 {\n    width: 50%;\n  }\n  .w-col-small-7 {\n    width: 58.33333333%;\n  }\n  .w-col-small-8 {\n    width: 66.66666667%;\n  }\n  .w-col-small-9 {\n    width: 75%;\n  }\n  .w-col-small-10 {\n    width: 83.33333333%;\n  }\n  .w-col-small-11 {\n    width: 91.66666667%;\n  }\n  .w-col-small-12 {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 479px) {\n  .w-container {\n    max-width: none;\n  }\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: inherit !important;\n  }\n  .w-hidden-small {\n    display: inherit !important;\n  }\n  .w-hidden-tiny {\n    display: none !important;\n  }\n  .w-col {\n    width: 100%;\n  }\n  .w-col-tiny-1 {\n    width: 8.33333333%;\n  }\n  .w-col-tiny-2 {\n    width: 16.66666667%;\n  }\n  .w-col-tiny-3 {\n    width: 25%;\n  }\n  .w-col-tiny-4 {\n    width: 33.33333333%;\n  }\n  .w-col-tiny-5 {\n    width: 41.66666667%;\n  }\n  .w-col-tiny-6 {\n    width: 50%;\n  }\n  .w-col-tiny-7 {\n    width: 58.33333333%;\n  }\n  .w-col-tiny-8 {\n    width: 66.66666667%;\n  }\n  .w-col-tiny-9 {\n    width: 75%;\n  }\n  .w-col-tiny-10 {\n    width: 83.33333333%;\n  }\n  .w-col-tiny-11 {\n    width: 91.66666667%;\n  }\n  .w-col-tiny-12 {\n    width: 100%;\n  }\n}\n.w-widget {\n  position: relative;\n}\n.w-widget-map {\n  width: 100%;\n  height: 400px;\n}\n.w-widget-map label {\n  width: auto;\n  display: inline;\n}\n.w-widget-map img {\n  max-width: inherit;\n}\n.w-widget-map .gm-style-iw {\n  text-align: center;\n}\n.w-widget-map .gm-style-iw > button {\n  display: none !important;\n}\n.w-widget-twitter {\n  overflow: hidden;\n}\n.w-widget-twitter-count-shim {\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  width: 28px;\n  height: 20px;\n  text-align: center;\n  background: white;\n  border: #758696 solid 1px;\n  border-radius: 3px;\n}\n.w-widget-twitter-count-shim * {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.w-widget-twitter-count-shim .w-widget-twitter-count-inner {\n  position: relative;\n  font-size: 15px;\n  line-height: 12px;\n  text-align: center;\n  color: #999;\n  font-family: serif;\n}\n.w-widget-twitter-count-shim .w-widget-twitter-count-clear {\n  position: relative;\n  display: block;\n}\n.w-widget-twitter-count-shim.w--large {\n  width: 36px;\n  height: 28px;\n}\n.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {\n  font-size: 18px;\n  line-height: 18px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical) {\n  margin-left: 5px;\n  margin-right: 8px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large {\n  margin-left: 6px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):before,\n.w-widget-twitter-count-shim:not(.w--vertical):after {\n  top: 50%;\n  left: 0;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):before {\n  border-color: rgba(117, 134, 150, 0);\n  border-right-color: #5d6c7b;\n  border-width: 4px;\n  margin-left: -9px;\n  margin-top: -4px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {\n  border-width: 5px;\n  margin-left: -10px;\n  margin-top: -5px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):after {\n  border-color: rgba(255, 255, 255, 0);\n  border-right-color: white;\n  border-width: 4px;\n  margin-left: -8px;\n  margin-top: -4px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {\n  border-width: 5px;\n  margin-left: -9px;\n  margin-top: -5px;\n}\n.w-widget-twitter-count-shim.w--vertical {\n  width: 61px;\n  height: 33px;\n  margin-bottom: 8px;\n}\n.w-widget-twitter-count-shim.w--vertical:before,\n.w-widget-twitter-count-shim.w--vertical:after {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.w-widget-twitter-count-shim.w--vertical:before {\n  border-color: rgba(117, 134, 150, 0);\n  border-top-color: #5d6c7b;\n  border-width: 5px;\n  margin-left: -5px;\n}\n.w-widget-twitter-count-shim.w--vertical:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: white;\n  border-width: 4px;\n  margin-left: -4px;\n}\n.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {\n  font-size: 18px;\n  line-height: 22px;\n}\n.w-widget-twitter-count-shim.w--vertical.w--large {\n  width: 76px;\n}\n.w-widget-gplus {\n  overflow: hidden;\n}\n.w-background-video {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n  color: white;\n}\n.w-background-video > video {\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  right: -100%;\n  bottom: -100%;\n  top: -100%;\n  left: -100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -100;\n}\n.w-background-video > video::-webkit-media-controls-start-playback-button {\n  display: none !important;\n  -webkit-appearance: none;\n}\n.w-slider {\n  position: relative;\n  height: 300px;\n  text-align: center;\n  background: #dddddd;\n  clear: both;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.w-slider-mask {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  height: 100%;\n  white-space: nowrap;\n}\n.w-slide {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  height: 100%;\n  white-space: normal;\n  text-align: left;\n}\n.w-slider-nav {\n  position: absolute;\n  z-index: 2;\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  padding-top: 10px;\n  height: 40px;\n  text-align: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.w-slider-nav.w-round > div {\n  border-radius: 100%;\n}\n.w-slider-nav.w-num > div {\n  width: auto;\n  height: auto;\n  padding: 0.2em 0.5em;\n  font-size: inherit;\n  line-height: inherit;\n}\n.w-slider-nav.w-shadow > div {\n  box-shadow: 0 0 3px rgba(51, 51, 51, 0.4);\n}\n.w-slider-nav-invert {\n  color: #fff;\n}\n.w-slider-nav-invert > div {\n  background-color: rgba(34, 34, 34, 0.4);\n}\n.w-slider-nav-invert > div.w-active {\n  background-color: #222;\n}\n.w-slider-dot {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  background-color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  margin: 0 3px 0.5em;\n  transition: background-color 100ms, color 100ms;\n}\n.w-slider-dot.w-active {\n  background-color: #fff;\n}\n.w-slider-arrow-left,\n.w-slider-arrow-right {\n  position: absolute;\n  width: 80px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  cursor: pointer;\n  overflow: hidden;\n  color: white;\n  font-size: 40px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.w-slider-arrow-left [class^=\"w-icon-\"],\n.w-slider-arrow-right [class^=\"w-icon-\"],\n.w-slider-arrow-left [class*=\" w-icon-\"],\n.w-slider-arrow-right [class*=\" w-icon-\"] {\n  position: absolute;\n}\n.w-slider-arrow-left {\n  z-index: 3;\n  right: auto;\n}\n.w-slider-arrow-right {\n  z-index: 4;\n  left: auto;\n}\n.w-icon-slider-left,\n.w-icon-slider-right {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 1em;\n  height: 1em;\n}\n.w-dropdown {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 900;\n}\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  position: relative;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n}\n.w-dropdown-toggle {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: inline-block;\n  cursor: pointer;\n  padding-right: 40px;\n}\n.w-icon-dropdown-toggle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  margin-right: 20px;\n  width: 1em;\n  height: 1em;\n}\n.w-dropdown-list {\n  position: absolute;\n  background: #dddddd;\n  display: none;\n  min-width: 100%;\n}\n.w-dropdown-list.w--open {\n  display: block;\n}\n.w-dropdown-link {\n  padding: 10px 20px;\n  display: block;\n  color: #222222;\n}\n.w-dropdown-link.w--current {\n  color: #0082f3;\n}\n@media screen and (max-width: 767px) {\n  .w-nav-brand {\n    padding-left: 10px;\n  }\n}\n/**\n * ## Note\n * Safari (on both iOS and OS X) does not handle viewport units (vh, vw) well.\n * For example percentage units do not work on descendants of elements that\n * have any dimensions expressed in viewport units. It also doesn’t handle them at\n * all in `calc()`.\n */\n/**\n * Wrapper around all lightbox elements\n *\n * 1. Since the lightbox can receive focus, IE also gives it an outline.\n * 2. Fixes flickering on Chrome when a transition is in progress\n *    underneath the lightbox.\n */\n.w-lightbox-backdrop {\n  color: #000;\n  cursor: auto;\n  font-family: serif;\n  font-size: medium;\n  font-style: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-height: normal;\n  list-style: disc;\n  text-align: start;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  color: #fff;\n  font-family: \"Helvetica Neue\", Helvetica, Ubuntu, \"Segoe UI\", Verdana,\n    sans-serif;\n  font-size: 17px;\n  line-height: 1.2;\n  font-weight: 300;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 2000;\n  outline: 0;\n  /* 1 */\n  opacity: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transform: translate(0, 0);\n  /* 2 */\n}\n/**\n * Neat trick to bind the rubberband effect to our canvas instead of the whole\n * document on iOS. It also prevents a bug that causes the document underneath to scroll.\n */\n.w-lightbox-backdrop,\n.w-lightbox-container {\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.w-lightbox-content {\n  position: relative;\n  height: 100vh;\n  overflow: hidden;\n}\n.w-lightbox-view {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n}\n.w-lightbox-view:before {\n  content: \"\";\n  height: 100vh;\n}\n/* .w-lightbox-content */\n.w-lightbox-group,\n.w-lightbox-group .w-lightbox-view,\n.w-lightbox-group .w-lightbox-view:before {\n  height: 86vh;\n}\n.w-lightbox-frame,\n.w-lightbox-view:before {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*\n * 1. Remove default margin set by user-agent on the <figure> element.\n */\n.w-lightbox-figure {\n  position: relative;\n  margin: 0;\n  /* 1 */\n}\n.w-lightbox-group .w-lightbox-figure {\n  cursor: pointer;\n}\n/**\n * IE adds image dimensions as width and height attributes on the IMG tag,\n * but we need both width and height to be set to auto to enable scaling.\n */\n.w-lightbox-img {\n  width: auto;\n  height: auto;\n  max-width: none;\n}\n/**\n * 1. Reset if style is set by user on \"All Images\"\n */\n.w-lightbox-image {\n  display: block;\n  float: none;\n  /* 1 */\n  max-width: 100vw;\n  max-height: 100vh;\n}\n.w-lightbox-group .w-lightbox-image {\n  max-height: 86vh;\n}\n.w-lightbox-caption {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0.5em 1em;\n  background: rgba(0, 0, 0, 0.4);\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.w-lightbox-embed {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.w-lightbox-control {\n  position: absolute;\n  top: 0;\n  width: 4em;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.w-lightbox-left {\n  display: none;\n  bottom: 0;\n  left: 0;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 0 24 40\" width=\"24\" height=\"40\"><g transform=\"rotate(45)\"><path d=\"m0 0h5v23h23v5h-28z\" opacity=\".4\"/><path d=\"m1 1h3v23h23v3h-26z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==\");\n}\n.w-lightbox-right {\n  display: none;\n  right: 0;\n  bottom: 0;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 0 24 40\" width=\"24\" height=\"40\"><g transform=\"rotate(45)\"><path d=\"m0-0h28v28h-5v-23h-23z\" opacity=\".4\"/><path d=\"m1 1h26v26h-3v-23h-23z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+\");\n}\n/*\n * Without specifying the with and height inside the SVG, all versions of IE render the icon too small.\n * The bug does not seem to manifest itself if the elements are tall enough such as the above arrows.\n * (http://stackoverflow.com/questions/16092114/background-size-differs-in-internet-explorer)\n */\n.w-lightbox-close {\n  right: 0;\n  height: 2.6em;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 0 18 17\" width=\"18\" height=\"17\"><g transform=\"rotate(45)\"><path d=\"m0 0h7v-7h5v7h7v5h-7v7h-5v-7h-7z\" opacity=\".4\"/><path d=\"m1 1h7v-7h3v7h7v3h-7v7h-3v-7h-7z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=\");\n  background-size: 18px;\n}\n/**\n * 1. All IE versions add extra space at the bottom without this.\n */\n.w-lightbox-strip {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 1vh;\n  line-height: 0;\n  /* 1 */\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*\n * 1. We use content-box to avoid having to do `width: calc(10vh + 2vw)`\n *    which doesn’t work in Safari anyway.\n * 2. Chrome renders images pixelated when switching to GPU. Making sure\n *    the parent is also rendered on the GPU (by setting translate3d for\n *    example) fixes this behavior.\n */\n.w-lightbox-item {\n  display: inline-block;\n  width: 10vh;\n  padding: 2vh 1vh;\n  box-sizing: content-box;\n  /* 1 */\n  cursor: pointer;\n  -webkit-transform: translate3d(0, 0, 0);\n  /* 2 */\n}\n.w-lightbox-active {\n  opacity: 0.3;\n}\n.w-lightbox-thumbnail {\n  position: relative;\n  height: 10vh;\n  background: #222;\n  overflow: hidden;\n}\n.w-lightbox-thumbnail-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.w-lightbox-thumbnail .w-lightbox-tall {\n  top: 50%;\n  width: 100%;\n  transform: translate(0, -50%);\n}\n.w-lightbox-thumbnail .w-lightbox-wide {\n  left: 50%;\n  height: 100%;\n  transform: translate(-50%, 0);\n}\n/*\n * Spinner\n *\n * Absolute pixel values are used to avoid rounding errors that would cause\n * the white spinning element to be misaligned with the track.\n */\n.w-lightbox-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  margin-top: -20px;\n  margin-left: -20px;\n  border: 5px solid rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n  -webkit-animation: spin 0.8s infinite linear;\n  animation: spin 0.8s infinite linear;\n}\n.w-lightbox-spinner:after {\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  bottom: -4px;\n  left: -4px;\n  border: 3px solid transparent;\n  border-bottom-color: #fff;\n  border-radius: 50%;\n}\n/*\n * Utility classes\n */\n.w-lightbox-hide {\n  display: none;\n}\n.w-lightbox-noscroll {\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .w-lightbox-content {\n    height: 96vh;\n    margin-top: 2vh;\n  }\n  .w-lightbox-view,\n  .w-lightbox-view:before {\n    height: 96vh;\n  }\n  /* .w-lightbox-content */\n  .w-lightbox-group,\n  .w-lightbox-group .w-lightbox-view,\n  .w-lightbox-group .w-lightbox-view:before {\n    height: 84vh;\n  }\n  .w-lightbox-image {\n    max-width: 96vw;\n    max-height: 96vh;\n  }\n  .w-lightbox-group .w-lightbox-image {\n    max-width: 82.3vw;\n    max-height: 84vh;\n  }\n  .w-lightbox-left,\n  .w-lightbox-right {\n    display: block;\n    opacity: 0.5;\n  }\n  .w-lightbox-close {\n    opacity: 0.8;\n  }\n  .w-lightbox-control:hover {\n    opacity: 1;\n  }\n}\n.w-lightbox-inactive,\n.w-lightbox-inactive:hover {\n  opacity: 0;\n}\n.w-richtext:before,\n.w-richtext:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-richtext:after {\n  clear: both;\n}\n.w-richtext[contenteditable=\"true\"]:before,\n.w-richtext[contenteditable=\"true\"]:after {\n  white-space: normal;\n  white-space: initial;\n}\n.w-richtext ol,\n.w-richtext ul {\n  overflow: hidden;\n}\n.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,\n.w-richtext .w-richtext-figure-selected[data-rt-type=\"video\"] div:after {\n  outline: 2px solid #2895f7;\n}\n.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,\n.w-richtext .w-richtext-figure-selected[data-rt-type=\"image\"] div {\n  outline: 2px solid #2895f7;\n}\n.w-richtext figure.w-richtext-figure-type-video > div:after,\n.w-richtext figure[data-rt-type=\"video\"] > div:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n.w-richtext figure {\n  position: relative;\n  max-width: 60%;\n}\n.w-richtext figure > div:before {\n  cursor: default !important;\n}\n.w-richtext figure img {\n  width: 100%;\n}\n.w-richtext figure figcaption.w-richtext-figcaption-placeholder {\n  opacity: 0.6;\n}\n.w-richtext figure div {\n  /* fix incorrectly sized selection border in the data manager */\n  font-size: 0px;\n  color: transparent;\n}\n.w-richtext figure.w-richtext-figure-type-image,\n.w-richtext figure[data-rt-type=\"image\"] {\n  display: table;\n}\n.w-richtext figure.w-richtext-figure-type-image > div,\n.w-richtext figure[data-rt-type=\"image\"] > div {\n  display: inline-block;\n}\n.w-richtext figure.w-richtext-figure-type-image > figcaption,\n.w-richtext figure[data-rt-type=\"image\"] > figcaption {\n  display: table-caption;\n  caption-side: bottom;\n}\n.w-richtext figure.w-richtext-figure-type-video,\n.w-richtext figure[data-rt-type=\"video\"] {\n  width: 60%;\n  height: 0;\n}\n.w-richtext figure.w-richtext-figure-type-video iframe,\n.w-richtext figure[data-rt-type=\"video\"] iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.w-richtext figure.w-richtext-figure-type-video > div,\n.w-richtext figure[data-rt-type=\"video\"] > div {\n  width: 100%;\n}\n.w-richtext figure.w-richtext-align-center {\n  margin-right: auto;\n  margin-left: auto;\n  clear: both;\n}\n.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div,\n.w-richtext figure.w-richtext-align-center[data-rt-type=\"image\"] > div {\n  max-width: 100%;\n}\n.w-richtext figure.w-richtext-align-normal {\n  clear: both;\n}\n.w-richtext figure.w-richtext-align-fullwidth {\n  width: 100%;\n  max-width: 100%;\n  text-align: center;\n  clear: both;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.w-richtext figure.w-richtext-align-fullwidth > div {\n  display: inline-block;\n  /* padding-bottom is used for aspect ratios in video figures\n      we want the div to inherit that so hover/selection borders in the designer-canvas\n      fit right*/\n  padding-bottom: inherit;\n}\n.w-richtext figure.w-richtext-align-fullwidth > figcaption {\n  display: block;\n}\n.w-richtext figure.w-richtext-align-floatleft {\n  float: left;\n  margin-right: 15px;\n  clear: none;\n}\n.w-richtext figure.w-richtext-align-floatright {\n  float: right;\n  margin-left: 15px;\n  clear: none;\n}\n.w-nav {\n  position: relative;\n  background: #dddddd;\n  z-index: 1000;\n}\n.w-nav:before,\n.w-nav:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-nav:after {\n  clear: both;\n}\n.w-nav-brand {\n  position: relative;\n  float: left;\n  text-decoration: none;\n  color: #333333;\n}\n.w-nav-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n}\n.w-nav-link.w--current {\n  color: #0082f3;\n}\n.w-nav-menu {\n  position: relative;\n  float: right;\n}\n[data-nav-menu-open] {\n  display: block !important;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #c8c8c8;\n  text-align: center;\n  overflow: visible;\n  min-width: 200px;\n}\n.w--nav-link-open {\n  display: block;\n  position: relative;\n}\n.w-nav-overlay {\n  position: absolute;\n  overflow: hidden;\n  display: none;\n  top: 100%;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n.w-nav-overlay [data-nav-menu-open] {\n  top: 0;\n}\n.w-nav[data-animation=\"over-left\"] .w-nav-overlay {\n  width: auto;\n}\n.w-nav[data-animation=\"over-left\"] .w-nav-overlay,\n.w-nav[data-animation=\"over-left\"] [data-nav-menu-open] {\n  right: auto;\n  z-index: 1;\n  top: 0;\n}\n.w-nav[data-animation=\"over-right\"] .w-nav-overlay {\n  width: auto;\n}\n.w-nav[data-animation=\"over-right\"] .w-nav-overlay,\n.w-nav[data-animation=\"over-right\"] [data-nav-menu-open] {\n  left: auto;\n  z-index: 1;\n  top: 0;\n}\n.w-nav-button {\n  position: relative;\n  float: right;\n  padding: 18px;\n  font-size: 24px;\n  display: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.w-nav-button.w--open {\n  background-color: #c8c8c8;\n  color: white;\n}\n.w-nav[data-collapse=\"all\"] .w-nav-menu {\n  display: none;\n}\n.w-nav[data-collapse=\"all\"] .w-nav-button {\n  display: block;\n}\n.w--nav-dropdown-open {\n  display: block;\n}\n.w--nav-dropdown-toggle-open {\n  display: block;\n}\n.w--nav-dropdown-list-open {\n  position: static;\n}\n@media screen and (max-width: 991px) {\n  .w-nav[data-collapse=\"medium\"] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse=\"medium\"] .w-nav-button {\n    display: block;\n  }\n}\n@media screen and (max-width: 767px) {\n  .w-nav[data-collapse=\"small\"] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse=\"small\"] .w-nav-button {\n    display: block;\n  }\n  .w-nav-brand {\n    padding-left: 10px;\n  }\n}\n@media screen and (max-width: 479px) {\n  .w-nav[data-collapse=\"tiny\"] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse=\"tiny\"] .w-nav-button {\n    display: block;\n  }\n}\n.w-tabs {\n  position: relative;\n}\n.w-tabs:before,\n.w-tabs:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-tabs:after {\n  clear: both;\n}\n.w-tab-menu {\n  position: relative;\n}\n.w-tab-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  padding: 9px 30px;\n  text-align: left;\n  cursor: pointer;\n  color: #222222;\n  background-color: #dddddd;\n}\n.w-tab-link.w--current {\n  background-color: #c8c8c8;\n}\n.w-tab-content {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n.w-tab-pane {\n  position: relative;\n  display: none;\n}\n.w--tab-active {\n  display: block;\n}\n@media screen and (max-width: 479px) {\n  .w-tab-link {\n    display: block;\n  }\n}\n.w-ix-emptyfix:after {\n  content: \"\";\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.w-dyn-empty {\n  padding: 10px;\n  background-color: #dddddd;\n}\n.w-dyn-hide {\n  display: none !important;\n}\n.w-dyn-bind-empty {\n  display: none !important;\n}\n.w-condition-invisible {\n  display: none !important;\n}\n\n.w-layout-grid {\n  display: -ms-grid;\n  display: grid;\n  grid-auto-columns: 1fr;\n  -ms-grid-columns: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  -ms-grid-rows: auto auto;\n  grid-template-rows: auto auto;\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n}\n\nbody {\n  font-family: Roboto, sans-serif;\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n}\n\nh1 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 38px;\n  line-height: 44px;\n  font-weight: 500;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 32px;\n  line-height: 36px;\n  font-weight: 500;\n}\n\nh3 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 500;\n}\n\nh4 {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n\nh6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\np {\n  margin-bottom: 10px;\n  line-height: 24px;\n  font-weight: 300;\n}\n\n.nav-menu {\n  font-family: Inconsolata, monospace;\n  font-size: 14px;\n  text-align: center;\n}\n\n.nav-link {\n  padding: 26px 13px;\n  color: hsla(0, 0%, 100%, 0.92);\n  font-size: 20px;\n  line-height: 18px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.nav-link:hover {\n  color: #fff;\n}\n\n.nav-link.w--current {\n  color: #fff;\n  text-decoration: none;\n}\n\n.nav-link.logo {\n  padding-top: 23px;\n  padding-bottom: 23px;\n  font-family: \"Roboto Slab\", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n}\n\n.nav-bar {\n  background-color: transparent;\n}\n\n.hero {\n  height: 100vh;\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 100%,\n      rgba(0, 0, 0, 0.46),\n      rgba(0, 0, 0, 0.82) 62%\n    ),\n    url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n  background-position: 0px 0px, 50% 50%;\n  background-size: auto, cover;\n  background-repeat: repeat, no-repeat;\n}\n\n.hero-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(0%, -50%);\n  color: #fff;\n  text-align: center;\n}\n\n.hero-heading {\n  margin-top: 0px;\n  margin-bottom: 40px;\n  font-family: Oswald, sans-serif;\n  color: #fff;\n  font-size: 100px;\n  line-height: 85px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.hero-subtitle {\n  color: hsla(0, 0%, 100%, 0.7);\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.subpage-background {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 50%,\n      #000,\n      transparent 0%,\n      #000 69%\n    ),\n    url(" + ___CSS_LOADER_URL_IMPORT_1___ + ");\n  background-position: 0px 0px, 50% 0%;\n  background-size: auto, cover;\n  background-repeat: repeat, no-repeat;\n  background-attachment: scroll, fixed;\n  font-weight: 300;\n}\n\n.section-title {\n  padding: 85px 2.5%;\n  color: #fff;\n  text-align: center;\n}\n\n.page-title {\n  margin-top: 0px;\n  margin-bottom: 40px;\n  margin-left: 0px;\n  font-family: Oswald, sans-serif;\n  font-size: 45px;\n  line-height: 51px;\n  font-weight: 200;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.page-title.about-header {\n  margin-left: 100px;\n  text-align: left;\n}\n\n.section {\n  padding-right: 2.5%;\n  padding-bottom: 50px;\n  padding-left: 2.5%;\n  border-radius: 5px;\n}\n\n.bio-photo {\n  margin-bottom: 45px;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 17px;\n  background-color: #fff;\n  color: #000;\n}\n\n.footer {\n  padding-top: 43px;\n  padding-bottom: 43px;\n  background-color: transparent;\n  color: #222;\n  text-align: center;\n}\n\n.footer.homepage {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.footer-link {\n  margin-right: 6px;\n  margin-left: 6px;\n  opacity: 0.82;\n  transition: opacity 200ms ease;\n  color: #222;\n  text-decoration: none;\n}\n\n.footer-link:hover {\n  opacity: 0.76;\n  color: #fff;\n}\n\n.social-link {\n  width: 25px;\n  margin-right: 5px;\n  margin-left: 5px;\n  opacity: 0.5;\n  transition: opacity 200ms ease;\n}\n\n.social-link:hover {\n  opacity: 1;\n}\n\n.social-wrapper {\n  margin-top: 5px;\n}\n\n.play-music {\n  position: relative;\n  width: 100%;\n}\n\n.circle {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.85);\n  transform: translate(-50%, -50%);\n}\n\n.play-arrow {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 2;\n  width: auto;\n  height: auto;\n  margin-left: 7px;\n  border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent;\n  border-left: 45px solid #fff;\n  transform: translate(-50%, -50%);\n}\n\n.track-listing-row {\n  margin-bottom: 45px;\n  padding-top: 20px;\n  border-top: 1px solid hsla(0, 0%, 60%, 0.35);\n}\n\n.featured-track {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n.track-listing-time {\n  text-align: right;\n}\n\n.track-link {\n  color: #fff;\n  text-decoration: none;\n}\n\n.small-grey-text {\n  display: block;\n  margin-bottom: -16px;\n  color: #999;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.small-grey-text.album {\n  color: #efe866;\n  font-size: 15px;\n}\n\n.tour-title {\n  margin-bottom: 100px;\n  text-align: center;\n}\n\n.rsvp-button {\n  padding: 5px 15px;\n  border: 1px solid #f7e769;\n  background-color: transparent;\n  transition: color 200ms ease, border-color 200ms ease;\n  color: #f7e769;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 1px;\n}\n\n.rsvp-button:hover {\n  border-color: #fff;\n  color: #fff;\n}\n\n.tour-date-row {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.photo-block {\n  height: 250px;\n  margin: 20px 10px;\n}\n\n.contact-h3 {\n  margin-top: 0px;\n  margin-bottom: 20px;\n  font-size: 27px;\n  line-height: 28px;\n  font-weight: 300;\n}\n\n.contact-row {\n  padding-top: 58px;\n  padding-bottom: 58px;\n  border-top: 1px solid hsla(0, 0%, 60%, 0.35);\n  text-align: center;\n}\n\n.contact-link {\n  display: inline-block;\n  margin-top: 5px;\n  color: #999;\n  text-decoration: none;\n}\n\n.contact-link:hover {\n  color: #fff;\n}\n\n.form {\n  display: block;\n  max-width: 550px;\n  margin-top: 54px;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: left;\n}\n\n.submit-button {\n  display: block;\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 30px;\n  padding-left: 30px;\n  border: 2px solid #fff;\n  background-color: transparent;\n  transition: background-color 200ms ease, color 200ms ease;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.submit-button:hover {\n  background-color: #fff;\n  color: #333;\n}\n\n.submit-button.sign-up {\n  position: relative;\n  top: -5px;\n  display: inline-block;\n  margin-top: 0px;\n}\n\n.input-inline {\n  display: inline-block;\n  max-width: 414px;\n  margin-right: 20px;\n}\n\n.album-art {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.logo {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-family: \"Changa One\", Impact, sans-serif;\n  color: #fdfdfd;\n  font-size: 19px;\n  line-height: 23px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.brand-link {\n  z-index: 1;\n  padding-top: 23px;\n  padding-bottom: 23px;\n}\n\n.brand-link.w--current {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.hero-container {\n  position: static;\n  margin-top: 25vh;\n  text-align: center;\n}\n\n.button {\n  padding: 11px 19px;\n  border: 1px solid rgba(248, 199, 41, 0.7);\n  background-color: transparent;\n  color: rgba(248, 199, 41, 0.7);\n  font-size: 14px;\n}\n\n.button.big {\n  margin-right: 9px;\n  margin-left: 9px;\n  padding: 11px 26px;\n  border-style: none;\n  border-color: #fff;\n  background-color: #ec1c23;\n  transition: border 200ms ease, color 200ms ease;\n  font-family: \"Roboto Slab\", sans-serif;\n  color: #fff;\n  font-size: 16px;\n}\n\n.button.big:hover {\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.contact {\n  padding-right: 29px;\n  padding-left: 29px;\n  background-color: rgba(248, 199, 41, 0.7);\n}\n\n.content-wrapper {\n  margin-top: 78px;\n}\n\n.footer-text {\n  margin-top: 13px;\n  color: hsla(0, 0%, 100%, 0.43);\n}\n\n.featured-title {\n  font-family: Graduate, sans-serif;\n}\n\n.song-list-item {\n  padding-top: 19px;\n  padding-bottom: 19px;\n  border-top: 1px solid hsla(0, 0%, 100%, 0.28);\n  text-align: center;\n}\n\n.album-heading {\n  margin-top: 0px;\n  margin-bottom: 40px;\n  font-size: 23px;\n  line-height: 27px;\n  font-weight: 400;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.album-columns {\n  text-align: center;\n}\n\n.song-title {\n  color: #f0e567;\n}\n\n.venue {\n  font-weight: 500;\n}\n\n.venue-list-item {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-top: 1px solid hsla(0, 0%, 100%, 0.3);\n}\n\n.photo-list {\n  display: block;\n  width: 80%;\n  margin-right: auto;\n  margin-bottom: 69px;\n  margin-left: auto;\n  text-align: center;\n}\n\n.photo {\n  margin-bottom: 18px;\n  border-radius: 5px;\n  box-shadow: 0 1px 50px 0 rgba(0, 0, 0, 0.51);\n}\n\n.field {\n  font-weight: 300;\n}\n\n.input {\n  margin-bottom: 20px;\n  border-style: none;\n  background-color: hsla(0, 0%, 40%, 0.64);\n  color: #fff;\n}\n\n.input:focus {\n  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.77);\n}\n\n.input.textarea {\n  min-height: 110px;\n}\n\n.success {\n  padding-top: 29px;\n  background-color: rgba(30, 187, 0, 0.35);\n}\n\n.image {\n  position: absolute;\n  left: auto;\n}\n\n.grid {\n  display: -ms-grid;\n  display: grid;\n  width: 75%;\n  min-height: 500px;\n  float: none;\n  flex-direction: row;\n  justify-items: stretch;\n  align-items: stretch;\n  align-content: space-around;\n  grid-auto-columns: 1fr;\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-areas: \"Area Area-2\";\n  -ms-grid-columns: 1fr 16px 1fr;\n  grid-template-columns: 1fr 1fr;\n  -ms-grid-rows: auto 16px auto 16px auto;\n  grid-template-rows: auto auto auto;\n}\n\n.div-block {\n  width: 100px;\n}\n\n.artist-box {\n  position: relative;\n  width: auto;\n  border-radius: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ");\n  background-position: 50% 50%;\n  background-size: cover;\n}\n\n.artist-box.taco {\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 50%,\n      transparent 26%,\n      #000\n    ),\n    url(" + ___CSS_LOADER_URL_IMPORT_3___ + ");\n  background-position: 0px 0px, 50% 0%;\n  background-size: auto, cover;\n}\n\n.div-block-2 {\n  position: absolute;\n  left: 0%;\n  top: auto;\n  right: 0%;\n  bottom: 0%;\n  display: block;\n  height: 100px;\n  border-radius: 0px 0px 20px 20px;\n  background-color: #fff;\n  background-image: linear-gradient(\n    180deg,\n    hsla(0, 0%, 100%, 0.5),\n    hsla(0, 0%, 100%, 0.5)\n  );\n}\n\n.heading {\n  font-family: Montserrat, sans-serif;\n  color: #000;\n  text-align: center;\n}\n\n.section-2 {\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.slide {\n  background-image: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ");\n  background-position: 50% 0%;\n  background-size: cover;\n}\n\n.slide-3 {\n  background-image: url(\"/images/jerry-o.jpg\");\n  background-position: center top;\n  background-size: cover;\n  box-shadow: inset 0 0 100px black;\n}\n\n.slider {\n  height: 500px;\n}\n\n.left-arrow {\n  width: 80px;\n}\n\n.div-block-3 {\n  display: flex;\n  height: 80px;\n  margin-right: 80px;\n  margin-left: 80px;\n  padding-right: 0px;\n  padding-left: 0px;\n  justify-content: space-between;\n}\n\n.heading-2 {\n  font-family: Graduate, sans-serif;\n  font-size: 37px;\n}\n\n.image-2 {\n  background-color: #000;\n  color: #fff;\n}\n\n.div-block-4 {\n  display: flex;\n  align-items: center;\n}\n\n.music-page {\n  background-image: radial-gradient(\n      circle farthest-side at 50% 50%,\n      transparent,\n      #000\n    ),\n    url(" + ___CSS_LOADER_URL_IMPORT_4___ + ");\n  background-position: 0px 0px, 50% 50%;\n  background-size: auto, cover;\n}\n\n.collection-list {\n  margin-top: 0px;\n}\n\n.collection-list-wrapper {\n  margin-bottom: 40px;\n  padding: 60px 60px 0px;\n}\n\n.collection-list-wrapper-2 {\n  margin-top: 40px;\n  margin-right: 0px;\n  margin-bottom: 60px;\n  padding-top: 0px;\n  padding-right: 60px;\n  padding-left: 60px;\n}\n\n.gamefilm-page {\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 50%,\n      transparent,\n      #000 80%\n    ),\n    url(" + ___CSS_LOADER_URL_IMPORT_5___ + ");\n  background-position: 0px 0px, 0px 0px;\n  background-size: auto, cover;\n}\n\n.collection-item {\n  padding-bottom: 40px;\n}\n\n.heading-3 {\n  font-family: Graduate, sans-serif;\n  /* text-align: center; */\n}\n\n.block-quote {\n  width: 50%;\n  margin-right: 100px;\n  margin-left: 100px;\n  padding-right: 200px;\n  padding-left: 10px;\n  text-align: left;\n}\n\n.about-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 50%,\n      transparent,\n      #000 58%\n    ),\n    url(" + ___CSS_LOADER_URL_IMPORT_6___ + ");\n  background-position: 0px 0px, 0px 0px;\n  background-size: auto, cover;\n}\n\n.artist-page {\n  background-image: linear-gradient(0deg, transparent, #000 96%),\n    url(" + ___CSS_LOADER_URL_IMPORT_7___ + ");\n  background-position: 0px 0px, 50% 50%;\n  background-size: auto, cover;\n}\n\n.paragraph {\n  text-align: center;\n}\n\n.heading-4 {\n  text-align: center;\n}\n\n.paragraph-2 {\n  text-align: center;\n}\n\n.text-block {\n  text-align: center;\n}\n\n.text-block.contact-text {\n  margin-bottom: 40px;\n}\n\n.text-block-2 {\n  text-align: center;\n}\n\n.text-block-2.contact-text {\n  margin-bottom: 40px;\n}\n\n.div-block-5 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.text-block-3 {\n  text-align: center;\n}\n\n.text-span {\n  color: #400202;\n}\n\n.head-span {\n  color: #ec1c23;\n}\n\n.text-span-2 {\n  font-weight: 700;\n}\n\n@media screen and (max-width: 991px) {\n  .nav-menu {\n    padding-top: 18px;\n    padding-bottom: 18px;\n    border-top: 1px solid #000;\n    background-color: rgba(0, 0, 0, 0.85);\n  }\n  .nav-link {\n    padding-top: 16px;\n    padding-bottom: 16px;\n    font-size: 21px;\n    line-height: 27px;\n    text-align: center;\n  }\n  .subpage-background {\n    background-size: auto, cover;\n  }\n  .menu-button {\n    padding: 20px 0px 20px 20px;\n    color: hsla(0, 0%, 100%, 0.62);\n    font-size: 25px;\n    line-height: 22px;\n  }\n  .menu-button:hover {\n    color: #fff;\n  }\n  .menu-button.w--open {\n    background-color: transparent;\n    color: #fff;\n  }\n  .menu-text {\n    margin-right: 3px;\n    padding: 2px;\n    float: left;\n    font-size: 12px;\n    line-height: 19px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n  .menu-text:hover {\n    color: #fff;\n  }\n  .menu-icon {\n    float: left;\n  }\n  .block-quote {\n    padding-right: 200px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .hero-heading {\n    font-size: 61px;\n  }\n  .footer {\n    padding-right: 14px;\n    padding-left: 14px;\n  }\n  .rsvp-button {\n    margin-top: 15px;\n  }\n  .tour-date-row {\n    text-align: center;\n  }\n  .contact-link {\n    margin-bottom: 30px;\n  }\n  .submit-button.sign-up {\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .input-inline {\n    max-width: 100%;\n    margin-bottom: 20px;\n  }\n  .menu-button {\n    margin-right: 7px;\n  }\n  .album-list {\n    margin-bottom: 60px;\n  }\n  .venue {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 15px;\n  }\n  .venue-list-item {\n    padding-top: 16px;\n    padding-bottom: 16px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .hero-heading {\n    font-size: 39px;\n    line-height: 52px;\n  }\n  .contact-row {\n    padding-bottom: 16px;\n  }\n  .hero-container {\n    padding-right: 13px;\n    padding-left: 13px;\n  }\n  .button.big {\n    width: 100%;\n    margin-right: 0px;\n    margin-bottom: 12px;\n    margin-left: 0px;\n  }\n}\n\n#w-node-c2d8d88ac434-49055390 {\n  -ms-grid-row-align: auto;\n  align-self: auto;\n  -ms-grid-column: span 1;\n  grid-column-start: span 1;\n  -ms-grid-column-span: 1;\n  grid-column-end: span 1;\n  -ms-grid-row: span 3;\n  grid-row-start: span 3;\n  -ms-grid-row-span: 3;\n  grid-row-end: span 3;\n}\n\n#w-node-584f6c6cbeae-49055390 {\n  -ms-grid-column: span 1;\n  grid-column-start: span 1;\n  -ms-grid-column-span: 1;\n  grid-column-end: span 1;\n  -ms-grid-row: span 3;\n  grid-row-start: span 3;\n  -ms-grid-row-span: 3;\n  grid-row-end: span 3;\n}\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. CUSTOM FOR WEBFLOW: Removed the input[type=\"submit\"] selector to reduce\n *    specificity and defer to the .w-button selector\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. CUSTOM FOR WEBFLOW: changed from `textfield` to `none` to normalize iOS rounded input\n * 2. CUSTOM FOR WEBFLOW: box-sizing: content-box rule removed\n *    (similar to normalize.css >=4.0.0)\n */\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n  /* 1 */\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n", "",{"version":3,"sources":["C:/Users/Zak/Documents/Code/pmg-site/css/webflow.css"],"names":[],"mappings":"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;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;AACf;AACA;;;EAGE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;;;;EAIE,aAAa;AACf;AACA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,SAAS;EACT,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,cAAc;AAChB;AACA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;;EAEE,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;;EAEE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;;EAEE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;AACb;AACA;EACE,wBAAwB;AAC1B;AACA;EACE;IACE,gBAAgB;EAClB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,kBAAkB;EACpB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,UAAU;IACV,WAAW;EACb;AACF;AACA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,wBAAwB;EAC1B;EACA;;IAEE,cAAc;IACd,eAAe;EACjB;EACA;IACE,WAAW;IACX,UAAU;IACV,WAAW;EACb;EACA;IACE,kBAAkB;EACpB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;AACF;AACA;EACE;IACE,eAAe;EACjB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,WAAW;EACb;EACA;IACE,kBAAkB;EACpB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;AACF;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,aAAa;AACf;AACA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,QAAQ;EACR,OAAO;EACP,yBAAyB;EACzB,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,oCAAoC;EACpC,2BAA2B;EAC3B,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,oCAAoC;EACpC,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;;EAEE,SAAS;EACT,SAAS;EACT,yBAAyB;EACzB,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,oCAAoC;EACpC,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,oCAAoC;EACpC,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,UAAU;EACV,WAAW;EACX,oBAAiB;KAAjB,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,wBAAwB;EACxB,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,6CAA6C;EAC7C,qCAAqC;AACvC;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,UAAU;EACV,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,QAAQ;EACR,SAAS;EACT,OAAO;EACP,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,6CAA6C;EAC7C,qCAAqC;AACvC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,WAAW;AACb;AACA;EACE,uCAAuC;AACzC;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,UAAU;EACV,WAAW;EACX,0CAA0C;EAC1C,eAAe;EACf,mBAAmB;EACnB,+CAA+C;AACjD;AACA;EACE,sBAAsB;AACxB;AACA;;EAEE,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,6CAA6C;EAC7C,qCAAqC;EACrC,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;AACA;;;;EAIE,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,UAAU;EACV,UAAU;AACZ;AACA;;EAEE,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,YAAY;EACZ,UAAU;EACV,WAAW;AACb;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;AACA;;;EAGE,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE;IACE,kBAAkB;EACpB;AACF;AACA;;;;;;EAME;AACF;;;;;;EAME;AACF;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,6BAAoB;EAApB,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;EACjB,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,WAAW;EACX;cACY;EACZ,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,8BAA8B;EAC9B,aAAa;EACb,UAAU;EACV,MAAM;EACN,UAAU;EACV,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,wCAAwC;EACxC,kCAAkC;EAClC,MAAM;AACR;AACA;;;EAGE;AACF;;EAEE,YAAY;EACZ,cAAc;EACd,iCAAiC;AACnC;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,UAAU;AACZ;AACA;EACE,WAAW;EACX,aAAa;AACf;AACA,wBAAwB;AACxB;;;EAGE,YAAY;AACd;AACA;;EAEE,qBAAqB;EACrB,sBAAsB;AACxB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,SAAS;EACT,MAAM;AACR;AACA;EACE,eAAe;AACjB;AACA;;;EAGE;AACF;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;;EAEE;AACF;EACE,cAAc;EACd,WAAW;EACX,MAAM;EACN,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,kBAAkB;EAClB,8BAA8B;EAC9B,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,qBAAqB;EACrB,4BAA4B;EAC5B,2BAA2B;EAC3B,eAAe;EAEf,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,SAAS;EACT,OAAO;EACP,qNAAqN;EACrN,2UAA2U;AAC7U;AACA;EACE,aAAa;EACb,QAAQ;EACR,SAAS;EACT,0NAA0N;EAC1N,+UAA+U;AACjV;AACA;;;;EAIE;AACF;EACE,QAAQ;EACR,aAAa;EACb,8OAA8O;EAC9O,2WAA2W;EAC3W,qBAAqB;AACvB;AACA;;EAEE;AACF;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,cAAc;EACd,cAAc;EACd,MAAM;EACN,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;;;;;;EAME;AACF;EACE,qBAAqB;EACrB,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,MAAM;EACN,eAAe;EACf,uCAAuC;EACvC,MAAM;AACR;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;AACA;EACE,QAAQ;EACR,WAAW;EAGX,6BAA6B;AAC/B;AACA;EACE,SAAS;EACT,YAAY;EAGZ,6BAA6B;AAC/B;AACA;;;;;EAKE;AACF;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;EAClB,4CAA4C;EAC5C,oCAAoC;AACtC;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,UAAU;EACV,6BAA6B;EAC7B,yBAAyB;EACzB,kBAAkB;AACpB;AACA;;EAEE;AACF;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;AACA;EACE;IACE,YAAY;IACZ,eAAe;EACjB;EACA;;IAEE,YAAY;EACd;EACA,wBAAwB;EACxB;;;IAGE,YAAY;EACd;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;EACA;;IAEE,cAAc;IACd,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;AACF;AACA;;EAEE,UAAU;AACZ;AACA;;EAEE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;;EAEE,mBAAoB;EAApB,oBAAoB;AACtB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,0BAA0B;AAC5B;AACA;;EAEE,0BAA0B;AAC5B;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,OAAO;EACP,MAAM;EACN,QAAQ;EACR,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,+DAA+D;EAC/D,cAAc;EACd,kBAAkB;AACpB;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,qBAAqB;AACvB;AACA;;EAEE,sBAAsB;EACtB,oBAAoB;AACtB;AACA;;EAEE,UAAU;EACV,SAAS;AACX;AACA;;EAEE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;AACA;;EAEE,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;AACA;;EAEE,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB;;gBAEc;EACd,uBAAuB;AACzB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;AACf;AACA;;EAEE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;AACb;AACA;EACE,MAAM;AACR;AACA;EACE,WAAW;AACb;AACA;;EAEE,WAAW;EACX,UAAU;EACV,MAAM;AACR;AACA;EACE,WAAW;AACb;AACA;;EAEE,UAAU;EACV,UAAU;EACV,MAAM;AACR;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,aAAa;EACb,eAAe;EACf,6CAA6C;EAC7C,qCAAqC;EACrC,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;AACF;AACA;EACE;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;EACA;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;AACF;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE;IACE,cAAc;EAChB;AACF;AACA;EACE,WAAW;AACb;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;AAPA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;AACA;EACE,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,8BAA8B;EAC9B,wBAAwB;EACxB,6BAA6B;EAC7B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;EAC/B,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB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EA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EAIE,aAAa;EAKb,sBAAsB;EAItB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE;IACE,iBAAiB;IACjB,oBAAoB;IACpB,0BAA0B;IAC1B,qCAAqC;EACvC;EACA;IACE,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;EACpB;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;IAC3B,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,6BAA6B;IAC7B,WAAW;EACb;EACA;IACE,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,yBAAyB;EAC3B;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,mBAAmB;EACrB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;EAClB;AACF;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,uBAAuB;EACvB,yBAAyB;EACzB,uBAAuB;EACvB,uBAAuB;EACvB,oBAAoB;EACpB,sBAAsB;EACtB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,uBAAuB;EACvB,uBAAuB;EACvB,oBAAoB;EACpB,sBAAsB;EACtB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA,2EAA2E;AAC3E;;;;EAIE;AACF;EACE,uBAAuB;EACvB,MAAM;EACN,0BAA0B;EAC1B,MAAM;EACN,8BAA8B;EAC9B,MAAM;AACR;AACA;;EAEE;AACF;EACE,SAAS;AACX;AACA;+EAC+E;AAC/E;;;;;EAKE;AACF;;;;;;;;;;;;;EAaE,cAAc;AAChB;AACA;;;EAGE;AACF;;;;EAIE,qBAAqB;EACrB,MAAM;EACN,wBAAwB;EACxB,MAAM;AACR;AACA;;;EAGE;AACF;EACE,aAAa;EACb,SAAS;AACX;AACA;;;EAGE;AACF;;EAEE,aAAa;AACf;AACA;+EAC+E;AAC/E;;EAEE;AACF;EACE,6BAA6B;AAC/B;AACA;;;EAGE;AACF;;EAEE,UAAU;AACZ;AACA;+EAC+E;AAC/E;;EAEE;AACF;EACE,yBAAyB;AAC3B;AACA;;EAEE;AACF;;EAEE,iBAAiB;AACnB;AACA;;EAEE;AACF;EACE,kBAAkB;AACpB;AACA;;;EAGE;AACF;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;;EAEE;AACF;EACE,cAAc;AAChB;AACA;;EAEE;AACF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;+EAC+E;AAC/E;;EAEE;AACF;EACE,SAAS;AACX;AACA;;EAEE;AACF;EACE,gBAAgB;AAClB;AACA;+EAC+E;AAC/E;;EAEE;AACF;EACE,gBAAgB;AAClB;AACA;;EAEE;AACF;EACE,uBAAuB;EACvB,SAAS;AACX;AACA;;EAEE;AACF;EACE,cAAc;AAChB;AACA;;EAEE;AACF;;;;EAIE,iCAAiC;EACjC,cAAc;AAChB;AACA;+EAC+E;AAC/E;;;EAGE;AACF;;;;;EAKE;AACF;;;;;EAKE,cAAc;EACd,MAAM;EACN,aAAa;EACb,MAAM;EACN,SAAS;EACT,MAAM;AACR;AACA;;EAEE;AACF;EACE,iBAAiB;AACnB;AACA;;;;;EAKE;AACF;;EAEE,oBAAoB;AACtB;AACA;;;;;;;;EAQE;AACF;;;EAGE,0BAA0B;EAC1B,MAAM;EACN,eAAe;EACf,MAAM;AACR;AACA;;EAEE;AACF;;EAEE,eAAe;AACjB;AACA;;EAEE;AACF;;EAEE,SAAS;EACT,UAAU;AACZ;AACA;;;EAGE;AACF;EACE,mBAAmB;AACrB;AACA;;;;;;EAME;AACF;;EAEE,sBAAsB;EACtB,MAAM;EACN,UAAU;EACV,MAAM;AACR;AACA;;;;EAIE;AACF;;EAEE,YAAY;AACd;AACA;;;;EAIE;AACF;EACE,wBAAwB;EACxB,MAAM;AACR;AACA;;;;EAIE;AACF;;EAEE,wBAAwB;AAC1B;AACA;;EAEE;AACF;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;AAChC;AACA;;;EAGE;AACF;EACE,SAAS;EACT,MAAM;EACN,UAAU;EACV,MAAM;AACR;AACA;;EAEE;AACF;EACE,cAAc;AAChB;AACA;;;EAGE;AACF;EACE,iBAAiB;AACnB;AACA;+EAC+E;AAC/E;;EAEE;AACF;EACE,yBAAyB;EACzB,iBAAiB;AACnB;AACA;;EAEE,UAAU;AACZ","file":"webflow.css","sourcesContent":["@font-face {\n  font-family: \"webflow-icons\";\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,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\")\n    format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"w-icon-\"],\n[class*=\" w-icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"webflow-icons\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@import url(\"https://fonts.googleapis.com/css2?family=Graduate&family=Oswald:wght@300;400;600;700&display=swap\");\n\n.w-icon-slider-right:before {\n  content: \"\\e600\";\n}\n.w-icon-slider-left:before {\n  content: \"\\e601\";\n}\n.w-icon-nav-menu:before {\n  content: \"\\e602\";\n}\n.w-icon-arrow-down:before,\n.w-icon-dropdown-toggle:before {\n  content: \"\\e603\";\n}\n.w-icon-file-upload-remove:before {\n  content: \"\\e900\";\n}\n.w-icon-file-upload-icon:before {\n  content: \"\\e903\";\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n  background-color: #fff;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333;\n}\nimg {\n  max-width: 100%;\n  vertical-align: middle;\n  display: inline-block;\n}\nhtml.w-mod-touch * {\n  background-attachment: scroll !important;\n}\n.w-block {\n  display: block;\n}\n.w-inline-block {\n  max-width: 100%;\n  display: inline-block;\n}\n.w-clearfix:before,\n.w-clearfix:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-clearfix:after {\n  clear: both;\n}\n.w-hidden {\n  display: none;\n}\n.w-button {\n  display: inline-block;\n  padding: 9px 15px;\n  background-color: #3898ec;\n  color: white;\n  border: 0;\n  line-height: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 0;\n}\ninput.w-button {\n  -webkit-appearance: button;\n}\nhtml[data-w-dynpage] [data-w-cloak] {\n  color: transparent !important;\n}\n.w-webflow-badge,\n.w-webflow-badge * {\n  position: static;\n  left: auto;\n  top: auto;\n  right: auto;\n  bottom: auto;\n  z-index: auto;\n  display: block;\n  visibility: visible;\n  overflow: visible;\n  overflow-x: visible;\n  overflow-y: visible;\n  box-sizing: border-box;\n  width: auto;\n  height: auto;\n  max-height: none;\n  max-width: none;\n  min-height: 0;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  float: none;\n  clear: none;\n  border: 0 none transparent;\n  border-radius: 0;\n  background: none;\n  background-image: none;\n  background-position: 0% 0%;\n  background-size: auto auto;\n  background-repeat: repeat;\n  background-origin: padding-box;\n  background-clip: border-box;\n  background-attachment: scroll;\n  background-color: transparent;\n  box-shadow: none;\n  opacity: 1;\n  transform: none;\n  transition: none;\n  direction: ltr;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  text-align: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: 0;\n  text-transform: inherit;\n  list-style-type: disc;\n  text-shadow: none;\n  font-smoothing: auto;\n  vertical-align: baseline;\n  cursor: inherit;\n  white-space: inherit;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n}\n.w-webflow-badge {\n  position: fixed !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  z-index: 2147483647 !important;\n  top: auto !important;\n  right: 12px !important;\n  bottom: 12px !important;\n  left: auto !important;\n  color: #aaadb0 !important;\n  background-color: #fff !important;\n  border-radius: 3px !important;\n  padding: 6px 8px 6px 6px !important;\n  font-size: 12px !important;\n  opacity: 1 !important;\n  line-height: 14px !important;\n  text-decoration: none !important;\n  transform: none !important;\n  margin: 0 !important;\n  width: auto !important;\n  height: auto !important;\n  overflow: visible !important;\n  white-space: nowrap;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.w-webflow-badge > img {\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  vertical-align: middle !important;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\nh1 {\n  font-size: 38px;\n  line-height: 44px;\n  margin-top: 20px;\n}\nh2 {\n  font-size: 32px;\n  line-height: 36px;\n  margin-top: 20px;\n}\nh3 {\n  font-size: 24px;\n  line-height: 30px;\n  margin-top: 20px;\n}\nh4 {\n  font-size: 18px;\n  line-height: 24px;\n  margin-top: 10px;\n}\nh5 {\n  font-size: 14px;\n  line-height: 20px;\n  margin-top: 10px;\n}\nh6 {\n  font-size: 12px;\n  line-height: 18px;\n  margin-top: 10px;\n}\np {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nblockquote {\n  margin: 0 0 10px 0;\n  padding: 10px 20px;\n  border-left: 5px solid #e2e2e2;\n  font-size: 18px;\n  line-height: 22px;\n}\nfigure {\n  margin: 0;\n  margin-bottom: 10px;\n}\nfigcaption {\n  margin-top: 5px;\n  text-align: center;\n}\nul,\nol {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding-left: 40px;\n}\n.w-list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.w-embed:before,\n.w-embed:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-embed:after {\n  clear: both;\n}\n.w-video {\n  width: 100%;\n  position: relative;\n  padding: 0;\n}\n.w-video iframe,\n.w-video object,\n.w-video embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"] {\n  border: 0;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n.w-form {\n  margin: 0 0 15px;\n}\n.w-form-done {\n  display: none;\n  padding: 20px;\n  text-align: center;\n  background-color: #dddddd;\n}\n.w-form-fail {\n  display: none;\n  margin-top: 10px;\n  padding: 10px;\n  background-color: #ffdede;\n}\nlabel {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n.w-input,\n.w-select {\n  display: block;\n  width: 100%;\n  height: 38px;\n  padding: 8px 12px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  line-height: 1.428571429;\n  color: #333333;\n  vertical-align: middle;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n}\n.w-input:-moz-placeholder,\n.w-select:-moz-placeholder {\n  color: #999;\n}\n.w-input::-moz-placeholder,\n.w-select::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.w-input:-ms-input-placeholder,\n.w-select:-ms-input-placeholder {\n  color: #999;\n}\n.w-input::-webkit-input-placeholder,\n.w-select::-webkit-input-placeholder {\n  color: #999;\n}\n.w-input:focus,\n.w-select:focus {\n  border-color: #3898ec;\n  outline: 0;\n}\n.w-input[disabled],\n.w-select[disabled],\n.w-input[readonly],\n.w-select[readonly],\nfieldset[disabled] .w-input,\nfieldset[disabled] .w-select {\n  cursor: not-allowed;\n  background-color: #eeeeee;\n}\ntextarea.w-input,\ntextarea.w-select {\n  height: auto;\n}\n.w-select {\n  background-color: #f3f3f3;\n}\n.w-select[multiple] {\n  height: auto;\n}\n.w-form-label {\n  display: inline-block;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0px;\n}\n.w-radio {\n  display: block;\n  margin-bottom: 5px;\n  padding-left: 20px;\n}\n.w-radio:before,\n.w-radio:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-radio:after {\n  clear: both;\n}\n.w-radio-input {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n  float: left;\n  margin-left: -20px;\n}\n.w-radio-input {\n  margin-top: 3px;\n}\n.w-file-upload {\n  display: block;\n  margin-bottom: 10px;\n}\n.w-file-upload-input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -100;\n}\n.w-file-upload-default,\n.w-file-upload-uploading,\n.w-file-upload-success {\n  display: inline-block;\n  color: #333333;\n}\n.w-file-upload-error {\n  display: block;\n  margin-top: 10px;\n}\n.w-file-upload-default.w-hidden,\n.w-file-upload-uploading.w-hidden,\n.w-file-upload-error.w-hidden,\n.w-file-upload-success.w-hidden {\n  display: none;\n}\n.w-file-upload-uploading-btn {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n  cursor: pointer;\n  margin: 0;\n  padding: 8px 12px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-file-upload-file {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  margin: 0;\n  padding: 8px 9px 8px 11px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-file-upload-file-name {\n  font-size: 14px;\n  font-weight: normal;\n  display: block;\n}\n.w-file-remove-link {\n  margin-top: 3px;\n  margin-left: 10px;\n  width: auto;\n  height: auto;\n  padding: 3px;\n  display: block;\n  cursor: pointer;\n}\n.w-icon-file-upload-remove {\n  margin: auto;\n  font-size: 10px;\n}\n.w-file-upload-error-msg {\n  display: inline-block;\n  color: #ea384c;\n  padding: 2px 0;\n}\n.w-file-upload-info {\n  display: inline-block;\n  line-height: 38px;\n  padding: 0 12px;\n}\n.w-file-upload-label {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: normal;\n  cursor: pointer;\n  margin: 0;\n  padding: 8px 12px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-icon-file-upload-icon,\n.w-icon-file-upload-uploading {\n  display: inline-block;\n  margin-right: 8px;\n  width: 20px;\n}\n.w-icon-file-upload-uploading {\n  height: 20px;\n}\n.w-container {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 940px;\n}\n.w-container:before,\n.w-container:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-container:after {\n  clear: both;\n}\n.w-container .w-row {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n.w-row:before,\n.w-row:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-row:after {\n  clear: both;\n}\n.w-row .w-row {\n  margin-left: 0;\n  margin-right: 0;\n}\n.w-col {\n  position: relative;\n  float: left;\n  width: 100%;\n  min-height: 1px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.w-col .w-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n.w-col-1 {\n  width: 8.33333333%;\n}\n.w-col-2 {\n  width: 16.66666667%;\n}\n.w-col-3 {\n  width: 25%;\n}\n.w-col-4 {\n  width: 33.33333333%;\n}\n.w-col-5 {\n  width: 41.66666667%;\n}\n.w-col-6 {\n  width: 50%;\n}\n.w-col-7 {\n  width: 58.33333333%;\n}\n.w-col-8 {\n  width: 66.66666667%;\n}\n.w-col-9 {\n  width: 75%;\n}\n.w-col-10 {\n  width: 83.33333333%;\n}\n.w-col-11 {\n  width: 91.66666667%;\n}\n.w-col-12 {\n  width: 100%;\n}\n.w-hidden-main {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n  .w-container {\n    max-width: 728px;\n  }\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: none !important;\n  }\n  .w-col-medium-1 {\n    width: 8.33333333%;\n  }\n  .w-col-medium-2 {\n    width: 16.66666667%;\n  }\n  .w-col-medium-3 {\n    width: 25%;\n  }\n  .w-col-medium-4 {\n    width: 33.33333333%;\n  }\n  .w-col-medium-5 {\n    width: 41.66666667%;\n  }\n  .w-col-medium-6 {\n    width: 50%;\n  }\n  .w-col-medium-7 {\n    width: 58.33333333%;\n  }\n  .w-col-medium-8 {\n    width: 66.66666667%;\n  }\n  .w-col-medium-9 {\n    width: 75%;\n  }\n  .w-col-medium-10 {\n    width: 83.33333333%;\n  }\n  .w-col-medium-11 {\n    width: 91.66666667%;\n  }\n  .w-col-medium-12 {\n    width: 100%;\n  }\n  .w-col-stack {\n    width: 100%;\n    left: auto;\n    right: auto;\n  }\n}\n@media screen and (max-width: 767px) {\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: inherit !important;\n  }\n  .w-hidden-small {\n    display: none !important;\n  }\n  .w-row,\n  .w-container .w-row {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .w-col {\n    width: 100%;\n    left: auto;\n    right: auto;\n  }\n  .w-col-small-1 {\n    width: 8.33333333%;\n  }\n  .w-col-small-2 {\n    width: 16.66666667%;\n  }\n  .w-col-small-3 {\n    width: 25%;\n  }\n  .w-col-small-4 {\n    width: 33.33333333%;\n  }\n  .w-col-small-5 {\n    width: 41.66666667%;\n  }\n  .w-col-small-6 {\n    width: 50%;\n  }\n  .w-col-small-7 {\n    width: 58.33333333%;\n  }\n  .w-col-small-8 {\n    width: 66.66666667%;\n  }\n  .w-col-small-9 {\n    width: 75%;\n  }\n  .w-col-small-10 {\n    width: 83.33333333%;\n  }\n  .w-col-small-11 {\n    width: 91.66666667%;\n  }\n  .w-col-small-12 {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 479px) {\n  .w-container {\n    max-width: none;\n  }\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: inherit !important;\n  }\n  .w-hidden-small {\n    display: inherit !important;\n  }\n  .w-hidden-tiny {\n    display: none !important;\n  }\n  .w-col {\n    width: 100%;\n  }\n  .w-col-tiny-1 {\n    width: 8.33333333%;\n  }\n  .w-col-tiny-2 {\n    width: 16.66666667%;\n  }\n  .w-col-tiny-3 {\n    width: 25%;\n  }\n  .w-col-tiny-4 {\n    width: 33.33333333%;\n  }\n  .w-col-tiny-5 {\n    width: 41.66666667%;\n  }\n  .w-col-tiny-6 {\n    width: 50%;\n  }\n  .w-col-tiny-7 {\n    width: 58.33333333%;\n  }\n  .w-col-tiny-8 {\n    width: 66.66666667%;\n  }\n  .w-col-tiny-9 {\n    width: 75%;\n  }\n  .w-col-tiny-10 {\n    width: 83.33333333%;\n  }\n  .w-col-tiny-11 {\n    width: 91.66666667%;\n  }\n  .w-col-tiny-12 {\n    width: 100%;\n  }\n}\n.w-widget {\n  position: relative;\n}\n.w-widget-map {\n  width: 100%;\n  height: 400px;\n}\n.w-widget-map label {\n  width: auto;\n  display: inline;\n}\n.w-widget-map img {\n  max-width: inherit;\n}\n.w-widget-map .gm-style-iw {\n  text-align: center;\n}\n.w-widget-map .gm-style-iw > button {\n  display: none !important;\n}\n.w-widget-twitter {\n  overflow: hidden;\n}\n.w-widget-twitter-count-shim {\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  width: 28px;\n  height: 20px;\n  text-align: center;\n  background: white;\n  border: #758696 solid 1px;\n  border-radius: 3px;\n}\n.w-widget-twitter-count-shim * {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.w-widget-twitter-count-shim .w-widget-twitter-count-inner {\n  position: relative;\n  font-size: 15px;\n  line-height: 12px;\n  text-align: center;\n  color: #999;\n  font-family: serif;\n}\n.w-widget-twitter-count-shim .w-widget-twitter-count-clear {\n  position: relative;\n  display: block;\n}\n.w-widget-twitter-count-shim.w--large {\n  width: 36px;\n  height: 28px;\n}\n.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {\n  font-size: 18px;\n  line-height: 18px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical) {\n  margin-left: 5px;\n  margin-right: 8px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large {\n  margin-left: 6px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):before,\n.w-widget-twitter-count-shim:not(.w--vertical):after {\n  top: 50%;\n  left: 0;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):before {\n  border-color: rgba(117, 134, 150, 0);\n  border-right-color: #5d6c7b;\n  border-width: 4px;\n  margin-left: -9px;\n  margin-top: -4px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {\n  border-width: 5px;\n  margin-left: -10px;\n  margin-top: -5px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):after {\n  border-color: rgba(255, 255, 255, 0);\n  border-right-color: white;\n  border-width: 4px;\n  margin-left: -8px;\n  margin-top: -4px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {\n  border-width: 5px;\n  margin-left: -9px;\n  margin-top: -5px;\n}\n.w-widget-twitter-count-shim.w--vertical {\n  width: 61px;\n  height: 33px;\n  margin-bottom: 8px;\n}\n.w-widget-twitter-count-shim.w--vertical:before,\n.w-widget-twitter-count-shim.w--vertical:after {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.w-widget-twitter-count-shim.w--vertical:before {\n  border-color: rgba(117, 134, 150, 0);\n  border-top-color: #5d6c7b;\n  border-width: 5px;\n  margin-left: -5px;\n}\n.w-widget-twitter-count-shim.w--vertical:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: white;\n  border-width: 4px;\n  margin-left: -4px;\n}\n.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {\n  font-size: 18px;\n  line-height: 22px;\n}\n.w-widget-twitter-count-shim.w--vertical.w--large {\n  width: 76px;\n}\n.w-widget-gplus {\n  overflow: hidden;\n}\n.w-background-video {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n  color: white;\n}\n.w-background-video > video {\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  right: -100%;\n  bottom: -100%;\n  top: -100%;\n  left: -100%;\n  object-fit: cover;\n  z-index: -100;\n}\n.w-background-video > video::-webkit-media-controls-start-playback-button {\n  display: none !important;\n  -webkit-appearance: none;\n}\n.w-slider {\n  position: relative;\n  height: 300px;\n  text-align: center;\n  background: #dddddd;\n  clear: both;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.w-slider-mask {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  height: 100%;\n  white-space: nowrap;\n}\n.w-slide {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  height: 100%;\n  white-space: normal;\n  text-align: left;\n}\n.w-slider-nav {\n  position: absolute;\n  z-index: 2;\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  padding-top: 10px;\n  height: 40px;\n  text-align: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.w-slider-nav.w-round > div {\n  border-radius: 100%;\n}\n.w-slider-nav.w-num > div {\n  width: auto;\n  height: auto;\n  padding: 0.2em 0.5em;\n  font-size: inherit;\n  line-height: inherit;\n}\n.w-slider-nav.w-shadow > div {\n  box-shadow: 0 0 3px rgba(51, 51, 51, 0.4);\n}\n.w-slider-nav-invert {\n  color: #fff;\n}\n.w-slider-nav-invert > div {\n  background-color: rgba(34, 34, 34, 0.4);\n}\n.w-slider-nav-invert > div.w-active {\n  background-color: #222;\n}\n.w-slider-dot {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  background-color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  margin: 0 3px 0.5em;\n  transition: background-color 100ms, color 100ms;\n}\n.w-slider-dot.w-active {\n  background-color: #fff;\n}\n.w-slider-arrow-left,\n.w-slider-arrow-right {\n  position: absolute;\n  width: 80px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  cursor: pointer;\n  overflow: hidden;\n  color: white;\n  font-size: 40px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.w-slider-arrow-left [class^=\"w-icon-\"],\n.w-slider-arrow-right [class^=\"w-icon-\"],\n.w-slider-arrow-left [class*=\" w-icon-\"],\n.w-slider-arrow-right [class*=\" w-icon-\"] {\n  position: absolute;\n}\n.w-slider-arrow-left {\n  z-index: 3;\n  right: auto;\n}\n.w-slider-arrow-right {\n  z-index: 4;\n  left: auto;\n}\n.w-icon-slider-left,\n.w-icon-slider-right {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 1em;\n  height: 1em;\n}\n.w-dropdown {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 900;\n}\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  position: relative;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n}\n.w-dropdown-toggle {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: inline-block;\n  cursor: pointer;\n  padding-right: 40px;\n}\n.w-icon-dropdown-toggle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  margin-right: 20px;\n  width: 1em;\n  height: 1em;\n}\n.w-dropdown-list {\n  position: absolute;\n  background: #dddddd;\n  display: none;\n  min-width: 100%;\n}\n.w-dropdown-list.w--open {\n  display: block;\n}\n.w-dropdown-link {\n  padding: 10px 20px;\n  display: block;\n  color: #222222;\n}\n.w-dropdown-link.w--current {\n  color: #0082f3;\n}\n@media screen and (max-width: 767px) {\n  .w-nav-brand {\n    padding-left: 10px;\n  }\n}\n/**\n * ## Note\n * Safari (on both iOS and OS X) does not handle viewport units (vh, vw) well.\n * For example percentage units do not work on descendants of elements that\n * have any dimensions expressed in viewport units. It also doesn’t handle them at\n * all in `calc()`.\n */\n/**\n * Wrapper around all lightbox elements\n *\n * 1. Since the lightbox can receive focus, IE also gives it an outline.\n * 2. Fixes flickering on Chrome when a transition is in progress\n *    underneath the lightbox.\n */\n.w-lightbox-backdrop {\n  color: #000;\n  cursor: auto;\n  font-family: serif;\n  font-size: medium;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-height: normal;\n  list-style: disc;\n  text-align: start;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  color: #fff;\n  font-family: \"Helvetica Neue\", Helvetica, Ubuntu, \"Segoe UI\", Verdana,\n    sans-serif;\n  font-size: 17px;\n  line-height: 1.2;\n  font-weight: 300;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 2000;\n  outline: 0;\n  /* 1 */\n  opacity: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transform: translate(0, 0);\n  /* 2 */\n}\n/**\n * Neat trick to bind the rubberband effect to our canvas instead of the whole\n * document on iOS. It also prevents a bug that causes the document underneath to scroll.\n */\n.w-lightbox-backdrop,\n.w-lightbox-container {\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.w-lightbox-content {\n  position: relative;\n  height: 100vh;\n  overflow: hidden;\n}\n.w-lightbox-view {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n}\n.w-lightbox-view:before {\n  content: \"\";\n  height: 100vh;\n}\n/* .w-lightbox-content */\n.w-lightbox-group,\n.w-lightbox-group .w-lightbox-view,\n.w-lightbox-group .w-lightbox-view:before {\n  height: 86vh;\n}\n.w-lightbox-frame,\n.w-lightbox-view:before {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*\n * 1. Remove default margin set by user-agent on the <figure> element.\n */\n.w-lightbox-figure {\n  position: relative;\n  margin: 0;\n  /* 1 */\n}\n.w-lightbox-group .w-lightbox-figure {\n  cursor: pointer;\n}\n/**\n * IE adds image dimensions as width and height attributes on the IMG tag,\n * but we need both width and height to be set to auto to enable scaling.\n */\n.w-lightbox-img {\n  width: auto;\n  height: auto;\n  max-width: none;\n}\n/**\n * 1. Reset if style is set by user on \"All Images\"\n */\n.w-lightbox-image {\n  display: block;\n  float: none;\n  /* 1 */\n  max-width: 100vw;\n  max-height: 100vh;\n}\n.w-lightbox-group .w-lightbox-image {\n  max-height: 86vh;\n}\n.w-lightbox-caption {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0.5em 1em;\n  background: rgba(0, 0, 0, 0.4);\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.w-lightbox-embed {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.w-lightbox-control {\n  position: absolute;\n  top: 0;\n  width: 4em;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.w-lightbox-left {\n  display: none;\n  bottom: 0;\n  left: 0;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 0 24 40\" width=\"24\" height=\"40\"><g transform=\"rotate(45)\"><path d=\"m0 0h5v23h23v5h-28z\" opacity=\".4\"/><path d=\"m1 1h3v23h23v3h-26z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==\");\n}\n.w-lightbox-right {\n  display: none;\n  right: 0;\n  bottom: 0;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 0 24 40\" width=\"24\" height=\"40\"><g transform=\"rotate(45)\"><path d=\"m0-0h28v28h-5v-23h-23z\" opacity=\".4\"/><path d=\"m1 1h26v26h-3v-23h-23z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+\");\n}\n/*\n * Without specifying the with and height inside the SVG, all versions of IE render the icon too small.\n * The bug does not seem to manifest itself if the elements are tall enough such as the above arrows.\n * (http://stackoverflow.com/questions/16092114/background-size-differs-in-internet-explorer)\n */\n.w-lightbox-close {\n  right: 0;\n  height: 2.6em;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 0 18 17\" width=\"18\" height=\"17\"><g transform=\"rotate(45)\"><path d=\"m0 0h7v-7h5v7h7v5h-7v7h-5v-7h-7z\" opacity=\".4\"/><path d=\"m1 1h7v-7h3v7h7v3h-7v7h-3v-7h-7z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=\");\n  background-size: 18px;\n}\n/**\n * 1. All IE versions add extra space at the bottom without this.\n */\n.w-lightbox-strip {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 1vh;\n  line-height: 0;\n  /* 1 */\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*\n * 1. We use content-box to avoid having to do `width: calc(10vh + 2vw)`\n *    which doesn’t work in Safari anyway.\n * 2. Chrome renders images pixelated when switching to GPU. Making sure\n *    the parent is also rendered on the GPU (by setting translate3d for\n *    example) fixes this behavior.\n */\n.w-lightbox-item {\n  display: inline-block;\n  width: 10vh;\n  padding: 2vh 1vh;\n  box-sizing: content-box;\n  /* 1 */\n  cursor: pointer;\n  -webkit-transform: translate3d(0, 0, 0);\n  /* 2 */\n}\n.w-lightbox-active {\n  opacity: 0.3;\n}\n.w-lightbox-thumbnail {\n  position: relative;\n  height: 10vh;\n  background: #222;\n  overflow: hidden;\n}\n.w-lightbox-thumbnail-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.w-lightbox-thumbnail .w-lightbox-tall {\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n}\n.w-lightbox-thumbnail .w-lightbox-wide {\n  left: 50%;\n  height: 100%;\n  -webkit-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n}\n/*\n * Spinner\n *\n * Absolute pixel values are used to avoid rounding errors that would cause\n * the white spinning element to be misaligned with the track.\n */\n.w-lightbox-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  margin-top: -20px;\n  margin-left: -20px;\n  border: 5px solid rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n  -webkit-animation: spin 0.8s infinite linear;\n  animation: spin 0.8s infinite linear;\n}\n.w-lightbox-spinner:after {\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  bottom: -4px;\n  left: -4px;\n  border: 3px solid transparent;\n  border-bottom-color: #fff;\n  border-radius: 50%;\n}\n/*\n * Utility classes\n */\n.w-lightbox-hide {\n  display: none;\n}\n.w-lightbox-noscroll {\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .w-lightbox-content {\n    height: 96vh;\n    margin-top: 2vh;\n  }\n  .w-lightbox-view,\n  .w-lightbox-view:before {\n    height: 96vh;\n  }\n  /* .w-lightbox-content */\n  .w-lightbox-group,\n  .w-lightbox-group .w-lightbox-view,\n  .w-lightbox-group .w-lightbox-view:before {\n    height: 84vh;\n  }\n  .w-lightbox-image {\n    max-width: 96vw;\n    max-height: 96vh;\n  }\n  .w-lightbox-group .w-lightbox-image {\n    max-width: 82.3vw;\n    max-height: 84vh;\n  }\n  .w-lightbox-left,\n  .w-lightbox-right {\n    display: block;\n    opacity: 0.5;\n  }\n  .w-lightbox-close {\n    opacity: 0.8;\n  }\n  .w-lightbox-control:hover {\n    opacity: 1;\n  }\n}\n.w-lightbox-inactive,\n.w-lightbox-inactive:hover {\n  opacity: 0;\n}\n.w-richtext:before,\n.w-richtext:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-richtext:after {\n  clear: both;\n}\n.w-richtext[contenteditable=\"true\"]:before,\n.w-richtext[contenteditable=\"true\"]:after {\n  white-space: initial;\n}\n.w-richtext ol,\n.w-richtext ul {\n  overflow: hidden;\n}\n.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,\n.w-richtext .w-richtext-figure-selected[data-rt-type=\"video\"] div:after {\n  outline: 2px solid #2895f7;\n}\n.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,\n.w-richtext .w-richtext-figure-selected[data-rt-type=\"image\"] div {\n  outline: 2px solid #2895f7;\n}\n.w-richtext figure.w-richtext-figure-type-video > div:after,\n.w-richtext figure[data-rt-type=\"video\"] > div:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n.w-richtext figure {\n  position: relative;\n  max-width: 60%;\n}\n.w-richtext figure > div:before {\n  cursor: default !important;\n}\n.w-richtext figure img {\n  width: 100%;\n}\n.w-richtext figure figcaption.w-richtext-figcaption-placeholder {\n  opacity: 0.6;\n}\n.w-richtext figure div {\n  /* fix incorrectly sized selection border in the data manager */\n  font-size: 0px;\n  color: transparent;\n}\n.w-richtext figure.w-richtext-figure-type-image,\n.w-richtext figure[data-rt-type=\"image\"] {\n  display: table;\n}\n.w-richtext figure.w-richtext-figure-type-image > div,\n.w-richtext figure[data-rt-type=\"image\"] > div {\n  display: inline-block;\n}\n.w-richtext figure.w-richtext-figure-type-image > figcaption,\n.w-richtext figure[data-rt-type=\"image\"] > figcaption {\n  display: table-caption;\n  caption-side: bottom;\n}\n.w-richtext figure.w-richtext-figure-type-video,\n.w-richtext figure[data-rt-type=\"video\"] {\n  width: 60%;\n  height: 0;\n}\n.w-richtext figure.w-richtext-figure-type-video iframe,\n.w-richtext figure[data-rt-type=\"video\"] iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.w-richtext figure.w-richtext-figure-type-video > div,\n.w-richtext figure[data-rt-type=\"video\"] > div {\n  width: 100%;\n}\n.w-richtext figure.w-richtext-align-center {\n  margin-right: auto;\n  margin-left: auto;\n  clear: both;\n}\n.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div,\n.w-richtext figure.w-richtext-align-center[data-rt-type=\"image\"] > div {\n  max-width: 100%;\n}\n.w-richtext figure.w-richtext-align-normal {\n  clear: both;\n}\n.w-richtext figure.w-richtext-align-fullwidth {\n  width: 100%;\n  max-width: 100%;\n  text-align: center;\n  clear: both;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.w-richtext figure.w-richtext-align-fullwidth > div {\n  display: inline-block;\n  /* padding-bottom is used for aspect ratios in video figures\n      we want the div to inherit that so hover/selection borders in the designer-canvas\n      fit right*/\n  padding-bottom: inherit;\n}\n.w-richtext figure.w-richtext-align-fullwidth > figcaption {\n  display: block;\n}\n.w-richtext figure.w-richtext-align-floatleft {\n  float: left;\n  margin-right: 15px;\n  clear: none;\n}\n.w-richtext figure.w-richtext-align-floatright {\n  float: right;\n  margin-left: 15px;\n  clear: none;\n}\n.w-nav {\n  position: relative;\n  background: #dddddd;\n  z-index: 1000;\n}\n.w-nav:before,\n.w-nav:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-nav:after {\n  clear: both;\n}\n.w-nav-brand {\n  position: relative;\n  float: left;\n  text-decoration: none;\n  color: #333333;\n}\n.w-nav-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n}\n.w-nav-link.w--current {\n  color: #0082f3;\n}\n.w-nav-menu {\n  position: relative;\n  float: right;\n}\n[data-nav-menu-open] {\n  display: block !important;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #c8c8c8;\n  text-align: center;\n  overflow: visible;\n  min-width: 200px;\n}\n.w--nav-link-open {\n  display: block;\n  position: relative;\n}\n.w-nav-overlay {\n  position: absolute;\n  overflow: hidden;\n  display: none;\n  top: 100%;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n.w-nav-overlay [data-nav-menu-open] {\n  top: 0;\n}\n.w-nav[data-animation=\"over-left\"] .w-nav-overlay {\n  width: auto;\n}\n.w-nav[data-animation=\"over-left\"] .w-nav-overlay,\n.w-nav[data-animation=\"over-left\"] [data-nav-menu-open] {\n  right: auto;\n  z-index: 1;\n  top: 0;\n}\n.w-nav[data-animation=\"over-right\"] .w-nav-overlay {\n  width: auto;\n}\n.w-nav[data-animation=\"over-right\"] .w-nav-overlay,\n.w-nav[data-animation=\"over-right\"] [data-nav-menu-open] {\n  left: auto;\n  z-index: 1;\n  top: 0;\n}\n.w-nav-button {\n  position: relative;\n  float: right;\n  padding: 18px;\n  font-size: 24px;\n  display: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.w-nav-button.w--open {\n  background-color: #c8c8c8;\n  color: white;\n}\n.w-nav[data-collapse=\"all\"] .w-nav-menu {\n  display: none;\n}\n.w-nav[data-collapse=\"all\"] .w-nav-button {\n  display: block;\n}\n.w--nav-dropdown-open {\n  display: block;\n}\n.w--nav-dropdown-toggle-open {\n  display: block;\n}\n.w--nav-dropdown-list-open {\n  position: static;\n}\n@media screen and (max-width: 991px) {\n  .w-nav[data-collapse=\"medium\"] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse=\"medium\"] .w-nav-button {\n    display: block;\n  }\n}\n@media screen and (max-width: 767px) {\n  .w-nav[data-collapse=\"small\"] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse=\"small\"] .w-nav-button {\n    display: block;\n  }\n  .w-nav-brand {\n    padding-left: 10px;\n  }\n}\n@media screen and (max-width: 479px) {\n  .w-nav[data-collapse=\"tiny\"] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse=\"tiny\"] .w-nav-button {\n    display: block;\n  }\n}\n.w-tabs {\n  position: relative;\n}\n.w-tabs:before,\n.w-tabs:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-tabs:after {\n  clear: both;\n}\n.w-tab-menu {\n  position: relative;\n}\n.w-tab-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  padding: 9px 30px;\n  text-align: left;\n  cursor: pointer;\n  color: #222222;\n  background-color: #dddddd;\n}\n.w-tab-link.w--current {\n  background-color: #c8c8c8;\n}\n.w-tab-content {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n.w-tab-pane {\n  position: relative;\n  display: none;\n}\n.w--tab-active {\n  display: block;\n}\n@media screen and (max-width: 479px) {\n  .w-tab-link {\n    display: block;\n  }\n}\n.w-ix-emptyfix:after {\n  content: \"\";\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.w-dyn-empty {\n  padding: 10px;\n  background-color: #dddddd;\n}\n.w-dyn-hide {\n  display: none !important;\n}\n.w-dyn-bind-empty {\n  display: none !important;\n}\n.w-condition-invisible {\n  display: none !important;\n}\n\n.w-layout-grid {\n  display: -ms-grid;\n  display: grid;\n  grid-auto-columns: 1fr;\n  -ms-grid-columns: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  -ms-grid-rows: auto auto;\n  grid-template-rows: auto auto;\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n}\n\nbody {\n  font-family: Roboto, sans-serif;\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n}\n\nh1 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 38px;\n  line-height: 44px;\n  font-weight: 500;\n}\n\nh2 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 32px;\n  line-height: 36px;\n  font-weight: 500;\n}\n\nh3 {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 500;\n}\n\nh4 {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n\nh6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\np {\n  margin-bottom: 10px;\n  line-height: 24px;\n  font-weight: 300;\n}\n\n.nav-menu {\n  font-family: Inconsolata, monospace;\n  font-size: 14px;\n  text-align: center;\n}\n\n.nav-link {\n  padding: 26px 13px;\n  color: hsla(0, 0%, 100%, 0.92);\n  font-size: 20px;\n  line-height: 18px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.nav-link:hover {\n  color: #fff;\n}\n\n.nav-link.w--current {\n  color: #fff;\n  text-decoration: none;\n}\n\n.nav-link.logo {\n  padding-top: 23px;\n  padding-bottom: 23px;\n  font-family: \"Roboto Slab\", sans-serif;\n  font-size: 17px;\n  font-weight: 400;\n}\n\n.nav-bar {\n  background-color: transparent;\n}\n\n.hero {\n  height: 100vh;\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 100%,\n      rgba(0, 0, 0, 0.46),\n      rgba(0, 0, 0, 0.82) 62%\n    ),\n    url(\"../images/mj2.jpg\");\n  background-position: 0px 0px, 50% 50%;\n  background-size: auto, cover;\n  background-repeat: repeat, no-repeat;\n}\n\n.hero-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translate(0%, -50%);\n  -ms-transform: translate(0%, -50%);\n  transform: translate(0%, -50%);\n  color: #fff;\n  text-align: center;\n}\n\n.hero-heading {\n  margin-top: 0px;\n  margin-bottom: 40px;\n  font-family: Oswald, sans-serif;\n  color: #fff;\n  font-size: 100px;\n  line-height: 85px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.hero-subtitle {\n  color: hsla(0, 0%, 100%, 0.7);\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.subpage-background {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 50%,\n      #000,\n      transparent 0%,\n      #000 69%\n    ),\n    url(\"../images/ai.jpg\");\n  background-position: 0px 0px, 50% 0%;\n  background-size: auto, cover;\n  background-repeat: repeat, no-repeat;\n  background-attachment: scroll, fixed;\n  font-weight: 300;\n}\n\n.section-title {\n  padding: 85px 2.5%;\n  color: #fff;\n  text-align: center;\n}\n\n.page-title {\n  margin-top: 0px;\n  margin-bottom: 40px;\n  margin-left: 0px;\n  font-family: Oswald, sans-serif;\n  font-size: 45px;\n  line-height: 51px;\n  font-weight: 200;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.page-title.about-header {\n  margin-left: 100px;\n  text-align: left;\n}\n\n.section {\n  padding-right: 2.5%;\n  padding-bottom: 50px;\n  padding-left: 2.5%;\n  border-radius: 5px;\n}\n\n.bio-photo {\n  margin-bottom: 45px;\n}\n\n.content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border-radius: 17px;\n  background-color: #fff;\n  color: #000;\n}\n\n.footer {\n  padding-top: 43px;\n  padding-bottom: 43px;\n  background-color: transparent;\n  color: #222;\n  text-align: center;\n}\n\n.footer.homepage {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.footer-link {\n  margin-right: 6px;\n  margin-left: 6px;\n  opacity: 0.82;\n  -webkit-transition: opacity 200ms ease;\n  transition: opacity 200ms ease;\n  color: #222;\n  text-decoration: none;\n}\n\n.footer-link:hover {\n  opacity: 0.76;\n  color: #fff;\n}\n\n.social-link {\n  width: 25px;\n  margin-right: 5px;\n  margin-left: 5px;\n  opacity: 0.5;\n  -webkit-transition: opacity 200ms ease;\n  transition: opacity 200ms ease;\n}\n\n.social-link:hover {\n  opacity: 1;\n}\n\n.social-wrapper {\n  margin-top: 5px;\n}\n\n.play-music {\n  position: relative;\n  width: 100%;\n}\n\n.circle {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.85);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.play-arrow {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 2;\n  width: auto;\n  height: auto;\n  margin-left: 7px;\n  border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent;\n  border-left: 45px solid #fff;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.track-listing-row {\n  margin-bottom: 45px;\n  padding-top: 20px;\n  border-top: 1px solid hsla(0, 0%, 60%, 0.35);\n}\n\n.featured-track {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n.track-listing-time {\n  text-align: right;\n}\n\n.track-link {\n  color: #fff;\n  text-decoration: none;\n}\n\n.small-grey-text {\n  display: block;\n  margin-bottom: -16px;\n  color: #999;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.small-grey-text.album {\n  color: #efe866;\n  font-size: 15px;\n}\n\n.tour-title {\n  margin-bottom: 100px;\n  text-align: center;\n}\n\n.rsvp-button {\n  padding: 5px 15px;\n  border: 1px solid #f7e769;\n  background-color: transparent;\n  -webkit-transition: color 200ms ease, border-color 200ms ease;\n  transition: color 200ms ease, border-color 200ms ease;\n  color: #f7e769;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 1px;\n}\n\n.rsvp-button:hover {\n  border-color: #fff;\n  color: #fff;\n}\n\n.tour-date-row {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.photo-block {\n  height: 250px;\n  margin: 20px 10px;\n}\n\n.contact-h3 {\n  margin-top: 0px;\n  margin-bottom: 20px;\n  font-size: 27px;\n  line-height: 28px;\n  font-weight: 300;\n}\n\n.contact-row {\n  padding-top: 58px;\n  padding-bottom: 58px;\n  border-top: 1px solid hsla(0, 0%, 60%, 0.35);\n  text-align: center;\n}\n\n.contact-link {\n  display: inline-block;\n  margin-top: 5px;\n  color: #999;\n  text-decoration: none;\n}\n\n.contact-link:hover {\n  color: #fff;\n}\n\n.form {\n  display: block;\n  max-width: 550px;\n  margin-top: 54px;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: left;\n}\n\n.submit-button {\n  display: block;\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 30px;\n  padding-left: 30px;\n  border: 2px solid #fff;\n  background-color: transparent;\n  -webkit-transition: background-color 200ms ease, color 200ms ease;\n  transition: background-color 200ms ease, color 200ms ease;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.submit-button:hover {\n  background-color: #fff;\n  color: #333;\n}\n\n.submit-button.sign-up {\n  position: relative;\n  top: -5px;\n  display: inline-block;\n  margin-top: 0px;\n}\n\n.input-inline {\n  display: inline-block;\n  max-width: 414px;\n  margin-right: 20px;\n}\n\n.album-art {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.logo {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-family: \"Changa One\", Impact, sans-serif;\n  color: #fdfdfd;\n  font-size: 19px;\n  line-height: 23px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.brand-link {\n  z-index: 1;\n  padding-top: 23px;\n  padding-bottom: 23px;\n}\n\n.brand-link.w--current {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.hero-container {\n  position: static;\n  margin-top: 25vh;\n  text-align: center;\n}\n\n.button {\n  padding: 11px 19px;\n  border: 1px solid rgba(248, 199, 41, 0.7);\n  background-color: transparent;\n  color: rgba(248, 199, 41, 0.7);\n  font-size: 14px;\n}\n\n.button.big {\n  margin-right: 9px;\n  margin-left: 9px;\n  padding: 11px 26px;\n  border-style: none;\n  border-color: #fff;\n  background-color: #ec1c23;\n  -webkit-transition: border 200ms ease, color 200ms ease;\n  transition: border 200ms ease, color 200ms ease;\n  font-family: \"Roboto Slab\", sans-serif;\n  color: #fff;\n  font-size: 16px;\n}\n\n.button.big:hover {\n  border-color: #fff;\n  color: #fff;\n}\n\n.button.contact {\n  padding-right: 29px;\n  padding-left: 29px;\n  background-color: rgba(248, 199, 41, 0.7);\n}\n\n.content-wrapper {\n  margin-top: 78px;\n}\n\n.footer-text {\n  margin-top: 13px;\n  color: hsla(0, 0%, 100%, 0.43);\n}\n\n.featured-title {\n  font-family: Graduate, sans-serif;\n}\n\n.song-list-item {\n  padding-top: 19px;\n  padding-bottom: 19px;\n  border-top: 1px solid hsla(0, 0%, 100%, 0.28);\n  text-align: center;\n}\n\n.album-heading {\n  margin-top: 0px;\n  margin-bottom: 40px;\n  font-size: 23px;\n  line-height: 27px;\n  font-weight: 400;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.album-columns {\n  text-align: center;\n}\n\n.song-title {\n  color: #f0e567;\n}\n\n.venue {\n  font-weight: 500;\n}\n\n.venue-list-item {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-top: 1px solid hsla(0, 0%, 100%, 0.3);\n}\n\n.photo-list {\n  display: block;\n  width: 80%;\n  margin-right: auto;\n  margin-bottom: 69px;\n  margin-left: auto;\n  text-align: center;\n}\n\n.photo {\n  margin-bottom: 18px;\n  border-radius: 5px;\n  box-shadow: 0 1px 50px 0 rgba(0, 0, 0, 0.51);\n}\n\n.field {\n  font-weight: 300;\n}\n\n.input {\n  margin-bottom: 20px;\n  border-style: none;\n  background-color: hsla(0, 0%, 40%, 0.64);\n  color: #fff;\n}\n\n.input:focus {\n  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.77);\n}\n\n.input.textarea {\n  min-height: 110px;\n}\n\n.success {\n  padding-top: 29px;\n  background-color: rgba(30, 187, 0, 0.35);\n}\n\n.image {\n  position: absolute;\n  left: auto;\n}\n\n.grid {\n  display: -ms-grid;\n  display: grid;\n  width: 75%;\n  min-height: 500px;\n  float: none;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  justify-items: stretch;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-align-content: space-around;\n  -ms-flex-line-pack: distribute;\n  align-content: space-around;\n  grid-auto-columns: 1fr;\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-areas: \"Area Area-2\";\n  -ms-grid-columns: 1fr 16px 1fr;\n  grid-template-columns: 1fr 1fr;\n  -ms-grid-rows: auto 16px auto 16px auto;\n  grid-template-rows: auto auto auto;\n}\n\n.div-block {\n  width: 100px;\n}\n\n.artist-box {\n  position: relative;\n  width: auto;\n  border-radius: 20px;\n  background-image: url(\"../images/IMG_6735.jpg\");\n  background-position: 50% 50%;\n  background-size: cover;\n}\n\n.artist-box.taco {\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 50%,\n      transparent 26%,\n      #000\n    ),\n    url(\"../images/IMG_7344.jpg\");\n  background-position: 0px 0px, 50% 0%;\n  background-size: auto, cover;\n}\n\n.div-block-2 {\n  position: absolute;\n  left: 0%;\n  top: auto;\n  right: 0%;\n  bottom: 0%;\n  display: block;\n  height: 100px;\n  border-radius: 0px 0px 20px 20px;\n  background-color: #fff;\n  background-image: -webkit-gradient(\n    linear,\n    left top,\n    left bottom,\n    from(hsla(0, 0%, 100%, 0.5)),\n    to(hsla(0, 0%, 100%, 0.5))\n  );\n  background-image: linear-gradient(\n    180deg,\n    hsla(0, 0%, 100%, 0.5),\n    hsla(0, 0%, 100%, 0.5)\n  );\n}\n\n.heading {\n  font-family: Montserrat, sans-serif;\n  color: #000;\n  text-align: center;\n}\n\n.section-2 {\n  display: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.slide {\n  background-image: url(\"../images/IMG_6735.jpg\");\n  background-position: 50% 0%;\n  background-size: cover;\n}\n\n.slide-3 {\n  background-image: url(\"/images/jerry-o.jpg\");\n  background-position: center top;\n  background-size: cover;\n  box-shadow: inset 0 0 100px black;\n}\n\n.slider {\n  height: 500px;\n}\n\n.left-arrow {\n  width: 80px;\n}\n\n.div-block-3 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 80px;\n  margin-right: 80px;\n  margin-left: 80px;\n  padding-right: 0px;\n  padding-left: 0px;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.heading-2 {\n  font-family: Graduate, sans-serif;\n  font-size: 37px;\n}\n\n.image-2 {\n  background-color: #000;\n  color: #fff;\n}\n\n.div-block-4 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.music-page {\n  background-image: radial-gradient(\n      circle farthest-side at 50% 50%,\n      transparent,\n      #000\n    ),\n    url(\"../images/mj32.jpg\");\n  background-position: 0px 0px, 50% 50%;\n  background-size: auto, cover;\n}\n\n.collection-list {\n  margin-top: 0px;\n}\n\n.collection-list-wrapper {\n  margin-bottom: 40px;\n  padding: 60px 60px 0px;\n}\n\n.collection-list-wrapper-2 {\n  margin-top: 40px;\n  margin-right: 0px;\n  margin-bottom: 60px;\n  padding-top: 0px;\n  padding-right: 60px;\n  padding-left: 60px;\n}\n\n.gamefilm-page {\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 50%,\n      transparent,\n      #000 80%\n    ),\n    url(\"../images/dj1.jpg\");\n  background-position: 0px 0px, 0px 0px;\n  background-size: auto, cover;\n}\n\n.collection-item {\n  padding-bottom: 40px;\n}\n\n.heading-3 {\n  font-family: Graduate, sans-serif;\n  /* text-align: center; */\n}\n\n.block-quote {\n  width: 50%;\n  margin-right: 100px;\n  margin-left: 100px;\n  padding-right: 200px;\n  padding-left: 10px;\n  text-align: left;\n}\n\n.about-page {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  background-image: radial-gradient(\n      circle farthest-corner at 50% 50%,\n      transparent,\n      #000 58%\n    ),\n    url(\"../images/messi.jpg\");\n  background-position: 0px 0px, 0px 0px;\n  background-size: auto, cover;\n}\n\n.artist-page {\n  background-image: -webkit-gradient(\n      linear,\n      left bottom,\n      left top,\n      from(transparent),\n      color-stop(96%, #000)\n    ),\n    url(\"../images/jerry-rice.png\");\n  background-image: linear-gradient(0deg, transparent, #000 96%),\n    url(\"../images/jerry-rice.png\");\n  background-position: 0px 0px, 50% 50%;\n  background-size: auto, cover;\n}\n\n.paragraph {\n  text-align: center;\n}\n\n.heading-4 {\n  text-align: center;\n}\n\n.paragraph-2 {\n  text-align: center;\n}\n\n.text-block {\n  text-align: center;\n}\n\n.text-block.contact-text {\n  margin-bottom: 40px;\n}\n\n.text-block-2 {\n  text-align: center;\n}\n\n.text-block-2.contact-text {\n  margin-bottom: 40px;\n}\n\n.div-block-5 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.text-block-3 {\n  text-align: center;\n}\n\n.text-span {\n  color: #400202;\n}\n\n.head-span {\n  color: #ec1c23;\n}\n\n.text-span-2 {\n  font-weight: 700;\n}\n\n@media screen and (max-width: 991px) {\n  .nav-menu {\n    padding-top: 18px;\n    padding-bottom: 18px;\n    border-top: 1px solid #000;\n    background-color: rgba(0, 0, 0, 0.85);\n  }\n  .nav-link {\n    padding-top: 16px;\n    padding-bottom: 16px;\n    font-size: 21px;\n    line-height: 27px;\n    text-align: center;\n  }\n  .subpage-background {\n    background-size: auto, cover;\n  }\n  .menu-button {\n    padding: 20px 0px 20px 20px;\n    color: hsla(0, 0%, 100%, 0.62);\n    font-size: 25px;\n    line-height: 22px;\n  }\n  .menu-button:hover {\n    color: #fff;\n  }\n  .menu-button.w--open {\n    background-color: transparent;\n    color: #fff;\n  }\n  .menu-text {\n    margin-right: 3px;\n    padding: 2px;\n    float: left;\n    font-size: 12px;\n    line-height: 19px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n  .menu-text:hover {\n    color: #fff;\n  }\n  .menu-icon {\n    float: left;\n  }\n  .block-quote {\n    padding-right: 200px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .hero-heading {\n    font-size: 61px;\n  }\n  .footer {\n    padding-right: 14px;\n    padding-left: 14px;\n  }\n  .rsvp-button {\n    margin-top: 15px;\n  }\n  .tour-date-row {\n    text-align: center;\n  }\n  .contact-link {\n    margin-bottom: 30px;\n  }\n  .submit-button.sign-up {\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .input-inline {\n    max-width: 100%;\n    margin-bottom: 20px;\n  }\n  .menu-button {\n    margin-right: 7px;\n  }\n  .album-list {\n    margin-bottom: 60px;\n  }\n  .venue {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 15px;\n  }\n  .venue-list-item {\n    padding-top: 16px;\n    padding-bottom: 16px;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .hero-heading {\n    font-size: 39px;\n    line-height: 52px;\n  }\n  .contact-row {\n    padding-bottom: 16px;\n  }\n  .hero-container {\n    padding-right: 13px;\n    padding-left: 13px;\n  }\n  .button.big {\n    width: 100%;\n    margin-right: 0px;\n    margin-bottom: 12px;\n    margin-left: 0px;\n  }\n}\n\n#w-node-c2d8d88ac434-49055390 {\n  -ms-grid-row-align: auto;\n  align-self: auto;\n  -ms-grid-column: span 1;\n  grid-column-start: span 1;\n  -ms-grid-column-span: 1;\n  grid-column-end: span 1;\n  -ms-grid-row: span 3;\n  grid-row-start: span 3;\n  -ms-grid-row-span: 3;\n  grid-row-end: span 3;\n}\n\n#w-node-584f6c6cbeae-49055390 {\n  -ms-grid-column: span 1;\n  grid-column-start: span 1;\n  -ms-grid-column-span: 1;\n  grid-column-end: span 1;\n  -ms-grid-row: span 3;\n  grid-row-start: span 3;\n  -ms-grid-row-span: 3;\n  grid-row-end: span 3;\n}\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. CUSTOM FOR WEBFLOW: Removed the input[type=\"submit\"] selector to reduce\n *    specificity and defer to the .w-button selector\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. CUSTOM FOR WEBFLOW: changed from `textfield` to `none` to normalize iOS rounded input\n * 2. CUSTOM FOR WEBFLOW: box-sizing: content-box rule removed\n *    (similar to normalize.css >=4.0.0)\n */\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n  /* 1 */\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/styles/main.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./public/styles/main.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#fp-nav ul li a span,\n.fp-slidesNav ul li a span {\n  background: #fff !important; }\n\n.hero {\n  background-attachment: fixed; }\n\n.section {\n  border-radius: 0; }\n", "",{"version":3,"sources":["C:/Users/Zak/Documents/Code/pmg-site/public/styles/main.scss"],"names":[],"mappings":"AAAA;;EAEE,2BAA2B,EAAA;;AAE7B;EACE,4BAA4B,EAAA;;AAG9B;EACE,gBAAgB,EAAA","file":"main.scss","sourcesContent":["#fp-nav ul li a span,\r\n.fp-slidesNav ul li a span {\r\n  background: #fff !important;\r\n}\r\n.hero {\r\n  background-attachment: fixed;\r\n}\r\n\r\n.section {\r\n  border-radius: 0;\r\n}\r\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_webflow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/webflow.css */ "./css/webflow.css");
/* harmony import */ var _css_webflow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_webflow_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles/main.scss */ "./public/styles/main.scss");
/* harmony import */ var _public_styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Zak\\Documents\\Code\\pmg-site\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./public/styles/main.scss":
/*!*********************************!*\
  !*** ./public/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/styles/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/styles/main.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./public/styles/main.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! C:\Users\Zak\Documents\Code\pmg-site\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map