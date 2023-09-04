function matchTicket(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let transport = 0;

    if (people >= 1 && people <= 4) {
        transport = budget * 0.75;
    } else if (people >= 5 && people <= 9) {
        transport = budget * 0.6;
    } else if (people >= 10 && people <= 24) {
        transport = budget * 0.5;
    } else if (people >= 25 && people <= 49) {
        transport = budget * 0.4;
    } else if (people >= 50) {
        transport = budget * 0.25;
    }

    let price = 0;

    if (category === "VIP") {
        price = 499.99;
    } else if (category === "Normal") {
        price = 249.99;
    }

    let sumLeft = budget - transport;
    let sum = people * price;

    if (sumLeft>= sum) {
        console.log(`Yes! You have ${(sumLeft - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(sumLeft - leftover).toFixed(2)} leva.`);
    }

}

matchTicket(["1000", "Normal", "1"]);