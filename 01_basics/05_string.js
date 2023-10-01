const name="hitesh";
const repoCount= 50;

// string interpolation

// console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("hitesh-hc")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //NOT CHANGing original string

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4) // yaha hum negative value ni de sakte

// console.log(newString);

const anotherString=gameName.slice(-8,4) //slice me hum negative value de skte
// console.log(anotherString);

const newStringOne="   hitesh    "
// console.log(newStringOne.trim())
//trim (used to remove starting space and ending space )
//a new string representing str stripped of whitespace
//from both its beginning and end.
//whitespace is defined as white space characters plus

const url='https://hitesh.com/hitesh%20choudhary'
// console.log(url.replace('%20','-'))

//includes he ya ni ye jane ke liye hum includes use krte hai
// console.log(url.includes('hitesh'))

console.log(gameName.split('-')); 
//split kiya basis on - and convert hua list me


