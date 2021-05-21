import { GameObject } from "./gameObject";
import { Rotation } from "./rotation";
import { Vec2 } from "./vec2";

export class Bullet extends GameObject{
    trajectory:Vec2;
    constructor(rotation:Rotation, position:Vec2, velocity:number){
        let elm = document.createElement("img") as HTMLImageElement;
        elm.src = "bullet.png";
        super(position, rotation, elm, 20, 10);
        this.trajectory = rotation.unitVec().multiplyScalor(velocity);
    }

    step(){
        this.position.add(this.trajectory);
    }
}