let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let n = Number(input[0]);
let b = Number(input[1]);

console.log(n.toString(b).toUpperCase());
