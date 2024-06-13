import { LightningElement,wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

export default class PicklistValuesByRecordTypeId extends LightningElement {
    typePicklistValues = [];
    industryPicklistValues = [];
    selectedType = '';
    selectedIndustry = '';
    @wire (getObjectInfo,{objectApiName:ACCOUNT_OBJECT}) accountDetails;
    @wire(getPicklistValuesByRecordType,{objectApiName: ACCOUNT_OBJECT, recordTypeId:'$accountDetails.data.defaultRecordTypeId'}) 
    getPicklists({data,error}){
        console.log(data);
        if(data){
            this.typePicklistValues = this.generatePicklist(data.picklistFieldValues.Rating);
            this.industryPicklistValues = this.generatePicklist(data.picklistFieldValues.Industry);
        }
        if(error){
            console.log(error)
        }
    }

    generatePicklist(data){
        return data.values.map(item=>({"label": item.label, "value": item.value}));
    }

    handleType(event){
        this.selectedType = event.detail.value;
    }

    handleIndustry(event){
        this.selectedIndustry = event.detail.value;
    }
}