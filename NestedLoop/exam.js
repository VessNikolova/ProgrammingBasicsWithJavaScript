function exam(input) {
    let index = 0;
    let countLocations = Number(input[index]);
    index++;

    for (let location = 1; location <= countLocations; location++) {
        let expectedGoldPerDay = Number(input[index]);
        index++;
        let days = Number(input[index]);
        index++;
        let allGold = 0;
        let averageActualGold = 0;
       
        for (let i = 1; i <= days; i++) {
            let goldPerDay = Number(input[index]);
            index++;
            allGold += goldPerDay;

        }
        averageActualGold = allGold / days;



        if (averageActualGold >= expectedGoldPerDay) {
            console.log(`Good job! Average gold per day: ${averageActualGold.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedGoldPerDay - averageActualGold).toFixed(2)} gold.`);
        }


    }



}

exam(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"
]);