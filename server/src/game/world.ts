import { GameObject } from "./gameObjects/gameObject";
import { Player } from "./gameObjects/player";
const {v4:uuid} = require('uuid');

export class World{
    private objects:{[index:string] : GameObject} = {};

    public step(){
        for(let i in this.objects){
            if(this.objects[i].step())
            delete this.objects[i]
        }
    }

    public removeObjectById(id:string){
        delete this.objects[id] 
    }

    public addObject(object:GameObject){
        let id = uuid();
        this.objects[id] = object;
        this.objects[id].id = id;
    }

    public removeObject(object:GameObject){
        if(object.id){
            delete this.objects[object.id];
        }
    }

    public getPlayerObject(player:string): Player | null{
        for(let i in this.objects){
            if(this.objects[i].type == "player")
            if(this.objects[i].player == player)
            return this.objects[i] as Player;
        }
        return null;
    }

    public addObjects(objects:GameObject[]){
        for(let object of objects){
            this.addObject(object);
        }
    }

    public getAllObjects(){
        return this.objects;
    }
}