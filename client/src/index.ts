import { Display } from "./display";
import { Sounds } from "./media/sounds";
import { Sprites } from "./media/sprites";
import { World } from "./world";
import { SettingMenu } from "./ui/settingMenu";
import { Cookies } from "./cookies";
import { convertGameObjects } from "./networking";
const io = require("socket.io-client");

document.addEventListener("DOMContentLoaded", main);

function main() {
    Display.initalize();

    // let setting_menu = new SettingMenu(Cookies.loadSettingsFromCookie());

    // setting_menu.classList.add("hidden");
    // document.body.appendChild(setting_menu);

    // document.getElementById("settings_button")!.onclick = () => {
    //     setting_menu.classList.toggle("hidden");
    // }

    Sprites.initalize();
    Sounds.initalize();

    // setInterval(() => {
    //     Display.clear();
    //     Display.draw();
    //     World.step(16);
    // }, 16);

    const socket = io("http://72.11.174.134:3000");
    var id = document.cookie

    socket.on("set_id", (newID:string) =>{
        id = newID;
        document.cookie = id.toString();
    });

    

    if(id == ""){
        socket.emit("get_id")
        socket.emit("verify", id)
    } else
        socket.emit("verify", id)

    socket.on("login", () =>{
        document.getElementById("name_confirm")!.onclick = () => {
            let nameInput = document.getElementById("name_input") as HTMLInputElement;
            let name = nameInput.value
            nameInput.style.display = "none";
            document.getElementById("name_confirm")!.style.display = "none";
            socket.emit("set_name", name || "empty ;(");

            document.addEventListener('keydown', (e) => {
                socket.emit("shoot");
            });

            socket.on("game_update", (data:any) =>{
                updateGame(data, id);
            });
        }
    } ) 
}

export function updateGame(newData:any, id:string){
    World.objects = convertGameObjects(newData);
    let myGun = World.getPlayer(id)!;
    if(myGun) {
        Display.viewport.x += ((myGun.position.x - Display.viewport.width/2) - Display.viewport.x)/10;
        Display.viewport.y += ((myGun.position.y - Display.viewport.height/2) - Display.viewport.y)/10;
    }
    
    Display.clear();
    Display.draw();
    for(let object of World.objects){
        Display.drawObject(object);
    }
}