import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { MessageContext, publish,subscribe,APPLICATION_SCOPE,unsubscribe } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
      @wire(MessageContext)
      context
      inputValue
      subscription
      receivedMessage

      connectedCallback(){
            this.subscribeMessage()
      }

      inputHandler(event){
            this.inputValue = event.target.value
      }

      publishMessage(){
            const message={
                  lmsData:{
                        value:this.inputValue
                  }
            }
            //publish(messageContext, messageChannel, message)
            publish(this.context,SAMPLEMC, message)
      }

      subscribeMessage(){
          this.subscription= subscribe(this.context,SAMPLEMC, (input)=> {this.handleMessage(input)}, {scope:APPLICATION_SCOPE})

      }
      handleMessage(input){
            this.receivedMessage = input.lmsData.value ? input.lmsData.value:"No MSG PUBLISHED"
      }

}