class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive");
    }
    stop() {
        console.log("STOP");
    }
}

class Bmw extends Car {
    park() {
        console.log("Park");
    }
    stop() {
        console.log("overridng stop");
    }
}

const z4 = new Bmw("blue");
console.log(z4.drive());
console.log(z4.stop());
console.log(z4.park());