"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/firebase/firestore/getData.js":
/*!*******************************************!*\
  !*** ./src/firebase/firestore/getData.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getDoument; }\n/* harmony export */ });\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/firebase/config */ \"(app-client)/./src/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-client)/../../../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_firebase_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function getDoument(collection_, id, type) {\n    let docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, collection_, id);\n    let result = {};\n    let error = null;\n    if (type === \"single\") {\n        try {\n            result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n        } catch (e) {\n            error = e;\n        }\n    } else if (type === \"multi\") {\n        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, collection_));\n        console.log(\"getting data\", collection_);\n        querySnapshot.forEach((doc)=>{\n            // doc.data() is never undefined for query doc snapshots\n            result[doc.id] = doc.data();\n            console.log(doc.id, \" => \", doc.data());\n        });\n    }\n    return {\n        result,\n        error\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2ZpcmViYXNlL2ZpcmVzdG9yZS9nZXREYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQU1qQjtBQUMyQztBQUV2RSxNQUFNUyxLQUFLUixnRUFBWUEsQ0FBQ0Qsd0RBQVlBO0FBQ3JCLGVBQWVVLFdBQVdDLFdBQVcsRUFBRUMsRUFBRSxFQUFFQyxJQUFJO0lBQzVELElBQUlDLFNBQVNaLHVEQUFHQSxDQUFDTyxJQUFJRSxhQUFhQztJQUVsQyxJQUFJRyxTQUFTLENBQUM7SUFDZCxJQUFJQyxRQUFRO0lBRVosSUFBSUgsU0FBUyxVQUFVO1FBQ3JCLElBQUk7WUFDRkUsU0FBUyxNQUFNWiwwREFBTUEsQ0FBQ1c7UUFDeEIsRUFBRSxPQUFPRyxHQUFHO1lBQ1ZELFFBQVFDO1FBQ1Y7SUFDRixPQUFPLElBQUlKLFNBQVMsU0FBUztRQUMzQixNQUFNSyxnQkFBZ0IsTUFBTVYsMkRBQU9BLENBQUNILDhEQUFVQSxDQUFDSSxJQUFJRTtRQUNuRFEsUUFBUUMsSUFBSSxnQkFBZ0JUO1FBQzVCTyxjQUFjRyxRQUFRLENBQUNuQjtZQUNyQix3REFBd0Q7WUFDeERhLE1BQU0sQ0FBQ2IsSUFBSVUsR0FBRyxHQUFHVixJQUFJb0I7WUFDckJILFFBQVFDLElBQUlsQixJQUFJVSxJQUFJLFFBQVFWLElBQUlvQjtRQUNsQztJQUNGO0lBRUEsT0FBTztRQUFFUDtRQUFRQztJQUFNO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9maXJlYmFzZS9maXJlc3RvcmUvZ2V0RGF0YS5qcz84YWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZV9hcHAgZnJvbSBcIkAvZmlyZWJhc2UvY29uZmlnXCI7XG5pbXBvcnQge1xuICBnZXRGaXJlc3RvcmUsXG4gIGRvYyxcbiAgZ2V0RG9jLFxuICBjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoZmlyZWJhc2VfYXBwKTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldERvdW1lbnQoY29sbGVjdGlvbl8sIGlkLCB0eXBlKSB7XG4gIGxldCBkb2NSZWYgPSBkb2MoZGIsIGNvbGxlY3Rpb25fLCBpZCk7XG5cbiAgbGV0IHJlc3VsdCA9IHt9O1xuICBsZXQgZXJyb3IgPSBudWxsO1xuXG4gIGlmICh0eXBlID09PSBcInNpbmdsZVwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJtdWx0aVwiKSB7XG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgY29sbGVjdGlvbl8pKTtcbiAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGF0YVwiLCBjb2xsZWN0aW9uXyk7XG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgIC8vIGRvYy5kYXRhKCkgaXMgbmV2ZXIgdW5kZWZpbmVkIGZvciBxdWVyeSBkb2Mgc25hcHNob3RzXG4gICAgICByZXN1bHRbZG9jLmlkXSA9IGRvYy5kYXRhKCk7XG4gICAgICBjb25zb2xlLmxvZyhkb2MuaWQsIFwiID0+IFwiLCBkb2MuZGF0YSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHJlc3VsdCwgZXJyb3IgfTtcbn1cbiJdLCJuYW1lcyI6WyJmaXJlYmFzZV9hcHAiLCJnZXRGaXJlc3RvcmUiLCJkb2MiLCJnZXREb2MiLCJjb25uZWN0RmlyZXN0b3JlRW11bGF0b3IiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJ3aGVyZSIsImdldERvY3MiLCJkYiIsImdldERvdW1lbnQiLCJjb2xsZWN0aW9uXyIsImlkIiwidHlwZSIsImRvY1JlZiIsInJlc3VsdCIsImVycm9yIiwiZSIsInF1ZXJ5U25hcHNob3QiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/firebase/firestore/getData.js\n"));

/***/ })

});