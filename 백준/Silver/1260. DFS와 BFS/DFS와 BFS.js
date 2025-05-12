const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

let [n, m, v] = input.shift().split(" ").map(Number);
let graph = [...Array(n + 1)].map((e) => []);

for (let i = 0; i < m; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

const dfs = (graph, start) => {
    const visited=[]
    let needVisit = []
    needVisit.push(start)
    while(needVisit.length){
        const node = needVisit.pop() // stack
        if(!visited.includes(node)){
            visited.push(node)
            let nodes = graph[node]
            needVisit = [...needVisit, ...nodes.sort((a,b)=>b-a)] // 스택 때문에 내림차순
        }
    }
    return visited
}

const bfs = (graph, start) =>{
    const visited=[]
    let needVisit = []
    needVisit.push(start)
    while(needVisit.length){
        const node = needVisit.shift() // queue
        if(!visited.includes(node)){
            visited.push(node)
            let nodes = graph[node]
            needVisit = [...needVisit, ...nodes.sort((a,b)=> a-b)]
        }
    }
    return visited
}

console.log(dfs(graph,v).join(' '))
console.log(bfs(graph,v).join(' '))
