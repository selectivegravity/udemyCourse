import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToLWC extends NavigationMixin(LightningElement) {
    navigateToLWC(){
        var definition = {
            componentDef:'c:navigationTargetLWC',
            attributes:{
                recordId: '123409876'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#' + btoa(JSON.stringify(definition))
            }
        })
    }
}