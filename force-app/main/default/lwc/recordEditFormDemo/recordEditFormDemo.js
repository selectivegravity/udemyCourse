import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import ID_FIELD from '@salesforce/schema/Account.Id'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
import RATING_FIELD from '@salesforce/schema/Account.Rating'


export default class RecordEditFormDemo extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    fields = {
        name: NAME_FIELD,
        industry: INDUSTRY_FIELD,
        type: TYPE_FIELD,
        id: "001J10000030gJwIAI",
        annualrevenue: ANNUAL_REVENUE_FIELD,
        phone: PHONE_FIELD,
        rating: RATING_FIELD
    }

    handleReset(){
        window.alert('check')
        const inputfields = this.template.querySelectorAll('lightning-input-field');
        if(inputfields){
            Array.from(inputfields).forEach(field=> {
                field.reset();
            })
        }
    }
}