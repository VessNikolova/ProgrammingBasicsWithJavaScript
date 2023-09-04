function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let totalFood = Number(input[index]);
    index++;

    let biscuit = 0;
    let catFood = 0;
    let dogFood = 0;
    let totalEaten = 0;

    for (let i = 1; i <= days; i++) {
        let dogCurrent = Number(input[index]);
        index++;
        let catCurrent = Number(input[index]);
        index++;
        let dayFood = 0;
        catFood += catCurrent;
        dogFood += dogCurrent;
        totalEaten += catCurrent + dogCurrent;
        dayFood = dogCurrent + catCurrent;
        if (i % 3 === 0) {
            biscuit += (dayFood * 0.1);

        }
    }

    let average = (totalEaten / totalFood) * 100;
    let catAverage = (catFood / totalEaten) * 100;
    let dogAverage = (dogFood / totalEaten) * 100;
    console.log(`Total eaten biscuits: ${Math.round(biscuit)}gr.`);
    console.log(`${average.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogAverage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catAverage.toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40",
]);