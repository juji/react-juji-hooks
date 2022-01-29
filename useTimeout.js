"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTimeout;

var _react = require("react");

function useTimeout() {
  var t = (0, _react.useRef)();

  function clear() {
    if (t.current) clearTimeout(t.current);
    t.current = null;
  }

  function timeout(fn, n) {
    clear();
    t.current = setTimeout(fn, n);
  }

  return [timeout, clear];
}