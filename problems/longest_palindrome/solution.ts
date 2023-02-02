function longestPalindrome(s: string): number {
    let map = new Map(), counter = 0;
    for(let i = 0; i < s.length; ++i) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let isExist = false;
    for(let entry of map.entries()) {
        if(entry[1] % 2 == 1) isExist = true;
        counter += entry[1] - (entry[1] % 2);
    }
    counter += isExist? 1 : 0;
    return counter;
};