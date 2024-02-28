function solution(n) {
    let temp= n+1;
    let cnt = (n.toString(2).replace(/0/g, '')).length;
    while(true){
        let cnt2= temp.toString(2).replace(/0/g,'').length;
        if(cnt2 ==cnt){
            break;
        }
        temp++;
    }
    return temp;
}