/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    current = 0;
    nums.forEach((item, idx) => {
        console.log(current+item)
        current = current + item
        return result.push(current);
    })
    return result;
};