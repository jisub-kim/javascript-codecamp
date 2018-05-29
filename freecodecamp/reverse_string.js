function reverseString(str) {
    // var strArr = str.split('');
    // var reverseStrArr = strArr.reverse();
    // var reversedStr = reverseStrArr.join('');
    // return reversedStr;
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

function reverseString2(str) {
    var reversedStr = '';
    for(var i = str.length -1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;

}
console.log(reverseString2('hello'));