function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let category = "";
    let car = "";
    let price = 0;

    if (budget <= 100) {
        category = "Economy class";
        if (season === "Summer") {
            car = "Cabrio";
            price = budget * 0.35;
        } else {
            car = "Jeep";
            price = budget * 0.65;
        }
    } else if (budget > 100 && budget <= 500) {
        category = "Compact class";
        if (season === "Summer") {
            car = "Cabrio";
            price = budget * 0.45;
        } else {
            car = "Jeep";
            price = budget * 0.8;
        }
    } else if (budget > 500) {
        category = "Luxury class";
        car = "Jeep";
        price = budget * 0.9;
    }

    console.log(category);
    console.log(`${car} - ${price.toFixed(2)}`);


}

carToGo(["450", "Summer"]);