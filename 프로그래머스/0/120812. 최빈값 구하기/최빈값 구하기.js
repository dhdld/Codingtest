function solution(array) {
    let map = new Map()
    for(i of array)
        map.set(i, (map.get(i)||0)+1)
    console.log(map)
    let arr = [...map].sort((a,b)=>b[1]-a[1])
    
    return arr.length===1 || arr[0][1]>arr[1][1] ? arr[0][0] : -1
}