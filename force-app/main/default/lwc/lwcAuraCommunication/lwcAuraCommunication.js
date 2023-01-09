import { LightningElement,api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
      @api title

      callAura(){
            const event = new CustomEvent('buttonclick', {
                  detail:{
                        msg:"Hello From LWC"
                  }
            })
            this.dispatchEvent(event)
      }
}