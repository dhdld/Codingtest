function solution(myString, pat) {
    let answer = '';
    for(let i=0; i<myString.length; i++){
        let sub = myString.slice(i, i+pat.length)
        if(sub == pat) answer = myString.slice(0, i+pat.length)
    }
    return answer;
}