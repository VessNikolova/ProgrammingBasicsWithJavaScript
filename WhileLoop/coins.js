function coins(input) {
    let sumChange = Number(input[0]);
    sumChange = Math.round(sumChange * 100);

    let coinsCount = 0;

    while (sumChange > 0) {
        if (sumChange >= 200) {
            sumChange -= 200;
            coinsCount++;
        } else if (sumChange >= 100) {
            sumChange -= 100;
            coinsCount++;
        } else if (sumChange >= 50) {
            sumChange -= 50;
            coinsCount++;
        } else if (sumChange >= 20) {
            sumChange -= 20;
            coinsCount++;
        } else if (sumChange >= 10) {
            sumChange -= 10;
            coinsCount++;
        } else if (sumChange >= 5) {
            sumChange -= 5;
            coinsCount++;
        } else if (sumChange >= 2) {
            sumChange -= 2;
            coinsCount++;
        } else if (sumChange >= 1) {
            sumChange -= 1;
            coinsCount++;
        }
    }

    console.log(coinsCount);

}

coins(["2.73"]);