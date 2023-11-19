// let score = "35"
// let score = null output 0
// let score = undefined output NaN
// let score = true output 1
// let score = "prem" output NaN
 

let score = "35abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) // convert into number
console.log(typeof valueInNumber);  // when there is score value "35abc" it gives output as number
console.log(valueInNumber); // output is NaN

//"35" => 33
//"35abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1 
// let isLoggedIn = ''
// let isLoggedIn = "prem"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true 0 => false
//"" => false
//"prem" => true


let someNumber = 35

let stringNumber = String(someNumber)
console.log(stringNumber);
// console.log(typesof stringNumber)


// *********Operations**********
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " prem"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); //12
console.log("1" + "2");
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log( (3+ 4) * 5 % 3);
console.log( 3+ 4 * 5 % 3);// never use like this, pull request merge nahi hoga 

console.log(true); // true
console.log(+true); // 1 not use this code 
console.log(+""); // 0 not use this code 


let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //not use this code

let gameCounter = 100
gameCounter++; //postfix
++gameCounter; 
console.log(gameCounter);
