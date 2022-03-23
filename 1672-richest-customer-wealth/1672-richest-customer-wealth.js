/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = 0;
    for(let key in accounts){
        num = 0;
        accounts[key].forEach((item, idx) => num += item )
        result = result < num ? num : result
    }
    return result;
};