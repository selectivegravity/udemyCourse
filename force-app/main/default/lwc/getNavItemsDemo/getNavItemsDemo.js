import { LightningElement,wire } from 'lwc';
import {getNavItems}  from 'lightning/uiAppsApi'

export default class GetNavItemsDemo extends LightningElement {
    @wire(getNavItems,{navItemNames: ['standard-Account'],pageSize: 30})
    navMenuDetails({data,error}){
        if(data){
            console.log(data);
        }
        if(error){
            console.error(error);
        }
    }
}