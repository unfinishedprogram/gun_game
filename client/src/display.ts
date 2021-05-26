import { GameObject } from "./gameObjects/gameObject";



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
        let sprite = object.sprite;
        this.ctx.translate(object.position.x, object.position.y);

        if(object.name){
            this.ctx.font = "30px Arial";
            this.ctx.textAlign = "center";
            this.ctx.fillText(object.name, 0, 80);
        }

        if(object.health != undefined){
            this.ctx.fillStyle = "#000"
            this.ctx.fillRect(-50, 100, 100, 20)
            this.ctx.fillStyle = "#fff"
            this.ctx.fillRect(-50, 100, object.health, 20)
        }

        this.ctx.rotate(object.rotation.angle);

        this.ctx.drawImage(sprite.image, -sprite.width/2, -sprite.height/2, sprite.width, sprite.height);

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
        let DPR = window.devicePixelRatio || 1; //Device Pixel Ratio

        this.width = window.innerWidth * DPR;
        this.height = window.innerHeight * DPR;

        this.c.width = this.width
        this.c.height = this.height

        this.viewport.width = this.width
        this.viewport.height = this.height
    }
}