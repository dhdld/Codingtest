let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];
let map = new Map();

for (let i = 1; i <= n; i++) {
    let [name, isLeave] = input[i].trim().split(' ');
    map.set(name, isLeave);
}

let result = [];
map.forEach((value, key) => {
    if (value === 'enter') {
        result.push(key);
    }
});

console.log(result.sort().reverse().join('\n'));
