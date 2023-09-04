function vacation(input) {
    let index = 0;
    let excursionPrice = Number(input[index]);
    index++;
    let saved = Number(input[index]);
    index++;

    let countSpend = 0;
    let countDays = 0;

    while (saved < excursionPrice) {

        let action = input[index];
        index++;
        let currentSum = Number(input[index]);
        index++;
        countDays++;

        if (action === "spend") {
            countSpend++;
            saved -= currentSum;
            if (saved < 0) {
                saved = 0;
            }


        } else {
            saved += currentSum;
            countSpend = 0;


        }

        if (countSpend === 5) {
            console.log("You can't save the money.");
            console.log(`${countDays}`);
            return;
        }




    }

    console.log(`You saved the money for ${countDays} days.`);
}

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]);





