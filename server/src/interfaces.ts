export interface IPlayerData{
    uuid:string;
    angle:number;
    position:{
        x:number,
        y:number
    }
}

export type gameObjectType = 
    null |
    'player' | 
    'muzzle_flash' | 
    'bullet'