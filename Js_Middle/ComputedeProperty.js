let a = 'age';
const user = {
    name : 'yubin',
    [a] : 30 // age = 30, 변수 할당
}

const newYubin = Object.assign({}, user); // 객체 복사
const newYubin2 = Object.assign({gender : "F"}, user); // 새로운 속성 추가, 같은 속성을 할 경우 덮어쓰기 가능
Object.keys(user); // key 반환
Object.values(user); // value 반환
Object.entries(user); // key, value 모두 반환
// 사용할 때는 const로 선언하여 사용함 -> console.log 사용

