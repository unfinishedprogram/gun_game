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

/***/ "./src/display.ts":
/*!************************!*\
  !*** ./src/display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Display = void 0;\nvar Display = /** @class */ (function () {\n    function Display() {\n    }\n    Display.initalize = function () {\n        var _this = this;\n        this.c = document.getElementById(\"canvas\");\n        this.viewport = { x: -this.width / 2, y: -this.height / 2, width: this.width, height: this.height };\n        this.c.width = this.width;\n        this.c.height = this.height;\n        this.ctx = this.c.getContext(\"2d\");\n        this.resize();\n        window.onresize = function () {\n            _this.resize();\n        };\n    };\n    Display.drawObject = function (object) {\n        var sprite = object.sprite;\n        this.ctx.translate(object.position.x, object.position.y);\n        this.ctx.rotate(object.rotation.angle);\n        this.ctx.drawImage(sprite.image, -sprite.width / 2, -sprite.height / 2, sprite.width, sprite.height);\n        this.ctx.rotate(-object.rotation.angle);\n        this.ctx.translate(-object.position.x, -object.position.y);\n    };\n    Display.clear = function () {\n        this.ctx.setTransform(1, 0, 0, 1, 0, 0);\n        this.ctx.clearRect(0, 0, this.width, this.height);\n        this.ctx.translate(-this.viewport.x, -this.viewport.y);\n    };\n    Display.draw = function () {\n        this.clear();\n        this.drawGrid(250);\n    };\n    Display.drawGrid = function (gap) {\n        this.ctx.fillStyle = \"white\";\n        var tx = Math.round(this.viewport.x / gap);\n        var rx = tx * gap;\n        var ty = Math.round(this.viewport.y / gap);\n        var ry = ty * gap;\n        for (var x = rx - gap; x < rx + this.viewport.width + gap; x += gap) {\n            this.ctx.fillRect(x, this.viewport.y, 2, this.viewport.height);\n        }\n        for (var y = ry - gap; y < ry + this.viewport.height + gap; y += gap) {\n            this.ctx.fillRect(this.viewport.x, y, this.viewport.width, 2);\n        }\n    };\n    Display.resize = function () {\n        this.width = window.innerWidth;\n        this.height = window.innerHeight;\n        this.c.width = this.width;\n        this.c.height = this.height;\n        this.viewport.width = this.width;\n        this.viewport.height = this.height;\n    };\n    Display.width = 3000;\n    Display.height = 2000;\n    return Display;\n}());\nexports.Display = Display;\n\n\n//# sourceURL=webpack://webpackpc/./src/display.ts?");

/***/ }),

/***/ "./src/gameObjects/bullet.ts":
/*!***********************************!*\
  !*** ./src/gameObjects/bullet.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bullet = void 0;\nvar gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObjects/gameObject.ts\");\nvar sprites_1 = __webpack_require__(/*! ../media/sprites */ \"./src/media/sprites.ts\");\nvar Bullet = /** @class */ (function (_super) {\n    __extends(Bullet, _super);\n    function Bullet(rotation, position, velocity) {\n        var _this = _super.call(this, position, rotation, sprites_1.Sprites.bullet) || this;\n        _this.trajectory = rotation.unitVec().multiplyScalor(velocity);\n        _this.lifetime = 500;\n        return _this;\n    }\n    Bullet.prototype.step = function (dt) {\n        this.position.add(this.trajectory);\n        this.lifetime -= dt;\n        if (this.lifetime < 0)\n            this.remove();\n    };\n    return Bullet;\n}(gameObject_1.GameObject));\nexports.Bullet = Bullet;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObjects/bullet.ts?");

/***/ }),

/***/ "./src/gameObjects/gameObject.ts":
/*!***************************************!*\
  !*** ./src/gameObjects/gameObject.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameObject = void 0;\nvar world_1 = __webpack_require__(/*! ../world */ \"./src/world.ts\");\nvar GameObject = /** @class */ (function () {\n    function GameObject(position, rotation, sprite) {\n        this.position = position;\n        this.rotation = rotation;\n        this.sprite = sprite;\n    }\n    GameObject.prototype.step = function (dt) { };\n    GameObject.prototype.remove = function () {\n        world_1.World.removeObject(this);\n    };\n    return GameObject;\n}());\nexports.GameObject = GameObject;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObjects/gameObject.ts?");

/***/ }),

/***/ "./src/gameObjects/gun.ts":
/*!********************************!*\
  !*** ./src/gameObjects/gun.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Gun = void 0;\nvar audioController_1 = __webpack_require__(/*! ../media/audioController */ \"./src/media/audioController.ts\");\nvar bullet_1 = __webpack_require__(/*! ./bullet */ \"./src/gameObjects/bullet.ts\");\nvar gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObjects/gameObject.ts\");\nvar muzzleFlash_1 = __webpack_require__(/*! ./muzzleFlash */ \"./src/gameObjects/muzzleFlash.ts\");\nvar vec2_1 = __webpack_require__(/*! ../util/vec2 */ \"./src/util/vec2.ts\");\nvar world_1 = __webpack_require__(/*! ../world */ \"./src/world.ts\");\nvar sprites_1 = __webpack_require__(/*! ../media/sprites */ \"./src/media/sprites.ts\");\nvar sounds_1 = __webpack_require__(/*! ../media/sounds */ \"./src/media/sounds.ts\");\nvar Gun = /** @class */ (function (_super) {\n    __extends(Gun, _super);\n    function Gun(position, rotation, user) {\n        var _this = _super.call(this, position, rotation, sprites_1.Sprites.gun) || this;\n        console.log(sprites_1.Sprites.gun);\n        _this.rvelocity = 0;\n        _this.velocity = new vec2_1.Vec2(0, 0);\n        _this.rdamp = 0.98;\n        _this.vdamp = 0.97;\n        document.addEventListener('keydown', function (e) { return _this.keyPressed(e); });\n        document.addEventListener('touchstart', function (e) { return _this.touched(e); }, false);\n        return _this;\n    }\n    Gun.prototype.shoot = function () {\n        this.velocity.add(this.rotation.unitVec().multiplyScalor(-40));\n        this.rvelocity += 0.25;\n        var loc = this.position.copy();\n        var offset = new vec2_1.Vec2(46, -20);\n        offset.rotate(this.rotation);\n        loc.add(offset);\n        world_1.World.objects.push(new bullet_1.Bullet(this.rotation.copy(), loc, 45));\n        world_1.World.objects.push(new muzzleFlash_1.MuzzleFlash(this.rotation.copy(), loc.copy()));\n        audioController_1.AudioController.playSound(sounds_1.Sounds.gunshot);\n    };\n    Gun.prototype.step = function (dt) {\n        this.position.add(this.velocity);\n        this.rotation.add(this.rvelocity);\n        this.velocity.multiplyScalor(this.vdamp);\n        this.rotation.angle *= this.rdamp;\n    };\n    Gun.prototype.keyPressed = function (e) {\n        switch (e.code) {\n            case \"Space\":\n                this.shoot();\n                break;\n            default: break;\n        }\n    };\n    // BROKEN FOR NOW TODO FIX ME\n    Gun.prototype.touched = function (e) {\n        this.shoot();\n    };\n    return Gun;\n}(gameObject_1.GameObject));\nexports.Gun = Gun;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObjects/gun.ts?");

/***/ }),

/***/ "./src/gameObjects/muzzleFlash.ts":
/*!****************************************!*\
  !*** ./src/gameObjects/muzzleFlash.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MuzzleFlash = void 0;\nvar gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObjects/gameObject.ts\");\nvar sprites_1 = __webpack_require__(/*! ../media/sprites */ \"./src/media/sprites.ts\");\nvar MuzzleFlash = /** @class */ (function (_super) {\n    __extends(MuzzleFlash, _super);\n    function MuzzleFlash(rotation, position) {\n        var _this = _super.call(this, position, rotation, sprites_1.Sprites.muzzleflash) || this;\n        _this.lifetime = 50;\n        return _this;\n    }\n    MuzzleFlash.prototype.step = function (dt) {\n        this.lifetime -= dt;\n        if (this.lifetime < 0)\n            this.remove();\n    };\n    return MuzzleFlash;\n}(gameObject_1.GameObject));\nexports.MuzzleFlash = MuzzleFlash;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObjects/muzzleFlash.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar display_1 = __webpack_require__(/*! ./display */ \"./src/display.ts\");\nvar gun_1 = __webpack_require__(/*! ./gameObjects/gun */ \"./src/gameObjects/gun.ts\");\nvar rotation_1 = __webpack_require__(/*! ./util/rotation */ \"./src/util/rotation.ts\");\nvar sounds_1 = __webpack_require__(/*! ./media/sounds */ \"./src/media/sounds.ts\");\nvar sprites_1 = __webpack_require__(/*! ./media/sprites */ \"./src/media/sprites.ts\");\nvar user_1 = __webpack_require__(/*! ./user */ \"./src/user.ts\");\nvar vec2_1 = __webpack_require__(/*! ./util/vec2 */ \"./src/util/vec2.ts\");\nvar world_1 = __webpack_require__(/*! ./world */ \"./src/world.ts\");\ndocument.addEventListener(\"DOMContentLoaded\", main);\nfunction main() {\n    display_1.Display.initalize();\n    sprites_1.Sprites.initalize();\n    sounds_1.Sounds.initalize();\n    var player1 = new user_1.User(\"player1\");\n    var myGun = new gun_1.Gun(new vec2_1.Vec2(0, 0), new rotation_1.Rotation(0), player1);\n    world_1.World.objects.push(myGun);\n    console.log(sprites_1.Sprites.bullet);\n    console.log(sprites_1.Sprites.gun);\n    console.log(sprites_1.Sprites.muzzleflash);\n    console.log(sounds_1.Sounds.gunshot);\n    setInterval(function () {\n        display_1.Display.clear();\n        display_1.Display.draw();\n        world_1.World.step(16);\n        display_1.Display.viewport.x += ((myGun.position.x - display_1.Display.viewport.width / 2) - display_1.Display.viewport.x) / 10;\n        display_1.Display.viewport.y += ((myGun.position.y - display_1.Display.viewport.height / 2) - display_1.Display.viewport.y) / 10;\n    }, 16);\n}\n\n\n//# sourceURL=webpack://webpackpc/./src/index.ts?");

/***/ }),

/***/ "./src/media/audioController.ts":
/*!**************************************!*\
  !*** ./src/media/audioController.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AudioController = void 0;\nvar AudioController = /** @class */ (function () {\n    function AudioController() {\n    }\n    AudioController.playSound = function (sound) {\n        var elm = sound.cloneNode();\n        elm.volume = 0.1;\n        elm.addEventListener(\"ended\", function () { return elm.remove(); });\n        elm.play();\n    };\n    return AudioController;\n}());\nexports.AudioController = AudioController;\n\n\n//# sourceURL=webpack://webpackpc/./src/media/audioController.ts?");

/***/ }),

/***/ "./src/media/sounds.ts":
/*!*****************************!*\
  !*** ./src/media/sounds.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sounds = void 0;\nvar Sounds = /** @class */ (function () {\n    function Sounds() {\n    }\n    Sounds.initalize = function () {\n        this.gunshot = document.getElementById(\"gunshot\");\n    };\n    return Sounds;\n}());\nexports.Sounds = Sounds;\n\n\n//# sourceURL=webpack://webpackpc/./src/media/sounds.ts?");

/***/ }),

/***/ "./src/media/sprites.ts":
/*!******************************!*\
  !*** ./src/media/sprites.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sprites = void 0;\nvar Sprites = /** @class */ (function () {\n    function Sprites() {\n    }\n    Sprites.initalize = function () {\n        this.gun = {\n            image: this.fromId(\"gun\"),\n            width: 100,\n            height: 64,\n        };\n        this.bullet = {\n            image: this.fromId(\"bullet\"),\n            width: 30,\n            height: 15,\n        };\n        this.muzzleflash = {\n            image: this.fromId(\"muzzleflash\"),\n            width: 150,\n            height: 75,\n        };\n    };\n    Sprites.fromId = function (id) {\n        return document.getElementById(id);\n    };\n    return Sprites;\n}());\nexports.Sprites = Sprites;\n\n\n//# sourceURL=webpack://webpackpc/./src/media/sprites.ts?");

/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = void 0;\nvar User = /** @class */ (function () {\n    function User(name) {\n        this.name = name;\n        this.uuid = \"temp\";\n    }\n    return User;\n}());\nexports.User = User;\n\n\n//# sourceURL=webpack://webpackpc/./src/user.ts?");

/***/ }),

/***/ "./src/util/rotation.ts":
/*!******************************!*\
  !*** ./src/util/rotation.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Rotation = void 0;\nvar vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/util/vec2.ts\");\nvar Rotation = /** @class */ (function () {\n    // Takes radian rotation or unit vector\n    function Rotation(rot) {\n        if (typeof rot == \"number\")\n            this.angle = rot;\n        else\n            this.angle = Math.atan2(rot.x, rot.y);\n    }\n    Rotation.prototype.unitVec = function () {\n        return new vec2_1.Vec2(Math.cos(this.angle), Math.sin(this.angle));\n    };\n    Rotation.prototype.add = function (a) {\n        this.angle += a;\n    };\n    Rotation.prototype.copy = function () {\n        return new Rotation(this.angle);\n    };\n    return Rotation;\n}());\nexports.Rotation = Rotation;\n\n\n//# sourceURL=webpack://webpackpc/./src/util/rotation.ts?");

/***/ }),

/***/ "./src/util/vec2.ts":
/*!**************************!*\
  !*** ./src/util/vec2.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Vec2 = void 0;\nvar Vec2 = /** @class */ (function () {\n    function Vec2(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    Vec2.prototype.magnitude = function () {\n        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\n    };\n    Vec2.prototype.asUnit = function () {\n        var mag = this.magnitude();\n        return new Vec2(this.x / mag, this.y / mag);\n    };\n    Vec2.prototype.add = function (vec) {\n        this.x += vec.x;\n        this.y += vec.y;\n    };\n    Vec2.prototype.multiplyScalor = function (mag) {\n        this.x *= mag;\n        this.y *= mag;\n        return this;\n    };\n    Vec2.prototype.copy = function () {\n        return new Vec2(this.x, this.y);\n    };\n    Vec2.prototype.rotate = function (angle) {\n        var a = 0;\n        if (typeof angle == \"number\")\n            a = angle;\n        else\n            a = angle.angle;\n        var cs = Math.cos(a);\n        var sn = Math.sin(a);\n        var x = this.x;\n        var y = this.y;\n        this.x = x * cs - y * sn;\n        this.y = x * sn + y * cs;\n    };\n    return Vec2;\n}());\nexports.Vec2 = Vec2;\n\n\n//# sourceURL=webpack://webpackpc/./src/util/vec2.ts?");

/***/ }),

/***/ "./src/world.ts":
/*!**********************!*\
  !*** ./src/world.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.World = void 0;\nvar display_1 = __webpack_require__(/*! ./display */ \"./src/display.ts\");\nvar World = /** @class */ (function () {\n    function World() {\n    }\n    World.step = function (dt) {\n        this.objects.forEach(function (value) {\n            value.step(dt);\n            console.log(value);\n            display_1.Display.drawObject(value);\n        });\n    };\n    World.removeObject = function (object) {\n        this.objects.splice(this.objects.indexOf(object), 1);\n    };\n    World.objects = [];\n    return World;\n}());\nexports.World = World;\n\n\n//# sourceURL=webpack://webpackpc/./src/world.ts?");

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