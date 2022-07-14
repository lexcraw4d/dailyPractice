// function containsDuplicates (nums) {
// 	const hashTable = new Map();

// 	for (let i = 0; i < nums.length; i++) {
//             // console.log('current number:', nums[i])
//             // console.log('current hashtable is:', hashTable)
// 		if (hashTable.has(nums[i])){
//             // console.log('hashtable has so return true', hashTable)
//             return true;}
// 		else hashTable.set(nums[i], true);
//             // console.log('set hashTable:', hashTable)
// 	}
//     // console.log('exiting and return', false)
// 	    return false
// };

// containsDuplicates([1,2,3,3,4,5])

// function containsDup (nums) {
// //create hashmap to assign array key val pairs
//       const hashMap = new Map();

//       //loop through array
//       for(let i = 0; i < nums.length; i ++ ){
//       //check if has value if so return true
//             if(hashMap.has(nums[i])){
//                   return true
//             }
//       //if not then set that val to true
//             else(hashMap.set(nums[i]), true)
//       }
//       //otherwise return false
//       return false
// } 







function duplicates(nums){

}


console.log(duplicates([1,2,3,4,4,5,5]))