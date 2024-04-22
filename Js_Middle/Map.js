// 함수를 받아 특정 기능 수행 후 새로운 배열 반환
let userList = [
    {name : "a", age : 20},
    {name : "b", age : 30},
    {name : "c", age : 10},
    {name : "d", age : 40}
];

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        isAudult: user.age > 19,
        id : index + 1
    });
});

console.log(newUserList);