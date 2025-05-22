function solution(n, edge) {
    const graph = new Array(n).fill().map(_ => [])
    for(let e of edge){
        graph[e[0]-1].push(e[1]-1)
        graph[e[1]-1].push(e[0]-1)
    }
    const visited = [1]
    const queue = [0]
    while(queue.length){
        const cur = queue.shift()
        for(let next of graph[cur]){
            if(!visited[next]){
                visited[next] = visited[cur]+1
                queue.push(next)
            }
        }
    }
    const max = Math.max(...visited)
    return visited.filter(e=>e === max).length
}