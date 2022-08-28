// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// var groupAnagrams = function (strs) {
//   //hash map
//   let hash = {};
//   for (let i = 0; i < strs.length; i++) {
//     //get current str in arr e.g. 'cat'
//     let curr = strs[i];

//     //sort the current string a-z e.g. 'act'
//     let sorted = curr.split("").sort().join("");
//     //check if the key exists on the current word that's being 
//     //sorted - if so push to that value to the []
//     //if not set the key to the current index sorted
//     if (hash[sorted]) {
//       hash[sorted].push(curr);
//     } else {
//       hash[sorted] = [curr];
//     }
//   }
//  return Object.values(hash)
// };




function groupAnagrams(strs) {
let hash = {}
for (let i = 0; i< strs.length; i++){
    let curr = strs[i]
    let sort = curr.split('').sort().join('')
    if (hash[sort]){
        hash[sort].push(curr)
    }else {
        hash[sort] = [curr]
    }
}
return Object.values(hash)
}
console.log(groupAnagrams(["tea", "tar", "eat", "bat", "tab", "ear", "art", "are"]))

let hash = {}
for (let i = 0; i < strs.length; i++){
    let curr = strs[i]
    let sorted = strs.split('').sort().join('')
    if(hash[sorted]){
        hash[sorted].push(curr)
    }else{
        hash[sorted] = curr
    }
    return Object.values(hash)
}