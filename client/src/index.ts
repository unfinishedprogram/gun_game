import { Display } from "./display";
import { Sounds } from "./media/sounds";
import { Sprites } from "./media/sprites";
import { World } from "./world";
import { convertGameObjects } from "./networking";
import { MiniMap } from "./ui/minimap";

const io = require("socket.io-client");

document.addEventListener("DOMContentLoaded", main);

var lastServerUpdate:number = Date.now();

function main() {
    Display.initalize();
    Sprites.initalize();
    Sounds.initalize();

    const socket = io("http://72.11.174.134:3000");
    var id = document.cookie;

    socket.on("set_id", (newID:string) =>{
        id = newID;
        document.cookie = id.toString();
    });

    if(id == ""){
        socket.emit("get_id")
        socket.emit("verify", id)
    } else
        socket.emit("verify", id)

    socket.on("verify", () =>{
        let login_form = document.getElementById("login_form") as HTMLFormElement;
        
        login_form.onsubmit = (event) => {
            event.preventDefault();
            let nameInput = document.getElementById("name_input") as HTMLInputElement;
            let name = nameInput.value
            name = name.substring(0,12);
            
            nameInput.style.display = "none";
            document.getElementById("join_button")!.style.display = "none";
            socket.emit("set_name", name || "Player");

            document.addEventListener('keydown', (e) => {
                socket.emit("shoot");
            });

            socket.on("game_update", (data:any, tickrate:number) =>{
                serverUpdate(data, id, tickrate);
            });

            let clientLoop = setInterval(() =>{ 
                updateGame(id, 32) 
            }, 8)
        }
    } ) 
}

export function serverUpdate(data:any,playerid:string, tickrate:number){
    World.serverUpdate(convertGameObjects(data));
    lastServerUpdate = Date.now();
}

export function updateGame(id:string, tickrate:number){
    let delta = Date.now() - lastServerUpdate;
    
    World.interpolate(delta/tickrate);
    let myGun = World.getPlayer(id)!;

    if(myGun) {
        Display.viewport.x += ((myGun.position.x - Display.viewport.width/2) - Display.viewport.x)/10;
        Display.viewport.y += ((myGun.position.y - Display.viewport.height/2) - Display.viewport.y)/10;
    }
    
    let mini_map = new MiniMap({x1:50, y1:50, x2:250, y2:250}, {x1:-5000, y1:-5000, x2:5000, y2:5000});

    Display.clear();
    Display.draw();
    
    for(let type in World.objects){
        for(let object of World.objects[type as "players"|"bullets"|"muzzelflashes"]){
            Display.drawObject(object)
        }
    }

    mini_map.drawPlayers(World.objects.players);
}