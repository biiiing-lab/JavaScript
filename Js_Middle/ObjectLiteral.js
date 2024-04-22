function User(name, age) { // 첫 글자는 대문자
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log("hell");
    }
}

let user1 = new User('yubin', 22); // 재료를 넣음
// console.log(user1);