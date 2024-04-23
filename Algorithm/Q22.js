
const filter = (array, callback) => {
    const arr2 = []; // 새로운 배열 생성
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            arr2.push(array[i]); // 조건에 맞는 배열 삽입
        };
    }
    return arr2;
}

filter([1, 3, 5, 7], (v, i) => {v > i});

console.log(arr2);