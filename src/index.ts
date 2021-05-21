import { Display } from "./display";
import { Gun } from "./gun";
import { Rotation } from "./rotation";
import { Vec2 } from "./vec2";
import { World } from "./world";


window.onload = () => {
    console.log("Loaded")
    let myGun = new Gun(new Vec2(0,0), new Vec2(0,0), new Rotation(0));
    World.objects.push(myGun);
    Display.initalize();

    setInterval(() => {
        Display.clear();
        Display.draw();
        World.step(16);
        
        Display.viewport.x += ((myGun.position.x - Display.viewport.width/2) - Display.viewport.x)/10;
        Display.viewport.y += ((myGun.position.y - Display.viewport.height/2) - Display.viewport.y)/10;
    }, 16);
}