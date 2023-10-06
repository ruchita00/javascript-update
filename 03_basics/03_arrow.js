// this =current context  ko refer karta hai

// const user={
//     username:"hitesh",
//     price:199,
//     welcomeMessage:function(){
//        console.log(`${this.username}, welcome to website`);
//        console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//broswer me jo global object he vo hai window object

// console.log(this); //{}

//jo this hai vo mostly object ke under hi kam krna hai
//function ke under kaam ni krta

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai() //undefined

// const chai=function(){
//     let userame="hitesh"
//     console.log(this.username);
// }

// chai()


// const chai=()=>{
//     let userame="hitesh"
//     console.log(this);
// }

// chai() //{}

//implict return:
//  mtlb ki aap ek hi line ka code likh rh he
//function ke under to us case me apko return likhne ki jarurt nai hoti hai
const addTwo1 = (num1,num2)=>  num1+num2

//{} me wrapped hua function ko apko return keyword likhna hi padega
//{} me wrapped kiya to return keyowrd ni likhna pdega

const addTwo = (num1,num2)=>  (num1+num2)


console.log(addTwo(5,4));

// explicit return :
//mtlb jab ap function me return keyword likhte hai

//object ko function me return krne ke liye usko  () me wrapped krna pdta hai

const add1=(num1,num2)=>({username:"hitesh"})

console.log(add1(3,4));

const myarray=[2,5,3,7,8]
