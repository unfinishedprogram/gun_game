import { Cookies } from "./cookies";
import { Display } from "./display";
import { AudioController } from "./media/audioController";

type setting = "chroma" | "bloom" | "mute";

export interface ISettings{
    chroma:boolean;
    bloom:boolean;
    mute:boolean;
}

export class Settings{
    settings:ISettings;

    set(setting:setting , value:boolean){
        this.settings[setting] = value;
        Cookies.saveSettings(this.settings);
        this.applySettings();
    }

    applySettings(){
        AudioController.mute = this.settings.mute;
        this.settings.bloom ? Display.c.classList.add("bloom") : Display.c.classList.remove("bloom");
        this.settings.chroma ? Display.c.classList.add("chroma") : Display.c.classList.remove("chroma");
    }

    constructor(initalSettings:ISettings){
        this.settings = initalSettings;
        this.applySettings();
    }
}