let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const table = {
    "A+": 4.5, "A0": 4.0, "B+": 3.5, "B0": 3.0, "C+": 2.5, "C0": 2.0, "D+": 1.5, "D0": 1.0, "F": 0.0
}
let sum = 0;
let div = 0;
for (let i = 0; i < input.length; i++) {
    let [a, b, c] = input[i].split(' ');
    if (c == 'P') continue;
    sum += b * table[c.trim()];
    div += parseInt(b);
}
console.log(sum / div);
