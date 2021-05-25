"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const player_1 = require("./game/gameObjects/player");
const utils_1 = require("./game/utils");
const world_1 = require("./game/world");
const app = express_1.default();
const gameWorld = new world_1.World();
const { v4: uuid } = require('uuid');
app.set("port", process.env.PORT || 3000);
let http = require("http").Server(app);
let io = require("socket.io")(http);
app.get("/$", (req, res) => { res.sendFile(path_1.default.resolve("public/index.html")); });
app.use(express_1.default.static("public"));
io.on("connection", function (socket) {
    socket.on("get_id", () => {
        let id = uuid();
        console.log("assigning a new id");
        socket.emit("set_id", id);
    });
    socket.on('verify', (id) => {
        console.log("a user connected widh id: " + id);
        gameWorld.addObject(new player_1.Player(id, new utils_1.Vec2(0, 0), new utils_1.Rotation(0)));
        let gunObj = gameWorld.getPlayerObject(id);
        socket.on('disconnect', () => {
            console.log('user disconnected');
            if (gunObj)
                gameWorld.removeObject(gunObj);
        });
        socket.on('shoot', () => {
            if (gunObj != null) {
                gameWorld.addObjects(gunObj.shoot());
            }
        });
        socket.on('set_name', (name) => {
        });
    });
});
let gameLoop = setInterval(() => {
    gameWorld.step();
    io.emit("game_update", gameWorld.getAllObjects());
}, 16);
const server = http.listen(3000, function () {
    console.log("listening on *:3000");
});
