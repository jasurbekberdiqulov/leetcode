function firstPalindrome(words: string[]): string {
    for(let i = 0; i < words.length; ++i) {
        let isPalindrom = true;
        const lenX = words[i].length;
        const len = lenX/2 - (lenX%2)/2;
        for(let j = 0; j < len; ++j) {
            if(words[i][j] != words[i][lenX - j - 1]) {
                isPalindrom = false;
                break;
            }
        }
        if(isPalindrom) return words[i];
    }
    return '';
};