/* 확인차 사용 */


// 기본 로직
const name = prompt("이름 입력");
alert(`환영합니다 ${name}님.`);

const checkDate = prompt("메세지 내용", "기본값"); // 문자로 받음. 숫자일 경우 x

const isAudult = confirm("성인임?");
console.log(isAudult); // true or false