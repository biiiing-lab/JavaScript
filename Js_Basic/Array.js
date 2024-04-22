let num = [1, 2, 3];
console.log(num[1]);

// 변경
num[1] = 4;
console.log(num[1]);

// 길이
console.log(num.length);

// 끝에 추가
num.push(5);
console.log(num);

// 끝에 삭제
bconsole.log(num);

// 앞에 추가
num.unshift(6);
console.log(num);

// 앞에 삭제
num.shift();
console.log(num);

// 반복문, 배열 뽑아내기
for(let index = 0; index < num.length; index++) {
    console.log(num[index]);
}

for(let nums of num) {
    console.log(nums);
}