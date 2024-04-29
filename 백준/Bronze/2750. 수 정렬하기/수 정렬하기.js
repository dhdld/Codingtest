let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => Number(x));

let arr = input.slice(1).sort((a, b) => a - b);

for (let i of arr) {
    console.log(i);
}

