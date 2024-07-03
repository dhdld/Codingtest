let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])

let arr = input[1].split(' ').map(Number)
let dep = []
let max = 0
let start = arr[0]
for (let i = 1; i < n; i++) {
    if (arr[i] <= arr[i - 1]) {
        start = arr[i]
    }
    else {
        dep.push([start, arr[i]])
    }
}

for (let i = 0; i < dep.length; i++) {
    max = Math.max(max, dep[i][1] - dep[i][0])
}

console.log(max)