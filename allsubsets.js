var recursiveFunction = function (arr) {
    var len = arr.length;
    var curMember = arr[len - 1];
    if (len < 2) {
        return [arr];
    } else {
        var allOut = []
        var levelOut = recursiveFunction(arr.slice(0, len - 1));
        for(var i=0; i<len;i++){
            for (var j = 0; j < levelOut.length; j++) {
                var copy = levelOut[j].slice(0);
                copy.splice(i,0,curMember);
                allOut.push(copy);
            }
        }
        return allOut;
    }
}