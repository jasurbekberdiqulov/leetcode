function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    for (let i = 0; i < nums.length; ++i) {
        for(let j = i + 1; j < nums.length; ++j) {
            if(j - i <= indexDiff) {
                if(Math.abs(nums[i] - nums[j]) <= valueDiff) return true;
            }
        }
    }
    return false;
};