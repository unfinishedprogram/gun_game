"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
const { v4: uuid } = require('uuid');
class World {
    constructor() {
        this.objects = {};
    }
    step() {
        for (let i in this.objects) {
            if (this.objects[i].step())
                delete this.objects[i];
        }
    }
    removeObjectById(id) {
        delete this.objects[id];
    }
    addObject(object) {
        let id = uuid();
        this.objects[id] = object;
        this.objects[id].id = id;
    }
    removeObject(object) {
        if (object.id) {
            delete this.objects[object.id];
        }
    }
    getPlayerObject(player) {
        for (let i in this.objects) {
            if (this.objects[i].type == "player")
                if (this.objects[i].player == player)
                    return this.objects[i];
        }
        return null;
    }
    addObjects(objects) {
        for (let object of objects) {
            this.addObject(object);
        }
    }
    getAllObjects() {
        return this.objects;
    }
}
exports.World = World;
