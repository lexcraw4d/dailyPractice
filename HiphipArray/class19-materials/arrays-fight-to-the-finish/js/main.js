//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Shrek", " Star Wars", " Bobs Burgers", " Everything Everywhere All at Once"]



// let header = document.querySelector('h2');
// for(let i = 0 ; i < movies.length; i++){
//     header.innerText+= movies[i]
// }
// let appendMovies = movies.forEach((el, i) => {
//     header.innerText += movies[i]
// })

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let nums = [10,20,30]
nums.forEach((el,i) => {
    console.log(el+3)//both work
    
    console.log(nums[i]+3)
}
)


let numbers = [5, 13, 33, 67, 34]
//Find the average of all the numbers from question three
// let reduceNum = numbers.reduce((acc, cur) => 
//  acc += cur
// ,0 )/numbers.length-1
// console.log(reduceNum)