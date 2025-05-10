const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const maze = input.map((v) => v.split('').map(Number));
const [goalY, goalX] = [N - 1, M - 1]; // 도착 위치
const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]];

const bfs = () => {
  const queue = [[0, 0, 1]]; // 좌표 및 움직인 칸 수

  while (queue.length) {
    const [curY, curX, move] = queue.shift();

    if (goalY === curY && goalX === curX) return move;

    for (let i = 0; i < 4; i++) {
      const ny = curY + ds[i][1];
      const nx = curX + ds[i][0];

      // 다음 위치가 미로 밖으로 벗어나지 않고 길이 있는 곳(1)이면
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && maze[ny][nx]) {
        maze[ny][nx] = 0; // 방문 처리
        queue.push([ny, nx, move + 1]); // 다음 위치넣고 한 칸 이동
      }
    }
  }
};

console.log(bfs());