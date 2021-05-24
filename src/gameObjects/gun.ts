import { AudioController } from "../media/audioController";
import { Bullet } from "./bullet";
import { GameObject } from "./gameObject";
import { MuzzleFlash } from "./muzzleFlash";
import { Rotation } from "../util/rotation";
import { Vec2 } from "../util/vec2"
import { World } from "../world";
import { Sprites } from "../media/sprites";
import { Sounds } from "../media/sounds";

export class Gun extends GameObject{
    velocity: Vec2;
    rvelocity: number;
    rdamp: number;
    vdamp: number;

    constructor(position:Vec2, rotation:Rotation) {
        super(position, rotation, Sprites.gun);
        console.log(Sprites.gun);

        this.rvelocity = 0;
        this.velocity = new Vec2(0,0);

        this.rdamp = 0.98;
        this.vdamp = 0.97;
        
        document.addEventListener('keydown', (e) => this.keyPressed(e));
        document.addEventListener('touchstart', (e:TouchEvent) => this.touched(e as TouchEvent), false);
    }

    shoot(){
        this.velocity.add(this.rotation.unitVec().multiplyScalor(-40));
        this.rvelocity += 0.25;
        let loc = this.position.copy()
        let offset = new Vec2(46, -20);
        offset.rotate(this.rotation);
        loc.add(offset);
        World.objects.push(new Bullet(this.rotation.copy(), loc, 45))
        World.objects.push(new MuzzleFlash(this.rotation.copy(), loc.copy()))
        AudioController.playSound(Sounds.gunshot)
    }

    step(dt:number){
        this.position.add(this.velocity);
        this.rotation.add(this.rvelocity); 
        this.velocity.multiplyScalor(this.vdamp);
        this.rotation.angle*=this.rdamp;
    }

    keyPressed(e:KeyboardEvent){
        switch(e.code){
            case "Space": this.shoot(); break;
            default: break;
        }
    }


    // BROKEN FOR NOW TODO FIX ME
    touched(e:TouchEvent){
        this.shoot(); 
    }
}