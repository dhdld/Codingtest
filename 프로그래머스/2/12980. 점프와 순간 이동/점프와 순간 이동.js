function solution(n)
{
    let ans = 1;
    while(n != 1){
        n=n/2;
        if(n % 1 != 0){
            n=Math.floor(n)
            ans+=1;
        }
    }
    return ans;
}