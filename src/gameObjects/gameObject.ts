import { Rotation } from "../util/rotation";
import { Vec2 } from "../util/vec2";
import { World } from "../world";
import { ISprite } from "../media/sprites";

export class GameObject{
    position: Vec2;
    rotation: Rotation;
    sprite: ISprite;
    
    constructor(position:Vec2, rotation:Rotation, sprite:ISprite){
        this.position = position;
        this.rotation = rotation;
        this.sprite = sprite;
    }
    
    step(dt:number){ }
    
    remove () {
        World.removeObject(this);
    }
}