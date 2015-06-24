(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var YearlyPane = require("./YearlyPane");
var MonthlyPane = require("./MonthlyPane");
var YearsRangePane = require("./YearsRangePane");
var CultureProvider = require("./infrastructure/CultureProvider");

var Modes = {
  yearly: "yearly",
  monthly: "monthly",
  years: "yearsrange"
};

var PaneSwitch = (function (_React$Component) {
  function PaneSwitch() {
    _classCallCheck(this, PaneSwitch);

    _get(Object.getPrototypeOf(PaneSwitch.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(PaneSwitch, _React$Component);

  _createClass(PaneSwitch, [{
    key: "render",
    value: function render() {
      if (this.props.mode === Modes.yearly) {
        return React.createElement(YearlyPane, this.props);
      }

      if (this.props.mode === Modes.monthly) {
        return React.createElement(MonthlyPane, this.props);
      }

      return React.createElement(YearsRangePane, null);
    }
  }]);

  return PaneSwitch;
})(React.Component);

var DatePicker = (function (_React$Component2) {
  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    _get(Object.getPrototypeOf(DatePicker.prototype), "constructor", this).call(this, props);
    this.state = {
      date: this.props.date || new Date(),
      mode: Modes.monthly,
      inFocus: false
    };
    this.onFocus = this.onFocus.bind(this);
  }

  _inherits(DatePicker, _React$Component2);

  _createClass(DatePicker, [{
    key: "onFocus",
    value: function onFocus() {
      this.setState({ visible: true });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", onFocus: this.onFocus }),
        React.createElement(PaneSwitch, _extends({ mode: Modes.monthly,
          date: this.state.date,
          visible: !!this.state.inFocus
        }, this.props))
      );
    }
  }]);

  return DatePicker;
})(React.Component);

DatePicker.defaultProps = {
  cultureProvider: new CultureProvider()
};

module.exports = {
  DatePicker: DatePicker,
  CultureProvider: CultureProvider
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MonthlyPane":4,"./YearlyPane":7,"./YearsRangePane":8,"./infrastructure/CultureProvider":9}],2:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var DayCell = (function (_React$Component) {
  function DayCell() {
    _classCallCheck(this, DayCell);

    _get(Object.getPrototypeOf(DayCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(DayCell, _React$Component);

  _createClass(DayCell, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.day
      );
    }
  }]);

  return DayCell;
})(React.Component);

exports["default"] = DayCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var MonthCell = (function (_React$Component) {
  function MonthCell() {
    _classCallCheck(this, MonthCell);

    _get(Object.getPrototypeOf(MonthCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthCell, _React$Component);

  _createClass(MonthCell, [{
    key: "_onClick",
    value: function _onClick() {
      this.props.onSelect(this.props.month);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.month
      );
    }
  }]);

  return MonthCell;
})(React.Component);

MonthCell.propTypes = {
  month: React.PropTypes.number,
  onSelect: React.PropTypes.func
};

exports["default"] = MonthCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var DayCell = require("./DayCell");
var WeekHeaderCell = require("./WeekHeaderCell");
var DAYS_BLOCK_COLUMNS = 7;
var DAYS_BLOCK_ROWS = 6;

var MonthlyPaneHeader = (function (_React$Component) {
  function MonthlyPaneHeader() {
    _classCallCheck(this, MonthlyPaneHeader);

    _get(Object.getPrototypeOf(MonthlyPaneHeader.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthlyPaneHeader, _React$Component);

  _createClass(MonthlyPaneHeader, [{
    key: "render",
    value: function render() {
      var weekdays = [];
      for (var col = 0; col < DAYS_BLOCK_COLUMNS; col++) {
        weekdays.push(React.createElement(
          "th",
          null,
          React.createElement(WeekHeaderCell, {
            key: col,
            weekday: this.props.cultureProvider.dayNameShort(col) })
        ));
      }
      return React.createElement(
        "tr",
        null,
        weekdays
      );
    }
  }]);

  return MonthlyPaneHeader;
})(React.Component);

var MonthlyPaneCell = (function (_React$Component2) {
  function MonthlyPaneCell() {
    _classCallCheck(this, MonthlyPaneCell);

    _get(Object.getPrototypeOf(MonthlyPaneCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthlyPaneCell, _React$Component2);

  _createClass(MonthlyPaneCell, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        null,
        React.createElement(DayCell, { date: this.props.date }),
        ";"
      );
    }
  }]);

  return MonthlyPaneCell;
})(React.Component);

var MonthlyPaneRow = (function (_React$Component3) {
  function MonthlyPaneRow(props) {
    _classCallCheck(this, MonthlyPaneRow);

    _get(Object.getPrototypeOf(MonthlyPaneRow.prototype), "constructor", this).call(this, props);
  }

  _inherits(MonthlyPaneRow, _React$Component3);

  _createClass(MonthlyPaneRow, [{
    key: "render",
    value: function render() {
      var cells = [];
      for (var col = 0; col < DAYS_BLOCK_COLUMNS; col++) {
        cells.push(React.createElement(MonthlyPaneCell, _extends({ key: col }, this.props)));
      }
      return React.createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return MonthlyPaneRow;
})(React.Component);

var MonthlyPane = (function (_React$Component4) {
  function MonthlyPane(props) {
    _classCallCheck(this, MonthlyPane);

    _get(Object.getPrototypeOf(MonthlyPane.prototype), "constructor", this).call(this, props);
  }

  _inherits(MonthlyPane, _React$Component4);

  _createClass(MonthlyPane, [{
    key: "render",
    value: function render() {
      var rows = [];
      for (var row = 0; row < DAYS_BLOCK_ROWS; row++) {
        rows.push(React.createElement(MonthlyPaneRow, _extends({ key: row
        }, this.props, {
          fromDate: this.nextDate(row) })));
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          null,
          React.createElement(MonthlyPaneHeader, this.props),
          rows
        )
      );
    }
  }]);

  return MonthlyPane;
})(React.Component);

exports["default"] = MonthlyPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./DayCell":2,"./WeekHeaderCell":5}],5:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var WeekHeaderCell = (function (_React$Component) {
  function WeekHeaderCell() {
    _classCallCheck(this, WeekHeaderCell);

    _get(Object.getPrototypeOf(WeekHeaderCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(WeekHeaderCell, _React$Component);

  _createClass(WeekHeaderCell, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.weekday
      );
    }
  }]);

  return WeekHeaderCell;
})(React.Component);

exports["default"] = WeekHeaderCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],6:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var YearCell = (function (_React$Component) {
  function YearCell() {
    _classCallCheck(this, YearCell);

    _get(Object.getPrototypeOf(YearCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearCell, _React$Component);

  _createClass(YearCell, [{
    key: "_onClick",
    value: function _onClick() {
      this.props.onSelect(this.props.year);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { onClick: this._onClick },
        "this.props.year"
      );
    }
  }]);

  return YearCell;
})(React.Component);

YearCell.propTypes = {
  year: React.PropTypes.number,
  onSelect: React.PropTypes.func
};

exports["default"] = YearCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],7:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var MonthCell = require("./MonthCell");
var MONTH_BLOCK_COLUMNS = 3;
var MONTH_BLOCK_ROWS = 4;

var YearlyPaneCell = (function (_React$Component) {
  function YearlyPaneCell() {
    _classCallCheck(this, YearlyPaneCell);

    _get(Object.getPrototypeOf(YearlyPaneCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearlyPaneCell, _React$Component);

  _createClass(YearlyPaneCell, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        null,
        React.createElement(MonthCell, null),
        ";"
      );
    }
  }]);

  return YearlyPaneCell;
})(React.Component);

var YearlyPaneRow = (function (_React$Component2) {
  function YearlyPaneRow() {
    _classCallCheck(this, YearlyPaneRow);

    _get(Object.getPrototypeOf(YearlyPaneRow.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearlyPaneRow, _React$Component2);

  _createClass(YearlyPaneRow, [{
    key: "buildCell",
    value: function buildCell() {
      return React.createElement(YearlyPaneCell, null);
    }
  }, {
    key: "render",
    value: function render() {
      var cells = new Array(MONTH_BLOCK_COLUMNS).map(this.buildCell);
      return React.createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return YearlyPaneRow;
})(React.Component);

var YearlyPane = (function (_React$Component3) {
  function YearlyPane() {
    _classCallCheck(this, YearlyPane);

    _get(Object.getPrototypeOf(YearlyPane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearlyPane, _React$Component3);

  _createClass(YearlyPane, [{
    key: "buildRow",
    value: function buildRow() {
      return React.createElement(YearlyPaneRow, null);
    }
  }, {
    key: "render",
    value: function render() {
      var rows = new Array(MONTH_BLOCK_ROWS).map(this.buildRow);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          null,
          rows
        )
      );
    }
  }]);

  return YearlyPane;
})(React.Component);

exports["default"] = YearlyPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MonthCell":3}],8:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var YearCell = require("./YearCell");
var YEARS_BLOCK_SIZE = 6;

var YearsPaneCell = (function (_React$Component) {
  function YearsPaneCell() {
    _classCallCheck(this, YearsPaneCell);

    _get(Object.getPrototypeOf(YearsPaneCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearsPaneCell, _React$Component);

  _createClass(YearsPaneCell, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        null,
        React.createElement(YearCell, { onSelect: this.props.onSelect, year: this.year })
      );
    }
  }]);

  return YearsPaneCell;
})(React.Component);

var YearsPaneRow = (function (_React$Component2) {
  function YearsPaneRow() {
    _classCallCheck(this, YearsPaneRow);

    _get(Object.getPrototypeOf(YearsPaneRow.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearsPaneRow, _React$Component2);

  _createClass(YearsPaneRow, [{
    key: "buildCell",
    value: function buildCell(c, i) {
      return React.createElement(YearsPaneCell, { year: this.props.from + i + 1 });
    }
  }, {
    key: "render",
    value: function render() {
      var cells = new Array(YEARS_BLOCK_SIZE).map(this.buildCell);
      return React.createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return YearsPaneRow;
})(React.Component);

var YearsPane = (function (_React$Component3) {
  function YearsPane() {
    _classCallCheck(this, YearsPane);

    _get(Object.getPrototypeOf(YearsPane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearsPane, _React$Component3);

  _createClass(YearsPane, [{
    key: "buildRow",
    value: function buildRow(e, i) {
      return React.createElement(
        "tr",
        null,
        React.createElement(YearsPaneRow, { from: this.props.from })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var rows = new Array(YEARS_BLOCK_SIZE).map(this.buildRow);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          null,
          rows
        )
      );
    }
  }]);

  return YearsPane;
})(React.Component);

exports["default"] = YearsPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./YearCell":6}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var weekDaysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var CultureProvider = (function () {
    function CultureProvider() {
        var locale = arguments[0] === undefined ? "en-us" : arguments[0];
        var format = arguments[1] === undefined ? "dd/mm/yyyy" : arguments[1];

        _classCallCheck(this, CultureProvider);

        this.locale = locale;
        this.format = format;
    }

    _createClass(CultureProvider, [{
        key: "getWeekDaysNames",
        value: function getWeekDaysNames() {
            return weekDaysNames;
        }
    }, {
        key: "getMonthNames",
        value: function getMonthNames() {
            return monthNames;
        }
    }, {
        key: "monthName",
        value: function monthName(month) {
            return monthNames[month];
        }
    }, {
        key: "monthNameShort",
        value: function monthNameShort(month) {
            return this.monthName(month).slice(0, 3);
        }
    }, {
        key: "dayName",
        value: function dayName(day) {
            return weekDaysNames[day];
        }
    }, {
        key: "dayNameShort",
        value: function dayNameShort(day) {
            return this.dayName(day).slice(0, 3);
        }
    }, {
        key: "isHoliday",
        value: function isHoliday(day) {
            return day % 6 === 0 || day % 7 === 0;
        }
    }, {
        key: "format",
        value: function format(date) {
            //format ) {
            var sdate = CultureProvider.splitDate(date);
            //format = format || this.format;
            var formattedValue = [];
            formattedValue.push(("0" + sdate.month).slice(-2));
            formattedValue.push(("0" + sdate.month).slice(-2));
            formattedValue.push(("0000" + sdate.month).slice(-4));
            return formattedValue.join("/");
        }
    }], [{
        key: "splitDate",
        value: function splitDate(date) {
            return {
                day: date.getDay(),
                month: date.getMonth(),
                year: date.getYear()
            };
        }
    }]);

    return CultureProvider;
})();

exports["default"] = CultureProvider;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9EYXRlUGlja2VyLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvRGF5Q2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRoQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRobHlQYW5lLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvV2Vla0hlYWRlckNlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFyQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJseVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFyc1JhbmdlUGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL2luZnJhc3RydWN0dXJlL0N1bHR1cmVQcm92aWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUUsT0FBTyxDQUFFLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFFLGNBQWMsQ0FBRSxDQUFD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QUFDekQsMEJBQWMsQ0FBQyxJQUFJLENBQUUsQ0FBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQSxDQUFHLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBRSxDQUFFLENBQUM7QUFDNUQsbUJBQU8sY0FBYyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQztTQUNuQzs7O2VBZmUsbUJBQUUsSUFBSSxFQUFFO0FBQ3RCLG1CQUFPO0FBQ0wsbUJBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLHFCQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN0QixvQkFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDckIsQ0FBQztTQUNIOzs7V0FoQ0csZUFBZTs7O3FCQTRDTixlQUFlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBZZWFybHlQYW5lID0gcmVxdWlyZSggXCIuL1llYXJseVBhbmVcIiApO1xuY29uc3QgTW9udGhseVBhbmUgPSByZXF1aXJlKCBcIi4vTW9udGhseVBhbmVcIiApO1xuY29uc3QgWWVhcnNSYW5nZVBhbmUgPSByZXF1aXJlKCBcIi4vWWVhcnNSYW5nZVBhbmVcIiApO1xuY29uc3QgQ3VsdHVyZVByb3ZpZGVyID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL0N1bHR1cmVQcm92aWRlclwiICk7XG5cbmNvbnN0IE1vZGVzID0ge1xuICB5ZWFybHk6IFwieWVhcmx5XCIsXG4gIG1vbnRobHk6IFwibW9udGhseVwiLFxuICB5ZWFyczogXCJ5ZWFyc3JhbmdlXCJcbn07XG5cbmNsYXNzIFBhbmVTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICBpZiggdGhpcy5wcm9wcy5tb2RlID09PSBNb2Rlcy55ZWFybHkgKXtcbiAgICAgIHJldHVybiA8WWVhcmx5UGFuZSB7IC4uLnRoaXMucHJvcHMgfS8+O1xuICAgIH1cblxuICAgIGlmKCB0aGlzLnByb3BzLm1vZGUgPT09IE1vZGVzLm1vbnRobHkgKXtcbiAgICAgIHJldHVybiA8TW9udGhseVBhbmUgeyAuLi50aGlzLnByb3BzIH0vPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPFllYXJzUmFuZ2VQYW5lLz47XG4gIH1cbn1cblxuY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMuc3RhdGUgPSAge1xuICAgICAgZGF0ZTogdGhpcy5wcm9wcy5kYXRlIHx8IG5ldyBEYXRlKCksXG4gICAgICBtb2RlOiBNb2Rlcy5tb250aGx5LFxuICAgICAgaW5Gb2N1czogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMub25Gb2N1cyA9IHRoaXMub25Gb2N1cy5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHZpc2libGU6IHRydWUgfSApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25Gb2N1cz17IHRoaXMub25Gb2N1cyB9Lz5cbiAgICAgICAgICAgICAgPFBhbmVTd2l0Y2ggbW9kZT17IE1vZGVzLm1vbnRobHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXsgdGhpcy5zdGF0ZS5kYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17ICEhdGhpcy5zdGF0ZS5pbkZvY3VzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1bHR1cmVQcm92aWRlcjogbmV3IEN1bHR1cmVQcm92aWRlcigpXG59O1xuXG5tb2R1bGUuZXhwb3J0cz0ge1xuICBEYXRlUGlja2VyOiBEYXRlUGlja2VyLFxuICBDdWx0dXJlUHJvdmlkZXI6IEN1bHR1cmVQcm92aWRlclxufTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5cbmNsYXNzIERheUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRheSB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERheUNlbGw7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuXG5jbGFzcyBNb250aENlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIF9vbkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3QoIHRoaXMucHJvcHMubW9udGggKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMubW9udGggfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5Nb250aENlbGwucHJvcFR5cGVzID0ge1xuICBtb250aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb250aENlbGw7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgRGF5Q2VsbCA9IHJlcXVpcmUoIFwiLi9EYXlDZWxsXCIgKTtcbmNvbnN0IFdlZWtIZWFkZXJDZWxsID0gcmVxdWlyZSAoIFwiLi9XZWVrSGVhZGVyQ2VsbFwiICk7XG5jb25zdCBEQVlTX0JMT0NLX0NPTFVNTlMgPSA3O1xuY29uc3QgREFZU19CTE9DS19ST1dTID0gNjtcblxuXG5jbGFzcyBNb250aGx5UGFuZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB3ZWVrZGF5cyA9IFtdO1xuICAgIGZvciggbGV0IGNvbD0wOyBjb2w8REFZU19CTE9DS19DT0xVTU5TOyBjb2wrKyApe1xuICAgICAgd2Vla2RheXMucHVzaCggPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIDxXZWVrSGVhZGVyQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgY29sIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtkYXk9eyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5kYXlOYW1lU2hvcnQoIGNvbCApIH0vPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPiApO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgIHsgd2Vla2RheXMgfVxuICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8dGQ+XG4gICAgICAgICAgICAgIDxEYXlDZWxsIGRhdGU9eyB0aGlzLnByb3BzLmRhdGUgfS8+O1xuICAgICAgICAgICAgPC90ZD47XG4gIH1cbn1cblxuY2xhc3MgTW9udGhseVBhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICAgIHN1cGVyKCBwcm9wcyApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgY2VsbHMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPERBWVNfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIGNlbGxzLnB1c2goIDxNb250aGx5UGFuZUNlbGwga2V5PXsgY29sIH0gey4uLnRoaXMucHJvcHN9Lz4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgICAgc3VwZXIoIHByb3BzICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHJvd3MgPSBbXTtcbiAgICBmb3IoIGxldCByb3c9MDsgcm93PERBWVNfQkxPQ0tfUk9XUzsgcm93KysgKXtcbiAgICAgIHJvd3MucHVzaCggPE1vbnRobHlQYW5lUm93IGtleT17IHJvdyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tRGF0ZT17IHRoaXMubmV4dERhdGUoIHJvdyApIH0vPiApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDxNb250aGx5UGFuZUhlYWRlciB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlQYW5lO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcblxuY2xhc3MgV2Vla0hlYWRlckNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2PnsgdGhpcy5wcm9wcy53ZWVrZGF5IH08L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2Vla0hlYWRlckNlbGw7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuXG5jbGFzcyBZZWFyQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgX29uQ2xpY2soKXtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KCB0aGlzLnByb3BzLnllYXIgKTtcbiAgfVxuICByZW5kZXIgKCl7XG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17IHRoaXMuX29uQ2xpY2sgfT5cbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy55ZWFyXG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cblllYXJDZWxsLnByb3BUeXBlcyA9IHtcbiAgICB5ZWFyOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgWWVhckNlbGw7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgTW9udGhDZWxsID0gcmVxdWlyZSggXCIuL01vbnRoQ2VsbFwiICk7XG5jb25zdCBNT05USF9CTE9DS19DT0xVTU5TID0gMztcbmNvbnN0IE1PTlRIX0JMT0NLX1JPV1MgPSA0O1xuXG5jbGFzcyBZZWFybHlQYW5lQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8dGQ+XG4gICAgICAgICAgICAgIDxNb250aENlbGwvPjtcbiAgICAgICAgICAgIDwvdGQ+O1xuICB9XG59XG5cbmNsYXNzIFllYXJseVBhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGJ1aWxkQ2VsbCgpIHtcbiAgICByZXR1cm4gPFllYXJseVBhbmVDZWxsLz47XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjZWxscyA9IG5ldyBBcnJheSggTU9OVEhfQkxPQ0tfQ09MVU1OUyApLm1hcCggdGhpcy5idWlsZENlbGwgKTtcbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgICAgICB7IGNlbGxzIH1cbiAgICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIFllYXJseVBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGJ1aWxkUm93KCkge1xuICAgIHJldHVybiA8WWVhcmx5UGFuZVJvdy8+O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93cyA9IG5ldyBBcnJheSggTU9OVEhfQkxPQ0tfUk9XUyApLm1hcCggdGhpcy5idWlsZFJvdyApO1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcmx5UGFuZTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBZZWFyQ2VsbCA9IHJlcXVpcmUoIFwiLi9ZZWFyQ2VsbFwiICk7XG5jb25zdCBZRUFSU19CTE9DS19TSVpFID0gNjtcblxuY2xhc3MgWWVhcnNQYW5lQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8dGQ+XG4gICAgICAgICAgICAgIDxZZWFyQ2VsbCBvblNlbGVjdD17IHRoaXMucHJvcHMub25TZWxlY3QgfSB5ZWFyPXsgdGhpcy55ZWFyIH0vPlxuICAgICAgICAgICAgPC90ZD47XG4gIH1cbn1cblxuY2xhc3MgWWVhcnNQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGJ1aWxkQ2VsbCggYywgaSApe1xuICAgICAgcmV0dXJuIDxZZWFyc1BhbmVDZWxsIHllYXI9eyB0aGlzLnByb3BzLmZyb20gKyBpICsgMSB9Lz47XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCBjZWxscyA9IG5ldyBBcnJheSggWUVBUlNfQkxPQ0tfU0laRSApLm1hcCggdGhpcy5idWlsZENlbGwgKTtcbiAgICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgICB9XG59XG5cbmNsYXNzIFllYXJzUGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGJ1aWxkUm93KCBlLCBpICkge1xuICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgIDxZZWFyc1BhbmVSb3cgZnJvbT17IHRoaXMucHJvcHMuZnJvbSB9Lz5cbiAgICAgICAgICA8L3RyPjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJvd3MgPSBuZXcgQXJyYXkoIFlFQVJTX0JMT0NLX1NJWkUgKS5tYXAoIHRoaXMuYnVpbGRSb3cgKTtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJzUGFuZTtcbiIsImNvbnN0IHdlZWtEYXlzTmFtZXMgPSBbIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiBdO1xuY29uc3QgbW9udGhOYW1lcyA9IFsgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiIF07XG5cbmNsYXNzIEN1bHR1cmVQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKCBsb2NhbGU9XCJlbi11c1wiLCBmb3JtYXQ9XCJkZC9tbS95eXl5XCIgKXtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgfVxuICBnZXRXZWVrRGF5c05hbWVzKCkge1xuICAgICAgcmV0dXJuIHdlZWtEYXlzTmFtZXM7XG4gIH1cbiAgZ2V0TW9udGhOYW1lcygpIHtcbiAgICAgIHJldHVybiBtb250aE5hbWVzO1xuICB9XG4gIG1vbnRoTmFtZSggbW9udGggKSB7XG4gICAgICByZXR1cm4gbW9udGhOYW1lc1sgbW9udGggXTtcbiAgfVxuICBtb250aE5hbWVTaG9ydCggbW9udGggKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb250aE5hbWUoIG1vbnRoICkuc2xpY2UoIDAsIDMgKTtcbiAgfVxuICBkYXlOYW1lKCBkYXkgKSB7XG4gICAgICByZXR1cm4gd2Vla0RheXNOYW1lc1sgZGF5IF07XG4gIH1cbiAgZGF5TmFtZVNob3J0KCBkYXkgKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXlOYW1lKCBkYXkgKS5zbGljZSggMCwgMyApO1xuICB9XG4gIGlzSG9saWRheSggZGF5ICkge1xuICAgICByZXR1cm4gZGF5ICUgNiA9PT0gMCB8fCBkYXkgJSA3ID09PTA7XG4gIH1cbiAgc3RhdGljIHNwbGl0RGF0ZSggZGF0ZSApe1xuICAgIHJldHVybiB7XG4gICAgICBkYXk6IGRhdGUuZ2V0RGF5KCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogZGF0ZS5nZXRZZWFyKClcbiAgICB9O1xuICB9XG4gIGZvcm1hdCggZGF0ZSApeyAvL2Zvcm1hdCApIHtcbiAgICB2YXIgc2RhdGUgPSBDdWx0dXJlUHJvdmlkZXIuc3BsaXREYXRlKCBkYXRlICk7XG4gICAgLy9mb3JtYXQgPSBmb3JtYXQgfHwgdGhpcy5mb3JtYXQ7XG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gW107XG4gICAgZm9ybWF0dGVkVmFsdWUucHVzaCggKCBcIjBcIiArIHNkYXRlLm1vbnRoICkuc2xpY2UoIC0yICkgKTtcbiAgICBmb3JtYXR0ZWRWYWx1ZS5wdXNoKCAoIFwiMFwiICsgc2RhdGUubW9udGggKS5zbGljZSggLTIgKSApO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwMDAwXCIgKyBzZGF0ZS5tb250aCApLnNsaWNlKCAtNCApICk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlLmpvaW4oIFwiL1wiICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VsdHVyZVByb3ZpZGVyO1xuIl19
