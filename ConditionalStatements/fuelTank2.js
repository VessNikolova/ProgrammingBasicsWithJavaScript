function fuelTank2(input) {
    let fuel = input[0];
    let liters = Number(input[1]);
    let card = input[2];

    let price = 0;
    if (fuel === "Gas") {
        if (card === "Yes") {
            price = 0.93 - 0.08;
        } else {
            price = 0.93;
        }
    } else if (fuel === "Gasoline") {
        if (card === "Yes") {
            price = 2.22 - 0.18;
        } else {
            price = 2.22;
        }
    } else if (fuel === "Diesel") {
        if (card === "Yes") {
            price = 2.33 - 0.12;
        } else {
            price = 2.33;
        }
    }

    let sum = price * liters;

    if (liters >= 20 && liters <= 25) {
        sum = sum * 0.92;
    } else if (liters > 25) {
        sum = sum * 0.9;
    }

    console.log(`${sum.toFixed(2)} lv.`);




}

fuelTank2(["Gas", "30", "Yes"]);