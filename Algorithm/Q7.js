for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        if((i * j) % 2 == 1) {
            console.log(i + " X " + j + " = " + i * j);
        }
        continue;
    }
}