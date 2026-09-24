const name = "aditya";
const repoCount = " 3";

//console.log(name + repoCount + " Value");

console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`);

console.log(name[0]); //a

console.log(name.toUpperCase());//ADITYA
console.log(name.charAt(3));
console.log(name.indexOf('a'));

const newString = name.substring(0,4); //adit
console.log(newString);

//trim can be used in user form where we want to remove the extra space which we would not like to store in our database

const newName = "       aditya        ";

console.log(newName);
console.log(newName.trim()); // trim removes extra space 

const url = "https://aditya.com/aditya%20narayan";
console.log(url.replace('%20', '-'));
console.log(url.includes('aditya'));  