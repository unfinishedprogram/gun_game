import { GameObject } from "./gameObject";
import { Rotation } from "../util/rotation";
import { Vec2 } from "../util/vec2"
import { Sprites } from "../media/sprites";

export class Player extends GameObject{
    name:string;
    health:number;
    constructor(id:string, playerid:string, position:Vec2, rotation:Rotation, name:string, health:number) {
        super(id, playerid, position, rotation, Sprites.gun);
        this.name = name;
        this.health = health;
    }
}