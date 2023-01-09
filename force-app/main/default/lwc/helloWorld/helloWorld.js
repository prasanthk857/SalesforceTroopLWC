import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
      // name
      // age = 30
      // fullname = 'salesforce india'
      // showData = false
      // details = {
      //       name : 'dummy',
      //       place : 'melbourne'
      // }
      // userList = ['A', "B"]
      fullname = 'Zero to hero'
      title = 'aura'

      changeHandler(event){
            this.title = event.target.value
            this.fullname=100
      }


      // getter Examples
      user12 = ['jai', 'smith','vinod'];
      num1 = 2
       num2 = 3
      hey = this.user12.shift();
     // firstuser = this.user12[0]
      
      get firstuser(){
           let numwe = 0
            return this.user12[0].toUpperCase()
      }
      get multiply(){
            return this.num1 * this.num2
            console.log(this.num1);
      }

}