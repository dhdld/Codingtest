const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [n,k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
let sum = arr.slice(0,k).reduce((acc, cur)=> acc + cur, 0) // 0부터 k개의 합
let answer = sum

for(let i=0; i<n-k; i++){
    sum += arr[i+k]- arr[i]
    if(sum > answer) // 기존의 합보다 클 경우 답 변경
        answer = sum
}

console.log(answer)

