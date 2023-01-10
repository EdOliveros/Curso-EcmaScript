//declarando una clas
class User{};
// haciendo una instancia
// const newUser = new User();


class user {
    // metodos
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting())

const bebeloper = new user();
console.log(bebeloper.greeting())


//el constructor
class user {
    // constructor
    constructor() {
        console.log("nuevo usuario");
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

//this el elemento padre que lo contiene

class user{
    constructor(name){
        this.name = name;
    }
    // metodos
    speak() {
        return "hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user("Ana");
console.log(ana.greeting())


//setters and getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metodos
    speak(){
        return "hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20)