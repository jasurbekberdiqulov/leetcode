function getRow(rowIndex: number): number[] {
    let prevArray:number[] = [];

    for(let i = 0; i < rowIndex + 1; ++i) {
        const array = [];
        array[0] = 1;
        for(let j = 1; j < i; ++j) {
            array[j] = prevArray[j - 1] + prevArray[j]
        }
        array[i] = 1;
        prevArray = array;
        console.log(prevArray);
    }
    return prevArray;
};