function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let accommodation = "";
    let destination = "";
    let price = 0;
    
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.3;
            accommodation = "Camp";
        } else if (season === "winter") {
            price = budget * 0.7;
            accommodation = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.4;
            accommodation = "Camp";
        } else if (season === "winter") {
            price = budget * 0.8;
            accommodation = "Hotel";
        }
    } else if (budget > 1000) {
        destination = "Europe";
        if (season === "summer") {
            accommodation = "Hotel";
            price = budget * 0.9;
        } else if (season === "winter") {
            price = budget * 0.9;
            accommodation = "Hotel";
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${price.toFixed(2)}`);
}

journey(["50", "summer"]);