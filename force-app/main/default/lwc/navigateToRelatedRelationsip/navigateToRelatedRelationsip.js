import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation'
export default class NavigateToRelatedRelationsip extends NavigationMixin( LightningElement) {
      
      navigateToRelatedList(){
            this[NavigationMixin.Navigate]({
                  type:'standard__recordRelationshipPage',
                  attributes:{
                        recordId:'0018G00000MCorDQAT',
                        objectApiName:'Account',
                        relationshipApiName:'Contacts',
                        actionName:'view'
                  }
            })
      }

      navigateToEditRelatedList(){
            this[NavigationMixin.Navigate]({
                  type:'standard__recordRelationshipPage',
                  attributes:{
                        recordId:'0018G00000MCorDQAT',
                        objectApiName:'Account',
                        relationshipApiName:'Contacts',
                        actionName:'edit'
                  }
            })
      }
}