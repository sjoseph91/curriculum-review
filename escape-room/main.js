import readline from "readline-sync";
const name = readline.question("Welcome user, what is your name?  ");
console.log(`Hello ${name}`);


let gameOver = false;
let hasKey = false;
readline.setDefaultOptions({limit: [1, 2, 3]});

while(!gameOver){
    const selection = readline.question(`
        What would you like to do?
        [1] Put hand in hole
        [2] Find the key 
        [3] Open the door\n`);
    
    if ( selection === "1"){
        console.log("You have died  :(");
        gameOver = true;
    }
    else if ( selection === "2"){
        console.log("You have the key !" );
        hasKey = true;
    }
    else {
        if (hasKey){
            console.log("You opened the door because you had the key!");
            gameOver = true;
        }else{
            console.log("You don't have the key...")
        }
    }
    

    
    
}