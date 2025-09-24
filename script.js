function firstNonRepeatedChar(str) {
 // Write your code here
	let freq = new Array(26).fill(1);
	for(let i = 0; i < str.length;i++){
		let asci = str.charCodeAt(i);
		//console.log(asci)
		let idx = asci - 97;
		freq[idx]++
	}
	let id = -1;
	for(let i = 0; i < freq.length;i++){
	    if(freq[i] == 2){
	        id = i;
	        break;
	    }
	}
	if(id == -1) return "null";
	let code = id + 97;
	let ans = String.fromCharCode(code)
	return ans;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
