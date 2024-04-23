const arr = Array(5).fill().map((value, index) => {
    return index * 2 + 3;
}); // array(배열 선언), fill() 채우기, map 새로운 배열 선언

console.log(arr);

const arr2 = Array(5).fill().map((value, index) => {
    return index * 2 + 3;
})


console.log(arr2);