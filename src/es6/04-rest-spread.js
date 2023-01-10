// arrays de estructura
let fruits = ["apple", "banana"];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

//objec destructuring 
let user = { username: "Oscar", age: 34};
let { username, age} = user;
console.log(username, age);

console.log(username, user.age);


// spread operator 

let person = { name: "Oscar", age: 28 };
let country = "MX";

let data = { id: 1, ...person, country };
console.log(data)


// rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 3, 456, 2)