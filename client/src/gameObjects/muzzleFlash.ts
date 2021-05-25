import { GameObject } from "./gameObject";
import { Rotation } from "../util/rotation";
import { Vec2 } from "../util/vec2";
import { Sprites } from "../media/sprites";

export class MuzzleFlash extends GameObject {
    lifetime:number;

    constructor(rotation:Rotation, position:Vec2){
        super(position, rotation, Sprites.muzzleflash);
        this.lifetime = 50;
    }

    step(dt:number){
        this.lifetime -= dt;
        if(this.lifetime < 0) this.remove();
    }
}