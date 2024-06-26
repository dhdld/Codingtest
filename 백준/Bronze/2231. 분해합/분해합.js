let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let res = []
for (let i = 1; i < n; i++) {
    let sum = i;
    let str = i.toString();
    for (let j = 0; j < str.length; j++) {
        sum += Number(str[j])
    }
    if (n === sum) {
        res.push(i);
        break;
    }
}
console.log(res[0] || 0);