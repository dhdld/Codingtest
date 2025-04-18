def solution(citations):
    n = len(citations)
    h=0
    citations.sort(reverse=True)
    for idx, c in enumerate(citations):
        if c >= idx+1:
            h=idx+1
    return h
    