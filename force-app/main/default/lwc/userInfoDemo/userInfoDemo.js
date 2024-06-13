import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id'
import ISGUEST from'@salesforce/user/isGuest'


export default class UserInfoDemo extends LightningElement {
    Id = ID;
    isGuest = ISGUEST;
}