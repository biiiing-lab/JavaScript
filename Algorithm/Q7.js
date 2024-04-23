for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        if((i * j) % 2 == 1) {
            console.log(i + " X " + j + " = " + i * j); // 홀수만 출력 결과 나올 수 있도록 함
        }
        continue; // 계속 이어나가서 결과 도출
    }
}