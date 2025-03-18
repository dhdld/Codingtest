function solution(schedules, timelogs, startday) {
    let answer = 0;
    for(let i=0; i<schedules.length; i++){
        let goal = schedules[i]+10;
        if(goal%100>=60)
            goal+=40
        let cnt=0;
        for(let j=0; j<7; j++){
            let day = j+startday
            if(day % 7 ===0 || day % 7 ===6)
                continue;
            if(goal<timelogs[i][j])
                break;
            cnt++;
        }
        if(cnt===5)
            answer++;
    }
    return answer;
}