import { gameObjectType } from "../../interfaces";
import { Vec2, Rotation } from "../utils";

export abstract class GameObject{
    position: Vec2;
    rotation: Rotation;
    player: string;
    id: undefined | string;
    type: gameObjectType;


    constructor(player:string, position:Vec2, rotation:Rotation){
        this.position = position;
        this.rotation = rotation;
        this.player = player;
        this.type = null;
    }
    
    step():boolean{return true};
}