//global scope
// var c =300
let a = 300

//block scope
//global scope me jo bhi likhange vo value available hogi scope ke andar lekin jo scope ke andar likhate hai vo bahar nahi jani cahahiye
if (true) {
    
    let a = 10
    const b = 20
    console.log("inner: ", a);
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// *********************************interesting****************

addOne(5) // here it work
function addOne(num){
    return num + 1
}
// addOne(5)

addTwo(5) // here it doesnot work due to it excute before decalaration there is concept hoisting
const addTwo = function (num){
    return num + 2
}
// addTwo(5)