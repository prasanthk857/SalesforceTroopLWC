// // var Keyword

// var course = 'zero to hero'
// console.log(course)

// var obj = {
//       name : 'salesforce',
//       age: 23
// }

// console.log(obj['name'])


// let arr = [2,3,5,7,9]
// //map()
// //console.log()

// // let newArray = arr.map(function(currentItem, index,array){
// //       console.log(`currentIte, is ${currentItem} index ${index} array ${array}`)
// //       return currentItem*2
// // })

// // console.log(newArray);

// //filter()
// let filteredValues = arr.filter(function(currentItem, index, array){
//       return currentItem>5
// })

// console.log(filteredValues)

// //every()

// let arr2 = [32,33,18,40]
//  let isAllAdult = arr.every(function(current){
//       return current=>18
// })
// console.log(isAllAdult)

// //some()

// let age2 = [32,33,18,40]
//  let isAdult = age2.some(function(current){
//       return current > 32
// })
// console.log(isAdult)

// //sort()
// var names = ['nikhil', 'jhon', 'smith']
// console.log(names.sort())

// //sorting of numbers
// var points = [10,39,12,24,9]
// let sortedValues = points.sort(function(a,b){
//       return a-b
// })

// console.log(sortedValues)

// //reduce methods
// // array.reduce(function(total, currentValue, index,array){

// // }, initial)
// let num = [12, 70, 30]
//  let sum = num.reduce( (total,current) => {
//       return total+current
//  })
// console.log(sum)

// //forEach()
// num.forEach(current => {
//       console.log(current)
// })

// //PROMISE
// function checkIsSuccess(data){
//      return new Promise(function(resolve,reject){
//       if(data === 'success'){
//             return resolve('successlly executed')
//       } else {
//             return reject('unsuccesslly executed')
//       }
//       })
// }

// checkIsSuccess( ' ').then(function(result){
//       console.log(result)
// }).catch(function(error){
//       console.error(error)
// })
// console.log()


//Module IMPORT EXPORT
// import minus , {pi , add} from './utils.js'
// import * as UTILS from './utils.js'
// console.log(UTILS.pi)
// console.log(UTILS.minus(4,5))
// console.log(UTILS.add(4,5))


// function firstFunction(){
//       console.log('hurray')
// }

// let btn = document.querySelector('button')
// btn.addEventListener('click', firstFunction)

document.addEventListener('mousemove', handler)
function handler(){
      document.querySelector('.demo').innerHTML = Math.random()
}

function removeHandler(){
      document.removeEventListener('mousemove', handler)
}


// const btn = document.querySelector('button');

// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }

// btn.addEventListener('click', () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
//   console.log('yes the btn thing worked')
// });

// document.addEventListener("hello", function(data)  {
//   console.log('hello has called and send' , data.detail)
// })

// function callCustomMethod() {
//   let event = new CustomEvent("hello", {
//     detail:{name:'nikhil'}
//   })
//   document.dispatchEvent(event)
// }


// let obj = {
//   name1: 'prasnath',
//   getname: function(){
//       console.log(this.name1);
//       const fullnamefunction = () => {
//         console.log(this.name1);
//         console.log('this is my full name ' + this.name1 + 'podili');
//       }
//       fullnamefunction()
//   }
// }

// obj.getname()

let timerId = window.setTimeout(function(){
  console.log('hello')
}, 1000)
console.log(timerId)
clearTimeout(timerId)


let inervalId = window.setInterval(function(){
     console.log('hello')
}, 5000)
console.log(inervalId)
clearInterval(inervalId)

