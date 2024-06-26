let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0].split(' ').map(Number);
let m = n[1];
let arr = input[1].split(' ').map(Number);
let sum = 0;

for (let i = 0; i < n[0]; i++) {
    for (let j = i + 1; j < n[0]; j++) {
        for (let k = j + 1; k < n[0]; k++) {
            if (arr[i] + arr[j] + arr[k] <= m)
                sum = Math.max(sum, arr[i] + arr[j] + arr[k])
        }
    }
}
console.log(sum);