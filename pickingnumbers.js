function pickingNumbers(a) {
    let max = 0
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] - a[i] < -1 && a[j] - a[i] > 1) {
                if (j > max) {
                    j = max
                }
                break;
            }
        }
    }

}

pickingNumbers(4, 6 ,5, 3, 3 ,1)