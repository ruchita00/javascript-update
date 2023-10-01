// temporal

//Dates

let myDate=new Date()  

// console.log(myDate)//2023-10-01T10:06:18.654Z
// console.log(myDate.toString())  //Sun Oct 01 2023 10.04.38 GMT+0000 (coordinated universal time)
// console.log(myDate.toDateString()); //Sun Oct 01 2023
// console.log(myDate.toLocaleString()); //10/1/2023, 10:06:18 AM

// console.log(typeof myDate)  //(object)

// let myCreatedDate=new Date(2023,0,23,5,3) 
// console.log(myCreatedDate.toDateString()); // Mon jan 23 2023
// console.log(myCreatedDate.toLocaleString()); //1/23/2023, 5:03:00 AM

let myCreatedDate=new Date('01-14-2023') 
// console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM
//1/14/2023, 12:00:00 AM

let newDate=new Date()
console.log(newDate)
console.log(newDate.getDay()+1);
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{weekday: "long"}))
