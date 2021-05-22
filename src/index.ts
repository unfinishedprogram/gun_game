import { Display } from "./display";
import { Gun } from "./gun";
import { Rotation } from "./rotation";
import { Sprites } from "./sprites";
import { User } from "./user";
import { Vec2 } from "./vec2";
import { World } from "./world";

document.addEventListener("DOMContentLoaded", main);

function main() {
    let player1 = new User("player1");
    let myGun = new Gun(new Vec2(0,0), new Rotation(0), player1);
    World.objects.push(myGun);
    Display.initalize();
    Sprites.initalize();

    console.log(Sprites.bullet)
    console.log(Sprites.gun)
    console.log(Sprites.muzzleflash)

    setInterval(() => {
        Display.clear();
        Display.draw();
        World.step(16); 
        
        Display.viewport.x += ((myGun.position.x - Display.viewport.width/2) - Display.viewport.x)/10;
        Display.viewport.y += ((myGun.position.y - Display.viewport.height/2) - Display.viewport.y)/10;

    }, 400);
}