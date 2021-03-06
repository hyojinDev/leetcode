/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(n => nums.reduce((a, b) => a + (n > b ? 1 : 0), 0))
};