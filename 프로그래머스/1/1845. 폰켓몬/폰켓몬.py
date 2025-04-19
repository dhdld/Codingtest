def solution(nums):
    hash={}
    cnt=len(nums)/2
    
    for i in nums:
        hash[i] = 1
    
    if len(hash) > cnt:
        return cnt
    else:
        return len(hash)
    