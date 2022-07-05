function largest(arr){
    return arr.reduce((prev,current) => {
        if (current > prev){
            return current;
        }else{
            return prev;
        }
    })
}
// console.log(largest([3, 5, 2, 8, 1]))

function lettersWithStrings(arr, char){
    const result = [];

    arr.forEach(word => {
        if (word.indexOf(char) >= 0){
            result.push(word);
        }
    })
    return result;
}
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));

const isDivisible = (num1, num2) => num1 % num2 === 0;

console.log(isDivisible(15, 4));