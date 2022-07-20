class Player{
    constructor(){
        this.name = "";
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
    }
    setName(namePicked){
        this.name = namePicked;
    }
    gotHit(){
        const currentStatus = this.status;
        if (currentStatus === "Powered Up"){
            this.status = "Big";
        }
        else if(currentStatus === "Big"){
            this.status = "Small";
        }
        else if (currentStatus === "Small"){
            this.status = "Dead";
        }
        else{
            this.status = "Dead";
        }
    }
    gotPowerup(){
        const currentStatus = this.status;
        if (currentStatus === "Powered Up"){
            this.hasStar = true;
        }
        else if(currentStatus === "Big"){
            this.status = "Powered Up";
        }
        else {
            this.status = "Big";
        }
        
    }
    addCoin(){
        this.totalCoins = this.totalCoins + 1;
    }
    print(){
        console.log(`
        Name: ${this.name}
        TotalCoins: ${this.totalCoins}
        Status: ${this.status}
        Has Star? : ${this.hasStar}
        `)
    }
}

const player1 = new Player()
player1.setName("Luigi");

const intervalID = setInterval(randomRange, 1000)

function randomRange(){

    let result = Math.floor(Math.random() * (2 - 0 + 1) );
    if (result === 0){
        player1.gotHit();
    }else if (result === 1){
        player1.gotPowerup();
    }else if (result === 2){
        player1.addCoin();
    }

    player1.print();
    if (player1.status === "Dead"){
        clearInterval(intervalID);
    }
}

