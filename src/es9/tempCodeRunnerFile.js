async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value)
    }
}

const names = arrayOfNames(["pedro", "Jesus", "Alejo", "fercho"])
console.log("after")