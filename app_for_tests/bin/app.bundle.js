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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }]);

    return Point;
}();

exports.default = Point;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Point = __webpack_require__(0);

var _Point2 = _interopRequireDefault(_Point);

var _ColorPoint = __webpack_require__(2);

var _ColorPoint2 = _interopRequireDefault(_ColorPoint);

var _Cat = __webpack_require__(3);

var _Cat2 = _interopRequireDefault(_Cat);

var _Dog = __webpack_require__(4);

var _Dog2 = _interopRequireDefault(_Dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cats = [new _Cat2.default("maria", 28), new _Cat2.default("julia", 28), new _Cat2.default("jhonsy", 28)];
var dogs = [new _Dog2.default("jack", 28), new _Dog2.default("sparky", 28), new _Dog2.default("sckooby", 28)];

console.log("Testing ES6 classes*******************************************************");
for (var i = 0; i < cats.length; ++i) {
    cats[i].dump();
}

var cp = new _ColorPoint2.default(25, 8, 'green');
cp.toString(); // '(25, 8) in green'

console.log(cp.toString()); // true
console.log(cp instanceof _Point2.default); // true
console.log("***************************************************************************");

console.log("Testing other ES6 features**************************************************");
console.log("Arrow function:");
var arrowFunction = function arrowFunction() {
    console.log("Arrow function with no arguments");
};
arrowFunction();
var arrowFunctionWithArguments = function arrowFunctionWithArguments(a, b) {
    console.log("a + b = " + (a + b));
};
arrowFunctionWithArguments(5, 6);
console.log("****************************************************************************");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Point2 = __webpack_require__(0);

var _Point3 = _interopRequireDefault(_Point2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPoint = function (_Point) {
    _inherits(ColorPoint, _Point);

    function ColorPoint(x, y, color) {
        _classCallCheck(this, ColorPoint);

        var _this = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

        _this.color = color;
        return _this;
    }

    _createClass(ColorPoint, [{
        key: 'toString',
        value: function toString() {
            return _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this) + ' in ' + this.color;
        }
    }]);

    return ColorPoint;
}(_Point3.default);

exports.default = ColorPoint;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cat = function () {
    function Cat(name, age) {
        _classCallCheck(this, Cat);

        this.name = name;
        this.age = age;
    }

    _createClass(Cat, [{
        key: "dump",
        value: function dump() {
            console.log("Cat's name is: " + this.name + " age: " + this.age);
        }
    }]);

    return Cat;
}();

exports.default = Cat;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
    function Dog(name, age) {
        _classCallCheck(this, Dog);

        this.name = name;
        this.age = age;
    }

    _createClass(Dog, [{
        key: "dump",
        value: function dump() {
            console.log("Dog's name is: " + this.name + " age: " + this.age);
        }
    }]);

    return Dog;
}();

exports.default = Dog;

/***/ })
/******/ ]);