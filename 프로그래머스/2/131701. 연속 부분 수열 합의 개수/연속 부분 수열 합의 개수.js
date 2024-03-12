function solution(elements) {
    const set = new Set();
    const getSum = (arr) =>{
        let sum=0;
        for(let i=0;i<arr.length;i++)
            sum+=arr[i];
        return sum;
    }
    let len = elements.length;
    for(let i=1; i<=len; i++){
        for(let j=0; j<len;j++){
            if(j+i>len)
                set.add(getSum(elements.slice(j,len))+getSum(elements.slice(0,j+i-len)));
            else
                set.add(getSum(elements.slice(j,j+i)));
        }
    }
    return set.size;
}