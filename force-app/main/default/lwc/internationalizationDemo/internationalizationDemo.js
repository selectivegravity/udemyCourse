import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
import DIR from '@salesforce/i18n/dir'

export default class InternationalizationDemo extends LightningElement {
    number= 28736489.29800
    dir = 'rtl'//DIR

    formattedNumber = new Intl.NumberFormat(LOCALE,{
        style:'currency',
        currency: CURRENCY,
        currencyDisplay:'symbol'
    }).format(this.number);
}