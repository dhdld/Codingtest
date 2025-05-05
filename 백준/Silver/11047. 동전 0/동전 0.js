const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, price] = input.shift().split(' ').map(Number)
const coins = input.map(Number)
let cnt=0

for(let i=n-1; i>=0; i--){
    cnt += Math.floor(price/coins[i])
    price %= coins[i]
}
console.log(cnt)