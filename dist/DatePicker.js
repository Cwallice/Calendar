(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":11}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":12}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":13}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":14}],5:[function(require,module,exports){
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
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],11:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$').core.Object.assign;
},{"../../modules/$":20,"../../modules/es6.object.assign":21}],12:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":20}],13:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":20}],14:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.statics-accept-primitives');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":20,"../../modules/es6.object.statics-accept-primitives":22}],15:[function(require,module,exports){
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
},{"./$":20,"./$.enum-keys":17}],16:[function(require,module,exports){
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
},{"./$":20}],17:[function(require,module,exports){
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
},{"./$":20}],18:[function(require,module,exports){
module.exports = function($){
  $.FW   = false;
  $.path = $.core;
  return $;
};
},{}],19:[function(require,module,exports){
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
},{"./$":20}],20:[function(require,module,exports){
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
},{"./$.fw":18}],21:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":15,"./$.def":16}],22:[function(require,module,exports){
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
},{"./$":20,"./$.def":16,"./$.get-names":19}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

var BottomNavigation = (function (_React$Component) {
  function BottomNavigation() {
    _classCallCheck(this, BottomNavigation);

    _get(Object.getPrototypeOf(BottomNavigation.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(BottomNavigation, _React$Component);

  _createClass(BottomNavigation, [{
    key: "drillDown",
    value: function drillDown(timeframe) {
      var newTimeframe = new Date(+timeframe);
      this.props.drillDown(_infrastructureModes2["default"].Monthly, newTimeframe);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-nav-bottom" },
        _react2["default"].createElement(
          "span",
          { onClick: this.drillDown.bind(this, this.props.selectedDate) },
          this.props.cultureProvider.localize("Selected")
        ),
        _react2["default"].createElement(
          "span",
          { onClick: this.drillDown.bind(this, new Date()) },
          this.props.cultureProvider.localize("Today")
        )
      );
    }
  }]);

  return BottomNavigation;
})(_react2["default"].Component);

exports["default"] = BottomNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":39,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],25:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _YearlyPane = require("./YearlyPane");

var _YearlyPane2 = _interopRequireDefault(_YearlyPane);

var _MonthlyPane = require("./MonthlyPane");

var _MonthlyPane2 = _interopRequireDefault(_MonthlyPane);

var _YearsRangePane = require("./YearsRangePane");

var _YearsRangePane2 = _interopRequireDefault(_YearsRangePane);

var _YearlyNavigation = require("./YearlyNavigation");

var _YearlyNavigation2 = _interopRequireDefault(_YearlyNavigation);

var _MonthlyNavigation = require("./MonthlyNavigation");

var _MonthlyNavigation2 = _interopRequireDefault(_MonthlyNavigation);

var _YearsRangeNavigation = require("./YearsRangeNavigation");

var _YearsRangeNavigation2 = _interopRequireDefault(_YearsRangeNavigation);

var _BottomNavigation = require("./BottomNavigation");

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _infrastructureCultureProvider = require("./infrastructure/CultureProvider");

var _infrastructureCultureProvider2 = _interopRequireDefault(_infrastructureCultureProvider);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

var ModeViews = {};

ModeViews[_infrastructureModes2["default"].Yearly] = [_YearlyNavigation2["default"], _YearlyPane2["default"], _BottomNavigation2["default"]];
ModeViews[_infrastructureModes2["default"].Monthly] = [_MonthlyNavigation2["default"], _MonthlyPane2["default"], _BottomNavigation2["default"]];
ModeViews[_infrastructureModes2["default"].Years] = [_YearsRangeNavigation2["default"], _YearsRangePane2["default"], _BottomNavigation2["default"]];

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
        return _react2["default"].createElement(c, _Object$assign({}, _this.props, {
          key: "c" + i + _this.props.mode,
          style: {}
        }));
      });
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-pane", style: this.props.style },
        components
      );
    }
  }]);

  return ContentPane;
})(_react2["default"].Component);

function trimDate(date) {
  var splitted = _infrastructureCultureProvider2["default"].splitDate(date);
  return new Date(splitted.year, splitted.month, splitted.day);
}

var DatePicker = (function (_React$Component2) {
  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    _get(Object.getPrototypeOf(DatePicker.prototype), "constructor", this).call(this, props);
    this.switchMode = this.switchMode.bind(this);
    this.setTimeframe = this.setTimeframe.bind(this);
    this.setDate = this.setDate.bind(this);
    this.drillDown = this.drillDown.bind(this);
    this._trackOutsideClick = this._trackOutsideClick.bind(this);
    this._handleCloseKey = this._handleCloseKey.bind(this);
    this.state = this.initState(this.props, {});
  }

  _inherits(DatePicker, _React$Component2);

  _createClass(DatePicker, [{
    key: "initState",
    value: function initState(props, state) {
      var newstate = {};
      newstate.mode = props.mode || _infrastructureModes2["default"].Monthly;
      if (props.selectedDate !== state.selectedDate || state.selectedDate === undefined) {
        newstate.selectedDate = trimDate(props.selectedDate || new Date());
        newstate.timeframe = state.selectedDate;
      }
      return newstate;
    }
  }, {
    key: "setTimeframe",
    value: function setTimeframe(newDate) {
      newDate = trimDate(newDate);
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
      date = trimDate(date);
      this.setState({ timeframe: date, mode: _infrastructureModes2["default"].Monthly, selectedDate: date }, (function () {
        this.props.onDateChange(date, this.props.cultureProvider.formatted(date));
      }).bind(this));
    }
  }, {
    key: "drillDown",
    value: function drillDown(mode, timeframe) {
      this.setState({ mode: mode, timeframe: trimDate(timeframe) });
    }
  }, {
    key: "_trackOutsideClick",

    /*private sections*/
    value: function _trackOutsideClick(e) {
      if (!this.props.visible) {
        return;
      }
      var target = e.target;
      var root = _react2["default"].findDOMNode(this);
      while (target) {
        if (target === root) {
          return;
        }
        target = target.parentElement;
      }
      this.props.onHide(e);
    }
  }, {
    key: "_handleCloseKey",
    value: function _handleCloseKey(e) {
      if (e.keyCode === 27) {
        this.props.onHide(e);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.setState(this.initState(newProps, this.state));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("mousedown", this._trackOutsideClick);
      // document.addEventListener( "touchstart", this._trackOutsideClick );
      document.addEventListener("keydown", this._handleCloseKey);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this._trackOutsideClick);
      // document.removeEventListener( "touchstart", this._trackOutsideClick );
      document.removeEventListener("keydown", this._handleCloseKey);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.visible) {
        return null;
      }
      return _react2["default"].createElement(ContentPane, _extends({}, this.props, {
        mode: this.state.mode,
        timeframe: this.state.timeframe,
        selectedDate: this.state.selectedDate,
        cases: ModeViews,
        setTimeframe: this.setTimeframe,
        setDate: this.setDate,
        drillDown: this.drillDown,
        switchMode: this.switchMode }));
    }
  }]);

  return DatePicker;
})(_react2["default"].Component);

DatePicker.defaultProps = {
  cultureProvider: new _infrastructureCultureProvider2["default"](),
  visible: false,
  style: {},
  onHide: function onHide() {}
};

exports.DatePicker = DatePicker;
exports.CultureProvider = _infrastructureCultureProvider2["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./BottomNavigation":24,"./MonthlyNavigation":28,"./MonthlyPane":29,"./YearlyNavigation":33,"./YearlyPane":34,"./YearsRangeNavigation":35,"./YearsRangePane":36,"./infrastructure/CultureProvider":37,"./infrastructure/Modes":39,"babel-runtime/core-js/object/assign":1,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],26:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var today = new Date();
today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

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
    key: "isToday",
    value: function isToday() {
      return +this.props.date === +today;
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
      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])("datepicker-date-cell", {
            "datepicker-today": !this.isSelected() && this.isToday(),
            "datepicker-selected": this.isSelected(),
            "datepicker-weekend": this.props.cultureProvider.isHoliday(this.props.date),
            "datepicker-timeframe-off": this.offTimeframe()
          }), onClick: this.onClick },
        this.props.date.getDate()
      );
    }
  }]);

  return DayCell;
})(_react2["default"].Component);

DayCell.propTypes = {
  date: _react2["default"].PropTypes.object.isRequired,
  setDate: _react2["default"].PropTypes.func.isRequired
};

exports["default"] = DayCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10,"classnames":23}],27:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

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
      this.props.drillDown(_infrastructureModes2["default"].Monthly, timeframe);
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.month === this.props.selectedDate.getMonth() && this.props.selectedDate.getFullYear() === this.props.timeframe.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { onClick: this.onClick, className: (0, _classnames2["default"])("datepicker-month-cell", {
            "datepicker-selected": this.isSelected()
          }) },
        this.props.cultureProvider.monthNameShort(this.props.month)
      );
    }
  }]);

  return MonthCell;
})(_react2["default"].Component);

MonthCell.propTypes = {
  month: _react2["default"].PropTypes.number.isRequired,
  onSelect: _react2["default"].PropTypes.func
};

exports["default"] = MonthCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":39,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10,"classnames":23}],28:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _NavigationPane = require("./NavigationPane");

var _NavigationPane2 = _interopRequireDefault(_NavigationPane);

var _infrastructureDirection = require("./infrastructure/Direction");

var _infrastructureDirection2 = _interopRequireDefault(_infrastructureDirection);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

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
      var dmonth = direction === _infrastructureDirection2["default"].Left ? -1 : 1;
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
      return _react2["default"].createElement(_NavigationPane2["default"], _extends({}, this.props, {
        nextMode: _infrastructureModes2["default"].Yearly,
        title: this.getTitle(),
        onNavigate: this.onNavigate }));
    }
  }]);

  return MonthlyNavigation;
})(_react2["default"].Component);

exports["default"] = MonthlyNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":30,"./infrastructure/Direction":38,"./infrastructure/Modes":39,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],29:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _DayCell = require("./DayCell");

var _DayCell2 = _interopRequireDefault(_DayCell);

var _WeekHeaderCell = require("./WeekHeaderCell");

var _WeekHeaderCell2 = _interopRequireDefault(_WeekHeaderCell);

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
        weekdays.push(_react2["default"].createElement(
          "th",
          { key: col + "mh" },
          _react2["default"].createElement(_WeekHeaderCell2["default"], {
            weekday: this.props.cultureProvider.dayNameShort(col) })
        ));
      }
      return _react2["default"].createElement(
        "tr",
        null,
        weekdays
      );
    }
  }]);

  return MonthlyPaneHeader;
})(_react2["default"].Component);

var MonthlyPaneCell = (function (_React$Component2) {
  function MonthlyPaneCell() {
    _classCallCheck(this, MonthlyPaneCell);

    _get(Object.getPrototypeOf(MonthlyPaneCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(MonthlyPaneCell, _React$Component2);

  _createClass(MonthlyPaneCell, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "td",
        null,
        _react2["default"].createElement(_DayCell2["default"], _extends({}, this.props, { date: this.props.date }))
      );
    }
  }]);

  return MonthlyPaneCell;
})(_react2["default"].Component);

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
        cells.push(_react2["default"].createElement(MonthlyPaneCell, _extends({}, this.props, {
          key: col + this.props.row * DAYS_BLOCK_COLUMNS,
          date: new Date(+this.props.startDate + DAY_TIMESPAN * col) })));
      }
      return _react2["default"].createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return MonthlyPaneRow;
})(_react2["default"].Component);

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
        rows.push(_react2["default"].createElement(MonthlyPaneRow, _extends({}, this.props, {
          key: row,
          row: row,
          startDate: new Date(+startDate + DAY_TIMESPAN * row * DAYS_BLOCK_COLUMNS) })));
      }
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "table",
          null,
          _react2["default"].createElement(MonthlyPaneHeader, this.props),
          rows
        )
      );
    }
  }]);

  return MonthlyPane;
})(_react2["default"].Component);

exports["default"] = MonthlyPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./DayCell":26,"./WeekHeaderCell":31,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],30:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _infrastructureDirectionJs = require("./infrastructure/Direction.js");

var _infrastructureDirectionJs2 = _interopRequireDefault(_infrastructureDirectionJs);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

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
      return _react2["default"].createElement("span", {
        className: (0, _classnames2["default"])("datepicker-nav-button", {
          "arrow-left": this.props.direction === _infrastructureDirectionJs2["default"].Left,
          "arrow-right": this.props.direction === _infrastructureDirectionJs2["default"].Right
        }), onClick: this.onClick });
    }
  }]);

  return NavButton;
})(_react2["default"].Component);

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
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-nav-pane" },
        _react2["default"].createElement(NavButton, _extends({}, this.props, { direction: _infrastructureDirectionJs2["default"].Left, on: true })),
        _react2["default"].createElement(
          "span",
          { className: "datepicker-nav-title", onClick: this.onSwitchMode },
          this.props.title
        ),
        _react2["default"].createElement(NavButton, _extends({}, this.props, { direction: _infrastructureDirectionJs2["default"].Right }))
      );
    }
  }]);

  return NavigationPane;
})(_react2["default"].Component);

exports["default"] = NavigationPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Direction.js":38,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10,"classnames":23}],31:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var WeekHeaderCell = (function (_React$Component) {
  function WeekHeaderCell() {
    _classCallCheck(this, WeekHeaderCell);

    _get(Object.getPrototypeOf(WeekHeaderCell.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(WeekHeaderCell, _React$Component);

  _createClass(WeekHeaderCell, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-weekheader-cell" },
        this.props.weekday.toUpperCase()
      );
    }
  }]);

  return WeekHeaderCell;
})(_react2["default"].Component);

exports["default"] = WeekHeaderCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],32:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

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
      this.props.drillDown(_infrastructureModes2["default"].Yearly, timeframe);
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.year === this.props.selectedDate.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])("datepicker-year-cell", {
            "datepicker-selected": this.isSelected()
          }),
          onClick: this.onClick },
        this.props.year
      );
    }
  }]);

  return YearCell;
})(_react2["default"].Component);

YearCell.propTypes = {
  year: _react2["default"].PropTypes.number.isRequired
};

exports["default"] = YearCell;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./infrastructure/Modes":39,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10,"classnames":23}],33:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _NavigationPane = require("./NavigationPane");

var _NavigationPane2 = _interopRequireDefault(_NavigationPane);

var _infrastructureDirection = require("./infrastructure/Direction");

var _infrastructureDirection2 = _interopRequireDefault(_infrastructureDirection);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

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
      var dyear = direction === _infrastructureDirection2["default"].Left ? -1 : 1;
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
      return _react2["default"].createElement(_NavigationPane2["default"], _extends({}, this.props, {
        nextMode: _infrastructureModes2["default"].Years,
        title: this.getTitle(),
        onNavigate: this.onNavigate }));
    }
  }]);

  return YearlyNavigation;
})(_react2["default"].Component);

exports["default"] = YearlyNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":30,"./infrastructure/Direction":38,"./infrastructure/Modes":39,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],34:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _MonthCell = require("./MonthCell");

var _MonthCell2 = _interopRequireDefault(_MonthCell);

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
      return _react2["default"].createElement(
        "td",
        null,
        _react2["default"].createElement(_MonthCell2["default"], this.props)
      );
    }
  }]);

  return YearlyPaneCell;
})(_react2["default"].Component);

var YearlyPaneRow = (function (_React$Component2) {
  function YearlyPaneRow() {
    _classCallCheck(this, YearlyPaneRow);

    _get(Object.getPrototypeOf(YearlyPaneRow.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(YearlyPaneRow, _React$Component2);

  _createClass(YearlyPaneRow, [{
    key: "buildCell",
    value: function buildCell() {
      return _react2["default"].createElement(YearlyPaneCell, null);
    }
  }, {
    key: "render",
    value: function render() {
      var cells = [];
      for (var col = 0; col < MONTH_BLOCK_COLUMNS; col++) {
        cells.push(_react2["default"].createElement(YearlyPaneCell, _extends({
          key: col + "m" + this.props.startMonth
        }, this.props, {
          month: this.props.startMonth + col })));
      }
      return _react2["default"].createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return YearlyPaneRow;
})(_react2["default"].Component);

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
        rows.push(_react2["default"].createElement(YearlyPaneRow, _extends({}, this.props, {
          key: row + "m",
          startMonth: row * MONTH_BLOCK_COLUMNS })));
      }
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "table",
          null,
          rows
        )
      );
    }
  }]);

  return YearlyPane;
})(_react2["default"].Component);

exports["default"] = YearlyPane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MonthCell":27,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],35:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _NavigationPane = require("./NavigationPane");

var _NavigationPane2 = _interopRequireDefault(_NavigationPane);

var _infrastructureDirection = require("./infrastructure/Direction");

var _infrastructureDirection2 = _interopRequireDefault(_infrastructureDirection);

var _infrastructureModes = require("./infrastructure/Modes");

var _infrastructureModes2 = _interopRequireDefault(_infrastructureModes);

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
      var drange = direction === _infrastructureDirection2["default"].Left ? -1 : 1;
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
      return _react2["default"].createElement(_NavigationPane2["default"], _extends({}, this.props, {
        title: this.getTitle(),
        nextMode: _infrastructureModes2["default"].Monthly,
        onNavigate: this.onNavigate }));
    }
  }]);

  return YearsRangeNavigation;
})(_react2["default"].Component);

exports["default"] = YearsRangeNavigation;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./NavigationPane":30,"./infrastructure/Direction":38,"./infrastructure/Modes":39,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],36:[function(require,module,exports){
(function (global){
"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

var _YearCell = require("./YearCell");

var _YearCell2 = _interopRequireDefault(_YearCell);

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
      return _react2["default"].createElement(
        "td",
        null,
        _react2["default"].createElement(_YearCell2["default"], this.props)
      );
    }
  }]);

  return YearsPaneCell;
})(_react2["default"].Component);

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
        cells.push(_react2["default"].createElement(YearsPaneCell, _extends({}, this.props, {
          key: this.props.fromYear + col,
          year: this.props.fromYear + col
        })));
      }
      return _react2["default"].createElement(
        "tr",
        null,
        cells
      );
    }
  }]);

  return YearsPaneRow;
})(_react2["default"].Component);

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
        rows.push(_react2["default"].createElement(YearsPaneRow, _extends({ key: row + "y",
          fromYear: fromYear + YEARS_BLOCK_SIDE * row
        }, this.props)));
      }
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "table",
          null,
          rows
        )
      );
    }
  }]);

  return YearsRangePane;
})(_react2["default"].Component);

exports["default"] = YearsRangePane;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./YearCell":32,"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6,"babel-runtime/helpers/extends":7,"babel-runtime/helpers/get":8,"babel-runtime/helpers/inherits":9,"babel-runtime/helpers/interop-require-default":10}],37:[function(require,module,exports){
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
    key: "localize",
    value: function localize(key) {
      return key;
    }
  }, {
    key: "formatted",
    value: function formatted(date) {
      //format ) {
      var sdate = CultureProvider.splitDate(date);
      //format = format || this.format;
      var formattedValue = [];
      formattedValue.push(("0" + sdate.month).slice(-2));
      formattedValue.push(("0" + sdate.day).slice(-2));
      formattedValue.push(("0000" + sdate.year).slice(-4));
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

},{"babel-runtime/helpers/class-call-check":5,"babel-runtime/helpers/create-class":6}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
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

},{}]},{},[25])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mdy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcy5qcyIsIm5vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvQm90dG9tTmF2aWdhdGlvbi5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL0RhdGVQaWNrZXIuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9EYXlDZWxsLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvTW9udGhDZWxsLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvTW9udGhseU5hdmlnYXRpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9Nb250aGx5UGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL05hdmlnYXRpb25QYW5lLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvV2Vla0hlYWRlckNlbGwuanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFyQ2VsbC5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL1llYXJseU5hdmlnYXRpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFybHlQYW5lLmpzIiwiL1VzZXJzL2FuZHJld2R5b21pbi9EZXZlbG9wbWVudC9HcmFtbWFybHkvRGF0ZVBpY2tlci9zcmMvWWVhcnNSYW5nZU5hdmlnYXRpb24uanMiLCIvVXNlcnMvYW5kcmV3ZHlvbWluL0RldmVsb3BtZW50L0dyYW1tYXJseS9EYXRlUGlja2VyL3NyYy9ZZWFyc1JhbmdlUGFuZS5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL2luZnJhc3RydWN0dXJlL0N1bHR1cmVQcm92aWRlci5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL2luZnJhc3RydWN0dXJlL0RpcmVjdGlvbi5qcyIsIi9Vc2Vycy9hbmRyZXdkeW9taW4vRGV2ZWxvcG1lbnQvR3JhbW1hcmx5L0RhdGVQaWNrZXIvc3JjL2luZnJhc3RydWN0dXJlL01vZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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akNHLGVBQWU7OztxQkFnRE4sZUFBZTs7Ozs7Ozs7O0FDbkQ5QixJQUFNLFNBQVMsR0FBRztBQUNoQixNQUFJLEVBQUUsTUFBTTtBQUNaLE9BQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQzs7cUJBRWEsU0FBUzs7Ozs7Ozs7O0FDTHhCLElBQU0sS0FBSyxHQUFHO0FBQ1osUUFBTSxFQUFFLFFBQVE7QUFDaEIsU0FBTyxFQUFFLFNBQVM7QUFDbEIsT0FBSyxFQUFFLFlBQVk7Q0FDcEIsQ0FBQzs7cUJBRWEsS0FBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cbiAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGFzc2lnbiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX09iamVjdCRhc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHtcbiAgdmFyIF9hZ2FpbiA9IHRydWU7XG5cbiAgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7XG4gICAgdmFyIG9iamVjdCA9IF94LFxuICAgICAgICBwcm9wZXJ0eSA9IF94MixcbiAgICAgICAgcmVjZWl2ZXIgPSBfeDM7XG4gICAgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDtcbiAgICBfYWdhaW4gPSBmYWxzZTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgICB2YXIgZGVzYyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gICAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfeCA9IHBhcmVudDtcbiAgICAgICAgX3gyID0gcHJvcGVydHk7XG4gICAgICAgIF94MyA9IHJlY2VpdmVyO1xuICAgICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKS5jb3JlLk9iamVjdC5hc3NpZ247IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJC5jcmVhdGUoUCwgRCk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJC5nZXREZXNjKGl0LCBrZXkpO1xufTsiLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGVudW1LZXlzID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2Upe1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICB2YXIgVCA9IE9iamVjdCgkLmFzc2VydERlZmluZWQodGFyZ2V0KSlcbiAgICAsIGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpID0gMTtcbiAgd2hpbGUobCA+IGkpe1xuICAgIHZhciBTICAgICAgPSAkLkVTNU9iamVjdChhcmd1bWVudHNbaSsrXSlcbiAgICAgICwga2V5cyAgID0gZW51bUtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgID0gJC5nXG4gICwgY29yZSAgICAgICA9ICQuY29yZVxuICAsIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cbi8vIHR5cGUgYml0bWFwXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXG4kZGVmLlMgPSA0OyAgLy8gc3RhdGljXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cbiRkZWYuQiA9IDE2OyAvLyBiaW5kXG4kZGVmLlcgPSAzMjsgLy8gd3JhcFxuZnVuY3Rpb24gJGRlZih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiAkZGVmLkdcbiAgICAsIGlzUHJvdG8gID0gdHlwZSAmICRkZWYuUFxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6IHR5cGUgJiAkZGVmLlNcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KS5wcm90b3R5cGVcbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBpZihpc0dsb2JhbCAmJiAhaXNGdW5jdGlvbih0YXJnZXRba2V5XSkpZXhwID0gc291cmNlW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLkIgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICBlbHNlIGlmKHR5cGUgJiAkZGVmLlcgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KSFmdW5jdGlvbihDKXtcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgZXhwLnByb3RvdHlwZSA9IEMucHJvdG90eXBlO1xuICAgIH0ob3V0KTtcbiAgICBlbHNlIGV4cCA9IGlzUHJvdG8gJiYgaXNGdW5jdGlvbihvdXQpID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0XG4gICAgZXhwb3J0c1trZXldID0gZXhwO1xuICAgIGlmKGlzUHJvdG8pKGV4cG9ydHMucHJvdG90eXBlIHx8IChleHBvcnRzLnByb3RvdHlwZSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSAkZGVmOyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldEtleXMoaXQpXG4gICAgLCBnZXREZXNjICAgID0gJC5nZXREZXNjXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZihnZXRTeW1ib2xzKSQuZWFjaC5jYWxsKGdldFN5bWJvbHMoaXQpLCBmdW5jdGlvbihrZXkpe1xuICAgIGlmKGdldERlc2MoaXQsIGtleSkuZW51bWVyYWJsZSlrZXlzLnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCQpe1xuICAkLkZXICAgPSBmYWxzZTtcbiAgJC5wYXRoID0gJC5jb3JlO1xuICByZXR1cm4gJDtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xyXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCB0b1N0cmluZyA9IHt9LnRvU3RyaW5nXHJcbiAgLCBnZXROYW1lcyA9ICQuZ2V0TmFtZXM7XHJcblxyXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXHJcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3dOYW1lcyhpdCl7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBnZXROYW1lcyhpdCk7XHJcbiAgfSBjYXRjaChlKXtcclxuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XHJcbiAgaWYod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcclxuICByZXR1cm4gZ2V0TmFtZXMoJC50b09iamVjdChpdCkpO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpXG4gICwgY29yZSAgID0ge31cbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAsIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHlcbiAgLCBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vclxuICAsIG1heCAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICA9IE1hdGgubWluO1xuLy8gVGhlIGVuZ2luZSB3b3JrcyBmaW5lIHdpdGggZGVzY3JpcHRvcnM/IFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHkuXG52YXIgREVTQyA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDI7IH19KS5hID09IDI7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcbnZhciBoaWRlID0gY3JlYXRlRGVmaW5lcigxKTtcbi8vIDcuMS40IFRvSW50ZWdlclxuZnVuY3Rpb24gdG9JbnRlZ2VyKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59XG5mdW5jdGlvbiBkZXNjKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn1cbmZ1bmN0aW9uIHNpbXBsZVNldChvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufVxuZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe1xuICByZXR1cm4gREVTQyA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgZGVzYyhiaXRtYXAsIHZhbHVlKSk7XG4gIH0gOiBzaW1wbGVTZXQ7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGl0KXtcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFzc2VydERlZmluZWQoaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59XG5cbnZhciAkID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZncnKSh7XG4gIGc6IGdsb2JhbCxcbiAgY29yZTogY29yZSxcbiAgaHRtbDogZ2xvYmFsLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29yZS1qcy1pc29iamVjdFxuICBpc09iamVjdDogICBpc09iamVjdCxcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgdGhhdDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8gNy4xLjQgVG9JbnRlZ2VyXG4gIHRvSW50ZWdlcjogdG9JbnRlZ2VyLFxuICAvLyA3LjEuMTUgVG9MZW5ndGhcbiAgdG9MZW5ndGg6IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuICB9LFxuICB0b0luZGV4OiBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oaXQsIGtleSl7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG4gIH0sXG4gIGNyZWF0ZTogICAgIE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgIE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgREVTQzogICAgICAgREVTQyxcbiAgZGVzYzogICAgICAgZGVzYyxcbiAgZ2V0RGVzYzogICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICBPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGFzc2VydERlZmluZWQ6IGFzc2VydERlZmluZWQsXG4gIC8vIER1bW15LCBmaXggZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmcgaW4gZXM1IG1vZHVsZVxuICBFUzVPYmplY3Q6IE9iamVjdCxcbiAgdG9PYmplY3Q6IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gJC5FUzVPYmplY3QoYXNzZXJ0RGVmaW5lZChpdCkpO1xuICB9LFxuICBoaWRlOiBoaWRlLFxuICBkZWY6IGNyZWF0ZURlZmluZXIoMCksXG4gIHNldDogZ2xvYmFsLlN5bWJvbCA/IHNpbXBsZVNldCA6IGhpZGUsXG4gIGVhY2g6IFtdLmZvckVhY2hcbn0pO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmlmKHR5cGVvZiBfX2UgIT0gJ3VuZGVmaW5lZCcpX19lID0gY29yZTtcbmlmKHR5cGVvZiBfX2cgIT0gJ3VuZGVmaW5lZCcpX19nID0gZ2xvYmFsOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLmFzc2lnbicpfSk7IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZGVmICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxuICAsIGlzT2JqZWN0ID0gJC5pc09iamVjdFxuICAsIHRvT2JqZWN0ID0gJC50b09iamVjdDtcbiQuZWFjaC5jYWxsKCgnZnJlZXplLHNlYWwscHJldmVudEV4dGVuc2lvbnMsaXNGcm96ZW4saXNTZWFsZWQsaXNFeHRlbnNpYmxlLCcgK1xuICAnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGdldFByb3RvdHlwZU9mLGtleXMsZ2V0T3duUHJvcGVydHlOYW1lcycpLnNwbGl0KCcsJylcbiwgZnVuY3Rpb24oS0VZLCBJRCl7XG4gIHZhciBmbiAgICAgPSAoJC5jb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZm9yY2VkID0gMFxuICAgICwgbWV0aG9kID0ge307XG4gIG1ldGhvZFtLRVldID0gSUQgPT0gMCA/IGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMSA/IGZ1bmN0aW9uIHNlYWwoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcbiAgfSA6IElEID09IDIgPyBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xuICB9IDogSUQgPT0gMyA/IGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcbiAgfSA6IElEID09IDQgPyBmdW5jdGlvbiBpc1NlYWxlZChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XG4gIH0gOiBJRCA9PSA1ID8gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogZmFsc2U7XG4gIH0gOiBJRCA9PSA2ID8gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCksIGtleSk7XG4gIH0gOiBJRCA9PSA3ID8gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiBmbihPYmplY3QoJC5hc3NlcnREZWZpbmVkKGl0KSkpO1xuICB9IDogSUQgPT0gOCA/IGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiBmbih0b09iamVjdChpdCkpO1xuICB9IDogcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpLmdldDtcbiAgdHJ5IHtcbiAgICBmbigneicpO1xuICB9IGNhdGNoKGUpe1xuICAgIGZvcmNlZCA9IDE7XG4gIH1cbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBmb3JjZWQsICdPYmplY3QnLCBtZXRob2QpO1xufSk7IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKCdzdHJpbmcnID09PSBhcmdUeXBlIHx8ICdudW1iZXInID09PSBhcmdUeXBlKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgYXJnO1xuXG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuXHRcdFx0fSBlbHNlIGlmICgnb2JqZWN0JyA9PT0gYXJnVHlwZSkge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5zdWJzdHIoMSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCl7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cblxufSgpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICBcInJlYWN0XCI7XG5pbXBvcnQgTW9kZXMgZnJvbSAgXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCI7XG5cbmNsYXNzIEJvdHRvbU5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGRyaWxsRG93biggdGltZWZyYW1lICkge1xuICAgIGxldCBuZXdUaW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RpbWVmcmFtZSApO1xuICAgIHRoaXMucHJvcHMuZHJpbGxEb3duKCBNb2Rlcy5Nb250aGx5LCBuZXdUaW1lZnJhbWUgKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGVwaWNrZXItbmF2LWJvdHRvbVwiPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsgdGhpcy5kcmlsbERvd24uYmluZCggdGhpcywgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUgKSB9PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubG9jYWxpemUoIFwiU2VsZWN0ZWRcIiApIH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsgdGhpcy5kcmlsbERvd24uYmluZCggdGhpcywgbmV3IERhdGUoKSApIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5sb2NhbGl6ZSggXCJUb2RheVwiICkgfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvdHRvbU5hdmlnYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgWWVhcmx5UGFuZSBmcm9tICBcIi4vWWVhcmx5UGFuZVwiO1xuaW1wb3J0IE1vbnRobHlQYW5lIGZyb20gXCIuL01vbnRobHlQYW5lXCI7XG5pbXBvcnQgWWVhcnNSYW5nZVBhbmUgZnJvbSBcIi4vWWVhcnNSYW5nZVBhbmVcIiA7XG5pbXBvcnQgWWVhcmx5TmF2aWdhdGlvbiBmcm9tIFwiLi9ZZWFybHlOYXZpZ2F0aW9uXCI7XG5pbXBvcnQgTW9udGhseU5hdmlnYXRpb24gZnJvbSBcIi4vTW9udGhseU5hdmlnYXRpb25cIjtcbmltcG9ydCBZZWFyc1JhbmdlTmF2aWdhdGlvbiBmcm9tIFwiLi9ZZWFyc1JhbmdlTmF2aWdhdGlvblwiO1xuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24gZnJvbSBcIi4vQm90dG9tTmF2aWdhdGlvblwiO1xuaW1wb3J0IEN1bHR1cmVQcm92aWRlciBmcm9tIFwiLi9pbmZyYXN0cnVjdHVyZS9DdWx0dXJlUHJvdmlkZXJcIjtcbmltcG9ydCBNb2RlcyBmcm9tIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiO1xuXG5jb25zdCBNb2RlVmlld3MgPSB7fTtcblxuTW9kZVZpZXdzWyBNb2Rlcy5ZZWFybHkgXSA9IFsgWWVhcmx5TmF2aWdhdGlvbiwgWWVhcmx5UGFuZSwgQm90dG9tTmF2aWdhdGlvbiBdO1xuTW9kZVZpZXdzWyBNb2Rlcy5Nb250aGx5IF0gPSBbIE1vbnRobHlOYXZpZ2F0aW9uLCBNb250aGx5UGFuZSwgQm90dG9tTmF2aWdhdGlvbiBdO1xuTW9kZVZpZXdzWyBNb2Rlcy5ZZWFycyBdID0gWyBZZWFyc1JhbmdlTmF2aWdhdGlvbiwgWWVhcnNSYW5nZVBhbmUsIEJvdHRvbU5hdmlnYXRpb24gXTtcblxuXG5cbmNsYXNzIENvbnRlbnRQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbXBvbmVudHMgPSB0aGlzLnByb3BzLmNhc2VzWyB0aGlzLnByb3BzLm1vZGUgXS5tYXAoXG4gICAgICAgICAgKGMsIGkpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoIGMsIE9iamVjdC5hc3NpZ24oIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjXCIgKyBpICsgdGhpcy5wcm9wcy5tb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKSApXG4gICAgKTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLXBhbmVcIiBzdHlsZT17IHRoaXMucHJvcHMuc3R5bGUgfT5cbiAgICAgICAgICAgICAgeyBjb21wb25lbnRzIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJpbURhdGUoIGRhdGUgKXtcbiAgdmFyIHNwbGl0dGVkID0gQ3VsdHVyZVByb3ZpZGVyLnNwbGl0RGF0ZSggZGF0ZSApO1xuICByZXR1cm4gbmV3IERhdGUoIHNwbGl0dGVkLnllYXIsIHNwbGl0dGVkLm1vbnRoLCBzcGxpdHRlZC5kYXkgKTtcbn1cblxuXG5jbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5zd2l0Y2hNb2RlID0gdGhpcy5zd2l0Y2hNb2RlLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLnNldFRpbWVmcmFtZSA9IHRoaXMuc2V0VGltZWZyYW1lLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLnNldERhdGUgPSB0aGlzLnNldERhdGUuYmluZCggdGhpcyApO1xuICAgIHRoaXMuZHJpbGxEb3duID0gdGhpcy5kcmlsbERvd24uYmluZCggdGhpcyApO1xuICAgIHRoaXMuX3RyYWNrT3V0c2lkZUNsaWNrID0gdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2suYmluZCggdGhpcyApO1xuICAgIHRoaXMuX2hhbmRsZUNsb3NlS2V5ID0gdGhpcy5faGFuZGxlQ2xvc2VLZXkuYmluZCggdGhpcyApO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRTdGF0ZSggdGhpcy5wcm9wcywge30gKTtcbiAgfVxuICBpbml0U3RhdGUoIHByb3BzLCBzdGF0ZSApe1xuICAgIHZhciBuZXdzdGF0ZSA9IHt9O1xuICAgIG5ld3N0YXRlLm1vZGUgPSBwcm9wcy5tb2RlIHx8IE1vZGVzLk1vbnRobHk7XG4gICAgaWYoIHByb3BzLnNlbGVjdGVkRGF0ZSAhPT0gc3RhdGUuc2VsZWN0ZWREYXRlIHx8IHN0YXRlLnNlbGVjdGVkRGF0ZSA9PT0gdW5kZWZpbmVkICl7XG4gICAgICBuZXdzdGF0ZS5zZWxlY3RlZERhdGUgPSB0cmltRGF0ZSggcHJvcHMuc2VsZWN0ZWREYXRlIHx8IG5ldyBEYXRlKCkgKTtcbiAgICAgIG5ld3N0YXRlLnRpbWVmcmFtZSA9IHN0YXRlLnNlbGVjdGVkRGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld3N0YXRlO1xuICB9XG4gIHNldFRpbWVmcmFtZSggbmV3RGF0ZSApIHtcbiAgICBuZXdEYXRlID0gdHJpbURhdGUoIG5ld0RhdGUgKTtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHRpbWVmcmFtZTogbmV3RGF0ZSB9ICk7XG4gIH1cbiAgc3dpdGNoTW9kZSggbW9kZSApIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IG1vZGU6IG1vZGUgfSApO1xuICB9XG4gIHNldERhdGUoIGRhdGUgKXtcbiAgICBkYXRlID0gdHJpbURhdGUoIGRhdGUgKTtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHRpbWVmcmFtZTogZGF0ZSAsIG1vZGU6IE1vZGVzLk1vbnRobHksIHNlbGVjdGVkRGF0ZTogZGF0ZSB9LCBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5wcm9wcy5vbkRhdGVDaGFuZ2UoIGRhdGUsIHRoaXMucHJvcHMuY3VsdHVyZVByb3ZpZGVyLmZvcm1hdHRlZCggZGF0ZSApICk7XG4gICAgfS5iaW5kKCB0aGlzICkgKTtcbiAgfVxuICBkcmlsbERvd24oIG1vZGUsIHRpbWVmcmFtZSApe1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgbW9kZTogbW9kZSwgdGltZWZyYW1lOiB0cmltRGF0ZSggdGltZWZyYW1lICkgfSApO1xuICB9XG4gIC8qcHJpdmF0ZSBzZWN0aW9ucyovXG4gIF90cmFja091dHNpZGVDbGljayggZSApIHtcbiAgICBpZiAoICF0aGlzLnByb3BzLnZpc2libGUgKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGxldCByb290ID0gUmVhY3QuZmluZERPTU5vZGUoIHRoaXMgKTtcbiAgICB3aGlsZSggdGFyZ2V0ICl7XG4gICAgICBpZiggdGFyZ2V0ID09PSByb290ICl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25IaWRlKCBlICk7XG4gIH1cbiAgX2hhbmRsZUNsb3NlS2V5KCBlICl7XG4gICAgaWYgKCBlLmtleUNvZGU9PT0yNyApe1xuICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoIGUgKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyggbmV3UHJvcHMgKXtcbiAgICB0aGlzLnNldFN0YXRlKCB0aGlzLmluaXRTdGF0ZSggbmV3UHJvcHMsIHRoaXMuc3RhdGUgKSApO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJtb3VzZWRvd25cIiwgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgKTtcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcInRvdWNoc3RhcnRcIiwgdGhpcy5fdHJhY2tPdXRzaWRlQ2xpY2sgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcImtleWRvd25cIiwgdGhpcy5faGFuZGxlQ2xvc2VLZXkgKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIm1vdXNlZG93blwiLCB0aGlzLl90cmFja091dHNpZGVDbGljayApO1xuICAgIC8vIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwidG91Y2hzdGFydFwiLCB0aGlzLl90cmFja091dHNpZGVDbGljayApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVDbG9zZUtleSApO1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmKCAhdGhpcy5wcm9wcy52aXNpYmxlICl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIDxDb250ZW50UGFuZSB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgbW9kZT17IHRoaXMuc3RhdGUubW9kZSB9XG4gICAgICAgICAgICAgIHRpbWVmcmFtZSA9IHsgdGhpcy5zdGF0ZS50aW1lZnJhbWUgfVxuICAgICAgICAgICAgICBzZWxlY3RlZERhdGU9eyB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZSB9XG4gICAgICAgICAgICAgIGNhc2VzPXsgTW9kZVZpZXdzIH1cbiAgICAgICAgICAgICAgc2V0VGltZWZyYW1lPXsgdGhpcy5zZXRUaW1lZnJhbWUgfVxuICAgICAgICAgICAgICBzZXREYXRlPXsgdGhpcy5zZXREYXRlIH1cbiAgICAgICAgICAgICAgZHJpbGxEb3duPXsgdGhpcy5kcmlsbERvd24gfVxuICAgICAgICAgICAgICBzd2l0Y2hNb2RlID17IHRoaXMuc3dpdGNoTW9kZSB9Lz47XG4gIH1cbn1cblxuRGF0ZVBpY2tlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1bHR1cmVQcm92aWRlcjogbmV3IEN1bHR1cmVQcm92aWRlcigpLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAgc3R5bGU6IHt9LFxuICBvbkhpZGU6IGZ1bmN0aW9uKCl7fVxufTtcblxuZXhwb3J0IHsgRGF0ZVBpY2tlciwgQ3VsdHVyZVByb3ZpZGVyIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG50b2RheSA9IG5ldyBEYXRlKCB0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgKTtcblxuY2xhc3MgRGF5Q2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKCB0aGlzICk7XG4gIH1cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gK3RoaXMucHJvcHMuZGF0ZSA9PT0gK3RoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICB9XG4gIGlzVG9kYXkoKSB7XG4gICAgcmV0dXJuICArdGhpcy5wcm9wcy5kYXRlID09PSArdG9kYXk7XG4gIH1cbiAgb2ZmVGltZWZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKSAhPT0gdGhpcy5wcm9wcy50aW1lZnJhbWUuZ2V0TW9udGgoKTtcbiAgfVxuICBvbkNsaWNrKCl7XG4gICAgdGhpcy5wcm9wcy5zZXREYXRlKCB0aGlzLnByb3BzLmRhdGUgKTtcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyBjbiggXCJkYXRlcGlja2VyLWRhdGUtY2VsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVwaWNrZXItdG9kYXlcIjogIXRoaXMuaXNTZWxlY3RlZCgpICYmIHRoaXMuaXNUb2RheSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXNlbGVjdGVkXCI6IHRoaXMuaXNTZWxlY3RlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXdlZWtlbmRcIjogdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIuaXNIb2xpZGF5KCB0aGlzLnByb3BzLmRhdGUgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci10aW1lZnJhbWUtb2ZmXCI6IHRoaXMub2ZmVGltZWZyYW1lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICkgfSBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0ZS5nZXREYXRlKCkgfVxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5EYXlDZWxsLnByb3BUeXBlcyA9IHtcbiAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXREYXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXlDZWxsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGVzIGZyb20gXCIuL2luZnJhc3RydWN0dXJlL01vZGVzXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY2xhc3MgTW9udGhDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdmFyIHRpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICB0aW1lZnJhbWUuc2V0TW9udGgoIHRoaXMucHJvcHMubW9udGggKTtcbiAgICB0aGlzLnByb3BzLmRyaWxsRG93biggTW9kZXMuTW9udGhseSwgdGltZWZyYW1lICk7XG4gIH1cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb250aCA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAmJlxuICAgICB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0gY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci1tb250aC1jZWxsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlcGlja2VyLXNlbGVjdGVkXCI6IHRoaXMuaXNTZWxlY3RlZCgpXG4gICAgICAgICAgICAgICAgfSApIH0+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5tb250aE5hbWVTaG9ydCggdGhpcy5wcm9wcy5tb250aCApIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuTW9udGhDZWxsLnByb3BUeXBlcyA9IHtcbiAgbW9udGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25TZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb250aENlbGw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvblBhbmUgZnJvbSBcIi4vTmF2aWdhdGlvblBhbmVcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvRGlyZWN0aW9uXCI7XG5pbXBvcnQgTW9kZXMgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIjtcblxuY2xhc3MgTW9udGhseU5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25OYXZpZ2F0ZSA9IHRoaXMub25OYXZpZ2F0ZS5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25OYXZpZ2F0ZSggZGlyZWN0aW9uICkge1xuICAgIGxldCBkbW9udGggPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gLTEgOiAxO1xuICAgIGxldCBuZXd0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgbmV3dGltZWZyYW1lLnNldE1vbnRoKCBuZXd0aW1lZnJhbWUuZ2V0TW9udGgoKSArIGRtb250aCApO1xuICAgIHRoaXMucHJvcHMuc2V0VGltZWZyYW1lKCBuZXd0aW1lZnJhbWUgKTtcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jdWx0dXJlUHJvdmlkZXIubW9udGhOYW1lKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRNb250aCgpICkgKyBcIiBcIiArICB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNb2RlID0geyBNb2Rlcy5ZZWFybHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXsgdGhpcy5vbk5hdmlnYXRlIH0vPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb250aGx5TmF2aWdhdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXlDZWxsIGZyb20gXCIuL0RheUNlbGxcIjtcbmltcG9ydCBXZWVrSGVhZGVyQ2VsbCBmcm9tIFwiLi9XZWVrSGVhZGVyQ2VsbFwiO1xuY29uc3QgREFZU19CTE9DS19DT0xVTU5TID0gNztcbmNvbnN0IERBWVNfQkxPQ0tfUk9XUyA9IDY7XG5jb25zdCBEQVlfVElNRVNQQU4gPSAyNCAqIDM2MDAgKiAxMDAwO1xuXG5jbGFzcyBNb250aGx5UGFuZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB3ZWVrZGF5cyA9IFtdO1xuICAgIGZvciggbGV0IGNvbD0wOyBjb2w8REFZU19CTE9DS19DT0xVTU5TOyBjb2wrKyApe1xuICAgICAgd2Vla2RheXMucHVzaCggPHRoIGtleT17IGNvbCtcIm1oXCIgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8V2Vla0hlYWRlckNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtkYXk9eyB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci5kYXlOYW1lU2hvcnQoIGNvbCApIH0vPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPiApO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgIHsgd2Vla2RheXMgfVxuICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8dGQ+XG4gICAgICAgICAgICAgIDxEYXlDZWxsIHsuLi50aGlzLnByb3BzfSBkYXRlPXsgdGhpcy5wcm9wcy5kYXRlIH0vPlxuICAgICAgICAgICAgPC90ZD47XG4gIH1cbn1cblxuY2xhc3MgTW9udGhseVBhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICAgIHN1cGVyKCBwcm9wcyApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgY2VsbHMgPSBbXTtcbiAgICBmb3IoIGxldCBjb2w9MDsgY29sPERBWVNfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIGNlbGxzLnB1c2goIDxNb250aGx5UGFuZUNlbGxcbiAgICAgICAgey4uLnRoaXMucHJvcHMgfVxuICAgICAgICAga2V5PXsgY29sICsgdGhpcy5wcm9wcy5yb3cgKiBEQVlTX0JMT0NLX0NPTFVNTlMgfVxuICAgICAgICAgZGF0ZT17IG5ldyBEYXRlKCArdGhpcy5wcm9wcy5zdGFydERhdGUgKyBEQVlfVElNRVNQQU4gKiBjb2wgKX0vPiApO1xuICAgIH1cbiAgICByZXR1cm4gPHRyPlxuICAgICAgICAgICAgICB7IGNlbGxzIH1cbiAgICAgICAgICAgIDwvdHI+O1xuICB9XG59XG5cbmNsYXNzIE1vbnRobHlQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBnZXRTdGFydERhdGUoKXtcbiAgICBsZXQgbW9udGhTdGFydCA9IG5ldyBEYXRlKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGltZWZyYW1lLmdldE1vbnRoKCkgKTtcbiAgICBsZXQgc3RhcnREYXRlPW1vbnRoU3RhcnQ7XG4gICAgbGV0IHN0YXJ0ZGlmZiA9IG1vbnRoU3RhcnQuZ2V0RGF5KCkgLSB0aGlzLnByb3BzLmN1bHR1cmVQcm92aWRlci53ZWVrRGF5U3RhcnQ7XG5cbiAgICBpZiggc3RhcnRkaWZmPjAgKXtcbiAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCBtb250aFN0YXJ0IC0gREFZX1RJTUVTUEFOICogc3RhcnRkaWZmICk7XG4gICAgfVxuICAgIHJldHVybiBzdGFydERhdGU7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IHRoaXMuZ2V0U3RhcnREYXRlKCk7XG4gICAgZm9yKCBsZXQgcm93PTA7IHJvdzxEQVlTX0JMT0NLX1JPV1M7IHJvdysrICl7XG4gICAgICByb3dzLnB1c2goIDxNb250aGx5UGFuZVJvd1xuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAga2V5PXsgcm93IH1cbiAgICAgICAgICAgICAgICAgICAgcm93PXsgcm93IH1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXsgbmV3IERhdGUoICtzdGFydERhdGUgKyBEQVlfVElNRVNQQU4gKiByb3cgKiBEQVlTX0JMT0NLX0NPTFVNTlMgKSB9IC8+ICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPE1vbnRobHlQYW5lSGVhZGVyIHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9udGhseVBhbmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGlyZWN0aW9uIGZyb21cIi4vaW5mcmFzdHJ1Y3R1cmUvRGlyZWN0aW9uLmpzXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY2xhc3MgTmF2QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5vbk5hdmlnYXRlKCB0aGlzLnByb3BzLmRpcmVjdGlvbiApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY24oIFwiZGF0ZXBpY2tlci1uYXYtYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJhcnJvdy1sZWZ0XCI6IHRoaXMucHJvcHMuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcnJvdy1yaWdodFwiOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlJpZ2h0XG4gICAgICAgICAgICAgICAgICB9ICkgfSBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0+PC9zcGFuPjtcbiAgfVxufVxuXG5jbGFzcyBOYXZpZ2F0aW9uUGFuZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vblN3aXRjaE1vZGUgPSB0aGlzLm9uU3dpdGNoTW9kZS5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25Td2l0Y2hNb2RlKCkge1xuICAgIHRoaXMucHJvcHMuc3dpdGNoTW9kZSggdGhpcy5wcm9wcy5uZXh0TW9kZSApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLW5hdi1wYW5lXCI+XG4gICAgICAgICAgICAgIDxOYXZCdXR0b24gey4uLnRoaXMucHJvcHN9IGRpcmVjdGlvbj17IERpcmVjdGlvbi5MZWZ0IH0gb24vPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLW5hdi10aXRsZVwiIG9uQ2xpY2s9eyB0aGlzLm9uU3dpdGNoTW9kZSB9PnsgdGhpcy5wcm9wcy50aXRsZSB9PC9zcGFuPlxuICAgICAgICAgICAgICA8TmF2QnV0dG9uIHsuLi50aGlzLnByb3BzfSBkaXJlY3Rpb249eyBEaXJlY3Rpb24uUmlnaHQgfS8+XG4gICAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblBhbmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFdlZWtIZWFkZXJDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKXtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlcGlja2VyLXdlZWtoZWFkZXItY2VsbFwiPnsgdGhpcy5wcm9wcy53ZWVrZGF5LnRvVXBwZXJDYXNlKCkgfTwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWVrSGVhZGVyQ2VsbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RlcyBmcm9tIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5jbGFzcyBZZWFyQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbkNsaWNrKCkge1xuICAgIHZhciB0aW1lZnJhbWUgPSBuZXcgRGF0ZSggK3RoaXMucHJvcHMudGltZWZyYW1lICk7XG4gICAgdGltZWZyYW1lLnNldEZ1bGxZZWFyKCB0aGlzLnByb3BzLnllYXIgKTtcbiAgICB0aGlzLnByb3BzLmRyaWxsRG93biggTW9kZXMuWWVhcmx5LCB0aW1lZnJhbWUgKTtcbiAgfVxuICBpc1NlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnllYXIgPT09IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cbiAgcmVuZGVyICgpe1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17IGNuKCBcImRhdGVwaWNrZXIteWVhci1jZWxsXCIsIHtcbiAgICAgICAgICAgICAgICAgIFwiZGF0ZXBpY2tlci1zZWxlY3RlZFwiOiB0aGlzLmlzU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgIH0gKSB9XG4gICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH0+XG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy55ZWFyIH1cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuWWVhckNlbGwucHJvcFR5cGVzID0ge1xuICAgIHllYXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgWWVhckNlbGw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvblBhbmUgZnJvbSBcIi4vTmF2aWdhdGlvblBhbmVcIjtcbmltcG9ydCBEaXJlY3Rpb24gZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvRGlyZWN0aW9uXCI7XG5pbXBvcnQgTW9kZXMgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvTW9kZXNcIjtcbmNsYXNzIFllYXJseU5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIHRoaXMub25OYXZpZ2F0ZSA9IHRoaXMub25OYXZpZ2F0ZS5iaW5kKCB0aGlzICk7XG4gIH1cbiAgb25OYXZpZ2F0ZSggZGlyZWN0aW9uICkge1xuICAgIGxldCBkeWVhciA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQgPyAtMSA6IDE7XG4gICAgbGV0IG5ld3RpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICBuZXd0aW1lZnJhbWUuc2V0RnVsbFllYXIoIG5ld3RpbWVmcmFtZS5nZXRGdWxsWWVhcigpICsgZHllYXIgKTtcbiAgICB0aGlzLnByb3BzLnNldFRpbWVmcmFtZSggbmV3dGltZWZyYW1lICk7XG4gIH1cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGltZWZyYW1lLmdldEZ1bGxZZWFyKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8TmF2aWdhdGlvblBhbmUgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9kZT17IE1vZGVzLlllYXJzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9eyB0aGlzLm9uTmF2aWdhdGUgfS8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJseU5hdmlnYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9udGhDZWxsIGZyb20gXCIuL01vbnRoQ2VsbFwiO1xuY29uc3QgTU9OVEhfQkxPQ0tfQ09MVU1OUyA9IDM7XG5jb25zdCBNT05USF9CTE9DS19ST1dTID0gNDtcblxuY2xhc3MgWWVhcmx5UGFuZUNlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPHRkPlxuICAgICAgICAgICAgICA8TW9udGhDZWxsIHsgLi4udGhpcy5wcm9wcyB9Lz5cbiAgICAgICAgICAgIDwvdGQ+O1xuICB9XG59XG5cbmNsYXNzIFllYXJseVBhbmVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGJ1aWxkQ2VsbCgpIHtcbiAgICByZXR1cm4gPFllYXJseVBhbmVDZWxsLz47XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjZWxscyA9IFtdO1xuICAgIGZvciggbGV0IGNvbD0wOyBjb2w8TU9OVEhfQkxPQ0tfQ09MVU1OUzsgY29sKysgKXtcbiAgICAgIGNlbGxzLnB1c2goIDxZZWFybHlQYW5lQ2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsgY29sK1wibVwiK3RoaXMucHJvcHMuc3RhcnRNb250aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoPSB7IHRoaXMucHJvcHMuc3RhcnRNb250aCArIGNvbCB9Lz4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgeyBjZWxscyB9XG4gICAgICAgICAgICA8L3RyPjtcbiAgfVxufVxuXG5jbGFzcyBZZWFybHlQYW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBmb3IoIGxldCByb3c9MDsgcm93PE1PTlRIX0JMT0NLX1JPV1M7IHJvdysrICl7XG4gICAgICByb3dzLnB1c2goIDxZZWFybHlQYW5lUm93XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IHJvdyArIFwibVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TW9udGg9IHsgcm93ICogTU9OVEhfQkxPQ0tfQ09MVU1OUyB9Lz4gICk7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgeyByb3dzIH1cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWWVhcmx5UGFuZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZSBmcm9tIFwiLi9OYXZpZ2F0aW9uUGFuZVwiO1xuaW1wb3J0IERpcmVjdGlvbiBmcm9tIFwiLi9pbmZyYXN0cnVjdHVyZS9EaXJlY3Rpb25cIjtcbmltcG9ydCBNb2RlcyBmcm9tIFwiLi9pbmZyYXN0cnVjdHVyZS9Nb2Rlc1wiO1xuXG5jbGFzcyBZZWFyc1JhbmdlTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IoIHByb3BzICl7XG4gICAgc3VwZXIoIHByb3BzICk7XG4gICAgdGhpcy5vbk5hdmlnYXRlID0gdGhpcy5vbk5hdmlnYXRlLmJpbmQoIHRoaXMgKTtcbiAgfVxuICBvbk5hdmlnYXRlKCBkaXJlY3Rpb24gKSB7XG4gICAgbGV0IGRyYW5nZSA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQgPyAtMSA6IDE7XG4gICAgdmFyIG5ld3RpbWVmcmFtZSA9IG5ldyBEYXRlKCArdGhpcy5wcm9wcy50aW1lZnJhbWUgKTtcbiAgICBuZXd0aW1lZnJhbWUuc2V0RnVsbFllYXIoIG5ld3RpbWVmcmFtZS5nZXRGdWxsWWVhcigpICsgZHJhbmdlKjE2ICk7XG4gICAgdGhpcy5wcm9wcy5zZXRUaW1lZnJhbWUoIG5ld3RpbWVmcmFtZSApO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIGxldCBzdGFydCA9ICggKCB0aGlzLnByb3BzLnRpbWVmcmFtZS5nZXRGdWxsWWVhcigpLzE2ICl8MCApICogMTY7XG4gICAgcmV0dXJuIHN0YXJ0ICsgXCIgLSBcIiArICggc3RhcnQgKyAxNiApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPE5hdmlnYXRpb25QYW5lIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5nZXRUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0TW9kZT17IE1vZGVzLk1vbnRobHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTmF2aWdhdGU9eyB0aGlzLm9uTmF2aWdhdGUgfS8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJzUmFuZ2VOYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFllYXJDZWxsIGZyb20gXCIuL1llYXJDZWxsXCI7XG5jb25zdCBZRUFSU19CTE9DS19TSURFID0gNDtcbmNvbnN0IFlFQVJTX0JMT0NLX1NJWkUgPSBZRUFSU19CTE9DS19TSURFICogWUVBUlNfQkxPQ0tfU0lERTtcblxuY2xhc3MgWWVhcnNQYW5lQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8dGQ+XG4gICAgICAgICAgICAgIDxZZWFyQ2VsbCB7Li4udGhpcy5wcm9wcyB9Lz5cbiAgICAgICAgICAgIDwvdGQ+O1xuICB9XG59XG5cbmNsYXNzIFllYXJzUGFuZVJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBsZXQgY2VsbHMgPSBbXTtcbiAgICAgIGZvciggbGV0IGNvbD0wOyBjb2w8WUVBUlNfQkxPQ0tfU0lERTsgY29sKysgKXtcbiAgICAgICAgY2VsbHMucHVzaCggPFllYXJzUGFuZUNlbGwgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17IHRoaXMucHJvcHMuZnJvbVllYXIgKyBjb2wgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXsgdGhpcy5wcm9wcy5mcm9tWWVhciArIGNvbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDx0cj5cbiAgICAgICAgICAgICAgICB7IGNlbGxzIH1cbiAgICAgICAgICAgIDwvdHI+O1xuICAgIH1cbn1cblxuY2xhc3MgWWVhcnNSYW5nZVBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcblxuICAgIGxldCBmcm9tWWVhciA9ICggKHRoaXMucHJvcHMudGltZWZyYW1lLmdldEZ1bGxZZWFyKCkvWUVBUlNfQkxPQ0tfU0laRSl8MCApICogWUVBUlNfQkxPQ0tfU0laRTtcbiAgICBmb3IoIGxldCByb3c9MDsgcm93PFlFQVJTX0JMT0NLX1NJREU7IHJvdysrICl7XG4gICAgICByb3dzLnB1c2goIDxZZWFyc1BhbmVSb3cgIGtleT17IHJvdytcInlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21ZZWFyPXsgZnJvbVllYXIgKyBZRUFSU19CTE9DS19TSURFICogcm93IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9Lz4gKTtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICB7IHJvd3MgfVxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZZWFyc1JhbmdlUGFuZTtcbiIsImNvbnN0IHdlZWtEYXlzTmFtZXMgPSBbIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiBdO1xuY29uc3QgbW9udGhOYW1lcyA9IFsgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiIF07XG5cbmNsYXNzIEN1bHR1cmVQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKCBsb2NhbGU9XCJlbi11c1wiLCBmb3JtYXQ9XCJkZC9tbS95eXl5XCIgKXtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB0aGlzLndlZWtEYXlTdGFydCA9IDA7XG4gIH1cbiAgZ2V0V2Vla0RheXNOYW1lcygpIHtcbiAgICAgIHJldHVybiB3ZWVrRGF5c05hbWVzO1xuICB9XG4gIGdldE1vbnRoTmFtZXMoKSB7XG4gICAgICByZXR1cm4gbW9udGhOYW1lcztcbiAgfVxuICBtb250aE5hbWUoIG1vbnRoICkge1xuICAgICAgcmV0dXJuIG1vbnRoTmFtZXNbIG1vbnRoIF07XG4gIH1cbiAgbW9udGhOYW1lU2hvcnQoIG1vbnRoICkge1xuICAgICAgcmV0dXJuIHRoaXMubW9udGhOYW1lKCBtb250aCApLnNsaWNlKCAwLCAzICk7XG4gIH1cbiAgZGF5TmFtZSggZGF5ICkge1xuICAgICAgcmV0dXJuIHdlZWtEYXlzTmFtZXNbIGRheSBdO1xuICB9XG4gIGRheU5hbWVTaG9ydCggZGF5ICkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF5TmFtZSggZGF5ICkuc2xpY2UoIDAsIDIgKTtcbiAgfVxuICBpc0hvbGlkYXkoIGRhdGUgKSB7XG4gICAgIHJldHVybiBkYXRlLmdldERheSgpICUgNiA9PT0gMCB8fCBkYXRlLmdldERheSgpICUgNyA9PT0wO1xuICB9XG4gIHN0YXRpYyBzcGxpdERhdGUoIGRhdGUgKXtcbiAgICByZXR1cm4ge1xuICAgICAgZGF5OiBkYXRlLmdldERhdGUoKSxcbiAgICAgIG1vbnRoOiBkYXRlLmdldE1vbnRoKCksXG4gICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICB9O1xuICB9XG4gIGxvY2FsaXplKCBrZXkgKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuICBmb3JtYXR0ZWQoIGRhdGUgKXsgLy9mb3JtYXQgKSB7XG4gICAgdmFyIHNkYXRlID0gQ3VsdHVyZVByb3ZpZGVyLnNwbGl0RGF0ZSggZGF0ZSApO1xuICAgIC8vZm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMuZm9ybWF0O1xuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IFtdO1xuICAgIGZvcm1hdHRlZFZhbHVlLnB1c2goICggXCIwXCIgKyBzZGF0ZS5tb250aCApLnNsaWNlKCAtMiApICk7XG4gICAgZm9ybWF0dGVkVmFsdWUucHVzaCggKCBcIjBcIiArIHNkYXRlLmRheSApLnNsaWNlKCAtMiApICk7XG4gICAgZm9ybWF0dGVkVmFsdWUucHVzaCggKCBcIjAwMDBcIiArIHNkYXRlLnllYXIgKS5zbGljZSggLTQgKSApO1xuICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZS5qb2luKCBcIi9cIiApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1bHR1cmVQcm92aWRlcjtcbiIsImNvbnN0IERpcmVjdGlvbiA9IHtcbiAgTGVmdDogXCJsZWZ0XCIsXG4gIFJpZ2h0OiBcInJpZ2h0XCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvbjtcbiIsImNvbnN0IE1vZGVzID0ge1xuICBZZWFybHk6IFwieWVhcmx5XCIsXG4gIE1vbnRobHk6IFwibW9udGhseVwiLFxuICBZZWFyczogXCJ5ZWFyc3JhbmdlXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVzO1xuIl19
