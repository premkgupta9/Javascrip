

function sayMyName () {
    console.log("p");
    console.log("r");
    console.log("e");
    console.log("m");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers() //NaN
// addTwoNumbers(3, 4) 

function addTwoNumbers(number1, number2){
    //    let result = number1 + number2
    //    return result
    return number1 + number2
    }
    
const result = addTwoNumbers(3, 4) 
console.log("result: ", result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("please enter a name");
        return
    }
    return `${username} logged in`
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 1000));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and  price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));