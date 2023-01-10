function* iterate(array) {
    // aqui necesitamos una logica
    for(let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "David", "Ana", "Ulises", "Jennifer"]);

// esto recuerda la posicion anterior y me retorna la siguiente
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);