let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = input[0];
let paper = Array.from(Array(100), () => Array(100).fill(0));
let arr = [];
let res = 0;

for (let i = 1; i <= cnt; i++) {
    arr.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < cnt; i++) {
    let x = arr[i][0];
    let y = arr[i][1];
    for (let j = x; j < x + 10; j++) {
        for (let k = y; k < y + 10; k++) {
            if (paper[j][k] == 0) {
                paper[j][k] = 1;
                res++;
            }
        }
    }
}
console.log(res);