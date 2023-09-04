function truckDriver(input) {
    let season = input[0];
    let kmMonth = Number(input[1]);

    let price = 0;
    
    if (season === "Spring" || season === "Autumn") {
        if (kmMonth <= 5000) {
            price = 0.75;
        } else if (kmMonth > 5000 && kmMonth <= 10000) {
            price = 0.95;
        } else if (kmMonth > 10000 && kmMonth <= 20000) {
            price = 1.45;
        }
    } else if (season === "Summer") {
        if (kmMonth <= 5000) {
            price = 0.9;
        } else if (kmMonth > 5000 && kmMonth <= 10000) {
            price = 1.1;
        } else if (kmMonth > 10000 && kmMonth <= 20000) {
            price = 1.45;
        }
    } else if (season === "Winter") {
        if (kmMonth <= 5000) {
            price = 1.05;
        } else if (kmMonth > 5000 && kmMonth <= 10000) {
            price = 1.25;
        } else if (kmMonth > 10000 && kmMonth <= 20000) {
            price = 1.45;
        }
    }

    let sum = (price * kmMonth) * 4;
    let sumAfter = sum * 0.9;

    console.log(sumAfter.toFixed(2));


}

truckDriver(["Summer", "3455"]);