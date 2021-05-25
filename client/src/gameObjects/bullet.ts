import { GameObject } from "./gameObject";
import { Rotation } from "../util/rotation";
import { Sprites } from "../media/sprites";
import { Vec2 } from "../util/vec2";

export class Bullet extends GameObject{
    constructor(rotation:Rotation, position:Vec2){
        super(position, rotation, Sprites.bullet);
    }
}