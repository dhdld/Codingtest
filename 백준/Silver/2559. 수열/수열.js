let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, k] = input[0].split(' ').map(Number)
let days = input[1].split(' ').map(Number)
let res = []

for (let i = 0; i < n - k + 1; i++) {
    let sum = 0
    for (let j = i; j < i + k; j++) {
        sum += days[j]
    }
    res.push(sum)
}

console.log(Math.max(...res))