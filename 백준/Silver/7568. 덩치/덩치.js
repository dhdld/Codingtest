let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr = input.slice(1).map(v => v.split(' ').map(Number))
let res = Array(n).fill(1)

for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[i][0] > arr[j][0] && arr[i][1] > arr[j][1]) {
            res[j]++
        } else if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
            res[i]++
        }
    }
}

console.log(res.join(' '))