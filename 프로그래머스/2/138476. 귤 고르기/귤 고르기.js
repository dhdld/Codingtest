function solution(k, tangerine) {
    const kind = new Map();
    for(let i=0; i<tangerine.length; i++){
        let temp=kind.get(tangerine[i]);
        kind.set(tangerine[i], temp ? temp+1 : 1);
    }
    let li = [...kind];
    li.sort((a,b)=>b[1]-a[1]);
    let cnt=0;
    for(let i=0; i<li.length; i++){
        if(k<=0) break;
        k -= li[i][1];
        cnt++;
    }
    return cnt;
}