import { LightningElement } from 'lwc';
import pubsubDemo from 'c/pubsubDemo';

export default class PubsubComponentA extends LightningElement {
    message
    inputHandler(event){
        this.message = event.target.value
    }
    publishHandler(){
        pubsubDemo.publish('componentA', this.message)
    }
}