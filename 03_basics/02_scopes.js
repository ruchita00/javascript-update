

// var c=30;
let a=300

if(true){
    let a =10;
    const b=20;
    // console.log("inner ",a);
    }
// console.log(a);

//jab hum browser me scope check krte he vo alag he jo hum node ke through scope alag hai




// function one(){
//     const username="hitesh"

//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }

// one()


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website = "youtube";
        // console.log(website +username)
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++ interesting ++++++++++++++++

//isme hum function se phle declare kr skte hai
function addone(num){
    return num +1
}

addone(5)

//function expression

//declare value kiya function expression se phle to error ata he
// ex addTwo(3)

const addTwo=function(num){ 
    return num +2
}
addTwo(2)