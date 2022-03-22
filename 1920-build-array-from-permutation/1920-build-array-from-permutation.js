/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let result = nums.map((item, idx) => nums[item]);
    return result;
};