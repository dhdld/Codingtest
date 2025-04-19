def solution(clothes):
    closet = {}
    num=[]
    answer=1
    
    for cloth, category in clothes:
        if category in closet:
            closet[category].append(cloth)
        else:
            closet[category] = [cloth]
            
    for key in closet.keys():
        num.append(len(closet[key]))

    for i in num:
        answer *= i+1
    return answer-1
        
        