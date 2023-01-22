function singleNumber(nums: number[]): number {
    let len = nums.length
    let map = new Map<number, number>()

    for(let i = 0; i < len; ++ i) {
        if(map.has(nums[i])) {
            map.set(nums[i], 2);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map) {
        if(value == 1) return key;
    }
};