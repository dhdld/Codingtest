let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, cnt] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let li = input.slice(2);
let sumList = [0, arr[0]]
let res = []

for (let i = 1; i < n; i++) {
    sumList.push(sumList[i] + arr[i]);
}

for (let i = 0; i < cnt; i++) {
    let [start, end] = li[i].split(' ').map(Number);
    res.push(sumList[end] - sumList[start - 1])
}

console.log(res.join('\n'))
