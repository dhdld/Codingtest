function solution(progresses, speeds) {
    let answer = [];
    let days=[];
    for(let i=0; i< progresses.length; i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    let max=days[0];
    let cnt=0;
    for(let i=0; i<days.length; i++){
        if(days[i]>max){
            answer.push(cnt);
            max=days[i];
            cnt=1;
        }
        else cnt+=1;
    }
    answer.push(cnt);
    return answer;
}