function solution(myString, pat) {
    const newStr = []
    for(let i =0; i < myString.length; i++){
        if(myString[i] =='A') newStr.push('B')
        else newStr.push('A')
    }
    return newStr.join('').includes(pat) ? 1 : 0
}