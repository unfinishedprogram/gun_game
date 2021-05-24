import { Display } from "./display";
import { Gun } from "./gameObjects/gun";
import { Rotation } from "./util/rotation";
import { Sounds } from "./media/sounds";
import { Sprites } from "./media/sprites";
import { Vec2 } from "./util/vec2";
import { World } from "./world";
import { SettingMenu } from "./ui/settingMenu";
import { Cookies } from "./cookies";
import { Settings } from "./settings";

document.addEventListener("DOMContentLoaded", main);

function main() {
    Display.initalize();

    let setting_menu = new SettingMenu(Cookies.loadSettingsFromCookie());

    setting_menu.classList.add("hidden");
    document.body.appendChild(setting_menu);

    document.getElementById("settings_button")!.onclick = () => {
        setting_menu.classList.toggle("hidden");
    }

    
    Sprites.initalize();
    Sounds.initalize();

    let myGun = new Gun(new Vec2(0,0), new Rotation(0));
    World.objects.push(myGun);

    setInterval(() => {
        Display.clear();
        Display.draw();
        World.step(16);
        
        Display.viewport.x += ((myGun.position.x - Display.viewport.width/2) - Display.viewport.x)/10;
        Display.viewport.y += ((myGun.position.y - Display.viewport.height/2) - Display.viewport.y)/10;

    }, 16);
}