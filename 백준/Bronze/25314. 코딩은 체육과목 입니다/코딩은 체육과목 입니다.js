let input = require('fs').readFileSync('/dev/stdin').toString().trim('');

let answer = '';

for (let i = 0; i < Number(input / 4); i++) {
    answer += 'long ';
}

console.log(answer + 'int')
