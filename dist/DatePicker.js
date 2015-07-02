(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":10}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":11}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":12}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":13}],5:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],6:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":3}],7:[function(require,module,exports){
"use strict";

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

exports["default"] = _Object$assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/assign":1}],8:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;
    if (object === null) object = Function.prototype;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":4}],9:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":2}],10:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$').core.Object.assign;
},{"../../modules/$":19,"../../modules/es6.object.assign":20}],11:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":19}],12:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":19}],13:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.statics-accept-primitives');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":19,"../../modules/es6.object.statics-accept-primitives":21}],14:[function(require,module,exports){
var $        = require('./$')
  , enumKeys = require('./$.enum-keys');
// 19.1.2.1 Object.assign(target, source, ...)
/* eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/* eslint-enable no-unused-vars */
  var T = Object($.assertDefined(target))
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = $.ES5Object(arguments[i++])
      , keys   = enumKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$":19,"./$.enum-keys":16}],15:[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && !isFunction(target[key]))exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp.prototype = C.prototype;
    }(out);
    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
  }
}
module.exports = $def;
},{"./$":19}],16:[function(require,module,exports){
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getDesc    = $.getDesc
    , getSymbols = $.getSymbols;
  if(getSymbols)$.each.call(getSymbols(it), function(key){
    if(getDesc(it, key).enumerable)keys.push(key);
  });
  return keys;
};
},{"./$":19}],17:[function(require,module,exports){
module.exports = function($){
  $.FW   = false;
  $.path = $.core;
  return $;
};
},{}],18:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var $ = require('./$')
  , toString = {}.toString
  , getNames = $.getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

function getWindowNames(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
}

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames($.toObject(it));
};
},{"./$":19}],19:[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value));
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  setDescs:   Object.defineProperties,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  assertDefined: assertDefined,
  // Dummy, fix for not array-like ES3 string in es5 module
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  each: [].forEach
});
/* eslint-disable no-undef */
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":17}],20:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":14,"./$.def":15}],21:[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
, function(KEY, ID){
  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
    , forced = 0
    , method = {};
  method[KEY] = ID == 0 ? function freeze(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 1 ? function seal(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 2 ? function preventExtensions(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 3 ? function isFrozen(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 4 ? function isSealed(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 5 ? function isExtensible(it){
    return isObject(it) ? fn(it) : false;
  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : ID == 7 ? function getPrototypeOf(it){
    return fn(Object($.assertDefined(it)));
  } : ID == 8 ? function keys(it){
    return fn(toObject(it));
  } : require('./$.get-names').get;
  try {
    fn('z');
  } catch(e){
    forced = 1;
  }
  $def($def.S + $def.F * forced, 'Object', method);
});
},{"./$":19,"./$.def":15,"./$.get-names":18}],22:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var YearlyPane = require("./YearlyPane");
var MonthlyPane = require("./MonthlyPane");
var YearsRangePane = require("./YearsRangePane");
var YearlyNavigation = require("./YearlyNavigation");
var MonthlyNavigation = require("./MonthlyNavigation");
var YearsRangeNavigation = require("./YearsRangeNavigation");

var CultureProvider = require("./infrastructure/CultureProvider");
var Modes = require("./infrastructure/Modes");

var ModeViews = {};

ModeViews[Modes.Yearly] = [YearlyNavigation, YearlyPane];
ModeViews[Modes.Monthly] = [MonthlyNavigation, MonthlyPane];
ModeViews[Modes.Years] = [YearsRangeNavigation, YearsRangePane];

var ContentPane = (function (_React$Component) {
  function ContentPane() {
    _classCallCheck(this, ContentPane);

    _get(Object.getPrototypeOf(ContentPane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(ContentPane, _React$Component);

  _createClass(ContentPane, [{
    key: "render",
    value: function render() {
      var _this = this;

      var components = this.props.cases[this.props.mode].map(function (c, i) {
        return React.createElement(c, _Object$assign({}, _this.props, { key: "c" + i + _this.props.mode }));
      });
      return React.createElement(
        "div",
        { className: "datepicker-pane" },
        components
      );
    }
  }]);

  return ContentPane;
})(React.Component);

var DatePicker = (function (_React$Component2) {
  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    _get(Object.getPrototypeOf(DatePicker.prototype), "constructor", this).call(this, props);
    this.state = {
      selectedDate: this.props.date || new Date(),
      timeframe: new Date(),
      mode: this.props.mode || Modes.Monthly,
      inFocus: false
    };
    this.onFocus = this.onFocus.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.setTimeframe = this.setTimeframe.bind(this);
    this.setDate = this.setDate.bind(this);
    this.drillDown = this.drillDown.bind(this);
  }

  _inherits(DatePicker, _React$Component2);

  _createClass(DatePicker, [{
    key: "onFocus",
    value: function onFocus() {
      this.setState({ visible: true });
    }
  }, {
    key: "setTimeframe",
    value: function setTimeframe(newDate) {
      this.setState({ timeframe: newDate });
    }
  }, {
    key: "switchMode",
    value: function switchMode(mode) {
      this.setState({ mode: mode });
    }
  }, {
    key: "setDate",
    value: function setDate(date) {
      this.setState({ timeframe: new Date(+date), mode: Modes.Monthly, selectedDate: date });
      this.props.onDateChange(date);
    }
  }, {
    key: "drillDown",
    value: function drillDown(mode, timeframe) {
      this.setState({ mode: mode, timeframe: timeframe });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", onFocus: this.onFocus }),
        React.createElement(ContentPane, _extends({}, this.props, {
          mode: this.state.mode,
          timeframe: this.state.timeframe,
          selectedDate: this.state.selectedDate,
          cases: ModeViews,
          setTimeframe: this.setTimeframe,
          setDate: this.setDate,
          drillDown: this.drillDown,
          switchMode: this.switchMode }))
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

},{"./MonthlyNavigation":25,"./MonthlyPane":26,"./YearlyNavigation":30,"./YearlyPane":31,"./YearsRangeNavigation":32,"./YearsRangePane":33,"./infrastructure/CultureProvider":34,"./infrastructure/Modes":36,"babel-runtime/core-js/object/assign":1,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],23:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var DayCell = (function (_React$Component) {
  function DayCell(props) {
    _classCallCheck(this, DayCell);

    _get(Object.getPrototypeOf(DayCell.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(DayCell, _React$Component);

  _createClass(DayCell, [{
    key: "onClick",
    value: function onClick() {
      this.props.setDate(this.props.date);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "datepicker-day-cell", onClick: this.onClick },
        this.props.date.getDate()
      );
    }
  }]);

  return DayCell;
})(React.Component);

DayCell.propTypes = {
  date: React.PropTypes.object.isRequired,
  setDate: React.PropTypes.func.isRequired
};

exports["default"] = DayCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],24:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var Modes = require("./infrastructure/Modes");

var MonthCell = (function (_React$Component) {
  function MonthCell(props) {
    _classCallCheck(this, MonthCell);

    _get(Object.getPrototypeOf(MonthCell.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(MonthCell, _React$Component);

  _createClass(MonthCell, [{
    key: "onClick",
    value: function onClick() {
      var timeframe = new Date(+this.props.timeframe);
      timeframe.setMonth(this.props.month);
      this.props.drillDown(Modes.Monthly, timeframe);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { onClick: this.onClick },
        this.props.cultureProvider.monthNameShort(this.props.month)
      );
    }
  }]);

  return MonthCell;
})(React.Component);

MonthCell.propTypes = {
  month: React.PropTypes.number.isRequired,
  onSelect: React.PropTypes.func
};

exports["default"] = MonthCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":36,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],25:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var NavigationPane = require("./NavigationPane");
var Direction = require("./infrastructure/Direction");
var Modes = require("./infrastructure/Modes");

var MonthlyNavigation = (function (_React$Component) {
  function MonthlyNavigation(props) {
    _classCallCheck(this, MonthlyNavigation);

    _get(Object.getPrototypeOf(MonthlyNavigation.prototype), "constructor", this).call(this, props);
    this.onNavigate = this.onNavigate.bind(this);
  }

  _inherits(MonthlyNavigation, _React$Component);

  _createClass(MonthlyNavigation, [{
    key: "onNavigate",
    value: function onNavigate(direction) {
      var dmonth = direction === Direction.Left ? -1 : 1;
      var newtimeframe = new Date(+this.props.timeframe);
      newtimeframe.setMonth(newtimeframe.getMonth() + dmonth);
      this.props.setTimeframe(newtimeframe);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.props.cultureProvider.monthName(this.props.timeframe.getMonth()) + " " + this.props.timeframe.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(NavigationPane, _extends({}, this.props, {
        nextMode: Modes.Yearly,
        title: this.getTitle(),
        onNavigate: this.onNavigate }));
    }
  }]);

  return MonthlyNavigation;
})(React.Component);

exports["default"] = MonthlyNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":27,"./infrastructure/Direction":35,"./infrastructure/Modes":36,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],26:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var DayCell = require("./DayCell");
var WeekHeaderCell = require("./WeekHeaderCell");
var DAYS_BLOCK_COLUMNS = 7;
var DAYS_BLOCK_ROWS = 6;
var DAY_TIMESPAN = 24 * 3600 * 1000;

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
          { key: col + "mh" },
          React.createElement(WeekHeaderCell, {
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
        React.createElement(DayCell, _extends({}, this.props, { date: this.props.date }))
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
        cells.push(React.createElement(MonthlyPaneCell, _extends({}, this.props, {
          key: col + this.props.row * DAYS_BLOCK_COLUMNS,
          date: new Date(+this.props.startDate + DAY_TIMESPAN * col) })));
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
  function MonthlyPane() {
    _classCallCheck(this, MonthlyPane);

    _get(Object.getPrototypeOf(MonthlyPane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthlyPane, _React$Component4);

  _createClass(MonthlyPane, [{
    key: "getStartDate",
    value: function getStartDate() {
      var monthStart = new Date(this.props.timeframe.getFullYear(), this.props.timeframe.getMonth());
      var startDate = monthStart;
      var startdiff = monthStart.getDay() - this.props.cultureProvider.weekDayStart;

      if (startdiff > 0) {
        startDate = new Date(monthStart - DAY_TIMESPAN * startdiff);
      }
      return startDate;
    }
  }, {
    key: "render",
    value: function render() {
      var rows = [];
      var startDate = this.getStartDate();
      for (var row = 0; row < DAYS_BLOCK_ROWS; row++) {
        rows.push(React.createElement(MonthlyPaneRow, _extends({}, this.props, {
          key: row,
          row: row,
          startDate: new Date(+startDate + DAY_TIMESPAN * row * DAYS_BLOCK_COLUMNS) })));
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

},{"./DayCell":23,"./WeekHeaderCell":28,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],27:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var Direction = require("./infrastructure/Direction.js");

var NavButton = (function (_React$Component) {
  function NavButton(props) {
    _classCallCheck(this, NavButton);

    _get(Object.getPrototypeOf(NavButton.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(NavButton, _React$Component);

  _createClass(NavButton, [{
    key: "onClick",
    value: function onClick() {
      this.props.onNavigate(this.props.direction);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        { className: "datepicker-nav-button", onClick: this.onClick },
        this.props.direction === Direction.Left ? "Left" : "Right"
      );
    }
  }]);

  return NavButton;
})(React.Component);

var NavigationPane = (function (_React$Component2) {
  function NavigationPane(props) {
    _classCallCheck(this, NavigationPane);

    _get(Object.getPrototypeOf(NavigationPane.prototype), "constructor", this).call(this, props);
    this.onSwitchMode = this.onSwitchMode.bind(this);
  }

  _inherits(NavigationPane, _React$Component2);

  _createClass(NavigationPane, [{
    key: "onSwitchMode",
    value: function onSwitchMode() {
      this.props.switchMode(this.props.nextMode);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "datepicker-nav-pane" },
        React.createElement(NavButton, _extends({}, this.props, { direction: Direction.Left, on: true })),
        React.createElement(
          "span",
          { className: "datepicker-nav-title", onClick: this.onSwitchMode },
          this.props.title
        ),
        React.createElement(NavButton, _extends({}, this.props, { direction: Direction.Right }))
      );
    }
  }]);

  return NavigationPane;
})(React.Component);

exports["default"] = NavigationPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Direction.js":35,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],28:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
        { className: "datepicker-weekheader-cell" },
        this.props.weekday.toUpperCase()
      );
    }
  }]);

  return WeekHeaderCell;
})(React.Component);

exports["default"] = WeekHeaderCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],29:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var Modes = require("./infrastructure/Modes");

var YearCell = (function (_React$Component) {
  function YearCell(props) {
    _classCallCheck(this, YearCell);

    _get(Object.getPrototypeOf(YearCell.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(YearCell, _React$Component);

  _createClass(YearCell, [{
    key: "onClick",
    value: function onClick() {
      var timeframe = new Date(+this.props.timeframe);
      timeframe.setFullYear(this.props.year);
      this.props.drillDown(Modes.Yearly, timeframe);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { onClick: this.onClick },
        this.props.year
      );
    }
  }]);

  return YearCell;
})(React.Component);

YearCell.propTypes = {
  year: React.PropTypes.number.isRequired
};

exports["default"] = YearCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":36,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],30:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var NavigationPane = require("./NavigationPane");
var Direction = require("./infrastructure/Direction");
var Modes = require("./infrastructure/Modes");

var YearlyNavigation = (function (_React$Component) {
  function YearlyNavigation(props) {
    _classCallCheck(this, YearlyNavigation);

    _get(Object.getPrototypeOf(YearlyNavigation.prototype), "constructor", this).call(this, props);
    this.onNavigate = this.onNavigate.bind(this);
  }

  _inherits(YearlyNavigation, _React$Component);

  _createClass(YearlyNavigation, [{
    key: "onNavigate",
    value: function onNavigate(direction) {
      var dyear = direction === Direction.Left ? -1 : 1;
      var newtimeframe = new Date(+this.props.timeframe);
      newtimeframe.setFullYear(newtimeframe.getFullYear() + dyear);
      this.props.setTimeframe(newtimeframe);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.props.timeframe.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(NavigationPane, _extends({}, this.props, {
        nextMode: Modes.Years,
        title: this.getTitle(),
        onNavigate: this.onNavigate }));
    }
  }]);

  return YearlyNavigation;
})(React.Component);

exports["default"] = YearlyNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":27,"./infrastructure/Direction":35,"./infrastructure/Modes":36,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],31:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
        React.createElement(MonthCell, this.props)
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
      var cells = [];
      for (var col = 0; col < MONTH_BLOCK_COLUMNS; col++) {
        cells.push(React.createElement(YearlyPaneCell, _extends({
          key: col + this.props.startMonth
        }, this.props, {
          month: this.props.startMonth + col })));
      }
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
    key: "render",
    value: function render() {
      var rows = [];
      for (var row = 0; row < MONTH_BLOCK_ROWS; row++) {
        rows.push(React.createElement(
          "tr",
          { key: row },
          React.createElement(YearlyPaneRow, _extends({}, this.props, {
            startMonth: row * MONTH_BLOCK_COLUMNS }))
        ));
      }
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

},{"./MonthCell":24,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],32:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var NavigationPane = require("./NavigationPane");
var Direction = require("./infrastructure/Direction");
var Modes = require("./infrastructure/Modes");

var YearsRangeNavigation = (function (_React$Component) {
  function YearsRangeNavigation(props) {
    _classCallCheck(this, YearsRangeNavigation);

    _get(Object.getPrototypeOf(YearsRangeNavigation.prototype), "constructor", this).call(this, props);
    this.onNavigate = this.onNavigate.bind(this);
  }

  _inherits(YearsRangeNavigation, _React$Component);

  _createClass(YearsRangeNavigation, [{
    key: "onNavigate",
    value: function onNavigate(direction) {
      var drange = direction === Direction.Left ? -1 : 1;
      var newtimeframe = new Date(+this.props.timeframe);
      newtimeframe.setFullYear(newtimeframe.getFullYear() + drange * 16);
      this.props.setTimeframe(newtimeframe);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var start = (this.props.timeframe.getFullYear() / 16 | 0) * 16;
      return start + " - " + (start + 16);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(NavigationPane, _extends({}, this.props, {
        title: this.getTitle(),
        nextMode: Modes.Monthly,
        onNavigate: this.onNavigate }));
    }
  }]);

  return YearsRangeNavigation;
})(React.Component);

exports["default"] = YearsRangeNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":27,"./infrastructure/Direction":35,"./infrastructure/Modes":36,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],33:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);
var YearCell = require("./YearCell");
var YEARS_BLOCK_SIDE = 4;
var YEARS_BLOCK_SIZE = YEARS_BLOCK_SIDE * YEARS_BLOCK_SIDE;

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
        React.createElement(YearCell, this.props)
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
    key: "render",
    value: function render() {
      var cells = [];
      for (var col = 0; col < YEARS_BLOCK_SIDE; col++) {
        cells.push(React.createElement(YearsPaneCell, _extends({}, this.props, {
          key: this.props.fromYear + col,
          year: this.props.fromYear + col
        })));
      }
      return React.createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return YearsPaneRow;
})(React.Component);

var YearsRangePane = (function (_React$Component3) {
  function YearsRangePane() {
    _classCallCheck(this, YearsRangePane);

    _get(Object.getPrototypeOf(YearsRangePane.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearsRangePane, _React$Component3);

  _createClass(YearsRangePane, [{
    key: "render",
    value: function render() {
      var rows = [];

      var fromYear = (this.props.timeframe.getFullYear() / YEARS_BLOCK_SIZE | 0) * YEARS_BLOCK_SIZE;
      for (var row = 0; row < YEARS_BLOCK_SIDE; row++) {
        rows.push(React.createElement(
          "tr",
          { key: row },
          React.createElement(YearsPaneRow, _extends({ fromYear: fromYear + YEARS_BLOCK_SIDE * row }, this.props))
        ));
      }
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

  return YearsRangePane;
})(React.Component);

exports["default"] = YearsRangePane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./YearCell":29,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],34:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
var weekDaysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var CultureProvider = (function () {
    function CultureProvider() {
        var locale = arguments[0] === undefined ? "en-us" : arguments[0];
        var format = arguments[1] === undefined ? "dd/mm/yyyy" : arguments[1];

        _classCallCheck(this, CultureProvider);

        this.locale = locale;
        this.format = format;
        this.weekDayStart = 0;
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
            return this.dayName(day).slice(0, 2);
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

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Direction = {
  Left: "left",
  Right: "right"
};

exports["default"] = Direction;
module.exports = exports["default"];

},{}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Modes = {
  Yearly: "yearly",
  Monthly: "monthly",
  Years: "yearsrange"
};

exports["default"] = Modes;
module.exports = exports["default"];

},{}]},{},[22])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZ3LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvRGF0ZVBpY2tlci5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL0RheUNlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9Nb250aENlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9Nb250aGx5TmF2aWdhdGlvbi5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRobHlQYW5lLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvTmF2aWdhdGlvblBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9XZWVrSGVhZGVyQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJDZWxsLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcmx5TmF2aWdhdGlvbi5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJseVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFyc1JhbmdlTmF2aWdhdGlvbi5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJzUmFuZ2VQYW5lLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvaW5mcmFzdHJ1Y3R1cmUvQ3VsdHVyZVByb3ZpZGVyLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvaW5mcmFzdHJ1Y3R1cmUvRGlyZWN0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvaW5mcmFzdHJ1Y3R1cmUvTW9kZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNB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QUNoRDlCLElBQU0sU0FBUyxHQUFHO0FBQ2hCLE1BQUksRUFBRSxNQUFNO0FBQ1osT0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDOztxQkFFYSxTQUFTOzs7Ozs7Ozs7QUNMeEIsSUFBTSxLQUFLLEdBQUc7QUFDWixRQUFNLEVBQUUsUUFBUTtBQUNoQixTQUFPLEVBQUUsU0FBUztBQUNsQixPQUFLLEVBQUUsWUFBWTtDQUNwQixDQUFDOztxQkFFYSxLQUFLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkYXNzaWduID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfT2JqZWN0JGFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94Mykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgb2JqZWN0ID0gX3gsXG4gICAgICAgIHByb3BlcnR5ID0gX3gyLFxuICAgICAgICByZWNlaXZlciA9IF94MztcbiAgICBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkO1xuICAgIF9hZ2FpbiA9IGZhbHNlO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAgIHZhciBkZXNjID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF94ID0gcGFyZW50O1xuICAgICAgICBfeDIgPSBwcm9wZXJ0eTtcbiAgICAgICAgX3gzID0gcmVjZWl2ZXI7XG4gICAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpLmNvcmUuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkLmdldERlc2MoaXQsIGtleSk7XG59OyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZW51bUtleXMgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJyk7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHZhciBUID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCh0YXJnZXQpKVxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGkgPSAxO1xuICB3aGlsZShsID4gaSl7XG4gICAgdmFyIFMgICAgICA9ICQuRVM1T2JqZWN0KGFyZ3VtZW50c1tpKytdKVxuICAgICAgLCBrZXlzICAgPSBlbnVtS2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKVRba2V5ID0ga2V5c1tqKytdXSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgPSAkLmdcbiAgLCBjb3JlICAgICAgID0gJC5jb3JlXG4gICwgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbjtcbmZ1bmN0aW9uIGN0eChmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5mdW5jdGlvbiAkZGVmKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pLnByb3RvdHlwZVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHAucHJvdG90eXBlID0gQy5wcm90b3R5cGU7XG4gICAgfShvdXQpO1xuICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiBpc0Z1bmN0aW9uKG91dCkgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnRcbiAgICBleHBvcnRzW2tleV0gPSBleHA7XG4gICAgaWYoaXNQcm90bykoZXhwb3J0cy5wcm90b3R5cGUgfHwgKGV4cG9ydHMucHJvdG90eXBlID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7IiwidmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGdldERlc2MgICAgPSAkLmdldERlc2NcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIGlmKGdldFN5bWJvbHMpJC5lYWNoLmNhbGwoZ2V0U3ltYm9scyhpdCksIGZ1bmN0aW9uKGtleSl7XG4gICAgaWYoZ2V0RGVzYyhpdCwga2V5KS5lbnVtZXJhYmxlKWtleXMucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJCl7XG4gICQuRlcgICA9IGZhbHNlO1xuICAkLnBhdGggPSAkLmNvcmU7XG4gIHJldHVybiAkO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XHJcbnZhciAkID0gcmVxdWlyZSgnLi8kJylcclxuICAsIHRvU3RyaW5nID0ge30udG9TdHJpbmdcclxuICAsIGdldE5hbWVzID0gJC5nZXROYW1lcztcclxuXHJcbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcclxuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd05hbWVzKGl0KXtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGdldE5hbWVzKGl0KTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcclxuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xyXG4gIHJldHVybiBnZXROYW1lcygkLnRvT2JqZWN0KGl0KSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcbiAgLCBjb3JlICAgPSB7fVxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuICAsIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXG4gICwgbWF4ICAgPSBNYXRoLm1heFxuICAsIG1pbiAgID0gTWF0aC5taW47XG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gMjsgfX0pLmEgPT0gMjtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xudmFyIGhpZGUgPSBjcmVhdGVEZWZpbmVyKDEpO1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG5mdW5jdGlvbiB0b0ludGVnZXIoaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn1cbmZ1bmN0aW9uIGRlc2MoYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufVxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7XG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBkZXNjKGJpdG1hcCwgdmFsdWUpKTtcbiAgfSA6IHNpbXBsZVNldDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn1cblxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcbiAgZzogZ2xvYmFsLFxuICBjb3JlOiBjb3JlLFxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XG4gIGlzT2JqZWN0OiAgIGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICB0aGF0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyA3LjEuNCBUb0ludGVnZXJcbiAgdG9JbnRlZ2VyOiB0b0ludGVnZXIsXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gIH0sXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICAgIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihpdCwga2V5KXtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfSxcbiAgY3JlYXRlOiAgICAgT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBERVNDOiAgICAgICBERVNDLFxuICBkZXNjOiAgICAgICBkZXNjLFxuICBnZXREZXNjOiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgIE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgYXNzZXJ0RGVmaW5lZDogYXNzZXJ0RGVmaW5lZCxcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXG4gIEVTNU9iamVjdDogT2JqZWN0LFxuICB0b09iamVjdDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XG4gIH0sXG4gIGhpZGU6IGhpZGUsXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcbiAgc2V0OiBnbG9iYWwuU3ltYm9sID8gc2ltcGxlU2V0IDogaGlkZSxcbiAgZWFjaDogW10uZm9yRWFjaFxufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuaWYodHlwZW9mIF9fZSAhPSAndW5kZWZpbmVkJylfX2UgPSBjb3JlO1xuaWYodHlwZW9mIF9fZyAhPSAndW5kZWZpbmVkJylfX2cgPSBnbG9iYWw7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuJGRlZigkZGVmLlMsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQuYXNzaWduJyl9KTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRkZWYgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XG4gICwgdG9PYmplY3QgPSAkLnRvT2JqZWN0O1xuJC5lYWNoLmNhbGwoKCdmcmVlemUsc2VhbCxwcmV2ZW50RXh0ZW5zaW9ucyxpc0Zyb3plbixpc1NlYWxlZCxpc0V4dGVuc2libGUsJyArXG4gICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsZ2V0UHJvdG90eXBlT2Ysa2V5cyxnZXRPd25Qcm9wZXJ0eU5hbWVzJykuc3BsaXQoJywnKVxuLCBmdW5jdGlvbihLRVksIElEKXtcbiAgdmFyIGZuICAgICA9ICgkLmNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBmb3JjZWQgPSAwXG4gICAgLCBtZXRob2QgPSB7fTtcbiAgbWV0aG9kW0tFWV0gPSBJRCA9PSAwID8gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAxID8gZnVuY3Rpb24gc2VhbChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMiA/IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAzID8gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNCA/IGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDUgPyBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBmYWxzZTtcbiAgfSA6IElEID09IDYgPyBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSwga2V5KTtcbiAgfSA6IElEID09IDcgPyBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuIGZuKE9iamVjdCgkLmFzc2VydERlZmluZWQoaXQpKSk7XG4gIH0gOiBJRCA9PSA4ID8gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSk7XG4gIH0gOiByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJykuZ2V0O1xuICB0cnkge1xuICAgIGZuKCd6Jyk7XG4gIH0gY2F0Y2goZSl7XG4gICAgZm9yY2VkID0gMTtcbiAgfVxuICAkZGVmKCRkZWYuUyArICRkZWYuRiAqIGZvcmNlZCwgJ09iamVjdCcsIG1ldGhvZCk7XG59KTsiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgWWVhcmx5UGFuZSA9IHJlcXVpcmUoIFwiLi9ZZWFybHlQYW5lXCIgKTtcbmNvbnN0IE1vbnRobHlQYW5lID0gcmVxdWlyZSggXCIuL01vbnRobHlQYW5lXCIgKTtcbmNvbnN0IFllYXJzUmFuZ2VQYW5lID0gcmVxdWlyZSggXCIuL1llYXJzUmFuZ2VQYW5lXCIgKTtcbmNvbnN0IFllYXJseU5hdmlnYXRpb24gPSByZXF1aXJlKCBcIi4vWWVhcmx5TmF2aWdhdGlvblwiICk7XG5jb25zdCBNb250aGx5TmF2aWdhdGlvbiA9IHJlcXVpcmUoIFwiLi9Nb250aGx5TmF2aWdhdGlvblwiICk7XG5jb25zdCBZZWFyc1JhbmdlTmF2aWdhdGlvbiA9IHJlcXVpcmUoIFwiLi9ZZWFyc1JhbmdlTmF2aWdhdGlvblwiICk7XG5cbmNvbnN0IEN1bHR1cmVQcm92aWRlciA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9DdWx0dXJlUHJvdmlkZXJcIiApO1xuY29uc3QgTW9kZXMgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIiApO1xuXG5jb25zdCBNb2RlVmlld3MgPSB7fTtcblxuTW9kZVZpZXdzWyBNb2Rlcy5ZZWFybHkgXSA9IFsgWWVhcmx5TmF2aWdhdGlvbiwgWWVhcmx5UGFuZSBdO1xuTW9kZVZpZXdzWyBNb2Rlcy5Nb250aGx5IF0gPSBbIE1vbnRobHlOYXZpZ2F0aW9uLCBNb250aGx5UGFuZSBdO1xuTW9kZVZpZXdzWyBNb2Rlcy5ZZWFycyBdID0gWyBZZWFyc1JhbmdlTmF2aWdhdGlvbiwgWWVhcnNSYW5nZVBhbmUgXTtcblxuXG5cbmNsYXNzIENvbnRlbnRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbXBvbmVudHMgPSB0aGlzLnByb3BzLmNhc2VzWyB0aGlzLnByb3BzLm1vZGUgXS5tYXAoXG4gICAgICAgICAgKGMsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoIGMsIE9iamVjdC5hc3NpZ24oIHt9LCB0aGlzLnByb3BzLCB7IGtleTogXCJjXCIrIGkgKyB0aGlzLnByb3BzLm1vZGUgfSApIClcbiAgICApO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItcGFuZVwiPlxuICAgICAgICAgICAgICB7IGNvbXBvbmVudHMgfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5jbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5zdGF0ZSA9ICB7XG4gICAgICBzZWxlY3RlZERhdGU6IHRoaXMucHJvcHMuZGF0ZSB8fCBuZXcgRGF0ZSgpLFxuICAgICAgdGltZWZyYW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgbW9kZTogdGhpcy5wcm9wcy5tb2RlIHx8IE1vZGVzLk1vbnRobHksXG4gICAgICBpbkZvY3VzOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLnN3aXRjaE1vZGUgPSB0aGlzLnN3aXRjaE1vZGUuYmluZCggdGhpcyApO1xuICAgIHRoaXMuc2V0VGltZWZyYW1lID0gdGhpcy5zZXRUaW1lZnJhbWUuYmluZCggdGhpcyApO1xuICAgIHRoaXMuc2V0RGF0ZSA9IHRoaXMuc2V0RGF0ZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5kcmlsbERvd24gPSB0aGlzLmRyaWxsRG93bi5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHZpc2libGU6IHRydWUgfSApO1xuICB9XG4gIHNldFRpbWVmcmFtZSggbmV3RGF0ZSApIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHRpbWVmcmFtZTogbmV3RGF0ZSB9ICk7XG4gIH1cbiAgc3dpdGNoTW9kZSggbW9kZSApIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IG1vZGU6IG1vZGUgfSApO1xuICB9XG4gIHNldERhdGUoIGRhdGUgKXtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHRpbWVmcmFtZTogbmV3IERhdGUoICtkYXRlICksIG1vZGU6IE1vZGVzLk1vbnRobHksIHNlbGVjdGVkRGF0ZTogZGF0ZSB9ICk7XG4gICAgdGhpcy5wcm9wcy5vbkRhdGVDaGFuZ2UoIGRhdGUgKTtcbiAgfVxuICBkcmlsbERvd24oIG1vZGUsIHRpbWVmcmFtZSApe1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgbW9kZTogbW9kZSwgdGltZWZyYW1lOiB0aW1lZnJhbWUgfSApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25Gb2N1cz17IHRoaXMub25Gb2N1cyB9Lz5cbiAgICAgICAgICAgICAgPENvbnRlbnRQYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXsgdGhpcy5zdGF0ZS5tb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWZyYW1lID0geyB0aGlzLnN0YXRlLnRpbWVmcmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZT17IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXM9eyBNb2RlVmlld3MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lZnJhbWU9eyB0aGlzLnNldFRpbWVmcmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGU9eyB0aGlzLnNldERhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcmlsbERvd249eyB0aGlzLmRyaWxsRG93biB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaE1vZGUgPXsgdGhpcy5zd2l0Y2hNb2RlIH0vPlxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5EYXRlUGlja2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VsdHVyZVByb3ZpZGVyOiBuZXcgQ3VsdHVyZVByb3ZpZGVyKCksXG59O1xuXG5tb2R1bGUuZXhwb3J0cz0ge1xuICBEYXRlUGlja2VyOiBEYXRlUGlja2VyLFxuICBDdWx0dXJlUHJvdmlkZXI6IEN1bHR1cmVQcm92aWRlclxufTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5cbmNsYXNzIERheUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKXtcbiAgICB0aGlzLnByb3BzLnNldERhdGUoIHRoaXMucHJvcHMuZGF0ZSApO1xuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItZGF5LWNlbGxcIiBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0ZS5nZXREYXRlKCkgfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5EYXlDZWxsLnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXREYXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXlDZWxsO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcblxuY2xhc3MgTW9udGhDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdmFyIHRpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICB0aW1lZnJhbWUuc2V0TW9udGgoIHRoaXMucHJvcHMubW9udGggKTtcbiAgICB0aGlzLnByb3BzLmRyaWxsRG93biggTW9kZXMuTW9udGhseSwgdGltZWZyYW1lICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfT5cbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubW9udGhOYW1lU2hvcnQoIHRoaXMucHJvcHMubW9udGggKSB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbk1vbnRoQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIG1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9udGhDZWxsO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IE5hdmlnYXRpb25QYW5lID0gcmVxdWlyZSAoIFwiLi9OYXZpZ2F0aW9uUGFuZVwiICk7XG5jb25zdCBEaXJlY3Rpb24gPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvRGlyZWN0aW9uXCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcblxuY2xhc3MgTW9udGhseU5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25OYXZpZ2F0ZSA9IHRoaXMub25OYXZpZ2F0ZS5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25OYXZpZ2F0ZSggZGlyZWN0aW9uICkge1xuICAgIGxldCBkbW9udGggPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIGxldCBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldE1vbnRoKCBuZXd0aW1lZnJhbWUuZ2V0TW9udGgoKSArIGRtb250aCApO1xuICAgIHRoaXMucHJvcHMuc2V0VGltZWZyYW1lKCBuZXd0aW1lZnJhbWUgKTtcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubW9udGhOYW1lKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRNb250aCgpICkgKyBcIiBcIiArICB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb2RlID0geyBNb2Rlcy5ZZWFybHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXsgdGhpcy5vbk5hdmlnYXRlIH0vPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb250aGx5TmF2aWdhdGlvbjtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBEYXlDZWxsID0gcmVxdWlyZSggXCIuL0RheUNlbGxcIiApO1xuY29uc3QgV2Vla0hlYWRlckNlbGwgPSByZXF1aXJlICggXCIuL1dlZWtIZWFkZXJDZWxsXCIgKTtcbmNvbnN0IERBWVNfQkxPQ0tfQ09MVU1OUyA9IDc7XG5jb25zdCBEQVlTX0JMT0NLX1JPV1MgPSA2O1xuY29uc3QgREFZX1RJTUVTUEFOID0gMjQgKiAzNjAwICogMTAwMDtcblxuY2xhc3MgTW9udGhseVBhbmVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgd2Vla2RheXMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPERBWVNfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIHdlZWtkYXlzLnB1c2goIDx0aCBrZXk9eyBjb2wrXCJtaFwiIH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFdlZWtIZWFkZXJDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5PXsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuZGF5TmFtZVNob3J0KCBjb2wgKSB9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICB7IHdlZWtkYXlzIH1cbiAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8RGF5Q2VsbCB7Li4udGhpcy5wcm9wc30gZGF0ZT17IHRoaXMucHJvcHMuZGF0ZSB9Lz5cbiAgICAgICAgICAgIDwvdGQ+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgICBzdXBlciggcHJvcHMgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIGNlbGxzID0gW107XG4gICAgZm9yKCBsZXQgY29sPTA7IGNvbDxEQVlTX0JMT0NLX0NPTFVNTlM7IGNvbCsrICl7XG4gICAgICBjZWxscy5wdXNoKCA8TW9udGhseVBhbmVDZWxsXG4gICAgICAgIHsuLi50aGlzLnByb3BzIH1cbiAgICAgICAgIGtleT17IGNvbCArIHRoaXMucHJvcHMucm93ICogREFZU19CTE9DS19DT0xVTU5TIH1cbiAgICAgICAgIGRhdGU9eyBuZXcgRGF0ZSggK3RoaXMucHJvcHMuc3RhcnREYXRlICsgREFZX1RJTUVTUEFOICogY29sICl9Lz4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBNb250aGx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgZ2V0U3RhcnREYXRlKCl7XG4gICAgbGV0IG1vbnRoU3RhcnQgPSBuZXcgRGF0ZSggdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRNb250aCgpICk7XG4gICAgbGV0IHN0YXJ0RGF0ZT1tb250aFN0YXJ0O1xuICAgIGxldCBzdGFydGRpZmYgPSBtb250aFN0YXJ0LmdldERheSgpIC0gdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIud2Vla0RheVN0YXJ0O1xuXG4gICAgaWYoIHN0YXJ0ZGlmZj4wICl7XG4gICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSggbW9udGhTdGFydCAtIERBWV9USU1FU1BBTiAqIHN0YXJ0ZGlmZiApO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnREYXRlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBzdGFydERhdGUgPSB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgIGZvciggbGV0IHJvdz0wOyByb3c8REFZU19CTE9DS19ST1dTOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8TW9udGhseVBhbmVSb3dcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGtleT17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHJvdz17IHJvdyB9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17IG5ldyBEYXRlKCArc3RhcnREYXRlICsgREFZX1RJTUVTUEFOICogcm93ICogREFZU19CTE9DS19DT0xVTU5TICkgfSAvPiApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDxNb250aGx5UGFuZUhlYWRlciB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlQYW5lO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb24uanNcIiApO1xuXG5cbmNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25OYXZpZ2F0ZSggdGhpcy5wcm9wcy5kaXJlY3Rpb24gKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtYnV0dG9uXCIgb25DbGljaz17IHRoaXMub25DbGljayB9PnsgdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gXCJMZWZ0XCIgOiBcIlJpZ2h0XCIgfVxuICAgICAgICAgICAgICA8L3NwYW4+O1xuICB9XG59XG5cbmNsYXNzIE5hdmlnYXRpb25QYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uU3dpdGNoTW9kZSA9IHRoaXMub25Td2l0Y2hNb2RlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvblN3aXRjaE1vZGUoKSB7XG4gICAgdGhpcy5wcm9wcy5zd2l0Y2hNb2RlKCB0aGlzLnByb3BzLm5leHRNb2RlICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItbmF2LXBhbmVcIj5cbiAgICAgICAgICAgICAgPE5hdkJ1dHRvbiB7Li4udGhpcy5wcm9wc30gZGlyZWN0aW9uPXsgRGlyZWN0aW9uLkxlZnQgfSBvbi8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVwaWNrZXItbmF2LXRpdGxlXCIgb25DbGljaz17IHRoaXMub25Td2l0Y2hNb2RlIH0+eyB0aGlzLnByb3BzLnRpdGxlIH08L3NwYW4+XG4gICAgICAgICAgICAgIDxOYXZCdXR0b24gey4uLnRoaXMucHJvcHN9IGRpcmVjdGlvbj17IERpcmVjdGlvbi5SaWdodCB9Lz5cbiAgICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uUGFuZTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5cbmNsYXNzIFdlZWtIZWFkZXJDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLXdlZWtoZWFkZXItY2VsbFwiPnsgdGhpcy5wcm9wcy53ZWVrZGF5LnRvVXBwZXJDYXNlKCkgfTwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWVrSGVhZGVyQ2VsbDtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5cbmNsYXNzIFllYXJDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdmFyIHRpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICB0aW1lZnJhbWUuc2V0RnVsbFllYXIoIHRoaXMucHJvcHMueWVhciApO1xuICAgIHRoaXMucHJvcHMuZHJpbGxEb3duKCBNb2Rlcy5ZZWFybHksIHRpbWVmcmFtZSApO1xuICB9XG4gIHJlbmRlciAoKXtcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0+XG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy55ZWFyIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuWWVhckNlbGwucHJvcFR5cGVzID0ge1xuICAgIHllYXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgWWVhckNlbGw7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgTmF2aWdhdGlvblBhbmUgPSByZXF1aXJlICggXCIuL05hdmlnYXRpb25QYW5lXCIgKTtcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb25cIiApO1xuY29uc3QgTW9kZXMgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIiApO1xuY2xhc3MgWWVhcmx5TmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbk5hdmlnYXRlID0gdGhpcy5vbk5hdmlnYXRlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbk5hdmlnYXRlKCBkaXJlY3Rpb24gKSB7XG4gICAgbGV0IGR5ZWFyID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCA/IC0xIDogMTtcbiAgICBsZXQgbmV3dGltZWZyYW1lID0gbmV3IERhdGUoICt0aGlzLnByb3BzLnRpbWVmcmFtZSApO1xuICAgIG5ld3RpbWVmcmFtZS5zZXRGdWxsWWVhciggbmV3dGltZWZyYW1lLmdldEZ1bGxZZWFyKCkgKyBkeWVhciApO1xuICAgIHRoaXMucHJvcHMuc2V0VGltZWZyYW1lKCBuZXd0aW1lZnJhbWUgKTtcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxOYXZpZ2F0aW9uUGFuZSB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb2RlPXsgTW9kZXMuWWVhcnMgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9eyB0aGlzLm9uTmF2aWdhdGUgfS8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJseU5hdmlnYXRpb247XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgTW9udGhDZWxsID0gcmVxdWlyZSggXCIuL01vbnRoQ2VsbFwiICk7XG5jb25zdCBNT05USF9CTE9DS19DT0xVTU5TID0gMztcbmNvbnN0IE1PTlRIX0JMT0NLX1JPV1MgPSA0O1xuXG5jbGFzcyBZZWFybHlQYW5lQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8dGQ+XG4gICAgICAgICAgICAgIDxNb250aENlbGwgeyAuLi50aGlzLnByb3BzIH0vPlxuICAgICAgICAgICAgPC90ZD47XG4gIH1cbn1cblxuY2xhc3MgWWVhcmx5UGFuZVJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgYnVpbGRDZWxsKCkge1xuICAgIHJldHVybiA8WWVhcmx5UGFuZUNlbGwvPjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNlbGxzID0gW107XG4gICAgZm9yKCBsZXQgY29sPTA7IGNvbDxNT05USF9CTE9DS19DT0xVTU5TOyBjb2wrKyApe1xuICAgICAgY2VsbHMucHVzaCggPFllYXJseVBhbmVDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBjb2wrdGhpcy5wcm9wcy5zdGFydE1vbnRoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg9IHsgdGhpcy5wcm9wcy5zdGFydE1vbnRoICsgY29sIH0vPiApO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgICAgICB7IGNlbGxzIH1cbiAgICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIFllYXJseVBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGZvciggbGV0IHJvdz0wOyByb3c8TU9OVEhfQkxPQ0tfUk9XUzsgcm93KysgKXtcbiAgICAgIHJvd3MucHVzaCggPHRyIGtleT17IHJvdyB9PlxuICAgICAgICAgICAgICAgICAgICA8WWVhcmx5UGFuZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE1vbnRoPSB7IHJvdyAqIE1PTlRIX0JMT0NLX0NPTFVNTlMgfS8+XG4gICAgICAgICAgICAgICAgICA8L3RyPiApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJseVBhbmU7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgTmF2aWdhdGlvblBhbmUgPSByZXF1aXJlICggXCIuL05hdmlnYXRpb25QYW5lXCIgKTtcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb25cIiApO1xuY29uc3QgTW9kZXMgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIiApO1xuXG5jbGFzcyBZZWFyc1JhbmdlTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbk5hdmlnYXRlID0gdGhpcy5vbk5hdmlnYXRlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbk5hdmlnYXRlKCBkaXJlY3Rpb24gKSB7XG4gICAgbGV0IGRyYW5nZSA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQgPyAtMSA6IDE7XG4gICAgdmFyIG5ld3RpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICBuZXd0aW1lZnJhbWUuc2V0RnVsbFllYXIoIG5ld3RpbWVmcmFtZS5nZXRGdWxsWWVhcigpICsgZHJhbmdlKjE2ICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIGxldCBzdGFydCA9ICggKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpLzE2ICl8MCApICogMTY7XG4gICAgcmV0dXJuIHN0YXJ0ICsgXCIgLSBcIiArICggc3RhcnQgKyAxNiApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9kZT17IE1vZGVzLk1vbnRobHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9eyB0aGlzLm9uTmF2aWdhdGUgfS8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJzUmFuZ2VOYXZpZ2F0aW9uO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IFllYXJDZWxsID0gcmVxdWlyZSggXCIuL1llYXJDZWxsXCIgKTtcbmNvbnN0IFlFQVJTX0JMT0NLX1NJREUgPSA0O1xuY29uc3QgWUVBUlNfQkxPQ0tfU0laRSA9IFlFQVJTX0JMT0NLX1NJREUgKiBZRUFSU19CTE9DS19TSURFO1xuXG5jbGFzcyBZZWFyc1BhbmVDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDx0ZD5cbiAgICAgICAgICAgICAgPFllYXJDZWxsIHsuLi50aGlzLnByb3BzIH0vPlxuICAgICAgICAgICAgPC90ZD47XG4gIH1cbn1cblxuY2xhc3MgWWVhcnNQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGxldCBjZWxscyA9IFtdO1xuICAgICAgZm9yKCBsZXQgY29sPTA7IGNvbDxZRUFSU19CTE9DS19TSURFOyBjb2wrKyApe1xuICAgICAgICBjZWxscy5wdXNoKCA8WWVhcnNQYW5lQ2VsbCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgdGhpcy5wcm9wcy5mcm9tWWVhciArIGNvbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9eyB0aGlzLnByb3BzLmZyb21ZZWFyICsgY29sIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gPHRyPlxuICAgICAgICAgICAgICAgIHsgY2VsbHMgfVxuICAgICAgICAgICAgPC90cj47XG4gICAgfVxufVxuXG5jbGFzcyBZZWFyc1JhbmdlUGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuXG4gICAgbGV0IGZyb21ZZWFyID0gKCAodGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0RnVsbFllYXIoKS9ZRUFSU19CTE9DS19TSVpFKXwwICkgKiBZRUFSU19CTE9DS19TSVpFO1xuICAgIGZvciggbGV0IHJvdz0wOyByb3c8WUVBUlNfQkxPQ0tfU0lERTsgcm93KysgKXtcbiAgICAgIHJvd3MucHVzaCggPHRyIGtleT17IHJvdyB9PlxuICAgICAgICAgICAgICAgICAgICA8WWVhcnNQYW5lUm93ICBmcm9tWWVhcj17IGZyb21ZZWFyICsgWUVBUlNfQkxPQ0tfU0lERSAqIHJvdyB9IHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgICAgICAgICAgPC90cj4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICB7IHJvd3MgfVxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZZWFyc1JhbmdlUGFuZTtcbiIsImNvbnN0IHdlZWtEYXlzTmFtZXMgPSBbIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiBdO1xuY29uc3QgbW9udGhOYW1lcyA9IFsgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiIF07XG5cbmNsYXNzIEN1bHR1cmVQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKCBsb2NhbGU9XCJlbi11c1wiLCBmb3JtYXQ9XCJkZC9tbS95eXl5XCIgKXtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB0aGlzLndlZWtEYXlTdGFydCA9IDA7XG4gIH1cbiAgZ2V0V2Vla0RheXNOYW1lcygpIHtcbiAgICAgIHJldHVybiB3ZWVrRGF5c05hbWVzO1xuICB9XG4gIGdldE1vbnRoTmFtZXMoKSB7XG4gICAgICByZXR1cm4gbW9udGhOYW1lcztcbiAgfVxuICBtb250aE5hbWUoIG1vbnRoICkge1xuICAgICAgcmV0dXJuIG1vbnRoTmFtZXNbIG1vbnRoIF07XG4gIH1cbiAgbW9udGhOYW1lU2hvcnQoIG1vbnRoICkge1xuICAgICAgcmV0dXJuIHRoaXMubW9udGhOYW1lKCBtb250aCApLnNsaWNlKCAwLCAzICk7XG4gIH1cbiAgZGF5TmFtZSggZGF5ICkge1xuICAgICAgcmV0dXJuIHdlZWtEYXlzTmFtZXNbIGRheSBdO1xuICB9XG4gIGRheU5hbWVTaG9ydCggZGF5ICkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF5TmFtZSggZGF5ICkuc2xpY2UoIDAsIDIgKTtcbiAgfVxuICBpc0hvbGlkYXkoIGRheSApIHtcbiAgICAgcmV0dXJuIGRheSAlIDYgPT09IDAgfHwgZGF5ICUgNyA9PT0wO1xuICB9XG4gIHN0YXRpYyBzcGxpdERhdGUoIGRhdGUgKXtcbiAgICByZXR1cm4ge1xuICAgICAgZGF5OiBkYXRlLmdldERheSgpLFxuICAgICAgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IGRhdGUuZ2V0WWVhcigpXG4gICAgfTtcbiAgfVxuICBmb3JtYXQoIGRhdGUgKXsgLy9mb3JtYXQgKSB7XG4gICAgdmFyIHNkYXRlID0gQ3VsdHVyZVByb3ZpZGVyLnNwbGl0RGF0ZSggZGF0ZSApO1xuICAgIC8vZm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMuZm9ybWF0O1xuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IFtdO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwXCIgKyBzZGF0ZS5tb250aCApLnNsaWNlKCAtMiApICk7XG4gICAgZm9ybWF0dGVkVmFsdWUucHVzaCggKCBcIjBcIiArIHNkYXRlLm1vbnRoICkuc2xpY2UoIC0yICkgKTtcbiAgICBmb3JtYXR0ZWRWYWx1ZS5wdXNoKCAoIFwiMDAwMFwiICsgc2RhdGUubW9udGggKS5zbGljZSggLTQgKSApO1xuICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZS5qb2luKCBcIi9cIiApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1bHR1cmVQcm92aWRlcjtcbiIsImNvbnN0IERpcmVjdGlvbiA9IHtcbiAgTGVmdDogXCJsZWZ0XCIsXG4gIFJpZ2h0OiBcInJpZ2h0XCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvbjtcbiIsImNvbnN0IE1vZGVzID0ge1xuICBZZWFybHk6IFwieWVhcmx5XCIsXG4gIE1vbnRobHk6IFwibW9udGhseVwiLFxuICBZZWFyczogXCJ5ZWFyc3JhbmdlXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVzO1xuIl19
