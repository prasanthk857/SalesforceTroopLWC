import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
      selected={} // for storing anwers
      correctAnswers = 0 // number of correct Answers
      isSubmitted = false

      get allNotSelected(){
            return !(Object.keys(this.selected).length === this.myQuestions.length)
      }
      // For applying dynamic styling to our result
      get isScoredFull(){
            return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success' : 'slds-text-color_error'}`

      }
      myQuestions = [
            {
                  id:'Question1',
                  question:'which one of the following is not a template loop',
                  answers:{
                        a:'for:each',
                        b:'iterator',
                        c:'map loop'
                  },
                  correctAnswer:'c'
            },
            {
                  id:'Question2',
                  question:'which of the file is invalid in LWC component foler',
                  answers:{
                        a:'.svg',
                        b:'.apex',
                        c:'.js'
                  },
                  correctAnswer:'b'
            },
            {
                  id:'Question3',
                  question:'which one of the following is not a directive',
                  answers:{
                        a:'for:each',
                        b:'if:true',
                        c:'@track'
                  },
                  correctAnswer:'c'
            }
      ]
      // ChangeHandler get's called on every click on the options
      changeHandler(event){
            const{name, value} = event.target
            // const name = event.target.name
            // const value = event.target.value
            this.selected = {...this.selected, [name]:value}

      }
      //Form submit handler
      submitHandler(event){
            event.preventDefault()
            let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
            this.correctAnswers = correct.length
            this.isSubmitted = true

      }

      //form reset handler
      resetHandler(){
            this.selected ={}
            this.correctAnswer =0
            this.isSubmitted = false

      }
      
}