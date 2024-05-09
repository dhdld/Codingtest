let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let res = ''
for (let i = 1; i <= Number(input[0]); i++) {
    let cnt = Number(input[i].split(' ')[0])
    let str = input[i].split(' ')[1]
    for (let j = 0; j < str.length; j++) {
        for (let k = 0; k < cnt; k++) {
            res += str[j]
        }
    }
    res += '\n'
}
console.log(res)
