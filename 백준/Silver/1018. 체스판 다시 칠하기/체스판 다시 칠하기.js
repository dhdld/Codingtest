let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let arr = input.slice(1).map((i) => i.split(''))
let res = []

let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

function checkWhite(x, y) {
    let cnt = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i + x][j + y] !== white[i][j])
                cnt++
        }
    }
    return cnt
}
function checkBlack(x, y) {
    let cnt = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i + x][j + y] !== black[i][j])
                cnt++
        }
    }
    return cnt
}

for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
        res.push(checkWhite(i, j))
        res.push(checkBlack(i, j))
    }
}

console.log(Math.min(...res))
