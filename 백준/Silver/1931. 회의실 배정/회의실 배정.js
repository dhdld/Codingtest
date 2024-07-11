let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let arr = input.slice(1).map(e => e.split(' ').map(Number)).sort((a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1])
let cnt = 1
let end = arr[0][1]
for (let i = 1; i < n; i++) {
    if (arr[i][0] >= end) {
        end = arr[i][1]
        cnt++
    }
}

console.log(cnt)