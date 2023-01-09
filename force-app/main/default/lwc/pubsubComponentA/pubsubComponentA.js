import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentA extends LightningElement {
    messageReceived
    message
    inputHandler(event){
        this.message = event.target.value
    }
    publishHandler(){
        pubsub.publish('componentA', this.message)
    }

    connectedCallback(){
        
            pubsub.subscribe('componentB', (messages) => {
                this.messageReceived = messages
            })
         
    }

    
}