// if
const isUserloggedIn = true
const temperature = 41

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temp is greater than 50");
}

console.log("execute");
// <,>,<=,>=,==,!=,===,!==

const score = 200
if (score > 100 ) {
    const power = "fly"
    // var power = "fly"
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);

const blanace = 1000
// if (blanace > 500) console.log("test");
if (blanace > 500) {
    console.log("test");
} else if (blanace > 750){
    console.log("test2");
} else {
    console.log("test3");
}

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");
}