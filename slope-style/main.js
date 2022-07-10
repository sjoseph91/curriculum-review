// function collectAnimals(...animals) {
//     console.log(animals);
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))
// //=> {
//     //     fruit: ["apple", "pear"],
//     //     sweets: ["cake", "pie"],
//     //     vegetables: ["carrot"]
//     //  }

// function parseSentence({location, duration}){
//   return `We're going to have a good time in ${location} for ${duration}`
// }

// console.log(parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks"
// }));

// function returnFirst(items){
//     const[firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }
// console.log(returnFirst(["Bill", "John"]));

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr;
//     return `My top three favorite activities are, ${firstFav},  ${secondFav}, and ${thirdFav}`;
// }



// console.log(returnFavorites(favoriteActivities))

// function combineAnimals(...arrays) {
//     let result = [];
//     arrays.forEach(arr => result.push(...arr));
//     return result;
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// const others = ["skunk", "goat", "sheep"]

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, others));

// // ["dog", "cat", "mouse", "jackolope", "platypus"]


// function product(...numbers) {

//   return numbers.reduce((acc, number) => acc * number
//   , 1)
// }
// console.log(product(2,3,4));

// function unshift(array, ...items) {
//   return items.concat(array);
// }

// console.log(unshift(["at", "the", "end"], 1, 2, 3, 4));

function populatePeople(names){
    return names.map(name => {

        const [firstName, lastName] = name.split(" ");
        return {firstName, lastName}
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]