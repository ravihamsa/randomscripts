//reverse string

function reverseString (str) {
	var counter = str.length-1;
	var out = ''
	while(counter > 0){
		out+=str.charAt(counter);
		counter--;
	}
	return out;

}
console.log(reverseString('ravi')) //'ivar'