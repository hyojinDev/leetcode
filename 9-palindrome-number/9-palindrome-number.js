/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // x로 들어온 값이 회문값이고 음수가 아니라면 ? true : false
    let reverseStr = String(x).split("").reverse().join("");
    if(reverseStr === String(x)){
        return true;
    }else{
        return false;
    }
};