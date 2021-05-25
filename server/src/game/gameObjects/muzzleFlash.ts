import { Rotation, Vec2 } from "../utils";
import { GameObject } from "./gameObject";

export class MuzzleFlash extends GameObject {
    lifetime:number;
    constructor(player:string, rotation:Rotation, position:Vec2){
        super(player, position, rotation);
        this.lifetime = 4;
        this.type = "muzzle_flash";
    }

    step():boolean{
        this.lifetime -= 1;
        if(this.lifetime < 0) return true;
        return false;
    }
}