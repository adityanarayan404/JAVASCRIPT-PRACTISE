const userMail = []

if (userMail) {
    console.log("Got user mail")
} else{
    console.log("Dont have user email")
}

//falsy values

// false, 0, -0, BigInt, "", null, undefined, NaN

//truthy

// "0", 'false',  " ", [], {}, fucntion(){}

// if (userMail.length === 0) {
//     console.log("Array is empty")
    
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty")
}

//Nullish Coalescing Operator (??): null undefiend

let val1;
//val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;  //10

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")