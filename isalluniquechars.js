//is all unique chars string;

var isAllUniqueChars = function  (str) {
	var len = str.length;
	var charIndex = {};
	var isUnique = true;
	for(var i=0; i<len;i++){
		var curChar = str.charAt(i);
		if(charIndex[curChar]){
			return false;
		}
		charIndex[curChar] = true;
	}
	return isUnique;
}

console.log(isAllUniqueChars('ravi')); //true
console.log(isAllUniqueChars('kavitha')); //false