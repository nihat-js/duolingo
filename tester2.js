function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0
    let rightDiagonal = 0
    for (let i=0;i<arr.length;i++){
        leftDiagonal += arr[i][i]
        rightDiagonal += arr[arr.length-1-i][i]
        console.log(leftDiagonal,rightDiagonal);
    }
    return (leftDiagonal > 0) ? leftDiagonal  : rightDiagonal ;

}

diagonalDifference([[1,2,3],[4,5,6],[7,8,9]])