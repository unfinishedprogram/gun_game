import { Vec2, Rotation } from "../utils";
import { GameObject } from "./gameObject";

export class Bullet extends GameObject{
    trajectory:Vec2;
    lifetime:number;
    constructor(player:string, rotation:Rotation, position:Vec2, velocity:number){
        super(player, position, rotation);
        this.type = "bullet";
        this.trajectory = rotation.unitVec().multiplyScalor(velocity);
        this.lifetime = 25;
    }
    
    step(){
        this.position.add(this.trajectory);
        this.lifetime -= 1;
        if(this.lifetime < 0) return true;
        return false;
    }
}