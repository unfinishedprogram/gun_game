import { GameObject } from "./gameObject";



export class Display {
    static c:HTMLCanvasElement;
    static ctx:CanvasRenderingContext2D;
    static width:number = 3000;
    static height:number = 2000;

    static viewport:{x:number, y:number, width:number, height:number}
    

    static initalize(){
        this.c = document.getElementById("canvas") as HTMLCanvasElement;
        
        this.viewport = {x:-this.width/2, y:-this.height/2, width:this.width, height:this.height};
        this.c.width = this.width;
        this.c.height = this.height;
        
        this.ctx = this.c.getContext("2d")!;
        this.resize();
        window.onresize = () => {
            this.resize();
        }
    }

    static drawObject(object:GameObject){
        this.ctx.translate(object.position.x, object.position.y);
        this.ctx.rotate(object.rotation.angle);

        this.ctx.drawImage(object.sprite, -object.width/2, -object.height/2, object.width, object.height);

        this.ctx.rotate(- object.rotation.angle);
        this.ctx.translate(- object.position.x, - object.position.y);
    }

    static clear(){
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0,0, this.width, this.height);
        this.ctx.translate(- this.viewport.x, - this.viewport.y)
        
    }

    static draw(){
        this.clear();
        this.drawGrid(250);
    }

    static drawGrid(gap:number){
        this.ctx.fillStyle = "white";

        let tx = Math.round(this.viewport.x/gap);
        let rx = tx*gap;

        let ty = Math.round(this.viewport.y/gap);
        let ry = ty*gap;

        for(let x = rx - gap; x < rx + this.viewport.width + gap; x += gap){
            this.ctx.fillRect(x, this.viewport.y, 2, this.viewport.height);
        }

        for(let y = ry - gap; y < ry + this.viewport.height + gap; y += gap){
            this.ctx.fillRect(this.viewport.x, y, this.viewport.width, 2);
        }
    }


    static resize(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.c.width = this.width
        this.c.height = this.height
        this.viewport.width = this.width
        this.viewport.height = this.height
    }
}