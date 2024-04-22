// arr.forEach((item, index, arr) => {});
let arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => {
    console.log(num);
})

arr.forEach((num, index) => {
    console.log(`${index + 1}. ${num}`);
})