let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let res = new Set();

for (let i = 0; i < 10; i++) {
    res.add(input[i] % 42);
}

console.log(res.size);