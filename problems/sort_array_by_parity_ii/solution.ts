function sortArrayByParityII(nums: number[]): number[] {
    const result = [];

    for (let i = 0, odd = 1, even = 0; i < nums.length; ++i) {
        if (nums[i] % 2 === 0) {
            result[even] = nums[i];
            even += 2;
        } else {
            result[odd] = nums[i];
            odd += 2;
        }
    }

    return result;
};