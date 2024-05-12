let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let arr = [1, 1, 2, 2, 2, 8];
let res = '';
for (let i = 0; i < arr.length; i++) {
    res += arr[i] - input[i] + ' ';
}
console.log(res);