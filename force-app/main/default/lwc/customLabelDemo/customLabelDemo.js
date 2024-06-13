import { LightningElement } from 'lwc';
import DES_ONE from '@salesforce/label/c.description_one'
import DES_TWO from '@salesforce/label/c.description_two'

export default class CustomLabelDemo extends LightningElement {
    labels = {
        desone : DES_ONE,
        destwo : DES_TWO
    }
}