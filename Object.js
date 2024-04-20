// 객체 생성
const yubin = {
    name : "유빈",
    age : 22,
}

console.log(yubin);
console.log(yubin['name']);
console.log(yubin.age);

// 내용 추가
yubin.github = "biiing-lab";
console.log(yubin);

// 내용 변경
yubin.age = 25;
console.log(yubin);

// 내용 삭제
delete yubin.github;
console.log(yubin);

// 함수형 사용
function makeObject(name, age) {
    return {
        name : name,
        age : age,
        github : "git-hub"
    };
}

const test = makeObject("테스트", 23);
console.log(test);

// 내용 확인
console.log("age" in yubin);
console.log("hobby" in yubin);

// 함수랑 복합적으로 사용
function isAudult(user) {
    if (user.age > 19) {
        return(`${user.name}은 성인임`)
    } else {
        return(`${user.name}은 성인 아님`)
    }
}

const mike = {
    name : "마이크",
    age : 22
};

const Jane = {
    name : "제인",
    age : 18
};

console.log(isAudult(mike));
console.log(isAudult(Jane));

// for in
for(x in mike) {
    console.log(x); // 키 나옴
    console.log(mike[x]); // value 나옴
}