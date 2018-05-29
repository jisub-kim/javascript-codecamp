function largestNumberOfArray(arr) {
    var maxNumArr = [];
    for(var i=0; i < arr.length; i++){
        var tempMax = arr[i][0];
        for(var j=0; j<arr[i].length; j++){
            var currentElem = arr[i][j];
            if(currentElem >= tempMax) tempMax = currentElem;
        }
        maxNumArr.push(tempMax);
    }
    return maxNumArr;
}
console.log(largestNumberOfArray([[1,3,4,6],[152,32,42,1],[132,23,1231,13],[0]]));