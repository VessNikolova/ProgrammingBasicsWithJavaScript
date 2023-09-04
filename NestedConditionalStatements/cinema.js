function cinema(input) {
    let type = input[0];
    let row = Number(input[1]);
    let colomn = Number(input[2]);

    let seats = row * colomn;
    let price = 0;
    if (type === "Premiere") {
        price = 12;
    } else if (type === "Normal") {
        price = 7.5;
    } else if (type === "Discount") {
        price = 5;
    }
    let sum = seats * price;
    console.log(`${sum.toFixed(2)} leva`);

}

cinema(["Premiere", "10", "12"]);