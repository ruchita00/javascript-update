//dom events

//singleton: koi bhi constructor ap bante hai to ek hi 
//tarh ka object bnta he mtlb singleton bnate hai 
//and jab hum literal ki targ=h bnate hai to singleton ni rehta

// constructor method
Object.create 

const mySym=Symbol("key1")

//object literals
const JsUser={
    name:'Hitesh',
    "full name":'Hitesh Choudary',
    age:18,
    location:'Jaipur',
    email:'hitesh@google.com',
    isLoggedIn:false,
    lastLoginDays:['Monday','Saturday'],
    [mySym]:'mykey1'
};

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]);

//symbol
// console.log(JsUser[mySym]);

//change value
JsUser.email= "hitesh@chatgpt.com"
// console.log(JsUser['email']);

//freeze object
// Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log(`Hello JS user`)
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())

//jab bhi same object ko reference krna hai to this
console.log(JsUser.greetingTwo())

