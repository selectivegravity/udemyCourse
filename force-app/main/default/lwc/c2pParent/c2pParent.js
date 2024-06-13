import { LightningElement } from 'lwc';

export default class C2pParent extends LightningElement {
    isVisible = false;
    msg='';

    handleClick(){
        this.isVisible = true;
    }

    handleClose(event){
        this.isVisible = false;
        this.msg = event.detail.msg;
        console.log("Parent Event Called");
    }
}