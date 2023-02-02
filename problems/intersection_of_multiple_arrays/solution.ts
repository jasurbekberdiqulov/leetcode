function intersection(nums: number[][]): number[] {
    let array: number[] = [];

    for (let i = 0; i < nums[0].length; ++i) {
        let counter = 0;
        let map = new Map<number, number>();
        for (let j = 1; j < nums.length; ++j) {
            for (let k = 0; k < nums[j].length; ++k) {
                if (nums[0][i] == nums[j][k]) {
                    map.set(j, k);
                    ++counter;
                }
            }
        }
        if (counter == nums.length - 1) {
            array.push(nums[0][i]);
            for (let entry of map.entries()) {
                nums[entry[0]].splice(entry[1], 1);
            }
        }
    }
    array = array.sort((a, b) => a - b);
    return array;
};