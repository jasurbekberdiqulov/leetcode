function isIsomorphic(s: string, t: string): boolean {
    const first = {}, second = {};
    for(let i = 0; i < s.length; ++i) {
        if(!first[s[i]] && !second[t[i]]) {
            first[s[i]] = t[i];
            second[t[i]] = s[i];
        }

        if(first[s[i]] != t[i]) return false;
    }

    return true;
};