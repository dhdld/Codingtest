let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

console.log(parseInt(input[0], input[1]).toString(10))