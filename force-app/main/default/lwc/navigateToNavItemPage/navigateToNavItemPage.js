import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToNavItemPage extends NavigationMixin(LightningElement) {
    navigateToNavItemPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Resource_Content_Notify'
            }
        })
    }
}