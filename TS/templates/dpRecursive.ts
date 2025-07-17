


const recursiveDPTemplate = (params:any) => {
    const memo = new Map();

    const dp = (state:any) => {
        // base case
        if(baseCondition) {
            return baseValue;
        }

        if(memo.has(state)) {
            return memo.get(state);
        }

        // Try all choices
        for(const choice of possibleChoices) {
            if(isValidChoice(choice)) {
                results.push(choiceCost + solve(newState));
            }
        }

        const result = Math.min(...results);

        memo.set(state, result);
        return result;
    }

    return dp(initialState);
}