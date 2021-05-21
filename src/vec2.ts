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
}