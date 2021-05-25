export interface ISprite{
    image:HTMLImageElement;
    width:number;
    height:number;
}

export abstract class Sprites{
    static gun:ISprite;
    static bullet:ISprite;
    static muzzleflash:ISprite;

    static initalize(){
        this.gun = {
            image: this.fromId("gun"),
            width: 100,
            height: 64,
        }

        this.bullet = {
            image: this.fromId("bullet"),
            width: 30,
            height: 15,
        }

        this.muzzleflash = {
            image: this.fromId("muzzleflash"),
            width: 150,
            height: 75,
        }
    }
    
    static fromId(id:string){ 
        return document.getElementById(id) as HTMLImageElement
    }
}