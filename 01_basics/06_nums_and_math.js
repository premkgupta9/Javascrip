const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // it convert into string
console.log(balance.toString().length); // example use as string

console.log(balance.toFixed(2)); 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hunderds = 100000
console.log(hunderds.toLocaleString('en-IN'));

//*******************maths *********************/
console.log(Math);
console.log(Math.abs(-4)); // change only negative value to positive
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));// take top value output is 5
console.log(Math.floor(4.9));// take low value output is 4
console.log(Math.min(4, 6, 8 ,9));
console.log(Math.max(4, 6, 8 ,9));

console.log(Math.random());// value comes b/w to 0 to 1
console.log((Math.random()*10) + 1); // 1 for min value 1
console.log(Math.floor(Math.random()*10)+1); 


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


