function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2=str2.toLowerCase();
    let reg = /^[a-z]+$/;
    let arr1=[], arr2=[];
    for(let i=0; i<str1.length-1; i++){
        let str = str1.substring(i,i+2);
        if(reg.test(str))
            arr1.push(str);
    }
    for(let j=0; j<str2.length-1; j++){
        let str = str2.substring(j,j+2);
        if(reg.test(str))
            arr2.push(str);
    }
    let inter=0;
    let union = arr1.length;
    for(let i=0; i<arr2.length; i++){
        if(arr1.includes(arr2[i])){
            inter++;
            arr1.splice(arr1.indexOf(arr2[i]),1);
        }
        else union++;
    }
    
    return union==0 ? 65536 : Math.floor((inter/union)*65536);
}