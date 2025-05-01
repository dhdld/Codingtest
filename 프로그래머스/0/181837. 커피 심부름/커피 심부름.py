def solution(order):
    answer = 0
    cafelatte = "cafelatte"
    for i in order:
        if cafelatte in i:
            answer+=5000
        else:
            answer+=4500

    return answer