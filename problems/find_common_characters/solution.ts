function commonChars(words: string[]): string[] {
    let word = words[0];
    const lenWords = words.length;
    
    for(let i = 0; i < lenWords; ++i) {
        if(words[i].length < word.length) word = words[i];
    }
    
    let char: string[] = [];
    let isAvailable: boolean;
    for(let i = 0; i < word.length; ++i) {
        isAvailable = true;
        for(let j = 0; j < words.length; ++j) {
            if(!words[j].includes(word[i])) isAvailable = false;
        }
        if(isAvailable){
            for(let j = 0; j < words.length; ++j) {
                words[j] = words[j].replace(word[i], '0');
            }
            char.push(word[i]);
        }
    }
    return char;    
};