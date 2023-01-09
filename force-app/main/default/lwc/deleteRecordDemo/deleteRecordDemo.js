import { LightningElement } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class DeleteRecordDemo extends LightningElement {

      recordId
      changeHandler(event){
            this.recordId = event.target.value
      }

      deleteHandler(){
            deleteRecord(this.recordId).then(()=>{  // why the result here made the error to trigger even it is not the  
                  console.log("deleted the record")
                  this.showToast('Success!!', 'Deleted Successfully','success')
            }).catch(error=>{
                  console.error(error)
                  this.showToast('Error!!', 'Error Occured','error')

            })

      }

      showToast(title,message,variant){
            this.dispatchEvent(new ShowToastEvent({
                  title,
                  message,
                  variant
            }))
      }

      
}