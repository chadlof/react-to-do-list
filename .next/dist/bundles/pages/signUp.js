module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styled_components_Wrapper__ = __webpack_require__("./styled-components/Wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styled_components_Container__ = __webpack_require__("./styled-components/Container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styled_components_Anchor__ = __webpack_require__("./styled-components/Anchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styled_components_Par__ = __webpack_require__("./styled-components/Par.js");
var _jsxFileName = 'C:\\code\\react-to-do-list\\components\\Footer.js';







var Footer = function Footer() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__styled_components_Wrapper__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__styled_components_Container__["a" /* default */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__styled_components_Container__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5__styled_components_Par__["a" /* default */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    'Created by: Brent Clark & Chad Lofgren'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__styled_components_Container__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5__styled_components_Par__["a" /* default */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    '\xA9 2018 To Dues. All Rights Reserved.'
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styled_components_Wrapper__ = __webpack_require__("./styled-components/Wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styled_components_Container__ = __webpack_require__("./styled-components/Container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styled_components_Anchor__ = __webpack_require__("./styled-components/Anchor.js");
var _jsxFileName = 'C:\\code\\react-to-do-list\\components\\Header.js';






var Header = function Header() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__styled_components_Wrapper__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__styled_components_Container__["a" /* default */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__styled_components_Container__["a" /* default */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                    { href: '../', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4__styled_components_Anchor__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        'Home'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                    { href: './signUp', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4__styled_components_Anchor__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        'Sign Up'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                    { href: './signIn', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4__styled_components_Anchor__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        'Sign In'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                    { href: './lists', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4__styled_components_Anchor__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        'Lists'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                    { href: './newList', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4__styled_components_Anchor__["a" /* default */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        },
                        'New List'
                    )
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styled_components_Wrapper__ = __webpack_require__("./styled-components/Wrapper.js");
var _jsxFileName = 'C:\\code\\react-to-do-list\\components\\Layout.js';





var Layout = function Layout(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'html',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'body',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }),
            props.children,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/signUp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styled_components_Title__ = __webpack_require__("./styled-components/Title.js");
var _jsxFileName = 'C:\\code\\react-to-do-list\\pages\\signUp.js';




/* harmony default export */ __webpack_exports__["default"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__styled_components_Title__["a" /* default */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            'This is the Sign Up page'
        )
    );
});

/***/ }),

/***/ "./styled-components/Anchor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\n text-align: center;\n padding: 1em;\n margin-left: 1em;\n color: #A49E8D;\n\n &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n  &:active {\n    color: #FF9244;\n  }\n'], ['\n text-align: center;\n padding: 1em;\n margin-left: 1em;\n color: #A49E8D;\n\n &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n  &:active {\n    color: #FF9244;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Anchor = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (Anchor);

/***/ }),

/***/ "./styled-components/Container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Container */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\npadding: 1em;\nmargin-left: 15em;\ndisplay: inline-block;\n'], ['\npadding: 1em;\nmargin-left: 15em;\ndisplay: inline-block;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./styled-components/Par.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\nfont-size: .75em;\ntext-aliign: center;\ncolor: #A49E8D;\n\n'], ['\nfont-size: .75em;\ntext-aliign: center;\ncolor: #A49E8D;\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Par = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.p(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Par);

/***/ }),

/***/ "./styled-components/Title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\nfont-size: 1.5em;\ntext-aliign: center;\ncolor: #FF9244;\n\n'], ['\nfont-size: 1.5em;\ntext-aliign: center;\ncolor: #FF9244;\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Title = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.h1(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "./styled-components/Wrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\npadding: 1em;\nmargin: auto;\nbackground-color: #5A6D96;\nborder-top: 1px solid #d8d8d8;\n\n'], ['\npadding: 1em;\nmargin: auto;\nbackground-color: #5A6D96;\nborder-top: 1px solid #d8d8d8;\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.section(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (Wrapper);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/signUp.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=signUp.js.map