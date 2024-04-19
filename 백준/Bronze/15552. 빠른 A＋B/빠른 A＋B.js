let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let len = Number(input[0]);
let answer = '';
for (let i = 1; i <= len; i++) {
    let num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(answer);
