const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"


// function forception(people, alphabet){
//     alphabet = alphabet.toUpperCase();
//     const result = [];

//     for (let i = 0; i < people.length; i++){
//         result.push(people[i]);
//         for(let j = 0; j < alphabet.length; j++){
//             result.push(alphabet[j]);
//         }
//     }
//     return result;

// }

// console.log(forception(people, alphabet));

// function capitalizeAndLosercase(str){
//     return str.toUpperCase().concat(str.toLowerCase());
// }

function capitalize(str){
    //capitalized any character that follows a space
    const capitalizedArray = [];

    str.split(" ").forEach(word => {
        capitalizedArray.push(word[0].toUpperCase() + word.slice(1));
    })
    return capitalizedArray.join(" ");
}

console.log(capitalize("hey friends! practice practice practice!"));