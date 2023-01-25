class Solution {
#define ll long long
public:
    int mySqrt(int x) {
        int left = 0, right = x;
        while(left < right){
            ll middle = left + (((ll)right - left + 1) >> 1);
            if(middle * middle <= (ll)x)
                left = middle;
            else
                right = middle - 1;
        }
        return left;
    }
};