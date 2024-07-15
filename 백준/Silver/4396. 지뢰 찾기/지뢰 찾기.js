let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let stars = []
let out = []
for (let i = 1; i <= n; i++) {
    stars.push(input[i].split(''))
    out.push(input[i + n].split(''))
}

let isMine = false
let res = Array.from(Array(n), () => Array(n).fill('.'))
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (out[i][j] === 'x') {
            if (stars[i][j] === '*') {
                isMine = true
            }
            else {
                let cnt = 0
                for (let x of [-1, 0, 1]) {
                    for (let y of [-1, 0, 1]) {
                        if (i + x >= 0 && i + x < n && j + y >= 0 && j + y < n && stars[i + x][j + y] === '*') {
                            cnt++
                        }
                    }
                }
                res[i][j] = cnt
            }
        }
    }
}

if (isMine) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (stars[i][j] === '*') {
                res[i][j] = '*'
            }
        }
    }
}

console.log(res.map(v => v.join('')).join('\n'))
