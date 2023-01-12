// me cnvierte esto en un objeto
const entries = new Map([["name", "Oscar"], ["age", 34]]);
console.log(entries)
console.log(Object.fromEntries(entries));