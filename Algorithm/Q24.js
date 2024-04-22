const arr = [null, null, 'hello', undefined, false];


if(arr.some(obj => obj == null)) {
    return console.log(false);
} else {
    return console.log(true);
}

if(arr.every(obj => obj != null)) {
    return console.log(true);
} else {
    return console.log(false);
}