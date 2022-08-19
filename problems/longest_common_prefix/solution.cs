public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        string prefix = "", testPrefix = "", firstWord = strs[0];
        int len = strs.Length;
        
        //when we've an only value among the array
        if(len == 1) return firstWord;
        
        //otherwise we can continue comparisions as the follows
        for(int i = 0; i < firstWord.Length; ++ i) {
            testPrefix = prefix + firstWord[i];
            
            for(int j = 1; j < len; ++ j) {
                if(!strs[j].StartsWith(testPrefix)) {
                    return prefix;
                }
            }
            prefix += firstWord[i];
        }
        return prefix;
    }
}