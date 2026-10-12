// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4];

for (const num of arr) {
  //console.log(num);
}

const greetings = "Hello Duniya";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

//maps => unique values

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States of America");
map.set("FR", "France");

map.set("IN", "INDIA");

//console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


