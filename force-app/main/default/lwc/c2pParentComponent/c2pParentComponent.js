import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
      showModel = false;
      msg='abc'
      clickHandler(){
            this.showModel = true;
      }
      closeHandler(event){
            this.msg = event.detail.msg
            this.showModel = false;
      }
}