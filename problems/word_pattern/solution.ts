function wordPattern(pattern: string, s: string): boolean {
    const first = {}, second = {};
    const t: string[] = s.split(' ');
    if(pattern.length != t.length) return false;

    for(let i = 0; i < pattern.length; ++i) {
        if(!first[pattern[i]] && !second[t[i]] || t[i] == 'constructor') {
            first[pattern[i]] = t[i];
            second[t[i]] = pattern[i];
        }
        console.log(first)
        console.log(second)

        if(first[pattern[i]] != t[i]) return false;
    }

    return true;
};