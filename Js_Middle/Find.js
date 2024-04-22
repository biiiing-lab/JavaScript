// 값이 있는지 없는지 반환

let userList = [
    {name : "a", age : 20},
    {name : "b", age : 30},
    {name : "c", age : 10},
    {name : "d", age : 40}
];

const result = userList.find((user) => { // findIndex는 조건에 맞는 인덱스를 출력
    if(user.age < 19) {
        return true;
    } return false;
});

console.log(result);