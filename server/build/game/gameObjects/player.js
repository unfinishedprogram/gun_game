"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const utils_1 = require("../utils");
const bullet_1 = require("./bullet");
const gameObject_1 = require("./gameObject");
const muzzleFlash_1 = require("./muzzleFlash");
class Player extends gameObject_1.GameObject {
    constructor(player, position, rotation) {
        super(player, position, rotation);
        this.type = "player";
        this.rvelocity = 0;
        this.velocity = new utils_1.Vec2(0, 0);
        this.rdamp = 0.98;
        this.vdamp = 0.97;
    }
    shoot() {
        this.velocity.add(this.rotation.unitVec().multiplyScalor(-40));
        this.rvelocity += 0.25;
        let loc = this.position.copy();
        let offset = new utils_1.Vec2(46, -20);
        offset.rotate(this.rotation);
        loc.add(offset);
        return [
            new bullet_1.Bullet(this.player, this.rotation.copy(), loc, 45),
            new muzzleFlash_1.MuzzleFlash(this.player, this.rotation.copy(), loc.copy())
        ];
    }
    step() {
        this.position.add(this.velocity);
        this.rotation.add(this.rvelocity);
        this.velocity.multiplyScalor(this.vdamp);
        this.rotation.angle *= this.rdamp;
        return false;
    }
}
exports.Player = Player;
