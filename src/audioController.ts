export class AudioController {
    static audioElements:HTMLAudioElement[] = [];

    static playSound(src:string){
        let elm = document.createElement("audio") as HTMLAudioElement;
        elm.src = src;
        elm.volume = 0.1;
        elm.addEventListener("ended", () => elm.remove());
        elm.play();
    }
}