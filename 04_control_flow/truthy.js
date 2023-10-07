const userEmail="h@hitesh.ai"

if(userEmail){
    console.log("GOT user email");
}else{
    console.log("dont have user email");
}

//falsy value

// false,0,-0, BigInt 0n,"",null,undefined,NaN

//truthy value

//string ke under 0 value hi to vo truthy value hai
//string ke under koi bhi vakue hai to vo bhi truthy value hai

//"0", "false"," " ,[],{}, function(){}

if(userEmail.length ===0){
    console.log('Array is empty');
}

const emptyObj={}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}

//////////////////
false ==0 //true
false == '' //true
0=='' //true

//NUllish coalescing operator (??):null undefined

let val1;


// val1=5 ?? 10;
// val1=null ?? 10;
// val1=undefined ?? 15;
// val1=null ??10??20;


console.log(val1);

//Terniary Operator 

//condition?true:false

const iceTeaPrice =100;
iceTeaPrice <=80 ?console.log("less than 80"):console.log("more than 80");