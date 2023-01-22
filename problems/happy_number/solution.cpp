class Solution {
public:
    bool isHappy(int n) {
        int prevValue = 0, sum, digit, counter = 0;
        bool isHappyNum = false;
        while(1) {
            sum = 0;
            while(n) {
                digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            if(sum == 1) {
                isHappyNum = true;
                break;
            }
            if(prevValue == sum) break;
            n = sum;
            prevValue = n;

            counter ++;
            if(counter > 20) break;
        }
        return isHappyNum;
    }
};