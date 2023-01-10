// enahead object literals

function newUser0(user, age, country) {
    return {
        user: user,
        age: age,
        country: country,
    }
}
// si el valor no cambia no necesito asignarlo de nuevo, pero si el valorcambia, lo debo asignar
function newUser(user, age, country, uiD) {
    return {
        user,
        age,
        country,
        id: uiD,
    }
}

console.log(newUser("gndx", 34, "Mx", 1));