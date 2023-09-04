function logistics(input) {
    let packages = Number(input[0]);

    let busTon = 0;
    let truckTon = 0;
    let trainTon = 0;
    let price = 0;
    let allTons = 0;

    for (let i = 1; i <= packages; i++) {
        let weight = Number(input[i]);
        allTons += weight;
        if (weight <= 3) {
            busTon += weight;
            price += weight * 200;
        } else if (weight >= 4 && weight <= 11) {
            truckTon += weight;
            price += weight * 175;
        } else if (weight >= 12) {
            trainTon += weight;
            price += weight * 120;
        }

    }
    let average = price / allTons;
    console.log(average.toFixed(2));

    let bus = (busTon / allTons) * 100;
    let truck = (truckTon / allTons) * 100;
    let train = (trainTon / allTons) * 100;

    console.log(`${bus.toFixed(2)}%`);
    console.log(`${truck.toFixed(2)}%`);
    console.log(`${train.toFixed(2)}%`);

}

logistics(["4", "1", "5", "16", "3"]);