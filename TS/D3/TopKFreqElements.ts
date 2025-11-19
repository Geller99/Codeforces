

/**
 * General concept
 * 
 * map through the array of "elements", maintain a hashmap with key as elements[i] and value as the frequency of element[i] as we iterate
 * return the k highest elements based on their values 
 */



const topKFrequentElements = (nums: number[], k: number) => {
    if(!nums) return 0;
    if (k > nums.length) return 0;

    let map = new Map();

    for(let num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
     }

    return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]);

}

console.log(topKFrequentElements([1,1,2,2,3,3,], 2));