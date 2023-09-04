function tournamentForChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let totalSum = 0;
    let allWin = 0;
    let allLose = 0;

    for(let i =1; i<=days; i++){
        let game = input[index];
        index++;
        let winCount = 0;
        let loseCount = 0;
        let sum = 0;
        while(game!=="Finish"){
            let outplay = input[index];
            index++;
            if(outplay==="win"){
                sum+=20;
                winCount++;
            }else{
                loseCount++;
            }


            game=input[index];
            index++;
        }
        if(winCount>loseCount){
            totalSum+=sum*1.1;
            allWin++;
        }else{
            totalSum+=sum;
            allLose++;
        }
       
    }

    if(allWin>allLose){
        totalSum*=1.2;
        console.log(`You won the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    }

}

tournamentForChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"
]);