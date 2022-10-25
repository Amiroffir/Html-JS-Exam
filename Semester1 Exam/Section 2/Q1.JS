function isPalindrome(s) {
  let newStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reverseStr = newStr.split("").reverse().join("");
  return newStr === reverseStr;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
