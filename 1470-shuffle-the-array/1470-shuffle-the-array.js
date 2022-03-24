/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = [];
    let spliceArr = nums.splice(0, n)
    for(let i = 0; i < spliceArr.length; i++){
        result.push(spliceArr[i], nums[i]);
    }
    return result;
};