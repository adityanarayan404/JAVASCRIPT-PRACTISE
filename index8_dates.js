//DATES

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate));

let myCreateDate = new Date(2026, 8, 24);
console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

//console.log("THE TIME IS ${myCreateDate.getTime()}");

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})




