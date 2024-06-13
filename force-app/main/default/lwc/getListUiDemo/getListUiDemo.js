import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'

export default class GetListUiDemo extends LightningElement {
    accountList = [];
    currentPageToken = null;
    nextPageToken = null;
    previousPageToken = null;
    @wire(getListUi,{objectApiName: ACCOUNT_OBJECT, listViewApiName: 'allAccounts', pageSize: 10,sortBy: NAME_FIELD, pageToken: '$currentPageToken'}) 
    allAccountDetails({data,error}){
        if(data){
            this.accountList = data.records.records;
            this.nextPageToken = data.records.nextPageToken;
            this.previousPageToken = data.records.previousPageToken;
            console.log(data);
        }
        if(error){

        }
    }

    handlePrevious(event){
        this.currentPageToken = this.previousPageToken;
    }

    handleNext(event){
        this.currentPageToken = this.nextPageToken;
    }
}