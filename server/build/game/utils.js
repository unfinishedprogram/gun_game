"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotation = exports.Vec2 = void 0;
class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    asUnit() {
        let mag = this.magnitude();
        return new Vec2(this.x / mag, this.y / mag);
    }
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }
    multiplyScalor(mag) {
        this.x *= mag;
        this.y *= mag;
        return this;
    }
    copy() {
        return new Vec2(this.x, this.y);
    }
    rotate(angle) {
        let a = 0;
        if (typeof angle == "number")
            a = angle;
        else
            a = angle.angle;
        let cs = Math.cos(a);
        let sn = Math.sin(a);
        let x = this.x;
        let y = this.y;
        this.x = x * cs - y * sn;
        this.y = x * sn + y * cs;
    }
}
exports.Vec2 = Vec2;
class Rotation {
    // Takes radian rotation or unit vector
    constructor(rot) {
        if (typeof rot == "number")
            this.angle = rot;
        else
            this.angle = Math.atan2(rot.x, rot.y);
    }
    unitVec() {
        return new Vec2(Math.cos(this.angle), Math.sin(this.angle));
    }
    add(a) {
        this.angle += a;
    }
    copy() {
        return new Rotation(this.angle);
    }
}
exports.Rotation = Rotation;
