function trekkingMania(input) {
    let groups = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let sum = 0;

    for (let i = 1; i <= groups; i++) {
        let peopleCount = Number(input[i]);
        sum += peopleCount;
        if (peopleCount <= 5) {
            musala += peopleCount;
        } else if (peopleCount >= 6 && peopleCount <= 12) {
            monblan += peopleCount;
        } else if (peopleCount >= 13 && peopleCount <= 25) {
            kilimandjaro += peopleCount;
        } else if (peopleCount >= 26 && peopleCount <= 40) {
            k2 += peopleCount;
        } else if (peopleCount >= 41) {
            everest += peopleCount;
        }
    }

    let musalaPercent = (musala / sum) * 100;
    let monblanPercent = (monblan / sum) * 100;
    let kilimandjaroPercent = (kilimandjaro / sum) * 100;
    let k2Percent = (k2 / sum) * 100;
    let everestPercent = (everest / sum) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);
