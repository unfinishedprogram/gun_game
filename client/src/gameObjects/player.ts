import { AudioController } from "../media/audioController";
import { GameObject } from "./gameObject";
import { Rotation } from "../util/rotation";
import { Vec2 } from "../util/vec2"
import { Sprites } from "../media/sprites";
import { Sounds } from "../media/sounds";

export class Player extends GameObject{
    constructor(id:string, position:Vec2, rotation:Rotation) {
        super(position, rotation, Sprites.gun);
        this.id = id;
    }

    shoot(){
        AudioController.playSound(Sounds.gunshot)
    }

    keyPressed(e:KeyboardEvent){
        switch(e.code){
            // case "Space": this.shoot(); break;
            default: break;
        }
    }

    touched(e:TouchEvent){
        this.shoot(); 
    }
}