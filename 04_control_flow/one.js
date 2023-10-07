//if

// if(condtion){

// }

// ex 
// if(true){

// }

const isUserLoggedIn=true;
if(isUserLoggedIn){

}
// <,>,<=,>=,== -equal hai Ky, != ,!==
// === -ye apka type bhhi check krta hai 

if(2=="2"){
    // console.log("executed");
}

//ye code execute hoga kyoki yaha type check ni hua

if(2==="2"){
    // console.log("executed");
}
//ye code type bhi check krta hai so number and string 2 ye equal ni he so ye 
//code run ni hua

if(2!=3){
    // console.log("executed");
}

const temperature=91;

// if(temperature<50){
//     console.log('less than 50');
// }else{
//     console.log("temperature is greater than 50");
// }

// const score=200;

// if(score >100){
//     let power="fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`)

const balance=1000

//implicit scope
// if(balance >500) console.log("test"), console.log('test2');

// if(balance < 500){
// console.log('less than');
// }else if("balace <750"){
//     console.log('less than 750');
// }else if(balance <900){
//     console.log('balance <900');
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log('allow to buy course');
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}