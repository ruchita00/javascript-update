const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details from database");
    // console.log(`username ${this.username}`);
    // console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// ..new keyword= ek hi object se multiple instnace banate hai

// const promiseOne = new Promise();
// const date = new Date();

//new keyword ko hi hum constructor function bolte hai
// new keyword new context banane ke liye kaam ata hai usiko hum contructor  function bolte hai

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chai", 11, false);

// console.log(userOne.constructor);
//contructor ek property hoti hai udko bare me --[Function: User]
// console.log(userTwo);

//usertwo == value override kr rh he

//constructor function hume har bar ek new instance deta hai

//1.jab hum new keyword likhate hai tab ek empty object create hota hai
// jisko instance bola jata hai

// 2. ek constructor function call hota hai new keyword ke karan

//3.this keyword me jo bhi argument hai vo inject ho jate hai usme

//4.apko jo bhi arguments hai vo mil jate hai

//instance of

function Car(make, model, year) {
  this.make = make;
  this.year = year;
  this.model = model;
}
const auto = new Car("hoda", "accord", 1998);

console.log(auto instanceof Car);
//true
console.log(auto instanceof Object);
//true
