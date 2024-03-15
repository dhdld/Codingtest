function solution(s) {
    let answer = 0;
    let stack=[];
    if(s.length%2 != 0) return 0;
    for(let i=0; i<s.length; i++){
        let str = s.slice(i)+s.slice(0,i);
        let flag=true;
        for(let n of str){
            if(n=='[' || n == '{' || n == '(')
                stack.push(n);
            else{
                let c = stack.pop();
                if(c=='[' && n==']') continue;
                if(c=='{' && n=='}') continue;
                if(c=='(' && n==')') continue;
                flag=false;
                break;
            }
        }
        if(flag) answer++;
    }
    return answer;
}