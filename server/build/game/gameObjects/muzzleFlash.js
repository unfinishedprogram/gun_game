"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuzzleFlash = void 0;
const gameObject_1 = require("./gameObject");
class MuzzleFlash extends gameObject_1.GameObject {
    constructor(player, rotation, position) {
        super(player, position, rotation);
        this.lifetime = 4;
        this.type = "muzzle_flash";
    }
    step() {
        this.lifetime -= 1;
        if (this.lifetime < 0)
            return true;
        return false;
    }
}
exports.MuzzleFlash = MuzzleFlash;
