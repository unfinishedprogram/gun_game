export class AudioController {
    static playSound(sound:HTMLAudioElement){
        let elm = sound.cloneNode() as HTMLAudioElement;
        elm.volume = 0.1;
        elm.addEventListener("ended", () => elm.remove());
        elm.play();
    }
}