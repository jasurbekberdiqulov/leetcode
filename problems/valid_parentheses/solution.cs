public class Solution {
    private int stepForward(char s) {
        int val = 0;
        switch(s) {
            case '(': val = 1; break;
            case ')': val = -1; break;
            case '{': val = 2; break;
            case '}': val = -2; break;
            case '[': val = 3; break;
            case ']': val = -3; break;
            default: break;
        }
        return val;
    }
    public bool IsValid(string s) {
        Stack<int> stack = new Stack<int>();
        
        int len = s.Length;
        if(len % 2 == 1) return false;
        
        for(int i = 0; i < len; ++ i) {
            int openVal = stepForward(s[i]);
            if(stack.Count == 0 || openVal > 0) {
                stack.Push(openVal);
            } else {
                int closeVal = stack.Peek();
                if(openVal + closeVal == 0) {
                    stack.Pop();
                } else {
                    return false;
                }
            }
        }
        return stack.Count == 0;
    }
}