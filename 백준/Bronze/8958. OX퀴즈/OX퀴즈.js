let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = input[0]

for (let i = 0; i < n; i++) {
    let sum = 0
    let arr = input[i + 1].trim().split('X')
    arr = arr.filter((el) => el !== '')

    for (let j = 0; j < arr.length; j++) {
        let o = arr[j].split('')
        let score = 0
        for (let k = 0; k < o.length; k++) {
            if (o[k] === 'O') {
                score += 1
                sum += score
            } else {
                score = 0
            }
        }
    }
    console.log(sum)
}