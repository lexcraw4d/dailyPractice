//Parameters: A single array with multiple types of elements including numbers, strings, booleans
//Return: A single array with the same elements BUT the zeroes are moved to the other end of the array. The other elements should remain in the same location of in the array.
//Examples: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//Pseudocode: Iterate over the starting array and identify the 0's
//We could take the existing zeroes and move to the end of the array or we could count the zeroes, remove them, then append the correct num of zeroes to the end of the array

//proposed solution iterate through the org array and assign each value to a new array bucket depending on if 0 or not join the buckets together and output

function moveZeros (array) {
    let catchall = []
    let zeroes = []
    for (let i=0; i<array.length; i++){
        array[i] === 0 ? zeroes.push(array[i]) : 
        catchall.push(array[i])
    }
    console.log([...catchall, ...zeroes])
}
moveZeros([false,1,0,1,2,0,1,3,"a"])
