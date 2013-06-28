//replace all spaces with %20;

function replaceAllSpaces(str){
	//count spaces;
	var spaceCount = 0;
	for(var i=0; i<str.length; i++){
		if(str.charAt(i)===' '){
			spaceCount++;
		}
	}

	var out = '';
	for(var i=0; i<str.length; i++){
		var charachter = str.charAt(i);
		if(charachter === ' '){
			out+='%20';
		}else{
			out+=charachter;
		}
	}
	return out;

}