function isSubsequence(s: string, t: string): boolean {
    if(!s.length) return true; // we can use continue if it is inside for
    let counter = 0;

    for(let i = 0; i < t.length; ++i) {
        if(counter == s.length) return true;
        if(t[i] == s[counter]) {
            ++counter;
        }
    }

    return counter == s.length;
};