// var c = 300;
let a= 300; //<= global scope

//{} <= scope

if (true) { //block scope
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inner:", a)
}


console.log(a);
// console.log(b);
// console.log(c);