function solution(answers) {
    let a = [1,2,3,4,5]
    let b = [2,1,2,3,2,4,2,5]
    let c = [3,3,1,1,2,2,4,4,5,5]
    let res = [0,0,0]
    for(let i=0; i<answers.length; i++){
        if(a[i%5]===answers[i]) res[0]++;
        if(b[i%8]===answers[i]) res[1]++;
        if(c[i%10]===answers[i]) res[2]++;
        
    }
    let max = Math.max(...res)
    let answer = []
    for(let i=0; i<res.length; i++){
        if(res[i]===max)
            answer.push(i+1)
    }
    return answer
}