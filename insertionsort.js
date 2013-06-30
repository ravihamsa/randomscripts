//O(n^2)
var insertionSort = function (arr) {
    var len = arr.length;
    for (var i = 1; i < arr.length; i++) {
        var j=i;
        var curMember = arr[i];
        while(j>0){
            if(arr[j-1]>arr[j]){
                var tmp = arr[j-1]
                arr[j-1] = arr[j];
                arr[j] = tmp;
                console.log('switch');
            }
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([4,3,3,2,1,5,9,8,6,7]))