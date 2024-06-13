import { LightningElement } from 'lwc';
import ViewAllData from '@salesforce/userPermission/ViewAllData'
import TestPermission from '@salesforce/customPermission/Test_Permission'


export default class CheckPermissionDemo extends LightningElement {
    get checkViewAllDataAccess(){
        return ViewAllData;
    }
    get checkTestPermission(){
        return TestPermission;
    }
}