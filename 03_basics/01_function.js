
function sayMyName(){
    console.log('H')
    console.log('I')
    console.log('T')
    console.log('E')
    console.log('S')
    console.log('H')
}
//excution or function ka refernce 
// sayMyName

// sayMyName()

// function addTwoNumbers(number1,number2){
//     //jab hum function k definition banate hai me kuch value pass krte hai usko bolte hai parameter
//     console.log(number1+number2);
// }

// function addTwoNumbers(number1,number2){
//     // let results=number1+number2
//     // return results
//     return number1+number2
// }

// //jab hum function ko call krte hai uske under value pass krte he usko bolte hai argumnets 
// addTwoNumbers(4,5)

// const results=addTwoNumbers(5,4)
//results:  9

// console.log("results: ",results);


// function loginUserMessage(username="sam"){
//     //    if(username=== undefined){
//     if(!username){
//     console.log("please enter a username")
//     return
// }
// return `${username} just logged in`
// }
//  console.log(loginUserMessage());

//rest operator=...
// function calculateCardPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calculateCardPrice(200,400,500,2000));


const user={
    username:'hitesh',
    price:199
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// or 
handleObject({username:'sam',
price:399})


const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
   return getArray[1]
}

console.log(returnSecondValue(myNewArray));