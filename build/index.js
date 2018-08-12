module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    _extends({ "data-prefix": "fas", "data-icon": "minus", className: (styles["svg-inline--fa"] || "svg-inline--fa") + " " + (styles["fa-minus"] || "fa-minus") + " " + (styles["fa-w-14"] || "fa-w-14"), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, props),
    _react2.default.createElement("path", { fill: "currentColor", d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" })
  );
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === undefined ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return _react2.default.createElement(
    "svg",
    _extends({ "data-prefix": "fas", "data-icon": "plus", className: (styles["svg-inline--fa"] || "svg-inline--fa") + " " + (styles["fa-plus"] || "fa-plus") + " " + (styles["fa-w-14"] || "fa-w-14"), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, props),
    _react2.default.createElement("path", { fill: "currentColor", d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" })
  );
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _plusSolid = __webpack_require__(23);

var _plusSolid2 = _interopRequireDefault(_plusSolid);

var _minusSolid = __webpack_require__(22);

var _minusSolid2 = _interopRequireDefault(_minusSolid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_Component) {
    _inherits(Accordion, _Component);

    function Accordion(props) {
        _classCallCheck(this, Accordion);

        var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

        var show = props.show;


        _this.state = {
            show: show
        };

        _this.onHeaderClick = _this.onHeaderClick.bind(_this);
        _this.renderContent = _this.renderContent.bind(_this);
        return _this;
    }

    _createClass(Accordion, [{
        key: 'showDropdownArrow',
        value: function showDropdownArrow() {
            var _props = this.props,
                showIcon = _props.showIcon,
                hiddenIcon = _props.hiddenIcon;


            if (this.state.show) {
                return hiddenIcon ? hiddenIcon : _react2.default.createElement(_minusSolid2.default, { style: styles.iconStyle });
            } else {
                return showIcon ? showIcon : _react2.default.createElement(_plusSolid2.default, { style: styles.iconStyle });
            }
        }
    }, {
        key: 'onHeaderClick',
        value: function onHeaderClick() {
            this.setState({ show: !this.state.show });
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            var _props2 = this.props,
                title = _props2.title,
                headerContainerStyle = _props2.headerContainerStyle;


            return _react2.default.createElement(
                'div',
                { className: 'content-header',
                    onClick: this.onHeaderClick,
                    style: _extends({}, styles.headerContainerStyle, headerContainerStyle)
                },
                title ? title : _react2.default.createElement(
                    'p',
                    null,
                    'N/A'
                ),
                this.showDropdownArrow()
            );
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var contentContainerStyle = this.props.contentContainerStyle;


            var openStyle = this.state.show ? styles.openContent : null;

            return _react2.default.createElement(
                'div',
                { className: "content",
                    style: _extends({}, styles.contentContainerStyle, openStyle, contentContainerStyle)
                },
                this.props.children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var accordionTabContainerStyle = this.props.accordionTabContainerStyle;


            return _react2.default.createElement(
                'div',
                { style: _extends({}, styles.accordionTabContainerStyle, accordionTabContainerStyle) },
                this.renderHeader(),
                this.renderContent()
            );
        }
    }]);

    return Accordion;
}(_react.Component);

exports.default = Accordion;


var styles = {
    headerContainerStyle: {
        border: 'solid thin #c1c1c1',
        margin: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        height: 50
    },
    contentContainerStyle: {
        opacity: 0,
        boxSizing: 'border-box',
        borderBottom: 'solid thin #c1c1c1',
        borderRight: 'solid thin #c1c1c1',
        borderLeft: 'solid thin #c1c1c1',
        maxHeight: 0,
        overflow: 'hidden',
        padding: 0,
        transitionProperty: 'max-height opacity',
        transitionDuration: '500ms',
        webkitTransitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        mozTransitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        oTransitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        transitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
    },
    openContent: {
        opacity: 1,
        maxHeight: 400
    },
    accordionTabContainerStyle: {},
    iconStyle: {
        width: 30,
        height: 30
    }
};

/***/ })

/******/ });