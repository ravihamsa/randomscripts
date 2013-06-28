//check rotation string

var isSubString = function  (str,substr) {
	return str.indexOf(substr) !== -1;
}

var checkIfRotation = function(str1, str2){
	if(str1.length !== str2.length){
		return false;
	}
	
	var concatinatedString =  str1+str1;
	return isSubString(concatinatedString, str2);
}