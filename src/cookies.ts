import { ISettings, Settings } from "./settings";

type UserData = {
    settings:Settings;
    name:string;
    uuid:string;
}

export class Cookies{
    static saveSettings(settings:ISettings) {
        document.cookie = "data=" + JSON.stringify(settings);
    }
    static loadSettingsFromCookie(): Settings {
        let settings:ISettings;
        try {
            console.log(document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
            settings = JSON.parse(document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
            
        } catch (e) {
            console.log("Failed to load cookie")
            settings = {chroma:true, bloom:true, mute:false}
            this.saveSettings(settings)
        }
        return new Settings(settings);
    }
}
