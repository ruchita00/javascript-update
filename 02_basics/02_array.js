const marvel_heros=['thor','ironman','spiderman']
const dc_heros=['superman','flash','batman']

// marvel_heros.push(dc_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//contact retrun krta he new array: merge krke

const all_new_heros= [...marvel_heros,...dc_heros] //spread operator
// console.log(all_new_heros)

const another_array=[1,2,3,4,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=  another_array.flat(Infinity)
console.log(real_another_array)
// [1,2,3,4,4,5,6,7,6,7,4,5]

console.log(Array.isArray("hitesh")) //false
console.log(Array.from({name:'hitesh'})) // interesting []

let score1=100;
let score2=200;
let score3=300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

