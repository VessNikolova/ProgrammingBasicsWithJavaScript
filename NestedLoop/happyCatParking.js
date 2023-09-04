function happyCatParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);

    let sum = 0;

    for (let i = 1; i <= days; i++) {
        let daySum = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                daySum += 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                daySum += 1.25;
            } else {
                daySum += 1;
            }


        }
        sum += daySum;
        console.log(`Day: ${i} - ${daySum.toFixed(2)} leva`);
    }

    console.log(`Total: ${sum.toFixed(2)} leva`);
}

happyCatParking(["5", "2"]);