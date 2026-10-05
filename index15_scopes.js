// var c = 300;
let a= 300; //<= global scope

//{} <= scope

if (true) { //block scope
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("inner:", a)
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "aditya";

    function two(){
        const website = "youtube"
       // console.log(username);
    }
    //console.log(website);

    two();

}

one();

if (true) {
    const username = "aditya";
    if (username === "aditya") {
        const website = "youtube";
        //console.log(username + website);
    }
   // console.log(website); //scope of website did not reach here

}
//console.log(username);

// ++++++++++++++++++++++++++++++interesting ++++++++++++++++++++++++++++++++++++++++++//

function addone(num) {
    return num + 1
}
console.log(addone(5))

const addTwo = function(num){
    return num + 2
}
addTwo(5)
console.log(addTwo(5))