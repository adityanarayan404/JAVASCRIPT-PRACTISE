// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is the best number")
    }
    //console.log(element);
    
}

// console.log(i);

for (let i = 1; i <= 10; i++) {
   // console.log(`Outer loop value: ${i}  `)
    for(let j = 1; j<=10; j++){
//console.log(`inner loop value ${j} and inner loop ${i}`)
//onsole.log( i + '*' + j + ' = ' + i*j)
    }
 
}

let myArr = ["flash", "batman", "superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

//BREAK AND CONTINUE

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}