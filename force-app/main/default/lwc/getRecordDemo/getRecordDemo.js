import { LightningElement,wire,api } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ACTIVE_FIELD from '@salesforce/schema/Account.Active__c'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'

export default class GetRecordDemo extends LightningElement {
    name;
    active;
    industry;
    ownerName;
    accountDetail;
    @api recordId;
    // @wire(getRecord,{recordId: '$recordId',fields:[NAME_FIELD, ACTIVE_FIELD,INDUSTRY_FIELD,OWNER_NAME_FIELD]})
    @wire(getRecord,{recordId: '$recordId',layoutTypes:["Full"], modes: ["View"]})
    accountRecordDetailsFunction({data,error}){
        if(data){
            this.accountDetail = data;
            // this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue: data.fields.Name.value;
            // this.active = data.fields.Active__c.displayValue ? data.fields.Active__c.displayValue: data.fields.Active__c.value;
            // this.ownerName = data.fields.Owner.displayValue ? data.fields.Owner.displayValue: data.fields.Owner.value;
            // this.industry = data.fields.Industry.displayValue ? data.fields.Industry.displayValue: data.fields.Industry.value;
            this.name = getFieldValue(data,NAME_FIELD);
            this.active = getFieldValue(data,ACTIVE_FIELD);
            this.industry = getFieldValue(data,INDUSTRY_FIELD);
            this.ownerName = getFieldValue(data,OWNER_NAME_FIELD);
            console.log(data);
        }
        if(error){

        }
    }
}