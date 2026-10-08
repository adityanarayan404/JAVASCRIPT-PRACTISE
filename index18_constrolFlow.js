//if
const isUserLoggedIn = true;
const temperature = 51;

if (temperature < 50) {
    console.log("less than 50")
}
// console.log("temperature is greater than 50");

const score = 200;

if(score > 100) {
    const power = "fly";
    // console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`);

const balance = 1000;

// // if(balance > 100) console.log("test")


// if (balance < 500) {
//     console.log("less than 99")
// } else if (balance < 900) {
//     console.log("greater than 90")
// } else {
//     console.log("less than 1200")  
//     //less than 1200
// }


const userLoggedIn = true;
const debitCard = true;
const loggedFromEmail = true;
const loggedFromGmail = true;


if (userLoggedIn && debitCard) {
    console.log("Allow to buy iphone");
}

if (loggedFromEmail || loggedFromGmail) {
    console.log("user logged in")
}