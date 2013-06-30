var recursiveFunction = function(count){
    if(count < 2){
        return count;
    }else{
        return recursiveFunction(count-1) + recursiveFunction(count-2);
    }
}


for(var i=0; i<20; i++){
    console.log(recursiveFunction(i));
}
