function dishwasher(input) {
    let index = 0;
    let bottles = Number(input[index]);
    index++;
    let totalDetergent = bottles * 750;

    let currentDishes = input[index];
    index++;
    
    let smallDish = 5;
    let bigDish = 15;
    let count = 0;
    let usedDetergent = 0;
    let countSmallDishes = 0;
    let countBigDishes = 0;

    while (currentDishes !== "End") {
        currentDishes = Number(currentDishes);
        count++;
        if (count % 3 === 0) {
            usedDetergent += bigDish * currentDishes;
            countBigDishes += currentDishes;
        } else {
            usedDetergent += smallDish * currentDishes;
            countSmallDishes += currentDishes;
        }

        if (usedDetergent > totalDetergent) {
            console.log(`Not enough detergent, ${usedDetergent - totalDetergent} ml. more necessary!`);
            return;
        }




        currentDishes = input[index];
        index++;
    }

    console.log("Detergent was enough!");
    console.log(`${countSmallDishes} dishes and ${countBigDishes} pots were washed.`);
    console.log(`Leftover detergent ${totalDetergent - usedDetergent} ml.`);




}

dishwasher(["2",
    "53",
    "65",
    "55",
    "End",
]);