// Primitive
// 7 types : String , Number, Bollean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // output false

const bigNumber = 65518515111554885121n //biginit


// Refrence (Non primitive)
// Array, Objects, functions

const heros = ["shakitman", "nagrag", "doga"] //array
let myObj = {
    name:"prem",
    age:22
} // object

 const myfunction = function(){
    console.log("hello world");
 }

 console.log(typeof bigNumber);



 //*************************************************************************************** */
//  stack memory(Primitive)- copy milta hai
// Heap(Non-Primitive)-original refrencemilta O value me change

let myYoutubeName = "hitesh.dotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);