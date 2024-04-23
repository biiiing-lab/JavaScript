class Hunam {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    name() {
        console.log(this.name);
    }
    age() {
        console.log(this.age);
    }
}

class Developer extends Hunam {
    constructor(name, age, available) {
        super(name, age);
        this.available = available;
    }

    show() {
        console.log(this.available);
    }
}

let user = new Developer("유빈", 22, "js");

console.log(user);