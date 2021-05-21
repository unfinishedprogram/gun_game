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
}