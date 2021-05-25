export class Vec2 {
    x:number;
    y:number;
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    magnitude():number {
        return Math.sqrt(this.x**2 + this.y**2)
    }

    asUnit():Vec2 {
        let mag = this.magnitude();
        return new Vec2(this.x/mag, this.y/mag);
    }

    add(vec: Vec2):void {
        this.x += vec.x;
        this.y += vec.y;
    }
    
    multiplyScalor(mag:number):Vec2{
        this.x*=mag;
        this.y*=mag;
        return this;
    }

    copy(){
        return new Vec2(this.x, this.y);
    }

    rotate(angle:Rotation|number){
        let a = 0;
        if(typeof angle == "number")
            a = angle;
        else 
            a = angle.angle;

        let cs = Math.cos(a);
        let sn = Math.sin(a);

        let x = this.x;
        let y = this.y;

        this.x = x * cs - y * sn;
        this.y = x * sn + y * cs;
    }
}

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
}