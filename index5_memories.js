// Stack (primitive ) COPY , Heap(non primitive)  REFERENCE 

let herName  = "ayushi";
let anothername = herName;

anothername = "Aditya";


console.log(herName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi : "user@axis"

}

let userTwo = userOne;

userTwo.email = "aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);

console.log("Aditya")

