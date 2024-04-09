let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let result = [];

for (let i = 2; i >= 0; i--) {
    result.push(a * parseInt(b.toString().charAt(i)));
}

result.push(a * b);
console.log(result.join('\n'));
