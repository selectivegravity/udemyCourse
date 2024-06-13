import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor(){
        super();
        console.log('Child Constructor');
        throw new Error('Failed to render Child Component');
    }
    connectedCallback(){
        //
        console.log('Child ConnectCallback')
    }
    renderedCallback(){
        console.log('Child renderedCallback')
    }
    disconnectedCallback(){
        console.log('Child disconnectedCallback')
    }
}