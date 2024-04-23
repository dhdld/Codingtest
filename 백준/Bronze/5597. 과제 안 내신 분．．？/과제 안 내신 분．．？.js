let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let num = input.sort((a, b) => a - b);
let res = [];
for (let i = 1; i < 31; i++) {
    if (num.includes(i)) continue;
    res.push(i);
}

console.log(res[0]);
console.log(res[1]);