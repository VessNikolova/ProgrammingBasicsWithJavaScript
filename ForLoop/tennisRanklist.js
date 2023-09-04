function tennisRanklist(input) {
    let tournirCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let points = 0;
    let winCount = 0;

    for (let i = 0; i <= tournirCount + 1; i++) {
        let outcome = input[i];
        if (outcome === "W") {
            winCount++;
            points += 2000;
        } else if (outcome === "F") {
            points += 1200;
        } else if (outcome === "SF") {
            points += 720;
        }
    }

    let average = points / tournirCount;
    let finalPoints = startingPoints + points;
    let winPercent = (winCount / tournirCount) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${winPercent.toFixed(2)}%`);
}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);
