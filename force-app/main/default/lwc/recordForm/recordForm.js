import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import {ShowToastEvent} from 'lightning/platformShowToastEvent' 

export default class RecordForm extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    fieldList = [NAME_FIELD,TYPE_FIELD,ANNUAL_REVENUE_FIELD,INDUSTRY_FIELD]

    successHandler(event){
        console.log(event.detail.id);
        this.dispatchEvent(new ShowToastEvent({
            title: 'Account Created',
            variant:'success'
        }))
    }
}