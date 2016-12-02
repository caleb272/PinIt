/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = getUser;
	exports.getShowAddPost = getShowAddPost;

	var _AppActions = __webpack_require__(12);

	var initialState = {
	  user: null
	};

	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _AppActions.SET_USER:
	      return {
	        user: action.user
	      };
	    default:
	      return state;
	  }
	};

	function getUser(state) {
	  return state.app.user;
	}

	function getShowAddPost() {
	  return false;
	}

	exports.default = AppReducer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _PinList = __webpack_require__(38);

	var _PinList2 = _interopRequireDefault(_PinList);

	var _PinActions = __webpack_require__(6);

	var _PinReducer = __webpack_require__(14);

	var _AppReducer = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pin = function (_Component) {
	  _inherits(Pin, _Component);

	  function Pin(props, context) {
	    _classCallCheck(this, Pin);

	    var _this = _possibleConstructorReturn(this, (Pin.__proto__ || Object.getPrototypeOf(Pin)).call(this, props, context));

	    _this.likePin = _this.likePin.bind(_this);
	    _this.deletePin = _this.deletePin.bind(_this);
	    return _this;
	  }

	  _createClass(Pin, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PinActions.requestGetPins)());
	    }
	  }, {
	    key: 'likePin',
	    value: function likePin(injectedPin) {
	      if (!this.props.user) {
	        return;
	      }

	      var pin = injectedPin.pinDBObject;
	      var userID = this.props.user._id;
	      if (!this.hasUserLikedPin(pin, userID)) {
	        pin.likes.push(userID);
	      } else {
	        pin.likes = pin.likes.filter(function (currentUserID) {
	          return currentUserID !== userID;
	        });
	      }

	      this.props.dispatch((0, _PinActions.requestUpdatePin)(injectedPin));
	    }
	  }, {
	    key: 'hasUserLikedPin',
	    value: function hasUserLikedPin(pin, userID) {
	      return pin.likes.indexOf(userID) !== -1;
	    }
	  }, {
	    key: 'deletePin',
	    value: function deletePin(pin) {
	      this.props.dispatch((0, _PinActions.requestDeletePin)(pin));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx(_PinList2.default, {
	        pins: this.props.pins,
	        likePin: this.likePin,
	        deletePin: !this.context.router.isActive('/', true) ? this.deletePin : null,
	        userID: this.props.user ? this.props.user._id : ''
	      });
	    }
	  }]);

	  return Pin;
	}(_react.Component);

	Pin.need = [function () {
	  return (0, _PinActions.requestGetPins)();
	}];

	Pin.contextTypes = {
	  router: _react.PropTypes.object.isRequired
	};

	function mapStateToProps(state, props) {
	  var userRouteID = props.params.id;
	  var pins = userRouteID ? (0, _PinReducer.getUsersPins)(state, userRouteID) : (0, _PinReducer.getPins)(state);
	  return {
	    user: (0, _AppReducer.getUser)(state),
	    pins: pins
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Pin);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_PIN = exports.UPDATE_PIN = exports.ADD_PIN = exports.SET_PINS = undefined;
	exports.requestGetPins = requestGetPins;
	exports.requestCreatePin = requestCreatePin;
	exports.requestUpdatePin = requestUpdatePin;
	exports.requestDeletePin = requestDeletePin;
	exports.setPins = setPins;
	exports.addPin = addPin;
	exports.updatePin = updatePin;
	exports.deletePin = deletePin;

	var _apiCaller = __webpack_require__(15);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SET_PINS = exports.SET_PINS = 'SET_PINS';
	var ADD_PIN = exports.ADD_PIN = 'ADD_PIN';
	var UPDATE_PIN = exports.UPDATE_PIN = 'UPDATE_PIN';
	var DELETE_PIN = exports.DELETE_PIN = 'DELETE_PIN';

	function requestGetPins() {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('pin').then(function (response) {
	      return dispatch(setPins(response.data));
	    });
	  };
	}

	function requestCreatePin(image, description) {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('pin', 'POST', { image: image, description: description }).then(function (response) {
	      return response.data ? dispatch(addPin(response.data)) : response;
	    });
	  };
	}

	function requestUpdatePin(pin) {
	  return function dispatchedRequest(dispatch) {
	    dispatch(updatePin(pin));
	    return (0, _apiCaller2.default)('pin', 'PUT', pin.pinDBObject);
	  };
	}

	function requestDeletePin(pin) {
	  return function dispatchedRequest(dispatch) {
	    dispatch(deletePin(pin));
	    return (0, _apiCaller2.default)('pin', 'DELETE', pin.pinDBObject);
	  };
	}

	function setPins(pins) {
	  return {
	    type: SET_PINS,
	    pins: pins
	  };
	}

	function addPin(pin) {
	  return {
	    type: ADD_PIN,
	    pin: pin
	  };
	}

	function updatePin(pin) {
	  return {
	    type: UPDATE_PIN,
	    pin: pin
	  };
	}

	function deletePin(pin) {
	  return {
	    type: DELETE_PIN,
	    pin: pin
	  };
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/pin-it',
	  port: process.env.PORT || 8000,
	  twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
	  secretTwitterConsumerKey: process.env.SECRET_TWITTER_CONSUMER_KEY,
	  twitterCallbackURL: process.TWITTER_CALLBACK_URL || '	http://192.168.1.3:8000/login/twitter/callback'
	};

	exports.default = config;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var userSchema = new Schema({
	  twitterId: String,
	  username: String,
	  profilePic: String,
	  pins: Array
	});

	exports.default = _mongoose2.default.model('User', userSchema);

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_USER = exports.TOGGLE_ADD_POST = undefined;
	exports.requestGetUser = requestGetUser;
	exports.toggleAddPost = toggleAddPost;
	exports.setUser = setUser;

	var _apiCaller = __webpack_require__(15);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	var SET_USER = exports.SET_USER = 'SET_USER';

	function requestGetUser() {
	  return function dispatchedRequest(dispatch) {
	    (0, _apiCaller2.default)('user').then(function (response) {
	      return dispatch(setUser(response.data));
	    });
	  };
	}

	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

	function setUser(user) {
	  return {
	    type: SET_USER,
	    user: user
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(49);

	var _reduxDevtoolsLogMonitor = __webpack_require__(51);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(50);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPins = getPins;
	exports.getUsersPins = getUsersPins;

	var _PinActions = __webpack_require__(6);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// Initial State
	var initialState = [];

	var PinReducer = function PinReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _PinActions.SET_PINS:
	      return [].concat(_toConsumableArray(action.pins));
	    case _PinActions.ADD_PIN:
	      return [action.pin].concat(_toConsumableArray(state));
	    case _PinActions.UPDATE_PIN:
	      return state.map(function (pin) {
	        return pin.pinDBObject._id === action.pin.pinDBObject._id ? action.pin : pin;
	      });
	    case _PinActions.DELETE_PIN:
	      return state.filter(function (pin) {
	        return pin !== action.pin;
	      });
	    default:
	      return state;
	  }
	};

	function getPins(state) {
	  return state.pin;
	}

	function getUsersPins(state, userID) {
	  return state.pin.filter(function (currentPin) {
	    return currentPin.pinDBObject.creator === userID;
	  });
	}

	exports.default = PinReducer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(45);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(7);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];

	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    credentials: 'same-origin',
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;

	    if (!response.ok) {
	      return Promise.reject(json);
	    }

	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(10);

	var _App = __webpack_require__(32);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(5);
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(5).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: 'user/:id',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(5).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(16);

	var _reduxThunk = __webpack_require__(52);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(13);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(39);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }

	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(2);

	var _pinRoutes = __webpack_require__(42);

	var _pinRoutes2 = _interopRequireDefault(_pinRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = new _express.Router();

	router.use('/pin', _pinRoutes2.default);

	exports.default = router;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(44);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(11);
	var cssnext = __webpack_require__(46);
	var postcssFocus = __webpack_require__(47);
	var postcssReporter = __webpack_require__(48);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("connect-mongo");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("passport-twitter");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _DevTools = __webpack_require__(13);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _Header = __webpack_require__(34);

	var _Header2 = _interopRequireDefault(_Header);

	var _CreatePinDropdown = __webpack_require__(33);

	var _CreatePinDropdown2 = _interopRequireDefault(_CreatePinDropdown);

	var _AppActions = __webpack_require__(12);

	var _AppReducer = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Components


	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      isMounted: false,
	      showCreatePinDropdown: false
	    };
	    _this.toggleAddPinDropdown = _this.toggleAddPinDropdown.bind(_this);
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	      this.props.dispatch((0, _AppActions.requestGetUser)());
	    }
	  }, {
	    key: 'toggleAddPinDropdown',
	    value: function toggleAddPinDropdown() {
	      var toggled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.state.showCreatePinDropdown;

	      this.setState({ showCreatePinDropdown: toggled });
	    }

	    // {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />} move this 3 spaces down into the first div to reactivate

	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'PIN IT',
	        titleTemplate: '%s',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Header2.default, {
	        toggleAddPinDropdown: this.toggleAddPinDropdown,
	        userID: this.props.user ? this.props.user._id : ''
	      }), this.state.showCreatePinDropdown ? _jsx(_CreatePinDropdown2.default, {
	        toggleAddPinDropdown: this.toggleAddPinDropdown
	      }) : null, _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.children)));
	    }
	  }]);

	  return App;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    user: (0, _AppReducer.getUser)(state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _CreatePinDropdown = {
	  "dropdown": "oRSqpBNgyIms04sesD88f",
	  "left": "k1rFTz38FUD1sxBcg7RqV"
	};

	var _CreatePinDropdown2 = _interopRequireDefault(_CreatePinDropdown);

	var _PinActions = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('label', {
	  htmlFor: 'image-field'
	}, void 0, 'Image URL');

	var _ref2 = _jsx('label', {
	  htmlFor: 'description-field'
	}, void 0, 'Pin Description');

	var CreatePinDropdown = function (_Component) {
	  _inherits(CreatePinDropdown, _Component);

	  function CreatePinDropdown(props) {
	    _classCallCheck(this, CreatePinDropdown);

	    var _this = _possibleConstructorReturn(this, (CreatePinDropdown.__proto__ || Object.getPrototypeOf(CreatePinDropdown)).call(this, props));

	    _this.state = {
	      'image-field': '',
	      'description-field': ''
	    };

	    _this.onFormKeyPressed = _this.onFormKeyPressed.bind(_this);
	    _this.createPin = _this.createPin.bind(_this);
	    return _this;
	  }

	  _createClass(CreatePinDropdown, [{
	    key: 'onFormKeyPressed',
	    value: function onFormKeyPressed(e) {
	      if (e.key === 'Enter') {
	        this.createPin();
	      } else {
	        this.setState(_defineProperty({}, e.target.id, e.target.value));
	      }
	    }
	  }, {
	    key: 'createPin',
	    value: function createPin() {
	      var image = this.state['image-field'];
	      var description = this.state['description-field'];
	      if (image.length > 0 && description.length > 0) {
	        this.props.dispatch((0, _PinActions.requestCreatePin)(image, description));
	        this.props.toggleAddPinDropdown();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _CreatePinDropdown2.default.dropdown + ' red lighten-2'
	      }, void 0, _jsx('h5', {
	        className: _CreatePinDropdown2.default.left + ' left'
	      }, void 0, 'Add Pin'), _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('form', {
	        className: 'col s12',
	        onKeyDown: this.onFormKeyPressed,
	        onChange: this.onFormKeyPressed
	      }, void 0, _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: 'input-field col s12'
	      }, void 0, _jsx('input', {
	        id: 'image-field',
	        type: 'url',
	        value: this.state['image-field']
	      }), _ref)), _jsx('div', {
	        className: 'row'
	      }, void 0, _jsx('div', {
	        className: 'input-field col s12'
	      }, void 0, _jsx('input', {
	        id: 'description-field',
	        type: 'text',
	        value: this.state['description-field']
	      }), _ref2)))));
	    }
	  }]);

	  return CreatePinDropdown;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)()(CreatePinDropdown);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	exports.Header = Header;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _LoggedOut = __webpack_require__(36);

	var _LoggedOut2 = _interopRequireDefault(_LoggedOut);

	var _LoggedIn = __webpack_require__(35);

	var _LoggedIn2 = _interopRequireDefault(_LoggedIn);

	var _Header = {
	  "header": "_2sEZYfHlvDy9uXqVIXG1aM"
	};

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_LoggedOut2.default, {});

	function Header(props, context) {
	  function goHome() {
	    if (!context.router.isActive('/', true)) {
	      context.router.push('/');
	    }
	  }

	  return _jsx('div', {
	    className: '' + _Header2.default.header
	  }, void 0, _jsx('nav', {}, void 0, _jsx('div', {
	    className: 'nav-wrapper z-depth-2'
	  }, void 0, _jsx('a', {
	    className: 'brand-logo left',
	    onClick: goHome
	  }, void 0, 'PIN IT'), Boolean(props.userID) ? _jsx(_LoggedIn2.default, {
	    toggleAddPinDropdown: props.toggleAddPinDropdown,
	    userID: props.userID
	  }) : _ref)));
	}

	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = Header;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('a', {}, void 0, 'Add Pin', _jsx('i', {
	  className: 'material-icons right'
	}, void 0, 'arrow_drop_down'));

	var _ref2 = _jsx('li', {}, void 0, _jsx('a', {
	  href: '/logout'
	}, void 0, 'Logout'));

	function LoggedIn(props, context) {
	  function pins() {
	    context.router.push('/');
	  }

	  function myPins() {
	    context.router.push('/user/' + props.userID);
	  }

	  return _jsx('ul', {
	    className: 'right'
	  }, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    onClick: pins
	  }, void 0, 'Pins')), _jsx('li', {}, void 0, _jsx('a', {
	    onClick: myPins
	  }, void 0, 'My Pins')), _jsx('li', {
	    onClick: function onClick() {
	      return props.toggleAddPinDropdown();
	    }
	  }, void 0, _ref), _ref2);
	}

	LoggedIn.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	};

	exports.default = LoggedIn;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx("ul", {
	  className: "right"
	}, void 0, _jsx("li", {}, void 0, _jsx("a", {
	  href: "/login"
	}, void 0, "Login")));

	function LoggedOut() {
	  return _ref;
	}

	exports.default = LoggedOut;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Pin(props, context) {
	  var hasUserLiked = props.pin.pinDBObject.likes.indexOf(props.userID) !== -1;
	  var showDeleteButton = Boolean(props.deletePin && props.pin.pinDBObject.creator === props.userID);
	  var likeButton = _jsx('i', {
	    className: 'material-icons right',
	    style: hasUserLiked ? { color: '#ff80ab' } : {},
	    onClick: like
	  }, void 0, 'favorite');
	  var deleteButton = _jsx('i', {
	    className: 'material-icons right',
	    style: { color: '#ff1744' },
	    onClick: deletePin
	  }, void 0, 'delete');

	  function like() {
	    props.likePin(props.pin);
	  }

	  function deletePin() {
	    props.deletePin(props.pin);
	  }

	  function usersPins() {
	    context.router.push('/user/' + props.pin.pinDBObject.creator);
	  }

	  return _jsx('div', {
	    className: 'col s12 m4'
	  }, void 0, _jsx('div', {
	    className: 'card'
	  }, void 0, _jsx('div', {
	    className: 'card-image'
	  }, void 0, _jsx('img', {
	    className: 'responsive-img',
	    src: props.pin.pinDBObject.image,
	    alt: 'the pin'
	  })), _jsx('div', {
	    className: 'card-content'
	  }, void 0, _jsx('p', {
	    className: 'row'
	  }, void 0, _jsx('img', {
	    src: props.pin.creatorsProfilePic,
	    alt: 'user',
	    className: 'circle responsive-img col s2',
	    onClick: usersPins
	  }), _jsx('span', {
	    className: 'col s10'
	  }, void 0, props.pin.pinDBObject.description, _jsx('span', {
	    className: 'badge'
	  }, void 0, props.pin.pinDBObject.likes.length, showDeleteButton ? deleteButton : likeButton))))));
	}

	Pin.contextTypes = {
	  router: _react.PropTypes.object.isRequired
	};

	exports.default = Pin;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _PinListItem = __webpack_require__(37);

	var _PinListItem2 = _interopRequireDefault(_PinListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function PinList(props, context) {
	  return _jsx('div', {
	    className: 'row'
	  }, void 0, props.pins.map(function (pin) {
	    return _jsx(_PinListItem2.default, {
	      pin: pin,
	      userID: props.userID,
	      likePin: props.likePin,
	      deletePin: props.deletePin
	    }, pin.pinDBObject._id);
	  }));
	}

	PinList.contextTypes = {
	  router: _react.PropTypes.object.isRequired
	};

	exports.default = PinList;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(16);

	var _AppReducer = __webpack_require__(4);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _PinReducer = __webpack_require__(14);

	var _PinReducer2 = _interopRequireDefault(_PinReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer


	// Import Reducers
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  pin: _PinReducer2.default
	}); /**
	     * Root Reducer
	     */

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.requireLoggedIn = requireLoggedIn;
	exports.getPins = getPins;
	exports.createPin = createPin;
	exports.updatePin = updatePin;
	exports.deletePin = deletePin;

	var _pin = __webpack_require__(41);

	var _pin2 = _interopRequireDefault(_pin);

	var _user = __webpack_require__(8);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function requireLoggedIn(req, res, next) {
	  if (req.user) {
	    return next();
	  }
	  res.status(403).end();
	}

	function getPins(req, res) {
	  _pin2.default.find().sort({ _id: -1 }).then(function (pins) {
	    return Promise.all(pins.map(injectUserData));
	  }).then(function (userDataInjectedPins) {
	    return res.status(200).send({ data: userDataInjectedPins });
	  }).catch(function (err) {
	    return error(err, res);
	  });
	}

	function injectUserData(pinDBObject) {
	  return _user2.default.findById(pinDBObject.creator).then(function (user) {
	    return Object({
	      pinDBObject: pinDBObject,
	      creatorsProfilePic: user.profilePic
	    });
	  });
	}

	function createPin(req, res) {
	  var newPin = {
	    image: req.body.image,
	    description: req.body.description,
	    creator: req.user._id
	  };
	  new _pin2.default(newPin).save().then(injectUserData).then(function (data) {
	    return res.send({ data: data });
	  }).catch(function (err) {
	    return error(err, res);
	  });
	}

	function updatePin(req, res) {
	  var pin = req.body;
	  _pin2.default.findOneAndUpdate({ _id: pin._id }, pin).then(function () {
	    return res.status(200).end();
	  }).catch(function (err) {
	    return error(err, res);
	  });
	}

	function deletePin(req, res) {
	  _pin2.default.findOneAndRemove(req.body).then(function () {
	    return res.status(200).end();
	  }).catch(function (err) {
	    return error(err, res);
	  });
	}

	function error(error, res) {
	  console.error(error); // eslint-disable-line
	  res.status(500).end();
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var pinSchema = new Schema({
	  image: String,
	  description: String,
	  creator: String,
	  likes: { type: Array, default: [] }
	});

	exports.default = _mongoose2.default.model('Pin', pinSchema);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(2);

	var _pin = __webpack_require__(40);

	var pinController = _interopRequireWildcard(_pin);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	router.route('/').get(pinController.getPins);
	router.route('/').all(pinController.requireLoggedIn);
	router.route('/').post(pinController.createPin);
	router.route('/').put(pinController.updatePin);
	router.route('/').delete(pinController.deletePin);

	exports.default = router;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	// passport stuff


	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(23);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(22);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(28);

	var _path2 = _interopRequireDefault(_path);

	var _webpack = __webpack_require__(11);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(21);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(30);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(31);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _connectMongo = __webpack_require__(24);

	var _connectMongo2 = _interopRequireDefault(_connectMongo);

	var _expressSession = __webpack_require__(25);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _passport = __webpack_require__(26);

	var _passport2 = _interopRequireDefault(_passport);

	var _passportTwitter = __webpack_require__(27);

	var _passportTwitter2 = _interopRequireDefault(_passportTwitter);

	var _user = __webpack_require__(8);

	var _user2 = _interopRequireDefault(_user);

	var _store = __webpack_require__(18);

	var _reactRedux = __webpack_require__(1);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(29);

	var _reactRouter = __webpack_require__(10);

	var _reactHelmet = __webpack_require__(9);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(17);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(20);

	var _api = __webpack_require__(19);

	var _api2 = _interopRequireDefault(_api);

	var _config = __webpack_require__(7);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();
	var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	});

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	/* passport uses */
	app.use((0, _expressSession2.default)({
	  secret: 'keyboard cat',
	  store: new MongoStore({ mongooseConnection: _mongoose2.default.connection })
	}));
	app.use(_passport2.default.initialize());
	app.use(_passport2.default.session());
	/* end of passport uses */
	app.use('/api', _api2.default);

	/* PASSPORT SETUP AND ROUTING */
	_passport2.default.serializeUser(function (user, done) {
	  done(null, user._id);
	});

	_passport2.default.deserializeUser(function (id, done) {
	  _user2.default.findById(id, function (err, user) {
	    done(err, user);
	  });
	});

	var twitterStrategy = new _passportTwitter2.default({
	  consumerKey: _config2.default.twitterConsumerKey,
	  consumerSecret: _config2.default.secretTwitterConsumerKey,
	  callbackURL: _config2.default.twitterCallbackURL
	}, function (token, tokenSecret, profile, done) {
	  _user2.default.findOne({ twitterId: profile.id }).then(function (foundUser) {
	    if (!foundUser) {
	      var profilePic = profile.photos.length > 0 && profile.photos[0] ? profile.photos[0].value : '';
	      return new _user2.default({
	        twitterId: profile.id,
	        username: profile.username,
	        profilePic: profilePic,
	        pins: []
	      }).save().then(function (newUser) {
	        return done(null, newUser);
	      });
	    }
	    return done(null, foundUser);
	  }).catch(function (error) {
	    console.error(error); // eslint-disable-line
	    return done(error, null);
	  });
	});

	_passport2.default.use(twitterStrategy);

	app.get('/login', _passport2.default.authenticate('twitter'));
	app.get('/login/twitter/callback', _passport2.default.authenticate('twitter', { successRedirect: '/', failureRedirect: '/' }));
	app.get('/logout', function (req, res) {
	  req.logOut();
	  res.redirect('/');
	});

	app.get('/api/user', function (req, res) {
	  res.send({ data: req.user || null });
	});
	/* END OF PASSPORT SETUP AND ROUTING */

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  // icon change this later
	  // <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n        <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>\n      </body>\n    </html>\n  ';
	};
	// <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var store = (0, _store.configureStore)();
	    store.dispatch({
	      type: 'SET_USER',
	      user: req.user || null
	    });

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ]);