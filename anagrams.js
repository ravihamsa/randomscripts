//anagrams


var getCharIndex = function (str){
	 var strIndex={};
	for(var i=0; i<str.length; i++){
		var character = str.charAt(i);
		if(strIndex[character]){
			strIndex[character]++;
		}else{
			strIndex[character] = 1;	
		}
	}	

	return strIndex;
}

var checkAnagrams = function checkAnagrams (str1, str2) {
	
	if(str1.length !== str2.length){
		return false;
	}

	var str1Index = getCharIndex(str1);
	var str2Index = getCharIndex(str2);

	for(var i in str1Index){
		if(str2Index[i] !== str1Index[i]){
			return false
		}
	}

	return true;
}