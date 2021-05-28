import express from "express";
import path from "path";
import { Socket } from "socket.io";
import { Player } from "./game/gameObjects/player";
import { Rotation, Vec2 } from "./game/utils";
import { World } from "./game/world";

const app = express();
const gameWorld = new World();
const {v4:uuid} = require('uuid');

app.set("port", process.env.PORT || 3000);

let http = require("http").Server(app);
let io = require("socket.io")(http);


app.get("/$", (req: any, res: any) => { res.sendFile(path.resolve("public/index.html"))});
app.use(express.static("public"))
io.on("connection", function (socket:Socket) {

    socket.on("get_id", () => {
        let id = uuid();
        console.log("assigning a new id");
        socket.emit("set_id", id);
    })

    socket.on('verify', (id:string) => {
        socket.emit("login");
        console.log("a user connected widh id: " + id);

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('set_name', (name:string) => {
            console.log(id, "logged in with the name:", name);
            let gunObj = new Player(id, new Vec2(0,0), new Rotation(0))
            gunObj.name = name;
            gameWorld.addObject(gunObj);

            socket.on('disconnect', () => {
                gameWorld.removeObject(gunObj);
            });

            socket.on('shoot', () => {
                gameWorld.addObjects(gunObj.shoot())
            });
        })
    })
});

let gameLoop = setInterval(()=>{
    gameWorld.step();
    gameWorld.handleCollisions(gameWorld.getCollisions())
    gameWorld.step();
    gameWorld.handleCollisions(gameWorld.getCollisions())
    io.emit("game_update", gameWorld.getObjects(), 32);
}, 32)

const server = http.listen(3000, function () {
    console.log("listening on *:3000");
});