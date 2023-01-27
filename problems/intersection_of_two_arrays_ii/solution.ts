function intersect(nums1: number[], nums2: number[]): number[] {
    for (let i = 0; i < nums1.length; ++i) {
        let isFound = true;
        for (let j = 0; j < nums2.length; ++j) {
            if (nums1[i] == nums2[j]) {
                isFound = false;
                nums2.splice(j, 1);
                break;
            }
        }
        if (isFound) {
            nums1.splice(i--, 1);
        }
    }
    return nums1;
};