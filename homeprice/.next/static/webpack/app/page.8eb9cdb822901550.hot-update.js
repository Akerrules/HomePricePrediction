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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getDoument; }\n/* harmony export */ });\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/firebase/config */ \"(app-client)/./src/firebase/config.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-client)/../../../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_firebase_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nasync function getDoument(collection_, id, type) {\n    console.log(\"5:12\", collection_);\n    let docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, collection_, id);\n    let result = {};\n    let error = null;\n    if (type === \"single\") {\n        try {\n            result = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n        } catch (e) {\n            error = e;\n        }\n    } else if (type === \"multi\") {\n        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, collection_));\n        console.log(\"getting data\", collection_);\n        querySnapshot.forEach((doc)=>{\n            // doc.data() is never undefined for query doc snapshots\n            result[doc.id] = doc.data();\n            console.log(doc.id, \" => \", doc.data());\n        });\n    } else if (type === \"del\") {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, collection_, id));\n    }\n    return {\n        result,\n        error\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2ZpcmViYXNlL2ZpcmVzdG9yZS9nZXREYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUM2QjtBQUNIO0FBRXZFLE1BQU1TLEtBQUtSLGdFQUFZQSxDQUFDRCx3REFBWUE7QUFDckIsZUFBZVUsV0FBV0MsV0FBVyxFQUFFQyxFQUFFLEVBQUVDLElBQUk7SUFDNURDLFFBQVFDLElBQUksUUFBUUo7SUFDcEIsSUFBSUssU0FBU2QsdURBQUdBLENBQUNPLElBQUlFLGFBQWFDO0lBRWxDLElBQUlLLFNBQVMsQ0FBQztJQUNkLElBQUlDLFFBQVE7SUFFWixJQUFJTCxTQUFTLFVBQVU7UUFDckIsSUFBSTtZQUNGSSxTQUFTLE1BQU1kLDBEQUFNQSxDQUFDYTtRQUN4QixFQUFFLE9BQU9HLEdBQUc7WUFDVkQsUUFBUUM7UUFDVjtJQUNGLE9BQU8sSUFBSU4sU0FBUyxTQUFTO1FBQzNCLE1BQU1PLGdCQUFnQixNQUFNWiwyREFBT0EsQ0FBQ0gsOERBQVVBLENBQUNJLElBQUlFO1FBQ25ERyxRQUFRQyxJQUFJLGdCQUFnQko7UUFDNUJTLGNBQWNDLFFBQVEsQ0FBQ25CO1lBQ3JCLHdEQUF3RDtZQUN4RGUsTUFBTSxDQUFDZixJQUFJVSxHQUFHLEdBQUdWLElBQUlvQjtZQUNyQlIsUUFBUUMsSUFBSWIsSUFBSVUsSUFBSSxRQUFRVixJQUFJb0I7UUFDbEM7SUFDRixPQUFPLElBQUlULFNBQVMsT0FBTztRQUN6QixNQUFNVCw2REFBU0EsQ0FBQ0YsdURBQUdBLENBQUNPLElBQUlFLGFBQWFDO0lBQ3ZDO0lBRUEsT0FBTztRQUFFSztRQUFRQztJQUFNO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9maXJlYmFzZS9maXJlc3RvcmUvZ2V0RGF0YS5qcz84YWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZV9hcHAgZnJvbSBcIkAvZmlyZWJhc2UvY29uZmlnXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgZ2V0RG9jLCBkZWxldGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGZpcmViYXNlX2FwcCk7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXREb3VtZW50KGNvbGxlY3Rpb25fLCBpZCwgdHlwZSkge1xuICBjb25zb2xlLmxvZyhcIjU6MTJcIiwgY29sbGVjdGlvbl8pO1xuICBsZXQgZG9jUmVmID0gZG9jKGRiLCBjb2xsZWN0aW9uXywgaWQpO1xuXG4gIGxldCByZXN1bHQgPSB7fTtcbiAgbGV0IGVycm9yID0gbnVsbDtcblxuICBpZiAodHlwZSA9PT0gXCJzaW5nbGVcIikge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibXVsdGlcIikge1xuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIGNvbGxlY3Rpb25fKSk7XG4gICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRhdGFcIiwgY29sbGVjdGlvbl8pO1xuICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAvLyBkb2MuZGF0YSgpIGlzIG5ldmVyIHVuZGVmaW5lZCBmb3IgcXVlcnkgZG9jIHNuYXBzaG90c1xuICAgICAgcmVzdWx0W2RvYy5pZF0gPSBkb2MuZGF0YSgpO1xuICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkZWxcIikge1xuICAgIGF3YWl0IGRlbGV0ZURvYyhkb2MoZGIsIGNvbGxlY3Rpb25fLCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHsgcmVzdWx0LCBlcnJvciB9O1xufVxuIl0sIm5hbWVzIjpbImZpcmViYXNlX2FwcCIsImdldEZpcmVzdG9yZSIsImRvYyIsImdldERvYyIsImRlbGV0ZURvYyIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jcyIsImRiIiwiZ2V0RG91bWVudCIsImNvbGxlY3Rpb25fIiwiaWQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImRvY1JlZiIsInJlc3VsdCIsImVycm9yIiwiZSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/firebase/firestore/getData.js\n"));

/***/ })

});