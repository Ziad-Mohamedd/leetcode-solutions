function isPalindrome(s: string): boolean {
    const validString = s.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase();
    let left = 0;
    let length = validString.length - 1;
    let right =length;
    while (left <= Math.floor(length/2)) {
      if(validString[left] !== validString[right]) {
          return false
      }
      left++;
      right--;
    }
  
    return true;
  }