const arr = ['가', '라', '다', '라', '마', '라'];

let a = arr.indexOf('라');
const newArr = arr.splice(0, '라');

console.log(arr.length);
console.log(newArr);