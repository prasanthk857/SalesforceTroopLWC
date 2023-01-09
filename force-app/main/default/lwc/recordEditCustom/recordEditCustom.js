import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class RecordEditCustom extends LightningElement {
      objectName= ACCOUNT_OBJECT
      inputValue=''
      handleChange(event){
            this.inputValue=event.target.value

      }

      handleSubmit(event){
            event.preventDefault()
            const inputCmp = this.template.querySelector('lightning-input')
            const value = inputCmp.value

            if(!value.includes('Australia')){
                  inputCmp.setCustomValidity("The account name must include 'Australia'")
            } else {
                  inputCmp.setCustomValidity('')
                  const fields = event.detail.fields
                  console.log('event.detail.fields===>' + JSON.stringify(event.detail.fields))
                  fields.Name = value
                  console.log('value===>' + value)

                  this.template.querySelector('lightning-record-edit-form').submit(fields)
            }

            inputCmp.reportValidity()
      }

      successHandler(event){
           const toastEvent = new ShowToastEvent({
                  title:"Account created",
                  message:"Record ID: " + event.detail.id,
                  variant:"success"
            })

            this.dispatchEvent(toastEvent)
      }

      handleError(event){
            const toastEvent = new ShowToastEvent({
                  title:"Error creating Account",
                  message: event.detail.message,
                  variant:"error"
            })

            this.dispatchEvent(toastEvent)

      }

}