import { GameObject } from "./gameObject";
import { Rotation } from "../util/rotation";
import { Vec2 } from "../util/vec2";
import { Sprites } from "../media/sprites";

export class MuzzleFlash extends GameObject {
    constructor(id:string, playerid:string, rotation:Rotation, position:Vec2){
        super(id, playerid, position, rotation, Sprites.muzzleflash);
    }
}