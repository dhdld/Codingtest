let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];
let map = new Map();

for (let i = 1; i <= n; i++) {
    let str = input[i].trim();
    if (map.has(str)) {
        map.set(str, map.get(str) + 1)
    }
    else map.set(str, 1);
}

let max = 0;
map.forEach((value, key) => {
    if (value > max) max = value;
})

let answer = [];
map.forEach((value, key) => {
    if (value === max) answer.push([key])
})
answer.sort();

console.log(answer[0][0])