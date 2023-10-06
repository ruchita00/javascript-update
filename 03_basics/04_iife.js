//Immediately Invoked Function Expressions (IIFE)

//normal function (named iife)
(function chai(){
    console.log('DB connected');
})();

//arrow function (unnameed iffe)
( ()=>{
    console.log('DB CONNECTED TWO');
})();

( (name)=>{
    console.log(`DB CONNECTED TWO ,${name} `);
})('ruchita')


// chai()

//hume global scope ke pollution ke wajh  se problem hoti he 
// to vo global scope ke variables se ya declaration ko hatane (pollution ko)
//ke liye humne iife ka use kiya hai