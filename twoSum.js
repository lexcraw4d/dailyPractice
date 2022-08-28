//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// test cases
//[2,7,11,15]
// 9
// [3,2,4]
// 6
// [3,3]
const twoSum = (nums, target) => {
    let hash = {}
    for (let i=0; i<nums.length; i++){
      let diff = nums[i]
        if(hash[target-diff] !== undefined){
              return [hash[target-diff], i]
        }
        hash[diff] = i
    }
  };