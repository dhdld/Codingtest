function solution(s) {
    s= s.split(' ');
    console.log(
        s.map(x=>x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ')
    )
    for(let i=0; i< s.length; i++){
        s[i]=s[i].charAt(0).toUpperCase() + s[i].slice(1).toLowerCase();
    }
    return s.join(' ');
}