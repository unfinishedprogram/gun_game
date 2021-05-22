import { GameObject } from "./gameObject";
import { Rotation } from "../util/rotation";
import { Sprites } from "../media/sprites";
import { Vec2 } from "../util/vec2";

export class Bullet extends GameObject{
    trajectory:Vec2;
    lifetime:number;
    constructor(rotation:Rotation, position:Vec2, velocity:number){
        super(position, rotation, Sprites.bullet);
        this.trajectory = rotation.unitVec().multiplyScalor(velocity);
        this.lifetime = 500;
    }

    step(dt:number){
        this.position.add(this.trajectory);
        this.lifetime -= dt;
        if(this.lifetime < 0) this.remove();
    }
}