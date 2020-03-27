const reverseString = function(str) {
    if (str.length === 2) return str.charAt(1) + str.charAt(0);
    else if (str.length === 3) return str.charAt(2) + str.charAt(1) + str.charAt(0);
    else return reverseString(str.slice(str.length/2, str.length)) + 
        reverseString(str.slice(0, str.length/2));
}

module.exports = reverseString
