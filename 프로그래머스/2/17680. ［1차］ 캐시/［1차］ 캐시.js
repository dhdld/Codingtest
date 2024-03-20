function solution(cacheSize, cities) {
    let answer=0, cash=[];
    cities= cities.map(x=>x.toLowerCase());
    for(let i=0; i<cities.length; i++){
        if(cash.includes(cities[i])){
            answer+=1;
            cash.splice(cash.indexOf(cities[i]),1);
        }
        else answer += 5;
        cash.push(cities[i]);
        if(cacheSize < cash.length)
            cash.shift();
    }
    return answer;
}