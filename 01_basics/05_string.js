const name = "prem"
const repoCount = 50

// console.log(name + repoCount + "Value");not use in modern days
console.log(`hello my name is${name} and my repo count is ${repoCount}`);  //string intepolation

const gamename = new String('prem-G')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // not use of negative value
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   prem  "
console.log(newStringOne);
console.log(newStringOne.trim); // remove spaces

const url = "https://hitesh.com/hitesh%20chaudhry"

console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));