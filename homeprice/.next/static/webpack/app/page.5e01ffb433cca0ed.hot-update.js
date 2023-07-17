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

/***/ "(app-client)/./src/context/AuthContext.js":
/*!************************************!*\
  !*** ./src/context/AuthContext.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: function() { return /* binding */ AuthContext; },\n/* harmony export */   AuthContextProvider: function() { return /* binding */ AuthContextProvider; },\n/* harmony export */   useAuthContext: function() { return /* binding */ useAuthContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-client)/../../../../node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase/config */ \"(app-client)/./src/firebase/config.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});\nconst useAuthContext = ()=>{\n    _s();\n    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(AuthContext);\n};\n_s(useAuthContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst AuthContextProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user)=>{\n            if (user) {\n                setUser(user);\n                console.log(\"from auth place\");\n            } else {\n                setUser(null);\n            }\n            setLoading(false);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n            value: {\n                user\n            },\n            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/context/AuthContext.js\",\n                lineNumber: 32,\n                columnNumber: 20\n            }, undefined) : children\n        }, void 0, false, {\n            fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/context/AuthContext.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/context/AuthContext.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AuthContextProvider, \"NiO5z6JIqzX62LS5UWDgIqbZYyY=\");\n_c = AuthContextProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQztBQUNmO0FBRTdDLE1BQU1JLE9BQU9GLHNEQUFPQSxDQUFDQyx3REFBWUE7QUFFMUIsTUFBTUUsNEJBQWNMLDBEQUFtQk0sQ0FBQyxDQUFDLEdBQUc7QUFFNUMsTUFBTUMsaUJBQWlCOztJQUFNUCxPQUFBQSx1REFBZ0JRLENBQUNIO0FBQVcsRUFBRTtHQUFyREU7QUFFTixNQUFNRSxzQkFBc0I7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzlDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWixxREFBY2EsQ0FBQztJQUN2QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YscURBQWNhLENBQUM7SUFFN0NiLHNEQUFlZ0IsQ0FBQztRQUNkLE1BQU1DLGNBQWNoQixpRUFBa0JBLENBQUNHLE1BQU0sQ0FBQ087WUFDNUMsSUFBSUEsTUFBTTtnQkFDUkMsUUFBUUQ7Z0JBQ1JPLFFBQVFDLElBQUk7WUFDZCxPQUFPO2dCQUNMUCxRQUFRO1lBQ1Y7WUFDQUcsV0FBVztRQUNiO1FBRUEsT0FBTyxJQUFNRTtJQUNmLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRztRQUFLQyxXQUFVO2tCQUNkLDRFQUFDaEIsWUFBWWlCO1lBQVNDLE9BQU87Z0JBQUVaO1lBQUs7c0JBQ2pDRyx3QkFBVSw4REFBQ1U7MEJBQUk7Ozs7OzRCQUFtQmQ7Ozs7Ozs7Ozs7O0FBSTNDLEVBQUU7SUF6QldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzRiYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkLCBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBmaXJlYmFzZV9hcHAgZnJvbSBcIkAvZmlyZWJhc2UvY29uZmlnXCI7XG5cbmNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlX2FwcCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aENvbnRleHQgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImZyb20gYXV0aCBwbGFjZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyIH19PlxuICAgICAgICB7bG9hZGluZyA/IDxkaXY+TG9hZGluZy4uLjwvZGl2PiA6IGNoaWxkcmVufVxuICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZ2V0QXV0aCIsImZpcmViYXNlX2FwcCIsImF1dGgiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/context/AuthContext.js\n"));

/***/ })

});