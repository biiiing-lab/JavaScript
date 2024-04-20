/* 

함수 선언문은 어디서든 호출이 가능함 
함수 표현식을 코드에 도달하면 생성
*/

// 매개변수 X
function showError() {
    console.log("에러 발생");
}

let showError2 = () => {
    console.log("에러 발생함");
}

showError();
showError2();

// 매개변수 O
function say(name) {
    const message = `hello ${name}`;
    console.log(message);
}

const say2 = (name) => {
    const message = `hello ${name}`;
    console.log(message);
}

say("유빈");
say2("유빈2");

// 매개변수값 없는 상태
function say(name) {

    if(name) {
        const message = `hello ${name}`;
        console.log(message);
    } else {
        const message = `hello`;
        console.log(message);
    }
}

say();
say("유빈");