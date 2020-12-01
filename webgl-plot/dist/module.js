define(["@grafana/data","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/webgl-plot/dist/webglplot.esm.js":
/*!********************************************************!*\
  !*** ../node_modules/webgl-plot/dist/webglplot.esm.js ***!
  \********************************************************/
/*! exports provided: default, ColorRGBA, WebglLine, WebglPolar, WebglStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorRGBA", function() { return ColorRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebglLine", function() { return WebglLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebglPolar", function() { return WebglPolar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebglStep", function() { return WebglStep; });
class ColorRGBA {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}

/**
 * Baseline class
 */
class WebglBaseLine {
    /**
     * @internal
     */
    constructor() {
        this.scaleX = 1;
        this.scaleY = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.loop = false;
        this._vbuffer = 0;
        this._coord = 0;
        this.visible = true;
        this.intensity = 1;
    }
}

/**
 * The standard Line class
 */
class WebglLine extends WebglBaseLine {
    /**
     * Create a new line
     * @param c - the color of the line
     * @param numPoints - number of data pints
     * @example
     * ```typescript
     * x= [0,1]
     * y= [1,2]
     * line = new WebglLine( new ColorRGBA(0.1,0.1,0.1,1), 2);
     * ```
     */
    constructor(c, numPoints) {
        super();
        this.webglNumPoints = numPoints;
        this.numPoints = numPoints;
        this.color = c;
        this.xy = new Float32Array(2 * this.webglNumPoints);
    }
    /**
     * Set the X value at a specific index
     * @param index - the index of the data point
     * @param x - the horizontal value of the data point
     */
    setX(index, x) {
        this.xy[index * 2] = x;
    }
    /**
     * Set the Y value at a specific index
     * @param index : the index of the data point
     * @param y : the vertical value of the data point
     */
    setY(index, y) {
        this.xy[index * 2 + 1] = y;
    }
    /**
     * Get an X value at a specific index
     * @param index - the index of X
     */
    getX(index) {
        return this.xy[index * 2];
    }
    /**
     * Get an Y value at a specific index
     * @param index - the index of Y
     */
    getY(index) {
        return this.xy[index * 2 + 1];
    }
    /**
     * Make an equally spaced array of X points
     * @param start  - the start of the series
     * @param stepSize - step size between each data point
     *
     * @example
     * ```typescript
     * //x = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]
     * const numX = 10;
     * line.lineSpaceX(-1, 2 / numX);
     * ```
     */
    lineSpaceX(start, stepSize) {
        for (let i = 0; i < this.numPoints; i++) {
            // set x to -num/2:1:+num/2
            this.setX(i, start + stepSize * i);
        }
    }
    /**
     * Set a constant value for all Y values in the line
     * @param c - constant value
     */
    constY(c) {
        for (let i = 0; i < this.numPoints; i++) {
            // set x to -num/2:1:+num/2
            this.setY(i, c);
        }
    }
    /**
     * Add a new Y values to the end of current array and shift it, so that the total number of the pair remains the same
     * @param data - the Y array
     *
     * @example
     * ```typescript
     * yArray = new Float32Array([3, 4, 5]);
     * line.shiftAdd(yArray);
     * ```
     */
    shiftAdd(data) {
        const shiftSize = data.length;
        for (let i = 0; i < this.numPoints - shiftSize; i++) {
            this.setY(i, this.getY(i + shiftSize));
        }
        for (let i = 0; i < shiftSize; i++) {
            this.setY(i + this.numPoints - shiftSize, data[i]);
        }
    }
}

/**
 * The step based line plot
 */
class WebglStep extends WebglBaseLine {
    /**
     * Create a new step line
     * @param c - the color of the line
     * @param numPoints - number of data pints
     * @example
     * ```typescript
     * x= [0,1]
     * y= [1,2]
     * line = new WebglStep( new ColorRGBA(0.1,0.1,0.1,1), 2);
     * ```
     */
    constructor(c, num) {
        super();
        this.webglNumPoints = num * 2;
        this.numPoints = num;
        this.color = c;
        this.xy = new Float32Array(2 * this.webglNumPoints);
    }
    /**
     * Set the Y value at a specific index
     * @param index - the index of the data point
     * @param y - the vertical value of the data point
     */
    setY(index, y) {
        this.xy[index * 4 + 1] = y;
        this.xy[index * 4 + 3] = y;
    }
    getX(index) {
        return this.xy[index * 4];
    }
    /**
     * Get an X value at a specific index
     * @param index - the index of X
     */
    getY(index) {
        return this.xy[index * 4 + 1];
    }
    /**
     * Make an equally spaced array of X points
     * @param start  - the start of the series
     * @param stepSize - step size between each data point
     *
     * @example
     * ```typescript
     * //x = [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]
     * const numX = 10;
     * line.lineSpaceX(-1, 2 / numX);
     * ```
     */
    lineSpaceX(start, stepsize) {
        for (let i = 0; i < this.numPoints; i++) {
            // set x to -num/2:1:+num/2
            this.xy[i * 4] = start + i * stepsize;
            this.xy[i * 4 + 2] = start + (i * stepsize + stepsize);
        }
    }
    /**
     * Set a constant value for all Y values in the line
     * @param c - constant value
     */
    constY(c) {
        for (let i = 0; i < this.numPoints; i++) {
            // set x to -num/2:1:+num/2
            this.setY(i, c);
        }
    }
    /**
     * Add a new Y values to the end of current array and shift it, so that the total number of the pair remains the same
     * @param data - the Y array
     *
     * @example
     * ```typescript
     * yArray = new Float32Array([3, 4, 5]);
     * line.shiftAdd(yArray);
     * ```
     */
    shiftAdd(data) {
        const shiftSize = data.length;
        for (let i = 0; i < this.numPoints - shiftSize; i++) {
            this.setY(i, this.getY(i + shiftSize));
        }
        for (let i = 0; i < shiftSize; i++) {
            this.setY(i + this.numPoints - shiftSize, data[i]);
        }
    }
}

class WebglPolar extends WebglBaseLine {
    constructor(c, numPoints) {
        super();
        this.webglNumPoints = numPoints;
        this.numPoints = numPoints;
        this.color = c;
        this.intenisty = 1;
        this.xy = new Float32Array(2 * this.webglNumPoints);
        this._vbuffer = 0;
        this._coord = 0;
        this.visible = true;
        this.offsetTheta = 0;
    }
    /**
     * @param index: index of the line
     * @param theta : angle in deg
     * @param r : radius
     */
    setRtheta(index, theta, r) {
        //const rA = Math.abs(r);
        //const thetaA = theta % 360;
        const x = r * Math.cos((2 * Math.PI * (theta + this.offsetTheta)) / 360);
        const y = r * Math.sin((2 * Math.PI * (theta + this.offsetTheta)) / 360);
        //const index = Math.round( ((theta % 360)/360) * this.numPoints );
        this.setX(index, x);
        this.setY(index, y);
    }
    getTheta(index) {
        //return Math.tan
        return 0;
    }
    getR(index) {
        //return Math.tan
        return Math.sqrt(Math.pow(this.getX(index), 2) + Math.pow(this.getY(index), 2));
    }
    setX(index, x) {
        this.xy[index * 2] = x;
    }
    setY(index, y) {
        this.xy[index * 2 + 1] = y;
    }
    getX(index) {
        return this.xy[index * 2];
    }
    getY(index) {
        return this.xy[index * 2 + 1];
    }
}

/**
 * Author Danial Chitnis 2019-20
 *
 * inspired by:
 * https://codepen.io/AzazelN28
 * https://www.tutorialspoint.com/webgl/webgl_modes_of_drawing.htm
 */
/**
 * The main class for the webgl-plot library
 */
class WebGLPlot {
    /**
     * Create a webgl-plot instance
     * @param canvas - the canvas in which the plot appears
     * @param debug - (Optional) log debug messages to console
     *
     * @example
     *
     * For HTMLCanvas
     * ```typescript
     * const canvas = document.getElementbyId("canvas");
     *
     * const devicePixelRatio = window.devicePixelRatio || 1;
     * canvas.width = canvas.clientWidth * devicePixelRatio;
     * canvas.height = canvas.clientHeight * devicePixelRatio;
     *
     * const webglp = new WebGLplot(canvas);
     * ...
     * ```
     * @example
     *
     * For OffScreenCanvas
     * ```typescript
     * const offscreen = htmlCanvas.transferControlToOffscreen();
     *
     * offscreen.width = htmlCanvas.clientWidth * window.devicePixelRatio;
     * offscreen.height = htmlCanvas.clientHeight * window.devicePixelRatio;
     *
     * const worker = new Worker("offScreenCanvas.js", { type: "module" });
     * worker.postMessage({ canvas: offscreen }, [offscreen]);
     * ```
     * Then in offScreenCanvas.js
     * ```typescript
     * onmessage = function (evt) {
     * const wglp = new WebGLplot(evt.data.canvas);
     * ...
     * }
     * ```
     */
    constructor(canvas, options) {
        /**
         * log debug output
         */
        this.debug = false;
        if (options == undefined) {
            this.webgl = canvas.getContext("webgl", {
                antialias: true,
                transparent: false,
            });
        }
        else {
            this.webgl = canvas.getContext("webgl", {
                antialias: options.antialias,
                transparent: options.transparent,
                desynchronized: options.deSync,
                powerPerformance: options.powerPerformance,
                preserveDrawing: options.preserveDrawing,
            });
            this.debug = options.debug == undefined ? false : options.debug;
        }
        this.log("canvas type is: " + canvas.constructor.name);
        this.log(`[webgl-plot]:width=${canvas.width}, height=${canvas.height}`);
        this._lines = [];
        //this.webgl = webgl;
        this.gScaleX = 1;
        this.gScaleY = 1;
        this.gXYratio = 1;
        this.gOffsetX = 0;
        this.gOffsetY = 0;
        // Clear the color
        this.webgl.clear(this.webgl.COLOR_BUFFER_BIT);
        // Set the view port
        this.webgl.viewport(0, 0, canvas.width, canvas.height);
        this.progThinLine = this.webgl.createProgram();
        this.initThinLineProgram();
    }
    get lines() {
        return this._lines;
    }
    /**
     * updates and redraws the content of the plot
     */
    update() {
        const webgl = this.webgl;
        this.lines.forEach((line) => {
            if (line.visible) {
                webgl.useProgram(this.progThinLine);
                const uscale = webgl.getUniformLocation(this.progThinLine, "uscale");
                webgl.uniformMatrix2fv(uscale, false, new Float32Array([
                    line.scaleX * this.gScaleX,
                    0,
                    0,
                    line.scaleY * this.gScaleY * this.gXYratio,
                ]));
                const uoffset = webgl.getUniformLocation(this.progThinLine, "uoffset");
                webgl.uniform2fv(uoffset, new Float32Array([line.offsetX + this.gOffsetX, line.offsetY + this.gOffsetY]));
                const uColor = webgl.getUniformLocation(this.progThinLine, "uColor");
                webgl.uniform4fv(uColor, [line.color.r, line.color.g, line.color.b, line.color.a]);
                webgl.bufferData(webgl.ARRAY_BUFFER, line.xy, webgl.STREAM_DRAW);
                webgl.drawArrays(line.loop ? webgl.LINE_LOOP : webgl.LINE_STRIP, 0, line.webglNumPoints);
            }
        });
    }
    clear() {
        // Clear the canvas  //??????????????????
        //this.webgl.clearColor(0.1, 0.1, 0.1, 1.0);
        this.webgl.clear(this.webgl.COLOR_BUFFER_BIT);
    }
    /**
     * adds a line to the plot
     * @param line - this could be any of line, linestep, histogram, or polar
     *
     * @example
     * ```typescript
     * const line = new line(color, numPoints);
     * wglp.addLine(line);
     * ```
     */
    addLine(line) {
        //line.initProgram(this.webgl);
        line._vbuffer = this.webgl.createBuffer();
        this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, line._vbuffer);
        this.webgl.bufferData(this.webgl.ARRAY_BUFFER, line.xy, this.webgl.STREAM_DRAW);
        this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, line._vbuffer);
        line._coord = this.webgl.getAttribLocation(this.progThinLine, "coordinates");
        this.webgl.vertexAttribPointer(line._coord, 2, this.webgl.FLOAT, false, 0, 0);
        this.webgl.enableVertexAttribArray(line._coord);
        this.lines.push(line);
    }
    initThinLineProgram() {
        const vertCode = `
      attribute vec2 coordinates;
      uniform mat2 uscale;
      uniform vec2 uoffset;
      void main(void) {
         gl_Position = vec4(uscale*coordinates + uoffset, 0.0, 1.0);
      }`;
        // Create a vertex shader object
        const vertShader = this.webgl.createShader(this.webgl.VERTEX_SHADER);
        // Attach vertex shader source code
        this.webgl.shaderSource(vertShader, vertCode);
        // Compile the vertex shader
        this.webgl.compileShader(vertShader);
        // Fragment shader source code
        const fragCode = `
         precision mediump float;
         uniform highp vec4 uColor;
         void main(void) {
            gl_FragColor =  uColor;
         }`;
        const fragShader = this.webgl.createShader(this.webgl.FRAGMENT_SHADER);
        this.webgl.shaderSource(fragShader, fragCode);
        this.webgl.compileShader(fragShader);
        this.progThinLine = this.webgl.createProgram();
        this.webgl.attachShader(this.progThinLine, vertShader);
        this.webgl.attachShader(this.progThinLine, fragShader);
        this.webgl.linkProgram(this.progThinLine);
    }
    /**
     * remove the last line
     */
    popLine() {
        this.lines.pop();
    }
    /**
     * remove all the lines
     */
    removeAllLines() {
        this._lines = [];
    }
    /**
     * Change the WbGL viewport
     * @param a
     * @param b
     * @param c
     * @param d
     */
    viewport(a, b, c, d) {
        this.webgl.viewport(a, b, c, d);
    }
    log(str) {
        if (this.debug) {
            console.log("[webgl-plot]:" + str);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (WebGLPlot);



/***/ }),

/***/ "./Colors.ts":
/*!*******************!*\
  !*** ./Colors.ts ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webgl_plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-plot */ "../node_modules/webgl-plot/dist/webglplot.esm.js");

var _gist_earth_data = {
  red: [[0.0, 0.0, 0.0], [0.2824, 0.1882, 0.1882], [0.4588, 0.2714, 0.2714], [0.549, 0.4719, 0.4719], [0.698, 0.7176, 0.7176], [0.7882, 0.7553, 0.7553], [1.0, 0.9922, 0.9922]],
  green: [[0.0, 0.0, 0.0], [0.0275, 0.0, 0.0], [0.1098, 0.1893, 0.1893], [0.1647, 0.3035, 0.3035], [0.2078, 0.3841, 0.3841], [0.2824, 0.502, 0.502], [0.5216, 0.6397, 0.6397], [0.698, 0.7171, 0.7171], [0.7882, 0.6392, 0.6392], [0.7922, 0.6413, 0.6413], [0.8, 0.6447, 0.6447], [0.8078, 0.6481, 0.6481], [0.8157, 0.6549, 0.6549], [0.8667, 0.6991, 0.6991], [0.8745, 0.7103, 0.7103], [0.8824, 0.7216, 0.7216], [0.8902, 0.7323, 0.7323], [0.898, 0.743, 0.743], [0.9412, 0.8275, 0.8275], [0.9569, 0.8635, 0.8635], [0.9647, 0.8816, 0.8816], [0.9961, 0.9733, 0.9733], [1.0, 0.9843, 0.9843]],
  blue: [[0.0, 0.0, 0.0], [0.0039, 0.1684, 0.1684], [0.0078, 0.2212, 0.2212], [0.0275, 0.4329, 0.4329], [0.0314, 0.4549, 0.4549], [0.2824, 0.5004, 0.5004], [0.4667, 0.2748, 0.2748], [0.5451, 0.3205, 0.3205], [0.7843, 0.3961, 0.3961], [0.8941, 0.6651, 0.6651], [1.0, 0.9843, 0.9843]]
};

function interpolateColor(val, colors) {
  var lineId = 0;

  for (; lineId + 1 < colors.length; lineId += 1) {
    if (val >= colors[lineId][0] && val < colors[lineId + 1][0]) {
      break;
    }
  }

  var ratio = (colors[lineId + 1][0] - val) / (colors[lineId + 1][0] - colors[lineId][0]);
  return ratio * (colors[lineId + 1][1] - colors[lineId][2]) + colors[lineId][2];
}

function createPalette(nColors) {
  var outColors = [];

  for (var i = 0; i < nColors; i += 1) {
    var val = (i + 0.5) / nColors;
    var color = new webgl_plot__WEBPACK_IMPORTED_MODULE_0__["ColorRGBA"](interpolateColor(val, _gist_earth_data.red), interpolateColor(val, _gist_earth_data.green), interpolateColor(val, _gist_earth_data.blue), 1);
    outColors.push(color);
  }

  return outColors;
}

/* harmony default export */ __webpack_exports__["default"] = (createPalette);

/***/ }),

/***/ "./Line.ts":
/*!*****************!*\
  !*** ./Line.ts ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webgl_plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webgl-plot */ "../node_modules/webgl-plot/dist/webglplot.esm.js");
/* harmony import */ var _RollingBuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RollingBuffer */ "./RollingBuffer.ts");



var Line =
/** @class */
function () {
  function Line(nPoints, color, webGLPlot) {
    this.nPoints = nPoints;
    this.glLine = new webgl_plot__WEBPACK_IMPORTED_MODULE_0__["WebglLine"](color, this.nPoints);
    this.glLine.lineSpaceX(-1, 2 / nPoints);
    webGLPlot.addLine(this.glLine);
    this.scaling = 1;
    this.offset = 0;
    this.enabled = true;
    this.buffer = new _RollingBuffer__WEBPACK_IMPORTED_MODULE_1__["default"](nPoints);
  }

  Line.prototype.setScaling = function (scaling) {
    this.scaling = scaling;
  };

  Line.prototype.setOffset = function (offset) {
    this.offset = offset;
  };

  Line.prototype.setData = function (data) {
    for (var i = 0; i < this.nPoints; i += 1) {
      this.glLine.setY(i, data[i] / this.scaling + this.offset);
    }
  };

  Line.prototype.push = function (data) {
    this.buffer.push(data);
  };

  return Line;
}();

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./RollingBuffer.ts":
/*!**************************!*\
  !*** ./RollingBuffer.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RollingBuffer =
/** @class */
function () {
  function RollingBuffer(size) {
    this.size = size;
    this.data = [];
    this.reset(0);
  }

  RollingBuffer.prototype.reset = function (value) {
    for (var i = 0; i < this.size; i += 1) {
      this.data[i] = value;
    }
  };

  RollingBuffer.prototype.push = function (newData) {
    // If new data is larger than buffer, flush buffer with new values
    if (newData.length >= this.size) {
      this.data = newData.slice(-this.size);
    } else {
      // Otherwise
      // Shift buffer to the left
      for (var i = 0; i < this.size - newData.length; i += 1) {
        this.data[i] = this.data[i + newData.length];
      } // Add new data points at the end


      for (var i = 0; i < newData.length; i += 1) {
        this.data[i + this.size - newData.length] = newData[i];
      }
    }
  };

  RollingBuffer.prototype.getData = function () {
    return this.data;
  };

  RollingBuffer.prototype.mean = function () {
    return this.sum() / this.data.length;
  };

  RollingBuffer.prototype.sum = function () {
    return this.data.reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  return RollingBuffer;
}();

/* harmony default export */ __webpack_exports__["default"] = (RollingBuffer);

/***/ }),

/***/ "./SimplePanel.tsx":
/*!*************************!*\
  !*** ./SimplePanel.tsx ***!
  \*************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WebGLGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebGLGraph */ "./WebGLGraph.ts");






var SimplePanel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimplePanel, _super);

  function SimplePanel(props) {
    var _this = _super.call(this, props) || this;

    _this.myCanvasRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.myDivRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.lastWheelTime = new Date();
    return _this;
  }

  SimplePanel.prototype.componentDidMount = function () {
    var canvas = this.myCanvasRef.current;
    var _a = this.props,
        data = _a.data,
        options = _a.options;
    this.webGLGraph = new _WebGLGraph__WEBPACK_IMPORTED_MODULE_4__["default"](canvas, data, options.subtractMean);
  };

  SimplePanel.prototype.onCanvasScroll = function (event) {
    console.log(event);
    console.log(event.deltaY);
    var webGLGraph = this.webGLGraph;

    if (new Date().getTime() - this.lastWheelTime.getTime() > 100) {
      var val = event.deltaY > 0 ? 1 : -1;

      if (webGLGraph.scaling === undefined) {
        webGLGraph.scaling = webGLGraph.getAutoScaling(webGLGraph.getData());
      }

      this.webGLGraph.setScaling(webGLGraph.scaling * Math.pow(1 + 3 / 10, val));
      var div = this.myDivRef.current;
      div.innerText = "scaling: " + webGLGraph.scaling;
      this.lastWheelTime = new Date();
    }

    event.preventDefault();
  };

  SimplePanel.prototype.render = function () {
    var _this = this;

    var styles = getStyles();
    var _a = this.props,
        width = _a.width,
        height = _a.height;
    var canvas = this.myCanvasRef.current; // If graph size changed, adapt webgl viewport

    if (this.webGLGraph !== undefined && (canvas.width !== width || canvas.height !== height)) {
      var webGLGraph = this.webGLGraph;
      webGLGraph.webGLPlot.viewport(0, 0, width, height);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            width: ", "px;\n            height: ", "px;\n          "], ["\n            width: ", "px;\n            height: ", "px;\n          "])), width, height))
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
      ref: this.myCanvasRef,
      width: width,
      height: height,
      onWheel: function onWheel(ev) {
        return _this.onCanvasScroll(ev);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styles.textBox
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.myDivRef
    }, "Scaling: ?")));
  };

  return SimplePanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

 //          {options.showSeriesCount && <div>Number of series: {data.series.length}</div>}

var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "./WebGLGraph.ts":
/*!***********************!*\
  !*** ./WebGLGraph.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var webgl_plot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webgl-plot */ "../node_modules/webgl-plot/dist/webglplot.esm.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ "./Line.ts");
/* harmony import */ var _Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Colors */ "./Colors.ts");





var WebGLGraph =
/** @class */
function () {
  function WebGLGraph(canvas, data, subtractMean) {
    var _this = this;

    this.webGLPlot = new webgl_plot__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    this.data = data;
    this.subtractMean = subtractMean;
    this.lines = [];
    this.scaling = undefined;
    this.nLines = 0;
    this.nPoints = 1;
    this.reconfigure();

    var newFrame = function newFrame() {
      if (_this.update()) {
        _this.webGLPlot.update();
      }

      requestAnimationFrame(newFrame);
    };

    requestAnimationFrame(newFrame);
  }

  WebGLGraph.prototype.determineNPoints = function () {
    if (this.data.request === undefined) {
      return 1;
    }

    var request = this.data.request;
    var nPoints = request.range.to.diff(request.range.from) / request.intervalMs;

    if (request.maxDataPoints !== undefined) {
      nPoints = Math.min.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([nPoints, request.maxDataPoints]));
    }

    return nPoints;
  };

  WebGLGraph.prototype.reconfigure = function () {
    // Delete existing lines
    this.webGLPlot.removeAllLines();
    this.nLines = this.getData().length;
    this.nPoints = this.data.request.maxDataPoints;
    this.nPoints = this.determineNPoints(); // Setup as many color as there are lines

    var colors = Object(_Colors__WEBPACK_IMPORTED_MODULE_3__["default"])(this.nLines); // Instantiate each line

    this.lines = [];

    for (var i = 0; i < this.nLines; i += 1) {
      this.lines[i] = new _Line__WEBPACK_IMPORTED_MODULE_2__["default"](this.nPoints, colors[i], this.webGLPlot);
    }
  };

  WebGLGraph.prototype.getData = function () {
    return this.data.series.map(function (series) {
      return series.fields.filter(function (field) {
        return field.type === 'number';
      }).map(function (field) {
        return field.values.toArray();
      });
    }).reduce(function (x, y) {
      return x.concat(y, []);
    });
  };

  WebGLGraph.prototype.update = function () {
    var dataPoints = this.getData();

    if (this.nPoints !== this.determineNPoints() || this.nLines !== dataPoints.length) {
      this.reconfigure();
    }

    var scaling = this.scaling || this.getAutoScaling(dataPoints);
    /*
    // If scaling is not set, compute the max value on the current chunk of data
    if (this.scaling === undefined) {
      // Set scaling as the maximum absolute value
      let scaling = Math.max(...data.map(
        (values) => Math.max(...values.map((x) => Math.abs(x))),
      ));
      scaling = scaling > 0 ? scaling : 1;
      this.setScaling(scaling);
    }*/

    for (var lineId = 0; lineId < this.nLines; lineId += 1) {
      var line = this.lines[lineId]; // Feed buffers with new data

      line.setData(dataPoints[lineId]);

      if (line.enabled) {
        line.setScaling(scaling * this.nLines * 1.1);
        var offset = 0;

        if (this.subtractMean) {
          offset -= mean(dataPoints[lineId]);
        }

        offset /= scaling * this.nLines * 1.1;
        var lineOffset = 1 - (0.5 + lineId) * 2 / this.nLines;
        this.lines[lineId].setOffset(offset + lineOffset);
      } else {
        this.lines[lineId].setScaling(1e9);
        this.lines[lineId].setOffset(-100000);
      }
    }

    return true;
  };

  WebGLGraph.prototype.setScaling = function (scaling) {
    this.scaling = scaling;
  };

  WebGLGraph.prototype.getAutoScaling = function (dataPoints) {
    var _this = this; // Set scaling as the maximum absolute value over the last second


    var scaling = Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(dataPoints.map(function (values) {
      // Subtract mean value to each value of necessary
      var meanVal = _this.subtractMean ? mean(values) : 0;
      return Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(values.map(function (x) {
        return Math.abs(x - meanVal);
      })));
    })));
    scaling = scaling > 0 ? scaling : 1;
    return scaling;
  };

  return WebGLGraph;
}();

/* harmony default export */ __webpack_exports__["default"] = (WebGLGraph);

function mean(arr) {
  return arr.reduce(function (x, y) {
    return x + y;
  }, 0) / arr.length;
}

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimplePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimplePanel */ "./SimplePanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_SimplePanel__WEBPACK_IMPORTED_MODULE_1__["SimplePanel"]).setPanelOptions(function (builder) {
  return builder.addBooleanSwitch({
    path: 'subtractMean',
    name: 'Subtract mean on each series',
    defaultValue: false
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map