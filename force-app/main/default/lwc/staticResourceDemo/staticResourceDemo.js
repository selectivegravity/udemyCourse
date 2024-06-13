import { LightningElement } from 'lwc';
import PAYPAL_IMG from '@salesforce/resourceUrl/test_static_resrc'

export default class StaticResourceDemo extends LightningElement {
    paypalImg = PAYPAL_IMG;
}