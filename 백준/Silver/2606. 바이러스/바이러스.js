let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let node = Number(input[0]);
let edge = Number(input[1]);
let graph = [...new Array(node + 1)].map(() => []);
let visited = [...new Array(node + 1)].fill(0)
let cnt = 0;
for (let i = 0; i < edge; i++) {
    let [start, end] = input[i + 2].split(' ').map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

visited[1] = 1;
function dfs(start) {
    for (let end of graph[start]) {
        if (!visited[end]) {
            visited[end] = 1
            dfs(end)
            cnt++
        }
    }
}
dfs(1)
console.log(cnt)
