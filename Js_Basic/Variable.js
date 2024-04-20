/*

let
const 선언 + 초기화 + 할당
var 한번 선언된 변수를 다시 선언 가능, 선언 전에도 사용 가능(호이스팅)

호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

TDZ(Temporal Dead Zone) : let, const는 영향을 받음

스코프
var : 함수 스코프
let, const 블록 스코프(if, for 등)

변하지 않는 값을 선언할 때는 const, 변할 수 있는 값은 let을 사용한다.

*/

const lang = "js";
const message = "this is js message";
const message2 = `this is ${lang} message`; // 특수문자 인식
const message3 = `this is ${lang+lang} message`; // 표현식 가능

console.log(lang);
console.log(message)
console.log(message2);
console.log(message3);

const a = 1; // 기본 연산자 모두 가능

const testTrue = true;
const testFalse = false; // boolean

console.log(typeof a);
console.log(typeof testTrue); // 자료형 확인

console.log(a + lang); // 숫자 + 문자 더하기 가능 => 문자형으로 반환