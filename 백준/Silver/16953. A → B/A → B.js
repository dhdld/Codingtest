const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let answer = -1

const dfs = (start, goal, cnt) => {
    if(start === goal) answer = cnt+1;
    if(start*2 <= goal){
        dfs(start*2, goal, cnt+1)
    }
    if(Number(start+'1') <= goal) {
        dfs(Number(start+'1'), goal, cnt+1)
    }
}

dfs(a,b,0)
console.log(answer)