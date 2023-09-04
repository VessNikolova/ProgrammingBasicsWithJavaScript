function travelling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let budget = Number(input[index]);
    index++;



    while (destination !== "End") {
        let sum = 0;
        while (sum < budget) {
            let currentSum = Number(input[index]);
            index++;
            sum += currentSum;
        }
        if (sum >= budget) {
            console.log(`Going to ${destination}!`);
        }

        destination = input[index];
        index++;
        budget = Number(input[index]);
        index++;
    }
}

travelling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"
]);