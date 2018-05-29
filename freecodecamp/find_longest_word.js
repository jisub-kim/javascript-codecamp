function findLongestWord(str) {
    var words = str.split(' ');
    var longest = '';
    for(var word of words){
        if(word.length > longest.length) longest = word;
    }
    return longest;
}
console.log(findLongestWord('Find longest words in sentence.'));