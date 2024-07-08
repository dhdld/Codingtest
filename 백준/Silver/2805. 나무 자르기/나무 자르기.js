let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
let max = 0
let start = 0;
let end = arr[arr.length - 1]

while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let sum = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] > mid)
            sum += arr[i] - mid
    }
    if (sum >= m) {
        if (mid > max) max = mid
        start = mid + 1
    }
    else end = mid - 1
}

console.log(max)