let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let sum = 0;
let answer = [];

for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        sum = input.reduce((acc, cur) => acc + cur, 0)

        if (sum - input[i] - input[j] == 100) {
            answer = input.filter((el) => (el != input[i] && el != input[j]))
        }
    }
}

console.log((answer.sort((a, b) => a - b)).join('\n'));