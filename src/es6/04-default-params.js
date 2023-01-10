function newUser (name, age, country) {
    var name = name || "Oscar";
    var age = age || 34;
    var country = country || "MX";
    console.log(name, age, country)
}

newUser();
newUser("Edgar", 24, "Colombia")

 
// nueva estructura mas amigable
function newAdmin (name = "Oscar", age = 32, country = "Chile") {
    console.log(name, age, country)
}
newAdmin()
newAdmin("Edgar", 24, "Colombia")