//singleton

//object literals

//Object.create
const jsUser = {
  name: "Aditya",
  age: 20,
  location: "Kolkata",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser.location);
console.log(jsUser.isLoggedIn);
console.log(jsUser.lastLoginDays);

jsUser.greeting = function () {
  console.log("hello js user");
};
jsUser.greetingtwo = function () {
  console.log(`hello js user, ${this.name}`);
};
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
