function majorityElement(nums: number[]): number {
    const map = {};
    let max = 0;
    let ans;
    for (const num of nums) {
        if (!map[num]) map[num] = 0;
        ++map[num];
        if (max < map[num]) {
            max = map[num];
            ans = num;
        }
    }
    return ans;
};