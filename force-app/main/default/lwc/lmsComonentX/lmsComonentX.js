import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe, publish } from 'lightning/messageService';

export default class LmsComonentX extends LightningElement {
      @wire(MessageContext)
      context
      receivedMessage
      subscription

      inputMessage

      connectedCallback(){
            this.subscribeMessage()
      }


      subscribeMessage(){
            this.subscription = subscribe(this.context, SAMPLEMC, (message)=> {this.handleMessage(message)}, {scope:APPLICATION_SCOPE})

      }

      handleMessage(message){
            this.receivedMessage = message.lmsData.value ? message.lmsData.value:'No Message Published'
            // console.log("this.receivedMessage====> " + this.receivedMessage);
      }

      unsubscribeMessage(){
            unsubscribe(this.subscription)
            this.subscription = null


      }

      handleMessage(event){
            this.inputMessage = event.target.value
      }
      publishMessage(){
            const info = {
                  lmsData:{
                        value:this.inputMessage
                  }
            }
            
            publish(this.context,SAMPLEMC, info)
      }
}