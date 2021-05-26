import { Rotation } from "../util/rotation";
import { Vec2 } from "../util/vec2";
import { ISprite } from "../media/sprites";

export class GameObject{
    position: Vec2;
    rotation: Rotation;
    sprite: ISprite;
    id:string;
    playerid:string;
    name:undefined|string;
    health:undefined|number;

    constructor(id:string, playerid:string, position:Vec2, rotation:Rotation, sprite:ISprite){
        this.id = id;
        this.playerid = playerid;
        this.position = position;
        this.rotation = rotation;
        this.sprite = sprite;
    }
}