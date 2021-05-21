import { AudioController } from "./audioController";
import { Bullet } from "./bullet";
import { GameObject } from "./gameObject";
import { Rotation } from "./rotation";
import { Vec2 } from "./vec2"
import { World } from "./world";

export class Gun extends GameObject{
    position: Vec2;
    velocity: Vec2;
    rotation: Rotation;
    rvelocity: number;
    rdamp:number;
    vdamp:number;

    constructor(pos:Vec2, vel:Vec2, rot:Rotation){
        
        let elm = document.getElementById("gun") as HTMLImageElement;
        
        super(pos, rot, elm, 100, 64);

        this.rvelocity = 0;
        this.position = pos;
        this.velocity = vel;
        this.rotation = rot;
        this.rdamp = 0.98;
        this.vdamp = 0.97;
        
        document.addEventListener('keydown', (e) => this.keyPressed(e));
    }

    shoot(){
        this.velocity.add(this.rotation.unitVec().multiplyScalor(-40));
        this.rvelocity += 0.25;
        World.objects.push(new Bullet(this.rotation.copy(), this.position.copy(), 50))
        AudioController.playSound("gunshot.mp3")
    }

    step(dt:number){
        this.position.add(this.velocity);
        this.rotation.add(this.rvelocity); 
        this.velocity.multiplyScalor(this.vdamp);
        this.rotation.angle*=this.rdamp;
    }

    keyPressed(e:KeyboardEvent){
        console.log(e);
        switch(e.code){
            case "Space": this.shoot(); break;
            default: break;
        }
    }
}