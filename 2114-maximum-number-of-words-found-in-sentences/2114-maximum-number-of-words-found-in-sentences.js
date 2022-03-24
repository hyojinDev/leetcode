/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let num = 0;
    for(let i = 0; i < sentences.length; i++){
        let cur = sentences[i].split(' ').length
        num = num < cur ? cur : num
    }
    return num;
};