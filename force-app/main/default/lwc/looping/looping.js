import { LightningElement, track } from 'lwc';

export default class Looping extends LightningElement {
      carList = ['ford', 'audi', 'honda','rolceroys','mercedes']
      
      @track num = 1
      @track num2 = this.num
      ceoList = [
            {
                  id:1,
                  company:'Google',
                  name:'sundar pichai'
             },
            {
                  id:2,
                  company:'Apple Inc',
                  name:'Tim cook'
            },
            {
                  id:3,
                  company:'Facebook',
                  name:'Mark Zuckerburg'
            },
            {
                  id:4,
                  company:'Amazon',
                  name:'jeff Bezos'
            }
]
}