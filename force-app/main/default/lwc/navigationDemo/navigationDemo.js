import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigationDemo extends NavigationMixin(LightningElement) {
    navigateToHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName: 'home'
            }
        })
    }

    navigateToChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName: 'chatter'
            }
        })
    }
}