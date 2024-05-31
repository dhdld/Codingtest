function solution(genres, plays) {
    let answer = [];
    let songs = genres.map((genre,idx)=>({
        idx: idx,
            genre: genre,
            play: plays[idx]
    }))

    let genreCnt = []
    songs.forEach((song)=>{
        let thisGenre = genreCnt.find((e)=>e.genre==song.genre)
        if(thisGenre) {
            thisGenre.play += song.play
        }
        else {
            genreCnt.push({
                genre: song.genre,
                play: song.play
            })
        }
    })
    songs.sort((a,b)=>b.play-a.play)
    genreCnt.sort((a,b)=>b.play-a.play)
    genreCnt.forEach((e)=>{
        let len =0
        songs.forEach((song)=>{
            if(e.genre==song.genre && len <2){
                len++;
                answer.push(song.idx)
            }
        })
    })
    
    return answer;
}