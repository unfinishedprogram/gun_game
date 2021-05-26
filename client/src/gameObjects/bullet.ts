import { GameObject } from "./gameObject";
import { Rotation } from "../util/rotation";
import { Sprites } from "../media/sprites";
import { Vec2 } from "../util/vec2";

export class Bullet extends GameObject{
    constructor(id:string, playerid:string, rotation:Rotation, position:Vec2){
        super(id, playerid, position, rotation, Sprites.bullet);
    }
}