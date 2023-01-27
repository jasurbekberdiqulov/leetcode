function findDifference(nums1: number[], nums2: number[]): number[][] {
    let k = -1;
    const unique = (value, index, self): boolean => {
        return self.indexOf(value) === index;
    }
    for (let i = 0; i < nums1.length; ++i) {
        let isFound = false;
        for (let j = 0; j < nums2.length; ++j) {
            if (nums1[i] == nums2[j]) {
                isFound = true;
                nums2.splice(j--, 1);
            }
        }
        if (isFound) {
            for(k = i + 1; k < nums1.length; ++k) {
                if(nums1[i] == nums1[k]) nums1.splice(k--, 1);
            }
            nums1.splice(i--, 1);
        }
    }
    return [nums1.filter(unique), nums2.filter(unique)];
};