// conversion and operations 

let score = "33abc";
 console.log(typeof score);

 let valueInNumber = Number(score); 
 console.log(typeof score);
 console.log(valueInNumber); // NAN 

 //true=> 1; false=>0

 let isLoggedIn = 0 //1;
 
 let booleanIsLoggedIn = Boolean(isLoggedIn); //boolean value of isLoggedIn

 console.log(booleanIsLoggedIn);


 let cibilScore = 400;
 cibilScore = String (cibilScore); // changed the type from number to string
 console.log(cibilScore);
 console.log(typeof cibilScore);


 // more operations

 let str1 = "hello";
 let str2 = " aditya";
 let str3 = str1 + str2;
 console.log(str3);

 console.log("1" + 2);//12
 console.log(1 + "2");//12
 console.log(1 + 3 + "2");//42
 console.log("1" + 3 + 2);//132

 let gameCounter = 100;
 gameCounter++;
 //++gameCounter;
 console.log(gameCounter); //101
