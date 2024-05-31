function solution(clothes) {
    let clothesMap = new Map() // type별로 정리
    let res=1;
    clothes.map(([cloth, type]) => {
        if(clothesMap.has(type)){
            clothesMap.set(type, [...clothesMap.get(type), cloth])
        }
        else clothesMap.set(type, [cloth])   
})
    clothesMap.forEach((e)=>{
        res*=e.length+1
    })
    return res-1;
}