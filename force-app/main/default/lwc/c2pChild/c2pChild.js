import { LightningElement } from 'lwc';

export default class C2pChild extends LightningElement {
    handleOkay(){
        this.dispatchEvent(new CustomEvent('close',{
            bubbles:true,
            detail:{
                msg:"Modal is Closed"
            }
        }))
        console.log("Child Button Handler Called");
    }

    bubbletest(){
        console.log("Bubble Test called");
    }
}