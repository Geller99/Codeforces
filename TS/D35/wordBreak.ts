

const wordBreak = (s: string, dict: string[]): boolean => {
    const wordSet = new Set(dict);
    const memo = new Map<number, boolean>();  // index, T/F

    const canBreak = (start: number): boolean => {
        if(start === s.length) return true;

        if(memo.has(start)) return memo.get(start)!; // check cache/memo

        // try all possible cuts from current i to end of string
        for(let end = start + 1; end <= s.length; end++) {
            const substr = s.slice(start, end);

            if(wordSet.has(substr) && canBreak(end)){
                memo.set(start, true);
                return true;
            }
        }

        memo.set(start, false);
        return false;
    }
    return canBreak(0);
}