function solution(s) {
    let answer = [];
    let tuple = s.slice(2, s.length-2).split('},{').sort((a,b)=>a.length-b.length);
    tuple.forEach(x=>{
        let t = x.split(',');
        for(let i=0; i<t.length; i++){
            if(!answer.includes(Number(t[i]))) answer.push(Number(t[i]));
        }
    })
    return answer;
}