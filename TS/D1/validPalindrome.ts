


/**
 * 
 * 
 * Goal is to check if a valid string is a palindrome or not via the two pointer technique 
 */

const validPalindrome = (str: string) => {
    if (str.length === 0) return true;

    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if (str[left] !== str[right]) return false
        left++;
        right--;
    }

    return true;
}

