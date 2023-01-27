function getRow(rowIndex: number): number[] {
    let array:number[][] = [[1]];

    for(let i = 1; i < rowIndex + 1; ++i) {
        array[i] = [];
        array[i][0] = 1;
        for(let j = 1; j < i; ++j) {
            array[i][j] = array[i - 1][j - 1] + array[i - 1][j]
        }
        array[i][i] = 1;
    }
    return array[rowIndex];
};