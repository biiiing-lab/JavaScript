// arr.splice((시작), (갯수)) : 특정 요소 지움
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); // 1, 4, 5
console.log(arr);

// arr.splice((시작), (갯수), (특정 요소 지우고 추가))
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(0, 2, 10, 20);
console.log(arr2);

// 중간 사이에 들어옴
let arr3 = ["안녕", "하세요"];
arr3.splice(1, 0, "안녕수정");
console.log(arr3);

// 삭제 요소 반환
let arr4 = [1, 2, 3, 4, 5];
let result = arr4.splice(1, 2);
console.log(arr4);
console.log(result);