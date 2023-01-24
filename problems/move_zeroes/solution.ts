/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let counter = 0;
    for(let i = 0; i < nums.length; ++i) {
        if(counter + i + 1 == nums.length) break;
        if(nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            ++counter;
            --i;
        }
    }
};