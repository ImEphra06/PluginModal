"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
require("./modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Modal(_ref) {
  var display = _ref.display,
    setDisplay = _ref.setDisplay,
    message = _ref.message,
    params = _ref.params;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var handleClose = function handleClose() {
    setDisplay(false);
    if (params.link) {
      navigate(params.link);
    }
  };
  if (!display) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-container show"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "overlay",
    onClick: handleClose
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
    onClick: handleClose
  }, "OK")));
}
Modal.propTypes = {
  display: _propTypes["default"].bool.isRequired,
  setDisplay: _propTypes["default"].func.isRequired,
  message: _propTypes["default"].string.isRequired,
  params: _propTypes["default"].object.isRequired
};
var _default = exports["default"] = Modal;