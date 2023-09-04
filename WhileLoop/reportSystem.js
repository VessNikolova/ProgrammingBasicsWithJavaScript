function reportSystem(input) {
    let index = 0;
    let charity = Number(input[index]);
    index++;

    let currentSum = input[index];
    index++;
    let countcash = 0;
    let countcard = 0;
    let count = 0;

    let cash = 0;
    let card = 0;

    while (currentSum !== "End") {
        currentSum = Number(currentSum);
        count++;
        if (count % 2 === 0) {
            if (currentSum < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                countcard++;
                card += currentSum;
            }
        } else {
            if (currentSum > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                countcash++;
                cash += currentSum;
            }
        }
        if ((card + cash) >= charity) {
            break;
        }




        currentSum = input[index];
        index++;
    }

    if ((card + cash) >= charity) {
        let averageCS = cash / countcash;
        console.log(`Average CS: ${averageCS.toFixed(2)}`);
        let averageCC = card / countcard;
        console.log(`Average CC: ${averageCC.toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }



}

reportSystem(["500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317",
]);