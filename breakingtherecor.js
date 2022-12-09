function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]
    
    let minRecord = 0
    let maxRecord = 0
    
    for (let i=1;i<scores.length;i++){
        if (min < scores[i]){
            min = scores[i]
            minRecord++
        }else if (max> scores[i]){
            max = scores[i]
            maxRecord++
        }
    }
    console.log(minRecord,maxRecord)
    return [maxRecord,minRecord]
}


breakingRecords([3,4 ,21 ,36 ,10 ,28, 35, 5, 24, 42])