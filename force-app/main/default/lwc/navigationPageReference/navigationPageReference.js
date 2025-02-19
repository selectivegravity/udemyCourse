import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'

export default class NavigationPageReference extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    get pageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef,null,2): '';
    }
}