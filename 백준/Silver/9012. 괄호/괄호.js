let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
for (let i = 1; i <= n; i++) {
    let arr = []
    let mid = 0
    for (let j = 0; j < input[i].length; j++) {
        arr.push(input[i][j])
        if (input[i][j] === '(') {
            mid++
        }
        else {
            mid--
        }
        if (mid < 0) {
            console.log('NO')
            break
        }
    }
    if (mid === 0) {
        console.log('YES')
    }
    else if (mid > 0) {
        console.log('NO')
    }
}