import { LightningElement,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import ID from '@salesforce/user/Id'

export default class WireUserDetails extends LightningElement {
    userId = ID
    userdetails;
    //0055g00000EOByWAAX

    // @wire(adapterId,adapterConfig) propertyOrFunction;

    @wire(getRecord,{recordId: '0055g00000EOByWAAX', fields:[NAME_FIELD,EMAIL_FIELD]})
    userDetailHandler({data,error}){
        if(data){ 
            this.userdetails= data.fields;
            console.log(this.userdetails.Name.value+ '  ****  ' + this.userdetails.Email.value)
        }
        if(error){
            console.log(error);
        }
    }

    
    // Wire is Reactive so we user $ for reactive properties
    @wire (getRecord,{recordId: '$userId', fields:[NAME_FIELD,EMAIL_FIELD]})
    userDetailProperty;
}