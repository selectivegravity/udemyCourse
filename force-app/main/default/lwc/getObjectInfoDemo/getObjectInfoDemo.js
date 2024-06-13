import { LightningElement,wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_OBJECT from '@salesforce/schema/Account.Industry';
import OPP_OBJECT from '@salesforce/schema/Opportunity';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import { getObjectInfo,getObjectInfos,getPicklistValues } from 'lightning/uiObjectInfoApi';


export default class GetObjectInfoDemo extends LightningElement {
    accountObjectDetails;
    objectDetails;
    defaultRecordTypeId;
    picklistValues = [];
    selectedIndustry = '';
    @wire (getObjectInfo,{objectApiName:ACCOUNT_OBJECT}) 
    accountObjectDetails({data,error}){
        if(data){
            console.log(data)
            this.defaultRecordTypeId = data.defaultRecordTypeId;
        }
        if(error){

        }
    }

    @wire(getObjectInfos,{objectApiNames: [OPP_OBJECT,LEAD_OBJECT]})
    objectDetails({data,error}){
        if(data){
            this.objectDetails = data;
            console.log(data);
        }
        if(error){

        }
    }

    @wire(getPicklistValues,{recordTypeId: '$defaultRecordTypeId', fieldApiName:INDUSTRY_OBJECT})
    IndustryPicklistValues({data,error}){
        if(data){
            this.picklistValues = [...this.generatePicklist(data)];
            console.log(data);
            console.log(this.picklistValues);
        }
        if(error){

        }
    }

    generatePicklist(data){
        // Convert Map into List
        return data.values.map(item=>({label: item.label,value: item.value}));
    }

    handleChange(event){
        this.selectedIndustry = event.detail.value;
    }

}