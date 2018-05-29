function confirmEndsWith(str, target) {
    //return str.endsWith(target);
    // console.log(str.substr(-1));
    
    //if(str.substr(-target.length) === target) {
    //    return true;
    //}else{
    //    return false;
    //}
    
    return str.substr(-target.length) === target
}
console.log(confirmEndsWith('batman', 'man'));