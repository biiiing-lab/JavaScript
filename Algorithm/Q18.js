const obj = {
    a : 'hello',
    b : {
        c : 'hi',
        d : {
            e : 'wow',
        }
    },
};

let {a, b : {c, d : {e}}} = obj;

console.log(a);
console.log(c);
console.log(e);
