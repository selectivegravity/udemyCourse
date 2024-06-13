import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    isLoaded = true;
    renderedCallback(){
        if(this.isLoaded){
            const style = document.createElement('style');
            style.innerText = `c-shadow-dom-styling .slds-button{
                color: white;
                background: red;
            }`;
            this.template.querySelector('lightning-button').appendChild(style);
        }
        this.isLoaded = false;
    }
}
