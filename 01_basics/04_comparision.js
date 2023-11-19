// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); //true
console.log("02" > 1); // true

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true

// The reason is that an equality check == and comparisons> <>= <= work differently.
//comparison convernt null to a number, trating it as 0


console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === strick check it check datatypes

// console.log("2" == 2); // true
// console.log("2" === 2); //it check type also 

// avoid confusioncheck