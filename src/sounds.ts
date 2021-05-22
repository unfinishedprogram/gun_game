export abstract class Sounds{
    static gunshot:HTMLAudioElement;
    static initalize(){
        this.gunshot = document.getElementById("gunshot") as HTMLAudioElement;
    }
}