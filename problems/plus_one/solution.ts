function plusOne(digits: number[]): number[] {
    let rem = 1, num = 0, newArray: number[] = [];
    const len = digits.length;

    for(let i = len - 1; i > -1; i --) {
        num = digits[i] + rem;
        rem = (num > 9)? 1 : 0;
        num %=10;
        newArray.unshift(num);
    }

    if(rem) newArray.unshift(rem);
    return newArray;
};