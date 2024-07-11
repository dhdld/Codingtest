let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0]);
let arr = []
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]))
}
let stack = []
for (let i = 0; i < n; i++) {
    if (arr[i] == 0)
        stack.pop()
    else stack.push(arr[i])
}
let sum = 0
stack.forEach(i => sum += i)
console.log(sum)