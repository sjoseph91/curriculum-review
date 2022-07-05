function fizzBuzz(){
    let result = [];

    for (let i = 1; i <= 100; i++){
        if ( i % 3 === 0 && i % 5 === 0 ){
            result.push( "FizzBuzz" );
        }
        else if ( i % 3 === 0 ){
            result.push( "Fizz" );
        }
        else if ( i % 5 === 0 ){
            result.push( "Buzz" );
        }else{
            result.push( i );
        }
    }

    return result;
}

console.log(fizzBuzz())
console.log(fizzBuzzCounter(fizzBuzz()))

function fizzBuzzCounter(arr) {
    const result = {
        fizzbuzz: 0,
        fizz: 0,
        buzz: 0
    }

    arr.filter(elem => typeof elem === "string").forEach(elem => {
        if (elem.toLowerCase() === "fizz"){
            result.fizz++;
        }
        else if (elem.toLowerCase() === "buzz"){
            result.buzz++;
        }
        else if (elem.toLowerCase() === "fizzbuzz"){
            result.fizzbuzz++;
        }
        
    })

    return result;
    
}

