//array; is an object its collection of single elements,
//array can be mix datypes
//array elements cannot be accessed using arbitary strings as indexes
//js arrays are zero index
//imp => array copy operations create shallow copies 
//meaning shallow copy: a shallow copy of an object is a copy whose properties
//share the same reference point to the same underlying values.

//deep copy: copy do not share the same refernce point to underlying values


const myArr=[0,1,2,3,4,5];
const myHeros= ['shaktiman','nargu']

const myArry2=new Array(1,2,3,4)

// console.log(myArr[0])
// console.log(myArry2);

//array methods

// myArr.push(6)
// myArr.push(7) //add value from last
// console.log(myArr)

// myArr.pop(7) //remove value from last
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr) // add value from start

// myArr.shift(9)
// console.log(myArr); //remove value from start

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9));

// const newArr=myArr.join()

// console.log(myArr)

// console.log(typeof newArr) //join used to bind and convert array to string


//slice, splice

console.log('A', myArr) //A [0,1,2,3,4,5]

const myn1=myArr.slice(1,3)

console.log(myn1) //[1,2]

console.log("B", myArr); // B [0,1,2,3,4,5]
const myn2=myArr.splice(1,3)
console.log("C",myArr) //C [0,4,5]

console.log(myn2); //[1,2,3]

// differnce between slice and splice 
//slice me jo 1, 3 range liya hai usee value leke first last vala element
//-1 tak value deta hai

//and splice me original array ko change krke bache element dekha hai

