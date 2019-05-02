
const person = {name: 'itsAMe Mario'}
const dog = {
  name: 'winfield',
  favSnacks: ['cabbage', 'carrots', 'bones'],
  arrowEatSnacks: function() {
    this.favSnacks.forEach( snack => {
      console.log(`${this.name} is eating ${snack}`)
    })
  },
  regEatSnacks: function() {
    this.favSnacks.forEach(function(snack) {
      console.log(`${this.name} is eating ${snack}`)
    }.bind(person))
  }
}

console.log('this is the function keyword', dog.regEatSnacks())
console.log('this is the arrow', dog.arrowEatSnacks())
//
// console.log(filtered)
// this.name = 'window object'

// /************ Function Called with New Keyword ***********/
// //inside a constructor fn, this will be the newly created object
//
// const personConstructor = function(name) {
//   // `this` within a constructor will be the newly created object
//   // { name: name }
//   this.name = name
// }
//
// const evans = new personConstructor('evans')
//
// function onTheGlobal() {
//   console.log(this)
// }
//
// const instructor = {
//   name: "POWERFUL MC",
//   lecture: function(){
//     return `${this.name} gives POWERFUL lectures ;)`
//   }
// }
//
//
// /********************************************************/
//
// /************ Bind Call Apply ****************************/
//
//
//
// function myForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i])
//   }
// }
//
//
// // bind returns a COPY of our fn with `this` fixed to whatever obj was passed as an arg
//
// /********************************************************/
//
// /************ Function called on an Object ***************/
//
//
// /********************************************************/
//
// /************ Simple Function Call ***********************/
//
//
// /********************************************************/
//
// /************ Arrow Functions ****************************/
//
//
// /********************************************************/
