let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.sort((a, b) => a - b);
let avg = 0;

for (let i = 0; i < input.length; i++) {
    avg += parseInt(arr[i]);
}
console.log(Math.floor(avg / 5))
console.log(arr[2]);

