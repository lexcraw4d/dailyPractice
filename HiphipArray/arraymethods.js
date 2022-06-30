//JS Nuggets
//Array iteration 8 methods
let nums = [10,20,30.21]
//forEach
nums.forEach((number, i) => console.log(number,i))

//map 
//takes in a function as argument and returns something for every index replacing old array
// const doubled = nums.map((number)=> number *2  )
// console.log(doubled)
//filter                            LUHan                                      q
//check each  item in the array to see if true or false if T puts back in arr if F not in arr returns NEWpollllllllllllllllllllllllllllllllllllll array
const ints = [2,3,4,5]
const doubled =  ints.filter((item, index) => 
 item % 2 === 0

)
console.log(doubled)
