from collections import deque

def change(a, b):
    cnt=0
    # 다른 문자 개수 
    for i in range(len(a)):
        if a[i] != b[i]:
            cnt+=1
    return cnt

def solution(begin, target, words):
    answer=0
    if target not in words:
        return 0
    
    queue= deque()
    queue.append((begin,0))
    while queue:
        n, times = queue.popleft()
        # target과 같아지면 변경 횟수 출력
        if n == target:
            return times
        
        for word in words:
            cnt = change(word, n)
            if cnt == 1:
                queue.append((word, times+1))
            