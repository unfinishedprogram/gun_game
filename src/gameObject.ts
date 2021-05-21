import { Rotation } from "./rotation";
import { Vec2 } from "./vec2";
import { World } from "./world";

export abstract class GameObject{
    position: Vec2;
    rotation: Rotation;
    sprite: HTMLImageElement;
    width:number;
    height:number;

    constructor(pos:Vec2, rot:Rotation, elm:HTMLImageElement, w:number, h:number){
        this.width = w;
        this.height = h;
        this.position = pos;
        this.rotation = rot;
        this.sprite = elm;
    }

    step(dt:number){
        
    }
    
    remove(){
        World.removeObject(this);
    }
}