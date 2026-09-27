// DATES

let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


// Creating a specific date
let myCreateDate = new Date(2026, 8, 24);
console.log(myCreateDate.toDateString());


// Timestamp
let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now() / 1000));


// Template literal
console.log(`THE TIME IS ${myCreateDate.getTime()}`);


// New date
let newDate = new Date();
console.log(newDate);


// Locale formatting
console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        timeZone: "Asia/Kolkata"
    })
);

console.log("heyy");