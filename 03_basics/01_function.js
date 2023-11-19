

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
console.log(loginUserMessage());