function careOfPuppy(input) {
    let index = 0;
    let food = Number(input[index]);
    index++;
    let totalGrams = food * 1000;
    let eatenGrams = input[index];
    index++;

    let totalEaten = 0;

    while (eatenGrams !== "Adopted") {
        eatenGrams = Number(eatenGrams);
        totalEaten += eatenGrams;


        eatenGrams = input[index];
        index++;
    }

    if (totalEaten > totalGrams) {
        console.log(`Food is not enough. You need ${totalEaten - totalGrams} grams more.`);
    } else {
        console.log(`Food is enough! Leftovers: ${totalGrams - totalEaten} grams.`);
    }

}

careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);