function fuelTank(input) {
    let fuel = input[0];
    let liters = Number(input[1]);

    let isValid = (fuel === "Diesel") || (fuel === "Gasoline") || (fuel === "Gas");

    if (!isValid) {
        console.log("Invalid fuel!");
    } else {
        if (liters < 25) {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);

        } else {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        }
    }



}

fuelTank(["Diesel", "10"]);