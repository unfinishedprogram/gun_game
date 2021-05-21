import { GameObject } from "./gameObject";
import { Rotation } from "./rotation";
import { Vec2 } from "./vec2";

export class Bullet extends GameObject{
    trajectory:Vec2;
    lifetime:number;
    constructor(rotation:Rotation, position:Vec2, velocity:number){
        let elm = document.createElement("img") as HTMLImageElement;
        elm.src = "bullet.png";
        super(position, rotation, elm, 20, 10);
        this.trajectory = rotation.unitVec().multiplyScalor(velocity);
        this.lifetime = 500;
    }

    step(dt:number){
        this.position.add(this.trajectory.multiplyScalor(16 / dt));
        this.lifetime -= dt;
        if(this.lifetime < 0) this.remove();
    }
}