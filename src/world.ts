import { Display } from "./display";
import { GameObject } from "./gameObjects/gameObject";

export class World{
    static objects:GameObject[] = [];
    
    static step(dt:number){
        this.objects.forEach((value:GameObject) => {
            value.step(dt);
            console.log(value);
            Display.drawObject(value);
        })
    }

    static removeObject(object:GameObject){
        this.objects.splice(this.objects.indexOf(object), 1);
    }
}