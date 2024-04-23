const a = {
    name : '강아지',
};
const b = a;
const c = b;

console.log(a);
console.log(b);
console.log(c);

a.name = '고양이';

console.log(a);
console.log(b);
console.log(c);