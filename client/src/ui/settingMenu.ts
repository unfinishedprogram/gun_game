import { ISettings, Settings } from "../settings";

export class SettingMenu extends HTMLElement{
    constructor(settings: Settings){
        super();
        this.classList.add('settings_menu')

        this.appendChild(new Checkbox((state) => {
            settings.set("bloom", state);
        }, settings.settings.bloom,
        "bloom"))

        this.appendChild(new Checkbox((state) => {
            settings.set("chroma", state);
        }, settings.settings.chroma,
        "dispersion"))
    }
}

export class Checkbox extends HTMLElement{
    state:boolean;
    box: HTMLImageElement;
    label: HTMLElement;
    constructor(callback: (val: boolean) => void, state:boolean, label:string){
        super()

        this.state = state

        this.box = document.createElement('img')
        this.label = document.createElement('span')
        
        this.box.src = (this.state ? 'icons/checkbox.svg': 'icons/box.svg')
        this.label.innerHTML = label;

        this.appendChild(this.label)
        this.appendChild(this.box)

        this.onclick = () => {
            this.state = !this.state
            this.box.src = (this.state ? 'icons/checkbox.svg': 'icons/box.svg')
            callback(this.state)
        }
    }
}

customElements.define('settings-menu', SettingMenu);
customElements.define('check-box', Checkbox);