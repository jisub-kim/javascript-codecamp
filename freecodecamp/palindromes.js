function palindromes(str) {
    var reg = /[\W_]/g;
    var replacedStr = str.toLowerCase().replace(reg, '');
    // console.log(replacedStr);
    var reversedStr = replacedStr.split('').reverse().join('');
    // console.log(reversed);
    if(reversedStr === replacedStr) {
        return true;
    }else{
        return false;
    }
}
console.log(palindromes('test'));
console.log(palindromes('level'));
console.log(palindromes('Level'));
console.log(palindromes('_level'));
console.log(palindromes('A top, a level'));
console.log(palindromes('A level, level a'));
