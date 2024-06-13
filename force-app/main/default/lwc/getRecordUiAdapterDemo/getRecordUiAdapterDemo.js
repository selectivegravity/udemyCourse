import { LightningElement, wire, api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class GetRecordUiAdapterDemo extends LightningElement {
    @api recordId;

    formFields = [
        { fieldName: "AccountNumber", label: "Account Number" },
        { fieldName: "AnnualRevenue", label: "Annual Revenue" },
        { fieldName: "Name", label: "Name" },
        { fieldName: "Phone", label: "Phone" }
    ];

    @wire(getRecordUi, { recordIds: '$recordId', layoutTypes: 'Full', modes: 'Edit' })
    accountRecordUiHandler({ data, error }) {
        if (data) {
            this.formFields = this.formFields.map(item => {
                return {
                    ...item,
                    value: data.records[this.recordId].fields[item.fieldName].value
                };
            });
            console.log(data);
        }
        if (error) {
            console.error('Error retrieving record UI:', error);
        }
    }
}
