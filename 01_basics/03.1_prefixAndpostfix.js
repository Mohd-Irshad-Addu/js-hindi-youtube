let x = 3;
const y = x++;

console.log(x)
console.log(`x:${x}`);//, y:${y}
console.log(`y:${y}`)
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}`);//b:${b}
console.log(`b:${b}`);
// Expected output: "a:4, b:4"
