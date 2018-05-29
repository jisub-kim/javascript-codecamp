function titleCase(str) {
    var words = str.toLowerCase().split(' ').map(function(elem) {
        return elem[0].toUpperCase() + elem.slice(1);
    });
    return words.join(' ');
}
console.log(titleCase("I'm a little tea pot"));