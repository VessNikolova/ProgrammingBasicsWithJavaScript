function transportPrice(input) {
    let distance = Number(input[0]);
    let time = input[1];

    let price = 0;

    if (distance >= 100) {
        price = 0.06 * distance;
    } else if (distance >= 20) {
        price = 0.09 * distance;
    } else {
        if (time === "day") {
            price = 0.79 * distance + 0.7;
        } else {
            price = 0.90 * distance + 0.7;
        }
    }
    console.log(price.toFixed(2));


}

transportPrice(["5", "day"]);