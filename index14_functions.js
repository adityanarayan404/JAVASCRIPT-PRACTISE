// console.log("a");
// console.log("d");
// console.log("i");
// console.log("t");
// console.log("y");
// console.log("a");

function sayMyName(){
    console.log("a");
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("y");
    console.log("a");

}

//sayMyName();

// function addtwonumbers(number1, number2){ //number1, number2 => parameters 
//     console.log(number1 + number2);
// }

function addtwonumbers(number1, number2){ //number1, number2 => parameters 
    // let result = number1 + number2
    // return result;
    return number1 + number2;
    console.log("Aditya"); //unreachable code
}

const result = addtwonumbers(3,4); //3,4 is arguments

// console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
            console.log("please enter a username ")
            return;
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("aditya"));
//console.log(loginUserMessage("aditya")); //sam was overwritten by aditya

function calculateCartPrice(val1, val2, ...num1){ //...rest operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
//------------------------------------------------------------------------------------------------------------------//
const user = {
    username: "aditya",
    price: 999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}

handleObject(user)
// handleObject({
//     username: "aditya",
//     price: 399
// })

const mynewarray = [200, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(mynewarray)); //400
//console.log(returnSecondValue([200, 300, 500, 1000]));
