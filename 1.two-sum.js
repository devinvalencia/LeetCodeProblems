/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var indexOne, indexTwo = -1;

    for (var n = 0; n < nums.length; n++) {
        var balance = target - nums[n];
        indexOne = nums.indexOf(nums[n]);

        for (var m = n + 1; m < nums.length; m++) {
            if (nums[m] == balance) {
                indexTwo = nums.indexOf(nums[m]);
            }
        }

        if (indexTwo != -1) {
            n = nums.length;
        }
    }

    var indicies = [];
    indicies.push(indexOne);
    indicies.push(indexTwo);

    return indicies;
};
// @lc code=end