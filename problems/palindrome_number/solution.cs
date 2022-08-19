public class Solution {
    public bool IsPalindrome(int x) {
        string v = x.ToString();
        int len = v.Length;
        for(int i = 0; i < len / 2; ++ i) {
            if(v[i] != v[len - i - 1]) return false;
        }
        return true;
    }
}