function demo(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;


    let totalWin = 0;
    let winDayCount = 0;
    let loseDayCount = 0;


    for (let i = 1; i <= days; i++) {
        let sport = input[index];
        index++;
        let winCount = 0;
        let loseCount = 0;
        let winDay = 0;

        while (sport !== "Finish") {
            sport = input[index];
            let action = input[index];
            index++;
            if (action === "win") {
                winDay += 20;
                winCount++;
            } else {
                loseCount++;
            }
            sport = input[index];
            action = input[index];
            index++;
        }
        if (winCount > loseCount) {
            totalWin += winDay * 1.1;
            winDayCount++;
        } else {
            totalWin += winDay;
            loseDayCount++;
        }

    }

    if (winDayCount > loseDayCount) {
        totalWin *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalWin.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalWin.toFixed(2)}`);
    }



}

demo(["2",
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
    "Finish",
]);