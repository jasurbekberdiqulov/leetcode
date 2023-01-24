function removeDuplicates(nums: number[]): number {
    for(let i = 0; i < nums.length - 1; ++i) {
        if(nums[i] == nums[i + 1]) nums.splice(i--, 1);
    }
    return nums.length;
};