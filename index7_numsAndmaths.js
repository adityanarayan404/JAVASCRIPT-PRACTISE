const score = 200;
console.log(score);


const balance  = new Number (100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumeber = 23.46;

console.log(otherNumeber.toPrecision(3)); //23.5

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); //1,00,000

//+++++++++++++++++++  MATHS ++++++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.7)); //5
console.log(Math.ceil(4.7)); //5
console.log(Math.floor(4.7)); //4
console.log(Math.min(3,54,4,5,5)); //3

console.log(Math.random()); //values from 0 to 1
console.log((Math.random()*10)+1); 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+ min);
console.log("end")









