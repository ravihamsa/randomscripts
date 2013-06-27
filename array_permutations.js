var printPermutations = function(arr){
    var len = arr.length;
    var curMember = arr[len-1];
    //console.log(len, curMember);
    if(len === 1){
        return [arr];
    }else{
        
        var out=[];
        for(var i=0; i<len; i++){
            var lenMinusOnePermutations = printPermutations(arr.slice(0, len-1));
            for(var j=0; j<lenMinusOnePermutations.length;j++){
                lenMinusOnePermutations[j].splice(i,0,curMember)
                out.push(lenMinusOnePermutations[j]);
            }            
        }
        return out;
    }
    
}

printPermutations(['a','b','c','d'])