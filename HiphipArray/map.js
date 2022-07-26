const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    }
];
//Map iterate through each character and transform item in some way --> returns another array resulting from previous arrays
// const names = characters.map((character) => {
//     return character.name
// })
// // console.log(names)
// const heights = characters.map((character) => character.height)
// // console.log(heights)

// const minifiedRecords = characters.map(character => ({ 
//     name: character.name,
//     height: character.height
// }))
// // console.log(minifiedRecords)

// const firstNames = characters.map((character) => 
//     character.name.split(' ')[0]
// )
// console.log(firstNames)


//Practicing more:
//Array of all names
const names = characters.map((character) => {
   return character.name;
})
// console.log(names)

//Get all heights
const height = characters.map(character => {
    return character.height
})
// console.log(height)

//Get array of objs with just name and height prop
const minifiedRecords = characters.map((character)=>{
   return {
        name: character.name,
        height: character.height
    }
})
// console.log(minifiedRecords)

//Get array of firstnames only
const firstNames = characters.map((char)=>{
    return char.name.split(' ')[0]
})
console.log(firstNames)