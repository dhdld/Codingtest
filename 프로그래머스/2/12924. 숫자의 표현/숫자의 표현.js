function solution(n) {
    let cnt=1;
    for(let i=1; i<= n/2; i++){
        let sum=0;
        for(let j=i; sum<n; j++){
            sum+=j;
            if(sum==n) {
                cnt++;
                //break;
            }
        }
    }
    return cnt;
}