// for of
//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(greet);
}

//maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('USA', "United State of America")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     'game1': 'NFS' ,
//     'game2': 'spiderman'
// }

// for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
// } // for pf loop is not working there in object