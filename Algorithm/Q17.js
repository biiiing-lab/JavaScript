
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
} // 깊은 복사

// 객체 깊은 복사
const copiedA = deepCopy(a);
const copiedC = deepCopy(c);
const copiedE = deepCopy(e);
const copiedI = deepCopy(i);
const copiedO = deepCopy(o);

// 테스트: 복사된 객체 수정
copiedC[0] = 'changed';
copiedE.g = 'changed';
copiedI[0].j = 'changed';
copiedO.p.p = 'changed';

// 원본 객체 출력
console.log(a);  // 'b'
console.log(c);  // ['d', true, 1]
console.log(e);  // {g: 'h'}
console.log(i);  // [{j: 'k'}, {l: 'm'}]
console.log(o);  // {p: {p: 'q'}}

// 복사된 객체 출력
console.log(copiedA);  // 'b'
console.log(copiedC);  // ['changed', true, 1]
console.log(copiedE);  // {g: 'changed'}
console.log(copiedI);  // [{j: 'changed'}, {l: 'm'}]
console.log(copiedO);  // {p: {p: 'changed'}}