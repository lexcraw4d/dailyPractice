function containsDuplicates (nums) {
	const hashTable = new Map();

	for (let i = 0; i < nums.length; i++) {
            // console.log('current number:', nums[i])
            // console.log('current hashtable is:', hashTable)
		if (hashTable.has(nums[i])){
            // console.log('hashtable has so return true', hashTable)
            return true;}
		else hashTable.set(nums[i], true);
            // console.log('set hashTable:', hashTable)
	}
    // console.log('exiting and return', false)
	    return false
};

containsDuplicates([1,2,3,3,4,5])