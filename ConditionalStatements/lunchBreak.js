function lunchBreak(input) {
    let series = input[0];
    let timeSeries = Number(input[1]);
    let timeBreak = Number(input[2]);

    let lunch = timeBreak * (1 / 8);
    let rest = timeBreak * (1 / 4);
    let watch = timeBreak - lunch - rest;

    if (watch >= timeSeries) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(watch - timeSeries)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(timeSeries - watch)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);


