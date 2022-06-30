//Create an array of movies with at least three movies.
let movies = ['Holes', 'Bring it On', 'Back to the Future', 'Fight To The Finish']
//Using the array from above, store the first movie in a variable
// let movieOne = movies[0];
let movieOneAgain = movies.shift()
// let moviesForEach = movies.forEach((el, i, a) => {
//     console.log(el, i , a)
// })
console.log(moviesForEach)
// console.log(movieOne)
console.log(movieOneAgain)
//Get the length of the original array and store it in a new variable
let movieArrLength = movies.length;
console.log(movieArrLength)
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastElofArr = movies.pop();
let lastElofArrAgain = movies[movies.length - 1]
console.log(lastElofArr)