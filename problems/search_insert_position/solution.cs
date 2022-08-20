public class Solution {
    public int SearchInsert(int[] nums, int target) {
        int len = nums.Length;
        for(int i = 0; i < len; ++ i) {
            if(nums[i] == target || nums[i] > target) {
                return i;
            }
        }
        return len;
    }
}