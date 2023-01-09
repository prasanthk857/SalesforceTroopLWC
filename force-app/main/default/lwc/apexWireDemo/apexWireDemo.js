import { LightningElement, wire } from 'lwc';
import  getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class ApexWireDemo extends LightningElement {

      accountList
      @wire(getAccountList)
      accounts

      @wire(getAccountList)
      accountsHandler({data, error}){
            if(data){
                  this.accountList = data.map(item=>{
                        let newType = item.Type === 'Customer - Channel' ? 'Channel': // Transforming the data inside the function property
                        item.Type === 'Customer - Direct' ? 'Direct':'--------'
                        return {...item,newType}  // without this line return both the wire methods were not able to show the data in the page
                  })
            }

            if(error){
                  console.error(error)
            }
      }
}