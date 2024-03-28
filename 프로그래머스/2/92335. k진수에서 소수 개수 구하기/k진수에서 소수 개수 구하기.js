function solution(n, k) {
    let answer = 0;
    n= n.toString(k);
    n=n.split('0');
    for(let i=0; i<n.length; i++){
            if(isPrime(n[i]))
                answer++;
        }
    return answer;
}

function isPrime(num){
    if(num<=1) return false;
    for(let i=2; i<=Math.sqrt(num); i++)
        if(num%i==0) return false;
    return true;
}