import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    navigateToRecordPageView(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035g00000mqaaLAAQ',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
        //alert('All is well!!')
    }
    navigateToRecordPageEdit(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035g00000mqaaLAAQ',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
        //alert('All is well!!')
    }

    navigateToRecordRelationshipPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0015g00000vo6GxAAI',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
        //alert('All is well!!')
    }
}