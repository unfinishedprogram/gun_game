import { Display } from "./display";
import { Gun } from "./gameObjects/gun";
import { Rotation } from "./util/rotation";
import { Sounds } from "./media/sounds";
import { Sprites } from "./media/sprites";
import { User } from "./user";
import { Vec2 } from "./util/vec2";
import { World } from "./world";

document.addEventListener("DOMContentLoaded", main);

function main() {
    Display.initalize();
    Sprites.initalize();
    Sounds.initalize();


    let player1 = new User("player1");
    let myGun = new Gun(new Vec2(0,0), new Rotation(0), player1);
    World.objects.push(myGun);
    

    console.log(Sprites.bullet)
    console.log(Sprites.gun)
    console.log(Sprites.muzzleflash)
    console.log(Sounds.gunshot)

    setInterval(() => {
        Display.clear();
        Display.draw();
        World.step(16); 
        
        Display.viewport.x += ((myGun.position.x - Display.viewport.width/2) - Display.viewport.x)/10;
        Display.viewport.y += ((myGun.position.y - Display.viewport.height/2) - Display.viewport.y)/10;

    }, 16);
}