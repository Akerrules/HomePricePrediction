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

/***/ "(app-client)/./src/app/savebar.js":
/*!****************************!*\
  !*** ./src/app/savebar.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ \"(app-client)/./src/app/page.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/firebase/config */ \"(app-client)/./src/firebase/config.js\");\n/* harmony import */ var _firebase_firestore_getData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/firebase/firestore/getData */ \"(app-client)/./src/firebase/firestore/getData.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// @refresh reset\nfunction SideBar() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [savebar, setSaveBar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleOpen = (reason)=>{\n        setSaveBar(true);\n    };\n    const handleClose = (reason)=>{\n        setSaveBar(false);\n    };\n    const handleForm = async ()=>{\n        const { result, error } = await getData(\"users\" + \"/\" + auth.currentUser.uid + \"/homedata\", \"\", getJsonData(1));\n        if (error) {\n            return console.log(error);\n        }\n        setResponse(false);\n    };\n    const data = [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\",\n        \"5\",\n        \"6\",\n        \"7\",\n        \"8\",\n        \"5\",\n        \"6\",\n        \"7\",\n        \"8\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            // bg-violet-600\n            //from-[#ffffff] to-[#f2f2f2] bg-gradient-to-b from-[#581db5] to-[#5500b6]\n            // from-[#581db5] to-[#5500b6]\n            className: \"relative shadow-2xl  max-h-screen shadow-innder bg-gradient-to-b from-[#581db5] to-[#5500b6] ease-in-out duration-300 left-0 w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex   flex-row  p-9\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" w-4/6 font-bold text-white text-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \" Homes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/app/savebar.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/app/savebar.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/app/savebar.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full max-h-screen justify-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"  flex flex-col items-center   w-11/12 h-11/12 mb-24   overflow-auto   shadow-[#3b0696] shadow-2xl drop-shadow-lg rounded-lg \",\n                        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-11/12   mt-5 pt-5 pb-5 mb-5 rounded shadow-2xl bg-white  text-white\",\n                                children: \"white\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/app/savebar.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/app/savebar.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/app/savebar.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/app/savebar.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbook/Documents/GitHub/HomePricePrediction/homeprice/src/app/savebar.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(SideBar, \"MtyU+Gt3mKaijuddewKPRwlU4/A=\", true, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SideBar;\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zYXZlYmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDRTtBQUNQO0FBQ2tCO0FBQ0M7QUFDTTtBQUNuRCxpQkFBaUI7QUFFRixTQUFTTTs7SUFDdEIsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUyxhQUFhLENBQUNDO1FBQ2xCRixXQUFXO0lBQ2I7SUFDQSxNQUFNRyxjQUFjLENBQUNEO1FBQ25CRixXQUFXO0lBQ2I7SUFDQSxNQUFNSSxhQUFhO1FBQ2pCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNQyxRQUM5QixVQUFVLE1BQU1DLEtBQUtDLFlBQVlDLE1BQU0sYUFDdkMsSUFDQUMsWUFBWTtRQUdkLElBQUlMLE9BQU87WUFDVCxPQUFPTSxRQUFRQyxJQUFJUDtRQUNyQjtRQUNBUSxZQUFZO0lBQ2Q7SUFDQSxNQUFNQyxPQUFPO1FBQUM7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztRQUFLO0tBQUk7SUFDekUscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7a0JBb0JkLDRFQUFDQztZQUNDLGdCQUFnQjtZQUNoQiwwRUFBMEU7WUFDMUUsOEJBQThCO1lBQzlCRCxXQUFVOzs4QkFFViw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDRTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJUCw4REFBQ0Q7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNaRixLQUFLSyxJQUFJLENBQUNDLE1BQU1DLHNCQUNmLDhEQUFDSjtnQ0FBSUQsV0FBVTswQ0FBd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNyRztHQXBFd0JwQjs7UUFDUEgsc0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zYXZlYmFyLmpzPzk3NWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgZmlyZWJhc2VfYXBwIGZyb20gXCJAL2ZpcmViYXNlL2NvbmZpZ1wiO1xuaW1wb3J0IGFkZERhdGEgZnJvbSBcIkAvZmlyZWJhc2UvZmlyZXN0b3JlL2dldERhdGFcIjtcbi8vIEByZWZyZXNoIHJlc2V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2F2ZWJhciwgc2V0U2F2ZUJhcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVPcGVuID0gKHJlYXNvbikgPT4ge1xuICAgIHNldFNhdmVCYXIodHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKHJlYXNvbikgPT4ge1xuICAgIHNldFNhdmVCYXIoZmFsc2UpO1xuICB9O1xuICBjb25zdCBoYW5kbGVGb3JtID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0LCBlcnJvciB9ID0gYXdhaXQgZ2V0RGF0YShcbiAgICAgIFwidXNlcnNcIiArIFwiL1wiICsgYXV0aC5jdXJyZW50VXNlci51aWQgKyBcIi9ob21lZGF0YVwiLFxuICAgICAgXCJcIixcbiAgICAgIGdldEpzb25EYXRhKDEpXG4gICAgKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgc2V0UmVzcG9uc2UoZmFsc2UpO1xuICB9O1xuICBjb25zdCBkYXRhID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCJdO1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIFwiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIHctc2NyZWVuICB3LXNjcmVlbiBwLTggXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlT3Blbn0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXszfVxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMy43NSA1LjI1aDE2LjVtLTE2LjUgNC41aDE2LjVtLTE2LjUgNC41aDE2LjVtLTE2LjUgNC41aDE2LjVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxkaXZcbiAgICAgICAgLy8gYmctdmlvbGV0LTYwMFxuICAgICAgICAvL2Zyb20tWyNmZmZmZmZdIHRvLVsjZjJmMmYyXSBiZy1ncmFkaWVudC10by1iIGZyb20tWyM1ODFkYjVdIHRvLVsjNTUwMGI2XVxuICAgICAgICAvLyBmcm9tLVsjNTgxZGI1XSB0by1bIzU1MDBiNl1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgc2hhZG93LTJ4bCAgbWF4LWgtc2NyZWVuIHNoYWRvdy1pbm5kZXIgYmctZ3JhZGllbnQtdG8tYiBmcm9tLVsjNTgxZGI1XSB0by1bIzU1MDBiNl0gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIGxlZnQtMCB3LTk2XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICAgZmxleC1yb3cgIHAtOVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctNC82IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHRleHQtMnhsXCI+XG4gICAgICAgICAgICA8cD4gSG9tZXM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogYmctdmlvbGV0LTcwMCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtYXgtaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICAgdy0xMS8xMiBoLTExLzEyIG1iLTI0ICAgb3ZlcmZsb3ctYXV0byAgIHNoYWRvdy1bIzNiMDY5Nl0gc2hhZG93LTJ4bCBkcm9wLXNoYWRvdy1sZyByb3VuZGVkLWxnIFwiPlxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEvMTIgICBtdC01IHB0LTUgcGItNSBtYi01IHJvdW5kZWQgc2hhZG93LTJ4bCBiZy13aGl0ZSAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHdoaXRlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJQYWdlIiwidXNlUm91dGVyIiwiZmlyZWJhc2VfYXBwIiwiYWRkRGF0YSIsIlNpZGVCYXIiLCJyb3V0ZXIiLCJzYXZlYmFyIiwic2V0U2F2ZUJhciIsImhhbmRsZU9wZW4iLCJyZWFzb24iLCJoYW5kbGVDbG9zZSIsImhhbmRsZUZvcm0iLCJyZXN1bHQiLCJlcnJvciIsImdldERhdGEiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJnZXRKc29uRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRSZXNwb25zZSIsImRhdGEiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/savebar.js\n"));

/***/ })

});