const longestPalindrome = (s: string): string => {
  if (!s.length) return "";
  
  let start = 0;
  let maxLength = 1;
  
  const expandAroundCenter = (left: number, right: number): number => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // Length of palindrome
  };
  
  for (let i = 0; i < s.length; i++) {
    // Check odd-length palindromes (center at i)
    const oddLength = expandAroundCenter(i, i);
    
    // Check even-length palindromes (center between i and i+1)
    const evenLength = expandAroundCenter(i, i + 1);
    
    const currentMaxLength = Math.max(oddLength, evenLength);
    
    if (currentMaxLength > maxLength) {
      maxLength = currentMaxLength;
      start = i - Math.floor((currentMaxLength - 1) / 2);
    }
  }
  
  return s.substring(start, start + maxLength);
};