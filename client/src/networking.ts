import { Bullet } from "./gameObjects/bullet";
import { GameObject } from "./gameObjects/gameObject";
import { Player } from "./gameObjects/player";
import { MuzzleFlash } from "./gameObjects/muzzleFlash";
import { Rotation } from "./util/rotation";
import { Vec2 } from "./util/vec2";

export function convertGameObject(object:any): GameObject|undefined{
    switch(object.type){
        case "player": return new Player(object.player, new Vec2(object.position.x, object.position.y), new Rotation(object.rotation.angle), object.name || object.id)
        case "muzzle_flash": return new MuzzleFlash(new Rotation(object.rotation.angle), new Vec2(object.position.x, object.position.y))
        case "bullet": return new Bullet(new Rotation(object.rotation.angle), new Vec2(object.position.x, object.position.y))
        default:break;
    }
}

export function convertGameObjects(data:any):GameObject[]{
    let newData:GameObject[] = [];
    for (let i in data){
        let obj = convertGameObject(data[i])
        if(obj) newData.push(obj);
    }  
    return newData;
}

