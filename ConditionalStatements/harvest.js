function harvest(input) {
    let yard = Number(input[0]);
    let grape1Meter = Number(input[1]);
    let neededWine = Number(input[2]);
    let workers = Number(input[3]);
    
    let wineyard = yard * 0.4;
    let allGrapes = wineyard * grape1Meter;
    let wine = allGrapes / 2.5;

    if (wine < neededWine) {
        let missing = Math.floor(neededWine - wine);
        console.log(`It will be a tough winter! More ${missing} liters wine needed.`);
    } else {
        let more = (wine - neededWine);
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        let perWorker = more / workers;
        console.log(`${Math.ceil(more)} liters left -> ${Math.ceil(perWorker)} liters per person.`);

    }
}

harvest(["650", "2", "175", "3"]);