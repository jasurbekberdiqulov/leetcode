function pivotIndex(nums: number[]): number {
    let sumL = 0, sumAll = 0;
    if(nums.length == 1) return 0;
    if(nums.length == 2 && nums[1] == 0) return 0;

    for(let i = 0; i < nums.length; ++i) {
        sumAll += nums[i];
    }

    if(sumAll - nums[0] == 0) return 0;

    for(let i = 1; i < nums.length; ++i) {
        sumL += nums[i-1];
        if(2*sumL == sumAll - nums[i]) return i;
    }
    return -1;
};