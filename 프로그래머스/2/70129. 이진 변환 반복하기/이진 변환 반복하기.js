function solution(s) {
    let answer = [0,0];
    while(s.length>1){
        let beforeLen = s.length;
        s=s.replaceAll(/0/g, '');
        answer[0]++;
        answer[1]+= beforeLen - s.length;
        s=s.length.toString(2)
    }
    return answer;
}