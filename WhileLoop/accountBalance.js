function accountBalance(input) {
    let transaction = Number(input[0]);
    index = 1;
    let balance = 0;
    while (transaction !== "NoMoreMoney") {
        let amount = Number(transaction);
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        transaction = input[index];
        index++;

    }

    console.log(`Total: ${balance.toFixed(2)}`);




}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);
