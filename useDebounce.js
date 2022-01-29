"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDebounce;

var _react = require("react");

function useDebounce() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var r = (0, _react.useRef)();

  var debounce = function debounce(fn) {
    if (r.current) clearTimeout(r.current);
    r.current = setTimeout(function () {
      return fn();
    }, t);
  };

  return debounce;
}