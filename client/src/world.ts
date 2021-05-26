import { Display } from "./display";
import { Bullet } from "./gameObjects/bullet";
import { GameObject } from "./gameObjects/gameObject";
import { MuzzleFlash } from "./gameObjects/muzzleFlash";
import { Player } from "./gameObjects/player";

export class World {
    static objects: {
        players:Player[],
        bullets:Bullet[],
        muzzelflashes:MuzzleFlash[],
    }

    static getPlayer(playerid:string) {
        for(let object of this.objects.players)
        if(object.playerid == playerid) 
        return object;
    }
}