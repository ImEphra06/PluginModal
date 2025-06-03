"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Modal(_ref) {
  var display = _ref.display,
    setDisplay = _ref.setDisplay,
    message = _ref.message,
    params = _ref.params;
  var toggleModal = function toggleModal() {
    setDisplay(false);
    if (params.onClose && typeof params.onClose === "function") {
      params.onClose(); // Appelle une fonction fournie par le parent
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-container ".concat(display ? "show" : "hide")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "overlay",
    onClick: toggleModal
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-info"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "message"
  }, message), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-button",
    style: {
      backgroundColor: params.bgColor || "#007bff",
      color: params.Color || "#fff",
      borderColor: params.bgColor || "#007bff"
    },
    onClick: toggleModal
  }, "OK")));
}
Modal.propTypes = {
  display: _propTypes["default"].bool.isRequired,
  setDisplay: _propTypes["default"].func.isRequired,
  message: _propTypes["default"].string.isRequired,
  params: _propTypes["default"].shape({
    bgColor: _propTypes["default"].string,
    Color: _propTypes["default"].string,
    onClose: _propTypes["default"].func // Fournie par le parent
  })
};
var _default = exports["default"] = Modal;