//bluebirld library

// const promiseOne = new Promise(function (resolve, reject) {
//   //do an async task
//   //db calls, cryptography,
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ username: "chai", emmail: "chji@gmail.com" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "ruchita", password: "1234" });
//     } else {
//       reject("Error:something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "1234" });
//     } else {
//       reject("error: something went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("e", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// reponse =fetch('something')
//fetch 2 part me kam hota he ---1.browser pe node api request handle krne --n.w request
// 2. data space reserve krne ke liye

// onfulfiled[]-- promise ka resolvution
//on rejction[] -- promise ka reject

//data ki intially value hoti he empty

//global memory----response
