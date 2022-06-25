/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Calculator.js":
/*!***************************!*\
  !*** ./src/Calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calculator)\n/* harmony export */ });\nclass Calculator {\r\n  result = 0;\r\n  dictionary = {\r\n    \"+\": \"add\",\r\n    \"-\": \"subtract\",\r\n    x: \"multiply\",\r\n    \"/\": \"divide\",\r\n  };\r\n\r\n  calculate(num1, oper, num2) {\r\n    console.log(this);\r\n\r\n    let a, b;\r\n\r\n    if (num1) {\r\n      a = parseFloat(num1);\r\n      b = parseFloat(num2);\r\n    } else {\r\n      a = this.result;\r\n      b = parseFloat(num2);\r\n    }\r\n\r\n    return this[this.dictionary[oper]](a, b);\r\n  }\r\n\r\n  add(a, b) {\r\n    this.result = a + b;\r\n    return this.result;\r\n  }\r\n\r\n  subtract(a, b) {\r\n    this.result = a - b;\r\n    return this.result;\r\n  }\r\n\r\n  multiply(a, b) {\r\n    this.result = a * b;\r\n    return this.result;\r\n  }\r\n\r\n  divide(a, b) {\r\n    this.result = a / b;\r\n    return this.result;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://modular_dom/./src/Calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator */ \"./src/Calculator.js\");\n\r\n\r\nlet num1 = \"\";\r\nlet oper = \"\";\r\nlet num2 = \"\";\r\nlet calculator = new _Calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst buttonListener = (event) => {\r\n  let char = event.target.textContent;\r\n\r\n  if (isNaN(parseInt(char)) && char != \".\") {\r\n    if (char == \"=\") {\r\n      let result = calculator.calculate(num1, oper, num2);\r\n      document.querySelector(\"#display\").textContent = result;\r\n\r\n      num1 = \"\";\r\n      oper = \"\";\r\n      num2 = \"\";\r\n    } else {\r\n      oper = char;\r\n    }\r\n  } else {\r\n    if (oper.length > 0) {\r\n      // second number\r\n      num2 += char;\r\n    } else {\r\n      // first number\r\n      num1 += char;\r\n    }\r\n  }\r\n};\r\n\r\nfor (let btn of document.querySelectorAll(\"button\")) {\r\n  btn.onclick = buttonListener;\r\n}\r\n\n\n//# sourceURL=webpack://modular_dom/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;