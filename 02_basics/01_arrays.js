// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]
console.log(myArr[0]);

const myArr2 = new Array(1, 2, 3 , 4)

// array methods

myArr.push(6) // add a new value
myArr.pop() // remove a value

myArr.unshift(8)// added new value at stating
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // join as in a string 

console.log(myArr);
console.log(newArr);

// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr); // original array ko manipultate karta hai
console.log(myn2);