let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
let arr = input[1].split(' ').map(Number).sort((a, b) => b - a);
let max = arr[0];
let sum = 0;
for (let i = 0; i < N; i++) {
    sum += arr[i] / max * 100;
}
console.log(sum / N);