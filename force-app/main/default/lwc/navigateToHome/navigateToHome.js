import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToHome extends NavigationMixin(LightningElement) {

      navigationToHome(){
            this[NavigationMixin.Navigate]({
                  type:'standard__namedPage',
                  attributes:{
                        pageName:'home'
                  }
            })

      }

      navigationToChatterPage(){
            this[NavigationMixin.Navigate]({
                  type:'standard__namedPage',
                  attributes:{
                        pageName:'chatter'
                  }
            })

      }
}