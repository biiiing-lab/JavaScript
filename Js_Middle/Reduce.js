// 인수로 함수를 받아서 for문을 대신함

let arr = [1, 2, 3, 4, 5];

// prev는 누적된 계산 값, cur는 현재 값
const result = arr.reduce((prev, cur) => {
    return prev + cur;
}, 0); // 0은 초깃값

console.log(result);


// 객체 반환
let userList = [
    {name : "a", age : 20},
    {name : "b", age : 30},
    {name : "c", age : 10},
    {name : "d", age : 40}
];

const result2 = userList.reduce((prev, cur) => {
    if(cur.age > 19) {
        prev.push(cur.name);
    } return prev;
}, []) // 초깃값 빈 배열

console.log(result2);