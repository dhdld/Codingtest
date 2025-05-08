h,w = map(int, input().split())
heights = list(map(int, input().split()))
res=0

for i in range(1, w-1):
    leftMax = max(heights[:i])
    rightMax = max(heights[i+1:])
    compare = min(leftMax, rightMax)
    if heights[i] < compare:
        res += compare - heights[i]
        
print(res)