function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let isValid = season === "Spring" || season === "Summer" || season === "Winter";
    let price = 0;

    if (season === "Spring") {
        price = 3000;
        if (fishermen <= 6) {
            price = price * 0.9;
        } else if (fishermen >= 7 && fishermen <= 11) {
            price = price * 0.85;
        } else if (fishermen >= 12) {
            price = price * 0.75;
        }
    } else if (season === "Summer" || season === "Autumn") {
        price = 4200;
        if (fishermen <= 6) {
            price = price * 0.9;
        } else if (fishermen >= 7 && fishermen <= 11) {
            price = price * 0.85;
        } else if (fishermen >= 12) {
            price = price * 0.75;
        }
    } else if (season === "Winter") {
        price = 2600;
        if (fishermen <= 6) {
            price = price * 0.9;
        } else if (fishermen >= 7 && fishermen <= 11) {
            price = price * 0.85;
        } else if (fishermen >= 12) {
            price = price * 0.75;
        }
    }

    if (fishermen % 2 == 0 && isValid) {
        price = price * 0.95;
    }
    
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }

}

fishingBoat(["3000", "Summer", "11"]);