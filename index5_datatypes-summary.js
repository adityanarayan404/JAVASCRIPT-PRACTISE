// primitive 
//7 types: string, number, boolean, null, undefined, Symbol, BigInt, 

const score = 100;
const scoreValue = 100;

const isLogin = false;
let userMail;

const id = Symbol('123');
const id2 = Symbol('123');

console.log(id == id2);  //false

// Reference type (Non primitive)

// arrays, objects, functions

const heros = ["shaktiman", "doremon"]
let myObj = {
    name: "Aditya",
    age: 21
}

const myfunction = function(){
    console.log("Hello duniya");
}

console.log(typeof myfunction); //function
console.log(typeof heros); //object 
console.log(typeof id); //symbol 


