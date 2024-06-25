let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];
for (let i = 0; i < n; i++) {
    let [x, y] = input[i + 1].split(' ');
    console.log(y.slice(0, x - 1) + y.slice(x))
}
