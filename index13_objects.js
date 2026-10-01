//const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Aditya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
        firstname : "aditya",
        lastname : "narayan"
    }
  },
};

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} //spread
//console.log(obj3);

const users = [
    {id:1,
    email: "adi@gmail.com"
},
{
    id:1,
    email: "adi@gmail.com"
},
 {
    id:1,
    email: "adi@gmail.com"
},
]

users[1].email
console.log(tinderUser); 

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true
console.log(tinderUser.hasOwnProperty('isLogged')) //false

const course = {
    coursename: "ja",
    price: "999",
    courseteacher: "self"
}

// course.courseteacher

const {courseteacher: instructer} = course

//console.log(courseteacher);
console.log(instructer);

//destructure

// const navbar = ({company}) => {

// }

// navbar(company = "aditya")

// {
//     "name": "aditya",
//     "course": "js",
//     "price": "feee"
// }

[
    {},
    {},
    {}
]