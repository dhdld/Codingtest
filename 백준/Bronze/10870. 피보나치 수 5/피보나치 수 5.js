let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let fib = [0, 1];

for (let i = 1; i <= input; i++) {
    fib.push(fib[i - 1] + fib[i]);
}

console.log(fib[input]);