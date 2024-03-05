function solution(n, words) {
    let idx=0;
    for(let i=1; i< words.length; i++){
        let past = words[i-1].substr(-1,1);
        if(words[i].charAt(0) != past || words.indexOf(words[i])!=i){
            idx=i;
            break;
        }
    }
    return idx==0 ? [0,0] : [idx%n+1, Math.floor(idx/n)+1];
}