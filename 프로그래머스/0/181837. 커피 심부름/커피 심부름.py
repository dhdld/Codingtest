def solution(order):
    answer = 0
    latte = "latte"
    for i in order:
        if latte in i:
            answer+=5000
        else:
            answer+=4500

    return answer