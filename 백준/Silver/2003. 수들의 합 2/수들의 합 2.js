let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, max] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let cnt = 0;
for (let i = 0; i < n; i++) {
    let sum = arr[i];
    let idx = i;
    while (sum < max && idx < n - 1) {
        idx++;
        sum += arr[idx]
    }
    if (sum == max) cnt++;
}
console.log(cnt);