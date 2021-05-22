import { AudioController } from "./audioController";
import { Bullet } from "./bullet";
import { GameObject } from "./gameObject";
import { MuzzleFlash } from "./muzzleFlash";
import { Rotation } from "./rotation";
import { User } from "./user";
import { Vec2 } from "./vec2"
import { World } from "./world";

export class Gun extends GameObject{
    position: Vec2;
    velocity: Vec2;
    rotation: Rotation;
    rvelocity: number;
    rdamp:number;
    vdamp:number;

    constructor(pos:Vec2, vel:Vec2, rot:Rotation, user:User){
        
        let elm = document.getElementById("gun") as HTMLImageElement;
        
        super(pos, rot, elm, 100, 64);

        this.rvelocity = 0;
        this.position = pos;
        this.velocity = vel;
        this.rotation = rot;
        
        this.rdamp = 0.98;
        this.vdamp = 0.97;
        
        document.addEventListener('keydown', (e) => this.keyPressed(e));
        document.addEventListener('touched', (t) => this.touched(t as TouchEvent));
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
        AudioController.playSound("gunshot.mp3")
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
    touched(e:TouchEvent){
        this.shoot(); 
    }
}