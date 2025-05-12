const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [n,m] = input.shift().split(' ').map(Number)
const map = input.map((v)=>v.split('').map(Number))

const [goalY, goalX] = [n-1,m-1] // 도착 위치
const ds = [[-1,0], [1,0], [0,-1], [0,1]] // 상하좌우 칸들

const bfs = () => {
    const queue = [[0,0,1]] // 좌표, 움직인 칸 수
    while(queue.length){
        const [y, x, move] = queue.shift()
        // 도착
        if(goalX == x && goalY == y) return move;
        
        // 인접 위치 탐색. 다음 이동할 칸
        for(let i=0; i<4; i++){
            const ny = y+ds[i][0]
            const nx = x + ds[i][1]
            // 다음 위치가 미로 밖으로 벗어나지 않고 1이면
            if(nx>=0 && nx < m && ny >=0 && ny < n && map[ny][nx]){
                map[ny][nx]=0 // 방문처리
                queue.push([ny,nx,move+1])
            }
        }
    }
}

console.log(bfs())

