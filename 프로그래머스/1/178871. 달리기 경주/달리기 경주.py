def solution(players, callings):
    rank = {player: i for i, player in enumerate(players)}
    for i in callings:
        idx = rank[i]
        rank[i] -= 1
        rank[players[idx-1]] += 1
        players[idx-1], players[idx] = players[idx], players[idx-1]
    return players