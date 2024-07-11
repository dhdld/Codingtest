let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, k] = input[0].split(' ').map(Number)

let arr = Array.from({ length: n }, (v, i) => i + 1)
let res = '<'

let idx = 0
while (arr.length !== 0) {
    idx = (idx + k - 1) % arr.length
    res += arr.splice(idx, 1)
    if (arr.length !== 0) res += ', '
}

res += '>'
console.log(res)