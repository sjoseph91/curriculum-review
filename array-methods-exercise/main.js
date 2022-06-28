const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    alphabet = alphabet.toUpperCase();
    const result = [];

    for (let i = 0; i < people.length; i++){
        result.push(people[i]);
        for(let j = 0; j < alphabet.length; j++){
            result.push(alphabet[j]);
        }
    }
    return result;

}

console.log(forception(people, alphabet));