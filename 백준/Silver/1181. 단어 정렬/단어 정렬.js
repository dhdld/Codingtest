let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
const set = new Set(input)
input = [...set]

input.sort((a, b) => a.length - b.length || a.localeCompare(b))
console.log(input.join('\n'))