// flat
const array = [1, 2, 3, 3, 5, 6, [1, 3, 5, 6, [1, 2, 3, 4]]];
console.log(array.flat(3));

// flat map
const array2 = [1, 2, 3, 4, 40]
console.log(array2.flatMap(v => [v, v*2] ));