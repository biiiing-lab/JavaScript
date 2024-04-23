const arr = ['가', '라', '다', '라', '마', '라'];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == '라') { // 인덱스 찾아서
        arr.splice(i, 1); // 없애기
        i--;
    }
}

console.log(arr);