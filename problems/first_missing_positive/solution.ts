function firstMissingPositive(nums: number[]): number {
    const len = nums.length;
    let tempArray:boolean[] = new Array(len+1);

    for(let i = 0; i < len; ++i) {
        if(nums[i] > 0 && nums[i] <= len) tempArray[nums[i]] = true;
    }

    for(let i = 1; i <= len; ++i) {
        if(!tempArray[i]) return i;
    }
    return len + 1;
};