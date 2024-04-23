
const filter = (array, callback) => {
    const arr2 = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            arr2.push(array[i]);
        };
    }
    return arr2;
}

filter([1, 3, 5, 7], (v, i) => {v > i});

console.log(arr2);