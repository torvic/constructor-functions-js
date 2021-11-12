String.prototype.palindrome = function() {
	const string = this.split('').filter((el) => el !== ' ').join('')
	const reverseString = this.split('').reverse().filter((el) => el !== ' ').join('')
	const isPalindrome = (string === reverseString)
	return isPalindrome
}

console.log("anita lava la tina".palindrome());
console.log("prueba".palindrome());
