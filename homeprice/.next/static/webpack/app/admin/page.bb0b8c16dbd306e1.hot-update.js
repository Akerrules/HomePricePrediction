"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-client)/./src/firebase/firestore/addData.js":
/*!*******************************************!*\
  !*** ./src/firebase/firestore/addData.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addData; }\n/* harmony export */ });\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/firebase/config */ \"(app-client)/./src/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-client)/../../../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_firebase_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function addData(colllection, id, data) {\n    let result = null;\n    let error = null;\n    console.log(id, colllection);\n    try {\n        if (id != \"\") {\n            result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, colllection, id), data, {\n                merge: true\n            });\n        } else {\n            result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, colllection), data, {\n                merge: true\n            });\n        }\n    } catch (e) {\n        error = e;\n    }\n    return {\n        result,\n        error\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2ZpcmViYXNlL2ZpcmVzdG9yZS9hZGREYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUMwQjtBQUV2RSxNQUFNSyxLQUFLSixnRUFBWUEsQ0FBQ0Qsd0RBQVlBO0FBQ3JCLGVBQWVNLFFBQVFDLFdBQVcsRUFBRUMsRUFBRSxFQUFFQyxJQUFJO0lBQ3pELElBQUlDLFNBQVM7SUFDYixJQUFJQyxRQUFRO0lBQ1pDLFFBQVFDLElBQUlMLElBQUlEO0lBQ2hCLElBQUk7UUFDRixJQUFJQyxNQUFNLElBQUk7WUFDWkUsU0FBUyxNQUFNUCwwREFBTUEsQ0FBQ0QsdURBQUdBLENBQUNHLElBQUlFLGFBQWFDLEtBQUtDLE1BQU07Z0JBQ3BESyxPQUFPO1lBQ1Q7UUFDRixPQUFPO1lBQ0xKLFNBQVMsTUFBTU4sMERBQU1BLENBQUNGLHVEQUFHQSxDQUFDRyxJQUFJRSxjQUFjRSxNQUFNO2dCQUNoREssT0FBTztZQUNUO1FBQ0Y7SUFDRixFQUFFLE9BQU9DLEdBQUc7UUFDVkosUUFBUUk7SUFDVjtJQUVBLE9BQU87UUFBRUw7UUFBUUM7SUFBTTtBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmlyZWJhc2UvZmlyZXN0b3JlL2FkZERhdGEuanM/ZjE5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2VfYXBwIGZyb20gXCJAL2ZpcmViYXNlL2NvbmZpZ1wiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBkb2MsIHNldERvYywgYWRkRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZV9hcHApO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWRkRGF0YShjb2xsbGVjdGlvbiwgaWQsIGRhdGEpIHtcbiAgbGV0IHJlc3VsdCA9IG51bGw7XG4gIGxldCBlcnJvciA9IG51bGw7XG4gIGNvbnNvbGUubG9nKGlkLCBjb2xsbGVjdGlvbik7XG4gIHRyeSB7XG4gICAgaWYgKGlkICE9IFwiXCIpIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHNldERvYyhkb2MoZGIsIGNvbGxsZWN0aW9uLCBpZCksIGRhdGEsIHtcbiAgICAgICAgbWVyZ2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgYWRkRG9jKGRvYyhkYiwgY29sbGxlY3Rpb24pLCBkYXRhLCB7XG4gICAgICAgIG1lcmdlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIHsgcmVzdWx0LCBlcnJvciB9O1xufVxuIl0sIm5hbWVzIjpbImZpcmViYXNlX2FwcCIsImdldEZpcmVzdG9yZSIsImRvYyIsInNldERvYyIsImFkZERvYyIsImRiIiwiYWRkRGF0YSIsImNvbGxsZWN0aW9uIiwiaWQiLCJkYXRhIiwicmVzdWx0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVyZ2UiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/firebase/firestore/addData.js\n"));

/***/ })

});