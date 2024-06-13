import { LightningElement,api } from 'lwc';

export default class P2cSilder extends LightningElement {
    val = 20;

    changeHandler(event){
        this.val = event.target.value;
    }

    @api resetSilder(){
        this.val = 50;
    }
}