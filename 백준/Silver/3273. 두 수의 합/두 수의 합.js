let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
let x = input[2]
let cnt = 0
let start = 0
let end = input[0] - 1

while (start < end) {
    if (arr[start] + arr[end] == x) {
        cnt++
        start++
        end--
    }
    else if (arr[start] + arr[end] < x) {
        start++
    }
    else end--
}

console.log(cnt)
