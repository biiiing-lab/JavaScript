let result = [1, 2, 3, 4, 5].reduce((a, c) => {
    a[c] = c * 10; // 인덱스 + 내용
    return a;
}, {})

console.log(result);