import { LightningElement } from 'lwc';

export default class ExperimentQuizApp extends LightningElement {
    isSubmitted = false
    selctedAnswers = {}
    correctAnswers = 0

      get disableHandle(){
            return !(Object.keys(this.selctedAnswers).length === this.questionObject.length)
      }
      questionObject = [
            {
                  id:'question1',
                  question:'which one of the following is not a template loop',
                  answers:{
                        a:'for:each',
                        b:'iterator',
                        c:'map loop'
                  },

                  correctAnswer:'c'
            },
            {
                  id:'question2',
                  question:'which of the file is invalid in LWC component foler',
                  answers:{
                        a:'.svg',
                        b:'.apex',
                        c:'.js'
                  },

                  correctAnswer:'b'
            },
            {
                  id:'question3',
                  question:'which one of the following is not a directive',
                  answers:{
                        a:'for:each',
                        b:'if:true',
                        c:'@track'
                  },

                  correctAnswer:'c'
            }
      ]

      changeHandler(event){
            const {name,value} = event.target
            this.selctedAnswers = {...this.selctedAnswers, [name]:value}
                     
      }
      submitHandler(event){
            event.preventDefault()

          let correct = this.questionObject.filter(item=> this.selctedAnswers[item.id] === item.correctAnswer)
           this.correctAnswers = correct.length
           this.isSubmitted = true
           console.log('correct ra');
           
      }
      resetHandler(){
            this.selctedAnswers = {}
            this.correctAnswers = 0
            this.isSubmitted = false 
      }
}