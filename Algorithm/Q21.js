const find = (array, callback) => {
    for(let i = 0; i < array.length; i++) {
        if(collback(array[i], i)) {
            return array[i];
        }
    }
};

find([1, 3, 5, 7], (v, i) => {
    v > 1
});