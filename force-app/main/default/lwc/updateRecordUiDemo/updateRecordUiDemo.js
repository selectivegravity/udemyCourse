import { LightningElement, wire, track } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const COLS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Email', fieldName: 'Email' },
    { label: 'Phone', fieldName: 'Phone', type: 'tel', editable: true }
];

export default class UpdateRecordUiDemo extends LightningElement {
    columns = COLS;
    @track contactList = [];
    @track draftValues = [];

    @wire(getListUi, { objectApiName: CONTACT_OBJECT, listViewApiName: 'AllContacts' })
    listViewHandler({ data, error }) {
        if (data) {
            console.log('Data received from getListUi:', data);
            this.contactList = data.records.records.map(item => {
                return {
                    Id: this.getValue(item, 'Id'),
                    Name: this.getValue(item, 'Name'),
                    Title: this.getValue(item, 'Title'),
                    Email: this.getValue(item, 'Email'),
                    Phone: this.getValue(item, 'Phone')
                };
            });
        } else if (error) {
            console.error('Error in getListUi:', error);
        }
    }

    getValue(data, field) {
        return data.fields[field].value;
    }

    handleSave(event) {
        console.log('Draft values from datatable:', event.detail.draftValues);
        const recordInputs = event.detail.draftValues.slice().map(draft => {
            const fields = { ...draft };
            console.log(fields);
            return { fields };
        });

        const promises = recordInputs.map(recordInput => updateRecord(recordInput));
        Promise.all(promises)
            .then(results => {
                this.showToast('Success', 'Records updated successfully', 'success');
                this.draftValues = [];
                // Optionally, refresh the data here
            })
            .catch(error => {
                console.error('Error updating records:', error);
                this.showToast('Error updating records', error.body.message, 'error');
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant: variant || 'success'
        }));
    }
}
