"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bullet = void 0;
const gameObject_1 = require("./gameObject");
class Bullet extends gameObject_1.GameObject {
    constructor(player, rotation, position, velocity) {
        super(player, position, rotation);
        this.type = "bullet";
        this.trajectory = rotation.unitVec().multiplyScalor(velocity);
        this.lifetime = 25;
    }
    step() {
        this.position.add(this.trajectory);
        this.lifetime -= 1;
        if (this.lifetime < 0)
            return true;
        return false;
    }
}
exports.Bullet = Bullet;
