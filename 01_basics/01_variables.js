const accountId=144553;
let accoutnEmail="ruchicarol@gmail.com"
var accountPassword="12345"
accountCity='Jaipur';

//not allowed
// accountId=2

accoutnEmail="hc@gmail.com"
accountPassword='21212'
accountCity="ahmednagar";

let accountState;
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

agar hum variable ko declare krte hai or usko kuch assign ni krte hai to
javascript by default usko undefined batata hai
*/

console.table([accountId,accoutnEmail,accountPassword,accountCity,accountState])
