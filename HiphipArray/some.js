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
];//SOME METHOD
//1.Is there at least one male character?
const oneMaleCharacter = characters.some((character) => {
    return character.gender === 'male';
})
console.log(oneMaleCharacter)
//2.Is there at least one character with blue eyes?
const oneBlueEyeCharacter = characters.some((character) => character.eye_color === 'blue' ) 
console.log(oneBlueEyeCharacter)
//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((character) => character.height > 210)
console.log(oneTallerThan210)
//4. Is there at least one character that has a mass less than 50?
const oneMassLessThan50 = characters.some((character) => character.mass < 50)
console.log(oneMassLessThan50)