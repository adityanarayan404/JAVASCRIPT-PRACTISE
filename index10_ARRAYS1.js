const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc = ["superman", "flash", "batman"]

marvel_heros.push(dc);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

 const allheros = marvel_heros.concat(dc);
console.log(allheros);

const allheros1 = [...marvel_heros, ...dc];
console.log(allheros);

const anotherArray = [1,2,3,4,5,6,[7,4,6,3], 7, [4,6]];

const real_anotherArray = anotherArray.flat(Infinity);

 console.log(real_anotherArray);

 Array.isArray("Aditya");
 console.log(Array.isArray("Aditya"));
 console.log(Array.from("Aditya")); //[ 'A', 'd', 'i', 't', 'y', 'a' ]
 console.log(Array.from({name: "aditya"}));

 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1, score2, score3));