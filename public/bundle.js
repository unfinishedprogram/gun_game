/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/audioController.ts":
/*!********************************!*\
  !*** ./src/audioController.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AudioController = void 0;\nvar AudioController = /** @class */ (function () {\n    function AudioController() {\n    }\n    AudioController.playSound = function (src) {\n        var elm = document.createElement(\"audio\");\n        elm.src = src;\n        elm.volume = 0.1;\n        elm.addEventListener(\"ended\", function () { return elm.remove(); });\n        elm.play();\n    };\n    AudioController.audioElements = [];\n    return AudioController;\n}());\nexports.AudioController = AudioController;\n\n\n//# sourceURL=webpack://webpackpc/./src/audioController.ts?");

/***/ }),

/***/ "./src/bullet.ts":
/*!***********************!*\
  !*** ./src/bullet.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bullet = void 0;\nvar gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.ts\");\nvar Bullet = /** @class */ (function (_super) {\n    __extends(Bullet, _super);\n    function Bullet(rotation, position, velocity) {\n        var _this = this;\n        var elm = document.createElement(\"img\");\n        elm.src = \"bullet.png\";\n        _this = _super.call(this, position, rotation, elm, 20, 10) || this;\n        _this.trajectory = rotation.unitVec().multiplyScalor(velocity);\n        _this.lifetime = 500;\n        return _this;\n    }\n    Bullet.prototype.step = function (dt) {\n        this.position.add(this.trajectory);\n        this.lifetime -= dt;\n        if (this.lifetime < 0)\n            this.remove();\n    };\n    return Bullet;\n}(gameObject_1.GameObject));\nexports.Bullet = Bullet;\n\n\n//# sourceURL=webpack://webpackpc/./src/bullet.ts?");

/***/ }),

/***/ "./src/display.ts":
/*!************************!*\
  !*** ./src/display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Display = void 0;\nvar Display = /** @class */ (function () {\n    function Display() {\n    }\n    Display.initalize = function () {\n        var _this = this;\n        this.c = document.getElementById(\"canvas\");\n        this.viewport = { x: -this.width / 2, y: -this.height / 2, width: this.width, height: this.height };\n        this.c.width = this.width;\n        this.c.height = this.height;\n        this.ctx = this.c.getContext(\"2d\");\n        this.resize();\n        window.onresize = function () {\n            _this.resize();\n        };\n    };\n    Display.drawObject = function (object) {\n        this.ctx.translate(object.position.x, object.position.y);\n        this.ctx.rotate(object.rotation.angle);\n        this.ctx.drawImage(object.sprite, -object.width / 2, -object.height / 2, object.width, object.height);\n        this.ctx.rotate(-object.rotation.angle);\n        this.ctx.translate(-object.position.x, -object.position.y);\n    };\n    Display.clear = function () {\n        this.ctx.setTransform(1, 0, 0, 1, 0, 0);\n        this.ctx.clearRect(0, 0, this.width, this.height);\n        this.ctx.translate(-this.viewport.x, -this.viewport.y);\n    };\n    Display.draw = function () {\n        this.clear();\n        this.drawGrid(250);\n    };\n    Display.drawGrid = function (gap) {\n        this.ctx.fillStyle = \"white\";\n        var tx = Math.round(this.viewport.x / gap);\n        var rx = tx * gap;\n        var ty = Math.round(this.viewport.y / gap);\n        var ry = ty * gap;\n        for (var x = rx - gap; x < rx + this.viewport.width + gap; x += gap) {\n            this.ctx.fillRect(x, this.viewport.y, 2, this.viewport.height);\n        }\n        for (var y = ry - gap; y < ry + this.viewport.height + gap; y += gap) {\n            this.ctx.fillRect(this.viewport.x, y, this.viewport.width, 2);\n        }\n    };\n    Display.resize = function () {\n        this.width = window.innerWidth;\n        this.height = window.innerHeight;\n        this.c.width = this.width;\n        this.c.height = this.height;\n        this.viewport.width = this.width;\n        this.viewport.height = this.height;\n    };\n    Display.width = 3000;\n    Display.height = 2000;\n    return Display;\n}());\nexports.Display = Display;\n\n\n//# sourceURL=webpack://webpackpc/./src/display.ts?");

/***/ }),

/***/ "./src/gameObject.ts":
/*!***************************!*\
  !*** ./src/gameObject.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameObject = void 0;\nvar world_1 = __webpack_require__(/*! ./world */ \"./src/world.ts\");\nvar GameObject = /** @class */ (function () {\n    function GameObject(pos, rot, elm, w, h) {\n        this.width = w;\n        this.height = h;\n        this.position = pos;\n        this.rotation = rot;\n        this.sprite = elm;\n    }\n    GameObject.prototype.step = function (dt) {\n    };\n    GameObject.prototype.remove = function () {\n        world_1.World.removeObject(this);\n    };\n    return GameObject;\n}());\nexports.GameObject = GameObject;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObject.ts?");

/***/ }),

/***/ "./src/gun.ts":
/*!********************!*\
  !*** ./src/gun.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Gun = void 0;\nvar audioController_1 = __webpack_require__(/*! ./audioController */ \"./src/audioController.ts\");\nvar bullet_1 = __webpack_require__(/*! ./bullet */ \"./src/bullet.ts\");\nvar gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.ts\");\nvar muzzleFlash_1 = __webpack_require__(/*! ./muzzleFlash */ \"./src/muzzleFlash.ts\");\nvar vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/vec2.ts\");\nvar world_1 = __webpack_require__(/*! ./world */ \"./src/world.ts\");\nvar Gun = /** @class */ (function (_super) {\n    __extends(Gun, _super);\n    function Gun(pos, vel, rot) {\n        var _this = this;\n        var elm = document.getElementById(\"gun\");\n        _this = _super.call(this, pos, rot, elm, 100, 64) || this;\n        _this.rvelocity = 0;\n        _this.position = pos;\n        _this.velocity = vel;\n        _this.rotation = rot;\n        _this.rdamp = 0.98;\n        _this.vdamp = 0.97;\n        document.addEventListener('keydown', function (e) { return _this.keyPressed(e); });\n        return _this;\n    }\n    Gun.prototype.shoot = function () {\n        this.velocity.add(this.rotation.unitVec().multiplyScalor(-40));\n        this.rvelocity += 0.25;\n        var loc = this.position.copy();\n        var off = new vec2_1.Vec2(46, -20);\n        off.rotate(this.rotation);\n        loc.add(off);\n        world_1.World.objects.push(new bullet_1.Bullet(this.rotation.copy(), loc, 45));\n        world_1.World.objects.push(new muzzleFlash_1.MuzzleFlash(this.rotation.copy(), loc.copy()));\n        audioController_1.AudioController.playSound(\"gunshot.mp3\");\n    };\n    Gun.prototype.step = function (dt) {\n        this.position.add(this.velocity);\n        this.rotation.add(this.rvelocity);\n        this.velocity.multiplyScalor(this.vdamp);\n        this.rotation.angle *= this.rdamp;\n    };\n    Gun.prototype.keyPressed = function (e) {\n        console.log(e);\n        switch (e.code) {\n            case \"Space\":\n                this.shoot();\n                break;\n            default: break;\n        }\n    };\n    return Gun;\n}(gameObject_1.GameObject));\nexports.Gun = Gun;\n\n\n//# sourceURL=webpack://webpackpc/./src/gun.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar display_1 = __webpack_require__(/*! ./display */ \"./src/display.ts\");\nvar gun_1 = __webpack_require__(/*! ./gun */ \"./src/gun.ts\");\nvar rotation_1 = __webpack_require__(/*! ./rotation */ \"./src/rotation.ts\");\nvar vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/vec2.ts\");\nvar world_1 = __webpack_require__(/*! ./world */ \"./src/world.ts\");\nwindow.onload = function () {\n    console.log(\"Loaded\");\n    var myGun = new gun_1.Gun(new vec2_1.Vec2(0, 0), new vec2_1.Vec2(0, 0), new rotation_1.Rotation(0));\n    world_1.World.objects.push(myGun);\n    display_1.Display.initalize();\n    setInterval(function () {\n        display_1.Display.clear();\n        display_1.Display.draw();\n        world_1.World.step(16);\n        display_1.Display.viewport.x += ((myGun.position.x - display_1.Display.viewport.width / 2) - display_1.Display.viewport.x) / 10;\n        display_1.Display.viewport.y += ((myGun.position.y - display_1.Display.viewport.height / 2) - display_1.Display.viewport.y) / 10;\n    }, 16);\n};\n\n\n//# sourceURL=webpack://webpackpc/./src/index.ts?");

/***/ }),

/***/ "./src/muzzleFlash.ts":
/*!****************************!*\
  !*** ./src/muzzleFlash.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MuzzleFlash = void 0;\nvar gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObject.ts\");\nvar MuzzleFlash = /** @class */ (function (_super) {\n    __extends(MuzzleFlash, _super);\n    function MuzzleFlash(rotation, position) {\n        var _this = this;\n        var elm = document.createElement(\"img\");\n        elm.src = \"flash.png\";\n        _this = _super.call(this, position, rotation, elm, 150, 75) || this;\n        _this.lifetime = 50;\n        return _this;\n    }\n    MuzzleFlash.prototype.step = function (dt) {\n        this.lifetime -= dt;\n        if (this.lifetime < 0)\n            this.remove();\n    };\n    return MuzzleFlash;\n}(gameObject_1.GameObject));\nexports.MuzzleFlash = MuzzleFlash;\n\n\n//# sourceURL=webpack://webpackpc/./src/muzzleFlash.ts?");

/***/ }),

/***/ "./src/rotation.ts":
/*!*************************!*\
  !*** ./src/rotation.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Rotation = void 0;\nvar vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/vec2.ts\");\nvar Rotation = /** @class */ (function () {\n    // Takes radian rotation or unit vector\n    function Rotation(rot) {\n        if (typeof rot == \"number\")\n            this.angle = rot;\n        else\n            this.angle = Math.atan2(rot.x, rot.y);\n    }\n    Rotation.prototype.unitVec = function () {\n        return new vec2_1.Vec2(Math.cos(this.angle), Math.sin(this.angle));\n    };\n    Rotation.prototype.add = function (a) {\n        this.angle += a;\n    };\n    Rotation.prototype.copy = function () {\n        return new Rotation(this.angle);\n    };\n    return Rotation;\n}());\nexports.Rotation = Rotation;\n\n\n//# sourceURL=webpack://webpackpc/./src/rotation.ts?");

/***/ }),

/***/ "./src/vec2.ts":
/*!*********************!*\
  !*** ./src/vec2.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Vec2 = void 0;\nvar Vec2 = /** @class */ (function () {\n    function Vec2(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    Vec2.prototype.magnitude = function () {\n        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\n    };\n    Vec2.prototype.asUnit = function () {\n        var mag = this.magnitude();\n        return new Vec2(this.x / mag, this.y / mag);\n    };\n    Vec2.prototype.add = function (vec) {\n        this.x += vec.x;\n        this.y += vec.y;\n    };\n    Vec2.prototype.multiplyScalor = function (mag) {\n        this.x *= mag;\n        this.y *= mag;\n        return this;\n    };\n    Vec2.prototype.copy = function () {\n        return new Vec2(this.x, this.y);\n    };\n    Vec2.prototype.rotate = function (angle) {\n        var a = 0;\n        if (typeof angle == \"number\")\n            a = angle;\n        else\n            a = angle.angle;\n        var cs = Math.cos(a);\n        var sn = Math.sin(a);\n        var x = this.x;\n        var y = this.y;\n        this.x = x * cs - y * sn;\n        this.y = x * sn + y * cs;\n    };\n    return Vec2;\n}());\nexports.Vec2 = Vec2;\n\n\n//# sourceURL=webpack://webpackpc/./src/vec2.ts?");

/***/ }),

/***/ "./src/world.ts":
/*!**********************!*\
  !*** ./src/world.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.World = void 0;\nvar display_1 = __webpack_require__(/*! ./display */ \"./src/display.ts\");\nvar World = /** @class */ (function () {\n    function World() {\n    }\n    World.step = function (dt) {\n        this.objects.forEach(function (value) {\n            value.step(dt);\n            display_1.Display.drawObject(value);\n        });\n    };\n    World.removeObject = function (object) {\n        this.objects.splice(this.objects.indexOf(object), 1);\n    };\n    World.objects = [];\n    return World;\n}());\nexports.World = World;\n\n\n//# sourceURL=webpack://webpackpc/./src/world.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;