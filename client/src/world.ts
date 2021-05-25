import { Display } from "./display";
import { GameObject } from "./gameObjects/gameObject";

export class World{
    static objects:GameObject[] = [];
    
    static step(dt:number){
        this.objects.forEach((value:GameObject) => {
            value.step(dt);
            Display.drawObject(value);
        })
    }

    static removeObject(object:GameObject){
        this.objects.splice(this.objects.indexOf(object), 1);
    }
    static getPlayer(id:string){
        for(let object of this.objects){
            if(object.id == id) return object;
        }
    }
}