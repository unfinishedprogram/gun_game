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
            image: document.getElementById("gun") as HTMLImageElement,
            width: 100,
            height: 64,
        }
        this.bullet = {
            image: document.getElementById("bullet") as HTMLImageElement,
            width: 100,
            height: 64,
        }
        this.muzzleflash = {
            image: document.getElementById("muzzleflash") as HTMLImageElement,
            width: 150,
            height: 75,
        }
    }
}