function solution(citations) {
    let res=0;
    citations.sort((a,b)=>b-a);
    for(let i=0; i<citations.length; i++){
        if(i<citations[i])
            res++;
    }   
    return res;
}