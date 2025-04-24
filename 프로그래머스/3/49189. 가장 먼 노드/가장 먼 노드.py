from collections import deque

def solution(n, edge):
    edge = sorted(edge)
    d=[0]*(n+1)
    queue=deque([1])
    graph=[[] for _ in range(n+1)]
    answer=0
    
    for i in edge:
        graph[i[0]].append(i[1])
        graph[i[1]].append(i[0])

    d[1]=1
    while queue:
        cur = queue.popleft()
        for node in graph[cur]:
            if d[node] == 0:
                queue.append(node)
                d[node] = d[cur]+1
                
    max_d = max(d)
    for j in d:
        if j == max_d:
            answer+=1
    return answer
                
    