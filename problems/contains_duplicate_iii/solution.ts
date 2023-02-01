function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    let i = 0;
    let j = 0;

    while (i < nums.length - 1) {
        j += 1;
        if (Math.abs(i - j) <= indexDiff && Math.abs(nums[i] - nums[j]) <= valueDiff) return true;

        if (j - i === indexDiff) {
            i += 1;
            j = i;
        }
    }
    return false;
};