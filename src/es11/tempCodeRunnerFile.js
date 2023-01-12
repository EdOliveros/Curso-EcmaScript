const promiseOne = new Promise((resolve, reject) => reject("reject"));
const promisetwo = new Promise((resolve, reject) => resolve("resolve"));
const promiseThree = new Promise((resolve, reject) => resolve("resolve 2"));

Promise.allSettled([promiseOne, promisetwo, promiseThree])
 .then(response => console.log(response))