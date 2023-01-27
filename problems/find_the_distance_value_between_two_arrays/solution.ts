function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let count = 0, isHigher: boolean;
    for(let i = 0; i < arr1.length; ++i) {
        isHigher = true;
        for(let j = 0; j < arr2.length; ++j) {
            if(Math.abs(arr1[i] - arr2[j]) <= d) {
                isHigher = false;
                break;
            }
        }
        if(isHigher) ++count;
    }
    return count;
};