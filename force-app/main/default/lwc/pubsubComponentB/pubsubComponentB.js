import { LightningElement } from 'lwc';
import pubsubDemo from 'c/pubsubDemo'

export default class PubsubComponentB extends LightningElement {
    message
    connectedCallback(){
        this.callSubscriber()
    }
    callSubscriber(){
        pubsubDemo.subscribe('componentA', (message)=>{
            this.message = message
        })
    }
}
