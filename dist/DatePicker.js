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
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}

}());

},{}],23:[function(require,module,exports){
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

function trimDate(date) {
  var splitted = CultureProvider.splitDate(date);
  return new Date(splitted.year, splitted.month, splitted.day);
}

var DatePicker = (function (_React$Component2) {
  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    _get(Object.getPrototypeOf(DatePicker.prototype), "constructor", this).call(this, props);
    this.state = {
      selectedDate: trimDate(this.props.date || new Date()),
      timeframe: trimDate(new Date()),
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

},{"./MonthlyNavigation":26,"./MonthlyPane":27,"./YearlyNavigation":31,"./YearlyPane":32,"./YearsRangeNavigation":33,"./YearsRangePane":34,"./infrastructure/CultureProvider":35,"./infrastructure/Modes":37,"babel-runtime/core-js/object/assign":1,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],24:[function(require,module,exports){
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
var cn = require("classnames");

var DayCell = (function (_React$Component) {
  function DayCell(props) {
    _classCallCheck(this, DayCell);

    _get(Object.getPrototypeOf(DayCell.prototype), "constructor", this).call(this, props);
    this.onClick = this.onClick.bind(this);
  }

  _inherits(DayCell, _React$Component);

  _createClass(DayCell, [{
    key: "isSelected",
    value: function isSelected() {
      return +this.props.date === +this.props.selectedDate;
    }
  }, {
    key: "offTimeframe",
    value: function offTimeframe() {
      return this.props.date.getMonth() !== this.props.timeframe.getMonth();
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.props.setDate(this.props.date);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: cn("datepicker-date-cell", {
            "datepicker-selected": this.isSelected(),
            "datepicker-weekend": this.props.cultureProvider.isHoliday(this.props.date),
            "datepicker-timeframe-off": this.offTimeframe()
          }), onClick: this.onClick },
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

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"classnames":22}],25:[function(require,module,exports){
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
var cn = require("classnames");

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
    key: "isSelected",
    value: function isSelected() {
      return this.props.month === this.props.selectedDate.getMonth() && this.props.selectedDate.getFullYear() === this.props.timeframe.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { onClick: this.onClick, className: cn("datepicker-month-cell", {
            "datepicker-selected": this.isSelected()
          }) },
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

},{"./infrastructure/Modes":37,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"classnames":22}],26:[function(require,module,exports){
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

},{"./NavigationPane":28,"./infrastructure/Direction":36,"./infrastructure/Modes":37,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],27:[function(require,module,exports){
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

},{"./DayCell":24,"./WeekHeaderCell":29,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],28:[function(require,module,exports){
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
var cn = require("classnames");

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
      return React.createElement("span", {
        className: cn("datepicker-nav-button", {
          "arrow-left": this.props.direction === Direction.Left,
          "arrow-right": this.props.direction === Direction.Right
        }), onClick: this.onClick });
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

},{"./infrastructure/Direction.js":36,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"classnames":22}],29:[function(require,module,exports){
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

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],30:[function(require,module,exports){
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
var cn = require("classnames");

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
    key: "isSelected",
    value: function isSelected() {
      return this.props.year === this.props.selectedDate.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: cn("datepicker-year-cell", {
            "datepicker-selected": this.isSelected()
          }),
          onClick: this.onClick },
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

},{"./infrastructure/Modes":37,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"classnames":22}],31:[function(require,module,exports){
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

},{"./NavigationPane":28,"./infrastructure/Direction":36,"./infrastructure/Modes":37,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],32:[function(require,module,exports){
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

},{"./MonthCell":25,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],33:[function(require,module,exports){
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

},{"./NavigationPane":28,"./infrastructure/Direction":36,"./infrastructure/Modes":37,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],34:[function(require,module,exports){
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

},{"./YearCell":30,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9}],35:[function(require,module,exports){
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
        value: function isHoliday(date) {
            return date.getDay() % 6 === 0 || date.getDay() % 7 === 0;
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
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear()
            };
        }
    }]);

    return CultureProvider;
})();

exports["default"] = CultureProvider;
module.exports = exports["default"];

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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

},{}]},{},[23])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZ3LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzLmpzIiwibm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9EYXRlUGlja2VyLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvRGF5Q2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRoQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL01vbnRobHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvTW9udGhseVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9OYXZpZ2F0aW9uUGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1dlZWtIZWFkZXJDZWxsLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhckNlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFybHlOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcmx5UGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJzUmFuZ2VOYXZpZ2F0aW9uLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcnNSYW5nZVBhbmUuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9DdWx0dXJlUHJvdmlkZXIuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9pbmZyYXN0cnVjdHVyZS9Nb2Rlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TSxLQUFLLEdBQUc7QUFDWixRQUFNLEVBQUUsUUFBUTtBQUNoQixTQUFPLEVBQUUsU0FBUztBQUNsQixPQUFLLEVBQUUsWUFBWTtDQUNwQixDQUFDOztxQkFFYSxLQUFLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkYXNzaWduID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduXCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfT2JqZWN0JGFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94Mykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgb2JqZWN0ID0gX3gsXG4gICAgICAgIHByb3BlcnR5ID0gX3gyLFxuICAgICAgICByZWNlaXZlciA9IF94MztcbiAgICBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkO1xuICAgIF9hZ2FpbiA9IGZhbHNlO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuICAgIHZhciBkZXNjID0gX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF94ID0gcGFyZW50O1xuICAgICAgICBfeDIgPSBwcm9wZXJ0eTtcbiAgICAgICAgX3gzID0gcmVjZWl2ZXI7XG4gICAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGNyZWF0ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IF9PYmplY3QkY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpLmNvcmUuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHJldHVybiAkLmdldERlc2MoaXQsIGtleSk7XG59OyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZW51bUtleXMgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJyk7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHZhciBUID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCh0YXJnZXQpKVxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGkgPSAxO1xuICB3aGlsZShsID4gaSl7XG4gICAgdmFyIFMgICAgICA9ICQuRVM1T2JqZWN0KGFyZ3VtZW50c1tpKytdKVxuICAgICAgLCBrZXlzICAgPSBlbnVtS2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKVRba2V5ID0ga2V5c1tqKytdXSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgPSAkLmdcbiAgLCBjb3JlICAgICAgID0gJC5jb3JlXG4gICwgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbjtcbmZ1bmN0aW9uIGN0eChmbiwgdGhhdCl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufVxuLy8gdHlwZSBiaXRtYXBcbiRkZWYuRiA9IDE7ICAvLyBmb3JjZWRcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcbiRkZWYuUyA9IDQ7ICAvLyBzdGF0aWNcbiRkZWYuUCA9IDg7ICAvLyBwcm90b1xuJGRlZi5CID0gMTY7IC8vIGJpbmRcbiRkZWYuVyA9IDMyOyAvLyB3cmFwXG5mdW5jdGlvbiAkZGVmKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pLnByb3RvdHlwZVxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gISh0eXBlICYgJGRlZi5GKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGlmKGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHAucHJvdG90eXBlID0gQy5wcm90b3R5cGU7XG4gICAgfShvdXQpO1xuICAgIGVsc2UgZXhwID0gaXNQcm90byAmJiBpc0Z1bmN0aW9uKG91dCkgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnRcbiAgICBleHBvcnRzW2tleV0gPSBleHA7XG4gICAgaWYoaXNQcm90bykoZXhwb3J0cy5wcm90b3R5cGUgfHwgKGV4cG9ydHMucHJvdG90eXBlID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7IiwidmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGdldERlc2MgICAgPSAkLmdldERlc2NcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIGlmKGdldFN5bWJvbHMpJC5lYWNoLmNhbGwoZ2V0U3ltYm9scyhpdCksIGZ1bmN0aW9uKGtleSl7XG4gICAgaWYoZ2V0RGVzYyhpdCwga2V5KS5lbnVtZXJhYmxlKWtleXMucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJCl7XG4gICQuRlcgICA9IGZhbHNlO1xuICAkLnBhdGggPSAkLmNvcmU7XG4gIHJldHVybiAkO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XHJcbnZhciAkID0gcmVxdWlyZSgnLi8kJylcclxuICAsIHRvU3RyaW5nID0ge30udG9TdHJpbmdcclxuICAsIGdldE5hbWVzID0gJC5nZXROYW1lcztcclxuXHJcbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcclxuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd05hbWVzKGl0KXtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIGdldE5hbWVzKGl0KTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcclxuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xyXG4gIHJldHVybiBnZXROYW1lcygkLnRvT2JqZWN0KGl0KSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcbiAgLCBjb3JlICAgPSB7fVxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICwgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuICAsIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXG4gICwgbWF4ICAgPSBNYXRoLm1heFxuICAsIG1pbiAgID0gTWF0aC5taW47XG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gMjsgfX0pLmEgPT0gMjtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xudmFyIGhpZGUgPSBjcmVhdGVEZWZpbmVyKDEpO1xuLy8gNy4xLjQgVG9JbnRlZ2VyXG5mdW5jdGlvbiB0b0ludGVnZXIoaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn1cbmZ1bmN0aW9uIGRlc2MoYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufVxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7XG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBkZXNjKGJpdG1hcCwgdmFsdWUpKTtcbiAgfSA6IHNpbXBsZVNldDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn1cblxudmFyICQgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mdycpKHtcbiAgZzogZ2xvYmFsLFxuICBjb3JlOiBjb3JlLFxuICBodG1sOiBnbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XG4gIGlzT2JqZWN0OiAgIGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICB0aGF0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyA3LjEuNCBUb0ludGVnZXJcbiAgdG9JbnRlZ2VyOiB0b0ludGVnZXIsXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxuICB0b0xlbmd0aDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gIH0sXG4gIHRvSW5kZXg6IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICAgIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihpdCwga2V5KXtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbiAgfSxcbiAgY3JlYXRlOiAgICAgT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBERVNDOiAgICAgICBERVNDLFxuICBkZXNjOiAgICAgICBkZXNjLFxuICBnZXREZXNjOiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICBkZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgIE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgYXNzZXJ0RGVmaW5lZDogYXNzZXJ0RGVmaW5lZCxcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXG4gIEVTNU9iamVjdDogT2JqZWN0LFxuICB0b09iamVjdDogZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiAkLkVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XG4gIH0sXG4gIGhpZGU6IGhpZGUsXG4gIGRlZjogY3JlYXRlRGVmaW5lcigwKSxcbiAgc2V0OiBnbG9iYWwuU3ltYm9sID8gc2ltcGxlU2V0IDogaGlkZSxcbiAgZWFjaDogW10uZm9yRWFjaFxufSk7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuaWYodHlwZW9mIF9fZSAhPSAndW5kZWZpbmVkJylfX2UgPSBjb3JlO1xuaWYodHlwZW9mIF9fZyAhPSAndW5kZWZpbmVkJylfX2cgPSBnbG9iYWw7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xuJGRlZigkZGVmLlMsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQuYXNzaWduJyl9KTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRkZWYgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgaXNPYmplY3QgPSAkLmlzT2JqZWN0XG4gICwgdG9PYmplY3QgPSAkLnRvT2JqZWN0O1xuJC5lYWNoLmNhbGwoKCdmcmVlemUsc2VhbCxwcmV2ZW50RXh0ZW5zaW9ucyxpc0Zyb3plbixpc1NlYWxlZCxpc0V4dGVuc2libGUsJyArXG4gICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsZ2V0UHJvdG90eXBlT2Ysa2V5cyxnZXRPd25Qcm9wZXJ0eU5hbWVzJykuc3BsaXQoJywnKVxuLCBmdW5jdGlvbihLRVksIElEKXtcbiAgdmFyIGZuICAgICA9ICgkLmNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBmb3JjZWQgPSAwXG4gICAgLCBtZXRob2QgPSB7fTtcbiAgbWV0aG9kW0tFWV0gPSBJRCA9PSAwID8gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAxID8gZnVuY3Rpb24gc2VhbChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMiA/IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogaXQ7XG4gIH0gOiBJRCA9PSAzID8gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xuICB9IDogSUQgPT0gNCA/IGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDUgPyBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBmYWxzZTtcbiAgfSA6IElEID09IDYgPyBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSwga2V5KTtcbiAgfSA6IElEID09IDcgPyBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuIGZuKE9iamVjdCgkLmFzc2VydERlZmluZWQoaXQpKSk7XG4gIH0gOiBJRCA9PSA4ID8gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSk7XG4gIH0gOiByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJykuZ2V0O1xuICB0cnkge1xuICAgIGZuKCd6Jyk7XG4gIH0gY2F0Y2goZSl7XG4gICAgZm9yY2VkID0gMTtcbiAgfVxuICAkZGVmKCRkZWYuUyArICRkZWYuRiAqIGZvcmNlZCwgJ09iamVjdCcsIG1ldGhvZCk7XG59KTsiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoJ3N0cmluZycgPT09IGFyZ1R5cGUgfHwgJ251bWJlcicgPT09IGFyZ1R5cGUpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCdvYmplY3QnID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmhhc093blByb3BlcnR5KGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKXtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxuXG59KCkpO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IFllYXJseVBhbmUgPSByZXF1aXJlKCBcIi4vWWVhcmx5UGFuZVwiICk7XG5jb25zdCBNb250aGx5UGFuZSA9IHJlcXVpcmUoIFwiLi9Nb250aGx5UGFuZVwiICk7XG5jb25zdCBZZWFyc1JhbmdlUGFuZSA9IHJlcXVpcmUoIFwiLi9ZZWFyc1JhbmdlUGFuZVwiICk7XG5jb25zdCBZZWFybHlOYXZpZ2F0aW9uID0gcmVxdWlyZSggXCIuL1llYXJseU5hdmlnYXRpb25cIiApO1xuY29uc3QgTW9udGhseU5hdmlnYXRpb24gPSByZXF1aXJlKCBcIi4vTW9udGhseU5hdmlnYXRpb25cIiApO1xuY29uc3QgWWVhcnNSYW5nZU5hdmlnYXRpb24gPSByZXF1aXJlKCBcIi4vWWVhcnNSYW5nZU5hdmlnYXRpb25cIiApO1xuXG5jb25zdCBDdWx0dXJlUHJvdmlkZXIgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvQ3VsdHVyZVByb3ZpZGVyXCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcblxuY29uc3QgTW9kZVZpZXdzID0ge307XG5cbk1vZGVWaWV3c1sgTW9kZXMuWWVhcmx5IF0gPSBbIFllYXJseU5hdmlnYXRpb24sIFllYXJseVBhbmUgXTtcbk1vZGVWaWV3c1sgTW9kZXMuTW9udGhseSBdID0gWyBNb250aGx5TmF2aWdhdGlvbiwgTW9udGhseVBhbmUgXTtcbk1vZGVWaWV3c1sgTW9kZXMuWWVhcnMgXSA9IFsgWWVhcnNSYW5nZU5hdmlnYXRpb24sIFllYXJzUmFuZ2VQYW5lIF07XG5cblxuXG5jbGFzcyBDb250ZW50UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb21wb25lbnRzID0gdGhpcy5wcm9wcy5jYXNlc1sgdGhpcy5wcm9wcy5tb2RlIF0ubWFwKFxuICAgICAgICAgIChjLCBpKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KCBjLCBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5wcm9wcywgeyBrZXk6IFwiY1wiICsgaSArIHRoaXMucHJvcHMubW9kZSB9ICkgKVxuICAgICk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1wYW5lXCI+XG4gICAgICAgICAgICAgIHsgY29tcG9uZW50cyB9XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyaW1EYXRlKCBkYXRlICl7XG4gIHZhciBzcGxpdHRlZCA9IEN1bHR1cmVQcm92aWRlci5zcGxpdERhdGUoIGRhdGUgKTtcbiAgcmV0dXJuIG5ldyBEYXRlKCBzcGxpdHRlZC55ZWFyLCBzcGxpdHRlZC5tb250aCwgc3BsaXR0ZWQuZGF5ICk7XG59XG5cbmNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLnN0YXRlID0gIHtcbiAgICAgIHNlbGVjdGVkRGF0ZTogdHJpbURhdGUoIHRoaXMucHJvcHMuZGF0ZSB8fCBuZXcgRGF0ZSgpICksXG4gICAgICB0aW1lZnJhbWU6IHRyaW1EYXRlKCBuZXcgRGF0ZSgpICksXG4gICAgICBtb2RlOiB0aGlzLnByb3BzLm1vZGUgfHwgTW9kZXMuTW9udGhseSxcbiAgICAgIGluRm9jdXM6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCggdGhpcyApO1xuICAgIHRoaXMuc3dpdGNoTW9kZSA9IHRoaXMuc3dpdGNoTW9kZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zZXRUaW1lZnJhbWUgPSB0aGlzLnNldFRpbWVmcmFtZS5iaW5kKCB0aGlzICk7XG4gICAgdGhpcy5zZXREYXRlID0gdGhpcy5zZXREYXRlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLmRyaWxsRG93biA9IHRoaXMuZHJpbGxEb3duLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgdmlzaWJsZTogdHJ1ZSB9ICk7XG4gIH1cbiAgc2V0VGltZWZyYW1lKCBuZXdEYXRlICkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgdGltZWZyYW1lOiBuZXdEYXRlIH0gKTtcbiAgfVxuICBzd2l0Y2hNb2RlKCBtb2RlICkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgbW9kZTogbW9kZSB9ICk7XG4gIH1cbiAgc2V0RGF0ZSggZGF0ZSApe1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgdGltZWZyYW1lOiBuZXcgRGF0ZSggK2RhdGUgKSwgbW9kZTogTW9kZXMuTW9udGhseSwgc2VsZWN0ZWREYXRlOiBkYXRlIH0gKTtcbiAgICB0aGlzLnByb3BzLm9uRGF0ZUNoYW5nZSggZGF0ZSApO1xuICB9XG4gIGRyaWxsRG93biggbW9kZSwgdGltZWZyYW1lICl7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyBtb2RlOiBtb2RlLCB0aW1lZnJhbWU6IHRpbWVmcmFtZSB9ICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkZvY3VzPXsgdGhpcy5vbkZvY3VzIH0vPlxuICAgICAgICAgICAgICA8Q29udGVudFBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9eyB0aGlzLnN0YXRlLm1vZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lZnJhbWUgPSB7IHRoaXMuc3RhdGUudGltZWZyYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlPXsgdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlcz17IE1vZGVWaWV3cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVmcmFtZT17IHRoaXMuc2V0VGltZWZyYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0ZT17IHRoaXMuc2V0RGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyaWxsRG93bj17IHRoaXMuZHJpbGxEb3duIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoTW9kZSA9eyB0aGlzLnN3aXRjaE1vZGUgfS8+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbkRhdGVQaWNrZXIuZGVmYXVsdFByb3BzID0ge1xuICBjdWx0dXJlUHJvdmlkZXI6IG5ldyBDdWx0dXJlUHJvdmlkZXIoKSxcbn07XG5cbm1vZHVsZS5leHBvcnRzPSB7XG4gIERhdGVQaWNrZXI6IERhdGVQaWNrZXIsXG4gIEN1bHR1cmVQcm92aWRlcjogQ3VsdHVyZVByb3ZpZGVyXG59O1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IGNuID0gcmVxdWlyZSggXCJjbGFzc25hbWVzXCIgKTtcblxuY2xhc3MgRGF5Q2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gIH1cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gK3RoaXMucHJvcHMuZGF0ZSA9PT0gK3RoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICB9XG4gIG9mZlRpbWVmcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCkgIT09IHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCk7XG4gIH1cbiAgb25DbGljaygpe1xuICAgIHRoaXMucHJvcHMuc2V0RGF0ZSggdGhpcy5wcm9wcy5kYXRlICk7XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci1kYXRlLWNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXNlbGVjdGVkXCI6IHRoaXMuaXNTZWxlY3RlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXdlZWtlbmRcIjogdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuaXNIb2xpZGF5KCB0aGlzLnByb3BzLmRhdGUgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci10aW1lZnJhbWUtb2ZmXCI6IHRoaXMub2ZmVGltZWZyYW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICkgfSBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0ZS5nZXREYXRlKCkgfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5EYXlDZWxsLnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXREYXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXlDZWxsO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcbmNvbnN0IGNuID0gcmVxdWlyZSggXCJjbGFzc25hbWVzXCIgKTtcblxuY2xhc3MgTW9udGhDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdmFyIHRpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICB0aW1lZnJhbWUuc2V0TW9udGgoIHRoaXMucHJvcHMubW9udGggKTtcbiAgICB0aGlzLnByb3BzLmRyaWxsRG93biggTW9kZXMuTW9udGhseSwgdGltZWZyYW1lICk7XG4gIH1cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb250aCA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAmJlxuICAgICB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0gY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci1tb250aC1jZWxsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXNlbGVjdGVkXCI6IHRoaXMuaXNTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgfSApIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5tb250aE5hbWVTaG9ydCggdGhpcy5wcm9wcy5tb250aCApIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuTW9udGhDZWxsLnByb3BUeXBlcyA9IHtcbiAgbW9udGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb250aENlbGw7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgTmF2aWdhdGlvblBhbmUgPSByZXF1aXJlICggXCIuL05hdmlnYXRpb25QYW5lXCIgKTtcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb25cIiApO1xuY29uc3QgTW9kZXMgPSByZXF1aXJlKCBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIiApO1xuXG5jbGFzcyBNb250aGx5TmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbk5hdmlnYXRlID0gdGhpcy5vbk5hdmlnYXRlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbk5hdmlnYXRlKCBkaXJlY3Rpb24gKSB7XG4gICAgbGV0IGRtb250aCA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQgPyAtMSA6IDE7XG4gICAgbGV0IG5ld3RpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICBuZXd0aW1lZnJhbWUuc2V0TW9udGgoIG5ld3RpbWVmcmFtZS5nZXRNb250aCgpICsgZG1vbnRoICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5tb250aE5hbWUoIHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCkgKSArIFwiIFwiICsgIHRoaXMucHJvcHMudGltZWZyYW1lLmdldEZ1bGxZZWFyKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TmF2aWdhdGlvblBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vZGUgPSB7IE1vZGVzLlllYXJseSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyB0aGlzLmdldFRpdGxlKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9eyB0aGlzLm9uTmF2aWdhdGUgfS8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlOYXZpZ2F0aW9uO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IERheUNlbGwgPSByZXF1aXJlKCBcIi4vRGF5Q2VsbFwiICk7XG5jb25zdCBXZWVrSGVhZGVyQ2VsbCA9IHJlcXVpcmUgKCBcIi4vV2Vla0hlYWRlckNlbGxcIiApO1xuY29uc3QgREFZU19CTE9DS19DT0xVTU5TID0gNztcbmNvbnN0IERBWVNfQkxPQ0tfUk9XUyA9IDY7XG5jb25zdCBEQVlfVElNRVNQQU4gPSAyNCAqIDM2MDAgKiAxMDAwO1xuXG5jbGFzcyBNb250aGx5UGFuZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB3ZWVrZGF5cyA9IFtdO1xuICAgIGZvciggbGV0IGNvbD0wOyBjb2w8REFZU19CTE9DS19DT0xVTU5TOyBjb2wrKyApe1xuICAgICAgd2Vla2RheXMucHVzaCggPHRoIGtleT17IGNvbCtcIm1oXCIgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8V2Vla0hlYWRlckNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtkYXk9eyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5kYXlOYW1lU2hvcnQoIGNvbCApIH0vPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPiApO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgIHsgd2Vla2RheXMgfVxuICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8dGQ+XG4gICAgICAgICAgICAgIDxEYXlDZWxsIHsuLi50aGlzLnByb3BzfSBkYXRlPXsgdGhpcy5wcm9wcy5kYXRlIH0vPlxuICAgICAgICAgICAgPC90ZD47XG4gIH1cbn1cblxuY2xhc3MgTW9udGhseVBhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICAgIHN1cGVyKCBwcm9wcyApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgY2VsbHMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPERBWVNfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIGNlbGxzLnB1c2goIDxNb250aGx5UGFuZUNlbGxcbiAgICAgICAgey4uLnRoaXMucHJvcHMgfVxuICAgICAgICAga2V5PXsgY29sICsgdGhpcy5wcm9wcy5yb3cgKiBEQVlTX0JMT0NLX0NPTFVNTlMgfVxuICAgICAgICAgZGF0ZT17IG5ldyBEYXRlKCArdGhpcy5wcm9wcy5zdGFydERhdGUgKyBEQVlfVElNRVNQQU4gKiBjb2wgKX0vPiApO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgICAgICB7IGNlbGxzIH1cbiAgICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBnZXRTdGFydERhdGUoKXtcbiAgICBsZXQgbW9udGhTdGFydCA9IG5ldyBEYXRlKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCkgKTtcbiAgICBsZXQgc3RhcnREYXRlPW1vbnRoU3RhcnQ7XG4gICAgbGV0IHN0YXJ0ZGlmZiA9IG1vbnRoU3RhcnQuZ2V0RGF5KCkgLSB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci53ZWVrRGF5U3RhcnQ7XG5cbiAgICBpZiggc3RhcnRkaWZmPjAgKXtcbiAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCBtb250aFN0YXJ0IC0gREFZX1RJTUVTUEFOICogc3RhcnRkaWZmICk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydERhdGU7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuZ2V0U3RhcnREYXRlKCk7XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxEQVlTX0JMT0NLX1JPV1M7IHJvdysrICl7XG4gICAgICByb3dzLnB1c2goIDxNb250aGx5UGFuZVJvd1xuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAga2V5PXsgcm93IH1cbiAgICAgICAgICAgICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXsgbmV3IERhdGUoICtzdGFydERhdGUgKyBEQVlfVElNRVNQQU4gKiByb3cgKiBEQVlTX0JMT0NLX0NPTFVNTlMgKSB9IC8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPE1vbnRobHlQYW5lSGVhZGVyIHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9udGhseVBhbmU7XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgRGlyZWN0aW9uID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvbi5qc1wiICk7XG5jb25zdCBjbiA9IHJlcXVpcmUoIFwiY2xhc3NuYW1lc1wiICk7XG5cbmNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25OYXZpZ2F0ZSggdGhpcy5wcm9wcy5kaXJlY3Rpb24gKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXItbmF2LWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJyb3ctbGVmdFwiOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJyb3ctcmlnaHRcIjogdGhpcy5wcm9wcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SaWdodFxuICAgICAgICAgICAgICAgICAgfSApIH0gb25DbGljaz17IHRoaXMub25DbGljayB9Pjwvc3Bhbj47XG4gIH1cbn1cblxuY2xhc3MgTmF2aWdhdGlvblBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25Td2l0Y2hNb2RlID0gdGhpcy5vblN3aXRjaE1vZGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uU3dpdGNoTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLnN3aXRjaE1vZGUoIHRoaXMucHJvcHMubmV4dE1vZGUgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtcGFuZVwiPlxuICAgICAgICAgICAgICA8TmF2QnV0dG9uIHsuLi50aGlzLnByb3BzfSBkaXJlY3Rpb249eyBEaXJlY3Rpb24uTGVmdCB9IG9uLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZXBpY2tlci1uYXYtdGl0bGVcIiBvbkNsaWNrPXsgdGhpcy5vblN3aXRjaE1vZGUgfT57IHRoaXMucHJvcHMudGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPE5hdkJ1dHRvbiB7Li4udGhpcy5wcm9wc30gZGlyZWN0aW9uPXsgRGlyZWN0aW9uLlJpZ2h0IH0vPlxuICAgICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25QYW5lO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcblxuY2xhc3MgV2Vla0hlYWRlckNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItd2Vla2hlYWRlci1jZWxsXCI+eyB0aGlzLnByb3BzLndlZWtkYXkudG9VcHBlckNhc2UoKSB9PC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlZWtIZWFkZXJDZWxsO1xuIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCBcInJlYWN0XCIgKTtcbmNvbnN0IE1vZGVzID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCIgKTtcbmNvbnN0IGNuID0gcmVxdWlyZSggXCJjbGFzc25hbWVzXCIgKTtcbmNsYXNzIFllYXJDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdmFyIHRpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICB0aW1lZnJhbWUuc2V0RnVsbFllYXIoIHRoaXMucHJvcHMueWVhciApO1xuICAgIHRoaXMucHJvcHMuZHJpbGxEb3duKCBNb2Rlcy5ZZWFybHksIHRpbWVmcmFtZSApO1xuICB9XG4gIGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMueWVhciA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuICByZW5kZXIgKCl7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci15ZWFyLWNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXNlbGVjdGVkXCI6IHRoaXMuaXNTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgfSApIH1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfT5cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnllYXIgfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5ZZWFyQ2VsbC5wcm9wVHlwZXMgPSB7XG4gICAgeWVhcjogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBZZWFyQ2VsbDtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBOYXZpZ2F0aW9uUGFuZSA9IHJlcXVpcmUgKCBcIi4vTmF2aWdhdGlvblBhbmVcIiApO1xuY29uc3QgRGlyZWN0aW9uID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvblwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5jbGFzcyBZZWFybHlOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSB0aGlzLm9uTmF2aWdhdGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uTmF2aWdhdGUoIGRpcmVjdGlvbiApIHtcbiAgICBsZXQgZHllYXIgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIGxldCBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldEZ1bGxZZWFyKCBuZXd0aW1lZnJhbWUuZ2V0RnVsbFllYXIoKSArIGR5ZWFyICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE1vZGU9eyBNb2Rlcy5ZZWFycyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyB0aGlzLmdldFRpdGxlKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17IHRoaXMub25OYXZpZ2F0ZSB9Lz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcmx5TmF2aWdhdGlvbjtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBNb250aENlbGwgPSByZXF1aXJlKCBcIi4vTW9udGhDZWxsXCIgKTtcbmNvbnN0IE1PTlRIX0JMT0NLX0NPTFVNTlMgPSAzO1xuY29uc3QgTU9OVEhfQkxPQ0tfUk9XUyA9IDQ7XG5cbmNsYXNzIFllYXJseVBhbmVDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDx0ZD5cbiAgICAgICAgICAgICAgPE1vbnRoQ2VsbCB7IC4uLnRoaXMucHJvcHMgfS8+XG4gICAgICAgICAgICA8L3RkPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFybHlQYW5lUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBidWlsZENlbGwoKSB7XG4gICAgcmV0dXJuIDxZZWFybHlQYW5lQ2VsbC8+O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPE1PTlRIX0JMT0NLX0NPTFVNTlM7IGNvbCsrICl7XG4gICAgICBjZWxscy5wdXNoKCA8WWVhcmx5UGFuZUNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IGNvbCt0aGlzLnByb3BzLnN0YXJ0TW9udGggfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aD0geyB0aGlzLnByb3BzLnN0YXJ0TW9udGggKyBjb2wgfS8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgIHsgY2VsbHMgfVxuICAgICAgICAgICAgPC90cj47XG4gIH1cbn1cblxuY2xhc3MgWWVhcmx5UGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxNT05USF9CTE9DS19ST1dTOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8dHIga2V5PXsgcm93IH0+XG4gICAgICAgICAgICAgICAgICAgIDxZZWFybHlQYW5lUm93XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TW9udGg9IHsgcm93ICogTU9OVEhfQkxPQ0tfQ09MVU1OUyB9Lz5cbiAgICAgICAgICAgICAgICAgIDwvdHI+ICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcmx5UGFuZTtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSggXCJyZWFjdFwiICk7XG5jb25zdCBOYXZpZ2F0aW9uUGFuZSA9IHJlcXVpcmUgKCBcIi4vTmF2aWdhdGlvblBhbmVcIiApO1xuY29uc3QgRGlyZWN0aW9uID0gcmVxdWlyZSggXCIuL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvblwiICk7XG5jb25zdCBNb2RlcyA9IHJlcXVpcmUoIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiICk7XG5cbmNsYXNzIFllYXJzUmFuZ2VOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uTmF2aWdhdGUgPSB0aGlzLm9uTmF2aWdhdGUuYmluZCggdGhpcyApO1xuICB9XG4gIG9uTmF2aWdhdGUoIGRpcmVjdGlvbiApIHtcbiAgICBsZXQgZHJhbmdlID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCA/IC0xIDogMTtcbiAgICB2YXIgbmV3dGltZWZyYW1lID0gbmV3IERhdGUoICt0aGlzLnByb3BzLnRpbWVmcmFtZSApO1xuICAgIG5ld3RpbWVmcmFtZS5zZXRGdWxsWWVhciggbmV3dGltZWZyYW1lLmdldEZ1bGxZZWFyKCkgKyBkcmFuZ2UqMTYgKTtcbiAgICB0aGlzLnByb3BzLnNldFRpbWVmcmFtZSggbmV3dGltZWZyYW1lICk7XG4gIH1cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHN0YXJ0ID0gKCAoIHRoaXMucHJvcHMudGltZWZyYW1lLmdldEZ1bGxZZWFyKCkvMTYgKXwwICkgKiAxNjtcbiAgICByZXR1cm4gc3RhcnQgKyBcIiAtIFwiICsgKCBzdGFydCArIDE2ICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TmF2aWdhdGlvblBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyB0aGlzLmdldFRpdGxlKCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb2RlPXsgTW9kZXMuTW9udGhseSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17IHRoaXMub25OYXZpZ2F0ZSB9Lz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcnNSYW5nZU5hdmlnYXRpb247XG4iLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoIFwicmVhY3RcIiApO1xuY29uc3QgWWVhckNlbGwgPSByZXF1aXJlKCBcIi4vWWVhckNlbGxcIiApO1xuY29uc3QgWUVBUlNfQkxPQ0tfU0lERSA9IDQ7XG5jb25zdCBZRUFSU19CTE9DS19TSVpFID0gWUVBUlNfQkxPQ0tfU0lERSAqIFlFQVJTX0JMT0NLX1NJREU7XG5cbmNsYXNzIFllYXJzUGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8WWVhckNlbGwgey4uLnRoaXMucHJvcHMgfS8+XG4gICAgICAgICAgICA8L3RkPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFyc1BhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyKCkge1xuICAgICAgbGV0IGNlbGxzID0gW107XG4gICAgICBmb3IoIGxldCBjb2w9MDsgY29sPFlFQVJTX0JMT0NLX1NJREU7IGNvbCsrICl7XG4gICAgICAgIGNlbGxzLnB1c2goIDxZZWFyc1BhbmVDZWxsIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyB0aGlzLnByb3BzLmZyb21ZZWFyICsgY29sIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVhcj17IHRoaXMucHJvcHMuZnJvbVllYXIgKyBjb2wgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8dHI+XG4gICAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgICB9XG59XG5cbmNsYXNzIFllYXJzUmFuZ2VQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG5cbiAgICBsZXQgZnJvbVllYXIgPSAoICh0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpL1lFQVJTX0JMT0NLX1NJWkUpfDAgKSAqIFlFQVJTX0JMT0NLX1NJWkU7XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxZRUFSU19CTE9DS19TSURFOyByb3crKyApe1xuICAgICAgcm93cy5wdXNoKCA8dHIga2V5PXsgcm93IH0+XG4gICAgICAgICAgICAgICAgICAgIDxZZWFyc1BhbmVSb3cgIGZyb21ZZWFyPXsgZnJvbVllYXIgKyBZRUFSU19CTE9DS19TSURFICogcm93IH0gey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICAgICAgICA8L3RyPiApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIHsgcm93cyB9XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJzUmFuZ2VQYW5lO1xuIiwiY29uc3Qgd2Vla0RheXNOYW1lcyA9IFsgXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiIF07XG5jb25zdCBtb250aE5hbWVzID0gWyBcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIgXTtcblxuY2xhc3MgQ3VsdHVyZVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoIGxvY2FsZT1cImVuLXVzXCIsIGZvcm1hdD1cImRkL21tL3l5eXlcIiApe1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0O1xuICAgIHRoaXMud2Vla0RheVN0YXJ0ID0gMDtcbiAgfVxuICBnZXRXZWVrRGF5c05hbWVzKCkge1xuICAgICAgcmV0dXJuIHdlZWtEYXlzTmFtZXM7XG4gIH1cbiAgZ2V0TW9udGhOYW1lcygpIHtcbiAgICAgIHJldHVybiBtb250aE5hbWVzO1xuICB9XG4gIG1vbnRoTmFtZSggbW9udGggKSB7XG4gICAgICByZXR1cm4gbW9udGhOYW1lc1sgbW9udGggXTtcbiAgfVxuICBtb250aE5hbWVTaG9ydCggbW9udGggKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb250aE5hbWUoIG1vbnRoICkuc2xpY2UoIDAsIDMgKTtcbiAgfVxuICBkYXlOYW1lKCBkYXkgKSB7XG4gICAgICByZXR1cm4gd2Vla0RheXNOYW1lc1sgZGF5IF07XG4gIH1cbiAgZGF5TmFtZVNob3J0KCBkYXkgKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXlOYW1lKCBkYXkgKS5zbGljZSggMCwgMiApO1xuICB9XG4gIGlzSG9saWRheSggZGF0ZSApIHtcbiAgICAgcmV0dXJuIGRhdGUuZ2V0RGF5KCkgJSA2ID09PSAwIHx8IGRhdGUuZ2V0RGF5KCkgJSA3ID09PTA7XG4gIH1cbiAgc3RhdGljIHNwbGl0RGF0ZSggZGF0ZSApe1xuICAgIHJldHVybiB7XG4gICAgICBkYXk6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIH07XG4gIH1cbiAgZm9ybWF0KCBkYXRlICl7IC8vZm9ybWF0ICkge1xuICAgIHZhciBzZGF0ZSA9IEN1bHR1cmVQcm92aWRlci5zcGxpdERhdGUoIGRhdGUgKTtcbiAgICAvL2Zvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLmZvcm1hdDtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBbXTtcbiAgICBmb3JtYXR0ZWRWYWx1ZS5wdXNoKCAoIFwiMFwiICsgc2RhdGUubW9udGggKS5zbGljZSggLTIgKSApO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwXCIgKyBzZGF0ZS5tb250aCApLnNsaWNlKCAtMiApICk7XG4gICAgZm9ybWF0dGVkVmFsdWUucHVzaCggKCBcIjAwMDBcIiArIHNkYXRlLm1vbnRoICkuc2xpY2UoIC00ICkgKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWUuam9pbiggXCIvXCIgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdWx0dXJlUHJvdmlkZXI7XG4iLCJjb25zdCBEaXJlY3Rpb24gPSB7XG4gIExlZnQ6IFwibGVmdFwiLFxuICBSaWdodDogXCJyaWdodFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb247XG4iLCJjb25zdCBNb2RlcyA9IHtcbiAgWWVhcmx5OiBcInllYXJseVwiLFxuICBNb250aGx5OiBcIm1vbnRobHlcIixcbiAgWWVhcnM6IFwieWVhcnNyYW5nZVwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlcztcbiJdfQ==
