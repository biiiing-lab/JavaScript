const hof = (a) => (b) => (c) => {
    return a + (b * c);
}

const first = hof(3); // a
const second = first(4); // b
const third = second(5); // c

console.log(third);