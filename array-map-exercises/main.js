// function doubleNumbers(arr){
//     return arr.map(num => num * 2);
// }

// console.log(doubleNumbers([2, 5, 100])); 

// function stringItUp(arr){
//     return arr.map(num => num + "");
// }

// console.log(stringItUp([2, 5, 100]));

// function capitalizeNames(arr){
//     return arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase(0));
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// function namesOnly(arr){
//     return arr.map(obj => obj["name"]);
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// function makeStrings(arr){
//     const messages = {
//     overAge: "can go to the movies",
//     underAge: "is under age!!"
//     }

//     return arr.map(obj => {
//         if (obj.age > 18){
//             return `${obj.name} ${messages.overAge}`;
//         }else{
//             return `${obj.name} ${messages.underAge}`
//         }
//     })
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

function readyToPutInTheDOM(arr){
  return arr.map(obj => `<h1>${obj.name}</h1><h2>${obj.age}</h2>`)
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]