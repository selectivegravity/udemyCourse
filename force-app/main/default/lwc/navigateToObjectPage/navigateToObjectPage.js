import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

    navigateToNewRecordwithDefault(){
        const defaultValue = encodeDefaultFieldValues({
            FirstName: 'Abhishek',
            LastName: 'Singh',
            LeadSource: 'Other'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues: defaultValue
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'list'
            },
            // State is to set values
            state:{
                filterName: 'Recent'
            }
        })
    }

    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        })
    }
}