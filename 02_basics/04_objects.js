//singleton object hai
const tinderUser=new Object()

//non singleton object
const tinderUser1={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:'some@gmail.com',
    fullname:{
        userfullname:{
        firstname:'hitesh',
        lastname:'chodhary'
    }
 }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:'a',2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


// const obj3={obj1,obj2}
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3=Object.assign({},obj1,obj2,obj4)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3={...obj1,...obj2,...obj4}

console.log(obj3);

console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
//[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//true