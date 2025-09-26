function firstNonRepeatedChar(str) {
 // Write your code here
	let freq = {};
	for(let ch of str){
		freq[ch] = (freq[ch] || 0)+1;
	}
	for(let ch of str){
		if(freq[ch] == 1){
			return ch;
		}
	}
	return null;
	  
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
