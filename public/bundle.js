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

/***/ "./src/cookies.ts":
/*!************************!*\
  !*** ./src/cookies.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Cookies = void 0;\nconst settings_1 = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\nclass Cookies {\n    static saveSettings(settings) {\n        document.cookie = \"data=\" + JSON.stringify(settings);\n    }\n    static loadSettingsFromCookie() {\n        let settings;\n        try {\n            console.log(document.cookie.replace(/(?:(?:^|.*;\\s*)data\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\"));\n            settings = JSON.parse(document.cookie.replace(/(?:(?:^|.*;\\s*)data\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\"));\n        }\n        catch (e) {\n            console.log(\"Failed to load cookie\");\n            settings = { chroma: true, bloom: true, mute: false };\n            this.saveSettings(settings);\n        }\n        return new settings_1.Settings(settings);\n    }\n}\nexports.Cookies = Cookies;\n\n\n//# sourceURL=webpack://webpackpc/./src/cookies.ts?");

/***/ }),

/***/ "./src/display.ts":
/*!************************!*\
  !*** ./src/display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Display = void 0;\nclass Display {\n    static initalize() {\n        this.c = document.getElementById(\"canvas\");\n        this.viewport = { x: -this.width / 2, y: -this.height / 2, width: this.width, height: this.height };\n        this.c.width = this.width;\n        this.c.height = this.height;\n        this.ctx = this.c.getContext(\"2d\");\n        this.resize();\n        window.onresize = () => {\n            this.resize();\n        };\n    }\n    static drawObject(object) {\n        let sprite = object.sprite;\n        this.ctx.translate(object.position.x, object.position.y);\n        this.ctx.rotate(object.rotation.angle);\n        this.ctx.drawImage(sprite.image, -sprite.width / 2, -sprite.height / 2, sprite.width, sprite.height);\n        this.ctx.rotate(-object.rotation.angle);\n        this.ctx.translate(-object.position.x, -object.position.y);\n    }\n    static clear() {\n        this.ctx.setTransform(1, 0, 0, 1, 0, 0);\n        this.ctx.clearRect(0, 0, this.width, this.height);\n        this.ctx.translate(-this.viewport.x, -this.viewport.y);\n    }\n    static draw() {\n        this.clear();\n        this.drawGrid(250);\n    }\n    static drawGrid(gap) {\n        this.ctx.fillStyle = \"white\";\n        let tx = Math.round(this.viewport.x / gap);\n        let rx = tx * gap;\n        let ty = Math.round(this.viewport.y / gap);\n        let ry = ty * gap;\n        for (let x = rx - gap; x < rx + this.viewport.width + gap; x += gap) {\n            this.ctx.fillRect(x, this.viewport.y, 2, this.viewport.height);\n        }\n        for (let y = ry - gap; y < ry + this.viewport.height + gap; y += gap) {\n            this.ctx.fillRect(this.viewport.x, y, this.viewport.width, 2);\n        }\n    }\n    static resize() {\n        this.width = window.innerWidth;\n        this.height = window.innerHeight;\n        this.c.width = this.width;\n        this.c.height = this.height;\n        this.viewport.width = this.width;\n        this.viewport.height = this.height;\n    }\n}\nexports.Display = Display;\nDisplay.width = 3000;\nDisplay.height = 2000;\n\n\n//# sourceURL=webpack://webpackpc/./src/display.ts?");

/***/ }),

/***/ "./src/gameObjects/bullet.ts":
/*!***********************************!*\
  !*** ./src/gameObjects/bullet.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Bullet = void 0;\nconst gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObjects/gameObject.ts\");\nconst sprites_1 = __webpack_require__(/*! ../media/sprites */ \"./src/media/sprites.ts\");\nclass Bullet extends gameObject_1.GameObject {\n    constructor(rotation, position, velocity) {\n        super(position, rotation, sprites_1.Sprites.bullet);\n        this.trajectory = rotation.unitVec().multiplyScalor(velocity);\n        this.lifetime = 500;\n    }\n    step(dt) {\n        this.position.add(this.trajectory);\n        this.lifetime -= dt;\n        if (this.lifetime < 0)\n            this.remove();\n    }\n}\nexports.Bullet = Bullet;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObjects/bullet.ts?");

/***/ }),

/***/ "./src/gameObjects/gameObject.ts":
/*!***************************************!*\
  !*** ./src/gameObjects/gameObject.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameObject = void 0;\nconst world_1 = __webpack_require__(/*! ../world */ \"./src/world.ts\");\nclass GameObject {\n    constructor(position, rotation, sprite) {\n        this.position = position;\n        this.rotation = rotation;\n        this.sprite = sprite;\n    }\n    step(dt) { }\n    remove() {\n        world_1.World.removeObject(this);\n    }\n}\nexports.GameObject = GameObject;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObjects/gameObject.ts?");

/***/ }),

/***/ "./src/gameObjects/gun.ts":
/*!********************************!*\
  !*** ./src/gameObjects/gun.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Gun = void 0;\nconst audioController_1 = __webpack_require__(/*! ../media/audioController */ \"./src/media/audioController.ts\");\nconst bullet_1 = __webpack_require__(/*! ./bullet */ \"./src/gameObjects/bullet.ts\");\nconst gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObjects/gameObject.ts\");\nconst muzzleFlash_1 = __webpack_require__(/*! ./muzzleFlash */ \"./src/gameObjects/muzzleFlash.ts\");\nconst vec2_1 = __webpack_require__(/*! ../util/vec2 */ \"./src/util/vec2.ts\");\nconst world_1 = __webpack_require__(/*! ../world */ \"./src/world.ts\");\nconst sprites_1 = __webpack_require__(/*! ../media/sprites */ \"./src/media/sprites.ts\");\nconst sounds_1 = __webpack_require__(/*! ../media/sounds */ \"./src/media/sounds.ts\");\nclass Gun extends gameObject_1.GameObject {\n    constructor(position, rotation) {\n        super(position, rotation, sprites_1.Sprites.gun);\n        console.log(sprites_1.Sprites.gun);\n        this.rvelocity = 0;\n        this.velocity = new vec2_1.Vec2(0, 0);\n        this.rdamp = 0.98;\n        this.vdamp = 0.97;\n        document.addEventListener('keydown', (e) => this.keyPressed(e));\n        document.addEventListener('touchstart', (e) => this.touched(e), false);\n    }\n    shoot() {\n        this.velocity.add(this.rotation.unitVec().multiplyScalor(-40));\n        this.rvelocity += 0.25;\n        let loc = this.position.copy();\n        let offset = new vec2_1.Vec2(46, -20);\n        offset.rotate(this.rotation);\n        loc.add(offset);\n        world_1.World.objects.push(new bullet_1.Bullet(this.rotation.copy(), loc, 45));\n        world_1.World.objects.push(new muzzleFlash_1.MuzzleFlash(this.rotation.copy(), loc.copy()));\n        audioController_1.AudioController.playSound(sounds_1.Sounds.gunshot);\n    }\n    step(dt) {\n        this.position.add(this.velocity);\n        this.rotation.add(this.rvelocity);\n        this.velocity.multiplyScalor(this.vdamp);\n        this.rotation.angle *= this.rdamp;\n    }\n    keyPressed(e) {\n        switch (e.code) {\n            case \"Space\":\n                this.shoot();\n                break;\n            default: break;\n        }\n    }\n    // BROKEN FOR NOW TODO FIX ME\n    touched(e) {\n        this.shoot();\n    }\n}\nexports.Gun = Gun;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObjects/gun.ts?");

/***/ }),

/***/ "./src/gameObjects/muzzleFlash.ts":
/*!****************************************!*\
  !*** ./src/gameObjects/muzzleFlash.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MuzzleFlash = void 0;\nconst gameObject_1 = __webpack_require__(/*! ./gameObject */ \"./src/gameObjects/gameObject.ts\");\nconst sprites_1 = __webpack_require__(/*! ../media/sprites */ \"./src/media/sprites.ts\");\nclass MuzzleFlash extends gameObject_1.GameObject {\n    constructor(rotation, position) {\n        super(position, rotation, sprites_1.Sprites.muzzleflash);\n        this.lifetime = 50;\n    }\n    step(dt) {\n        this.lifetime -= dt;\n        if (this.lifetime < 0)\n            this.remove();\n    }\n}\nexports.MuzzleFlash = MuzzleFlash;\n\n\n//# sourceURL=webpack://webpackpc/./src/gameObjects/muzzleFlash.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst display_1 = __webpack_require__(/*! ./display */ \"./src/display.ts\");\nconst gun_1 = __webpack_require__(/*! ./gameObjects/gun */ \"./src/gameObjects/gun.ts\");\nconst rotation_1 = __webpack_require__(/*! ./util/rotation */ \"./src/util/rotation.ts\");\nconst sounds_1 = __webpack_require__(/*! ./media/sounds */ \"./src/media/sounds.ts\");\nconst sprites_1 = __webpack_require__(/*! ./media/sprites */ \"./src/media/sprites.ts\");\nconst vec2_1 = __webpack_require__(/*! ./util/vec2 */ \"./src/util/vec2.ts\");\nconst world_1 = __webpack_require__(/*! ./world */ \"./src/world.ts\");\nconst settingMenu_1 = __webpack_require__(/*! ./ui/settingMenu */ \"./src/ui/settingMenu.ts\");\nconst cookies_1 = __webpack_require__(/*! ./cookies */ \"./src/cookies.ts\");\ndocument.addEventListener(\"DOMContentLoaded\", main);\nfunction main() {\n    display_1.Display.initalize();\n    let setting_menu = new settingMenu_1.SettingMenu(cookies_1.Cookies.loadSettingsFromCookie());\n    setting_menu.classList.add(\"hidden\");\n    document.body.appendChild(setting_menu);\n    document.getElementById(\"settings_button\").onclick = () => {\n        setting_menu.classList.toggle(\"hidden\");\n    };\n    sprites_1.Sprites.initalize();\n    sounds_1.Sounds.initalize();\n    let myGun = new gun_1.Gun(new vec2_1.Vec2(0, 0), new rotation_1.Rotation(0));\n    world_1.World.objects.push(myGun);\n    setInterval(() => {\n        display_1.Display.clear();\n        display_1.Display.draw();\n        world_1.World.step(16);\n        display_1.Display.viewport.x += ((myGun.position.x - display_1.Display.viewport.width / 2) - display_1.Display.viewport.x) / 10;\n        display_1.Display.viewport.y += ((myGun.position.y - display_1.Display.viewport.height / 2) - display_1.Display.viewport.y) / 10;\n    }, 16);\n}\n\n\n//# sourceURL=webpack://webpackpc/./src/index.ts?");

/***/ }),

/***/ "./src/media/audioController.ts":
/*!**************************************!*\
  !*** ./src/media/audioController.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AudioController = void 0;\nclass AudioController {\n    static playSound(sound) {\n        if (this.mute)\n            return;\n        let elm = sound.cloneNode();\n        elm.volume = 0.1;\n        elm.addEventListener(\"ended\", () => elm.remove());\n        elm.play();\n    }\n}\nexports.AudioController = AudioController;\nAudioController.mute = false;\n\n\n//# sourceURL=webpack://webpackpc/./src/media/audioController.ts?");

/***/ }),

/***/ "./src/media/sounds.ts":
/*!*****************************!*\
  !*** ./src/media/sounds.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sounds = void 0;\nclass Sounds {\n    static initalize() {\n        this.gunshot = document.getElementById(\"gunshot\");\n    }\n}\nexports.Sounds = Sounds;\n\n\n//# sourceURL=webpack://webpackpc/./src/media/sounds.ts?");

/***/ }),

/***/ "./src/media/sprites.ts":
/*!******************************!*\
  !*** ./src/media/sprites.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Sprites = void 0;\nclass Sprites {\n    static initalize() {\n        this.gun = {\n            image: this.fromId(\"gun\"),\n            width: 100,\n            height: 64,\n        };\n        this.bullet = {\n            image: this.fromId(\"bullet\"),\n            width: 30,\n            height: 15,\n        };\n        this.muzzleflash = {\n            image: this.fromId(\"muzzleflash\"),\n            width: 150,\n            height: 75,\n        };\n    }\n    static fromId(id) {\n        return document.getElementById(id);\n    }\n}\nexports.Sprites = Sprites;\n\n\n//# sourceURL=webpack://webpackpc/./src/media/sprites.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Settings = void 0;\nconst cookies_1 = __webpack_require__(/*! ./cookies */ \"./src/cookies.ts\");\nconst display_1 = __webpack_require__(/*! ./display */ \"./src/display.ts\");\nconst audioController_1 = __webpack_require__(/*! ./media/audioController */ \"./src/media/audioController.ts\");\nclass Settings {\n    constructor(initalSettings) {\n        this.settings = initalSettings;\n        this.applySettings();\n    }\n    set(setting, value) {\n        this.settings[setting] = value;\n        cookies_1.Cookies.saveSettings(this.settings);\n        this.applySettings();\n    }\n    applySettings() {\n        audioController_1.AudioController.mute = this.settings.mute;\n        this.settings.bloom ? display_1.Display.c.classList.add(\"bloom\") : display_1.Display.c.classList.remove(\"bloom\");\n        this.settings.chroma ? display_1.Display.c.classList.add(\"chroma\") : display_1.Display.c.classList.remove(\"chroma\");\n    }\n}\nexports.Settings = Settings;\n\n\n//# sourceURL=webpack://webpackpc/./src/settings.ts?");

/***/ }),

/***/ "./src/ui/settingMenu.ts":
/*!*******************************!*\
  !*** ./src/ui/settingMenu.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Checkbox = exports.SettingMenu = void 0;\nclass SettingMenu extends HTMLElement {\n    constructor(settings) {\n        super();\n        this.classList.add('settings_menu');\n        this.appendChild(new Checkbox((state) => {\n            settings.set(\"bloom\", state);\n        }, settings.settings.bloom, \"bloom\"));\n        this.appendChild(new Checkbox((state) => {\n            settings.set(\"chroma\", state);\n        }, settings.settings.chroma, \"dispersion\"));\n    }\n}\nexports.SettingMenu = SettingMenu;\nclass Checkbox extends HTMLElement {\n    constructor(callback, state, label) {\n        super();\n        this.state = state;\n        this.box = document.createElement('img');\n        this.label = document.createElement('span');\n        this.box.src = (this.state ? 'icons/checkbox.svg' : 'icons/box.svg');\n        this.label.innerHTML = label;\n        this.appendChild(this.label);\n        this.appendChild(this.box);\n        this.onclick = () => {\n            this.state = !this.state;\n            this.box.src = (this.state ? 'icons/checkbox.svg' : 'icons/box.svg');\n            callback(this.state);\n        };\n    }\n}\nexports.Checkbox = Checkbox;\ncustomElements.define('settings-menu', SettingMenu);\ncustomElements.define('check-box', Checkbox);\n\n\n//# sourceURL=webpack://webpackpc/./src/ui/settingMenu.ts?");

/***/ }),

/***/ "./src/util/rotation.ts":
/*!******************************!*\
  !*** ./src/util/rotation.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Rotation = void 0;\nconst vec2_1 = __webpack_require__(/*! ./vec2 */ \"./src/util/vec2.ts\");\nclass Rotation {\n    // Takes radian rotation or unit vector\n    constructor(rot) {\n        if (typeof rot == \"number\")\n            this.angle = rot;\n        else\n            this.angle = Math.atan2(rot.x, rot.y);\n    }\n    unitVec() {\n        return new vec2_1.Vec2(Math.cos(this.angle), Math.sin(this.angle));\n    }\n    add(a) {\n        this.angle += a;\n    }\n    copy() {\n        return new Rotation(this.angle);\n    }\n}\nexports.Rotation = Rotation;\n\n\n//# sourceURL=webpack://webpackpc/./src/util/rotation.ts?");

/***/ }),

/***/ "./src/util/vec2.ts":
/*!**************************!*\
  !*** ./src/util/vec2.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Vec2 = void 0;\nclass Vec2 {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    magnitude() {\n        return Math.sqrt(this.x ** 2 + this.y ** 2);\n    }\n    asUnit() {\n        let mag = this.magnitude();\n        return new Vec2(this.x / mag, this.y / mag);\n    }\n    add(vec) {\n        this.x += vec.x;\n        this.y += vec.y;\n    }\n    multiplyScalor(mag) {\n        this.x *= mag;\n        this.y *= mag;\n        return this;\n    }\n    copy() {\n        return new Vec2(this.x, this.y);\n    }\n    rotate(angle) {\n        let a = 0;\n        if (typeof angle == \"number\")\n            a = angle;\n        else\n            a = angle.angle;\n        let cs = Math.cos(a);\n        let sn = Math.sin(a);\n        let x = this.x;\n        let y = this.y;\n        this.x = x * cs - y * sn;\n        this.y = x * sn + y * cs;\n    }\n}\nexports.Vec2 = Vec2;\n\n\n//# sourceURL=webpack://webpackpc/./src/util/vec2.ts?");

/***/ }),

/***/ "./src/world.ts":
/*!**********************!*\
  !*** ./src/world.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.World = void 0;\nconst display_1 = __webpack_require__(/*! ./display */ \"./src/display.ts\");\nclass World {\n    static step(dt) {\n        this.objects.forEach((value) => {\n            value.step(dt);\n            display_1.Display.drawObject(value);\n        });\n    }\n    static removeObject(object) {\n        this.objects.splice(this.objects.indexOf(object), 1);\n    }\n}\nexports.World = World;\nWorld.objects = [];\n\n\n//# sourceURL=webpack://webpackpc/./src/world.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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