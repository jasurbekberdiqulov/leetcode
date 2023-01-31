function containsDuplicate(nums: number[]): boolean {
    const onlyUnique = (value, index, self): boolean => {
        return self.indexOf(value) === index;
    }
    const unique = nums.filter(onlyUnique);

    return nums.length != unique.length;
};