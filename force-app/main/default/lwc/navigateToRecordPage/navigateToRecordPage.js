import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

      recordViewMode(){
            this[NavigationMixin.Navigate]({
                  type:'standard__recordPage',
                  attributes:{
                        recordId:'0038G00000T37NUQAZ',
                        objectApiName:'Contact',
                        actionName:'view'

                  }
            })
      }
      recordEditMode(){
            this[NavigationMixin.Navigate]({
                  type:'standard__recordPage',
                  attributes:{
                        recordId:'0038G00000T37NUQAZ',
                        objectApiName:'Contact',
                        actionName:'edit'

                  }
            })
      }
}
