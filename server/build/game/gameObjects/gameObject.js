"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
class GameObject {
    constructor(player, position, rotation) {
        this.position = position;
        this.rotation = rotation;
        this.player = player;
        this.type = null;
    }
    step() { return true; }
    ;
}
exports.GameObject = GameObject;
