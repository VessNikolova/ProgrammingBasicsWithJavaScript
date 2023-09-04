function swimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let seconds1Meter = Number(input[2]);

    let resistance = Math.trunc((distance / 15)) * 12.5;
    let sum = distance * seconds1Meter + resistance;

    if (sum < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${sum.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(sum - recordSeconds).toFixed(2)} seconds slower.`);
    }
}

swimmingRecord(["55555.67", "3017", "5.03"]);
