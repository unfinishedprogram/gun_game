
import { createTextChangeRange } from "typescript";
import { Display } from "../display";
import { Player } from "../gameObjects/player";
import { Vec2 } from "../util/vec2";

type Bounds = {x1:number, y1:number, x2:number, y2:number}

export class MiniMap{
    world_bounds:Bounds;
    bounds:Bounds;

    constructor(bounds:Bounds, world_bounds:Bounds){
        this.world_bounds = world_bounds;
        this.bounds = bounds;
    }

    drawPlayers(players:Player[]){
        Display.ctx.fillStyle = "#000";
        Display.ctx.strokeStyle = "#fff";
        Display.ctx.rect(
            this.bounds.x1 + Display.viewport.x,
            this.bounds.y1 + Display.viewport.y,
            this.bounds.x2 - this.bounds.x1,
            this.bounds.y2 - this.bounds.y1)
        Display.ctx.stroke();
        Display.ctx.fill();
        let wh = this.world_bounds.x2 - this.world_bounds.x1;
        let ww = this.world_bounds.y2 - this.world_bounds.y1;
        let lh = (this.bounds.x2 - this.bounds.x1);
        let lw = (this.bounds.y2 - this.bounds.y1);
        
        for(let player of players){
            let rx = player.position.x / wh;
            let ry = player.position.y / ww;

            let px = rx * lh;
            let py = ry * lw;

            Display.ctx.fillStyle = "#fff";
            Display.ctx.beginPath();

            Display.ctx.arc(
                px + Display.viewport.x + lw/2 + this.bounds.x1,
                py + Display.viewport.y + lh/2 + this.bounds.y1,
                2, 0, 2 * Math.PI);
            Display.ctx.fill();
        }   
    }
}