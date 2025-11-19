


const lengthOfLongestSusbtring = (s: string) => {
    if(!s.length) return 0;

    let last_seen = {};
    let maxLength = 0;
    let left = 0;

    for(let right = 0; right < s.length; right++) {

        if(s[right] in last_seen) {
            left = Math.max(left, last_seen[s[right]]  + 1);
        }

        last_seen[s[right]] = right;
        maxLength = Math.max(maxLength, right - left + 1)
    }
 
return maxLength;
}