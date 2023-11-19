//singleton
const tinderUser = new Object()

tinderUser.id = "123qwe"
tinderUser.name ="samuel"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userFullName: {
            firstName: "Prem",
            lastName:"Gupta"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2, obj4 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

//database se value

const users = [
    {
       id:1,
       email: "jnjjbsd@gmail.com" 
    },
    {
        id:2,
        email: "jnjjbd@gmail.com" 
     },
 ]

 users[1].email

 console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty("isLoggedIn"));


 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
 }

//  course.courseInstructor
const {courseInstructor: Instructor} = course

console.log(Instructor);

//json
// {
//     "name":"prem",
//     "coursename": "fswd",
//     "price":"3500"
// }

[
    {},
    {},
    {}
]