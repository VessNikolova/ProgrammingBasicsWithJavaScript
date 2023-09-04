function gameOFIntervals(input) {
    let steps = Number(input[0]);

    let sumPoints = 0;
    let count0 = 0;
    let count10 = 0;
    let count20 = 0;
    let count30 = 0;
    let count40 = 0;
    let invalid = 0;

    for (let i = 1; i <= steps; i++) {
        let currentPoints = Number(input[i]);
        if (currentPoints >= 0 && currentPoints <= 9) {
            count0++;
            sumPoints += 0.2 * currentPoints;
        } else if (currentPoints >= 10 && currentPoints <= 19) {
            count10++;
            sumPoints += 0.3 * currentPoints;
        } else if (currentPoints >= 20 && currentPoints <= 29) {
            count20++;
            sumPoints += 0.4 * currentPoints;
        } else if (currentPoints >= 30 && currentPoints <= 39) {
            count30++;
            sumPoints += 50;
        } else if (currentPoints >= 40 && currentPoints <= 50) {
            count40++;
            sumPoints += 100;
        } else {
            invalid++;
            sumPoints = sumPoints / 2;
        }
    }
    console.log(sumPoints.toFixed(2));

    let count0Average = (count0 / steps) * 100;
    let count10Average = (count10 / steps) * 100;
    let count20Average = (count20 / steps) * 100;
    let count30Average = (count30 / steps) * 100;
    let count40Average = (count40 / steps) * 100;
    let invalidAverage = (invalid / steps) * 100;

    console.log(`From 0 to 9: ${count0Average.toFixed(2)}%`);
    console.log(`From 10 to 19: ${count10Average.toFixed(2)}%`);
    console.log(`From 20 to 29: ${count20Average.toFixed(2)}%`);
    console.log(`From 30 to 39: ${count30Average.toFixed(2)}%`);
    console.log(`From 40 to 50: ${count40Average.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidAverage.toFixed(2)}%`);
}


gameOFIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);


