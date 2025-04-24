def solution(board):
    w = len(board[0])
    h = len(board)
    for x in range(1, h):
        for y in range(1,w):
            if board[x][y] == 1:
                board[x][y] = min(board[x-1][y-1], min(board[x-1][y], board[x][y-1])) +1

    return max([i for row in board for i in row])**2