"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cors */ \"./utils/cors.js\");\n\n\n\nconst cors = (0,_utils_cors__WEBPACK_IMPORTED_MODULE_2__.default)(cors__WEBPACK_IMPORTED_MODULE_1___default()({\n  methods: ['GET', 'POST', 'OPTIONS']\n}));\nasync function handler(req, res) {\n  await cors(req, res);\n  const url = \"http://text-processing.com/api/sentiment/\";\n  const params = new URLSearchParams();\n  params.append(\"text\", req.body.text);\n\n  try {\n    const data = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, params).then(res => res.data);\n    return res.status(200).json(data);\n  } catch (err) {\n    console.log(err);\n    res.status(400).json(\"error\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUcsSUFBSSxHQUFHRCxvREFBYyxDQUFDRCwyQ0FBSSxDQUFDO0FBQUNHLEVBQUFBLE9BQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFNBQWhCO0FBQVYsQ0FBRCxDQUFMLENBQTNCO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLFFBQU1KLElBQUksQ0FBQ0csR0FBRCxFQUFNQyxHQUFOLENBQVY7QUFDQSxRQUFNQyxHQUFHLEdBQUcsMkNBQVo7QUFDQSxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsZUFBSixFQUFmO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLE1BQWQsRUFBc0JMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxJQUEvQjs7QUFFQSxNQUFJO0FBQ0YsVUFBTUMsSUFBSSxHQUFHLE1BQU1kLGlEQUFBLENBQVdRLEdBQVgsRUFBZ0JDLE1BQWhCLEVBQXdCTyxJQUF4QixDQUE2QlQsR0FBRyxJQUFJQSxHQUFHLENBQUNPLElBQXhDLENBQW5CO0FBQ0EsV0FBT1AsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJKLElBQXJCLENBQVA7QUFDRCxHQUhELENBR0UsT0FBTUssR0FBTixFQUFXO0FBQ1hDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FaLElBQUFBLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLE9BQXJCO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtcy8uL3BhZ2VzL2FwaS9pbmRleC5qcz9hMzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgaW5pdE1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vdXRpbHMvY29ycyc7XG5cbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShDb3JzKHttZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ09QVElPTlMnXSx9KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgYXdhaXQgY29ycyhyZXEsIHJlcyk7XG4gIGNvbnN0IHVybCA9IFwiaHR0cDovL3RleHQtcHJvY2Vzc2luZy5jb20vYXBpL3NlbnRpbWVudC9cIjtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICBwYXJhbXMuYXBwZW5kKFwidGV4dFwiLCByZXEuYm9keS50ZXh0KTtcblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgcGFyYW1zKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXG4gIH0gY2F0Y2goZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbihcImVycm9yXCIpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsIkNvcnMiLCJpbml0TWlkZGxld2FyZSIsImNvcnMiLCJtZXRob2RzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVybCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsImJvZHkiLCJ0ZXh0IiwiZGF0YSIsInBvc3QiLCJ0aGVuIiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ "./utils/cors.js":
/*!***********************!*\
  !*** ./utils/cors.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMiddleware)\n/* harmony export */ });\n// Helper method to wait for a middleware to execute before continuing\n// And to throw an error when an error happens in a middleware\nfunction initMiddleware(middleware) {\n  return (req, res) => new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb3JzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxDQUF3QkMsVUFBeEIsRUFBb0M7QUFDL0MsU0FBTyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FDTCxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CTCxJQUFBQSxVQUFVLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFZSSxNQUFELElBQVk7QUFDL0IsVUFBSUEsTUFBTSxZQUFZQyxLQUF0QixFQUE2QjtBQUMzQixlQUFPRixNQUFNLENBQUNDLE1BQUQsQ0FBYjtBQUNEOztBQUNELGFBQU9GLE9BQU8sQ0FBQ0UsTUFBRCxDQUFkO0FBQ0QsS0FMUyxDQUFWO0FBTUQsR0FQRCxDQURGO0FBU0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbXMvLi91dGlscy9jb3JzLmpzPzZkZGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdE1pZGRsZXdhcmUobWlkZGxld2FyZSkge1xuICAgIHJldHVybiAocmVxLCByZXMpID0+XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICB9Il0sIm5hbWVzIjpbImluaXRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/cors.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();