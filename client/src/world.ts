import { Bullet } from "./gameObjects/bullet";
import { GameObject } from "./gameObjects/gameObject";
import { MuzzleFlash } from "./gameObjects/muzzleFlash";
import { Player } from "./gameObjects/player";

type objectType = "players"|"bullets"|"muzzelflashes";

export type WorldObjects = {
    "players":Player[],
    "bullets":Bullet[],
    "muzzelflashes":MuzzleFlash[],
}

export class World {
    static oldObjects: WorldObjects;
    static objects: WorldObjects;
    static nextObjects: WorldObjects;

    static serverUpdate(objects:WorldObjects){
        if(!this.objects) {
            this.oldObjects = objects;
            this.nextObjects = objects;
            this.objects = objects;
        } else{
            this.oldObjects = this.nextObjects;
            this.objects = this.oldObjects;
            this.nextObjects = objects;
        }
    }

    static getPlayer(playerid:string) {
        for(let object of this.objects.players){
            if(object.playerid == playerid) 
            return object;
        }
    }

    // 0 < ratio < 1
    static interpolate(ratio:number){
        for(let type in this.objects){
            for(let object of this.objects[type as objectType]){

                let from = this.getOldObject(type as objectType, object.id);
                let to = this.getNextObject(type as objectType, object.id);

                // if(to && !from){
                //     switch(type as objectType ){
                //         case "bullets": this.objects.bullets.push(to as Bullet); break;
                //         case "muzzelflashes": this.objects.muzzelflashes.push(to as MuzzleFlash); break;
                //         case "players": this.objects.players.push(to as Player); break;
                //     }
                // }

                if(to && from)
                    object.interpolate(from, to, ratio);
            }
        }
    }

    static getOldObject(type:"players"|"bullets"|"muzzelflashes", id:string):GameObject|undefined{
        for(let object of this.oldObjects[type]){
            if(object.id == id) return object;
        }
        return;
    }

    static getNextObject(type:"players"|"bullets"|"muzzelflashes", id:string):GameObject|undefined{
        for(let object of this.nextObjects[type]){
            if(object.id == id) return object;
        }
        return;
    }
}
