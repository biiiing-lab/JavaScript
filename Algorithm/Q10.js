const arr = ['가', '라', '다', '라', '마', '라'];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == '라') {
        arr.splice(i, 1);
        i--;
    }
}

console.log(arr);