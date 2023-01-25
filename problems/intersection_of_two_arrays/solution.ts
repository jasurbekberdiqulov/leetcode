function intersection(nums1: number[], nums2: number[]): number[] {
    let map = {};

    for(let number1 of nums1) {
        for(let number2 of nums2) {
            if(number1 == number2) {
                map[number1] = number1;
            }
        }
    }
    return Object.values(map);
};