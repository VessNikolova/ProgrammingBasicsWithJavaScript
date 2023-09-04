function cleverLily(input) {
    let age = Number(input[0]);
    let priceWashMachine = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toySum = 0;
    let money = 0;
    let gift = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 1) {
            toySum += singleToyPrice;
        } else {
            gift += 10;
            money = (money + gift) - 1;
        }
    }
    let total = toySum + money;

    if (total >= priceWashMachine) {
        console.log(`Yes! ${(total - priceWashMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashMachine - total).toFixed(2)}`);
    }

}

cleverLily(["10", "170.00", "6"]);