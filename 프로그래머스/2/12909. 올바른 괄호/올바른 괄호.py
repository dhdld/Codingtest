def solution(s):
    if s[0] == ')': 
        return False
    cnt=0
    for i in s:
        if i == '(':
            cnt+=1
        elif i == ')':
            cnt-=1
        if cnt<0:
            return False
    return True if cnt==0 else False
