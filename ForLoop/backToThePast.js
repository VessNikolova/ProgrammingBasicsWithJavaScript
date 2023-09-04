function toThePast(input) {
    let inheretance = Number(input[0]);
    let lastYear = Number(input[1]);
    let currentYears = 18;
    let expenses = 0;

    for (let i = 1800; i <= lastYear; i++) {
        if (i % 2 == 0) {
            expenses += 12000;
        } else {
            expenses += 12000 + 50 * currentYears;
        }
        currentYears++;

    }
    if (inheretance >= expenses) {
        console.log(`Yes! He will live a carefree life and will have ${(inheretance - expenses).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(expenses - inheretance).toFixed(2)} dollars to survive.`);
    }

}

toThePast(["50000", "1802"]);