//kis tarh se data ko memory me rkha jata hai  or access kiya jata hai
// 2 tarh se primitive and non primitive

//call by value
//call by reference


// primitive  (7 categories) (call by value)
//ye hote he call by value
//String,Number,Boolean, null,undefined,symbol:unique banane ke liye 
// used krte hai, bigInt

//question:javascript dynamic type he ya static type hai 
// answer: javascript is dynamicaly typed language but typescript is statically typed language
//In dynamically type languages all type checks are performed in a runtime,
//only when your program is executing. so this mean you can just assign anything
//you want to the variable and it will work.

//example

const score=100;
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp=null;
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id === anotherId); //false

const bigNumber = 364528768937658687563n;





//non-primitive datatypes  (reference type)

//Array, Objects,functions

const heros=['shaktiman','shatiman','doga']

let myObj={name:"ruchi",age:'25'}

const myFunction=function(){console.log("hello world");}

