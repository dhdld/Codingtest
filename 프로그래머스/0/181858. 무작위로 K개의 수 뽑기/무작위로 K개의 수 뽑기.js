function solution(arr, k) {
    let set = new Set(arr)
    let answer = [...set].slice(0,k)
    while(answer.length != k){
        answer.push(-1)
    }
    return answer
}