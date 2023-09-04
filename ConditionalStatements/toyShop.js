function toyShop(input) {
    let priceExcursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let count = puzzles + dolls + bears + minions + trucks;
    let sum = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    if (count >= 50) {
        sum = sum * 0.75;
    }
    let sumAfter = sum * 0.9;

    if (sumAfter >= priceExcursion) {
        console.log(`Yes! ${(sumAfter - priceExcursion).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceExcursion - sumAfter).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
