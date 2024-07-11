let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0]);
const arr = Array.from({ length: n }, (v, i) => (v = i + 1))
let idx = 0
while (idx !== arr.length - 1) {
    if (idx % 2 === 0) idx++
    else arr.push(arr[idx++])
}
console.log(arr[idx])