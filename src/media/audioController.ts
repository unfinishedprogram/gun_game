export class AudioController {
    static mute:boolean = false;
    static playSound(sound:HTMLAudioElement){
        if(this.mute) return;
        let elm = sound.cloneNode() as HTMLAudioElement;
        elm.volume = 0.1;
        elm.addEventListener("ended", () => elm.remove());
        elm.play();
    }
}