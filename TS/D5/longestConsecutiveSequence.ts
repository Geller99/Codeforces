

const longestConsecutiveSequence = (nums: number[]) => {

    const numSet = new Set(nums);
    let longest = 0;

    for(const num of numSet) {

        if(!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while(numSet.has(num + 1)){
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest
}   