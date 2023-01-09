import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentB extends LightningElement {
    messageEntered
    message
    connectedCallback(){
        this.callSubscriber();
    }
    callSubscriber(){
        pubsub.subscribe('componentA', (message)=>{
            this.message = message
        })
    }

    changeHandler(event){
        this.messageEntered = event.target.value;
    }

    publishHandler(){
        pubsub.publish('componentB', this.messageEntered)
    }


}