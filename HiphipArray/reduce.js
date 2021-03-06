const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
]

//**Reduce**/
//1. Get the total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)
// console.log(totalMass)
//2. Get the total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height ,0)
// console.log(totalHeight)
//3. Get the total number of characters by eye color
const charactersByEyeColor  = characters.reduce((acc, cur) => {
    const color = cur.eye_color
    if(acc[color]){
        acc[color]++;
    }
    else {
        acc[color] =1;
    }
    return acc;
}, {})
// console.log(charactersByEyeColor)
//4. Get the total number of characters in all the character names
const totalNameChar = characters.reduce((acc, cur)=> acc + cur.name.length, 0)
// console.log(totalNameChar)


//5.Get total  gender
const charactersByGender = characters.reduce((acc, cur) => {
const gender = cur.gender;
if(acc[gender]){
    acc[gender] ++;
}
else {
    acc[gender] = 1;
}
return acc }
,{})
// console.log(charactersByGender)

const movies = [
    {
        genre: "comedy",
        producers: 2,
        actors: 6,
        language: "Spanish",
        closedCaption: true
    },
    {
        genre: "horror",
        producers: 1,
        actors: 4,
        language: "English",
        closedCaption: true

    },
    {
        genre: "horror",
        producers: 1,
        actors: 4,
        language: "English",
        closedCaption: true
    }
]

const totalActors = movies.reduce((acc, cur) => {
  return  acc + cur.actors
}, 0)
// console.log(totalActors)

const totalProducers = movies.reduce((acc, cur) => 
    acc + cur.producers
, 0)
// console.log(totalProducers)

const languagesOfMoviesCount = movies.reduce((acc, cur)=>{
    const movieLang = cur.language
    if(acc[movieLang]){
        acc[movieLang]++
    }else{
        acc[movieLang] = 1
    }
    return acc
},{}
)
console.log(languagesOfMoviesCount)