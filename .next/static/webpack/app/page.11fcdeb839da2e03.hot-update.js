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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FcGoogle_react_icons_fc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FcGoogle!=!react-icons/fc */ \"(app-pages-browser)/./node_modules/react-icons/fc/index.mjs\");\n// components/LoginForm.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst LoginForm = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    console.log(session);\n    if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center min-h-screen bg-black text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4 w-full max-w-md px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            data.session.user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Email: \",\n                            session.user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: session.user.image,\n                        alt: \"Profile Picture\",\n                        className: \"rounded-full w-16 h-16\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-4 w-full max-w-md px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center justify-center w-full px-6 py-3 text-white bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black transition\",\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FcGoogle_react_icons_fc__WEBPACK_IMPORTED_MODULE_3__.FcGoogle, {\n                            className: \"w-6 h-6 mr-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Login with Google\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter OpenAI API Key\",\n                        className: \"w-full px-6 py-3 text-white bg-transparent border-2 border-white rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-2 text-sm text-gray-400\",\n                    children: \"Make sure to only login once the API key is entered\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/smart-inbox-gpt4o/src/app/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginForm, \"ujwIunAD3hlHFoJLG3BNiDLiMqM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDBCQUEwQjs7O0FBRTJCO0FBQ2I7QUFDRTtBQUUxQyxNQUFNSSxZQUFZOztJQUNoQixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdQLDJEQUFVQTtJQUM1Q1EsUUFBUUMsR0FBRyxDQUFDSDtJQUVaLElBQUlDLFdBQVcsaUJBQWlCO1FBQzlCLHFCQUNFLDhEQUFDRztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDOzs0QkFBRTs0QkFBT1AsS0FBS0MsT0FBTyxDQUFDTyxJQUFJLENBQUNDLElBQUk7Ozs7Ozs7a0NBQ2hDLDhEQUFDRjs7NEJBQUU7NEJBQVFOLFFBQVFPLElBQUksQ0FBQ0UsS0FBSzs7Ozs7OztrQ0FDN0IsOERBQUNDO3dCQUFJQyxLQUFLWCxRQUFRTyxJQUFJLENBQUNLLEtBQUs7d0JBQUVDLEtBQUk7d0JBQWtCUixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztJQUl0RTtJQUVBLHFCQUNFLDhEQUFDRDtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ1M7b0JBQ0NULFdBQVU7b0JBQ1ZVLFNBQVMsSUFBTXBCLHVEQUFNQSxDQUFDOztzQ0FFdEIsOERBQUNFLG9GQUFRQTs0QkFBQ1EsV0FBVTs7Ozs7O3dCQUFpQjs7Ozs7Ozs4QkFHdkMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDVzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWmIsV0FBVTs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNDO29CQUFFRCxXQUFVOzhCQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQ7R0F2Q01QOztRQUM4QkosdURBQVVBOzs7S0FEeENJO0FBeUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0xvZ2luRm9ybS5qc1xuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmNHb29nbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYyc7XG5cbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctYmxhY2sgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCB3LWZ1bGwgbWF4LXctbWQgcHgtNFwiPlxuICAgICAgICAgIDxwPk5hbWU6IHtkYXRhLnNlc3Npb24udXNlci5uYW1lfTwvcD5cbiAgICAgICAgICA8cD5FbWFpbDoge3Nlc3Npb24udXNlci5lbWFpbH08L3A+XG4gICAgICAgICAgPGltZyBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX0gYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctMTYgaC0xNlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctYmxhY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHctZnVsbCBtYXgtdy1tZCBweC00XCI+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIHB4LTYgcHktMyB0ZXh0LXdoaXRlIGJnLXRyYW5zcGFyZW50IGJvcmRlci0yIGJvcmRlci13aGl0ZSByb3VuZGVkLW1kIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvblwiIFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbihcImdvb2dsZVwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGY0dvb2dsZSBjbGFzc05hbWU9XCJ3LTYgaC02IG1yLTJcIiAvPlxuICAgICAgICAgIExvZ2luIHdpdGggR29vZ2xlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE9wZW5BSSBBUEkgS2V5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC02IHB5LTMgdGV4dC13aGl0ZSBiZy10cmFuc3BhcmVudCBib3JkZXItMiBib3JkZXItd2hpdGUgcm91bmRlZC1tZCBwbGFjZWhvbGRlci13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctd2hpdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIE1ha2Ugc3VyZSB0byBvbmx5IGxvZ2luIG9uY2UgdGhlIEFQSSBrZXkgaXMgZW50ZXJlZFxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwiUmVhY3QiLCJGY0dvb2dsZSIsIkxvZ2luRm9ybSIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});