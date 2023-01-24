function removeDuplicates(nums: number[]): number {
    let counter = 0;
    for(let i = 0; i < nums.length - 1; ++i) {
        if(nums[i] == 101) break;
        if(nums[i] == nums[i + 1]) {
            ++counter;
            nums.push(101);
            nums.splice(i + 1, 1);
            --i;
        }
    }
    return nums.length - counter;
};