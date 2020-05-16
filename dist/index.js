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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../gloop/Event.ts":
/*!*************************!*\
  !*** ../gloop/Event.ts ***!
  \*************************/
/*! exports provided: EventType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventType\", function() { return EventType; });\nvar EventType;\n(function (EventType) {\n    EventType[EventType[\"CLICK\"] = 0] = \"CLICK\";\n    EventType[EventType[\"SCENE_WILL_CHANGE\"] = 1] = \"SCENE_WILL_CHANGE\";\n    EventType[EventType[\"SCENE_CHANGED\"] = 2] = \"SCENE_CHANGED\";\n})(EventType || (EventType = {}));\nvar eventStore = {};\nfunction on(eventType, eventCB) {\n    if (eventStore[eventType] == undefined) {\n        eventStore[eventType] = [];\n    }\n    eventStore[eventType].push(eventCB);\n}\nfunction trigger(eventType, entity) {\n    if (eventStore[eventType] == undefined) {\n        return;\n    }\n    eventStore[eventType].forEach(function (eventCb, index) {\n        eventCb(entity);\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    on: on,\n    trigger: trigger,\n    EventType: EventType\n});\n\n\n//# sourceURL=webpack:///../gloop/Event.ts?");

/***/ }),

/***/ "../gloop/Gloop.ts":
/*!*************************!*\
  !*** ../gloop/Gloop.ts ***!
  \*************************/
/*! exports provided: Mini */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mini\", function() { return Mini; });\n/* harmony import */ var _gameEngine_Stateless__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameEngine/Stateless */ \"../gloop/gameEngine/Stateless.ts\");\n/* harmony import */ var _graphicEngine_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphicEngine/Renderer */ \"../gloop/graphicEngine/Renderer.ts\");\n/* harmony import */ var _loop_Loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop/Loop */ \"../gloop/loop/Loop.ts\");\n/* harmony import */ var _canvas_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas/Canvas */ \"../gloop/canvas/Canvas.ts\");\n/* harmony import */ var _displayFragment_Area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayFragment/Area */ \"../gloop/displayFragment/Area.ts\");\n/* harmony import */ var _displayFragment_Cells__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayFragment/Cells */ \"../gloop/displayFragment/Cells.ts\");\n/* harmony import */ var _controls_Mouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/Mouse */ \"../gloop/controls/Mouse.ts\");\n/* harmony import */ var _scene_Scenes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scene/Scenes */ \"../gloop/scene/Scenes.ts\");\n\n\n\n\n\n\n\n\nvar Mini = /** @class */ (function () {\n    function Mini(fps, canvasBoardID, canvasBufferID) {\n        this.renderer = new _graphicEngine_Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.setCanvasID(canvasBoardID, canvasBufferID);\n        this.gameEngine = new _gameEngine_Stateless__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.loop = new _loop_Loop__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fps, this.renderer, this.gameEngine);\n        this.scenes = new _scene_Scenes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n    }\n    Mini.prototype.setCanvasID = function (boardID, bufferID) {\n        this.renderer.setCanvas(new _canvas_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"](boardID), new _canvas_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"](bufferID));\n    };\n    Mini.prototype.update = function (cb) {\n        this.gameEngine.update(cb);\n    };\n    Mini.prototype.display = function (cb) {\n        this.renderer.display(cb);\n    };\n    Mini.prototype.start = function () {\n        this.loop.start();\n    };\n    Mini.prototype.getCanvasDimensions = function () {\n        return [this.renderer.getCanvas().width(), this.renderer.getCanvas().height()];\n    };\n    Mini.prototype.newArea = function (x, y, width, height) {\n        return new _displayFragment_Area__WEBPACK_IMPORTED_MODULE_4__[\"default\"](x, y, width, height, this.renderer);\n    };\n    Mini.prototype.newCells = function (x, y, nbColumns, nbLines, cellWidth, cellHeight) {\n        return new _displayFragment_Cells__WEBPACK_IMPORTED_MODULE_5__[\"default\"](x, y, nbColumns, nbLines, cellWidth, cellHeight, this.renderer);\n    };\n    Mini.prototype.mouseInit = function () {\n        _controls_Mouse__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init(this.renderer.getCanvas());\n    };\n    Mini.prototype.addScene = function (name, scene) {\n        this.scenes.add(name, scene);\n    };\n    Mini.prototype.switchScene = function (name) {\n        var err = this.scenes.switch(name);\n        if (err != null) {\n            console.log(err);\n        }\n    };\n    return Mini;\n}());\n\n\n\n//# sourceURL=webpack:///../gloop/Gloop.ts?");

/***/ }),

/***/ "../gloop/canvas/Canvas.ts":
/*!*********************************!*\
  !*** ../gloop/canvas/Canvas.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Canvas = /** @class */ (function () {\n    function Canvas(canvasID) {\n        this.canvas = document.querySelector(canvasID);\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.defaultColor = \"#000000\";\n    }\n    Canvas.prototype.drawLine = function (fX, fY, tX, tY, thickness) {\n        if (thickness == undefined) {\n            thickness = 1;\n        }\n        this.ctx.beginPath();\n        this.ctx.moveTo(fX, fY);\n        this.ctx.lineTo(tX, tY);\n        this.ctx.lineWidth = thickness;\n        this.ctx.stroke();\n    };\n    Canvas.prototype.drawRect = function (fX, fY, w, h, color, thickness) {\n        var colorBefore = this.ctx.strokeStyle;\n        if (thickness == undefined) {\n            thickness = 1;\n        }\n        this.ctx.beginPath();\n        this.ctx.rect(fX, fY, w, h);\n        this.ctx.strokeStyle = color;\n        this.ctx.lineWidth = thickness;\n        this.ctx.stroke();\n        this.ctx.strokeStyle = colorBefore;\n    };\n    Canvas.prototype.fillRect = function (fX, fY, w, h, color) {\n        var colorBefore = this.ctx.fillStyle;\n        this.ctx.beginPath();\n        this.ctx.fillStyle = color;\n        this.ctx.fillRect(fX, fY, w, h);\n        this.ctx.fillStyle = colorBefore;\n    };\n    Canvas.prototype.drawImage = function (img, x, y, w, h, sx, sy) {\n        if (!x)\n            x = 0;\n        if (!y)\n            y = 0;\n        if (!w)\n            w = this.width();\n        if (!h)\n            h = this.height();\n        if (!sx)\n            sx = 0;\n        if (!sy)\n            sy = 0;\n        this.ctx.drawImage(img, sx, sy, w, h, x, y, w, h);\n    };\n    Canvas.prototype.parseFontParameters = function (size, fontFamily) {\n        if (size != undefined && fontFamily != undefined) {\n            return size + \"px \" + fontFamily;\n        }\n        var fontP = this.ctx.font.split(' ');\n        if (size != undefined) {\n            return size + \"px \" + fontP[fontP.length - 1];\n        }\n        if (fontFamily != undefined) {\n            return fontP[0] + \" \" + fontFamily;\n        }\n    };\n    Canvas.prototype.writeText = function (text, x, y, size, fontFamily, color) {\n        if (color != undefined) {\n            this.ctx.fillStyle = color;\n        }\n        this.ctx.font = this.parseFontParameters(size, fontFamily);\n        this.ctx.fillText(text, x, y);\n        this.ctx.fillStyle = this.defaultColor;\n    };\n    Canvas.prototype.width = function () {\n        return this.canvas.width;\n    };\n    Canvas.prototype.height = function () {\n        return this.canvas.height;\n    };\n    //  Draw ImageData element onto canvas\n    Canvas.prototype.drawImageData = function (imgData, x, y, w, h, dx, dy) {\n        this.ctx.putImageData(imgData, x, y, dx, dy, w, h);\n    };\n    Canvas.prototype.clear = function () {\n        this.ctx.clearRect(0, 0, this.width(), this.height());\n    };\n    // snapshot captures the canvas and returns its ImageData equivalent\n    Canvas.prototype.snapshot = function () {\n        return this.ctx.getImageData(0, 0, this.width(), this.height());\n    };\n    Canvas.prototype.setDefaultColor = function (color) {\n        this.defaultColor = color;\n    };\n    return Canvas;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Canvas);\n\n\n//# sourceURL=webpack:///../gloop/canvas/Canvas.ts?");

/***/ }),

/***/ "../gloop/controls/Mouse.ts":
/*!**********************************!*\
  !*** ../gloop/controls/Mouse.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar c;\nvar absX;\nvar absY;\nfunction getCoordinates() {\n    var rect = c.canvas.getBoundingClientRect();\n    return [\n        absX - rect.left,\n        absY - rect.top\n    ];\n}\nfunction init(canvas) {\n    c = canvas;\n    c.canvas.addEventListener('mousemove', function (evt) {\n        absX = evt.clientX;\n        absY = evt.clientY;\n    });\n}\nfunction onClick(cb) {\n    c.canvas.addEventListener('click', function (evt) {\n        absX = evt.clientX;\n        absY = evt.clientY;\n        cb(getCoordinates());\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    getCoordinates: getCoordinates,\n    init: init,\n    onClick: onClick\n});\n\n\n//# sourceURL=webpack:///../gloop/controls/Mouse.ts?");

/***/ }),

/***/ "../gloop/displayFragment/Area.ts":
/*!****************************************!*\
  !*** ../gloop/displayFragment/Area.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Area = /** @class */ (function () {\n    function Area(x, y, width, height, renderer) {\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.renderer = renderer;\n        this.tx = this.x + this.width;\n        this.ty = this.y + this.width;\n    }\n    // Draw a line onto engine's canvas\n    Area.prototype.drawLine = function (fX, fY, tX, tY, thickness) {\n        fX = (this.tx + fX) % this.tx;\n        fY = (this.ty + fY) % this.ty;\n        tX = (this.tx + fX) % this.tx;\n        tY = (this.ty + fY) % this.ty;\n        this.renderer.drawLine(this.x + fX, this.y + fY, this.x + tX, tY, thickness);\n    };\n    Area.prototype.drawRect = function (fX, fY, w, h, color, thickness) {\n        fX = (this.tx + fX) % this.tx;\n        fY = (this.ty + fY) % this.ty;\n        w = (this.width + w) % this.width;\n        h = (this.height + h) % this.height;\n        this.renderer.drawRect(this.x + fX, this.y + fY, w, h, color, thickness);\n    };\n    Area.prototype.fillRect = function (fX, fY, w, h, color) {\n        fX = (this.tx + fX) % this.tx;\n        fY = (this.ty + fY) % this.ty;\n        this.renderer.fillRect(this.x + fX, this.y + fY, w, h, color);\n    };\n    // Draw Image element onto engine's canvas\n    Area.prototype.drawImage = function (image, x, y, w, h, sx, sy) {\n        x = (this.tx + x) % this.tx;\n        y = (this.ty + y) % this.ty;\n        if (sx != undefined) {\n            sx = (this.tx + sx) % this.tx;\n        }\n        if (sy != undefined) {\n            sy = (this.ty + sy) % this.ty;\n        }\n        this.renderer.drawImage(image, this.x + x, this.y + y, w, h, this.x + sx, this.x + sy);\n    };\n    Area.prototype.writeText = function (text, x, y, size, fontFamily, color) {\n        if (size == undefined) {\n            size = 10;\n        }\n        this.renderer.writeText(text, this.x + x, this.y + y, size, fontFamily, color);\n    };\n    Area.prototype.describeFragment = function (x, y, width, height) {\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n    };\n    Area.prototype.display = function (cb) {\n        var _this = this;\n        this.renderer.display(function (T, r) {\n            cb(T, _this);\n        });\n        return this;\n    };\n    Area.prototype.getWidth = function () {\n        return this.width;\n    };\n    Area.prototype.getHeight = function () {\n        return this.height;\n    };\n    Area.prototype.getX = function () {\n        return this.x;\n    };\n    Area.prototype.getY = function () {\n        return this.y;\n    };\n    Area.prototype.getRelativeXY = function (x, y) {\n        return [\n            this.x,\n            this.y\n        ];\n    };\n    //@TODO\n    Area.prototype.isInside = function (x, y) {\n        return true;\n    };\n    Area.prototype.spawnChildren = function (x, y, width, height) {\n        return new Area(this.x + x, this.y + y, width, height, this.renderer);\n    };\n    return Area;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Area);\n\n\n//# sourceURL=webpack:///../gloop/displayFragment/Area.ts?");

/***/ }),

/***/ "../gloop/displayFragment/Cells.ts":
/*!*****************************************!*\
  !*** ../gloop/displayFragment/Cells.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Cells = /** @class */ (function () {\n    function Cells(x, y, nbColumns, nbLines, cellWidth, cellHeight, renderer) {\n        this.x = x;\n        this.y = y;\n        this.nbColumns = nbColumns;\n        this.nbLines = nbLines;\n        this.cellWidth = cellWidth;\n        this.cellHeight = cellHeight;\n        this.renderer = renderer;\n    }\n    // @TODO\n    Cells.prototype.drawLine = function (fX, fY, tX, tY, thickness) {\n        // this.renderer.drawLine(this.x + fX, this.y + fY, this.x + tX, tY, thickness)\n    };\n    Cells.prototype.drawRect = function (cellX, cellY, w, h, color, thickness) {\n        if (cellX < 0) {\n            cellX = this.nbColumns + cellX;\n        }\n        if (cellY < 0) {\n            cellY = this.nbLines + cellY;\n        }\n        this.renderer.drawRect(this.x + (cellX * this.cellWidth), this.y + (cellY * this.cellHeight), w * this.cellWidth, h * this.cellHeight, color, thickness);\n    };\n    Cells.prototype.makeBorder = function (x, y, color) {\n        this.drawRect(x, y, 1, 1, color);\n    };\n    Cells.prototype.fillRect = function (fX, fY, w, h, color) {\n        // this.renderer.fillRect(this.x + fX, this.y + fY, w, h, color)\n    };\n    // Draw Image element onto engine's canvas\n    Cells.prototype.drawImage = function (image, x, y, w, h, sx, sy) {\n        this.renderer.drawImage(image, this.x + x, this.y + y, w, h, this.x + sx, this.x + sy);\n    };\n    // @todo: create Text object, so the role of text placement is transfered to a different entity, Fragment shouldn't do it\n    Cells.prototype.writeText = function (text, x, y, size, fontFamily, color) {\n        if (size == undefined) {\n            size = 10;\n        }\n        if (x < 0) {\n            x = this.nbColumns + x;\n        }\n        if (y < 0) {\n            y = this.nbLines + y;\n        }\n        this.renderer.writeText(text, this.x + (x * this.cellWidth) + (this.cellWidth / 2), this.y + (y * this.cellHeight) + (this.cellHeight / 2), size, fontFamily, color);\n    };\n    Cells.prototype.display = function (cb) {\n        var _this = this;\n        this.renderer.display(function (T, r) {\n            cb(T, _this);\n        });\n        return this;\n    };\n    Cells.prototype.update = function (cb) {\n        var _this = this;\n        this.renderer.display(function (T, r) {\n            cb(T, _this);\n        });\n        return this;\n    };\n    Cells.prototype.getWidth = function () {\n        return this.cellWidth * this.nbColumns;\n    };\n    Cells.prototype.getHeight = function () {\n        return this.cellHeight * this.nbLines;\n    };\n    Cells.prototype.getX = function () {\n        return this.x;\n    };\n    Cells.prototype.getY = function () {\n        return this.y;\n    };\n    Cells.prototype.getRelativeXY = function (x, y) {\n        return [\n            Math.floor(x / this.cellWidth),\n            Math.floor(y / this.cellHeight)\n        ];\n    };\n    Cells.prototype.isInside = function (x, y) {\n        return x >= this.x &&\n            x <= this.x + this.getWidth() &&\n            y >= this.y &&\n            y <= this.y + this.getHeight();\n    };\n    Cells.prototype.spawnChildren = function (x, y, width, height) {\n        return new Cells(this.x + x * this.cellWidth, this.y + y * this.cellHeight, width, height, this.cellWidth, this.cellHeight, this.renderer);\n    };\n    return Cells;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cells);\n\n\n//# sourceURL=webpack:///../gloop/displayFragment/Cells.ts?");

/***/ }),

/***/ "../gloop/eventFragment/Click.ts":
/*!***************************************!*\
  !*** ../gloop/eventFragment/Click.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controls_Mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/Mouse */ \"../gloop/controls/Mouse.ts\");\n\nvar Click = /** @class */ (function () {\n    function Click() {\n    }\n    Click.prototype.on = function (f) {\n        this.f = f;\n        return this;\n    };\n    Click.prototype.do = function (cb) {\n        var _this = this;\n        _controls_Mouse__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onClick(function (coord) {\n            if (!_this.f.isInside(coord[0], coord[1])) {\n                return;\n            }\n            cb(_this.f.getRelativeXY(coord[0], coord[1]));\n        });\n    };\n    return Click;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Click());\n\n\n//# sourceURL=webpack:///../gloop/eventFragment/Click.ts?");

/***/ }),

/***/ "../gloop/gameEngine/Stateless.ts":
/*!****************************************!*\
  !*** ../gloop/gameEngine/Stateless.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Stateless = /** @class */ (function () {\n    function Stateless() {\n        this.toUpdate = [];\n    }\n    Stateless.prototype.update = function (cb) {\n        this.toUpdate.push(cb);\n    };\n    Stateless.prototype.doUpdates = function (T) {\n        for (var i in this.toUpdate) {\n            this.toUpdate[i](T);\n        }\n    };\n    return Stateless;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stateless);\n\n\n//# sourceURL=webpack:///../gloop/gameEngine/Stateless.ts?");

/***/ }),

/***/ "../gloop/graphicEngine/Renderer.ts":
/*!******************************************!*\
  !*** ../gloop/graphicEngine/Renderer.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Event */ \"../gloop/Event.ts\");\n\nvar Renderer = /** @class */ (function () {\n    function Renderer(xOverload, yOverload) {\n        var _this = this;\n        this.toDisplay = [];\n        this.xOverload = xOverload;\n        this.yOverload = yOverload;\n        _Event__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(_Event__WEBPACK_IMPORTED_MODULE_0__[\"EventType\"].SCENE_WILL_CHANGE, function () {\n            _this.toDisplay = [];\n        });\n    }\n    Renderer.prototype.setCanvas = function (scene, buffer) {\n        this.scene = scene;\n        this.buffer = buffer;\n    };\n    Renderer.prototype.getCanvas = function () {\n        return this.scene;\n    };\n    Renderer.prototype.display = function (cb) {\n        this.toDisplay.push(cb);\n    };\n    Renderer.prototype.doDisplays = function (T) {\n        for (var i in this.toDisplay) {\n            this.toDisplay[i](T, this);\n        }\n    };\n    // Draw a line onto engine's canvas\n    Renderer.prototype.drawLine = function (fX, fY, tX, tY, thickness) {\n        this.buffer.drawLine(fX, fY, tX, tY, thickness);\n    };\n    Renderer.prototype.drawRect = function (fX, fY, w, h, color, thickness) {\n        this.buffer.drawRect(fX + 0.5, fY + 0.5, w, h, color, thickness);\n    };\n    Renderer.prototype.fillRect = function (fX, fY, w, h, color) {\n        this.buffer.fillRect(fX + 0.5, fY + 0.5, w, h, color);\n    };\n    // Draw Image element onto engine's canvas\n    Renderer.prototype.drawImage = function (image, x, y, w, h, sx, sy) {\n        this.buffer.drawImage(image, x, y, w, h, sx, sy);\n    };\n    Renderer.prototype.writeText = function (text, x, y, size, fontFamily, color) {\n        if (size == undefined) {\n            size = 20;\n        }\n        var shalf = size / 2;\n        this.buffer.writeText(text, x - shalf, y + shalf, size, fontFamily, color);\n    };\n    Renderer.prototype.render = function () {\n        // this.scene.clear();\n        var imgData = this.buffer.ctx.getImageData(0, 0, this.buffer.width(), this.buffer.height());\n        this.scene.drawImageData(imgData, 0, 0, this.scene.width(), this.scene.height(), 0, 0);\n        this.buffer.clear();\n    };\n    Renderer.prototype.drawImageData = function (imgData, x, y, w, h, dx, dy) {\n        this.buffer.drawImageData(imgData, x, y, w, h, dx, dy);\n    };\n    return Renderer;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderer);\n\n\n//# sourceURL=webpack:///../gloop/graphicEngine/Renderer.ts?");

/***/ }),

/***/ "../gloop/graphicInterface/buttons/Simple.ts":
/*!***************************************************!*\
  !*** ../gloop/graphicInterface/buttons/Simple.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Simple = /** @class */ (function () {\n    function Simple(label, width, height, fontSize, fontFamily) {\n        this.label = label;\n        this.width = width;\n        this.height = height;\n        this.fontFamily = \"Meiryo, Yu Gothic\";\n        this.fontSize = 20;\n        this.borderThickness = 2;\n        this.borderColor = \"#AD1CC7\";\n        if (fontFamily != undefined) {\n            this.fontFamily = fontFamily;\n        }\n        if (fontSize != undefined) {\n            this.fontSize = fontSize;\n        }\n    }\n    Simple.prototype.getSize = function () {\n        return [this.width, this.height];\n    };\n    Simple.prototype.getLabel = function () {\n        return this.label;\n    };\n    Simple.prototype.display = function (x, y, f) {\n        var buttonF = f.spawnChildren(x, y, this.width, this.height);\n        buttonF.drawRect(0, 0, this.width, this.height, this.borderColor, this.borderThickness);\n        buttonF.writeText(this.label, 0, 0, this.fontSize, this.fontFamily);\n    };\n    return Simple;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Simple);\n\n\n//# sourceURL=webpack:///../gloop/graphicInterface/buttons/Simple.ts?");

/***/ }),

/***/ "../gloop/loop/Loop.ts":
/*!*****************************!*\
  !*** ../gloop/loop/Loop.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Loop = /** @class */ (function () {\n    function Loop(fps, graphicEngine, gameEngine) {\n        this.graphicEngine = graphicEngine;\n        this.gameEngine = gameEngine;\n        this.startingConditions = [];\n        this.pT = 0;\n        this.baseNT = 0;\n        this.setFrequencies(fps);\n    }\n    /**\n     * setFrequencies sets fps, iF & miF\n     * (iF = 1 / FPS, time between too frames)\n     * (miF = iF * 1000, time between frames in milliseconds)\n     */\n    Loop.prototype.setFrequencies = function (fps) {\n        this.fps = fps;\n        this.iF = 1 / fps;\n        this.miF = 1000 * this.iF;\n        console.info(\"setFrequencies(\" + fps + \") = {\", \"\\n\\tfps:\", fps, \"\\n\\tiF:\", this.iF, \"\\n\\tmiF:\", this.miF, \"\\n}\");\n    };\n    // pause cancels data & display loops\n    Loop.prototype.pause = function () {\n        console.info(\"paused\");\n        clearTimeout(this.cbSeed);\n        clearTimeout(this.dSeed);\n    };\n    // start triggers data & display update loops\n    Loop.prototype.start = function () {\n        var _this = this;\n        if (!this.canStart()) {\n            setTimeout(this.start.bind(this), this.miF);\n            return;\n        }\n        console.info(\"started\");\n        setTimeout(function () { return _this.dataLoop(0); }, 30);\n        setTimeout(function () { return _this.displayLoop(0); }, 45);\n    };\n    // canStart checks if every startingConditions are met\n    Loop.prototype.canStart = function () {\n        for (var i = 0; i < this.startingConditions.length; i++) {\n            if (this.startingConditions[i]() === false) {\n                return false;\n            }\n        }\n        return true;\n    };\n    // addStartingConditions adds bulk starting conditions (array of func)\n    Loop.prototype.addStartingConditions = function (conditions) {\n        this.startingConditions = conditions;\n    };\n    // dataLoop is an iteration of the data loop, it calls itself perpetually through setTimeout\n    Loop.prototype.dataLoop = function (T) {\n        var _this = this;\n        var nBefore = window.performance.now();\n        this.gameEngine.doUpdates(T);\n        var nAfter = window.performance.now();\n        this.cbSeed = setTimeout(function () { return _this.dataLoop(_this.miF); }, T - (nAfter - nBefore));\n    };\n    // displayLoop is an iteration of the display loop, it calls itself perpetually through setTimeout\n    Loop.prototype.displayLoop = function (T) {\n        var _this = this;\n        var nBefore = window.performance.now();\n        this.graphicEngine.doDisplays(T);\n        this.graphicEngine.render();\n        var nAfter = window.performance.now();\n        this.dSeed = setTimeout(function () { return _this.displayLoop(_this.miF); }, T - (nAfter - nBefore));\n    };\n    return Loop;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loop);\n\n\n//# sourceURL=webpack:///../gloop/loop/Loop.ts?");

/***/ }),

/***/ "../gloop/scene/Scenes.ts":
/*!********************************!*\
  !*** ../gloop/scene/Scenes.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Event */ \"../gloop/Event.ts\");\n\nvar ScenesHandler = /** @class */ (function () {\n    function ScenesHandler() {\n        this.scenesCB = new Map();\n    }\n    ScenesHandler.prototype.add = function (scene, cb) {\n        if (!this.scenesCB.has(scene)) {\n            this.scenesCB.set(scene, []);\n        }\n        this.scenesCB.get(scene).push(cb);\n        return this;\n    };\n    ScenesHandler.prototype.switch = function (scene) {\n        var _this = this;\n        if (!this.scenesCB.has(scene)) {\n            return new Error(\"Scene \" + scene + \"does not exist\");\n        }\n        _Event__WEBPACK_IMPORTED_MODULE_0__[\"default\"].trigger(_Event__WEBPACK_IMPORTED_MODULE_0__[\"EventType\"].SCENE_WILL_CHANGE, scene);\n        this.scenesCB.get(scene).forEach(function (cb) {\n            cb(_this);\n        });\n        this.currentScene = scene;\n        return null;\n    };\n    ScenesHandler.prototype.getCurrentSceneName = function () {\n        return this.currentScene;\n    };\n    return ScenesHandler;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScenesHandler);\n\n\n//# sourceURL=webpack:///../gloop/scene/Scenes.ts?");

/***/ }),

/***/ "./src/hiraganaLearningTool/Game.ts":
/*!******************************************!*\
  !*** ./src/hiraganaLearningTool/Game.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return defineScene; });\n/* harmony import */ var gloop_eventFragment_Click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gloop/eventFragment/Click */ \"../gloop/eventFragment/Click.ts\");\n/* harmony import */ var gloop_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gloop/Event */ \"../gloop/Event.ts\");\n/* harmony import */ var gloop_graphicInterface_buttons_Simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gloop/graphicInterface/buttons/Simple */ \"../gloop/graphicInterface/buttons/Simple.ts\");\n\n\n\nvar cellWidth;\nvar cellHeight;\nvar Alphabet;\n(function (Alphabet) {\n    Alphabet[Alphabet[\"HIRAGANA\"] = 0] = \"HIRAGANA\";\n    Alphabet[Alphabet[\"KATAKANA\"] = 1] = \"KATAKANA\";\n})(Alphabet || (Alphabet = {}));\nvar ButtonsID;\n(function (ButtonsID) {\n    ButtonsID[ButtonsID[\"HIRAGANA\"] = 255] = \"HIRAGANA\";\n    ButtonsID[ButtonsID[\"KATAKANA\"] = 256] = \"KATAKANA\";\n})(ButtonsID || (ButtonsID = {}));\nvar kanaMode = Alphabet.HIRAGANA;\nvar kana = new Map([\n    [Alphabet.HIRAGANA, [\n            'ん', 'わ', 'ら', 'や', 'ま', 'は', 'な', 'た', 'さ', 'か', 'あ',\n            null, null, 'り', null, 'み', 'ひ', 'に', 'ち', 'し', 'き', 'い',\n            null, null, 'る', 'ゆ', 'む', 'ふ', 'ぬ', 'つ', 'す', 'く', 'う',\n            null, null, 'れ', null, 'め', 'へ', 'ね', 'て', 'せ', 'け', 'え',\n            null, 'を', 'ろ', 'よ', 'も', 'ほ', 'の', 'と', 'そ', 'こ', 'お'\n        ]],\n    [Alphabet.KATAKANA, [\n            'ン', 'ワ', 'ラ', 'ヤ', 'マ', 'ハ', 'ナ', 'タ', 'サ', 'カ', 'ア',\n            null, null, 'リ', null, 'ミ', 'ヒ', 'ニ', 'チ', 'シ', 'キ', 'イ',\n            null, null, 'ル', 'ユ', 'ム', 'フ', 'ヌ', 'ツ', 'ス', 'ク', 'ウ',\n            null, null, 'レ', null, 'メ', 'ヘ', 'ネ', 'テ', 'セ', 'ケ', 'エ',\n            null, 'ヲ', 'ロ', 'ヨ', 'モ', 'ホ', 'ノ', 'ト', 'ソ', 'コ', 'オ'\n        ]],\n]);\nvar romaji = [\n    '', 'w', 'r', 'y', 'm', 'h', 'n', 't', 's', 'k', '-',\n    'a', 'i', 'u', 'e', 'o'\n];\nvar kanaCells = [];\nvar topInfoCells = [];\nvar rightInfoCells = [];\nvar menuCells = [];\nfunction onMenuClick(xy) {\n    if ((xy[0] != 9 && xy[0] != 10) || xy[1] != 0) {\n        return;\n    }\n    kanaMode = xy[0] == 9 ? Alphabet.HIRAGANA : Alphabet.KATAKANA;\n}\nfunction buildMenu() {\n    var cell = new Cell(ButtonsID.HIRAGANA);\n    cell.x = -cellWidth;\n    cell.y = 0;\n    menuCells.push(cell);\n    cell = new Cell(ButtonsID.KATAKANA);\n    cell.x = -0.01;\n    cell.y = 0;\n    menuCells.push(cell);\n}\nfunction buildKanaCells(kanaColumns, kanaLines) {\n    gloop_Event__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on(gloop_Event__WEBPACK_IMPORTED_MODULE_1__[\"default\"].EventType.CLICK, function (cell) {\n    });\n    var n = 0;\n    for (var i = 0; i < (kanaColumns * kanaLines); i++) {\n        var cell = void 0;\n        if (kana.get(kanaMode)[i] == null) {\n            continue;\n        }\n        cell = new Cell(n, i);\n        cell.x = (i % kanaColumns);\n        cell.y = Math.floor(i / kanaColumns);\n        n++;\n        kanaCells.push(cell);\n    }\n}\nfunction buildTopInfoCells(kanaColumns) {\n    for (var i = 0; i < kanaColumns; i++) {\n        var cell = new Cell(i);\n        cell.x = i;\n        cell.y = 0;\n        topInfoCells.push(cell);\n    }\n}\nfunction buildRightInfoCells(kanaColumns, kanaLines) {\n    for (var i = 0; i < kanaLines; i++) {\n        var cell = new Cell(kanaColumns + i);\n        cell.x = 0;\n        cell.y = i;\n        rightInfoCells.push(cell);\n    }\n}\nfunction drawMenu(T, g) {\n    var button = new gloop_graphicInterface_buttons_Simple__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"wesh alors\", 3, 1);\n    // button.font\n    button.display(2, 0, g);\n    g.makeBorder(-2, 0, \"#DC3023\");\n    g.writeText('ひ', -2, 0, 20, \"Meiryo, Yu Gothic\");\n    g.makeBorder(-1, 0, \"#DC3023\");\n    g.writeText('カ', -1, 0, 20, \"Meiryo, Yu Gothic\");\n}\nfunction drawHiraganaCells(T, g) {\n    for (var i = 0; i < kanaCells.length; i++) {\n        var cell = kanaCells[i];\n        g.makeBorder(cell.x, cell.y, \"#DC3023\");\n        g.writeText(kana.get(kanaMode)[cell.IDBoard], cell.x, cell.y, 20, \"Meiryo, Yu Gothic\");\n    }\n}\nfunction drawTopInfoCells(T, g) {\n    for (var i = 0; i < topInfoCells.length; i++) {\n        g.writeText(romaji[topInfoCells[i].ID], i, 0, 20, \"Meiryo, Yu Gothic\");\n    }\n}\nfunction drawRightInfoCells(T, g) {\n    for (var i = 0; i < rightInfoCells.length; i++) {\n        g.writeText(romaji[rightInfoCells[i].ID], 0, i, 20, \"Meiryo, Yu Gothic\");\n    }\n}\nfunction setWidth(w) {\n    cellWidth = w;\n}\nfunction setHeight(h) {\n    cellHeight = h;\n}\nvar Cell = /** @class */ (function () {\n    function Cell(ID, IDBoard) {\n        this.ID = ID;\n        this.IDBoard = IDBoard;\n        this.isHidden = true;\n    }\n    Cell.prototype.getID = function () {\n        return this.ID;\n    };\n    return Cell;\n}());\nfunction defineScene(gloop) {\n    return function () {\n        var canvasDimensions = gloop.getCanvasDimensions();\n        var cellW = 50;\n        var cellH = 50;\n        var kanaLines = 5;\n        var kanaColumns = 11;\n        setWidth(cellW);\n        setHeight(cellH);\n        buildMenu();\n        buildKanaCells(kanaColumns, kanaLines);\n        buildTopInfoCells(kanaColumns);\n        buildRightInfoCells(kanaColumns, kanaLines);\n        var menuFragment = gloop.newCells(0, 0, kanaColumns, 1, cellW, cellH);\n        menuFragment.display(drawMenu);\n        gloop_eventFragment_Click__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(menuFragment).do(onMenuClick);\n        gloop.newCells(0, cellH, kanaColumns, 1, cellW, cellH)\n            .display(drawTopInfoCells);\n        gloop.newCells(canvasDimensions[0] - cellW, cellH * 2, 1, kanaLines, cellW, cellH)\n            .display(drawRightInfoCells);\n        gloop.newCells(0, cellH * 2, kanaColumns, kanaLines, cellW, cellH)\n            .display(drawHiraganaCells);\n    };\n}\n\n\n//# sourceURL=webpack:///./src/hiraganaLearningTool/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gloop_Gloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gloop/Gloop */ \"../gloop/Gloop.ts\");\n/* harmony import */ var _hiraganaLearningTool_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hiraganaLearningTool/Game */ \"./src/hiraganaLearningTool/Game.ts\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var gloop = new gloop_Gloop__WEBPACK_IMPORTED_MODULE_0__[\"Mini\"](1, \"#board\", \"#buffer\");\n    gloop.mouseInit();\n    gloop.addScene(\"PLAY\", Object(_hiraganaLearningTool_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(gloop));\n    // gloop.addScene(\"INTRO\", Intro(gloop, \"PLAY\"))\n    gloop.switchScene(\"PLAY\");\n    gloop.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });