// 원하는 값만 충족하여 가지고 옴

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.filter((item) => {
    return item % 2 === 0;
});

console.log(result);