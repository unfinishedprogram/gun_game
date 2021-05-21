import { GameObject } from "./gameObject";
import { Rotation } from "./rotation";
import { Vec2 } from "./vec2";

export class MuzzleFlash extends GameObject{
    lifetime:number;
    constructor(rotation:Rotation, position:Vec2){
        let elm = document.createElement("img") as HTMLImageElement;
        elm.src = "flash.png";
        super(position, rotation, elm, 150, 75);
        this.lifetime = 50;
    }

    step(dt:number){
        this.lifetime -= dt;
        if(this.lifetime < 0) this.remove();
    }
}