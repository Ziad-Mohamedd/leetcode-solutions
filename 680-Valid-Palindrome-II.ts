function validPalindrome(s: string): boolean {
  let i = 0, j = s.length-1;
  while (i < j) {
      if (s[i] !== s[j]) {
          return (isPalindrome2(s, i+1, j) || isPalindrome2(s, i, j-1));
  }
      i++;
      j--;
  }
  return true;
};


function isPalindrome2(s: string, i: number, j: number): boolean {
  while (i < j) {
      if (s[i] !== s[j]) return false
      i++;
      j--;
  }
  return true;
}