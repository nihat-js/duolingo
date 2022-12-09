function miniMaxSum(arr) {
    let arr_ =[]
    for(let i=0;i<arr.length;i++){
        let sum = 0
        for (let k=0;k<arr.length;k++){
            if (k !=i){
                sum +=arr[k]
            }
        }
        arr_.push(sum)
        
    }
    console.log(arr_)
    let min = arr_[0]
    let max = arr_[0]
    
    for (let i=1;i<arr_.length;i++){
        if (arr_[i] > max){
            max = arr_[i]
        }else if ( arr_[i] < min){
            min = arr_[i]
        }
    }
    console.log(min,max)
    return [min,max]
    
}

miniMaxSum([1,2,3,4,5])