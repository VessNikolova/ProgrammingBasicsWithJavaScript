function primePairs(input) {
    let start12 = Number(input[0]);
    let start34 = Number(input[1]);
    let end12 = Number(input[2]);
    let end34 = Number(input[3]);

    for (let i = start12; i <= start12 + end12; i++) {
        for (let j = start34; j <= start34 + end34; j++) {
            if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && j % 2 != 0 && j % 3 != 0 && j % 5 != 0 && j % 7 != 0) {
                console.log(`${i}${j}`);
            }
        }
    }
}

primePairs(["10", "20", "5", "5"]);