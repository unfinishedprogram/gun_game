import { isArrowFunction } from "typescript";
import { GameObject } from "./gameObjects/gameObject";
import { MuzzleFlash } from "./gameObjects/muzzleFlash";
import { Player } from "./gameObjects/player";
import { Vec2 } from "./utils";
const {v4:uuid} = require('uuid');

export class World{
    private objects:{[index:string] : GameObject} = {};
    private bounds = {x1:-5000, y1:-5000, x2:5000, y2:5000};

    public step(){
        for(let i in this.objects){
            if(this.objects[i].step()){
                delete this.objects[i]
            } else{
                let objpos = this.objects[i].position;

                if(objpos.x < this.bounds.x1) objpos.x -= (objpos.x - this.bounds.x1);
                if(objpos.x > this.bounds.x2) objpos.x -= (objpos.x - this.bounds.x2);
    
                if(objpos.y < this.bounds.y1) objpos.y -= (objpos.y - this.bounds.y1);
                if(objpos.y > this.bounds.y2) objpos.y -= (objpos.y - this.bounds.y2);
            }
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
        if(object.id)
        delete this.objects[object.id];
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
        for(let object of objects)
        this.addObject(object);
    }

    public getCollisions():{col1:string, col2:string}[]{
        let collisions = [];
        for(let i in this.objects)
        for(let j in this.objects)
        if(this.collided(this.objects[i], this.objects[j]))
        collisions.push({col1:i, col2:j})
        return collisions;
    }

    private collided( a:GameObject, b:GameObject ):boolean{
        if(a===b) return false;
        if(a.type == b.type) return false;
        if(a.player == b.player) return false;
        if(Vec2.distanceBetween(a.position, b.position) > 50) return false;
        return true;
    }

    public getAllObjects(){
        return this.objects;
    }

    public handleCollisions(collisions: {col1:string, col2:string}[]){
        for(let collision of collisions){
            if(this.objects[collision.col1].type == "bullet")
            if(this.objects[collision.col2].type == "player"){
                console.log("HIT!")
                this.removeObjectById(collision.col1);
                let player = <Player> this.objects[collision.col2];
                
                player.health -= 50;
                if(player.health < 0)
                player.health = 0;
                
            }
        }
    }
}