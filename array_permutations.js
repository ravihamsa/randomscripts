var printArrayFromIndex = function(index,arr){
    var out = '';
    var len =  arr.length;
     for(var i=0; i<len; i++){
        out+= arr[index] + ' ';
        index++;
        if(index >=len){
            index=0;
        }
     }
     console.log(out);
}

var iterateArray = function(arr){
    var len = arr.length;
    console.log(arr, 'in start')
    for(var j=0;j<len;j++){
        var tmp = arr[j];
        if(j!==0){
            arr[j] = arr[j-1];
            arr[j-1]=tmp;
        }    
        for(var i=0; i<len; i++){
            printArrayFromIndex(i, arr);
        }
        
        if(j!==0){
            arr[j-1] = arr[j];
            arr[j]=tmp;
        }  
    
    }
    console.log(arr, 'in end')
}


iterateArray([1,2,3,4,5,6,7,8])