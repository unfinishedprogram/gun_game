import { Vec2 } from "./vec2";

export class Rotation{
    angle:number;
    
    // Takes radian rotation or unit vector
    constructor(rot: Vec2 | number){
        if(typeof rot == "number")
            this.angle = rot
        else
            this.angle = Math.atan2(rot.x, rot.y)
    }

    unitVec():Vec2{
        return new Vec2(Math.cos(this.angle), Math.sin(this.angle))
    }

    add(a:number){
        this.angle += a;
    }
    copy(){
        return new Rotation(this.angle);
    }
    static interpolate(from:Rotation, to:Rotation, ratio:number):Rotation{
        return new Rotation(from.angle + (to.angle - from.angle)*ratio)
    }
}