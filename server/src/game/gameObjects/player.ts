import { Vec2, Rotation } from "../utils";
import { Bullet } from "./bullet";
import { GameObject } from "./gameObject";
import { MuzzleFlash } from "./muzzleFlash";

export class Player extends GameObject{
    velocity: Vec2;
    rvelocity: number;
    rdamp: number;
    vdamp: number;

    constructor(player:string, position:Vec2, rotation:Rotation) {
        super(player, position, rotation);

        this.type = "player"
        this.rvelocity = 0;
        this.velocity = new Vec2(0,0);

        this.rdamp = 0.98;
        this.vdamp = 0.97;
    }

    shoot():GameObject[]{
        this.velocity.add(this.rotation.unitVec().multiplyScalor(-40));
        this.rvelocity += 0.25;
        let loc = this.position.copy()
        let offset = new Vec2(46, -20);
        offset.rotate(this.rotation);
        loc.add(offset);
        return [
            new Bullet(this.player, this.rotation.copy(), loc, 45), 
            new MuzzleFlash(this.player, this.rotation.copy(), loc.copy())
        ]
    }

    step(){
        this.position.add(this.velocity);
        this.rotation.add(this.rvelocity); 
        this.velocity.multiplyScalor(this.vdamp);
        this.rotation.angle*=this.rdamp;
        return false;
    }
}