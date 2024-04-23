class Human {
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

class Developer extends Human {
    constructor(name, age, availableLanguage) {
        super(name, age); // 부모 상속
        this.availableLanguage = availableLanguage;
    }
    showAvaildableLanguage() {
        console.log(this.availableLanguage);
    }
}

let yubin = new Human("유빈", 22);
let yubin2 = new Developer("유빈", 22, "HTML");

console.log(yubin);
console.log(yubin2);