function isPalindrome(str) {
    var start = 0;    
    var end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return "It is not Palindrome String";
        }
        start++;
        end--;
    }

    return "It is Palindrome String";
}

var str1 = "madam";

console.log(isPalindrome(str1)); 



"hello" - "olleh"  || "madam" - "madam"