function reverseWords(s: string): string {
    const result = s.trim().split(/\s+/);
    
    let stringSr = result.toString().replace(/,/g, ' ')
    
    const reversed = stringSr.split(' ')
    let left=0;
    let right=reversed.length - 1;

    while(left < right) {
        let temp = reversed[right];
        reversed[right] = reversed[left];
        reversed[left] = temp; 

        left++;
        right--;
    }


    const reversedString = reversed.toString().replace(/,/g, ' ');

    return reversedString;
};

console.log(reverseWords('hello       bug'))