const user = {
    username: "hitesh",
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this represent current context
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
}
chai() // output is undefined , it works only in object

const chai = function (){
    let username = "hitesh"
    console.log(this.username);
}
chai() // output is undefined 

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}
chai() // output is undefined 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// implicit return
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2) // no need of writing return
// for object return
const addTwo = (num1, num2) =>  ({username: "hitesh"}) 

console.log(addTwo(3, 4))
