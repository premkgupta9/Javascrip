// sigleton - constructor
//Object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Prem",
    "fullName": "Prem Gupta",
    [mySym]: "mykey1",
    age: 18,
    location: "lucknow",
    email: "hi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // another way to print email or access value
// console.log(JsUser["fullName"]); 
// console.log(JsUser[mySym]); 

JsUser.email = "hit@chatgpt.com" // change value
// Object.freeze(JsUser)
JsUser.email = "hit@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Helo js user");
}
JsUser.greetingTwo = function(){
    console.log(`Helo js user, ${this.name}`);
}
// console.log(JsUser.greeting); // undefinded
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 
