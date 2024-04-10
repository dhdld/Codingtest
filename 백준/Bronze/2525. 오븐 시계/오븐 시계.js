let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let h = parseInt(input[0].split(' ')[0])
let startm = parseInt(input[0].split(' ')[1])
let time = parseInt(input[1])

let m = startm + time;

if (m >= 60) {
    h += Math.floor(m / 60);
    m = m % 60;
}
if (h >= 24)
    h = h % 24;

console.log(h, m)