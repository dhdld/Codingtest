const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let res = []

for(let i=1; i<=n; i++){
    if(n%i === 0)
        res.push(i)
}

if(res.length < k){
    console.log(0)
}
else {
    console.log(res[k-1])
}