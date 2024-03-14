function solution(arr) {
    let answer = 1;
    const gcd = (a,b) => {
        if(a%b==0) return b;
        return gcd(b, a%b);
        }
    const lcm = (a,b) =>((a*b)/gcd(a,b));
    for(let i=0; i<arr.length; i++){
        answer = lcm(answer, arr[i]);
    }

    return answer;
}