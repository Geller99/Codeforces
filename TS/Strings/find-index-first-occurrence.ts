// This function finds the index of the first occurrence of a substring (needle) in a string (haystack).

function strStr(haystack: string, needle: string): number {
    let result: number // Define the index of the first occurrence of needle in haystack

    if(haystack.includes(needle)){ // Check if needle is present in haystack
        result = haystack.indexOf(needle) // If present, find the index of the first occurrence of needle in haystack
    }
    else return -1 // If not present, return -1

    return result // Return the index of the first occurrence of needle in haystack
};