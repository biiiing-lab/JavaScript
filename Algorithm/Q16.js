const a = {
    name : '강아지',
};
const b = a;
const c = b;

console.log(a);
console.log(b);
console.log(c);

a.name = '고양이'; // 바꾸기, 복사한 개체 모두 바뀜

console.log(a);
console.log(b);
console.log(c);