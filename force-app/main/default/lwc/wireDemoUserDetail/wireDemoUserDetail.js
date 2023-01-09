import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id

    userDetail
    @wire(getRecord, {recordId:'0058G000001Pj5VQAS', fields})  // It expects you to pass the configuration(Mandatory) with adapter 
//@wire(getRecord, {recordId:'0050p000002MXU6AAO', fields:['User.Name', 'User.Email']})   Instead of doing this(creates problem when the fileds name got changed)
    userDetailHandler({data, error}){       // Data and Error are the properties hardcoded by salesforce in the wire response 
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getRecord, {recordId:'0058G000001Pj5VQAS', fields})
    userDetailProperty
}