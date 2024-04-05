"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_cart_carttoolbar_js-_8e241",{

/***/ "./node_modules/@restart/hooks/esm/useCallbackRef.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCallbackRef.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useCallbackRef; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * A convenience hook around `useState` designed to be paired with\n * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.\n * Callback refs are useful over `useRef()` when you need to respond to the ref being set\n * instead of lazily accessing it in an effect.\n *\n * ```ts\n * const [element, attachRef] = useCallbackRef<HTMLDivElement>()\n *\n * useEffect(() => {\n *   if (!element) return\n *\n *   const calendar = new FullCalendar.Calendar(element)\n *\n *   return () => {\n *     calendar.destroy()\n *   }\n * }, [element])\n *\n * return <div ref={attachRef} />\n * ```\n *\n * @category refs\n */\nfunction useCallbackRef() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZUNhbGxiYWNrUmVmLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixTQUFTLCtDQUFRO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlQ2FsbGJhY2tSZWYuanM/ZjY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGhvb2sgYXJvdW5kIGB1c2VTdGF0ZWAgZGVzaWduZWQgdG8gYmUgcGFpcmVkIHdpdGhcbiAqIHRoZSBjb21wb25lbnQgW2NhbGxiYWNrIHJlZl0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlZnMtYW5kLXRoZS1kb20uaHRtbCNjYWxsYmFjay1yZWZzKSBhcGkuXG4gKiBDYWxsYmFjayByZWZzIGFyZSB1c2VmdWwgb3ZlciBgdXNlUmVmKClgIHdoZW4geW91IG5lZWQgdG8gcmVzcG9uZCB0byB0aGUgcmVmIGJlaW5nIHNldFxuICogaW5zdGVhZCBvZiBsYXppbHkgYWNjZXNzaW5nIGl0IGluIGFuIGVmZmVjdC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MRGl2RWxlbWVudD4oKVxuICpcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGlmICghZWxlbWVudCkgcmV0dXJuXG4gKlxuICogICBjb25zdCBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoZWxlbWVudClcbiAqXG4gKiAgIHJldHVybiAoKSA9PiB7XG4gKiAgICAgY2FsZW5kYXIuZGVzdHJveSgpXG4gKiAgIH1cbiAqIH0sIFtlbGVtZW50XSlcbiAqXG4gKiByZXR1cm4gPGRpdiByZWY9e2F0dGFjaFJlZn0gLz5cbiAqIGBgYFxuICpcbiAqIEBjYXRlZ29yeSByZWZzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKCkge1xuICByZXR1cm4gdXNlU3RhdGUobnVsbCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@restart/hooks/esm/useCallbackRef.js\n"));

/***/ })

});