import { Display } from "./display";
import { GameObject } from "./gameObject";

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
}