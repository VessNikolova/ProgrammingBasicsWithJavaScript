function flowers(input) {
    let chrysanthemum = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemumPrise = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    if (season === "Spring" || season === "Summer") {
        chrysanthemumPrise = 2;
        rosesPrice = 4.1;
        tulipsPrice = 2.5;
    } else if (season === "Autumn" || season === "Winter") {
        chrysanthemumPrise = 3.75;
        rosesPrice = 4.5;
        tulipsPrice = 4.15;
    }

    if (holiday === "Y") {
        chrysanthemumPrise = chrysanthemumPrise * 1.15;
        rosesPrice = rosesPrice * 1.15;
        tulipsPrice = tulipsPrice * 1.15;

    }

    let sum = tulips * tulipsPrice + roses * rosesPrice + chrysanthemum * chrysanthemumPrise;
    let allFlowers = chrysanthemum + roses + tulips;

    if (season === "Spring" && tulips > 7) {
        sum = sum * 0.95;
    }
    if (season === "Winter" && roses >= 10) {
        sum = sum * 0.9;
    }
    if (allFlowers > 20) {
        sum = sum * 0.8;
    }

    let sumAfter = sum + 2;

    console.log(sumAfter.toFixed(2));




}

flowers(["2", "4", "8", "Spring", "Y"]);